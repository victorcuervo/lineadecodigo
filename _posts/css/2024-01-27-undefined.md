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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3Q62KC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHFYWhqZqdcLCrodcmNRJOc8dpeplG5ACeqOnBaj99URAiEA3ml8bZgE69eqilvVFyMQ5hBmHKxBR%2F6D1roxYoqye50q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAxBqeVnBgmNT72mvyrcA7utqB4fwkimfwDTGBWZKnZhaeRCCNjQzIkt44Utv4nmrlHlagGgzHWNdE4czweigORPBBTslG3dL%2FlfxzkeEFYLqBGISPpMD2UPvsKW0bA6AW1S81OtG5blGDg%2FxvxsUNN6%2BpyEOqeXC7JKcejGrWQeOJOkn9t2CgxP4i%2F4%2BF52eX1aBFJj6lxtK0EoelzA63ZuZ1GRsU7R0WG53PAqgcmPMmPhs%2BcVQ63bLsnVH1Ec9hV4wEidAMKwTrQTnf4SEiQWSy9tSD0LRQwVnH5GFhTSyQqVZwSV%2FiPiddBbCZI9ovwHk1oK2rvpqyPZALzUIvtXzMLflTOa0vtAiC%2BjHrfTfllBMvawPYRX%2B3mJgx7gNRIcYvgECCf6ae6MQaQU1L5zw7wjJOyTndSWziiVmwhXPXYkysB%2Fr2qDUmGEcuM61%2BekPBafw85JXcCBIE7rmkfQV%2BxQpNMD94RYBZAJaUCt%2BYxA8iR1kCC6G%2ByD2uJQF36z%2FLA9v%2FO97woKsZ0pJwlBfpqSkcgIQfnt3iTpkQv0hjLm2c2O0kVhdm4uFqa%2BkiZ9EqG6ql7VjV%2Bcavja1nLFsLHLSjLnPAq1alCRuYh9UQCwrUyhLcFz4MUmLtdg%2BbjdOiHOyxfBzydXMO3%2BvckGOqUBaliEXyrjicLrGaIPZX%2F2Clcde%2FtVwDQ5eHMk7FU6w8WnNNEaM4Ql1fbJF1mOe%2BpyIkhW%2BuQhzdvrh5Ue23w94IGu7YNaF%2FD9MxVS9XGRjVwmFBQN9uUf4pEbdtiIdMX0FtWLmtfxojU8sZqPnNSdJ77%2FO1SGsp%2BvVYEVeNfPSP2%2BTfshhZYeJPb2M5VLvrxd%2FS0QuqvlaU%2BIncFrISX%2BlqaMvtql&X-Amz-Signature=e7b1d84bcfc7e384cc112247c1ceaed369e2e80abb7927d409f1bd7b1f7c5d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3Q62KC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHFYWhqZqdcLCrodcmNRJOc8dpeplG5ACeqOnBaj99URAiEA3ml8bZgE69eqilvVFyMQ5hBmHKxBR%2F6D1roxYoqye50q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAxBqeVnBgmNT72mvyrcA7utqB4fwkimfwDTGBWZKnZhaeRCCNjQzIkt44Utv4nmrlHlagGgzHWNdE4czweigORPBBTslG3dL%2FlfxzkeEFYLqBGISPpMD2UPvsKW0bA6AW1S81OtG5blGDg%2FxvxsUNN6%2BpyEOqeXC7JKcejGrWQeOJOkn9t2CgxP4i%2F4%2BF52eX1aBFJj6lxtK0EoelzA63ZuZ1GRsU7R0WG53PAqgcmPMmPhs%2BcVQ63bLsnVH1Ec9hV4wEidAMKwTrQTnf4SEiQWSy9tSD0LRQwVnH5GFhTSyQqVZwSV%2FiPiddBbCZI9ovwHk1oK2rvpqyPZALzUIvtXzMLflTOa0vtAiC%2BjHrfTfllBMvawPYRX%2B3mJgx7gNRIcYvgECCf6ae6MQaQU1L5zw7wjJOyTndSWziiVmwhXPXYkysB%2Fr2qDUmGEcuM61%2BekPBafw85JXcCBIE7rmkfQV%2BxQpNMD94RYBZAJaUCt%2BYxA8iR1kCC6G%2ByD2uJQF36z%2FLA9v%2FO97woKsZ0pJwlBfpqSkcgIQfnt3iTpkQv0hjLm2c2O0kVhdm4uFqa%2BkiZ9EqG6ql7VjV%2Bcavja1nLFsLHLSjLnPAq1alCRuYh9UQCwrUyhLcFz4MUmLtdg%2BbjdOiHOyxfBzydXMO3%2BvckGOqUBaliEXyrjicLrGaIPZX%2F2Clcde%2FtVwDQ5eHMk7FU6w8WnNNEaM4Ql1fbJF1mOe%2BpyIkhW%2BuQhzdvrh5Ue23w94IGu7YNaF%2FD9MxVS9XGRjVwmFBQN9uUf4pEbdtiIdMX0FtWLmtfxojU8sZqPnNSdJ77%2FO1SGsp%2BvVYEVeNfPSP2%2BTfshhZYeJPb2M5VLvrxd%2FS0QuqvlaU%2BIncFrISX%2BlqaMvtql&X-Amz-Signature=36c9c3b7c9610c4a5fd62ad676a99f86ea2107342f77437817a0f76221a44b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

