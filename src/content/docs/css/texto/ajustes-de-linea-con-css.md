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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI46JIE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BxoYtH%2BtLYOH4qPaVQ9Ujn3VdC7R2rFZ3ZmZIpqODLAiAq8iCrXLxXQ11HJOMfveFV4sIynHqji64%2BoKaSbRMdVSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMXgCZWTB35TMcKolmKtwD75x6powF6pWEjS3T2FwsgXR5DiqoGLxwDcqSHP5Qi7OsSDeyOb0h1SBDZNmgbRxAsFhIwhtxxvqOMfXSGo9t64Xp1d1ow88Rz4Jy4vhExP6%2BSXCS2YeaHYb3RhDo6LBNPx4HpMqmb1FfgGYwsXxcnQxj2Dmvl%2BwHpqv5%2BbA5Zuaq1Yz7ITTByD%2BYOF4Isv3Z2CFETL5K3mCdl5%2F61FcVMySvMCUlagXSwhmGNM8mQJlETMzEmqaBF4bUVBepT15KAevz%2B0kidDJNCZJTKsZDoSmtK2UQZOxF6yQMsklBiEtL4qlcOIEYz9wzMaXuunaqh8txYNfDWaJAcf%2BdcVpiHmdopUC0JhbUA7p4UEe9cP7z9xxAV2kOjQ7lmXYR9lobIkDKWUOZhJKnDq0KD1G%2BHvuuln4%2BZr%2FTm0x2czmr%2FZOnhe%2Bnr8y7770jGyL57QyGqnT9FD2hSKI4h%2B85gyBnByRQerHN6OL%2Fmgk0R1Gu%2BGn4oskBr7ooS2xPkpcMRBcWftl%2BnknRSZR15w0BEK52wA7D7yyh6zkpt26nMpdQDG9U1fxraY%2FH%2F6eZLuEYyzXiyuPXLdmzPs3uQNlQlXj5OXna6GDnrKZ0k244v2JsSRMu2t3twOJ2C5upPgcw38WKygY6pgHk87vwDMOJKv5awJSpi%2FK6SgQJLHY3vQu0Si5BIDzLA0UcbknFrcZyVy1b3XDaDeCdaDHw8YgLZVy9TOkNAmVvxrplhQpl785yBaZua4qd6gxZaI%2FQAJXEYpdQgYJOzXGnMZ9JIOKU5ttbXHtr3CH4KimDgOEw89YJa4NDDUaHwQmUY%2FxrrMM7TvVs7ih9Kp26HiaHekCBYnstSwdk1LpP1FxRcZuW&X-Amz-Signature=6b6b38c7bf05e74334d9f0edcd00eb61e1dad736edc7a2d3ca6fd3f05becccf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI46JIE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BxoYtH%2BtLYOH4qPaVQ9Ujn3VdC7R2rFZ3ZmZIpqODLAiAq8iCrXLxXQ11HJOMfveFV4sIynHqji64%2BoKaSbRMdVSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMXgCZWTB35TMcKolmKtwD75x6powF6pWEjS3T2FwsgXR5DiqoGLxwDcqSHP5Qi7OsSDeyOb0h1SBDZNmgbRxAsFhIwhtxxvqOMfXSGo9t64Xp1d1ow88Rz4Jy4vhExP6%2BSXCS2YeaHYb3RhDo6LBNPx4HpMqmb1FfgGYwsXxcnQxj2Dmvl%2BwHpqv5%2BbA5Zuaq1Yz7ITTByD%2BYOF4Isv3Z2CFETL5K3mCdl5%2F61FcVMySvMCUlagXSwhmGNM8mQJlETMzEmqaBF4bUVBepT15KAevz%2B0kidDJNCZJTKsZDoSmtK2UQZOxF6yQMsklBiEtL4qlcOIEYz9wzMaXuunaqh8txYNfDWaJAcf%2BdcVpiHmdopUC0JhbUA7p4UEe9cP7z9xxAV2kOjQ7lmXYR9lobIkDKWUOZhJKnDq0KD1G%2BHvuuln4%2BZr%2FTm0x2czmr%2FZOnhe%2Bnr8y7770jGyL57QyGqnT9FD2hSKI4h%2B85gyBnByRQerHN6OL%2Fmgk0R1Gu%2BGn4oskBr7ooS2xPkpcMRBcWftl%2BnknRSZR15w0BEK52wA7D7yyh6zkpt26nMpdQDG9U1fxraY%2FH%2F6eZLuEYyzXiyuPXLdmzPs3uQNlQlXj5OXna6GDnrKZ0k244v2JsSRMu2t3twOJ2C5upPgcw38WKygY6pgHk87vwDMOJKv5awJSpi%2FK6SgQJLHY3vQu0Si5BIDzLA0UcbknFrcZyVy1b3XDaDeCdaDHw8YgLZVy9TOkNAmVvxrplhQpl785yBaZua4qd6gxZaI%2FQAJXEYpdQgYJOzXGnMZ9JIOKU5ttbXHtr3CH4KimDgOEw89YJa4NDDUaHwQmUY%2FxrrMM7TvVs7ih9Kp26HiaHekCBYnstSwdk1LpP1FxRcZuW&X-Amz-Signature=668f44a7b43bb95c9f4bb75b651a86bb6afd23600763ffaee7adf44cebf295ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

