---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXSA77N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3jYIWlyDu6AxsA5OfQcj3H0%2F32i9kPru3ASaiV%2ByWWAiBasVt0STO34KA7Oq79%2BtxEhdtjIqQd5H%2FDK8VocfWLkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTYI3fNp9xKrjihFKtwDJUGPCYLiyZPeQEYkJB8cmJTMmWV%2BafViJjbqEbZeVcVOuoVNbuRcH2AubAsM0%2B3UAnY%2Fj3ksdjPtFQCPmVMhpoTxc0OaMcwe8I8HhVj2xFnLVWMAFB6kEX7giFcjPR6EvtWLYhnwKwVTlV8e1aSIWbfSuiGh5Z9%2FLXNODPpuh0eEz%2BTb%2BVDUIrUEKJKh%2FC3TuQSNeDB2w%2FrSlrFMenuOogvu5kKZCyFWENryEpRZw6oML0A%2Bq6qUIktLURdwI%2BQRMw%2BVuH3NXK5raopVF%2Bs0%2BFu2GOmqvsvRVPK%2BrjEFEsDSmrwaYLN1z1pFmta8T1JyLK9x1ln7RxUPIWWG2wiDAJTdF00K7ubdJKq7VeFmdWLP1RxV%2BRgv55tObirIuW07tSth0K1liUWMRh0L6xehFzUS3id2%2BbTigMhISrBmV3BfJsGED5jx882srrj3kHTo%2BgbsD7S3p0PNSlQ9TYMkT1by4qBYPZ8%2BCRPqJDZpaEZbUJ%2FhN7FwtU1EW4PvraKGqIenjNZcfVSOF1Hibszuids%2FxbP8eMAfPPIhnoAchBlJo5fnrCAAEk6FLjT8864NsUrr1%2FLO1wFc%2F0qUKoxzYFaZri4h91v91OcG5HxDSdKEDe1PmSag4g676TcwrqDUyQY6pgG899zW3ybgDaOFIgK83lgorbD0a4Yye8MlEi2IMGKg%2FOebNa7DZC2lIDwfn9u2%2Ff8XZYw9GzXcfjUdqNRssJMGwS9IUBzwEA5eBuxbUNuiPaepK%2B7gj1P4I408NbV9erpes2tww1qhDC25qQ%2BSD%2BYkMVl44Pz3G0hjm%2F5LcvW1aIDNSfk5uZiuuT8MB%2FABiz%2BSz0KYy%2Fdc90NyLgSHGX7rR3ieLLaB&X-Amz-Signature=b7b12d60f03e32e46b17a3c5397fb34d0f40cdf08dface5d46d71f33c0d45068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXSA77N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3jYIWlyDu6AxsA5OfQcj3H0%2F32i9kPru3ASaiV%2ByWWAiBasVt0STO34KA7Oq79%2BtxEhdtjIqQd5H%2FDK8VocfWLkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTYI3fNp9xKrjihFKtwDJUGPCYLiyZPeQEYkJB8cmJTMmWV%2BafViJjbqEbZeVcVOuoVNbuRcH2AubAsM0%2B3UAnY%2Fj3ksdjPtFQCPmVMhpoTxc0OaMcwe8I8HhVj2xFnLVWMAFB6kEX7giFcjPR6EvtWLYhnwKwVTlV8e1aSIWbfSuiGh5Z9%2FLXNODPpuh0eEz%2BTb%2BVDUIrUEKJKh%2FC3TuQSNeDB2w%2FrSlrFMenuOogvu5kKZCyFWENryEpRZw6oML0A%2Bq6qUIktLURdwI%2BQRMw%2BVuH3NXK5raopVF%2Bs0%2BFu2GOmqvsvRVPK%2BrjEFEsDSmrwaYLN1z1pFmta8T1JyLK9x1ln7RxUPIWWG2wiDAJTdF00K7ubdJKq7VeFmdWLP1RxV%2BRgv55tObirIuW07tSth0K1liUWMRh0L6xehFzUS3id2%2BbTigMhISrBmV3BfJsGED5jx882srrj3kHTo%2BgbsD7S3p0PNSlQ9TYMkT1by4qBYPZ8%2BCRPqJDZpaEZbUJ%2FhN7FwtU1EW4PvraKGqIenjNZcfVSOF1Hibszuids%2FxbP8eMAfPPIhnoAchBlJo5fnrCAAEk6FLjT8864NsUrr1%2FLO1wFc%2F0qUKoxzYFaZri4h91v91OcG5HxDSdKEDe1PmSag4g676TcwrqDUyQY6pgG899zW3ybgDaOFIgK83lgorbD0a4Yye8MlEi2IMGKg%2FOebNa7DZC2lIDwfn9u2%2Ff8XZYw9GzXcfjUdqNRssJMGwS9IUBzwEA5eBuxbUNuiPaepK%2B7gj1P4I408NbV9erpes2tww1qhDC25qQ%2BSD%2BYkMVl44Pz3G0hjm%2F5LcvW1aIDNSfk5uZiuuT8MB%2FABiz%2BSz0KYy%2Fdc90NyLgSHGX7rR3ieLLaB&X-Amz-Signature=3f07d01ddfe03e5f9875e97806f8a6f86151502e7990b533ba4f02a212c2a332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

