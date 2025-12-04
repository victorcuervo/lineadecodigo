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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32A6E4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGCztjOBRtT0ycm%2B%2BBBe0cO%2FoTwCnBOIOuZW9Fo8VjK%2FAiB8Tb4upgCBIDJjeDbp6t5C0FgcgbyKXVry5P3KywrsFSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMbN7MrlRyfwUJusVGKtwDnXXrroJX2rYas6ITms2YzETm7ehfeoIseWqB%2Fq%2FRy%2Fb%2FZI2LdsOvU2oBz9%2FuzVMno9mnZ%2F1zltihi2CkEEZbg5AWIS6BC85abFu8MxGXvLGwNK5VhRqwm1RC3Jsqs8hNBba7sCHC0SeRRlp0iK7v8UJlfa0052T6NLgd6o77ZtQ4jmsFb1ktbpZx2hLyEHQZ9cEQtAkAq2zW0pa6eZRW0doZrJaGUpmknuJ8OYo%2FF3giTYYdFXwlG47fFn5nNpAKzZcWE9jCPmhhxf3dweqlYYTRTRDvzN9YnXxzxZmUQWTcuIGzHKgPHPgeQ3URf83DZLk1ctbvl7dc1UsjA2pjeLVVZdIV0Cxofj2KtTGPwenKn%2BGspKbq4X4e0GcwnyitmqvlOgSgciTx%2BZ8raLEnmpYDgLsa73UA5D6gl0J8EmrU6vuhUcOJr5FUlL71VJcuHDhI6V692lUfJooD8qPpdTetDHaT7PinHPudLXhJor8s%2FvRNJ0u%2FQhnbKYbnAoLm51o5GLq5jjXrAalfmjmuiNNFYnKKqYIwnnKOeYgnI1UlWV%2BYbhNYlPjGw4UxGwvjPD3uMniUZuiFPdrOS4h4iA2x0xOcbcgs%2Fbkb9ymsJViGjrVeNhbr0wXZFBkw%2BoPGyQY6pgEGn8MXZJVfUkc8B6uCaskBICGdlq%2Ff701NN%2FD4jbMvRqckcos%2BFZj7Ebu09FfMRekpRROwTZzW%2BQjSZGo%2By%2B6obp2FNroMJ%2Fn5bDbLeRD5DGmUqemNrAgx7%2BUAApej5fjQT5VZAb0OM%2BpJ5cqNO3UyiulURqSUX5EkAzDYIZQ9ki3R8QR2tsIFJ8Oh5LArTwbvvC2V4BXstr065OBofNt30aPZVOll&X-Amz-Signature=045d4e2410214cb2cbcf2519e69b5705d9203f83406ee70d41beb86a62496b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32A6E4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGCztjOBRtT0ycm%2B%2BBBe0cO%2FoTwCnBOIOuZW9Fo8VjK%2FAiB8Tb4upgCBIDJjeDbp6t5C0FgcgbyKXVry5P3KywrsFSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMbN7MrlRyfwUJusVGKtwDnXXrroJX2rYas6ITms2YzETm7ehfeoIseWqB%2Fq%2FRy%2Fb%2FZI2LdsOvU2oBz9%2FuzVMno9mnZ%2F1zltihi2CkEEZbg5AWIS6BC85abFu8MxGXvLGwNK5VhRqwm1RC3Jsqs8hNBba7sCHC0SeRRlp0iK7v8UJlfa0052T6NLgd6o77ZtQ4jmsFb1ktbpZx2hLyEHQZ9cEQtAkAq2zW0pa6eZRW0doZrJaGUpmknuJ8OYo%2FF3giTYYdFXwlG47fFn5nNpAKzZcWE9jCPmhhxf3dweqlYYTRTRDvzN9YnXxzxZmUQWTcuIGzHKgPHPgeQ3URf83DZLk1ctbvl7dc1UsjA2pjeLVVZdIV0Cxofj2KtTGPwenKn%2BGspKbq4X4e0GcwnyitmqvlOgSgciTx%2BZ8raLEnmpYDgLsa73UA5D6gl0J8EmrU6vuhUcOJr5FUlL71VJcuHDhI6V692lUfJooD8qPpdTetDHaT7PinHPudLXhJor8s%2FvRNJ0u%2FQhnbKYbnAoLm51o5GLq5jjXrAalfmjmuiNNFYnKKqYIwnnKOeYgnI1UlWV%2BYbhNYlPjGw4UxGwvjPD3uMniUZuiFPdrOS4h4iA2x0xOcbcgs%2Fbkb9ymsJViGjrVeNhbr0wXZFBkw%2BoPGyQY6pgEGn8MXZJVfUkc8B6uCaskBICGdlq%2Ff701NN%2FD4jbMvRqckcos%2BFZj7Ebu09FfMRekpRROwTZzW%2BQjSZGo%2By%2B6obp2FNroMJ%2Fn5bDbLeRD5DGmUqemNrAgx7%2BUAApej5fjQT5VZAb0OM%2BpJ5cqNO3UyiulURqSUX5EkAzDYIZQ9ki3R8QR2tsIFJ8Oh5LArTwbvvC2V4BXstr065OBofNt30aPZVOll&X-Amz-Signature=8c0d53c02c65eb1e4884fc60e268f67e974f55724c708d7c38fbbbc51d38544b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
