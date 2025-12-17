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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCXKA3N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BvqH3mCw%2FDPiLDJURydi4%2BVXX26fM8h%2F2jLPkXnvfAIhAMd7ZF%2BOd1BqlzLjHmg8Sc3lysOm9HU6MPVr2imEyhk2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkICGJlV%2FGVKe3QToq3APJLkUrJIn7PS6paELOMpnwK0YX5qW7tIAxcxGcgxeDbEpR84BfrZF8PqZzsYdPbMOqDIZuAWzm6CP1UkZX5boZxxRtyzbVnq6SwApibqjCD%2F2oB9%2F2LmOnL455SGA6SNb4KVGanCfcALyeYda5SicKyNCqRsxdm4PZ2DoF6KfiEXmB19xGnHGItRXQiscJVLuqqjKMh2HzCIYSC4oVGGhKFyHYB74lU1CiyJb9GU26pyqVUzoSx%2BhGZzOaO6A6Nb3SFXNxG3Xo2cO91VPUmTMPJPNKdUEQ%2BmtU%2Fhtn7JSFvH7o3stKYNzfpNNo37IQUnH9P0qRwDYWSEUfLtZxEVqL3M%2FsEEOOoq%2F75OLg3iU8nfkYAPhhVnCYve8rSV6MlR4s8OY9IaOScUyTUtZi69NnQtrU8DrMxYftuyCWNfVSKg1Bo3nCE0LLFaQBe7FPjjY7l%2FLZZ2CosQdb%2FpcNrBBDlBrHbqFhbSYeHoisQ%2FCaW1S%2Fcd31nliYQ%2FKu8e0N2jb23eCLpEL%2BoQKL3zpwHU8ahqDpGUBg9N5f1E%2BkAYfmkmgCjUxY%2Bw2%2BX8s7MVA6vCJhUCS%2FUFzYKDlGgEc%2FGqiEjCcxUs5QqPjFNjQsj1PSueJJZ08MOGlESk30LDCAoIvKBjqkAZR5VSd8bAtluiLDLUGQpb5LA%2F9FD97N8YmMSD7xjx8veaIeLKIxw%2FJ5j5cnt8LQmboGy5J3jjxWzBAXwIeRqHKnwJsu8M%2Bm6Vtse3csIb3bTLe2OZdBP7pCR5aRsqmiu6tE1tTnLZ%2F4hJCktea2KuUvAkA7oTqPlC5rhMxfBtOQhzpEm311EXry3ADaVPQRWwbGiZdyk766Dbjkb3PGjZ7Q%2F47C&X-Amz-Signature=bf626b2693d89f128861af4dfa88fd2d3be05ce36c4ff87862f6678623a3809c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCXKA3N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BvqH3mCw%2FDPiLDJURydi4%2BVXX26fM8h%2F2jLPkXnvfAIhAMd7ZF%2BOd1BqlzLjHmg8Sc3lysOm9HU6MPVr2imEyhk2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkICGJlV%2FGVKe3QToq3APJLkUrJIn7PS6paELOMpnwK0YX5qW7tIAxcxGcgxeDbEpR84BfrZF8PqZzsYdPbMOqDIZuAWzm6CP1UkZX5boZxxRtyzbVnq6SwApibqjCD%2F2oB9%2F2LmOnL455SGA6SNb4KVGanCfcALyeYda5SicKyNCqRsxdm4PZ2DoF6KfiEXmB19xGnHGItRXQiscJVLuqqjKMh2HzCIYSC4oVGGhKFyHYB74lU1CiyJb9GU26pyqVUzoSx%2BhGZzOaO6A6Nb3SFXNxG3Xo2cO91VPUmTMPJPNKdUEQ%2BmtU%2Fhtn7JSFvH7o3stKYNzfpNNo37IQUnH9P0qRwDYWSEUfLtZxEVqL3M%2FsEEOOoq%2F75OLg3iU8nfkYAPhhVnCYve8rSV6MlR4s8OY9IaOScUyTUtZi69NnQtrU8DrMxYftuyCWNfVSKg1Bo3nCE0LLFaQBe7FPjjY7l%2FLZZ2CosQdb%2FpcNrBBDlBrHbqFhbSYeHoisQ%2FCaW1S%2Fcd31nliYQ%2FKu8e0N2jb23eCLpEL%2BoQKL3zpwHU8ahqDpGUBg9N5f1E%2BkAYfmkmgCjUxY%2Bw2%2BX8s7MVA6vCJhUCS%2FUFzYKDlGgEc%2FGqiEjCcxUs5QqPjFNjQsj1PSueJJZ08MOGlESk30LDCAoIvKBjqkAZR5VSd8bAtluiLDLUGQpb5LA%2F9FD97N8YmMSD7xjx8veaIeLKIxw%2FJ5j5cnt8LQmboGy5J3jjxWzBAXwIeRqHKnwJsu8M%2Bm6Vtse3csIb3bTLe2OZdBP7pCR5aRsqmiu6tE1tTnLZ%2F4hJCktea2KuUvAkA7oTqPlC5rhMxfBtOQhzpEm311EXry3ADaVPQRWwbGiZdyk766Dbjkb3PGjZ7Q%2F47C&X-Amz-Signature=a3fd1774ddb14686ab7e5f0e8975fc09f2d7a55d66097614992e25df722e05ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

