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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAQIOS2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmk5MmH6dB5Th5IJzIy1gcjKLIeCuX6v3X%2FeOlpo1YHAiByiLkhT8n%2FAZ0rweN2Glo1Y%2BPy2ZSlFpB1Hz%2BVAWihgyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdek3605xuSo9FUJHKtwDfiXviG8O40a7mbiMTQh5%2B0KL1XstdyCO7%2BkJsUdpyaT0PCo%2F2P%2BfaxcrbBcczDIEzOzSCWK9R6jeEyQWkdYPRPrhTIDEOBKhq2N8z8F8VKPbfRoXa5UR11xwVuBwu3FRzB6j%2FJ%2Bji%2F4KjW1zPQdvtvCJbTa1F%2BebfMTaNYavu0ru%2FY4VPgJxwx5HW0JSHVQvppkYQqo1NStWJcNKqqAwer6nQqCAUwuDmw6588EB7eKcbb9gAEtR6SQt6ReXZ%2F9qz7sShNODr4tvkQeWlQBq8mrQ7l0Ho1E%2B34mrd4GHBjbBmzR26zfkvPW6EYA14gTIEFRU4La9U7lpOZwWE1XMhtVqZhXGmAyCDLA3Xoy%2BhPHYWfTOu6XmqyOjEBNLvF11jtGZ9o67kKL4SCdn%2Bfgh5zglYccFOTBkexk2dodYhaUiPyM4tWS9E3E6by8EZYSMXcaHl09MneG%2FvgptR%2Fv7GE1lJQMoBD1zLlG5A5pjVn5M0a7cBVOi4E4s45%2B7puMYx7tm0jfme06GiYDg8WxtSXb4ewJghrExorOfPvtTc2kuAhQAMcUHOiUln7M5asvZR2Zfe1gU6Yghly%2BgEehv%2F4hFtChxxKwa9vD%2BDjZM70HlCVo1IBXB7bVoljowvJDbyQY6pgGNLnfigAq9aHERSEW%2F7EGfJSCXtm3mfPGbEf3D757WDeuPIoAsKdYxGz0wSxwR6Y8Pc4LInzT0lfQjOz9HKuN8jCGdHoMhnh911hYPTNNSPZ5TbDkVUFQIeXeVC96KkXVgNPOgHKPHgGWkNQdphk5PewubN0hRxlqPypPZOijYFyOuu4JrzAk7ql4PmNz9Ams9Eik1qrkMhSEaG5nVFzo8GjN1gh6w&X-Amz-Signature=aa20657d065207c56828147c9c8aeb490814763a61dc4efe65429d731b495555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAQIOS2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmk5MmH6dB5Th5IJzIy1gcjKLIeCuX6v3X%2FeOlpo1YHAiByiLkhT8n%2FAZ0rweN2Glo1Y%2BPy2ZSlFpB1Hz%2BVAWihgyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdek3605xuSo9FUJHKtwDfiXviG8O40a7mbiMTQh5%2B0KL1XstdyCO7%2BkJsUdpyaT0PCo%2F2P%2BfaxcrbBcczDIEzOzSCWK9R6jeEyQWkdYPRPrhTIDEOBKhq2N8z8F8VKPbfRoXa5UR11xwVuBwu3FRzB6j%2FJ%2Bji%2F4KjW1zPQdvtvCJbTa1F%2BebfMTaNYavu0ru%2FY4VPgJxwx5HW0JSHVQvppkYQqo1NStWJcNKqqAwer6nQqCAUwuDmw6588EB7eKcbb9gAEtR6SQt6ReXZ%2F9qz7sShNODr4tvkQeWlQBq8mrQ7l0Ho1E%2B34mrd4GHBjbBmzR26zfkvPW6EYA14gTIEFRU4La9U7lpOZwWE1XMhtVqZhXGmAyCDLA3Xoy%2BhPHYWfTOu6XmqyOjEBNLvF11jtGZ9o67kKL4SCdn%2Bfgh5zglYccFOTBkexk2dodYhaUiPyM4tWS9E3E6by8EZYSMXcaHl09MneG%2FvgptR%2Fv7GE1lJQMoBD1zLlG5A5pjVn5M0a7cBVOi4E4s45%2B7puMYx7tm0jfme06GiYDg8WxtSXb4ewJghrExorOfPvtTc2kuAhQAMcUHOiUln7M5asvZR2Zfe1gU6Yghly%2BgEehv%2F4hFtChxxKwa9vD%2BDjZM70HlCVo1IBXB7bVoljowvJDbyQY6pgGNLnfigAq9aHERSEW%2F7EGfJSCXtm3mfPGbEf3D757WDeuPIoAsKdYxGz0wSxwR6Y8Pc4LInzT0lfQjOz9HKuN8jCGdHoMhnh911hYPTNNSPZ5TbDkVUFQIeXeVC96KkXVgNPOgHKPHgGWkNQdphk5PewubN0hRxlqPypPZOijYFyOuu4JrzAk7ql4PmNz9Ams9Eik1qrkMhSEaG5nVFzo8GjN1gh6w&X-Amz-Signature=fc189de7b1095553719feac5131f8928a992823f5b8089d0968d7b644bdd0873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
