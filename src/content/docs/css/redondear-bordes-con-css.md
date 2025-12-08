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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNSZUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhD1JGYYN62CnCQ8UdvURP7AlWL2bOBVkuMYdRxDY4%2BAiEA4pvNSh0WOlyfiCdOg0DA%2Bnll71GnYBKJMlFXaZ643GwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRWy3qS1wMA57MAyrcA1gQIHYjriT8Rh0jZKkJz9lZ%2FSy3k3va%2FYT1HMpi9ONs9lROkm%2F%2B%2FBQ2sSim4R4%2B5nl6CIFs5%2FmEjcr1tWfEbVKeQsQxRfgCtc63ZHUblyn4%2FD9OyO79k%2FKPwPqrlcSS12RS9wRmKDm1k36BkAFJuArcLDM5fWJAjTUsKFDtzIKvkUXYpdRQhl%2FjSIvEK0DrFQK0zh9rVv9C%2FxlLXCj7lj7iOW1%2FxY7VnWGPdXSTHDIwAcX50LgLdSP%2FEKKZh6VV2A7ET6dmMLLtiI5H9QiVrB02z5xQf0a78spCUf0oO%2BcKeEqXHUzAOrVZde%2FgvwqmCH5onuX6Y67cPKAW%2BFvnEhZaCtCldu4FnMXi7AAn16xEKuB1Uoc04c9MoC3UWnjmRWcG2N1qR7zTxfA%2BYpd5%2BSUZCE%2Byyf%2BZcqPTaSVZkT0U7cf5KB5ozgu%2BGh3O8JjenXsHOwRpid3VYBh1ZxH1NRKHonfqHOZppbztHj3d1b25inZ%2BL96IhUc%2FgvFLp0%2F1lVE1O19Jcy7Nu4U53PNVs3tTXaJKjzc0BB5jd6x29VNaSwy2cMZ1ajikUHVR%2BcTZzhmitx84o%2FAO%2BgoqpzQEqTiah8p8JVJxJijtaFYkZWpYOPl84f5OKSthlA5sMPHz2skGOqUBsqBDhHHPFeeSiRnIUI%2BP8v4W0a5zwliulYE7kmkdCXV2p%2FnYWqwc2nUu%2BYmEi7fZaK9DlUic5BmiKDTeLXqkMPNfYpeMr%2Bxk8wc5ZuOh7LhSukqBjdcUKNkOFIC0pgzhgIa%2BxP6WNs2NAyWsEAwuGYJOD17Zj8z24DSAhvQ3UqSTWCAS5XtfEoaVA617mYr%2F8enNnMd3ardD2dRre%2FhO%2Fpk9KXeN&X-Amz-Signature=2f06cbfe07c9de7029631d430b8adf463503050ebba5933efd2b395ce3c0556e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNSZUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhD1JGYYN62CnCQ8UdvURP7AlWL2bOBVkuMYdRxDY4%2BAiEA4pvNSh0WOlyfiCdOg0DA%2Bnll71GnYBKJMlFXaZ643GwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRWy3qS1wMA57MAyrcA1gQIHYjriT8Rh0jZKkJz9lZ%2FSy3k3va%2FYT1HMpi9ONs9lROkm%2F%2B%2FBQ2sSim4R4%2B5nl6CIFs5%2FmEjcr1tWfEbVKeQsQxRfgCtc63ZHUblyn4%2FD9OyO79k%2FKPwPqrlcSS12RS9wRmKDm1k36BkAFJuArcLDM5fWJAjTUsKFDtzIKvkUXYpdRQhl%2FjSIvEK0DrFQK0zh9rVv9C%2FxlLXCj7lj7iOW1%2FxY7VnWGPdXSTHDIwAcX50LgLdSP%2FEKKZh6VV2A7ET6dmMLLtiI5H9QiVrB02z5xQf0a78spCUf0oO%2BcKeEqXHUzAOrVZde%2FgvwqmCH5onuX6Y67cPKAW%2BFvnEhZaCtCldu4FnMXi7AAn16xEKuB1Uoc04c9MoC3UWnjmRWcG2N1qR7zTxfA%2BYpd5%2BSUZCE%2Byyf%2BZcqPTaSVZkT0U7cf5KB5ozgu%2BGh3O8JjenXsHOwRpid3VYBh1ZxH1NRKHonfqHOZppbztHj3d1b25inZ%2BL96IhUc%2FgvFLp0%2F1lVE1O19Jcy7Nu4U53PNVs3tTXaJKjzc0BB5jd6x29VNaSwy2cMZ1ajikUHVR%2BcTZzhmitx84o%2FAO%2BgoqpzQEqTiah8p8JVJxJijtaFYkZWpYOPl84f5OKSthlA5sMPHz2skGOqUBsqBDhHHPFeeSiRnIUI%2BP8v4W0a5zwliulYE7kmkdCXV2p%2FnYWqwc2nUu%2BYmEi7fZaK9DlUic5BmiKDTeLXqkMPNfYpeMr%2Bxk8wc5ZuOh7LhSukqBjdcUKNkOFIC0pgzhgIa%2BxP6WNs2NAyWsEAwuGYJOD17Zj8z24DSAhvQ3UqSTWCAS5XtfEoaVA617mYr%2F8enNnMd3ardD2dRre%2FhO%2Fpk9KXeN&X-Amz-Signature=5d5ca83233fe7ae37c68f4e671ed3577286a86d8af28cd57cd26985c467bed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
