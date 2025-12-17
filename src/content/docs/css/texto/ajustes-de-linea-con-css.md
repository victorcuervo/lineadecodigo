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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNKLSY3E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fgpk%2BTUVlIyUgwoODeQwpSmjiSAzQeG%2FjClzcJTzj6AiEAo5zmxkRtKgbbZ3xUp394RzSh11rqyPqniY9%2FFntlJMAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDA8ppbBbe5kb4Sg4tSrcA3h1bQhdMcqvlJ4rcldPvY2F7%2FLRJtSFrUtHqhz5aG080wZDvAQpuurUKAjeunKCpvTQ76JrBGLaV2WzIQxSaBU%2FQc4lZNMeR8a0aRBT20%2BjJsoagNbxowaFq7%2FrgU1L9Gq0BJTEXK%2BMYASezGK8WqZ6mpt37XfpmmfhWpdN1RpiyBbiFO4ntyDEtm%2BRQdFje2b0XNs%2BN0bevIDjCmMFGo0lYZaUGi%2FCmKSdXHm8vlITuBiCUTmbOm4oEYznuOTYw3JB61fWKTJOogb7bYDMHm57o0niD4GbZkOqbx%2FPooQ%2BoAkgb4HIM8lXomQHDpsI0C%2FwJYziaXjWUxejyHd09Pgxrg1uOrU527VzJU4tKdjgp%2FB6J1vGGA9079rquzOyZBEeLTCt%2FfiijASfo0WzUL7CzGP%2FaQpUvo6iP6g9djOT3O1npukHcpAn7p1pn531OBptkkqeFhJ%2BIIv0%2FuOq4EPx1wRy%2Fc1CT1%2BD0w09Du1X5GdyPXlYTjJXDbAkF0u2GgTxvrsCyplBwIjhAfpl38Ef%2FSu7FKiwwhyN0qmZtmfu%2BR7BpVuLMQhD6%2B7ugpuOKNqolCxXHWWvGpHp0TKPrSddtmQ8RyvRJKOrp6v%2Fp5TeJsbslAbPxBWvkCUiMMrpiMoGOqUBkFzZr%2FJ697hXllaDJmvixK99iQbwQuw79xTq21lngPiUowEON%2F8MxhMRdYWV5kRaXTGyf7HRnLPaCoZKKvm5%2BZC%2Bs%2Fw0LgOdD8Yd%2FZo1nB2PaLUixmc7Xo%2FcBGr1yR%2BHVSCWe7UZcDG5FQr7FOMf%2Bf8h0g%2BjFQVwYenGw3%2Bzd4GjEnwXDq9hX25%2FPAtcmeBgRyQ%2Fmepwu8hvRQKZfww2MqAPwdM5&X-Amz-Signature=bcc3cae6353d6c0098065fe959be83cdfca34320690df26b2efea5d4718ec5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNKLSY3E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fgpk%2BTUVlIyUgwoODeQwpSmjiSAzQeG%2FjClzcJTzj6AiEAo5zmxkRtKgbbZ3xUp394RzSh11rqyPqniY9%2FFntlJMAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDA8ppbBbe5kb4Sg4tSrcA3h1bQhdMcqvlJ4rcldPvY2F7%2FLRJtSFrUtHqhz5aG080wZDvAQpuurUKAjeunKCpvTQ76JrBGLaV2WzIQxSaBU%2FQc4lZNMeR8a0aRBT20%2BjJsoagNbxowaFq7%2FrgU1L9Gq0BJTEXK%2BMYASezGK8WqZ6mpt37XfpmmfhWpdN1RpiyBbiFO4ntyDEtm%2BRQdFje2b0XNs%2BN0bevIDjCmMFGo0lYZaUGi%2FCmKSdXHm8vlITuBiCUTmbOm4oEYznuOTYw3JB61fWKTJOogb7bYDMHm57o0niD4GbZkOqbx%2FPooQ%2BoAkgb4HIM8lXomQHDpsI0C%2FwJYziaXjWUxejyHd09Pgxrg1uOrU527VzJU4tKdjgp%2FB6J1vGGA9079rquzOyZBEeLTCt%2FfiijASfo0WzUL7CzGP%2FaQpUvo6iP6g9djOT3O1npukHcpAn7p1pn531OBptkkqeFhJ%2BIIv0%2FuOq4EPx1wRy%2Fc1CT1%2BD0w09Du1X5GdyPXlYTjJXDbAkF0u2GgTxvrsCyplBwIjhAfpl38Ef%2FSu7FKiwwhyN0qmZtmfu%2BR7BpVuLMQhD6%2B7ugpuOKNqolCxXHWWvGpHp0TKPrSddtmQ8RyvRJKOrp6v%2Fp5TeJsbslAbPxBWvkCUiMMrpiMoGOqUBkFzZr%2FJ697hXllaDJmvixK99iQbwQuw79xTq21lngPiUowEON%2F8MxhMRdYWV5kRaXTGyf7HRnLPaCoZKKvm5%2BZC%2Bs%2Fw0LgOdD8Yd%2FZo1nB2PaLUixmc7Xo%2FcBGr1yR%2BHVSCWe7UZcDG5FQr7FOMf%2Bf8h0g%2BjFQVwYenGw3%2Bzd4GjEnwXDq9hX25%2FPAtcmeBgRyQ%2Fmepwu8hvRQKZfww2MqAPwdM5&X-Amz-Signature=97a613364bcb49db3ff0dd882e3735aeb2a460691c65892a8ece105557ad934a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

