---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSASRCK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGHVHFt9wondYNEMQrOLqjGvFwWoMSaRpllB9F5Nls8QAiEAwIVCKM3voh46bJpD%2FIHvKLGkMZ%2BEJZFNoUUv5E3a8wYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNPvt84e5CnDLC9EGCrcA4lNi1MQauIENi6DLuZ9GkP8fTTHQyyFxKowo4g1wtDKSCmmouXYyBDNC5ahvCI0%2FxK90IozJNJE5vrKqy7ZaGElRNe67nh68szBLqk5F48ImSDunfkea2FRQ4aMIuNEpbK8rFGA2%2BAn6eoefVJ49r9%2F8cn9sOm39%2BOkGkqMZK%2FjqBft9kkaLcjf5SzXKL14e%2B1Xb5L9Xk%2BaFK6JoLEZOU1YJEMojsyqLnjQv4zYGVQTWaxFYW3EMReVQ74goyGCS85JIUcSEg%2BqtDciaxPbwOUKzQRooUJTF8iZwHv2dK9KV8hQlkXvkV9JoEoXccPYeJt3DzWVSgoSV%2FqGG1eCdtA%2FdHHzYx9s3m%2FtZcId%2B2j1K5T3RykaOKuIOxh31s88olpUxiC6xCCW2DiJ05IIil%2FHo2OWUVv4KVenNklak27%2F6Vy2V7aupsEOW39QhBoMDCT20XYqqO10RL0GT9oGKRKwd0t0VlI9hIkXJiOfiHExahgNvHcxeu9XM7H0hFM4cqQfnuZgWOSMHNCGDpUFG7nEIKw%2BTPrCteYxX4ABQPoJbBoyZsD98rSfuxzbm4dkic5pnirFjqZvtmuVH%2Bh%2FNdqTduQqT1i%2FpnU5sjOeKx8jukMprHqrs0q2XBCiMJKVw8kGOqUBWbPtIt0JJJA9oUURbVU3je5GnYDP2Z9f7y6tKvbV0E5T37byhxsmL7OtuUU%2FRcOqDSdj4xplkL%2BG6J7ilW1qZMKnMHyN6aIesituzrJ5OY4LS6LX%2BtpuVaN0CsGjXoFYENepFt6zqP3fZ6y9O0FDKvWOxkDDwtTK49Wmx55KNVAGg%2FzPsYhjiCpgpkZfxXJO%2BVLd%2BOi6N8zIhdsuyZATQsuyE57B&X-Amz-Signature=727c8c257b70b2ef3b01ecb70be9f5ba0b626461e19955b7475e16c89b55632a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSASRCK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGHVHFt9wondYNEMQrOLqjGvFwWoMSaRpllB9F5Nls8QAiEAwIVCKM3voh46bJpD%2FIHvKLGkMZ%2BEJZFNoUUv5E3a8wYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNPvt84e5CnDLC9EGCrcA4lNi1MQauIENi6DLuZ9GkP8fTTHQyyFxKowo4g1wtDKSCmmouXYyBDNC5ahvCI0%2FxK90IozJNJE5vrKqy7ZaGElRNe67nh68szBLqk5F48ImSDunfkea2FRQ4aMIuNEpbK8rFGA2%2BAn6eoefVJ49r9%2F8cn9sOm39%2BOkGkqMZK%2FjqBft9kkaLcjf5SzXKL14e%2B1Xb5L9Xk%2BaFK6JoLEZOU1YJEMojsyqLnjQv4zYGVQTWaxFYW3EMReVQ74goyGCS85JIUcSEg%2BqtDciaxPbwOUKzQRooUJTF8iZwHv2dK9KV8hQlkXvkV9JoEoXccPYeJt3DzWVSgoSV%2FqGG1eCdtA%2FdHHzYx9s3m%2FtZcId%2B2j1K5T3RykaOKuIOxh31s88olpUxiC6xCCW2DiJ05IIil%2FHo2OWUVv4KVenNklak27%2F6Vy2V7aupsEOW39QhBoMDCT20XYqqO10RL0GT9oGKRKwd0t0VlI9hIkXJiOfiHExahgNvHcxeu9XM7H0hFM4cqQfnuZgWOSMHNCGDpUFG7nEIKw%2BTPrCteYxX4ABQPoJbBoyZsD98rSfuxzbm4dkic5pnirFjqZvtmuVH%2Bh%2FNdqTduQqT1i%2FpnU5sjOeKx8jukMprHqrs0q2XBCiMJKVw8kGOqUBWbPtIt0JJJA9oUURbVU3je5GnYDP2Z9f7y6tKvbV0E5T37byhxsmL7OtuUU%2FRcOqDSdj4xplkL%2BG6J7ilW1qZMKnMHyN6aIesituzrJ5OY4LS6LX%2BtpuVaN0CsGjXoFYENepFt6zqP3fZ6y9O0FDKvWOxkDDwtTK49Wmx55KNVAGg%2FzPsYhjiCpgpkZfxXJO%2BVLd%2BOi6N8zIhdsuyZATQsuyE57B&X-Amz-Signature=4a403f6159e08a9537c983f133375c309356211855f31c4a505e775d9ec65825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
