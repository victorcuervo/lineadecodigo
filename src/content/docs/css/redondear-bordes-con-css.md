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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH3WZXW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCLbvhiMhHrLqcuU8eS0yVONSLgXPYSNQIZlco8OPEQIhAM%2BMMSk3Rqfuw8NldAa%2FR%2FSNJo4PkRTu3WNncphV8OPvKv8DCE8QABoMNjM3NDIzMTgzODA1IgwAJEXQLYchrXr8L4Eq3AMI5eUnTnhvbQJCYyM9%2BA1AuXRtdf0tQmoPS%2B352kWwwy0DIOb5TOebnLZ61vAF7n3M2vmbrJfMm0E5L2KluJQaL9jLrdb75f19hEugcQ984czdiM9Q1lzaRPreCOoo8sW8eLuOAImRtfMil59UcyyAFfKVmAGwc2%2BIrZSSZ8e2jD37UCVSt%2BvRvIqKmcy9atvx0pgyBM%2BUh9o6Hwg9CnzhoN9D39W703DV3oxFY%2FHDH5DcNE%2Fd4%2B8HOhxavI4bE%2Bww1lkrhqC%2BZsmZ4XOdF6YhYoVBZOT29EkxIxI4WzZEbveOX6CskIpDzPf8VZfDLZvz4jwbDRJgUJ0wqZ2LcN0D9qUyx9LRYxyGCVXWZfXWRD16PKzjC98ENvcurWWn43j6pZtCaT%2BHIvgcuypH%2FD9jcq9bL5ZyMkVTso4mJyurrSnztjzrY48KMWZEmsklO6goXfDLaqyvN%2FTaNjEM8z4EDPRd0wPPuafDeMIMr6qmozWbe8nNED6jklioEB4Vv8%2BGGbiWM33H0F7Z8oww5a43vQHVAax2arUxFsu92E%2BPUWiVFNiX5e8YUANtZlDgztg%2F6zkTd956n77Fl2wAgGo27CXZRqvqZos7TtAc2lhW0waJNvDqb6F62%2BVaiTDPjMjJBjqkAT%2FJYuYy0pyDz9HZi1htxmRt%2B1RCB8sPdUtyhCJr76eZ7LlR2Np9c4uiGOPDQpdcom6zzxNeo95fCUYP3otAHoxg3Ic9jrfLvhIwiRaj7DL3QPknQ096paQTayqoNUHNX2uNlSrArht%2FQdZyH%2Fu4kLAIWryuWFC9Z6UqPrSm%2BksgQzB0kxe3QzoMgh0zjq1ooc%2FPnCk0ytWmZbAZTf8566GpddBr&X-Amz-Signature=ab01efb13e3a33912751986e1898abed9ebfd0fa6e647a8b6e581c95116abf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH3WZXW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCLbvhiMhHrLqcuU8eS0yVONSLgXPYSNQIZlco8OPEQIhAM%2BMMSk3Rqfuw8NldAa%2FR%2FSNJo4PkRTu3WNncphV8OPvKv8DCE8QABoMNjM3NDIzMTgzODA1IgwAJEXQLYchrXr8L4Eq3AMI5eUnTnhvbQJCYyM9%2BA1AuXRtdf0tQmoPS%2B352kWwwy0DIOb5TOebnLZ61vAF7n3M2vmbrJfMm0E5L2KluJQaL9jLrdb75f19hEugcQ984czdiM9Q1lzaRPreCOoo8sW8eLuOAImRtfMil59UcyyAFfKVmAGwc2%2BIrZSSZ8e2jD37UCVSt%2BvRvIqKmcy9atvx0pgyBM%2BUh9o6Hwg9CnzhoN9D39W703DV3oxFY%2FHDH5DcNE%2Fd4%2B8HOhxavI4bE%2Bww1lkrhqC%2BZsmZ4XOdF6YhYoVBZOT29EkxIxI4WzZEbveOX6CskIpDzPf8VZfDLZvz4jwbDRJgUJ0wqZ2LcN0D9qUyx9LRYxyGCVXWZfXWRD16PKzjC98ENvcurWWn43j6pZtCaT%2BHIvgcuypH%2FD9jcq9bL5ZyMkVTso4mJyurrSnztjzrY48KMWZEmsklO6goXfDLaqyvN%2FTaNjEM8z4EDPRd0wPPuafDeMIMr6qmozWbe8nNED6jklioEB4Vv8%2BGGbiWM33H0F7Z8oww5a43vQHVAax2arUxFsu92E%2BPUWiVFNiX5e8YUANtZlDgztg%2F6zkTd956n77Fl2wAgGo27CXZRqvqZos7TtAc2lhW0waJNvDqb6F62%2BVaiTDPjMjJBjqkAT%2FJYuYy0pyDz9HZi1htxmRt%2B1RCB8sPdUtyhCJr76eZ7LlR2Np9c4uiGOPDQpdcom6zzxNeo95fCUYP3otAHoxg3Ic9jrfLvhIwiRaj7DL3QPknQ096paQTayqoNUHNX2uNlSrArht%2FQdZyH%2Fu4kLAIWryuWFC9Z6UqPrSm%2BksgQzB0kxe3QzoMgh0zjq1ooc%2FPnCk0ytWmZbAZTf8566GpddBr&X-Amz-Signature=28dc98f28f562bc8783720b1d3f774e33fdcd0863909299e99bcc3cfd17db545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
