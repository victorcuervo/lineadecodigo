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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFQUADP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsFwvp3kNJKPsgBVLPVtRMVOPZdZfFZxoiJzAw6zkeOAiEAqL4j%2FoOp5G4YfDBQDuOu9NJNQSz69b8X30Bfva99Raoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPQJSGfSRFTOOWEqlSrcA4tUiEczp6IqYVBr5%2FbArjuEIZg61wxMVaFwWapLiOcw4%2BOEGEefAOOHZGYuhHALY%2FWmfSkggEmzm%2FnWQXzhodrWkvSsqB7YbODTFNEfkpTLFlopJsciRvZTPYyn3%2FDprmCpZte7UM9yNHPUDEwOgVNC7dZy%2B27y5zhNMTJbXP%2Bcqsl4Ue3Xgd20g%2ByzxjB2K9YKKcq%2FvtWtYfP8t6KSzcqOTg0j2%2FdHeIVNQmgw1Vi%2BDWr%2FvRTwvNmBgukBcVsctJJ4EZ2RehR1gTNaRKj85Anm35CeN88luZMxEo543HFktCtAB3wdUgLpb8hcGBuJ4uvmlRtq4o4mBAmeUqL1GauxHMO%2BCkRl%2BS0VgDf4bZ6R2wh1pIBWgUGjVbdaAGpbsV3JrqPVWu4UszmIpA16agB5VcRg5p5B0Ou6crMQmmauu%2BI3O8wcSRUCCi%2FVY3kRJvIiR3Kq33oCSGwK5WsBEY5Ev7VwoAOgKIuD8Jh1dnCtXvx8PsjT46kZ%2B4dTcRe7uwRfetMMCCBPqxVk8JHYl2RWOYdiYKw4EJgu4bPbCobiSpSCtGbWqaxaQc2sdWIdoYsEUH29%2BLFTD9TCxpJuoNhvfPGqzzfYODBnmFrHd4dF8yit3FaJgNZvHx7lMOrwicoGOqUB4rg4byKEhKif1n%2FIobejMUMyQVYXotlgjB4OblnybjA7XFSuzL6MGd1Zwa0ebZvdZ%2F6YSwt2kFP75RwF55fC5mFYzzJufuUKwmT2CAiVByAqDhmOmZtunnfPAYUAFvOxdmt8cgV1qtM7ZUnMjiwqEhCNEaUvucWM10OnrjjlSLEWyDOPTt5X85Aiy6MOLLsz1zue4J9FhXDH7WJ3PKlrisCyg4Fh&X-Amz-Signature=07d87251188fdf8ec31079cfe7de7051efc09db7a52eef47c69ae1e57851d097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFQUADP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsFwvp3kNJKPsgBVLPVtRMVOPZdZfFZxoiJzAw6zkeOAiEAqL4j%2FoOp5G4YfDBQDuOu9NJNQSz69b8X30Bfva99Raoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPQJSGfSRFTOOWEqlSrcA4tUiEczp6IqYVBr5%2FbArjuEIZg61wxMVaFwWapLiOcw4%2BOEGEefAOOHZGYuhHALY%2FWmfSkggEmzm%2FnWQXzhodrWkvSsqB7YbODTFNEfkpTLFlopJsciRvZTPYyn3%2FDprmCpZte7UM9yNHPUDEwOgVNC7dZy%2B27y5zhNMTJbXP%2Bcqsl4Ue3Xgd20g%2ByzxjB2K9YKKcq%2FvtWtYfP8t6KSzcqOTg0j2%2FdHeIVNQmgw1Vi%2BDWr%2FvRTwvNmBgukBcVsctJJ4EZ2RehR1gTNaRKj85Anm35CeN88luZMxEo543HFktCtAB3wdUgLpb8hcGBuJ4uvmlRtq4o4mBAmeUqL1GauxHMO%2BCkRl%2BS0VgDf4bZ6R2wh1pIBWgUGjVbdaAGpbsV3JrqPVWu4UszmIpA16agB5VcRg5p5B0Ou6crMQmmauu%2BI3O8wcSRUCCi%2FVY3kRJvIiR3Kq33oCSGwK5WsBEY5Ev7VwoAOgKIuD8Jh1dnCtXvx8PsjT46kZ%2B4dTcRe7uwRfetMMCCBPqxVk8JHYl2RWOYdiYKw4EJgu4bPbCobiSpSCtGbWqaxaQc2sdWIdoYsEUH29%2BLFTD9TCxpJuoNhvfPGqzzfYODBnmFrHd4dF8yit3FaJgNZvHx7lMOrwicoGOqUB4rg4byKEhKif1n%2FIobejMUMyQVYXotlgjB4OblnybjA7XFSuzL6MGd1Zwa0ebZvdZ%2F6YSwt2kFP75RwF55fC5mFYzzJufuUKwmT2CAiVByAqDhmOmZtunnfPAYUAFvOxdmt8cgV1qtM7ZUnMjiwqEhCNEaUvucWM10OnrjjlSLEWyDOPTt5X85Aiy6MOLLsz1zue4J9FhXDH7WJ3PKlrisCyg4Fh&X-Amz-Signature=67c0aeb5dfd3a54eb74d3ee8304ad9c9c049df0ebb033cd0942bb176671c0d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

