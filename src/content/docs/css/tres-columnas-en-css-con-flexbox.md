---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWVHMN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFvE%2F0VlFZA%2BD2TnplcKsbT0fS%2BKp0OC4%2FNVYndFX69yAiARvv9CqjsLRFFWd43mar4Dkl1lkIVIG%2BWd9c%2ByLkz%2B1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMSIc7d4uxcks3ssFVKtwDOSDbP8R6VCkkUAI1%2Fg3Ng%2Blk4Nj2KsMZHRjTSQmyQglmb%2FaMHc%2FbwBuNyitEHfaWkB5BdYskaVcQDSzcBuhFmgM%2BM6ZSJptKWcw00fJd%2BrCL95ySWhEe4LdYLQ8KJaeJp1vXFxHoTBdM4elb8suYpgc84oyuawShjarFHfE4CSGVt596PHX3LSjJhG8H%2BqIM%2FPPqDa4iYxxTsm4rJwX46GLZdfNqo5kSTMmyw0jaOjTcX%2BYESgwZdWa9HUaYwpxIH9WUz29JoZeWH63LHZdVIgp%2Bc91A9fTNLNYnBpP7bgCrrO0UU5w13Pp1qf80hpGfI2YW4AmBCYazL365oGoX0UeqmXxpKLlGvcyYojeG1Jvr3F1pT3J9%2BMqUiqb8yeRP%2Bwou4t6NPezImtiThrZGoYmJJuFbPhFALTQ11cSsMash8msz9y0uY41HKKYaCpCSpnmgDBrCf4BSl4cBMUtsfhJrv0Jhy3GzckTv7NGBBD%2BXfDKOUQMBiCk%2Bfw3ploWgfLF6UzH4%2BimjX6UetbJIvcOVqd4KdcrnaPHBIkliL0l6cMBdcWl99C%2BKwGMEG1KHftbkewXaAy2b5qbWFq1zbGNPXDJdnm%2BqEf5ItN8RzrZ2okMJ8ubuMDMBhZQwir3CyQY6pgFvYzyyEe9Z%2Bdm9B%2F%2BlCpcBCrCkSRY2wFj3o3bzfN4FoTUjqOahFmlGtxv4hXcvzp4X9Aj8MLmFpbimAONzvn0Et2KIVxwYNbeEJNWBUpQUDjYD%2B%2B0Eb%2FwpfTGm70eiiv%2FejpZCswPyma%2Bno4MRo9a6OnipzzzZy9BT9S1gz9IooYHzsmLx8CevLnAaqPk2EO5yNwVIDrV0VQOI7F8U8k6tNagV3npn&X-Amz-Signature=2ae8d46f3d291f561d159b11a0b0281035bcc809d8f6d4c8b3d1e811b2d5a0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWVHMN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFvE%2F0VlFZA%2BD2TnplcKsbT0fS%2BKp0OC4%2FNVYndFX69yAiARvv9CqjsLRFFWd43mar4Dkl1lkIVIG%2BWd9c%2ByLkz%2B1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMSIc7d4uxcks3ssFVKtwDOSDbP8R6VCkkUAI1%2Fg3Ng%2Blk4Nj2KsMZHRjTSQmyQglmb%2FaMHc%2FbwBuNyitEHfaWkB5BdYskaVcQDSzcBuhFmgM%2BM6ZSJptKWcw00fJd%2BrCL95ySWhEe4LdYLQ8KJaeJp1vXFxHoTBdM4elb8suYpgc84oyuawShjarFHfE4CSGVt596PHX3LSjJhG8H%2BqIM%2FPPqDa4iYxxTsm4rJwX46GLZdfNqo5kSTMmyw0jaOjTcX%2BYESgwZdWa9HUaYwpxIH9WUz29JoZeWH63LHZdVIgp%2Bc91A9fTNLNYnBpP7bgCrrO0UU5w13Pp1qf80hpGfI2YW4AmBCYazL365oGoX0UeqmXxpKLlGvcyYojeG1Jvr3F1pT3J9%2BMqUiqb8yeRP%2Bwou4t6NPezImtiThrZGoYmJJuFbPhFALTQ11cSsMash8msz9y0uY41HKKYaCpCSpnmgDBrCf4BSl4cBMUtsfhJrv0Jhy3GzckTv7NGBBD%2BXfDKOUQMBiCk%2Bfw3ploWgfLF6UzH4%2BimjX6UetbJIvcOVqd4KdcrnaPHBIkliL0l6cMBdcWl99C%2BKwGMEG1KHftbkewXaAy2b5qbWFq1zbGNPXDJdnm%2BqEf5ItN8RzrZ2okMJ8ubuMDMBhZQwir3CyQY6pgFvYzyyEe9Z%2Bdm9B%2F%2BlCpcBCrCkSRY2wFj3o3bzfN4FoTUjqOahFmlGtxv4hXcvzp4X9Aj8MLmFpbimAONzvn0Et2KIVxwYNbeEJNWBUpQUDjYD%2B%2B0Eb%2FwpfTGm70eiiv%2FejpZCswPyma%2Bno4MRo9a6OnipzzzZy9BT9S1gz9IooYHzsmLx8CevLnAaqPk2EO5yNwVIDrV0VQOI7F8U8k6tNagV3npn&X-Amz-Signature=777de0fb67113fca3302bc2cad0646ccee551895dbd1c02119c7553a78980c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

