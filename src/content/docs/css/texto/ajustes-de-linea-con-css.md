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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SPIUKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY58Icuc6ugY0ocVOEfiW0liJK5q4tj3IPLIPHfMlmsAiEAgD20aL89lvIBTYE2LTcU6mziUJ3qNI1I68jp65OlhxIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP%2B2Ne397tmWEqFHtircA4sRBlRmGoLCEiz%2F01OxW59MXb%2BLufzm0xqGv3fJ1WeisS%2FL0vOpUWPk%2B3kFI4qf8%2FpVxn2AZZHmfxaUbs7PfFhvXhNn%2FWDWf3HHVxMsPHT%2FqFOP298WRbS8jXm1IJnzunv7qAI4tOPeAaZ%2FS8BwHIRkW8UelnekuVZ%2BisvArJouWTyqnWHJy1F5L8QR0ckEynAXrMMXviGpaJuRlF2q6YJRpJUEqZNZOvPjFoOj6YCV6cJMHwfTrUbkos7dazhxJj11Dww1cQ4xdJDDy1phAMX6RG6p3Gi8V%2Btud7ThxwYTHLHI9oqfy3pdB94Ludnm39v7rWgp8IzUnjSaS1dcmQY61yAHrdX3%2BO19v5O%2FBXTB6S3jB2L0mjz5TDiNvsktPkMptf1mZJuQPPeFP3OClf%2FbKBRsjg7mwTsyoYtl7eRWqga%2BRlxmjAaEhg7o76eg8csIKOMVDaTXDF8%2Fi3znw%2B5cLYRVCZlNi8JvEu0RbLRs%2FqckND4d0H%2FehQ3eXEb0oyxA6rLxRctAlwvH88bcxCD06owhT6sQzKVM1PUWTHL2y8PYU7e%2FtWdFFBm3JZzy91YWOsR82AOUyHxdWxqDwGsgGWpps0Polp1yBlGHBdDaUe8Odc%2FBe51lTmsiMPLFisoGOqUBgcFy8ei3yOXp7mnxuUoGhY40qAIOhJENWnipDenx7MwdaMA0NE2w%2BOlkMwnuPw3QzGU5fv5K00S8Y%2BcDDkZgi20RPhtIdlwlAXI%2FnnRlfLcSF0b9U7gCk1NvlezyI0HJRgsFIVQrNqG%2F2lIphsQUE2r06XCyFLNPvLo9EC810d67F1JQThf5MnlChHO5nJrdqDIGtenCtyWIm5sVVBEfxdRrcsTy&X-Amz-Signature=13e6183400414b0abe6c705be98a610fa60e05cfc39eaca235079b5b90c44433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SPIUKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY58Icuc6ugY0ocVOEfiW0liJK5q4tj3IPLIPHfMlmsAiEAgD20aL89lvIBTYE2LTcU6mziUJ3qNI1I68jp65OlhxIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP%2B2Ne397tmWEqFHtircA4sRBlRmGoLCEiz%2F01OxW59MXb%2BLufzm0xqGv3fJ1WeisS%2FL0vOpUWPk%2B3kFI4qf8%2FpVxn2AZZHmfxaUbs7PfFhvXhNn%2FWDWf3HHVxMsPHT%2FqFOP298WRbS8jXm1IJnzunv7qAI4tOPeAaZ%2FS8BwHIRkW8UelnekuVZ%2BisvArJouWTyqnWHJy1F5L8QR0ckEynAXrMMXviGpaJuRlF2q6YJRpJUEqZNZOvPjFoOj6YCV6cJMHwfTrUbkos7dazhxJj11Dww1cQ4xdJDDy1phAMX6RG6p3Gi8V%2Btud7ThxwYTHLHI9oqfy3pdB94Ludnm39v7rWgp8IzUnjSaS1dcmQY61yAHrdX3%2BO19v5O%2FBXTB6S3jB2L0mjz5TDiNvsktPkMptf1mZJuQPPeFP3OClf%2FbKBRsjg7mwTsyoYtl7eRWqga%2BRlxmjAaEhg7o76eg8csIKOMVDaTXDF8%2Fi3znw%2B5cLYRVCZlNi8JvEu0RbLRs%2FqckND4d0H%2FehQ3eXEb0oyxA6rLxRctAlwvH88bcxCD06owhT6sQzKVM1PUWTHL2y8PYU7e%2FtWdFFBm3JZzy91YWOsR82AOUyHxdWxqDwGsgGWpps0Polp1yBlGHBdDaUe8Odc%2FBe51lTmsiMPLFisoGOqUBgcFy8ei3yOXp7mnxuUoGhY40qAIOhJENWnipDenx7MwdaMA0NE2w%2BOlkMwnuPw3QzGU5fv5K00S8Y%2BcDDkZgi20RPhtIdlwlAXI%2FnnRlfLcSF0b9U7gCk1NvlezyI0HJRgsFIVQrNqG%2F2lIphsQUE2r06XCyFLNPvLo9EC810d67F1JQThf5MnlChHO5nJrdqDIGtenCtyWIm5sVVBEfxdRrcsTy&X-Amz-Signature=c1f41542eacacb4c85fd1a1bae7e49491b9adac88a17aa043d00eeac2cce117d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

