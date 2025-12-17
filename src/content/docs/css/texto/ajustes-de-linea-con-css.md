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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GVWMTN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtQzEXUM83w3iVkSitsAWBb1kMzSzVOvAnAGhpJ43aAIgJvYfzWpA4KT2aubd1Wra6VsvA6zIpX7rRiM5ZI3xt04qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPGMH0cu0iDZuuLsSrcA8aTlGNNrYLVUIh47oNZMqwW9%2BbCP6VjwhDdbfdZer%2FCccHC%2FsbrOQs0UVlcan6r%2Bcbd2X7yEpZJjBduXfkbbx%2Ff4G2a9fCqz26e0OQ2bDLjFT20lLLThUNT4dP%2BGLA0S8IIl7wINf40RuGJzQW%2F1swqMPC5u%2B03817Zh3hnQeNG8u0ecNgMLCE7RwfVQ0RiCeS5KfGIO6CLlRxaxERumwD1%2BDMwLabMJtUUkzqjMSf8JSHvY3K023cE6x%2F0pyHDTRA%2FzuNWTwTW7HdVcH8G6ObPyssTApgj9SgfPwfXC47dTFq431miF%2F0p68hml1dmMD4oDk%2FNV3NxEDU4Re%2FT1fbx8iUdGEn1Pz66tzEI1pTevTMPh19ZLysgirxFfF2Zqsk2H6Un%2BDXQCWv8nbOcFw1xJ37TZogZDtM5z69OVboVAFjFfm1zRjS11na7278l%2B56F3jBVZ0VA51X7LdzLdX9PyrCDn%2BowQpBbLrPOCRMRVze64RFYt1%2BKz5AFEgi6PhfDc14PbP%2BkocfASuTEv8sssH2M0YYt7wSAn0bqoYERM%2Foa0adArYXgPF4qKVYLGgmN7jBHZeD3qSMJbzC0hFG4ug8sQ8kYyy7uacAlxUSmi%2BdX3AXK%2B65tPIj2MO2Bi8oGOqUBvM4GBkRqCYdDvHIZJI0TaHzx1YmrXD45j%2FRI%2Ff%2BzAWDzWqFjMZNjoFYlTrYUK9XhJoB1588XJJeWMvpiRP0YRT8%2Bg8sLLWinkCNF2riDZfucDf5AxDBB5ikW%2FeCpKbhXnPWjbj3kLAFIhrWdwbL4YeIFVTOfS0qYg9wN1FNGv7eZXoOdxMAm95ReSkZ8%2F8TKJTJEsrPRgChDFyRNAYw0lmr%2FfpST&X-Amz-Signature=dc8c5baa35370708fc68162662137d809bfd657c7c7ffa4adcef4f18e8a786dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GVWMTN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtQzEXUM83w3iVkSitsAWBb1kMzSzVOvAnAGhpJ43aAIgJvYfzWpA4KT2aubd1Wra6VsvA6zIpX7rRiM5ZI3xt04qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPGMH0cu0iDZuuLsSrcA8aTlGNNrYLVUIh47oNZMqwW9%2BbCP6VjwhDdbfdZer%2FCccHC%2FsbrOQs0UVlcan6r%2Bcbd2X7yEpZJjBduXfkbbx%2Ff4G2a9fCqz26e0OQ2bDLjFT20lLLThUNT4dP%2BGLA0S8IIl7wINf40RuGJzQW%2F1swqMPC5u%2B03817Zh3hnQeNG8u0ecNgMLCE7RwfVQ0RiCeS5KfGIO6CLlRxaxERumwD1%2BDMwLabMJtUUkzqjMSf8JSHvY3K023cE6x%2F0pyHDTRA%2FzuNWTwTW7HdVcH8G6ObPyssTApgj9SgfPwfXC47dTFq431miF%2F0p68hml1dmMD4oDk%2FNV3NxEDU4Re%2FT1fbx8iUdGEn1Pz66tzEI1pTevTMPh19ZLysgirxFfF2Zqsk2H6Un%2BDXQCWv8nbOcFw1xJ37TZogZDtM5z69OVboVAFjFfm1zRjS11na7278l%2B56F3jBVZ0VA51X7LdzLdX9PyrCDn%2BowQpBbLrPOCRMRVze64RFYt1%2BKz5AFEgi6PhfDc14PbP%2BkocfASuTEv8sssH2M0YYt7wSAn0bqoYERM%2Foa0adArYXgPF4qKVYLGgmN7jBHZeD3qSMJbzC0hFG4ug8sQ8kYyy7uacAlxUSmi%2BdX3AXK%2B65tPIj2MO2Bi8oGOqUBvM4GBkRqCYdDvHIZJI0TaHzx1YmrXD45j%2FRI%2Ff%2BzAWDzWqFjMZNjoFYlTrYUK9XhJoB1588XJJeWMvpiRP0YRT8%2Bg8sLLWinkCNF2riDZfucDf5AxDBB5ikW%2FeCpKbhXnPWjbj3kLAFIhrWdwbL4YeIFVTOfS0qYg9wN1FNGv7eZXoOdxMAm95ReSkZ8%2F8TKJTJEsrPRgChDFyRNAYw0lmr%2FfpST&X-Amz-Signature=507485f316eab9509edfa93555c6f853fd26c6442847a18295461c16ee142b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

