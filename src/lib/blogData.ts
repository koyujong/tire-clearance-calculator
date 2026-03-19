export interface BlogPost {
  slug: string;
  language: "ko" | "en" | "es";
  translationGroup: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  // ── Group 1: Speedometer Error Explained ──────────────────────────────────
  // ── Group 1: Speedometer Error Explained ──────────────────────────────────
  {
    slug: "why-bigger-tires-cause-speedometer-error",
    language: "en",
    translationGroup: "speedometer-error",
    title: "Why Larger Tires Cause Speedometer Error: The Ultimate Guide to Accuracy",
    description: "Upgrading truck tires? Learn the exact science of speedometer error, how to calculate it, and why a 3% change can trigger your ABS. Detailed guide inside.",
    date: "2026-03-04",
    category: "Tire Science",
    keywords: ["speedometer error calculation", "tire size accuracy", "oversized tires speedometer", "truck gear ratio", "ABS malfunction tires"],
    content: `
<img src="/truck_speedometer_error_illustration.png" alt="Truck speedometer error calculation between stock and 35 inch tires" style="width:100%; border-radius:8px; margin-bottom:20px;">
<h2>The Mathematical Reality of Speedometer Discrepancy</h2>
<p>When you decide to pull the trigger on a set of 35-inch mud terrains for your truck, you are likely thinking about the aggressive stance, the increased ground clearance, and the improved off-road traction. What many enthusiasts forget is that they are also performing a significant modification to their vehicle's primary instrumentation: the speedometer and odometer. In modern vehicles, speed isn't measured by a direct physical link to the road, but rather by the rotational velocity of the transmission output shaft or wheel speed sensors. This system relies on a hardcoded assumption: the factory tire diameter.</p>

<h3>Decoding the Calculation</h3>
<p>Your vehicle's Engine Control Module (ECM) calculates speed using a simple formula: <strong>Speed = (Rotational Velocity × Tire Circumference) / Gear Ratio</strong>. Since the circumference is directly tied to the diameter (Circumference = π × Diameter), any increase in the physical size of the tire results in a longer distance traveled for every single rotation. For example, a standard 31-inch tire has a circumference of roughly 97.3 inches. If you jump to a 35-inch tire, the circumference increases to about 109.9 inches. This 12.6-inch difference means that for every rotation, you are actually traveling over a foot further than the computer thinks you are.</p>

<h2>The Critical 3% Threshold for Modern Safety Systems</h2>
<p>While an inaccurate speedometer might seem like a minor annoyance—or a convenient excuse for a speeding ticket—the implications for modern safety electronics are profound. Most automotive engineers design Anti-lock Braking Systems (ABS), Electronic Stability Control (ESC), and Traction Control Systems (TCS) to operate within a very narrow margin of error, typically no more than <strong>plus or minus 3%</strong> of the stock tire diameter. </p>
<p>Exceeding this 3% threshold can lead to "ghost" sensor readings where the computer believes the wheels are locking up or losing traction simply because the rotational data doesn't match the expected values from the transmission. In extreme cases, this can lead to the ABS vibrating early or the traction control cutting power during a standard highway merge. If you are planning a jump larger than 3%, you must consider a digital recalibration tool like Forscan or an aftermarket programmer.</p>

<h2>How to Calculate Your Speedometer Error Percentage</h2>
<p>You can identify your specific error using a simple ratio. The formula is: <strong>(New Tire Diameter / Old Tire Diameter) - 1 = % Error</strong>. If your factory size was 31 inches and your new size is 33 inches, the calculation is (33/31) - 1 = 0.0645, or a 6.45% error. This means when your speedometer reads 60 MPH, your actual road speed is roughly 63.8 MPH. At triple-digit speeds or during long-distance road trips, this error compounds, leading to an odometer that significantly under-reports your actual mileage.</p>

<h3>Predicting Speed at Various Intervals</h3>
<ul>
  <li><strong>Readout 30 MPH:</strong> Actual Speed ~32 MPH</li>
  <li><strong>Readout 60 MPH:</strong> Actual Speed ~64 MPH</li>
  <li><strong>Readout 80 MPH:</strong> Actual Speed ~85 MPH</li>
</ul>

<h2>Frequently Asked Questions (FAQ)</h2>
<h3>1. Will larger tires affect my fuel economy accuracy?</h3>
<p>Yes, significantly. Since your odometer relies on tire rotations, a larger tire will cause the computer to think you've traveled a shorter distance than you actually have. If you calculate your MPG by dividing miles by gallons without adjusting for the tire error, your fuel economy will look worse than it actually is. You must multiply your trip mileage by your error factor (e.g., 1.06 for a 6% error) before calculating MPG.</p>

<h3>2. Can I fix this without buying a tuner?</h3>
<p>In some older cable-driven vehicles, you would replace the speedometer gear in the transmission. In modern vehicles (post-2010), the fix is almost always electronic. Many dealership service departments can recalibrate for common tire sizes, or you can use DIY tools like Forscan (for Ford) or JScan (for Jeep).</p>

<h3>3. Does tire pressure affect the speedometer?</h3>
<p>To a small degree, yes. A severely underinflated tire will have a shorter "rolling radius," effectively making it act like a smaller tire. However, the difference is usually less than 1% and is negligible compared to the error introduced by a 2-4 inch jump in total tire size.</p>

<h2>Conclusion: Data-Driven Upgrades</h2>
<p>Before you commit thousands of dollars to new rubber, you need a precise roadmap of how those tires will affect your vehicle's performance. Our <a href="/">Lifted Truck Tire Clearance Calc</a> is designed to give you that roadmap. By entering your specific factory and goal tire specs, you can see a side-by-side comparison of your actual speed vs. your speedometer reading, helping you make an informed decision on whether a recalibration is necessary for your build.</p>

<h3>Related Technical Guides:</h3>
<ul>
  <li><a href="/blog/how-to-use-forscan-correct-speedometer">Digital Speedometer Calibration with Forscan</a></li>
  <li><a href="/blog/truck-regearing-after-37-inch-tires">Why 37-Inch Tires Require Regearing</a></li>
  <li><a href="/blog/measuring-tire-clearance-before-you-buy">How to Measure Tire Clearance Like a Pro</a></li>
  <li><a href="/blog/how-tires-affect-ground-clearance">The Truth About Tires and Ground Clearance</a></li>
</ul>
`.trim()
  },
  {
    slug: "why-bigger-tires-cause-speedometer-error-ko",
    language: "ko",
    translationGroup: "speedometer-error",
    title: "왜 큰 타이어를 장착하면 속도계 오차가 발생할까? 정확도 가이드",
    description: "트럭 타이어 인치업을 계획 중이신가요? 속도계 오차의 과학적 원리와 3% 차이가 ABS에 미치는 영향을 상세히 알아봅니다.",
    date: "2026-03-04",
    category: "기술 가이드",
    keywords: ["속도계오차", "타이어인치업", "35인치타이어", "오프로드튜닝", "ABS오류"],
    content: `
<img src="/truck_speedometer_error_illustration.png" alt="순정 타이어와 35인치 타이어 간 트럭 속도계 오차 계산 일러스트" style="width:100%; border-radius:8px; margin-bottom:20px;">
<h2>속도계 불일치의 수학적 현실</h2>
<p>35인치 머드 타이어를 트럭에 장착하기로 했을 때, 많은 튜닝 마니아들이 공격적인 스탠스와 높아진 지상고, 오프로드 트랙션 향상에만 집중합니다. 하지만 차량의 핵심 장비인 속도계와 주행거리계를 원천적으로 변경하고 있다는 사실은 자주 잊곤 합니다. 현대 차량의 속도는 노면과의 직접적인 물리적 연결이 아니라, 휠 속도 센서의 회전 속도에 의해 측정됩니다. 이 시스템은 순정 타이어의 외경을 고정된 상수로 가정하고 계산합니다.</p>
<h3>계산 방식 해독하기</h3>
<p>차량의 ECM은 <strong>속도 = (회전 속도 × 타이어 둘레) / 기어비</strong>라는 공식을 사용합니다. 타이어 둘레(원주)는 직경에 파이(π)를 곱한 것이므로, 타이어 크기가 커지면 매 회전마다 이동하는 거리도 늘어납니다. 예를 들어, 표준 31인치 타이어의 둘레는 약 97.3인치입니다. 35인치 타이어로 변경하면 둘레는 약 109.9인치로 커집니다. 12.6인치의 차이는 타이어가 한 번 굴러갈 때마다 차량 컴퓨터가 생각하는 것보다 약 30cm 이상 더 멀리 이동한다는 뜻입니다.</p>
<h2>현대 안전 시스템의 임계값 3%</h2>
<p>부정확한 속도계가 사소한 성가심이나 과속 단속의 우연한 핑계거리로 보일 수 있지만, 현대 안전 전자장비에 미치는 영향은 심각합니다. 대부분의 자동차 엔지니어들은 ABS(잠김 방지 브레이크), ESC(전자식 차체 자세 제어 장치), TCS(트랙션 컨트롤)가 순정 타이어 외경의 <strong>±3% 오차 범위 내</strong>에서만 정상 작동하도록 설계합니다.</p>
<p>이 3%의 임계값을 초과하면 컴퓨터가 바퀴의 회전 데이터를 비정상으로 인식하여, 휠이 잠기거나 트랙션을 잃고 있다고 착각하는 "고스트(유령) 센서 읽기" 현상이 발생할 수 있습니다. 극단적인 경우 고속도로 합류 중 트랙션 컨트롤이 임의로 엔진 출력을 줄이거나 ABS가 작동할 수도 있습니다. 3% 이상의 오차가 발생하는 타이어로 교체한다면 반드시 Forscan이나 애프터마켓 프로그래머 같은 보정 도구를 사용해야 합니다.</p>
<h2>속도계 오차 비율 계산 방법</h2>
<p>이 오차를 식별하는 간단한 비율 공식은 다음과 같습니다: <strong>(새 타이어 직경 / 순정 타이어 직경) - 1 = % 오차</strong>. 순정이 31인치이고 새 타이어가 33인치라면, (33/31) - 1 = 6.45% 오차가 발생합니다. 즉, 속도계가 100km/h를 가리킬 때 실제 속도는 약 106.5km/h라는 의미입니다. 장거리 주행 시 이 오차가 누적되어 주행거리계가 실제보다 훨씬 짧은 거리를 기록하게 됩니다.</p>
<h3>구간별 실제 속도 예측</h3>
<ul>
  <li><strong>계기판 50km/h:</strong> 실제 약 53.2km/h</li>
  <li><strong>계기판 100km/h:</strong> 실제 약 106.5km/h</li>
  <li><strong>계기판 130km/h:</strong> 실제 약 138.4km/h</li>
</ul>
<h2>자주 묻는 질문 (FAQ)</h2>
<h3>1. 큰 타이어가 연비 측정에도 영향을 미치나요?</h3>
<p>네, 매우 큰 영향을 미칩니다. 주행거리계 역시 타이어 회전수에 의존하므로, 컴퓨터는 여러분이 실제 주행한 거리보다 더 짧게 달렸다고 기록합니다. 계기판의 주행거리를 주유량으로 나눠서 연비를 계산하면, 실제 연비보다 훨씬 나쁘게 나오게 됩니다. 정확한 연비를 알려면 (예: 6% 오차인 경우) 주행거리에 1.06을 곱해야 합니다.</p>
<h3>2. 튜너 없이 해결할 수 있나요?</h3>
<p>케이블 구동 방식의 구형 차량은 변속기의 스피드미터 기어를 교체해야 했습니다. 하지만 2010년 이후 생산된 현대적인 차량들은 대부분 전자식으로 수정합니다. 딜러십 방문을 통해 보정하거나, 포드의 Forscan, 지프의 JScan 같은 DIY 특화 도구를 사용하면 직접 보정할 수 있습니다.</p>
<h3>3. 타이어 공기압이 속도계에 영향을 미치나요?</h3>
<p>아주 약간은 사실입니다. 공기압이 심하게 부족한 타이어는 '구름 반경(rolling radius)'이 줄어들어 살짝 더 작은 타이어처럼 작동합니다. 그러나 이 차이는 대개 1% 미만이므로 2~4인치 인치업으로 인한 오차에 비하면 무시할 수 있는 수준입니다.</p>
<h2>결론: 데이터 기반의 업그레이드</h2>
<p>새 타이어에 수백만 원을 투자하기 전에, 그 타이어가 차량 성능에 어떤 영향을 미칠지 정확한 로드맵이 필요합니다. 저희 <a href="/">타이어 튜닝 외경 속도계 오차 계산기</a>는 바로 그 로드맵을 제공합니다. 순정 제원과 장착할 타이어 제원을 입력하여 속도계와 실제 속도, 안전 오차범위를 비교해 보고 재보정(캘리브레이션)이 필요한지 현명하게 판단하세요.</p>
<h3>관련 기술 가이드:</h3>
<ul>
  <li><a href="/blog/how-to-use-forscan-correct-speedometer">Forscan을 이용한 속도계 보정 방법</a></li>
  <li><a href="/blog/truck-regearing-after-37-inch-tires">37인치 장착 시 기어비 튜닝이 필수인 이유</a></li>
  <li><a href="/blog/measuring-tire-clearance-before-you-buy">구매 전 타이어 간섭 측정 완벽 가이드</a></li>
</ul>
`.trim()
  },
  {
    slug: "why-bigger-tires-cause-speedometer-error-es",
    language: "es",
    translationGroup: "speedometer-error",
    title: "¿Por qué los neumáticos grandes causan errores en el velocímetro?",
    description: "Aprenda la ciencia detrás de la discrepancia del velocímetro cuando actualiza a neumáticos de mayor diámetro.",
    date: "2026-03-04",
    category: "Ciencia de Neumáticos",
    keywords: ["error de velocímetro", "neumáticos grandes", "cálculo", "tuning", "seguridad"],
    content: `
<h2>La realidad matemática de la discrepancia del velocímetro</h2>
<p>Cuando decides colocar neumáticos de 35 pulgadas en tu camioneta, probablemente estás pensando en el aspecto agresivo, la mayor altura libre y la tracción mejorada en el campo. Sin embargo, también estás realizando una modificación significativa en el instrumento principal de tu vehículo: el velocímetro y el odómetro. En los vehículos modernos, la velocidad no se mide mediante un vínculo físico directo con la carretera, sino por la velocidad rotacional de los sensores de velocidad de las ruedas. Este sistema asume un diámetro de neumático de fábrica fijo.</p>

<h3>Decodificando el cálculo</h3>
<p>El módulo de control del motor (ECM) calcula la velocidad con la fórmula: <strong>Velocidad = (Velocidad Rotacional × Circunferencia del Neumático) / Relación de Transmisión</strong>. Un neumático estándar de 31" tiene una circunferencia de unos 247 cm. Si saltas a un neumático de 35", la circunferencia aumenta a unos 279 cm. Esta diferencia de 32 cm significa que, por cada rotación, tu vehículo recorre mucho más de lo que el ordenador cree.</p>

<h2>El umbral crítico del 3% para los sistemas de seguridad modernos</h2>
<p>Si bien un velocímetro impreciso puede parecer una molestia menor, las implicaciones para la electrónica de seguridad son profundas. Los sistemas ABS, ESC y TCS están diseñados para operar dentro de un margen muy estrecho, típicamente no más de <strong>más o menos un 3%</strong> del diámetro del neumático de fábrica.</p>
<p>Superar este umbral del 3% puede provocar lecturas de sensor "fantasma" donde el ordenador cree que las ruedas se están bloqueando simplemente porque los datos de rotación no coinciden con los valores esperados. Si planeas un cambio mayor al 3%, debes considerar una herramienta de recalibración digital como Forscan o un programador aftermarket.</p>

<h2>Cómo calcular el porcentaje de error del velocímetro</h2>
<p>La fórmula es: <strong>(Diámetro Nuevo / Diámetro Antiguo) - 1 = % de Error</strong>. Si tu tamaño de fábrica era 31" y el nuevo es 33", el cálculo es (33/31) - 1 = 6.45% de error. Cuando tu velocímetro marca 100 km/h, tu velocidad real es de aproximadamente 106.5 km/h.</p>

<h2>Conclusión: La actualización basada en datos</h2>
<p>Antes de invertir en nuevos neumáticos, usa nuestra <a href="/">Calculadora de Neumáticos para Camionetas</a> para ver una comparación detallada de la velocidad real frente a la del velocímetro y decidir si es necesaria una recalibración.
<h3>Guías relacionadas:</h3>
<ul>
  <li><a href="/blog/how-to-use-forscan-correct-speedometer">Calibración de velocímetro con Forscan</a></li>
  <li><a href="/blog/truck-regearing-after-37-inch-tires">Por qué los 37" requieren cambio de relación de transmisión</a></li>
</ul>
`.trim()
  },

  // ── Group 2: Lift Clearance ──────────────────────────────────────────────
  {
    slug: "how-tires-affect-ground-clearance",
    language: "en",
    translationGroup: "lift-clearance",
    title: "Tire Size vs. Ground Clearance: The Math Behind the Lift",
    description: "Want more ground clearance? Learn why tires are the ONLY way to raise your axles, and how to calculate the exact gain using the half-diameter rule. Math and guide inside.",
    date: "2026-03-03",
    category: "Truck Mods",
    keywords: ["ground clearance calculation", "lifted truck ground clearance", "axle lift tires", "35 inch tires vs lift kit", "chassis clearance truck"],
    content: `
<h2>The Fundamental Misconception of Ground Clearance</h2>
<p>When truck and SUV owners talk about "lifting" their vehicles, they are usually referring to installing a suspension lift kit. Whether it's a 2-inch spacer lift or a full 6-inch stage-2 suspension system, these mods certainly change the look and the "ride height" of the vehicle. However, there is a fundamental truth in off-roading that every owner must understand: **A suspension lift does not increase your axle ground clearance.**</p>
<p>In a vehicle with traditional straight axles (solid axles) or even independent suspension systems, the lowest points are generally the differential housings or the lower control arm mounts. A suspension lift raises the body and frame away from these points, but the points themselves remain at the exact same distance from the ground because they are still held up by the tires on the factory hubs. To raise the absolute lowest point of your truck, you must increase the diameter of the tires. In this guide, we dive deep into the mathematics of how tires translate to real-world clearance.</p>

<h2>Mastering the Half-Diameter Rule</h2>
<p>The math of ground clearance is elegant and simple. When you increase the size of your tires, you are increasing the radius of the wheel assembly. Since the axle sits in the center of that assembly, the lift you receive is exactly equal to the increase in the radius. We call this the **Half-Diameter Rule**. To see how this compares to a suspension lift, read our article on <a href="/blog/ground-clearance-math-3-inch-lift-vs-35s">Lift Kits vs. Larger Tires</a>.</p>
<p><strong>The Formula: Gain = (New Diameter - Old Diameter) / 2</strong></p>
<p>Let's look at a real-world example. If you are currently running a stock 31-inch tire (common on many half-ton trucks) and you decide to upgrade to a 35-inch "tall" tire, your total diameter increase is 4 inches. However, only 2 of those inches sit between the axle and the ground. The other 2 inches sit between the axle and the fender. Therefore, your actual ground clearance gain is 2 inches. While 2 inches may sound small, in the world of off-roading, it is the difference between sliding over a rock and cracking your differential housing on it.</p>

<h3>Related Articles:</h3>
<ul>
  <li><a href="/blog/ground-clearance-math-3-inch-lift-vs-35s">Lift Kits vs. Larger Tires</a></li>
  <li><a href="/blog/fitting-35s-on-stock-f150-leveling-kit">Fitting 35s on an F-150</a></li>
</ul>

<h3>Chassis Clearance vs. Axle Clearance</h3>
<p>It's important to differentiate between **Axle Clearance** (the distance from the lowest moving part to the ground) and **Chassis Clearance** (the distance from the frame rails or body to the ground). A suspension lift *only* increases chassis clearance. This improves your "breakover angle" (the ability to crest a hill without high-centering), but your axles are still hanging just as low. This is why tires are considered the most effective "true" lift for any off-road vehicle.</p>

<h2>Predicting Obstacle Clearance Gains</h2>
<p>When you use larger tires to gain clearance, you are also improving three critical metrics of off-road geometry:</p>
<ul>
  <li><strong>Approach Angle:</strong> The ability to climb onto an obstacle without hitting your front bumper. Larger tires move the contact patch forward of the bumper.</li>
  <li><strong>Departure Angle:</strong> The ability to drop off an obstacle without dragging your rear bumper or hitch.</li>
  <li><strong>Breakover Angle:</strong> The ability to clear a peak between your front and rear wheels.</li>
</ul>

<h2>Conclusion: Data-Driven Lift</h2>
<p>Before you commit to a lift kit, know the numbers. Our <a href="/">Tire Clearance Calculator</a> helps you visualize these gains.</p>
`.trim()
  },
  {
    slug: "how-tires-affect-ground-clearance-ko",
    language: "ko",
    translationGroup: "lift-clearance",
    title: "타이어 사이즈와 최저지상고의 상관관계: 산식 공개",
    description: "더 높은 지상고를 원하시나요? 왜 타이어만이 차축을 높이는 유일한 방법인지, 그리고 반지름의 법칙을 통해 정확한 상승분을 계산하는 방법을 알려드립니다.",
    date: "2026-03-03",
    category: "트럭 튜닝",
    keywords: ["지상고계산", "최저지상고", "차축이득", "35인치타이어", "리프트킷"],
    content: `
<h2>최저지상고에 대한 근본적인 오해</h2>
<p>트럭이나 SUV 오너들이 차량을 "리프트업" 한다고 말할 때, 대부분 서스펜션 리프트킷 (스페이서 리프트나 풀 서스펜션 시스템) 장착을 의미합니다. 이러한 튜닝은 분명 차량의 외관과 승차 전고를 눈에 띄게 바꿔줍니다. 하지만 오프로드에서 절대 잊지 말아야 할 근본적인 진실이 있습니다: <strong>서스펜션 리프트는 차축(Axle)의 최저지상고를 단 1mm도 높여주지 않습니다.</strong></p>
<p>솔리드 액슬(통차축)이나 독립식 서스펜션을 가진 차량에서 가장 낮은 지점은 보통 디퍼렌셜 하우징이나 로어 컨트롤 암 마운트입니다. 서스펜션 리프트는 이 하부 부품들로부터 '차체'와 '프레임'을 들어 올릴 뿐, 하부 부품 자체는 순정 타이어의 중심축에 그대로 묶여 있기 때문에 지면과의 거리가 변하지 않습니다. 차량의 '가장 낮은 곳'을 지면에서 위로 끌어올리는 유일한 방법은 타이어의 직경(외경)을 키우는 것뿐입니다. 이 글에서는 타이어가 어떻게 실제 오프로드 지상고를 높이는지 수학적으로 증명해 보겠습니다.</p>
<h2>반지름의 법칙 (The Half-Diameter Rule) 마스터하기</h2>
<p>최저지상고 계산의 핵심은 매우 단순하고 우아합니다. 타이어 크기를 키우면 바퀴의 전체 직경이 늘어나지만, 차축은 항상 바퀴의 정중앙에 위치합니다. 따라서 여러분이 얻게 되는 실제 차축 지상고의 상승분은 타이어 직경 증가분의 정확히 절반입니다. 이를 <strong>반지름의 법칙(Half-Diameter Rule)</strong>이라고 부릅니다.</p>
<p><strong>공식: 획득한 지상고 = (새 직경 - 순정 직경) / 2</strong></p>
<p>실제 사례를 보겠습니다. 만약 순정으로 31인치 타이어를 쓰다가 35인치 타이어로 업그레이드했다면, 타이어 전체 직경은 4인치가 커진 것입니다. 하지만 그 중 2인치는 차축과 지면 사이에 놓이고, 나머지 2인치는 차축과 펜더 사이에 놓이게 됩니다. 결과적으로 지상고 상승 효과는 '2인치'가 됩니다. 숫자로 보면 작아 보이지만 오프로드 험로 주행에서는 이 2인치(약 5cm)가 바위를 무사히 타고 넘느냐, 아니면 디퍼렌셜 하우징을 때리느냐를 가르는 엄청난 차이입니다.</p>
<h3>관련 기술 가이드:</h3>
<ul>
  <li><a href="/blog/ground-clearance-math-3-inch-lift-vs-35s">3인치 리프트 킷 vs 35인치 타이어</a></li>
  <li><a href="/blog/fitting-35s-on-stock-f150-leveling-kit">순정 F-150에 35인치 장착하기</a></li>
</ul>
<h3>차체 지상고 (Chassis) vs 차축 지상고 (Axle)</h3>
<p>여기서 <strong>차축 지상고(가장 낮게 움직이는 부품과 지면의 거리)</strong>와 <strong>차체 지상고(프레임 및 차체 하부와 지면의 거리)</strong>를 명확히 구분해야 합니다. 서스펜션 튜닝은 차체 지상고만 높입니다. 이는 배를 깔지 않고 언덕을 넘는 능력(램프각)을 키워주지만 차축은 여전히 낮습니다. 오프로드 전문가들이 타이어야말로 차량 전체를 띄우는 진정한 의미의 '리프트'라고 부르는 이유가 바로 여기에 있습니다.</p>
<h2>장애물 통과 능력 향상의 3가지 기하학적 요소</h2>
<p>더 큰 타이어를 장착하여 지상고를 높이면, 오프로드 기하학의 3대 핵심 지표가 동시에 개선됩니다:</p>
<ul>
  <li><strong>접근각 (Approach Angle):</strong> 앞 범퍼가 닿기 전에 장애물에 발을 걸치고 오를 수 있는 각도. 큰 타이어는 접지면을 앞 범퍼 쪽으로 전진시켜 줍니다.</li>
  <li><strong>이탈각 (Departure Angle):</strong> 장애물을 내려올 때 리어 범퍼나 트레일러 히치가 긁히지 않는 각도.</li>
  <li><strong>돌파각/램프각 (Breakover Angle):</strong> 프론트 타이어와 리어 타이어 사이에 위치한 피크 언덕을 배가 닿지 않고 넘어가는 각도. (타이어와 서스펜션 리프트가 모두 도움을 줍니다)</li>
</ul>
<h2>결론: 데이터에 기반한 리프트 계획</h2>
<p>서스펜션 리프트 세팅에 앞서 내가 장착할 타이어 사이즈부터 결정하는 것이 언제나 튜닝의 첫 번째 단계여야 합니다. <a href="/">타이어 튜닝 외경 속도계 오차 계산기</a>를 사용해 보유 차량의 순정 타이어와 목표 타이어 사이의 정확한 제원을 비교해보세요. 직경 차이에 따른 정확한 지상고 상승분(반지름의 법칙)을 계산해 드립니다.</p>
`.trim()
  },
  {
    slug: "how-tires-affect-ground-clearance-es",
    language: "es",
    translationGroup: "lift-clearance",
    title: "Diámetro de Neumáticos y Altura Libre al Suelo",
    description: "Descubra por qué los neumáticos son la única forma de elevar sus ejes y cómo calcular la ganancia exacta.",
    date: "2026-03-03",
    category: "Tuning",
    keywords: ["altura libre", "eje", "neumáticos", "off-road"],
    content: `
<h2>El concepto fundamental de la altura libre al suelo</h2>
<p>Cuando los dueños de camionetas hablan de "elevar" sus vehículos, generalmente se refieren a instalar kits de suspensión. Sin embargo, hay una verdad fundamental en el off-road: <strong>un kit de suspensión NO aumenta la altura libre de tu eje al suelo</strong>.</p>
<p>En un vehículo con ejes rígidos, los puntos más bajos son generalmente las carcasas del diferencial. Un kit de suspensión eleva la carrocería alejándola de estos puntos, pero los puntos en sí permanecen a la misma distancia del suelo. Para elevar el punto absoluto más bajo de tu camioneta, debes aumentar el diámetro de los neumáticos.</p>

<h2>Dominando la regla del medio diámetro</h2>
<p>La matemática de la altura libre es elegante y simple. Cuando aumentas el tamaño de los neumáticos, estás aumentando el radio del conjunto de ruedas. Dado que el eje está en el centro de ese conjunto, el aumento es exactamente igual al incremento del radio. Llamamos a esto la <strong>Regla del Medio Diámetro</strong>.</p>
<p><strong>La fórmula: Ganancia = (Diámetro Nuevo - Diámetro Antiguo) / 2</strong></p>
<p>Por ejemplo: con neumáticos de 31" y al pasar a 35", el aumento total del diámetro es 4 pulgadas. Sin embargo, solo 2 de esas pulgadas están entre el eje y el suelo. Las otras 2 pulgadas están entre el eje y el guardabarros. Por lo tanto, tu ganancia real de altura libre es de 2 pulgadas.</p>

<h3>Diferencia entre altura libre del chasis y del eje</h3>
<p>Es importante diferenciar entre la altura libre del eje (la distancia desde la pieza más baja en movimiento hasta el suelo) y la del chasis (la distancia del bastidor al suelo). Un kit de suspensión *solo* aumenta la altura del chasis. Esto mejora tu ángulo de paso, pero tus ejes siguen colgando igual de bajo. Por eso los neumáticos se consideran el "verdadero" elevador de cualquier vehículo off-road.</p>

<h2>Conclusión: Elevación basada en datos</h2>
<p>Antes de comprometerte con un kit de elevación, conoce los números. Nuestra <a href="/">Calculadora de Altura Libre para Neumáticos</a> te ayuda a visualizar estas ganancias.</p>
`.trim()
  },


  // ── Group 3: F-150 & Tacoma Specifics ──────────────────────────────────
  {
    slug: "fitting-35s-on-stock-f150-leveling-kit",
    language: "en",
    translationGroup: "f150-35s",
    title: "Fitting 35s on a Stock Ford F-150: The No-Trim Leveling Guide",
    description: "Want the 35-inch look on your F-150 without a massive lift kit? Discover the exact wheel offset, width, and leveling height needed to fit 35s without rubbing.",
    date: "2026-03-05",
    category: "Truck Mods",
    keywords: ["f150 35 inch tires no rub", "f150 leveling kit size", "ford f150 wheel offset 35s", "f150 crash bar rubbing", "best tires for leveled f150"],
    content: `
<h2>The 35-Inch Ambition: Achieving the Stance on a Budget</h2>
<p>The Ford F-150 is the unquestioned king of the American road, and for most owners, the ultimate aesthetic goal is fitting a 35-inch tire. While a standard 4-inch or 6-inch suspension lift makes fitting 35s trivial, many owners don't want the added cost, decreased fuel economy, or garage-clearance issues that come with a massive lift. This has lead to the rise of the "Leveled and 35ed" look. Can it be done? Yes. Is it easy? Only if you follow the math. In this guide, we break down how to fit 35s on a stock F-150 using only a leveling kit, while avoiding the dreaded "rub and scrub."</p>

<h3>Leveling Kit Height: 2\" vs. 2.5\"</h3>
<p>To clear a 35-inch tire vertically, you need to raise the front of your truck to match the rear. For 2015-2023 Ford F-150s, a 2-inch leveling kit is the bare minimum, but a **2.25-inch or 2.5-inch kit** is highly recommended to provide enough "up-travel" clearance for the tire when entering a driveway or hitting a bump while turning. Be cautious of going above 2.5 inches with spacers, as it can put extreme stress on your Upper Control Arm (UCA) ball joints and CV axles.</p>

<h2>The Golden Metric: Wheel Offset</h2>
<p>The most common mistake F-150 owners make is buying the "coolest looking" wheels without checking the offset. **Offset is the deciding factor in whether you will rub your crash bars.**</p>
<ul>
  <li><strong>Factory Wheels (+44mm offset):</strong> If you keep your factory 18 or 20-inch wheels, you can run a 35x11.50R20 or a 295/65R20 with zero trimming. The high positive offset keeps the tire "tucked" inside the wheel well, avoiding contact with the crash bars.</li>
  <li><strong>The "Flush" Look (+18mm to +20mm offset):</strong> This is the sweet spot. A wheel with an 18mm offset will move the tire out slightly for a wider stance. With a 35x11.50 or a narrow 35, you will likely clear everything. If you go to a full 12.5-wide tire, you may need minor plastic trimming on the front valance.</li>
  <li><strong>The Aggressive Look (0mm to Negative offset):</strong> Avoid these if you don't want to cut. A 0mm or -12mm wheel moves the tire so far out that the "swing radius" of the tire during a turn will slam into the front and rear crash bars. Unless you are willing to remove or spread your crash bars (which are vital for safety), 35s on 0mm wheels are not recommended for leveled-only trucks.</li>
</ul>

<h2>Dealing with the Crash Bars</h2>
<p>Since 2015, Ford has equipped F-150s with high-strength steel crash bars in front of and behind the front tires. These bars are designed to prevent the engine and wheels from entering the cabin during a small-overlap crash. **Do not cut them.** If you find your tires rubbing slightly at full lock, many owners choose to use a Porta-Power (a small hydraulic ram) to "spread" the bars by 0.5 to 1 inch. This creates the necessary clearance for 12.5-wide 35s without compromising the structural integrity of the bars.</p>

<h2>Conclusion: Stance with Safety</h2>
<p>Fitting 35s on an F-150 is a science. Use our <a href="/">F-150 Tire Clearance Tool</a> to get it right.</p>

<h3>Related Technical Guides:</h3>
<ul>
  <li><a href="/blog/measuring-tire-clearance-before-you-buy">How to Measure for Zero Rub Before Buying</a></li>
  <li><a href="/blog/how-to-use-forscan-correct-speedometer">Using Forscan to Fix F-150 Speedo Error</a></li>
  <li><a href="/blog/truck-regearing-after-37-inch-tires">Regearing Guide for Ford F-150s</a></li>
  <li><a href="/blog/rotational-mass-how-tire-weight-kills-mpg">How Heavy 10-Ply Tires Affect Performance</a></li>
</ul>
`.trim()
  },
  {
    slug: "fitting-35s-on-stock-f150-leveling-kit-ko",
    language: "ko",
    translationGroup: "f150-35s",
    title: "포드 F-150 순정에 35인치 타이어 장착하기: 레벨링킷 가이드",
    description: "대규모 리프트킷 없이 35인치 스타일을 원하시나요? 간섭 없이 35인치를 장착하기 위한 정확한 휠 오프셋과 레벨링 높이를 공개합니다.",
    date: "2026-03-05",
    category: "트럭 튜닝",
    keywords: ["F150 35인치 간섭", "레벨링킷", "포드F150오프셋", "크래시바간섭", "튜닝 가이드"],
    content: `
<h2>순정 F-150에 35인치 타이어 장착의 매력</h2>
<p>포드 F-150(특히 13, 14세대) 오너들이 가장 많이 물어보는 질문 중 하나입니다: "대규모 서스펜션 작업 없이 35인치 타이어를 넣을 수 있나요?" 정답은 "조건부로 가능합니다" 이며, 어떻게 세팅하느냐에 따라 트럭의 운명이 갈립니다.</p>
<h2>2인치 레벨링 킷의 역할</h2>
<p>순정 F-150은 짐을 실었을 때 차체가 수평을 유지하도록 앞쪽이 뒤쪽보다 낮게 설정된 '레이크(Rake)' 세팅을 가지고 출고됩니다. 2인치 레벨링 킷은 앞쪽 스트럿 위에 스페이서를 끼워넣어 앞쪽을 들려 수평을 맞춰주며, 앞바퀴 펜더 공간을 확확보해 줍니다. 35인치 타이어 장착을 위해서는 최소 2인치의 프런트 레벨링이 필수입니다.</p>
<h2>휠 오프셋의 마법사</h2>
<p>많은 사람들이 타이어 직경만 고민하지만, 간섭을 결정하는 더 핵심적인 요소는 휠의 오프셋(Offset)입니다. 오프셋이 맞지 않으면 35인치 타이어는 차를 박살냅니다.</p>
<ul>
  <li><strong>순정 휠 (+44 오프셋):</strong> 타이어가 차체 안쪽 깊숙이 위치합니다. 35x12.50 사이즈를 끼우면 상단 컨트롤 암(UCA)에 심하게 간섭을 유발합니다.</li>
  <li><strong>에프터마켓 휠 (-12 ~ 0 오프셋):</strong> 타이어를 바깥으로 뺍니다. UCA 간섭은 피할 수 있지만, 핸들을 끝까지 돌릴 때 타이어 바깥쪽 모서리가 크래시 바(Crash bar)나 플라스틱 펜더 라이너에 닿아 찢어질 수 있습니다.</li>
  <li><strong>최적의 오프셋 (+18 ~ +20):</strong> 가장 안전한 스윗스팟입니다. 간섭을 최소화하면서 35인치를 우겨넣을 수 있습니다.</li>
</ul>
<h2>타이어 폭의 선택: 좁을수록 유리하다</h2>
<p>35인치는 직경을 뜻합니다. 12.5인치 폭의 거대한 타이어보다는 <strong>285/75R18 (직경 약 34.8인치, 폭 11.2인치)</strong>이나 <strong>295/70R18</strong> 같은 좁은 폭의 35인치 타이어를 선택하세요. 간섭 스트레스를 없앨 수 있습니다.</p>
<h2>결론</h2>
<p>2인치 레벨링과 +18 오프셋 휠, 11~11.5인치 폭의 35인치 타이어 조합이 F-150 순정의 한계치입니다. 작업 전 반드시 <a href="/">계산기</a>로 세팅값을 확인하세요.</p>
`.trim()
  },
  {
    slug: "fitting-35s-on-stock-f150-leveling-kit-es",
    language: "es",
    translationGroup: "f150-35s",
    title: "Instalación de neumáticos de 35\" en Ford F-150 de serie",
    description: "¿Quieres el aspecto de 35 pulgadas sin un kit de elevación masivo? Guía de nivelación sin recortes.",
    date: "2026-03-05",
    category: "Tuning",
    keywords: ["f150", "35 pulgadas", "nivelación", "offset"],
    content: `
<h2>Ambición de 35 pulgadas: Lograr el stance con presupuesto</h2>
<p>El Ford F-150 es el rey indiscutible de la carretera americana, y para la mayoría de los propietarios, el objetivo estético definitivo es montar un neumático de 35 pulgadas. Aunque un kit de elevación de 4 a 6 pulgadas hace trivial montar neumáticos de 35", muchos propietarios no quieren el costo adicional ni los problemas de altura en el garaje. Esto ha dado lugar al look "Nivelado y con 35s".</p>

<h3>Altura del kit de nivelación: 2" vs. 2.5"</h3>
<p>Para alojar un neumático de 35" verticalmente, necesitas elevar la parte delantera de tu camioneta. Para los Ford F-150 del 2015 al 2023, un kit de nivelación de 2 pulgadas es el mínimo, pero se recomienda un kit de <strong>2.25" o 2.5"</strong> para tener suficiente espacio de "recorrido hacia arriba" cuando entras en una rampa o golpeas un bache al girar.</p>

<h2>La métrica dorada: El offset de la llanta</h2>
<p>El error más común que cometen los propietarios de F-150 es comprar las llantas que mejor se "ven" sin revisar el offset. <strong>El offset es el factor decisivo en si vas a rozar con las barras de impacto.</strong></p>
<ul>
  <li><strong>Llantas de fábrica (+44mm de offset):</strong> Puedes correr un 35x11.50R20 o 295/65R20 sin recortes. El alto offset positivo mantiene el neumático "metido" dentro del guardabarros, evitando el contacto con las barras de impacto.</li>
  <li><strong>El look "al ras" (+18mm a +20mm de offset):</strong> Este es el punto óptimo. Moverá el neumático ligeramente hacia afuera para una postura más amplia.</li>
  <li><strong>El look agresivo (0mm a offset negativo):</strong> Evítalos si no quieres cortar. Un offset 0mm o -12mm mueve el neumático tan hacia afuera que rozará con las barras de impacto delanteras y traseras.</li>
</ul>

<h2>Lidiando con las barras de impacto</h2>
<p>Desde 2015, Ford ha equipado los F-150 con barras de impacto de acero de alta resistencia. <strong>No las cortes.</strong> Si encuentras que tus neumáticos rozan ligeramente en la cerradura completa, puedes "separar" las barras con una gata hidráulica pequeña para crear el espacio necesario sin comprometer su integridad estructural.</p>

<h2>Conclusión: Estilo con seguridad</h2>
<p>Montar 35s en un F-150 es una ciencia. Usa nuestra <a href="/">Herramienta de Ajuste de Neumáticos</a> para hacerlo bien.</p>
`.trim()
  },

  {
    slug: "best-wheel-offset-12-5-wide-tires-tacoma",
    language: "en",
    translationGroup: "tacoma-offset",
    title: "Tacoma Wheel Offset Guide: Mastering 12.5-Wide Tires and 33s",
    description: "Toyota Tacomas have notoriously tight wheel wells. Learn the precise wheel offset, Cab Mount Chop (CMC) requirements, and UCA clearance needed to run wide 33s.",
    date: "2026-03-05",
    category: "Toyota Tacoma",
    keywords: ["tacoma wheel offset 33s", "tacoma 12.5 wide tires", "tacoma cab mount chop", "tacoma UCA clearance", "best wheels for tacoma lift"],
    content: `
<h2>The Toyota Tacoma Fitment Puzzle</h2>
<p>The Toyota Tacoma is a legend in the mid-size truck world, but it presents a unique challenge for those wanting to run aggressive tire setups. Unlike full-size trucks like the F-150 or Tundra, the Tacoma's wheel wells are relatively shallow and narrow. When you decide to upgrade to the quintessential "off-road look"—a 3-inch lift with 33x12.50 tires—you enter a world where millimeters matter. In this guide, we explore why wheel offset is the most important number on your spec sheet and how to achieve a rub-free setup on your Taco.</p>

<h3>The Anatomy of the Rub</h3>
<p>On a Tacoma, rubbing typically occurs in three distinct locations:</p>
<ol>
  <li><strong>The Upper Control Arm (UCA):</strong> If your offset is too high (tires are too far in), a 12.5-inch wide tire will slam into the UCA, especially during articulation.</li>
  <li><strong>The Cab Mount:</strong> This is a structural bracket behind the front wheel. Because the Tacoma's wheelbase is short, the tire "sweeps" very close to this mount during turns.</li>
  <li><strong>The Fender Liner & Bumper:</strong> The plastic at the front of the wheel well often needs minor trimming or "moving forward" via a bumper shim kit.</li>
</ol>

<h2>The Sweet Spot: 0mm to -12mm Offset</h2>
<p>After years of testing across thousands of builds in the Tacoma community, the consensus for a "balanced" build is a wheel offset between **0mm and -12mm**. </p>
<ul>
  <li><strong>0mm Offset:</strong> This typically places the tire flush with the edge of the fender flares (on trucks with TRD Off-Road or Sport flares). It provides enough clearance from the UCA for most 11.5-wide tires, but 12.5-wide tires may still be uncomfortably close to the suspension.</li>
  <li><strong>-12mm Offset:</strong> This is the most popular choice for 33x12.50R17 setups. It pushes the tire out just enough to clear the UCA and give an aggressive "poke" (about 1 inch past the fender). However, this added width increases the "scrub radius," meaning the tire swings a wider arc and will almost certainly hit the cab mount.</li>
</ul>

<h2>The Infamous Cab Mount Chop (CMC)</h2>
<p>If you want to run 33x12.50s on a Tacoma with any degree of off-road capability, you will likely need a **Cab Mount Chop (CMC)**. This involves cutting a triangular piece out of the steel cab mount bracket and welding in a heavy-duty reinforcement plate. This modification is purely external and does not affect the interior of the vehicle or its safety in a meaningful way, but it is necessary to provide the "clearance air" needed for large tires at full lock and full suspension compression.</p>

<h2>Frequently Asked Questions (FAQ)</h2>
<h3>1. Can I run 33s without a Cab Mount Chop?</h3>
<p>Yes, but you have to be very careful. If you run a narrow 33 (like a 255/80R17 "Pizza Cutter") on a wheel with a +10mm to +20mm offset, you can often clear the cab mount without cutting. However, you will lose the wide, aggressive stance that most owners desire.</p>

<h3>2. Do I need aftermarket Upper Control Arms (UCA)?</h3>
<p>If you lift your Tacoma more than 2 inches, you should install aftermarket UCAs. Not only do they provide better clearance for wider tires, but they also allow for increased caster adjustment, which helps center the wheel in the wheel well and move it away from the cab mount.</p>

<h3>3. Will 285/70R17 tires rub on a stock Tacoma?</h3>
<p>Yes. A 285/70R17 is roughly a 33-inch tire. On a stock Tacoma, it will rub the frame and the bumper. A 2-3 inch lift is required, along with appropriate wheel offset, to make this popular size fit correctly.</p>

<h2>Conclusion: Technical Precision</h2>
<p>The Tacoma is a precision tool, and its suspension tuning should reflect that. Don't guess when it comes to your wheel fitment. Use our <a href="/">Tacoma Wheel Offset and Tire Calc</a> to visualize the "Poke" and "Inboard" changes of your new setup. By seeing the exact distance your new 12.5-wide tires will sit from your suspension, you can decide if you're ready to perform a CMC or if a narrower setup is a better fit for your lifestyle.</p>

<h3>Related Technical Guides:</h3>
<ul>
  <li><a href="/blog/measuring-tire-clearance-before-you-buy">Professional Tire Clearance Measurement Techniques</a></li>
  <li><a href="/blog/pizza-cutters-vs-wide-tires-snow-performance">Narrow vs. Wide Tires: Snow & Mud Performance</a></li>
  <li><a href="/blog/rotational-mass-how-tire-weight-kills-mpg">Why Heavy Tires Ruin Tacoma Acceleration</a></li>
  <li><a href="/blog/ground-clearance-math-3-inch-lift-vs-35s">Lifting a Tacoma: Math vs. Reality</a></li>
</ul>
`.trim()
  },
  {
    slug: "best-wheel-offset-12-5-wide-tires-tacoma-ko",
    language: "ko",
    translationGroup: "tacoma-offset",
    title: "타코마 휠 오프셋 가이드: 12.5인치 광폭 타이어와 33인치 마스터하기",
    description: "도요타 타코마의 좁은 휠 하우스를 정복하세요. 광폭 33인치를 장착하기 위한 정확한 오프셋, Cab Mount Chop (CMC), UCA 간섭 해결 방법을 알려드립니다.",
    date: "2026-03-05",
    category: "도요타 타코마",
    keywords: ["타코마오프셋", "타코마33인치", "CMC", "타코마간섭", "오프로드튜닝"],
    content: `
<h2>타코마 튜닝과 폭 12.5인치 타이어의 난제</h2>
<p>도요타 타코마(3세대 및 4세대)는 오프로드 튜닝의 끝판왕 베이스입니다. 하지만 타코마 오너가 가로폭 12.5인치의 광폭 타이어(예: 33x12.50 또는 35x12.50)를 장착하려 할 때, 미국 풀사이즈 픽업트럭과는 전혀 다른 난관에 봉착하게 됩니다.</p>
<h2>타코마 펜더의 기하학적 한계</h2>
<p>타코마의 휠 아치는 상대적으로 좁게 설계되어 있습니다. 직경 33인치는 리프트 킷으로 해결할 수 있지만, 12.5인치의 '폭'은 다른 이야기입니다. 타이어를 조향(회전)할 때, 타이어의 바깥쪽 모서리가 호를 그리며 캐빈 마운트(Cab Mount)와 안쪽 플라스틱을 강하게 타격하게 됩니다.</p>
<h2>오프셋(Offset)별 반응</h2>
<p>오프셋이 광폭 타이어 간섭의 운명을 결정합니다:</p>
<ul>
  <li><strong>네거티브 오프셋 (-12 ~ -25 이상):</strong> 공격적인 핏을 위해 바퀴를 바깥으로 뺍니다. UCA(상단 컨트롤 암) 간섭은 완벽하게 피할 수 있지만, 스티어링 시 스크럽 반경이 급증해 <strong>캐빈 마운트와의 충돌이 극심해집니다 (Cab Mount Chop 필수).</strong></li>
  <li><strong>제로 오프셋 (0):</strong> UCA 간섭을 아슬아슬하게 피하며 타코마 서스펜션 지오메트리를 덜 망가뜨립니다. 가장 합리적이지만 여전히 열처리(Heat gun)를 통한 플라스틱 성형이 필요합니다.</li>
  <li><strong>파지티브 오프셋 (+12 ~ +30):</strong> 12.5인치 폭에서는 거의 무조건 UCA(상단 컨트롤 암) 및 쇽업소버 튜브와 마찰을 일으킵니다. 애프터마켓 UCA 장착이 강제됩니다.</li>
</ul>
<h2>해결책: 타협과 튜닝</h2>
<p>타코마에 12.5 광폭 타이어를 간섭 없이 넣으려면 <strong>에프터마켓 UCA</strong> 장착과 <strong>Cab Mount Chop (CMC 작업)</strong>이 거의 세트메뉴처럼 요구됩니다. 이 비용이 부담스럽다면 285/70R17(투팔오) 사이즈로 내려오는 것이 현명합니다. 타이어 스펙 변경 시 오차율은 <a href="/">외경 계산기</a>로 확인하세요.</p>
`.trim()
  },
  {
    slug: "best-wheel-offset-12-5-wide-tires-tacoma-es",
    language: "es",
    translationGroup: "tacoma-offset",
    title: "Guía de Offset de Ruedas para Toyota Tacoma",
    description: "Aprenda el offset preciso y los requisitos de Cab Mount Chop (CMC) para instalar neumáticos de 33\" en su Tacoma.",
    date: "2026-03-05",
    category: "Toyota Tacoma",
    keywords: ["tacoma", "offset", "33 pulgadas", "CMC"],
    content: `
<h2>El puzzle del ajuste de la Toyota Tacoma</h2>
<p>La Toyota Tacoma es una leyenda en el mundo de las camionetas medianas, pero presenta un desafío único para quienes quieren monturas de neumáticos agresivas. A diferencia de las camionetas de tamaño completo como la F-150, los pasos de rueda de la Tacoma son relativamente poco profundos y estrechos. Cuando decides mejorar al look off-road clásico —una elevación de 3 pulgadas con neumáticos 33x12.50— entras en un mundo donde los milímetros importan.</p>

<h3>Anatomía del roce</h3>
<p>En una Tacoma, el roce ocurre típicamente en tres ubicaciones distintas:</p>
<ol>
  <li><strong>El Brazo de Control Superior (UCA):</strong> Si tu offset es demasiado alto (neumáticos muy hacia adentro), un neumático de 12.5" de ancho golpeará el UCA.</li>
  <li><strong>El soporte de la cabina (Cab Mount):</strong> El neumático "barre" muy cerca de este soporte durante los giros.</li>
  <li><strong>El forro del guardabarros y el parachoques:</strong> El plástico en la parte delantera del paso de rueda a menudo necesita un pequeño recorte.</li>
</ol>

<h2>El punto óptimo: Offset de 0mm a -12mm</h2>
<p>Tras años de pruebas en miles de builds de la comunidad Tacoma, el consenso para una build "equilibrada" es un offset de llanta entre <strong>0mm y -12mm</strong>.</p>
<ul>
  <li><strong>Offset 0mm:</strong> Coloca el neumático al ras del filo del guardabarros. Proporciona suficiente espacio libre del UCA para la mayoría de los neumáticos de 11.5" de ancho.</li>
  <li><strong>Offset -12mm:</strong> La opción más popular para setups 33x12.50R17. Empuja el neumático hacia afuera lo suficiente para despejar el UCA, pero aumentará el "radio de arrastre", lo que casi con certeza golpeará el soporte de cabina.</li>
</ul>

<h2>El famoso Cab Mount Chop (CMC)</h2>
<p>Si quieres correr neumáticos 33x12.50 en una Tacoma con cierto grado de capacidad off-road, probablemente necesitarás un <strong>Cab Mount Chop (CMC)</strong>. Esto implica cortar una pieza triangular del soporte de cabina de acero y soldar una placa de refuerzo. Esta modificación es puramente exterior y no afecta la seguridad del vehículo, pero es necesaria para proporcionar el espacio necesario con la cerradura completa y la suspensión comprimida.</p>

<h2>Conclusión: Precisión técnica</h2>
<p>La Tacoma es una herramienta de precisión. Usa nuestra <a href="/">Calc de Offset y Neumáticos para Tacoma</a> para visualizar el "saliente" e "interior" de tu nueva configuración.</p>
`.trim()
  },
  {
    slug: "truck-regearing-after-37-inch-tires",
    language: "en",
    translationGroup: "regearing-37s",
    title: "The 37-Inch Tire Regearing Guide: Restoring Power and Torque",
    description: "Installing 37s is a commitment. Learn the exact science of gear ratios, why your engine struggles with larger tires, and why 4.88 or 5.13 gears are the ultimate fix.",
    date: "2026-03-05",
    category: "Performance",
    keywords: ["regearing for 37s", "truck gear ratio calculator", "differential gear swap", "37 inch tires gas mileage", "transmission hunting fix"],
    content: `
<h2>The Physics of Rotating Mass and Leverage</h2>
<p>When you transition from a 31-inch factory tire to a 37-inch tire, you aren't just adding 6 inches of height. You are fundamentally changing the mechanical leverage your engine has over the road. Think of your tires as a lever: the larger the tire, the longer the lever the road has against your axle. Without changing your differential gears, your engine has to produce significantly more torque just to maintain the same speed. In this technical deep-dive, we explore why "regearing" is the most important—and most overlooked—part of a 37-inch tire build.</p>

<h3>The Effective Gear Ratio Calculation</h3>
<p>When you put larger tires on a truck, you create a "taller" effective gear ratio. This means your engine RPMs drop at highway speeds, which might sound good for fuel economy, but it actually pulls the engine out of its optimal "power band." </p>
<p><strong>The Formula: New Gear Ratio = (New Tire Size / Old Tire Size) × Original Gear Ratio</strong></p>
<p>For example, if your truck came with 3.55 gears and 31-inch tires, and you move to 37s, your "effective" ratio becomes 2.97. This is incredibly high for a heavy truck, causing the transmission to constantly downshift (hunt) to find power. To restore the factory feel, you would need: (37/31) × 3.55 = 4.23. Since 4.23 isn't a standard gear size, most owners jump to **4.56 or 4.88** to gain back some of the lost low-end torque.</p>

<h2>Why Your Transmission is Suffering</h2>
<p>Modern 6, 8, and 10-speed transmissions rely on precise input/output speed calculations to determine shift points. When you run 37s on stock gears, the transmission spends too much time in lower gears trying to keep the heavy tires moving, or it struggles to stay in overdrive on the highway. This leads to increased heat—the number one killer of automatic transmissions. Regearing moves the load back to the differentials, where it belongs, allowing the transmission to operate at its designed temperatures and shift intervals.</p>

<h2>Choosing Your New Ratio: 4.88 vs. 5.13</h2>
<p>For most half-ton and three-quarter-ton trucks running 37-inch tires, the debate usually comes down to 4.88 or 5.13 gears.</p>
<ul>
  <li><strong>4.88 Gears:</strong> The "Daily Driver" choice. It brings the RPMs back to slightly above factory levels, providing great acceleration while keeping highway noise manageable. This is ideal for trucks that see 70/30 street and trail use.</li>
  <li><strong>5.13 Gears:</strong> The "Crawler" choice. If you tow heavy trailers or spend your weekends on technical rock crawls, 5.13s provide massive low-end grunt. Your highway RPMs will be higher (around 2200-2500 RPM), but the truck will feel incredibly "snappy" around town.</li>
</ul>

<h2>Conclusion: Power Restored</h2>
<p>Don't let your truck suffer. Regearing is the key to a successful 37-inch tire build. Use our <a href="/">Gear Ratio Tool</a> to find your perfect match.</p>
`.trim()
  },
  {
    slug: "truck-regearing-after-37-inch-tires-ko",
    language: "ko",
    translationGroup: "regearing-37s",
    title: "37인치 타이어 기어비 튜닝 가이드: 출력과 토크 복원",
    description: "37인치 타이어 장착은 큰 결심이 필요합니다. 왜 엔진이 큰 타이어를 힘들어하는지, 그리고 4.88 또는 5.13 기어가 왜 최고의 해결책인지 알아봅니다.",
    date: "2026-03-05",
    category: "퍼포먼스",
    keywords: ["기어비튜닝", "차동기어", "37인치타이어", "연비하락", "미션보호"],
    content: `
<h2>37인치 타이어와 파워트레인의 절망적 피드백</h2>
<p>37인치 타이어는 트럭의 외관을 몬스터급으로 변신시키며 오프로드 퍼포먼스의 극한을 보여줍니다. 그러나 엄청난 부작용이 따릅니다. 타이어 크기와 휠 하우스 간섭 문제에만 집착하다가 수백만 원짜리 타이어를 장착한 뒤, 고속도로에 첫 진입했을 때 트럭이 굼벵이처럼 변하는 것을 느끼게 됩니다.</p>
<h2>왜 기어비 변경(Re-gearing)이 필요한가?</h2>
<p>차량의 파워트레인은 '순정 타이어 외경'을 기준으로 엔진 출력, 변속 타이밍, 액슬 기어비가 최적화되어 있습니다. 타이어 직경이 커지면 바퀴 한 바퀴를 굴리는데 필요한 지렛대의 길이(회전 반경)가 늘어나, 엔진이 훨씬 더 큰 힘(토크)을 쏟아야만 차량이 전진합니다. 결과적으로 다음과 같은 3대 재앙이 발생합니다.</p>
<ol>
  <li><strong>기어 헌팅 (Gear Hunting):</strong> 고속도로에서 8단, 10단 최고 단수로 변속되지 못하고 툭하면 기어가 내려갔다 올라갔다를 반복합니다.</li>
  <li><strong>미션 과열:</strong> 변속기가 저단 기어에서 높은 부하를 받아 오일 레인지 온도가 상승하고 수명이 깎입니다.</li>
  <li><strong>초반 가속력 상실:</strong> 신호등에서 출발할 때 답답함을 느낍니다.</li>
</ol>
<h2>권장 기어비 수식 계산</h2>
<p>해결책은 디퍼렌셜 내부의 링 앤 피니언 기어를 <strong>더 높은(수치상) 기어비로 교체(리기어링)</strong>하는 것입니다.</p>
<p><strong>공식: 새로운 기어비 = (새 타이어 직경 / 순정 타이어 직경) × 순정 기어비</strong></p>
<p>예를 들어, 순정 기어비가 3.73, 순정 타이어가 32인치였는데 37인치를 꼈다면: (37 / 32) × 3.73 = 4.31입니다. 따라서 애프터마켓 부품으로 <strong>4.56 또는 4.88</strong> 기어비를 장착하는 것이 정석입니다.</p>
<h2>비용과 투자 가치</h2>
<p>리기어링은 전/후 액슬(사륜구동의 경우)을 모두 까서 작업해야 하므로 공임 포함 약 200~300만 원 선의 고비용 튜닝입니다. 하지만 37인치를 계획 중이라면 <strong>선택이 아닌 필수</strong> 항목입니다. 무리한 기어 헌팅으로 미션이 박살 나는 것에 비하면 저렴한 투자입니다.</p>
`.trim()
  },
  {
    slug: "truck-regearing-after-37-inch-tires-es",
    language: "es",
    translationGroup: "regearing-37s",
    title: "Guía de re-engranaje para neumáticos de 37 pulgadas",
    description: "Recupere la potencia y el par motor después de instalar neumáticos masivos.",
    date: "2026-03-05",
    category: "Rendimiento",
    keywords: ["re-engranaje", "37 pulgadas", "par motor", "diferencial"],
    content: `
<h2>La física de la masa rotacional y la palanca</h2>
<p>Al pasar de un neumático de fábrica de 31" a uno de 37", no solo añades 6 pulgadas de altura. Estás cambiando fundamentalmente la ventaja mecánica que tu motor tiene sobre la carretera. Piensa en tus neumáticos como una palanca: cuanto más grande es el neumático, más larga es la palanca que la carretera ejerce contra tu eje. Sin cambiar los engranajes del diferencial, tu motor tiene que producir significativamente más torque solo para mantener la misma velocidad.</p>

<h3>El cálculo de la relación de transmisión efectiva</h3>
<p>Cuando colocas neumáticos más grandes en una camioneta, creas una relación de transmisión efectiva "más larga". Esto hace que las RPM del motor bajen a velocidades de autopista.</p>
<p><strong>La fórmula: Nueva Relación = (Tamaño Neumático Nuevo / Tamaño Neumático Antiguo) × Relación Original</strong></p>
<p>Por ejemplo, si tu camioneta tenía una relación de 3.55 con neumáticos de 31" y pasas a 37", tu relación "efectiva" se convierte en 2.97. Para restaurar la sensación de fábrica, necesitarías: (37/31) × 3.55 = 4.23. Como 4.23 no es un tamaño estándar, la mayoría de los propietarios optan por <strong>4.56 o 4.88</strong>.</p>

<h2>Por qué sufre tu transmisión</h2>
<p>Las transmisiones modernas de 6, 8 y 10 velocidades dependen de cálculos precisos de velocidad para determinar los puntos de cambio. Cuando corres 37s con engranajes de serie, la transmisión pasa demasiado tiempo en marchas bajas. Esto genera calor excesivo —el principal destructor de las transmisiones automáticas. El re-engranaje mueve la carga de nuevo a los diferenciales, donde corresponde.</p>

<h2>Elegir tu nueva relación: 4.88 vs. 5.13</h2>
<ul>
  <li><strong>Engranajes 4.88:</strong> La opción de "conductor diario". Devuelve las RPM a un nivel ligeramente superior al de fábrica, con excelente aceleración y ruido manejable en autopista.</li>
  <li><strong>Engranajes 5.13:</strong> La opción "crawler". Si remolcas tráileres pesados o disfrutas del rock crawling técnico, los 5.13 proporcionan un enorme torque de baja. Las RPM en autopista serán más altas, pero la camioneta se sentirá increíblemente ágil.</li>
</ul>

<h2>Conclusión: Potencia restaurada</h2>
<p>No dejes que tu camioneta sufra. El re-engranaje es la clave para una build exitosa con neumáticos de 37". Usa nuestra <a href="/">Herramienta de Relación de Transmisión</a> para encontrar tu combinación perfecta.</p>
`.trim()
  },

  {
    slug: "rotational-mass-how-tire-weight-kills-mpg",
    language: "en",
    translationGroup: "tire-weight-mpg",
    title: "The Silent Performance Killer: Rotational Mass and Your MPG",
    description: "It's not just the size, it's the weight. Learn why heavy 10-ply tires can ruin your truck's acceleration, braking, and fuel economy through rotational inertia.",
    date: "2026-03-05",
    category: "Fuel Economy",
    keywords: ["rotational mass truck tires", "unsprung weight physics", "10 ply vs 6 ply tires", "tire weight fuel economy", "heavy tires braking distance"],
    content: `
<h2>Why Every Pound on Your Wheel Counts for Ten</h2>
<p>When most truck owners look at a new set of tires, they check the tread pattern and the sidewall height. Very few check the shipping weight. This is a massive mistake. In the world of automotive engineering, there is a concept known as **Rotational Mass** (or rotational inertia), which dictates that weight on a spinning object is far more detrimental to performance than weight sitting in the truck bed. In this guide, we break down the physics of why heavy tires are the quickest way to turn a snappy truck into a sluggish fuel-drinker.</p>

<h3>Unsprung vs. Sprung Weight</h3>
<p>To understand rotational mass, we first have to understand **unsprung weight**. Sprung weight is everything supported by your suspension. Unsprung weight is everything below the springs. Because this weight must be both moved forward AND rotated, it takes **4 to 7 times more energy** to accelerate than weight sitting in the cab.</p>

<h2>The E-Rated (10-Ply) Penalty</h2>
<p>Most dedicated off-road tires come in "Load Range E" (often called 10-ply). These tires are built with thick rubber and heavy steel belts to resist punctures. While they are indestructible on the trail, they are incredibly heavy.</p>
<ul>
  <li><strong>MPG Loss:</strong> Expect a 2-3 MPG drop immediately.</li>
  <li><strong>Braking Distance:</strong> Your brakes now have to stop a much heavier spinning rotor.</li>
  <li><strong>Suspension Wear:</strong> The extra weight makes your shocks work harder.</li>
</ul>

<h2>Conclusion: Weight Matters</h2>
<p>Before you buy, check the weight. Use our <a href="/">Tire Weight Impact Tool</a> to see how your choice affects your wallet.</p>
`.trim()
  },
  {
    slug: "rotational-mass-how-tire-weight-kills-mpg-ko",
    language: "ko",
    translationGroup: "tire-weight-mpg",
    title: "숨은 성능 킬러: 회전 질량이 연비에 미치는 영향",
    description: "사이즈보다 중요한 것은 무게입니다. 무거운 10프라이 타이어가 어떻게 트럭의 가속, 제동, 연비를 망치는지 물리적으로 분석합니다.",
    date: "2026-03-05",
    category: "연비 가이드",
    keywords: ["회전질량", "현가하질량", "10프라이타이어", "연비하락", "트럭튜닝"],
    content: `
<h2>회전 질량(Rotational Mass)의 파괴력</h2>
<p>많은 오너들이 타이어를 튜닝할 때 "조금 더 큰 직경", 즉 타이어의 높이(외경)와 간섭 문제에만 집중합니다. 하지만 타이어 업그레이드에서 가장 간과되면서도 가장 치명적인 성능 저하의 주범은 바로 '무게'입니다.</p>
<h2>선형 질량 vs 회전 질량</h2>
<p>트럭 적재함에 삽과 텐트를 싣고 무게가 10kg 늘어난 것과, 각 바퀴당 타이어 무게가 2.5kg씩 늘어난 것은 전혀 다른 물리학적 결과를 초래합니다. 바퀴, 브레이크, 드라이브샤프트 등 동력과 함께 회전하는 부품의 무게를 <strong>'언스프링 매스(Unsprung Mass)'</strong> 및 회전 질량이라고 부릅니다.</p>
<p>물리학에서 차를 전진시키려면 엔진은 타이어를 '회전'시키기 위한 힘과, 차량 전체를 앞으로 밀기 위한 힘을 동시에 소모해야 합니다. 일반적으로 회전 질량의 1kg 증가는 순수 적재 하중 2~3kg 증가와 맞먹는 연비/가속 저하를 일으킵니다.</p>
<h2>실제 10 플라이 (E-Load) 타이어의 경고</h2>
<p>순정으로 P-Metric(승용차 기준 경량 타이어)을 쓰다가, 내구성이 좋은 LT(Light Truck) E-Load 등급 머드 타이어로 변경하는 상황을 가정해봅시다.</p>
<ul>
  <li>순정 32인치 P등급 타이어: 약 18~19kg/개</li>
  <li>새로운 35인치 E등급 진흙용 타이어: 약 31~34kg/개</li>
  <li>바퀴 4개 기준 추가 회전 질량: <strong>총 60kg 증가</strong> (물리학적 부담 체감: 적재함에 철근 150kg을 항상 적재하고 다니는 것과 동일)</li>
</ul>
<h2>증상과 해결법</h2>
<p>이렇게 언스프링 하중이 증가하면 제동 거리가 무섭게 길어 지고(브레이크 밀림), MPG(연비)가 수직 하락하며, 오프로드용 무거운 휠까지 결합하면 서스펜션 쇽업소버가 상하 바운스를 제어하지 못해 승차감이 망가집니다.</p>
<p>해결책은 무리하게 등급이 높은 두꺼운 타이어를 고집하지 말고, 꼭 필요한 조건(C-load 또는 D-load)의 가벼운 HT나 AT 타이어 모델을 우선 고려하는 것입니다. 외경 계산뿐 아니라 타이어 제조사의 무게 제원을 꼼꼼히 체크하세요.</p>
`.trim()
  },
  {
    slug: "rotational-mass-how-tire-weight-kills-mpg-es",
    language: "es",
    translationGroup: "tire-weight-mpg",
    title: "El asesino silencioso del rendimiento: Masa rotacional y MPG",
    description: "No es solo el tamaño, es el peso. Cómo los neumáticos pesados arruinan su aceleración y consumo.",
    date: "2026-03-05",
    category: "Economía",
    keywords: ["masa rotacional", "peso no suspendido", "neumáticos", "MPG"],
    content: `
<h2>Por qué cada kilo en la rueda equivale a diez en la carrocería</h2>
<p>La mayoría de los propietarios de camionetas solo revisan el patrón de la banda de rodadura y la altura del flanco lateral. Muy pocos revisan el peso de envío. Esto es un error enorme. En ingeniería automotriz, existe el concepto de <strong>masa rotacional</strong> (o inercia rotacional), que dicta que el peso en un objeto en giro es entre 4 y 7 veces más perjudicial para el rendimiento que el peso que simplemente descansa en la caja de la camioneta.</p>

<h3>Peso no suspendido vs. peso suspendido</h3>
<p>El peso suspendido es todo lo soportado por la suspensión. El peso no suspendido es todo lo que está por debajo de los muelles. Aceleración, frenado y maniobrabilidad se ven afectados desproporcionadamente por el peso no suspendido, ya que este debe ser movido hacia adelante Y rotado simultáneamente.</p>

<h2>La penalización de los neumáticos reforzados (10 capas)</h2>
<p>La mayoría de los neumáticos dedicados al off-road vienen en "Rango de Carga E" (comúnmente llamados de 10 capas). Si bien son indestructibles en la pista, son increíblemente pesados.</p>
<ul>
  <li><strong>Pérdida de MPG:</strong> Espera una caída de 2-3 km/l inmediatamente.</li>
  <li><strong>Distancia de frenado:</strong> Tus frenos ahora tienen que detener un rotor giratorio mucho más pesado.</li>
  <li><strong>Desgaste de la suspensión:</strong> El peso extra hace trabajar más a los amortiguadores.</li>
</ul>

<h2>Conclusión: El peso importa</h2>
<p>Antes de comprar, revisa el peso. Usa nuestra <a href="/">Herramienta de Impacto del Peso del Neumático</a> para ver cómo tu elección afecta tanto el rendimiento como tu billetera.</p>
`.trim()
  },


  // ── Group 4: Advanced Tech & Performance ──────────────────────────────
  {
    slug: "ground-clearance-math-3-inch-lift-vs-35s",
    language: "en",
    translationGroup: "lift-vs-tires",
    title: "Ground Clearance Decoded: Lift Kits vs. Larger Tires",
    description: "Confused about ride height vs. axle clearance? Learn why a 3-inch lift might not raise your differential at all, but a set of 35s will. Technical math inside.",
    date: "2026-03-05",
    category: "Truck Tech",
    keywords: ["suspension lift vs tire lift", "ground clearance vs ride height", "differential clearance truck", "35 inch tires lift gain", "truck center of gravity"],
    content: `
<h2>The Great Clearance Confusion: Ride Height vs. Ground Clearance</h2>
<p>In the truck community, the terms "lift" and "ground clearance" are often used interchangeably. This is a technical error that can lead to expensive mistakes when building an off-road vehicle. If you tell a shop you want "3 inches of lift," they will likely install a suspension system that raises the frame of your truck. However, if your goal was to clear a specific rock on a trail that keeps hitting your rear differential, that suspension lift may have done absolutely nothing to help you. In this guide, we break down the geometry of lift kits versus larger tires and explain why you usually need both to succeed.</p>

<h3>Defining the Lowest Point (The Differential)</h3>
<p>For most trucks and SUVs with solid rear axles, the lowest point is the bottom of the differential housing. Because this housing is part of the axle assembly, no amount of spring modification will move that housing further from the ground. The only thing that can move the center of the axle higher is a larger tire radius.</p>

<h2>The Calculus of a 3-Inch Lift Kit</h2>
<p>A 3-inch suspension lift kit works by increasing the distance between the axle and the chassis. This provides benefits like improved approach and departure angles, and better breakover angle. However, your ground clearance gain at the axle remains **Zero**.</p>

<h2>Conclusion: Synergistic Lift</h2>
<p>To get true axle lift, you must pair a lift kit with larger tires. Use our <a href="/">Lift vs. Tire Clearance Comparison tool</a> to see how different combinations will affect your final stance.</p>
`.trim()
  },
  {
    slug: "ground-clearance-math-3-inch-lift-vs-35s-ko",
    language: "ko",
    translationGroup: "lift-vs-tires",
    title: "지상고의 모든 것: 리프트킷 vs 큰 타이어",
    description: "차고 높이와 최저지상고의 차이를 아시나요? 왜 3인치 리프트가 디퍼런셜 높이를 전혀 높여주지 못하는지, 기술적인 관점에서 분석합니다.",
    date: "2026-03-05",
    category: "트럭 기술",
    keywords: ["리프트킷vs타이어", "최저지상고", "디퍼런셜간섭", "오프로드튜닝", "무게중심"],
    content: `
<h2>리프트 킷 vs 타이어 인치업</h2>
<p>트럭 동호회나 지프 포럼에 접속하면 초보자들이 늘 하는 첫 번째 질문이 있습니다: "하부를 많이 긁어서 지상고를 높이려는데, 3인치 리프트 킷을 달까요 아니면 타이어를 35인치로 바꿀까요?" 이 질문의 정답은 '진짜 지상고'라는 개념을 정확히 이해하느냐에 달려 있습니다.</p>
<h2>3인치 서스펜션 리프트의 진실</h2>
<p>서스펜션(스프링, 쇽업소버 등)을 3인치 올리는 튜닝을 하면, 차량의 바디 플라스틱, 도어, 프레임 레일, 트랜스퍼 케이스는 모두 지면에서 3인치 멀어집니다. 따라서 접근각/이탈각과 램프각이 극적으로 좋아집니다. <strong>하지만 차축(솔리드 액슬이나 디퍼렌셜 하단)은? 단 1mm도 올라가지 않습니다.</strong></p>
<h2>35인치 타이어 인치업의 진실</h2>
<p>만약 순정 31인치 타이어를 빼고 35인치로 업그레이드했다면 수학 공식에 따라 (35 - 31) / 2 = 2인치의 진짜 지상고 획득이 일어납니다. 이 2인치는 프레임부터 차축(가장 낮은 점)까지 차량의 <strong>모든 요소</strong>를 동시에 2인치 들어 올립니다.</p>
<h2>비교 시나리오: 험로 바위 구간</h2>
<p>지면에서 전고 9인치의 크기를 가진 뾰족한 암석을 차 정중앙에 두고 통과해야 한다고 칩시다 (순정 디퍼렌셜 최저지상고는 8인치로 가정).</p>
<ul>
  <li><strong>3인치 리프트 장착 차:</strong> 차체는 훌쩍 올라갔지만, 8인치 위치에 있는 디퍼렌셜이 바위를 때리고 파괴됩니다.</li>
  <li><strong>35인치 타이어 튜닝 차:</strong> 리프트를 하지 않았어도 디퍼렌셜이 10인치 높이로 상승했기 때문에, 바위를 1인치 차이로 깔끔하게 넘어갑니다. (물론 바디나 펜더 간섭은 별개 문제입니다)</li>
</ul>
<h2>결론</h2>
<p>타이어는 차축 지상고를 결정하고, 리프트 킷은 타이어가 펜더에 닿지 않도록 공간을 만들어 주며 배가 닿는 것을 방지합니다. 결국 오프로더의 최종 목표는 <strong>가장 큰 타이어를 넣을 수 있는 만큼만 리프트업 하는 것 (LCG 세팅)</strong>입니다. 리프트 킷 구매 전에 먼저 <a href="/">외경 계산기</a>로 목표 타이어 세팅을 점검하세요.</p>
`.trim()
  },
  {
    slug: "ground-clearance-math-3-inch-lift-vs-35s-es",
    language: "es",
    translationGroup: "lift-vs-tires",
    title: "Altura libre: Kits de elevación vs. Neumáticos grandes",
    description: "¿Confundido entre la altura del chasis y la del eje? Descubra por qué un kit de 3\" podría no elevar su diferencial.",
    date: "2026-03-05",
    category: "Técnico",
    keywords: ["elevación", "altura libre", "diferencial", "off-road"],
    content: `
<h2>La gran confusión: Altura de conducción vs. Altura libre al suelo</h2>
<p>En la comunidad de camionetas, los términos "elevación" y "altura libre" a menudo se usan indistintamente. Esto es un error técnico que puede llevar a errores costosos al construir un vehículo off-road. Si le dices a un taller que quieres "3 pulgadas de elevación", probablemente instalarán un sistema de suspensión que eleva el bastidor del camión. Sin embargo, si tu objetivo era despejar una roca específica que sigue golpeando tu diferencial trasero, esa elevación de suspensión puede no haber hecho absolutamente nada para ayudarte.</p>

<h3>Definiendo el punto más bajo (el diferencial)</h3>
<p>Para la mayoría de las camionetas y SUV con ejes traseros rígidos, el punto más bajo es la parte inferior de la carcasa del diferencial. Dado que esta carcasa es parte del conjunto del eje, ninguna cantidad de modificación de muelles moverá esa carcasa más lejos del suelo. Lo único que puede mover el centro del eje más arriba es un radio de neumático más grande.</p>

<h2>El cálculo de un kit de elevación de 3 pulgadas</h2>
<p>Un kit de elevación de suspensión de 3 pulgadas funciona aumentando la distancia entre el eje y el chasis. Proporciona beneficios como mejores ángulos de ataque, salida y paso. Sin embargo, tu ganancia de altura libre en el eje sigue siendo <strong>cero</strong>.</p>

<h2>Conclusión: Elevación sinérgica</h2>
<p>Para obtener una elevación real del eje, debes combinar un kit de elevación con neumáticos más grandes. Usa nuestra <a href="/">herramienta de comparación de Elevación vs. Altura Libre de Neumáticos</a> para ver cómo diferentes combinaciones afectarán tu postura final.</p>
`.trim()
  },

  {
    slug: "pizza-cutters-vs-wide-tires-snow-performance",
    language: "en",
    translationGroup: "tire-width-snow",
    title: "Tire Width Science: Pizza Cutters vs. Wide Tires in Snow and Mud",
    description: "Should you go narrow or wide for the winter? We debunk the 'wider is better' myth and explore the physics of contact patch pressure and flotation. Guide inside.",
    date: "2026-03-05",
    category: "Off-Roading",
    keywords: ["pizza cutter tires vs wide tires", "narrow tires in snow", "tire contact patch physics", "hydroplaning tire width", "off-road tire width guide"],
    content: `
<h2>The Width Myth: Is Wider Always Better?</h2>
<p>In the world of off-road aesthetics, wide tires are seen as the gold standard. However, when it comes to actual performance in diverse weather conditions—specifically deep snow, slush, and heavy rain—the physics of tire width is often counter-intuitive. In this guide, we compare "Pizza Cutters" (narrow, tall tires) against traditional wide flotation tires.</p>

<h3>The Physics of PSI: Ground Pressure vs. Footprint</h3>
<p>The primary difference comes down to **Ground Pressure**. A wide tire (the snowshoe) is designed to "float" on top of soft surfaces like sand. A narrow tire (the stiletto) is designed to "cut" through the soft top layer to reach a solid surface underneath.</p>

<h2>"Pizza Cutters" in Deep Snow and Mud</h2>
<ul>
  <li><strong>Cutting through Slush:</strong> Narrow tires are significantly less likely to hydroplane.</li>
  <li><strong>Reduced Rolling Resistance:</strong> Leads to better MPG.</li>
  <li><strong>Easier Steering:</strong> Puts less strain on your system.</li>
</ul>

<h2>Conclusion: Choosing Your Tool</h2>
<p>If you need to survive a blizzard or a muddy backroad, consider the skinners. Use our <a href="/">Tire Width Comparison Calculator</a> to see the difference.</p>
`.trim()
  },
  {
    slug: "pizza-cutters-vs-wide-tires-snow-performance-ko",
    language: "ko",
    translationGroup: "tire-width-snow",
    title: "타이어 폭의 과학: 눈길과 진흙에서 좁은 타이어 vs 광폭 타이어",
    description: "겨울철에는 어떤 타이어가 더 유리할까요? '넓을수록 좋다'는 미신을 타파하고 접지면 압력과 부력의 물리학을 탐구합니다.",
    date: "2026-03-05",
    category: "오프로드 기술",
    keywords: ["피자커터타이어", "광폭타이어", "눈길운전", "접지압", "수막현상"],
    content: `
<h2>눈길 주행의 진리: 피자 커터 vs 광폭 타이어</h2>
<p>외경 인치업 튜닝을 할 때 피할 수 없는 딜레마가 있습니다. "타이어를 넓은 걸 끼울까 좁은 걸 끼울까?" 많은 오너들이 공격적인 외관을 위해 12.50 스펙의 초광폭 타이어를 선호합니다. 하지만 겨울철 폭설 구간이나 얼어붙은 포장도로 환경이라면 <strong>좁은 타이어(일명 Pizza Cutter)</strong>가 진가를 발휘합니다.</p>
<h2>광폭 타이어(Wide Tires)의 눈길 한계</h2>
<p>모래사장이나 뻘밭에서는 접지면을 넓게 퍼뜨려 '떠서 가는(Flotation)' 상태를 만드는 광폭 타이어가 최고입니다. 하지만 눈이 쌓인 도로에서는 차가 눈 위에 떠 버리면 핸들링과 브레이킹 통제력을 상실합니다. 눈이 타이어 트레드 밑에 짓이겨져 스케이트를 타듯 미끄러지는 현상(수막현상과 유사)이 발생하기 쉽습니다.</p>
<h2>피자 커터(Pizza Cutter) 타이어의 압도적 우위</h2>
<p>오버랜더들이 사랑하는 <strong>255/85R16</strong>이나 <strong>235/85R16</strong> 같은 좁고 직경이 큰 타이어를 피자 커터라고 부릅니다.</p>
<ul>
  <li><strong>파고드는 접지력:</strong> 좁은 타이어는 차량의 단위면적당 누르는 무게(PSI 압력)를 증가시켜, 무른 눈과 진흙을 톱처럼 파고 들어가 밑에 깔린 단단한 아스팔트나 흙 지면(하드팩)에 접지시킵니다.</li>
  <li><strong>연비와 구름 저항:</strong> 바닥에 닿는 폭이 좁아 구름 저항이 적고 연비 방어에 유리하며, 고속도로에서 물보라를 덜 일으킵니다.</li>
  <li><strong>간섭 회피:</strong> 좁은 폭 덕분에 서스펜션 부품이나 조향 시 차체 플라스틱 간섭에서 훨씬 자유롭습니다.</li>
</ul>
<h2>선택의 기준</h2>
<p>여러분이 사는 곳에 눈이 자주 오고 포장도로 주행 비율이 압도적으로 높다면, 무리해서 너비 315 급이나 12.50을 장착할 이유가 없습니다. <a href="/">타이어 규격 계산기</a>에 너비(Width)를 변경해 가며 최적의 오차를 가진 좁은 타이어 세팅을 시뮬레이션해 보세요.</p>
`.trim()
  },
  {
    slug: "pizza-cutters-vs-wide-tires-snow-performance-es",
    language: "es",
    translationGroup: "tire-width-snow",
    title: "Ciencia del ancho de neumáticos: Estrechos vs. Anchos",
    description: "¿Deberías elegir neumáticos estrechos o anchos para el invierno? Desmitificamos el 'cuanto más ancho, mejor'.",
    date: "2026-03-05",
    category: "Off-Road",
    keywords: ["neumáticos estrechos", "nieve", "presión de contacto", "off-road"],
    content: `
<h2>El mito del ancho: ¿Es siempre mejor lo más ancho?</h2>
<p>En el mundo de la estética off-road, los neumáticos anchos se ven como el estándar de oro. Sin embargo, cuando se trata del rendimiento real en condiciones meteorológicas diversas —específicamente nieve, aguanieve y lluvia intensa— la física del ancho de los neumáticos suele ser contraintuitiva. En esta guía, comparamos los "Pizza Cutters" (neumáticos estrechos y altos) con los neumáticos flotadores anchos tradicionales.</p>

<h3>La física de la PSI: Presión sobre el suelo vs. huella</h3>
<p>La diferencia principal se reduce a la <strong>presión sobre el suelo</strong>. Un neumático ancho (como una raqueta de nieve) está diseñado para "flotar" sobre superficies blandas como la arena. Un neumático estrecho (como un punzón) está diseñado para "cortar" la capa superior blanda para llegar a una superficie sólida debajo.</p>

<h2>Los "Pizza Cutters" en nieve profunda y barro</h2>
<ul>
  <li><strong>Cortar la aguanieve:</strong> Los neumáticos estrechos tienen significativamente menos probabilidad de hacer aquaplaning.</li>
  <li><strong>Resistencia de rodadura reducida:</strong> Lleva a un mejor consumo de combustible (MPG).</li>
  <li><strong>Dirección más fácil:</strong> Pone menos tensión en el sistema de dirección.</li>
</ul>

<h2>Cuándo elegir neumáticos anchos</h2>
<p>Los neumáticos anchos brillan en arena, grava suelta y cuando vas a alta velocidad en tierra. Una huella más amplia significa más superficie de contacto y mayor flotación sobre superficies sueltas.</p>

<h2>Conclusión: Elegir la herramienta correcta</h2>
<p>Si necesitas sobrevivir a una ventisca o un camino de tierra embarrado, considera los más estrechos. Usa nuestra <a href="/">Calculadora de Comparación de Ancho de Neumáticos</a> para ver la diferencia.</p>
`.trim()
  },

  {
    slug: "how-to-use-forscan-correct-speedometer",
    language: "en",
    translationGroup: "forscan-correction",
    title: "The Ultimate Forscan Guide: Speedometer Calibration for Larger Tires",
    description: "Don't settle for an inaccurate speedometer. Learn how to use Forscan and an ELM327 adapter to re-calibrate your Ford truck's BCM for any tire size. Step-by-step guide inside.",
    date: "2026-03-05",
    category: "DIY Maintenance",
    keywords: ["forscan tire size change", "f150 speedometer calibration", "ford BCM modification", "ELM327 forscan truck", "speedometer correction tool"],
    content: `
<h2>Electronic Calibration: The Modern Alternative to Gear Swaps</h2>
<p>If you own a Ford truck made after 2011, you have a powerful tool at your fingertips. By using a software called **Forscan** and a simple OBDII adapter, you can tell your truck's computer the exact circumference of your new tires, restoring accuracy to your speedometer and shift points.</p>

<h3>Required Hardware: The ELM327 Adapter</h3>
<p>You need a bridge between your laptop and your truck's OBDII port. We highly recommend a high-quality wired adapter like the **OBDLink EX**. These provide the stability required for safely modifying the truck's core software.</p>

<h2>Step-by-Step Calibration</h2>
<ol>
  <li><strong>Backup Your Data:</strong> Save a copy of your original "As-Built" BCM data.</li>
  <li><strong>Calculate Circumference:</strong> Calculate your tire's actual circumference in millimeters.</li>
  <li><strong>Modify BCM:</strong> Enter the new millimeter value into the BCM configuration.</li>
  <li><strong>Relearn:</strong> Perform a PCM Module Initialization to sync the new data.</li>
</ol>

<h2>Conclusion: The Professional Edge</h2>
<p>Correcting your speedometer maintains the health of your transmission and keeps your odometer accurate. Use our <a href="/">Speedometer and Circumference Calc</a> to get the exact data you need for Forscan.</p>
`.trim()
  },
  {
    slug: "how-to-use-forscan-correct-speedometer-ko",
    language: "ko",
    translationGroup: "forscan-correction",
    title: "포스캔(Forscan) 가이드: 큰 타이어에 맞게 속도계 보정하기",
    description: "불정확한 속도계는 이제 그만. ELM327 어댑터와 포스캔을 사용하여 포드 트럭의 BCM을 완벽하게 재설정하는 방법을 안내합니다.",
    date: "2026-03-05",
    category: "자가 정비",
    keywords: ["포스캔타이어", "F150속도계보정", "BCM수정", "ELM327어댑터", "속도계오차"],
    content: `
<h2>Forscan을 이용한 자가 속도계 보정 가이드</h2>
<p>포드 F-150, 익스플로러, 레인저 등 포드 계열 차주가 타이어를 인치업했다면 딜러십의 값비싼 보정 비용을 치를 필요가 없습니다. <strong>Forscan</strong>이라는 무료 소프트웨어와 저렴한 OBD2 어댑터만 있으면 집 차고에서도 ABS 모듈과 속도계를 직접 재보정할 수 있습니다.</p>
<h2>사전 준비물</h2>
<ul>
  <li>윈도우 OS가 설치된 노트북</li>
  <li>Forscan 호환 OBD2 USB 동글 어댑터 (OBDLink EX 또는 HS-CAN/MS-CAN 스위치가 달린 ELM327 케이블 필수)</li>
  <li>Forscan 정식 무료 라이센스 갱신 다운로드 (forscan.org)</li>
</ul>
<h2>초안전 주의사항 (경고)</h2>
<p>As-Built 데이터를 건드리는 작업은 노트북 배터리가 꺼지거나 케이블 접촉 불량이 생기면 모듈이 벽돌창(Brick) 상태가 될 수 있는 아주 위험한 작업입니다. <strong>반드시 작업 전 원본 모듈(BCM 등) 데이터를 통째로 백업(Save)하세요.</strong></p>
<h2>보정 절차 스텝바이스텝</h2>
<ol>
  <li>OBD 어댑터를 차에 연결하고 차 키를 ACC(On/엔진 정지) 상태로 돌립니다.</li>
  <li>Forscan을 실행하고 차량 연결 아이콘을 눌러 통신을 확인합니다.</li>
  <li>메뉴 아이콘(컴퓨터 칩 모양)을 클릭하고 <strong>BdyCM (Body Control Module) - As-Built format (보통 BCM 또는 ABS)</strong> 로 들어갑니다. (초보자는 As-built 말고 일반 텍스트 옵션 BdyCM Configuration 모드 진입을 권장합니다.)</li>
  <li>일반 Configuration 모드에서 <strong>Tire Circumference (타이어 둘레값)</strong> 항을 찾습니다.</li>
  <li><a href="/">타이어 둘레 계산기</a>에서 확인한 새로운 외경 타이어의 밀리미터(mm) 둘레값을 수정하여 입력합니다. (예: 285/70R17은 약 2636mm 수준)</li>
  <li>"Write(기록)" 버튼을 눌러 모듈에 씁니다. 계기판이 잠시 깜빡거릴 수 있습니다.</li>
  <li><strong>DTC(고장코드) 지우기 갱신 필수:</strong> PCM이 기어비와 타이어 크기 불일치 코드를 띄울 수 있으므로, 렌치 아이콘 모드로 가서 'PCM/TCM Relearn' 기능을 한 번 돌려 모듈을 학습시킵니다.</li>
</ol>
<h2>GPS 검증</h2>
<p>작업이 완료되면 스마트폰 GPS 속도계 앱을 켜고 고속도로 100km/h 주행 단위에서 오차가 사라졌는지 확인합니다. 여전히 차이가 있다면 타이어 공기압에 따른 실제 찌그러진 둘레 편차 때문이므로 수치를 소폭 가감하여 재기록합니다.</p>
`.trim()
  },
  {
    slug: "how-to-use-forscan-correct-speedometer-es",
    language: "es",
    translationGroup: "forscan-correction",
    title: "Guía de Forscan: Calibración del velocímetro",
    description: "Aprenda a usar Forscan y un adaptador ELM327 para recalibrar el BCM de su camioneta Ford.",
    date: "2026-03-05",
    category: "Mantenimiento",
    keywords: ["forscan", "velocímetro", "f150", "calibración"],
    content: `
<h2>Calibración electrónica: La alternativa moderna al intercambio de engranajes</h2>
<p>Si posees una camioneta Ford fabricada después de 2011, tienes una herramienta poderosa a tu alcance. Usando un software llamado <strong>Forscan</strong> y un simple adaptador OBDII, puedes decirle al ordenador de tu camioneta la circunferencia exacta de tus nuevos neumáticos, restaurando la precisión en tu velocímetro y los puntos de cambio de marchas.</p>

<h3>Hardware requerido: El adaptador ELM327</h3>
<p>Necesitas un puente entre tu laptop y el puerto OBDII de tu camioneta. Recomendamos un adaptador con cable de alta calidad como el <strong>OBDLink EX</strong>. Estos proporcionan la estabilidad necesaria para modificar de forma segura el software principal de la camioneta. Evita los adaptadores baratos de Bluetooth: son inestables durante las escrituras y pueden "bloquear" el BCM.</p>

<h2>Calibración paso a paso</h2>
<ol>
  <li><strong>Haz una copia de seguridad de tus datos:</strong> Guarda una copia de los datos originales "As-Built" del BCM antes de cualquier modificación.</li>
  <li><strong>Calcula la circunferencia:</strong> Calcula la circunferencia real de tu neumático en milímetros.</li>
  <li><strong>Modifica el BCM:</strong> Ingresa el nuevo valor en milímetros en la configuración del BCM.</li>
  <li><strong>Reaprendizaje:</strong> Realiza una Inicialización del Módulo PCM para sincronizar los nuevos datos.</li>
</ol>

<h2>Conclusión: La ventaja profesional</h2>
<p>Corregir tu velocímetro mantiene la salud de tu transmisión y mantiene preciso tu odómetro. Usa nuestra <a href="/">Calc de Velocímetro y Circunferencia</a> para obtener los datos exactos que necesitas para Forscan.</p>
`.trim()
  },

  {
    slug: "measuring-tire-clearance-before-you-buy",
    language: "en",
    translationGroup: "measurement-guide",
    title: "The Zero-Rub Guide: How to Measure Tire Clearance Like a Pro",
    description: "Avoid the 'rub-and-scrub'. Learn the advanced techniques for measuring suspension flex, lock-to-lock clearance, and offset compatibility before you buy tires.",
    date: "2026-03-05",
    category: "Buying Guide",
    keywords: ["how to measure tire clearance", "wheel well measurement guide", "truck tire fitment check", "suspension flex test", "tire rubbing prevention"],
    content: `
<h2>The $2,000 Mistake: Why Simple Measurements Fail</h2>
<p>Buying larger tires isn't as simple as checking if they fit while the vehicle is sitting flat. Suspension systems are dynamic; they move up, down, and swing in wide arcs. If you don't account for these movements, you are setting yourself up for damaged fenders and ruined tires.</p>

<h3>The "Flex and Lock" Method</h3>
<ol>
  <li><strong>The Lock-to-Lock Sweep:</strong> Measure clearance at full steering lock in both directions.</li>
  <li><strong>The Compression Test:</strong> Simulate suspension compression to see if the tire hits the top of the wheel well.</li>
  <li><strong>The Swing Radius:</strong> Account for the wider arc created by wheels with lower offsets.</li>
</ol>

<h2>Conclusion: Data Driven Fitting</h2>
<p>Don't guess with your fitment. Use our <a href="/">Tire Clearance Simulator</a> to see how your chosen combination will perform in the real world.</p>
`.trim()
  },
  {
    slug: "measuring-tire-clearance-before-you-buy-ko",
    language: "ko",
    translationGroup: "measurement-guide",
    title: "구매 전 필수: 타이어 간섭 측정 가이드",
    description: "간섭 없는 완벽한 튜닝을 원하시나요? 전문가들이 사용하는 타이어 측정 기술과 체크리스트를 공개합니다.",
    date: "2026-03-05",
    category: "측정 가이드",
    keywords: ["타이어측정", "간섭체크", "휠하우스측정", "튜닝팁", "오프로드장비"],
    content: `
<h2>타이어 지르고 후회 안 하는: 구매 전 간섭 측정법</h2>
<p>"이 타이어 제 차에 맞나요?" 인터넷 타이어 포럼에 매일 수백 개씩 올라오는 질문입니다. 하지만 다른 사람의 "된다"는 말은 믿지 마십시오. 서스펜션 장력 마모도, 순정 휠 오프셋 상태 등 차량마다 수치가 다르기 때문에, 결제 버튼을 누르기 전에 차고에 가서 줄자로 직접 재보는 것이 수백만 원을 낭비하지 않는 가장 확실한 방법입니다.</p>
<h2><a href="/">외경 계산 결과치</a> 활용하기</h2>
<p>가장 먼저 저희 계산기를 통해 타이어 크기 상승분을 계산합니다. 예를 들어 직경이 총 2인치 증가하고, 폭이 총 1인치 넓어진다고 가정합시다. 이를 현행 타이어에 대입할 측정 기준은 <strong>타이어 상단/전후로 직경 증가분의 절반인 1인치, 타이어 안팎으로 0.5인치</strong> 의 여유가 필요하다는 의미입니다.</p>
<h2>3대 핵심 측정 포인트 (The 3 Critical Clearance Zones)</h2>
<h3>1. 스티어링 락 투 락 (Lock-to-Lock) 여유 – 프런트 타이어</h3>
<p>스티어링 휠을 한쪽 방향으로 끝까지 다 돌립니다. 그 상태에서 타이어 안쪽 모서리와 차량의 프레임 레일, 트레일링 암, 스웨이 바 사이의 간격을 확인합니다.</p>
<p>반대 방향 풀 턴 상태에서는 타이어 바깥쪽 모서리와 앞 범퍼 플라스틱 라이너 흙받이, 크래시 바 사이의 간격을 체크합니다. <strong>최소 0.5인치(1cm 남짓) 이상의 여유</strong>가 없다면 새 타이어는 반드시 마찰 스크래치를 일으킵니다.</p>
<h3>2. 상단 UCA (Upper Control Arm) 볼조인트 이격 거리</h3>
<p>휠 안쪽 편에서 쇽(Shock)을 잡아주는 포크 모양의 상단 컨트롤 암과 <strong>현재 타이어의 사이드월 불룩한 부분</strong> 사이로 손가락을 넣어보세요. 보통 손가락 최소 한 마디(1~1.5cm)가 들어가야 안전망입니다. 폭이 넓어지는 새 타이어 교체 시 이 여유공간이 삼켜지게 되며, 이를 돌파하려면 휠 스페이서를 끼우거나 마이너스 오프셋 사제 휠 구비가 필수입니다.</p>
<h3>3. 서스펜션 풀 압축 시뮬레이션 (인치업)</h3>
<p>가만히 서 있을 땐 멀쩡하다가 과속 방지턱을 칠 때 찌그덕 소리가 납니다. 한쪽 앞바퀴를 램프(경사로)에 올려 서스펜션을 완전히 찌그러트린 압축 상태를 만드세요 (Articulation test). 이 상태에서 타이어 상단이 펜더 아치 강판 상부를 때리는지 확인합니다. 상승할 타이어 반경 직경분만큼을 남겨두었는지 반드시 가늠해야 합니다.</p>
`.trim()
  },
  {
    slug: "measuring-tire-clearance-before-you-buy-es",
    language: "es",
    translationGroup: "measurement-guide",
    title: "Guía de medición de espacio para neumáticos",
    description: "Aprenda las técnicas profesionales para medir el espacio libre antes de comprar nuevos neumáticos.",
    date: "2026-03-05",
    category: "Técnico",
    keywords: ["medición", "espacio", "neumáticos", "tuning"],
    content: `
<h2>El error de $2,000: Por qué las mediciones simples fallan</h2>
<p>Comprar neumáticos más grandes no es tan simple como verificar si caben mientras el vehículo está en posición plana. Los sistemas de suspensión son dinámicos: se mueven hacia arriba, hacia abajo y en amplios arcos. Si no tienes en cuenta estos movimientos, te estás preparando para guardabarros dañados y neumáticos arruinados.</p>

<h3>El método "Flex y Bloqueo"</h3>
<ol>
  <li><strong>El barrido de cerradura completa:</strong> Mide la holgura en la cerradura completa de dirección en ambas direcciones.</li>
  <li><strong>La prueba de compresión:</strong> Simula la compresión de la suspensión para ver si el neumático golpea la parte superior del paso de rueda.</li>
  <li><strong>El radio de giro:</strong> Ten en cuenta el arco más amplio creado por llantas con offsets más bajos.</li>
</ol>

<h2>Las tres mediciones más importantes</h2>
<ul>
  <li><strong>Espacio libre vertical en compresión:</strong> Con la suspensión completamente comprimida, ¿cuánto espacio hay entre el neumático y el paso de rueda?</li>
  <li><strong>Espacio libre lateral en cerradura completa:</strong> Con la dirección girada al máximo, ¿cuánto espacio hay entre el neumático y el guardabarros, el brazo de control y la carrocería?</li>
  <li><strong>Espacio libre en la parte trasera:</strong> No olvides las cuatro ruedas. Los neumáticos traseros también pueden rozar con los guardabarros traseros bajo carga máxima.</li>
</ul>

<h2>Conclusión: Ajuste basado en datos</h2>
<p>No adivines con tu ajuste. Usa nuestro <a href="/">Simulador de Altura Libre de Neumáticos</a> para ver cómo tu combinación elegida se desempeñará en el mundo real.</p>
`.trim()
  },

];
