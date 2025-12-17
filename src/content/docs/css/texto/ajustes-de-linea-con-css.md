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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTKKGPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyIR6f3G1frSHP%2FUo21P2sHOy0G6nce1ldcc9E9n8XQIgMx7IL4YLHI7PIc8vV3gruMo5LZDdOUzg7vxQIT%2FBarkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDLcZ4x9c9NQa1JSZyrcAw%2B2ZjIUmkYJya84So5Af85LYwS9xMgtgoKK5Kc4TNyqWh6Q%2FnXu6uBoh2zQxZbxNpbZvXir6%2FM1cYJalPqGIM8T76K243IgmEZBx3%2B8sOtd8KEpIPMoY7a7nhQAEIXBXRIKgjDwGFE2S%2FfXVJj0Aljg%2BmltzyMwNjmTpyfIS89SjcvMBan36H3JoXn2erjV8%2BbYkxRFvsI%2FDsk2Se9rxw17fLIyX%2BpZEAnT7d5VfRqLppeqWDYOjPhfx84qDZO3Brc%2FqCWHSMn4nQgcvgoods1wAgDqnAcGWJpGvJ3BIB0QeLd5xmRfzxPTaxN53hfYzMv1lh2QzARVdZ0oBFi%2FJRMWXWYZAOuTt4G%2FVaWyg6BJvBJgkjJeH5lSoVV0lfX8Ai5Sx8p53obzMAtL5ahduxImATT4WY7IWh%2FdFxnEkZc9805T7Eh%2F%2BhlWPyHfGiAH1sq%2FisBjDSHjlwuy1YmUx%2BAHRFFdWMKhImUTD6cgiGTIXW0Cjhf4lhRrpcAUNonCbZUIcBwTwb%2FQAs5PQMIxH01eTzqgWUxy%2FggBbGlDY63snzVL3qomwMgIyX3F6AzautvaxLPtuw0KALcyPGOGyabDbWMxfDR%2BIAfSiGBlX6XulxaJouETIUaz7YWxMP2BicoGOqUBKPJwFOLOKfW1GEGNEcJMw5jmuvopgMhBwbfUIPuW1jXncAtW0MvrA27tAyKWquuEtkU6QlrXgXcCQHsDQh759anMU0%2BiOUHtNz%2FwR4Ffxk7suiw61gzlyIrEtmn4yCg3neDObZL83PuXhm5gGSBEChpedkNKe%2FjEn1FNvvAdOvtwtkNrOvFcsPoYvBQvayXmkzVQZC6Gnh4HIJn8OMbc1QxMKg9I&X-Amz-Signature=f52bcc39bfcfc7801c08fc9a6045f342d755c6960aea2d32231a38583471c637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTKKGPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyIR6f3G1frSHP%2FUo21P2sHOy0G6nce1ldcc9E9n8XQIgMx7IL4YLHI7PIc8vV3gruMo5LZDdOUzg7vxQIT%2FBarkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDLcZ4x9c9NQa1JSZyrcAw%2B2ZjIUmkYJya84So5Af85LYwS9xMgtgoKK5Kc4TNyqWh6Q%2FnXu6uBoh2zQxZbxNpbZvXir6%2FM1cYJalPqGIM8T76K243IgmEZBx3%2B8sOtd8KEpIPMoY7a7nhQAEIXBXRIKgjDwGFE2S%2FfXVJj0Aljg%2BmltzyMwNjmTpyfIS89SjcvMBan36H3JoXn2erjV8%2BbYkxRFvsI%2FDsk2Se9rxw17fLIyX%2BpZEAnT7d5VfRqLppeqWDYOjPhfx84qDZO3Brc%2FqCWHSMn4nQgcvgoods1wAgDqnAcGWJpGvJ3BIB0QeLd5xmRfzxPTaxN53hfYzMv1lh2QzARVdZ0oBFi%2FJRMWXWYZAOuTt4G%2FVaWyg6BJvBJgkjJeH5lSoVV0lfX8Ai5Sx8p53obzMAtL5ahduxImATT4WY7IWh%2FdFxnEkZc9805T7Eh%2F%2BhlWPyHfGiAH1sq%2FisBjDSHjlwuy1YmUx%2BAHRFFdWMKhImUTD6cgiGTIXW0Cjhf4lhRrpcAUNonCbZUIcBwTwb%2FQAs5PQMIxH01eTzqgWUxy%2FggBbGlDY63snzVL3qomwMgIyX3F6AzautvaxLPtuw0KALcyPGOGyabDbWMxfDR%2BIAfSiGBlX6XulxaJouETIUaz7YWxMP2BicoGOqUBKPJwFOLOKfW1GEGNEcJMw5jmuvopgMhBwbfUIPuW1jXncAtW0MvrA27tAyKWquuEtkU6QlrXgXcCQHsDQh759anMU0%2BiOUHtNz%2FwR4Ffxk7suiw61gzlyIrEtmn4yCg3neDObZL83PuXhm5gGSBEChpedkNKe%2FjEn1FNvvAdOvtwtkNrOvFcsPoYvBQvayXmkzVQZC6Gnh4HIJn8OMbc1QxMKg9I&X-Amz-Signature=fabfd6b43d8e4fc8d66b60dc7228d8c831ed5e480950bb371bad2dc00d698d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

