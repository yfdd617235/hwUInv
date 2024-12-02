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
                whoarewetext1: "At HW USA Investments, we specialize in providing strategic investment and financial advisory services. We offer tailored solutions in financing, risk analysis, resource optimization, and expansion strategies, helping businesses reach their full economic potential.",
                whoarewetext2: "Our team of experts works directly with top management, ensuring precise execution and tangible results that drive sustainable growth.",
                mission: "Mission",
                missiontext: "We facilitate organizational growth through high-impact financial and investment consulting services, aimed at maximizing profitability and strengthening strategic decision-making.",
                vision: "Vision",
                visiontext: "To be the preferred strategic partner in investments and financial advisory, providing specialized knowledge and innovative solutions that drive long-term economic success.",
            },
            services: {
                services: "Services",
                card1title: "Investment Strategy Consulting",
                card1text: "We guide businesses in creating and implementing investment strategies designed to maximize growth and sustainable profitability.",
                card2title: "Corporate Financial Advisory",
                card2text: "We provide personalized financial analysis to optimize resource management, improve cash flow, and strengthen organizations' economic positions.",
                card3title: "Risk Management Consulting",
                card3text: "We assess and mitigate financial risks, offering strategies that protect assets and ensure safe, scalable growth.",
                card4title: "Investment Portfolio Optimization",
                card4text: "We deliver advanced solutions to optimize investment portfolios, ensuring a balance between risk and return to maximize capital.",
                card5title: "Financial Digital Transformation",
                card5text: "We support organizations in their financial digital transformation, implementing technologies that enhance efficiency and innovation in investment management.",
                card6title: "Expansion and Scalability Consulting",
                card6text: "We provide strategic advisory for business expansion, ensuring scalable and profitable processes that drive sustained growth.",
            },
            ourcustomers: {
                title: "Our Clients",
                carruseltext1: "Commitment to economic growth and profitability.",
                carruseltext2: "Personalized solutions for every investment.",
                carruseltext3: "Exclusive and strategic financial advisory.",
                carruseltext4: "Effective and scalable financial transformation.",
                title1: "100+ Satisfied Corporate Clients",
                text1: "We build strong relationships with businesses, providing investment consulting that drives growth and profitability.",
                title2: "200+ Successful Investment Projects",
                text2: "Each project is executed with precision and tailored to financial needs, ensuring superior results.",
                title3: "Coverage in 15+ Economic Sectors",
                text3: "We offer investment and advisory solutions across multiple industries, understanding the unique challenges of each sector.",
                title4: "95% Corporate Client Retention",
                text4: "Our dedication and focus on business profitability ensure lasting relationships and economic success.",
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
                whoarewetext1: "En HW USA Investments, nos especializamos en brindar asesoría estratégica en inversiones y crecimiento financiero. Proporcionamos soluciones personalizadas en financiamiento, análisis de riesgos, optimización de recursos y estrategias de expansión, ayudando a las empresas a alcanzar su máximo potencial económico.",
                whoarewetext2: "Nuestro equipo de expertos colabora directamente con la alta dirección, garantizando precisión en la ejecución y resultados concretos que impulsan el crecimiento sostenible.",
                mission: "Misión",
                missiontext: "Facilitamos el crecimiento económico de organizaciones mediante servicios de consultoría financiera y de inversiones, orientados a maximizar la rentabilidad y fortalecer la toma de decisiones estratégicas.",
                vision: "Visión",
                visiontext: "Ser el socio estratégico preferido en inversiones y asesoría financiera, proporcionando conocimientos especializados y soluciones innovadoras que impulsen el éxito económico a largo plazo.",
            },
            services: {
                services: "Servicios",
                card1title: "Consultoría en Estrategias de Inversión",
                card1text: "Guiamos a las empresas en la creación e implementación de estrategias de inversión diseñadas para maximizar el crecimiento y la rentabilidad sostenible.",
                card2title: "Asesoría Financiera Corporativa",
                card2text: "Proporcionamos análisis financieros personalizados para optimizar la gestión de recursos, mejorar el flujo de caja y fortalecer la posición económica de las organizaciones.",
                card3title: "Consultoría en Gestión de Riesgos",
                card3text: "Evaluamos y mitigamos riesgos financieros, proporcionando estrategias que protegen los activos y garantizan un crecimiento seguro y escalable.",
                card4title: "Optimización de Portafolio de Inversiones",
                card4text: "Brindamos soluciones avanzadas para optimizar portafolios de inversión, asegurando un balance entre riesgo y retorno para maximizar el capital.",
                card5title: "Transformación Financiera Digital",
                card5text: "Acompañamos a las organizaciones en su transformación digital financiera, implementando tecnologías que mejoran la eficiencia y la innovación en la gestión de inversiones.",
                card6title: "Consultoría en Expansión y Escalabilidad",
                card6text: "Ofrecemos asesoría estratégica para la expansión de negocios, asegurando procesos escalables y rentables que impulsan el crecimiento sostenido.",
            },
            ourcustomers: {
                title: "Nuestros Clientes",
                carruseltext1: "Compromiso con el crecimiento económico y la rentabilidad.",
                carruseltext2: "Soluciones personalizadas para cada inversión.",
                carruseltext3: "Asesoría financiera exclusiva y estratégica.",
                carruseltext4: "Transformación financiera efectiva y escalable.",
                title1: "100+ Clientes Empresariales Satisfechos",
                text1: "Construimos relaciones sólidas con empresas, brindando consultoría en inversiones que impulsa el crecimiento y la rentabilidad.",
                title2: "200+ Proyectos de Inversión Exitosos",
                text2: "Cada proyecto es ejecutado con precisión y adaptado a las necesidades financieras, garantizando resultados superiores.",
                title3: "Cobertura en 15+ Sectores Económicos",
                text3: "Ofrecemos soluciones de inversión y asesoría en múltiples sectores, comprendiendo los desafíos únicos de cada industria.",
                title4: "95% de Retención de Clientes Corporativos",
                text4: "Nuestra dedicación y enfoque en la rentabilidad empresarial aseguran relaciones duraderas y éxito económico.",
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
