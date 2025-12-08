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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZXGJNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbseqchUyoAWIWkDdTCfj2v1Nuvu0D5TzeMCnuXdJhUAiEAwvRHNDa1KL3EIJz5uLD603KHpdiDmzE4lkiHpFh%2FtacqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8pY7h%2B9KZEsKHF0CrcAwY7HvSjV62Xf4g%2FU1A8wGdgPVilUWzM04J0aAwVp0%2BS0yHMBj01MJvwFhO2emnwLstZ%2F%2BaKP%2BnSuWN9skfazjuWb0OX3F0LwOomGf4VjiYa0XzHBG%2BeBHrBVhN1dMBHzRGxdi57LoeTe8P1soKFlp5Na4QcsVKLAg4gL%2FWOUPE2Z2vI1Ltnd9Ixn3poq%2Fi%2BGgDd6okVW7F27v0BRzWzuTkLHLhz6kbJCAystWNr03iyf7pNR%2F3eysN1zcQUKKHLh9Uw1aT0zUW6M4J3tzrBOcVZ%2FashL6uLKpsoE0nYJpdVXkcDzO%2FleEQofc2qgKP5%2FT4cu8Ys8OttAUA9SGx9FhtKVYbJI%2BZzF7jHk7xtLRxNygBjDBrvAefAqMxBPmTvYjpci4J2iHvuC7y%2FPZD2LHrq08692e79uPQ3dPzMf5U23AaLDwWIelqAqP7ziQijibdO7DItgwfOZPeTlz1dk5GNan0%2FiPH0poVvC5ub4x6Pmmo3ZJWnmvSce%2B4tNvm%2FB4yH2oLItuO6ZU5YPVkLV8Cps%2F%2B7YYwZKaObnIJkIRT7ouTqgT1sa7kyRL65UTqxwdybpUXkcqL9Z%2F1gDQ9STzJIhVEJvd4aW0k%2B7rzZ7Uc1VlCgyCsV5VtdheOHMKiA3ckGOqUB7g1BNAW1CjNB8pYWhjc3BGd%2FBZZAr0dhUU3ixXl37mT6Gjca6jxp6J%2BjFKwBsbTQ%2F3QHTKw4JD5G3opyMvurb7utLIeuC0%2Fml4iCvnwY%2BNlCg6C2fAmKH8zKkIfLwewE4TeJPcU6HEhL43tfLzfLC2lIWeQ4AHOAXqFu1Fa330A0EGA%2B3zUH%2BT68mi42XZLAzqNp5%2B1ObWZEOLXB4sOHMYC%2FdzUq&X-Amz-Signature=e0dc3f75086752e0fa744941a07853e75805ed205076bec810133c60e6bad3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZXGJNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbseqchUyoAWIWkDdTCfj2v1Nuvu0D5TzeMCnuXdJhUAiEAwvRHNDa1KL3EIJz5uLD603KHpdiDmzE4lkiHpFh%2FtacqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8pY7h%2B9KZEsKHF0CrcAwY7HvSjV62Xf4g%2FU1A8wGdgPVilUWzM04J0aAwVp0%2BS0yHMBj01MJvwFhO2emnwLstZ%2F%2BaKP%2BnSuWN9skfazjuWb0OX3F0LwOomGf4VjiYa0XzHBG%2BeBHrBVhN1dMBHzRGxdi57LoeTe8P1soKFlp5Na4QcsVKLAg4gL%2FWOUPE2Z2vI1Ltnd9Ixn3poq%2Fi%2BGgDd6okVW7F27v0BRzWzuTkLHLhz6kbJCAystWNr03iyf7pNR%2F3eysN1zcQUKKHLh9Uw1aT0zUW6M4J3tzrBOcVZ%2FashL6uLKpsoE0nYJpdVXkcDzO%2FleEQofc2qgKP5%2FT4cu8Ys8OttAUA9SGx9FhtKVYbJI%2BZzF7jHk7xtLRxNygBjDBrvAefAqMxBPmTvYjpci4J2iHvuC7y%2FPZD2LHrq08692e79uPQ3dPzMf5U23AaLDwWIelqAqP7ziQijibdO7DItgwfOZPeTlz1dk5GNan0%2FiPH0poVvC5ub4x6Pmmo3ZJWnmvSce%2B4tNvm%2FB4yH2oLItuO6ZU5YPVkLV8Cps%2F%2B7YYwZKaObnIJkIRT7ouTqgT1sa7kyRL65UTqxwdybpUXkcqL9Z%2F1gDQ9STzJIhVEJvd4aW0k%2B7rzZ7Uc1VlCgyCsV5VtdheOHMKiA3ckGOqUB7g1BNAW1CjNB8pYWhjc3BGd%2FBZZAr0dhUU3ixXl37mT6Gjca6jxp6J%2BjFKwBsbTQ%2F3QHTKw4JD5G3opyMvurb7utLIeuC0%2Fml4iCvnwY%2BNlCg6C2fAmKH8zKkIfLwewE4TeJPcU6HEhL43tfLzfLC2lIWeQ4AHOAXqFu1Fa330A0EGA%2B3zUH%2BT68mi42XZLAzqNp5%2B1ObWZEOLXB4sOHMYC%2FdzUq&X-Amz-Signature=46aa261a577fc3349a50bd24472f44747e6bdc74fea61192271979f3ef05b823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
