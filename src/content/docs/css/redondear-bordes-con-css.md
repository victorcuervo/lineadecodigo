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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UG56W6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPriNz7%2FpvhfVgv41hI%2BtfIluhBbeTsBffDL6Z8KjbwAiAnet%2FFUJudqLpz2iSrdsGPAfJ6sggqvHZSp7kDbgknrCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqJSHEXiVVz7RSoxyKtwD4G7377joGohS%2FxiZDchLKOu60eBf9VvBvVLFr67zPjaFbd0VLvOom%2FMK5wfG%2Fao7kIlkmXeir27qmy9NelHB4WwXCtxlKYUNUl32My98UgCs65GibxlYYnkw1KFBpk94ZlCvPpg2kgqe1s7421zRmIQjj1%2Bgp%2FSuhm52kgxfZ5fki3IrdGZmQpNSKmoZNVaoYWhoDI9fPumk7ZUJo%2BDjZY7YySwckqHEyUZ1EC8yCQWz43X9w9vZrgtrvWohApfqFwZtGjtY%2FVbb0BLlb9tfZkVsVKPB7KzFYviiXtabpVTLHNQrYfBOOTpFWjRbhdOi3QmBarEj5jVqqQr07KZEK3EJpOm%2B%2Bwr8X3iROEapvYIx4gyjyFwn1sgkivCIIsUvA2o6ckYEZnAW41UqQdSar4SdG22Km%2BIxAqcTyzxe2fZDRkRS2xw5e3KG5dfYAMmcBMWgFeO2ZKXja9icCR5y6l2cWMSJFeT0dijZlWsgpBARVoxCsLj0WjWy%2FR9%2B5g7RAh6rL6btZNomjo0758S7H75pB6B0oTPT7GjdSUl4yGGR0R4%2BktePS9Rfm%2BZRuKoOJXVyQzcO%2F%2B17gdqH62sXVHH4H74orpfUvORj1Vs9yzBQ9cnfn3gUHXGK3swwpfLLyQY6pgFq4O3FvtCbdQwA0pPlfIpSKyudR7iadeCQZRJJHc8ZykbimbN%2F%2BZbn%2BOBspm89Xlf2IL%2Bz%2B%2Fzy1BpKOYorhZ2vy38omdx5B1Qr90xliq7HAXc7P8GqSVKizeA6UUAAHbmNoKO%2FwWaxnldjTZGn7PGD%2B9QU8TBSLV8gqw%2FCzt5Nm0cFkLgg1gfnryvg84Oa%2BE2cgND4YRnnw1lHLJE2n607vxrhqOy%2B&X-Amz-Signature=c831461bb71444ef9c00771f6c0bcaf03b610cb28be01f8f2528abe542d3e0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UG56W6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPriNz7%2FpvhfVgv41hI%2BtfIluhBbeTsBffDL6Z8KjbwAiAnet%2FFUJudqLpz2iSrdsGPAfJ6sggqvHZSp7kDbgknrCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqJSHEXiVVz7RSoxyKtwD4G7377joGohS%2FxiZDchLKOu60eBf9VvBvVLFr67zPjaFbd0VLvOom%2FMK5wfG%2Fao7kIlkmXeir27qmy9NelHB4WwXCtxlKYUNUl32My98UgCs65GibxlYYnkw1KFBpk94ZlCvPpg2kgqe1s7421zRmIQjj1%2Bgp%2FSuhm52kgxfZ5fki3IrdGZmQpNSKmoZNVaoYWhoDI9fPumk7ZUJo%2BDjZY7YySwckqHEyUZ1EC8yCQWz43X9w9vZrgtrvWohApfqFwZtGjtY%2FVbb0BLlb9tfZkVsVKPB7KzFYviiXtabpVTLHNQrYfBOOTpFWjRbhdOi3QmBarEj5jVqqQr07KZEK3EJpOm%2B%2Bwr8X3iROEapvYIx4gyjyFwn1sgkivCIIsUvA2o6ckYEZnAW41UqQdSar4SdG22Km%2BIxAqcTyzxe2fZDRkRS2xw5e3KG5dfYAMmcBMWgFeO2ZKXja9icCR5y6l2cWMSJFeT0dijZlWsgpBARVoxCsLj0WjWy%2FR9%2B5g7RAh6rL6btZNomjo0758S7H75pB6B0oTPT7GjdSUl4yGGR0R4%2BktePS9Rfm%2BZRuKoOJXVyQzcO%2F%2B17gdqH62sXVHH4H74orpfUvORj1Vs9yzBQ9cnfn3gUHXGK3swwpfLLyQY6pgFq4O3FvtCbdQwA0pPlfIpSKyudR7iadeCQZRJJHc8ZykbimbN%2F%2BZbn%2BOBspm89Xlf2IL%2Bz%2B%2Fzy1BpKOYorhZ2vy38omdx5B1Qr90xliq7HAXc7P8GqSVKizeA6UUAAHbmNoKO%2FwWaxnldjTZGn7PGD%2B9QU8TBSLV8gqw%2FCzt5Nm0cFkLgg1gfnryvg84Oa%2BE2cgND4YRnnw1lHLJE2n607vxrhqOy%2B&X-Amz-Signature=a5e2c9b5fa515c6edf57fc9cea44fc84129b8b78290a231dfccc2e0d5ba32949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
