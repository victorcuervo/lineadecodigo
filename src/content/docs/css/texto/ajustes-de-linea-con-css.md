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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZBF7CE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zpsh8ucR1fY3vlk42zYERDoCWUjdPtxvK6SHIPaC9AiBbbStkPkwHwJowhhldQEiaaS7i%2BpORsiWt4kjM2wLE1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ0%2F%2F%2FdrJSoZcAiXhKtwDFLGg%2BkXdsqsDGUxOr3YJwx8nQOkIjz%2F5XlBuunO8zPJ1ItWjcSXvrhwQEURn3%2BwaQQxNyD28I5Supzft4cwgmASbERfOd%2BsoBL5nPH19%2FrtD%2BMvrCsMF%2BpLNiuIbjRYjcOSU4UeQ8%2BWdX0BcSjm8fsa4AlQ0pvAijWQxVpRPAHpfrU9h5fzld%2FWuT774Puj6lnq%2FqdnCEAAXVuic%2BUNY2MB%2FbKmUOVeOMzf4uIfHbNAmNlkdHvE6%2FNRDPHmmWWNQnItNmVw4Xs0k%2BYG2ueaQ5NOSZon%2FwRdFGjs2zD1kBpqIqSEVcl3CrBD5MjkRkmpS%2BAezQyzYwt1b9LYIpl9QO1%2FTpwmZ2cg25wHn5nFKlTvyiJ7%2B0j3hfCZWetPQAIBYxaMbxoaSP%2FmJIsEBsRsDsLTwqX%2B81ihXG8RintT7umH4R%2FP31%2B9i1gFKhbA4HRPPCfb5wfLOcJgrcx6h7YRDWHNqpB3Znrtm6rsqGIcTid96NVMBU%2BrT7JbFl2KjLESxEfix6s%2Bf%2BO%2BBRsKd%2FvNDHol2hyR9uuLlcH11JKuZ5MZjFZqDvjIiqbCkbUOX%2BF7O08Qbz1GAHTF%2BK9%2FX27gX22s%2FR2%2FY5TQXiefQaHtHjvS8Q1Igxs6VYeugcmUwyaCLygY6pgF4oCD8K3PpUaYzdneDVHqP9CND218DS83MZhJVj465zR3ssC5%2FoDEvCd1p6bhr%2FRwQwGagg%2BpoFjsdAzSRh%2Bm%2BItCa9epekLQd6f80e5zLzW6yOISNL8FVEb%2BYIQkUBmbYXPRshmNwh%2FQJPXp%2BL8ZI9hdVuWNKo2ynTZ7%2BZ4vT%2BkIBoME0DMRmPJUAx%2Fa%2BcqI6u57veZy38l8KI0pUS%2BSm7pSmw%2F3o&X-Amz-Signature=37e16d0c626df680261d5c6550ea61fb1f2ba0a76bb84d8bcaae98327dd9ad62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZBF7CE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zpsh8ucR1fY3vlk42zYERDoCWUjdPtxvK6SHIPaC9AiBbbStkPkwHwJowhhldQEiaaS7i%2BpORsiWt4kjM2wLE1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ0%2F%2F%2FdrJSoZcAiXhKtwDFLGg%2BkXdsqsDGUxOr3YJwx8nQOkIjz%2F5XlBuunO8zPJ1ItWjcSXvrhwQEURn3%2BwaQQxNyD28I5Supzft4cwgmASbERfOd%2BsoBL5nPH19%2FrtD%2BMvrCsMF%2BpLNiuIbjRYjcOSU4UeQ8%2BWdX0BcSjm8fsa4AlQ0pvAijWQxVpRPAHpfrU9h5fzld%2FWuT774Puj6lnq%2FqdnCEAAXVuic%2BUNY2MB%2FbKmUOVeOMzf4uIfHbNAmNlkdHvE6%2FNRDPHmmWWNQnItNmVw4Xs0k%2BYG2ueaQ5NOSZon%2FwRdFGjs2zD1kBpqIqSEVcl3CrBD5MjkRkmpS%2BAezQyzYwt1b9LYIpl9QO1%2FTpwmZ2cg25wHn5nFKlTvyiJ7%2B0j3hfCZWetPQAIBYxaMbxoaSP%2FmJIsEBsRsDsLTwqX%2B81ihXG8RintT7umH4R%2FP31%2B9i1gFKhbA4HRPPCfb5wfLOcJgrcx6h7YRDWHNqpB3Znrtm6rsqGIcTid96NVMBU%2BrT7JbFl2KjLESxEfix6s%2Bf%2BO%2BBRsKd%2FvNDHol2hyR9uuLlcH11JKuZ5MZjFZqDvjIiqbCkbUOX%2BF7O08Qbz1GAHTF%2BK9%2FX27gX22s%2FR2%2FY5TQXiefQaHtHjvS8Q1Igxs6VYeugcmUwyaCLygY6pgF4oCD8K3PpUaYzdneDVHqP9CND218DS83MZhJVj465zR3ssC5%2FoDEvCd1p6bhr%2FRwQwGagg%2BpoFjsdAzSRh%2Bm%2BItCa9epekLQd6f80e5zLzW6yOISNL8FVEb%2BYIQkUBmbYXPRshmNwh%2FQJPXp%2BL8ZI9hdVuWNKo2ynTZ7%2BZ4vT%2BkIBoME0DMRmPJUAx%2Fa%2BcqI6u57veZy38l8KI0pUS%2BSm7pSmw%2F3o&X-Amz-Signature=0128f39b2d4f56ad8ea2b157abd1de6b23b4021ac969788ab087a5b32000a137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

