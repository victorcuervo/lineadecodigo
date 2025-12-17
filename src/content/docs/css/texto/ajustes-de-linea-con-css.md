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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPTMADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs%2BuT4N3i1ZV9s7Rm%2B5xvH0Dx9%2FltzYyyBCohD6y0fxAiB7eHCBz1hr82TyKKmtow3Do19BSxt1fAXMM6cacbCtBCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMBXIa3kMmNaXqkCe0KtwDAKMraOUnSSvwwAeAFhihFLMiJ15UjdHHXH1JNEQcNhKQwVujzhB3gEGuR0B1wn5UWsbTXmdgbyK%2B82Tf0JaS7no%2Bj0bin1evv3gz3O7qZeLVhXv9FnepwPwtY0zVLNFxO9p3Ks0ZoRDZlASGXGfMWDjcPqq5gkAuMSHvrZnXXL9Qqafsgo2z3XuvA5npr4UlfOwAK4AnVcT2j3A5nSeL73tMXofECTSq0FkOEBXyLh%2Bkh6zEZ%2Fkn4%2FhKm%2F0SiqZq%2BoukXmLhmqA4I7vcZ2wtx5OWIgKd2L%2FRMcwZ%2Bk4QlLG7edBTSCJg9Qfcr0YkMRG%2BcHhdGuvH%2FnKgm0NEhxTrOOhEk2UKs%2BCbO0tE4mi2NKAQxTRDRsQiUpRU8iu1xUY3IZnZoKxmyT7KIt2es06sqRAzBsUTdsyJ3RWZidzwznpiDNzL9av1Bv6rkMDOgBPnZTcTtXCfnAumiWKRdwBcsExbmzewN5zE7WoNGBTvO%2FvFfJKXxlFWQDuGqTHFJqJ7KQL6TxNQsF%2BOmB6XS5ONugdEVYGMfJdUKsb7%2FlEX50wIjhFWUDpOtUFYrVc%2BzC9FoxPvfnHyOCb2yd58nDvsLm6n7oSqeihW%2BN47NUfAt3y5%2FMEsl%2FGM5NuUpCIwobiJygY6pgEMZoUHv%2BCb%2BH66N0OCWpy2iQ%2BlI117o58O76P%2Bbdh7pI7s1yiTMr4QEIJG9vFzSchyqXEtY2bpXFnoWkeaZPvHkdqbhW7tTkaz3a6Mb8gtzdvQ16R27Ks9diPapsBlWOzWyBw%2FQUfNyhUGiuuw3GeJukXCT5dXxM2A5eRlXh3UOMhVXbJyL9wW%2FxpFLQP3KxdbkJQtbIBrqAGCyrnUv3VPVG%2BIH%2BSd&X-Amz-Signature=841d19f036187b87e1c5ea8c353feb0417ad0c98f73c0bc7333782845bc513ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPTMADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs%2BuT4N3i1ZV9s7Rm%2B5xvH0Dx9%2FltzYyyBCohD6y0fxAiB7eHCBz1hr82TyKKmtow3Do19BSxt1fAXMM6cacbCtBCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMBXIa3kMmNaXqkCe0KtwDAKMraOUnSSvwwAeAFhihFLMiJ15UjdHHXH1JNEQcNhKQwVujzhB3gEGuR0B1wn5UWsbTXmdgbyK%2B82Tf0JaS7no%2Bj0bin1evv3gz3O7qZeLVhXv9FnepwPwtY0zVLNFxO9p3Ks0ZoRDZlASGXGfMWDjcPqq5gkAuMSHvrZnXXL9Qqafsgo2z3XuvA5npr4UlfOwAK4AnVcT2j3A5nSeL73tMXofECTSq0FkOEBXyLh%2Bkh6zEZ%2Fkn4%2FhKm%2F0SiqZq%2BoukXmLhmqA4I7vcZ2wtx5OWIgKd2L%2FRMcwZ%2Bk4QlLG7edBTSCJg9Qfcr0YkMRG%2BcHhdGuvH%2FnKgm0NEhxTrOOhEk2UKs%2BCbO0tE4mi2NKAQxTRDRsQiUpRU8iu1xUY3IZnZoKxmyT7KIt2es06sqRAzBsUTdsyJ3RWZidzwznpiDNzL9av1Bv6rkMDOgBPnZTcTtXCfnAumiWKRdwBcsExbmzewN5zE7WoNGBTvO%2FvFfJKXxlFWQDuGqTHFJqJ7KQL6TxNQsF%2BOmB6XS5ONugdEVYGMfJdUKsb7%2FlEX50wIjhFWUDpOtUFYrVc%2BzC9FoxPvfnHyOCb2yd58nDvsLm6n7oSqeihW%2BN47NUfAt3y5%2FMEsl%2FGM5NuUpCIwobiJygY6pgEMZoUHv%2BCb%2BH66N0OCWpy2iQ%2BlI117o58O76P%2Bbdh7pI7s1yiTMr4QEIJG9vFzSchyqXEtY2bpXFnoWkeaZPvHkdqbhW7tTkaz3a6Mb8gtzdvQ16R27Ks9diPapsBlWOzWyBw%2FQUfNyhUGiuuw3GeJukXCT5dXxM2A5eRlXh3UOMhVXbJyL9wW%2FxpFLQP3KxdbkJQtbIBrqAGCyrnUv3VPVG%2BIH%2BSd&X-Amz-Signature=da450ace24f94300748e0f0cd613c15744a6cac1346ef3f737c76c6927477e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

