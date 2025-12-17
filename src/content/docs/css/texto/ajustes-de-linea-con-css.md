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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQHEDGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV3vxhaFoqGJR9eJ8EmVUiFDTYcj4tnCuNLSHrlisRgIhAIqNTxWZnznUZwF2yLH9gx7cS4bM724YbPQfRYU%2By15PKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwneq0BipC8wma5PG4q3AMU8oycKmBLDHnonRl5HLHeZY1A%2B2jNmOLSvyxr0K3gAysWmss0lqIm5gaV4QFryWAZ7MSy%2FkRy48ZCK6Rjq8N8EOJB4Ymvsok0M35L1IsYIUOzZK6qW9u8wym5S2EOF7FTXze%2BNIcrGs3m%2Bv0HBg5y7fDV90CCKQsFfpcs%2FhGcuVEqt9or%2BhkXSNg%2Bb6GX8MUq1Bx1g8iIbWv45Q9bBF296pY3uiD%2Flw7zxuacB6fNRDL4lpo5fnnphV9JShGEOPaa6CR2%2F%2B5pBthsPWvrSlKJLYJ5VKzRIfmwBnVg1P7fud1%2FS0wb7FMyFSbVUVk8rYS8KimueO4Xy1zdITh5jqjVXVRE7p8lz4lLXCo8pN0765ed7su3b4%2BmuhDJVuYImvbJPa10fOpDn7bkGuEr98RcX5Zf64j3%2FW%2B2HQ53Y5Z3jqu69WblFUpdoBn8TbD0MPVGqchZaM5IqKLl6Jn1ZaGVWD%2B0IOeQNFXY3s1o4piHx4GaebguitlYbzDCkDXYLqThtB3CFXtLhf0zqAqhPO1VmdYVJ8UFCzT4UD9OZAxVKz0YLObmEfs2abWhC2r4UooJ4pYAsRt4Bk6aqE3D2l%2BP7WwVbRjkIaTyBqz0miSnFy1NStdjhprPaiVmbDDogIvKBjqkAcrvCrwvo8gxhhhY2anpAkuPRJVdoH9GuAt773%2BbKWvWY2K0vfvGosPQfGniWmmMZmjxmpGNkAX3pIECFdmZkql7vsH41L52izg00t8FNR%2FsL5NJP5aTcGhWEvkFZ86TM86Px9Svk3Rbte6DtPgskPWIBwL37wf5tOXKGLZMDOMJ4qLOgaP68GvfG3QFDTzpQqeiLTQmD0J9IuwCO06hU86McNP3&X-Amz-Signature=05420ecebce8416ae582a3367a3dfc238440e9aeace258a5625ba8e539c0be8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQHEDGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV3vxhaFoqGJR9eJ8EmVUiFDTYcj4tnCuNLSHrlisRgIhAIqNTxWZnznUZwF2yLH9gx7cS4bM724YbPQfRYU%2By15PKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwneq0BipC8wma5PG4q3AMU8oycKmBLDHnonRl5HLHeZY1A%2B2jNmOLSvyxr0K3gAysWmss0lqIm5gaV4QFryWAZ7MSy%2FkRy48ZCK6Rjq8N8EOJB4Ymvsok0M35L1IsYIUOzZK6qW9u8wym5S2EOF7FTXze%2BNIcrGs3m%2Bv0HBg5y7fDV90CCKQsFfpcs%2FhGcuVEqt9or%2BhkXSNg%2Bb6GX8MUq1Bx1g8iIbWv45Q9bBF296pY3uiD%2Flw7zxuacB6fNRDL4lpo5fnnphV9JShGEOPaa6CR2%2F%2B5pBthsPWvrSlKJLYJ5VKzRIfmwBnVg1P7fud1%2FS0wb7FMyFSbVUVk8rYS8KimueO4Xy1zdITh5jqjVXVRE7p8lz4lLXCo8pN0765ed7su3b4%2BmuhDJVuYImvbJPa10fOpDn7bkGuEr98RcX5Zf64j3%2FW%2B2HQ53Y5Z3jqu69WblFUpdoBn8TbD0MPVGqchZaM5IqKLl6Jn1ZaGVWD%2B0IOeQNFXY3s1o4piHx4GaebguitlYbzDCkDXYLqThtB3CFXtLhf0zqAqhPO1VmdYVJ8UFCzT4UD9OZAxVKz0YLObmEfs2abWhC2r4UooJ4pYAsRt4Bk6aqE3D2l%2BP7WwVbRjkIaTyBqz0miSnFy1NStdjhprPaiVmbDDogIvKBjqkAcrvCrwvo8gxhhhY2anpAkuPRJVdoH9GuAt773%2BbKWvWY2K0vfvGosPQfGniWmmMZmjxmpGNkAX3pIECFdmZkql7vsH41L52izg00t8FNR%2FsL5NJP5aTcGhWEvkFZ86TM86Px9Svk3Rbte6DtPgskPWIBwL37wf5tOXKGLZMDOMJ4qLOgaP68GvfG3QFDTzpQqeiLTQmD0J9IuwCO06hU86McNP3&X-Amz-Signature=2d59bfadc307cf8d290ac92e4ae5a7df7605506369148cd797748ca58f4adb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

