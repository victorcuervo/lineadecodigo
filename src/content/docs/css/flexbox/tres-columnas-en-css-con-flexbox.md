---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGGM7I4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngrmhhnbAaHvxAklLPwXNl%2F%2F2AcgLgj4KtxAiU7eJgwIhAIjFQx0ZDk5Ha%2FfTmO6%2FWzbU%2FuusJjKhPh8Gjxhm2PlEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywSVZ%2Fa0jLLOEzoWEq3AOwtunW3XlySBxm94EQ9OZG2JeFxyF1b9M7o8%2FYeYyCGK5qN3I%2FJBilag3CLlothfQuCGTQcvFG2VgrdxR4%2BYqQCvbSGMrVKWtgV63zPMfAqclkz5BY%2BtnI20ryH1X%2FyXYnLtqVTPJ3AbbUs2GT%2FMfeqnwYEtjJzxex3Y%2FeJ6fJ3UBcSNq%2BuRDHjZx60AD5Jc5wXDDGzbkYYUZmzIcpBuAKqs5i9WerFRH%2F8DjnGw6eDII7JQYJlRkaT5TZMCsaL%2BdvjdQK0YVnR0w1Sv3sIpih0H8wV5QTF75m42KpUUhH4HKVLzoL0Ybfg34VWrbH9pu7SC5eP2s%2Bf8jiXcfqHJimhHDPqzVhpd%2BL%2B5fjiGuGG6ySBy%2FcKbiUu2K7O29%2Bp%2BLdIpzZjsFKv3wjnPttm%2FXW4spLkoYiny6EHhpON%2F7Ql%2B5QCmvS3jqpw4WoujN2Y%2BObSa8YQlGwk2sTEyoTvHIBhvBXYh8t03l8i79Rdwlyk9P%2BuwRRc4j9Xkz7%2BCxf3M2x4FHujKzA9QXPYkbMejfYdkqdhHRLQeXzWa9nssVQNWrlRb%2F716sYMES5FlvzK7jxH3z0KL5eBtzBiMoJcSeBRPQfMvyYn7ftMuPa0Zx%2BCMhFHW03BXZXrqXe0jCj%2FdLJBjqkAZm%2Bs%2B24UfdTlkgojGcI3NqdEOCk8lQPIT%2F517rBbMRZEXc5MnBHkGLFBtPFBp68%2BJeAiYRyOKgS3OTyDCQGIu3LVRRrf7RqAV6884j4k48lZ%2FatzIRCZe2xmSE1JIPHRZkWel6elCbcO7JptZRAunuHv%2FCTojwxr1nI0nXT%2BBsR7Y34xeMFrckSTrtsTPRqMduJKG7YzFErC4Q77CuKrtZymwNd&X-Amz-Signature=bc77d8052885ac95b12164283787498ae4c8a8a3ccf1f5a466041e1d8228f5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGGM7I4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngrmhhnbAaHvxAklLPwXNl%2F%2F2AcgLgj4KtxAiU7eJgwIhAIjFQx0ZDk5Ha%2FfTmO6%2FWzbU%2FuusJjKhPh8Gjxhm2PlEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywSVZ%2Fa0jLLOEzoWEq3AOwtunW3XlySBxm94EQ9OZG2JeFxyF1b9M7o8%2FYeYyCGK5qN3I%2FJBilag3CLlothfQuCGTQcvFG2VgrdxR4%2BYqQCvbSGMrVKWtgV63zPMfAqclkz5BY%2BtnI20ryH1X%2FyXYnLtqVTPJ3AbbUs2GT%2FMfeqnwYEtjJzxex3Y%2FeJ6fJ3UBcSNq%2BuRDHjZx60AD5Jc5wXDDGzbkYYUZmzIcpBuAKqs5i9WerFRH%2F8DjnGw6eDII7JQYJlRkaT5TZMCsaL%2BdvjdQK0YVnR0w1Sv3sIpih0H8wV5QTF75m42KpUUhH4HKVLzoL0Ybfg34VWrbH9pu7SC5eP2s%2Bf8jiXcfqHJimhHDPqzVhpd%2BL%2B5fjiGuGG6ySBy%2FcKbiUu2K7O29%2Bp%2BLdIpzZjsFKv3wjnPttm%2FXW4spLkoYiny6EHhpON%2F7Ql%2B5QCmvS3jqpw4WoujN2Y%2BObSa8YQlGwk2sTEyoTvHIBhvBXYh8t03l8i79Rdwlyk9P%2BuwRRc4j9Xkz7%2BCxf3M2x4FHujKzA9QXPYkbMejfYdkqdhHRLQeXzWa9nssVQNWrlRb%2F716sYMES5FlvzK7jxH3z0KL5eBtzBiMoJcSeBRPQfMvyYn7ftMuPa0Zx%2BCMhFHW03BXZXrqXe0jCj%2FdLJBjqkAZm%2Bs%2B24UfdTlkgojGcI3NqdEOCk8lQPIT%2F517rBbMRZEXc5MnBHkGLFBtPFBp68%2BJeAiYRyOKgS3OTyDCQGIu3LVRRrf7RqAV6884j4k48lZ%2FatzIRCZe2xmSE1JIPHRZkWel6elCbcO7JptZRAunuHv%2FCTojwxr1nI0nXT%2BBsR7Y34xeMFrckSTrtsTPRqMduJKG7YzFErC4Q77CuKrtZymwNd&X-Amz-Signature=db4901892faa8e519179fbf611dafb81add0f83f050579ced4ab99e9bb361fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

