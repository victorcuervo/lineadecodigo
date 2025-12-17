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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBB7OPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WvrGItuyuwvtk0KA9pOQ43eTiI%2BsrWFvSNKJ9ApC6AiEA9bzUSwYBc%2FRl6NF2khLTejVMuoXC0XcuaQdGQWx3zfEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7LpagZwa3jjZoYgircA4NMc5ASmTKX8XPHB3rO0APY5TglEtJjjOvYC39sg1I0kIGbApgPRz0k1P0T8N233XISxIrnkQGj2l07%2B4UF5H5zT5SJAO6P5p%2BNGczyaZFwERKaxq10UkN4xcUJ13Y45zeERBVDnly0Fn2A9dsd5JJPXPQE7%2BHLH9lAiHFXx%2FF2zTJu0HhJMOA3MDP3hBCnPsZpnQvrOf5xQYPgKc4u8zJKVyS1qRXedXtHRsBff11EnwZQJdookR7xaGSr61qOehySA6in%2FRTb6YgUxWAB6F9SW6BzTeixiiyVuTXb3Nev0FnF9Kt64YIbuPkcYIeIthVc4sDA5oItqEOcQxNW0j23N0G1pVaYaRGWXh368q3KlanJ8yW7wXgfXO3%2BJ57xHFnpG0IScrAmM%2BDblBqlP60I1vW%2FWwGt2A2yVIXkA08bcVDaTSnD7%2B3Fk1zF40Wuv3Pt2Rq2hdgLqvGa6izq0Tx%2BDED27PQxLaJU2dvZrt5f6cULYFBTWo4X4MZUCcj4WDxvC23%2FNd4vA%2BlOf6WAArkGvXI8v0edLv6Zw9hQUTpfzPCjB%2FDkxQF8F3WTUwAFCKp4QvNJqDA%2FBRW6XtSMfyx6%2FuGhCe1jXDUV86jRL2notjmukZsl4JCaMpYoMIigi8oGOqUBe7NLlfzk4c7Xg7KLOItGSOZGc0HxmO06XNqbCnDgEeLyAossM8DUzqfJ%2B5pN7fn20x1Im6wTqME4%2FC33hz3%2BrI315d0YejtIupbcfXvy0KZtjRcjJruS4Vh74jqzDZG5n7qEtDB9%2BO0idm3x%2B2OqPebLIJJlt6v3ABGnCEpD%2FCY3ct7GxOLZP6tCsfHzE4%2FDRgmw3ERg%2BAcAQ9j5YoH%2F4yMxImQS&X-Amz-Signature=139e532cdb319193634366a076904a77008c8a09ee827cff135b67d464965e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBB7OPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WvrGItuyuwvtk0KA9pOQ43eTiI%2BsrWFvSNKJ9ApC6AiEA9bzUSwYBc%2FRl6NF2khLTejVMuoXC0XcuaQdGQWx3zfEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7LpagZwa3jjZoYgircA4NMc5ASmTKX8XPHB3rO0APY5TglEtJjjOvYC39sg1I0kIGbApgPRz0k1P0T8N233XISxIrnkQGj2l07%2B4UF5H5zT5SJAO6P5p%2BNGczyaZFwERKaxq10UkN4xcUJ13Y45zeERBVDnly0Fn2A9dsd5JJPXPQE7%2BHLH9lAiHFXx%2FF2zTJu0HhJMOA3MDP3hBCnPsZpnQvrOf5xQYPgKc4u8zJKVyS1qRXedXtHRsBff11EnwZQJdookR7xaGSr61qOehySA6in%2FRTb6YgUxWAB6F9SW6BzTeixiiyVuTXb3Nev0FnF9Kt64YIbuPkcYIeIthVc4sDA5oItqEOcQxNW0j23N0G1pVaYaRGWXh368q3KlanJ8yW7wXgfXO3%2BJ57xHFnpG0IScrAmM%2BDblBqlP60I1vW%2FWwGt2A2yVIXkA08bcVDaTSnD7%2B3Fk1zF40Wuv3Pt2Rq2hdgLqvGa6izq0Tx%2BDED27PQxLaJU2dvZrt5f6cULYFBTWo4X4MZUCcj4WDxvC23%2FNd4vA%2BlOf6WAArkGvXI8v0edLv6Zw9hQUTpfzPCjB%2FDkxQF8F3WTUwAFCKp4QvNJqDA%2FBRW6XtSMfyx6%2FuGhCe1jXDUV86jRL2notjmukZsl4JCaMpYoMIigi8oGOqUBe7NLlfzk4c7Xg7KLOItGSOZGc0HxmO06XNqbCnDgEeLyAossM8DUzqfJ%2B5pN7fn20x1Im6wTqME4%2FC33hz3%2BrI315d0YejtIupbcfXvy0KZtjRcjJruS4Vh74jqzDZG5n7qEtDB9%2BO0idm3x%2B2OqPebLIJJlt6v3ABGnCEpD%2FCY3ct7GxOLZP6tCsfHzE4%2FDRgmw3ERg%2BAcAQ9j5YoH%2F4yMxImQS&X-Amz-Signature=9a473d8da7e05ac07d076a9de6e91904a53d7ca5d22be0a2ca1910d39048ac23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

