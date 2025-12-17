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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFM276Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgC8H8kBUWxLB0P%2FLRwt3Z44xc%2FQR55sdQPxWhmvQ9FAiADLRDeM%2FHWIhZDEk4W9AKPh4TCACVKCqTBik%2FJTKNKKir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyWizQkOgFP6rSvbwKtwDn0T9Ytl%2BIm6A%2FNXFJmgY8yQqBAb2zD968xCTh1wt3VFCQGtgJ3og9COP3O%2BYpRaqyWn1zzFGuDmqT00Lbi6bjPj%2FADAw9zVj1WgDZnNY9ei1llZY6iCiktl2ZdwaXU2X0DYNRKPJinVE6k1imkC90AjVUTTdq5BhZSFylH4UqkBuPbDAk3ENx%2FScREesQJtPXn%2F%2FgFcQytLP9JyKS80JM6c7RS4S9WX9obgS3hV8DUZrix7dgjApkjWdFejLTOvjQTBPmFRNpPbH8E%2BvftRRAZNYFRKHZ%2F%2BgetIq1dzGC%2FpDskjhl%2F2KFWiYVMd0XrkG8vm5iWZ2sa6ZvNtSkbRh4YzxF69KPyv4237Q76gqSCiF7C2EGaziJgaCXnYlQcioW%2BD2faMsruQuj%2BsjlrTx2fW90H3DlbiNQrHoAqClDM5QcOzPUjY%2B93KVMsNKrO42mhOdI2zSdpCgeyDOOE9sClLEhQWWx7GD6gLX0hIstaGqeaYQ%2BJSxDkNYPMDTY1csOimb0UBUw5w7cM7Kar9Sqn1eizrXhup%2BbYDJzGEXv7lL%2BGv6vcyYjqWLP7V9ovwqPjEny0MHH3UALXs3i5Ov0BcG9HbUavD8qOUClWkWLISwFoLV4GLC%2BIwU%2F2Mwno%2BKygY6pgFGEySchcJ6wkHx6Yep4vkpyM4ytZoFpZlgN2V%2B%2BEYbMWJQMxvrrokyW6fhPMGuy%2B21C8uRoEHiwkXOx962e4MhWwvH1AYpNn8PQx85wdFYor7YEBp4sQHW2qyDaUuVAy84NI72E42DaUnMgKE10A322JxXaQCdsxxGtsVoZdTCgTTtpQed0NgqGb88JuzNXWJY%2FxKGhm4OQI5V4lyGmNW2QAICD%2BS8&X-Amz-Signature=a2a8ee4a920d63e20c6d02067995822a2df00d928b04ac4c9ef646c3cfcb378b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFM276Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgC8H8kBUWxLB0P%2FLRwt3Z44xc%2FQR55sdQPxWhmvQ9FAiADLRDeM%2FHWIhZDEk4W9AKPh4TCACVKCqTBik%2FJTKNKKir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyWizQkOgFP6rSvbwKtwDn0T9Ytl%2BIm6A%2FNXFJmgY8yQqBAb2zD968xCTh1wt3VFCQGtgJ3og9COP3O%2BYpRaqyWn1zzFGuDmqT00Lbi6bjPj%2FADAw9zVj1WgDZnNY9ei1llZY6iCiktl2ZdwaXU2X0DYNRKPJinVE6k1imkC90AjVUTTdq5BhZSFylH4UqkBuPbDAk3ENx%2FScREesQJtPXn%2F%2FgFcQytLP9JyKS80JM6c7RS4S9WX9obgS3hV8DUZrix7dgjApkjWdFejLTOvjQTBPmFRNpPbH8E%2BvftRRAZNYFRKHZ%2F%2BgetIq1dzGC%2FpDskjhl%2F2KFWiYVMd0XrkG8vm5iWZ2sa6ZvNtSkbRh4YzxF69KPyv4237Q76gqSCiF7C2EGaziJgaCXnYlQcioW%2BD2faMsruQuj%2BsjlrTx2fW90H3DlbiNQrHoAqClDM5QcOzPUjY%2B93KVMsNKrO42mhOdI2zSdpCgeyDOOE9sClLEhQWWx7GD6gLX0hIstaGqeaYQ%2BJSxDkNYPMDTY1csOimb0UBUw5w7cM7Kar9Sqn1eizrXhup%2BbYDJzGEXv7lL%2BGv6vcyYjqWLP7V9ovwqPjEny0MHH3UALXs3i5Ov0BcG9HbUavD8qOUClWkWLISwFoLV4GLC%2BIwU%2F2Mwno%2BKygY6pgFGEySchcJ6wkHx6Yep4vkpyM4ytZoFpZlgN2V%2B%2BEYbMWJQMxvrrokyW6fhPMGuy%2B21C8uRoEHiwkXOx962e4MhWwvH1AYpNn8PQx85wdFYor7YEBp4sQHW2qyDaUuVAy84NI72E42DaUnMgKE10A322JxXaQCdsxxGtsVoZdTCgTTtpQed0NgqGb88JuzNXWJY%2FxKGhm4OQI5V4lyGmNW2QAICD%2BS8&X-Amz-Signature=8d5b95d4f41b445f3350c8696273809123be2e047f7f0783d507ec536718fd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
