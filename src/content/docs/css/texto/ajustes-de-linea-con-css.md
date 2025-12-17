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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXHZAZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8AYKj6TXdH65iFVeVDtsO2hbh%2FtVnX2I%2FdCSQuf1G%2BQIhAKWkJpFpx4Q934RfkEnh1E2Zd%2FYUJdFqoi1SqlJVHUYqKv8DCHEQABoMNjM3NDIzMTgzODA1Igzc08j1U8ygEUzcmTgq3ANjxnF2Gv8pOLZuRBdYoeMaA9ECGBHDHcJpmwGk5at1DN6YSJlusbk0c4wFAk%2Fhy%2FwIP0wRmmXAzguiEn6v4gKGv1Yz0kskKs1KPdVzcCC3auG9NE4dRo3ezB8CDi4y4p%2BqJg%2FNQuy%2B4CFMUAHB4E%2BaE0gpJhrX5eqzLEhmVxGmYHvjIbi2XyufchA9OzFzdxkmUlkvsPb%2BwWuXLiCoGODo4z0SzDxaJBSpYzgxzpNG4aInWdIqo409im6laua1MpssqEC5zg3OI68zg3CJH7RyLF29yWbCQvYayP3sIfDzDNy7rF5Zh6qvcy7ZdSJzSjD9plcLYGQe1sPUmQoqXIhlX%2BL9yxvs5s9%2FZPo%2BUQE8eeDpzh7sl3%2FQ0%2Frux46O0VssLCRFYvPU5Jc%2FKFQ9Qb7kduJyxsmn67W4jtDx%2B8O0XqbBaZGZGC2teGXgIxlOQB7ZEcUv9CtbBg3Uo6%2BwTGR73qp2A0U0LXcAUDzGSbIN70H27TQ9NOJUEhUZ7QZetepS8ulhjXKpltqeZeEqGuevOVCNAdtYf64A9cJJ8exUUkzgmNKvlAF21oNmFEAcniAK%2FH0VYt6NAzUhfoUSiNZvhkSCoik2Hf8wiwI1Uf4fQCDmD7AQnz6eAwEpDjCI34fKBjqkAaAmcmc8KzWYJfWKOfK%2Fq76GPMVAWTlZx5NcsjwSH40Ia9Opv2EE0cNKRzAfHRgWQWZPpK3%2F9GiOrse6PKAPzIQzV3ocTh5FN4ZUu7o6grwEYOdTeXSQiP7Yh5Sdy%2BkJHeFebwNcUGsnmn1XsYuClhn7hBvMHDLzp7zhmxo7RRvmFeom3NF48YdRHeWK1fSaaMcl4q%2BR0%2B3Tzlk81BjliqXFyglG&X-Amz-Signature=944fa7cb5b1d174540f650309077ca2de9e4c2c18965922a1da3b78f776b1eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXHZAZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8AYKj6TXdH65iFVeVDtsO2hbh%2FtVnX2I%2FdCSQuf1G%2BQIhAKWkJpFpx4Q934RfkEnh1E2Zd%2FYUJdFqoi1SqlJVHUYqKv8DCHEQABoMNjM3NDIzMTgzODA1Igzc08j1U8ygEUzcmTgq3ANjxnF2Gv8pOLZuRBdYoeMaA9ECGBHDHcJpmwGk5at1DN6YSJlusbk0c4wFAk%2Fhy%2FwIP0wRmmXAzguiEn6v4gKGv1Yz0kskKs1KPdVzcCC3auG9NE4dRo3ezB8CDi4y4p%2BqJg%2FNQuy%2B4CFMUAHB4E%2BaE0gpJhrX5eqzLEhmVxGmYHvjIbi2XyufchA9OzFzdxkmUlkvsPb%2BwWuXLiCoGODo4z0SzDxaJBSpYzgxzpNG4aInWdIqo409im6laua1MpssqEC5zg3OI68zg3CJH7RyLF29yWbCQvYayP3sIfDzDNy7rF5Zh6qvcy7ZdSJzSjD9plcLYGQe1sPUmQoqXIhlX%2BL9yxvs5s9%2FZPo%2BUQE8eeDpzh7sl3%2FQ0%2Frux46O0VssLCRFYvPU5Jc%2FKFQ9Qb7kduJyxsmn67W4jtDx%2B8O0XqbBaZGZGC2teGXgIxlOQB7ZEcUv9CtbBg3Uo6%2BwTGR73qp2A0U0LXcAUDzGSbIN70H27TQ9NOJUEhUZ7QZetepS8ulhjXKpltqeZeEqGuevOVCNAdtYf64A9cJJ8exUUkzgmNKvlAF21oNmFEAcniAK%2FH0VYt6NAzUhfoUSiNZvhkSCoik2Hf8wiwI1Uf4fQCDmD7AQnz6eAwEpDjCI34fKBjqkAaAmcmc8KzWYJfWKOfK%2Fq76GPMVAWTlZx5NcsjwSH40Ia9Opv2EE0cNKRzAfHRgWQWZPpK3%2F9GiOrse6PKAPzIQzV3ocTh5FN4ZUu7o6grwEYOdTeXSQiP7Yh5Sdy%2BkJHeFebwNcUGsnmn1XsYuClhn7hBvMHDLzp7zhmxo7RRvmFeom3NF48YdRHeWK1fSaaMcl4q%2BR0%2B3Tzlk81BjliqXFyglG&X-Amz-Signature=630d57d9fa60111974f178e37a6d29e14927f90cff1f41ef9539d991cbc5ef1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

