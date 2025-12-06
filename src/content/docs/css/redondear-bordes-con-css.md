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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDZ2O7O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxwNNvi5%2FCtL7nFsPPGNVMh1f5NTxgPF1ScEjPQWzNgIgO4MPPqsgpYRbLkrxaBIQ3ZGp9CR1fPj8L6fYTcZxBBQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCas8Zd25Z6h0IufXyrcAxj%2BS%2FxWd9R6L4bI0tZYCicfb8f%2BIQVVbh8KJ7SaoZ0Qg3Zn%2FOGdXeF5T6EGR9fb%2FwcHk%2FtTooaIwqYmBrrg5YypM%2FD0kNbkVCtjYSqRW6V4vdsc5ND8ugy1krkVi%2FU16R71I3qZ2W2qmti6m3hmj2T2moDVI8gMYtGNtI97SiLDw71snEzQOz%2FWeusGgPxn1OMMXBVymiva%2F0q5tiDB0opFDK70TwFdZhQb5390sRhX1rXing5eiXTlNpI9DDFgaodtrVi7Ax67fteBuXAhrHyi60Y80ewbGVAtG2lT05DfzmD8%2FANbVC7k1pddgihMkvof3mNex%2BWH3rTzdyUVWDiVMK%2BXc6%2FZ%2BpgQyZA%2BGJ8Zyn6IUgFI147yib7OicHtY39sCPWJo2KfMSxOoZoGd8jWbXGBvCG50CD7ZZy7Cgwq0sKcwNwYGz5kUXPqK4c70qV0Eqhus8%2Fo8B%2BVMsUaxGN0LQktn%2Bmcx6VGcyM7IG3l0vuYYNxpcJfEXiSHryJpsCSkHJmOMTDNBn5v%2FNGzcQvi0cbeLLOoAjEJSmw9VS0LEA46dlmtFkGziamV2OcmVmtkQNnT5x%2FmaZMhM5mwrHcIkoIOubUko%2FHP9oa1Ps%2F7POtkW22jca4p%2BG9gMLLJ0ckGOqUBuca5Li2zkfaK6rYAPHMbLu9nr%2BtwE%2Bf%2FkGEvnR9C4jJ8hh0d4kuha7TV%2B1Fjv%2F8Y3xcaCN8z1eQ7L%2BIr8VkeqL3ZEk31YN9e6Wx4k0TWiDdsF%2FiqK%2FgqV7VWA2QH3Ujw%2FvryMFm47YVXlN1Zd1ehgK7DvoABSS6iHYxfdk5BjT5Js7mcu8pop%2Blnpc5qODD%2FBsEw%2FYk8fB68A8Exmr%2BtEAQdTzlt&X-Amz-Signature=53f930f18f69095b0cb18e7d7650b5933ff71095a6c3b2d5c11b96fc638bb12c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDZ2O7O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxwNNvi5%2FCtL7nFsPPGNVMh1f5NTxgPF1ScEjPQWzNgIgO4MPPqsgpYRbLkrxaBIQ3ZGp9CR1fPj8L6fYTcZxBBQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCas8Zd25Z6h0IufXyrcAxj%2BS%2FxWd9R6L4bI0tZYCicfb8f%2BIQVVbh8KJ7SaoZ0Qg3Zn%2FOGdXeF5T6EGR9fb%2FwcHk%2FtTooaIwqYmBrrg5YypM%2FD0kNbkVCtjYSqRW6V4vdsc5ND8ugy1krkVi%2FU16R71I3qZ2W2qmti6m3hmj2T2moDVI8gMYtGNtI97SiLDw71snEzQOz%2FWeusGgPxn1OMMXBVymiva%2F0q5tiDB0opFDK70TwFdZhQb5390sRhX1rXing5eiXTlNpI9DDFgaodtrVi7Ax67fteBuXAhrHyi60Y80ewbGVAtG2lT05DfzmD8%2FANbVC7k1pddgihMkvof3mNex%2BWH3rTzdyUVWDiVMK%2BXc6%2FZ%2BpgQyZA%2BGJ8Zyn6IUgFI147yib7OicHtY39sCPWJo2KfMSxOoZoGd8jWbXGBvCG50CD7ZZy7Cgwq0sKcwNwYGz5kUXPqK4c70qV0Eqhus8%2Fo8B%2BVMsUaxGN0LQktn%2Bmcx6VGcyM7IG3l0vuYYNxpcJfEXiSHryJpsCSkHJmOMTDNBn5v%2FNGzcQvi0cbeLLOoAjEJSmw9VS0LEA46dlmtFkGziamV2OcmVmtkQNnT5x%2FmaZMhM5mwrHcIkoIOubUko%2FHP9oa1Ps%2F7POtkW22jca4p%2BG9gMLLJ0ckGOqUBuca5Li2zkfaK6rYAPHMbLu9nr%2BtwE%2Bf%2FkGEvnR9C4jJ8hh0d4kuha7TV%2B1Fjv%2F8Y3xcaCN8z1eQ7L%2BIr8VkeqL3ZEk31YN9e6Wx4k0TWiDdsF%2FiqK%2FgqV7VWA2QH3Ujw%2FvryMFm47YVXlN1Zd1ehgK7DvoABSS6iHYxfdk5BjT5Js7mcu8pop%2Blnpc5qODD%2FBsEw%2FYk8fB68A8Exmr%2BtEAQdTzlt&X-Amz-Signature=d140ce3b2243d8e5a3f3ed83c70752ce09a61eea9b9bec44d46f3a310988a4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
