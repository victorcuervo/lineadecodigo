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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEMP6B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bc3Ne0cMcuy%2BImqOWFzlLo5U9Nnc0IelGH%2BWlq6BucAiEAvWK0GqM%2FwmbB10AtiThdGwULpYLq82%2FHuC8P74JXwMEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGRmdZOFXTBz4RicFyrcA4KWZj%2FinwnbjVGc2BMd0O3QwGZfHRTm0mQRu4Ttq%2B8DWpJn6ffMyAnYAb%2FC2JQ8MEjnTxQvHRgFkI73tcrUvLga0z%2BS5FjU5pljl6EDXTRRF3PnouPzg9KUu1IfgpJ0v7Ev1D07OI4m1oeOvFwgYyZ%2BbWf1PqZTg30BpZZEa9d5aNyrcG6AexzxPHG7z9qPmjPxE%2FJ96o0NmZCa094eCgZ5AmMmYMIOmphNUD%2BeixBjTiHGRDLJfsxpsoALCL2foWAk4dSQ1c2xrB%2Fi1cjDQohib6k5JdeCW0sxQnnNNzDCK7eWsLEoZaCIOLlQf8ArwcRyZDhj3%2FeXAk40vL7yoK7fHmMrzsVvAkPx6khdoBOjwAzLUqsIle7m1iJ4UCYNcDmO1EbvuO5HHtzBj%2Ft8AzSTtPIZjGvcgK%2BQxnd8PY8jvOJCT1DgmfMm2hiDQ0rhpodtK7rfdBxUCsZeVKjtNawcmlVEogneKKvuHv7Wn3O%2F5xs0CM4SVjGorUfH6Gum0OK%2Fasfnw5PSBVjLnDRzmneLj9aRjAVIJw0mus%2FCjkhWwSmkwuoGO%2FjpPOOPY%2FfrNSl7AGLhmHcgwr45NXGnS24qRXWvaOwWJELq162WLNUSnCcB1i5gQNoz%2FyzBMKWdicoGOqUBhD1NXEK6VGRC0HIXI7lyYsElrZZvO6m%2BjonEXrbwmy%2FqNMG4vQIi2J7zaSS%2FBwdX%2FNDT4HRe8CLsyIu7uEcjfHBA0t2qTT2R5ZimYXR%2FCDiFFwMKlp6iq8zZauAM2JAgDlIXyQQZkRCDy27cDv%2BdyiW1ZDIJzdt1EqvZ%2FtMNctuCTx5zNkgk%2Be9Ut9IXzalKykPFLM%2B5T13jbpUAmUn0JI%2FItpyM&X-Amz-Signature=cc6993ab7284c9fb52ba4dfe50600b59520502c2489c66e8ab1dc2132d4d9428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEMP6B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bc3Ne0cMcuy%2BImqOWFzlLo5U9Nnc0IelGH%2BWlq6BucAiEAvWK0GqM%2FwmbB10AtiThdGwULpYLq82%2FHuC8P74JXwMEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGRmdZOFXTBz4RicFyrcA4KWZj%2FinwnbjVGc2BMd0O3QwGZfHRTm0mQRu4Ttq%2B8DWpJn6ffMyAnYAb%2FC2JQ8MEjnTxQvHRgFkI73tcrUvLga0z%2BS5FjU5pljl6EDXTRRF3PnouPzg9KUu1IfgpJ0v7Ev1D07OI4m1oeOvFwgYyZ%2BbWf1PqZTg30BpZZEa9d5aNyrcG6AexzxPHG7z9qPmjPxE%2FJ96o0NmZCa094eCgZ5AmMmYMIOmphNUD%2BeixBjTiHGRDLJfsxpsoALCL2foWAk4dSQ1c2xrB%2Fi1cjDQohib6k5JdeCW0sxQnnNNzDCK7eWsLEoZaCIOLlQf8ArwcRyZDhj3%2FeXAk40vL7yoK7fHmMrzsVvAkPx6khdoBOjwAzLUqsIle7m1iJ4UCYNcDmO1EbvuO5HHtzBj%2Ft8AzSTtPIZjGvcgK%2BQxnd8PY8jvOJCT1DgmfMm2hiDQ0rhpodtK7rfdBxUCsZeVKjtNawcmlVEogneKKvuHv7Wn3O%2F5xs0CM4SVjGorUfH6Gum0OK%2Fasfnw5PSBVjLnDRzmneLj9aRjAVIJw0mus%2FCjkhWwSmkwuoGO%2FjpPOOPY%2FfrNSl7AGLhmHcgwr45NXGnS24qRXWvaOwWJELq162WLNUSnCcB1i5gQNoz%2FyzBMKWdicoGOqUBhD1NXEK6VGRC0HIXI7lyYsElrZZvO6m%2BjonEXrbwmy%2FqNMG4vQIi2J7zaSS%2FBwdX%2FNDT4HRe8CLsyIu7uEcjfHBA0t2qTT2R5ZimYXR%2FCDiFFwMKlp6iq8zZauAM2JAgDlIXyQQZkRCDy27cDv%2BdyiW1ZDIJzdt1EqvZ%2FtMNctuCTx5zNkgk%2Be9Ut9IXzalKykPFLM%2B5T13jbpUAmUn0JI%2FItpyM&X-Amz-Signature=621c00d6fb5eee1e17c6c8434f123df4a517c5a4af7b4a776681259fe7b23c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

