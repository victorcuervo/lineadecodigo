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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKFF6XO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv835MmkChvwKFX8z%2FTD%2BCNpvo4jo2zCZtJ14kGC8bPQIhAOk%2FizEQMesos%2FqoTONud3nLNRmTU%2FqH%2FLUgzRSmaqYdKv8DCHwQABoMNjM3NDIzMTgzODA1IgyMKcPjvO11UtrTIlQq3AODE9hfZIPdTksyow3AmUqz40rs6MCSadjtPxwoiLtXfooqLp2kJteXPZlBaSZp9fAJRbeWBL5M6oQ0TZzEvhI0upWGIVhdVnd%2FNqYVq2SwRzRStEzwqTsvAGalY5C4CvCNrwlTHI3C7sFIvKfokPKTNzSt%2FsdjKDhHgXYuQ1Ob2tbkLE%2F2MswfKd0cKGeQRuJBBzHY8f7%2F%2Bm4frbo7fVtvz36iREazU5uSg7B%2FzYHjdQizb7yl2JC5VqWBUkIdmjlcMAOwNrqLO29VjoHj%2FAigPwEXv3SJcwAeP58pgIYjEZwG7ssKR4y%2BVYfTARaK7XfqneFLYdhri9AWgokithn4AwbH8DrD4Z%2Beffq5ji0uju4Qult4cDLcJixcqt3LgdLEv9g0w%2Byul3fYNtDz07NhTmim1w0Lg14OM6S4tBUKFpIj6nSBTj%2BoB04ux6Yd9EfjaFSVPpZMVR4dy2wgfSvvM7x%2Fes2JLqEnWlcw4HUNBbalkNPY59oH1rb2TtX53tiWUtBtsrq2n2Xd5%2Fo%2FR5S6AW9C%2FlMCszcTruLGsqMiRsilGhNNmUVKboClrLjUcIw5%2BmOXdfnVQPpNwtZ%2BjgTiOf5fAtqtuD1MoYWLbpfj4mb3cQ7YyXoaHMOF3TDJjorKBjqkAWNbvkGNdCU4JH8G94KiasMfvcB56sUmtyO04YocLAjaCNV9X18To%2Fs1CgBW4oRw4nCkEadeF2fU9sf0PZrx2ooWyWBk%2BzDs7BIj7Vm5vaOgNjw9PRsRGLDwLahr4i5J7%2BvbKI4qKkz6t14SYNGbhQ0NbMUtO7ALYA3v0WHkEeJN3FQIbpT0rYQQqMgxqWCN%2B9KaJ%2B0HyED2QoiWRCRCWP2%2FoQKC&X-Amz-Signature=01ececedb36866384d8f435ee3b025161458061180b9841f721901b663dfbfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKFF6XO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv835MmkChvwKFX8z%2FTD%2BCNpvo4jo2zCZtJ14kGC8bPQIhAOk%2FizEQMesos%2FqoTONud3nLNRmTU%2FqH%2FLUgzRSmaqYdKv8DCHwQABoMNjM3NDIzMTgzODA1IgyMKcPjvO11UtrTIlQq3AODE9hfZIPdTksyow3AmUqz40rs6MCSadjtPxwoiLtXfooqLp2kJteXPZlBaSZp9fAJRbeWBL5M6oQ0TZzEvhI0upWGIVhdVnd%2FNqYVq2SwRzRStEzwqTsvAGalY5C4CvCNrwlTHI3C7sFIvKfokPKTNzSt%2FsdjKDhHgXYuQ1Ob2tbkLE%2F2MswfKd0cKGeQRuJBBzHY8f7%2F%2Bm4frbo7fVtvz36iREazU5uSg7B%2FzYHjdQizb7yl2JC5VqWBUkIdmjlcMAOwNrqLO29VjoHj%2FAigPwEXv3SJcwAeP58pgIYjEZwG7ssKR4y%2BVYfTARaK7XfqneFLYdhri9AWgokithn4AwbH8DrD4Z%2Beffq5ji0uju4Qult4cDLcJixcqt3LgdLEv9g0w%2Byul3fYNtDz07NhTmim1w0Lg14OM6S4tBUKFpIj6nSBTj%2BoB04ux6Yd9EfjaFSVPpZMVR4dy2wgfSvvM7x%2Fes2JLqEnWlcw4HUNBbalkNPY59oH1rb2TtX53tiWUtBtsrq2n2Xd5%2Fo%2FR5S6AW9C%2FlMCszcTruLGsqMiRsilGhNNmUVKboClrLjUcIw5%2BmOXdfnVQPpNwtZ%2BjgTiOf5fAtqtuD1MoYWLbpfj4mb3cQ7YyXoaHMOF3TDJjorKBjqkAWNbvkGNdCU4JH8G94KiasMfvcB56sUmtyO04YocLAjaCNV9X18To%2Fs1CgBW4oRw4nCkEadeF2fU9sf0PZrx2ooWyWBk%2BzDs7BIj7Vm5vaOgNjw9PRsRGLDwLahr4i5J7%2BvbKI4qKkz6t14SYNGbhQ0NbMUtO7ALYA3v0WHkEeJN3FQIbpT0rYQQqMgxqWCN%2B9KaJ%2B0HyED2QoiWRCRCWP2%2FoQKC&X-Amz-Signature=7f7bfe36ccf1c0d5084a542541a8d6fe4d5e265629f110f06ed7f725ec8aaacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

