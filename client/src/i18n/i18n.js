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
                message: "We drive your vision by connecting you with accredited experts and facilitating strategies designed to generate impact and results."
            },
            whoarewe: {
                whoarewe: "Who Are We?",
                whoarewetext1: "At HW USA Investments, we are a bridge between our clients and accredited experts in the financial and business sectors. We focus on providing strategic solutions that enhance efficiency and contribute to economic success.",
                whoarewetext2: "We work closely with leaders and management teams to ensure the implementation of innovative and personalized strategies, always oriented toward sustainable results.",
                mission: "Mission",
                missiontext: "We facilitate the connection between businesses and specialists in finance and investments, supporting processes and strategies that strengthen growth and improve decision-making.",
                vision: "Vision",
                visiontext: "To become the key partner for companies seeking to develop ideas, strategies, and effective alliances, ensuring a solid foundation for long-term economic success."
            },
            services: {
                services: "Services",
                card1title: "Investment Strategy Facilitation",
                card1text: "We connect our clients with accredited experts who can help design sustainable and personalized investment strategies.",
                card2title: "Resource Optimization Consulting",
                card2text: "We provide analysis and tools that support efficiency in resource utilization and economic flow for businesses.",
                card3title: "Risk Management",
                card3text: "We facilitate access to specialists who can evaluate financial risks and propose strategies to protect assets and foster growth.",
                card4title: "Portfolio Optimization",
                card4text: "We help companies optimize their portfolios by connecting them with experts who analyze the balance between risk and return.",
                card5title: "Digital Financial Transformation",
                card5text: "We support the transition toward financial digitalization, facilitating the implementation of innovative technological solutions.",
                card6title: "Scalability Consulting",
                card6text: "We provide tools to design sustainable expansion strategies, improving processes and strengthening growth."
            },
            ourcustomers: {
                title: "Our Customers",
                carruseltext1: "Commitment to effective solutions and tangible results.",
                carruseltext2: "Facilitation of personalized services with accredited experts.",
                carruseltext3: "Strategic collaboration supported by licensed specialists.",
                carruseltext4: "Driving innovative and scalable transformations.",
                title1: "100+ Satisfied Business Clients",
                text1: "We build strong relationships by supporting companies in implementing strategies that drive growth.",
                title2: "200+ Successful Strategic Projects",
                text2: "Each project reflects our commitment to quality and personalized attention.",
                title3: "Coverage in 15+ Economic Sectors",
                text3: "We offer support in various sectors, connecting companies with specialists who understand their specific challenges.",
                title4: "95% Retention Rate for Corporate Clients",
                text4: "Our dedication and focus on providing strategic solutions ensure lasting and trustworthy relationships."
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
            // jumbotron: {
            //     message: "Impulsando el crecimiento y la innovación a través de inversiones estratégicas y asesoría experta.",
            // },
            // whoarewe: {
            //     whoarewe: "¿Quiénes somos?",
            //     whoarewetext1: "En HW USA Investments, nos especializamos en brindar asesoría estratégica en inversiones y crecimiento financiero. Proporcionamos soluciones personalizadas en financiamiento, análisis de riesgos, optimización de recursos y estrategias de expansión, ayudando a las empresas a alcanzar su máximo potencial económico.",
            //     whoarewetext2: "Nuestro equipo de expertos colabora directamente con la alta dirección, garantizando precisión en la ejecución y resultados concretos que impulsan el crecimiento sostenible.",
            //     mission: "Misión",
            //     missiontext: "Facilitamos el crecimiento económico de organizaciones mediante servicios de consultoría financiera y de inversiones, orientados a maximizar la rentabilidad y fortalecer la toma de decisiones estratégicas.",
            //     vision: "Visión",
            //     visiontext: "Ser el socio estratégico preferido en inversiones y asesoría financiera, proporcionando conocimientos especializados y soluciones innovadoras que impulsen el éxito económico a largo plazo.",
            // },
            // services: {
            //     services: "Servicios",
            //     card1title: "Consultoría en Estrategias de Inversión",
            //     card1text: "Guiamos a las empresas en la creación e implementación de estrategias de inversión diseñadas para maximizar el crecimiento y la rentabilidad sostenible.",
            //     card2title: "Asesoría Financiera Corporativa",
            //     card2text: "Proporcionamos análisis financieros personalizados para optimizar la gestión de recursos, mejorar el flujo de caja y fortalecer la posición económica de las organizaciones.",
            //     card3title: "Consultoría en Gestión de Riesgos",
            //     card3text: "Evaluamos y mitigamos riesgos financieros, proporcionando estrategias que protegen los activos y garantizan un crecimiento seguro y escalable.",
            //     card4title: "Optimización de Portafolio de Inversiones",
            //     card4text: "Brindamos soluciones avanzadas para optimizar portafolios de inversión, asegurando un balance entre riesgo y retorno para maximizar el capital.",
            //     card5title: "Transformación Financiera Digital",
            //     card5text: "Acompañamos a las organizaciones en su transformación digital financiera, implementando tecnologías que mejoran la eficiencia y la innovación en la gestión de inversiones.",
            //     card6title: "Consultoría en Expansión y Escalabilidad",
            //     card6text: "Ofrecemos asesoría estratégica para la expansión de negocios, asegurando procesos escalables y rentables que impulsan el crecimiento sostenido.",
            // },
            // ourcustomers: {
            //     title: "Nuestros Clientes",
            //     carruseltext1: "Compromiso con el crecimiento económico y la rentabilidad.",
            //     carruseltext2: "Soluciones personalizadas para cada inversión.",
            //     carruseltext3: "Asesoría financiera exclusiva y estratégica.",
            //     carruseltext4: "Transformación financiera efectiva y escalable.",
            //     title1: "100+ Clientes Empresariales Satisfechos",
            //     text1: "Construimos relaciones sólidas con empresas, brindando consultoría en inversiones que impulsa el crecimiento y la rentabilidad.",
            //     title2: "200+ Proyectos de Inversión Exitosos",
            //     text2: "Cada proyecto es ejecutado con precisión y adaptado a las necesidades financieras, garantizando resultados superiores.",
            //     title3: "Cobertura en 15+ Sectores Económicos",
            //     text3: "Ofrecemos soluciones de inversión y asesoría en múltiples sectores, comprendiendo los desafíos únicos de cada industria.",
            //     title4: "95% de Retención de Clientes Corporativos",
            //     text4: "Nuestra dedicación y enfoque en la rentabilidad empresarial aseguran relaciones duraderas y éxito económico.",
            // },

            jumbotron: {
                message: "Impulsamos tu visión conectándote con expertos acreditados y facilitando estrategias diseñadas para generar impacto y resultados."
            },
            whoarewe: {
                whoarewe: "¿Quiénes somos?",
                whoarewetext1: "En HW USA Investments, somos un puente entre nuestros clientes y expertos acreditados en el ámbito financiero y empresarial. Nos enfocamos en proporcionar soluciones estratégicas que potencien la eficiencia y contribuyan al éxito económico.",
                whoarewetext2: "Colaboramos de cerca con líderes y equipos directivos para garantizar la implementación de estrategias innovadoras y personalizadas, siempre orientadas hacia resultados sostenibles.",
                mission: "Misión",
                missiontext: "Facilitamos la conexión entre empresas y especialistas en finanzas e inversiones, apoyando procesos y estrategias que fortalecen el crecimiento y mejoran la toma de decisiones.",
                vision: "Visión",
                visiontext: "Convertirnos en el socio clave para empresas que buscan desarrollar ideas, estrategias y alianzas efectivas, asegurando una base sólida para el éxito económico a largo plazo."
            },
            services: {
                services: "Servicios",
                card1title: "Facilitación de Estrategias de Inversión",
                card1text: "Conectamos a nuestros clientes con expertos acreditados que pueden ayudar a diseñar estrategias de inversión sostenibles y personalizadas.",
                card2title: "Consultoría para la Optimización de Recursos",
                card2text: "Brindamos análisis y herramientas que apoyan la eficiencia en el uso de recursos y el flujo económico de las empresas.",
                card3title: "Gestión de Riesgos",
                card3text: "Facilitamos el acceso a especialistas que pueden evaluar riesgos financieros y proponer estrategias para proteger activos y fomentar el crecimiento.",
                card4title: "Optimización de Portafolios",
                card4text: "Ayudamos a las empresas a optimizar sus portafolios conectándolas con expertos que analizan el balance entre riesgo y retorno.",
                card5title: "Transformación Financiera Digital",
                card5text: "Apoyamos en la transición hacia la digitalización financiera, facilitando la implementación de soluciones tecnológicas innovadoras.",
                card6title: "Consultoría para Escalabilidad",
                card6text: "Proveemos herramientas para diseñar estrategias de expansión sostenibles, mejorando procesos y fortaleciendo el crecimiento."
            },
            ourcustomers: {
                title: "Nuestros Clientes",
                carruseltext1: "Compromiso con soluciones efectivas y resultados tangibles.",
                carruseltext2: "Facilitación de servicios personalizados con expertos acreditados.",
                carruseltext3: "Colaboración estratégica respaldada por especialistas licenciados.",
                carruseltext4: "Impulso a transformaciones innovadoras y escalables.",
                title1: "100+ Clientes Empresariales Satisfechos",
                text1: "Construimos relaciones sólidas apoyando a las empresas en la implementación de estrategias que impulsan el crecimiento.",
                title2: "200+ Proyectos Estratégicos Exitosos",
                text2: "Cada proyecto refleja nuestro compromiso con la calidad y la atención personalizada.",
                title3: "Cobertura en 15+ Sectores Económicos",
                text3: "Ofrecemos apoyo en diversos sectores, conectando a empresas con especialistas que comprenden sus desafíos específicos.",
                title4: "95% de Retención de Clientes Corporativos",
                text4: "Nuestra dedicación y enfoque en brindar soluciones estratégicas aseguran relaciones duraderas y de confianza."
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
