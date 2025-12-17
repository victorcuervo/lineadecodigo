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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMD7HZU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHffzeH83%2BquNuPh%2BoddeosADplvCx1RhLBN%2F6mC6UoQIgL4svSctBdkxbZMywo%2BaCQzkYs%2F7onQHGCSHt8n5Hc%2FMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBlMVSH7k1lhHRbILCrcA805Iq%2BBkyKHytq7dJM4l88sS8iorOkCtKLNgC5ovWFRqm72arpbt1ngNNJMmPcUNCZ2W480%2B7PoBF1%2BpaNiBiMywdDXz7aa8a%2FasPpJvIYxr37g45gpk9ww9K34OCq9T5Dg8AN%2FoZtYZlbbGtzxqZFPKRmONHOJ60JbIb5cMUX7gOPop2mKtJD0YO4rRSAveak4XarfMKUbAYm6R1cQsXHeOcIkQQm6o7CJ2BgpE9xHZvc3l1JNfgpk%2FLlqbnOawKdakEeLKET11hR%2FlMieD6Qa3Xlzfq%2FvFvMTB9WZA5vo8yjOPZvd21xoeZhD2f3RDF9giDvaUfA9eQJKemj3qID3whUZPCFBbsOUYczCTpTfDJnO%2FRqTs0Iq6tbfao05qKAS3j3T%2FBzLcMK1bpyRceh5iKILbUCqf7bYPhvlz3MyILmEd%2B3kKjJzU%2FGQ%2FtRnnPJHYyY0eGtNrcoi2IIRwFRg%2B1Lux8gNfJPWNbMbccVde1rh3ht%2B0Y%2Bm7iPpbryGB3RIZOaWHHPdaJ%2FUYu3THC1aZogjzC5jK1%2F9bYgjVhr8HnBkiJC2gcHEUGeBl5vxHo3yNcJp5WSrQcB%2FLt%2FA393NOQexOz90K2rgiCtry33AQepvpeRwJR1Dq2DZML7GisoGOqUBAU6zpAQICyvCC1qDk9zQ%2Bdh1G4TnuVRV26wXjZBcdIcg474ZYh%2F69gw7HRquND3bHvlGvx7d3PdwTrRXHg1nVYofidFP6%2FLo5hh9x%2FN%2FraMJs0khJcNM01wso3aE7IeIxoOOZvxFzf%2F9quKFJ82ygySftedesZSfVcBba1GfL1pDgpn4TmDPEjLMt6YtUXskkG1qX4tf4LzPTTA7dOL3j2DAl%2FLk&X-Amz-Signature=739a581c512b25c9defc56707d41808d30d985960302a719c0e475da663583b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMD7HZU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHffzeH83%2BquNuPh%2BoddeosADplvCx1RhLBN%2F6mC6UoQIgL4svSctBdkxbZMywo%2BaCQzkYs%2F7onQHGCSHt8n5Hc%2FMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBlMVSH7k1lhHRbILCrcA805Iq%2BBkyKHytq7dJM4l88sS8iorOkCtKLNgC5ovWFRqm72arpbt1ngNNJMmPcUNCZ2W480%2B7PoBF1%2BpaNiBiMywdDXz7aa8a%2FasPpJvIYxr37g45gpk9ww9K34OCq9T5Dg8AN%2FoZtYZlbbGtzxqZFPKRmONHOJ60JbIb5cMUX7gOPop2mKtJD0YO4rRSAveak4XarfMKUbAYm6R1cQsXHeOcIkQQm6o7CJ2BgpE9xHZvc3l1JNfgpk%2FLlqbnOawKdakEeLKET11hR%2FlMieD6Qa3Xlzfq%2FvFvMTB9WZA5vo8yjOPZvd21xoeZhD2f3RDF9giDvaUfA9eQJKemj3qID3whUZPCFBbsOUYczCTpTfDJnO%2FRqTs0Iq6tbfao05qKAS3j3T%2FBzLcMK1bpyRceh5iKILbUCqf7bYPhvlz3MyILmEd%2B3kKjJzU%2FGQ%2FtRnnPJHYyY0eGtNrcoi2IIRwFRg%2B1Lux8gNfJPWNbMbccVde1rh3ht%2B0Y%2Bm7iPpbryGB3RIZOaWHHPdaJ%2FUYu3THC1aZogjzC5jK1%2F9bYgjVhr8HnBkiJC2gcHEUGeBl5vxHo3yNcJp5WSrQcB%2FLt%2FA393NOQexOz90K2rgiCtry33AQepvpeRwJR1Dq2DZML7GisoGOqUBAU6zpAQICyvCC1qDk9zQ%2Bdh1G4TnuVRV26wXjZBcdIcg474ZYh%2F69gw7HRquND3bHvlGvx7d3PdwTrRXHg1nVYofidFP6%2FLo5hh9x%2FN%2FraMJs0khJcNM01wso3aE7IeIxoOOZvxFzf%2F9quKFJ82ygySftedesZSfVcBba1GfL1pDgpn4TmDPEjLMt6YtUXskkG1qX4tf4LzPTTA7dOL3j2DAl%2FLk&X-Amz-Signature=69adb531d0bb0ac0091def0e1cc55d11b925363c4898e215e7e894c9798aff6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

