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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRH3D4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfe6lyVk07r1UbABVMS%2Ff8A93kv3HwYxIMB7qqS%2BUNuQIgOHQFZF%2BRO9%2FEieFbhuuFkpFAjSQbxM1GbfguRs%2BbLR4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGVsXl12%2Bltyf8SiSrcA95D9BROptHSBZfxS2uiqCvWkxTFmjPzkYmqhQmNY2CWbbN0k9mLbColLwqBohLrBEUJNkxnLD0S12fLSAqjvzIOwbfn5qE9s%2BP1IOt5%2Bz3mDYHAB%2BrAK4nNRZgNaCNZsS2tPQ4puvNAauoCuDHxxaKIYDVEsdsW7Y2DKvZUWBLUrKLwnASWhfb3TxedHyIxQm87TfmJTdahiyEqlZ0%2F1lj7JrGGq%2FlEgccaQCgYlmHgzcQDvKPIsMjoqJ%2F3iZjj%2BcfzwRMTRT5QOuGx7POuB74sv81evnP%2FCEirXG8uno99l5tQgjDVy1rn%2Fs3RjnEL2dJpe0fN8aM5bqFW8UXhUFGyItd9MRidA1KaFh9jf9eDcr8PM63DpIxisMVLKnct2TR4UU%2FtAoDIL5cxm1RegIDMJfMqw4Frc%2FU2%2FQ7mj7vpg0IQ5n1AJ66MgtnkthMpKgWzfokgFKqtWUDUgy2UhTDf7hW%2F8IgFowhLss%2BEVJ9IJb5GATZ%2Famv6yEr9aIgG9fySLmUr1vRSIKg8UHcenwqaYALQ8h1V2CVe7S73igpZ3bLrv69L7ZwPwfmQqR7KsYGQ8U42iKN6OCeJT2XZy%2Bzi%2FD9cwfhUSxfUhgHNib%2BYfj3Wcu6z68II3RHzMKWBi8oGOqUBRL%2FQT9Ioc0tvgQJXNdX5oiKeRmevq9ohLEhBCvkxZhiUqiXuDzc%2F2KgDWAkGm7SEZzvERHKzlAY%2FC0uzr%2BKRhHNn%2F5UvMiH1q9Vs63FElpVQut5lFGYWVMlSs6ZQEPHyuFvej%2BFDf8a7EpVIhB2J%2FRsFcFgWRqi2rLLXsIqy%2BVFYl31tbAHUwyPEGnGPyvjog249cr8ijnlPUO3hVOORTwFzm33Z&X-Amz-Signature=d04230c3701925a5ad4ab1ccf3bd44dd95b2ad352fb87494d73f77b7c568ccdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRH3D4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfe6lyVk07r1UbABVMS%2Ff8A93kv3HwYxIMB7qqS%2BUNuQIgOHQFZF%2BRO9%2FEieFbhuuFkpFAjSQbxM1GbfguRs%2BbLR4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGVsXl12%2Bltyf8SiSrcA95D9BROptHSBZfxS2uiqCvWkxTFmjPzkYmqhQmNY2CWbbN0k9mLbColLwqBohLrBEUJNkxnLD0S12fLSAqjvzIOwbfn5qE9s%2BP1IOt5%2Bz3mDYHAB%2BrAK4nNRZgNaCNZsS2tPQ4puvNAauoCuDHxxaKIYDVEsdsW7Y2DKvZUWBLUrKLwnASWhfb3TxedHyIxQm87TfmJTdahiyEqlZ0%2F1lj7JrGGq%2FlEgccaQCgYlmHgzcQDvKPIsMjoqJ%2F3iZjj%2BcfzwRMTRT5QOuGx7POuB74sv81evnP%2FCEirXG8uno99l5tQgjDVy1rn%2Fs3RjnEL2dJpe0fN8aM5bqFW8UXhUFGyItd9MRidA1KaFh9jf9eDcr8PM63DpIxisMVLKnct2TR4UU%2FtAoDIL5cxm1RegIDMJfMqw4Frc%2FU2%2FQ7mj7vpg0IQ5n1AJ66MgtnkthMpKgWzfokgFKqtWUDUgy2UhTDf7hW%2F8IgFowhLss%2BEVJ9IJb5GATZ%2Famv6yEr9aIgG9fySLmUr1vRSIKg8UHcenwqaYALQ8h1V2CVe7S73igpZ3bLrv69L7ZwPwfmQqR7KsYGQ8U42iKN6OCeJT2XZy%2Bzi%2FD9cwfhUSxfUhgHNib%2BYfj3Wcu6z68II3RHzMKWBi8oGOqUBRL%2FQT9Ioc0tvgQJXNdX5oiKeRmevq9ohLEhBCvkxZhiUqiXuDzc%2F2KgDWAkGm7SEZzvERHKzlAY%2FC0uzr%2BKRhHNn%2F5UvMiH1q9Vs63FElpVQut5lFGYWVMlSs6ZQEPHyuFvej%2BFDf8a7EpVIhB2J%2FRsFcFgWRqi2rLLXsIqy%2BVFYl31tbAHUwyPEGnGPyvjog249cr8ijnlPUO3hVOORTwFzm33Z&X-Amz-Signature=fbe5f408e6b3b0859f18789aad7d450068eb72043c43c2f7d4c7f3a1a4ded17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

