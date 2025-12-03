---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFP6MQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBaVNA9w0GKtiXFwA2Sl9NmqnxNxpRWxrmKxPGNXfud9AiAPuDKaOh4XGFwTeuH64qoFoiKedhrm8AQCqjUCafVFEir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMecNom6U8VCbO6pgtKtwDyLBf3gpolaNAGnsFhTiV2%2FQiXkmk9%2BnNZBgHrklHy%2B2bYFOl9NaBhN4H2pmlC%2BfQO2o3yOFn25CoE%2B2KMd6TRQ7zaaXszqrgJKrdbh3FqZ3oiobrj59qU6%2BL553v2H4TNzCdYanT%2BNhfbeAX2ntw04pxchTohxTYGB5FpNst9rDt0oIQOEAFp%2BPgyMtcu78EnOuH7NZG%2FkyM%2FXyLkVY02eJBg1A0dzBnblGFjkn%2Bn0zDX%2BlDHa9V731aPwzShXVrkgYqPjRZAtXzNlue9WfxHEtJ0AmttFP1wxtXY2vsErYgC0Q4tcgPPf6PF%2FG4mhbaTKCrScHJ%2BNdLyXYiJ7HUQgJew%2BN8ysEjnV9L8tS9wNDP77EtkHbz76Wp7QQv6KEsqHImZSvIG8c4bfvT59nS2MJUCq8uJyUQ8PaaCFi7qfAc2ptbCT%2F2rlxfizLiEBqsqKOg5gvQlF97e0%2FbeV2AfvpTREr%2FiRDFE%2FBEl%2F4CcJ5UWj3s%2Ffzp7a%2F1KrKo9%2BwQ7OoAPckbN6W%2FkcALNeEiqPlmb3K4y0hJgxuyO06Juc1W%2FHQQLAGLBHwHGPbSN1tASyrwLOYOeYl7rZhOzkSlTYAjFva75KJuzPrvlIyDKADeI34zmZ3jOwKEPLgwwZS%2ByQY6pgF0JVSFXrZWXVJwA2PbKf13lUPAgzUQ9J6YQVykY0nTHMrRBG22jwUTwUNWlLdAjTedEZIlauaL9Sk3CIf%2BWA3%2FKoVqlAwDW7x6UM2XDtkbVVt%2FQrbuG3u7LrDdE8T6Z%2BijMDzcLAVcF39dycRiBA4%2BF1RCS3iUsHPGn7mVoFforRS0G3nlRDZWj8M633Ry108mUsnqVaqFxKOvtcMUDuuaxVkPrD5U&X-Amz-Signature=8080462df79f81d76c11d57b0d73a3278e70981f730ad2935c07f078ebfa5cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFP6MQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBaVNA9w0GKtiXFwA2Sl9NmqnxNxpRWxrmKxPGNXfud9AiAPuDKaOh4XGFwTeuH64qoFoiKedhrm8AQCqjUCafVFEir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMecNom6U8VCbO6pgtKtwDyLBf3gpolaNAGnsFhTiV2%2FQiXkmk9%2BnNZBgHrklHy%2B2bYFOl9NaBhN4H2pmlC%2BfQO2o3yOFn25CoE%2B2KMd6TRQ7zaaXszqrgJKrdbh3FqZ3oiobrj59qU6%2BL553v2H4TNzCdYanT%2BNhfbeAX2ntw04pxchTohxTYGB5FpNst9rDt0oIQOEAFp%2BPgyMtcu78EnOuH7NZG%2FkyM%2FXyLkVY02eJBg1A0dzBnblGFjkn%2Bn0zDX%2BlDHa9V731aPwzShXVrkgYqPjRZAtXzNlue9WfxHEtJ0AmttFP1wxtXY2vsErYgC0Q4tcgPPf6PF%2FG4mhbaTKCrScHJ%2BNdLyXYiJ7HUQgJew%2BN8ysEjnV9L8tS9wNDP77EtkHbz76Wp7QQv6KEsqHImZSvIG8c4bfvT59nS2MJUCq8uJyUQ8PaaCFi7qfAc2ptbCT%2F2rlxfizLiEBqsqKOg5gvQlF97e0%2FbeV2AfvpTREr%2FiRDFE%2FBEl%2F4CcJ5UWj3s%2Ffzp7a%2F1KrKo9%2BwQ7OoAPckbN6W%2FkcALNeEiqPlmb3K4y0hJgxuyO06Juc1W%2FHQQLAGLBHwHGPbSN1tASyrwLOYOeYl7rZhOzkSlTYAjFva75KJuzPrvlIyDKADeI34zmZ3jOwKEPLgwwZS%2ByQY6pgF0JVSFXrZWXVJwA2PbKf13lUPAgzUQ9J6YQVykY0nTHMrRBG22jwUTwUNWlLdAjTedEZIlauaL9Sk3CIf%2BWA3%2FKoVqlAwDW7x6UM2XDtkbVVt%2FQrbuG3u7LrDdE8T6Z%2BijMDzcLAVcF39dycRiBA4%2BF1RCS3iUsHPGn7mVoFforRS0G3nlRDZWj8M633Ry108mUsnqVaqFxKOvtcMUDuuaxVkPrD5U&X-Amz-Signature=aa0294941cfd6a61bf42ee4fbc9af3a38ac29c17962bad5a4844bcf37bbbccfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

