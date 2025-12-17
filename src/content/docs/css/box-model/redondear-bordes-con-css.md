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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4W55UU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCai9HHe3%2BshLH%2Bt7iSKHh9TaCSiFSep9TRZ3UG%2FFhXNQIhAOxgwlcwKRdhxvXCgeyncYxzF0Syih5b9YES%2Bq%2BwqhuUKv8DCHsQABoMNjM3NDIzMTgzODA1IgxJbVNyTJrumJX891Eq3AN9%2FEIA3qyr%2FZTnYqaSuL3Lz8tiWk%2FPxq4%2Fy%2Bq0HK5XOnojxUB6LZ9kqowasw4tqGzGvyLUoUWupF9KY76Jr23Wgkv%2BlzV521puf7nBqmilXNrq1NzYjUKFUNsAG8rQiuXJQyUWMxEUrW6zuIY%2BvS44qt3Y2nxgAXBJtZLNjbIHG7KMql2Q%2Bkt2pFJ1W%2B1CHzWk9L3%2BVeh6PdcSKPk8ufg9f2Q7wyjTroXqgKJHbcdCKRLnQxqRJEpHqc9%2BjcgoE7QnLemp7kjfjd0dzAY82r4FtYohUIZRleS5PlfldIy11uPIKpuHJ3TYkseSr1HpDYJ95PwU%2BX%2BwhfqLgFGT9nOnTDq2tjly2K4stJA9FykqXBDS046ysXggtkT9wZEWMBMM8TwNinCMhrl0CrNpU32WhYdZQzJ8rN2HhEq06GLAagGeZGu3j3N4YoqRjCz6FfHnDXK2kx7UQgOuypvt07xh4TjBgtvUw4%2FtFmo4vYnOiolV8x7mvsB3GIdtHoouBd8PTWAt3sbjc%2FlF%2FcC%2FBcMzTaZ%2FCqegMM5g9nuI52ULgEt7nfTnqSa7%2Bt8Va%2FJjueNCYFVOJ6pzyjNIhdOc8LVRylpqEVGcwm4iKB2JVjsKRReEtSmQG6ZED51RjTC%2B8InKBjqkAVnJVS7AIM8TZ5Ve8xDZ4vw6dfh8kb39pJGCrm%2FiigKxCc6Enpbz1sozwXJYFgcRcCcOxkjije8pE3o0vR2KJkbRmyyB8ekQT5xYIIVZouOfPZpxBa8QsuTaydO2GlevUAPvtJUW%2B6RMeqbTqCjL12ieD9rE1g7cdh2BV4QSQ16RFuxPOF4vybVuAQbclHhbKEjFoT198U8BGUhPIi29WH5sohkD&X-Amz-Signature=1fa88a209b64b7e3542a479e7adeb07dcb0c84116a05c445a77d9340d1e0cabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4W55UU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCai9HHe3%2BshLH%2Bt7iSKHh9TaCSiFSep9TRZ3UG%2FFhXNQIhAOxgwlcwKRdhxvXCgeyncYxzF0Syih5b9YES%2Bq%2BwqhuUKv8DCHsQABoMNjM3NDIzMTgzODA1IgxJbVNyTJrumJX891Eq3AN9%2FEIA3qyr%2FZTnYqaSuL3Lz8tiWk%2FPxq4%2Fy%2Bq0HK5XOnojxUB6LZ9kqowasw4tqGzGvyLUoUWupF9KY76Jr23Wgkv%2BlzV521puf7nBqmilXNrq1NzYjUKFUNsAG8rQiuXJQyUWMxEUrW6zuIY%2BvS44qt3Y2nxgAXBJtZLNjbIHG7KMql2Q%2Bkt2pFJ1W%2B1CHzWk9L3%2BVeh6PdcSKPk8ufg9f2Q7wyjTroXqgKJHbcdCKRLnQxqRJEpHqc9%2BjcgoE7QnLemp7kjfjd0dzAY82r4FtYohUIZRleS5PlfldIy11uPIKpuHJ3TYkseSr1HpDYJ95PwU%2BX%2BwhfqLgFGT9nOnTDq2tjly2K4stJA9FykqXBDS046ysXggtkT9wZEWMBMM8TwNinCMhrl0CrNpU32WhYdZQzJ8rN2HhEq06GLAagGeZGu3j3N4YoqRjCz6FfHnDXK2kx7UQgOuypvt07xh4TjBgtvUw4%2FtFmo4vYnOiolV8x7mvsB3GIdtHoouBd8PTWAt3sbjc%2FlF%2FcC%2FBcMzTaZ%2FCqegMM5g9nuI52ULgEt7nfTnqSa7%2Bt8Va%2FJjueNCYFVOJ6pzyjNIhdOc8LVRylpqEVGcwm4iKB2JVjsKRReEtSmQG6ZED51RjTC%2B8InKBjqkAVnJVS7AIM8TZ5Ve8xDZ4vw6dfh8kb39pJGCrm%2FiigKxCc6Enpbz1sozwXJYFgcRcCcOxkjije8pE3o0vR2KJkbRmyyB8ekQT5xYIIVZouOfPZpxBa8QsuTaydO2GlevUAPvtJUW%2B6RMeqbTqCjL12ieD9rE1g7cdh2BV4QSQ16RFuxPOF4vybVuAQbclHhbKEjFoT198U8BGUhPIi29WH5sohkD&X-Amz-Signature=6b852582459bba51beddda18d7c5dc2c65783f78a7aad4995a20b72b2ad1b938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
