---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHRZPEM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8nhusdZ4Dvq4Ac%2BhntjRgBsgwVF8R%2BXCtSi4lqoIMxwIhAOWjcdwjArWhTCLo35DG7e5txKR%2F7Ndy4Pyj5ioX46tJKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1i6CTbs7tGlc3ORgq3APRhjmpBIgQd%2Bo0OiOBtmnZyYSxEohFi7UH9fVgkwcxRY6U5DXO4Nn6pNywzTh8nixcjbywyVFFVEtJgpdluFT68FJL4ZmDLaQ78tldLroBQxdGvD1HyjhkmFVfMARHbx4zCqrbNddxRmD3gUqf%2B0PGidJzmWn4aMPyWWxEzhm9qFIZAc%2Boxe3JPP6axY5rs4AUD0TESekdxBUTPAg45N3xLXhIKNCaTeihAnJQi%2FQ3pN0wUYHjcaj17WXKwsV7081umTFrLSn35TF6BaydVyPgL%2B0o3P7nwYMNr%2F2jU0vk1DdK1RV8raYsfRIv8lnTK2B5BNrYK3gJLfg1R2g46JFpneEBvXK0BYsUV3LH7Y%2F9VE2duxCHaH01lD%2B7R3yRdo15gHv7rqZDyVKHHQ4ctksx3F4unlKi6hMiOQYXzKcTn7pe99bvJWQFBH2%2BArAeI4f5PuVdmGFESyt4K2edBEzpRRsYsk0behUKcRuQEbGvOcgkeVFcj4%2F7bixUQHzU8eKXSewcpAarq5ezuwGLbJKsZwtDQfwzJPanAg0xyAGwO7lybLxQjBGSpPcd%2FznfD8o5zYnbuB6EAfO3h3226%2Fqb12sAevdTh5%2BOibaCfQ1lhK01LL4KdhyeaOhjgDDNodjJBjqkAVG9IC2k2R2YLBj2zTWmi9i%2FmPeVWuOKVT9oDDy8X%2BN35VVheLz99dXFQ2vnW8s27jgXq8%2FAK5fpkFmkvh0%2FYudxS8OZVUKYjZ9jbfd3MkS2arnQPMS4SC9%2FmqVsiNJ6IcYGSjLkmXsP6BEfq9bcY4L6s3LeaY0eoNnQhflbeSCcyFoOKbK2Mv1tUquEiS%2Bj1rr4UClO%2BgSD7Pg8OXDyMEuhABBS&X-Amz-Signature=6b8b9ab0093f347f6f80071466f5f91258b7762380a8fd704804352f82f4f82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHRZPEM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8nhusdZ4Dvq4Ac%2BhntjRgBsgwVF8R%2BXCtSi4lqoIMxwIhAOWjcdwjArWhTCLo35DG7e5txKR%2F7Ndy4Pyj5ioX46tJKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1i6CTbs7tGlc3ORgq3APRhjmpBIgQd%2Bo0OiOBtmnZyYSxEohFi7UH9fVgkwcxRY6U5DXO4Nn6pNywzTh8nixcjbywyVFFVEtJgpdluFT68FJL4ZmDLaQ78tldLroBQxdGvD1HyjhkmFVfMARHbx4zCqrbNddxRmD3gUqf%2B0PGidJzmWn4aMPyWWxEzhm9qFIZAc%2Boxe3JPP6axY5rs4AUD0TESekdxBUTPAg45N3xLXhIKNCaTeihAnJQi%2FQ3pN0wUYHjcaj17WXKwsV7081umTFrLSn35TF6BaydVyPgL%2B0o3P7nwYMNr%2F2jU0vk1DdK1RV8raYsfRIv8lnTK2B5BNrYK3gJLfg1R2g46JFpneEBvXK0BYsUV3LH7Y%2F9VE2duxCHaH01lD%2B7R3yRdo15gHv7rqZDyVKHHQ4ctksx3F4unlKi6hMiOQYXzKcTn7pe99bvJWQFBH2%2BArAeI4f5PuVdmGFESyt4K2edBEzpRRsYsk0behUKcRuQEbGvOcgkeVFcj4%2F7bixUQHzU8eKXSewcpAarq5ezuwGLbJKsZwtDQfwzJPanAg0xyAGwO7lybLxQjBGSpPcd%2FznfD8o5zYnbuB6EAfO3h3226%2Fqb12sAevdTh5%2BOibaCfQ1lhK01LL4KdhyeaOhjgDDNodjJBjqkAVG9IC2k2R2YLBj2zTWmi9i%2FmPeVWuOKVT9oDDy8X%2BN35VVheLz99dXFQ2vnW8s27jgXq8%2FAK5fpkFmkvh0%2FYudxS8OZVUKYjZ9jbfd3MkS2arnQPMS4SC9%2FmqVsiNJ6IcYGSjLkmXsP6BEfq9bcY4L6s3LeaY0eoNnQhflbeSCcyFoOKbK2Mv1tUquEiS%2Bj1rr4UClO%2BgSD7Pg8OXDyMEuhABBS&X-Amz-Signature=38be53da1018c3d58d7bf6241244790092e2f37d44771bc102366286de85cda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

