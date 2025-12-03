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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656IPUKWH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBPryifjVNo8dOdoUs8V1%2FXZ1CwQpe%2FMysE5YjVpu4urAiEAp3LNu2II5iUow7RIaM9wcqonxjX8ujS6DVFeNx7L6JEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJhCUThhhDIV5zFWtSrcAzSGCDc3wFLgmBzpAvRhAXE4Q9fmo98nzAT4RMzH5LEjXQSfXLdDJzRwRPoD6%2BawWe2gOHd8LHzbF%2B1NNK%2BxpRdo4geQ5oe9OL8Bpgpb%2F2QRMjdMhjoGqu629CNxH%2Bwcjb9qz8z0eiE5Il31S3qErowsGVGqSS7ARiuy3ESMQodx%2BjvPGXAhtw0SQFFRUbKBalu0QjalMdT1rxs0M5su9z14X90RkvffbA2R8mRalES1CEX9rREEeWsQk6xwt%2BnxF0WBORa08VKtkSZJajC%2Bf8z3smv9JBtYA%2FJDsP%2FI9upsEQhSd8kxobfW7lfTNIKYNNtA06mIeOGOm0gw2vMy1IBnB4tVkrX1UZpk%2BbqDM307d9ITFvZky6W37%2FdnyRjo0MAhQDEQppO6riTRBZs9ZOlyc1L8JGGEgfn5EnBMSLTPLg9yrJ7%2BAzqZvLHCHUWjoAFGYU2UgIQc7KxRlmr%2FNXdynFALGMb6tN3hU8auE8txbpjLN6O7IgLCRQIpspsWsI%2FRwRXk8CZwH21LWuM8PnJJneo50BRh0ot4qUaD4aezYjjur6SImWO74dS1Ao02Uk444%2BLg%2BSZCRawFIA1s1WLd1unkJ7VV9dA8JT8%2FEle2y67ybNbOcCzv72S2MIyIwckGOqUBQFcDFkRLzbJDa75bhyZHXwsH50g0YgqcUxkn%2Brkm4IkwoGG8ewDVsoZzHPO6KLNy0hu6ayn9nmUMBr328ZN1KMM6AHv5M6Io2nY0BqNB9xW%2FNWgKWQAxk6%2FjFIi3i6ozSWYAPrLlOSojMfASgNjWZNu4uFu%2BajKlryGNAaK%2FFXQfb4xapn%2F58Rr6v1%2BaGbMaPZd4PrqXJy7zpm%2F7fcLb2DvnvtwM&X-Amz-Signature=15ec5f647636f29340265a321ce46bf594d8c18dae621d578b6af30a56d50c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656IPUKWH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBPryifjVNo8dOdoUs8V1%2FXZ1CwQpe%2FMysE5YjVpu4urAiEAp3LNu2II5iUow7RIaM9wcqonxjX8ujS6DVFeNx7L6JEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJhCUThhhDIV5zFWtSrcAzSGCDc3wFLgmBzpAvRhAXE4Q9fmo98nzAT4RMzH5LEjXQSfXLdDJzRwRPoD6%2BawWe2gOHd8LHzbF%2B1NNK%2BxpRdo4geQ5oe9OL8Bpgpb%2F2QRMjdMhjoGqu629CNxH%2Bwcjb9qz8z0eiE5Il31S3qErowsGVGqSS7ARiuy3ESMQodx%2BjvPGXAhtw0SQFFRUbKBalu0QjalMdT1rxs0M5su9z14X90RkvffbA2R8mRalES1CEX9rREEeWsQk6xwt%2BnxF0WBORa08VKtkSZJajC%2Bf8z3smv9JBtYA%2FJDsP%2FI9upsEQhSd8kxobfW7lfTNIKYNNtA06mIeOGOm0gw2vMy1IBnB4tVkrX1UZpk%2BbqDM307d9ITFvZky6W37%2FdnyRjo0MAhQDEQppO6riTRBZs9ZOlyc1L8JGGEgfn5EnBMSLTPLg9yrJ7%2BAzqZvLHCHUWjoAFGYU2UgIQc7KxRlmr%2FNXdynFALGMb6tN3hU8auE8txbpjLN6O7IgLCRQIpspsWsI%2FRwRXk8CZwH21LWuM8PnJJneo50BRh0ot4qUaD4aezYjjur6SImWO74dS1Ao02Uk444%2BLg%2BSZCRawFIA1s1WLd1unkJ7VV9dA8JT8%2FEle2y67ybNbOcCzv72S2MIyIwckGOqUBQFcDFkRLzbJDa75bhyZHXwsH50g0YgqcUxkn%2Brkm4IkwoGG8ewDVsoZzHPO6KLNy0hu6ayn9nmUMBr328ZN1KMM6AHv5M6Io2nY0BqNB9xW%2FNWgKWQAxk6%2FjFIi3i6ozSWYAPrLlOSojMfASgNjWZNu4uFu%2BajKlryGNAaK%2FFXQfb4xapn%2F58Rr6v1%2BaGbMaPZd4PrqXJy7zpm%2F7fcLb2DvnvtwM&X-Amz-Signature=775ab71a48ac04f85d8df8b057e79a11be251659a23ea1b6746bdc64051fdbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

