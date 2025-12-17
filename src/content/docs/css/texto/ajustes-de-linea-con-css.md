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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AHVAVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0%2BsqrETipJjX1MQS4%2BTPYB8oXKztfA4hQo2im6QP0WAiA529tSUoeIuILhFJLyZTqRYtLUUNEuvwooJ2uPn8ei3Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM94jzJC7TW8LyddJTKtwD1l1AxMfzK5%2BqzF%2Bd01L6PtNKDWuriYMnfrf50jrX3tAwvQDVTYeEiiF7FgF92j9zwgtmXpRwABZJSAZETKpkpxBzpOGkZzKWwozS%2BCO4lOWFGinnrWDr6yb96MXv5Jk61jab7dQBQljZ26edRm6Eu25ARv6tENAY80bfcx4CJZuRpKxyg%2FuP60XprxaQhYob2rYLS1zhCz9ESsY7VgUw6jdMafWkyHMf3QiefEk%2BCF34DQ%2F4lxFUdyxzm0dZBoZVPiFVM4sYq4CH0GrgwSo%2BSO2IJ6XQID8nOhLp%2FsW9QusUaB8oFKUSZiCv4BLwPFdOZImI09tJol%2BZZ3sNmYBe3BXgDiDgnAEn4h%2FsVSatHkr6QHvZ%2Bk%2FcZix%2FXeIOUdH23%2BkSTxU0j28PzP%2FNjayi%2BrOnkdnyntTbSsqWxQRurTBzDYd3yLj35M4urnbbMflnBfd%2FFsZFaKLNlYeXFidQZyycLz%2FntYFQv8Qvdmc%2Bx%2FD1On%2Bn05Rqxmf4%2BLDG6bj7bqrGMDK%2BvXa5GhSQSkHKPRubGZbEqxLcqsTIzwU%2F2JfUc059WzXprq7yuu34GgmP1F%2F4uowYANqH%2FJpal0tBJEiExz86U%2BSctJlQ0Wp6V4X2njKIhEu9jWmsYfwwi%2BmIygY6pgHGIOPk2eI%2BDq4FjTrgzj%2FioXtrZQ%2Bu8NbymTUNfmmPqV%2B2NTzqUigrHBpHV9oCjdVxuVamiyMh4iREGT2jqy0qcIUfyThouVGqa7p86GtxGpqHjquXwg957cQ6clKlIdEljjs%2FCk2wHCsvrGyFE4oBxWVJDnaczHcqmDAk47861ydDW8DyBEM%2FlldTGHMMIgGB%2BmN4yosKwrwmZKjYM0O7YoEBYCt2&X-Amz-Signature=e5ace217a0f7aa802ca313934acc928bfa60a0331f9a2daabd0da3840d79bca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AHVAVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0%2BsqrETipJjX1MQS4%2BTPYB8oXKztfA4hQo2im6QP0WAiA529tSUoeIuILhFJLyZTqRYtLUUNEuvwooJ2uPn8ei3Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM94jzJC7TW8LyddJTKtwD1l1AxMfzK5%2BqzF%2Bd01L6PtNKDWuriYMnfrf50jrX3tAwvQDVTYeEiiF7FgF92j9zwgtmXpRwABZJSAZETKpkpxBzpOGkZzKWwozS%2BCO4lOWFGinnrWDr6yb96MXv5Jk61jab7dQBQljZ26edRm6Eu25ARv6tENAY80bfcx4CJZuRpKxyg%2FuP60XprxaQhYob2rYLS1zhCz9ESsY7VgUw6jdMafWkyHMf3QiefEk%2BCF34DQ%2F4lxFUdyxzm0dZBoZVPiFVM4sYq4CH0GrgwSo%2BSO2IJ6XQID8nOhLp%2FsW9QusUaB8oFKUSZiCv4BLwPFdOZImI09tJol%2BZZ3sNmYBe3BXgDiDgnAEn4h%2FsVSatHkr6QHvZ%2Bk%2FcZix%2FXeIOUdH23%2BkSTxU0j28PzP%2FNjayi%2BrOnkdnyntTbSsqWxQRurTBzDYd3yLj35M4urnbbMflnBfd%2FFsZFaKLNlYeXFidQZyycLz%2FntYFQv8Qvdmc%2Bx%2FD1On%2Bn05Rqxmf4%2BLDG6bj7bqrGMDK%2BvXa5GhSQSkHKPRubGZbEqxLcqsTIzwU%2F2JfUc059WzXprq7yuu34GgmP1F%2F4uowYANqH%2FJpal0tBJEiExz86U%2BSctJlQ0Wp6V4X2njKIhEu9jWmsYfwwi%2BmIygY6pgHGIOPk2eI%2BDq4FjTrgzj%2FioXtrZQ%2Bu8NbymTUNfmmPqV%2B2NTzqUigrHBpHV9oCjdVxuVamiyMh4iREGT2jqy0qcIUfyThouVGqa7p86GtxGpqHjquXwg957cQ6clKlIdEljjs%2FCk2wHCsvrGyFE4oBxWVJDnaczHcqmDAk47861ydDW8DyBEM%2FlldTGHMMIgGB%2BmN4yosKwrwmZKjYM0O7YoEBYCt2&X-Amz-Signature=fdff342cd2ec3dfb720d0287baf3b523c545da0b3c9be0bcc0f4fd801c0c730b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

