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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M34JBG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEwKedt9aYx0%2F3fayAbZiE93R6IGUHml6n2z5QXxP4WAiEA8%2F%2FJBxU97BmeTSoc7490KxCiiQgSiQHgAOsyVY49mbsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOV34EQVqWN93AoSQCrcA%2BPKpEFWHTeapMHP4YlcWPKVv4dRORO2m1zIfw8Pb6BVtsJ7i8rwaUGsQxlkF0rGoVJm7D7pa7vAHuVSq%2BOn8PDheRVZo1W0Z1H1bGj50fSlR9iPfZzlB5PyYlNPBIcd5cxO9fTp7X8hmE79Aze9DDy2IFAoG5CBnHhDvnU3W%2FyB77DTk1F6NQvRMKeLCOA4jnNdPQs6af73kNWk1YrlDlnj0U8J34rLj0s%2FxvdtHIkz6VbxLIH52VQomlwsDYAm%2FuDOTEdiaDUIxVgDrQmCEGFi1oB8ueP8YQB%2FGZ7deF8Vy%2FIQBgUELG2pQ8NCPnADn9zpBv6bOhM0UiNNgOWvLQFGgsnok%2FIzk2bSD9L9vm2%2Bko%2FUqFCjeY0b7WqxshFfJree1gCxatnEl8A7sW1uy1SGuBCgTtSkxc4aeiTmLZ5x4IrhVLJl6pZ0phmr0ofEaDizAsf%2FsTqB3xE5k5KWdKZEwW%2FRvoGOJF9%2FodKcpgnGppewiJLGTKsO6KLXv51h5aYSL9Q5XStCVawgkjbjC5r%2BzrGQVSD%2BDuMwmNHc4Ed1eImruPZqk%2F45hE5SeMgykyloe6oUqHIYg%2FzwuFGfAxALdyo5auT%2BG5oM%2FhrF0earwcBoLgam82x1JDAtMJ2qisoGOqUB6GdmQBHYdNX8hpJKl9bW8GGjfKLJ6AVq7ihjnKUwdv5bJvwFDjkhty8zcRsYJuUtOPkqESm1WXLPZyn7d0Jdic1bwc8F8WCwZBNb%2FgJ9h3x5gL6imzuSP%2B7psewvy1UgL3RqermTWyLnabSfQhjNLOHTQkI%2F4Lr10fsIL%2BPfqkJaQMmXQ1Vov4CduzeKXcnplw7QhHuWZdHTrBWa7TVTkuSZv0X5&X-Amz-Signature=3711c3dcb9fd364ef89efb67f441ede2d9e92aaf076f5fbc2cdf6c69eb07f863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M34JBG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEwKedt9aYx0%2F3fayAbZiE93R6IGUHml6n2z5QXxP4WAiEA8%2F%2FJBxU97BmeTSoc7490KxCiiQgSiQHgAOsyVY49mbsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOV34EQVqWN93AoSQCrcA%2BPKpEFWHTeapMHP4YlcWPKVv4dRORO2m1zIfw8Pb6BVtsJ7i8rwaUGsQxlkF0rGoVJm7D7pa7vAHuVSq%2BOn8PDheRVZo1W0Z1H1bGj50fSlR9iPfZzlB5PyYlNPBIcd5cxO9fTp7X8hmE79Aze9DDy2IFAoG5CBnHhDvnU3W%2FyB77DTk1F6NQvRMKeLCOA4jnNdPQs6af73kNWk1YrlDlnj0U8J34rLj0s%2FxvdtHIkz6VbxLIH52VQomlwsDYAm%2FuDOTEdiaDUIxVgDrQmCEGFi1oB8ueP8YQB%2FGZ7deF8Vy%2FIQBgUELG2pQ8NCPnADn9zpBv6bOhM0UiNNgOWvLQFGgsnok%2FIzk2bSD9L9vm2%2Bko%2FUqFCjeY0b7WqxshFfJree1gCxatnEl8A7sW1uy1SGuBCgTtSkxc4aeiTmLZ5x4IrhVLJl6pZ0phmr0ofEaDizAsf%2FsTqB3xE5k5KWdKZEwW%2FRvoGOJF9%2FodKcpgnGppewiJLGTKsO6KLXv51h5aYSL9Q5XStCVawgkjbjC5r%2BzrGQVSD%2BDuMwmNHc4Ed1eImruPZqk%2F45hE5SeMgykyloe6oUqHIYg%2FzwuFGfAxALdyo5auT%2BG5oM%2FhrF0earwcBoLgam82x1JDAtMJ2qisoGOqUB6GdmQBHYdNX8hpJKl9bW8GGjfKLJ6AVq7ihjnKUwdv5bJvwFDjkhty8zcRsYJuUtOPkqESm1WXLPZyn7d0Jdic1bwc8F8WCwZBNb%2FgJ9h3x5gL6imzuSP%2B7psewvy1UgL3RqermTWyLnabSfQhjNLOHTQkI%2F4Lr10fsIL%2BPfqkJaQMmXQ1Vov4CduzeKXcnplw7QhHuWZdHTrBWa7TVTkuSZv0X5&X-Amz-Signature=4b4e7eeac745b1b9cf9e40ceb6e8efb5b219be34d831831607b5c5fdad6a0df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

