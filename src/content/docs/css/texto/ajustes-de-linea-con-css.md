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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENHV7LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1rQ%2BqF8WS0A4fZFaRZl3ASe6G7nAQo%2FevTWYdRSnK%2BAiEArOVftlVFdDy3di0T7m1HkF5clSensJxyrxTGZQ6SbiMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD1e%2FbRgwR8EcYOgHCrcA%2FgVPBHe3lKk9SVl1KpA9VJzNwCdeuNqFTJ61hz1EOmdPnMcyEgLP6BHBEGMtUM9kzIy%2BdWuVUo9q%2BDXzOHxcZ7deP11ND96xC7oGuN%2BFu%2Bd3KSy16R43tNETGDXXlyoa7p6GLm9jqfFyewWq8OA7axl6epBHXpDHVphC8vy9M%2BMSaakgHiM5IZhQM97JnHQ%2FHqNxHeAGNCG48ysA5MhUyO2oMwKMW4PQoZIcTdigPvbr8YxR24A0YX3%2FMh67TAZWXTnulV3GNg%2By3EqkoO2A9sYJ9SJ3IoGEIUaME24qUwj%2FsQgE%2FZgtCTbesv%2FbIiKVemT%2FK%2FSG1VRZyrwnTRu%2FoJm1eWuU4nFEyb%2FSpIot2dvEElXerYQyYXmhyD8WGyMVXGD0UZ4t9RFNygcEbKzxzsNi5YD2uKH5kIDsI%2BpnXofV5C6QoxlGaGsHbarlhjlJPrQllFlqn3QkhNdSeUJuNJyqqGpU%2FkLKpoayz4V%2FXXdCn7PhiZYf2FjgcURdLN0N2Jna4fNRDccOZYQfpW1k%2BSDq0mmXz6TEjSVxf6Yrgh4LN6phEgdedFgT0kOFZcaxnOhXRtdtkmQzcqS6561OSdvxif9GuIbwU1ekMdmxZ60IgyZYPe8LpFZ%2BTWcMPaBicoGOqUB4gy9eqk3EggP%2F3vgQi%2BmIyD1GtZT6msOHmwfabchPPwrMf9Sj4pxK%2BUMML4hKom5Uljy8c5OTKR1H4azdB8IQUUZRITf4zCcmTJwt%2B8xYCuKqRTQUovNX4S47%2FFAAkTQUmi2xzNfRr4ltd0AoycXCoFfj7C5T8tU4P4YaeMVEJ0NJbF94LuIQyyqkqwuHLpjUgZiRuYZ6qJzMhc5Tzxze%2Bt9Np3x&X-Amz-Signature=4e21a7602c3994844fbf1836b3be04d041962c9348f72cb05ab7941235f120c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENHV7LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1rQ%2BqF8WS0A4fZFaRZl3ASe6G7nAQo%2FevTWYdRSnK%2BAiEArOVftlVFdDy3di0T7m1HkF5clSensJxyrxTGZQ6SbiMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD1e%2FbRgwR8EcYOgHCrcA%2FgVPBHe3lKk9SVl1KpA9VJzNwCdeuNqFTJ61hz1EOmdPnMcyEgLP6BHBEGMtUM9kzIy%2BdWuVUo9q%2BDXzOHxcZ7deP11ND96xC7oGuN%2BFu%2Bd3KSy16R43tNETGDXXlyoa7p6GLm9jqfFyewWq8OA7axl6epBHXpDHVphC8vy9M%2BMSaakgHiM5IZhQM97JnHQ%2FHqNxHeAGNCG48ysA5MhUyO2oMwKMW4PQoZIcTdigPvbr8YxR24A0YX3%2FMh67TAZWXTnulV3GNg%2By3EqkoO2A9sYJ9SJ3IoGEIUaME24qUwj%2FsQgE%2FZgtCTbesv%2FbIiKVemT%2FK%2FSG1VRZyrwnTRu%2FoJm1eWuU4nFEyb%2FSpIot2dvEElXerYQyYXmhyD8WGyMVXGD0UZ4t9RFNygcEbKzxzsNi5YD2uKH5kIDsI%2BpnXofV5C6QoxlGaGsHbarlhjlJPrQllFlqn3QkhNdSeUJuNJyqqGpU%2FkLKpoayz4V%2FXXdCn7PhiZYf2FjgcURdLN0N2Jna4fNRDccOZYQfpW1k%2BSDq0mmXz6TEjSVxf6Yrgh4LN6phEgdedFgT0kOFZcaxnOhXRtdtkmQzcqS6561OSdvxif9GuIbwU1ekMdmxZ60IgyZYPe8LpFZ%2BTWcMPaBicoGOqUB4gy9eqk3EggP%2F3vgQi%2BmIyD1GtZT6msOHmwfabchPPwrMf9Sj4pxK%2BUMML4hKom5Uljy8c5OTKR1H4azdB8IQUUZRITf4zCcmTJwt%2B8xYCuKqRTQUovNX4S47%2FFAAkTQUmi2xzNfRr4ltd0AoycXCoFfj7C5T8tU4P4YaeMVEJ0NJbF94LuIQyyqkqwuHLpjUgZiRuYZ6qJzMhc5Tzxze%2Bt9Np3x&X-Amz-Signature=261d10fd3d114aa78673585be20e976e318c0d1e346690cbb7fa421c99e2f620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

