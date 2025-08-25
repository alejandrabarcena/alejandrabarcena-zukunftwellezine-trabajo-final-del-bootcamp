import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error during auth callback:', error);
          navigate('/?error=auth_failed');
          return;
        }

        if (data.session) {
          // Check if user profile exists, create if not
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.session.user.id)
            .single();

          if (profileError && profileError.code === 'PGRST116') {
            // Profile doesn't exist, create it
            const userData = data.session.user.user_metadata;
            await supabase
              .from('profiles')
              .insert({
                id: data.session.user.id,
                email: data.session.user.email,
                username: userData.full_name?.replace(/\s+/g, '').toLowerCase() || data.session.user.email.split('@')[0],
                first_name: userData.given_name || userData.full_name?.split(' ')[0] || '',
                last_name: userData.family_name || userData.full_name?.split(' ').slice(1).join(' ') || '',
                avatar_url: userData.avatar_url || userData.picture,
                role: 'user',
              });
          }

          // Redirect to home with success message
          navigate('/');
        } else {
          navigate('/?error=no_session');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        navigate('/?error=unexpected');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Authentifizierung wird verarbeitet...</p>
      </div>
    </div>
  );
};

export default AuthCallback;