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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZDP663%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEsroByv3EDJTQCzaFmr4s5K8Nxk0WXQTLCtFrnxUpwIhANagtLW0hOXmGoNiR8yBubwjjfirSM%2F19VIIn51nU9o0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKCVHdoXw7xBdxOoq3AOZUhMOBzMWJAbqjZb7yUJLn66zscLZuvpOsZd3gMAm5nflFLsHJHYoze7W3KkX8WZ6JcWElZIOQbHmtW4ukM%2FNe7%2BOcmDsgt%2BA7h%2B4y223wl2dHHn9%2FAywOHlaKzc3Ior7VRAAX1S3q%2FSgesnAJpp6Vtx2Tg3XvTgYc5L3%2FIhExw9qggNfA1BkYuLHy2%2Ffa7aUtUllKRxxNrGYNNM4EZj7kqpx7CsWmUneBHEzjhaxGEeap6oC62yFWYcW37Kru4Ohg7BjsYVzTdiNr4RFtfSLqO5ti7NLdIYmCJsPO32bBGYgzFBR2rJPuVsJIR%2FV5dOQKOqgM29To%2BRS9AX%2Fe4hrvp%2BAU5fZPjkJVGl62shjkLU7pijjGCSqoi%2FiUl4xRaCOTB0PqcMuh5WvL4%2BfDX7VyeRZI0fdERNlTvO0uFmDoaWwikIMelTQ%2B1L6LsUJcNgK25BLnuieXjmSFFuXNuy7Tm5TSCLV%2BgxPyk%2FafzBkShl9Dj83HPGeaRsYR8Sy%2F6%2BpdSzYvFMnYqBzZO9U9v4uMloSMAKcBDMrTb0h6N1KAiSOixPT3b80%2FaSV5b7MoC2Uo0xxnRExcuTo1oGzcYGphQ818eMEmDbvzha4xTPjGc3vlOEDZJmjmCf%2BgzDKoIvKBjqkAXgdqpOR7g5n5ODF7TO2ue69fKervt6cAFAOKG7oZ8oepyXUXbHFgyolvXwpl0AGNgW8JdNygbejV%2BaKUqfqHEeIkkefAJgpKMRZC04qabkgrnrGuiLFJWL8p7oNkhrtfzRJUIYVo8ead9ouaY0jsKzUZmljZuGZixKGxEiLasI09na9jb97DhWhIQ7Z11NMXfy32MHKHNVS7UxlW16Rc6MWquFl&X-Amz-Signature=45b7b882377cb51786cf4ee1388ac7f02ace3612ad4eb98bc86b8334b0c85aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZDP663%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEsroByv3EDJTQCzaFmr4s5K8Nxk0WXQTLCtFrnxUpwIhANagtLW0hOXmGoNiR8yBubwjjfirSM%2F19VIIn51nU9o0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKCVHdoXw7xBdxOoq3AOZUhMOBzMWJAbqjZb7yUJLn66zscLZuvpOsZd3gMAm5nflFLsHJHYoze7W3KkX8WZ6JcWElZIOQbHmtW4ukM%2FNe7%2BOcmDsgt%2BA7h%2B4y223wl2dHHn9%2FAywOHlaKzc3Ior7VRAAX1S3q%2FSgesnAJpp6Vtx2Tg3XvTgYc5L3%2FIhExw9qggNfA1BkYuLHy2%2Ffa7aUtUllKRxxNrGYNNM4EZj7kqpx7CsWmUneBHEzjhaxGEeap6oC62yFWYcW37Kru4Ohg7BjsYVzTdiNr4RFtfSLqO5ti7NLdIYmCJsPO32bBGYgzFBR2rJPuVsJIR%2FV5dOQKOqgM29To%2BRS9AX%2Fe4hrvp%2BAU5fZPjkJVGl62shjkLU7pijjGCSqoi%2FiUl4xRaCOTB0PqcMuh5WvL4%2BfDX7VyeRZI0fdERNlTvO0uFmDoaWwikIMelTQ%2B1L6LsUJcNgK25BLnuieXjmSFFuXNuy7Tm5TSCLV%2BgxPyk%2FafzBkShl9Dj83HPGeaRsYR8Sy%2F6%2BpdSzYvFMnYqBzZO9U9v4uMloSMAKcBDMrTb0h6N1KAiSOixPT3b80%2FaSV5b7MoC2Uo0xxnRExcuTo1oGzcYGphQ818eMEmDbvzha4xTPjGc3vlOEDZJmjmCf%2BgzDKoIvKBjqkAXgdqpOR7g5n5ODF7TO2ue69fKervt6cAFAOKG7oZ8oepyXUXbHFgyolvXwpl0AGNgW8JdNygbejV%2BaKUqfqHEeIkkefAJgpKMRZC04qabkgrnrGuiLFJWL8p7oNkhrtfzRJUIYVo8ead9ouaY0jsKzUZmljZuGZixKGxEiLasI09na9jb97DhWhIQ7Z11NMXfy32MHKHNVS7UxlW16Rc6MWquFl&X-Amz-Signature=1bb8c8f6e6361a7037476321020553785b681b4c177d511ea5ec5ac843602921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

