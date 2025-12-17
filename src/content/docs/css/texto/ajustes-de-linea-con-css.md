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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF6VYSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4ZI2ElKMO44r07oS8exEakxkdVI5FfpQu%2Fa4vLWdFkgIgLQg7wAs276QdDvQ9tRW%2FpHTHwhJEFTsTEn%2BNyQHbrWQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN%2FEqoiTG909mOfBNircA%2Bv%2FOLoSndKNinidsOj3qLQFr%2FUgYaZWNIQlSjpplWeit8yBNoWxGn8gP%2FE9q89%2BFOD0Ij1ZGiboAndISfQYkV9nkjWrbnRavIPXjw%2B9z1eNxxg5UyjAg7rU794gDBLKkVulArSh71NoPQOplihINOIPvc5pZMZoH83lSMUkrLgB80940Xj%2FgAbv0Smh68Hixm8sehGzO%2BCNjWhEQbF5%2BJhqtVdccFSx%2Fna8ay5hy2iTYbcCkYsUYv03fjTzE2V2Wo0DAPB3%2BFVlPhDxfLAaBHp1HpY%2FfdQnOGfJGXOBbltB8DqSAUbyDj8MAG0Uvzvsf2GiB2wh0JsZ%2BU6ZPR%2BdDxqjrPbkmpjS%2FiGr1ujJ3JWXY5bd5IpHnst8J6SszIltR8drmfNScfa3Zk5wvaIsAVkNMZv%2B5HYNM0wa7oMWXebB1P1jTgrexsW2vgpw8qmd6d6R21pZK7gfeZG2bFqQaxDfboRogLrQ7NZS%2BaT3UXHj10YPnCMz2yPL1MRevNwfQJaaBIVPmx8Nh6WuzrZ8RCaI%2FpJ4NSQ3G%2BawyLd6T7UQp0xqy1HmE4y4V774D9j9GkpalvSfK30%2FlEz%2FetEt9CGUR9X6S7tELvY04P1v%2BS%2BI4K1AJO1KC8dxOAA9MJnRicoGOqUBmQQov3U6tY2om0S2TpP6kKqM%2BN0wyJniL1kn4VOkVZ30W7XKYmTPrHmU%2FiRiZ3lOwh9EslRrRmJI8%2F7E4XUFhA4jpU4e1xkIvnYw%2BaPJUw3kg03WgccETkb6Qgp3%2FdpWOlV7qiWpQlMawg1dPtnEeIvSNZ0YoF6WhThM9d3RxxOyngKwtKkXkW51TuDp2QJTzsPJv8Bfn6RPItoPgNyBcexClRmf&X-Amz-Signature=48b5703e244537c98e0f0541b412329dfb1a0c6ac3b157f1db27aae33585de82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF6VYSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4ZI2ElKMO44r07oS8exEakxkdVI5FfpQu%2Fa4vLWdFkgIgLQg7wAs276QdDvQ9tRW%2FpHTHwhJEFTsTEn%2BNyQHbrWQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN%2FEqoiTG909mOfBNircA%2Bv%2FOLoSndKNinidsOj3qLQFr%2FUgYaZWNIQlSjpplWeit8yBNoWxGn8gP%2FE9q89%2BFOD0Ij1ZGiboAndISfQYkV9nkjWrbnRavIPXjw%2B9z1eNxxg5UyjAg7rU794gDBLKkVulArSh71NoPQOplihINOIPvc5pZMZoH83lSMUkrLgB80940Xj%2FgAbv0Smh68Hixm8sehGzO%2BCNjWhEQbF5%2BJhqtVdccFSx%2Fna8ay5hy2iTYbcCkYsUYv03fjTzE2V2Wo0DAPB3%2BFVlPhDxfLAaBHp1HpY%2FfdQnOGfJGXOBbltB8DqSAUbyDj8MAG0Uvzvsf2GiB2wh0JsZ%2BU6ZPR%2BdDxqjrPbkmpjS%2FiGr1ujJ3JWXY5bd5IpHnst8J6SszIltR8drmfNScfa3Zk5wvaIsAVkNMZv%2B5HYNM0wa7oMWXebB1P1jTgrexsW2vgpw8qmd6d6R21pZK7gfeZG2bFqQaxDfboRogLrQ7NZS%2BaT3UXHj10YPnCMz2yPL1MRevNwfQJaaBIVPmx8Nh6WuzrZ8RCaI%2FpJ4NSQ3G%2BawyLd6T7UQp0xqy1HmE4y4V774D9j9GkpalvSfK30%2FlEz%2FetEt9CGUR9X6S7tELvY04P1v%2BS%2BI4K1AJO1KC8dxOAA9MJnRicoGOqUBmQQov3U6tY2om0S2TpP6kKqM%2BN0wyJniL1kn4VOkVZ30W7XKYmTPrHmU%2FiRiZ3lOwh9EslRrRmJI8%2F7E4XUFhA4jpU4e1xkIvnYw%2BaPJUw3kg03WgccETkb6Qgp3%2FdpWOlV7qiWpQlMawg1dPtnEeIvSNZ0YoF6WhThM9d3RxxOyngKwtKkXkW51TuDp2QJTzsPJv8Bfn6RPItoPgNyBcexClRmf&X-Amz-Signature=eabfe5278220f5aab3cc7be8416aa22e79c7000048f0ba5fc969a2401654a183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

