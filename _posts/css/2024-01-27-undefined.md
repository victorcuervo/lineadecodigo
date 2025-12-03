---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCYAWKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCQhhZJLdJZG8hNMVslynhqzCcuXgKIfNfVD0IkrNHU8QIgbbIpVvBDmIr%2FunreNhWtJWFR5AFypD3xAhuPqkUxghsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfm4jPGDJJPsi4D7yrcA8vS7tuAgUiD7FucKhFYr5CPKG1vhIjSzy0sXTMFiuYF0ZOD1ZdSquk5hzkcHUwbl1kC6JG3CQXZAuNlOa20Qf1ysHRxcM%2FgXg4%2Bc5T0KRfTv%2Fmj7ZxPD%2FRU0Cy%2BhytoXOWJmcmog4A7OBx%2B%2FkXE7Hm3gyBBOju6IJlQlbv9St%2F3QNSElg8f76wsBfGx50UnGG%2BQNwSlCqSxEFyK5ecXJzium0W56Iyndk20g4WhAUdihkKXIUK5QmAlH4kJ0pLJOCjZQYGmt3hkBD0c3FpjKJzuxaJVX22YLPEJ%2B9gfgKRdQ4wxHuHmSB8AmMFrMaP1vmZvnQP3R4GE7O9j21T%2F%2BlhOKqBcGl1sYEG7SqTbRF8q8VSFGqxSgodJG6WTGEZfL3jaieqRz5TbkiOUwl0nULpWsl%2BLBui0MJ0wNkRgNNFrqfBXBlPQMLvPoVPFyWKvmGS0W0FT5sGz91Xebp1vSYjdfYsUuH%2FnMsdYU0A4rm7Lm%2FCkXJj4jyFXc%2FgkjK7nK8s9w3zWAgwRhbvvv12PYfHHBZME%2BFItKckRTNGAfTWGcCcTNdEEFoCp4tmfm349fxg%2Bd4UBPMFIMAhpdT4dyxphHXQV2XJZ9MOdNACpQx8pvn4lgLkoHWwMtXFEML2uwMkGOqUBs%2Fd1S5C26XjPWPD0gPFpK6%2Bj3HGPiJfhQPjXr%2FP5B1hPXYhMZvPaLKqgc6Nqvua3X%2FTc%2BoV6AHXEhu%2BcKeqsnGAv9EG87ziRJweMLqxeZcl9C8hddPGuiNFFV0aHejHW%2BMLkbfljyq8b82ku1JjtIM%2FT3fu8%2F4znxHg2SvUOe3y4FVtoWHAVPi8uAO2AWCP29%2BEH%2BW4M%2FcPrlKNqJkr%2FHNV%2BQ%2BsT&X-Amz-Signature=97a4fbeac0118e842d9f502bf136e4d5eaecb29fce4a3a6ded8b3d5c99c79448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCYAWKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCQhhZJLdJZG8hNMVslynhqzCcuXgKIfNfVD0IkrNHU8QIgbbIpVvBDmIr%2FunreNhWtJWFR5AFypD3xAhuPqkUxghsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfm4jPGDJJPsi4D7yrcA8vS7tuAgUiD7FucKhFYr5CPKG1vhIjSzy0sXTMFiuYF0ZOD1ZdSquk5hzkcHUwbl1kC6JG3CQXZAuNlOa20Qf1ysHRxcM%2FgXg4%2Bc5T0KRfTv%2Fmj7ZxPD%2FRU0Cy%2BhytoXOWJmcmog4A7OBx%2B%2FkXE7Hm3gyBBOju6IJlQlbv9St%2F3QNSElg8f76wsBfGx50UnGG%2BQNwSlCqSxEFyK5ecXJzium0W56Iyndk20g4WhAUdihkKXIUK5QmAlH4kJ0pLJOCjZQYGmt3hkBD0c3FpjKJzuxaJVX22YLPEJ%2B9gfgKRdQ4wxHuHmSB8AmMFrMaP1vmZvnQP3R4GE7O9j21T%2F%2BlhOKqBcGl1sYEG7SqTbRF8q8VSFGqxSgodJG6WTGEZfL3jaieqRz5TbkiOUwl0nULpWsl%2BLBui0MJ0wNkRgNNFrqfBXBlPQMLvPoVPFyWKvmGS0W0FT5sGz91Xebp1vSYjdfYsUuH%2FnMsdYU0A4rm7Lm%2FCkXJj4jyFXc%2FgkjK7nK8s9w3zWAgwRhbvvv12PYfHHBZME%2BFItKckRTNGAfTWGcCcTNdEEFoCp4tmfm349fxg%2Bd4UBPMFIMAhpdT4dyxphHXQV2XJZ9MOdNACpQx8pvn4lgLkoHWwMtXFEML2uwMkGOqUBs%2Fd1S5C26XjPWPD0gPFpK6%2Bj3HGPiJfhQPjXr%2FP5B1hPXYhMZvPaLKqgc6Nqvua3X%2FTc%2BoV6AHXEhu%2BcKeqsnGAv9EG87ziRJweMLqxeZcl9C8hddPGuiNFFV0aHejHW%2BMLkbfljyq8b82ku1JjtIM%2FT3fu8%2F4znxHg2SvUOe3y4FVtoWHAVPi8uAO2AWCP29%2BEH%2BW4M%2FcPrlKNqJkr%2FHNV%2BQ%2BsT&X-Amz-Signature=06a9f1cac4736306ef23d6f15950840ce3d9512b4af9253a669ba214c1312501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

