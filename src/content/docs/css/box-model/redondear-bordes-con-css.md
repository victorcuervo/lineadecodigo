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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647YTC2OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4DfhtYCsBRKW5PasEaGydqW13XM3UPdUOP7bJIAL9QIgJEBhQfdbn2FF7UD3MX5SsHhVUe6oSdmhLVSInJMDgI4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDkXEE%2BtutxwrLwatSrcA%2FruZJAdT%2B9wMOCRZ0esf%2BvC4GEJAunvXNcwumEcwKHv2JSUP93EVHs%2FzylvWijcbUTfxJpc808WMtJElCxqK4Uel8VmCkZ%2Fx0CMr%2F7UlD%2Bl85WbMInczmxFxSWF6DcXlbq3ALbW0diHjBfw6gG3UWbk8MXr8KBowGiwRg4A6TUtWG03uKM4ueNlwrv%2B3kYKbRByrnNo6gfIvvgBB2Zxgy6c41mk9fI0N2%2B2CmuN4rtHPqWkPUBg9LklY2W%2Bum6W5BBZGlBfEyj74mQu4CFUIqP2XoVQLbRG5GvGlMh3m9wPTryJ9luQBFgGJ%2FMybiQ7xk1V9znzYL8kR3nnbvAAAgHfj2T6SJkcOih4OzUbJm%2B5OztopO6GZyFzpVNtUyQjUdcikMr3sKgoKZz%2FUyaEhCzYVjsC9%2Bu%2B67J1uukCrXhw5unrBRmoMas9445YEgHXhJtXCQucb7QazlBwEDuTpbRn%2BVW5p47OFMgYQe70Inj%2BCjOXKhOHuqiTEQZlpmOEPDQi7Ev2lIQ6HUCh7uEut0Z%2F%2Fy2t3Qhfx1d38kBq3r99%2FR8E72ixJ9zszSIXjcMkwAbtKr0xiguRWQJA4JLSuZqWz8HbSR7MbxW5an7yW%2Bs8CRmU1W9TauwUkjFEMM%2BDicoGOqUBczC6OozQCNAWNFqvGzS9vxzCvH%2Fq4aE3ZKL0ssqkFhnn3QfC%2FUfpWEQofgCaKRIQ8l2QqKXgczyEq3SyzQohXNOfig2E%2BJbVwasoqKl7kS%2Bplw%2BpEYJIhtpHj2XH16tLr5gxb7hrrCANib9JJzPKzSQE62soty9WwodOGQWiCZ%2Fa3JqXOB8KDTQgjgswGSMbcuk2QvaG6HMjWmjWszNkliNuO0jF&X-Amz-Signature=d42957fc30771c99f935ede45c5f81966ae82c773f6b5407215ddebd1942969f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647YTC2OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4DfhtYCsBRKW5PasEaGydqW13XM3UPdUOP7bJIAL9QIgJEBhQfdbn2FF7UD3MX5SsHhVUe6oSdmhLVSInJMDgI4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDkXEE%2BtutxwrLwatSrcA%2FruZJAdT%2B9wMOCRZ0esf%2BvC4GEJAunvXNcwumEcwKHv2JSUP93EVHs%2FzylvWijcbUTfxJpc808WMtJElCxqK4Uel8VmCkZ%2Fx0CMr%2F7UlD%2Bl85WbMInczmxFxSWF6DcXlbq3ALbW0diHjBfw6gG3UWbk8MXr8KBowGiwRg4A6TUtWG03uKM4ueNlwrv%2B3kYKbRByrnNo6gfIvvgBB2Zxgy6c41mk9fI0N2%2B2CmuN4rtHPqWkPUBg9LklY2W%2Bum6W5BBZGlBfEyj74mQu4CFUIqP2XoVQLbRG5GvGlMh3m9wPTryJ9luQBFgGJ%2FMybiQ7xk1V9znzYL8kR3nnbvAAAgHfj2T6SJkcOih4OzUbJm%2B5OztopO6GZyFzpVNtUyQjUdcikMr3sKgoKZz%2FUyaEhCzYVjsC9%2Bu%2B67J1uukCrXhw5unrBRmoMas9445YEgHXhJtXCQucb7QazlBwEDuTpbRn%2BVW5p47OFMgYQe70Inj%2BCjOXKhOHuqiTEQZlpmOEPDQi7Ev2lIQ6HUCh7uEut0Z%2F%2Fy2t3Qhfx1d38kBq3r99%2FR8E72ixJ9zszSIXjcMkwAbtKr0xiguRWQJA4JLSuZqWz8HbSR7MbxW5an7yW%2Bs8CRmU1W9TauwUkjFEMM%2BDicoGOqUBczC6OozQCNAWNFqvGzS9vxzCvH%2Fq4aE3ZKL0ssqkFhnn3QfC%2FUfpWEQofgCaKRIQ8l2QqKXgczyEq3SyzQohXNOfig2E%2BJbVwasoqKl7kS%2Bplw%2BpEYJIhtpHj2XH16tLr5gxb7hrrCANib9JJzPKzSQE62soty9WwodOGQWiCZ%2Fa3JqXOB8KDTQgjgswGSMbcuk2QvaG6HMjWmjWszNkliNuO0jF&X-Amz-Signature=c9f83eb5805212faad53417cd03327285812fab5f482a4b47dc40db12b562fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
