---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKZKSRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA3Um%2FNZWJ6EMbPEjeC%2Ff1OR8Q7DJHjKICwjndD8VrvgIgQWP9MwpvCpnFcGbcEJB0ILinm9J8NVWN1Oax5F1A2rMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOGOTk7JFWpg3QNx%2FCrcA3hPTQED4VmOsv%2FxUeOqKUFXNX9gcm1JarxZU5b%2B6RMrF5FLKiPEEmLfpSOsi2GhjCaW%2BK7hbErmexcBFMkEvIOJqxQqwyOjmbVHo%2BVYKt5yh4VaEeMmh1PK%2BoK6BuD3r3cP4xHsgjxVg8hcCqTWllverI34R%2FMF29MxINKLRLw0BCpXJ4%2Frbmqhw%2FUo6uuMaGzeuWTn6rLZLEB2Fivpo67MB7VOFAPgzoNmb83GT2JrI0CGRSKGuV1YSR%2FpKWo8f1vCgNkgeYaBdka5vtlxnTzGX4u3OYavKLvrQSZjCEq%2F7I39U%2BEH0NO%2FKmjLPDXs9jWHmEoKlXU468OEoNgPkSiO99rv0l64x65EVmvrcI4Hb0cMZuKShP8asePPF%2BU7x27t1hBFsE4jE8NeXsdzatHePZjsiFs1fBj5uXfwLGlF3jsrk%2BudOZAx1%2BINGQ5LeURqTDjlBIUNbgm3SB25BjQtIH52kFpPy912062L39UoGR%2BM3o%2FtrNxQVT22PxKc8CKdQ7UvcaTCrld1N3uX4ZFMR948Hf0BDiX1j%2FirT00CB1Kzu06rpa7Qf7wdnzv1RhVi8Q3sL4Hzo6MeV2lUrKKZEofj%2FGCzvXaq0LI8agvhyrGYdnwYcycUN5gDMLzzy8kGOqUBYmOltNwaNtjGu%2FGWtGpubsY1dxsrIdk1QyzHa89d2oFV51TN1vFcPMwZQS4NRRJzLA4BQ6%2BPHDHlhIHWcMmz20Jd5UPIjpY8ioo8tZAjFayQ0gpag%2F3Ok9IxOkNnfvE2e3ZIyNeZPXrDwvAaRRB7v08am6o8ORmBYmz7OBW7Ci%2B8eN0d7yDMwJaAW1iFirW1jpStYCbQVr5HsTrr0t8DZlGqFhh0&X-Amz-Signature=5a52521386542b4a9477545de70d180e6b5581ba2784f31e37efa585bed4e286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKZKSRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA3Um%2FNZWJ6EMbPEjeC%2Ff1OR8Q7DJHjKICwjndD8VrvgIgQWP9MwpvCpnFcGbcEJB0ILinm9J8NVWN1Oax5F1A2rMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOGOTk7JFWpg3QNx%2FCrcA3hPTQED4VmOsv%2FxUeOqKUFXNX9gcm1JarxZU5b%2B6RMrF5FLKiPEEmLfpSOsi2GhjCaW%2BK7hbErmexcBFMkEvIOJqxQqwyOjmbVHo%2BVYKt5yh4VaEeMmh1PK%2BoK6BuD3r3cP4xHsgjxVg8hcCqTWllverI34R%2FMF29MxINKLRLw0BCpXJ4%2Frbmqhw%2FUo6uuMaGzeuWTn6rLZLEB2Fivpo67MB7VOFAPgzoNmb83GT2JrI0CGRSKGuV1YSR%2FpKWo8f1vCgNkgeYaBdka5vtlxnTzGX4u3OYavKLvrQSZjCEq%2F7I39U%2BEH0NO%2FKmjLPDXs9jWHmEoKlXU468OEoNgPkSiO99rv0l64x65EVmvrcI4Hb0cMZuKShP8asePPF%2BU7x27t1hBFsE4jE8NeXsdzatHePZjsiFs1fBj5uXfwLGlF3jsrk%2BudOZAx1%2BINGQ5LeURqTDjlBIUNbgm3SB25BjQtIH52kFpPy912062L39UoGR%2BM3o%2FtrNxQVT22PxKc8CKdQ7UvcaTCrld1N3uX4ZFMR948Hf0BDiX1j%2FirT00CB1Kzu06rpa7Qf7wdnzv1RhVi8Q3sL4Hzo6MeV2lUrKKZEofj%2FGCzvXaq0LI8agvhyrGYdnwYcycUN5gDMLzzy8kGOqUBYmOltNwaNtjGu%2FGWtGpubsY1dxsrIdk1QyzHa89d2oFV51TN1vFcPMwZQS4NRRJzLA4BQ6%2BPHDHlhIHWcMmz20Jd5UPIjpY8ioo8tZAjFayQ0gpag%2F3Ok9IxOkNnfvE2e3ZIyNeZPXrDwvAaRRB7v08am6o8ORmBYmz7OBW7Ci%2B8eN0d7yDMwJaAW1iFirW1jpStYCbQVr5HsTrr0t8DZlGqFhh0&X-Amz-Signature=492934fc2194e25bdff6cefeb6f91bc49ef779f401464facf4a6dd0b4a297adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

