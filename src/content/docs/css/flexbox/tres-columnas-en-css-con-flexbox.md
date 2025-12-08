---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JCIL2I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConrPmWetF7up3cUhqaafuY1YTIxsfDiRumlI8jcMVSgIgEbtXNYpDaUiCT7Ne0ooqEYrcpH%2BnZexLpNWp%2FPgitNoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvCPtsiXYagg3MdyrcA8rsoVbOnVJbnUW4hhMSn1qD77t7iwKNK6KBzRMz%2FdrdizZI1thuny12Ehd%2B1fx6o6aMEhpAYoW1uBTp%2FwcFHjn2nbeKpmJgWiS63PlnJUhZ%2B4U6DG364JYnYzIobdj9U1E0zJloJWXUdIPJa7f%2BfNpN8UwJ5%2B059JE9K3AxYIxZkS0CpHiiESHjc5IOxf0zxtqLNiU2%2F09FibDrbSjCglDO5h7L%2BpOpOn8jcwWorwcSN9iWSWQqs5OJ7unL5Q8Oov81K%2Fy%2BIYTG8hK7UaEHnK2IoUynVEz76YflX59Z9hQ8J%2FqyqpDfBJI3w9C5MC5GimOZyva6tcLpS3Pu8MeYY5%2BY01RpjqC64NRHQhUI2DzFlOC3W%2FKDsAinkC5jL5qaeHETEe09mLd5%2BEroFOqrC%2B78QEjD0ljtSspPSD7z0Z9HdLwEx1PY6BU2brjE41cIPCytNIwlauUYbSpy4i2bOMZk%2BtOo7Y0T2MjpgXYRBHmDn0tz4GFohk6kqNJrNlBSXK0Xv58YP7Y9MUBdJZj82HK7ByidmXblZhnMl7uopXOYzBLDjtkf71P1iq8Ls8PdaslrTj%2B1dsbhNn%2BQ8Qs1Aa6Me6i8FfHHnMli6bRAg4azXbPklWgUFDScCLY%2BMNyP28kGOqUB38jlaIQ6cYf4jsSJEbjPbFmtLnA4uncgBGoHajmEpWWtBZF0mxJnk3p0Z3OxGUe5EvFZRQ6QBDxRU1KzMa5lE42xVGPqbNrIsHqbxlz9fRqj2A7u1pfbmjyUJQxWaXlOmL91c94%2BkMgLiQzFn6KEgVnp%2FomnbjyGEXvPBaTTxyr6U3iOEkAXE1NbNzwtuosX8woRs6q3%2BtPlVAUufc8DqFiATqGd&X-Amz-Signature=a3d050408b8bd31e297334e4be259baeb268152794237588167fecd271b61cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JCIL2I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConrPmWetF7up3cUhqaafuY1YTIxsfDiRumlI8jcMVSgIgEbtXNYpDaUiCT7Ne0ooqEYrcpH%2BnZexLpNWp%2FPgitNoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvCPtsiXYagg3MdyrcA8rsoVbOnVJbnUW4hhMSn1qD77t7iwKNK6KBzRMz%2FdrdizZI1thuny12Ehd%2B1fx6o6aMEhpAYoW1uBTp%2FwcFHjn2nbeKpmJgWiS63PlnJUhZ%2B4U6DG364JYnYzIobdj9U1E0zJloJWXUdIPJa7f%2BfNpN8UwJ5%2B059JE9K3AxYIxZkS0CpHiiESHjc5IOxf0zxtqLNiU2%2F09FibDrbSjCglDO5h7L%2BpOpOn8jcwWorwcSN9iWSWQqs5OJ7unL5Q8Oov81K%2Fy%2BIYTG8hK7UaEHnK2IoUynVEz76YflX59Z9hQ8J%2FqyqpDfBJI3w9C5MC5GimOZyva6tcLpS3Pu8MeYY5%2BY01RpjqC64NRHQhUI2DzFlOC3W%2FKDsAinkC5jL5qaeHETEe09mLd5%2BEroFOqrC%2B78QEjD0ljtSspPSD7z0Z9HdLwEx1PY6BU2brjE41cIPCytNIwlauUYbSpy4i2bOMZk%2BtOo7Y0T2MjpgXYRBHmDn0tz4GFohk6kqNJrNlBSXK0Xv58YP7Y9MUBdJZj82HK7ByidmXblZhnMl7uopXOYzBLDjtkf71P1iq8Ls8PdaslrTj%2B1dsbhNn%2BQ8Qs1Aa6Me6i8FfHHnMli6bRAg4azXbPklWgUFDScCLY%2BMNyP28kGOqUB38jlaIQ6cYf4jsSJEbjPbFmtLnA4uncgBGoHajmEpWWtBZF0mxJnk3p0Z3OxGUe5EvFZRQ6QBDxRU1KzMa5lE42xVGPqbNrIsHqbxlz9fRqj2A7u1pfbmjyUJQxWaXlOmL91c94%2BkMgLiQzFn6KEgVnp%2FomnbjyGEXvPBaTTxyr6U3iOEkAXE1NbNzwtuosX8woRs6q3%2BtPlVAUufc8DqFiATqGd&X-Amz-Signature=7137bdc9966728e0254ac61b896b328c4dda105a825644dc375da647b2b12582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

