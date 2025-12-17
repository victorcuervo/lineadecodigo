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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4546T6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYO4s51B3qaaFFh9UQPNuCo3tpPd4%2BGzG1vkSywNJJSAiAI65f9jVhmPR9pHcJcLZ7%2FOM%2F3Hwpz1yRafXl%2F4%2Fkbhyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMarS1PwoPkc31OK5MKtwDvJYCtuwypVY%2Fz5qmq78k5EcrbH7fXrNU7RV57BA2ADKrS2%2FkOniCuin0H5IVeqZodaW5DN7AkvIOvIfCFSwILhXuP4ZO%2B9LmeQbZSdA9GUSIwp9xypQP23JNJKiUA%2FzXk3mr8CiMSYN5N8O2GRHx%2Bn%2F8hktTtz6G2mmRmtijOGulVRMH%2B%2Bffh9eYnGgdyomwIQb6svXjC%2FMn0B1BWFZ0Ag%2BjrhqYQrMa1N9OOzxLTWWOmEHUgcv7QZ82uxRc3RBXbZx18n7s6Kv8XXPgOriEqCMLOuQXiSR%2FaGxbYofKHQhbTxOwqlMyCQ2L%2FOEThcU%2BYVJ4%2BQSxRb7%2BwxF2Ls9MpEGLU6ldzCPAfXm2S%2FuH0fChLZw%2FxQRfIXEyGKJy4xsIx%2F7Rbqvf9j29Wg661KYt59AMtlkqfm%2BoqySpHedxByMdxeJ%2F2W1MwueqzHaryj0mAGx8IsP%2FqqsMce%2BgKLWLt5ib0gBGe%2FLVV1D6x2AYo5QriWEPmhgFhk5XSVhmPT1E%2FeR7MoTIwEcQ0zBggNTw6q0lnETtcyr3zC1l9%2FcFqRwvJ5HUG4GSthwW81sWS9pRPt%2BPj%2FByTiKkVVjOgHGHiq6Z1Rqv1PYRknmIWVxMGn5h1JdCqjH7KjUDo3Aw6%2BmIygY6pgHDjmfAuL%2Fxx7NBy9AXNbeqnn34ko47u2YgdmBPy9CasLJmGx0DfG2KuP%2FoYA9jgX%2FCaLbZKvVaE7YbKNHjaMBWC5Fbt8M71zjJlK4Nvh0Qo6n%2FTOF7h7nq7bODotESuF2dpsrajbChAE6HORYqMFLYzItT%2BbG5MqYm%2BB6%2F1MrmKNyN17vMpd2F%2BOJZJ%2B5C90AJW%2Bu7QCbi64mp%2F3z5PjvzAm8E%2BSTe&X-Amz-Signature=2e58ca32377827b934cb6ba745f36237f012d6a3cc8cafb9c8b14a23e18067bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4546T6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYO4s51B3qaaFFh9UQPNuCo3tpPd4%2BGzG1vkSywNJJSAiAI65f9jVhmPR9pHcJcLZ7%2FOM%2F3Hwpz1yRafXl%2F4%2Fkbhyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMarS1PwoPkc31OK5MKtwDvJYCtuwypVY%2Fz5qmq78k5EcrbH7fXrNU7RV57BA2ADKrS2%2FkOniCuin0H5IVeqZodaW5DN7AkvIOvIfCFSwILhXuP4ZO%2B9LmeQbZSdA9GUSIwp9xypQP23JNJKiUA%2FzXk3mr8CiMSYN5N8O2GRHx%2Bn%2F8hktTtz6G2mmRmtijOGulVRMH%2B%2Bffh9eYnGgdyomwIQb6svXjC%2FMn0B1BWFZ0Ag%2BjrhqYQrMa1N9OOzxLTWWOmEHUgcv7QZ82uxRc3RBXbZx18n7s6Kv8XXPgOriEqCMLOuQXiSR%2FaGxbYofKHQhbTxOwqlMyCQ2L%2FOEThcU%2BYVJ4%2BQSxRb7%2BwxF2Ls9MpEGLU6ldzCPAfXm2S%2FuH0fChLZw%2FxQRfIXEyGKJy4xsIx%2F7Rbqvf9j29Wg661KYt59AMtlkqfm%2BoqySpHedxByMdxeJ%2F2W1MwueqzHaryj0mAGx8IsP%2FqqsMce%2BgKLWLt5ib0gBGe%2FLVV1D6x2AYo5QriWEPmhgFhk5XSVhmPT1E%2FeR7MoTIwEcQ0zBggNTw6q0lnETtcyr3zC1l9%2FcFqRwvJ5HUG4GSthwW81sWS9pRPt%2BPj%2FByTiKkVVjOgHGHiq6Z1Rqv1PYRknmIWVxMGn5h1JdCqjH7KjUDo3Aw6%2BmIygY6pgHDjmfAuL%2Fxx7NBy9AXNbeqnn34ko47u2YgdmBPy9CasLJmGx0DfG2KuP%2FoYA9jgX%2FCaLbZKvVaE7YbKNHjaMBWC5Fbt8M71zjJlK4Nvh0Qo6n%2FTOF7h7nq7bODotESuF2dpsrajbChAE6HORYqMFLYzItT%2BbG5MqYm%2BB6%2F1MrmKNyN17vMpd2F%2BOJZJ%2B5C90AJW%2Bu7QCbi64mp%2F3z5PjvzAm8E%2BSTe&X-Amz-Signature=bf113dd9794b3c8f400f27390ff68fadcd819dd05989c9147fa638e42bb0b6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
