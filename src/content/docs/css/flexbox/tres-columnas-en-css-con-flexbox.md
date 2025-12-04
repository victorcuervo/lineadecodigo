---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU3FOJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELBnwDPtzbILmNw%2F%2F%2BBIdSSoWiS0OpVxkyWdYL6hUxpAiEAkpFUJRlEFD50422Gc2a80yt%2BEtAtI6e%2B%2FTbQtKsbEmgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKfNBFgbhf4V%2Fxly8yrcA%2BB%2BpE223itk8qmLRz%2FEyer40Wk6%2Bi8vDkCK%2F0hMQDLV6WcudZUFB9DBA%2FBSePZK2L4X9PUGkotyUhHhUCazfwOL7DeYRYzovOzzrPOOQ%2BjP80ZD5RAdAk9XLUrhGS1dFKNuDtdYWHIfNqoMAX3uE1T4qDpl8C%2BhLKaFJ0%2FNI1jVcZrliaRyvwphByIhved22fXvTAd39DS4dNOHtKlMNNxd6nZeNwUtCgsMZQWVH4Dbo0oKRrasoaEu1Bi%2B2R4F4Yg76sudIvV7jozQaJnr1bqIaObsRUFFaWIVFaW8jlX9wz%2F%2FvxVMT0sBvEi4Nd8NdBmDMVP3iP2Z19QdjaX%2FnwkTiwPk7F7bovYqDjuSAonibjcc%2B8Rfz1qnWCg94ewHvszYLtyjmfFkHale5EBciJdAI3HSTM0S%2Fv2dGrht0R0eOtE%2FwBrFKFyrLV3%2BJqtQpTEj57rBybxmB9bt3wmXs35EvoXYvuS1ZHiSucQpzOkjUcT%2FxJRdOWElNS9jgg0YQeQdkQcy4YNOm2AJt3KMndiMnDnjNaoamy36y9W0fqBMzdR2fsqCnBAZkviR%2FxyQjoD%2BlwWZnEI3KRdxtNbf%2FEnUNBm3I6%2F1c4cGx0X2eF%2FEaFRNc8RavjQ12ygpMJnLxMkGOqUBiB0IGIXu7vRUbZDts0HW0RgRLsK2DmV%2FlXOvAo0HG6ND5e6RzJ0BdIYDnfjjwRhBWFHD16ifrm6ReGAt5HOtQAdwovdj6IMXvxW9fwv7jVIRUdhpjWFQssr5DmCkgv9%2FI8%2FSD3t95xC3fLiyPMfLGnyEfCq00RRlU2hciVkwwqAfqmlXy7HJVm3QN2ct463Ra%2BUlFFKqyXGyLILKMvv25M4paeI9&X-Amz-Signature=3b7dc528ff91c9ff6e19ae7e2a893079da5a8c21cdea04d837474798d684bf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU3FOJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELBnwDPtzbILmNw%2F%2F%2BBIdSSoWiS0OpVxkyWdYL6hUxpAiEAkpFUJRlEFD50422Gc2a80yt%2BEtAtI6e%2B%2FTbQtKsbEmgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKfNBFgbhf4V%2Fxly8yrcA%2BB%2BpE223itk8qmLRz%2FEyer40Wk6%2Bi8vDkCK%2F0hMQDLV6WcudZUFB9DBA%2FBSePZK2L4X9PUGkotyUhHhUCazfwOL7DeYRYzovOzzrPOOQ%2BjP80ZD5RAdAk9XLUrhGS1dFKNuDtdYWHIfNqoMAX3uE1T4qDpl8C%2BhLKaFJ0%2FNI1jVcZrliaRyvwphByIhved22fXvTAd39DS4dNOHtKlMNNxd6nZeNwUtCgsMZQWVH4Dbo0oKRrasoaEu1Bi%2B2R4F4Yg76sudIvV7jozQaJnr1bqIaObsRUFFaWIVFaW8jlX9wz%2F%2FvxVMT0sBvEi4Nd8NdBmDMVP3iP2Z19QdjaX%2FnwkTiwPk7F7bovYqDjuSAonibjcc%2B8Rfz1qnWCg94ewHvszYLtyjmfFkHale5EBciJdAI3HSTM0S%2Fv2dGrht0R0eOtE%2FwBrFKFyrLV3%2BJqtQpTEj57rBybxmB9bt3wmXs35EvoXYvuS1ZHiSucQpzOkjUcT%2FxJRdOWElNS9jgg0YQeQdkQcy4YNOm2AJt3KMndiMnDnjNaoamy36y9W0fqBMzdR2fsqCnBAZkviR%2FxyQjoD%2BlwWZnEI3KRdxtNbf%2FEnUNBm3I6%2F1c4cGx0X2eF%2FEaFRNc8RavjQ12ygpMJnLxMkGOqUBiB0IGIXu7vRUbZDts0HW0RgRLsK2DmV%2FlXOvAo0HG6ND5e6RzJ0BdIYDnfjjwRhBWFHD16ifrm6ReGAt5HOtQAdwovdj6IMXvxW9fwv7jVIRUdhpjWFQssr5DmCkgv9%2FI8%2FSD3t95xC3fLiyPMfLGnyEfCq00RRlU2hciVkwwqAfqmlXy7HJVm3QN2ct463Ra%2BUlFFKqyXGyLILKMvv25M4paeI9&X-Amz-Signature=d7d6e8d93c4b2e0a4cb40f751bb5acdbb8329eeec55f2a712135e8931bf4c447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

