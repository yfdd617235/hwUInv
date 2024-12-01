// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en diferentes idiomas
const resources = {
    en: {
        translation: {
            navbar: {
                about: "Who We Are",
                clients: "Our Customers",
                services: "Services",
                contact: "Contact",
            },
            jumbotron: {
                message: "Driving growth and innovation through strategic investments and expert advice.",
            },
            whoarewe: {
                whoarewe: "Who Are We?",
                whoarewetext1: "At Imperium Capital, we specialize in providing strategic consulting tailored to senior management. We deliver customized solutions in finance, legal matters, technology, investments, and resource optimization, empowering business leaders to make critical decisions with confidence.",
                whoarewetext2: "Our team of experts collaborates directly with executive leadership, ensuring exclusive focus, precise execution, and tangible results that transform businesses.",
                mission: "Mission",
                missiontext: "We facilitate organizational growth and strength through high-impact consulting services, aimed at enhancing executive decision-making and maximizing corporate value.",
                vision: "Vision",
                visiontext: "To be the preferred strategic partner for senior management, providing specialized knowledge and innovative solutions that drive sustainable success for our clients.",
              },
              services: {
                services: "Services",
                card1title: "Strategic Business Consulting",
                card1text: "We advise senior management on defining and implementing business strategies that maximize efficiency and foster sustainable growth.",
                card2title: "Corporate Legal Consulting",
                card2text: "We offer specialized legal counsel for executives, addressing complex corporate issues, regulatory compliance, and legal risk mitigation.",
                card3title: "Investment Consulting",
                card3text: "We guide senior leadership in investment decision-making, offering detailed analysis and personalized strategies to maximize capital returns.",
                card4title: "Financial Optimization",
                card4text: "We provide advanced solutions for financial resource optimization, strengthening organizations’ economic positions and ensuring profitability.",
                card5title: "Digital Transformation",
                card5text: "We support companies through their digital transformation journey, implementing cutting-edge technologies to enhance operational efficiency and innovation.",
                card6title: "Corporate Governance Consulting",
                card6text: "We offer advisory services on corporate governance and leadership practices, strengthening strategic decision-making and organizational structures.",
              },
              ourcustomers: {
                title: "Our Clients",
                carruseltext1: "Commitment to quality in every strategic solution.",
                carruseltext2: "Tangible results for executive leadership.",
                carruseltext3: "Exclusive and personalized advisory services.",
                carruseltext4: "Effective transformation for successful leadership.",
                title1: "100+ Satisfied Executive Clients",
                text1: "We build trusted relationships with business leaders, delivering high-level consulting that drives organizational success.",
                title2: "200+ Strategic Projects Completed",
                text2: "Each project is executed with precision and tailored to senior management needs, ensuring superior outcomes.",
                title3: "Presence in 15+ Business Sectors",
                text3: "We provide strategic solutions to executives across multiple industries, understanding each sector’s unique challenges.",
                title4: "95% Executive Client Retention",
                text4: "Our dedication and exclusive focus on senior management guarantee long-lasting relationships and exceptional results.",
              },
              
            contact: {
                contact: "Contact",
                location: "Location"
            }

        },
    },
    es: {
        translation: {
            navbar: {
                about: "Quiénes Somos",
                clients: "Nuestros Clientes",
                services: "Servicios",
                contact: "Contacto",
            },
            jumbotron: {
                message: "Impulsando el crecimiento y la innovación a través de inversiones estratégicas y asesoría experta.",
            },
            whoarewe: {
                whoarewe: "¿Quiénes somos?",
                whoarewetext1: "En Imperium Capital, nos especializamos en ofrecer consultoría estratégica para la alta dirección. Proporcionamos soluciones personalizadas en finanzas, temas legales, tecnología, inversiones y optimización de recursos, ayudando a líderes empresariales a tomar decisiones críticas con confianza.",
                whoarewetext2: "Nuestro equipo de expertos trabaja directamente con la alta gerencia, garantizando un enfoque exclusivo, precisión en la ejecución y resultados tangibles que transforman los negocios.",
                mission: "Misión",
                missiontext: "Facilitamos el crecimiento y fortalecimiento de organizaciones mediante servicios de consultoría de alto impacto, orientados a mejorar la toma de decisiones ejecutivas y maximizar el valor empresarial.",
                vision: "Visión",
                visiontext: "Ser el socio estratégico preferido de la alta dirección, proporcionando conocimientos especializados y soluciones innovadoras que impulsen el éxito sostenible de nuestros clientes.",
              },
              services: {
                services: "Servicios",
                card1title: "Consultoría Estratégica de Negocios",
                card1text: "Asesoramos a la alta gerencia en la definición e implementación de estrategias empresariales que maximizan la eficiencia y fomentan el crecimiento sostenible.",
                card2title: "Consultoría Legal Corporativa",
                card2text: "Proporcionamos asesoría legal especializada para ejecutivos, abordando temas corporativos complejos, cumplimiento normativo y mitigación de riesgos legales.",
                card3title: "Consultoría en Inversiones",
                card3text: "Guiamos a la alta dirección en la toma de decisiones de inversión, con análisis detallados y estrategias personalizadas para maximizar el retorno de capital.",
                card4title: "Optimización Financiera",
                card4text: "Brindamos soluciones avanzadas para la optimización de recursos financieros, fortaleciendo la posición económica de las organizaciones y asegurando la rentabilidad.",
                card5title: "Transformación Digital",
                card5text: "Acompañamos a las empresas en su proceso de transformación digital, implementando tecnologías de vanguardia que potencian la eficiencia operativa y la innovación.",
                card6title: "Consultoría en Gobernanza Corporativa",
                card6text: "Ofrecemos asesoramiento en prácticas de gobernanza y liderazgo corporativo, fortaleciendo la toma de decisiones estratégicas y la estructura organizativa.",
              },
              ourcustomers: {
                title: "Nuestros Clientes",
                carruseltext1: "Compromiso de calidad en cada solución estratégica.",
                carruseltext2: "Resultados tangibles para la alta dirección.",
                carruseltext3: "Asesoría exclusiva y personalizada.",
                carruseltext4: "Transformación efectiva para un liderazgo exitoso.",
                title1: "100+ Clientes Ejecutivos Satisfechos",
                text1: "Construimos relaciones de confianza con líderes empresariales, brindando consultoría de alto nivel que impulsa el éxito organizacional.",
                title2: "200+ Proyectos Estratégicos Completados",
                text2: "Cada proyecto es ejecutado con precisión y adaptado a las necesidades de la alta dirección, asegurando resultados superiores.",
                title3: "Cobertura en 15+ Sectores Empresariales",
                text3: "Ofrecemos soluciones estratégicas a ejecutivos en múltiples industrias, comprendiendo los desafíos únicos de cada sector.",
                title4: "95% de Retención de Clientes Ejecutivos",
                text4: "Nuestra dedicación y enfoque exclusivo en la alta gerencia garantizan relaciones duraderas y resultados excepcionales.",
              },
              
            contact: {
                contact: "Contacto",
                location: "Ubicación"
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
