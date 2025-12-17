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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567TAHZQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvrD%2By6OR8JdS93MlhrI7oKdEnvMrxEuc%2Fa%2FXbZ4EEVwIgH%2F7o9JVrevzhJCQHClxXzkD1LE9LPasjlW8W0Tiatbgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNW5U%2F3U0LRWcZfLUSrcA51%2Ff47EepSqLzOkdAfHPt3uuxPonT8KnTo%2FiRB%2Bwagvoke2QHiLE8gXkBuFzODtvCA7R3lX5TnwE0a4J%2Fqy%2B90i4%2BGSzx8ACJ%2BzL5Dh1BIgr6twlrK2UnK%2BxijMl90jhUQf4YYqPLrhPHWOzeUxiE7DA1Oj6aSrXpOmtjaze5urWa3eGyURaKKDAUPUOXAMMngCe5mOM2L%2BBjNssxIBTWHqpZq1%2FyGtGJueepOhUmLkOUY0F9QDpFAJqryNjNE%2FgTuKwhXR7cnWVlSvSRf7OqGEC752KRb4x5K4yH2lxFgZgYBj%2FJ4Grl77g44ODfhDKE%2BDrlJaIVXAqfx52dWX7nLT%2BWWJYGwAMzS7eWVkxFXBtFfQMFz2f%2BDFapsJUo9mNT90q6M3XH5b9lMpyCL5gNXkFl0V8%2FfuefoOzlmW3V2WcN507v0XU9aA5YOnLx1CLg1bdDaItqJDphr%2B374WOtOGrmuhhzMg8DO02DdAV0WjpbyXG6BzuAQmWNzxR6dbtc47iDWQYwlnslRrqvE7RvoTSZWDGVwEMLDRKQroM8Ng49Mlv6jp0yfz8Q05nvR%2BDW5ihLs%2BuXY1hSqeJ4FH87Su%2B6cWPN0Q8F4y1YlIVNBAAdsGDWtGO3DJJygzMPiyiMoGOqUBaYtxRQ1IeiUuipXZzzwY8prTWV4gGhDWeS7q3m9Rd0Iv2ENMzPjYY1y3fTOqNLrSvK9OeE4FNIyzDrbkPccODRggYJwXLUW%2BXk1WBGpiUM4BR4Fnw2ShTHj%2F72FsXB%2FnrR8v9Yn3U%2BiWcbXmOB5N1jxZn2RF9bP01hpJ3Y5cFeTexDYYzy26nIAh8oYOzGe9Lq60uQn%2FhKaB4Qc43%2B%2BNbV9mH0W8&X-Amz-Signature=9c0ddc63abfe833db442d84b85dc52d533296e93baad15109c6a1596c588afa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567TAHZQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvrD%2By6OR8JdS93MlhrI7oKdEnvMrxEuc%2Fa%2FXbZ4EEVwIgH%2F7o9JVrevzhJCQHClxXzkD1LE9LPasjlW8W0Tiatbgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNW5U%2F3U0LRWcZfLUSrcA51%2Ff47EepSqLzOkdAfHPt3uuxPonT8KnTo%2FiRB%2Bwagvoke2QHiLE8gXkBuFzODtvCA7R3lX5TnwE0a4J%2Fqy%2B90i4%2BGSzx8ACJ%2BzL5Dh1BIgr6twlrK2UnK%2BxijMl90jhUQf4YYqPLrhPHWOzeUxiE7DA1Oj6aSrXpOmtjaze5urWa3eGyURaKKDAUPUOXAMMngCe5mOM2L%2BBjNssxIBTWHqpZq1%2FyGtGJueepOhUmLkOUY0F9QDpFAJqryNjNE%2FgTuKwhXR7cnWVlSvSRf7OqGEC752KRb4x5K4yH2lxFgZgYBj%2FJ4Grl77g44ODfhDKE%2BDrlJaIVXAqfx52dWX7nLT%2BWWJYGwAMzS7eWVkxFXBtFfQMFz2f%2BDFapsJUo9mNT90q6M3XH5b9lMpyCL5gNXkFl0V8%2FfuefoOzlmW3V2WcN507v0XU9aA5YOnLx1CLg1bdDaItqJDphr%2B374WOtOGrmuhhzMg8DO02DdAV0WjpbyXG6BzuAQmWNzxR6dbtc47iDWQYwlnslRrqvE7RvoTSZWDGVwEMLDRKQroM8Ng49Mlv6jp0yfz8Q05nvR%2BDW5ihLs%2BuXY1hSqeJ4FH87Su%2B6cWPN0Q8F4y1YlIVNBAAdsGDWtGO3DJJygzMPiyiMoGOqUBaYtxRQ1IeiUuipXZzzwY8prTWV4gGhDWeS7q3m9Rd0Iv2ENMzPjYY1y3fTOqNLrSvK9OeE4FNIyzDrbkPccODRggYJwXLUW%2BXk1WBGpiUM4BR4Fnw2ShTHj%2F72FsXB%2FnrR8v9Yn3U%2BiWcbXmOB5N1jxZn2RF9bP01hpJ3Y5cFeTexDYYzy26nIAh8oYOzGe9Lq60uQn%2FhKaB4Qc43%2B%2BNbV9mH0W8&X-Amz-Signature=105f29cc3224d56b12dc143e2dcfad8b195d724120a5193b48de82fa26ab7a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

