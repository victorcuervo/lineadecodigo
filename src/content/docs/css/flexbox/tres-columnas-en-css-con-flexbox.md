---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB34YEN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS9S5mg%2BLtRMUpIvLbtmEZfjv4YwidqyHNHeCmygiKhAIgUX6vb9OJNPvXXHCeLzeGX%2BgCjZoHz5ELwxMtyJm0AbIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk4rGskQ0XnvzaHASrcA9%2FwpamFgVwD1PgNwiHSrOAq1%2BXggWJxyl5yK%2FXfCxm34yFvfTd6L3cF6tOx4C0dv8TkKkTuZz5Xf22iSP76W9W91co9OsYFsXYqddodyits5%2FHxT9QQHAOiyQLNwttF38zL3GA3UES3ntIZuc3iePPMecoPPJKaGuRfgbfvb7RCEhKzInlWs0q36g1gQmdHNebbklspqKjXG4RIvpvt3fGEa%2BOIcyfCMHIlrDHhE2XUjXKbh%2FifJfMbsp%2BD5cdCgqFvC5jiQk%2BLWKbQ2iNrwUU3MJ6Nd%2BmdmVSTTikk4NFlBxoH%2FsCT3QmFPkglpsjR%2BB6QDyCLqtQ10hU5FjV%2Bh32EJCqTi%2FpGGipSLWLaRt%2F35ibSxJcDG%2FQSVj2U7O9Tlyg6oHSPePDYF2LWaExzJWIyVBWgy1aXy6JgKGp8Y8T5fcgKhHpsXZdFXGP1IRt6xzxlGm9G3VBLNrs87yqFIyOh4R%2BR4nVEdptOSHeR3%2BMOZ7j%2BXJB5B%2FWTfU0YjveCBj584pmQuyf0JuU7HkmSQGwUWGnY1FsyvTnhKfId98osuLl2IQvR9IJV4SzmJCGVbQ%2FI4w6noV7jWhZF9PbNA6HLkPKu2Aq8S9XCbZwf2Fl%2F88M5gDqlmTN3NfoZMM%2Bu3skGOqUB8Qpg%2BEfRxpRk7cIGW7lptDjWOeN7eTSg%2FkPs%2FVAdQF%2FmauuyQe%2F0wX%2Bq9WB%2B2BMx5SlRDZTEvu6j1XoQgXTcoP7gVZzxryXuTb%2FG7nMifMdVia%2BcICQh76GmzkD3elavGWR2lK2fkgE0epfECFKfJi17iQqWaQwaa22hvZ26LDRdiMGzBhA1mK6krOQDoN7YPHXOg1L%2FB4CuJ%2FnEELOTGk3Pkg7G&X-Amz-Signature=3632368e01afd596076c6b2f04c820d7c536894be9ec1a5b6a65bbe528ffad18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB34YEN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS9S5mg%2BLtRMUpIvLbtmEZfjv4YwidqyHNHeCmygiKhAIgUX6vb9OJNPvXXHCeLzeGX%2BgCjZoHz5ELwxMtyJm0AbIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk4rGskQ0XnvzaHASrcA9%2FwpamFgVwD1PgNwiHSrOAq1%2BXggWJxyl5yK%2FXfCxm34yFvfTd6L3cF6tOx4C0dv8TkKkTuZz5Xf22iSP76W9W91co9OsYFsXYqddodyits5%2FHxT9QQHAOiyQLNwttF38zL3GA3UES3ntIZuc3iePPMecoPPJKaGuRfgbfvb7RCEhKzInlWs0q36g1gQmdHNebbklspqKjXG4RIvpvt3fGEa%2BOIcyfCMHIlrDHhE2XUjXKbh%2FifJfMbsp%2BD5cdCgqFvC5jiQk%2BLWKbQ2iNrwUU3MJ6Nd%2BmdmVSTTikk4NFlBxoH%2FsCT3QmFPkglpsjR%2BB6QDyCLqtQ10hU5FjV%2Bh32EJCqTi%2FpGGipSLWLaRt%2F35ibSxJcDG%2FQSVj2U7O9Tlyg6oHSPePDYF2LWaExzJWIyVBWgy1aXy6JgKGp8Y8T5fcgKhHpsXZdFXGP1IRt6xzxlGm9G3VBLNrs87yqFIyOh4R%2BR4nVEdptOSHeR3%2BMOZ7j%2BXJB5B%2FWTfU0YjveCBj584pmQuyf0JuU7HkmSQGwUWGnY1FsyvTnhKfId98osuLl2IQvR9IJV4SzmJCGVbQ%2FI4w6noV7jWhZF9PbNA6HLkPKu2Aq8S9XCbZwf2Fl%2F88M5gDqlmTN3NfoZMM%2Bu3skGOqUB8Qpg%2BEfRxpRk7cIGW7lptDjWOeN7eTSg%2FkPs%2FVAdQF%2FmauuyQe%2F0wX%2Bq9WB%2B2BMx5SlRDZTEvu6j1XoQgXTcoP7gVZzxryXuTb%2FG7nMifMdVia%2BcICQh76GmzkD3elavGWR2lK2fkgE0epfECFKfJi17iQqWaQwaa22hvZ26LDRdiMGzBhA1mK6krOQDoN7YPHXOg1L%2FB4CuJ%2FnEELOTGk3Pkg7G&X-Amz-Signature=1062690ee9f4174e45831892f3c31b0495b4d356914e72b0ffec531596ac3ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

