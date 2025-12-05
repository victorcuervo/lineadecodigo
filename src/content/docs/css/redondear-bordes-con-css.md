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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBMSZK5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguTmcnqTQ6R3p14bqEm5KHye5FLKxHsKeYVngcA0BJAiBXVfg1FK%2FD9t1g1EtvhMvKtUhMw83Jiaznf9HXNDbC4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyqfmvjT1Xr2JX7QqKtwDxsCia6FP%2BbY%2BrPkbSqFRn%2Fa9HLKMCaZmZnDwQCf44%2FoRlF%2BFOa%2Fisu1HvLIkr7pml9AmAcxwO4kUm6jEUZ4SCz6H%2BPDUpfJl2U1ChLOzt7z7srO0V94rxd0TiwwxvQIy%2F7PH65biXDwNFhd4gC0N2mPmuPc9N%2BKW3Q1srjmjLoaKqYqkK2Fu1Y%2FK3ec%2B1%2FURMJoWBeOnmLYBdMtnIyc5BkHZhFgwKp0Id1enGIoh%2BZ4yty73G21C%2BtSHBcxw0wyK%2FmlLCYaXd9EC6Kf%2ButnbFivk0CvkxL%2FlUo15cBgYJAipJm31yZMCohxgJWdcDr81hZ%2B3KLoUTNB8%2Be16ewIj%2B7%2BwD6pLElNgZwJjEb3EuOeHL2fiwMufnV09GaPD3zFlcUJbLLTTHhTFlVcWH8WlyMRDra7pQ1B7luqwDLqxhrrlEQcZCnW6EbV%2BNTdOtEqN1vuF2qhLHo%2BRFjXZfXiSk7bN6iQPoJO%2FSENnAWpDm83dQn0CFHmmVEVn5fJLh35iBkm7jc3hdwo6yqmlZ8mp72KuLfM%2BCX3rR8cDa7KCJhfTcDscfzkiw0XSX4rBsEds70FBfRHst8URhMYYB1XmRzYNNySQVyupJhefcP4cobCsQzak4%2FPFVkLesDYws6%2FJyQY6pgGQWJYwxWnH7%2BqqYIFJfpHi9QOrXIqDF6%2B4t%2FEl%2BYZrs6NIQWmriLGDtyeOa5JmnFJcFlWwV8Aqdttpg6Ij2S1OWG2bPntkej5YU3WiJgVyO1q3rc9EijlBajQ0OKKz9VPOh4SHxLJtRlo%2FeRd5lU0qnZWosK%2FiRd9jrjGKaTEKPaSSB7DDcvcpatKZIyjwElJyCYkgRhqqyyZf8bmsd55%2BtluWhzB6&X-Amz-Signature=09305a8765a5b961cc9bc9fb2028ce9535ce699ed1a1c21f8adf430885cf9878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBMSZK5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguTmcnqTQ6R3p14bqEm5KHye5FLKxHsKeYVngcA0BJAiBXVfg1FK%2FD9t1g1EtvhMvKtUhMw83Jiaznf9HXNDbC4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyqfmvjT1Xr2JX7QqKtwDxsCia6FP%2BbY%2BrPkbSqFRn%2Fa9HLKMCaZmZnDwQCf44%2FoRlF%2BFOa%2Fisu1HvLIkr7pml9AmAcxwO4kUm6jEUZ4SCz6H%2BPDUpfJl2U1ChLOzt7z7srO0V94rxd0TiwwxvQIy%2F7PH65biXDwNFhd4gC0N2mPmuPc9N%2BKW3Q1srjmjLoaKqYqkK2Fu1Y%2FK3ec%2B1%2FURMJoWBeOnmLYBdMtnIyc5BkHZhFgwKp0Id1enGIoh%2BZ4yty73G21C%2BtSHBcxw0wyK%2FmlLCYaXd9EC6Kf%2ButnbFivk0CvkxL%2FlUo15cBgYJAipJm31yZMCohxgJWdcDr81hZ%2B3KLoUTNB8%2Be16ewIj%2B7%2BwD6pLElNgZwJjEb3EuOeHL2fiwMufnV09GaPD3zFlcUJbLLTTHhTFlVcWH8WlyMRDra7pQ1B7luqwDLqxhrrlEQcZCnW6EbV%2BNTdOtEqN1vuF2qhLHo%2BRFjXZfXiSk7bN6iQPoJO%2FSENnAWpDm83dQn0CFHmmVEVn5fJLh35iBkm7jc3hdwo6yqmlZ8mp72KuLfM%2BCX3rR8cDa7KCJhfTcDscfzkiw0XSX4rBsEds70FBfRHst8URhMYYB1XmRzYNNySQVyupJhefcP4cobCsQzak4%2FPFVkLesDYws6%2FJyQY6pgGQWJYwxWnH7%2BqqYIFJfpHi9QOrXIqDF6%2B4t%2FEl%2BYZrs6NIQWmriLGDtyeOa5JmnFJcFlWwV8Aqdttpg6Ij2S1OWG2bPntkej5YU3WiJgVyO1q3rc9EijlBajQ0OKKz9VPOh4SHxLJtRlo%2FeRd5lU0qnZWosK%2FiRd9jrjGKaTEKPaSSB7DDcvcpatKZIyjwElJyCYkgRhqqyyZf8bmsd55%2BtluWhzB6&X-Amz-Signature=b4de51844f7039df0d3daa779074ebcc28d513448add32809e6f385ac9879e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
