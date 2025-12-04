---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXDVXZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDXBhYk6Mp7kgMW9UB87zKbymS%2BQNjM65EnpgqoiNZhAAIgOKZ9bsWmGj6p1ZZjWvDuzgj0ufhexN75jqWAjd3kjxwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDN7iEodjfFZJQusT6yrcA16ZNZHx32%2BS52v5337pVbgqjqYwL8GOpUOvyZgE5do6bMR6eOy5gEQfUai62XgiPe4VimzIXPHwCsfYamCS7NjJjY0vGZt%2Ba6mB6ujp4ohictxltEH9JKRKnSR%2Fa8Gp7UtnfkXtxgX4zAQyzFSb0ND9k9EQxL7AW5y3Eidw6NtISJXggIuc4GQhG7t%2Fr125cBknoja5%2F8ZcEwbjdxNX8Ee9C%2BD5vZPuZdFqcspW26%2BVOPfdCM%2F0NPi7w%2B5JAdnQ4YOX33ekUIhvKGMuGXLOv8lVvCSAKXUmJ3Nr4NzyFILaxCmAnoslcqAQWSjOjWTM5Jp1a68ZJd4xLOMhja0SbB0HhTpDl8pr%2FF6qNQONVd7%2B%2Fhql%2FSf%2BTpnwQY8s9l5%2FQlXC6mR3AYssoIICoUTY5nUILLJR7MFRUyfYsfxaTMwpOGhRTSktc0Jy7qe%2B15HJ0fAY7qUkJAJp1jd57tYSd%2FZrfCKGAj%2Buqp15%2BE7xGg6y8o2mbDxzcOUNjspr8swOA2fORTQc%2FK8ogRPFpXSwbIE%2Bn4Uxeq0mYg4SjHLq0m5ci2Tmc8YE3yzAXhh1DgV%2BHPHz0sbPdnk3p7FXzLRxNqmx%2Bvfz5jy%2BtBjwC0JWnQxU2Yd6sz35DTuNcVzIMKeQxMkGOqUBnxufQsIZq1n0ULuqqFBDritb86Mfg6k0K3PzXCHtyKt1AILL1RPRO4oTKT7Gce%2FE%2BujXVtxNQW3dlH%2FjkopggRjkNcTs9OTZL%2FOL%2FWyLYnznjhD5Z6WnInIpzdOLIie%2BcILufyV4Kw333yJXV2yFNmXrlfMHYjXlYLyWnmJXqlknWSPNFvLBzyD3fJHZYbJdpbwGMN%2BKIyp8OTlJ4Eb60gwSsf7%2B&X-Amz-Signature=e091367b5732e70799e1c119bd8f431ad7c890004f4a16f99eb045c38e9de72b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXDVXZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDXBhYk6Mp7kgMW9UB87zKbymS%2BQNjM65EnpgqoiNZhAAIgOKZ9bsWmGj6p1ZZjWvDuzgj0ufhexN75jqWAjd3kjxwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDN7iEodjfFZJQusT6yrcA16ZNZHx32%2BS52v5337pVbgqjqYwL8GOpUOvyZgE5do6bMR6eOy5gEQfUai62XgiPe4VimzIXPHwCsfYamCS7NjJjY0vGZt%2Ba6mB6ujp4ohictxltEH9JKRKnSR%2Fa8Gp7UtnfkXtxgX4zAQyzFSb0ND9k9EQxL7AW5y3Eidw6NtISJXggIuc4GQhG7t%2Fr125cBknoja5%2F8ZcEwbjdxNX8Ee9C%2BD5vZPuZdFqcspW26%2BVOPfdCM%2F0NPi7w%2B5JAdnQ4YOX33ekUIhvKGMuGXLOv8lVvCSAKXUmJ3Nr4NzyFILaxCmAnoslcqAQWSjOjWTM5Jp1a68ZJd4xLOMhja0SbB0HhTpDl8pr%2FF6qNQONVd7%2B%2Fhql%2FSf%2BTpnwQY8s9l5%2FQlXC6mR3AYssoIICoUTY5nUILLJR7MFRUyfYsfxaTMwpOGhRTSktc0Jy7qe%2B15HJ0fAY7qUkJAJp1jd57tYSd%2FZrfCKGAj%2Buqp15%2BE7xGg6y8o2mbDxzcOUNjspr8swOA2fORTQc%2FK8ogRPFpXSwbIE%2Bn4Uxeq0mYg4SjHLq0m5ci2Tmc8YE3yzAXhh1DgV%2BHPHz0sbPdnk3p7FXzLRxNqmx%2Bvfz5jy%2BtBjwC0JWnQxU2Yd6sz35DTuNcVzIMKeQxMkGOqUBnxufQsIZq1n0ULuqqFBDritb86Mfg6k0K3PzXCHtyKt1AILL1RPRO4oTKT7Gce%2FE%2BujXVtxNQW3dlH%2FjkopggRjkNcTs9OTZL%2FOL%2FWyLYnznjhD5Z6WnInIpzdOLIie%2BcILufyV4Kw333yJXV2yFNmXrlfMHYjXlYLyWnmJXqlknWSPNFvLBzyD3fJHZYbJdpbwGMN%2BKIyp8OTlJ4Eb60gwSsf7%2B&X-Amz-Signature=e4365664ad646793b7a304b21524e5aaab44e81a810c245af7625ec69db336dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

