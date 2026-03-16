import { Language } from "./translations";

export const extraTranslations: Record<Language, {
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    rights: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
  about: {
    title: string;
    missionTitle: string;
    missionContent: string;
    whyTitle: string;
    whyContent: string;
  };
}> = {
  ko: {
    footer: {
      tagline: "타이어 인치업 시 발생하는 속도계 오차와 지상고 변화를 가장 정확하게 계산해드립니다.",
      privacy: "개인정보 처리방침",
      terms: "서비스 이용약관",
      about: "소개",
      contact: "문의하기",
      rights: "All rights reserved."
    },
    privacy: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 3월 4일",
      sections: [
        {
          title: "1. 우리가 수집하는 정보",
          content: "본 서비스(타이어 튜닝 외경 계산기)는 100% 브라우저(Client-side) 상에서 동작합니다. 따라서 사용자가 입력하는 어떠한 규격 데이터도 서버로 전송, 수집, 저장되지 않습니다."
        },
        {
          title: "2. 쿠키 및 분석 도구",
          content: "서비스 개선을 위해 Google Analytics와 같은 표준 분석 도구를 사용할 수 있습니다. 이는 접속 횟수나 지역 등 비식별화된 데이터만 측정합니다."
        },
        {
          title: "3. 광고 (Google AdSense)",
          content: "본 웹사이트는 운영을 유지하기 위해 Google AdSense 광고를 게재할 수 있습니다. Google은 사용자의 브라우저 쿠키를 기반으로 관심 기반 광고를 게재할 수 있으며, 구글 광고 설정 페이지에서 언제든 맞춤설정 광고를 거부하실 수 있습니다."
        }
      ]
    },
    terms: {
      title: "서비스 이용약관",
      lastUpdated: "최종 업데이트: 2026년 3월 4일",
      sections: [
        {
          title: "1. 이용 약관 동의",
          content: "본 웹사이트 서비스에 접속하고 이용함에 있어, 사용자는 이 이용약관에 동의하는 것으로 간주합니다."
        },
        {
          title: "2. 서비스의 성격",
          content: "본 '타이어 튜닝 외경 계산기' 서비스는 무료로 제공되며, 입력된 데이터에 대한 어떠한 권리나 책임도 위임받거나 지지 않습니다."
        },
        {
          title: "3. 면책 조항",
          content: "이 도구에서 산출되는 '지상고 변화' 및 '속도계 오차'는 통계적인 추정치일 뿐이며, 법적 효력을 갖지 않으며 절대적인 기준이 될 수 없습니다. 실제 장착 시 간섭 여부는 반드시 전문가와 상의하세요."
        }
      ]
    },
    about: {
      title: "서비스 소개",
      missionTitle: "트럭 및 오프로드 마니아를 위한 도구",
      missionContent: "타이어 사이즈를 변경할 때 가장 고민되는 것은 속도계 오차와 간섭 여부입니다. 우리는 직관적인 비교를 통해 최적의 튜닝을 도와주는 정밀 계산 솔루션을 제공합니다.",
      whyTitle: "가장 빠르고 정확한 계산",
      whyContent: "본 서비스는 복잡한 수식 없이 타이어 규격만 입력하여 순식간에 데이터를 분석합니다. 어떠한 흔적도 서버에 남지 않으니 안심하고 사용하세요."
    }
  },
  en: {
    footer: {
      tagline: "The most accurate way to calculate speedometer error and ground clearance changes when upgrading tires.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      about: "About Us",
      contact: "Contact us",
      rights: "All rights reserved."
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 4, 2026",
      sections: [
        {
          title: "1. Information We Collect",
          content: "This service (Tire Size Calculator) operates 100% on the browser (Client-side). Therefore, any tire specs or data you enter are never transmitted, collected, or stored on our servers."
        },
        {
          title: "2. Cookies and Analytics",
          content: "We may use standard analytics tools like Google Analytics to improve our service. This only measures depersonalized data such as the number of visits or regions."
        },
        {
          title: "3. Advertising (Google AdSense)",
          content: "This website may serve Google AdSense ads to maintain operations. Google may serve interest-based ads based on your browser cookies. You can opt out of personalized ads at any time via the Google Ad Settings page."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 4, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using this website, you are deemed to have agreed to these Terms of Use."
        },
        {
          title: "2. Nature of the Service",
          content: "This 'Tire Size Calculator' service is provided free of charge, and we do not assume or delegate any rights or responsibilities for the data entered."
        },
        {
          title: "3. Disclaimer",
          content: "The 'Speedometer Error' and 'Ground Clearance' calculated by this tool are only statistical estimates, do not have any legal effect, and cannot be an absolute standard. Always consult a professional for actual fitting."
        }
      ]
    },
    about: {
      title: "About Us",
      missionTitle: "A tool for Truck & Off-road Enthusiasts",
      missionContent: "When upgrading tire sizes, the biggest concerns are speedometer accuracy and clearance. We provide an intuitive comparison to help you find the perfect setup through precision calculations.",
      whyTitle: "Fast and Accurate Calculation",
      whyContent: "This service analyzes tire specs in an instant by utilizing local computing resources. It leaves no trace on any server, ensuring total privacy."
    }
  },
  es: {
    footer: {
      tagline: "La forma más precisa de calcular el error del velocímetro y los cambios en el espacio libre al suelo al actualizar los neumáticos.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      about: "Sobre Nosotros",
      contact: "Contáctenos",
      rights: "Todos los derechos reservados."
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: 4 de marzo de 2026",
      sections: [
        {
          title: "1. Información que recopilamos",
          content: "Este servicio (Calculadora de Neumáticos) funciona 100% en el navegador (del lado del cliente). Por lo tanto, los datos de los neumáticos que ingrese nunca son transmitidos, recopilados ni almacenados en nuestros servidores."
        },
        {
          title: "2. Cookies y Analítica",
          content: "Podemos utilizar herramientas de análisis estándar como Google Analytics para mejorar nuestro servicio. Esto solo mide datos despersonalizados como el número de visitas o regiones."
        },
        {
          title: "3. Publicidad (Google AdSense)",
          content: "Este sitio web puede mostrar anuncios de Google AdSense para mantener las operaciones. Google puede mostrar anuncios basados en intereses según las cookies de su navegador. Puede optar por no recibir anuncios personalizados en la página de Configuración de Anuncios de Google."
        }
      ]
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización: 4 de marzo de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: "Al acceder y usar este sitio web, se considera que ha aceptado estos Términos de Uso."
        },
        {
          title: "2. Naturaleza del Servicio",
          content: "Este servicio de 'Calculadora de Neumáticos' se proporciona de forma gratuita, y no asumimos ni delegamos ningún derecho o responsabilidad sobre los datos ingresados."
        },
        {
          title: "3. Descargo de Responsabilidad",
          content: "El 'Error del Velocímetro' y el 'Espacio Libre' calculados son solo estimaciones estadísticas, no tienen ningún efecto legal y no pueden ser un estándar absoluto. Consulte siempre a un profesional."
        }
      ]
    },
    about: {
      title: "Sobre Nosotros",
      missionTitle: "Una herramienta para entusiastas de Camionetas y Off-road",
      missionContent: "Al actualizar el tamaño de los neumáticos, las mayores preocupaciones son la precisión del velocímetro y el espacio libre. Brindamos una comparación intuitiva para ayudarte a encontrar la configuración perfecta.",
      whyTitle: "Cálculo Rápido y Preciso",
      whyContent: "Este servicio analiza los datos de los neumáticos en un instante utilizando únicamente recursos locales. No deja rastro en ningún servidor, garantizando su privacidad."
    }
  }
};
