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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F2WQWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5o4r0i%2F5uAXkaawAIOD5%2FXCrHzgWUbWElz7FB%2FyrhAIgV002zcIbTsbfBnffFmP7TR7U3VZjArw%2FuyTioTrdWtMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFVJlBnXdY1yL7amnSrcAzPuJSync6UqdBJrIxgX7bmmxAowOku%2Balug7ni0lfmYAKoDcN5Uz3FoiR4u9H0iUilnFWFNToe34d%2B%2BDAHAxdy00Mu1mZeYsrNvqTAbHXRw%2BR7OMiPocxw0%2BJTifOMi7U4wRa4CrfvFa%2BRQY%2F7e%2FJCRn41Er4c4LV6pcMnJQgjQcaI6ad%2BT5lic9ilElO64n4QANKFCKSijzEf3PRLsK%2F96onUz3HlCFqZf51o3lFDybCbuwhe7bcjvozqPQlKs8qS5OpSyNaatZH%2B513qKmNYQx6RSagEeMzM1%2FWfPUTC3%2Bca0Aqm0Rn28Dlvh3MSHU2uAMX%2FJOyELGY71g07u%2B%2BVFF2S7TnKU%2Fznc7xeUjeufw2HhBCSxGVUkm9jmzmiFp2vgnICrS%2Bq1EHjYWZl3kFi58XKGoGGedfOWHN5S6rewIOwD6SCLFQuZPh%2FjIDZDR3BnRiMBWrzFW%2BFHzL9J0I%2BQh7IOp71ZAyt0S19IAQP35XBNtPAm6aVaiRUhsZG77KpH6t4ChUlLXVVQS3pi5%2FRjjhZliEs5%2Bq%2BvofvIis%2BPL7Ljsa6O8fKm4E2k37PFY18Mlo8b2kf2hQeVIuNJ%2B5%2FcjbeFxyRqz85kEncbDg%2BI%2FlZQYlp%2FxMTCTKk%2FMK%2F6h8oGOqUBw%2BVkGPZ3gdR8lmjwlvK9DBnDiX8TmGRWKRgh9MAXllUPW0GnAoyCtO9I4C5auH3F9V5hxxsdV%2FeMJ57LUNgS1Ns9tIP%2Bt3I%2BC03oLUgTnE%2Bxn8ubf0HqDc3JbWpouP3AnzxVxjr%2BJH6MKFby27sg5kg7TxCxVfnZvlDtGSVJdlngpuFwOu1jcXzbrtwXuepftZ2KvQSk%2Fkoc0lblejmQ3%2BhwrYZh&X-Amz-Signature=a254fec171a97b01a56187e275379e173788b835dee37330e8a39dda6738bd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F2WQWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5o4r0i%2F5uAXkaawAIOD5%2FXCrHzgWUbWElz7FB%2FyrhAIgV002zcIbTsbfBnffFmP7TR7U3VZjArw%2FuyTioTrdWtMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFVJlBnXdY1yL7amnSrcAzPuJSync6UqdBJrIxgX7bmmxAowOku%2Balug7ni0lfmYAKoDcN5Uz3FoiR4u9H0iUilnFWFNToe34d%2B%2BDAHAxdy00Mu1mZeYsrNvqTAbHXRw%2BR7OMiPocxw0%2BJTifOMi7U4wRa4CrfvFa%2BRQY%2F7e%2FJCRn41Er4c4LV6pcMnJQgjQcaI6ad%2BT5lic9ilElO64n4QANKFCKSijzEf3PRLsK%2F96onUz3HlCFqZf51o3lFDybCbuwhe7bcjvozqPQlKs8qS5OpSyNaatZH%2B513qKmNYQx6RSagEeMzM1%2FWfPUTC3%2Bca0Aqm0Rn28Dlvh3MSHU2uAMX%2FJOyELGY71g07u%2B%2BVFF2S7TnKU%2Fznc7xeUjeufw2HhBCSxGVUkm9jmzmiFp2vgnICrS%2Bq1EHjYWZl3kFi58XKGoGGedfOWHN5S6rewIOwD6SCLFQuZPh%2FjIDZDR3BnRiMBWrzFW%2BFHzL9J0I%2BQh7IOp71ZAyt0S19IAQP35XBNtPAm6aVaiRUhsZG77KpH6t4ChUlLXVVQS3pi5%2FRjjhZliEs5%2Bq%2BvofvIis%2BPL7Ljsa6O8fKm4E2k37PFY18Mlo8b2kf2hQeVIuNJ%2B5%2FcjbeFxyRqz85kEncbDg%2BI%2FlZQYlp%2FxMTCTKk%2FMK%2F6h8oGOqUBw%2BVkGPZ3gdR8lmjwlvK9DBnDiX8TmGRWKRgh9MAXllUPW0GnAoyCtO9I4C5auH3F9V5hxxsdV%2FeMJ57LUNgS1Ns9tIP%2Bt3I%2BC03oLUgTnE%2Bxn8ubf0HqDc3JbWpouP3AnzxVxjr%2BJH6MKFby27sg5kg7TxCxVfnZvlDtGSVJdlngpuFwOu1jcXzbrtwXuepftZ2KvQSk%2Fkoc0lblejmQ3%2BhwrYZh&X-Amz-Signature=cbad2991fd7e982b8f46a014c37f07795eb933a54c7e83739f67d9884443a5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

