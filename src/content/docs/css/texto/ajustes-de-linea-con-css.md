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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SN4AGZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJwmjXt8Vn10gy5jQ6M935kXE%2F%2BadpuLocDaJIyPohjgIgBLB25Fiim2wuYoB8oHRyHG%2FaVNhoMY1znP3f%2Fi31ciwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHFl3f3iycrRgOOcircA9cNHYF077DN%2FvRIcPnmaYE0uBOA8X3I15Sgp%2BkouOBZyROa01lSKQvKuJLNGoQcZUySu2vFPKSfKIu5fS6NvNBbDPjeuizLYOYzwOVSx3Znf1ZhQqqBl38Ol7kmxdq1523BTfU7VkbTOn8zhmaHN84GxPqF4L9PIJtUGA7%2BhB8RcXkRtCACdvsWJNs1OC%2FnI7UNz%2BufIA9NVm7SPLSfMudwlUvxtkq9Ko3QrQbAqfzwxo9P%2BBxnq1VH2ePRqZS%2F%2FXJBXXXdZFTR717C3ZHil26W%2FZAWGl7QYmB1dMBn2ad89yK3MziVeWTFOcH1OQ5b58utWvkIze2MzTfh%2FM3m0o5BfV9YfflrLuhk7RRrwL8zi9TdOWeG2pR4Mo9GBLOcyht5XldixhABx1T%2BJnR6o5S28Jnvjjp7cLnAP8LFIV7NvFayLvfDLqOFwdH%2BbQ%2BlHK%2FpAVkNsaoPPUUAF4XFB%2FyzVdA5BOfLBaGqAkkHxtZrjUF2dHKlGgK3Lo%2BCFVdVlvnW%2BEy5dMFne6Bk%2B5NCuTeEBabXs9b2QTIRTQlEJBKKcKmsW6xTQ44BTTR%2Bf2L8zXbBmnoczOlgzt3uZKAXFoBnqfzLMYsh0RvvSS%2BdcH9%2FY9iVmFNfX7OHIlfvMO2gi8oGOqUBEdrmMvyYUFoSaXrgOnq7Mlw3Kv39iTWUcxOPoB1RiEICT%2B77VBY5bfuRSW4yHNSox6SUsIVRdndDZEfOSpc888q0Hy%2FSgwDdLzXol9%2BiIfsdcNGMhyQA%2FTf3OAGcC16pmft6gbcem7%2FYFLEKQVA4PMdW%2BPd85e0Y8Rx3i8eNSFfji3eeV%2FVRlqEuX8AOzfXRo5jFdmZDa5UjYdfAT34BWuA%2FNiJU&X-Amz-Signature=b3f840b5df55e6b9cb15dfa761cce1fc466e14911a5d61ff811fb8c80fbe05aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SN4AGZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJwmjXt8Vn10gy5jQ6M935kXE%2F%2BadpuLocDaJIyPohjgIgBLB25Fiim2wuYoB8oHRyHG%2FaVNhoMY1znP3f%2Fi31ciwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHFl3f3iycrRgOOcircA9cNHYF077DN%2FvRIcPnmaYE0uBOA8X3I15Sgp%2BkouOBZyROa01lSKQvKuJLNGoQcZUySu2vFPKSfKIu5fS6NvNBbDPjeuizLYOYzwOVSx3Znf1ZhQqqBl38Ol7kmxdq1523BTfU7VkbTOn8zhmaHN84GxPqF4L9PIJtUGA7%2BhB8RcXkRtCACdvsWJNs1OC%2FnI7UNz%2BufIA9NVm7SPLSfMudwlUvxtkq9Ko3QrQbAqfzwxo9P%2BBxnq1VH2ePRqZS%2F%2FXJBXXXdZFTR717C3ZHil26W%2FZAWGl7QYmB1dMBn2ad89yK3MziVeWTFOcH1OQ5b58utWvkIze2MzTfh%2FM3m0o5BfV9YfflrLuhk7RRrwL8zi9TdOWeG2pR4Mo9GBLOcyht5XldixhABx1T%2BJnR6o5S28Jnvjjp7cLnAP8LFIV7NvFayLvfDLqOFwdH%2BbQ%2BlHK%2FpAVkNsaoPPUUAF4XFB%2FyzVdA5BOfLBaGqAkkHxtZrjUF2dHKlGgK3Lo%2BCFVdVlvnW%2BEy5dMFne6Bk%2B5NCuTeEBabXs9b2QTIRTQlEJBKKcKmsW6xTQ44BTTR%2Bf2L8zXbBmnoczOlgzt3uZKAXFoBnqfzLMYsh0RvvSS%2BdcH9%2FY9iVmFNfX7OHIlfvMO2gi8oGOqUBEdrmMvyYUFoSaXrgOnq7Mlw3Kv39iTWUcxOPoB1RiEICT%2B77VBY5bfuRSW4yHNSox6SUsIVRdndDZEfOSpc888q0Hy%2FSgwDdLzXol9%2BiIfsdcNGMhyQA%2FTf3OAGcC16pmft6gbcem7%2FYFLEKQVA4PMdW%2BPd85e0Y8Rx3i8eNSFfji3eeV%2FVRlqEuX8AOzfXRo5jFdmZDa5UjYdfAT34BWuA%2FNiJU&X-Amz-Signature=54f861273e978870dbe4aa923f01603913e26e1d866c5f44c03152029ccee16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

