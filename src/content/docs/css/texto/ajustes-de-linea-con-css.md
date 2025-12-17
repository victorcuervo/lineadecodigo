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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILXHUHQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfddjGXgGWwp9G%2Fm%2FWEGjEMCSRe3H7E25WLCEokuB6PAiEAt6UElbqp7L%2FDptB1XhtZOpTVm4yn0Mqiy9v0rz%2FgVEcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOef4pXJ87U98ZDASSrcA2veTQTja1KXIGv7RgrfV12NYJ5mN7BE7FNKownOPrJpg4AiS23svGsIQvGwy7rmzr06%2F7NPf4R5V8%2F19EENlgJ2i34z3948qSQgEew80Qxf1jYEGiwZ885MS5%2FBFiif%2Brppl51w1g%2BZBGDvhJhzHo%2FP1Dx2%2Ft7WUAxBQ%2Bzl6cqTVKN5qzFz3X43tuO2wCR1OYT2mkJwco81%2B3hjEodBEWOINqDCZdQxhoo2SFobHUuYZ7s7P4lxhsjPjqM8Fey3gjGauTbuL9%2Bc7WnqJUnB%2BIfvqUGBivRzfd2ao3RFpYujzieSrH05pM5E6LOvjKTn2E2B0Qp48I77RdJLczRzwTT1N5nu26LNjtZNY9eDtuzTCKX%2BI0OjunO4B2xnj%2BB3uSRjbgcC%2BQetCfJX93tk7vCKMbrFB%2B29a6vNb1MoeHUgdZ6lOhIFartCbqXEtWNNnpjk80%2FvCeDKXaGmP4vKgb67Ep49JSnsXwILqEUL9y8Fq5BuQqrquCpWx0kIoubZUfL4Rg3Ejshq%2BrqdGITx3Hf7fiFfgsVO2x%2FDEXBlpM6g1GepNFSX3zCq4FmBRUbBz2JpZAOzo6LJvCgSEG%2BRTLCONCVcSg0w55Vpl71QZSXrBH7tG4X0Mh0FEBAfMNPeh8oGOqUBT92nfT75so54uUUkEEFVDx%2FzlsMbnTJKZT7ar%2BLJEkEmSNIzw7W2kERqL4vHormbtiw868SI13D2%2FCYGb%2B4ku7AGQSw5MSWocHL4VXHWBjm52YDicwVQbEU%2BWtbygyTStf7gwrJpq32A4xck3uO8t4%2FjTSjo3kypE3nGbxW3FP0sHK1V1jTTum4NrSNmk1BnnkBKRjVgGsymlOKuVF2joZcPxRG2&X-Amz-Signature=ccf62707b4c8375af6aa86bc4d05b56839adb586bd4951d6e66194d1ce7c8fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILXHUHQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfddjGXgGWwp9G%2Fm%2FWEGjEMCSRe3H7E25WLCEokuB6PAiEAt6UElbqp7L%2FDptB1XhtZOpTVm4yn0Mqiy9v0rz%2FgVEcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOef4pXJ87U98ZDASSrcA2veTQTja1KXIGv7RgrfV12NYJ5mN7BE7FNKownOPrJpg4AiS23svGsIQvGwy7rmzr06%2F7NPf4R5V8%2F19EENlgJ2i34z3948qSQgEew80Qxf1jYEGiwZ885MS5%2FBFiif%2Brppl51w1g%2BZBGDvhJhzHo%2FP1Dx2%2Ft7WUAxBQ%2Bzl6cqTVKN5qzFz3X43tuO2wCR1OYT2mkJwco81%2B3hjEodBEWOINqDCZdQxhoo2SFobHUuYZ7s7P4lxhsjPjqM8Fey3gjGauTbuL9%2Bc7WnqJUnB%2BIfvqUGBivRzfd2ao3RFpYujzieSrH05pM5E6LOvjKTn2E2B0Qp48I77RdJLczRzwTT1N5nu26LNjtZNY9eDtuzTCKX%2BI0OjunO4B2xnj%2BB3uSRjbgcC%2BQetCfJX93tk7vCKMbrFB%2B29a6vNb1MoeHUgdZ6lOhIFartCbqXEtWNNnpjk80%2FvCeDKXaGmP4vKgb67Ep49JSnsXwILqEUL9y8Fq5BuQqrquCpWx0kIoubZUfL4Rg3Ejshq%2BrqdGITx3Hf7fiFfgsVO2x%2FDEXBlpM6g1GepNFSX3zCq4FmBRUbBz2JpZAOzo6LJvCgSEG%2BRTLCONCVcSg0w55Vpl71QZSXrBH7tG4X0Mh0FEBAfMNPeh8oGOqUBT92nfT75so54uUUkEEFVDx%2FzlsMbnTJKZT7ar%2BLJEkEmSNIzw7W2kERqL4vHormbtiw868SI13D2%2FCYGb%2B4ku7AGQSw5MSWocHL4VXHWBjm52YDicwVQbEU%2BWtbygyTStf7gwrJpq32A4xck3uO8t4%2FjTSjo3kypE3nGbxW3FP0sHK1V1jTTum4NrSNmk1BnnkBKRjVgGsymlOKuVF2joZcPxRG2&X-Amz-Signature=a1e81152087dab177b7982db34eb906ba0a706fa45e4d9e635a4b2226a7c7fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

