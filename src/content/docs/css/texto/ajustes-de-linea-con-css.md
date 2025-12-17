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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKY7WXAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dRogr6cZa3HFU8a0PF8r%2FyCJ3sWFAr8DZXrqojRsLQIhAP9%2FCV6x12z1t3J%2BIYeb79qE7CgjlV75lF99wBJ7jUk0Kv8DCHkQABoMNjM3NDIzMTgzODA1Igwp1mU4aFRjDuofl1kq3ANGu045okmVFAOHhjAFw2N9uZL8S9Zs%2B331CgqWi0WA8rcIc2Mpe%2FvYJLEk2AR%2BKJMSCIwgEIcfIjTRMG3%2BXR%2FNwe3pI0GwRuopqmitqyNjk4xI4FWyxSfNICeokTX%2F8PIjq677TV085gQH1jHyEFjNy3Er16dhlWpVRATxFO0MwbHiBD3JEbEWxLoOK59y0UdsEY3jkqw85tejw7ObOAi7z1%2FpmNG6cfjdejKljkxaVB2DvGtGjnRjL2PATQMDRVEWk2HyBJRtZNs%2FENm2YgWInsycs%2BocUj59hmIGSvyCdz9k%2B1N8o2BsXyv7uys0p%2FaZdrc7zGIrU5ao%2FpXIuh7YlgQPs15EWAZeGVuQl%2BuK0ieiPQ5hQ6ErLXToSPBJGxxnVW4rKk8RDjNqD2YFkkpbrN9iQRLkPvsr6%2Fcm1a%2FBx8YOKywI%2FSMdBB0JsufnRpLCWdai1pJTWri6TwVk20uQw1%2FGn1HVXYaF7fMdjsS2BgH8lb%2FHjpBjq0pa6UE9RhMTY8m5s%2B5CddNi62mQZeTmk4KC6N7a%2BvY%2B4jpMqJakLT8xL9E1%2B0qOofbzFyOdclgZngeuAUYudXc5wA3TneQYz0sLi8tLwaRM%2FPeNHG1ynWf1SZNxxizOihpG4zDi0onKBjqkAZbQror%2FZQq7zxmREoWWp0OmQJ%2BlITIA26kPAedx9lv0NIy4A%2FOPtXW54w4HRAR7839zwJZBL9B8IXgr%2BtxUDrn%2FWElmlGt4YaDcykmsnmniJ0L3EUbS6n7HiCg3LA6Sv08SwaE46CPFzLUvPxmtC9qUrbLsYzfOXwrsjgZm7MMjHH4cLwgGRbzlX%2FrfKKX4OIHPWIrc4X4yn%2BK4PIUb0WFeQRZi&X-Amz-Signature=3f752385d582fc0c31648f922f7e86bdbb4f98fe491764c5fe050722926b1812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKY7WXAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dRogr6cZa3HFU8a0PF8r%2FyCJ3sWFAr8DZXrqojRsLQIhAP9%2FCV6x12z1t3J%2BIYeb79qE7CgjlV75lF99wBJ7jUk0Kv8DCHkQABoMNjM3NDIzMTgzODA1Igwp1mU4aFRjDuofl1kq3ANGu045okmVFAOHhjAFw2N9uZL8S9Zs%2B331CgqWi0WA8rcIc2Mpe%2FvYJLEk2AR%2BKJMSCIwgEIcfIjTRMG3%2BXR%2FNwe3pI0GwRuopqmitqyNjk4xI4FWyxSfNICeokTX%2F8PIjq677TV085gQH1jHyEFjNy3Er16dhlWpVRATxFO0MwbHiBD3JEbEWxLoOK59y0UdsEY3jkqw85tejw7ObOAi7z1%2FpmNG6cfjdejKljkxaVB2DvGtGjnRjL2PATQMDRVEWk2HyBJRtZNs%2FENm2YgWInsycs%2BocUj59hmIGSvyCdz9k%2B1N8o2BsXyv7uys0p%2FaZdrc7zGIrU5ao%2FpXIuh7YlgQPs15EWAZeGVuQl%2BuK0ieiPQ5hQ6ErLXToSPBJGxxnVW4rKk8RDjNqD2YFkkpbrN9iQRLkPvsr6%2Fcm1a%2FBx8YOKywI%2FSMdBB0JsufnRpLCWdai1pJTWri6TwVk20uQw1%2FGn1HVXYaF7fMdjsS2BgH8lb%2FHjpBjq0pa6UE9RhMTY8m5s%2B5CddNi62mQZeTmk4KC6N7a%2BvY%2B4jpMqJakLT8xL9E1%2B0qOofbzFyOdclgZngeuAUYudXc5wA3TneQYz0sLi8tLwaRM%2FPeNHG1ynWf1SZNxxizOihpG4zDi0onKBjqkAZbQror%2FZQq7zxmREoWWp0OmQJ%2BlITIA26kPAedx9lv0NIy4A%2FOPtXW54w4HRAR7839zwJZBL9B8IXgr%2BtxUDrn%2FWElmlGt4YaDcykmsnmniJ0L3EUbS6n7HiCg3LA6Sv08SwaE46CPFzLUvPxmtC9qUrbLsYzfOXwrsjgZm7MMjHH4cLwgGRbzlX%2FrfKKX4OIHPWIrc4X4yn%2BK4PIUb0WFeQRZi&X-Amz-Signature=00657edb6d5433aff3efd96bd46da0767273fe82765187873181e5d89bc81e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

