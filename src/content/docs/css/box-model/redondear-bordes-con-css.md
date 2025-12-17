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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB42DU4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUSaERdXSRA1J5TAMT5G8PKk1o6mFNo%2BPP7ttAR8fupAIgcpOfjjObQihYNWjydA1is7DrBpO6H4OBm7KnqTmily8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAk8psphAoamhqaDqSrcA2e5GELjcwfyK4uQBwimeQFBrvwkwiunTOxqkIEvOBXuK37C5hmIYLOkXu9vdtswhbyMgVpytfjobLesLxXaRWytZCw9UV4CV4O9%2F5TXxE9OXfp2o7w%2BEbIeFzlEml2%2FOcA867AD%2BthHaQw1n2mV8ajY443DOMGdQqc0fMqFeWbPNuJbsc1t6gRJ4G5UUO84L64xRoRRM%2Ff5Gsk4tElgmZIN%2BZB9zpQKEt9tZ341eqROiGjnGg%2B%2BnN00hUcpvq0fSkNJuZWw%2B4brKIXAtrRLHaNUeVezySSdkiU7%2Bm1VWZLkrt1vulSmhCAKLr5fgOef2tgZCgBLY81UMswDyiu3Gpy26rjGVGbe2nDNXOKhN%2BDGa0w8em8jBF0SHGCkh%2FCiH9M8HzdT37n%2FKzlulUwSyYWyMingKXXu%2ByQox6v929c4W79vnpoylhluF2Y7hWgzv0pTg2s8O0lNbjH84r%2FU%2BcjJ7Aenu06vxdUlUDZABST2FNtAPl5CL89ciLeHn084X8SsitWYO1DVhPMN8R3ciRNM28Df13iRrqmhlhROGlmwNqC4rSkZlTKr1DzdJTjMvMHhC1bQwq3Ppqn9j37jOD%2B6dZnl82%2BHKwyHbgTkM23Yy9z111Nk%2Ff%2Fen8frMKG3icoGOqUBvcmErjC1U2kHTNw9POUhPWmS4heE3uBFyzsn0EZKCy93ifMqSdP%2BjeshniArtZNG2CiZ9pRXgAp1AnirFpGPveUO5qVBLKYtuWLLXykIVjuboY89zOHrJvE8Pc4mT2uqChcCmWSgsoSXJSx%2BwVqesVhEovuTtjCD4qKNBwugOSZ0Q9e4NhE8v%2BaGHEd%2BizAvUiskl2TyYCTKsssAzyXQ4NSIpBsZ&X-Amz-Signature=c26f5dc325fddc0246107d2d0dfe600b6fb95a95a8d0287f4d7d64bf0bad21b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB42DU4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUSaERdXSRA1J5TAMT5G8PKk1o6mFNo%2BPP7ttAR8fupAIgcpOfjjObQihYNWjydA1is7DrBpO6H4OBm7KnqTmily8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAk8psphAoamhqaDqSrcA2e5GELjcwfyK4uQBwimeQFBrvwkwiunTOxqkIEvOBXuK37C5hmIYLOkXu9vdtswhbyMgVpytfjobLesLxXaRWytZCw9UV4CV4O9%2F5TXxE9OXfp2o7w%2BEbIeFzlEml2%2FOcA867AD%2BthHaQw1n2mV8ajY443DOMGdQqc0fMqFeWbPNuJbsc1t6gRJ4G5UUO84L64xRoRRM%2Ff5Gsk4tElgmZIN%2BZB9zpQKEt9tZ341eqROiGjnGg%2B%2BnN00hUcpvq0fSkNJuZWw%2B4brKIXAtrRLHaNUeVezySSdkiU7%2Bm1VWZLkrt1vulSmhCAKLr5fgOef2tgZCgBLY81UMswDyiu3Gpy26rjGVGbe2nDNXOKhN%2BDGa0w8em8jBF0SHGCkh%2FCiH9M8HzdT37n%2FKzlulUwSyYWyMingKXXu%2ByQox6v929c4W79vnpoylhluF2Y7hWgzv0pTg2s8O0lNbjH84r%2FU%2BcjJ7Aenu06vxdUlUDZABST2FNtAPl5CL89ciLeHn084X8SsitWYO1DVhPMN8R3ciRNM28Df13iRrqmhlhROGlmwNqC4rSkZlTKr1DzdJTjMvMHhC1bQwq3Ppqn9j37jOD%2B6dZnl82%2BHKwyHbgTkM23Yy9z111Nk%2Ff%2Fen8frMKG3icoGOqUBvcmErjC1U2kHTNw9POUhPWmS4heE3uBFyzsn0EZKCy93ifMqSdP%2BjeshniArtZNG2CiZ9pRXgAp1AnirFpGPveUO5qVBLKYtuWLLXykIVjuboY89zOHrJvE8Pc4mT2uqChcCmWSgsoSXJSx%2BwVqesVhEovuTtjCD4qKNBwugOSZ0Q9e4NhE8v%2BaGHEd%2BizAvUiskl2TyYCTKsssAzyXQ4NSIpBsZ&X-Amz-Signature=28c7e7fd9c5610371d4a0fd22ebf616d02d64045074de35f842f49d733337926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
