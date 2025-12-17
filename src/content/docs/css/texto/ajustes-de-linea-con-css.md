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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUJMVUG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3J2C27CZsn06OUc4bk9vi%2BSZZVdWoZZj9rbIFiDqQAIgB4%2BHgiCDO0FtMj0Q053nk5mN27cogo0JtsiRo0KPTzsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGl7cng920ScfxBZkircAxa0JcRdZ2d65tgjHbnLGmeTXQ07eersfdC3M2pUmk7Ozo%2B3OQyWUoG5F1FNhT2iZQ%2FucdeJvTZQKFtEXfSI3pSZZLPT5ICQ0xPWlvB3RYllw%2FaI4T5cHkkMG3f021mD%2BostO0iKqaZXc5sbY9X9N5rk8CW1Tz%2FUkD95Eg3Qdg06ftHXTYkfNbbS%2FquVG7%2B9HtGWPscW9jQ0%2BC3wxQuJJLXtflucSEjuqJ6DwgPNHMTvcaI7m%2BEH97hIp30ZrGjW%2FFsQoC5K08ngTKyNk%2BbfzQ%2FNlhqL7HMp3xYzVy%2FAJtyOZvAqk1pZVjHJewzfHaDB6%2FqljlRGHUSwyvhK2juXTT6AnGgkFuE8rigrHAsCxfHJw6RXu0Hd%2BNpy5FikKg7X3riqng%2FTE8qYCE%2FmO%2FFPUgmJE%2FsylUHJFDl%2FjLtF8x9yMp56ccZnrDE%2BkWByJU1ug30b2KjkQZunR0b2iZllvIAya9S5bZbIiJ0grzgcoxy%2B5PdWN8MYxn0tr4Mq92rQ3NILR0ji3UG5qCwZXq3NJN2te3BDXI5mc4oQvRLRQ2NjdUhXoxbdX%2FgNgZDjTKn9JTYpnC8UCYp4B4KmIqPRbxYgaXGl53Xyoob%2FSlQAMKQV0n%2F%2FAu81z6HSidVGMJyqisoGOqUBKgFqHUueGHDkBjl7YSvqgcwsicrsSk6dcPXUXhf39BDHSX2DI3J3S0lAGpmmLGTHIAsgiMJYk9uvRfhgo9jo%2B2MQlsBktRFkSuP5kQpjzpCiB6TD1WRsoDE0fAKefB%2BCuQsyZqU1GTIRWB%2BEhh397Q0QRXt77%2Fyx%2FtaAvymZsQNccC9IpdUxhyq3w8%2Bj9eZ47ZJ57j0D6btpPbI6G3YtGB9xBjma&X-Amz-Signature=821ba6904d97ff32d5db2e5417f2d0d8c894dee2dc4d26f2222fb2777ff8acc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUJMVUG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3J2C27CZsn06OUc4bk9vi%2BSZZVdWoZZj9rbIFiDqQAIgB4%2BHgiCDO0FtMj0Q053nk5mN27cogo0JtsiRo0KPTzsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGl7cng920ScfxBZkircAxa0JcRdZ2d65tgjHbnLGmeTXQ07eersfdC3M2pUmk7Ozo%2B3OQyWUoG5F1FNhT2iZQ%2FucdeJvTZQKFtEXfSI3pSZZLPT5ICQ0xPWlvB3RYllw%2FaI4T5cHkkMG3f021mD%2BostO0iKqaZXc5sbY9X9N5rk8CW1Tz%2FUkD95Eg3Qdg06ftHXTYkfNbbS%2FquVG7%2B9HtGWPscW9jQ0%2BC3wxQuJJLXtflucSEjuqJ6DwgPNHMTvcaI7m%2BEH97hIp30ZrGjW%2FFsQoC5K08ngTKyNk%2BbfzQ%2FNlhqL7HMp3xYzVy%2FAJtyOZvAqk1pZVjHJewzfHaDB6%2FqljlRGHUSwyvhK2juXTT6AnGgkFuE8rigrHAsCxfHJw6RXu0Hd%2BNpy5FikKg7X3riqng%2FTE8qYCE%2FmO%2FFPUgmJE%2FsylUHJFDl%2FjLtF8x9yMp56ccZnrDE%2BkWByJU1ug30b2KjkQZunR0b2iZllvIAya9S5bZbIiJ0grzgcoxy%2B5PdWN8MYxn0tr4Mq92rQ3NILR0ji3UG5qCwZXq3NJN2te3BDXI5mc4oQvRLRQ2NjdUhXoxbdX%2FgNgZDjTKn9JTYpnC8UCYp4B4KmIqPRbxYgaXGl53Xyoob%2FSlQAMKQV0n%2F%2FAu81z6HSidVGMJyqisoGOqUBKgFqHUueGHDkBjl7YSvqgcwsicrsSk6dcPXUXhf39BDHSX2DI3J3S0lAGpmmLGTHIAsgiMJYk9uvRfhgo9jo%2B2MQlsBktRFkSuP5kQpjzpCiB6TD1WRsoDE0fAKefB%2BCuQsyZqU1GTIRWB%2BEhh397Q0QRXt77%2Fyx%2FtaAvymZsQNccC9IpdUxhyq3w8%2Bj9eZ47ZJ57j0D6btpPbI6G3YtGB9xBjma&X-Amz-Signature=aa7087a279f83102249baf5eb41c9a0d75473e01e7959aef7c0d1c997e9c216b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

