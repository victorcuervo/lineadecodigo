---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX2XBIU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDrKGUbsopH55oHjFPfDPjiyErOWOc%2BBp4hwCxhuqx1cAIgNwW%2BA3dL3VafO2G7YMZh4wnU5%2FG3VLql5x5A%2F%2Bp0%2B%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJMqLEP64H%2BDXjYKFyrcAyuWlKBpX9c2xz5hZkRZlel8G3MIkNdzlapa0ZOfebaZ5uAqjYgC2TAoxhrieAPPL8cU80%2BOGaH8h3LMQz2s3bQDiC3DPqaOL0yOFBCfs87ZYHqByw%2BdNIgKotJqK1N3Z%2B3DVMFRRnqAuZastb%2FML9sqrkqT5aAoEs2fWQBisU9EolGmKqJ0%2FuWZJotiTnykAFqvNKjejvF%2BY1upzbottc%2F6ejyM9IW7WHB%2Bz1BebTnVnMYnU%2F1bW72q7Q0VksFpRmVmqWzjwjQ7DaHyMzbVTlyRGM2QI1cnh2tUTwk6oieoLyR5E%2Be0a9YquNOHSq4pSuxidYZksZEwmIZHtD5evMbOWSHCiYHEDSVgcML7mYkLLvm70E1l8XdsOmXm18XivClL0XPPDueoS8WY6dDdGXkR79nbYND6nGaV%2FLGAlOHFaJiAe2TRg7IV6SYIqi4jJCanrcJOk3ZKvLScuegZKLF24kvysK70O1HXKbbxiU1hkrXauiPzPMSGwt0bwM3hImuBXQMyrK0ftQAVr7WymLfC%2BZM94xepNbDQqwiDR3xmXM1CWhL3YpicOH7AC6x3e1Xoh1xEcQDXPAJec9SoZy98O0lybED4QVqBlwF29FqlqpjPQrKvp4FfZ%2F9eMIzcwskGOqUB0Fil4hZx%2BlyjIEaueCacs9EoIiEz98SndbRWc%2FmQHD6iP6p7WefyEDlkQr23BGK2qSu06%2BnXCUxmPI0bmbkJERwYsZtmqMliSMVQee4tvw1M4JGC0aGIHK7y7xW4UFLrtb3GZdfqhuk%2F8OsTyPJfAHMowElvssAo%2F0Z3zSfhHTGSjm68JdzwpWE9z8kIBo4hyZ6WXOiTuP9qelAq29MCysar5aol&X-Amz-Signature=8237002b18db2cf0083819c0144a5465e716135408da77472a490c7b2711f815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX2XBIU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDrKGUbsopH55oHjFPfDPjiyErOWOc%2BBp4hwCxhuqx1cAIgNwW%2BA3dL3VafO2G7YMZh4wnU5%2FG3VLql5x5A%2F%2Bp0%2B%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJMqLEP64H%2BDXjYKFyrcAyuWlKBpX9c2xz5hZkRZlel8G3MIkNdzlapa0ZOfebaZ5uAqjYgC2TAoxhrieAPPL8cU80%2BOGaH8h3LMQz2s3bQDiC3DPqaOL0yOFBCfs87ZYHqByw%2BdNIgKotJqK1N3Z%2B3DVMFRRnqAuZastb%2FML9sqrkqT5aAoEs2fWQBisU9EolGmKqJ0%2FuWZJotiTnykAFqvNKjejvF%2BY1upzbottc%2F6ejyM9IW7WHB%2Bz1BebTnVnMYnU%2F1bW72q7Q0VksFpRmVmqWzjwjQ7DaHyMzbVTlyRGM2QI1cnh2tUTwk6oieoLyR5E%2Be0a9YquNOHSq4pSuxidYZksZEwmIZHtD5evMbOWSHCiYHEDSVgcML7mYkLLvm70E1l8XdsOmXm18XivClL0XPPDueoS8WY6dDdGXkR79nbYND6nGaV%2FLGAlOHFaJiAe2TRg7IV6SYIqi4jJCanrcJOk3ZKvLScuegZKLF24kvysK70O1HXKbbxiU1hkrXauiPzPMSGwt0bwM3hImuBXQMyrK0ftQAVr7WymLfC%2BZM94xepNbDQqwiDR3xmXM1CWhL3YpicOH7AC6x3e1Xoh1xEcQDXPAJec9SoZy98O0lybED4QVqBlwF29FqlqpjPQrKvp4FfZ%2F9eMIzcwskGOqUB0Fil4hZx%2BlyjIEaueCacs9EoIiEz98SndbRWc%2FmQHD6iP6p7WefyEDlkQr23BGK2qSu06%2BnXCUxmPI0bmbkJERwYsZtmqMliSMVQee4tvw1M4JGC0aGIHK7y7xW4UFLrtb3GZdfqhuk%2F8OsTyPJfAHMowElvssAo%2F0Z3zSfhHTGSjm68JdzwpWE9z8kIBo4hyZ6WXOiTuP9qelAq29MCysar5aol&X-Amz-Signature=c48cd5a3654d8d991aef807ffff94abc69d398f1e4fd74f4de9e7e656f105a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

