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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674E5DOFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDspHt%2BT9StokRn5Gw5hq0D8YnJWm3HmzM%2FwqpU7CHDvQIgVhqJNbQbNnoFC0C38kPY2%2FHbQxc6n7noUNGKbHTZ144qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl9ZmFNiqWhI%2Fz3circA2hwt28U1l%2BAzg0mXfNaW9IP35zY1Xh%2FpskaCuu4tdINeQ9qIGpVFVSKxle1i6E0ejCYdgy3x54xRfZSLl6LJZB%2FjapmkVC6umHoseQVpThJ8TMUphb9ympRdl9ItLtwG2us985%2FnULyM%2BHFoi0NQivmBezPlZpIDNL%2BUslk1oescuDNcv8BqPA7z%2BcEKhaAGo0rPdaaehOOHCHew3C%2FS%2BumUPccp7%2Bvo6lctpFJVxeMcHMCe%2FWJPxE78rz4rpfL6T3WeRSafRScfhg%2BelQGmK%2B1BikkM7N3PYP2Wz8JtAg%2B%2FN6rS1oiSopK24yIXRh%2BzlNbBVwJmpHuQELIoNGKwvJE%2Bjxs8sKhHDZLw313Hs66qFVLB7q5Wtw8rWHMBAc2ATmi2kps8ScOsqffBDs6q0JKvzC9lgs9QXcWrdhZsk6yGwgElPDtJFZJNZh8ToXcvwv7BNQkclruUawNEQAcdGUcgpq9YU8NHDi2x7ve81t7J%2FeKnQH8duUYHG%2FFU7TG8dR0djYZgqoE40kSQhReuFlwnityNLrfo02CxGirPX0jVeWdrMHh1r9mDEW16sVYk%2BOE0P9T0eAR%2BWqp7T1le0AVmezPSCd6BVpryq%2BcGK1PCrwgWPZbXYS044BjMKWBi8oGOqUBXz%2FTT66TMgYwuGOj4gHzK56ZwKHlsUpKkim%2BDopmWtNYGU2oJFITFzQ92YDBRr1IB5UKaoQUJ6vxunds9Se2BEBNymjZrY9MkOulayEcFJpNlPv%2B7PmDL0G%2BX8PhtF4mkFhpXux9cKoe75Wv6IfME%2FQzv%2BUAdAAEr3FesgEG734FRNLMy5QLS8lXKFZVkV9C3GX7BfRShQiEt1eF9qrsJqtjEFnZ&X-Amz-Signature=210f617fe57bc6257758ea52e9cdb7e36b5d3f20d938503120d92b01a794b6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674E5DOFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDspHt%2BT9StokRn5Gw5hq0D8YnJWm3HmzM%2FwqpU7CHDvQIgVhqJNbQbNnoFC0C38kPY2%2FHbQxc6n7noUNGKbHTZ144qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl9ZmFNiqWhI%2Fz3circA2hwt28U1l%2BAzg0mXfNaW9IP35zY1Xh%2FpskaCuu4tdINeQ9qIGpVFVSKxle1i6E0ejCYdgy3x54xRfZSLl6LJZB%2FjapmkVC6umHoseQVpThJ8TMUphb9ympRdl9ItLtwG2us985%2FnULyM%2BHFoi0NQivmBezPlZpIDNL%2BUslk1oescuDNcv8BqPA7z%2BcEKhaAGo0rPdaaehOOHCHew3C%2FS%2BumUPccp7%2Bvo6lctpFJVxeMcHMCe%2FWJPxE78rz4rpfL6T3WeRSafRScfhg%2BelQGmK%2B1BikkM7N3PYP2Wz8JtAg%2B%2FN6rS1oiSopK24yIXRh%2BzlNbBVwJmpHuQELIoNGKwvJE%2Bjxs8sKhHDZLw313Hs66qFVLB7q5Wtw8rWHMBAc2ATmi2kps8ScOsqffBDs6q0JKvzC9lgs9QXcWrdhZsk6yGwgElPDtJFZJNZh8ToXcvwv7BNQkclruUawNEQAcdGUcgpq9YU8NHDi2x7ve81t7J%2FeKnQH8duUYHG%2FFU7TG8dR0djYZgqoE40kSQhReuFlwnityNLrfo02CxGirPX0jVeWdrMHh1r9mDEW16sVYk%2BOE0P9T0eAR%2BWqp7T1le0AVmezPSCd6BVpryq%2BcGK1PCrwgWPZbXYS044BjMKWBi8oGOqUBXz%2FTT66TMgYwuGOj4gHzK56ZwKHlsUpKkim%2BDopmWtNYGU2oJFITFzQ92YDBRr1IB5UKaoQUJ6vxunds9Se2BEBNymjZrY9MkOulayEcFJpNlPv%2B7PmDL0G%2BX8PhtF4mkFhpXux9cKoe75Wv6IfME%2FQzv%2BUAdAAEr3FesgEG734FRNLMy5QLS8lXKFZVkV9C3GX7BfRShQiEt1eF9qrsJqtjEFnZ&X-Amz-Signature=54d686725e24908503d6848084a22ae2df6a1f6a07433ee7a3393221d3a24843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

