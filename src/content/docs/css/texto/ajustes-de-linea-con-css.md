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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVRVIMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2f6wI6BXmDom3f1T%2BFh%2FGt0SWoRNc6qL4Q1eOPzUrwIhAPITXvQAIzuoZP0f9ETq3Ux7dgEuT0fnn2FBiT3mfamWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzbeTonHJzmcZswmkQq3AOov%2F4AwUcJ%2Bbcs2ydvgBtHTTrvqyhgui0y3KAHn4oEaxiBFd2VawStkPtlJFbPmvytVl88msSEmSPbDsF6cUH9y%2B5ZDW0B%2FV4mN3Mqy%2BaFyPpZ4phVf4d0L1KeGDHzYycUCFfPI95YdzsaxiUF1lNNr0aCHTQWeE2qsl0j%2FL1XrRTAhBm5zcd0NQGj6BR8XnnWi0hOULs7qm%2FdcC%2FEruGRNv7C8cqtOEUlUtAj2bWGlGAphaT6wNQ9NYmxKg%2Bjmu2Le3ZdixHMrW5JmJ8k%2FugVuDjAC7e8yZuyXai7H1wZ%2FalAxRZ11RVDjz3JIcANKD%2By3f2oJcvf6Csr9DAKo4rOdDUdwS4CaWFQAqxWcA6pAlYKV8YtiWe2WbkjHzqk%2B0X9sSw0ubXeNhwnBTcg48s3%2B8%2B%2Bq3xqxMMhz24SfVG%2FC88iAoa03e2FZROeAjTciXVfCayxqJuxAu6aHWsa1JNAv8e4FfJrK3p8XdRNuVnuTTL3TzapJJ7OSbKbiihsXMc99XDUOZSlAvpfiJZPhVrjmsJWoWXwsDw48Fo5XzCXv7TBEirHFLPW08Sydt6N3gFrkxvFfX4IiRUkHwuhZQgomBAKSpYEmIQgDaXXrFssranb8IizdG3fRlYoMTDwt4nKBjqkAaBW%2BbyAOcBWbHASpafclMqp%2F0QG5ZWSLb9gY0vyNpdA06fMyVoghwLmqF9ZD%2FUjrkRmYbTn%2FwzP%2BtldY%2FResTBcvYqo3cJDLQ4dKEaQPjAkzVp0F1lcWQ2NPl5gOSPF%2BIO9AOXoJlE9bS%2B0gAPWKxRrznToBY%2FxPpDB3uRaMFMVL2ocuh4m7Bb4PTHCYeU%2Fn3Ct2aRVfOcH%2F2jlVOWxjEm5fesp&X-Amz-Signature=298f1bc394891eeca59dbd69066e84bfca91a0c0d4d1f55fd3834e4ea833fe78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVRVIMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2f6wI6BXmDom3f1T%2BFh%2FGt0SWoRNc6qL4Q1eOPzUrwIhAPITXvQAIzuoZP0f9ETq3Ux7dgEuT0fnn2FBiT3mfamWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzbeTonHJzmcZswmkQq3AOov%2F4AwUcJ%2Bbcs2ydvgBtHTTrvqyhgui0y3KAHn4oEaxiBFd2VawStkPtlJFbPmvytVl88msSEmSPbDsF6cUH9y%2B5ZDW0B%2FV4mN3Mqy%2BaFyPpZ4phVf4d0L1KeGDHzYycUCFfPI95YdzsaxiUF1lNNr0aCHTQWeE2qsl0j%2FL1XrRTAhBm5zcd0NQGj6BR8XnnWi0hOULs7qm%2FdcC%2FEruGRNv7C8cqtOEUlUtAj2bWGlGAphaT6wNQ9NYmxKg%2Bjmu2Le3ZdixHMrW5JmJ8k%2FugVuDjAC7e8yZuyXai7H1wZ%2FalAxRZ11RVDjz3JIcANKD%2By3f2oJcvf6Csr9DAKo4rOdDUdwS4CaWFQAqxWcA6pAlYKV8YtiWe2WbkjHzqk%2B0X9sSw0ubXeNhwnBTcg48s3%2B8%2B%2Bq3xqxMMhz24SfVG%2FC88iAoa03e2FZROeAjTciXVfCayxqJuxAu6aHWsa1JNAv8e4FfJrK3p8XdRNuVnuTTL3TzapJJ7OSbKbiihsXMc99XDUOZSlAvpfiJZPhVrjmsJWoWXwsDw48Fo5XzCXv7TBEirHFLPW08Sydt6N3gFrkxvFfX4IiRUkHwuhZQgomBAKSpYEmIQgDaXXrFssranb8IizdG3fRlYoMTDwt4nKBjqkAaBW%2BbyAOcBWbHASpafclMqp%2F0QG5ZWSLb9gY0vyNpdA06fMyVoghwLmqF9ZD%2FUjrkRmYbTn%2FwzP%2BtldY%2FResTBcvYqo3cJDLQ4dKEaQPjAkzVp0F1lcWQ2NPl5gOSPF%2BIO9AOXoJlE9bS%2B0gAPWKxRrznToBY%2FxPpDB3uRaMFMVL2ocuh4m7Bb4PTHCYeU%2Fn3Ct2aRVfOcH%2F2jlVOWxjEm5fesp&X-Amz-Signature=028254827e9b7a5683d2583bd83c199348ac3a21d4c39672bcc48ac2664d065f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

