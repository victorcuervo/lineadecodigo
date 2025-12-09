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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJEK2PD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLcUpCX98AQiAc5jWh%2F1Ad98xNi4VhJVk4EC5P4crvJgIhAPLzHmRnz3ip3nemUsaHBO8HCEGCYVesd7OoZrti09lGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOuduiSHWvop%2B4ZVoq3AMXJCfR9tNT4F8eMMSN3%2FRIcMkMfRxLi9uCfBIG4iKHBKzd1CxaWMUp2OOd7l0OhTwlFAKgWVkxdFgpOQZWceqCeea%2B7suuqALI8HZvyAYYU1Ca0EzrTvbZ5EBmcItQh1ymHOy7ahqtSQSB7QC%2FpR8MkHaVlX7kmX3dUxi%2B4fjHeIaxbM5gRPcbLC6VfavlsEKbGPPjTBptOaGnQL1zCJDFXP6ls84ZXaQdNcpDmMgZPV3WBFmYi4Rl9BhXynfqosoCTRqlMbr3hTFUwjViMJ15dfE4WJOIZROFAXDO92VbarWLvWUSbDiMGQEhVuSqxV9MNZEb9lVVxaugV0623YHrMFhYbHpbrUWfqoWlopgRlGkGonNulV6Wh7l%2BgvvQljEiAlaQqzuTasUU0M1RhvQPm3DigWM8PTgnC9a97GdscoRvkyXtFSdPGB0CIGHM265y3xd3FMW4%2BoRqpQ9Uz0kMpnHoPOfJFKyVuZcbPTcg%2F8SZu3HuSuJQVwnIVbMYb1rESXZSVT5AwTPwPyIhfwrHb%2FS2QIZh6ql%2FkJFe0ElvIUWct70bEy300keONnZvYwe1cOhd2F%2FKDs%2F6waT1Bcn3u96UXiDssSuk2BT4%2BjJr3LB0hxAUPQ2yPwkonjDa5d7JBjqkAc1vyOjnx%2BhPJPXFSiUNWO8Pz1kDayb9P%2BlEaXkdJXpINRFY15oTKSWzwJY7SvLLmUur37Jmq3WeqFgL1cFMRMroZath4sCBdZElx6j%2FzsWdi5AiikYQ8GfwYgANTtR4ZCL6UbKtZlcyH0TP6mmr5pQgvHMhyLpDAUKRblfFZn1tf5a51p8U6Dh4DCIE9RDaDQiGA3Wjq2t263AK5ezCkwMU5lxk&X-Amz-Signature=1e913b73470d90f871df7e3f3eee5ea0a1daa24dd8ed2568e9b0a8229aa005ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJEK2PD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLcUpCX98AQiAc5jWh%2F1Ad98xNi4VhJVk4EC5P4crvJgIhAPLzHmRnz3ip3nemUsaHBO8HCEGCYVesd7OoZrti09lGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOuduiSHWvop%2B4ZVoq3AMXJCfR9tNT4F8eMMSN3%2FRIcMkMfRxLi9uCfBIG4iKHBKzd1CxaWMUp2OOd7l0OhTwlFAKgWVkxdFgpOQZWceqCeea%2B7suuqALI8HZvyAYYU1Ca0EzrTvbZ5EBmcItQh1ymHOy7ahqtSQSB7QC%2FpR8MkHaVlX7kmX3dUxi%2B4fjHeIaxbM5gRPcbLC6VfavlsEKbGPPjTBptOaGnQL1zCJDFXP6ls84ZXaQdNcpDmMgZPV3WBFmYi4Rl9BhXynfqosoCTRqlMbr3hTFUwjViMJ15dfE4WJOIZROFAXDO92VbarWLvWUSbDiMGQEhVuSqxV9MNZEb9lVVxaugV0623YHrMFhYbHpbrUWfqoWlopgRlGkGonNulV6Wh7l%2BgvvQljEiAlaQqzuTasUU0M1RhvQPm3DigWM8PTgnC9a97GdscoRvkyXtFSdPGB0CIGHM265y3xd3FMW4%2BoRqpQ9Uz0kMpnHoPOfJFKyVuZcbPTcg%2F8SZu3HuSuJQVwnIVbMYb1rESXZSVT5AwTPwPyIhfwrHb%2FS2QIZh6ql%2FkJFe0ElvIUWct70bEy300keONnZvYwe1cOhd2F%2FKDs%2F6waT1Bcn3u96UXiDssSuk2BT4%2BjJr3LB0hxAUPQ2yPwkonjDa5d7JBjqkAc1vyOjnx%2BhPJPXFSiUNWO8Pz1kDayb9P%2BlEaXkdJXpINRFY15oTKSWzwJY7SvLLmUur37Jmq3WeqFgL1cFMRMroZath4sCBdZElx6j%2FzsWdi5AiikYQ8GfwYgANTtR4ZCL6UbKtZlcyH0TP6mmr5pQgvHMhyLpDAUKRblfFZn1tf5a51p8U6Dh4DCIE9RDaDQiGA3Wjq2t263AK5ezCkwMU5lxk&X-Amz-Signature=16a56a98bec3120c244467e995a570f2a0ecf52e571a3839d2fe5d76fbf5ea20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
