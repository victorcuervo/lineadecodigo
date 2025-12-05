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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMUCIJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B8ktM1TdGwxdAIdsFbzNpR35pUiFQT7usiRLs8Ch6HAiEAxo2Id2Qa67fZM%2FsjS%2Bj%2BxP3ADQ6IWCcFxINi%2FaDVcHAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDSpPEoh5ks4PHkX1CrcA%2BselC4NWx3jmPAtB30OBXCkUPven0NxY8EF33JVOxKLQ6ZJk79ddJ3D6cuDrHhdGjsE3Us%2BbF4W1QpvXADQVo1siCcUMFInAQmAphIN4iJcAp66nyYJ1JyuNDgbIfxhpxriGenYlIx5tBBCh4PMNVhtKAilU%2F4c%2B7HNEpmpCx2JUbXriWQ9NFkUfN9C2VGLB3uplPisdKRjqPYmrDGzP%2BYoEthjlw2QBihA6E9Twzuy8dxPS8RYlfLNyks3do80Cz%2Fd03uw4STRrHeDqw4Qym5hApXXBIDiekxaUKZMvkRrU9QiyygwzoX1lIq7gg%2FYKM9s2RLcmjaNi9vwhX488f604RJHcXxMUWoscVbkyoWzuqGCDDzhw18ODthvf1TddY5lS%2F1IL6bM%2Be25ynG%2FyXexVbsKzDv14bTzYZnh0rUgaW%2FlQU4ZGvBhrnfKfgjcfam8uhDnaOB8xK%2FCKh%2B2l6FV75wli%2FcrOsBZAGg7GPQrKr%2FIa8fMPmeISiz9j0r2jLF7h3oFfXanDy2c1IHZSgKjPUIbC33saV6PbIN9KAWnLKSQZ6fJZH6bS%2FE7Pk8iK37aHTEvXZvd2sNgYgXxOAqpQOUnv96nB7UErwczXbvLr1GLbCXhWa9gFXdpMNeMyMkGOqUBd8R0txev%2Fg0znPmAXgfMmCUsJUcBZRBq35uGMkvHGBkZBCKqlMpoqPcLY6jppXTbzl77A%2BcYj%2BNMqKVhFM8Fu3m%2FJceap%2FCdPyFfosyVPeUbJjoBLHmIw8iNKc7TMIS0uH6eoI7iZqDCXAh1uE3h68kM2QBIC4iCONTLoyCYs5WR33tsACZ%2BOiQXqW4HCbU1Z41Ng654lZxY0P4X053cunOFG70k&X-Amz-Signature=1da88cbbf5c7885a8413b4a860619cd05f8462b871944ddbde4b905a01d96b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMUCIJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B8ktM1TdGwxdAIdsFbzNpR35pUiFQT7usiRLs8Ch6HAiEAxo2Id2Qa67fZM%2FsjS%2Bj%2BxP3ADQ6IWCcFxINi%2FaDVcHAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDSpPEoh5ks4PHkX1CrcA%2BselC4NWx3jmPAtB30OBXCkUPven0NxY8EF33JVOxKLQ6ZJk79ddJ3D6cuDrHhdGjsE3Us%2BbF4W1QpvXADQVo1siCcUMFInAQmAphIN4iJcAp66nyYJ1JyuNDgbIfxhpxriGenYlIx5tBBCh4PMNVhtKAilU%2F4c%2B7HNEpmpCx2JUbXriWQ9NFkUfN9C2VGLB3uplPisdKRjqPYmrDGzP%2BYoEthjlw2QBihA6E9Twzuy8dxPS8RYlfLNyks3do80Cz%2Fd03uw4STRrHeDqw4Qym5hApXXBIDiekxaUKZMvkRrU9QiyygwzoX1lIq7gg%2FYKM9s2RLcmjaNi9vwhX488f604RJHcXxMUWoscVbkyoWzuqGCDDzhw18ODthvf1TddY5lS%2F1IL6bM%2Be25ynG%2FyXexVbsKzDv14bTzYZnh0rUgaW%2FlQU4ZGvBhrnfKfgjcfam8uhDnaOB8xK%2FCKh%2B2l6FV75wli%2FcrOsBZAGg7GPQrKr%2FIa8fMPmeISiz9j0r2jLF7h3oFfXanDy2c1IHZSgKjPUIbC33saV6PbIN9KAWnLKSQZ6fJZH6bS%2FE7Pk8iK37aHTEvXZvd2sNgYgXxOAqpQOUnv96nB7UErwczXbvLr1GLbCXhWa9gFXdpMNeMyMkGOqUBd8R0txev%2Fg0znPmAXgfMmCUsJUcBZRBq35uGMkvHGBkZBCKqlMpoqPcLY6jppXTbzl77A%2BcYj%2BNMqKVhFM8Fu3m%2FJceap%2FCdPyFfosyVPeUbJjoBLHmIw8iNKc7TMIS0uH6eoI7iZqDCXAh1uE3h68kM2QBIC4iCONTLoyCYs5WR33tsACZ%2BOiQXqW4HCbU1Z41Ng654lZxY0P4X053cunOFG70k&X-Amz-Signature=3b93858f71c6a40bad72988e6145c204b8481a4195bf429469e5acd30b0a525c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
