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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76HSZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1FYfG4UGXnOxy%2FxFr2DPl19YktKU8Kd3BE0H4JUg5rwIhAJWkXOZXOnRw3EhlFnmLiEuu6xCz4D%2B6Nzidg0NwoOHQKv8DCHsQABoMNjM3NDIzMTgzODA1IgyWNiwzrH%2B7kXM9tMoq3ANV8LoiSLpF5LM%2FIhs1SAU9MnzHhQOfHxcIMgRiFK%2F%2B4uBM0E%2FSRDEPoag8fFQnvDvPUjl5jlIdf7axKHoTt9joPFBQmlyNIJI5TYiFGJPMFLXgybuNhieU4JLyNWroSfQ2V1e%2FqNr%2Fn1lmB2IlnpypnvnKWXsDt6FPO9fd7%2BaSoG9mKyEAviG%2B1Fli0tMmKG85cBJbjTIFesV%2FI7c8s6NhJMi%2FsTE4O69PQdQLdY423aufkQ49g5lDSjznIRN7ytx8q%2FLFEJpSy9UNt8gT%2FyZ8V%2BzOFnVO6E8ozDaG4d%2BR9lCdrcK8lTfptWvUN110hKI5VtDTz2DTT6ROiHaBrSlWf7YTar6HzSsgV4jVUnvSVGXIf%2BqdUGhkQHV4YB87rkaDvLnDwYICErbr4ZgdLtdqCq6XD2tb0CSC9SeqCgBBHMSV65rnEHb8lGydXj1%2BT3ya2ERKhDR%2F9NrcDG0xvdLyWwISfIRX8ZBZFKZTridvMtY8ZaUIB0bErepSfR68B1YxVKrK4Np5r1Dyrnebih1CktU97c%2FL0Wjbo%2Buq7oObjHBuon3L7g6VegOfUuG9G0RcY4WVBM6XlUaWZDCWg9lWAM18uKNLHWYSiTvGqlT4Nzf61mn7KaAgFqnWNzDm8InKBjqkASJMpT95MWp%2BxMr1R8gLTf%2Fc6ZRN6yFI74rSJjafy3xNOmxume8fNNkeDXRDRXuidqIlnC%2Fh0RT3WrRyGDMeg0VVk0G6MrswFmhmnACoYDEKq5lpPkNl%2FzcJWhOqDVJZ0Db5b%2FD%2Fv8x2fVZDS1nZPl%2BFcAlOWZLRziHrlcgSpUoC0278Oblux3bm6byMsuBEF7A%2FI3iAwB4gokFKJgTDQGM6otat&X-Amz-Signature=c8ed8909f71472282eae2a734112dea8967b51dfbdd96c8a74eca45c47183028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76HSZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1FYfG4UGXnOxy%2FxFr2DPl19YktKU8Kd3BE0H4JUg5rwIhAJWkXOZXOnRw3EhlFnmLiEuu6xCz4D%2B6Nzidg0NwoOHQKv8DCHsQABoMNjM3NDIzMTgzODA1IgyWNiwzrH%2B7kXM9tMoq3ANV8LoiSLpF5LM%2FIhs1SAU9MnzHhQOfHxcIMgRiFK%2F%2B4uBM0E%2FSRDEPoag8fFQnvDvPUjl5jlIdf7axKHoTt9joPFBQmlyNIJI5TYiFGJPMFLXgybuNhieU4JLyNWroSfQ2V1e%2FqNr%2Fn1lmB2IlnpypnvnKWXsDt6FPO9fd7%2BaSoG9mKyEAviG%2B1Fli0tMmKG85cBJbjTIFesV%2FI7c8s6NhJMi%2FsTE4O69PQdQLdY423aufkQ49g5lDSjznIRN7ytx8q%2FLFEJpSy9UNt8gT%2FyZ8V%2BzOFnVO6E8ozDaG4d%2BR9lCdrcK8lTfptWvUN110hKI5VtDTz2DTT6ROiHaBrSlWf7YTar6HzSsgV4jVUnvSVGXIf%2BqdUGhkQHV4YB87rkaDvLnDwYICErbr4ZgdLtdqCq6XD2tb0CSC9SeqCgBBHMSV65rnEHb8lGydXj1%2BT3ya2ERKhDR%2F9NrcDG0xvdLyWwISfIRX8ZBZFKZTridvMtY8ZaUIB0bErepSfR68B1YxVKrK4Np5r1Dyrnebih1CktU97c%2FL0Wjbo%2Buq7oObjHBuon3L7g6VegOfUuG9G0RcY4WVBM6XlUaWZDCWg9lWAM18uKNLHWYSiTvGqlT4Nzf61mn7KaAgFqnWNzDm8InKBjqkASJMpT95MWp%2BxMr1R8gLTf%2Fc6ZRN6yFI74rSJjafy3xNOmxume8fNNkeDXRDRXuidqIlnC%2Fh0RT3WrRyGDMeg0VVk0G6MrswFmhmnACoYDEKq5lpPkNl%2FzcJWhOqDVJZ0Db5b%2FD%2Fv8x2fVZDS1nZPl%2BFcAlOWZLRziHrlcgSpUoC0278Oblux3bm6byMsuBEF7A%2FI3iAwB4gokFKJgTDQGM6otat&X-Amz-Signature=2ec8134e825a9621b1566f63e7716009369f03907490e1b579f1ca253fbb1c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

