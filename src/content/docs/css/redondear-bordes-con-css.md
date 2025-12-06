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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERNBGWQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVp3FPtcVeOvsUyY%2F5hr8RjAljbT7dd0YSdqeokx5R7wIgap3U5SJMn6QK0gH0NMzfq%2FdQgDDClHtSef36WP8fQoAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLoL47Mm1SEeIT%2F2LyrcA6IC31s1llBwrq5niCm605FpJDJZntylcOF2EhDAst83lkub36hTKidziVkHVFgJmTHJYnKAtORFIOmraJwhOhLceLcx09e3bpNxvFVQ2FLsFWyvDJGFf7bA0dX0ahmGJ%2FfwkjuKp9liqRMU0qEUhzaiOAFv1rSNcRZkIiIzA%2BPyxiKhKbjx4OddKoF96gwLkTOyut1OBIyyELJCpQEHsJqUkEPhKTyVbTFWqMyjZyK82nvuOYC3n74v2TXMERcdp9DjmpwL48A%2F3pWM1FQ3Op506k461oVw%2BN7MyL4JkpAbhsxxoFzH6XBM2crTHP%2FeFkjMJOBQds3nSXRtO9O%2BdRycogRiU691oAdfBh4GXwtIAQF%2Ba11%2BZ3kD30tLtW1r%2FfEx%2FuEspjQOrKYErIWrOjBnHe1xwCviX%2F8c02hnksoVMj88u8O6PSQDQuKZF3zAqNys9WpJNF5mtAzPBJ2ckI5NvcKlqQRJtDYmKcNV22mQ83vckQ372xXBHgXPNpJ85NTLRB1np7CuZNdKmddaAgPTrcSru8GiyU7QYTNXADFOpXa%2Fy7sOZhUHmcTEr2lVvqr9tdgAmydUM%2Fu4WoFH9UTpu5EmGH0pUL10rDi6gzLdsmhIjTZmeQvMKNkuMNCm0MkGOqUBl1sqi6ts1s4k0OIVkdX%2BUNKCjF4PMDONC9ejMk2%2FnzjXVx6LjYUo6wtOJsFQcgGVEfBVjqqF2xLDYVvZjIlG%2FjoqLooKRX5DwKKRRk8i56N%2Focf32FIdyNmhfdudO7vj30uFUl5m6aId2sTbz%2FxcXHVr%2BcVfzBG3sf%2Bq4k2088OJ0SE6laAXQ6%2BCDykpx9tvYstWMu5OwJMC4fkGRmL5fAqHWj%2FM&X-Amz-Signature=9ffaf47ca5f36b9916029186ceb1c6994cd450645d8d060bdd2bc14d2b78223e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERNBGWQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVp3FPtcVeOvsUyY%2F5hr8RjAljbT7dd0YSdqeokx5R7wIgap3U5SJMn6QK0gH0NMzfq%2FdQgDDClHtSef36WP8fQoAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLoL47Mm1SEeIT%2F2LyrcA6IC31s1llBwrq5niCm605FpJDJZntylcOF2EhDAst83lkub36hTKidziVkHVFgJmTHJYnKAtORFIOmraJwhOhLceLcx09e3bpNxvFVQ2FLsFWyvDJGFf7bA0dX0ahmGJ%2FfwkjuKp9liqRMU0qEUhzaiOAFv1rSNcRZkIiIzA%2BPyxiKhKbjx4OddKoF96gwLkTOyut1OBIyyELJCpQEHsJqUkEPhKTyVbTFWqMyjZyK82nvuOYC3n74v2TXMERcdp9DjmpwL48A%2F3pWM1FQ3Op506k461oVw%2BN7MyL4JkpAbhsxxoFzH6XBM2crTHP%2FeFkjMJOBQds3nSXRtO9O%2BdRycogRiU691oAdfBh4GXwtIAQF%2Ba11%2BZ3kD30tLtW1r%2FfEx%2FuEspjQOrKYErIWrOjBnHe1xwCviX%2F8c02hnksoVMj88u8O6PSQDQuKZF3zAqNys9WpJNF5mtAzPBJ2ckI5NvcKlqQRJtDYmKcNV22mQ83vckQ372xXBHgXPNpJ85NTLRB1np7CuZNdKmddaAgPTrcSru8GiyU7QYTNXADFOpXa%2Fy7sOZhUHmcTEr2lVvqr9tdgAmydUM%2Fu4WoFH9UTpu5EmGH0pUL10rDi6gzLdsmhIjTZmeQvMKNkuMNCm0MkGOqUBl1sqi6ts1s4k0OIVkdX%2BUNKCjF4PMDONC9ejMk2%2FnzjXVx6LjYUo6wtOJsFQcgGVEfBVjqqF2xLDYVvZjIlG%2FjoqLooKRX5DwKKRRk8i56N%2Focf32FIdyNmhfdudO7vj30uFUl5m6aId2sTbz%2FxcXHVr%2BcVfzBG3sf%2Bq4k2088OJ0SE6laAXQ6%2BCDykpx9tvYstWMu5OwJMC4fkGRmL5fAqHWj%2FM&X-Amz-Signature=34ff6525166fa2b10ef82ab2144db9b713a94b168a4d59b88032c379415ab578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
