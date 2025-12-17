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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPYZV4V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYfk2nanaejKHmkxGvcZj8VLRI25HiIr%2B7Mg4tNnazAiAHt%2FSP7zrTA%2F0rQlZhUDsxgFFs1O2PPzuTDXRj9JyjACr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMisu2prFMLVIdtHTkKtwD6JwA2%2BT92dLJFDonVx7MOELEQa%2Fn4g4kxTglSkUOfAfnnHOhea8ERgk5tLq1msFIUlh8CRYiTJ878QYRN3flNtDwSw7YAoFGeXtV2ONRu4M66QnB7NzAoz2YYETYS5MaXuiIa0d7RnAwjayRWN%2BewxfXYszUG4fNMOpW30%2FDoX4U7vjRIYebDTr23qyg9DVv4M96Osxubj6wVowzaGtJB8RgJS8H39WPdmnSKLrz2EZ01Wt%2BPgkUteyBf%2BICu4SOr67ncYt0NWUQY9MAie7KVN7OriTprj5bf60v%2Fxg5u3lejR4XWTffu414TsZvGmM6X1PpD5W%2BurxW2KDseo3gQqzhoG%2B53c3rFvC69U4kvmVU2ShXNPuLCiXZqCRoNPJjfruJ6sBrFyXWwXeiie%2BnCE8JsTBkPgy6nNa9XH2wwpxPSJCUXxCDvL6ZUGzrkzsiH5sX8f%2Bc6E8zCsBFN2IL%2Bzur3TcNe5iAZo0kdsU0pkk6uCPAXCoPXw%2Fx6MehYWwpYhsfOJitnZYjibyt%2B4yqsW%2BRCwCEgbV38%2FcFQOTFka4pOtDDdSczI9m2auQa19OK3InLf1ovaiQVHrJny6djXT%2F3ZVxgyc9K%2BC4bAyDFNulLb0y4910F8eNkQK4w6qqKygY6pgHMlcmFdU2GlcQq2tBZxwV0Q%2BlM1AON2c7FKaa5ZRd1%2BcTwZ6UJbHQulWmRfk1P5F%2FFfZZpoejFVmyUSS%2BchvrHj412%2F6UpvxobHaevvfmRzTAO6qBhkTyzBOYuybAGBDIt8G%2FwdMWZtZYp8WTgcemTmvjrxLryycKjmXfWrdO4AmlJCTX%2FbV5XX2WkreiU8Zf0MbdeG7KGSz03rrtMKtgNkKq9xSRy&X-Amz-Signature=809cec5aadd875e6e56cc54dad7847e29e81f90a99d4e28a1a6230c78f3c2944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPYZV4V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYfk2nanaejKHmkxGvcZj8VLRI25HiIr%2B7Mg4tNnazAiAHt%2FSP7zrTA%2F0rQlZhUDsxgFFs1O2PPzuTDXRj9JyjACr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMisu2prFMLVIdtHTkKtwD6JwA2%2BT92dLJFDonVx7MOELEQa%2Fn4g4kxTglSkUOfAfnnHOhea8ERgk5tLq1msFIUlh8CRYiTJ878QYRN3flNtDwSw7YAoFGeXtV2ONRu4M66QnB7NzAoz2YYETYS5MaXuiIa0d7RnAwjayRWN%2BewxfXYszUG4fNMOpW30%2FDoX4U7vjRIYebDTr23qyg9DVv4M96Osxubj6wVowzaGtJB8RgJS8H39WPdmnSKLrz2EZ01Wt%2BPgkUteyBf%2BICu4SOr67ncYt0NWUQY9MAie7KVN7OriTprj5bf60v%2Fxg5u3lejR4XWTffu414TsZvGmM6X1PpD5W%2BurxW2KDseo3gQqzhoG%2B53c3rFvC69U4kvmVU2ShXNPuLCiXZqCRoNPJjfruJ6sBrFyXWwXeiie%2BnCE8JsTBkPgy6nNa9XH2wwpxPSJCUXxCDvL6ZUGzrkzsiH5sX8f%2Bc6E8zCsBFN2IL%2Bzur3TcNe5iAZo0kdsU0pkk6uCPAXCoPXw%2Fx6MehYWwpYhsfOJitnZYjibyt%2B4yqsW%2BRCwCEgbV38%2FcFQOTFka4pOtDDdSczI9m2auQa19OK3InLf1ovaiQVHrJny6djXT%2F3ZVxgyc9K%2BC4bAyDFNulLb0y4910F8eNkQK4w6qqKygY6pgHMlcmFdU2GlcQq2tBZxwV0Q%2BlM1AON2c7FKaa5ZRd1%2BcTwZ6UJbHQulWmRfk1P5F%2FFfZZpoejFVmyUSS%2BchvrHj412%2F6UpvxobHaevvfmRzTAO6qBhkTyzBOYuybAGBDIt8G%2FwdMWZtZYp8WTgcemTmvjrxLryycKjmXfWrdO4AmlJCTX%2FbV5XX2WkreiU8Zf0MbdeG7KGSz03rrtMKtgNkKq9xSRy&X-Amz-Signature=2c5c87835c6d7a53767932024cf0a0d5550276d571900c38834b7bd11c16ad54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
