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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OLSRMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnSoVxHEErR1qfy0yxliPNGXWu6x9yZHr0zSjxuaXJrAiByr%2FapAkcpNG%2B5YVhF2yiEmCGkVSNu6EyovgIiJzQG3Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMLVpXtJ9TVE2JAMBdKtwD7YxLSImZPJgHFQeg%2Bh0galkEzz1xMvCYLuuaizS0xXEBs%2BuASC9APq1UVppxmMhcAXHu7RB0NRyDSaCI4xgxag2SFcQcdR3XGWB8gkz7ZgF%2Bbtn43AbWdwNO2oLn0gVnY%2BavgMm5u9rOPzBYXet%2BzgPibOBYXqMGdf63XcovTeBVAMRRcaEO3hxK3afxzBybT9K6rhsaVJQ7DYDITpyk270ahAYPF%2BOBfkA5onsb7JSTdU%2FTdN1%2Bidjkbnyrr23C8UhvAmVnYeAOXQQtWwWiGCbTqRiNytdMD9D92LRDL%2BMu6YT2JSsyItSoyFiYL%2FK9hcR1YxeNuLieHXVcC1IVeFTjzLr5jIKYN110oBFMrJmK1xU4a%2FHh08UgyZNE%2FhrFvM66XkBX34md%2FWw%2BJfSNYhIVWAJ4zKGOG2hgy4uEmZbpNfE7K1EX6XwQPKXw7r7tSlEBOyXl6mM1%2FVCvDLkigpvu%2Bw079ectEQzVxIcKsQeMLG47A0UErxpP18Ev8ZrTBZ%2FuLdJfTqn%2BiQgdLAU2DEn47lzkoWbQa7ZH2w%2FTWXbGK5OW%2BhtRj9Pq%2F1IHKrZK9H33Dj1invzqOKHA%2BUiStFX9NG6DFZembDdSGKTOWgo9gu%2FfNBNJ4bDcioIwr5yJygY6pgEaWhXQjXcCDqxC51HNQIkuu3LuSANQapwKa3xh1jYr5oNQ%2FCP5KAFXEJ0X0F%2Bsem2YkFvEV101fKpazyW8IrkB%2FmZTQX6dDDVWiREsLI2yQKgbKHat4A%2BhK4GC9gQqzB9lOju%2B21LyO6WHvC3KVV852qQDJFDfHkTpi1LlDO5m510QhO%2BhJZWCGq7LhEH2inkyaGHtH%2BfHZ53xNc9pmumjsV4nr48f&X-Amz-Signature=3912eba47229493df2f26347ad4c3fa97c846c27501fa858c4a0c4cd15aa4c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OLSRMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnSoVxHEErR1qfy0yxliPNGXWu6x9yZHr0zSjxuaXJrAiByr%2FapAkcpNG%2B5YVhF2yiEmCGkVSNu6EyovgIiJzQG3Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMLVpXtJ9TVE2JAMBdKtwD7YxLSImZPJgHFQeg%2Bh0galkEzz1xMvCYLuuaizS0xXEBs%2BuASC9APq1UVppxmMhcAXHu7RB0NRyDSaCI4xgxag2SFcQcdR3XGWB8gkz7ZgF%2Bbtn43AbWdwNO2oLn0gVnY%2BavgMm5u9rOPzBYXet%2BzgPibOBYXqMGdf63XcovTeBVAMRRcaEO3hxK3afxzBybT9K6rhsaVJQ7DYDITpyk270ahAYPF%2BOBfkA5onsb7JSTdU%2FTdN1%2Bidjkbnyrr23C8UhvAmVnYeAOXQQtWwWiGCbTqRiNytdMD9D92LRDL%2BMu6YT2JSsyItSoyFiYL%2FK9hcR1YxeNuLieHXVcC1IVeFTjzLr5jIKYN110oBFMrJmK1xU4a%2FHh08UgyZNE%2FhrFvM66XkBX34md%2FWw%2BJfSNYhIVWAJ4zKGOG2hgy4uEmZbpNfE7K1EX6XwQPKXw7r7tSlEBOyXl6mM1%2FVCvDLkigpvu%2Bw079ectEQzVxIcKsQeMLG47A0UErxpP18Ev8ZrTBZ%2FuLdJfTqn%2BiQgdLAU2DEn47lzkoWbQa7ZH2w%2FTWXbGK5OW%2BhtRj9Pq%2F1IHKrZK9H33Dj1invzqOKHA%2BUiStFX9NG6DFZembDdSGKTOWgo9gu%2FfNBNJ4bDcioIwr5yJygY6pgEaWhXQjXcCDqxC51HNQIkuu3LuSANQapwKa3xh1jYr5oNQ%2FCP5KAFXEJ0X0F%2Bsem2YkFvEV101fKpazyW8IrkB%2FmZTQX6dDDVWiREsLI2yQKgbKHat4A%2BhK4GC9gQqzB9lOju%2B21LyO6WHvC3KVV852qQDJFDfHkTpi1LlDO5m510QhO%2BhJZWCGq7LhEH2inkyaGHtH%2BfHZ53xNc9pmumjsV4nr48f&X-Amz-Signature=8b23de38aee6e58ba72c28746c93ab89345a983551f041a2f9854f10539ec10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

