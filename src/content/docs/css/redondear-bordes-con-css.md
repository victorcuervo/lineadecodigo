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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=a8fc6831540cf7c870cbcd618abd4fd0dcd49828951a9ec25a16a321ddbca267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=e766f4ca3ff0df357271445925ac37577926c2b281f4ba3c54cb87f9b4018579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
