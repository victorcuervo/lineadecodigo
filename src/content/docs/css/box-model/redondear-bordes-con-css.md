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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64QGYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx%2Fyf1jI%2BfhbOuLRAm6%2FbuyUtxPOp%2BBrfgLs1F7gK1NAiEA8sIIOKRpVIfbgJpdY7TubNnjo8NCM21OwZRowE1BdO8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHckKXIKPe5dcBUlyyrcA%2FBbN6eOi8SwJHPZQfWNkg3S1DYKdJXLA%2FLqQ9RRAaNCvU%2F8XDPnVPQFnzLGn0mxi3WYeF4dXqQXILInFy3M0xUsTW0AVT35A9GSwn49Rbv4QvkLOm6iLTBQk6hrLtgkH14gfLZB46cHcUfhDu3jwZCkp1wCHS0%2Fb9MKIJ0I89vVMyVQYncbjv8fdx%2BqrSTqad747x6S8cWcaxu91jqp%2BWS6cxVDeA5Thl1WAkF94funaeZkDOZQ8ZuNWP5NL1T8zvmkTPCJhSVN37mO4yEI41C8Del2AtT%2BU3H5%2FsPKq7q5KWY9DxRjO9BW6sfjrlgXi8F6RbgIbjI7l1CiaJuJjo9BELBz06dDDEX3rUidQo%2F1GjuVsPB6jFoDBa7bC3YnuAqMeW3EadonBUmY%2BnA5mbINX9rlXCKR4ozP8qlXX0bsbyPLnCcD9CeKijYUow5Mr4jsohbMxXa6d9UG58%2FevUqpGgrXWYT3cao5bCdHRri7UbvuddUltQKZbuONAyQov9onOI6hEdnCU3P6UZma3gdvCOKnjmz9WDeDPqTISQBi20V2oT9H5Qyw8p7mm87oJHR62MLrgEGQgiZrriQuF6tiFsujAVq0G%2FWXBFjimkJ41%2FbSfH%2B0rb%2FoNElVMKzSicoGOqUBB%2B8MkFjg6%2BUbUwSVr7gxeOFgD6R3UhguGekDsuE%2BbtQj50yTD5TLdcUpwN7M%2FM0Sv0U7KsNtqy%2FqIicm%2B9wgBhJn%2FnuKvXJDARmOkxYm1QkEthKwyZqQSCykiMGPuQ3L9PmhibnSMGgAm4hrPdEB3pC6Fp0d3JU%2B%2F9mH4bTEAoHIBfnHi1p85V7slhC7AWDKKL4Fbn9rPSLLb6BfBfb4XIcmzD61&X-Amz-Signature=815298d32cd697235dd96f67328e7791bc829a5592991462b88ed3f15e0663a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64QGYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx%2Fyf1jI%2BfhbOuLRAm6%2FbuyUtxPOp%2BBrfgLs1F7gK1NAiEA8sIIOKRpVIfbgJpdY7TubNnjo8NCM21OwZRowE1BdO8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHckKXIKPe5dcBUlyyrcA%2FBbN6eOi8SwJHPZQfWNkg3S1DYKdJXLA%2FLqQ9RRAaNCvU%2F8XDPnVPQFnzLGn0mxi3WYeF4dXqQXILInFy3M0xUsTW0AVT35A9GSwn49Rbv4QvkLOm6iLTBQk6hrLtgkH14gfLZB46cHcUfhDu3jwZCkp1wCHS0%2Fb9MKIJ0I89vVMyVQYncbjv8fdx%2BqrSTqad747x6S8cWcaxu91jqp%2BWS6cxVDeA5Thl1WAkF94funaeZkDOZQ8ZuNWP5NL1T8zvmkTPCJhSVN37mO4yEI41C8Del2AtT%2BU3H5%2FsPKq7q5KWY9DxRjO9BW6sfjrlgXi8F6RbgIbjI7l1CiaJuJjo9BELBz06dDDEX3rUidQo%2F1GjuVsPB6jFoDBa7bC3YnuAqMeW3EadonBUmY%2BnA5mbINX9rlXCKR4ozP8qlXX0bsbyPLnCcD9CeKijYUow5Mr4jsohbMxXa6d9UG58%2FevUqpGgrXWYT3cao5bCdHRri7UbvuddUltQKZbuONAyQov9onOI6hEdnCU3P6UZma3gdvCOKnjmz9WDeDPqTISQBi20V2oT9H5Qyw8p7mm87oJHR62MLrgEGQgiZrriQuF6tiFsujAVq0G%2FWXBFjimkJ41%2FbSfH%2B0rb%2FoNElVMKzSicoGOqUBB%2B8MkFjg6%2BUbUwSVr7gxeOFgD6R3UhguGekDsuE%2BbtQj50yTD5TLdcUpwN7M%2FM0Sv0U7KsNtqy%2FqIicm%2B9wgBhJn%2FnuKvXJDARmOkxYm1QkEthKwyZqQSCykiMGPuQ3L9PmhibnSMGgAm4hrPdEB3pC6Fp0d3JU%2B%2F9mH4bTEAoHIBfnHi1p85V7slhC7AWDKKL4Fbn9rPSLLb6BfBfb4XIcmzD61&X-Amz-Signature=9a9a83fb0128067dbace57f5ea3fb26e2a419ce3bb2b2acbb60afdae7f2d717d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
