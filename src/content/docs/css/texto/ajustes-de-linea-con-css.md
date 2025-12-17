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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMIFAFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYLgRgDPy4SlPlbDM761V2SkE4h6LUgW4sYdG257EYOAiEA5HWVpFBQlfkQQv06YHHFDjOlEX910sNsGiG81uFRldoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOrROnCnL7XKhah%2FkCrcA2IEcMqiL9PrwTpyeCBnDae22KhGvsOkGvG8OW0LXfmGc0W51xLJjsEgWyerOcnvxo9orT8lnIoFTM1MKUSu%2FijaEaZV9DV6igFM9fZmAJ2eGafLtuIEY8UHuqtxEweeB7NG4174445sBGZ4mitdGAa3ip3WDKz2fYO91duUSUmeBztQoAV3veb47ClHGZhEfAS7aJcKXVqFhXXLiFrUfQiMnY1Xtr%2BP8E1RSF7Ld4TwnYwEEmwaTSWCcYsL5GPdp2JMvn5zq4ORIjbdFx%2BQFJn9CC99GzZr8ZrlPdXbu6bQ6Lw%2FW3kzbHscj2vLmFH1szbZ4wa9%2F9LDcksAdff1a53L8SAmtj3weAc%2F9MIq0C%2ByStc%2BWzyyWnoibEme0cewtuMNWp0zEEwt6xk27tMTbtd05lMhUZf77hxh%2FLxiy9U9t49epbqucdRsiTpgup%2FCnkMyZ%2BXcFES87oOe1unVT4S25pCTiXUGS5VCKgkqjNUchww8Pd99Hce4AiHoe%2FovNHVNP%2BDPxhm1D6KMGh9tTvUjoQIrmk2UVpLrZkkny52nwBvtjZWzbKD0lzcd8Yr6uk0ooSLPg8ylAhVWYZYG6FjDqwlMazNVD0m44uApiMjCKwGXWBeeOx%2BxKLaJMMOdicoGOqUBMqAjdRx033SAKVXf0jy7vgz%2BKadKR2eMo8CccLQS3nxgt2MQlGc9mqxjkA0Fn7Wr45gDnpEg%2BuUBKWP%2BdoSzMpsFw4OocoHmrkTM3%2FLqTBr9EaYoD4pihg7fZrUUOCx39VGAwPJGuTWTap3OPhjGEvbLXfsC2jcjqmT7zqd96Dbd5qRickZZb5Fi6eE8HXUqQKX1GmPxwXj8FvZJGMyFFnCm5iuP&X-Amz-Signature=b10432b65bfc54d472749050b6e7775f2e8d22d265f4228d62adcd0d18d4414f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMIFAFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYLgRgDPy4SlPlbDM761V2SkE4h6LUgW4sYdG257EYOAiEA5HWVpFBQlfkQQv06YHHFDjOlEX910sNsGiG81uFRldoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOrROnCnL7XKhah%2FkCrcA2IEcMqiL9PrwTpyeCBnDae22KhGvsOkGvG8OW0LXfmGc0W51xLJjsEgWyerOcnvxo9orT8lnIoFTM1MKUSu%2FijaEaZV9DV6igFM9fZmAJ2eGafLtuIEY8UHuqtxEweeB7NG4174445sBGZ4mitdGAa3ip3WDKz2fYO91duUSUmeBztQoAV3veb47ClHGZhEfAS7aJcKXVqFhXXLiFrUfQiMnY1Xtr%2BP8E1RSF7Ld4TwnYwEEmwaTSWCcYsL5GPdp2JMvn5zq4ORIjbdFx%2BQFJn9CC99GzZr8ZrlPdXbu6bQ6Lw%2FW3kzbHscj2vLmFH1szbZ4wa9%2F9LDcksAdff1a53L8SAmtj3weAc%2F9MIq0C%2ByStc%2BWzyyWnoibEme0cewtuMNWp0zEEwt6xk27tMTbtd05lMhUZf77hxh%2FLxiy9U9t49epbqucdRsiTpgup%2FCnkMyZ%2BXcFES87oOe1unVT4S25pCTiXUGS5VCKgkqjNUchww8Pd99Hce4AiHoe%2FovNHVNP%2BDPxhm1D6KMGh9tTvUjoQIrmk2UVpLrZkkny52nwBvtjZWzbKD0lzcd8Yr6uk0ooSLPg8ylAhVWYZYG6FjDqwlMazNVD0m44uApiMjCKwGXWBeeOx%2BxKLaJMMOdicoGOqUBMqAjdRx033SAKVXf0jy7vgz%2BKadKR2eMo8CccLQS3nxgt2MQlGc9mqxjkA0Fn7Wr45gDnpEg%2BuUBKWP%2BdoSzMpsFw4OocoHmrkTM3%2FLqTBr9EaYoD4pihg7fZrUUOCx39VGAwPJGuTWTap3OPhjGEvbLXfsC2jcjqmT7zqd96Dbd5qRickZZb5Fi6eE8HXUqQKX1GmPxwXj8FvZJGMyFFnCm5iuP&X-Amz-Signature=5d58b94c50a3dea13af1be8daa0e8cf8f54528a19c366e3a308da0b4fa95786f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

