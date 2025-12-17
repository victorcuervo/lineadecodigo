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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FXM3EX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F2Qa44EpHq2SsuoVy%2Bce4qQpFRQtq2tMTvCuev9tIwIhAPv6Q%2BDXvWZaHyTT4Pj00vd5ir8PlymL4z%2FK5HGNJ2%2BnKv8DCHwQABoMNjM3NDIzMTgzODA1IgwN%2FIX2o6qiR2HKWFEq3AMCCO5p1JvsAyD0KNRvrp3IS95PPd0IuPYx2vNdIK3w%2FwX0MdtXcF6bpo77QmmTLNCvV0DW8%2FHqxcQ%2BreP%2FMJmoRyqPNqp6yJh8PtogbNjnJg15QeGTL4UVdpDBQDW8GwyT%2FhFyWm3058v7W52nlSTyAIT3S48dZm%2FdttGP%2FyfqoGAFzHRplbOiMwelfC0HiGZc8xrVdZrEtANZjyc7Y9CIbkgx7NJLwytaUQryFzhQDXxSD%2BYoyJq1BRmD2bN7qBatFTh9ItA8GSeEF%2Fu%2F5z9r3V5dh0YqEiwNFk0BBRQUlRLj4pWv8WCXglyH%2BR6fHUBn%2FKVRhVsfJraxJeT971UjwxUxtaD3GL7OF94%2FrfeaS0Mp75rpDPtcircPDb%2F9DmDFYHIP23fIpCPfHSZLpxosvWTivpZ6EKXGP4G4Ts5v6TRKPe0wQGKcIP8kIMW1pE37CJLQYUi8qmzCbHq7jz%2Bib8%2FvRvMlvpoMpwwejWc4%2BcrdzDBpBeHdSDo5vNt92vn05K%2BBJpALMiTMpLOb81%2BncYqYmzT93NDL40QEHjsvl6evjAdMdt38%2FUvCkWondMWL5nh75ZvV3%2BnBmYutqObIdGOzRIOIiP7VCfBuXDWZJQ51ToB2BveMAvItEjD%2BjorKBjqkAczG88R2AgYvPRpmD3%2FmtdItBWRqTzYDRl0sPsoEBOJlx9kA85PgKnj%2FENupbF9urBRCav%2F26gRBJo9lNe%2BkJdxD%2BQB2TA5s0L6Y3e2IMjQu9XW2D5ML5fv09NPXqkqA8b4icZy50iIqCkYAQoqSscaLWnnN8B4OwDKK66TbfmUNyhSifpN1zPyo%2Fi6e5ciskkOjiGCBfO%2F1V1vjYVE4oMvB%2FoJt&X-Amz-Signature=633d6a80188ad092e071af2ed15a12cb8fdca5c8c7819df8d226e8864c67c38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FXM3EX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F2Qa44EpHq2SsuoVy%2Bce4qQpFRQtq2tMTvCuev9tIwIhAPv6Q%2BDXvWZaHyTT4Pj00vd5ir8PlymL4z%2FK5HGNJ2%2BnKv8DCHwQABoMNjM3NDIzMTgzODA1IgwN%2FIX2o6qiR2HKWFEq3AMCCO5p1JvsAyD0KNRvrp3IS95PPd0IuPYx2vNdIK3w%2FwX0MdtXcF6bpo77QmmTLNCvV0DW8%2FHqxcQ%2BreP%2FMJmoRyqPNqp6yJh8PtogbNjnJg15QeGTL4UVdpDBQDW8GwyT%2FhFyWm3058v7W52nlSTyAIT3S48dZm%2FdttGP%2FyfqoGAFzHRplbOiMwelfC0HiGZc8xrVdZrEtANZjyc7Y9CIbkgx7NJLwytaUQryFzhQDXxSD%2BYoyJq1BRmD2bN7qBatFTh9ItA8GSeEF%2Fu%2F5z9r3V5dh0YqEiwNFk0BBRQUlRLj4pWv8WCXglyH%2BR6fHUBn%2FKVRhVsfJraxJeT971UjwxUxtaD3GL7OF94%2FrfeaS0Mp75rpDPtcircPDb%2F9DmDFYHIP23fIpCPfHSZLpxosvWTivpZ6EKXGP4G4Ts5v6TRKPe0wQGKcIP8kIMW1pE37CJLQYUi8qmzCbHq7jz%2Bib8%2FvRvMlvpoMpwwejWc4%2BcrdzDBpBeHdSDo5vNt92vn05K%2BBJpALMiTMpLOb81%2BncYqYmzT93NDL40QEHjsvl6evjAdMdt38%2FUvCkWondMWL5nh75ZvV3%2BnBmYutqObIdGOzRIOIiP7VCfBuXDWZJQ51ToB2BveMAvItEjD%2BjorKBjqkAczG88R2AgYvPRpmD3%2FmtdItBWRqTzYDRl0sPsoEBOJlx9kA85PgKnj%2FENupbF9urBRCav%2F26gRBJo9lNe%2BkJdxD%2BQB2TA5s0L6Y3e2IMjQu9XW2D5ML5fv09NPXqkqA8b4icZy50iIqCkYAQoqSscaLWnnN8B4OwDKK66TbfmUNyhSifpN1zPyo%2Fi6e5ciskkOjiGCBfO%2F1V1vjYVE4oMvB%2FoJt&X-Amz-Signature=e197cc9b727b81d5e0c0ba1f1e358dacb3ee0206c094d0099e03aff48f46b8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

