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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFAAWPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdUXso8Hl1ckgseamDubZftx1J2BjnVrWxo9njJ6yswIgGkbXPgmT9%2Bm8RxhnKi3Kacn2O2aXTEkFZFurHuXyPRcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5GwfQmqIEpUBliyrcA7cPIkTSqMUYLUekwmXbgzkjz3oawNsN87WvRUGzOcnFjchNEVvYpa7PGSVGj96HcTrPQV%2B2pp4NCvQuaaB4iNyIfu8EIZXmq8oYlguofHgmto%2BogT41xlUwqMdghXbzA9bD534Fy2Q5J%2F%2FYnXGNmvjefyUvejgHOTTu5XgntCvKT9Uz1CcfiIVOE2H7kz4r%2FNRbRSb%2FlwGgr8Hudv4H9wTtWgmj%2BFPzyFTvNKsNVQ8ZWYBj4flbpx9mdCET%2B%2F9I5ETgckkNFyJrvqxvo2BQI6WOf5W6s5daOU8XvWykAaxWCOFRaVQodOf7Vo99nYJlojxthdWNZUiGp22irIdtbRxT%2Bt%2BFb9AmOk8%2Bx9%2FsfQZniiuDIOuXOBTYvT1oIdatIlFDkhsUuMTE1j%2BOAY22mH4jmTC78CwpPC%2BAWrsyxop02bgahdHt8fLkiyAMGAOZtKpwsTaazUVw1BjSjexzThDjr2eTje5z2nQBm5JDemfNImBvhgJaIbkNskpLBZFwt5sKw%2FKFkkQPTBi%2BgPw6s5YlX8vOr7PDdCfJ3snTpix9gIwRuldABjcieHm5bxl20XXaYBeOsbqBjbqGKW%2B%2Bn2swqlXD%2BNpxNuO90W8IEP6BUEPY5mnYrHzlkGV3MKjR2ckGOqUBESmnxF1V9yEaatQbVU%2FIU8AoJnFZmK8rSRwHWGz3qki4Ip6uvZaXHPyjMwGviKarz1LF%2FVzgleygSfZTVywvittmUeMW0KcxM8418nAziEMMGDVuQlmlf3F3ATbqKUAlY5cDoFbisJvnAda8f%2FoVxMVwKjeoXQ5%2FzO0rPoO%2Bvz2YQLWgBowEUaS9MXtV7RY9OQVnEnDnOYpZpmEvKAEthtn6sMlE&X-Amz-Signature=9e56d2f58d1f31d6ec3bb4967596433561923dd4502bcb52c76f9f8e43fb9122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFAAWPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdUXso8Hl1ckgseamDubZftx1J2BjnVrWxo9njJ6yswIgGkbXPgmT9%2Bm8RxhnKi3Kacn2O2aXTEkFZFurHuXyPRcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5GwfQmqIEpUBliyrcA7cPIkTSqMUYLUekwmXbgzkjz3oawNsN87WvRUGzOcnFjchNEVvYpa7PGSVGj96HcTrPQV%2B2pp4NCvQuaaB4iNyIfu8EIZXmq8oYlguofHgmto%2BogT41xlUwqMdghXbzA9bD534Fy2Q5J%2F%2FYnXGNmvjefyUvejgHOTTu5XgntCvKT9Uz1CcfiIVOE2H7kz4r%2FNRbRSb%2FlwGgr8Hudv4H9wTtWgmj%2BFPzyFTvNKsNVQ8ZWYBj4flbpx9mdCET%2B%2F9I5ETgckkNFyJrvqxvo2BQI6WOf5W6s5daOU8XvWykAaxWCOFRaVQodOf7Vo99nYJlojxthdWNZUiGp22irIdtbRxT%2Bt%2BFb9AmOk8%2Bx9%2FsfQZniiuDIOuXOBTYvT1oIdatIlFDkhsUuMTE1j%2BOAY22mH4jmTC78CwpPC%2BAWrsyxop02bgahdHt8fLkiyAMGAOZtKpwsTaazUVw1BjSjexzThDjr2eTje5z2nQBm5JDemfNImBvhgJaIbkNskpLBZFwt5sKw%2FKFkkQPTBi%2BgPw6s5YlX8vOr7PDdCfJ3snTpix9gIwRuldABjcieHm5bxl20XXaYBeOsbqBjbqGKW%2B%2Bn2swqlXD%2BNpxNuO90W8IEP6BUEPY5mnYrHzlkGV3MKjR2ckGOqUBESmnxF1V9yEaatQbVU%2FIU8AoJnFZmK8rSRwHWGz3qki4Ip6uvZaXHPyjMwGviKarz1LF%2FVzgleygSfZTVywvittmUeMW0KcxM8418nAziEMMGDVuQlmlf3F3ATbqKUAlY5cDoFbisJvnAda8f%2FoVxMVwKjeoXQ5%2FzO0rPoO%2Bvz2YQLWgBowEUaS9MXtV7RY9OQVnEnDnOYpZpmEvKAEthtn6sMlE&X-Amz-Signature=c2b4e0e67d563796cad3eff525cea95d384083eaadabb515523971da48b52542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
