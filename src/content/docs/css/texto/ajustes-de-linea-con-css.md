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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAAX3BQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FLafO3jbBO%2BTu9aIcz0XfKKGf0hxaaPCDnSQxOW5vRAiEAqjoAyWukvCtRBiF2cMk8TXbySiZ8HkrcT5oiGp2RoJMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNb99el6xGO5uzfHoyrcA%2BqMsojL1RuBY749%2B30sAOXTi6%2BQQEE5KT4jkn63SoMIJX8TEhyo4fHqVI0iLQAN5%2FLPPea2vRG8dCb%2FBuKnQXKNjP%2FlA6CDu8i%2FNtMeocrnL69c51YCBx3mvQBtWc4vnoghYzq0CeGE9veqegQo578gNNwUiNFUTxosLrA1wauxBS32eiZmIUbRlGlkxiVsoNwKnN38hxFYgPGdGI9UEPxJLEHHWlc1TRlr2InJzLtramzvtGNx7k%2F1pbaC8FclY70JGOHUv23oQSi7TCwHJ%2FCnaWVtOsM0EECMuBJ8PnWPOsfFuRCFcSj8WPpk5i6syoDY8WUq4hQDy6gcMaqb6yVTvIASxAbGYGhVe4%2Bp2u4VkgM2TSAJrFiwgIOyiGOstXYqw0jcsGPaY8G%2Bp3Q3tfNULSMOp%2Bg%2ByV75IjpMEiMkfk6%2BaFsWKtlslWXcNUruOmh5rSTAWEGKJV914O4SFvhEAmwFl7fVgaiSKeGAMFp3fGab5TtWnf6MuJtg8SmyIt5kqlSreM6FAc6MF%2F1v5O7ZdmBdnjxEy2g2OLIzn5oN1LdavRuCL9wY6JzUOcgr0pS7U86JsC3YLtTHgBFFyciLqmP%2BrJBqcoqaPXWWCpN2tJ5OgCxh6zNi%2BbUCMLGqisoGOqUBJh1BXS8Do2KIx9NaxkfBQtI%2FLBf2zOhr4g0OiM%2F6Z3iIc3Vr6kM0dOVosirsNMCTLm34dWsi7HH2TT5ehwpIZlYh7d%2FL0jNbbPl1hq1nxyuuB8otXRKlDvGreOg%2FpAo8x2Cdl782OG0J2NkrN2rHBQ3vFwe524nw05TEvcXkqX9fzPFbqzjFd4BdsWfmZfs4tVZv3JFSRDCkKthDIGLINHvg%2FuiP&X-Amz-Signature=e389035b5d1e885d9b3c8f4a2913729771868ff5d30e4b84c668d3cb25b7ea63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAAX3BQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FLafO3jbBO%2BTu9aIcz0XfKKGf0hxaaPCDnSQxOW5vRAiEAqjoAyWukvCtRBiF2cMk8TXbySiZ8HkrcT5oiGp2RoJMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNb99el6xGO5uzfHoyrcA%2BqMsojL1RuBY749%2B30sAOXTi6%2BQQEE5KT4jkn63SoMIJX8TEhyo4fHqVI0iLQAN5%2FLPPea2vRG8dCb%2FBuKnQXKNjP%2FlA6CDu8i%2FNtMeocrnL69c51YCBx3mvQBtWc4vnoghYzq0CeGE9veqegQo578gNNwUiNFUTxosLrA1wauxBS32eiZmIUbRlGlkxiVsoNwKnN38hxFYgPGdGI9UEPxJLEHHWlc1TRlr2InJzLtramzvtGNx7k%2F1pbaC8FclY70JGOHUv23oQSi7TCwHJ%2FCnaWVtOsM0EECMuBJ8PnWPOsfFuRCFcSj8WPpk5i6syoDY8WUq4hQDy6gcMaqb6yVTvIASxAbGYGhVe4%2Bp2u4VkgM2TSAJrFiwgIOyiGOstXYqw0jcsGPaY8G%2Bp3Q3tfNULSMOp%2Bg%2ByV75IjpMEiMkfk6%2BaFsWKtlslWXcNUruOmh5rSTAWEGKJV914O4SFvhEAmwFl7fVgaiSKeGAMFp3fGab5TtWnf6MuJtg8SmyIt5kqlSreM6FAc6MF%2F1v5O7ZdmBdnjxEy2g2OLIzn5oN1LdavRuCL9wY6JzUOcgr0pS7U86JsC3YLtTHgBFFyciLqmP%2BrJBqcoqaPXWWCpN2tJ5OgCxh6zNi%2BbUCMLGqisoGOqUBJh1BXS8Do2KIx9NaxkfBQtI%2FLBf2zOhr4g0OiM%2F6Z3iIc3Vr6kM0dOVosirsNMCTLm34dWsi7HH2TT5ehwpIZlYh7d%2FL0jNbbPl1hq1nxyuuB8otXRKlDvGreOg%2FpAo8x2Cdl782OG0J2NkrN2rHBQ3vFwe524nw05TEvcXkqX9fzPFbqzjFd4BdsWfmZfs4tVZv3JFSRDCkKthDIGLINHvg%2FuiP&X-Amz-Signature=915bda1c8a8c06839a89c1de669080a8c8c304b2ede666786716215c52d5ffad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

