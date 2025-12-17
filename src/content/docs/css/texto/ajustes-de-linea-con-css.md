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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOABO5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu3%2B34UETZLs02GFN7MpiGEel5mEc%2FJkah4XHRCRVw9QIgFnDKy6jqFNB8nXeESFX83z7NJhygl%2F3hyM0bjVqJQRgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDQmiq3ncBipMatNkyrcAw%2FQgC%2FjgX3QELnTa1mMm8TrmtQSzIELMH%2FN39%2Fwe7i1rf5xfWEqW%2B7%2FsVE5VprOccR4hsMtr6gcO2LDp9imrTgboL8vm9i3JqENwCO9EO6YYicW%2Bc3MDlhc8spQ1vewvhJ2QaCN6GUmgH53YsMhLxKY2bl%2BE2Fh9V7AQHTmCRAde3lYIubdGBhscHaMUOSksN88EbxuD4ejCvG625KAQJ5O7YR6Nu864v%2F3iEO3%2BAMMXDKakqeYmaN3u8uCmoVhbhrkFJmgM8Z7jtwD6w8RbW90%2B8%2BXJKmed3RuIeZDKNR0PQgDW%2B7i%2B2XDrXqMiuoGqyricWtoXPRp3Wp%2F46Q8dDz77oW8dohz%2FVaRwLsEAccrBVbTyq0XWkMiTMZWhNAc94iLUdQv9nLSfWBGycFRuVEaGTTeEr8FAdn09F%2FVJceigbNiWhWPuSThWxoCKE0u1%2FoNmTOm1qLVtgGBAEbyQIO4dCKsuj06VAbJIwUfJDqWJS2%2FAs%2FwhzBuDPXV2jdItSP2iJbpy%2BELopyE7QIQJsHeRTSk50kSFBZ%2Fqivrqw%2Bd7N%2BzgpEMfb8XP16WTnw%2FLMIouTUTJpJ0JCLGjOczO%2B6161u%2FvGfArTZFiJWaG7%2FzW1%2FOYGl6rkb37119MOzpiMoGOqUBG2PLsEdYivAedLJT7hnPV98Oirl8ZGwHtsCvuMVgUt4DWKm30PNojO%2BKQmzaUN08vqiMA9CnAgFbnKhO%2FNa1ik%2BaQ8eIwPvvS31kzUdacUwZxQpkiX6TnQerIwpmXqjQEDDh3r3R0teS65XqJ0a6LKJfVBlaE5GWcKaKUe3hxJcC7BtvNeQE7zhERyhYzLDuz80yrGVopOTNDfjZwOsH3Too0thm&X-Amz-Signature=10bc8c337268af5c47b65824d2176474f5aa9ca218834a7921cf640e23eac18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOABO5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu3%2B34UETZLs02GFN7MpiGEel5mEc%2FJkah4XHRCRVw9QIgFnDKy6jqFNB8nXeESFX83z7NJhygl%2F3hyM0bjVqJQRgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDQmiq3ncBipMatNkyrcAw%2FQgC%2FjgX3QELnTa1mMm8TrmtQSzIELMH%2FN39%2Fwe7i1rf5xfWEqW%2B7%2FsVE5VprOccR4hsMtr6gcO2LDp9imrTgboL8vm9i3JqENwCO9EO6YYicW%2Bc3MDlhc8spQ1vewvhJ2QaCN6GUmgH53YsMhLxKY2bl%2BE2Fh9V7AQHTmCRAde3lYIubdGBhscHaMUOSksN88EbxuD4ejCvG625KAQJ5O7YR6Nu864v%2F3iEO3%2BAMMXDKakqeYmaN3u8uCmoVhbhrkFJmgM8Z7jtwD6w8RbW90%2B8%2BXJKmed3RuIeZDKNR0PQgDW%2B7i%2B2XDrXqMiuoGqyricWtoXPRp3Wp%2F46Q8dDz77oW8dohz%2FVaRwLsEAccrBVbTyq0XWkMiTMZWhNAc94iLUdQv9nLSfWBGycFRuVEaGTTeEr8FAdn09F%2FVJceigbNiWhWPuSThWxoCKE0u1%2FoNmTOm1qLVtgGBAEbyQIO4dCKsuj06VAbJIwUfJDqWJS2%2FAs%2FwhzBuDPXV2jdItSP2iJbpy%2BELopyE7QIQJsHeRTSk50kSFBZ%2Fqivrqw%2Bd7N%2BzgpEMfb8XP16WTnw%2FLMIouTUTJpJ0JCLGjOczO%2B6161u%2FvGfArTZFiJWaG7%2FzW1%2FOYGl6rkb37119MOzpiMoGOqUBG2PLsEdYivAedLJT7hnPV98Oirl8ZGwHtsCvuMVgUt4DWKm30PNojO%2BKQmzaUN08vqiMA9CnAgFbnKhO%2FNa1ik%2BaQ8eIwPvvS31kzUdacUwZxQpkiX6TnQerIwpmXqjQEDDh3r3R0teS65XqJ0a6LKJfVBlaE5GWcKaKUe3hxJcC7BtvNeQE7zhERyhYzLDuz80yrGVopOTNDfjZwOsH3Too0thm&X-Amz-Signature=5fff55a0a1907ebdebd823c69594080240589183c8cf6a1e074e3a04fd02a20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

