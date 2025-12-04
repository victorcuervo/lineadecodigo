---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CW4MGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD80oCavBiwEUvWCM15CwuPiO1UNNVArv51Nb3RJvmVFwIgXE1dnT3mh4yV2JBMSZxwlBC4XCd4rttp0KV%2BaTgGfK0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDP2bytkDd6s0E1qhZSrcA4jXyM%2F%2BJl5HjT6rVPhwJTGiuhsmrA2SwMGSRgZaAGJrW98eqHs6rYCf6fSkolleBNrRyrZdmsfA4LQHAAFh0yZ77I2CHbjiTebIrl6Ez3xJEe9vVzdTsOGjgy7pCyPKPOuyJeKi0xuOrTKRUuA9q5FoaNyPyIgFiXsrSJ9Cc5KDyw2fLnKp9IrqZkXwSdLAythCCJJHBrK66vT8j0muZzdIK3b1zcVMJzKx8y9v%2FlHFuN6TBr25VWqcW%2Fi%2Fd9%2FTB9BN5pGn5w8AZYbdgqjxO8kIXJRh3f1gBdC4jasLulJ8%2FeLMk%2Fzj%2B%2F8kmkrJtSvEdqBADiIB5guH%2FQKzSj7LNWZfcYjRnwifVJoBqOBDzIFiJEVKIE%2BQFYFQDHrpgY5G6w3Y064UPxATWjC9oSyDLpXPKZvLOSuX9kRqCHrhhhRGBEOmbWBabKQYPVuXrznU8jeg3f%2BjzJD2pFbEs5qWgUmbethBpmYHxs17ODGGa%2BDD%2FGta60ujtNhh2Xm12Bbk2wIgtzEsBgxuHpsz8lvQ16dpKXJ1uWfIWqXZIUekzzPXSNTJcNCa60jzlpGKDpBa4%2BtbdSwrPg1SQJ4h1jqKmPgrC%2BZny%2BDsImk1sY7QrgP6s2WzoD4u3Yl2k%2BeUMIqixskGOqUBPqvp1CU91b5JiLuhgfxrRbQIpVirMVyMsYZn8vrZuLDaY2%2Bj2QSFaNB36UfuKyVQrENXYViTwYxTm7kG4o%2FQt7VVjG5d2ZhCoIrbRiauY19NSa0yIqowYCwhMJr9x0iCDSfNILD%2FbBv7%2FIJNYUoZbn%2FTZb0%2FXQhJqWXyzL9CzARQAwbM%2BmO09RGR4b3ScJIgDLSfANpkFgWCgl%2BXA%2Fbr%2BfgRSvvv&X-Amz-Signature=0c41d5f1c7ebc652ad968e323d04fe2d6be4708ed1b9416170f45c39825395a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CW4MGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD80oCavBiwEUvWCM15CwuPiO1UNNVArv51Nb3RJvmVFwIgXE1dnT3mh4yV2JBMSZxwlBC4XCd4rttp0KV%2BaTgGfK0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDP2bytkDd6s0E1qhZSrcA4jXyM%2F%2BJl5HjT6rVPhwJTGiuhsmrA2SwMGSRgZaAGJrW98eqHs6rYCf6fSkolleBNrRyrZdmsfA4LQHAAFh0yZ77I2CHbjiTebIrl6Ez3xJEe9vVzdTsOGjgy7pCyPKPOuyJeKi0xuOrTKRUuA9q5FoaNyPyIgFiXsrSJ9Cc5KDyw2fLnKp9IrqZkXwSdLAythCCJJHBrK66vT8j0muZzdIK3b1zcVMJzKx8y9v%2FlHFuN6TBr25VWqcW%2Fi%2Fd9%2FTB9BN5pGn5w8AZYbdgqjxO8kIXJRh3f1gBdC4jasLulJ8%2FeLMk%2Fzj%2B%2F8kmkrJtSvEdqBADiIB5guH%2FQKzSj7LNWZfcYjRnwifVJoBqOBDzIFiJEVKIE%2BQFYFQDHrpgY5G6w3Y064UPxATWjC9oSyDLpXPKZvLOSuX9kRqCHrhhhRGBEOmbWBabKQYPVuXrznU8jeg3f%2BjzJD2pFbEs5qWgUmbethBpmYHxs17ODGGa%2BDD%2FGta60ujtNhh2Xm12Bbk2wIgtzEsBgxuHpsz8lvQ16dpKXJ1uWfIWqXZIUekzzPXSNTJcNCa60jzlpGKDpBa4%2BtbdSwrPg1SQJ4h1jqKmPgrC%2BZny%2BDsImk1sY7QrgP6s2WzoD4u3Yl2k%2BeUMIqixskGOqUBPqvp1CU91b5JiLuhgfxrRbQIpVirMVyMsYZn8vrZuLDaY2%2Bj2QSFaNB36UfuKyVQrENXYViTwYxTm7kG4o%2FQt7VVjG5d2ZhCoIrbRiauY19NSa0yIqowYCwhMJr9x0iCDSfNILD%2FbBv7%2FIJNYUoZbn%2FTZb0%2FXQhJqWXyzL9CzARQAwbM%2BmO09RGR4b3ScJIgDLSfANpkFgWCgl%2BXA%2Fbr%2BfgRSvvv&X-Amz-Signature=2a8e5cdf9dbb3ec1ec61cc1d1174c7c98113c79e3ff88b434b6294d8ea02f50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

