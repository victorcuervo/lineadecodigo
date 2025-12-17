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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVJACE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbbp88%2ForuKvquNV7BHV%2FJkvJ23zkOKkK%2F0N3cAs%2FCEAiBKyrCxqNO1wgZGDUv5nDuJKklh3ih6RNCuEwPpSGEPiCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7ej2PucnQiCoKzUWKtwDcUmIUlIiTssDE7T0Lgt2LnB4AeT%2Fuka5PeTzjlvGTzN9d1kQ7iFoBV6ADBzkNVZ0bRYyC1d1psTxaf4VJklXBm3cVrmYPBEeS7jPXXzsF9BRNR57VYIFiru6xAxc38N999Un6BCDjlRDCbWNg4c0hlC1Di8Nhvib8hsFgiDJGScQNi6XqlSLaUq9s%2BUvu3V35AuEuim5PJF6U0aURFaaZsHoezpoyJQYg8fzjo7Pf6%2F6SKJEscIEVOc60H2sJxRSbMLgaNOh%2BfdRQy0ljUOSHGkLoYPNwdyiXM410LzYnEEnP2hpGsZ%2BtqxgJG8%2BqHkiKZWAC13kINuPFhDmlcPS4eVvakZTkiIdNDx%2FeiOfWTcKrcMNVOL9lU%2BU5Yzy%2FaQzyG%2FQqTQuUu%2BFgezbHstmzUxXOu5sxt9EPOyEUWe74MmS8QD23GNl8SIVngKaaCDSFWc8wW6wfrpocqgjRZ%2F33BVTdTDCbviBQZa60ioWKWJVF%2FEB5nJPHRqtu1ilIDayNL1GElkOc66aaJSkM3Pu1LPyPSKb5JQoIgc0Drd4hH%2FDxg3vTrda%2BnNolJqQmNP%2B52TNSw3kXWRd2Djtp7vDhKSsXu3LeYnjIuHCH2gwnUE1SKGdrxlHOCqhutUwnoOJygY6pgEgSXOh8T8IN8OmebaGjtJdWZyqE%2F44DR%2F9lnFPJeLxh1ZskCvpBLsmhywx7kmndCRCV94p4yNdD3MAwOgrcX0fK7FGI1aj9mxnMD0lZWIIr2NlKo58lhw0Lq%2BEwoXgG1WCt6QZVZ0m5ukDkf%2FV9WQQbU7RPR3Bw8nxJz3elU8%2Fg5Y95ErWcarJW%2BDg5wjPC4ndImL1T0Ili5nzJ2J0KBpwjecDySo0&X-Amz-Signature=2b286383f8f786f238d76343ef177d7216fe0c56890c6d3687bb71dd29f6e682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVJACE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbbp88%2ForuKvquNV7BHV%2FJkvJ23zkOKkK%2F0N3cAs%2FCEAiBKyrCxqNO1wgZGDUv5nDuJKklh3ih6RNCuEwPpSGEPiCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7ej2PucnQiCoKzUWKtwDcUmIUlIiTssDE7T0Lgt2LnB4AeT%2Fuka5PeTzjlvGTzN9d1kQ7iFoBV6ADBzkNVZ0bRYyC1d1psTxaf4VJklXBm3cVrmYPBEeS7jPXXzsF9BRNR57VYIFiru6xAxc38N999Un6BCDjlRDCbWNg4c0hlC1Di8Nhvib8hsFgiDJGScQNi6XqlSLaUq9s%2BUvu3V35AuEuim5PJF6U0aURFaaZsHoezpoyJQYg8fzjo7Pf6%2F6SKJEscIEVOc60H2sJxRSbMLgaNOh%2BfdRQy0ljUOSHGkLoYPNwdyiXM410LzYnEEnP2hpGsZ%2BtqxgJG8%2BqHkiKZWAC13kINuPFhDmlcPS4eVvakZTkiIdNDx%2FeiOfWTcKrcMNVOL9lU%2BU5Yzy%2FaQzyG%2FQqTQuUu%2BFgezbHstmzUxXOu5sxt9EPOyEUWe74MmS8QD23GNl8SIVngKaaCDSFWc8wW6wfrpocqgjRZ%2F33BVTdTDCbviBQZa60ioWKWJVF%2FEB5nJPHRqtu1ilIDayNL1GElkOc66aaJSkM3Pu1LPyPSKb5JQoIgc0Drd4hH%2FDxg3vTrda%2BnNolJqQmNP%2B52TNSw3kXWRd2Djtp7vDhKSsXu3LeYnjIuHCH2gwnUE1SKGdrxlHOCqhutUwnoOJygY6pgEgSXOh8T8IN8OmebaGjtJdWZyqE%2F44DR%2F9lnFPJeLxh1ZskCvpBLsmhywx7kmndCRCV94p4yNdD3MAwOgrcX0fK7FGI1aj9mxnMD0lZWIIr2NlKo58lhw0Lq%2BEwoXgG1WCt6QZVZ0m5ukDkf%2FV9WQQbU7RPR3Bw8nxJz3elU8%2Fg5Y95ErWcarJW%2BDg5wjPC4ndImL1T0Ili5nzJ2J0KBpwjecDySo0&X-Amz-Signature=18e97ba8e89f0f401b8141473968b58dc08b03a38ece28a74eabe04e6cca909d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
