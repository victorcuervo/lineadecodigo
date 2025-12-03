---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAUAG2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAnmBce6goPwTqjWxxjfychfa3DdzQOScN4apoVLRxiSAiBFCS8AhCccaQnJtbF%2FRPs06tNX0hhLcENh2L6zlh%2BqpSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMaFfA7dXWaT99tmoKKtwDKnqn%2BN4OqWOOT%2FohD8uA0Br%2BykQRmGOVNn8UnDA44ndn4%2BBvmEekKFITEdOUrg9CJjg3cIaZ0CCiSyBnvwdYNce3A8QnQ6ml6UxzQjRi6DQgmUibiI9WvO6r0%2FPO3Bw6Q0MBbzqlFfOcGi0C%2FYwuWEMFFUobdkgaLIBHiGlvhq1%2FI9lOzcu3czOkuKxsG15%2FAANTyQpoF7Wnsx9UlTDrebBPw71P8X%2BooUrJGk9yFIzQaxSQYxygRtPCi5cCHOoDuxiu%2Ba%2FRxQzLwOUvCnzTCQhJGJJWhC1tG9msMgvRF%2FzjmiHqlHTpS%2FgXq3ssCTKpNdirtdXt1cEQN2oHHh43bGTtKE8RkQJJwaPUgi1fwi9vyUpCGZGuD%2Fo7YxTr45HYWiZZCNU079BEjPhePqIOCx6HVZZ96nR9nLZDkLZInamAn33mzpJM9eCeYumxMtdG0bchfCv%2Fv3Quw2fjf3rmkRRBoG9zjmR%2BcEY2Qv09D9zIUafGwg3L4qpxPT2jO%2B%2BVaYqWfsGiwYQzVOk4b65nH7rIcSgiJpTVOE5YAkUENyQHx1bpVb%2BcRjtyXMryurxz58%2BZkbNDpnx4cpmdK1qoU0EhloTwDCWBAR9BYAWQUjJ4gDn8E6SglliKvDcw2NzCyQY6pgFhwv2sG6G%2Fi7JfHUCeJNeTUln3t2OsHbjAThYkGIgAXazq6ZA9LXPGEDr7k0v7KY8pupPFYSVdfohkoR4Uy9686Ivs8%2FNHPhxKeZM7vtNsc6scI%2Bew0GY1lVTsYB7JwxrAX48N%2Fh15%2Fvu7x5dbpEHkOM1jUGNobgIH0Kf4rDaZTK1oQQ4YDsjPbiKzInIYvBPt3oJTDg3AywfBqebqlKjCFVAWzlYD&X-Amz-Signature=a6d5158994cf24fa68cc0d3b4f22257f4a34978af8e1053556d8ba0e6ec22fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAUAG2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAnmBce6goPwTqjWxxjfychfa3DdzQOScN4apoVLRxiSAiBFCS8AhCccaQnJtbF%2FRPs06tNX0hhLcENh2L6zlh%2BqpSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMaFfA7dXWaT99tmoKKtwDKnqn%2BN4OqWOOT%2FohD8uA0Br%2BykQRmGOVNn8UnDA44ndn4%2BBvmEekKFITEdOUrg9CJjg3cIaZ0CCiSyBnvwdYNce3A8QnQ6ml6UxzQjRi6DQgmUibiI9WvO6r0%2FPO3Bw6Q0MBbzqlFfOcGi0C%2FYwuWEMFFUobdkgaLIBHiGlvhq1%2FI9lOzcu3czOkuKxsG15%2FAANTyQpoF7Wnsx9UlTDrebBPw71P8X%2BooUrJGk9yFIzQaxSQYxygRtPCi5cCHOoDuxiu%2Ba%2FRxQzLwOUvCnzTCQhJGJJWhC1tG9msMgvRF%2FzjmiHqlHTpS%2FgXq3ssCTKpNdirtdXt1cEQN2oHHh43bGTtKE8RkQJJwaPUgi1fwi9vyUpCGZGuD%2Fo7YxTr45HYWiZZCNU079BEjPhePqIOCx6HVZZ96nR9nLZDkLZInamAn33mzpJM9eCeYumxMtdG0bchfCv%2Fv3Quw2fjf3rmkRRBoG9zjmR%2BcEY2Qv09D9zIUafGwg3L4qpxPT2jO%2B%2BVaYqWfsGiwYQzVOk4b65nH7rIcSgiJpTVOE5YAkUENyQHx1bpVb%2BcRjtyXMryurxz58%2BZkbNDpnx4cpmdK1qoU0EhloTwDCWBAR9BYAWQUjJ4gDn8E6SglliKvDcw2NzCyQY6pgFhwv2sG6G%2Fi7JfHUCeJNeTUln3t2OsHbjAThYkGIgAXazq6ZA9LXPGEDr7k0v7KY8pupPFYSVdfohkoR4Uy9686Ivs8%2FNHPhxKeZM7vtNsc6scI%2Bew0GY1lVTsYB7JwxrAX48N%2Fh15%2Fvu7x5dbpEHkOM1jUGNobgIH0Kf4rDaZTK1oQQ4YDsjPbiKzInIYvBPt3oJTDg3AywfBqebqlKjCFVAWzlYD&X-Amz-Signature=3fcf310b1e14d960f22461354314597f41c17c7ace7bcf93d51add764a6ae77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
