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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRI2WCT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrYz76kT9wL359b3E5HQHQrKgHr4QoWLuJtphHyvVXRAiEA%2FiL1jqmVH456BBzFG9fEakEr0f08EpuYTjbUXXuztFkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKtm7P%2BAjfzICNKy%2FircA4ezkS4PrfB586LpLO2brwKrZqJWLMzylEgk3CSm7x7Tmwvk2m0XAhKBzYK6WH%2FpHxs1DVNCFm9X%2BDC%2BE9kXUmlgH2HpGBZ2jMY6PTF2CwhuJgaQyI%2BrE4OlsAykazoXpHna%2FOBDZxzVIOi1WYoZeusInSYlVUJ8W%2FTURGPbNvLMyG1C6gCM%2FVKAG76zuDKzUImGGSAB5kMWfO74C0uSHrqJrR%2F4VxgXR0PZVOlf5zMonZ1mH3tz9%2BlCF12bRO8B2Zk4ZYVhdqzV%2FRp3U2WeiZFnu1FAwN%2FLsc6owleliyPcFjYiALA2bjczOwAGdhwOhlft2eenM7oTtmvYdinWDPcO0E3vRo7l7ZOVkKIhd5436QWote8F%2FncHn8QdVXD%2FIxTyZ5ZD2Fnm8LUJyPqQ2U2bdwjSw1fLhyOCVhSVF1VAltsxvizBe7Aw23yY%2FwK1FHYbRaKeOaEXJ%2FCuGayYvxJn22q2YpJoM7OIEF%2FREnegtZ8aewH4cHABJX%2FPkBovL9lKTgcR7o4EXLsqWYdqRY21Z0H5%2FtBwLx%2F5wteZ2rypnujl0GlwRxVqwEapupLxoeKkxvvmgc5FirYD3rfi9Y2FEV8EUcY13S%2FlJsu0UexfwbCB7EWD%2FgC7O6F4MOWxiMoGOqUBmRDUWx4Vaeqb%2ByGGKmykZwMp7Qla53EglILKkmftwAjeMB55M4%2BVnlexpyQt5MZgDyJYOYdeKi3iGEo4hHdQW0EW7a3KsO1HOY2jJA%2F4tB9bjKE5X6R%2Ft2YzvIZuZRAAWGlkRDR6Gh8aTlgRArXAlu1CWsHzmArznZH8UeaNZ%2BgTnuaaCF6lcuM8wZSuTD%2BSGQwk5Sf0NAOLKb9EGKttIG0HYgtm&X-Amz-Signature=77c39d8b9dad86796ed540bd54ab65aba2a168c51d9b5228ac6c38cf4d9c89c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRI2WCT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrYz76kT9wL359b3E5HQHQrKgHr4QoWLuJtphHyvVXRAiEA%2FiL1jqmVH456BBzFG9fEakEr0f08EpuYTjbUXXuztFkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKtm7P%2BAjfzICNKy%2FircA4ezkS4PrfB586LpLO2brwKrZqJWLMzylEgk3CSm7x7Tmwvk2m0XAhKBzYK6WH%2FpHxs1DVNCFm9X%2BDC%2BE9kXUmlgH2HpGBZ2jMY6PTF2CwhuJgaQyI%2BrE4OlsAykazoXpHna%2FOBDZxzVIOi1WYoZeusInSYlVUJ8W%2FTURGPbNvLMyG1C6gCM%2FVKAG76zuDKzUImGGSAB5kMWfO74C0uSHrqJrR%2F4VxgXR0PZVOlf5zMonZ1mH3tz9%2BlCF12bRO8B2Zk4ZYVhdqzV%2FRp3U2WeiZFnu1FAwN%2FLsc6owleliyPcFjYiALA2bjczOwAGdhwOhlft2eenM7oTtmvYdinWDPcO0E3vRo7l7ZOVkKIhd5436QWote8F%2FncHn8QdVXD%2FIxTyZ5ZD2Fnm8LUJyPqQ2U2bdwjSw1fLhyOCVhSVF1VAltsxvizBe7Aw23yY%2FwK1FHYbRaKeOaEXJ%2FCuGayYvxJn22q2YpJoM7OIEF%2FREnegtZ8aewH4cHABJX%2FPkBovL9lKTgcR7o4EXLsqWYdqRY21Z0H5%2FtBwLx%2F5wteZ2rypnujl0GlwRxVqwEapupLxoeKkxvvmgc5FirYD3rfi9Y2FEV8EUcY13S%2FlJsu0UexfwbCB7EWD%2FgC7O6F4MOWxiMoGOqUBmRDUWx4Vaeqb%2ByGGKmykZwMp7Qla53EglILKkmftwAjeMB55M4%2BVnlexpyQt5MZgDyJYOYdeKi3iGEo4hHdQW0EW7a3KsO1HOY2jJA%2F4tB9bjKE5X6R%2Ft2YzvIZuZRAAWGlkRDR6Gh8aTlgRArXAlu1CWsHzmArznZH8UeaNZ%2BgTnuaaCF6lcuM8wZSuTD%2BSGQwk5Sf0NAOLKb9EGKttIG0HYgtm&X-Amz-Signature=a12fd8865fce35ad1de57c3e4cb1db702ba6ab4bf85e838ca6a943269480b908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

