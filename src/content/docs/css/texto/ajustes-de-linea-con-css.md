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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QCXCUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJrkDqCdu6no6qm2iuMr6VuxU9JGah1K4sTFgFDFVbAIhAOb%2FCyElyoiR8npcD%2Bp7Hm7PrYOSUCv2bWE70t9D0Pe9Kv8DCH4QABoMNjM3NDIzMTgzODA1Igy%2BkuB7LR%2Bjn%2B2vMtEq3ANE49KSrHOUvxcBXcJ7cJYNf23zDAEmXwhIQ9uTRTOuySjI9TWuksPS7fA6zJ5JLKV84gwCN2WAioRLxwqOdhy5sfV0WCpbnZx4fOIwtdc0A7WHVqncS4cXrIXR%2FaWwFB7h2wzhNEUK%2BLL5pbN4SSpL%2Fw3IFGnOa%2Ff%2BcVbQgqYEXEK5DhlD7SDhp7iruS4Z%2BDBhSSp%2FgA25Mzy4%2BJi5RUldmLOiQ3ClUs3V24YrrHQQypEzPy5NMZCH0Y8YPzKz1Gy5%2FZAX59bQWOmOxGQID604GLMW95MKGJKj%2FLLt%2FimnsjCRE9mx4PQbXynF9INVNEQCg7svRJWBZ4CwbCKEHBzHF36Ng7ZBSnCQNQ0QcJLNA4B0tSebol4d2muKCqvYXDN1OdF2UILzcou%2Ffe279jZzmJK54NqeLJRgE5l71AwpL0gJ2r%2BXBfcdY1LiK7U33IK5uUtY3EMjnZ%2Fs%2F%2B18Cwu5p3%2FPqreSS5UowBT1DZcpCUwdvZ3kXd5j5%2BYcYDp2g90G03sO8ZaZDPeux79XuKY0n5jxbK4KahU6aIpNKeso%2FdVFnc4F6pcvXT96uTp26zUME2EBIfb%2F1neRJSOyLRy%2BA59r2wsyidqwvpTXgDuJFBa%2FZ0WXAshwbklxdzDLxYrKBjqkAYHSTTXIFJGP8Z0FVX%2Fi32ccFrw0JBg3uQwcnj3stMlCDKb95ohhU9qrmA3VOPqyp9b8jA09MkwVr8t3beqes7%2F00fZOTj9%2BBHS%2B66h1Ar2MMiqSXjixgMwMp3gONIl7ifz3L511YEmmM7RCSYEWmOfnWCc%2Bf%2F7mn9kJdbeudIHgFN1s10u6xCidsdQDrc0yMVjpqjGRU8qjrt7L7%2BFMthuo%2F7fG&X-Amz-Signature=68977766a3266c9432923b56bd63782302540e466592d6684dbf145b2dce6219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QCXCUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJrkDqCdu6no6qm2iuMr6VuxU9JGah1K4sTFgFDFVbAIhAOb%2FCyElyoiR8npcD%2Bp7Hm7PrYOSUCv2bWE70t9D0Pe9Kv8DCH4QABoMNjM3NDIzMTgzODA1Igy%2BkuB7LR%2Bjn%2B2vMtEq3ANE49KSrHOUvxcBXcJ7cJYNf23zDAEmXwhIQ9uTRTOuySjI9TWuksPS7fA6zJ5JLKV84gwCN2WAioRLxwqOdhy5sfV0WCpbnZx4fOIwtdc0A7WHVqncS4cXrIXR%2FaWwFB7h2wzhNEUK%2BLL5pbN4SSpL%2Fw3IFGnOa%2Ff%2BcVbQgqYEXEK5DhlD7SDhp7iruS4Z%2BDBhSSp%2FgA25Mzy4%2BJi5RUldmLOiQ3ClUs3V24YrrHQQypEzPy5NMZCH0Y8YPzKz1Gy5%2FZAX59bQWOmOxGQID604GLMW95MKGJKj%2FLLt%2FimnsjCRE9mx4PQbXynF9INVNEQCg7svRJWBZ4CwbCKEHBzHF36Ng7ZBSnCQNQ0QcJLNA4B0tSebol4d2muKCqvYXDN1OdF2UILzcou%2Ffe279jZzmJK54NqeLJRgE5l71AwpL0gJ2r%2BXBfcdY1LiK7U33IK5uUtY3EMjnZ%2Fs%2F%2B18Cwu5p3%2FPqreSS5UowBT1DZcpCUwdvZ3kXd5j5%2BYcYDp2g90G03sO8ZaZDPeux79XuKY0n5jxbK4KahU6aIpNKeso%2FdVFnc4F6pcvXT96uTp26zUME2EBIfb%2F1neRJSOyLRy%2BA59r2wsyidqwvpTXgDuJFBa%2FZ0WXAshwbklxdzDLxYrKBjqkAYHSTTXIFJGP8Z0FVX%2Fi32ccFrw0JBg3uQwcnj3stMlCDKb95ohhU9qrmA3VOPqyp9b8jA09MkwVr8t3beqes7%2F00fZOTj9%2BBHS%2B66h1Ar2MMiqSXjixgMwMp3gONIl7ifz3L511YEmmM7RCSYEWmOfnWCc%2Bf%2F7mn9kJdbeudIHgFN1s10u6xCidsdQDrc0yMVjpqjGRU8qjrt7L7%2BFMthuo%2F7fG&X-Amz-Signature=3576dcccb87386d7dd3057bd2eb9a57e8b655b032613879dbcf611d78636c03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

