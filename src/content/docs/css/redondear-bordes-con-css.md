---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLP455BS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBUF0FPgbmC4v4pHeVaFOcPfNf87VOmgL4p8obibRDYCAiEAidtDqLZQmDKVNLXi0DtyGJhaXChwkOh6MyscHColxO0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGfHaeh1LHyQm88FCircAyHLvOy1gSlR4DPUegMI%2B0vCohtMRjzCSoQFXnx6yHiVuh%2BJwwWR%2Fsz%2BR3c%2Bya%2FjYRRiOYEZ6szWwVFeS9twWfIZ6oIZ0V1a8xDKyX2LXpH%2F9dlzhE2%2FyoIiFk1OIe%2BUbhCnyQCld%2FFWAdjvG2vM8UGeRH0gp%2FCA0%2BApLVm3C6mUgZ0aYeKq94GoAmS872Ea282d7d3mQtFdil5UhStg9D8Ey8T7D%2FybcM9m%2BHoPaHVK4rrsvyRbhMV5NxvowyZjhgftDrpCnriEqtHsgZb%2FrS0hGHHYhQEvvTiNv4xuImyWrXFWZfvMEm2s1ESg8RS9rJV7aLcnVk9Xm%2Bcg59wZfX3CZxRXbWIsYo%2FdnuC13nLLgIneC3cMvVXbqwN%2Bu1fDssBkmLfeSogctVtbfU%2BNXVJUunJBcanBP2%2BMftoWbHe9%2BbP0ibpvgsIXvs5K3KidNnHLffgpEeUluejWfdNC87I0Dmm2Emndr%2BAhT68Fz3pNOAAQPWFwhA3UDrieJaBAJHKeOh3JnwLGT34%2BnEPtIuO8Re%2FFLHPXNAokaOTNMfq9JmzjWRaP45ana7JON6xkNobkcMCEVABEJWUYKW%2BD%2BTDpmNfyjnRIe2Ezc2smgR3laXWLkrWmK3wMwwPdMLC%2BwskGOqUBUsGC80BQVqxmA4My82uoL0mBB7ndjki2RVtZ2OCP1U85GWLjtbB3Y4PeKWjP9wyLSVGWwfLhFcgZjZsvJ90irGEvGzSf48RLrcc%2FpCAiEth9L7R27bhPm7dJ2NRbkrI8rJl3mnihRz%2F%2F17uUbAnZjFEZuqSCmnlldQPnY%2Fl1kQ8hBF5g6rPVSmagzlWmcxG%2FRABRjWNqHXpe60wikgWDwQAP93fm&X-Amz-Signature=db5851fb50752e0719fe76758cd63813b9a081461e040e3039a5ed9d41d29a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLP455BS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBUF0FPgbmC4v4pHeVaFOcPfNf87VOmgL4p8obibRDYCAiEAidtDqLZQmDKVNLXi0DtyGJhaXChwkOh6MyscHColxO0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGfHaeh1LHyQm88FCircAyHLvOy1gSlR4DPUegMI%2B0vCohtMRjzCSoQFXnx6yHiVuh%2BJwwWR%2Fsz%2BR3c%2Bya%2FjYRRiOYEZ6szWwVFeS9twWfIZ6oIZ0V1a8xDKyX2LXpH%2F9dlzhE2%2FyoIiFk1OIe%2BUbhCnyQCld%2FFWAdjvG2vM8UGeRH0gp%2FCA0%2BApLVm3C6mUgZ0aYeKq94GoAmS872Ea282d7d3mQtFdil5UhStg9D8Ey8T7D%2FybcM9m%2BHoPaHVK4rrsvyRbhMV5NxvowyZjhgftDrpCnriEqtHsgZb%2FrS0hGHHYhQEvvTiNv4xuImyWrXFWZfvMEm2s1ESg8RS9rJV7aLcnVk9Xm%2Bcg59wZfX3CZxRXbWIsYo%2FdnuC13nLLgIneC3cMvVXbqwN%2Bu1fDssBkmLfeSogctVtbfU%2BNXVJUunJBcanBP2%2BMftoWbHe9%2BbP0ibpvgsIXvs5K3KidNnHLffgpEeUluejWfdNC87I0Dmm2Emndr%2BAhT68Fz3pNOAAQPWFwhA3UDrieJaBAJHKeOh3JnwLGT34%2BnEPtIuO8Re%2FFLHPXNAokaOTNMfq9JmzjWRaP45ana7JON6xkNobkcMCEVABEJWUYKW%2BD%2BTDpmNfyjnRIe2Ezc2smgR3laXWLkrWmK3wMwwPdMLC%2BwskGOqUBUsGC80BQVqxmA4My82uoL0mBB7ndjki2RVtZ2OCP1U85GWLjtbB3Y4PeKWjP9wyLSVGWwfLhFcgZjZsvJ90irGEvGzSf48RLrcc%2FpCAiEth9L7R27bhPm7dJ2NRbkrI8rJl3mnihRz%2F%2F17uUbAnZjFEZuqSCmnlldQPnY%2Fl1kQ8hBF5g6rPVSmagzlWmcxG%2FRABRjWNqHXpe60wikgWDwQAP93fm&X-Amz-Signature=8d6ff99717f1ea448f32d9b1e623d09b508a36158dbc233bd32d50b7deb9accb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
