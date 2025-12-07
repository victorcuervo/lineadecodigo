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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZORA4RXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMKWV%2FWJfxzFEUx2%2F9Ygq1V360A8ngt87cC2osNrGNcAiBLhgMYXmSPelIH%2BI4%2Bp4AiK0DXCyKF%2BAM1iPV8Fq2UOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1Z%2B3EtIl1Jdx3N6KtwDdA2daR1k9%2B3lHMVxNw8vXtwOAoVbXq87MJ4YDsom9WWhDTLCQLAU5fqJ%2FUlcElzSqB8BSolWPfWyWtHxDKE%2FLT7%2FWe4%2FHLXdn89P7uaaraKLLxpffN%2BqGryEYwPToeqHhsrVVFP9NgMa7qhDf%2F%2F7ESYp1gzuLual%2Bj2ZNIrEYfeAoC4FEP103G%2FiDkIZvn6vDUUAMvU2ni4JohdHguxkHzbNX7ibVCzuDll5N03ueZi2KiYydL1UOzBwVQTgetC%2FOn%2FSUBNVne%2FtymdvjNBVktp%2Fx31BctBXjyqZaj2fA0BJuP4oGd5LGjBfCPfzf6Q7RrFYqiWUHoN88YWqm5NMcgyYFVnXtoXDuYJS5kjGEfpjLtak9gbC%2BM0JVuQNFCuZF8HKh4jWrrfI5z%2F5UXXmHVjPQiPhyFMu1nLs87EtHkFGrWcD7JXZCh0%2FaMGjATIfA6Og85AOiqCazLLh6aDNVCpHfMByg5YBBovIIWPjRTagrKk5M7daYHywxg2O%2FzZCv1%2Bo%2FLdJIyU%2F0kCSHg5kbf8h7kQPGV9e7Mup8f7o8CCKMBbNhOmMN2DKp6VMxhQ9B5drRsr7rH%2FrCOWSqZavBNefW70NBs0pku5vdFLB2D4Y1stgWvVvJ5nN4S8w0cfXyQY6pgHRm9%2BN%2B7DJMC5KEHUoGXEx%2BqHcE4mfRgphN6fJhKKomT7ld6W4iOKCm2eGebzWxh7ghsUWXc9c2YNLRPW6g3DW9dJ0VhMRjsCswTeSo3brYG0OGngctH8xP5zdcioZkw91TLwU2o7j%2BMiyNR8KWe8616S3lIDf45sntaSNZkzvc%2BR9PCCqbTI1RJTvrExSL4J%2FchCJJg6dShwvoh9p7jhap6eJ2w%2Bo&X-Amz-Signature=fc22eaff51c48ed28496770db3040f2dbbe10e6270eefb6b30bca1148153b438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZORA4RXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMKWV%2FWJfxzFEUx2%2F9Ygq1V360A8ngt87cC2osNrGNcAiBLhgMYXmSPelIH%2BI4%2Bp4AiK0DXCyKF%2BAM1iPV8Fq2UOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1Z%2B3EtIl1Jdx3N6KtwDdA2daR1k9%2B3lHMVxNw8vXtwOAoVbXq87MJ4YDsom9WWhDTLCQLAU5fqJ%2FUlcElzSqB8BSolWPfWyWtHxDKE%2FLT7%2FWe4%2FHLXdn89P7uaaraKLLxpffN%2BqGryEYwPToeqHhsrVVFP9NgMa7qhDf%2F%2F7ESYp1gzuLual%2Bj2ZNIrEYfeAoC4FEP103G%2FiDkIZvn6vDUUAMvU2ni4JohdHguxkHzbNX7ibVCzuDll5N03ueZi2KiYydL1UOzBwVQTgetC%2FOn%2FSUBNVne%2FtymdvjNBVktp%2Fx31BctBXjyqZaj2fA0BJuP4oGd5LGjBfCPfzf6Q7RrFYqiWUHoN88YWqm5NMcgyYFVnXtoXDuYJS5kjGEfpjLtak9gbC%2BM0JVuQNFCuZF8HKh4jWrrfI5z%2F5UXXmHVjPQiPhyFMu1nLs87EtHkFGrWcD7JXZCh0%2FaMGjATIfA6Og85AOiqCazLLh6aDNVCpHfMByg5YBBovIIWPjRTagrKk5M7daYHywxg2O%2FzZCv1%2Bo%2FLdJIyU%2F0kCSHg5kbf8h7kQPGV9e7Mup8f7o8CCKMBbNhOmMN2DKp6VMxhQ9B5drRsr7rH%2FrCOWSqZavBNefW70NBs0pku5vdFLB2D4Y1stgWvVvJ5nN4S8w0cfXyQY6pgHRm9%2BN%2B7DJMC5KEHUoGXEx%2BqHcE4mfRgphN6fJhKKomT7ld6W4iOKCm2eGebzWxh7ghsUWXc9c2YNLRPW6g3DW9dJ0VhMRjsCswTeSo3brYG0OGngctH8xP5zdcioZkw91TLwU2o7j%2BMiyNR8KWe8616S3lIDf45sntaSNZkzvc%2BR9PCCqbTI1RJTvrExSL4J%2FchCJJg6dShwvoh9p7jhap6eJ2w%2Bo&X-Amz-Signature=a70d7eedbcb03e54ca2463719751212dedff204d18ad340f6223937ea22e7042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
