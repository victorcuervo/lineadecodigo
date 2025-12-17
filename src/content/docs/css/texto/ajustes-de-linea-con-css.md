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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEMVN4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu%2Bse4OoHW5Jc0a7YKozYh%2F1Mlg9LV3x6sC4GpqrEJnAiEA3Fcc96XygIlq7xiVc5w5BlxK4UKtzEjUVqFGKUmkzpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlaRFepGeZbQ0%2Bn3yrcA%2F9SjH5jSw%2BVC7Za49YAxCyTVMIkizBd%2BePWRhMr0CjYoLaLANrnX0cX%2BGPWtykLvMyi9x%2FnR5%2BCua%2BaUM9zSEevPNhGv%2FdneLQ1ckMEIPAL1FMxhiiT0PoTrTm8wqcZ4EoqUlxGD0m1cMuGl%2BroN%2BXAKzKj32OJUOuPVBT5qp70QgdPapVaB6q7SgWsacTIWrjtlsU6QnMT1WC6GhoZzdp8TouQcII54PuR%2BKugLC5FaRbEOyBTOPPEEMh%2BACK7MWBBugZBMIofoqSsd7YOqZhRBG8JfpzFU0mqkGZ4WKJhSBMEIbpvSp4Y23TMiutVct%2FFHlhwe7izL2fI9v5beuvPdmFKyFqC6BHGrARgvnj97VZ21igi%2FOqZCS6pCSMo2BbO2FhjcefYlD4%2F000n2U27oSYPjE223c27Md0gNewrKf5VvR6CZ%2BsPyv%2BygUM6dVAvOOs4%2FgrOzDevuOmAVzODtVsRVuUUX0Pvxtzz%2BcAjVTNcyz5iDB%2Fl%2B4xJXcEElMQEq1olrmbu%2BtRjvQ7qzW00MlZxzWxxNUbR%2Bg%2B5IQmb3rtognHbz6Qp6Hq46xYCfqNTvioeozTwcNy4qoRDl3i4Hm82kvdE77WW8vhrm3oULY%2BoBtqkBLZShIJnMPSei8oGOqUBlehbJKDCj7zHHTp5aEd0FIf0zPsXYybWHhLxtLmi2%2BmzXjzewR2qbCrwpTZFIFOEGiZVaVCxzlx2hewP1fJpG7Yc4%2FZpjQI9%2FOmiczs%2F96rylYcGtd5LrXzsWSA3AxGtQTkXGK02Jh3nhV%2FOopFSWCnf4OTPkopLP1j1iBfPn0wVbkYrbEF1G54%2FZ%2FEIGyE74idYy3vfOd4xMYkruWAHtHePfpmz&X-Amz-Signature=03452a300754532f723f4616a19ec2227ba517ed726788df02c549812d677689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEMVN4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu%2Bse4OoHW5Jc0a7YKozYh%2F1Mlg9LV3x6sC4GpqrEJnAiEA3Fcc96XygIlq7xiVc5w5BlxK4UKtzEjUVqFGKUmkzpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlaRFepGeZbQ0%2Bn3yrcA%2F9SjH5jSw%2BVC7Za49YAxCyTVMIkizBd%2BePWRhMr0CjYoLaLANrnX0cX%2BGPWtykLvMyi9x%2FnR5%2BCua%2BaUM9zSEevPNhGv%2FdneLQ1ckMEIPAL1FMxhiiT0PoTrTm8wqcZ4EoqUlxGD0m1cMuGl%2BroN%2BXAKzKj32OJUOuPVBT5qp70QgdPapVaB6q7SgWsacTIWrjtlsU6QnMT1WC6GhoZzdp8TouQcII54PuR%2BKugLC5FaRbEOyBTOPPEEMh%2BACK7MWBBugZBMIofoqSsd7YOqZhRBG8JfpzFU0mqkGZ4WKJhSBMEIbpvSp4Y23TMiutVct%2FFHlhwe7izL2fI9v5beuvPdmFKyFqC6BHGrARgvnj97VZ21igi%2FOqZCS6pCSMo2BbO2FhjcefYlD4%2F000n2U27oSYPjE223c27Md0gNewrKf5VvR6CZ%2BsPyv%2BygUM6dVAvOOs4%2FgrOzDevuOmAVzODtVsRVuUUX0Pvxtzz%2BcAjVTNcyz5iDB%2Fl%2B4xJXcEElMQEq1olrmbu%2BtRjvQ7qzW00MlZxzWxxNUbR%2Bg%2B5IQmb3rtognHbz6Qp6Hq46xYCfqNTvioeozTwcNy4qoRDl3i4Hm82kvdE77WW8vhrm3oULY%2BoBtqkBLZShIJnMPSei8oGOqUBlehbJKDCj7zHHTp5aEd0FIf0zPsXYybWHhLxtLmi2%2BmzXjzewR2qbCrwpTZFIFOEGiZVaVCxzlx2hewP1fJpG7Yc4%2FZpjQI9%2FOmiczs%2F96rylYcGtd5LrXzsWSA3AxGtQTkXGK02Jh3nhV%2FOopFSWCnf4OTPkopLP1j1iBfPn0wVbkYrbEF1G54%2FZ%2FEIGyE74idYy3vfOd4xMYkruWAHtHePfpmz&X-Amz-Signature=961aede26a5547a00180550c5b45a840deff3e80b056b9b0510e00a84079464f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

