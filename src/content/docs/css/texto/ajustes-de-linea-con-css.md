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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPY7KANI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhJzCk9hV5ilLdLHetrnAFuyODn6uCNCUkHWYFgOhGjAiA5QdASSoDE2idLi0fXmagF7VcuvluO6KtjYccP2DRUZyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMkuJzAxfwVwQ3rqvaKtwDHVO0Wopaqbrg9JzkUcAci9Kp9w2X25NqoNJSvn515H9A8c4A3IbrlQSex%2BIAl0UwwGkJNVtZi7uqrr%2BaBi9ZJD86%2FVOINTt0HUBVP3JEEn3i54d%2BLVz4IfTaQG7UhesV6Mbl4Z2C7WOOb8GCkzwxcqAQZXevv3F2MzVgb65ipr2hjeMNosSwnYajmmFeDac9KJLffGXF%2BbGyMciWWfht0A%2B%2BZH1GFgrh4%2BGDvbyM3VUzw55tF%2FForm0%2BECtYa6pVBX%2FrMZDfOrVYozFFb5fNxgHdIlJGFRh5J2YOQIA4CVQqCsTubwV4BYl28nlbYdod%2FYjFRgXEQhd5HRFl%2F02b80JJVAEjRkiNxyL3kPYfi4grG%2BRsksrMw6luiTY1J6pmcJ7OCVY1%2BdI%2BIxAfBV6rbILmZPhVWyvPL%2FW1r3J4S1TRBCGOsSvBfOWePuNdJ7EYsAfVyhT%2BNpEJL8y1GtlxrTmUIn031B%2BaIejESDGU58YPs82zryGDr6qG1eYn6wzHTwU0VNen4DYF61ZvV6EIMWkPqtLUwwOOLdemXR8HRkhWEPBniOt5q2ND4bmEnLofKoZFzhLu8UXKG0dkwDKXCtrCz1Pk20CGAJw9gV31jb55%2FO1DENOGBwzuYu4wm%2BmIygY6pgEshX4z%2BMQ18KNv2QQPQ%2FPTpy4hyZyfdqQJG0nykHiibOsbCL5%2FkvTGKrOOQKm9%2BOrVoXulQ%2FymCr6YLcvnCT18OlKllu8N8j0uEpOK8JbLpOxgnhzVwCHmiD64ddPtIHQUWPCoB7VecyIyKUYzapfTIffm69QICDKxRXquiL%2B4VyHLRrS%2BebuoPiNeFCh94lFIok3t%2F%2FOdoLWYmIjXvO5S4UahVFUv&X-Amz-Signature=eaf87c79a6be98adc8b45880ac2169697df575e83a7cf2e80cf0cdf7bffc7b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPY7KANI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhJzCk9hV5ilLdLHetrnAFuyODn6uCNCUkHWYFgOhGjAiA5QdASSoDE2idLi0fXmagF7VcuvluO6KtjYccP2DRUZyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMkuJzAxfwVwQ3rqvaKtwDHVO0Wopaqbrg9JzkUcAci9Kp9w2X25NqoNJSvn515H9A8c4A3IbrlQSex%2BIAl0UwwGkJNVtZi7uqrr%2BaBi9ZJD86%2FVOINTt0HUBVP3JEEn3i54d%2BLVz4IfTaQG7UhesV6Mbl4Z2C7WOOb8GCkzwxcqAQZXevv3F2MzVgb65ipr2hjeMNosSwnYajmmFeDac9KJLffGXF%2BbGyMciWWfht0A%2B%2BZH1GFgrh4%2BGDvbyM3VUzw55tF%2FForm0%2BECtYa6pVBX%2FrMZDfOrVYozFFb5fNxgHdIlJGFRh5J2YOQIA4CVQqCsTubwV4BYl28nlbYdod%2FYjFRgXEQhd5HRFl%2F02b80JJVAEjRkiNxyL3kPYfi4grG%2BRsksrMw6luiTY1J6pmcJ7OCVY1%2BdI%2BIxAfBV6rbILmZPhVWyvPL%2FW1r3J4S1TRBCGOsSvBfOWePuNdJ7EYsAfVyhT%2BNpEJL8y1GtlxrTmUIn031B%2BaIejESDGU58YPs82zryGDr6qG1eYn6wzHTwU0VNen4DYF61ZvV6EIMWkPqtLUwwOOLdemXR8HRkhWEPBniOt5q2ND4bmEnLofKoZFzhLu8UXKG0dkwDKXCtrCz1Pk20CGAJw9gV31jb55%2FO1DENOGBwzuYu4wm%2BmIygY6pgEshX4z%2BMQ18KNv2QQPQ%2FPTpy4hyZyfdqQJG0nykHiibOsbCL5%2FkvTGKrOOQKm9%2BOrVoXulQ%2FymCr6YLcvnCT18OlKllu8N8j0uEpOK8JbLpOxgnhzVwCHmiD64ddPtIHQUWPCoB7VecyIyKUYzapfTIffm69QICDKxRXquiL%2B4VyHLRrS%2BebuoPiNeFCh94lFIok3t%2F%2FOdoLWYmIjXvO5S4UahVFUv&X-Amz-Signature=44bed0f54d73d504cba59526ea2434fd103d3baafd097137f22810af37d8f99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

