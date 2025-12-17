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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZB4X2XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK97Pjt%2BxRBn8TPECW2ZjRgvbKLTnBj%2BMWN4pgsjZzoAiB4ury9IF3aAtpadBnA3LgT4jDZVqhVC8ep0K6p9kbCnSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM6T6hIUwldD9iCqmuKtwD2Wo0a9nkqb1eybtP5x8XnDbSy9BZ3fTGhKxHC%2FFHW1EbFBMNplxMVGR3hTyc8i5DBI2z5MMO0TBtLUMvI9M0Hvn3SsNcAY%2B0sUllE2lGM94gAFtr9wfBl6gIn5qxHo0t1YzmW1ls1MahL5h4uHDD18VF3sBSmRmMdJiT6CGNKOZLF8905MJohpRhIEC%2FUdsOJuIY5%2Fp845PzIbf2DsfZXMpksDLy7vtiNM6bgME9Ehyaol8feJWUwmdqs71yKbfEMKWHMWlaaUAqTQJEwRM72R6gDS%2FdodrsYB%2BP4xhwOPkTG05%2F9Ed%2FrGjJiN7znGSHZ%2BRMamDntGXbLK82EC9o8bQGjSa4g6jOllY9vRiN5ncEDa7iuTpKqk52hgEa64i98n%2BnT%2FuGPd3BdloMtd2sxh%2BlOfTrOOXtAG0%2FT5AXBK2UPDM6hZgrTPMgQ8rLczBCvs9aJSqVM7R1ZGFgVRsOlp6axDnRfsynvcyk1gtj%2FYzIZcmZ5QipLIMPpS7dL6zdS1%2BSSaRRZqCnFEDrK1HUP%2Bg45jonTGovI3Q1QsRoUGX%2BkTHDfb6a9p1jZyGAZE9J5EPhqxmlrNYZWdkymKKnVIw90%2BokoiAIbQ6sWXjR9KIchMH6unVFSxXNcY8wqoOJygY6pgGBXIEQ%2BYZhEk2jU%2FLLOQIIWBJ8iwYjgyAyUH%2F8XEN2NYR0F8wcCn%2B2qc3Q%2FRXghcCU4OcD58Jt%2Fm0nv%2BMyCMay%2B0UzaaIQG3XbpkYokJ6ysky5t5NzFHIJIoWR%2FDs4duFiT8wc2iCKOUEoxbVCbRH7YCVUWI31QD0uREkXjb1SU54hGww0YA1TRMQlZS4wGLKtcj4VSF%2BBKYL9OctzUs%2FGWaDS%2F1lm&X-Amz-Signature=b447ef88a4b3c6e7e7e62115a4945278ed0a11d9581a4a55839ee8ecd4db7312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZB4X2XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK97Pjt%2BxRBn8TPECW2ZjRgvbKLTnBj%2BMWN4pgsjZzoAiB4ury9IF3aAtpadBnA3LgT4jDZVqhVC8ep0K6p9kbCnSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM6T6hIUwldD9iCqmuKtwD2Wo0a9nkqb1eybtP5x8XnDbSy9BZ3fTGhKxHC%2FFHW1EbFBMNplxMVGR3hTyc8i5DBI2z5MMO0TBtLUMvI9M0Hvn3SsNcAY%2B0sUllE2lGM94gAFtr9wfBl6gIn5qxHo0t1YzmW1ls1MahL5h4uHDD18VF3sBSmRmMdJiT6CGNKOZLF8905MJohpRhIEC%2FUdsOJuIY5%2Fp845PzIbf2DsfZXMpksDLy7vtiNM6bgME9Ehyaol8feJWUwmdqs71yKbfEMKWHMWlaaUAqTQJEwRM72R6gDS%2FdodrsYB%2BP4xhwOPkTG05%2F9Ed%2FrGjJiN7znGSHZ%2BRMamDntGXbLK82EC9o8bQGjSa4g6jOllY9vRiN5ncEDa7iuTpKqk52hgEa64i98n%2BnT%2FuGPd3BdloMtd2sxh%2BlOfTrOOXtAG0%2FT5AXBK2UPDM6hZgrTPMgQ8rLczBCvs9aJSqVM7R1ZGFgVRsOlp6axDnRfsynvcyk1gtj%2FYzIZcmZ5QipLIMPpS7dL6zdS1%2BSSaRRZqCnFEDrK1HUP%2Bg45jonTGovI3Q1QsRoUGX%2BkTHDfb6a9p1jZyGAZE9J5EPhqxmlrNYZWdkymKKnVIw90%2BokoiAIbQ6sWXjR9KIchMH6unVFSxXNcY8wqoOJygY6pgGBXIEQ%2BYZhEk2jU%2FLLOQIIWBJ8iwYjgyAyUH%2F8XEN2NYR0F8wcCn%2B2qc3Q%2FRXghcCU4OcD58Jt%2Fm0nv%2BMyCMay%2B0UzaaIQG3XbpkYokJ6ysky5t5NzFHIJIoWR%2FDs4duFiT8wc2iCKOUEoxbVCbRH7YCVUWI31QD0uREkXjb1SU54hGww0YA1TRMQlZS4wGLKtcj4VSF%2BBKYL9OctzUs%2FGWaDS%2F1lm&X-Amz-Signature=8b3f2655255c467467b81cfcd74e1e8b59b10cb269f8df8c927c0e3906157fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

