---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45EJYE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBagpowKNZV39sjAPpRTJu77z5ltLUz%2FLKKiYU3UK2YQIhAI6tPh5OrFWDs5NniFavfs5OOQPTLOz%2Fo7APi7X4oCjWKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BKUW%2F4TCb76VGm4gq3AOb429shTOcg%2FL1BA8xh8UaCWK%2FeD0n9ygdpaUqJVMS%2Fi9Bho27YfT3Gs870InZr5uKvCL8RzGmgJcpWbA87m76OCUmo83pG568VqybW%2Bs2vzMsFj%2BOnCCPcrdhlZ2fxP%2Fm2PRjUpL8ht1trsokjed7%2FS5yclmIkzemt0XHXUyUNw4mPOc9SXw%2FydtV9VJukYMeIvimDErSP18r9mitOgFwtqMv8rHQO01RvvwJQzNkBXJqcoCUDNwjD6jmG9e%2BSBhtURw84AJjy5ZnnJTxcNwcyPAbIXKLOxYdPoyE%2BimY3ArxMn%2BzkNlih3duSrxrfFIJGI0hIJlkQpRFWTQHiuzkSamxjdM7dO3v12sCDMTlgMUXF%2F3JEssYesM1FsCJL%2BAQc%2FE7arUnF%2BZooKC%2FMF4SC8gNNqQ7tO2z8Uh4UO07cf1E2IxM8XF8ShuOjJOqm19UNtM6IMg0Qt%2F1uw2mNQLNEjhLQKFIHrMhG42BQhLnKDrsmcLjmmn6zIi2ySYY%2B%2Fx7vjDxlcNtsh5EjGouvngZbCTVzTBkCgp%2BJcKIfibdtaWQ03gyHmy6MTsYjN53Hbdl%2BzcAYq4s%2FO%2F%2BChxX3hu9g%2BcBMNGcr%2ByBMH1jC3b30TF4ZSoEY2mZNTIo5jDHns%2FJBjqkAaXTGPYo2tuoyYDl9C7cuEyIpjascdi2rzYeKCle%2BCyKVmALyqFtXuVSPun6%2BNMI1zcTmzi1J%2FaXIdtql7EPy8F2wApnqido2HAyWmeD4%2Fvdd4C9xfnUE9LxX%2BoFIAMaBqRMQH7gYH0YrCteryMrnbW86aaGjjK%2FmPIGEBoCZHJyh0y9KU0PBmes2u9QcJNGF8EdE%2F4qJHjFZTdVK3C4OsQsujCd&X-Amz-Signature=1617dc8276e849e5b92a6f4c314948468399bbdcb60269fb25cb695244220fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45EJYE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBagpowKNZV39sjAPpRTJu77z5ltLUz%2FLKKiYU3UK2YQIhAI6tPh5OrFWDs5NniFavfs5OOQPTLOz%2Fo7APi7X4oCjWKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BKUW%2F4TCb76VGm4gq3AOb429shTOcg%2FL1BA8xh8UaCWK%2FeD0n9ygdpaUqJVMS%2Fi9Bho27YfT3Gs870InZr5uKvCL8RzGmgJcpWbA87m76OCUmo83pG568VqybW%2Bs2vzMsFj%2BOnCCPcrdhlZ2fxP%2Fm2PRjUpL8ht1trsokjed7%2FS5yclmIkzemt0XHXUyUNw4mPOc9SXw%2FydtV9VJukYMeIvimDErSP18r9mitOgFwtqMv8rHQO01RvvwJQzNkBXJqcoCUDNwjD6jmG9e%2BSBhtURw84AJjy5ZnnJTxcNwcyPAbIXKLOxYdPoyE%2BimY3ArxMn%2BzkNlih3duSrxrfFIJGI0hIJlkQpRFWTQHiuzkSamxjdM7dO3v12sCDMTlgMUXF%2F3JEssYesM1FsCJL%2BAQc%2FE7arUnF%2BZooKC%2FMF4SC8gNNqQ7tO2z8Uh4UO07cf1E2IxM8XF8ShuOjJOqm19UNtM6IMg0Qt%2F1uw2mNQLNEjhLQKFIHrMhG42BQhLnKDrsmcLjmmn6zIi2ySYY%2B%2Fx7vjDxlcNtsh5EjGouvngZbCTVzTBkCgp%2BJcKIfibdtaWQ03gyHmy6MTsYjN53Hbdl%2BzcAYq4s%2FO%2F%2BChxX3hu9g%2BcBMNGcr%2ByBMH1jC3b30TF4ZSoEY2mZNTIo5jDHns%2FJBjqkAaXTGPYo2tuoyYDl9C7cuEyIpjascdi2rzYeKCle%2BCyKVmALyqFtXuVSPun6%2BNMI1zcTmzi1J%2FaXIdtql7EPy8F2wApnqido2HAyWmeD4%2Fvdd4C9xfnUE9LxX%2BoFIAMaBqRMQH7gYH0YrCteryMrnbW86aaGjjK%2FmPIGEBoCZHJyh0y9KU0PBmes2u9QcJNGF8EdE%2F4qJHjFZTdVK3C4OsQsujCd&X-Amz-Signature=c410027a967fccb5787e3b4257139514ffeba3f34889ec8e0f0f3bea079efc55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

