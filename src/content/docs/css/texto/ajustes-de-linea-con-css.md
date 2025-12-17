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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2U2GIMX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNBJPdQSAdb9lVWvr%2BE13BgIP9Sc9AuEVp2JY4uUfZiAiBUdq7ag77Xzx%2F7G%2BLMlvIwn9az7VKhQJ6SRNQT8czhRSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMVzxbFy0lnf1vbFu%2FKtwD2CYT3CqENYnVf7h2DBJx2SqkEzixz1rS%2FyBEjBZXl%2B%2BFafVPvf69GhzTjgg3efgqqNIdFjKZosQPdW2WupzO6jD%2FosuEud6vuZp9mMfZBjVzZGgl%2BKBs0sXQeruXgyvaB4f8or0ChOH9Gq2p7h1N2bB1C%2Bq80X8FTg%2BBrRaViIZAIwWPcU1bU3ayDyNZGJZwr0LSt5sztNE6VDSjUy7g%2F4fSncfz%2Bp%2BqNSfDbxSqg1m2qd0ktPP%2F8x7eWeuTh85lvfdOJtxstgbRFCNVRzWCEiyrIfmFy3t07rIFihyO1EIsMnG3dUZcPbgUknx9a5JF6CO%2FLdqTLDoAOKneglNzYU8xKUcBgYIRFKT%2FYdVg3Aw7M1KOFu0ZGRMJ6%2BYelxJ6bjZ7TBnW9jnkJNqiNjgfe1vNmneF784hY4xTdvqLjmvTOs87uWZvItBvffozIYE5Ei36PdrjSYULzO3fvOZOxC9j0Fio3b1BdYqNJ0w0%2BBezCk8W2kkkTWMDD4tqigEFEXDOBIXvjuhgVGRDc72QJZxNEQA6KlmX8sBv5AnHlchcghulM9xmwlYPTKLzvDdT0n5t9RPVDIAXIMTSotZV%2BA3bl1STRSCKXiG5EdwMxUUOKFd6y%2FOnRqYGEY0w7sWKygY6pgFqwJe3XgG5fkybpsD8PY9BDG2sp9vg4UdUzkCGMZR9Zno9i1bo2uOwoGLuyY9qoVBdrsjqSVdRtVRounsT2e%2FQBQISdOlTfZ8DqaAOMwSYWyb1jp3QWqbJxFbOqZO19ZSZX38UsquVAcHdD12sjIo9le44zTvOLyWXAc0hwWGDRmwmgIi4gT5AavqnA%2BDViyjGe6x3m9syrKjcp%2BB8uHLESZaRRCbh&X-Amz-Signature=09ed12b8e1a9bbcfc19662987018477f2d091e15d8d7a962295697a7db612d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2U2GIMX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNBJPdQSAdb9lVWvr%2BE13BgIP9Sc9AuEVp2JY4uUfZiAiBUdq7ag77Xzx%2F7G%2BLMlvIwn9az7VKhQJ6SRNQT8czhRSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMVzxbFy0lnf1vbFu%2FKtwD2CYT3CqENYnVf7h2DBJx2SqkEzixz1rS%2FyBEjBZXl%2B%2BFafVPvf69GhzTjgg3efgqqNIdFjKZosQPdW2WupzO6jD%2FosuEud6vuZp9mMfZBjVzZGgl%2BKBs0sXQeruXgyvaB4f8or0ChOH9Gq2p7h1N2bB1C%2Bq80X8FTg%2BBrRaViIZAIwWPcU1bU3ayDyNZGJZwr0LSt5sztNE6VDSjUy7g%2F4fSncfz%2Bp%2BqNSfDbxSqg1m2qd0ktPP%2F8x7eWeuTh85lvfdOJtxstgbRFCNVRzWCEiyrIfmFy3t07rIFihyO1EIsMnG3dUZcPbgUknx9a5JF6CO%2FLdqTLDoAOKneglNzYU8xKUcBgYIRFKT%2FYdVg3Aw7M1KOFu0ZGRMJ6%2BYelxJ6bjZ7TBnW9jnkJNqiNjgfe1vNmneF784hY4xTdvqLjmvTOs87uWZvItBvffozIYE5Ei36PdrjSYULzO3fvOZOxC9j0Fio3b1BdYqNJ0w0%2BBezCk8W2kkkTWMDD4tqigEFEXDOBIXvjuhgVGRDc72QJZxNEQA6KlmX8sBv5AnHlchcghulM9xmwlYPTKLzvDdT0n5t9RPVDIAXIMTSotZV%2BA3bl1STRSCKXiG5EdwMxUUOKFd6y%2FOnRqYGEY0w7sWKygY6pgFqwJe3XgG5fkybpsD8PY9BDG2sp9vg4UdUzkCGMZR9Zno9i1bo2uOwoGLuyY9qoVBdrsjqSVdRtVRounsT2e%2FQBQISdOlTfZ8DqaAOMwSYWyb1jp3QWqbJxFbOqZO19ZSZX38UsquVAcHdD12sjIo9le44zTvOLyWXAc0hwWGDRmwmgIi4gT5AavqnA%2BDViyjGe6x3m9syrKjcp%2BB8uHLESZaRRCbh&X-Amz-Signature=4ca44512a2abc13a4873aa3bc89d7ff8e3905113f4662a82f9ea664e5cafacd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

