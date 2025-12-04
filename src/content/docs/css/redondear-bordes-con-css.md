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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QU43XBS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDVoPhALZ65NetHx%2BBsknZ%2BhPMeUS9DEMy%2BV%2F8tDHVZnQIgDm0FGjJHq9RHVJvEQRH2KvAPSs6PDwhbEVO3G7Ubg2Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDC2aILCUEFV0Zc7VoCrcAzFFMrevz3swsmKgHcEjkvv45XcZThp2w3GKW1Sz6xueqq%2F7zHb2TuRlIc%2BywiLIocQ9984yNdNJUcH1BA4krLK7Xt%2BgV2dYHUFrd%2FLgzFncC12pba%2B0P07kjkIsulULU6KdO64h4g7n256LMORChr8Zd8jrSmQFdust5xWNxs8ajodE%2BBtoicdmf7wnHh0nf%2FoxoLaVZQ68HiXXv6lC9%2BBY45diHoohbz%2BS2XILKCxsFrwaV%2B4ngoNUoBUa%2FdlXpqS065xiWNVts%2FvieKwYxBCouxyD1yctWI2c6zavjf%2FVQgdGKnHGgKlFAplUHDcyFCO2QHbXdXHjlkDkXTJg1oyvWz7kt1kdvN3b38furbrrRuzP45vXb%2BhqgUuK7RxRfBrd%2FVIKDc1P0007nORiR2viwv7FT7VUzWQeytQJT%2BLyCmf81rZLNLMqdkF1OsdtBoHk485sOJlk5L4QUF33RPwbwN5mcuykJsZ5zDPpdQaLY%2FCoHoBWtk1UE30Tlpwot4jLttZkcEa1b9pA0YYUkZv5ecVp9MAPIUbJSLlSclHFgbAdRL3MV6bDqW8kyioRN7gTOPZhRhHTlfyDZ3xEMyjAJEJCjWhtac2xHMBBpxT4Y8ziQAtdRl0qTUt%2BMIXKxckGOqUBBk8mnyJGGfqV80FhoKpSJ%2BAssOjgSnt1dfXbJw4CmpklyWuHnbk5IH7QoI%2FyCl6rS13YNV%2FRshrJpQ%2FbnRB76ncUJOkwgroB6Qp26Meq3ZJJyUW87q%2F124OziO6roUHRK9SKMjN9asR1K8KllsIHBFNgr8CH3xzxJHjLJ7JEkN2lii%2BFy4CMEOHX2o3J2%2Fm%2Fvz2l9jKn65ctuHTzt7CKUnwzzdfy&X-Amz-Signature=b116d212f0ecb28020600795915a7711b1f18da19fa5a04a10136d4625d09929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QU43XBS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDVoPhALZ65NetHx%2BBsknZ%2BhPMeUS9DEMy%2BV%2F8tDHVZnQIgDm0FGjJHq9RHVJvEQRH2KvAPSs6PDwhbEVO3G7Ubg2Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDC2aILCUEFV0Zc7VoCrcAzFFMrevz3swsmKgHcEjkvv45XcZThp2w3GKW1Sz6xueqq%2F7zHb2TuRlIc%2BywiLIocQ9984yNdNJUcH1BA4krLK7Xt%2BgV2dYHUFrd%2FLgzFncC12pba%2B0P07kjkIsulULU6KdO64h4g7n256LMORChr8Zd8jrSmQFdust5xWNxs8ajodE%2BBtoicdmf7wnHh0nf%2FoxoLaVZQ68HiXXv6lC9%2BBY45diHoohbz%2BS2XILKCxsFrwaV%2B4ngoNUoBUa%2FdlXpqS065xiWNVts%2FvieKwYxBCouxyD1yctWI2c6zavjf%2FVQgdGKnHGgKlFAplUHDcyFCO2QHbXdXHjlkDkXTJg1oyvWz7kt1kdvN3b38furbrrRuzP45vXb%2BhqgUuK7RxRfBrd%2FVIKDc1P0007nORiR2viwv7FT7VUzWQeytQJT%2BLyCmf81rZLNLMqdkF1OsdtBoHk485sOJlk5L4QUF33RPwbwN5mcuykJsZ5zDPpdQaLY%2FCoHoBWtk1UE30Tlpwot4jLttZkcEa1b9pA0YYUkZv5ecVp9MAPIUbJSLlSclHFgbAdRL3MV6bDqW8kyioRN7gTOPZhRhHTlfyDZ3xEMyjAJEJCjWhtac2xHMBBpxT4Y8ziQAtdRl0qTUt%2BMIXKxckGOqUBBk8mnyJGGfqV80FhoKpSJ%2BAssOjgSnt1dfXbJw4CmpklyWuHnbk5IH7QoI%2FyCl6rS13YNV%2FRshrJpQ%2FbnRB76ncUJOkwgroB6Qp26Meq3ZJJyUW87q%2F124OziO6roUHRK9SKMjN9asR1K8KllsIHBFNgr8CH3xzxJHjLJ7JEkN2lii%2BFy4CMEOHX2o3J2%2Fm%2Fvz2l9jKn65ctuHTzt7CKUnwzzdfy&X-Amz-Signature=03829df073b20a5fc27a6c665e4c8c516e264a6672459fa6360e5d5d3b74346b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
