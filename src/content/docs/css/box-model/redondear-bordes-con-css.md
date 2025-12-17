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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKVR76J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExkhOaZ1L9RsJuBlfhJGeewNNcUACgEIZ%2FE61b2%2BWabAiEA7UUFC1eqvs4nbjKnIPMG%2FGI1jH3F%2FIBB4x4PaxrBoi8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCwm%2F4o5DREilAI47ircA9pWexSrkjDKYVTo2z%2FuXtThYlk0AHPS%2FaW3tFGO8HfWND7ps%2FDnljG2YhcY0Ne4mZdC5mjJYL%2FvI9TuSL8MGqSkhzF%2FFp7BM1Y8u1GYg7fITDmNnPiyW%2BV09xBq9Fg9FDXcMhqZOPF%2FtnkiS8AtLoZEZsrY%2F%2BASmN4vEBqwZa0KtOjswEqEtqhF9GfwpuIt3PHGo3vOLLaNrX3WN8vaU35X084EsDet%2F5Szsd%2B95VJeCBeSDJOLew0pII498y6cwAnl2G1XMToxkXsGIW4Pdau4iQGGF0zRE%2B1uRK3j%2FJiYROXPx%2Fp0ViBgBBL9S9FEaa3Gb0uOKU2YB%2FDk7r3MreIVd1zfm0%2BfItw55A5%2FcNcjNjYSQV4O5g31GP8iZMp0PqFcoPXUh1J%2FqgmsgQtrsytl7YtWadEMi15309OtDk%2F3wQbf3hpYwIb3B3Rh6xqlxiKUhj6TapQ8lweKh5M6btJuSbsSsnXlh61qJ%2BOnPgQfsRt7s9qn7louIRCCfogcd18q32jN79xF1EJT%2BSlBVJQY9UNWCnwcO%2BWL%2Fg4eJ%2FerPrOMCbCiNegeg3A478wvZW5ZwiTBcbUdWFNdoLglvCSQ2eMAER8%2BHCwRr%2BsqOTg5DMh436THWwnpuEWSMJ7RicoGOqUBANW4en56ECLno4i9PXRG77Tkp145VJKJB1WNYtE7vDPOSrvLsQ%2F6%2BBKFw0rToUHZkKf8WqEUA2qKxvFCOJdPWGAjQ8iaZxvS6x5bFOC94uWAQqIG9oZH3oCvgCQXQfWB%2B%2BnXGf2fkai0cwabDqha%2FBkNvuWmA15K82k%2BySltbQQk%2Fwpa6TEBQWqSV0dfCl255aX55wn%2BW8j0yVjp%2Bq%2Fyk9P0Zpgd&X-Amz-Signature=1e1e50da4277f38b5ddbedc869647ff6c777f1ce90872cd0f7cf72a894a0a19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKVR76J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExkhOaZ1L9RsJuBlfhJGeewNNcUACgEIZ%2FE61b2%2BWabAiEA7UUFC1eqvs4nbjKnIPMG%2FGI1jH3F%2FIBB4x4PaxrBoi8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCwm%2F4o5DREilAI47ircA9pWexSrkjDKYVTo2z%2FuXtThYlk0AHPS%2FaW3tFGO8HfWND7ps%2FDnljG2YhcY0Ne4mZdC5mjJYL%2FvI9TuSL8MGqSkhzF%2FFp7BM1Y8u1GYg7fITDmNnPiyW%2BV09xBq9Fg9FDXcMhqZOPF%2FtnkiS8AtLoZEZsrY%2F%2BASmN4vEBqwZa0KtOjswEqEtqhF9GfwpuIt3PHGo3vOLLaNrX3WN8vaU35X084EsDet%2F5Szsd%2B95VJeCBeSDJOLew0pII498y6cwAnl2G1XMToxkXsGIW4Pdau4iQGGF0zRE%2B1uRK3j%2FJiYROXPx%2Fp0ViBgBBL9S9FEaa3Gb0uOKU2YB%2FDk7r3MreIVd1zfm0%2BfItw55A5%2FcNcjNjYSQV4O5g31GP8iZMp0PqFcoPXUh1J%2FqgmsgQtrsytl7YtWadEMi15309OtDk%2F3wQbf3hpYwIb3B3Rh6xqlxiKUhj6TapQ8lweKh5M6btJuSbsSsnXlh61qJ%2BOnPgQfsRt7s9qn7louIRCCfogcd18q32jN79xF1EJT%2BSlBVJQY9UNWCnwcO%2BWL%2Fg4eJ%2FerPrOMCbCiNegeg3A478wvZW5ZwiTBcbUdWFNdoLglvCSQ2eMAER8%2BHCwRr%2BsqOTg5DMh436THWwnpuEWSMJ7RicoGOqUBANW4en56ECLno4i9PXRG77Tkp145VJKJB1WNYtE7vDPOSrvLsQ%2F6%2BBKFw0rToUHZkKf8WqEUA2qKxvFCOJdPWGAjQ8iaZxvS6x5bFOC94uWAQqIG9oZH3oCvgCQXQfWB%2B%2BnXGf2fkai0cwabDqha%2FBkNvuWmA15K82k%2BySltbQQk%2Fwpa6TEBQWqSV0dfCl255aX55wn%2BW8j0yVjp%2Bq%2Fyk9P0Zpgd&X-Amz-Signature=8eb182b1886dcb0cde17dcaafbfdc5fd664572f3f8d449e0e6cad8bfe5fad975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
