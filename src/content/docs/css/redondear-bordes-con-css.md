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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY5TTQK2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBBoYHOC3Awlvhx8E%2FgHT1tUXD93jZWPvjiWMAMDuC00AiAyPf95a6LBjHe4QDjH9ZSHTyi5Q8CuVo4Y9wPCaI%2FfgSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMpRTKSV%2Bi5i3nWIpKKtwDpZF4q%2BrxIfDz0H5muR6jzMPCQ6%2Bsd%2FcIgOcJm9Xn0ULstc4nU%2FcbFD4Me78Bo0NEdELkgQ6Wos5Er4gg43cOg%2BxRLosVRx7sHuGONgcpYM35XTYSj%2FkN5UjLqRBjX4zakXL52ha5loq5SCE%2BGZGzbm6QtPDS7t0qFgiSM5xQUSQ6XxeeiftiG5ibBlL1D5yQWh1WRaBUqeR4w7u5lMvcOULBlAynAZhqRHeY9iWi6TaMjwjNYsopf3LhYAPfEMQtPCsqnC%2B96IUtYGM5u46tLyFoXOzeyv3q%2BHi0OJ9MJWMxbmLITW%2FdUnY%2FR9llspfw1XMn7wIZ7zJc2sYWBY7Uyqu2wcmPIStfXA1D1xTuBOGBwxkHr5jfDGP7R4tRnN%2FkGrnvxWAJHa7OlQFKc2QIVfyBNhk32ZbKV6JD9hC22x19PqrBy6sN%2FXnaEhIEqkcFykRVnbxwPKnBxJV7X1IRpi7ie3oo9vXikVeY0OGKSuAf8BuQX1inHhnXlqNxe3HbxMqD36mORL4E%2FpBc%2B9cciKanVJvB3epKxa8D23lUDHrTTu6WrABXEioWtlLhdTTZJKXtqlJ3KxrRKVOFr7UVK9TdukRskSz58d60MhA7SaBavDKnatbl73ca6Tww%2Fa3EyQY6pgFNC%2FAvRTcSDossHtwYHXK7Ymsw2yUYAbNsPeMAJL1eOsWKNM3Bre61IdyXfLdpewjotlsHp5YeEdvOVCPIaGPbeTjZvyHnuLVpwHQ93tMOFLCbcBQns50hbxGCZ9g9wcVXyEKO4%2BvzxtwPm2SN7XyidbMHmyrK%2B2ziQBWgqQy5KXEUh0tRv0hPzKr6flmRiNr8ayEOXu1Zh1w2AJA65NrCzc1Gm92r&X-Amz-Signature=c3f6411497eac90c5caad08f32eb263743467190505d4177aad40f519f77850c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY5TTQK2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBBoYHOC3Awlvhx8E%2FgHT1tUXD93jZWPvjiWMAMDuC00AiAyPf95a6LBjHe4QDjH9ZSHTyi5Q8CuVo4Y9wPCaI%2FfgSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMpRTKSV%2Bi5i3nWIpKKtwDpZF4q%2BrxIfDz0H5muR6jzMPCQ6%2Bsd%2FcIgOcJm9Xn0ULstc4nU%2FcbFD4Me78Bo0NEdELkgQ6Wos5Er4gg43cOg%2BxRLosVRx7sHuGONgcpYM35XTYSj%2FkN5UjLqRBjX4zakXL52ha5loq5SCE%2BGZGzbm6QtPDS7t0qFgiSM5xQUSQ6XxeeiftiG5ibBlL1D5yQWh1WRaBUqeR4w7u5lMvcOULBlAynAZhqRHeY9iWi6TaMjwjNYsopf3LhYAPfEMQtPCsqnC%2B96IUtYGM5u46tLyFoXOzeyv3q%2BHi0OJ9MJWMxbmLITW%2FdUnY%2FR9llspfw1XMn7wIZ7zJc2sYWBY7Uyqu2wcmPIStfXA1D1xTuBOGBwxkHr5jfDGP7R4tRnN%2FkGrnvxWAJHa7OlQFKc2QIVfyBNhk32ZbKV6JD9hC22x19PqrBy6sN%2FXnaEhIEqkcFykRVnbxwPKnBxJV7X1IRpi7ie3oo9vXikVeY0OGKSuAf8BuQX1inHhnXlqNxe3HbxMqD36mORL4E%2FpBc%2B9cciKanVJvB3epKxa8D23lUDHrTTu6WrABXEioWtlLhdTTZJKXtqlJ3KxrRKVOFr7UVK9TdukRskSz58d60MhA7SaBavDKnatbl73ca6Tww%2Fa3EyQY6pgFNC%2FAvRTcSDossHtwYHXK7Ymsw2yUYAbNsPeMAJL1eOsWKNM3Bre61IdyXfLdpewjotlsHp5YeEdvOVCPIaGPbeTjZvyHnuLVpwHQ93tMOFLCbcBQns50hbxGCZ9g9wcVXyEKO4%2BvzxtwPm2SN7XyidbMHmyrK%2B2ziQBWgqQy5KXEUh0tRv0hPzKr6flmRiNr8ayEOXu1Zh1w2AJA65NrCzc1Gm92r&X-Amz-Signature=7198cf468e20ff4f89862fc2690bfe629d84609faf9f823f49d4cf0db7eb2ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
