---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCN6OA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE6S3p7gOf5Pj0T5sHGmdvAJHYEYPTT%2BB%2FZzkvWZGmswAiEAy4u9pr5B0PKAEmkk3FMUt6OgAeNbMQu1H0ya%2BjILldgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDxtCGpwwEZIn2%2BQWSrcAyiwkjco%2BtCE%2FtKL1GiA3zUYb3eVaVy8z%2Bz2uNLONVFQYyKVc6WCD48MuNPvHG5reLElM7rVDNZ0B4TptwOmaQnp8FU31FrQb2NVmjcwMXRjHgggDNz2EsRkxaSxj3SnTXyl9gHBik0hJovcDTUImmKs0Flo03Hi9Hzic4uzLgSuxmSwUjC5s9gKxUdB%2FfSQtS8UXHN1%2F6YPnSzW2Q0bEyFIduO1O9OQUwDNCbEAyE9OlPLxsGVzQ4yE10wFN29iKEYEgU9fziyQVVCxdukPQoFcqMyJ5kIJl29sx5raxed4A2LND2fyVCHMWST203LfYp9KYG2owfcoMCl%2F7K6TUnT2VpUl7P3XxWAGRLEwDegAdaXjNFjXAsWBcQE0FWBWp8ewqp8fYa4SBD3yfZTxRNGu7X0%2F7PI7gZGdjiDo%2B76uCMW%2B2qF7ayfbsikV1lxrxDdvKLVJ%2FxHvmF1H%2B%2FL53E8mwdJIlNHWlZCZVEV5nNHJPBBAxRKV40XGSg95PZnp32es2BZlm%2Fuwl5J3i5e1zYVvVayejF24EzTyYNhza8ggUAf21AUPtBBMpPrnB8M6RY90lv5uF9pKeHyCzag9oVDmwXDKeu4AcdCH5iIHCauB9XGj8rLr1lHMV%2BloMPzzw8kGOqUBdiwIcCWA1vByLPMTJXivSJ904a1a2qU8lRZCW2wq5wil%2BnsZwbVOKdLfWNPSYM2FHU%2FfChaNIGVBmHYBwoGpRi7CtMQaa4OdpRrcuQYaC8gZsxlZqUwxWqfC3j%2Ffh4t%2F7eVoKpQPHHnZByaxqJQ29QN5LmJjM4FwgYqnMIZogVXYbrnlFL1qtU5TBd49rY7wXzR6lF22Jh%2FU%2BUJg3gkFW5FyjcDy&X-Amz-Signature=7ca6f6c43bdd1ef21592298dbd59ed498ec1f56acadd160f203fe8443bf6c727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCN6OA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE6S3p7gOf5Pj0T5sHGmdvAJHYEYPTT%2BB%2FZzkvWZGmswAiEAy4u9pr5B0PKAEmkk3FMUt6OgAeNbMQu1H0ya%2BjILldgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDxtCGpwwEZIn2%2BQWSrcAyiwkjco%2BtCE%2FtKL1GiA3zUYb3eVaVy8z%2Bz2uNLONVFQYyKVc6WCD48MuNPvHG5reLElM7rVDNZ0B4TptwOmaQnp8FU31FrQb2NVmjcwMXRjHgggDNz2EsRkxaSxj3SnTXyl9gHBik0hJovcDTUImmKs0Flo03Hi9Hzic4uzLgSuxmSwUjC5s9gKxUdB%2FfSQtS8UXHN1%2F6YPnSzW2Q0bEyFIduO1O9OQUwDNCbEAyE9OlPLxsGVzQ4yE10wFN29iKEYEgU9fziyQVVCxdukPQoFcqMyJ5kIJl29sx5raxed4A2LND2fyVCHMWST203LfYp9KYG2owfcoMCl%2F7K6TUnT2VpUl7P3XxWAGRLEwDegAdaXjNFjXAsWBcQE0FWBWp8ewqp8fYa4SBD3yfZTxRNGu7X0%2F7PI7gZGdjiDo%2B76uCMW%2B2qF7ayfbsikV1lxrxDdvKLVJ%2FxHvmF1H%2B%2FL53E8mwdJIlNHWlZCZVEV5nNHJPBBAxRKV40XGSg95PZnp32es2BZlm%2Fuwl5J3i5e1zYVvVayejF24EzTyYNhza8ggUAf21AUPtBBMpPrnB8M6RY90lv5uF9pKeHyCzag9oVDmwXDKeu4AcdCH5iIHCauB9XGj8rLr1lHMV%2BloMPzzw8kGOqUBdiwIcCWA1vByLPMTJXivSJ904a1a2qU8lRZCW2wq5wil%2BnsZwbVOKdLfWNPSYM2FHU%2FfChaNIGVBmHYBwoGpRi7CtMQaa4OdpRrcuQYaC8gZsxlZqUwxWqfC3j%2Ffh4t%2F7eVoKpQPHHnZByaxqJQ29QN5LmJjM4FwgYqnMIZogVXYbrnlFL1qtU5TBd49rY7wXzR6lF22Jh%2FU%2BUJg3gkFW5FyjcDy&X-Amz-Signature=92e6a1a44f09c49db3073af4d753ae9725799598d68235e6cc7a9e368275f81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

