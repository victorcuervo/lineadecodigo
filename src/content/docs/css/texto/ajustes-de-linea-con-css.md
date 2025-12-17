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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PSDYGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZL5sEuOpOpYpGsdjTztIDDdUAM%2BxxWuCw7o5A%2FpEUAIgMNdr8LsbcaEu301Apx9vFa%2FaEEI3QQxy5uXhPdkfYgAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFihRVT2n6Ya9QqAQyrcA2dVwwo8QVrNvZBRgUsKDC5nFFQw%2F4UpIdUAkhZoYOYe8Z%2FfrOrN3j2vwJltBxn0Xt0sK2EncloZxY47FulTPQMH5ZjMTTmoeuHgSztG4LZEqVkS4emG57SAYjFb6DfN4X2ve7h7h8cHg3F1adPpT3IFCwSK%2FQxLSfE6kZYutNhabUPrdt1FXbEJMWJG3I5Q7WpocnBXPcsZruMgM%2BM2eejDHKjb8LCi%2F9Zny02bRWx%2BJQixy7xLaK86scHGDfiQHWRG52YZsXyCubRqM9YjLmUpxwvb61uQsA5E%2BXIbnUmtA6B%2FkRU8%2BGWRH1UqnBd2RlTGE10WbiP1GZx9JSL6rB1vyQDzaOUyzQrkTSFDtWZs%2BzZtJMV3fms7YBMADenGoGKevkWWIVpwix6gF26Bz59vFoQGbXCxslHnxvZ1XXZhMGwn%2FZQBXI50cNi1qJh3AQfMsaJjPcOiNeB%2F25BxGbQhCJ7P5lgpi4dPtJTDtRPUaob36vHxBb7%2Bvb0txjO%2F%2BPnbOPEs1ydOw5ku0yIozkIER5V3MIcJhaTfrcKgPYhxDVuuEAPOBOajvuEvyo4ukiXyBrfFlPliGjxC4YvItxwbsl6gyEekcVvx6ZEqQvtUAYP%2FMoKca3WWPN%2FzML%2ByiMoGOqUBd%2F37kH9Q7yqsWUS3ogVD24jXZlsdF3XZ8XPibMxCd1u6Zu%2F3%2Fv2Vy4yIt8aQSsRd%2Bmy%2BEeCYOuj4GkN00vprCYco9CzkRqePDDtdK33arw9FM9AlM7p7KOM9%2FJGtyO%2F3bTYPI3NdykkRnnljIEms9VsOLbbEm9%2FwctSjPcJ04JBr%2FRXbNEqAcGPXGaKgDQxc5MgtXcs2Azi%2FxqCrmoAXb9xwzCBQ&X-Amz-Signature=fdad8babc9f73a1c209ce0aa488b0177fddbf08578798caf22ad44cd76511340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PSDYGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZL5sEuOpOpYpGsdjTztIDDdUAM%2BxxWuCw7o5A%2FpEUAIgMNdr8LsbcaEu301Apx9vFa%2FaEEI3QQxy5uXhPdkfYgAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFihRVT2n6Ya9QqAQyrcA2dVwwo8QVrNvZBRgUsKDC5nFFQw%2F4UpIdUAkhZoYOYe8Z%2FfrOrN3j2vwJltBxn0Xt0sK2EncloZxY47FulTPQMH5ZjMTTmoeuHgSztG4LZEqVkS4emG57SAYjFb6DfN4X2ve7h7h8cHg3F1adPpT3IFCwSK%2FQxLSfE6kZYutNhabUPrdt1FXbEJMWJG3I5Q7WpocnBXPcsZruMgM%2BM2eejDHKjb8LCi%2F9Zny02bRWx%2BJQixy7xLaK86scHGDfiQHWRG52YZsXyCubRqM9YjLmUpxwvb61uQsA5E%2BXIbnUmtA6B%2FkRU8%2BGWRH1UqnBd2RlTGE10WbiP1GZx9JSL6rB1vyQDzaOUyzQrkTSFDtWZs%2BzZtJMV3fms7YBMADenGoGKevkWWIVpwix6gF26Bz59vFoQGbXCxslHnxvZ1XXZhMGwn%2FZQBXI50cNi1qJh3AQfMsaJjPcOiNeB%2F25BxGbQhCJ7P5lgpi4dPtJTDtRPUaob36vHxBb7%2Bvb0txjO%2F%2BPnbOPEs1ydOw5ku0yIozkIER5V3MIcJhaTfrcKgPYhxDVuuEAPOBOajvuEvyo4ukiXyBrfFlPliGjxC4YvItxwbsl6gyEekcVvx6ZEqQvtUAYP%2FMoKca3WWPN%2FzML%2ByiMoGOqUBd%2F37kH9Q7yqsWUS3ogVD24jXZlsdF3XZ8XPibMxCd1u6Zu%2F3%2Fv2Vy4yIt8aQSsRd%2Bmy%2BEeCYOuj4GkN00vprCYco9CzkRqePDDtdK33arw9FM9AlM7p7KOM9%2FJGtyO%2F3bTYPI3NdykkRnnljIEms9VsOLbbEm9%2FwctSjPcJ04JBr%2FRXbNEqAcGPXGaKgDQxc5MgtXcs2Azi%2FxqCrmoAXb9xwzCBQ&X-Amz-Signature=f6ec7aec2a51e9c1e7035f8ac43322d7f98540b66a0b0dd4316142242ad68a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

