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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGWFITU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwx%2Fcjbate8K%2FtZgVhpAoawjzZSaaZfuyKPXXpPEEh7AiBeo9LCsVc9Ca0jawtqMdpavvzdJYdrUfyqsiitwycKvSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvID16x4DJy66DebNKtwDlDtlr%2Fde7lVlNtg1PcxOjJRBdjb75A%2FroJlsk5wy4GiPgAGgfEq8TNw0GZvPxOuXgWjEU%2FK%2FMTwyQrf6LJ5SM4ydWN6%2FnL99eYFuDyIKCet7urDOmhuryUQREDeNTJ0h3U7xtTJm0XRFgYPrhu7Q%2BUWnk1XTIWHe3ThpE9Xdk7Hk%2Bc7j7efAWDnAbu2nWEqWBo4B1WDpTyyrko%2F8iJsWDjAGdXOrh35GhgxmZLDGaqItKIQZLKX777vFSRWL9EbO9%2F35xGNNLErlW006hFHUrO2hiQ%2BbuEiuLZDs2%2FdMi5DWOpI68KGvm1wtOe7Vwyf6Jm3hYId3lcwq%2FhqdoFRSw7TEmH8stmPh6elMYWV54ItM8zm0ZVwYevD%2BlusGK0MRpJITZON9j8HcOUeSW%2BP3XQzErxpzu7yQb2xWX0%2FaxpcWYzzkhj6fkvO0Q6gQWVlyPrLFK%2BCdoDng7YPmWmsOA1iGLdfM6RPrglJZ9%2Bta4yXJaT2PWKn07SAiS1XIz7yzNYBIb2blP1ZJI6iua4FsXSJhhpj8e7veJtOR0EPPJh2qBBvU%2B9c9Qn%2FBnL7ubsInjYQzjH6LCnr00LbVF%2Boxyk1yBJ6vz3lE4qI6IPRtEuCoHYjSjz539MahaEow9I6KygY6pgELhHHN5zQfdtEXImY9rboJVrysBuDYQc0ALwW29Jsc8qE4z71QnGYakjJp3g8sg%2F7hn6RYS%2Bv4eVZY6c4rY6uQNyWmq0NvWCIsQne8qydOZWFOmvYCAS9HnI6mhP%2Fv%2BornXpWtQlvrOFJkh%2B%2FeCMsGnun77UfSKxcnYQ%2Fyz7w3CaAcBBy110F8D4uZb2%2Bj5Km0Mb0TfTrT%2BqDiCF7%2B7TrixnmPEX%2B6&X-Amz-Signature=7a15af333eb509923cb4270184035198a273b6944c4017e0bb275d536cb8c0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGWFITU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwx%2Fcjbate8K%2FtZgVhpAoawjzZSaaZfuyKPXXpPEEh7AiBeo9LCsVc9Ca0jawtqMdpavvzdJYdrUfyqsiitwycKvSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvID16x4DJy66DebNKtwDlDtlr%2Fde7lVlNtg1PcxOjJRBdjb75A%2FroJlsk5wy4GiPgAGgfEq8TNw0GZvPxOuXgWjEU%2FK%2FMTwyQrf6LJ5SM4ydWN6%2FnL99eYFuDyIKCet7urDOmhuryUQREDeNTJ0h3U7xtTJm0XRFgYPrhu7Q%2BUWnk1XTIWHe3ThpE9Xdk7Hk%2Bc7j7efAWDnAbu2nWEqWBo4B1WDpTyyrko%2F8iJsWDjAGdXOrh35GhgxmZLDGaqItKIQZLKX777vFSRWL9EbO9%2F35xGNNLErlW006hFHUrO2hiQ%2BbuEiuLZDs2%2FdMi5DWOpI68KGvm1wtOe7Vwyf6Jm3hYId3lcwq%2FhqdoFRSw7TEmH8stmPh6elMYWV54ItM8zm0ZVwYevD%2BlusGK0MRpJITZON9j8HcOUeSW%2BP3XQzErxpzu7yQb2xWX0%2FaxpcWYzzkhj6fkvO0Q6gQWVlyPrLFK%2BCdoDng7YPmWmsOA1iGLdfM6RPrglJZ9%2Bta4yXJaT2PWKn07SAiS1XIz7yzNYBIb2blP1ZJI6iua4FsXSJhhpj8e7veJtOR0EPPJh2qBBvU%2B9c9Qn%2FBnL7ubsInjYQzjH6LCnr00LbVF%2Boxyk1yBJ6vz3lE4qI6IPRtEuCoHYjSjz539MahaEow9I6KygY6pgELhHHN5zQfdtEXImY9rboJVrysBuDYQc0ALwW29Jsc8qE4z71QnGYakjJp3g8sg%2F7hn6RYS%2Bv4eVZY6c4rY6uQNyWmq0NvWCIsQne8qydOZWFOmvYCAS9HnI6mhP%2Fv%2BornXpWtQlvrOFJkh%2B%2FeCMsGnun77UfSKxcnYQ%2Fyz7w3CaAcBBy110F8D4uZb2%2Bj5Km0Mb0TfTrT%2BqDiCF7%2B7TrixnmPEX%2B6&X-Amz-Signature=dbde408659d9dae5c067c21de643cbe9f973e7bf3cb933863787922230939059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

