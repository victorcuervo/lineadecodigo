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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WS4ORZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuB42tJWth%2FZifJG8magW%2F7phz2IizfynfVEXw7%2BZp3AiAEO41JjHqMvwY3jGXQ0RgMUzC6%2Bz7XbNt5ERd4E%2FoU9Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM7N5biWW0wR1J%2FoZIKtwDA3EiyymfBr8IcUHK5Pbo%2F9u9lotEnMI7mCyAVXlSTw7tGcgyQgSbTWkQC3ZBZCUIlD5iJUeIRzRUHNmqULJ0VocLYTD%2B7xgeBdnQC4Ew4XmXyttUDjsymTNH8nPJaIM37uLrYzYpQDrk4Qup53lrpU%2FjtyoLscoTQ64ybNEEe69n%2F%2BxvIHuWPMsIOBGYpyrCX4LIyTiEUT0ZZ8Tc%2B6CPyfDPl0S%2B2HheM3PUjMl1yQlwhc4JClyFXF3kLkZ7zT%2BfiNLsu%2FzZTJqVJVTcBQXQZ0WGZldfTWQzP9NU9RFR24FT2j5LUKdAM30TEIHesHcil4Sl0NFL1L8%2FBeB1BCgBA2o2wBxwJCuEASc2xp5QHqACorpwscMclSktjzZO2UPxrik%2BeneNc4XUog2GOYTj%2BV96myPPrl90AMtxYKcPsBWA8DQfTaKhsMjh6GSnKPRyHiGSFx6HVSpQz6lWxvfRfwvDfb70X%2F%2FnMH0eNLu4zlAD%2BjH87TezLvV5JfOc6XWl9uSEkpNmQk8DZTAtR5RYJQqb%2F6scvetOZuTDEwuXHRo6X0PM8ocOhdzIO9Krdrd9YVqgtdRkK7M7YktbiZJji%2BbOw3LnpjwFRSdmYQS5U6VXuwalMBbl4q1GzWUwuZ2JygY6pgHY9baBH%2BBR9r2cZvxfcqrBheFhT8JQSHQUeNxrasB1CvexskANQN23zHR3bvG2C1Sf792Vwd0JlGWr%2FAmCLtwkJ8t14NwdVfFzESFGdUZx%2F71FCumhTdCY5qKE1tyYZFCrq%2FjI19KDwEq8NT9J2NL1S0840X%2FEW%2BmZGHMdydGjN2nPewlGRwzp3uK%2BYLMQksPepqfUHCKDcqMzndycCUP9lxGhMtcm&X-Amz-Signature=efa889a27abd9ad8390351547145620becb3228ee396f2dfdc7c61d5ab9b4064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WS4ORZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuB42tJWth%2FZifJG8magW%2F7phz2IizfynfVEXw7%2BZp3AiAEO41JjHqMvwY3jGXQ0RgMUzC6%2Bz7XbNt5ERd4E%2FoU9Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM7N5biWW0wR1J%2FoZIKtwDA3EiyymfBr8IcUHK5Pbo%2F9u9lotEnMI7mCyAVXlSTw7tGcgyQgSbTWkQC3ZBZCUIlD5iJUeIRzRUHNmqULJ0VocLYTD%2B7xgeBdnQC4Ew4XmXyttUDjsymTNH8nPJaIM37uLrYzYpQDrk4Qup53lrpU%2FjtyoLscoTQ64ybNEEe69n%2F%2BxvIHuWPMsIOBGYpyrCX4LIyTiEUT0ZZ8Tc%2B6CPyfDPl0S%2B2HheM3PUjMl1yQlwhc4JClyFXF3kLkZ7zT%2BfiNLsu%2FzZTJqVJVTcBQXQZ0WGZldfTWQzP9NU9RFR24FT2j5LUKdAM30TEIHesHcil4Sl0NFL1L8%2FBeB1BCgBA2o2wBxwJCuEASc2xp5QHqACorpwscMclSktjzZO2UPxrik%2BeneNc4XUog2GOYTj%2BV96myPPrl90AMtxYKcPsBWA8DQfTaKhsMjh6GSnKPRyHiGSFx6HVSpQz6lWxvfRfwvDfb70X%2F%2FnMH0eNLu4zlAD%2BjH87TezLvV5JfOc6XWl9uSEkpNmQk8DZTAtR5RYJQqb%2F6scvetOZuTDEwuXHRo6X0PM8ocOhdzIO9Krdrd9YVqgtdRkK7M7YktbiZJji%2BbOw3LnpjwFRSdmYQS5U6VXuwalMBbl4q1GzWUwuZ2JygY6pgHY9baBH%2BBR9r2cZvxfcqrBheFhT8JQSHQUeNxrasB1CvexskANQN23zHR3bvG2C1Sf792Vwd0JlGWr%2FAmCLtwkJ8t14NwdVfFzESFGdUZx%2F71FCumhTdCY5qKE1tyYZFCrq%2FjI19KDwEq8NT9J2NL1S0840X%2FEW%2BmZGHMdydGjN2nPewlGRwzp3uK%2BYLMQksPepqfUHCKDcqMzndycCUP9lxGhMtcm&X-Amz-Signature=d55bf3f05199dd4fecfee76a9d22d03053df656e5eafe752f4ac93675657efe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
