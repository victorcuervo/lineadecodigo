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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFK67S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ1OPLoHa54Yi0ESFB63aTbOsmf2zM3Q2BscN6q70PzAiByEgizpkBpPnkep1LJyM5Eymzl70r3HTo0E5INSuL%2Bjyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6Fpmq6AnhsMvuFYFKtwDTfKKOiLQ6d2rPgEk6%2B%2FHzI3DJ4v4lDL1u%2BkhiTEWd7R9%2F5cCKKjrJet%2FQkT1WBmRbYStdlO4AXJWVKHgtJ3iUGVPWynXsnSq9HK0GGbm9aW8z7h6wtlz20vksL6hYtqmtz2sIORXoOJ%2FnQcanp%2BBGqt%2BReUQevfL0uwxS8RIt8ga8gXtIyvPDFBKMggi2Wr6DvhM8lGMl0104bMTkCEkowIoycLKET81gpRUpUrjVhoV9iMP0SfvSMgU9OkVAcg3eRX6DrJhnhJ4%2Fh1cDtNpPoiwclpRs1GAmOyrHmilDv5lWMqtKHCbJGtOCWgr6momgpPZJEEKtMucGb4MR12S3V52z5K2HN9Uv2y83URpJbj6ZVc0w%2BUgQZ8obhVd2KoC7o8n%2BqsRYsX2Pr36sMI6WN6wdXmkmKIJJjoTIAbYTbik4V00k8gDW6dUnuau7TmRoPd9XG3wjU1A%2F%2FGCZSZLTeCyIFq%2FxBlb%2BGqZNj3PwWPDxt%2BPjlIhL8zKhrrftADVGrB7i1IZLWSUL7WtwIGEMnSMqiuaH16mXhHoFS3kvvXEgmKhZk8hbxwgaW%2B%2FYnEZRJSV5OEGmlpqhiMpLeDhftBzKoy15Ge3Yu5u8w2IMSEgwUjfHVmYybI85oYw67eJygY6pgFSgRwIZpdGgxbppApqy1mYuJPTiZb2kr7%2Bh65QvyGw1wNG3FnGXmEfO51h0OoG7X7AnERmVhqwEppdP4tHxGjvmPyx1%2FqsZJxg%2BVyWUUpgAf8qVqJiDCi28wOPFr4hREX4cwBTobnFWfy6KUdljKXslEhnOQ7JRpMCAv5K9YdAVVe8kBSFa0b8gjqaPIYEyi4a7H0qWs1HU5S6rG9BptWWW0ZvHUWz&X-Amz-Signature=459ac804b67ad2efea8367145b00d8d17b2dba842579875e4f13dd8e988dece0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFK67S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ1OPLoHa54Yi0ESFB63aTbOsmf2zM3Q2BscN6q70PzAiByEgizpkBpPnkep1LJyM5Eymzl70r3HTo0E5INSuL%2Bjyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6Fpmq6AnhsMvuFYFKtwDTfKKOiLQ6d2rPgEk6%2B%2FHzI3DJ4v4lDL1u%2BkhiTEWd7R9%2F5cCKKjrJet%2FQkT1WBmRbYStdlO4AXJWVKHgtJ3iUGVPWynXsnSq9HK0GGbm9aW8z7h6wtlz20vksL6hYtqmtz2sIORXoOJ%2FnQcanp%2BBGqt%2BReUQevfL0uwxS8RIt8ga8gXtIyvPDFBKMggi2Wr6DvhM8lGMl0104bMTkCEkowIoycLKET81gpRUpUrjVhoV9iMP0SfvSMgU9OkVAcg3eRX6DrJhnhJ4%2Fh1cDtNpPoiwclpRs1GAmOyrHmilDv5lWMqtKHCbJGtOCWgr6momgpPZJEEKtMucGb4MR12S3V52z5K2HN9Uv2y83URpJbj6ZVc0w%2BUgQZ8obhVd2KoC7o8n%2BqsRYsX2Pr36sMI6WN6wdXmkmKIJJjoTIAbYTbik4V00k8gDW6dUnuau7TmRoPd9XG3wjU1A%2F%2FGCZSZLTeCyIFq%2FxBlb%2BGqZNj3PwWPDxt%2BPjlIhL8zKhrrftADVGrB7i1IZLWSUL7WtwIGEMnSMqiuaH16mXhHoFS3kvvXEgmKhZk8hbxwgaW%2B%2FYnEZRJSV5OEGmlpqhiMpLeDhftBzKoy15Ge3Yu5u8w2IMSEgwUjfHVmYybI85oYw67eJygY6pgFSgRwIZpdGgxbppApqy1mYuJPTiZb2kr7%2Bh65QvyGw1wNG3FnGXmEfO51h0OoG7X7AnERmVhqwEppdP4tHxGjvmPyx1%2FqsZJxg%2BVyWUUpgAf8qVqJiDCi28wOPFr4hREX4cwBTobnFWfy6KUdljKXslEhnOQ7JRpMCAv5K9YdAVVe8kBSFa0b8gjqaPIYEyi4a7H0qWs1HU5S6rG9BptWWW0ZvHUWz&X-Amz-Signature=edd1356bb371d5d890905b1034484d3c179e48048218794343997caa84814c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

