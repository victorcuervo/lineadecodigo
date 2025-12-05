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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z4Z7FMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqcYLDOUHjFZrGlGaAX10ByzxR55eKuCdBy50rWqU%2FvAiEAlRwML6hGg98Jhpewb7pi4qgVJp5nN%2BonOpbHw7ERlzoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH0myskqKUXay24DAircA6KRgnKYwWEr2CJ7XqTF8idKZF5g84pDZtCk8NCa6nL39vPmClv%2FuZCeaF7hOmhO9um7LbtWZYP9ks5hEsu74kNtGGZOVJi1%2BCo0XRgz4yZepOg0jpQOiygerMTZIZsL6fv8%2FNA3rUIXrSOSqIh46UyOWu7KkHisQ7U2b%2FJxueCYuoalb7e53K8mxA6Kg2Bil0GnPscAOkKMOeBoS2Xv8JSdoTo7GILC4WAAUZqM9nrj7GIcB5hhjhiusDD6%2Blp8txwa16oy6NyZsP4pgFZNZggXtbmE7ICh%2FuWzSnCVnl5oHc2D0EmqVcnCSVlCg%2B%2B3aAdK3YTTfQsfdwSnVvkcQ3xj%2Bkp1sjAlAhZxQhLeJDHhbgZOt%2FwBdRtU8In1DHd8gKnVmiXq6E7Yo2VjQSHpbFM7k6gP41LS2NJOo1Gt0cNvkAeez2JutyRWaT8o7F9EaVP6HTLGXYsCABGmuY9CS5Tc36Clfvz6rjeJ9s6YwZzPsVwH0ViQwqQewJm7d9dyttMWJ2MrFga78LiCG7vg93ZRVTZI23RCr%2BpT87%2B%2FMIttNO3JCHaLrVDveQdBjafr0337Mzk%2BWV30AbAkaaRnZRs8HOTDnZaGE3LHqASIpTyeN6WRygSTZ22XRmy%2FMKCNyMkGOqUBQSZ7FcBo9utLFXv1Fhwh7mipC69N47t2dJ1zcE4m3OrVlFxterJt6ooKpfa%2BgzogMhGSnoUu9dZzLzwWn5wIDgk16rjMBq4QfL%2BLI1lcymscdig%2BTY6%2FIzirGKJ2e36I%2FMoatswd9LBMR51ksnng6VWnnI3Js32LSmNaP49KfOLPBKOVcjocynmh0NRrDw9VP35%2F5mXZYBDnPCz1wSElZjnt3oa1&X-Amz-Signature=80e3c37eea78fa456cdf63348f58a1e73faa42031173c586309f8e34260b065a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z4Z7FMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqcYLDOUHjFZrGlGaAX10ByzxR55eKuCdBy50rWqU%2FvAiEAlRwML6hGg98Jhpewb7pi4qgVJp5nN%2BonOpbHw7ERlzoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH0myskqKUXay24DAircA6KRgnKYwWEr2CJ7XqTF8idKZF5g84pDZtCk8NCa6nL39vPmClv%2FuZCeaF7hOmhO9um7LbtWZYP9ks5hEsu74kNtGGZOVJi1%2BCo0XRgz4yZepOg0jpQOiygerMTZIZsL6fv8%2FNA3rUIXrSOSqIh46UyOWu7KkHisQ7U2b%2FJxueCYuoalb7e53K8mxA6Kg2Bil0GnPscAOkKMOeBoS2Xv8JSdoTo7GILC4WAAUZqM9nrj7GIcB5hhjhiusDD6%2Blp8txwa16oy6NyZsP4pgFZNZggXtbmE7ICh%2FuWzSnCVnl5oHc2D0EmqVcnCSVlCg%2B%2B3aAdK3YTTfQsfdwSnVvkcQ3xj%2Bkp1sjAlAhZxQhLeJDHhbgZOt%2FwBdRtU8In1DHd8gKnVmiXq6E7Yo2VjQSHpbFM7k6gP41LS2NJOo1Gt0cNvkAeez2JutyRWaT8o7F9EaVP6HTLGXYsCABGmuY9CS5Tc36Clfvz6rjeJ9s6YwZzPsVwH0ViQwqQewJm7d9dyttMWJ2MrFga78LiCG7vg93ZRVTZI23RCr%2BpT87%2B%2FMIttNO3JCHaLrVDveQdBjafr0337Mzk%2BWV30AbAkaaRnZRs8HOTDnZaGE3LHqASIpTyeN6WRygSTZ22XRmy%2FMKCNyMkGOqUBQSZ7FcBo9utLFXv1Fhwh7mipC69N47t2dJ1zcE4m3OrVlFxterJt6ooKpfa%2BgzogMhGSnoUu9dZzLzwWn5wIDgk16rjMBq4QfL%2BLI1lcymscdig%2BTY6%2FIzirGKJ2e36I%2FMoatswd9LBMR51ksnng6VWnnI3Js32LSmNaP49KfOLPBKOVcjocynmh0NRrDw9VP35%2F5mXZYBDnPCz1wSElZjnt3oa1&X-Amz-Signature=99160be51c2504f602cb0df44d7c4dc23ea0f6c56b654e833fd36c84d969734a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
