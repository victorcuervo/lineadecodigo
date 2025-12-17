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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REN2VKVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR8XuA5Pv%2BN%2FfAXQrg8sXLH8al%2BoMjNUfcvyx0fB%2BJBAiEAvxPVXS1b0VTuRkn7xexsX1D5aDeglU6QTzFqL%2FCjJ5gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDM64e5W5eb7QEk06gyrcA1JfS9j%2BYr7xpoURTduLiPKSZNvdTFp4Osw54Z38467ywBjT62B3lBOLCuF%2Fmh5tasBEDYNJkaH%2FkEi49G9XpH9il2Ye9JsH2Tmlif%2FpRq6GPIXZAt77qj1GjDebiLdBpirTvJSek8UM4RDet0R6Nzf0wDkkgEr%2Byvv461G%2FZg28zKVTDV%2FNvpb7fbFb8YkP8HOurXS7zWdNBlgOFTdt8UircsCNRShqYiLK5b5J9kWXO45piCX%2F9c4DjEoe8A9qiTJTfb7xebRMTOUax1RkQDzmTjlCRhdOhw%2FFkAYW24f3vzhk2mkvH7y5JVKQqwkn8gZcSr5Sb9HQHFo8VvQWwXH%2F7J0Yp1tuYzWE5x5kk8fbdPCD%2BvOivityup5hmyOnpzk06VwomMr%2BZcAUQEnCfbIiXFn53INYmJerWFNOAw7VYPDkCQvMm3qRMWJYmhzUlXUnca03vB%2Fqw55W%2B5TunyBE2YOBw7Wouv3Avpx%2FJ2UsbaY3So4oFpBsCmYpUM3FYa7AEGefoXCXMjb6HT69%2FF9zixeJBxZOiaP769pPme6uIHZMSJSH%2FK1C9rjbVgTR4uuzhMTTcpEASH7SMnfxW%2FCM24Dy7Au6VmPngXh8Koi9cJYz2bBSMNe7VrTHMI63icoGOqUBUGUGpX48N4eFAtFHyZbAFCylLFAx8x0kOsK8h5nYJFBSs3hExcTUMr5oklPUw5lnCJFlqYJscMmSOd2N0tmcZNBzH%2BVrEXwAdCeTXpNvc0jVm04I2jeQRXRK51qFPbr2IVerbxJP5gYjxw3Sao5uqYi0F9JYad7bJxoacdYZ31PbohLEiU2iiQgCQVIiJvYsvkqPeuOZCHs%2BKvkIQcLl%2B9KQnO7%2F&X-Amz-Signature=08707adf798a19cb870856ebb4e56fc356e703ce660f6820ee5abcce64849149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REN2VKVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR8XuA5Pv%2BN%2FfAXQrg8sXLH8al%2BoMjNUfcvyx0fB%2BJBAiEAvxPVXS1b0VTuRkn7xexsX1D5aDeglU6QTzFqL%2FCjJ5gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDM64e5W5eb7QEk06gyrcA1JfS9j%2BYr7xpoURTduLiPKSZNvdTFp4Osw54Z38467ywBjT62B3lBOLCuF%2Fmh5tasBEDYNJkaH%2FkEi49G9XpH9il2Ye9JsH2Tmlif%2FpRq6GPIXZAt77qj1GjDebiLdBpirTvJSek8UM4RDet0R6Nzf0wDkkgEr%2Byvv461G%2FZg28zKVTDV%2FNvpb7fbFb8YkP8HOurXS7zWdNBlgOFTdt8UircsCNRShqYiLK5b5J9kWXO45piCX%2F9c4DjEoe8A9qiTJTfb7xebRMTOUax1RkQDzmTjlCRhdOhw%2FFkAYW24f3vzhk2mkvH7y5JVKQqwkn8gZcSr5Sb9HQHFo8VvQWwXH%2F7J0Yp1tuYzWE5x5kk8fbdPCD%2BvOivityup5hmyOnpzk06VwomMr%2BZcAUQEnCfbIiXFn53INYmJerWFNOAw7VYPDkCQvMm3qRMWJYmhzUlXUnca03vB%2Fqw55W%2B5TunyBE2YOBw7Wouv3Avpx%2FJ2UsbaY3So4oFpBsCmYpUM3FYa7AEGefoXCXMjb6HT69%2FF9zixeJBxZOiaP769pPme6uIHZMSJSH%2FK1C9rjbVgTR4uuzhMTTcpEASH7SMnfxW%2FCM24Dy7Au6VmPngXh8Koi9cJYz2bBSMNe7VrTHMI63icoGOqUBUGUGpX48N4eFAtFHyZbAFCylLFAx8x0kOsK8h5nYJFBSs3hExcTUMr5oklPUw5lnCJFlqYJscMmSOd2N0tmcZNBzH%2BVrEXwAdCeTXpNvc0jVm04I2jeQRXRK51qFPbr2IVerbxJP5gYjxw3Sao5uqYi0F9JYad7bJxoacdYZ31PbohLEiU2iiQgCQVIiJvYsvkqPeuOZCHs%2BKvkIQcLl%2B9KQnO7%2F&X-Amz-Signature=a92d9003a80c5631f2045415c91a29d4939166efa7533e825af54c972ac963ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

