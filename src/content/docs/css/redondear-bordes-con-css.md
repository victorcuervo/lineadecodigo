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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=2ee73494be6c704aec91f34321d4d5592bed42690daeaa6f57bed471a419d078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=55b7a04781b1761e65b578c07e19dba9a922565c34591574a4925f53ace4a43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
