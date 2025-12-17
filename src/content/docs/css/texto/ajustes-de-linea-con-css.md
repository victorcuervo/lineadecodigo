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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSM6TTQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEIhAuqfRCgNkiWZ3gga%2FRP0tCMZkTVcI8quVCmWBhyAiEAnAYDB0MlFFx0jdnFZFC88GGRs4vvcf684r82%2B%2BKodrcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2K98xBbkI%2Fj56UrircA6FhvXA7At32qXiHIzoAukeSu5cLYNseR8nuG5%2FkY1wtLMgBKJCfVEu6tk5tLZDdRt2Ud%2FFEOPoqviPxJE0hCLmV98qt6vJHqSvIWa9ioNVte6s4vLPoFYOfguBsTwaYPlFM9Zzk6%2FgxWO8zTzZY76ffo%2BhzLAEIeFUWt5WBJIuYr72zH4D7bQvcotPxTnJHXb7PDq1YIQNXu42yda16dg33x%2BtuYXSVNA%2FpKELe8rJo8BxLWYnHAjeKNSiq%2BrGCCyeVYteW45FSPWn5LcijMf7VRY2e7PcVI%2BybkpsSV4g9E2j%2BBY1Dtma9yzPz1JIvuFQyTq0RbiWhPkoA7XlDEJzBISER2WX0AL%2FfYJ7Bf%2FVO7NuDzlr8zR2YZhOB58RR3FXnsbZ%2Bjw8AioS0EyZLZFH6Lt5U5cdYNbDr%2FL6giGgLX%2BGWzUl8O%2Fm0%2F9j7%2FsG7P170jxJrZoS3UZk5bTyrUaaOaBaZopzac%2FIj4%2BDGTAnHdlmCqlm8id1fY2vcRHVgHv%2FgOOncY1GWznez9ulLjMahMeApymhS3n67iVrSkadfSXoZFrAMNlJEvz6YtycfO74KjPltqDcqcDZ8MSpZqlEub%2FNjlQB%2BGnBv19GwwtgRqrY%2BNTTh%2BbbyJiAwMLCfi8oGOqUBqahIqe0XfzhQirJS3HZKpRTBnHIl98UJ7idrughJkJ4Rcx8rsHfh20DcG%2Fqgo09tXdz1lgA5X9qFcs1umKsR8Zfzn7hauXFytwO1JEakUwkOMBZG1OK8ZGLR95RsYa1gV07tvF5FW2%2Biv0Nxr9XfykMdgtKmNey5ybHz6Fct4XWaHNpVtNfddfswXL2YDNLswwjTsMh15pCCp84%2B2l2M010Co93g&X-Amz-Signature=32d69f4a50532224d7bd42ebafc54bac886a935195239db91d064981c014a181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSM6TTQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEIhAuqfRCgNkiWZ3gga%2FRP0tCMZkTVcI8quVCmWBhyAiEAnAYDB0MlFFx0jdnFZFC88GGRs4vvcf684r82%2B%2BKodrcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2K98xBbkI%2Fj56UrircA6FhvXA7At32qXiHIzoAukeSu5cLYNseR8nuG5%2FkY1wtLMgBKJCfVEu6tk5tLZDdRt2Ud%2FFEOPoqviPxJE0hCLmV98qt6vJHqSvIWa9ioNVte6s4vLPoFYOfguBsTwaYPlFM9Zzk6%2FgxWO8zTzZY76ffo%2BhzLAEIeFUWt5WBJIuYr72zH4D7bQvcotPxTnJHXb7PDq1YIQNXu42yda16dg33x%2BtuYXSVNA%2FpKELe8rJo8BxLWYnHAjeKNSiq%2BrGCCyeVYteW45FSPWn5LcijMf7VRY2e7PcVI%2BybkpsSV4g9E2j%2BBY1Dtma9yzPz1JIvuFQyTq0RbiWhPkoA7XlDEJzBISER2WX0AL%2FfYJ7Bf%2FVO7NuDzlr8zR2YZhOB58RR3FXnsbZ%2Bjw8AioS0EyZLZFH6Lt5U5cdYNbDr%2FL6giGgLX%2BGWzUl8O%2Fm0%2F9j7%2FsG7P170jxJrZoS3UZk5bTyrUaaOaBaZopzac%2FIj4%2BDGTAnHdlmCqlm8id1fY2vcRHVgHv%2FgOOncY1GWznez9ulLjMahMeApymhS3n67iVrSkadfSXoZFrAMNlJEvz6YtycfO74KjPltqDcqcDZ8MSpZqlEub%2FNjlQB%2BGnBv19GwwtgRqrY%2BNTTh%2BbbyJiAwMLCfi8oGOqUBqahIqe0XfzhQirJS3HZKpRTBnHIl98UJ7idrughJkJ4Rcx8rsHfh20DcG%2Fqgo09tXdz1lgA5X9qFcs1umKsR8Zfzn7hauXFytwO1JEakUwkOMBZG1OK8ZGLR95RsYa1gV07tvF5FW2%2Biv0Nxr9XfykMdgtKmNey5ybHz6Fct4XWaHNpVtNfddfswXL2YDNLswwjTsMh15pCCp84%2B2l2M010Co93g&X-Amz-Signature=36bd02e3b949fe704e3c9cc2f3b96cce76d82f71c8b2175631d249ccbcc4a725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

