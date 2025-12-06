---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5T2G4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo27wsIcCQiT7LGf%2Bz5BVAOYtwt9NgGsvr3WpurOn1LAIhAJzkayk6wN0ib2ty48mKeK6MnYBpd1BOEs3YJfhmPqHqKv8DCHEQABoMNjM3NDIzMTgzODA1Igy0thqqn6eahZ6uescq3AOeM7Awvk6YF6LkdOuNYpSNJ8ZbtpGTZQPdy1paSza1epcMNPuiTiYns81v2U%2BDMVW9%2BqkNCjkN4BMPkCwO2Ol3u3pB7ENRftOiwmUPGM43O%2BAVGZuyDomkeCpqovXcZjSWjYUdQwykJnFpr2WmvpjKnmEZQueu6EIy4humcr82Of%2B07EQHkcKQnts%2Bz%2Bam74qJYAl4Cy3XbW4Gkc8iNcuVIaOd%2B%2BoIbX7EnpXaD7h5X1yep03q%2F%2FOfViZ%2FfDUxWQ3HNaahHU9lzYpsAgn7G0AIqNkdukW92TEpyUgjv67y%2BwXQ2d2fwJLiN%2FTRaO8qCMWDVh068EOwafd%2Bir08uvbiUEMGaZhh%2FFHBm5ZWlMAf2f9DJVKBAkOwTlVHQc%2BsOVqBuMBW4t2qfNiTD4W5MD2tQpAPpT2WTuOdfDEA3gAtqM11pgfhphKejKh120KHTTXQogowZ57SLdSTvIFaa5M5ZbGMCIwra7YDuZPf5nLHZ%2F43YMmxA7c%2B3r5drlhY%2F451K%2B79YhCuS9z%2Fologv7AsvdgzKeTeAq3GpLejUV%2BfDJVjXbCs86UCXV12cKKOKchyLtQzz%2FJEZmrzz7OIbCCvI8bdOsKAzZ5Qe32DmXrE9pWdocB3lJ02EJRdHTDsvM%2FJBjqkAZ2doOlwMnfyKb0Mry%2B0J%2F%2FX%2FPP8VGPytmtOD43dJqxUkDrNYGa3Nu52YNvYwznGLL%2FND6cQFWl35l7tLDdIlrGQChXxDiovOAqvn3oW6RgD7kkoSe%2BeMBkl0er7wC1DGTv4Ue%2BtTpimRH5tHlTTUYJbw9WNMnFMPFC0L6wfAlz6BPKPlXuQV2qpvI7lYfoUmEjgLYuXMrAeyMNprp3gYv4J8uo%2F&X-Amz-Signature=f909a75436ffc74880da93da67a086fd2d2ce17422026ca45a4eb6a5202ac87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5T2G4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo27wsIcCQiT7LGf%2Bz5BVAOYtwt9NgGsvr3WpurOn1LAIhAJzkayk6wN0ib2ty48mKeK6MnYBpd1BOEs3YJfhmPqHqKv8DCHEQABoMNjM3NDIzMTgzODA1Igy0thqqn6eahZ6uescq3AOeM7Awvk6YF6LkdOuNYpSNJ8ZbtpGTZQPdy1paSza1epcMNPuiTiYns81v2U%2BDMVW9%2BqkNCjkN4BMPkCwO2Ol3u3pB7ENRftOiwmUPGM43O%2BAVGZuyDomkeCpqovXcZjSWjYUdQwykJnFpr2WmvpjKnmEZQueu6EIy4humcr82Of%2B07EQHkcKQnts%2Bz%2Bam74qJYAl4Cy3XbW4Gkc8iNcuVIaOd%2B%2BoIbX7EnpXaD7h5X1yep03q%2F%2FOfViZ%2FfDUxWQ3HNaahHU9lzYpsAgn7G0AIqNkdukW92TEpyUgjv67y%2BwXQ2d2fwJLiN%2FTRaO8qCMWDVh068EOwafd%2Bir08uvbiUEMGaZhh%2FFHBm5ZWlMAf2f9DJVKBAkOwTlVHQc%2BsOVqBuMBW4t2qfNiTD4W5MD2tQpAPpT2WTuOdfDEA3gAtqM11pgfhphKejKh120KHTTXQogowZ57SLdSTvIFaa5M5ZbGMCIwra7YDuZPf5nLHZ%2F43YMmxA7c%2B3r5drlhY%2F451K%2B79YhCuS9z%2Fologv7AsvdgzKeTeAq3GpLejUV%2BfDJVjXbCs86UCXV12cKKOKchyLtQzz%2FJEZmrzz7OIbCCvI8bdOsKAzZ5Qe32DmXrE9pWdocB3lJ02EJRdHTDsvM%2FJBjqkAZ2doOlwMnfyKb0Mry%2B0J%2F%2FX%2FPP8VGPytmtOD43dJqxUkDrNYGa3Nu52YNvYwznGLL%2FND6cQFWl35l7tLDdIlrGQChXxDiovOAqvn3oW6RgD7kkoSe%2BeMBkl0er7wC1DGTv4Ue%2BtTpimRH5tHlTTUYJbw9WNMnFMPFC0L6wfAlz6BPKPlXuQV2qpvI7lYfoUmEjgLYuXMrAeyMNprp3gYv4J8uo%2F&X-Amz-Signature=4e81f337bafd6a67f41cf1451531e73c6f4d269d42bffb29216c52644a310898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

