// 📝 ARCHIVO DE CONFIGURACIÓN PRINCIPAL
// Aquí puedes cambiar TODA la información fácilmente

export const siteContent = {
  // 🏢 INFORMACIÓN DEL SITIO
  site: {
    name: "Zukunft Welle",
    tagline: "Digital Magazine",
    description: "Ein digitales Magazin für junge Internationale mit Leidenschaft für STEAM, Technologie, Kunst und Kultur. Wir erforschen die Zukunft aus verschiedenen Perspektiven.",
    // 🎨 CAMBIA AQUÍ TU LOGO (pon tu archivo en /public/)
    logo: "/1.png"
  },

  // 👩‍💼 TU INFORMACIÓN PERSONAL - CAMBIA AQUÍ TODO
  founder: {
    name: "Dr. Sarah Chen", 
    title: "Gründerin von Zukunft Welle",
    email: "sarah@zukunftwelle.com",
    // 📝 AQUÍ PONES TU BIOGRAFÍA COMPLETA EN ALEMÁN
    bio: `Dr. Sarah Chen ist eine renommierte Technologieforscherin und Visionärin mit über 15 Jahren Erfahrung in der Entwicklung zukunftsweisender digitaler Lösungen.
    
    Nach ihrem Studium der Informatik und Promotion in Künstlicher Intelligenz an der TU München, arbeitete sie bei führenden Tech-Unternehmen im Silicon Valley, bevor sie nach Deutschland zurückkehrte, um Zukunft Welle zu gründen.
    
    Ihre Mission ist es, komplexe Technologien für junge Menschen zugänglich zu machen und eine Brücke zwischen Innovation und Gesellschaft zu bauen.`,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // 🏠 TEXTOS DE LA PÁGINA PRINCIPAL
  home: {
    hero: {
      title: "Zukunft Welle",
      subtitle: "Digital Magazine", 
      description: "Ein digitales Magazin für junge Internationale mit Leidenschaft für STEAM, Technologie, Kunst und Kultur",
      cta: "Entdecke die Zukunft"
    },
    sections: {
      categories: "Unser Universum",
      articles: "Neueste Artikel", 
      podcast: "Unser Podcast",
      newsletter: "Werde Teil unserer Gemeinschaft"
    }
  },

  // 📄 TEXTOS DE LA PÁGINA ABOUT
  about: {
    title: "Über Zukunft Welle",
    subtitle: "Ein digitales Magazin für junge Internationale",
    // 📝 AQUÍ PONES LA DESCRIPCIÓN DE TU PROYECTO
    mission: `Hier kannst du die komplette Beschreibung deines Projekts einfügen.
    
    Erkläre was Zukunft Welle ist, was deine Mission ist, und was du erreichen möchtest.
    
    Dieser Text wird auf der About-Seite angezeigt.`,
    vision: "Hier kannst du deine Vision einfügen...",
    story: "Hier kannst du deine Geschichte einfügen..."
  },

  // 🧭 NAVEGACIÓN
  navigation: {
    articles: "Artikel",
    categories: "Kategorien",
    about: "Über Zukunft Welle", 
    contact: "Kontakt"
  }
};

// 📂 CATEGORÍAS - FÁCIL DE MODIFICAR
export const categories = [
  {
    id: 'codechaos',
    name: 'Codechaos',
    description: 'Programmierung und Softwareentwicklung',
    color: 'from-purple-500 to-pink-500',
    count: 8
  },
  {
    id: 'datenjunkies', 
    name: 'Datenjunkies',
    description: 'Data Science und Analytics',
    color: 'from-blue-500 to-cyan-500',
    count: 6
  },
  {
    id: 'maschinengefluster',
    name: 'Maschinengeflüster', 
    description: 'Künstliche Intelligenz und Machine Learning',
    color: 'from-green-500 to-emerald-500',
    count: 5
  },
  {
    id: 'grenzsprenger',
    name: 'Grenzsprenger',
    description: 'Kunst und kreative Technologie', 
    color: 'from-pink-500 to-rose-500',
    count: 3
  },
  {
    id: 'stimmenrausch',
    name: 'Stimmenrausch',
    description: 'Podcast und Audio-Inhalte',
    color: 'from-orange-500 to-red-500', 
    count: 2
  },
  {
    id: 'orakel-2-0',
    name: 'Orakel 2.0',
    description: 'Zukunftsprognosen und Trends',
    color: 'from-indigo-500 to-purple-500',
    count: 4
  }
];