---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMZ3BJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx7AqUcnyYk7M7Zo4Fnr%2BSJY6GL0UMV%2FwgNt13iC1Y8AiBJNOiWnpkn1okp7O%2BAWExYFhvhBjgTgglVOGtjHk1CMyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMqnui5fXkaccuRKJEKtwDrFjPtkD5IRWva0PW%2FdOyCJlsRx4%2FBakxgtnIDgZ72dL4v17kBlWfWO6cA113eXjpo3IpHaJvNYVgQuyqEH%2Fq%2BJbZDst01Cq03hh%2B5RXXIi%2BQSSQC68AnlUKfL7X2r2B3LIpep8yBBbyjU7f9HeFS%2FtRf0Gb0D6F6RGLVKGPd38p%2FqJmyPP%2Bswr1aobMJdgSy10OR7kCbTkfYvuUa60llGrYj169UcI2lTK6CLA6aIPUPud68Dm0M2x1VyxfZzM71hsQj%2FMELxP3amWTutKKrEK7a3S%2F6MupneNgVOKL3Z%2F4TFzbN%2BtRNo%2BBKu2vQw63RARQiUb7utIWsFz5HghEfrzSds1Bhq1j8F4YYj9zaZ34c5dH1qScelnKNyB%2BZEyJxHGCJEMU%2BU3S0QbOahcZxfXQAJOu4BwmpNgENQfjtFNIYWEnQRutCqod8eRtcDZMgfw1N9qts0J%2BmdZbbi8ISToX5Vi4xQWoYvrv96V65moCD3mL7A121e7jcxFpIrXV%2F7ua08XbYi0sdBSSd3qJrkGZw4Kz4EIx5GCO25lVsJidZPGcm20gKdCXxGtpyR7EF%2BkePdbFUcaXBV3t%2F%2FDP03o%2Bua3xSxkIwDGl2jMOq5guEH3N8i%2F1qHXpHlUYw%2BafOyQY6pgFd6MkPphtXSbfnP7Z2Blc%2FjaDaXG5p1HaI7EWHQasfe7D0s3kRmMOtsZoH6TVwi1QrEQJYOjhD2nu1%2B7eWWtITKAJybXWl9M2Uyz6R1OZgsyLLFE3FYxZ7IK7nN6rNUMTdEbRrjlpzOqlkcCLTZ8WgvKj%2FSnx6EOPXCVYWs%2BXow%2FsKOzTGny%2Fcuq8GmhYyoTWEfmhsDpFnGFBDs2QEjtVsE7NkoqnV&X-Amz-Signature=9136b2cbefb3ad9d5052fa91e2a9e4938655e38c6aebf194ecce68da4961d3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMZ3BJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx7AqUcnyYk7M7Zo4Fnr%2BSJY6GL0UMV%2FwgNt13iC1Y8AiBJNOiWnpkn1okp7O%2BAWExYFhvhBjgTgglVOGtjHk1CMyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMqnui5fXkaccuRKJEKtwDrFjPtkD5IRWva0PW%2FdOyCJlsRx4%2FBakxgtnIDgZ72dL4v17kBlWfWO6cA113eXjpo3IpHaJvNYVgQuyqEH%2Fq%2BJbZDst01Cq03hh%2B5RXXIi%2BQSSQC68AnlUKfL7X2r2B3LIpep8yBBbyjU7f9HeFS%2FtRf0Gb0D6F6RGLVKGPd38p%2FqJmyPP%2Bswr1aobMJdgSy10OR7kCbTkfYvuUa60llGrYj169UcI2lTK6CLA6aIPUPud68Dm0M2x1VyxfZzM71hsQj%2FMELxP3amWTutKKrEK7a3S%2F6MupneNgVOKL3Z%2F4TFzbN%2BtRNo%2BBKu2vQw63RARQiUb7utIWsFz5HghEfrzSds1Bhq1j8F4YYj9zaZ34c5dH1qScelnKNyB%2BZEyJxHGCJEMU%2BU3S0QbOahcZxfXQAJOu4BwmpNgENQfjtFNIYWEnQRutCqod8eRtcDZMgfw1N9qts0J%2BmdZbbi8ISToX5Vi4xQWoYvrv96V65moCD3mL7A121e7jcxFpIrXV%2F7ua08XbYi0sdBSSd3qJrkGZw4Kz4EIx5GCO25lVsJidZPGcm20gKdCXxGtpyR7EF%2BkePdbFUcaXBV3t%2F%2FDP03o%2Bua3xSxkIwDGl2jMOq5guEH3N8i%2F1qHXpHlUYw%2BafOyQY6pgFd6MkPphtXSbfnP7Z2Blc%2FjaDaXG5p1HaI7EWHQasfe7D0s3kRmMOtsZoH6TVwi1QrEQJYOjhD2nu1%2B7eWWtITKAJybXWl9M2Uyz6R1OZgsyLLFE3FYxZ7IK7nN6rNUMTdEbRrjlpzOqlkcCLTZ8WgvKj%2FSnx6EOPXCVYWs%2BXow%2FsKOzTGny%2Fcuq8GmhYyoTWEfmhsDpFnGFBDs2QEjtVsE7NkoqnV&X-Amz-Signature=df6584ec50ac230c4ac10ce4b98d161b8ef72bb2fc5013d9c2b5edea40dd8f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

