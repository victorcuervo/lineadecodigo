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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZQNYJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4y%2FtYNl%2BlGkmj2qZmmIS3rnxDFpHfbebE0S%2BYxZeq8QIhAMcV%2BEzGXMDdvo%2B0lNKpEgK3g9RtAiapVNBrPLIrqcuZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwxIHfwL8vFkh1ViRcq3AMy6Zhqkl6OO8eh95fIytVpkcx2gZ4VWn2gywd5QUNnPP9NiZb6Fgsm4e3MdKC%2F9tkvFwyClt7A7pnk3qtBw7Tgs7ywgCkynZ1e32OqB0AD5ndyGUg0KpIXZVQZSTjAW2PUyWgADrCvlwHbOBRZstCtuezN0ITYZnwKNyGK5xiuhPBhTVEVGo3fR%2FtHIaEGf8FJ5wPMvicEHK40Yxn7Pkf9ifWPboDsdXz8YlKS%2FPHyl6tv5cjKxdkbPUtufK%2Ffq31CBTMWsFy7RaHc%2ByhvgtpkyEi9x%2Fk2raqIrM32xnGE0UMXGOc54Mbrg1%2FVB5e%2BHA7ro4KcjaLcolTO82JXLMmSYxfFryqDMiMZZ%2Fmvfa9qbOafIMYT2ZBbeu2jqkbPfrTw6my5CNQ3Zu43I33F%2FrxMDXuneAjrr40UyEz1iGiU11VKfZWT1961G5E6Ksak8o1t3WwCjqzquvOknUiaVRq7LPJdpQ9DSjHn6ouy74iAFPZLqtlMiIqkM%2BFaUzCHQRGZGurrLGHfNFiBBpuz8ST2FoeKf9Rb5KsGMWgUGO7DOnUatz3UzijcokfBt4Yvw0sMEexYbzhlYGZIRt8fBstwvpZXe0NzfxO%2BHDBS23ndrnsODVg5Mkpa48C2gDD1sojKBjqkAdg%2FdQi07RmEdWVS45FIFjdPDCqteaGf%2FPm1y%2F0CqrGRM9hO8gBeTbCj%2Ftpgm7SnU0G59CIuna86gB1FzR6JivDt91YAKxqUi1uUxMtlq3Qtu16hvo85GPVzDNl8g7%2BY6CfsBSX7UAmc%2FV58%2F7t5sCsfvJ0mF00rXa91qxZ7ptekN7pzHRJwITdmo58ixJMQ7podrBbeINS59RN7AxRjwTbnKdrQ&X-Amz-Signature=f09162204f4270fa0c93b31e198c5bdf18ac2c08723690e50c78de6bb38195f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZQNYJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4y%2FtYNl%2BlGkmj2qZmmIS3rnxDFpHfbebE0S%2BYxZeq8QIhAMcV%2BEzGXMDdvo%2B0lNKpEgK3g9RtAiapVNBrPLIrqcuZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwxIHfwL8vFkh1ViRcq3AMy6Zhqkl6OO8eh95fIytVpkcx2gZ4VWn2gywd5QUNnPP9NiZb6Fgsm4e3MdKC%2F9tkvFwyClt7A7pnk3qtBw7Tgs7ywgCkynZ1e32OqB0AD5ndyGUg0KpIXZVQZSTjAW2PUyWgADrCvlwHbOBRZstCtuezN0ITYZnwKNyGK5xiuhPBhTVEVGo3fR%2FtHIaEGf8FJ5wPMvicEHK40Yxn7Pkf9ifWPboDsdXz8YlKS%2FPHyl6tv5cjKxdkbPUtufK%2Ffq31CBTMWsFy7RaHc%2ByhvgtpkyEi9x%2Fk2raqIrM32xnGE0UMXGOc54Mbrg1%2FVB5e%2BHA7ro4KcjaLcolTO82JXLMmSYxfFryqDMiMZZ%2Fmvfa9qbOafIMYT2ZBbeu2jqkbPfrTw6my5CNQ3Zu43I33F%2FrxMDXuneAjrr40UyEz1iGiU11VKfZWT1961G5E6Ksak8o1t3WwCjqzquvOknUiaVRq7LPJdpQ9DSjHn6ouy74iAFPZLqtlMiIqkM%2BFaUzCHQRGZGurrLGHfNFiBBpuz8ST2FoeKf9Rb5KsGMWgUGO7DOnUatz3UzijcokfBt4Yvw0sMEexYbzhlYGZIRt8fBstwvpZXe0NzfxO%2BHDBS23ndrnsODVg5Mkpa48C2gDD1sojKBjqkAdg%2FdQi07RmEdWVS45FIFjdPDCqteaGf%2FPm1y%2F0CqrGRM9hO8gBeTbCj%2Ftpgm7SnU0G59CIuna86gB1FzR6JivDt91YAKxqUi1uUxMtlq3Qtu16hvo85GPVzDNl8g7%2BY6CfsBSX7UAmc%2FV58%2F7t5sCsfvJ0mF00rXa91qxZ7ptekN7pzHRJwITdmo58ixJMQ7podrBbeINS59RN7AxRjwTbnKdrQ&X-Amz-Signature=1b5ccae30724507febe2c30aa8a0f67ead920d9e1fe2477af8c840287fbcb42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
