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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7ZKG6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF582MeoPgqmMgc6ovbE7ygQ5VpKDpE2dlZe2LHPkEAuAiEAxy3eufyFNpwCImN%2BM0W6m8VH2%2BnO1ucF5rj7o%2BUhc%2BYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOwIiGLYHgNIyc8gwircA%2Fgl%2B2z8arXtUrkdAViRK3igqTTPjwR8lWE458nXN6QMGjUgOIt%2Bn9Ek4JbGTuY7JT4f5LMnY4IEGQ%2FsEYxffI6UCP9IDAxp%2BVe6JLhtSMt0D9UG5m%2F4DwgUa1E5lw3USq5MKtuHHD2ltfU9VfFEhD5Xdk7ObKblJusBJFLfHCaVMeuw3TZbp04EwHFeLxPchVAJACU2Ws6dtxNY6IC1OYndwVMLdabyiDcqKOvBitRh3i5X7DnqnRtSdfSTP1Bpv8kyx%2FlIfgMQl4mc%2FOqBU%2FokxTvPs3strD9jFYzGXO%2Bo9wrtAdCKL1O7o2HdROQKC%2BV%2FHGC8fC1dvrzNVM3P3ybFY1S7PA8UEfcW4WyOu4kj9wCPyIHl%2BNxRDBNLkInAOBrZV8pJ6WNbo2b9cBpHUz1Z1DoTos8%2BS8HSI87GT0q2w6Jmc6KeCfXBfRT7clWpDqHSkF0S4ryycz9UTpbC02O3LHOwNrXWaQdeJl8f2ElIltCmZsBgNIG%2F66Nhac1tbJHxcccw3Od%2BzBc4edmNZ73rHskiohDoLcHYBRMICIkHhM6qeK3W6%2FZqwvtTt3jzAgjpYscHF8XYycFrMdOMYa5YcZVzww%2B1ZkB8y2s9raIDQLuNqOOeZfGvF73fMJGDicoGOqUB4B5XWtTmW9YD4XzoxOYRvq81F9ZyTz6cRMRBDTVShTZjR3pnM5zyOZNb4u9oLovfQkVauABDSUgNQz1YzDeZ3TjHy4EFU4AWGdgsj3b3xyUaXycrXoyoxkrCRoxwMtjmkmCCKXeMkR8T%2F%2BLC93X%2F4CA%2Bq%2BZ%2BBflyZWFgvqDyGKYYWPzVV0qPUD064CtX8ABIRgwSHahe4XvuERyWcfqPIYN3lMJi&X-Amz-Signature=5f0a92a38c5c00d455a0f431a079a6a8be76adec7945c30c94d5470e8c4aa568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7ZKG6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF582MeoPgqmMgc6ovbE7ygQ5VpKDpE2dlZe2LHPkEAuAiEAxy3eufyFNpwCImN%2BM0W6m8VH2%2BnO1ucF5rj7o%2BUhc%2BYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOwIiGLYHgNIyc8gwircA%2Fgl%2B2z8arXtUrkdAViRK3igqTTPjwR8lWE458nXN6QMGjUgOIt%2Bn9Ek4JbGTuY7JT4f5LMnY4IEGQ%2FsEYxffI6UCP9IDAxp%2BVe6JLhtSMt0D9UG5m%2F4DwgUa1E5lw3USq5MKtuHHD2ltfU9VfFEhD5Xdk7ObKblJusBJFLfHCaVMeuw3TZbp04EwHFeLxPchVAJACU2Ws6dtxNY6IC1OYndwVMLdabyiDcqKOvBitRh3i5X7DnqnRtSdfSTP1Bpv8kyx%2FlIfgMQl4mc%2FOqBU%2FokxTvPs3strD9jFYzGXO%2Bo9wrtAdCKL1O7o2HdROQKC%2BV%2FHGC8fC1dvrzNVM3P3ybFY1S7PA8UEfcW4WyOu4kj9wCPyIHl%2BNxRDBNLkInAOBrZV8pJ6WNbo2b9cBpHUz1Z1DoTos8%2BS8HSI87GT0q2w6Jmc6KeCfXBfRT7clWpDqHSkF0S4ryycz9UTpbC02O3LHOwNrXWaQdeJl8f2ElIltCmZsBgNIG%2F66Nhac1tbJHxcccw3Od%2BzBc4edmNZ73rHskiohDoLcHYBRMICIkHhM6qeK3W6%2FZqwvtTt3jzAgjpYscHF8XYycFrMdOMYa5YcZVzww%2B1ZkB8y2s9raIDQLuNqOOeZfGvF73fMJGDicoGOqUB4B5XWtTmW9YD4XzoxOYRvq81F9ZyTz6cRMRBDTVShTZjR3pnM5zyOZNb4u9oLovfQkVauABDSUgNQz1YzDeZ3TjHy4EFU4AWGdgsj3b3xyUaXycrXoyoxkrCRoxwMtjmkmCCKXeMkR8T%2F%2BLC93X%2F4CA%2Bq%2BZ%2BBflyZWFgvqDyGKYYWPzVV0qPUD064CtX8ABIRgwSHahe4XvuERyWcfqPIYN3lMJi&X-Amz-Signature=4004bd189c39c65631ffef80ee713c2d43be819830ea66a9e63d32b2ff3e1c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
