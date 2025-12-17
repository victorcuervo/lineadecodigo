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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33SWN7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTCyajNLxnKjMOftudf4MahEa%2B%2Fr9mvBgU4xvTylL2gIhAMFV1o0kmAWszNfJNTdn5YVknNXcnbU1JoalCVd9uHfyKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSPSwcZZCJDCvjOxMq3ANypVa9R06B9Ma2bXo3%2FJAi0FkJvjWu1JGHINo5%2BAxwKd%2BDIBhLbRSQCxNyEa5nkBl3yEtt9u8vT9Ys%2BUi4mIlLXgiVJaFrH0xgo5mkUcNHTb5Dtwm1KuH%2F8ljDk4zEDoqI0sJ5IBeXVnyLc7WLU1Fpz1VY9XHrI%2FF0HLF6yDtRur%2FE7RO5N1v69L5D%2F8Ztaul6LiZwlkPk8SaumJsNOFfHV251LwixQ6UT8RLnangKNWLhacyWiQ0msKDfRvaUI52c9vTOIiIR33iXMvwAbMi3NPAHZvETuGxWqzRKMXxlmRqXj066I6TukndHNfZ4jU3cWnlSztueZcns7aNXgiPAEtmeBvWqkuGWOij%2BXb8iLMhsndX9rirgarQJtgYGJEj4OAY%2BCJoh%2Bdh8WlxZYECFRW6Say00ezJ55E0eHkT3s6eckjE%2BcbpYfPyCuth9YDAsGgPnwLHvhssaFt8%2FS5ofbUl1a7V4yzG12Npa1jvEaXvUUQzY8LyaBa7v65gkBBSOBgbnlwLbLzNjQ0hUQeqlQYCrQmedu%2BdDF1lCFVKauUFKlNzh%2BWGmp07h9zhljNvn2uv%2BcYHz7nW9mKDJ9IUk1k2WC%2FF6st9KhqRgIGc73XFQiw3FJKVsRix8RTCBoIvKBjqkAQMIjOzFZrpCoFL9q6gyykGTfQA0mKcGzgtz2esSeMdtGfpoX1%2Fvbup5lkRky2xO7mQacNizJ7Oj88ma%2FW5tt%2Bl6QqzgeiSbCDTqTdlSzTLJrk0r4%2BvfOXMuQ1pbxDMl1y7g13JmcjLcuu69C4ma0FQ%2BgLx52ZaL6m08BySBkyhrQ0sUa2ogubG3FWsymRl0Wkhk6LNn%2FcLD4%2FbZeBGHgvLGJ5Am&X-Amz-Signature=3ce33933c563508954d50bcc149f5b534abe815e6bb9a9660f4c6c0bf96c2ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33SWN7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTCyajNLxnKjMOftudf4MahEa%2B%2Fr9mvBgU4xvTylL2gIhAMFV1o0kmAWszNfJNTdn5YVknNXcnbU1JoalCVd9uHfyKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSPSwcZZCJDCvjOxMq3ANypVa9R06B9Ma2bXo3%2FJAi0FkJvjWu1JGHINo5%2BAxwKd%2BDIBhLbRSQCxNyEa5nkBl3yEtt9u8vT9Ys%2BUi4mIlLXgiVJaFrH0xgo5mkUcNHTb5Dtwm1KuH%2F8ljDk4zEDoqI0sJ5IBeXVnyLc7WLU1Fpz1VY9XHrI%2FF0HLF6yDtRur%2FE7RO5N1v69L5D%2F8Ztaul6LiZwlkPk8SaumJsNOFfHV251LwixQ6UT8RLnangKNWLhacyWiQ0msKDfRvaUI52c9vTOIiIR33iXMvwAbMi3NPAHZvETuGxWqzRKMXxlmRqXj066I6TukndHNfZ4jU3cWnlSztueZcns7aNXgiPAEtmeBvWqkuGWOij%2BXb8iLMhsndX9rirgarQJtgYGJEj4OAY%2BCJoh%2Bdh8WlxZYECFRW6Say00ezJ55E0eHkT3s6eckjE%2BcbpYfPyCuth9YDAsGgPnwLHvhssaFt8%2FS5ofbUl1a7V4yzG12Npa1jvEaXvUUQzY8LyaBa7v65gkBBSOBgbnlwLbLzNjQ0hUQeqlQYCrQmedu%2BdDF1lCFVKauUFKlNzh%2BWGmp07h9zhljNvn2uv%2BcYHz7nW9mKDJ9IUk1k2WC%2FF6st9KhqRgIGc73XFQiw3FJKVsRix8RTCBoIvKBjqkAQMIjOzFZrpCoFL9q6gyykGTfQA0mKcGzgtz2esSeMdtGfpoX1%2Fvbup5lkRky2xO7mQacNizJ7Oj88ma%2FW5tt%2Bl6QqzgeiSbCDTqTdlSzTLJrk0r4%2BvfOXMuQ1pbxDMl1y7g13JmcjLcuu69C4ma0FQ%2BgLx52ZaL6m08BySBkyhrQ0sUa2ogubG3FWsymRl0Wkhk6LNn%2FcLD4%2FbZeBGHgvLGJ5Am&X-Amz-Signature=39bfd1dda4158323d9e5486a9af4b3faa1ea47ddb21ad11a8febdb59bbb2af11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

