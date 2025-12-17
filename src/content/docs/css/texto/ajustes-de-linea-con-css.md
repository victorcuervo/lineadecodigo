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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64XSVQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOAjUk51V4Q%2BuQMwWumrMX1RgQypngvLNP44LQ1kDXAIhAPYzfhI2iNAbb4cIkpcZZCtEUAVXFtQxceL%2BRgqITdeMKv8DCHsQABoMNjM3NDIzMTgzODA1IgzsEzbLQudE6baNSagq3APwo75BlE6nDvf9SoGsPJjLc71eQIDqI33rT0DRqwyMbeZD%2FANZw%2F7A5pn%2FS1WfW7wf2lS6Spv5WvoRMO9OAD1ogpzKQ7Agva1jqqsNRvopX7QDJl9QviiAy96dMIE99FZmX5p8726F%2B1Tzy%2FoRcOLaOBueGLMsPRHL%2B16I5%2B2xAveqq8GJiMb55783wa8bQBCph30h%2FNGsaJBc%2FT1mbaUbQPR%2FkEeToaHGb59I0iJZFPhoQkvLrxvy48egurUybdXpkqk8gBRuwDa%2BGhPhlMAheBboqhIbhYW5vTYXrOYxmFea%2Fex7u8ziuHj5SbppEfpAFw%2BJ%2FxckQAb2Qb45sxMtACQASXpdRIEcAjW3PVhcWsWIQCpPqHT%2FniDuf8s5mBW01e94bBLJY%2Fyrd1MJFIpklsMet71xzsFW2sbWpKN4i27x7ICp7HyOog2sJ2uab%2BLH6DZtl1a9Ce5HQm9jmflGu5N8RXHFMqy6q5lCqO25ZB0VC8sR%2BZ0LTssWPI8hPy8PKfaEXtC9IZodymTWjr84FVuGGJzbZn1cpOxwj3TCWPurUVdVEErbk%2F3U3xb8wCiqGpyqBMAede6GGWO2csHwS01jhgKX6%2BrKaYj5BLfzZ7gIl65zk7fZQc5IYjCD8InKBjqkAebKJqqv%2Bq8pj%2B8NdUET2Q4fBMNcf9RRpPZLwyoZmbCacVaVJCwJzf47lJHbtaSE9mFc%2B0dvxpEFJyRajvJZECtMiVzWZv971bCg2quTuDfctnJRo0ldvIQsU%2Faj5vHxTfJg%2BbIVkZTaJwOuvhLiY%2BjdKHHsX%2BnJ7OIBIQlMIMgNPRLhc0iM9lHLz0IryD%2F%2BT5rG0fBtBPgDX8mjwTf0qq%2BDoQTy&X-Amz-Signature=9bbf2d9a80c318237052edda7aed742c11c4389bbd0b6746ffaafb0079294057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64XSVQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOAjUk51V4Q%2BuQMwWumrMX1RgQypngvLNP44LQ1kDXAIhAPYzfhI2iNAbb4cIkpcZZCtEUAVXFtQxceL%2BRgqITdeMKv8DCHsQABoMNjM3NDIzMTgzODA1IgzsEzbLQudE6baNSagq3APwo75BlE6nDvf9SoGsPJjLc71eQIDqI33rT0DRqwyMbeZD%2FANZw%2F7A5pn%2FS1WfW7wf2lS6Spv5WvoRMO9OAD1ogpzKQ7Agva1jqqsNRvopX7QDJl9QviiAy96dMIE99FZmX5p8726F%2B1Tzy%2FoRcOLaOBueGLMsPRHL%2B16I5%2B2xAveqq8GJiMb55783wa8bQBCph30h%2FNGsaJBc%2FT1mbaUbQPR%2FkEeToaHGb59I0iJZFPhoQkvLrxvy48egurUybdXpkqk8gBRuwDa%2BGhPhlMAheBboqhIbhYW5vTYXrOYxmFea%2Fex7u8ziuHj5SbppEfpAFw%2BJ%2FxckQAb2Qb45sxMtACQASXpdRIEcAjW3PVhcWsWIQCpPqHT%2FniDuf8s5mBW01e94bBLJY%2Fyrd1MJFIpklsMet71xzsFW2sbWpKN4i27x7ICp7HyOog2sJ2uab%2BLH6DZtl1a9Ce5HQm9jmflGu5N8RXHFMqy6q5lCqO25ZB0VC8sR%2BZ0LTssWPI8hPy8PKfaEXtC9IZodymTWjr84FVuGGJzbZn1cpOxwj3TCWPurUVdVEErbk%2F3U3xb8wCiqGpyqBMAede6GGWO2csHwS01jhgKX6%2BrKaYj5BLfzZ7gIl65zk7fZQc5IYjCD8InKBjqkAebKJqqv%2Bq8pj%2B8NdUET2Q4fBMNcf9RRpPZLwyoZmbCacVaVJCwJzf47lJHbtaSE9mFc%2B0dvxpEFJyRajvJZECtMiVzWZv971bCg2quTuDfctnJRo0ldvIQsU%2Faj5vHxTfJg%2BbIVkZTaJwOuvhLiY%2BjdKHHsX%2BnJ7OIBIQlMIMgNPRLhc0iM9lHLz0IryD%2F%2BT5rG0fBtBPgDX8mjwTf0qq%2BDoQTy&X-Amz-Signature=973caed730f6e6c46a5ff72cb83f72d7295153eaa6caf35ebc609f9cfa4225c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

