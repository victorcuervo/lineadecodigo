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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVCN5IR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9W060oh1caTkZzbZRyg01edKJQ6zf68%2FiNRgzq8PQqQIhANoejg%2Bfy8vGS8oGoM5X29xs8gGJSOPwQO4sRyjiEY7uKv8DCHwQABoMNjM3NDIzMTgzODA1Igxi6%2FrT3T8t%2BESnuP0q3ANn7h7P24w4mZvXhhOyP9FWdDbsThUvQNLwqYnOcxE4Vr8LLQZm4j8lUmXeEvQQKoZkCtQFQzzrQFvJMFbQJHQl2ZTyA%2BsOVbeXsJzWrwF8OZ5Zojz3Sg%2FFpEVE%2FnefH5yU7227ktmIGcQ7imGwXUZHIB3BFFycQNXXcPTxWdt85i5MGS%2F3e76SvV11M0%2BIayUqpUCdrLJpwq2tEBDTTc%2BFLMV0t1biXzSnW%2BrIv9Tf2Fi7oTwqSOwrUOEtTEw3OPCKsnn0lUIEyarVxCDHL8KTUb0brlIepvWaB6f0glfODdbWcG6w5sIxzxIlzY21ivITSkjSQhbkMPhsOVhnN3KxTVk2EZ16ggL2JFj7Inn9iCbBmgLHY7cd2v9DgYgR%2FSq8g0GCcKoEarzKXDAUlCk78%2FmRzpTbXSC1QTfKL9UEWSSQdyRteb91IBuqvt%2FKcVyuGfwlwd%2FAayMBGT2i6WrFdDgN6UFgu%2FM%2BToPnqJQO5WywoqhsWjhLOGRt4cqFjvgYSLzglagfwVN9UX7XdA4PwPTUn37cL1F63R8JqIIK628zlEAcarfjrSHcmH4QPLSqWFaYnbomCcCWAdc%2Fi8jtuTBQbrg%2F69AFjEBLmzsZfsWmRGnSTcV%2FlL69tzCAj4rKBjqkAWreCf2EkLoz7i9%2F95D%2FJpN0HbweCsisAAFjhAvPxUgO2y%2B%2BCdQ7xFzBacZVWlIaK5ikK2koxMOqoX9N%2FSGeRbgWpUqY%2BbWwFrBQvut6LAVZ9vYaVDb%2BWbGXlDzASdOmqNnKMVg799xCLwsHq1f5RGU0WKRztAOOFWUzf1alI15NXNEaafPg49NJu9mLA96f4XtoPLYGB0OdOUmn8fn3ogrm8pI%2F&X-Amz-Signature=77117ef29045d6804cc304670367717115b31163451a068d1f77c785697dd520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVCN5IR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9W060oh1caTkZzbZRyg01edKJQ6zf68%2FiNRgzq8PQqQIhANoejg%2Bfy8vGS8oGoM5X29xs8gGJSOPwQO4sRyjiEY7uKv8DCHwQABoMNjM3NDIzMTgzODA1Igxi6%2FrT3T8t%2BESnuP0q3ANn7h7P24w4mZvXhhOyP9FWdDbsThUvQNLwqYnOcxE4Vr8LLQZm4j8lUmXeEvQQKoZkCtQFQzzrQFvJMFbQJHQl2ZTyA%2BsOVbeXsJzWrwF8OZ5Zojz3Sg%2FFpEVE%2FnefH5yU7227ktmIGcQ7imGwXUZHIB3BFFycQNXXcPTxWdt85i5MGS%2F3e76SvV11M0%2BIayUqpUCdrLJpwq2tEBDTTc%2BFLMV0t1biXzSnW%2BrIv9Tf2Fi7oTwqSOwrUOEtTEw3OPCKsnn0lUIEyarVxCDHL8KTUb0brlIepvWaB6f0glfODdbWcG6w5sIxzxIlzY21ivITSkjSQhbkMPhsOVhnN3KxTVk2EZ16ggL2JFj7Inn9iCbBmgLHY7cd2v9DgYgR%2FSq8g0GCcKoEarzKXDAUlCk78%2FmRzpTbXSC1QTfKL9UEWSSQdyRteb91IBuqvt%2FKcVyuGfwlwd%2FAayMBGT2i6WrFdDgN6UFgu%2FM%2BToPnqJQO5WywoqhsWjhLOGRt4cqFjvgYSLzglagfwVN9UX7XdA4PwPTUn37cL1F63R8JqIIK628zlEAcarfjrSHcmH4QPLSqWFaYnbomCcCWAdc%2Fi8jtuTBQbrg%2F69AFjEBLmzsZfsWmRGnSTcV%2FlL69tzCAj4rKBjqkAWreCf2EkLoz7i9%2F95D%2FJpN0HbweCsisAAFjhAvPxUgO2y%2B%2BCdQ7xFzBacZVWlIaK5ikK2koxMOqoX9N%2FSGeRbgWpUqY%2BbWwFrBQvut6LAVZ9vYaVDb%2BWbGXlDzASdOmqNnKMVg799xCLwsHq1f5RGU0WKRztAOOFWUzf1alI15NXNEaafPg49NJu9mLA96f4XtoPLYGB0OdOUmn8fn3ogrm8pI%2F&X-Amz-Signature=37753ce20f128572b2f9bd4b5a5b0ff0be3c81bc341f3702f014f5eebaa04f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

