---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNUOQO6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyWQtOnvmFvR%2FM25H5YQNNAq%2BG9yt1TcGLAhz4yqrSsAIhAJq2D01VO6agZT40nK5glPS6nT5BtJWHQmSwsLa%2BUdB5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igz1oxpXeRUYo42LWAsq3AMbaxZRNn5VzRHHav%2Btgn1Ca2hwjLrXvfHXUjkDw%2FLTZGCMBRjMsWKpoQ%2BrK8GjtXhIm%2Fe2WVwin9xV1OSOPenn0CSmakY7am0AyeMBBxv6%2BortfwH26GTV1qpAHg3YglFoObtet9phDzCbwoJ5xohtGmVDFcf%2Fe8ryHiw1SSwQShwP7x6ccvm2I%2Fif4Gc0HSt67ZqE%2FWsZn4f7W1qMEUKgUhr5SzC8NaN2e15KjnBKQJatn8Qle%2F5V8CD%2FQRJIAPfVPn6YP5TJSaT8zypb1x%2FA%2Fc%2FFZZ9R72RQWh7VTw8BR5aVJYWPZhHdgk63T2Tcuz8RCi7gUA%2Bkiedk2typI1VeEm%2BBwLrdXelXH94T87I1uHVeIsZ6PCk4r%2B8kAQ14pIBj4ias%2BURd7TND9cQjVs%2FodJSATp60VaommBi15LnWUsfy8gf0ZkXKFC9G%2FMAnrFJrPWnDB5DdefC5T4cPLTak5CHS6iUBi9aUcBlL%2Bedm6UPYSzadDSqUfB06jy29Bdo2ZR09CKaetH0kpBmGIV4KbenadXJSCelaloR%2FMXg%2BGIChv8O6t%2F%2Bg64K8nkTN1bCC3%2BVYji5R%2FGaBpy5PdIMHp8n2TlU1c2YNs3HRWiJ%2F3UZ71J%2FPHhkQaJKqaDDqnYnKBjqkAcZv25ezJFPuvvkbik1jbXu5Vol%2BZriWwXwYDoV3JfzuwSvB%2FR4Zrpa0orjPOszrSojj23daIuxlkECRMWoWXAyFIDC3HSKIznDo7Uqp%2FNPxfcayAcRa1NTfkruv0Cd%2FCMkZw3ujuDeDpv7kDeWsKOKCoDzrKY%2FRiW%2BeC4ZYIVcrNIlw5KqLG1swjojn2psi0kZUJuEkuY9bnHyHS0I6lSvXyQGC&X-Amz-Signature=1a876d359ca239aba0ab7121e5bcc4e897c29a9ee4fe87a1e8584f8406cbc49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNUOQO6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyWQtOnvmFvR%2FM25H5YQNNAq%2BG9yt1TcGLAhz4yqrSsAIhAJq2D01VO6agZT40nK5glPS6nT5BtJWHQmSwsLa%2BUdB5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igz1oxpXeRUYo42LWAsq3AMbaxZRNn5VzRHHav%2Btgn1Ca2hwjLrXvfHXUjkDw%2FLTZGCMBRjMsWKpoQ%2BrK8GjtXhIm%2Fe2WVwin9xV1OSOPenn0CSmakY7am0AyeMBBxv6%2BortfwH26GTV1qpAHg3YglFoObtet9phDzCbwoJ5xohtGmVDFcf%2Fe8ryHiw1SSwQShwP7x6ccvm2I%2Fif4Gc0HSt67ZqE%2FWsZn4f7W1qMEUKgUhr5SzC8NaN2e15KjnBKQJatn8Qle%2F5V8CD%2FQRJIAPfVPn6YP5TJSaT8zypb1x%2FA%2Fc%2FFZZ9R72RQWh7VTw8BR5aVJYWPZhHdgk63T2Tcuz8RCi7gUA%2Bkiedk2typI1VeEm%2BBwLrdXelXH94T87I1uHVeIsZ6PCk4r%2B8kAQ14pIBj4ias%2BURd7TND9cQjVs%2FodJSATp60VaommBi15LnWUsfy8gf0ZkXKFC9G%2FMAnrFJrPWnDB5DdefC5T4cPLTak5CHS6iUBi9aUcBlL%2Bedm6UPYSzadDSqUfB06jy29Bdo2ZR09CKaetH0kpBmGIV4KbenadXJSCelaloR%2FMXg%2BGIChv8O6t%2F%2Bg64K8nkTN1bCC3%2BVYji5R%2FGaBpy5PdIMHp8n2TlU1c2YNs3HRWiJ%2F3UZ71J%2FPHhkQaJKqaDDqnYnKBjqkAcZv25ezJFPuvvkbik1jbXu5Vol%2BZriWwXwYDoV3JfzuwSvB%2FR4Zrpa0orjPOszrSojj23daIuxlkECRMWoWXAyFIDC3HSKIznDo7Uqp%2FNPxfcayAcRa1NTfkruv0Cd%2FCMkZw3ujuDeDpv7kDeWsKOKCoDzrKY%2FRiW%2BeC4ZYIVcrNIlw5KqLG1swjojn2psi0kZUJuEkuY9bnHyHS0I6lSvXyQGC&X-Amz-Signature=0447ef106dd357c493c44966e93de7808f21b914c8ea0a7fc00e52eaf9864e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
