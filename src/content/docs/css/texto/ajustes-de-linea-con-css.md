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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRJ4NPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj4O2jhdlGZqbYQvwHPszugnGXxrsL48N04YI0rUYqgAiBlgolmUeQkPGohvqLNBIsH02xqU4yJtaGhOPXOhlHkOSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMeyQG5z4yrB4YUS5SKtwDER31HXP2Hq5g6BmSTuBzFJhcdDvRnXiwIqYXEvX7ZwQ3R2JBtfgz6C2ijh0B8BqDx9TybpYeLTMdJoOHWIS3hDydQh8E4dawWZFD0mYoBZkia5FB25WxtMuYy0N8Mu0hoVWCoSJJSuYq%2FvozBEmdJiUVFPYJyBNkk5lGlY7bSEeJytiEAwFCOicMwegybX0SuX0gexvYscE%2F7pLJ%2FIBFxxXkd25vCiWBEkEGDtzO7gnGV45RiPDKDYjjphvUsW6yxsPBys2Ed8AZ72XEpw9HRPxSEBXzXyfL7FnpO8v2dP2zT1fQqsNu2rDtXf84pVOd0I9u13b34WENzWZzI0G%2BB3Tl8QqA95SLuvtlEith%2BwdyQH6mLdJSQrKb9nW8nu3xy6Uv1XWGeZ6Fs%2FcZxkcjwwfoTMCt6SRc2W4pzeICFq7Ck7nUBOp9GMeSucA1GpNXI63gnyNv8HepcsXS6SpOPrjMHLGSN8d9VkIhiIvKVecRn4kiJbYmpE50yrXG70RnQy0Q5NxuX053%2Bj%2Bhvc%2FMh659ZlBQA7qrO9mMwAeYtK%2FmCus8%2ByQk8bx%2Ff6edi6K2tV55ShKcVTNt4aD%2Bh47YPou%2FMYejoHOVAHo3GHOXw%2BzrY%2BlWpQ%2FgMWCdGKsw0%2B%2BJygY6pgHgQpz0me6rcMwMgydNhP3sxy9z6HLDW%2F3J9Ujm1fCyvpVmg4yLKPMRFf%2BzEhxfHW81GZsS9wuY9E15XMiM4kJGFg2gSHYjDfeduijSGp417dhTOShzqZGv%2Bw8FPQ8suoCnxdJ4GRoR2hmBAhHmVb7%2ByG3zVFfXNWSIrmi%2BLn9jfoGGFXjryifK%2Bwoy9VUcF0FC86%2Bnc8fivSnUakVoYzMZbOY3rkfe&X-Amz-Signature=0260e462d20f5ca388bc2bc9e8bfc4f791e56d4af0265619e538a2ed0d36544a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRJ4NPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj4O2jhdlGZqbYQvwHPszugnGXxrsL48N04YI0rUYqgAiBlgolmUeQkPGohvqLNBIsH02xqU4yJtaGhOPXOhlHkOSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMeyQG5z4yrB4YUS5SKtwDER31HXP2Hq5g6BmSTuBzFJhcdDvRnXiwIqYXEvX7ZwQ3R2JBtfgz6C2ijh0B8BqDx9TybpYeLTMdJoOHWIS3hDydQh8E4dawWZFD0mYoBZkia5FB25WxtMuYy0N8Mu0hoVWCoSJJSuYq%2FvozBEmdJiUVFPYJyBNkk5lGlY7bSEeJytiEAwFCOicMwegybX0SuX0gexvYscE%2F7pLJ%2FIBFxxXkd25vCiWBEkEGDtzO7gnGV45RiPDKDYjjphvUsW6yxsPBys2Ed8AZ72XEpw9HRPxSEBXzXyfL7FnpO8v2dP2zT1fQqsNu2rDtXf84pVOd0I9u13b34WENzWZzI0G%2BB3Tl8QqA95SLuvtlEith%2BwdyQH6mLdJSQrKb9nW8nu3xy6Uv1XWGeZ6Fs%2FcZxkcjwwfoTMCt6SRc2W4pzeICFq7Ck7nUBOp9GMeSucA1GpNXI63gnyNv8HepcsXS6SpOPrjMHLGSN8d9VkIhiIvKVecRn4kiJbYmpE50yrXG70RnQy0Q5NxuX053%2Bj%2Bhvc%2FMh659ZlBQA7qrO9mMwAeYtK%2FmCus8%2ByQk8bx%2Ff6edi6K2tV55ShKcVTNt4aD%2Bh47YPou%2FMYejoHOVAHo3GHOXw%2BzrY%2BlWpQ%2FgMWCdGKsw0%2B%2BJygY6pgHgQpz0me6rcMwMgydNhP3sxy9z6HLDW%2F3J9Ujm1fCyvpVmg4yLKPMRFf%2BzEhxfHW81GZsS9wuY9E15XMiM4kJGFg2gSHYjDfeduijSGp417dhTOShzqZGv%2Bw8FPQ8suoCnxdJ4GRoR2hmBAhHmVb7%2ByG3zVFfXNWSIrmi%2BLn9jfoGGFXjryifK%2Bwoy9VUcF0FC86%2Bnc8fivSnUakVoYzMZbOY3rkfe&X-Amz-Signature=e10027c5d468578f962d3fa86566847bb93e7a50483b8c467d7ce36a617177da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

