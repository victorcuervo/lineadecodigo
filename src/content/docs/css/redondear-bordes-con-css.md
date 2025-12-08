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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLWYQ4B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeKNyMbvdTJf1Db2R8UJM5bRAvKU5%2B81gISFj4%2BtaTIAiADmUr3WPegc92ckuyfmX5lD8FvtLrOH%2BYjMuqH%2BijJbiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzErdETBHhqEgDxxKtwDV9TWo70cI9lXABus1JErv27X0f0XXLrLBOB8YcmDjA3THwTeaZBcjwz003xGe%2FXhbwQ3kQ7AZT8vbJoYcLlJtz2JGz0B21%2FHIwXV3y8m%2Fq8TW6SyIA8VBHJCUgYDvsQgC89Cgz0liaQwQr4MRnuALdOmuMGkdWMfNaNZaqveeDujWojGZa%2BU2NUSe%2F3BhMZUVHnDeCxIGsmRL6orEPfwJ2bCLrfcqeUjJV%2BTpl8PL51mNj%2FW7cg0cVEr4FWngKpBXLH0VErU0FONmNG%2B5Zx5S8Vd5SmegHQBAQte3C8TfoSWLfKQkohbzIL0oZuIUAvzH0pWkp2ZuFksrJ%2FZk94315CdlnSHjgUftCvdNPuBrys1o%2BV2dGmgvTt2NzRI5T5yZeeemVtXbyYv6ovIo6ZTRg0eHen%2Bsk%2B34Hq342lygNQfebP7C4OBmg%2F3Gc0LM%2BmwlhlZ1PTCffKpR61U0HXSmRRXrEPW2z1m3lPztTIB4IqoMtBG6II6ozdBuV9i%2F%2FVX6KaTyQiV5s64h%2FxErpVYEJqPROjzfzo%2F7QMQc2Db88aMaiAhBlBc2dzOcy38tbh8TXzovKrysm79KVgRav9J7QbOuAXE1k6oL%2BIrhVXR1OSAbJ0ZA3sHz6twrgQwru7ZyQY6pgFw%2B3Zt8Xt1odsOzDZ%2FUk8BqznHMYJccu6ISUNwxDF%2BVQtnAJpfrQZezVi3uQMTryo9Li9wMeQEj3kDVzbYVccXDK1u44pphnMtqe2EowffyGVZSvAA09dWycvhK%2BBBw2JG2dCcFP7yYKp2q1C6RfSmFak4R%2FqJmWoKG%2B1%2F4IY505BT5iYxlJP6XOToYTDm%2F5rQl7pAN5LpGR5KtKVXkvlzyzGP9hR5&X-Amz-Signature=224bf5a807ae122e15ac6a44aa5508dc38c0be8a50cd9d69ab666529f5723d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLWYQ4B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeKNyMbvdTJf1Db2R8UJM5bRAvKU5%2B81gISFj4%2BtaTIAiADmUr3WPegc92ckuyfmX5lD8FvtLrOH%2BYjMuqH%2BijJbiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzErdETBHhqEgDxxKtwDV9TWo70cI9lXABus1JErv27X0f0XXLrLBOB8YcmDjA3THwTeaZBcjwz003xGe%2FXhbwQ3kQ7AZT8vbJoYcLlJtz2JGz0B21%2FHIwXV3y8m%2Fq8TW6SyIA8VBHJCUgYDvsQgC89Cgz0liaQwQr4MRnuALdOmuMGkdWMfNaNZaqveeDujWojGZa%2BU2NUSe%2F3BhMZUVHnDeCxIGsmRL6orEPfwJ2bCLrfcqeUjJV%2BTpl8PL51mNj%2FW7cg0cVEr4FWngKpBXLH0VErU0FONmNG%2B5Zx5S8Vd5SmegHQBAQte3C8TfoSWLfKQkohbzIL0oZuIUAvzH0pWkp2ZuFksrJ%2FZk94315CdlnSHjgUftCvdNPuBrys1o%2BV2dGmgvTt2NzRI5T5yZeeemVtXbyYv6ovIo6ZTRg0eHen%2Bsk%2B34Hq342lygNQfebP7C4OBmg%2F3Gc0LM%2BmwlhlZ1PTCffKpR61U0HXSmRRXrEPW2z1m3lPztTIB4IqoMtBG6II6ozdBuV9i%2F%2FVX6KaTyQiV5s64h%2FxErpVYEJqPROjzfzo%2F7QMQc2Db88aMaiAhBlBc2dzOcy38tbh8TXzovKrysm79KVgRav9J7QbOuAXE1k6oL%2BIrhVXR1OSAbJ0ZA3sHz6twrgQwru7ZyQY6pgFw%2B3Zt8Xt1odsOzDZ%2FUk8BqznHMYJccu6ISUNwxDF%2BVQtnAJpfrQZezVi3uQMTryo9Li9wMeQEj3kDVzbYVccXDK1u44pphnMtqe2EowffyGVZSvAA09dWycvhK%2BBBw2JG2dCcFP7yYKp2q1C6RfSmFak4R%2FqJmWoKG%2B1%2F4IY505BT5iYxlJP6XOToYTDm%2F5rQl7pAN5LpGR5KtKVXkvlzyzGP9hR5&X-Amz-Signature=10dcefea74d8aca416534d528f4bf0fa097306e85c33872917190ed3de9feb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
