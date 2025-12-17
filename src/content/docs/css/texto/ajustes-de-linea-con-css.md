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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMRPTRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4iwbwBNuXl9Ozmb%2FCg1wsEpPZWgc3jyJrp99%2Brs3mwIhAIIqZyqiVFaJ2u%2BG3YlaijxljxAO2x1imqdM4jbRdJzWKv8DCHYQABoMNjM3NDIzMTgzODA1IgzN%2BGINCShkMLvxIVcq3APMF%2FPACnQaHzl6kSVZvj43xfsoMpitFqU0AGtqBEdPR1HtmbhIWZ%2F3hDVVDE3vI8jamr8iSrtnlDpfC25lgdlMMambIuNKglbng7SGl6bNXC2VjXvMsTkHBDgvF%2BiyiBcZvfXWzhpjJSAyJphOf9OUkS8RdnWynfUmSRTERmXOeSYlZB4MG6WTuxx%2FH3Wo1%2BxTMvHWMbg%2FzQauFmZ5xMwOykwH4sXH48NRiDYhhhcV%2BooI18nlBSRGyxHaSoLyAiF0eWWDUBb77ECvc6UjGwGgIutttGMie94JDochw1AGcM7T2wQZHcFeY9ZRm%2FRctmHnmzqPuCxxseZHNVjo9BrZh5SJwjDvvFZZn9cRm%2BFOpoVgHnCqh7pfhtRLzhiDRFlSlNI6NnkCyCkjVpLCCNsumpNiFmf8sXvJiXfq0gpzkWJrj4xvpEiLYi%2BPx6Ii%2BfY1V6gwXqFBuJvWqU9Cp3qMkM4Oc9QJmPPX7sUSIbFpSyAe%2F4Tc9ggHU7S57FtmGgh3xyLJ6REob0M9l5cIZxY8Y4n4WJFxRl%2BgXs4GwfC3huaPhV5mjDzk4Pt2jvsQjSWQ8hqq3exjxnUyGCNp98zsubajpNmGz1gq3sp5hywypxDuyT8cEsbanAeyMTDg6YjKBjqkAfw1DJ4n3jMNehbaS%2F6rvd0G6HXPQ29xRSfI8a08rpSmV21tWO0woNm2ixCTouPPdERjLNnzCqRk%2BUF6ieIwxt2uAlN0b5%2Fyic6a3G1w5AoWlk1lvc7LlOYB68bTTzt2eLThJECwHzlTykxy47i9mVVbpcOZnzmk9L7nERBQRZamJhHJjppAM155q9P4xq1VX88ThPZmJOZaXILFV%2B%2FhwNnPYwe6&X-Amz-Signature=71af1bccb38c63b933f5f11145573c114f33bfda796a4fa4ed7304ccbcded10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMRPTRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4iwbwBNuXl9Ozmb%2FCg1wsEpPZWgc3jyJrp99%2Brs3mwIhAIIqZyqiVFaJ2u%2BG3YlaijxljxAO2x1imqdM4jbRdJzWKv8DCHYQABoMNjM3NDIzMTgzODA1IgzN%2BGINCShkMLvxIVcq3APMF%2FPACnQaHzl6kSVZvj43xfsoMpitFqU0AGtqBEdPR1HtmbhIWZ%2F3hDVVDE3vI8jamr8iSrtnlDpfC25lgdlMMambIuNKglbng7SGl6bNXC2VjXvMsTkHBDgvF%2BiyiBcZvfXWzhpjJSAyJphOf9OUkS8RdnWynfUmSRTERmXOeSYlZB4MG6WTuxx%2FH3Wo1%2BxTMvHWMbg%2FzQauFmZ5xMwOykwH4sXH48NRiDYhhhcV%2BooI18nlBSRGyxHaSoLyAiF0eWWDUBb77ECvc6UjGwGgIutttGMie94JDochw1AGcM7T2wQZHcFeY9ZRm%2FRctmHnmzqPuCxxseZHNVjo9BrZh5SJwjDvvFZZn9cRm%2BFOpoVgHnCqh7pfhtRLzhiDRFlSlNI6NnkCyCkjVpLCCNsumpNiFmf8sXvJiXfq0gpzkWJrj4xvpEiLYi%2BPx6Ii%2BfY1V6gwXqFBuJvWqU9Cp3qMkM4Oc9QJmPPX7sUSIbFpSyAe%2F4Tc9ggHU7S57FtmGgh3xyLJ6REob0M9l5cIZxY8Y4n4WJFxRl%2BgXs4GwfC3huaPhV5mjDzk4Pt2jvsQjSWQ8hqq3exjxnUyGCNp98zsubajpNmGz1gq3sp5hywypxDuyT8cEsbanAeyMTDg6YjKBjqkAfw1DJ4n3jMNehbaS%2F6rvd0G6HXPQ29xRSfI8a08rpSmV21tWO0woNm2ixCTouPPdERjLNnzCqRk%2BUF6ieIwxt2uAlN0b5%2Fyic6a3G1w5AoWlk1lvc7LlOYB68bTTzt2eLThJECwHzlTykxy47i9mVVbpcOZnzmk9L7nERBQRZamJhHJjppAM155q9P4xq1VX88ThPZmJOZaXILFV%2B%2FhwNnPYwe6&X-Amz-Signature=fe786fda499ec2dce2db42e557a2732a2732ec120646a56db53c29b8ff0ffe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

