---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46N4GPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6t3S0S2UnwwMF4AFj0t%2B3qaWA1BMV%2BuzFT4imqH9KxwIhANiEp958mOwCuv%2FseNby6pAf8sWPN7KHJeFhtLcEuU0RKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwURRclBtXd7X5gVNwq3AP8g6ow%2FZR6pi3sxZUvx%2BoBoeCiVKKGisEPo%2Fa5x1TcB45W8Djb1shRzexAQK21eCuccPI%2B9L2yCJ6cX%2BnmL7%2FT17RoTY%2BD8HQE%2FF1nTyWzIjG9b63HUx7i7dF18MjGLPDK65JCg0MXc%2BmrKC66AZ%2FDp34TFlQ4tfvs80bmQplw1k4XgP6VH9s%2B0CFiw25gqmzwFzz19dVdt0oqWoihdE%2Fj4tHkVi3H5ndn1bmafFGt3LIl4uJ8r%2FwdSJAq2ey%2FLjM%2FXc9tsYnRtcxwM4qNIaPoqmBEOHlMvooVJ%2F6Bpc0P4rLYKo%2F0LbwZN%2B6tipe37ylg6M3S82JSDob8%2Fp2x9DSq6r930krmsFQ2wL3ro7CcCvVgZCKAjnCo7lCjkHKm2tMGlYKwwtSjCbQ%2F4qAs66Gi%2FI%2F6jqWGClFn9WVhXMTyMKUO8IKbnJ4yGwSmbtlzfYrWrcuBVyDjP6BIOPj7xCv20C4Gw%2FQQJKFRLhNiABuSXN3s22vCfDazhUzRJrY6t5GMw90Jh35YAka5e5P9CIWzGhZVV4Ds%2BbezONC5ZnA%2Bk9l3gJlhBrxrtABtjcrMNxkzFGLzijRpU0AJfPOHZKKUUcdWx44%2Fb2boz4%2FWs%2FEn1JorEIwdW3w1dOCM5jC%2FmdXJBjqkAa9WlK%2FrldAcmPjk9EQiHE2BIEW21nq5GNeENj2QBq2BjSh9hWS4ChnXErEQNNTvJ5Bk7ncBLqBfuiiGtnnJFoCXPmIohNlfvLTEaG8oU%2FIJYG4Iz47tAKSDnUHCjkg61BYWfynEh520mTjiWUmRarwf5UYlP2WM5UhUxYx8b51exDLVksLUtStiSg1vjWBDH0CdwoUeytU9HeeRZBGt7iEJ9fe8&X-Amz-Signature=8fc52e97e7e1cb95a0643505097328c62027186a89108fc49530b501c0b0a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46N4GPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6t3S0S2UnwwMF4AFj0t%2B3qaWA1BMV%2BuzFT4imqH9KxwIhANiEp958mOwCuv%2FseNby6pAf8sWPN7KHJeFhtLcEuU0RKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwURRclBtXd7X5gVNwq3AP8g6ow%2FZR6pi3sxZUvx%2BoBoeCiVKKGisEPo%2Fa5x1TcB45W8Djb1shRzexAQK21eCuccPI%2B9L2yCJ6cX%2BnmL7%2FT17RoTY%2BD8HQE%2FF1nTyWzIjG9b63HUx7i7dF18MjGLPDK65JCg0MXc%2BmrKC66AZ%2FDp34TFlQ4tfvs80bmQplw1k4XgP6VH9s%2B0CFiw25gqmzwFzz19dVdt0oqWoihdE%2Fj4tHkVi3H5ndn1bmafFGt3LIl4uJ8r%2FwdSJAq2ey%2FLjM%2FXc9tsYnRtcxwM4qNIaPoqmBEOHlMvooVJ%2F6Bpc0P4rLYKo%2F0LbwZN%2B6tipe37ylg6M3S82JSDob8%2Fp2x9DSq6r930krmsFQ2wL3ro7CcCvVgZCKAjnCo7lCjkHKm2tMGlYKwwtSjCbQ%2F4qAs66Gi%2FI%2F6jqWGClFn9WVhXMTyMKUO8IKbnJ4yGwSmbtlzfYrWrcuBVyDjP6BIOPj7xCv20C4Gw%2FQQJKFRLhNiABuSXN3s22vCfDazhUzRJrY6t5GMw90Jh35YAka5e5P9CIWzGhZVV4Ds%2BbezONC5ZnA%2Bk9l3gJlhBrxrtABtjcrMNxkzFGLzijRpU0AJfPOHZKKUUcdWx44%2Fb2boz4%2FWs%2FEn1JorEIwdW3w1dOCM5jC%2FmdXJBjqkAa9WlK%2FrldAcmPjk9EQiHE2BIEW21nq5GNeENj2QBq2BjSh9hWS4ChnXErEQNNTvJ5Bk7ncBLqBfuiiGtnnJFoCXPmIohNlfvLTEaG8oU%2FIJYG4Iz47tAKSDnUHCjkg61BYWfynEh520mTjiWUmRarwf5UYlP2WM5UhUxYx8b51exDLVksLUtStiSg1vjWBDH0CdwoUeytU9HeeRZBGt7iEJ9fe8&X-Amz-Signature=2f470a6f6587ef213d2f3710bff718caabcc2a1f3c5520de71e8b85432eed28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
