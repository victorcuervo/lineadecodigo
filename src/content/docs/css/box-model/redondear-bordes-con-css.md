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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZBYPH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3DSGSES3mt3GXr113BltaAXQ%2BkA9P3Z6Yi%2FqvW3q3gIhAMczvzMqiNGAl6M9RMbgB5SrsWgzJ2MBnldBcXokY6zyKv8DCHUQABoMNjM3NDIzMTgzODA1Igyq%2BGQBz0B%2B3iO%2BnBMq3AOIWiWn5kXYhyN0q3MmwDxQ59s0lGuePrJ42H3otdFgl0JNHUbY5jTK9AB%2FG59rz9IL3sW1hTc13NyJl2H8g2kyTbDZuR6ztPjrre8OE0y9qXo%2ByEWqAfb0OQ3sFwb6OktUIC5pYVKJjbTD4%2F4W0pu0V6J28lHSYAX7QrXs1YYNYEad2ggpRKbywxZLbivP0ACm1EHU8KTnXIyAJ74D2nCBEhPwFbkvgrBTDEgqiddquUo39I9%2B6co65SC%2BJF2uIyortSG0EShwC3xW%2FrrMoGCT%2FhjOZHeBHHSG3FY0BYWVuYbXoD6886ATC16lWw42wljZfkplWF5Ywt0es8as2smoVVoVinOyHdwE4jDU%2FLzkA1xVEVV0EDER46vQk7IK7LyTfm8xQEkE744kOWnVrVUP%2FKxH1PYKZbV4jPoOzoDc5wNJk9Nc59%2B482ZTASkF%2BD46tIlaBQiv5OVnKYDJZxPeoWQOXKab17FxHyqD35t%2B%2FxbYTcSoDIW%2FuOiiV2THi9w0dGNcNyERcZPjx4FvzgrRzAxdHSgdXHoWSoDFqPC2bJdp6Lk8csI1d%2Fm5RixXeaECaP0ebwLbmOjMGYpLG4IOdOHsIeR0Gb%2B9a9Va4js4r%2FY9L7lMYc7w7rCAyDC4zojKBjqkAUA24JyNloTRoPiTzvlozVLscb0YRgWS2LcLfIFqls20elxegsYxpyD7G8bIWjC%2BLVLSJAmR%2BTkmN6ERDdKxcVrZ5kfTPOJIz2hV9k7E8sy7ZfYXvWmi36HlyUBzw7nVdkQukW3a6pbFVOlG1kb4v6GKeDg7s78Uf4mH5lptsYctEeOCQmIgWqxvujMqHove5J4rrgKIOgj2fclL1CbuzelHLm4N&X-Amz-Signature=d60a1642f8bb71fed65b449f48f325481ffad5863a340cee3cfc35ffe39b6c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZBYPH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3DSGSES3mt3GXr113BltaAXQ%2BkA9P3Z6Yi%2FqvW3q3gIhAMczvzMqiNGAl6M9RMbgB5SrsWgzJ2MBnldBcXokY6zyKv8DCHUQABoMNjM3NDIzMTgzODA1Igyq%2BGQBz0B%2B3iO%2BnBMq3AOIWiWn5kXYhyN0q3MmwDxQ59s0lGuePrJ42H3otdFgl0JNHUbY5jTK9AB%2FG59rz9IL3sW1hTc13NyJl2H8g2kyTbDZuR6ztPjrre8OE0y9qXo%2ByEWqAfb0OQ3sFwb6OktUIC5pYVKJjbTD4%2F4W0pu0V6J28lHSYAX7QrXs1YYNYEad2ggpRKbywxZLbivP0ACm1EHU8KTnXIyAJ74D2nCBEhPwFbkvgrBTDEgqiddquUo39I9%2B6co65SC%2BJF2uIyortSG0EShwC3xW%2FrrMoGCT%2FhjOZHeBHHSG3FY0BYWVuYbXoD6886ATC16lWw42wljZfkplWF5Ywt0es8as2smoVVoVinOyHdwE4jDU%2FLzkA1xVEVV0EDER46vQk7IK7LyTfm8xQEkE744kOWnVrVUP%2FKxH1PYKZbV4jPoOzoDc5wNJk9Nc59%2B482ZTASkF%2BD46tIlaBQiv5OVnKYDJZxPeoWQOXKab17FxHyqD35t%2B%2FxbYTcSoDIW%2FuOiiV2THi9w0dGNcNyERcZPjx4FvzgrRzAxdHSgdXHoWSoDFqPC2bJdp6Lk8csI1d%2Fm5RixXeaECaP0ebwLbmOjMGYpLG4IOdOHsIeR0Gb%2B9a9Va4js4r%2FY9L7lMYc7w7rCAyDC4zojKBjqkAUA24JyNloTRoPiTzvlozVLscb0YRgWS2LcLfIFqls20elxegsYxpyD7G8bIWjC%2BLVLSJAmR%2BTkmN6ERDdKxcVrZ5kfTPOJIz2hV9k7E8sy7ZfYXvWmi36HlyUBzw7nVdkQukW3a6pbFVOlG1kb4v6GKeDg7s78Uf4mH5lptsYctEeOCQmIgWqxvujMqHove5J4rrgKIOgj2fclL1CbuzelHLm4N&X-Amz-Signature=c45255fc0b3f9cff85ed906c9d21f6b33495a866c43ddbf855ec693ead6eeea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
