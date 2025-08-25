# 🔐 Configuración de Autenticación con Google

## 📋 Pasos para configurar Google OAuth

### 1. 🏗️ Configurar Google Cloud Console

1. **Ir a Google Cloud Console:**
   - Visita: https://console.cloud.google.com/
   - Crea un nuevo proyecto o selecciona uno existente

2. **Habilitar Google+ API:**
   - Ve a "APIs & Services" > "Library"
   - Busca "Google+ API" y habilítala

3. **Crear credenciales OAuth:**
   - Ve a "APIs & Services" > "Credentials"
   - Clic en "Create Credentials" > "OAuth 2.0 Client IDs"
   - Tipo de aplicación: "Web application"
   - Nombre: "Zukunft Welle Auth"

4. **Configurar URLs autorizadas:**
   ```
   Authorized JavaScript origins:
   - http://localhost:5173 (para desarrollo)
   - https://zukunftwellefanzine.de (tu dominio)
   
   Authorized redirect URIs:
   - http://localhost:5173/auth/callback
   - https://zukunftwellefanzine.de/auth/callback
   ```

### 2. 🔧 Configurar Supabase

1. **Ir al Dashboard de Supabase:**
   - https://supabase.com/dashboard

2. **Configurar Google Provider:**
   - Ve a "Authentication" > "Providers"
   - Habilita "Google"
   - Pega tu Client ID y Client Secret de Google

3. **Configurar Site URL:**
   ```
   Site URL: https://zukunftwellefanzine.de
   Redirect URLs: https://zukunftwellefanzine.de/auth/callback
   ```

### 3. 📝 Variables de Entorno

Crea un archivo `.env` con:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
```

### 4. 🧪 Probar la Autenticación

1. **Desarrollo local:**
   ```bash
   npm run dev
   ```

2. **Hacer clic en "Mit Google anmelden"**

3. **Verificar que funciona:**
   - Se abre popup de Google
   - Usuario se autentica
   - Regresa a la aplicación logueado

### 5. 🚀 Despliegue

Una vez configurado todo:

1. **Actualizar URLs en Google Console** con tu dominio real
2. **Actualizar Supabase** con las URLs de producción
3. **Redesplegar** la aplicación

## ✅ Funcionalidades Incluidas

- ✅ **Login con Google** (un clic)
- ✅ **Registro con Google** (automático)
- ✅ **Login con email/password** (alternativo)
- ✅ **Registro con email/password** (alternativo)
- ✅ **Gestión de sesiones** (automática)
- ✅ **Redirección después del login** (a página principal)

## 🔍 Troubleshooting

**Error: "redirect_uri_mismatch"**
- Verifica que las URLs en Google Console coincidan exactamente

**Error: "Invalid client"**
- Verifica que el Client ID esté correcto en Supabase

**Error: "Access blocked"**
- Configura la pantalla de consentimiento OAuth en Google Console

## 📞 Soporte

Si tienes problemas, revisa:
1. Console del navegador para errores
2. Logs de Supabase Dashboard
3. Configuración de Google Cloud Console