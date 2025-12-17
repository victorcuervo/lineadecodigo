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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXP7KFIV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX28LkYKIDgpTWkJ1NsFc3BmqXvhrgNn6aYQ8BNOxc8gIgLOpVqKxahPK1YoJHDDjGVRQpUezVzSlhLCR2mqnnoDIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa1lQnERnQX%2B%2BHLaircA2vnYI0ulZ42Mo9PF9WxhwMtFyitFEzlq3jx3gGgr%2BtG9ezSyHldisQtIF1fg%2Bls96fyEhg7YnERDTJpkjzP2cGwlyGdyEJTxdd%2BjyOipBRLqHiCifSFW%2BtvHEXYC93br0edCaxlkDItTjTZH1RQP7v%2Ftea7Su2WUCMJ0kWWAPr6%2B20A7aMzAMwJmK%2BGWs0%2FZ8OT525VLEo%2Bs0t3Uli2DxEAlWfpZsYrqpXqGcMdJKO7qK7nhwNUvgB9ns14fIv5t60oz5LjVfTcvKcYdF4mjFZlNY2Ls1oJPjGcMaDHmrSzReSCzSMxrOZNZmsyDmChMvvqVrJBxwykuVhyshEwGnz94UTMb6KrojPwdoUF%2F2VlwGW7j7AcL7YFcdXlTUNdEZ0N5lcyMwQ5x5XsSiektebroJAou%2FGI6YJOr7JVbti6NZhZTXa3P3UI3%2F43b4coBi2E%2B%2BvzloTvgC3aN3KWZyAKuZ7W9lz8TRylQr7WE%2B0u6MBcNyoYjfir5eTXWvV4M0WOeP38lswRD6vp6TkinLFxeyjpif0J5IjJ0vVr8K5j8kSs5xF%2FsLybEvdzFmvVgoCq2o6Lt09lBCzHOofsrP1TfDFhrNaFQyspiE700RRQjnymXIS1sNKZPfcwMLegi8oGOqUBtMmrGUp%2BKzojMFk9NI%2BSNYIhBoyo%2BWs2EreQGBTEqTwUwhX%2BUphD8uUQ7a%2B66o9jyDBqhtmvPTApsy87GjYOJSvqJAX1WX%2BD16agUPbm2weQvYgOQVKVmdtlAUIIsFI8PQbAZc90uw8%2FBAb%2B%2Fzlhdl3CpqMAzHNzO1o5njDaxcC8F0FjKUOMJ9iyo5ThczfDk8QU8dPtuUGp%2BoZgYFbSERl4KpLU&X-Amz-Signature=f7218c59dd18ed65f926cf07cf53e01dc944ed292d73a3309dad1cdb07c88380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXP7KFIV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX28LkYKIDgpTWkJ1NsFc3BmqXvhrgNn6aYQ8BNOxc8gIgLOpVqKxahPK1YoJHDDjGVRQpUezVzSlhLCR2mqnnoDIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa1lQnERnQX%2B%2BHLaircA2vnYI0ulZ42Mo9PF9WxhwMtFyitFEzlq3jx3gGgr%2BtG9ezSyHldisQtIF1fg%2Bls96fyEhg7YnERDTJpkjzP2cGwlyGdyEJTxdd%2BjyOipBRLqHiCifSFW%2BtvHEXYC93br0edCaxlkDItTjTZH1RQP7v%2Ftea7Su2WUCMJ0kWWAPr6%2B20A7aMzAMwJmK%2BGWs0%2FZ8OT525VLEo%2Bs0t3Uli2DxEAlWfpZsYrqpXqGcMdJKO7qK7nhwNUvgB9ns14fIv5t60oz5LjVfTcvKcYdF4mjFZlNY2Ls1oJPjGcMaDHmrSzReSCzSMxrOZNZmsyDmChMvvqVrJBxwykuVhyshEwGnz94UTMb6KrojPwdoUF%2F2VlwGW7j7AcL7YFcdXlTUNdEZ0N5lcyMwQ5x5XsSiektebroJAou%2FGI6YJOr7JVbti6NZhZTXa3P3UI3%2F43b4coBi2E%2B%2BvzloTvgC3aN3KWZyAKuZ7W9lz8TRylQr7WE%2B0u6MBcNyoYjfir5eTXWvV4M0WOeP38lswRD6vp6TkinLFxeyjpif0J5IjJ0vVr8K5j8kSs5xF%2FsLybEvdzFmvVgoCq2o6Lt09lBCzHOofsrP1TfDFhrNaFQyspiE700RRQjnymXIS1sNKZPfcwMLegi8oGOqUBtMmrGUp%2BKzojMFk9NI%2BSNYIhBoyo%2BWs2EreQGBTEqTwUwhX%2BUphD8uUQ7a%2B66o9jyDBqhtmvPTApsy87GjYOJSvqJAX1WX%2BD16agUPbm2weQvYgOQVKVmdtlAUIIsFI8PQbAZc90uw8%2FBAb%2B%2Fzlhdl3CpqMAzHNzO1o5njDaxcC8F0FjKUOMJ9iyo5ThczfDk8QU8dPtuUGp%2BoZgYFbSERl4KpLU&X-Amz-Signature=c4701a1b0e56d97a26d1d846a363565b5acee3f7c2c15d5162144c416876c0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

