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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJQ2WXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDguxHA%2FYIZLkCwrjJDaU%2FI9vrwirLkvtI2XKAtGhvy5QIhALuPyVlSxRyUu7bCdJmSWihMkgs3vI%2FSAU%2Bmf8N2gE6pKv8DCHQQABoMNjM3NDIzMTgzODA1Igz25E4RTA3PpbHvrtQq3AOmU5OPXtyXM3tLkFdiiNt0L%2FmuUy8tg%2FD%2FbmkoljCGu9mu%2BCbL9Nj7APGEC%2FxsI5Ei4FlAUyVPLqZKUjx5U97VkhfcYET3EUapIIC9NutZuke%2B%2FxOvjKXLWp5SonZK9Wdx6qQcvXVzdO%2BObiGe%2BAUBWfzfvP5S8PSrX1dtBHfkm4YVZTk2W1fqlcMeDRW8jJcIxWQlR855RdUf%2FxNoh8xrgVBo7F1vpC%2FbbuDYFY3O0rpXv1oDgmbyQm3ooOZf5Iq2dloVtxHNOqXTyvwBNz%2B3zRRPrxjmj%2FRj2Uzrycax9QwjFhgm7qOTt2UHXhBqY0VXPIsSA56XJOiSDhxUGN3LynsyMvpYCdYAaZaDRgeFtf5H4nsHOJP8AtC4Xyc5vaRAeEmZIXZEP3eGqG09wFMMHWL7X9Qt10oDXFxtDBGyEZ7EyXPc3uZWMQ%2B1Yu8y8ztYI%2FJmseCSNSixn0m7Nz3tAjzrmpTdUXXOvez1xJ9h3IeKtVaCUQ9WTEqzp4D0B3Di9jdAtwU0nW6BRSNAvdQegO9sQOlHrgzdhu%2FuJZloKZjNYXl6FMnKCJlD85ZRBfdbgY9GU4zWOkNDs%2BIcy43ewyRyf7Y7eD1znwSp6B5iIJpYXL44k2H8Mf9fJjC8sYjKBjqkAYmX54wJyuzsbIUgB%2F%2F8%2B55MY1mk79RxTA3L9ZueM17K3uvvwYEbwxw8Cnr0XBgaXXaOa31XVOnCOmnp%2BV70SuIYmBOGn4VkksuOzhVqIQRoZflRCyCpFBDDTSOyfMkcObBV05bimqFS9C82f6RuOcNEIqTEPSvcRP5KMFA%2B6aYIGmjK%2Bgao1VgUaiOpj0J46sdsXGrW56QQCPfpy2%2BS3plvobF5&X-Amz-Signature=e7192dc408505e240ddd588e5eca74e589004f4986f07fdd4712cbe734a254a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJQ2WXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDguxHA%2FYIZLkCwrjJDaU%2FI9vrwirLkvtI2XKAtGhvy5QIhALuPyVlSxRyUu7bCdJmSWihMkgs3vI%2FSAU%2Bmf8N2gE6pKv8DCHQQABoMNjM3NDIzMTgzODA1Igz25E4RTA3PpbHvrtQq3AOmU5OPXtyXM3tLkFdiiNt0L%2FmuUy8tg%2FD%2FbmkoljCGu9mu%2BCbL9Nj7APGEC%2FxsI5Ei4FlAUyVPLqZKUjx5U97VkhfcYET3EUapIIC9NutZuke%2B%2FxOvjKXLWp5SonZK9Wdx6qQcvXVzdO%2BObiGe%2BAUBWfzfvP5S8PSrX1dtBHfkm4YVZTk2W1fqlcMeDRW8jJcIxWQlR855RdUf%2FxNoh8xrgVBo7F1vpC%2FbbuDYFY3O0rpXv1oDgmbyQm3ooOZf5Iq2dloVtxHNOqXTyvwBNz%2B3zRRPrxjmj%2FRj2Uzrycax9QwjFhgm7qOTt2UHXhBqY0VXPIsSA56XJOiSDhxUGN3LynsyMvpYCdYAaZaDRgeFtf5H4nsHOJP8AtC4Xyc5vaRAeEmZIXZEP3eGqG09wFMMHWL7X9Qt10oDXFxtDBGyEZ7EyXPc3uZWMQ%2B1Yu8y8ztYI%2FJmseCSNSixn0m7Nz3tAjzrmpTdUXXOvez1xJ9h3IeKtVaCUQ9WTEqzp4D0B3Di9jdAtwU0nW6BRSNAvdQegO9sQOlHrgzdhu%2FuJZloKZjNYXl6FMnKCJlD85ZRBfdbgY9GU4zWOkNDs%2BIcy43ewyRyf7Y7eD1znwSp6B5iIJpYXL44k2H8Mf9fJjC8sYjKBjqkAYmX54wJyuzsbIUgB%2F%2F8%2B55MY1mk79RxTA3L9ZueM17K3uvvwYEbwxw8Cnr0XBgaXXaOa31XVOnCOmnp%2BV70SuIYmBOGn4VkksuOzhVqIQRoZflRCyCpFBDDTSOyfMkcObBV05bimqFS9C82f6RuOcNEIqTEPSvcRP5KMFA%2B6aYIGmjK%2Bgao1VgUaiOpj0J46sdsXGrW56QQCPfpy2%2BS3plvobF5&X-Amz-Signature=f4eaa153eb4e3de2d8aba96dcfb34169df4ef7038d898ecfe67b32b01623fbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

