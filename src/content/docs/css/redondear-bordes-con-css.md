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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QINMV3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeyh26rdiapi5NZV%2FTImGqdLTHZ0spdUwtCO5Uzl2grAiBiYRS77HIT1mx91i7twOiFufCVqyhcgva0tXo63o2PCiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSm%2F7eMka0wcb1o8kKtwD0bWJyWQM2uHrWD0IhhzAf7ApNqZy2B4yt4YMM6Cfkx76bswo8oMXnKPk4DpayOmaWoWDqbvhoWpc9xcFduGdvmrxfCLq21%2FenzdJpsZb9XHCxH%2B9VUsXw5E4LCYqkWZ0yyt4cFuEb%2FL0GIAgJ8inkxmmd9AP%2FXgtP009jR21hiPWb2OKioUt2mwWvacRsxqRFofw7eZX%2BkERrwPFJcdPqBeBJRArZTeoYepFGa0%2B93zKIXfQScTotzKxPk%2BcEzhhZnBEnXpizhphw2J2O9WRfHr164akBjqGq6I7nQiMpWlUSBse7jW3QdviqNKMs65wvxxQMpks0HZYdyQXp399KwIAOJBgrnV76dpWsVlcVUguCeidbVP1Zrq9y3aeUKMDhI%2B%2Fhr0K7QGnWqNco7dJfMg%2ByViJkrBQqYMQc0xSk1psVqEs8IsYQBB7j2gzDpClW9XaVa7n6DX2XRSMuuSr8NYuLMlTn6zd1IuS0dUIyZkGgU5ah6V0ED%2BDMD3pbxeRZDaxjLY4ORs%2FUgKenQNajdRsVffZ41CWl3aMu55JW8hFi2Abs3WFiFHGR0h3jA77DzJoBDWZjiyy1jbBJYf5Qxqi%2BUbZSlFIfzcnKTWSPOURciVzHm1HtejVm4MwrbvWyQY6pgFD4uacEYihNFGu6M9WirBBVw7E%2FPv247sG4r9xOANp6iUmtjHhhNKeMLSI3HfNJNNqvFLgjGB8rz1SRkv9Yvc7sKvseHMzgMpq5t%2F1nXmFaC5lHz%2Fq%2FwCKoSYONcC7eD9hokJxYXG8hfwQ8xGjPf8rWieOADPetqRF4iowixOd1mUCf8KDGy9FfO9iKJ3AWUzoAkfeAzxR%2BVgiZcV3Z3cyjQ%2Bzr2FG&X-Amz-Signature=d72c786403950b9b899f833400d7ca38feb64f1e38879d8ade0721d734016345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QINMV3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeyh26rdiapi5NZV%2FTImGqdLTHZ0spdUwtCO5Uzl2grAiBiYRS77HIT1mx91i7twOiFufCVqyhcgva0tXo63o2PCiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSm%2F7eMka0wcb1o8kKtwD0bWJyWQM2uHrWD0IhhzAf7ApNqZy2B4yt4YMM6Cfkx76bswo8oMXnKPk4DpayOmaWoWDqbvhoWpc9xcFduGdvmrxfCLq21%2FenzdJpsZb9XHCxH%2B9VUsXw5E4LCYqkWZ0yyt4cFuEb%2FL0GIAgJ8inkxmmd9AP%2FXgtP009jR21hiPWb2OKioUt2mwWvacRsxqRFofw7eZX%2BkERrwPFJcdPqBeBJRArZTeoYepFGa0%2B93zKIXfQScTotzKxPk%2BcEzhhZnBEnXpizhphw2J2O9WRfHr164akBjqGq6I7nQiMpWlUSBse7jW3QdviqNKMs65wvxxQMpks0HZYdyQXp399KwIAOJBgrnV76dpWsVlcVUguCeidbVP1Zrq9y3aeUKMDhI%2B%2Fhr0K7QGnWqNco7dJfMg%2ByViJkrBQqYMQc0xSk1psVqEs8IsYQBB7j2gzDpClW9XaVa7n6DX2XRSMuuSr8NYuLMlTn6zd1IuS0dUIyZkGgU5ah6V0ED%2BDMD3pbxeRZDaxjLY4ORs%2FUgKenQNajdRsVffZ41CWl3aMu55JW8hFi2Abs3WFiFHGR0h3jA77DzJoBDWZjiyy1jbBJYf5Qxqi%2BUbZSlFIfzcnKTWSPOURciVzHm1HtejVm4MwrbvWyQY6pgFD4uacEYihNFGu6M9WirBBVw7E%2FPv247sG4r9xOANp6iUmtjHhhNKeMLSI3HfNJNNqvFLgjGB8rz1SRkv9Yvc7sKvseHMzgMpq5t%2F1nXmFaC5lHz%2Fq%2FwCKoSYONcC7eD9hokJxYXG8hfwQ8xGjPf8rWieOADPetqRF4iowixOd1mUCf8KDGy9FfO9iKJ3AWUzoAkfeAzxR%2BVgiZcV3Z3cyjQ%2Bzr2FG&X-Amz-Signature=11dd44550fed0323e89b0e7608eecf7777d0982732fa8c72a29d13706a7c8f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
