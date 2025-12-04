---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHMZTYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFJSqbuMSiZtf6Zu1%2FdxpHl98wck3D28QDs49CKLkxFDAiEAmzXmtEy06vWBTUyHs7eW2qGWSPQZUqBfydpjgvM%2B9xoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLDQv7kXPMBMHFN8jSrcA6zX6yI8EtEE8XrOdNQCo22QTIglhxryJqSJN3sqnYXO97FK3VFp9MCPVZSHIVPFaQESWii7BJqj7JEJBqFfFUktc0qd8qPmtNdcvV9ZNkJ3I9sXLYt%2Bz2L7Wr1c3oWzciK0RXJ0JLQoiNsk8PhYZUwLr2qmgdAxCSeNhP8hV39bolycji5uLzFKnsa0xYUErWpqdLxSNsaL29Do0C5xzWzvCZTuNuevGthYea%2B7fPjcciRzymFWEkuHwqm3iS7nDiVAja%2B9bwjz%2BmTwZIenWZwgLbQu47FAhOikVxQrEJyjlNpfJdP0ziLQKuqetgSJ4wix8LgKtEdXGhbD3DLzb%2Fc7YafJe%2FDLkSM%2B%2FOurIUQ7IgtGR5tVq%2BJ0sqdTMnGysxRYhW%2Byx1DimGN8brzYXHHdiDE4xrw5qHtmoHvvrc%2Fi9Ls4JfrwZwheSrDa8DkHQUdBVC9DwsWdvJ%2Fc790TOQMLCnnSTgEhY0svUQvVNNQPDu1nHRfM7QBk0KtGTCS%2B0cWfOXbWtvs%2FEnAOGgKzw%2Be%2FkE%2BTew9QkXRmdHoMJ4aOUAlYDxtkuhrej5Oz1t01FG3S9UMyFh1zzDHkKdEaF1CeTJFjGjyHGcEs2GWsozvqoAx%2Bb0IsoEDQtFmbMLToxMkGOqUBcuaea2O3amvgASVER%2F435fcsvsUWcimRo3S4onpyzeYJ0s0eTtL3XcSwB%2FtK%2FzZSXOmAvwIQUtVCW5%2BM%2BRnesyoVum2NsTBJQ03cqHiszV9h%2F0pMTIdVYDTFn95yHyiiDOWaOl9%2FcLhJGmC1stJ5D6aC%2B%2ByGDlBCsK%2Bm88121%2FTlz0qV%2FRVAdQhIE%2FEVpdYNQe7ZOEWJIfpiBxzYnaBtv7W%2F%2Bwwu&X-Amz-Signature=50b74417f70f2297ef14851e0c0238ab70903c8aefc8fb96e42e6302a51e3fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHMZTYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFJSqbuMSiZtf6Zu1%2FdxpHl98wck3D28QDs49CKLkxFDAiEAmzXmtEy06vWBTUyHs7eW2qGWSPQZUqBfydpjgvM%2B9xoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLDQv7kXPMBMHFN8jSrcA6zX6yI8EtEE8XrOdNQCo22QTIglhxryJqSJN3sqnYXO97FK3VFp9MCPVZSHIVPFaQESWii7BJqj7JEJBqFfFUktc0qd8qPmtNdcvV9ZNkJ3I9sXLYt%2Bz2L7Wr1c3oWzciK0RXJ0JLQoiNsk8PhYZUwLr2qmgdAxCSeNhP8hV39bolycji5uLzFKnsa0xYUErWpqdLxSNsaL29Do0C5xzWzvCZTuNuevGthYea%2B7fPjcciRzymFWEkuHwqm3iS7nDiVAja%2B9bwjz%2BmTwZIenWZwgLbQu47FAhOikVxQrEJyjlNpfJdP0ziLQKuqetgSJ4wix8LgKtEdXGhbD3DLzb%2Fc7YafJe%2FDLkSM%2B%2FOurIUQ7IgtGR5tVq%2BJ0sqdTMnGysxRYhW%2Byx1DimGN8brzYXHHdiDE4xrw5qHtmoHvvrc%2Fi9Ls4JfrwZwheSrDa8DkHQUdBVC9DwsWdvJ%2Fc790TOQMLCnnSTgEhY0svUQvVNNQPDu1nHRfM7QBk0KtGTCS%2B0cWfOXbWtvs%2FEnAOGgKzw%2Be%2FkE%2BTew9QkXRmdHoMJ4aOUAlYDxtkuhrej5Oz1t01FG3S9UMyFh1zzDHkKdEaF1CeTJFjGjyHGcEs2GWsozvqoAx%2Bb0IsoEDQtFmbMLToxMkGOqUBcuaea2O3amvgASVER%2F435fcsvsUWcimRo3S4onpyzeYJ0s0eTtL3XcSwB%2FtK%2FzZSXOmAvwIQUtVCW5%2BM%2BRnesyoVum2NsTBJQ03cqHiszV9h%2F0pMTIdVYDTFn95yHyiiDOWaOl9%2FcLhJGmC1stJ5D6aC%2B%2ByGDlBCsK%2Bm88121%2FTlz0qV%2FRVAdQhIE%2FEVpdYNQe7ZOEWJIfpiBxzYnaBtv7W%2F%2Bwwu&X-Amz-Signature=6af9755bf2c7b4ea53d0dcb46ab7df777a73bf560ff75250678b0376fab86f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

