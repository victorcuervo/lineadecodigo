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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQSWMMD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5PL80gwz5NLqLUdUVwDJiBM25PHVKgb4LofL5MumtQAiEAudsId8BI6ROoDXm07obDcTcaE%2BlXtplNaR6Z%2BUBEIaYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIeLeUlYG05%2Bjo%2FzSrcAwofm1YAbIIgL2%2BuiwHZ7tzw66qEmOZYsgjRoJTEPACJUbtb%2F5JB42o5eeap8YpRS7vSbKbAHdY5r82zdNdRkbWE5154%2FKq7%2BS3f9MLk4mN3HC7siqEvKnA2kED7bWzU3ja6MIZcqNZYs7uaPe3npXz3Suyb%2FNtnLwyf4dNkdIOj2fE8RicGys%2FrhMFPyKfhoC0%2BRqA5K70YJLGoj%2F1W%2Fj2Yf%2FMGjh7J4e%2BYRNKub8uVT%2Fx1eqlG2eTcqSmGzjD%2BYd8Mdm4DLmdk5JlJABxrc9UaMa9wOa76wFwxh3X6aR355sulqmHSDvE6PULhUC8gM6G0FmrM%2BqhZz6bcJYuHMo%2BBHgdgetEMU7k8n%2BMdo9VTPRhlvdJiH1Coo4PmCzTHoeCrJG%2FepzjcjvKDHU%2FlP4B395Jvbt%2BJwY8juNS%2FaJ75LCF1jARzOd44vMW000tedTPFjQwbkOI6kwgA3U3g03bAcSDh4CmmN1Ikt%2FnuBxbVT092GvJsau2SiagQzY9NmKjEq0sifcC5%2FuNOPFH6i%2BKkyacHGsAol9nIyv%2F59rwrLm8EpiHCj%2FgP2Q12%2FeVRA%2F3LjcaLk6rgFw8OK9FpWKrkb5sW89mIqbzjJ4oGW%2BWvrTUZAUoOg%2BQBUo53MK6a1ckGOqUB4T7b09sXDe5svI2UeKe68Wg1ub4aaydgLLg3eCDjuGVU2ZyoHVcrhrW0MphjUEZ%2Bu3lGmr90ichuslREVJhoPOXE5Y%2BtfXYBBmvg64nkxDlIukAFYgIuT4e4q1QX%2FCO01badg2HZsghNcCWiqzfw6YvL1QbH7KcfdAMN4MFZQp3%2Bch6ClkhMbxfGtlUqlWPBzTZBJbOLiDDWZaXti2uTJtlQOAGU&X-Amz-Signature=13c9c443c7d019798040e20acbc41d47ffe5fc39a452f80ce2f9ec9189b4389e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQSWMMD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5PL80gwz5NLqLUdUVwDJiBM25PHVKgb4LofL5MumtQAiEAudsId8BI6ROoDXm07obDcTcaE%2BlXtplNaR6Z%2BUBEIaYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIeLeUlYG05%2Bjo%2FzSrcAwofm1YAbIIgL2%2BuiwHZ7tzw66qEmOZYsgjRoJTEPACJUbtb%2F5JB42o5eeap8YpRS7vSbKbAHdY5r82zdNdRkbWE5154%2FKq7%2BS3f9MLk4mN3HC7siqEvKnA2kED7bWzU3ja6MIZcqNZYs7uaPe3npXz3Suyb%2FNtnLwyf4dNkdIOj2fE8RicGys%2FrhMFPyKfhoC0%2BRqA5K70YJLGoj%2F1W%2Fj2Yf%2FMGjh7J4e%2BYRNKub8uVT%2Fx1eqlG2eTcqSmGzjD%2BYd8Mdm4DLmdk5JlJABxrc9UaMa9wOa76wFwxh3X6aR355sulqmHSDvE6PULhUC8gM6G0FmrM%2BqhZz6bcJYuHMo%2BBHgdgetEMU7k8n%2BMdo9VTPRhlvdJiH1Coo4PmCzTHoeCrJG%2FepzjcjvKDHU%2FlP4B395Jvbt%2BJwY8juNS%2FaJ75LCF1jARzOd44vMW000tedTPFjQwbkOI6kwgA3U3g03bAcSDh4CmmN1Ikt%2FnuBxbVT092GvJsau2SiagQzY9NmKjEq0sifcC5%2FuNOPFH6i%2BKkyacHGsAol9nIyv%2F59rwrLm8EpiHCj%2FgP2Q12%2FeVRA%2F3LjcaLk6rgFw8OK9FpWKrkb5sW89mIqbzjJ4oGW%2BWvrTUZAUoOg%2BQBUo53MK6a1ckGOqUB4T7b09sXDe5svI2UeKe68Wg1ub4aaydgLLg3eCDjuGVU2ZyoHVcrhrW0MphjUEZ%2Bu3lGmr90ichuslREVJhoPOXE5Y%2BtfXYBBmvg64nkxDlIukAFYgIuT4e4q1QX%2FCO01badg2HZsghNcCWiqzfw6YvL1QbH7KcfdAMN4MFZQp3%2Bch6ClkhMbxfGtlUqlWPBzTZBJbOLiDDWZaXti2uTJtlQOAGU&X-Amz-Signature=0ce3f803eafcb51047b891adf526e24299432d8700f3a50729e19752b520fbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
