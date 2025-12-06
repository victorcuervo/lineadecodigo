---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAD3WJW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbeJCK%2F%2F4jZb7TLiC1Q55gFx5Wd%2BrzyWhM1B%2FCaN0kAIhALZLpnv82Sv33llUrWfkk3sqznbuRjTgz%2B259je46nyeKv8DCHIQABoMNjM3NDIzMTgzODA1IgwUbk5TyI1Fw5uph4gq3AM0a7nsnCy6sSLtfWBbdVBluobyVrqsn6SYE7EJCDC3NSNTGMmWe4dbMvkdKsYtP12uU7v6EzIKrcgHMPXAqAnx9donUipARQQLfkSV43zR5WNuyV4gi2yeWI3seGy%2FAsMgl%2FLY99TBMgtmX8Cbni7HU4KDoIxigCYWps8WGfvVEgvycMSD13SvkqM7rHgR2ocOQ%2FRYfnM68EGHj2FWpO8pXOEW3nmpkYD%2FHlCy6ffmpC9dubIHPVjS5FIIzApgEbj0RB5CuVY%2BrMFdlOKgBM2dWFaPYj1UTfJjQIgfVijspIa1OU0K%2FFSXATtxdVqYHnSUZTAm%2BmfXjWAYocihGY7SIEkiVmQTlrLQnUX0MP57pDunGSCxtL6cEO%2FhrygTYXKSHQZ8NYNwGLc4CIsG6HKmWX5H42SWyhR5ol8ojbMotw%2FdThvnyZgiFvxQ6Xwxt8f5fMfxipbMPDf3%2Fn2ypLGkAzgQS60EF2WXCNNmjhM6SrmYgTu6KmNg4reh1uKLyfYQtrdMxG%2B6IiTUFpGHkJ410I9OsKDgNCOgXnbvr%2FrOLOWTALZs%2B2%2BD73NNcDttUGT7037JSBuYbr%2FlGQwrdfScUN2EmEgzqG1bgDvvTd1iuGsPqeRmDM4AeftZBDCq68%2FJBjqkAXzBAQZbX2BzVSwMqEajS9MNkZrvMEw8XvedhQTNsPu4RmKPdAscYDCim5poOl4kRkTHQuBnZIoW8Ke1tmIyCxRr9bZgURTFA%2Fjg9pS8wtw7UkgFXTt%2F5YvHphRP6Vd3zMJwLBAVzvOAzgzkPM2UXykutYUk8%2B1r2Tsatmv0Y0hyIEk8Eaab46fZ3xdLFolhpOa2zNmcNXVCtc74Bkzx0h3UG7pS&X-Amz-Signature=e56eb4839c57104f9b01e1dcd98c40e392e29c996d5921552b52e4f4deb2b9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAD3WJW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbeJCK%2F%2F4jZb7TLiC1Q55gFx5Wd%2BrzyWhM1B%2FCaN0kAIhALZLpnv82Sv33llUrWfkk3sqznbuRjTgz%2B259je46nyeKv8DCHIQABoMNjM3NDIzMTgzODA1IgwUbk5TyI1Fw5uph4gq3AM0a7nsnCy6sSLtfWBbdVBluobyVrqsn6SYE7EJCDC3NSNTGMmWe4dbMvkdKsYtP12uU7v6EzIKrcgHMPXAqAnx9donUipARQQLfkSV43zR5WNuyV4gi2yeWI3seGy%2FAsMgl%2FLY99TBMgtmX8Cbni7HU4KDoIxigCYWps8WGfvVEgvycMSD13SvkqM7rHgR2ocOQ%2FRYfnM68EGHj2FWpO8pXOEW3nmpkYD%2FHlCy6ffmpC9dubIHPVjS5FIIzApgEbj0RB5CuVY%2BrMFdlOKgBM2dWFaPYj1UTfJjQIgfVijspIa1OU0K%2FFSXATtxdVqYHnSUZTAm%2BmfXjWAYocihGY7SIEkiVmQTlrLQnUX0MP57pDunGSCxtL6cEO%2FhrygTYXKSHQZ8NYNwGLc4CIsG6HKmWX5H42SWyhR5ol8ojbMotw%2FdThvnyZgiFvxQ6Xwxt8f5fMfxipbMPDf3%2Fn2ypLGkAzgQS60EF2WXCNNmjhM6SrmYgTu6KmNg4reh1uKLyfYQtrdMxG%2B6IiTUFpGHkJ410I9OsKDgNCOgXnbvr%2FrOLOWTALZs%2B2%2BD73NNcDttUGT7037JSBuYbr%2FlGQwrdfScUN2EmEgzqG1bgDvvTd1iuGsPqeRmDM4AeftZBDCq68%2FJBjqkAXzBAQZbX2BzVSwMqEajS9MNkZrvMEw8XvedhQTNsPu4RmKPdAscYDCim5poOl4kRkTHQuBnZIoW8Ke1tmIyCxRr9bZgURTFA%2Fjg9pS8wtw7UkgFXTt%2F5YvHphRP6Vd3zMJwLBAVzvOAzgzkPM2UXykutYUk8%2B1r2Tsatmv0Y0hyIEk8Eaab46fZ3xdLFolhpOa2zNmcNXVCtc74Bkzx0h3UG7pS&X-Amz-Signature=dd9dd76d46c3c83547aaaffcf17ccba6286beb904598ab704325d9994cf6efaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

