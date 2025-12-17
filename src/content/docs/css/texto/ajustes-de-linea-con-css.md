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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHWT4KF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJCRN01Yecs5uUqU4SmAP3%2FPG1eWpo4mtTAMHr5MPEyAiEAuAvB2CZ8MTYKH7V8sqGoU4nts309ibDRC70jekAIq0Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLxt8EhFGRCW58q0fircA%2BKsBGGG3EX7%2BPyDf51IRQQXs8F4F%2F7ACaqDzRy01uF45cxf%2B525mdyC4c6LcHoXdvLqqxNNCeQwAPiR%2BOiFseKjQOddRl4Uu4yb%2BUcMWLkfmWvrOIKKH7AfvPggcNbycwgNeqrpT83SVEd%2F%2BD5xnOuY7Ev9HSd0uFDru3r4EwNS2eDf5fHUeLfNgPMGcU%2BmF84%2BszkLVQn%2BA5Gp4Oivt6irLj6LUdXegXQgvJqX8zc0F%2Bz1lh8O78VsToDJJG5uSriXekP%2Fsz5ODqDBpR4cDkQESv4YCTh6gP2LgbiQ44OjfO5W%2F3degIjfhAXcK%2F88pcUv5RIuOBgu6fiFWaiAO87AHnGEko1r8qztYyV1uUkq7nZby97beCDnDodqaSe%2FPVKgMXXOtyOYCqAqZAHIKOJcalu6y6Fb%2FeJS0nPJXXkKa58pmhKBVzQLarQOpi%2FHJptl9V5lZ1ijIAuB2BZ%2FZmTfw%2FJSwqabT0TASSDsYEOyV0yFN2sDHUClY%2Fmv3plcP2xSKIUtSTFTe6DmkvyJpMRJRxQ5sGbegoSv4e%2B0VQHCYnIMSUYLFnQkVLjxTX7ERg9MV99rfSpoOTgWV%2BJLlmeKjwzU0ZjXbB4CCGQ6XTbau%2BkKDgX%2FyQCmbtijMOmdicoGOqUBIyJSmiPdzgUM5%2Flx57WeT1mPm9wx%2BnTNfdG%2B2Eg5sIvYUHI1FduTLxhwLG%2Fl%2FvjSYO83JCyyX4ya7CLILvjrmTqPwy1fGQTVrUHhOHAq5auTcXLb%2FaTepHzsNdta82Mx4tGj7NqIhId7Ok9%2FOjIWQsVKLPbVb2%2FIcbG%2FAdOO6jH8aAZYknYijQDYvkJN2pip2KZ9oiGfz2HyIrS5Uom9UlUf%2FLv3&X-Amz-Signature=f477650d35f0e83875d81d6fdb6661f4f43f7267d41527463e7f69cd3d57860a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHWT4KF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJCRN01Yecs5uUqU4SmAP3%2FPG1eWpo4mtTAMHr5MPEyAiEAuAvB2CZ8MTYKH7V8sqGoU4nts309ibDRC70jekAIq0Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLxt8EhFGRCW58q0fircA%2BKsBGGG3EX7%2BPyDf51IRQQXs8F4F%2F7ACaqDzRy01uF45cxf%2B525mdyC4c6LcHoXdvLqqxNNCeQwAPiR%2BOiFseKjQOddRl4Uu4yb%2BUcMWLkfmWvrOIKKH7AfvPggcNbycwgNeqrpT83SVEd%2F%2BD5xnOuY7Ev9HSd0uFDru3r4EwNS2eDf5fHUeLfNgPMGcU%2BmF84%2BszkLVQn%2BA5Gp4Oivt6irLj6LUdXegXQgvJqX8zc0F%2Bz1lh8O78VsToDJJG5uSriXekP%2Fsz5ODqDBpR4cDkQESv4YCTh6gP2LgbiQ44OjfO5W%2F3degIjfhAXcK%2F88pcUv5RIuOBgu6fiFWaiAO87AHnGEko1r8qztYyV1uUkq7nZby97beCDnDodqaSe%2FPVKgMXXOtyOYCqAqZAHIKOJcalu6y6Fb%2FeJS0nPJXXkKa58pmhKBVzQLarQOpi%2FHJptl9V5lZ1ijIAuB2BZ%2FZmTfw%2FJSwqabT0TASSDsYEOyV0yFN2sDHUClY%2Fmv3plcP2xSKIUtSTFTe6DmkvyJpMRJRxQ5sGbegoSv4e%2B0VQHCYnIMSUYLFnQkVLjxTX7ERg9MV99rfSpoOTgWV%2BJLlmeKjwzU0ZjXbB4CCGQ6XTbau%2BkKDgX%2FyQCmbtijMOmdicoGOqUBIyJSmiPdzgUM5%2Flx57WeT1mPm9wx%2BnTNfdG%2B2Eg5sIvYUHI1FduTLxhwLG%2Fl%2FvjSYO83JCyyX4ya7CLILvjrmTqPwy1fGQTVrUHhOHAq5auTcXLb%2FaTepHzsNdta82Mx4tGj7NqIhId7Ok9%2FOjIWQsVKLPbVb2%2FIcbG%2FAdOO6jH8aAZYknYijQDYvkJN2pip2KZ9oiGfz2HyIrS5Uom9UlUf%2FLv3&X-Amz-Signature=46db528586a560944880515a2a5f846c8a073093878f115db7d28896844c4780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

