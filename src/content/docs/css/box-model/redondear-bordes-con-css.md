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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ6GOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFMEo8FO0ooRNmJhpO2%2BLZ2UdWmAl5GK94377wDkZLEAIhAKM8eRyJJwNA6CJIMOUlj1%2B%2F7wAabXZU8qlz6jUBI0tlKv8DCHMQABoMNjM3NDIzMTgzODA1Igy2JGKVlrD6Qh5eqBsq3ANNWDZKVSUjL2NnsL71ub9OTMEgnJ5uIYdxOhB9KipSj2J26840hWt%2FxTjGxGmqVNzBa933zRC1yWrAEMmG6uU3bOAiKhgzZbZynvR78uMzo9r9zD8iGsnHL3Ibd0dxqDwDLPAlPwLBF7X%2FifxxDdnYJ25KhPD6%2Fux3Cp6S6Da6scz%2BMNpP7XW0XKrywktKjkcCY0zao1iOBFPqWdda5lpeYCI3JdaYuTxaVyBeUMOhwgZBRkTVKwmf84VYuIP%2BxiAk6JGzvPGbQzyUiSjDVjR5fD8ToJX7hHDLQ%2FmcW6KEZmvXvkMHmN6e4uH2mpHBGOzqH6ykLoJG72lsExV4adTFbpTWpKJpKw7FG%2BTiIF6%2BUAPY9javRunpXeobEozIbFltDt20iLsg2d0lIWqWxY6J5MOdgYPQNBftlZ%2FA5PFTvm50777N1ubXZ7OXeZ9zhCDSrfqoEdsLI2CE6IpxiNNRSp4y8z%2Br5qr1QCd0yFgzjou7qzsKPzbRQ8LXnf7v5DY2lXoYSHUeUk%2B3iKKosHIrS%2BZP%2Bf9TC1%2BOZXnr9%2F147pt%2BL25qAlgGlXX0Rldj3g5KEKEsCRE5gKUrg9A8gFWk%2FAxIQ%2BvAsR%2B%2FJqS8fhubCz0ZZV0U2eRJEZJiEjD4lojKBjqkAZ5o5DmWjhiTqGr0uFRzNZGTX4zBgoLi4J%2FaIY2aiaIz1BDzgIlG4iGR5qvGh6tmf8sUaCHzGn8VszpyfaVhVeJTjMjkcM3oydM6pfNA7fJTUjnIVuhWccAyBx2CcfzDeLlN9k9ZKC06%2F7LFRy7Ft7%2Bscrb7rtvE5syWo%2FIOUMsx9L5WvNVXeOnoej%2FlxL0N7Yfb4h2ojA0G3Cmd%2FmxjaQ8AEDAQ&X-Amz-Signature=b6176276c448c3a6079bd1368bfb2df78796af75ecf12f99d7253f5ad8b428fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ6GOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFMEo8FO0ooRNmJhpO2%2BLZ2UdWmAl5GK94377wDkZLEAIhAKM8eRyJJwNA6CJIMOUlj1%2B%2F7wAabXZU8qlz6jUBI0tlKv8DCHMQABoMNjM3NDIzMTgzODA1Igy2JGKVlrD6Qh5eqBsq3ANNWDZKVSUjL2NnsL71ub9OTMEgnJ5uIYdxOhB9KipSj2J26840hWt%2FxTjGxGmqVNzBa933zRC1yWrAEMmG6uU3bOAiKhgzZbZynvR78uMzo9r9zD8iGsnHL3Ibd0dxqDwDLPAlPwLBF7X%2FifxxDdnYJ25KhPD6%2Fux3Cp6S6Da6scz%2BMNpP7XW0XKrywktKjkcCY0zao1iOBFPqWdda5lpeYCI3JdaYuTxaVyBeUMOhwgZBRkTVKwmf84VYuIP%2BxiAk6JGzvPGbQzyUiSjDVjR5fD8ToJX7hHDLQ%2FmcW6KEZmvXvkMHmN6e4uH2mpHBGOzqH6ykLoJG72lsExV4adTFbpTWpKJpKw7FG%2BTiIF6%2BUAPY9javRunpXeobEozIbFltDt20iLsg2d0lIWqWxY6J5MOdgYPQNBftlZ%2FA5PFTvm50777N1ubXZ7OXeZ9zhCDSrfqoEdsLI2CE6IpxiNNRSp4y8z%2Br5qr1QCd0yFgzjou7qzsKPzbRQ8LXnf7v5DY2lXoYSHUeUk%2B3iKKosHIrS%2BZP%2Bf9TC1%2BOZXnr9%2F147pt%2BL25qAlgGlXX0Rldj3g5KEKEsCRE5gKUrg9A8gFWk%2FAxIQ%2BvAsR%2B%2FJqS8fhubCz0ZZV0U2eRJEZJiEjD4lojKBjqkAZ5o5DmWjhiTqGr0uFRzNZGTX4zBgoLi4J%2FaIY2aiaIz1BDzgIlG4iGR5qvGh6tmf8sUaCHzGn8VszpyfaVhVeJTjMjkcM3oydM6pfNA7fJTUjnIVuhWccAyBx2CcfzDeLlN9k9ZKC06%2F7LFRy7Ft7%2Bscrb7rtvE5syWo%2FIOUMsx9L5WvNVXeOnoej%2FlxL0N7Yfb4h2ojA0G3Cmd%2FmxjaQ8AEDAQ&X-Amz-Signature=e09408d0f9c63d0fc8980612da0004e1ce62077e5c2bac9a208dd35bff797944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
