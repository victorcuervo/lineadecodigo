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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHOG5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bbg3tzV94KQaZlf%2F2Gnmk8SAcy5dZvrkUcRtQuN5UUgIhALPqEVeaMeGdxNVdiE7wOhoMy54WW4fVEa%2FchlNIW5TdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2TJtwwZZqAgroIX4q3ANFKWpNIQOUbWkoB1cJoofM96agcz8ycwoG%2FuGdAn5jM9NF0F7J9XHIzXobX%2FFi4h11v2V7ejh0wNlst1VyJUw1B91u1FSkhWruouoFrdAWJxW9yEV6HfrRyCi%2B5V68B0ea8aoVkvvsZCilCXw6GC9IbzSt6nFWKm9P5rbBxBVteZ25LTv7lGzr5r%2BXESAByn3mGJuqRtsTVowRAxcMRy1dzC8MHCi5os6g3HDhHiB7a707qU7AuSjd668TBinICER9eEkrBEh95JCWXfZgfp1InnCkoYJufaFYb%2FMMcTVasyEfTAvXJBcVv6RPg7drkhHucSLKZksxlklgdK5mufug%2FHfrXFUGY80BBIT%2Fw4x9YFkOsIHgVDb2z6N9peXDPKRqTGFgTOsV%2B0P8YX0DP6UuOyfext8XcoEaUeY9bIEaFOxWQNr8mSrgx8PUQdZy7Ebg%2BTX%2FyYBbk%2FUUPp18g%2FspF63kwIcPJh4rH3Gg6iDX%2BDJhk15BjpB49r6kkMfTH8u7oEhEeyp9hJSOYM7TWvhpnDaVU%2F8WwVqLNYtTjbBocdNjFvcmB0ZZdUmRFdkkWm98e6kl%2FrN1Yc0BzSqhEktp2TA2PwQvQcJkx3zs6LFSW%2FkWpCW0IG6ezjIJazCfrozKBjqkAXA1O2MHyYsg0Y5iBIJaKBSq2%2FFu%2F8CUdqw3M6nu8kGaG9BBAJBsRH11CvIcr%2FTKOuCEPJ8%2FxMj0w%2BjUkSdkb1RrLvcQF4o9GigF7DLRu3WBDlPOFlX2uOK9YF%2Fuo3B0Q9TQY6V%2B0%2FiDPXKFmsV2xPO7qBUzU6rIigSiN%2FdhqwCC89vESTtEVbT%2B5Yv7WXY%2BQps0k%2BdTByzLKjuO3Ke7gFZU%2B19t&X-Amz-Signature=7cf78f6da3c5fb7dd7391b6942adb26ff2b09796119380391f30f468b2f2fddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHOG5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bbg3tzV94KQaZlf%2F2Gnmk8SAcy5dZvrkUcRtQuN5UUgIhALPqEVeaMeGdxNVdiE7wOhoMy54WW4fVEa%2FchlNIW5TdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2TJtwwZZqAgroIX4q3ANFKWpNIQOUbWkoB1cJoofM96agcz8ycwoG%2FuGdAn5jM9NF0F7J9XHIzXobX%2FFi4h11v2V7ejh0wNlst1VyJUw1B91u1FSkhWruouoFrdAWJxW9yEV6HfrRyCi%2B5V68B0ea8aoVkvvsZCilCXw6GC9IbzSt6nFWKm9P5rbBxBVteZ25LTv7lGzr5r%2BXESAByn3mGJuqRtsTVowRAxcMRy1dzC8MHCi5os6g3HDhHiB7a707qU7AuSjd668TBinICER9eEkrBEh95JCWXfZgfp1InnCkoYJufaFYb%2FMMcTVasyEfTAvXJBcVv6RPg7drkhHucSLKZksxlklgdK5mufug%2FHfrXFUGY80BBIT%2Fw4x9YFkOsIHgVDb2z6N9peXDPKRqTGFgTOsV%2B0P8YX0DP6UuOyfext8XcoEaUeY9bIEaFOxWQNr8mSrgx8PUQdZy7Ebg%2BTX%2FyYBbk%2FUUPp18g%2FspF63kwIcPJh4rH3Gg6iDX%2BDJhk15BjpB49r6kkMfTH8u7oEhEeyp9hJSOYM7TWvhpnDaVU%2F8WwVqLNYtTjbBocdNjFvcmB0ZZdUmRFdkkWm98e6kl%2FrN1Yc0BzSqhEktp2TA2PwQvQcJkx3zs6LFSW%2FkWpCW0IG6ezjIJazCfrozKBjqkAXA1O2MHyYsg0Y5iBIJaKBSq2%2FFu%2F8CUdqw3M6nu8kGaG9BBAJBsRH11CvIcr%2FTKOuCEPJ8%2FxMj0w%2BjUkSdkb1RrLvcQF4o9GigF7DLRu3WBDlPOFlX2uOK9YF%2Fuo3B0Q9TQY6V%2B0%2FiDPXKFmsV2xPO7qBUzU6rIigSiN%2FdhqwCC89vESTtEVbT%2B5Yv7WXY%2BQps0k%2BdTByzLKjuO3Ke7gFZU%2B19t&X-Amz-Signature=16f15d9785d6d8d371a06d1f2a4242bd8604347eb613e22efb333827e139374a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

