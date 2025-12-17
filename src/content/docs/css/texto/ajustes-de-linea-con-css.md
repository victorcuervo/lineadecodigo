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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJ644PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLplW%2B9YXjnzPHl2RIgwyqYNVekRkbmrtoRNzKe2AiGgIhALgyjnkO47q%2BLZUQWBxTCuwR8J%2BcKD4Yf2DiFxCuUAL7Kv8DCH4QABoMNjM3NDIzMTgzODA1Igzgae0ergEYj8GF5Bwq3AMWZYMoI0qFRgTLxbeHk%2BCdJXq185TDDS83gQ1FCHyyzprhAqdpiqHP9mPSeQBrhdSPBGfmXhScp2W93ApC8B1oun5DN02oKJSjT6DqazFEaUWbML6yBT0KaWier5zp58MRaXPGvUWR64xtoNeEXo1WLZFGzSOi5e69tBxjQ8LhX7b2DO7D6RNiRfbZjDOxqydyOWIozWKijDGmxYokjm5OyzryGI07LZo2CTRjIdvhpJrCVWFUQINEFX%2BR5v8RmamQofdoZydkZDOvz87Ff0ei%2BuPtlPiigZNABIuue5DNbED5ugAf1IYqMB0fOBZQNV0US%2Bi7MRGmD2Y0hiMhzJoqjCbLxMiz7xoJUP9fTsUcMJ7%2Fxs2%2BLdmvyUacPO5abz9w9vitqetl7Jnu5SWAGCjfNA%2B7e7yfbnfTwyMkrVRs9ukVFBn9Bx5Yz69fxtQwIWjsIRjj%2BGzXzU5pHNdpyh2OygCKYF2k8W9kC3tWC0j%2FuGikOdW%2BYgXtuhEqB7MiOkK4FgPtxXP48eXXmPz46ut75dI5rjP4B96HwKzjqYvkkcxMWlEWADp6wWVu4s9hyB%2FuTqNlKFQRhQ9Fin0ShWGIR8wBitaY9I%2BbyU%2BJtUHzaXqWQfxYJJsvrJQ%2BWTCtxorKBjqkAWKB7GtewvrJztwzcvP2PouRID4cecQGI5ks2SQz2KQsKZsVSiAlimxIr2EH7gO%2BsEIaSCBGjUZPl2zIuLhQIm2Da7kGugZm5rzhFGepiAmcjYVxXg6K6oUdyLy8i4KMgpwG7sNvianJgpMsFWVk%2BetasLVP2HXBpzS%2B4N%2BwjwJ24DeV%2FFe0qdEh0dyEOEeAj5MkKUKoOmptzYxXKrjH9qflspOE&X-Amz-Signature=7811cf3f28803b7ea3902f37219a74e61b35105be2556834fd59345a06be4bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJ644PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLplW%2B9YXjnzPHl2RIgwyqYNVekRkbmrtoRNzKe2AiGgIhALgyjnkO47q%2BLZUQWBxTCuwR8J%2BcKD4Yf2DiFxCuUAL7Kv8DCH4QABoMNjM3NDIzMTgzODA1Igzgae0ergEYj8GF5Bwq3AMWZYMoI0qFRgTLxbeHk%2BCdJXq185TDDS83gQ1FCHyyzprhAqdpiqHP9mPSeQBrhdSPBGfmXhScp2W93ApC8B1oun5DN02oKJSjT6DqazFEaUWbML6yBT0KaWier5zp58MRaXPGvUWR64xtoNeEXo1WLZFGzSOi5e69tBxjQ8LhX7b2DO7D6RNiRfbZjDOxqydyOWIozWKijDGmxYokjm5OyzryGI07LZo2CTRjIdvhpJrCVWFUQINEFX%2BR5v8RmamQofdoZydkZDOvz87Ff0ei%2BuPtlPiigZNABIuue5DNbED5ugAf1IYqMB0fOBZQNV0US%2Bi7MRGmD2Y0hiMhzJoqjCbLxMiz7xoJUP9fTsUcMJ7%2Fxs2%2BLdmvyUacPO5abz9w9vitqetl7Jnu5SWAGCjfNA%2B7e7yfbnfTwyMkrVRs9ukVFBn9Bx5Yz69fxtQwIWjsIRjj%2BGzXzU5pHNdpyh2OygCKYF2k8W9kC3tWC0j%2FuGikOdW%2BYgXtuhEqB7MiOkK4FgPtxXP48eXXmPz46ut75dI5rjP4B96HwKzjqYvkkcxMWlEWADp6wWVu4s9hyB%2FuTqNlKFQRhQ9Fin0ShWGIR8wBitaY9I%2BbyU%2BJtUHzaXqWQfxYJJsvrJQ%2BWTCtxorKBjqkAWKB7GtewvrJztwzcvP2PouRID4cecQGI5ks2SQz2KQsKZsVSiAlimxIr2EH7gO%2BsEIaSCBGjUZPl2zIuLhQIm2Da7kGugZm5rzhFGepiAmcjYVxXg6K6oUdyLy8i4KMgpwG7sNvianJgpMsFWVk%2BetasLVP2HXBpzS%2B4N%2BwjwJ24DeV%2FFe0qdEh0dyEOEeAj5MkKUKoOmptzYxXKrjH9qflspOE&X-Amz-Signature=c895669a0161417bdedf26689def28d23d039f4d337f2b9fff481d373e3f0124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

