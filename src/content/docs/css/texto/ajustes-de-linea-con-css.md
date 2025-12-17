---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS25QGNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFz7R8RFb9qzNv%2B0YDyJSFe4YByoFTiY2lF2lY0xEnDAiEA0GIPwoZ4fysWDwn5nBvB4dIp2Ewi3sjpfMnh1mcboNEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIE4zUsCVIsJp%2BqkFyrcA6GVkIWBATfGiYBVX33sw8g2WEbYEdh%2BCR9EWicwhaU4vrGJhrkd%2FZ2iHxBXfvGekk6CouYYHQpmotCiIeQlBeUQG1iBD1mIH0m%2Fj95siNcpwmufjrEhWp3mpDkpjXJIlc8B43TqsRAvf84r7CNlF%2BJ2utVfFz%2BQgZhuZ10FQNtGGEsmyaM0xNW1biFNuX6Nz7HXLr68%2BsDCBX3zv264CxryiQVqn122uzGIhqLZWrcLlV1UDHEGg3eXBLqR4okyYgTElcugEsgwhLD0ZieV5AiqFsWdKt0yILXqvLNIwEnImxvD8hqKgf0%2BqX1IJuieEI%2FnUFI6I6xsvVC6dyqWljK9nm1ZGPRfPjaW6qCV8gp1CXYT2xcym%2FCzGSx1hhV5IzSNxvjm9X7ar%2Fpc6t2Vy64Qn%2FYnYxsO96HQsGmvWnU1ent%2BJVuuLOGcqlYxos%2F3z1EmZg8lgVx%2FOTQ7Y0xh%2FWCvPp2MnbLMwXhLcAXyKEwpAO8HPPBs0pA95Sf42xEcMu4EkTRYTKTVYLn70dVDmts9G9r0Sp7%2B8sJXwwyqjE8HcFSTokke1GRz9IIpI2GATj406AxDs1ntzXsDorBvBs3pHETOl4dhJq1qnsWBllPmRqfGrIHEkD5u3RktMKbpiMoGOqUBTubWbTYpJyCQ3nWgZGNaPYgjkSMiAPYZ4SBXYrKPS0S6Ic1MBzJ%2BB%2FGJOOnpbjoEImkmNzWsyPsyFzHza9RmtaYEss%2F%2BL39E9tst8YqrCafZ72ISHAEb1ls%2BAmrAzU26IEJCkNG0xQPif7kKODC2dWT0OvONqbFhuljLPgDxc9l43Lv4EuvHHpGJ3oHtd5h9g7IdptDBbvtjIR%2FYXHQVbuybFv7f&X-Amz-Signature=ca708e5cbcb8654647deb955e776cb3f3ef4b931c31be9fad20973f15c7e406c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS25QGNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFz7R8RFb9qzNv%2B0YDyJSFe4YByoFTiY2lF2lY0xEnDAiEA0GIPwoZ4fysWDwn5nBvB4dIp2Ewi3sjpfMnh1mcboNEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIE4zUsCVIsJp%2BqkFyrcA6GVkIWBATfGiYBVX33sw8g2WEbYEdh%2BCR9EWicwhaU4vrGJhrkd%2FZ2iHxBXfvGekk6CouYYHQpmotCiIeQlBeUQG1iBD1mIH0m%2Fj95siNcpwmufjrEhWp3mpDkpjXJIlc8B43TqsRAvf84r7CNlF%2BJ2utVfFz%2BQgZhuZ10FQNtGGEsmyaM0xNW1biFNuX6Nz7HXLr68%2BsDCBX3zv264CxryiQVqn122uzGIhqLZWrcLlV1UDHEGg3eXBLqR4okyYgTElcugEsgwhLD0ZieV5AiqFsWdKt0yILXqvLNIwEnImxvD8hqKgf0%2BqX1IJuieEI%2FnUFI6I6xsvVC6dyqWljK9nm1ZGPRfPjaW6qCV8gp1CXYT2xcym%2FCzGSx1hhV5IzSNxvjm9X7ar%2Fpc6t2Vy64Qn%2FYnYxsO96HQsGmvWnU1ent%2BJVuuLOGcqlYxos%2F3z1EmZg8lgVx%2FOTQ7Y0xh%2FWCvPp2MnbLMwXhLcAXyKEwpAO8HPPBs0pA95Sf42xEcMu4EkTRYTKTVYLn70dVDmts9G9r0Sp7%2B8sJXwwyqjE8HcFSTokke1GRz9IIpI2GATj406AxDs1ntzXsDorBvBs3pHETOl4dhJq1qnsWBllPmRqfGrIHEkD5u3RktMKbpiMoGOqUBTubWbTYpJyCQ3nWgZGNaPYgjkSMiAPYZ4SBXYrKPS0S6Ic1MBzJ%2BB%2FGJOOnpbjoEImkmNzWsyPsyFzHza9RmtaYEss%2F%2BL39E9tst8YqrCafZ72ISHAEb1ls%2BAmrAzU26IEJCkNG0xQPif7kKODC2dWT0OvONqbFhuljLPgDxc9l43Lv4EuvHHpGJ3oHtd5h9g7IdptDBbvtjIR%2FYXHQVbuybFv7f&X-Amz-Signature=8a9638eefd91acc6b977203a347cc655870d9146ea160a876787c4d6819d67cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

