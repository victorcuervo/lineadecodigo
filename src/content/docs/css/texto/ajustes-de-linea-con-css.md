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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWPKOVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrql4eaQScf5eTw35jLfLjaL8266zaIijOqWi5FkVUKAiAT3r7Yz0e4VQF28C5Qu%2Fmi6CAYc9Svzu8nzEF11dkW1yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIEh%2FtQThFJ5iBSHKtwDrxoD6s3LeVSeu8GAmuGNP9N%2F4Va%2Bjli46I40Jv2%2BcN91%2FWxh6LYt8tFKJ7TVRxVJZfPgPaT4mNwfrQbg1dlftg1299vqFwK3HFO3boU%2F%2B4FBP7DuJA5haZqsm7Jv4H6eGE%2FmO8fbousNo0YJS2EHNi40Xfly9aMsO8yiQ0lDMmxpg0tIS1TEGaZt5q2x4SWS33pCH0eK%2Blp4PQ%2F%2FHeLgtPfL2gagXKzOAl4ERE6YflRL%2F7SvZYCUs3DKR9BggEF0Bn6ctPNyAnvghoYfXnZYuhNpe0C3gKCZ1Qe5rghuJGfAXj%2BIyfz8%2B%2FhFisIK7ENHSvq6WgmBQnkzQOXo4VgGkER6KhjiADqqVVcVF1RdFfhQT2Le043eSSh0MmP7aYP%2B%2F0bjwtu08IHlAGwviXGDHqyKOHqc2YTdZHLlTO6IW7rkB4QJYyvdud9d0RfVUjFwa7eHQi8BZwcEfO4ZlZP9e8u4b%2FubJWkJEEfsO3jhGLbvtbUuDWNX0Yh64HyqXVxNcqZm1SNEcNrZoViw2sprak8VTQldYHgilYVSCpUsHptPaRIO6E0J53SnIv58bGWJVGY3KS2ZeyF44WPji857lLTJtdUHiJv0mxMW49rB7DSgKz3orAIzgEL0a20woZ%2BLygY6pgEjWpm5hqN3IVnFNkk0H%2FDzY4r%2BTKRTVT70l3JHsx88jUvZsR3uMbgbAFn3oChJC%2BQ5FhJhOyaU3H%2BMq%2B5tZnsHXs%2BJUVkZnDgjOn9tB1%2BsyRxeBlDA%2F0ztphrOehp9E3utC7z2o8PNudbN%2Bdc4JUasWPNM%2B1NkhLTaBhjxdaSq7v5I8LOjQgKweslfF1Eij8rkz8x6AMA0ag08hLWRpjlhdnJQWqZu&X-Amz-Signature=fe067867623e160c4c4cf5fdb4d082a300858dfb4d51d5bb1c4d548d7823202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWPKOVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrql4eaQScf5eTw35jLfLjaL8266zaIijOqWi5FkVUKAiAT3r7Yz0e4VQF28C5Qu%2Fmi6CAYc9Svzu8nzEF11dkW1yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIEh%2FtQThFJ5iBSHKtwDrxoD6s3LeVSeu8GAmuGNP9N%2F4Va%2Bjli46I40Jv2%2BcN91%2FWxh6LYt8tFKJ7TVRxVJZfPgPaT4mNwfrQbg1dlftg1299vqFwK3HFO3boU%2F%2B4FBP7DuJA5haZqsm7Jv4H6eGE%2FmO8fbousNo0YJS2EHNi40Xfly9aMsO8yiQ0lDMmxpg0tIS1TEGaZt5q2x4SWS33pCH0eK%2Blp4PQ%2F%2FHeLgtPfL2gagXKzOAl4ERE6YflRL%2F7SvZYCUs3DKR9BggEF0Bn6ctPNyAnvghoYfXnZYuhNpe0C3gKCZ1Qe5rghuJGfAXj%2BIyfz8%2B%2FhFisIK7ENHSvq6WgmBQnkzQOXo4VgGkER6KhjiADqqVVcVF1RdFfhQT2Le043eSSh0MmP7aYP%2B%2F0bjwtu08IHlAGwviXGDHqyKOHqc2YTdZHLlTO6IW7rkB4QJYyvdud9d0RfVUjFwa7eHQi8BZwcEfO4ZlZP9e8u4b%2FubJWkJEEfsO3jhGLbvtbUuDWNX0Yh64HyqXVxNcqZm1SNEcNrZoViw2sprak8VTQldYHgilYVSCpUsHptPaRIO6E0J53SnIv58bGWJVGY3KS2ZeyF44WPji857lLTJtdUHiJv0mxMW49rB7DSgKz3orAIzgEL0a20woZ%2BLygY6pgEjWpm5hqN3IVnFNkk0H%2FDzY4r%2BTKRTVT70l3JHsx88jUvZsR3uMbgbAFn3oChJC%2BQ5FhJhOyaU3H%2BMq%2B5tZnsHXs%2BJUVkZnDgjOn9tB1%2BsyRxeBlDA%2F0ztphrOehp9E3utC7z2o8PNudbN%2Bdc4JUasWPNM%2B1NkhLTaBhjxdaSq7v5I8LOjQgKweslfF1Eij8rkz8x6AMA0ag08hLWRpjlhdnJQWqZu&X-Amz-Signature=0e139402fd72bc18f2f43e4d36a179fcf48fb2f041fc92341e8d2a7cf63367ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

