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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IU6HQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9iPvA9zadAt6R9YE7uWHTA3GUOdcuAHP8GsUISCqQQAiBUenfE2w0r4kAOiLjTwcaiYFfHUN0qXEHIVPkQs%2BlkNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxpNLC76p3rsny9b0KtwDbQOT6bHPYzU7mOYA5I9TIsW7kRPwx6Evg7wDCJTmZXntH2ckRkCcV%2B%2BbDdf9zmEmOLEepDmWJ%2BQXgSYBf3JDTdk5mHnvOKFxmMcUb8AsRRCdBpYG4qbD7E2piapI3Uvvj60r%2Btdqm%2B%2BFBWJTom5HeSOvrV6xb8fRe4xYS0HWqVuVxVrlmd78cp%2BIOC7y0XscdQ5SRw%2Bp%2BwuKC%2FjbLtU0K6jMm9yw%2F4Kk7L74Na%2FGScHKDmbYDPy5Z18yEVVUuviH9L4mjQa%2Bpj4xeBAVKz6mxSIRFjy6hddnoKe4UNPCoqW3zU7rKrCjAZ8QuQMLbUD9KjdC%2FZmqqUZvH75vZgbgrJMQzp%2FF%2B9WRD46Aw5tDdoo9ZTBZSUtdEbCehf6ED9mneRQevsedkMPZP2zCZJMMTz%2B7XMIL%2BSamtnsi1%2FEoJqi%2B%2BSaWTLwRRupRKS6p7mh2cKNNOKstQicnw5RvRyJ2DmPpbSFDAZH1XK1ynFwhep82vKDpeQzpeF5NKWIMM%2FyR%2BwlRC%2BSsWALBn8l46mcY8DIXLxIjZ%2Fv%2BsPnqNbCmP5CG5%2F7FTz7xqcHZfnoaA52qi8arQ%2BthhnF5lauVr0WGzFgazf%2BA5QOp98VyC4%2FBAsamLx6%2Bq392zwLos5Mwps6IygY6pgHh8nnkKHtDEGKY1BKcAjKyH7Xqs0FYIfdrak6ofvxAXVELJb3QrnyBW1%2Fd4a4jdf2OysBX1TrEaZ3ZBP8N%2FoWMcZ0Wc19JFcdUtpH1uuplyRO6J2%2FiS5hzOIbM7mWzqkBcv6NE7V8wmzANocL5D91cAQyMB3j0pHXy%2Fb61WDA2%2BYr99XBgcLNcrxO4OvUHOXRZMPu07o23Tt2wHinkx062hUpDj3UP&X-Amz-Signature=c0f191af5e12b863647476168bf9d9d1f6358157498b6b9c82c0df22ffb1eca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IU6HQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9iPvA9zadAt6R9YE7uWHTA3GUOdcuAHP8GsUISCqQQAiBUenfE2w0r4kAOiLjTwcaiYFfHUN0qXEHIVPkQs%2BlkNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxpNLC76p3rsny9b0KtwDbQOT6bHPYzU7mOYA5I9TIsW7kRPwx6Evg7wDCJTmZXntH2ckRkCcV%2B%2BbDdf9zmEmOLEepDmWJ%2BQXgSYBf3JDTdk5mHnvOKFxmMcUb8AsRRCdBpYG4qbD7E2piapI3Uvvj60r%2Btdqm%2B%2BFBWJTom5HeSOvrV6xb8fRe4xYS0HWqVuVxVrlmd78cp%2BIOC7y0XscdQ5SRw%2Bp%2BwuKC%2FjbLtU0K6jMm9yw%2F4Kk7L74Na%2FGScHKDmbYDPy5Z18yEVVUuviH9L4mjQa%2Bpj4xeBAVKz6mxSIRFjy6hddnoKe4UNPCoqW3zU7rKrCjAZ8QuQMLbUD9KjdC%2FZmqqUZvH75vZgbgrJMQzp%2FF%2B9WRD46Aw5tDdoo9ZTBZSUtdEbCehf6ED9mneRQevsedkMPZP2zCZJMMTz%2B7XMIL%2BSamtnsi1%2FEoJqi%2B%2BSaWTLwRRupRKS6p7mh2cKNNOKstQicnw5RvRyJ2DmPpbSFDAZH1XK1ynFwhep82vKDpeQzpeF5NKWIMM%2FyR%2BwlRC%2BSsWALBn8l46mcY8DIXLxIjZ%2Fv%2BsPnqNbCmP5CG5%2F7FTz7xqcHZfnoaA52qi8arQ%2BthhnF5lauVr0WGzFgazf%2BA5QOp98VyC4%2FBAsamLx6%2Bq392zwLos5Mwps6IygY6pgHh8nnkKHtDEGKY1BKcAjKyH7Xqs0FYIfdrak6ofvxAXVELJb3QrnyBW1%2Fd4a4jdf2OysBX1TrEaZ3ZBP8N%2FoWMcZ0Wc19JFcdUtpH1uuplyRO6J2%2FiS5hzOIbM7mWzqkBcv6NE7V8wmzANocL5D91cAQyMB3j0pHXy%2Fb61WDA2%2BYr99XBgcLNcrxO4OvUHOXRZMPu07o23Tt2wHinkx062hUpDj3UP&X-Amz-Signature=e52c2b092c01ecb17d08490171a02dc3d3f1dfa7b93d47b34219f014dd717afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

