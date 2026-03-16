export type Language = 'ko' | 'en' | 'es';

export const translations = {
  ko: {
    home: "홈",
    blog: "블로그",
    title: "타이어 튜닝 외경 계산기",
    subtitle: "타이어 인치업 시 발생하는 속도계 오차와 최저지상고 변화를 즉시 확인하세요.",
    factory: "순정 타이어",
    newTire: "변경 타이어",
    width: "단면폭",
    aspect: "편평비",
    wheel: "휠 크기",
    compare: "제원 비교",
    diameter: "전체 외경",
    sidewall: "사이드월",
    circum: "둘레",
    revsMile: "마일당 회전수",
    revsKm: "km당 회전수",
    diff: "차이",
    clearance: "최저지상고 변화",
    speedo: "속도계 정보",
    actualSpeed: "계기판 대비 실제 속도",
    whenReading: "계기판 표시",
    actualIs: "실제 주행속도",
    warning3: "외경 차이가 3%를 초과합니다. 브레이크 고장 위험 및 연비 저하가 발생할 수 있습니다.",
    warningGood: "외경 차이가 3% 이내로 안정적입니다.",
    shareForum: "포럼에 공유하기 (복사)",
    shopDeals: "타이어 특가 확인하기",
    blogTitle: "타이어 및 트럭 튜닝 가이드",
    blogSubtitle: "타이어 사이즈 선택, 기어비 튜닝, 오프로드 세팅에 관한 전문적인 가이드를 만나보세요.",
    readMore: "더 읽기",
    noPost: "이 언어로 작성된 글이 없습니다.",
    backToBlog: "블로그 목록으로",
    ctaTitle: "지금 내 타이어의 속도계 오차를 확인해보세요!",
    ctaSubtitle: "타이어 규격만 입력하면 직경 변화와 지상고를 즉시 알려줍니다.",
    ctaButton: "계산기 사용하기",
    legal: "법적 고지",
    contact: "문의하기",
    rights: "All rights reserved.",
    faqTitle: "자주 묻는 질문 (FAQ)",
    faqs: [
      {
        q: "타이어 외경 3% 오차 기준이 왜 중요한가요?",
        a: "차량의 속도계와 각종 전자제어 장비(ABS, VDC 등)는 순정 타이어 외경을 기준으로 세팅되어 있습니다. 3% 이상의 오차가 발생하면 속도계가 실제 속도와 맞지 않게 되고, 전자 장비가 오작동을 일으킬 위험이 크게 증가합니다."
      },
      {
        q: "인치업(휠 사이즈 증가)을 하면 연비가 떨어지나요?",
        a: "일반적으로 휠의 크기가 커지면 무게(회전 질량)가 증가하여 가속력 둔화와 연비 저하가 발생할 수 있습니다. 단, 단조 휠 등 경량 휠을 사용하면 이를 최소화할 수 있습니다."
      },
      {
        q: "이 계산기는 오프로드 타이어에도 적용되나요?",
        a: "네, 도로용 타이어뿐만 아니라 오프로드, 픽업트럭용 대형 타이어(33인치, 35인치 등) 규격 전환시에도 정확한 외경 및 속도계 오차 결과를 제공합니다."
      }
    ]
  },
  en: {
    home: "Home",
    blog: "Blog",
    title: "Lifted Truck Tire Clearance Calc",
    subtitle: "Instantly calculate speedometer error and ground clearance changes for your truck upgrade.",
    factory: "Factory Tire",
    newTire: "New Tire",
    width: "Width",
    aspect: "Profile",
    wheel: "Wheel",
    compare: "Comparison",
    diameter: "Overall Diameter",
    sidewall: "Sidewall",
    circum: "Circumference",
    revsMile: "Revs/Mile",
    revsKm: "Revs/Km",
    diff: "Difference",
    clearance: "Ground Clearance Change",
    speedo: "Speedometer Info",
    actualSpeed: "Actual speed vs Speedometer",
    whenReading: "When reading",
    actualIs: "Actual speed",
    warning3: "Diameter difference exceeds 3%. Risk of brake/ABS malfunction and poor MPG.",
    warningGood: "Diameter difference is within the safe 3% limit.",
    shareForum: "Copy to Forum / Reddit",
    shopDeals: "Shop Tire Deals",
    blogTitle: "Tire & Truck Tuning Guides",
    blogSubtitle: "Expert guides on tire sizing, gear ratios, and off-road builds.",
    readMore: "Read More",
    noPost: "No posts available in this language.",
    backToBlog: "Back to Blog",
    ctaTitle: "Calculate Your Tire Speedometer Error Now!",
    ctaSubtitle: "Enter your tire specs and get the diameter difference instantly.",
    ctaButton: "Use Calculator",
    legal: "Legal",
    contact: "Contact Us",
    rights: "All rights reserved.",
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqs: [
      {
        q: "Why is the 3% tire diameter difference rule important?",
        a: "Your vehicle's speedometer and electronic safety systems (like ABS and VDC) are calibrated to the factory tire diameter. Exceeding a 3% difference can cause inaccurate speed readings and potential malfunction of these critical safety systems."
      },
      {
        q: "Does upsizing wheels decrease fuel economy (MPG)?",
        a: "Generally, yes. Larger wheels usually weigh more, increasing the rotational mass. This can lead to slower acceleration and decreased fuel efficiency, unless you opt for lightweight forged wheels."
      },
      {
        q: "Does this calculator work for off-road and truck tires?",
        a: "Yes, this calculator is fully applicable to all types of tires, including adjusting to 33-inch or 35-inch off-road tires for trucks and SUVs, providing accurate speedometer error results."
      }
    ]
  },
  es: {
    home: "Inicio",
    blog: "Blog",
    title: "Calculadora de Neumáticos",
    subtitle: "Calcule instantáneamente el error del velocímetro y los cambios en la altura del suelo para su camioneta.",
    factory: "Neumático de fábrica",
    newTire: "Nuevo Neumático",
    width: "Ancho",
    aspect: "Perfil",
    wheel: "Llanta",
    compare: "Comparación",
    diameter: "Diámetro",
    sidewall: "Perfil",
    circum: "Circunferencia",
    revsMile: "Revs por Milla",
    revsKm: "Revs por Km",
    diff: "Diferencia",
    clearance: "Cambio de Altura",
    speedo: "Velocímetro",
    actualSpeed: "Velocidad real",
    whenReading: "Cuando marca",
    actualIs: "La real es",
    warning3: "La diferencia supera el 3%. Riesgo de fallo de frenos.",
    warningGood: "La diferencia está dentro del 3%.",
    shareForum: "Copiar para Foro",
    shopDeals: "Ver Ofertas de Neumáticos",
    blogTitle: "Guías de Neumáticos y Tuning",
    blogSubtitle: "Guías expertas sobre el tamaño de los neumáticos y el tuning todoterreno.",
    readMore: "Leer Más",
    noPost: "No hay publicaciones disponibles en este idioma.",
    backToBlog: "Volver al Blog",
    ctaTitle: "¡Calcula tu error de velocímetro ahora!",
    ctaSubtitle: "Ingresa las dimensiones y obtén la diferencia al instante.",
    ctaButton: "Usar calculadora",
    legal: "Legal",
    contact: "Contáctenos",
    rights: "Todos los derechos reservados.",
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqs: [
      {
        q: "¿Por qué es importante la regla del 3% de diferencia de diámetro?",
        a: "El velocímetro y los sistemas de seguridad electrónicos de su vehículo están calibrados para el diámetro del neumático de fábrica. Superar una diferencia del 3% puede causar lecturas de velocidad inexactas y un mal funcionamiento potencial de los sistemas de seguridad."
      },
      {
        q: "¿Aumentar el tamaño de las llantas disminuye el ahorro de combustible?",
        a: "Generalmente, sí. Las ruedas más grandes suelen pesar más. Esto puede llevar a una aceleración más lenta y una menor eficiencia de combustible, a menos que opte por llantas forjadas ligeras."
      },
      {
        q: "¿Esta calculadora funciona para neumáticos todoterreno y de camiones?",
        a: "Sí, esta calculadora es totalmente aplicable a todos los tipos, incluido el ajuste a neumáticos todoterreno de 33 o 35 pulgadas para camionetas y SUV, proporcionando resultados precisos de error del velocímetro."
      }
    ]
  }
};
