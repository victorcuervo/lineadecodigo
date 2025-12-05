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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFCVF6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfL0pBXqTKPn6jNxE%2BITnk%2BV5jpk1iVqvVnaGG3KLvqAIgCiXgW2B5KamZIi%2BYnrxR8sSpjv36DkxCEgHMRRifJdkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNLnxZ1RlVt3eoNf4yrcAzI4W%2FntO9Kgg3mJI28gTOlW5iMutwdJFKmtEuis4Y1RUiJIe6lpEwxWza6tcR5q%2FiSw14LsWIKVx2QByhGaW7ld6n7rDHMgNcA76urMqAhJhkF34PEjNBnh8%2FIpNZAQJJrfgU8hGb2x08sjnjeg9N%2Fgz3mBbq5%2FhezOUaCjhN%2BXVqtLbTqnObMj0obnYmUm20w43G5Ypfs7Hh38v5Sx0PpZViHtT%2FzraW3Ynii6oxn5P1tixL%2F%2FSqfbHP7FtYCvDQAZRuqneE%2BqxBxQmqjPa8wiJ7WEB%2B%2FEshwgIbSBe%2FIfWzJ0wgNzsrtL5qZzIweIGUTmWQ5l1bFFYilb1sJli%2B2sVvkJ%2B1SP18ThvH2l4dewVzgCG5QiDEIIElLqe2Htua9eJ6iUrl5L1au3rLBPzvurQCOgNxn5iVWQSURQaBveivtCzV1F%2BFcf3JvZefTLfOWCcDwiCEPmFs93jeRzB699UErprnwITgMW1l4Bu9D45v2Gbgsn7ID6Chj0lvAcprinVKIVGbzVA4wMKg0THLFan2QvhxG%2FAPWfV%2Burw0APbRYT9vtPd%2F4IQWyocuJU96lkrAT1OyxkBKpy8yD0lxmc7%2Bd9w5V1tBzhjwdX68lrRGJFncg1GQZjU51RMImMyMkGOqUBNdMfaOdGxV8QNJOdok%2F25LR%2FaHGAiSqDFSTbxiMzNmBKz7uIOrjIUFR7etKz5brNV6W2HQtyVtTpmjdChz4hL%2F185deA%2Fup5pN2aWMsU42xB9ZSojsa1RnF1aOKHUv3%2Bh96CTI6Iqx8fv01J8yAQGwrr%2F5IXZQNU%2BXNsu5WE5WkE6PON3T5ozQegZX79Fl72fYiMPGX7YvNA8yOo7hZKvC%2BOtJio&X-Amz-Signature=12d3b451f3df057c81f14988e909d45c7f947597c06b5893c1fde2def757f34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFCVF6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfL0pBXqTKPn6jNxE%2BITnk%2BV5jpk1iVqvVnaGG3KLvqAIgCiXgW2B5KamZIi%2BYnrxR8sSpjv36DkxCEgHMRRifJdkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNLnxZ1RlVt3eoNf4yrcAzI4W%2FntO9Kgg3mJI28gTOlW5iMutwdJFKmtEuis4Y1RUiJIe6lpEwxWza6tcR5q%2FiSw14LsWIKVx2QByhGaW7ld6n7rDHMgNcA76urMqAhJhkF34PEjNBnh8%2FIpNZAQJJrfgU8hGb2x08sjnjeg9N%2Fgz3mBbq5%2FhezOUaCjhN%2BXVqtLbTqnObMj0obnYmUm20w43G5Ypfs7Hh38v5Sx0PpZViHtT%2FzraW3Ynii6oxn5P1tixL%2F%2FSqfbHP7FtYCvDQAZRuqneE%2BqxBxQmqjPa8wiJ7WEB%2B%2FEshwgIbSBe%2FIfWzJ0wgNzsrtL5qZzIweIGUTmWQ5l1bFFYilb1sJli%2B2sVvkJ%2B1SP18ThvH2l4dewVzgCG5QiDEIIElLqe2Htua9eJ6iUrl5L1au3rLBPzvurQCOgNxn5iVWQSURQaBveivtCzV1F%2BFcf3JvZefTLfOWCcDwiCEPmFs93jeRzB699UErprnwITgMW1l4Bu9D45v2Gbgsn7ID6Chj0lvAcprinVKIVGbzVA4wMKg0THLFan2QvhxG%2FAPWfV%2Burw0APbRYT9vtPd%2F4IQWyocuJU96lkrAT1OyxkBKpy8yD0lxmc7%2Bd9w5V1tBzhjwdX68lrRGJFncg1GQZjU51RMImMyMkGOqUBNdMfaOdGxV8QNJOdok%2F25LR%2FaHGAiSqDFSTbxiMzNmBKz7uIOrjIUFR7etKz5brNV6W2HQtyVtTpmjdChz4hL%2F185deA%2Fup5pN2aWMsU42xB9ZSojsa1RnF1aOKHUv3%2Bh96CTI6Iqx8fv01J8yAQGwrr%2F5IXZQNU%2BXNsu5WE5WkE6PON3T5ozQegZX79Fl72fYiMPGX7YvNA8yOo7hZKvC%2BOtJio&X-Amz-Signature=c443e93bcd91dfe1867371a2aaac4124d0bad0ec71f7fcdce7cc7eae1311c9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
