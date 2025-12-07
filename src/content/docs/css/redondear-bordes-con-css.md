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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6O5DZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEulM4lbBW3ABkSe255OhIpvoW4fvGLlWh8GQywOHXnAiAjXS3ok8QTWYIGW6yNnsuxbkUNR%2BU8YmnS3s2E7zKwZCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigkrX4Ev6TjtR4D9KtwDi318sz4qt9dhFd%2BNM3COqYcFcNU7Yn4Nimit67c9EtfoE60h4SYNHr%2FzLXWl3ldP2Oz7RJCbdk3RRr1%2F%2FBfzCAqL%2F%2FiceKJC1Dbhd1zq%2FVqrPyKO2UAdXkWFyui3EPqS%2B%2BozA0B3wuKeYXUDrm5WaPoPG60iZAzGJ5jTqPkYgL%2FqH7klwAInLQ0jU5pcO%2FQkjpLp7nqwKcwTxlTu0P0TOa4739DxbK2uutrRg%2FL1ejbFdXXQ4ivvaNV7YuhT%2B4YKG1ki%2F6U0aeBo2p1k5SxN0yWcmv0KA2xnZ18OYaORyddhvrfoIp7TfEHisW02ekbjN9qPX6yDtLYq1lZsg8lB0NEnpQKkxTilMQRlhoj0XyJGLzR1j418Ed6zKUu1ZeR4ALaP5KGtemvAr9Iq5u%2BgVyOKqwIs2sxj0yD5yaXE0SVQRKlMNnnQ5DzW01mc9QU07NS6Lena33jZt3WShbTKCfF9JKNZU3S5rB9HCck8eOwaFyYBs8G8oX%2BjuppZyTJGFYqaedfE9ttj%2FUzB3v5FdB0vFVhaY00lRwIPtVAmKiDmUMl2rBlhGVfk6ggsAAkRl3k%2Bn0f1EDTnqVEHQf%2FFQxIembDM%2F5NZcyrFxx6OBbVAF2fBxo%2BNROaSoZswpprUyQY6pgGluzyOeJkVfct8c0plpYrr4XITJwR4mJEBpzDDLesHOCYGdjdOq9Elqx6kwKrFVFBB5y3ip97XOusgSM9IVBvXl%2FOtdndbzOYPO38kk7Ja6q3N%2BToS8u5sYdlJ%2BaRJbfhLBt%2F%2BP3iLsFF7hsFwX5PY1SJ9X4dQJt6esDpIqP6w0bwp0CVSHxW4gs453EaLqecsOsVXiFJJLX5btKfp5QwC%2BsJk6%2Bjq&X-Amz-Signature=d5a4296d7165b75386d63ba2755cb7fe1d6fa90f78734054987b313f510a4ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6O5DZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEulM4lbBW3ABkSe255OhIpvoW4fvGLlWh8GQywOHXnAiAjXS3ok8QTWYIGW6yNnsuxbkUNR%2BU8YmnS3s2E7zKwZCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigkrX4Ev6TjtR4D9KtwDi318sz4qt9dhFd%2BNM3COqYcFcNU7Yn4Nimit67c9EtfoE60h4SYNHr%2FzLXWl3ldP2Oz7RJCbdk3RRr1%2F%2FBfzCAqL%2F%2FiceKJC1Dbhd1zq%2FVqrPyKO2UAdXkWFyui3EPqS%2B%2BozA0B3wuKeYXUDrm5WaPoPG60iZAzGJ5jTqPkYgL%2FqH7klwAInLQ0jU5pcO%2FQkjpLp7nqwKcwTxlTu0P0TOa4739DxbK2uutrRg%2FL1ejbFdXXQ4ivvaNV7YuhT%2B4YKG1ki%2F6U0aeBo2p1k5SxN0yWcmv0KA2xnZ18OYaORyddhvrfoIp7TfEHisW02ekbjN9qPX6yDtLYq1lZsg8lB0NEnpQKkxTilMQRlhoj0XyJGLzR1j418Ed6zKUu1ZeR4ALaP5KGtemvAr9Iq5u%2BgVyOKqwIs2sxj0yD5yaXE0SVQRKlMNnnQ5DzW01mc9QU07NS6Lena33jZt3WShbTKCfF9JKNZU3S5rB9HCck8eOwaFyYBs8G8oX%2BjuppZyTJGFYqaedfE9ttj%2FUzB3v5FdB0vFVhaY00lRwIPtVAmKiDmUMl2rBlhGVfk6ggsAAkRl3k%2Bn0f1EDTnqVEHQf%2FFQxIembDM%2F5NZcyrFxx6OBbVAF2fBxo%2BNROaSoZswpprUyQY6pgGluzyOeJkVfct8c0plpYrr4XITJwR4mJEBpzDDLesHOCYGdjdOq9Elqx6kwKrFVFBB5y3ip97XOusgSM9IVBvXl%2FOtdndbzOYPO38kk7Ja6q3N%2BToS8u5sYdlJ%2BaRJbfhLBt%2F%2BP3iLsFF7hsFwX5PY1SJ9X4dQJt6esDpIqP6w0bwp0CVSHxW4gs453EaLqecsOsVXiFJJLX5btKfp5QwC%2BsJk6%2Bjq&X-Amz-Signature=8a214616f8cfc6a67ee888ae3f172fe93ebb9b5ddf139ba1d4071ce458e8016c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
