---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLZ5ETX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD9HjaCCVVEgYo9KpeHAx6e%2Fv6acG4Hx%2FM4LVacc4z8GwIhANFy238bLI0%2BEOVZfw7RtcsNwNcBPN%2FKZ5LL79bDKdS2Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzZ0p5L%2Be8CFdewpX4q3ANCow%2FhjbSGAEmzcd43VR8e7JnWR%2Bi7k0UeoBoVFc42ZmNXcQCd8afxfeCsBzqp8nGtrxZDJHx2BrkXJ%2BvSJ%2Fyfz7pJAE0i7%2Fh9J952U3J9dBFq1Y0XGICV9eS2rgPtjw4iJBvPBTFdohqAK6DUpehQpTruBX01PD5YsnPbpu2sVDJ5eEPqLfaSMpgQtIaR873pRaOMUAsPaenASi%2BLd%2FOIdfhqNdxc%2Bnh2PnaYkuJxTBE0%2BdPwpDXhZyrmGSdkzTyLY6I5Ta5ztf5e%2FdeLr8NSvijALIHOeVPI9RSIz25JMFx3pJACUloNRtPOA7slC%2FPaY4Aqg9lpTxUVYDSHnZFh4axtjgxqPQ8We288qZkX9ibZa41ogYt7Q0oPbnPGEtCXIp18UfsS8QJptoImiIPYUV8HuXoe52NWq5ZrxaT7pFOr0cJXVg8vYxfqw8Pic7MAohzEK0zVeE8NAzYFBr4gTQBnk67V%2FbwOgeSq%2BcBIStrkISVERuR8M%2FEXq%2FKg0PiBRes%2Fmq3JPBQMnyyFReTb0q%2BqU4opONxUWsV2lNXKEtSo83YJ4SCOThXvxgKYaLOIfM1gMgj2Djir%2F3bZ7FCbUVwieq%2F4sBd%2BC35n3TaR5YIYSz88SDY2jrIWETDa98LJBjqkAYgLPs04E7eVrhL4AcotxerETsacVtNwWwO2Vi8sq6YPs%2FV7M3PiWz5ejpQS7ZeoK1uusZkCZXquYXq6%2FvkGcAxanaGhMoiXVm2qkPIZC4%2BohPwSO6HQPxkYJVLk0uHSi379QTUNVcL%2BmLj9ETMTqvhF0mEKiBixGwsisq0D9gr3%2Bv29ZmFSfhHibmPFTsvbseHY%2Fw3R0AfbAb3l6da1WyZnp4gy&X-Amz-Signature=ed1720c4a7cc1383e275f284a57741beb703260d9bf8ccbd8e8f3bd1d86a964f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLZ5ETX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD9HjaCCVVEgYo9KpeHAx6e%2Fv6acG4Hx%2FM4LVacc4z8GwIhANFy238bLI0%2BEOVZfw7RtcsNwNcBPN%2FKZ5LL79bDKdS2Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzZ0p5L%2Be8CFdewpX4q3ANCow%2FhjbSGAEmzcd43VR8e7JnWR%2Bi7k0UeoBoVFc42ZmNXcQCd8afxfeCsBzqp8nGtrxZDJHx2BrkXJ%2BvSJ%2Fyfz7pJAE0i7%2Fh9J952U3J9dBFq1Y0XGICV9eS2rgPtjw4iJBvPBTFdohqAK6DUpehQpTruBX01PD5YsnPbpu2sVDJ5eEPqLfaSMpgQtIaR873pRaOMUAsPaenASi%2BLd%2FOIdfhqNdxc%2Bnh2PnaYkuJxTBE0%2BdPwpDXhZyrmGSdkzTyLY6I5Ta5ztf5e%2FdeLr8NSvijALIHOeVPI9RSIz25JMFx3pJACUloNRtPOA7slC%2FPaY4Aqg9lpTxUVYDSHnZFh4axtjgxqPQ8We288qZkX9ibZa41ogYt7Q0oPbnPGEtCXIp18UfsS8QJptoImiIPYUV8HuXoe52NWq5ZrxaT7pFOr0cJXVg8vYxfqw8Pic7MAohzEK0zVeE8NAzYFBr4gTQBnk67V%2FbwOgeSq%2BcBIStrkISVERuR8M%2FEXq%2FKg0PiBRes%2Fmq3JPBQMnyyFReTb0q%2BqU4opONxUWsV2lNXKEtSo83YJ4SCOThXvxgKYaLOIfM1gMgj2Djir%2F3bZ7FCbUVwieq%2F4sBd%2BC35n3TaR5YIYSz88SDY2jrIWETDa98LJBjqkAYgLPs04E7eVrhL4AcotxerETsacVtNwWwO2Vi8sq6YPs%2FV7M3PiWz5ejpQS7ZeoK1uusZkCZXquYXq6%2FvkGcAxanaGhMoiXVm2qkPIZC4%2BohPwSO6HQPxkYJVLk0uHSi379QTUNVcL%2BmLj9ETMTqvhF0mEKiBixGwsisq0D9gr3%2Bv29ZmFSfhHibmPFTsvbseHY%2Fw3R0AfbAb3l6da1WyZnp4gy&X-Amz-Signature=058b683d1d0ae0cd919b083913030ce8777aa9ca08c56e714c959e8274509c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

