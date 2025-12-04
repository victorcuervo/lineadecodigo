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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWHU2CO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDYc4jRD26eMb0Q6IJRlFMhrHDA8AsdVz%2FRX7fFDzXqWQIgV13D%2BzYoYWA5GBqxhFmpoa%2BXseie7Qe1%2BC6NmywEm2cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMIW7I5Pe4rJT9OyyCrcA7o4ePL9sioz7IkzY5RC8a1yfrkYHz0HRb%2FpHXdo5jkiQkctwt6Co30FoWgF0G%2BRrElzF3NcO%2FunokguUpGgLSaG3PN%2BtXAN5GHkRcW28xdxs68I9S1TcGbkRyRGcqjenQRtrYSwMiHQWzzRBsGwH9yoQDzWXIYWWAwL7rlDjQlSntw%2Fir8UhuITPUzWTw9dIrlnaKH0kpu7lFYiZIZmlYKxWcHtoB1hHLO44z2q%2FnM%2BpnKzVw%2F0GuYwtM0%2BN1GyI%2Bf5Mz2r48pXFSpExfygu1a%2Fs%2FoKOuT0tvy%2FgafLXqM7FSGTOKbqtCG9FQgFlLkL9%2Bd8nV7yrXa2sMmB%2BRsX1x2BRGYBq%2FZGIToIdZifoX4wUG3ey%2BJP4n8L8FxpIv%2F4RitSkG6hPPR9y7YT4as0DwGWS2TTkenugY%2FZo1A%2BGr6rzMQ0hnZzogh4R1zEBKEyXe6EfnBY428esazdak%2BWYUvUSpVHGWTkou5CLDg2YskVxnYSLjvq6w3wPIKl%2BoWtAlpYTcEfyaOpHc9agHmtaariK9vdX8fNS4XoRLTBMrU0m96Uf%2Fab8g4yPN6b%2BnZBi2eYLm4F0lYizbPPQrriE1rWHj40QhcLNgY54WWff7o9r%2F0k1NvT8M3IYogWMKu%2BxskGOqUBp5IpS%2BY6F%2BBkqfMbH9xdafnhXcCHkiv2qQdqzve2mej%2Bi4weaJOL%2FbRxJUWp3rourYk1KPzP06s6KKU7aXz5%2BVg8W58zLN53POAMpYQC%2BOcUYT2NySjBHzIwGu6ufg3KTsltm5aY4dhdAO11dJsIHabxYoRhPeB%2B9myVb4UJ1RBmZmHLq%2BKiXDWYNpGUhtBvAZGNBmCYMkcQDseCxu6M4V2tEJSd&X-Amz-Signature=0207fb50c7a18aaff8c4a29fbf993a6e24e9063a01a7f321b510edd5b0190896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWHU2CO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDYc4jRD26eMb0Q6IJRlFMhrHDA8AsdVz%2FRX7fFDzXqWQIgV13D%2BzYoYWA5GBqxhFmpoa%2BXseie7Qe1%2BC6NmywEm2cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMIW7I5Pe4rJT9OyyCrcA7o4ePL9sioz7IkzY5RC8a1yfrkYHz0HRb%2FpHXdo5jkiQkctwt6Co30FoWgF0G%2BRrElzF3NcO%2FunokguUpGgLSaG3PN%2BtXAN5GHkRcW28xdxs68I9S1TcGbkRyRGcqjenQRtrYSwMiHQWzzRBsGwH9yoQDzWXIYWWAwL7rlDjQlSntw%2Fir8UhuITPUzWTw9dIrlnaKH0kpu7lFYiZIZmlYKxWcHtoB1hHLO44z2q%2FnM%2BpnKzVw%2F0GuYwtM0%2BN1GyI%2Bf5Mz2r48pXFSpExfygu1a%2Fs%2FoKOuT0tvy%2FgafLXqM7FSGTOKbqtCG9FQgFlLkL9%2Bd8nV7yrXa2sMmB%2BRsX1x2BRGYBq%2FZGIToIdZifoX4wUG3ey%2BJP4n8L8FxpIv%2F4RitSkG6hPPR9y7YT4as0DwGWS2TTkenugY%2FZo1A%2BGr6rzMQ0hnZzogh4R1zEBKEyXe6EfnBY428esazdak%2BWYUvUSpVHGWTkou5CLDg2YskVxnYSLjvq6w3wPIKl%2BoWtAlpYTcEfyaOpHc9agHmtaariK9vdX8fNS4XoRLTBMrU0m96Uf%2Fab8g4yPN6b%2BnZBi2eYLm4F0lYizbPPQrriE1rWHj40QhcLNgY54WWff7o9r%2F0k1NvT8M3IYogWMKu%2BxskGOqUBp5IpS%2BY6F%2BBkqfMbH9xdafnhXcCHkiv2qQdqzve2mej%2Bi4weaJOL%2FbRxJUWp3rourYk1KPzP06s6KKU7aXz5%2BVg8W58zLN53POAMpYQC%2BOcUYT2NySjBHzIwGu6ufg3KTsltm5aY4dhdAO11dJsIHabxYoRhPeB%2B9myVb4UJ1RBmZmHLq%2BKiXDWYNpGUhtBvAZGNBmCYMkcQDseCxu6M4V2tEJSd&X-Amz-Signature=a8292c1ec99b3afd8a608ab6840d461dcff65c8f0afb780bd4d3833161f706c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
