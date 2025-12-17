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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AI2VSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC0SDHZGX1BC1rpJ4dm08ytdvfiQ2%2Fh%2BQ%2B8D18huH5FQIhAK74Oy1jGujVgjJVoLX71CCbbG5mJCXQh7Wm%2F5KSLN2JKv8DCHYQABoMNjM3NDIzMTgzODA1Igw%2FWoalVlcgWuCTQVkq3APZlw2IAewerDd3oA2wo0350aikAAFWA49LYQsxjP9XuW9WOglJacDhT9%2FmAw0hQ5ubWaGhxWv%2BRtlfL0lSD3LJaXGobvNDmTwsT5oxvAP1lTkJOe7dP63Mnx%2Bj4NbyTwHiIlSw%2Bql9I2PIXPJNunjjzlyvj5P52Qr4saza16F2e0LnZJd%2BrWllGJn7MgTFxns0XlBIKmqOfq7OQqFm9DQTpWFm%2FBnZKH1c%2Frbx1VbIGkbR40KvWiFq47B93XYqNUEZ3l5SVwFyshJZAcvM%2Fhw%2Fbrr4yftNUMCivb0g3OSq8Ys1F2B5hNwJX6EPN23YxCMiOQlWZ2EMwHCZv9IraA4HEbfUsZPp1%2F30RCbrggBQzTeyAXlvxGuQX%2B0VK9ogdw%2Fy%2FShk%2F%2Bq2B5yhH2Ja7pAWFwka%2BZ9gGIGueATd2%2BUmCH9waSCpE8ADkaD46cwfq%2Fj2Zs1NxBSP6Y2D3VRAsAM805wvOC9RYzxLgHVLrFhye4Qk6o41Zh7IIj56D6JmZ0Xn0F5MFRyfGqw9H%2B3gs2z2mgPjaHAhjbFUtgOXUk99asDC5hK6sGZU5fIjXMqUzSwgco0fNVqflHD%2Fm4w5XUjlycYDX6v%2BLAQhUaWuXypsRgQv2rJ1wVzLlrOapTDK6YjKBjqkAYHDlLGQjW5Z9hMf%2BFcKGrTyW0gR9Sn6NgSPUzgbnMivVrfpBK3ZzCCpaEkq%2Frbbi1FZUB01%2Bj6I4GpVRMkvEy1%2FW2rnGWol7wRIXAm0ni3Y60lJzZexvQxfRsQAPIT%2FVZjCzOEN2YdOJgSY6Bfe3kHhZRQPwGgkvic5iXvzZxeB4LoGbpWxlUKzl%2FVNtQ7%2BbJcz1QcMX1ZIlxLzRcg0C9dWy15X&X-Amz-Signature=b7014699607d2495069957146b5c3c1e6260a57db0f1339dd824d541a45064b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AI2VSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC0SDHZGX1BC1rpJ4dm08ytdvfiQ2%2Fh%2BQ%2B8D18huH5FQIhAK74Oy1jGujVgjJVoLX71CCbbG5mJCXQh7Wm%2F5KSLN2JKv8DCHYQABoMNjM3NDIzMTgzODA1Igw%2FWoalVlcgWuCTQVkq3APZlw2IAewerDd3oA2wo0350aikAAFWA49LYQsxjP9XuW9WOglJacDhT9%2FmAw0hQ5ubWaGhxWv%2BRtlfL0lSD3LJaXGobvNDmTwsT5oxvAP1lTkJOe7dP63Mnx%2Bj4NbyTwHiIlSw%2Bql9I2PIXPJNunjjzlyvj5P52Qr4saza16F2e0LnZJd%2BrWllGJn7MgTFxns0XlBIKmqOfq7OQqFm9DQTpWFm%2FBnZKH1c%2Frbx1VbIGkbR40KvWiFq47B93XYqNUEZ3l5SVwFyshJZAcvM%2Fhw%2Fbrr4yftNUMCivb0g3OSq8Ys1F2B5hNwJX6EPN23YxCMiOQlWZ2EMwHCZv9IraA4HEbfUsZPp1%2F30RCbrggBQzTeyAXlvxGuQX%2B0VK9ogdw%2Fy%2FShk%2F%2Bq2B5yhH2Ja7pAWFwka%2BZ9gGIGueATd2%2BUmCH9waSCpE8ADkaD46cwfq%2Fj2Zs1NxBSP6Y2D3VRAsAM805wvOC9RYzxLgHVLrFhye4Qk6o41Zh7IIj56D6JmZ0Xn0F5MFRyfGqw9H%2B3gs2z2mgPjaHAhjbFUtgOXUk99asDC5hK6sGZU5fIjXMqUzSwgco0fNVqflHD%2Fm4w5XUjlycYDX6v%2BLAQhUaWuXypsRgQv2rJ1wVzLlrOapTDK6YjKBjqkAYHDlLGQjW5Z9hMf%2BFcKGrTyW0gR9Sn6NgSPUzgbnMivVrfpBK3ZzCCpaEkq%2Frbbi1FZUB01%2Bj6I4GpVRMkvEy1%2FW2rnGWol7wRIXAm0ni3Y60lJzZexvQxfRsQAPIT%2FVZjCzOEN2YdOJgSY6Bfe3kHhZRQPwGgkvic5iXvzZxeB4LoGbpWxlUKzl%2FVNtQ7%2BbJcz1QcMX1ZIlxLzRcg0C9dWy15X&X-Amz-Signature=b65075f50f895c57bef51e3bcd1f8702de2af4c1713c9264523395e475f8723a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

