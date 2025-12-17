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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z42ONM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc5UCXUxp6gWZoFcTEIG23ohPnRHXsYMmMLRSL7VN2cAIgev9%2FBG56T3o3mxosjv3nCPUorhQNMh2ogjaa4gsAKTIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoRZpTGHgq9FLI9OircAwNJuaO6WLezSSApcDC7p0jjtOxuYg8KliLcCCVQGbcUqNe%2B5dkRY13tf0jJMcBxmMU1u2UUN6Lloy%2FDzxVGuKGYD9RfzdPrdh14CS85TPhor474gbUC%2BCWb66kEbNce0UJ3X%2BU%2BnBVZz84TMLDZr1Gg6zVEdv1qUVp%2B03wBwJpBygbcVrQqRvzpNYJwoyASoZ2XNVIsFJoH9t9RbuBNA6Ss8f%2FngHOp5yGbT3Ep88uq6iJ9SOX127%2F3EPLPdR15GsCJ0ydj0vTIfAurgADEaUtFOSu4vwQFFpzS8AkNEpU115Vr0GW2yHD54JGXgVpuyviIR6zDDzYEpORrluLP7dsqRoB%2BcdeEmHMLYYaf8Tr17I1Fe76obapeugZW1skTvy94nNncCPcGpM6KRztm1JoR7V0R0rqtiXZFDsfFJ5OTaSnHfZPQ2qMJ1%2FH1iTXQ5wSqAGNj8HoDDLrJYswxEv7dnn3q9oMQEG7YVkLz82Imw0hfrHY5UcaCDFDGidYGZPAcwnBMVq3w25CqmkxR07MbZUm6UKC1XKfMOlVcPY76EzOFfslg3EhSdtBGWozGbV9woGJ6mSeEbkLnSS4DQzAOwp5slOdnrPlD3mIX4GsOjGcHUU52LrF73IIoMMGfi8oGOqUBDPV59IwE%2B%2FdJ7Mf6uS%2BczmBp2ubS3S7flG4vZEjz2k3ayw56qTOiNIaduWpiKp38yVlRLEQZ2edaq5B4Kxoyaznj0OGOB8fCk1PnT8alUtVOQnfyaLDKFtSE6uKSbDJ%2FPjT4xM4pOcsokG%2FYeyfh7kk%2FnogLBxfxHfo23qlnXq70h4B6g7DWnQTPpJEcyT%2Fgiz78%2B1YMCt4TdBQey2HntuSyMwb%2B&X-Amz-Signature=3491228c4f77cc413f21adb9c0eaf4b3acafe01f60786b28c5da1082f4f368f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z42ONM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc5UCXUxp6gWZoFcTEIG23ohPnRHXsYMmMLRSL7VN2cAIgev9%2FBG56T3o3mxosjv3nCPUorhQNMh2ogjaa4gsAKTIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoRZpTGHgq9FLI9OircAwNJuaO6WLezSSApcDC7p0jjtOxuYg8KliLcCCVQGbcUqNe%2B5dkRY13tf0jJMcBxmMU1u2UUN6Lloy%2FDzxVGuKGYD9RfzdPrdh14CS85TPhor474gbUC%2BCWb66kEbNce0UJ3X%2BU%2BnBVZz84TMLDZr1Gg6zVEdv1qUVp%2B03wBwJpBygbcVrQqRvzpNYJwoyASoZ2XNVIsFJoH9t9RbuBNA6Ss8f%2FngHOp5yGbT3Ep88uq6iJ9SOX127%2F3EPLPdR15GsCJ0ydj0vTIfAurgADEaUtFOSu4vwQFFpzS8AkNEpU115Vr0GW2yHD54JGXgVpuyviIR6zDDzYEpORrluLP7dsqRoB%2BcdeEmHMLYYaf8Tr17I1Fe76obapeugZW1skTvy94nNncCPcGpM6KRztm1JoR7V0R0rqtiXZFDsfFJ5OTaSnHfZPQ2qMJ1%2FH1iTXQ5wSqAGNj8HoDDLrJYswxEv7dnn3q9oMQEG7YVkLz82Imw0hfrHY5UcaCDFDGidYGZPAcwnBMVq3w25CqmkxR07MbZUm6UKC1XKfMOlVcPY76EzOFfslg3EhSdtBGWozGbV9woGJ6mSeEbkLnSS4DQzAOwp5slOdnrPlD3mIX4GsOjGcHUU52LrF73IIoMMGfi8oGOqUBDPV59IwE%2B%2FdJ7Mf6uS%2BczmBp2ubS3S7flG4vZEjz2k3ayw56qTOiNIaduWpiKp38yVlRLEQZ2edaq5B4Kxoyaznj0OGOB8fCk1PnT8alUtVOQnfyaLDKFtSE6uKSbDJ%2FPjT4xM4pOcsokG%2FYeyfh7kk%2FnogLBxfxHfo23qlnXq70h4B6g7DWnQTPpJEcyT%2Fgiz78%2B1YMCt4TdBQey2HntuSyMwb%2B&X-Amz-Signature=28fd20d95a3ed79b2573d809f711e15fc4a2991276332d11990ee47d8ab139c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

