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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67OYDZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDod%2FHyJSJS%2BIi3h9pqRSsY9ltEw8qbRdNTbq%2FWNlr5qQIgYfmq1FQkldv8PjdoafRHJYuOGdxgobZh3vWuQcNfzNQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaiVmWGk1HRvBdkzircA3baM4yNdui8UBtGINliR8vmPF%2BGHLMgD5alv6oEreziKnReDuVlLwCGZQt%2BZHUXkHIPFw8GW28klE6aEi1akmSt3HsDIofzTVKZ9O1rStmY90by6EbNjci72WHX5EF%2BJ0ef8gvqc93YFidDIbtigXjgBpQg1agkvCs26Uvg1chkwyzX7HojddhdmW%2FpojiL%2B%2FQZO79j%2FMORHiMT3frAbaRXRcUGVBCECftqpInhikVZOX8LCcdEAw41RAmfUADBiejo5J7F9Dd2FZ1KfBof9Up54BQ3v53II04CTqcPye5ncdlu5KkHaeb0%2Fx493Z7rcC0yBZpwARbcyIay727NKDFPo99qkKd3AuyRNzvIOFGsu4H3KBdCLBLWlXO82s%2FvAGui1RtAFqXAcsq4TopEtxYkC05v3kP%2F5qrTJStsRLAHfYN31SoS%2FpRSbvklIoM1NJwYNbXirWuiWsrJp%2F5%2FsdW%2FcKMWb%2B%2FT8Ui53fF1Ju22aOkEu69gk8xj%2FILnDgVcVJdF2K5kkcmHuWt04DV8yvv0Kstg2PSl3q0HUSWyurALda1hin%2BLRSImaY7LezJlmb9wms3o00%2FpqdVBlkrixhrCw4SRnGV5DOVzH2H2hur060DltG%2FGgddDN3GtMPL%2FisoGOqUBVLd2hG3Ees%2B7AQTjHE6ksELfxJD%2FiFCxfcRiyz6GgNk%2Bt%2BmQP%2B2U5eb74F8eVRCk8rTiAXEsrgvrnlVlC70PU70YG1ycfvbMpbLQwnpD%2F5POyj4IwbqYxkwFMaNv6VmfcmIVwMDQ%2BlnKkieEuOH%2BdDT8sV0oaNxVxFgNp%2BdLOK3YrIfDwrs8SVs%2BlXkr%2FIq9yGECrNAf4k9rouC3gs9GpPhFE5z7&X-Amz-Signature=49ded4b2e3973716fc40b8df762b5db3df19b8806b027e3b37e58faae6b708fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67OYDZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDod%2FHyJSJS%2BIi3h9pqRSsY9ltEw8qbRdNTbq%2FWNlr5qQIgYfmq1FQkldv8PjdoafRHJYuOGdxgobZh3vWuQcNfzNQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaiVmWGk1HRvBdkzircA3baM4yNdui8UBtGINliR8vmPF%2BGHLMgD5alv6oEreziKnReDuVlLwCGZQt%2BZHUXkHIPFw8GW28klE6aEi1akmSt3HsDIofzTVKZ9O1rStmY90by6EbNjci72WHX5EF%2BJ0ef8gvqc93YFidDIbtigXjgBpQg1agkvCs26Uvg1chkwyzX7HojddhdmW%2FpojiL%2B%2FQZO79j%2FMORHiMT3frAbaRXRcUGVBCECftqpInhikVZOX8LCcdEAw41RAmfUADBiejo5J7F9Dd2FZ1KfBof9Up54BQ3v53II04CTqcPye5ncdlu5KkHaeb0%2Fx493Z7rcC0yBZpwARbcyIay727NKDFPo99qkKd3AuyRNzvIOFGsu4H3KBdCLBLWlXO82s%2FvAGui1RtAFqXAcsq4TopEtxYkC05v3kP%2F5qrTJStsRLAHfYN31SoS%2FpRSbvklIoM1NJwYNbXirWuiWsrJp%2F5%2FsdW%2FcKMWb%2B%2FT8Ui53fF1Ju22aOkEu69gk8xj%2FILnDgVcVJdF2K5kkcmHuWt04DV8yvv0Kstg2PSl3q0HUSWyurALda1hin%2BLRSImaY7LezJlmb9wms3o00%2FpqdVBlkrixhrCw4SRnGV5DOVzH2H2hur060DltG%2FGgddDN3GtMPL%2FisoGOqUBVLd2hG3Ees%2B7AQTjHE6ksELfxJD%2FiFCxfcRiyz6GgNk%2Bt%2BmQP%2B2U5eb74F8eVRCk8rTiAXEsrgvrnlVlC70PU70YG1ycfvbMpbLQwnpD%2F5POyj4IwbqYxkwFMaNv6VmfcmIVwMDQ%2BlnKkieEuOH%2BdDT8sV0oaNxVxFgNp%2BdLOK3YrIfDwrs8SVs%2BlXkr%2FIq9yGECrNAf4k9rouC3gs9GpPhFE5z7&X-Amz-Signature=97659f56b11a72cc09e4ae5314bc1f4491c9f9e8f59c482ca50f9b02d3ae8dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

