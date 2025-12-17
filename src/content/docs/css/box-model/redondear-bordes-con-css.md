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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSRQCYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkzdS3ijo85DBquDVpHahdZy08xa7v%2F4QfsXDs34crcAiA7jS7lRQx3NbO9%2FWso0I7IiGWn1Hy1NO4tdFnkwZLKiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsehN%2FmiMt2Awl0sBKtwDNT8nkYvCFfhoNDiI%2Fg%2Fs4kC8DCzTx5kBojuVjHkvpkAEcDwHPY9HK3nE9COMY6cyIm3qfdvd%2BB1%2F2J8wX%2BkbeIl%2B8vrph76qJbDwvzBITDrFUf75V9YsAkQXuT3rl%2B05WDYL4kvkmxdJMgYmY6Z5fI%2FzkuV6RzvdaMGUCntTdt7qimZc26suPs9Foczk9ZrxQG5WuRW3A8oLn%2FQIL1hjEjSAxLLX7PWteaE945s%2Bh2%2Bv%2BHq5P5d3uj5dRxZ%2BFAPY1LHpEMByC4XkbsWk4FTL5Y1bQ06wlLF4eEm9A6iFqyJ16xlvW5zUrPKONlGbzcms234v9iz0%2BKLHiVO1bS7R0SunZldPb90Mh0kHrFOdvOhGpcrpFBhxtiJ4odhWGFS%2FWh0XtSLyDKofRifgbBn4ghIeC%2BptiG%2Boib8Cs5kA%2BoevUHbdCQv9gUKYbf%2Faxz4KJZEYZ%2FuZ6upXv9pSMXWtAO5BcK3nvgms%2F8sb4fR3YuINvJ8HemwKlipprifXJ5LPLh94iCyO1qS1DC3W1bbVXD0sZJiOeBJvuAQDpq3HPP55QX%2BMa1rPLKUjlgj0yEPtqn9P5W4vWNpy1y0CiEgOQKij%2FvEkyWPmSsXxnUOLRXDPo0AehPdsKGqlNyEw%2BZ%2BLygY6pgEl9bSK7g4uBr3vror9nynUMeOtqysKQCPIu%2F4kJgX6o7x6%2B0Uki%2Fk2TPdQO2XSYhXn5RRFWpt4H2Jw3xXfXYQP3CFcGthuDmLNfdoksDRnEjm%2F%2BpNy10YmbPWRKTU1UeDYaMJa7wG1BKMuJm%2BasuvzghFkygzd%2FLoBM7gvbm34ivBkC5FDL40YQQI%2B0QZvSHsh5lQQwu8lGV%2BdlfnqINIIg1VhHmoX&X-Amz-Signature=8aa605607fad090a6bd14d0fb246724291e8778ff08eb2afe18b46f04c517be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSRQCYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkzdS3ijo85DBquDVpHahdZy08xa7v%2F4QfsXDs34crcAiA7jS7lRQx3NbO9%2FWso0I7IiGWn1Hy1NO4tdFnkwZLKiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsehN%2FmiMt2Awl0sBKtwDNT8nkYvCFfhoNDiI%2Fg%2Fs4kC8DCzTx5kBojuVjHkvpkAEcDwHPY9HK3nE9COMY6cyIm3qfdvd%2BB1%2F2J8wX%2BkbeIl%2B8vrph76qJbDwvzBITDrFUf75V9YsAkQXuT3rl%2B05WDYL4kvkmxdJMgYmY6Z5fI%2FzkuV6RzvdaMGUCntTdt7qimZc26suPs9Foczk9ZrxQG5WuRW3A8oLn%2FQIL1hjEjSAxLLX7PWteaE945s%2Bh2%2Bv%2BHq5P5d3uj5dRxZ%2BFAPY1LHpEMByC4XkbsWk4FTL5Y1bQ06wlLF4eEm9A6iFqyJ16xlvW5zUrPKONlGbzcms234v9iz0%2BKLHiVO1bS7R0SunZldPb90Mh0kHrFOdvOhGpcrpFBhxtiJ4odhWGFS%2FWh0XtSLyDKofRifgbBn4ghIeC%2BptiG%2Boib8Cs5kA%2BoevUHbdCQv9gUKYbf%2Faxz4KJZEYZ%2FuZ6upXv9pSMXWtAO5BcK3nvgms%2F8sb4fR3YuINvJ8HemwKlipprifXJ5LPLh94iCyO1qS1DC3W1bbVXD0sZJiOeBJvuAQDpq3HPP55QX%2BMa1rPLKUjlgj0yEPtqn9P5W4vWNpy1y0CiEgOQKij%2FvEkyWPmSsXxnUOLRXDPo0AehPdsKGqlNyEw%2BZ%2BLygY6pgEl9bSK7g4uBr3vror9nynUMeOtqysKQCPIu%2F4kJgX6o7x6%2B0Uki%2Fk2TPdQO2XSYhXn5RRFWpt4H2Jw3xXfXYQP3CFcGthuDmLNfdoksDRnEjm%2F%2BpNy10YmbPWRKTU1UeDYaMJa7wG1BKMuJm%2BasuvzghFkygzd%2FLoBM7gvbm34ivBkC5FDL40YQQI%2B0QZvSHsh5lQQwu8lGV%2BdlfnqINIIg1VhHmoX&X-Amz-Signature=6bdfaba92374d7af92ad97d85d5f8d49a49d6bbe42e09a49ed9f3db66e8a36a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
