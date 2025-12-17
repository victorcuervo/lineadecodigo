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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6OBGGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdAhq60WIBXqgNNQ4y7t0FuOn%2FfronV7UFE5jl80QkQIhAJkINdrReGGGYnoLraq9EySU2FyobNdHiTmz1gcXW3DlKv8DCHIQABoMNjM3NDIzMTgzODA1Igzc0x0nBdOJcjxA7Qcq3APGXoadfFr0e5ow6IZkiUk78oes6c5s8h2JRwIRi1GQE0n78WNBBzY%2BUXht2atebBwbHGEb7G%2FzxHXv4YT7eJ6NFDOvvKVASuI5LmsSpwQZ2KnZhUj2gxm4pGdU%2FqVnCte2rp6NSraUg5KDQayIsGGOmsxw2dkCFY8xosqXzJyVeYsubaRGjqg0c9HztN%2BluiBv21PsZQyRrfO8%2FhvXGjbRVuA8B9PdheXv3XmTUWuvAdMcz9BssZG0Kfo9gYHavKou4FlmfyHRWCBdVT1NnW4p%2FmATKdskYtP0r0UgyFGtuUuJczltdCuRx%2B7HCEYNQG1FS9JRKdtPud4dbx%2FEVrx2o9P0zeCUtRrNrQKIji%2F2849%2BYFUIRX7otMzavnPi%2FUDeZleKNoBsuzBC3l9ZqODAkzSJez76M53D3%2F1ec8padrz99UHQ0cnQ%2B7GZ3Bo%2FNRdZQjhaD9xSpxGXYkx4w4mIROVI4jemXuUGoJStIF9SPwXnT4i9BqLg%2FfivXwA%2Fin1%2Fda8Ep9qF1SOCDniIbe%2BXMYRWtJB4PACL03jzEcrmnXrEe9a%2BUD46NjVWkB7H1zI89RiVu7dH%2FyfltE7fIO1dewhENkE8O%2F9AHOlvjeEc7ciLRZ8cLSkX%2BznC0zDi%2BofKBjqkAWymLC3G0QXijIjmO91kldY2ZkL1hHjr%2F3LMZ7chm%2FRbbHCVqBhCoPNDb5V9c4VKdKmEeYbwTgQAqKICksic%2BEw3oXLh%2BQT6IloZ8T6NBEwvW6hxunPCH4YCgol6bU588vfwa7CwJujm3XHj5lyhRu7X%2F5wByuZd0UalVHWmd2Xv3r8O2h%2FTWbx%2B7kiVIKiTdHO3Q2nw3jL6Z5LHFq1hD5hSMR70&X-Amz-Signature=2be5e4e4fa74d046116ac1006818bceb52045247cf3e28e55e1163af8face94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6OBGGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdAhq60WIBXqgNNQ4y7t0FuOn%2FfronV7UFE5jl80QkQIhAJkINdrReGGGYnoLraq9EySU2FyobNdHiTmz1gcXW3DlKv8DCHIQABoMNjM3NDIzMTgzODA1Igzc0x0nBdOJcjxA7Qcq3APGXoadfFr0e5ow6IZkiUk78oes6c5s8h2JRwIRi1GQE0n78WNBBzY%2BUXht2atebBwbHGEb7G%2FzxHXv4YT7eJ6NFDOvvKVASuI5LmsSpwQZ2KnZhUj2gxm4pGdU%2FqVnCte2rp6NSraUg5KDQayIsGGOmsxw2dkCFY8xosqXzJyVeYsubaRGjqg0c9HztN%2BluiBv21PsZQyRrfO8%2FhvXGjbRVuA8B9PdheXv3XmTUWuvAdMcz9BssZG0Kfo9gYHavKou4FlmfyHRWCBdVT1NnW4p%2FmATKdskYtP0r0UgyFGtuUuJczltdCuRx%2B7HCEYNQG1FS9JRKdtPud4dbx%2FEVrx2o9P0zeCUtRrNrQKIji%2F2849%2BYFUIRX7otMzavnPi%2FUDeZleKNoBsuzBC3l9ZqODAkzSJez76M53D3%2F1ec8padrz99UHQ0cnQ%2B7GZ3Bo%2FNRdZQjhaD9xSpxGXYkx4w4mIROVI4jemXuUGoJStIF9SPwXnT4i9BqLg%2FfivXwA%2Fin1%2Fda8Ep9qF1SOCDniIbe%2BXMYRWtJB4PACL03jzEcrmnXrEe9a%2BUD46NjVWkB7H1zI89RiVu7dH%2FyfltE7fIO1dewhENkE8O%2F9AHOlvjeEc7ciLRZ8cLSkX%2BznC0zDi%2BofKBjqkAWymLC3G0QXijIjmO91kldY2ZkL1hHjr%2F3LMZ7chm%2FRbbHCVqBhCoPNDb5V9c4VKdKmEeYbwTgQAqKICksic%2BEw3oXLh%2BQT6IloZ8T6NBEwvW6hxunPCH4YCgol6bU588vfwa7CwJujm3XHj5lyhRu7X%2F5wByuZd0UalVHWmd2Xv3r8O2h%2FTWbx%2B7kiVIKiTdHO3Q2nw3jL6Z5LHFq1hD5hSMR70&X-Amz-Signature=fd8f8e0781844d15c58e8b6b518f89a1fefc8508cdf62668c647d0740d3fdcc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

