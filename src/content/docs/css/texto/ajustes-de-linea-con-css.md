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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHMKT4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2BJBtGZKpV2rQePuR7Qg%2FAHNvdBWhL0FALAQregdpRQIhAJxso%2FdvZOY5vCHG5m4f48SeRa%2Fy%2FmxP7WC%2FLOhbWHDWKv8DCHQQABoMNjM3NDIzMTgzODA1IgwEtzL5O4H8g2I3t1gq3AM54k%2F9SsT5EkWEOFlq%2BwRx2CyCwWH0GU2WWaOviEwNgtwsl1mwAIHXaKN%2FhgL9AtsOYvqyxTUzxZMCeR%2FrSryFqFSrzLCFAyeskVgZf5z%2BSP9SyQs8RI%2FW5zx5nSnZ%2BLNTMyqYw9sJSGie%2FJZPXTwWNR%2BfN2GtpUj11iFb3EZ8mAo4je6qvRHgKa8ogFp%2B9OWRe2TcViGv5m%2Bk6JvOROmWHde%2BLubspC5jKI%2F%2BZ8N57I%2F3pBRrqYWWMnwCmBcQmy9ShqFAul2teT%2F4y5DdAH4m4r4KFU%2F1nSsh%2FqO552B8J4uOZV9a0GNnWeygbaVtxLTNAx1%2BhesvwXKf2H0A8NecJsMf6SlauHXbWdsLZX9HT2oCWS0HlXklvmBih7x0FYjTT2b5c3mWu1YydlqyP88%2F%2FkzGMA03ZiAFzzYxd8JU77YyamXXMkd4wqu0rIWsuMY7bW6WJYWcayTwvFOxPepfci6Eu1vtS3%2B8hH893i69EZajnzMYG9nAm%2FJETwkV4swC9uSfeu7rvcM6aZdiTzxcJT%2BjnUhf5%2Fw1vm60HLLYca4iwf9jjlJ%2FOh855SUT6OKBTEIet7IEJdscImoynI9k6HUzeBQitFJHFCpLs8uhmvKgNmkmqyJLKj3eHDDLsYjKBjqkAawTkNElvdJ1kL2jwokcvP6wejLYpRRpxG%2FEFbgIJ1Ut3Z8bd0dkLG4s7OYCQTj%2FZQXm7oNCsBTSLCfFHrUlO4%2F7tQGFx%2BL3c16dGPbPBIqbtcQQJ7mOJjNhilyIP%2F5HmHljAb6B%2FymFxIf%2BFGkgA08Tenv0JpnxrJKnWJ7NfN2YjxUP3Rt6Fg3LYCjJy5r5glTj40RqdLZsRVhvCYT1iVSEhgUQ&X-Amz-Signature=6ab9675c8b9cae0e89fa4fdb345a5026e6f86df1834683823431d8cabe574e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHMKT4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2BJBtGZKpV2rQePuR7Qg%2FAHNvdBWhL0FALAQregdpRQIhAJxso%2FdvZOY5vCHG5m4f48SeRa%2Fy%2FmxP7WC%2FLOhbWHDWKv8DCHQQABoMNjM3NDIzMTgzODA1IgwEtzL5O4H8g2I3t1gq3AM54k%2F9SsT5EkWEOFlq%2BwRx2CyCwWH0GU2WWaOviEwNgtwsl1mwAIHXaKN%2FhgL9AtsOYvqyxTUzxZMCeR%2FrSryFqFSrzLCFAyeskVgZf5z%2BSP9SyQs8RI%2FW5zx5nSnZ%2BLNTMyqYw9sJSGie%2FJZPXTwWNR%2BfN2GtpUj11iFb3EZ8mAo4je6qvRHgKa8ogFp%2B9OWRe2TcViGv5m%2Bk6JvOROmWHde%2BLubspC5jKI%2F%2BZ8N57I%2F3pBRrqYWWMnwCmBcQmy9ShqFAul2teT%2F4y5DdAH4m4r4KFU%2F1nSsh%2FqO552B8J4uOZV9a0GNnWeygbaVtxLTNAx1%2BhesvwXKf2H0A8NecJsMf6SlauHXbWdsLZX9HT2oCWS0HlXklvmBih7x0FYjTT2b5c3mWu1YydlqyP88%2F%2FkzGMA03ZiAFzzYxd8JU77YyamXXMkd4wqu0rIWsuMY7bW6WJYWcayTwvFOxPepfci6Eu1vtS3%2B8hH893i69EZajnzMYG9nAm%2FJETwkV4swC9uSfeu7rvcM6aZdiTzxcJT%2BjnUhf5%2Fw1vm60HLLYca4iwf9jjlJ%2FOh855SUT6OKBTEIet7IEJdscImoynI9k6HUzeBQitFJHFCpLs8uhmvKgNmkmqyJLKj3eHDDLsYjKBjqkAawTkNElvdJ1kL2jwokcvP6wejLYpRRpxG%2FEFbgIJ1Ut3Z8bd0dkLG4s7OYCQTj%2FZQXm7oNCsBTSLCfFHrUlO4%2F7tQGFx%2BL3c16dGPbPBIqbtcQQJ7mOJjNhilyIP%2F5HmHljAb6B%2FymFxIf%2BFGkgA08Tenv0JpnxrJKnWJ7NfN2YjxUP3Rt6Fg3LYCjJy5r5glTj40RqdLZsRVhvCYT1iVSEhgUQ&X-Amz-Signature=e41db8215e02e2ec435a23c08882c37255f6cc4627ac3a65e5c64be0a8f89780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

