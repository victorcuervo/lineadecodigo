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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGBL576%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOMfae%2B%2Fz0%2BCATyHTBJTrRMohKj5tunHSpr%2Fm7otupiAiEArsvVsaRB7GYDBx1Q%2F3o6sFxQ%2BW1Lb5UJxNiCKaMXf8oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCbGZPWRekZnt0cl0yrcAwqVqp2EHeTIZ%2BlXLFLM0HlEI3A6PDUHVHPpbG%2FQ0eU5UTvRPIyF%2FmFD8YSy%2BoUqIjHknmVSJpfqjMF6gk4UJ1psrcjB%2Fbowm9mGTvTp9sOEHZpDq1jk4SeMrIL9WAySS0Ft6Dqhh9CZK4cUrIbV7VOy0ROElDJXkF%2B2uTCjJVd5NiQaKgjodyhndPfzY7TgEJ9cD1itnr8a0GjmVYtJf5tQRFppmQSA7GB4KH9r5lU22qL8xga%2FI%2FAIC49VUujmi1vytYyaAMuyX8PKpsygoRlminFN4KzFdEbzgIRdRWGyluY4cnqR%2BEVaX389fdMh5lZnUc8I0MX1%2BdjSfv6dM7%2F%2B5SmHPG97jOl0683zwPgp%2FWWRRvIlt2eMVnRP%2FoVb2irIWoAXnSgqfkhfN8ZV5WV9KaFc5E1JBWzv00QWpxUcAz2ExhI3THsGc4cms8siCHWFDQ%2BGh8F5WR39pRDpB5J95myGD13rDiOChW6C5hEn0qxcDKRFf33EWfiK3ExL31X3H%2Fcc5ozDL%2Fd%2FktT0n7lTWCwrk5HWwHfxka3KH7IWAa%2B6gwrml5WcE3VLVCjVsimlJfbhOnM7EfQ0lqtZ7WpmnQfJji%2BpYzWy2hijlE3iRBp1vxcNGY724GD%2BMLfGisoGOqUBIjVWJ4B68%2BohfOU4Kt8wjE6J%2F0QcqEaTjOn%2Fxt74TH5NhE1Tw2HmF7cGP7U2EkPG5iEfPH1GbXzyoYIrwXye2XUc%2BhHNbKbgMy8YhrKbtyaMA966ds5WB6TzBAc7U86cz2%2BqJkruZwrPY56XRo5YsEgqASSA5jbDVHI41DefgLRBCdfZgS098RIOOsqFoRibof8RqhDJzEgil7gYHHfPCWiPngB5&X-Amz-Signature=15aada11c8c61f00dec2339c7b2a5701a5c0af32bc50591f197e6f7cdb02b332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGBL576%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOMfae%2B%2Fz0%2BCATyHTBJTrRMohKj5tunHSpr%2Fm7otupiAiEArsvVsaRB7GYDBx1Q%2F3o6sFxQ%2BW1Lb5UJxNiCKaMXf8oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCbGZPWRekZnt0cl0yrcAwqVqp2EHeTIZ%2BlXLFLM0HlEI3A6PDUHVHPpbG%2FQ0eU5UTvRPIyF%2FmFD8YSy%2BoUqIjHknmVSJpfqjMF6gk4UJ1psrcjB%2Fbowm9mGTvTp9sOEHZpDq1jk4SeMrIL9WAySS0Ft6Dqhh9CZK4cUrIbV7VOy0ROElDJXkF%2B2uTCjJVd5NiQaKgjodyhndPfzY7TgEJ9cD1itnr8a0GjmVYtJf5tQRFppmQSA7GB4KH9r5lU22qL8xga%2FI%2FAIC49VUujmi1vytYyaAMuyX8PKpsygoRlminFN4KzFdEbzgIRdRWGyluY4cnqR%2BEVaX389fdMh5lZnUc8I0MX1%2BdjSfv6dM7%2F%2B5SmHPG97jOl0683zwPgp%2FWWRRvIlt2eMVnRP%2FoVb2irIWoAXnSgqfkhfN8ZV5WV9KaFc5E1JBWzv00QWpxUcAz2ExhI3THsGc4cms8siCHWFDQ%2BGh8F5WR39pRDpB5J95myGD13rDiOChW6C5hEn0qxcDKRFf33EWfiK3ExL31X3H%2Fcc5ozDL%2Fd%2FktT0n7lTWCwrk5HWwHfxka3KH7IWAa%2B6gwrml5WcE3VLVCjVsimlJfbhOnM7EfQ0lqtZ7WpmnQfJji%2BpYzWy2hijlE3iRBp1vxcNGY724GD%2BMLfGisoGOqUBIjVWJ4B68%2BohfOU4Kt8wjE6J%2F0QcqEaTjOn%2Fxt74TH5NhE1Tw2HmF7cGP7U2EkPG5iEfPH1GbXzyoYIrwXye2XUc%2BhHNbKbgMy8YhrKbtyaMA966ds5WB6TzBAc7U86cz2%2BqJkruZwrPY56XRo5YsEgqASSA5jbDVHI41DefgLRBCdfZgS098RIOOsqFoRibof8RqhDJzEgil7gYHHfPCWiPngB5&X-Amz-Signature=48b7b6485d7ed0ce974c9677cc29bb0a3ceb2359cf83a4d078c7dd43d9ffb0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

