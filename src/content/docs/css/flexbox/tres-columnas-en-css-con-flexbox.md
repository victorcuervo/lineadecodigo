---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CW56L4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARvCAL8smS0BA5LVqb3t12cC1q7ZkXOhVPGOVIxHdTuAiA7cfxbfICuc7bzkp3nWjmUpftE3xw%2B7jQqfjiVQrLpxyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhISK7jBRgc8PFj4zKtwDBCusFElGuAZvCQi19HKbi%2BrVRxiCJ5c%2B%2BC19PpHtOaiY8SUz9CzICS20%2FiHOv9XEjbhQ1tokhj0Qj40SsEl8GXDeH6Tnb8cWUbVaw1mwHfotS%2FPDNMnLy6x5Jcq4hxlDAA9DAFUhT%2Fof2lhzrck4VOkidJQGFN2GETMqShyz8dXnhXvEDjog7NZdCikKUHK%2BtwD4FGTKZkK5I6jW0AwjhfGbEB91Jf3mpYGwRXkHO2fXGfrHE%2F9EWpQODvkHDI6rbdabHacoO90RaNmTRMpfIEx5l3Z9C0Jf8uJynS8Uw5dSY8jh7oALVXAtOP45URYl7AK4A4SI07xp6R0FJTh1WxnZq5mXTawr7xHXxp%2FB4dXZm49JsHnRhZ%2B%2FMn3mcK82tDM4ndJqvaaFKsv630VPRr30YUJQS7yl6tNd4IfMGl9HhaJNfriea4SBe37mKjhcu1BLLD7PyMJ91%2BXpJfKMSTNc3QUcl8LfJ6%2BjT2xRzwwavLYBgqqrx7cVejF7VxYi5FwSKcgWxA5N9sCtpeOlLeYWOlDsSNqCAuWHSttTFM7UauaY1ye8hONUZ7U3JEOyBsuyPb7bNa9pJkwfKLhy39C23C20TSYsyjO1f7unE9TDLaVUfkWkLTnMTKswj8HbyQY6pgFTIGfi92Wi9brco59o0bcIlYrxAshiYK62flcUh3CyeezqzZSbCJvEZphyJhmHatJ1eRYZ2uKEOymRlUnBC0nQ8%2FcI%2FoYOmDX%2F3MBnLLyLOq8sORju%2FDQ%2BYvwX0na3D8DuQXFlpaGqo5Kdhm2pmnT3Eb87ad2JpNNDexkZVGWSzeY5KH5k2tkmWAe00vbjUAkqapnjDckcHfY0fsX7altHdybrxa%2FS&X-Amz-Signature=29c6425d1d5a40aabe9a71f87440086d3dc8faca8a21e591867b46f442b37e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CW56L4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARvCAL8smS0BA5LVqb3t12cC1q7ZkXOhVPGOVIxHdTuAiA7cfxbfICuc7bzkp3nWjmUpftE3xw%2B7jQqfjiVQrLpxyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhISK7jBRgc8PFj4zKtwDBCusFElGuAZvCQi19HKbi%2BrVRxiCJ5c%2B%2BC19PpHtOaiY8SUz9CzICS20%2FiHOv9XEjbhQ1tokhj0Qj40SsEl8GXDeH6Tnb8cWUbVaw1mwHfotS%2FPDNMnLy6x5Jcq4hxlDAA9DAFUhT%2Fof2lhzrck4VOkidJQGFN2GETMqShyz8dXnhXvEDjog7NZdCikKUHK%2BtwD4FGTKZkK5I6jW0AwjhfGbEB91Jf3mpYGwRXkHO2fXGfrHE%2F9EWpQODvkHDI6rbdabHacoO90RaNmTRMpfIEx5l3Z9C0Jf8uJynS8Uw5dSY8jh7oALVXAtOP45URYl7AK4A4SI07xp6R0FJTh1WxnZq5mXTawr7xHXxp%2FB4dXZm49JsHnRhZ%2B%2FMn3mcK82tDM4ndJqvaaFKsv630VPRr30YUJQS7yl6tNd4IfMGl9HhaJNfriea4SBe37mKjhcu1BLLD7PyMJ91%2BXpJfKMSTNc3QUcl8LfJ6%2BjT2xRzwwavLYBgqqrx7cVejF7VxYi5FwSKcgWxA5N9sCtpeOlLeYWOlDsSNqCAuWHSttTFM7UauaY1ye8hONUZ7U3JEOyBsuyPb7bNa9pJkwfKLhy39C23C20TSYsyjO1f7unE9TDLaVUfkWkLTnMTKswj8HbyQY6pgFTIGfi92Wi9brco59o0bcIlYrxAshiYK62flcUh3CyeezqzZSbCJvEZphyJhmHatJ1eRYZ2uKEOymRlUnBC0nQ8%2FcI%2FoYOmDX%2F3MBnLLyLOq8sORju%2FDQ%2BYvwX0na3D8DuQXFlpaGqo5Kdhm2pmnT3Eb87ad2JpNNDexkZVGWSzeY5KH5k2tkmWAe00vbjUAkqapnjDckcHfY0fsX7altHdybrxa%2FS&X-Amz-Signature=eb1d30a25547016677fcd3ca2b909f5068d26d161098636da4eaed731f4a6dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

