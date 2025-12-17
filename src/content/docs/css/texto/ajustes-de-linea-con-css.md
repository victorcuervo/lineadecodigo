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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIWPH5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYU1DKHUZGOC5qPXJYdSI0g77wGwcYpRHRjxLtLe23mAiBekKRiB4b1q9JmSPsAdj3mGhffm1hVB4%2Bim%2Fmg7jE%2Bair%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM%2F0be3GCu%2B27u0BgnKtwD8IccDBgrak9URFEkk%2BHvrDZ9XVfTCTcIUsYzKsRF25ve6q%2BfLcXxlyRODH7Toj7RVK9q0cTCBVI3lbsJUxPvofMeWXwfI%2BMeNwk2SQD94PfJ%2FvAk5cD0QpwORO1pDNdZBHCBsskWwXIGSwIUomKMAvF8EizKse7nE7cgAhAue1EiuuxFXTR5ca4Q%2FWARelxq13SROpAVxCtYlYrxrldAS0y1GgweArXVwhFpuzwbeujvDB3oqd%2FU15%2FLGCxTpv9lNVWZfpzB3Aiw3mLK7Myg%2Fmu%2FKCggVfIEaWjpvrz82o8y8OPIaCtmava%2FzTAZB36%2FdtB1vru%2FGOkIORv78FZOoYmcH8TgsaLpcWeeW7%2FrrQFtWeINNVVp0Nrrmu%2FLFxvR%2F7ZmKRm1Ez4aNW4CawnU74UQluk88Q784k92rn1iP6GwG5gd12eCzAwgRJasPjUZRRFa4mYwNezngZZm5YgyNP81fn0WslYvYCeSp35Jsu5d7yGlNWBj5ZtXw0P2ibANwITMsJpH70yWBtKNRpw67PwbH3PrBO4icSDVWcfj4jx6xBbCaKNyQns9%2FQDyElyjTnhf2sd5DmqhTdZdPOjiVXGQcAlCNDbQ%2FiYOUAW9FU6UNSBMER%2BWHXZivcMwpOmIygY6pgG9KjZ33dhbGJTrOmyT%2Bmubgr%2FUy7TxSEmAnGdlmnfYAZEF8JnxKpi%2FjMkZ17kX%2FlP2z2cGMePwYIWhYrK5TuREIqwvjkP1Xd9A3p8Dfa1JsraISxkBjQzu%2BuBFD%2BjUkDsNekmfiJAdR56W3V7QVMe6PvnhTx7BrE96XNWmcWpiKEr9wXNmyBJcOTD9%2BagbydBA%2BqzNTAXdOwe049iZ%2FpbQiTCuBg%2Ff&X-Amz-Signature=5258f454cb91cc5246bd67cd8fb5860b192feb7d5741d0ed4b3edf6553a53145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIWPH5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYU1DKHUZGOC5qPXJYdSI0g77wGwcYpRHRjxLtLe23mAiBekKRiB4b1q9JmSPsAdj3mGhffm1hVB4%2Bim%2Fmg7jE%2Bair%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM%2F0be3GCu%2B27u0BgnKtwD8IccDBgrak9URFEkk%2BHvrDZ9XVfTCTcIUsYzKsRF25ve6q%2BfLcXxlyRODH7Toj7RVK9q0cTCBVI3lbsJUxPvofMeWXwfI%2BMeNwk2SQD94PfJ%2FvAk5cD0QpwORO1pDNdZBHCBsskWwXIGSwIUomKMAvF8EizKse7nE7cgAhAue1EiuuxFXTR5ca4Q%2FWARelxq13SROpAVxCtYlYrxrldAS0y1GgweArXVwhFpuzwbeujvDB3oqd%2FU15%2FLGCxTpv9lNVWZfpzB3Aiw3mLK7Myg%2Fmu%2FKCggVfIEaWjpvrz82o8y8OPIaCtmava%2FzTAZB36%2FdtB1vru%2FGOkIORv78FZOoYmcH8TgsaLpcWeeW7%2FrrQFtWeINNVVp0Nrrmu%2FLFxvR%2F7ZmKRm1Ez4aNW4CawnU74UQluk88Q784k92rn1iP6GwG5gd12eCzAwgRJasPjUZRRFa4mYwNezngZZm5YgyNP81fn0WslYvYCeSp35Jsu5d7yGlNWBj5ZtXw0P2ibANwITMsJpH70yWBtKNRpw67PwbH3PrBO4icSDVWcfj4jx6xBbCaKNyQns9%2FQDyElyjTnhf2sd5DmqhTdZdPOjiVXGQcAlCNDbQ%2FiYOUAW9FU6UNSBMER%2BWHXZivcMwpOmIygY6pgG9KjZ33dhbGJTrOmyT%2Bmubgr%2FUy7TxSEmAnGdlmnfYAZEF8JnxKpi%2FjMkZ17kX%2FlP2z2cGMePwYIWhYrK5TuREIqwvjkP1Xd9A3p8Dfa1JsraISxkBjQzu%2BuBFD%2BjUkDsNekmfiJAdR56W3V7QVMe6PvnhTx7BrE96XNWmcWpiKEr9wXNmyBJcOTD9%2BagbydBA%2BqzNTAXdOwe049iZ%2FpbQiTCuBg%2Ff&X-Amz-Signature=473481969ec6ecedd0944e30336817a855c937e9ffa9aca050f9ffa60e125a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

