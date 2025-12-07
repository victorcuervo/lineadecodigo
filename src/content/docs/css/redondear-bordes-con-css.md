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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAO3UM3E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzsnxFlnjq5ywhf82XCPyp1uWImmREKIHtAeWQhfzc%2FAiEAv%2FZ3a%2FleJ6ADL%2FawzD76U%2Fj6sqLUCA6lS0YAsYDR39oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTRXuTogbGGG322sCrcA3Wge35tx%2BDiVph8v%2FYcdpw87LSGGHmSHDNhdX8WZEj4dPvqVlLerLgy5%2BnGwx%2F%2BKpPMoPXNRcU5x%2FAZkS%2BDypsUP9F78YaKodQoH%2Fx%2B%2Fd5e7C4dAmfL%2FEwXL7oVjXOe14Yo5AaTkISNUGTDAq49LjOKmXwCagX20hXQeUckj4Oc2bfANwzU%2Fn1oIo7OCL5KAnirB6L9ueFpqjSrFTvCIaszVd0Hh3EDt%2FDU2loQRDnYeZf9xgZNIWdhqI9xgRnzeLeAPcywe%2FZme1LlnaGEJtlfIXu7k8lZOulqKTP%2FxqVbq9X8JH2RxA2dPykcIQkrw6nHns7T5dWqXbWqqvE%2BML0V8fPCvGhtPc8RGR%2F8lheeFbxVpNtrA9Tt2FVyB1KO5q3gKrjttY6TkQfZt%2FebywlcP3DsREi81IaqsIJcwfluT1lmkyO%2BtWAJEJM3m3fLi1kx0%2FcwUxbu0FlVW05rzYU8Fjti%2F8zwbfOe1UngQWZDuYuNB9iINY1sWl9KQyvWjmI2A8hpv%2Fsk1PmhqyRxnoA%2FZNzLGnajuRLZGfzDuUZLfrmsIVjT9G7DApMEkRJdJ0AxY8VZDt%2FfRGiCAF5OeUJsMfamLgqx03y61qGqsJOHVlDAXHFPcApJgxMdMP631skGOqUBM8NxBoiZ0D%2FZAuNyzD2OQGBQS7Hj7gRRzi9XVzj8to5vYI6Xg2XbflQ1BqlfL%2BTyZVSChEm%2F4%2FYz%2BOaWLn3T4O5gtTZ84QKGBPN6OPfMcgATpvHuMicsNSCH20fpY9lTuc2kHXu%2BWbIh88y7%2FHqQnFnjcLOJ7plAD5MGKH9abOV7xAiCBmTica6SWenEHttJRUnaBIBgusH%2FpDsPT%2FttYAPUTVtO&X-Amz-Signature=78418f702fdb36b7fe69399220a88784db44c096ef2ccb1fd9c625876f11d7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAO3UM3E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzsnxFlnjq5ywhf82XCPyp1uWImmREKIHtAeWQhfzc%2FAiEAv%2FZ3a%2FleJ6ADL%2FawzD76U%2Fj6sqLUCA6lS0YAsYDR39oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTRXuTogbGGG322sCrcA3Wge35tx%2BDiVph8v%2FYcdpw87LSGGHmSHDNhdX8WZEj4dPvqVlLerLgy5%2BnGwx%2F%2BKpPMoPXNRcU5x%2FAZkS%2BDypsUP9F78YaKodQoH%2Fx%2B%2Fd5e7C4dAmfL%2FEwXL7oVjXOe14Yo5AaTkISNUGTDAq49LjOKmXwCagX20hXQeUckj4Oc2bfANwzU%2Fn1oIo7OCL5KAnirB6L9ueFpqjSrFTvCIaszVd0Hh3EDt%2FDU2loQRDnYeZf9xgZNIWdhqI9xgRnzeLeAPcywe%2FZme1LlnaGEJtlfIXu7k8lZOulqKTP%2FxqVbq9X8JH2RxA2dPykcIQkrw6nHns7T5dWqXbWqqvE%2BML0V8fPCvGhtPc8RGR%2F8lheeFbxVpNtrA9Tt2FVyB1KO5q3gKrjttY6TkQfZt%2FebywlcP3DsREi81IaqsIJcwfluT1lmkyO%2BtWAJEJM3m3fLi1kx0%2FcwUxbu0FlVW05rzYU8Fjti%2F8zwbfOe1UngQWZDuYuNB9iINY1sWl9KQyvWjmI2A8hpv%2Fsk1PmhqyRxnoA%2FZNzLGnajuRLZGfzDuUZLfrmsIVjT9G7DApMEkRJdJ0AxY8VZDt%2FfRGiCAF5OeUJsMfamLgqx03y61qGqsJOHVlDAXHFPcApJgxMdMP631skGOqUBM8NxBoiZ0D%2FZAuNyzD2OQGBQS7Hj7gRRzi9XVzj8to5vYI6Xg2XbflQ1BqlfL%2BTyZVSChEm%2F4%2FYz%2BOaWLn3T4O5gtTZ84QKGBPN6OPfMcgATpvHuMicsNSCH20fpY9lTuc2kHXu%2BWbIh88y7%2FHqQnFnjcLOJ7plAD5MGKH9abOV7xAiCBmTica6SWenEHttJRUnaBIBgusH%2FpDsPT%2FttYAPUTVtO&X-Amz-Signature=3503db736305077f414a92c0fa44341404186f74b6a6d09060bddcaa39884aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
