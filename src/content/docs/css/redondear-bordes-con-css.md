---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3X6JD3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFQ2Z56bMN7s1gBOMN1eGYalftgTFB2Gxcl5qFG5VZSnAiB4v74LyMxYm2XCr9zwcGfaadLCVdWBHksSdkGLl9RcAir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMy8V%2FD9gkVZOcwYIMKtwDv2QLY5Z1vu05QIX%2BgQbu%2FaLdqUswXKiXzr8O%2FtnyRU7%2FQEwesdsErxz4xDBUDdqtq5gxePUGub%2Foesh7hnxTN%2BiLYP9b9p1zPCURkUAAgY9WAXCfmaNAay%2F8agkh9kRsCPYxHU13fzE03eMsj%2FcwoC2PYaFtm8u8Lh46%2B4ox4w5LRWlGo%2BBeiLS44xPL1cdREdu3ME04%2FKPQXEiDfMaoJWk%2BoZwBo7RKzzLEloJFc0Np3HAHELumRdlRoxuwifEktSG%2BCG1BY7WxhxnIkpxyYIBrGkfxTXuzYBYXs402Oafo3WZbiZ4f9HteQwV0SVSn2hUpCg19h4%2FjqMxV7swYrtbUpArxMeS1uBWm1I%2BtO%2FHH3C%2Fn0XuI1toRemN3lVoW%2B6NODGISyqIoXEgSSh%2F0iCkwoI2bOfrUAHJKQWXK16vpF17nUJWTDCduWyZGCfxXJ9gV4Qc%2FAsC8cr79g5XsIooK5ZHOEm6c6HXI3xzWDwomggHyR3Ztq1sVlE1KDJvVRzxY8GnQbZkQYwkcGACq9PDZ%2FJLW48n2sflu%2BN%2FPSgGwsUMxpyPJDzgGHak71CZgYNuKYequ8avZ5Z6to8C1uOe%2F1a%2BUYXxgoRUxOvgoO7rfTYDeLAtqlcIz8Sswr4PGyQY6pgG6e8KlgsQl9OY7Ek%2BcRqcrGXaFB7hyQkRkJUG6hhOL6F43M0CwSyGwIMmg7UzT2cmiUgxwBDwCsJY2DPZsr2pEs%2FVVMlshGnzSeTJr0otWO0CaNT%2Fe%2FiB%2BGhx6RrpeUAzpsvyef4HDISIkZ%2B9Jjrn7ZR85styHEKAzSeIFKEO2cEGYC5Gp9bx1MR89UL1QeOnPWW5UTWa5z63xR7zV84r7JF3b8TJr&X-Amz-Signature=624d3a7d6d26a823a32168f5b9a7fcd74f80142cd8c291f866272e367509e3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3X6JD3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFQ2Z56bMN7s1gBOMN1eGYalftgTFB2Gxcl5qFG5VZSnAiB4v74LyMxYm2XCr9zwcGfaadLCVdWBHksSdkGLl9RcAir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMy8V%2FD9gkVZOcwYIMKtwDv2QLY5Z1vu05QIX%2BgQbu%2FaLdqUswXKiXzr8O%2FtnyRU7%2FQEwesdsErxz4xDBUDdqtq5gxePUGub%2Foesh7hnxTN%2BiLYP9b9p1zPCURkUAAgY9WAXCfmaNAay%2F8agkh9kRsCPYxHU13fzE03eMsj%2FcwoC2PYaFtm8u8Lh46%2B4ox4w5LRWlGo%2BBeiLS44xPL1cdREdu3ME04%2FKPQXEiDfMaoJWk%2BoZwBo7RKzzLEloJFc0Np3HAHELumRdlRoxuwifEktSG%2BCG1BY7WxhxnIkpxyYIBrGkfxTXuzYBYXs402Oafo3WZbiZ4f9HteQwV0SVSn2hUpCg19h4%2FjqMxV7swYrtbUpArxMeS1uBWm1I%2BtO%2FHH3C%2Fn0XuI1toRemN3lVoW%2B6NODGISyqIoXEgSSh%2F0iCkwoI2bOfrUAHJKQWXK16vpF17nUJWTDCduWyZGCfxXJ9gV4Qc%2FAsC8cr79g5XsIooK5ZHOEm6c6HXI3xzWDwomggHyR3Ztq1sVlE1KDJvVRzxY8GnQbZkQYwkcGACq9PDZ%2FJLW48n2sflu%2BN%2FPSgGwsUMxpyPJDzgGHak71CZgYNuKYequ8avZ5Z6to8C1uOe%2F1a%2BUYXxgoRUxOvgoO7rfTYDeLAtqlcIz8Sswr4PGyQY6pgG6e8KlgsQl9OY7Ek%2BcRqcrGXaFB7hyQkRkJUG6hhOL6F43M0CwSyGwIMmg7UzT2cmiUgxwBDwCsJY2DPZsr2pEs%2FVVMlshGnzSeTJr0otWO0CaNT%2Fe%2FiB%2BGhx6RrpeUAzpsvyef4HDISIkZ%2B9Jjrn7ZR85styHEKAzSeIFKEO2cEGYC5Gp9bx1MR89UL1QeOnPWW5UTWa5z63xR7zV84r7JF3b8TJr&X-Amz-Signature=849f202774746b9e4f13624f7360791a93dfe39c14778064344ca60583aa5422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
