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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO62GNM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4Ra%2FfY0ysxgi5uNurLgnMKT10p8ZgJShq2A175KsVjAIhAOCm%2F%2FEFDpYv2lQw0GzctD4tbgaG4iGIMASrHgEU0xw3Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwXdQVHXGCadkJowdUq3APsSbTob36spcuUHnoV9H1ftILiTVfe4pxu943dPKjVpAPzPp3uaFTSf3yHAVpD%2FU9ASfhmDcFERdgEPXu4BT%2BXQe4nEXUI8CwK8cKG0Gm0N0Wf0Q6x7LNTenyE1%2B684VRoI5ybAFEvePxo6NlJzFVlNg5qwCbtJSfrvSwgcx5hK6KWeSxYX3ZyGiijojj9ODM7iFfuymVgibHCkbvFSwnQvO%2Ff%2F1UdY0a0kwjJ%2BrPDTCPrcpiXldf%2FvNXvz2HbWUubp93BHysvnyUtn%2FGf8%2B53Y%2BVKiM%2BIn144s2NwJsQXbOB9U98T1co%2BEIG38CJF8NXPDmbRkQMQI0OpUNerzWTCKim8ossF0HjPguFJd%2FrvP40YxDta0EdBy%2BOERU1CbYNL2viImAdu9%2BZ1I9h5ZlisX4h0R6rmu4pbUq5q%2BuexmP7cuEX1ENdfsQ8YmJFnOwe8O2zWktKr5rR%2Bzg1OIls82yfAapuiJo5IH9kPKutWRKJjLC3q%2FFA3ogDgWISQ%2BxpPYCUvpFUtqS5j7q32CSGGxNYhsYOhTPMwckFkM4QjHIn9IQa19Dm50Ytl%2FKZGiMGQi6f7JcSvEBjSjL98XOgrnPYIErSeatuKf5zmy8DoOLXxT891MnE5pFHJaDCD6ojKBjqkAaZ7kovk22OS%2F6Ukxn%2FUnRIekdn6aXh0Jl3ukAz9K5Irju3cXtJapnoMTjX2YCImirs36XmlwpRlPshNNNvXoyVzKeTx3ntaKWgXk0ez7e4JjZVx4yIhRNBC9rvfxt1GX0iXh80q3Cjak1tVFkJlz3y93VldP9ULYX2nIpQGS1m4EK%2BHJDGmBdK2iIKB4flEm3FOJddxelV5Nf%2FkT%2B3ypCVIVyp5&X-Amz-Signature=39811ea40f0e0d10bd7fac2a25ae5eb8426c9d5bf708728beaa3b716d0749dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO62GNM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4Ra%2FfY0ysxgi5uNurLgnMKT10p8ZgJShq2A175KsVjAIhAOCm%2F%2FEFDpYv2lQw0GzctD4tbgaG4iGIMASrHgEU0xw3Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwXdQVHXGCadkJowdUq3APsSbTob36spcuUHnoV9H1ftILiTVfe4pxu943dPKjVpAPzPp3uaFTSf3yHAVpD%2FU9ASfhmDcFERdgEPXu4BT%2BXQe4nEXUI8CwK8cKG0Gm0N0Wf0Q6x7LNTenyE1%2B684VRoI5ybAFEvePxo6NlJzFVlNg5qwCbtJSfrvSwgcx5hK6KWeSxYX3ZyGiijojj9ODM7iFfuymVgibHCkbvFSwnQvO%2Ff%2F1UdY0a0kwjJ%2BrPDTCPrcpiXldf%2FvNXvz2HbWUubp93BHysvnyUtn%2FGf8%2B53Y%2BVKiM%2BIn144s2NwJsQXbOB9U98T1co%2BEIG38CJF8NXPDmbRkQMQI0OpUNerzWTCKim8ossF0HjPguFJd%2FrvP40YxDta0EdBy%2BOERU1CbYNL2viImAdu9%2BZ1I9h5ZlisX4h0R6rmu4pbUq5q%2BuexmP7cuEX1ENdfsQ8YmJFnOwe8O2zWktKr5rR%2Bzg1OIls82yfAapuiJo5IH9kPKutWRKJjLC3q%2FFA3ogDgWISQ%2BxpPYCUvpFUtqS5j7q32CSGGxNYhsYOhTPMwckFkM4QjHIn9IQa19Dm50Ytl%2FKZGiMGQi6f7JcSvEBjSjL98XOgrnPYIErSeatuKf5zmy8DoOLXxT891MnE5pFHJaDCD6ojKBjqkAaZ7kovk22OS%2F6Ukxn%2FUnRIekdn6aXh0Jl3ukAz9K5Irju3cXtJapnoMTjX2YCImirs36XmlwpRlPshNNNvXoyVzKeTx3ntaKWgXk0ez7e4JjZVx4yIhRNBC9rvfxt1GX0iXh80q3Cjak1tVFkJlz3y93VldP9ULYX2nIpQGS1m4EK%2BHJDGmBdK2iIKB4flEm3FOJddxelV5Nf%2FkT%2B3ypCVIVyp5&X-Amz-Signature=4121a03371c05f9c1cad3bb2b98edd2a66c2a77f7d2e7de45ac66aceeaab2234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

