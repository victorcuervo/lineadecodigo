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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MZZIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDvwb5yUDgvIOxIk8FtgmN9dgP4CK5vw%2FbBufpvPXqtAiEA1UYvhnKClx4JU%2BRAkxaDc%2BMfVQ8k8NKitQJrLaVdQgYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ZHhEipVug1FcjjCrcA5xzi2XNAxb7IMSc%2FR6FrU9wOyXM2GEtVJZhe9BSm%2B5QvU3Azz5jhcx9sfmXL4qu2Y4R9wshWSWSkyvvBPFiVgoavOZyFnLIGDhPoJmyxYwCmTCxKxktgRoz9%2BYNSwl%2F6zFtDuwKphSyOtLCPxGHJkqlG6cksVIaAGeFRdBiqsKiSKXB7X%2BOKXw28y9%2FVELztv%2Fw5Qf%2FwmxKHpEfD5tjTUhsPAhHOsHjW9CrStFBvrFJYz3g7CSGdn5riTopRRhtoJoz6Bii%2BQdIXe1zivJxzJN8itcr%2BH1wysWIZ41DhCxr2rPn63kKPUdHga2yXiorgHd%2FplmhUFH1alUg5O3%2Bg20ljCsQzQTfRAmxhcY8%2Bd7KwkVTbHKZd9kcDjqKYyumdMKis4fvVz%2FGrM73PdJ3Ne96eIp4qwmnaZCxuPJeDnao37lfZoR%2Fqj9YzeEKfEOOlep%2BuXh9nj2t7qOTrIX3yCwYdjoDm3jx7B348dII9MlBy2XcThxKgfw1KTVtvb9qN0PZu92K64m%2Bsswsfe4MV05GvvNURvYq3rSYQLE%2FO1TbRGYLftCDks6kcP7WfGqNo4llyLKBCUjehe4s5bmrGpwUCO0MOf4g5tQQ1ghjNj2IB7QuOBeNEOqp63DtMKufi8oGOqUBWH2EPOp8CPBUeqwX9Ms4eZD1Zr%2F0YUqMFZ8zWM60%2BAORLBNnpYfIqyD%2FrmWr8VhwXdSXuwLw2RA%2F5asLVND67GZgiwMVcawydWdgSovo1AVtTOCFM4irJwpcLmj9QHxUqCA8krOV9tMCLwayhYgLPBjObEuf%2BRrMPb%2BdlQkI3S7VfoGpYY9eh0qmVb25uCA0WXuf%2FyyEnyZ5vGU1jNuXHD2qh0Cp&X-Amz-Signature=9824c66c1d8b9f4ce92addfa378f26b19d4f271f4940f47a65ea0d3c5d181105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MZZIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDvwb5yUDgvIOxIk8FtgmN9dgP4CK5vw%2FbBufpvPXqtAiEA1UYvhnKClx4JU%2BRAkxaDc%2BMfVQ8k8NKitQJrLaVdQgYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ZHhEipVug1FcjjCrcA5xzi2XNAxb7IMSc%2FR6FrU9wOyXM2GEtVJZhe9BSm%2B5QvU3Azz5jhcx9sfmXL4qu2Y4R9wshWSWSkyvvBPFiVgoavOZyFnLIGDhPoJmyxYwCmTCxKxktgRoz9%2BYNSwl%2F6zFtDuwKphSyOtLCPxGHJkqlG6cksVIaAGeFRdBiqsKiSKXB7X%2BOKXw28y9%2FVELztv%2Fw5Qf%2FwmxKHpEfD5tjTUhsPAhHOsHjW9CrStFBvrFJYz3g7CSGdn5riTopRRhtoJoz6Bii%2BQdIXe1zivJxzJN8itcr%2BH1wysWIZ41DhCxr2rPn63kKPUdHga2yXiorgHd%2FplmhUFH1alUg5O3%2Bg20ljCsQzQTfRAmxhcY8%2Bd7KwkVTbHKZd9kcDjqKYyumdMKis4fvVz%2FGrM73PdJ3Ne96eIp4qwmnaZCxuPJeDnao37lfZoR%2Fqj9YzeEKfEOOlep%2BuXh9nj2t7qOTrIX3yCwYdjoDm3jx7B348dII9MlBy2XcThxKgfw1KTVtvb9qN0PZu92K64m%2Bsswsfe4MV05GvvNURvYq3rSYQLE%2FO1TbRGYLftCDks6kcP7WfGqNo4llyLKBCUjehe4s5bmrGpwUCO0MOf4g5tQQ1ghjNj2IB7QuOBeNEOqp63DtMKufi8oGOqUBWH2EPOp8CPBUeqwX9Ms4eZD1Zr%2F0YUqMFZ8zWM60%2BAORLBNnpYfIqyD%2FrmWr8VhwXdSXuwLw2RA%2F5asLVND67GZgiwMVcawydWdgSovo1AVtTOCFM4irJwpcLmj9QHxUqCA8krOV9tMCLwayhYgLPBjObEuf%2BRrMPb%2BdlQkI3S7VfoGpYY9eh0qmVb25uCA0WXuf%2FyyEnyZ5vGU1jNuXHD2qh0Cp&X-Amz-Signature=37252695163599cf99682fcb9c1094ba57d6188f2e4180bb155fe426013fff4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

