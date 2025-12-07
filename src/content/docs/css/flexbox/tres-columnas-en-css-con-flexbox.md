---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDUGXF6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4eJz8gpjPB9LG28DgLmpbklkTcSzevtHpYhwCMDibTAiA89HPLuw%2FA3w6Iic88rtV0rk1w9Wmkz92my%2Bp3e%2BGOOyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhXezIC4oKVrh4enKtwDyeEF7X9SIaA%2BzlGA2LdGcKYLj%2FTb9bHq%2BLkaYQQb4BRYoFY9fNIX5AWsOL3zoE1k%2F5i%2Fdi1LDxalr1WPn3x6MCqkBsR7Tx7ZM7ew435Onh8%2FvZGekDZ2P7L80becdljDuqlRnOpuBAbvjexFHHDU7gtm%2FbpxkpW2BY7YGpWab9Os6m5xCWSiUEWuHJ%2BoEi7JZ5%2FVia7WY9eg918YszAhGvnZ71EVYxJBDmKSAFlnGGTlwr16v8vNcHRwWYrKkLxH8HosDl3iPldNcfchry55aXga%2FU9YSVkQMOsaZn5P41JOLULVmcar%2FlvM7oK6ynBU0ww3JmVTaoJsZiSHaA1yS9OzPkjiNuMtASATmCCHM1e%2Fpb54TNjB1Xn%2BVKsncNdMvgU75gR0JNcbF%2FVcvp%2F7zLrJPBW0QPyzPDCkRgCeH268IJV5Au9PKL0ziwKNTkC%2BKH%2B2QYT8jbll6JxglUhlIoAiLJkGZkms6ZV86M0QbODd0mOsxA6f%2Bbtu8FUdn25o8ZF%2FPR2DqrPE%2Fx1f97NVRkSAElWJv4bzuL59Rqtoh7uRGqHc7LQ1eoTcHLOmfz6h%2Ffoa4fX4sz053JVqyIT0ms28IE1goTic42alE5wIgf7BBUDs4WysaByviIUwtJnVyQY6pgGsQqXXZAJgSUUHiHwiDEOsNd7Je46SjhPFdBUHb2Pl4v%2BWr%2BByJg1anPMsNgKuqzfjsN4Jj8AXZz15xOhP2AEPqTQA3DPC7KWSYw8zD0ji8N9CQVNZLgNj%2BCU%2F%2BiXJZMIUDD91xwFAeH7Pr0oc3%2B0Xr4dk%2F49eky5%2BpmushmjGxSwqNzJQnoT57g4qtZdJ18vsBxJqIk4yfSkNQjeEazhzlX0d2uJl&X-Amz-Signature=5e28d8053436dc12f82fc8aff28bb6c2999cc1e2f30539de6b750d06e440da41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDUGXF6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4eJz8gpjPB9LG28DgLmpbklkTcSzevtHpYhwCMDibTAiA89HPLuw%2FA3w6Iic88rtV0rk1w9Wmkz92my%2Bp3e%2BGOOyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhXezIC4oKVrh4enKtwDyeEF7X9SIaA%2BzlGA2LdGcKYLj%2FTb9bHq%2BLkaYQQb4BRYoFY9fNIX5AWsOL3zoE1k%2F5i%2Fdi1LDxalr1WPn3x6MCqkBsR7Tx7ZM7ew435Onh8%2FvZGekDZ2P7L80becdljDuqlRnOpuBAbvjexFHHDU7gtm%2FbpxkpW2BY7YGpWab9Os6m5xCWSiUEWuHJ%2BoEi7JZ5%2FVia7WY9eg918YszAhGvnZ71EVYxJBDmKSAFlnGGTlwr16v8vNcHRwWYrKkLxH8HosDl3iPldNcfchry55aXga%2FU9YSVkQMOsaZn5P41JOLULVmcar%2FlvM7oK6ynBU0ww3JmVTaoJsZiSHaA1yS9OzPkjiNuMtASATmCCHM1e%2Fpb54TNjB1Xn%2BVKsncNdMvgU75gR0JNcbF%2FVcvp%2F7zLrJPBW0QPyzPDCkRgCeH268IJV5Au9PKL0ziwKNTkC%2BKH%2B2QYT8jbll6JxglUhlIoAiLJkGZkms6ZV86M0QbODd0mOsxA6f%2Bbtu8FUdn25o8ZF%2FPR2DqrPE%2Fx1f97NVRkSAElWJv4bzuL59Rqtoh7uRGqHc7LQ1eoTcHLOmfz6h%2Ffoa4fX4sz053JVqyIT0ms28IE1goTic42alE5wIgf7BBUDs4WysaByviIUwtJnVyQY6pgGsQqXXZAJgSUUHiHwiDEOsNd7Je46SjhPFdBUHb2Pl4v%2BWr%2BByJg1anPMsNgKuqzfjsN4Jj8AXZz15xOhP2AEPqTQA3DPC7KWSYw8zD0ji8N9CQVNZLgNj%2BCU%2F%2BiXJZMIUDD91xwFAeH7Pr0oc3%2B0Xr4dk%2F49eky5%2BpmushmjGxSwqNzJQnoT57g4qtZdJ18vsBxJqIk4yfSkNQjeEazhzlX0d2uJl&X-Amz-Signature=9b9b2e98e45bea2b9c43caee9cb407844179b0cfb70d896e84078aa9f069ab38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

