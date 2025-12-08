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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJYDOMSI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2t6Crn0mRUJx4sUhPokbg%2Bfn3zB8OEQ7u18QqlkvLrAiEAwrcfnavszJMY4O1QH%2BbxJ%2FKyD9MkQadH6oZtjuYvZGgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2BjMLDzJAbfZDEFCrcAz8DboEqxYWvCPA3cxFBbncGYM8YD3jsEFT47cV%2FihGgJvuZaCo0zGOqLLinsEGswfqA0wtCYGaqtWAwfs%2BhTi1DrTZIfzPolg2q9%2BzgntQn4kMni8p8S9TpruQzkZxzgJI20%2F6Gcz%2FS5vlq0fs5e8FoI6Y94SgG60PtXcqr%2BDKKZOofw6zSGcVGOGt%2BU03s%2BxKQdkKtJTCXEmVYWJR7oxbQT0cgeVWxhyJ9zgtV2sJ2FVS5omTnkbawZxpXSADOD9lBbupct1uEpUQSF52Cg6nTiMsFs1b818omPx0m5%2BXFlJtWiG7yqDdGCYnVCPkh%2FS5uZPOC6XwZkLpU0IDEmp1%2BqSm%2B54j2lU9fB%2BDhPe%2F2UFUVGDA11IHHekWzFFwfLEtpE3biUS%2BBPut8nVI1kc%2FhTNbQKWGbVU2slJ3Vw3PcoIf7Zu5hdVlHqOO3V7yVkTJfiRq7bQP17CDQNgcXo7SA3Tn9nE8a4H6zjH2H6PTdBjR%2BwFAUNbhbB4iwTUA55%2FtSGeLrhvbV6OwUsSoZlyT9vapgF7CTX1aZ9WY9thaZI8nRlwHbrX%2BprlRNDboDduwyUo4ScLFqlewTXw%2BnQ4aHPpiOPBo4NqZZNePsfaeF7FA2qq7n4LkN3Y%2FkMIXD3ckGOqUBnuOd9GhY5uklhkzp9PqLO2eQ2qBOXBbwp0lbEXK6Sc8Nex663fFPvEMb20L2kEPLfAe6o%2FJlIGvnQmaXra4Yv0SVwm%2F0CGgRo488BJdQ5fRnAUDduXfZtOFUsvNIuJoBdym6PMqnRRLzEpE5%2ByFEY3Mccf7lsSIcSe2V4NBCVzKgCaItGpZAww%2B2jAudEfmHNE9S7s6QQOjyMwdkm4AnJGNNnz4k&X-Amz-Signature=f691b5551e1875424a416672c7eefa95e906a4fdc42f3343286ca54d5e37714f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJYDOMSI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2t6Crn0mRUJx4sUhPokbg%2Bfn3zB8OEQ7u18QqlkvLrAiEAwrcfnavszJMY4O1QH%2BbxJ%2FKyD9MkQadH6oZtjuYvZGgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2BjMLDzJAbfZDEFCrcAz8DboEqxYWvCPA3cxFBbncGYM8YD3jsEFT47cV%2FihGgJvuZaCo0zGOqLLinsEGswfqA0wtCYGaqtWAwfs%2BhTi1DrTZIfzPolg2q9%2BzgntQn4kMni8p8S9TpruQzkZxzgJI20%2F6Gcz%2FS5vlq0fs5e8FoI6Y94SgG60PtXcqr%2BDKKZOofw6zSGcVGOGt%2BU03s%2BxKQdkKtJTCXEmVYWJR7oxbQT0cgeVWxhyJ9zgtV2sJ2FVS5omTnkbawZxpXSADOD9lBbupct1uEpUQSF52Cg6nTiMsFs1b818omPx0m5%2BXFlJtWiG7yqDdGCYnVCPkh%2FS5uZPOC6XwZkLpU0IDEmp1%2BqSm%2B54j2lU9fB%2BDhPe%2F2UFUVGDA11IHHekWzFFwfLEtpE3biUS%2BBPut8nVI1kc%2FhTNbQKWGbVU2slJ3Vw3PcoIf7Zu5hdVlHqOO3V7yVkTJfiRq7bQP17CDQNgcXo7SA3Tn9nE8a4H6zjH2H6PTdBjR%2BwFAUNbhbB4iwTUA55%2FtSGeLrhvbV6OwUsSoZlyT9vapgF7CTX1aZ9WY9thaZI8nRlwHbrX%2BprlRNDboDduwyUo4ScLFqlewTXw%2BnQ4aHPpiOPBo4NqZZNePsfaeF7FA2qq7n4LkN3Y%2FkMIXD3ckGOqUBnuOd9GhY5uklhkzp9PqLO2eQ2qBOXBbwp0lbEXK6Sc8Nex663fFPvEMb20L2kEPLfAe6o%2FJlIGvnQmaXra4Yv0SVwm%2F0CGgRo488BJdQ5fRnAUDduXfZtOFUsvNIuJoBdym6PMqnRRLzEpE5%2ByFEY3Mccf7lsSIcSe2V4NBCVzKgCaItGpZAww%2B2jAudEfmHNE9S7s6QQOjyMwdkm4AnJGNNnz4k&X-Amz-Signature=52a6d57784cf6ed164f254580063929500fb13b601616c3035e7ae58f67c8734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
