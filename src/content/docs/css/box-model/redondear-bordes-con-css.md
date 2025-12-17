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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBQ3OE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC48kaIx8%2BdxRtJhfSoPmmt39brf%2FOfI4S4il8YzziACAiEAjctuFJVaaTG1f6V0fuSenySpAGfliwWbfQCxoYjykh0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5aGzyq1y5GSG%2BRWircA4fJr1DOUU5x0ilU%2FUjxVMhEqQPGW7spyj5sPgDy6BZzymw1uaAURMTlQlT22eXiwYFplpvDr2VsUnKS%2FmVCAqMQNeRQRd7pD5BG9dRJ1e4WMGGVzrGwb0hu9fQ1AO6glQtYA0WllfokisCpsMexXcjsJuqVslpI1cYnzp4wuPPH67zq%2FWOSPGHl1gY%2BNgsugAqBCOQ8obpKZPP6IFqSp8aJT4C8fNJ4X1t6JyC8LSN7hRHnPBS8gdL4I%2F4Z40qx9G9Sap65bBNeZkwKYkWDkGT99UQbZNg6h7kY4i%2Bxp9x%2FwitQwdgdLAVK8Rom633Y4afiDiiXA0uzxY2R4SaaMlNcYHRDr0XoJSnvfyIy%2FDHFYQDZRsQ0yz7i7kQHS9hSzblfkd8942076gQpCtQtGXMO%2F8Q0xto1GoDxn79h5P6Htxi3JQYBCySC29QCQqYo%2B%2Bc%2F792bFjYAIDo%2Bsyzj%2FNMOlnbojtjHIyiuG9VWUOuzxo3XzPBsF%2BmdCtKs7jAsT9cZbzZrCObWxxAZeICHJe3UymWZJ4FzwyPjtO0zjq6JOJcLs%2BJYmodIeQ7cg2XmQ8SjhFhXiq7JkhCYSssUpatfM5W1Hi6JUiNwmoCQ89IFqz4oCPdaD9i2tGnuMKSLjMoGOqUBJKS6CdOvqmzdQueOmQDJ1Tj1HbLTw5jMhg%2BOgiOd18QC%2FoU4HG8Zb%2BP9Grrnn7%2FS5mgZhAoxanSV4aYE2zEtrbNZhGFzD3pcgHFlrU6a0c5Mt29%2Bg06W6N85KyyPjE1NIVxdm%2Be%2B%2Bm8YBhWcRmwgnW54WQnbSrMcD9TJY1CJNVmzXtyKEYWtBsYD5S0uQP9IWMJXF1DB3wsghaj5walgvnQjBHpl&X-Amz-Signature=0df1e888b47fdf132faba9204dd821920f24f1c14c832a4690f6b833ef044e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBQ3OE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC48kaIx8%2BdxRtJhfSoPmmt39brf%2FOfI4S4il8YzziACAiEAjctuFJVaaTG1f6V0fuSenySpAGfliwWbfQCxoYjykh0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5aGzyq1y5GSG%2BRWircA4fJr1DOUU5x0ilU%2FUjxVMhEqQPGW7spyj5sPgDy6BZzymw1uaAURMTlQlT22eXiwYFplpvDr2VsUnKS%2FmVCAqMQNeRQRd7pD5BG9dRJ1e4WMGGVzrGwb0hu9fQ1AO6glQtYA0WllfokisCpsMexXcjsJuqVslpI1cYnzp4wuPPH67zq%2FWOSPGHl1gY%2BNgsugAqBCOQ8obpKZPP6IFqSp8aJT4C8fNJ4X1t6JyC8LSN7hRHnPBS8gdL4I%2F4Z40qx9G9Sap65bBNeZkwKYkWDkGT99UQbZNg6h7kY4i%2Bxp9x%2FwitQwdgdLAVK8Rom633Y4afiDiiXA0uzxY2R4SaaMlNcYHRDr0XoJSnvfyIy%2FDHFYQDZRsQ0yz7i7kQHS9hSzblfkd8942076gQpCtQtGXMO%2F8Q0xto1GoDxn79h5P6Htxi3JQYBCySC29QCQqYo%2B%2Bc%2F792bFjYAIDo%2Bsyzj%2FNMOlnbojtjHIyiuG9VWUOuzxo3XzPBsF%2BmdCtKs7jAsT9cZbzZrCObWxxAZeICHJe3UymWZJ4FzwyPjtO0zjq6JOJcLs%2BJYmodIeQ7cg2XmQ8SjhFhXiq7JkhCYSssUpatfM5W1Hi6JUiNwmoCQ89IFqz4oCPdaD9i2tGnuMKSLjMoGOqUBJKS6CdOvqmzdQueOmQDJ1Tj1HbLTw5jMhg%2BOgiOd18QC%2FoU4HG8Zb%2BP9Grrnn7%2FS5mgZhAoxanSV4aYE2zEtrbNZhGFzD3pcgHFlrU6a0c5Mt29%2Bg06W6N85KyyPjE1NIVxdm%2Be%2B%2Bm8YBhWcRmwgnW54WQnbSrMcD9TJY1CJNVmzXtyKEYWtBsYD5S0uQP9IWMJXF1DB3wsghaj5walgvnQjBHpl&X-Amz-Signature=7940171e176cb16d21878a00bb671393037ef4a621bbb91822b2b28e0f6dd869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
