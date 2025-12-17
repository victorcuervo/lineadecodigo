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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AP5G4NV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv7Pf7zJI%2BVwDJxuIMvFWg40O0RmYneYjv6uP5wBDozAiEA%2BRUjmgcFccWhP%2FdBn76%2FzwKltwPxwZfU00AAbL5C740qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05pVW1OBwZYn%2F2CircA8BISogEFckoyZOk5KC7wsGwS3VjJ99Xd9c0YCs5IYbq30OHUrmcTXDk%2FVIByQOTMAp4hlsMAlwletRGFopmq9Y8gPj8T47YTOcrtXS%2BCRW80mCWT0KqRRF8yPw0eP7d%2FaR6mTm5nje%2BxgBQtAYpSPs4tzNx0RsU8wKazO08zvcmmCyzoWzkVsDYZWI6X7E6V39VNrv8G0g%2FYHnQsJZpqiFAKxgC8n9OuqDfmGCEocnrYEvfjnIxs6bMzpveth9TPKNvPaQRRGXUzby%2Bfdk1Q50V4y6phJ7HEIWKjNPO53KMnR3kLjFTItDWVMhjcZ6Y93A7Klw6hA76FEmPCAPssnl6FZ6GV5tB8NJwAKhzTAeP5DhKc9Y65jouxzT7cIUp5FqgYvkVMldOqRwpruCoGv494c95kJ3T8me7pe7ujfJrBXnGUXUr%2BHijNourxzOrJXTWzyF2ffGqMcot8WuwiEwKDQDma0q5NRF%2FIU8Ga0xejF9DJ%2B1p%2FG8klNadQOw8MkYEneploEs2SOmoD9x3E2NHT%2FfXJVOARMD0nyqEDZgDfqGYz7gQ4Xlq0xPYth99rfLKbh9e5zBWbUW0FMqZ09HG%2FzmW6BcdOXBXN1bgDjuvClLYZu%2BTp1KMYmHYMKafi8oGOqUBIHQY4y0oM5K7UGz0fo7KWHHJ97KDE7nJg4DGiyQD17r9ParPylB7ADL%2FfzCDkRw%2BsMgZ1QUtDrYb4cs%2FJxBpRJFsBpJyPzq1PXMU6TbRpbP8%2BA%2FahN%2F21oRWvM1CzUI%2B3bKJoYckZjs%2BUw8zXPWKCc5cBAH96qf3xRga%2BX2T5Zb%2F7a0WpQWA2kdiRdGwXeqVw8dKe3wUC5Q4AyYugHJYRfJPBHk%2F&X-Amz-Signature=be5a515108c2a041f2d4d0004981e970bc4d91765a30957cc5040894965ab3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AP5G4NV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv7Pf7zJI%2BVwDJxuIMvFWg40O0RmYneYjv6uP5wBDozAiEA%2BRUjmgcFccWhP%2FdBn76%2FzwKltwPxwZfU00AAbL5C740qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05pVW1OBwZYn%2F2CircA8BISogEFckoyZOk5KC7wsGwS3VjJ99Xd9c0YCs5IYbq30OHUrmcTXDk%2FVIByQOTMAp4hlsMAlwletRGFopmq9Y8gPj8T47YTOcrtXS%2BCRW80mCWT0KqRRF8yPw0eP7d%2FaR6mTm5nje%2BxgBQtAYpSPs4tzNx0RsU8wKazO08zvcmmCyzoWzkVsDYZWI6X7E6V39VNrv8G0g%2FYHnQsJZpqiFAKxgC8n9OuqDfmGCEocnrYEvfjnIxs6bMzpveth9TPKNvPaQRRGXUzby%2Bfdk1Q50V4y6phJ7HEIWKjNPO53KMnR3kLjFTItDWVMhjcZ6Y93A7Klw6hA76FEmPCAPssnl6FZ6GV5tB8NJwAKhzTAeP5DhKc9Y65jouxzT7cIUp5FqgYvkVMldOqRwpruCoGv494c95kJ3T8me7pe7ujfJrBXnGUXUr%2BHijNourxzOrJXTWzyF2ffGqMcot8WuwiEwKDQDma0q5NRF%2FIU8Ga0xejF9DJ%2B1p%2FG8klNadQOw8MkYEneploEs2SOmoD9x3E2NHT%2FfXJVOARMD0nyqEDZgDfqGYz7gQ4Xlq0xPYth99rfLKbh9e5zBWbUW0FMqZ09HG%2FzmW6BcdOXBXN1bgDjuvClLYZu%2BTp1KMYmHYMKafi8oGOqUBIHQY4y0oM5K7UGz0fo7KWHHJ97KDE7nJg4DGiyQD17r9ParPylB7ADL%2FfzCDkRw%2BsMgZ1QUtDrYb4cs%2FJxBpRJFsBpJyPzq1PXMU6TbRpbP8%2BA%2FahN%2F21oRWvM1CzUI%2B3bKJoYckZjs%2BUw8zXPWKCc5cBAH96qf3xRga%2BX2T5Zb%2F7a0WpQWA2kdiRdGwXeqVw8dKe3wUC5Q4AyYugHJYRfJPBHk%2F&X-Amz-Signature=ca62cd3cbd33236dbdf3f0206d1ebe1474ff57e74ae4ff3e5a20985bbfdc8039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

