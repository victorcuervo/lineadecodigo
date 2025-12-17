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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEENQNUE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ykbf4u4qMhh%2BOrzcTyMMn5sv68QosS9Y6nSO%2FUuyvQIgIS2rg4Aw5h68BqOQ0XEyfH2I9u3GDxQr1xPEWwDobZwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDn9UUm9dpvHM4HcJSrcA%2BTQaGf6sWUnc5N1zBzwbXzlGpOvdX0UidQjS%2BEXH2GoAPSaDItPGgcL%2BT2oKdQRYJskwbWP68guKZiLGZliB%2BJXyMyowajdMnBoEsd4PRMD9lwLGflv5gRneeZwyokQoH8%2BhP%2BBH88VQz%2BjG%2F%2BzxKD2DDxWC6unTSpc8TJv%2BmWyCwtrzxL0QRNwotx%2FaqJ0rMph4urPvBH07Hwhh%2BBLtjWfHwxay6Tf8cKaU34ttkM%2B%2B41nv8JbAOYCeedr33Ry6QwPlpFBgnBI5m5x7GEXEM8BYttZNQ6K1wEJkhMt9rP4Uzl9Uq1zvPbQWggNxs67Uy1vwsktLKNI2oFVxCEjgiOhi5Ju4OrfwPrnO2crVuI%2B7qrUDVQLOjQwKxMNROQdrZp%2F8fyrsqeHnFpBEVmq41VqwZMTHdklzYxkREy6iaMHKP9jmLL5m%2BGy7kP7tZoXwrXwnc65PAYAZjHUwDN8Aeuj2%2FOOLlzFKu5P3bixqSzFOyw2xq1rtUr4di%2BOKZJzsW1X3jCu2mUupAQpw2Kp9QvyHJGptFntbMqCZW%2BZL8sleJNGrPQm%2BzcQNtWaejF4uhyGPjIRjTBUjxYxAH8RhaO%2FcCgOa%2BuJ9ISGaQnBrmxMaPWYgDU5Y7O%2FU8P8MMX7h8oGOqUBK%2FLffxineDc%2BlLii9B1uO5fqERoeE3nnxJNx9r2OqBqIfn1xPsObaQ1iDhx8Td6bYylZe7qIxPZ5760ij9QAp4yahr7AsvArgTPEdZgEXQZ1bn7F3%2BkM5YlKIQIJXsjloGWUXkWzIVbIpNitQagSoTBli3VTGHqLJBnI4NWz0Z00wBL1nPTBBnkyD7brS9tVzyoYKUbaHPPd3m4PsdA2crLJXTiB&X-Amz-Signature=5c6e67f051c161eeef40dbca4900e88954e11efad0d1b5be68bcd18dcac9d798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEENQNUE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ykbf4u4qMhh%2BOrzcTyMMn5sv68QosS9Y6nSO%2FUuyvQIgIS2rg4Aw5h68BqOQ0XEyfH2I9u3GDxQr1xPEWwDobZwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDn9UUm9dpvHM4HcJSrcA%2BTQaGf6sWUnc5N1zBzwbXzlGpOvdX0UidQjS%2BEXH2GoAPSaDItPGgcL%2BT2oKdQRYJskwbWP68guKZiLGZliB%2BJXyMyowajdMnBoEsd4PRMD9lwLGflv5gRneeZwyokQoH8%2BhP%2BBH88VQz%2BjG%2F%2BzxKD2DDxWC6unTSpc8TJv%2BmWyCwtrzxL0QRNwotx%2FaqJ0rMph4urPvBH07Hwhh%2BBLtjWfHwxay6Tf8cKaU34ttkM%2B%2B41nv8JbAOYCeedr33Ry6QwPlpFBgnBI5m5x7GEXEM8BYttZNQ6K1wEJkhMt9rP4Uzl9Uq1zvPbQWggNxs67Uy1vwsktLKNI2oFVxCEjgiOhi5Ju4OrfwPrnO2crVuI%2B7qrUDVQLOjQwKxMNROQdrZp%2F8fyrsqeHnFpBEVmq41VqwZMTHdklzYxkREy6iaMHKP9jmLL5m%2BGy7kP7tZoXwrXwnc65PAYAZjHUwDN8Aeuj2%2FOOLlzFKu5P3bixqSzFOyw2xq1rtUr4di%2BOKZJzsW1X3jCu2mUupAQpw2Kp9QvyHJGptFntbMqCZW%2BZL8sleJNGrPQm%2BzcQNtWaejF4uhyGPjIRjTBUjxYxAH8RhaO%2FcCgOa%2BuJ9ISGaQnBrmxMaPWYgDU5Y7O%2FU8P8MMX7h8oGOqUBK%2FLffxineDc%2BlLii9B1uO5fqERoeE3nnxJNx9r2OqBqIfn1xPsObaQ1iDhx8Td6bYylZe7qIxPZ5760ij9QAp4yahr7AsvArgTPEdZgEXQZ1bn7F3%2BkM5YlKIQIJXsjloGWUXkWzIVbIpNitQagSoTBli3VTGHqLJBnI4NWz0Z00wBL1nPTBBnkyD7brS9tVzyoYKUbaHPPd3m4PsdA2crLJXTiB&X-Amz-Signature=56dec39a4a5beafe1afa2c18fb1fc9ad38f74160b8d69e6b850ef268777eb8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
