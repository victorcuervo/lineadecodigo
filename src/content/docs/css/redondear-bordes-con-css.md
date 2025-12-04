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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSONZOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF5%2BE6nbNFJDi5lZl9LSVysOwsI8OVVynnGHdWcN6sc%2FAiB1hGpiWzEK%2FcQ%2BCumE9fctUezKrT2alkN1NV0QyzmiIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMJE9y%2BzWM8uekbkW0KtwDeFvu02TqtSMPzWdY8SAHjfvIv0If1RDUUlyLc9Vt3FYjq9Q9aA6m%2FtAPZO%2FhnJvUV7zl2syY2HqNjWbpe7a47X8daN7tNYdyQX9U2NCybmjL%2BjIiYFpcI7w4zzf8umQyavBbIoLM%2BgEQO9OMPu0VTw8N1vzB7G6WApzcq2%2FGwjASNbqOHOHVQvCAhrG%2F17z5agjnL99Vl3vZZU282hRcDePA5i7usLuwwAkFeXd7VhIINAYVsSbTygrAbpBSzGRad4ZcAK%2Bfkt3sUVekHoI7LEiVgMUN0TzA6b%2Fw9PLRhAcRMf9h0DMR6qP2GIqcafCQiczJ6COF63AgnXUlQQU%2FzfziOQX91v3HzegYzpJ4f%2BRiqqcQvcpQMiTktomPVMOqb%2Bbt6EjFKfWtpCLhCoDVLRHUrXK70zZrGNG%2BLshmO66iIDwkq5t6jf4UYT%2Byf6ke6JehAYkD7L0g%2BsagGv6I3tkkVZWV6BjnRaJcuHYOmhtfVxaHuGrvKiUII1wWeody2lwwoHEBI94syoTf%2BplWFdqJzFsaNCnT7QJPTponGo8RSmWJBZWEjoYV58SxYUzPxIcuVw%2F2TrHmQoNshl069xp%2FXfKXTGR0aSOW5DXPvoE8nDZJdhvTf1AdnuAw9JTDyQY6pgHtK5sPFA4Pkhq5UtpGGsZyZmALpYXUMbOCJ3mhpDP9UBEjh3oaZgavXNkb1humawSzRho541mRTCkUz2NrrahEKMDaXz17KYNq2QoELAcW88l7Mi7vtiNc14M57I3d%2FwztdDlneONcELwsMFbhkjY58Na5EcEB0a35oL5IeDNTeTGvyICp3%2FpsPQfOeqD6AxcHM8a67WZIW6VVM6j6%2BPEuvpVh3QUc&X-Amz-Signature=9df437dc7301d82ab85fd3c4c6ca320050ded632c45f6f163691c3eae6791b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSONZOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF5%2BE6nbNFJDi5lZl9LSVysOwsI8OVVynnGHdWcN6sc%2FAiB1hGpiWzEK%2FcQ%2BCumE9fctUezKrT2alkN1NV0QyzmiIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMJE9y%2BzWM8uekbkW0KtwDeFvu02TqtSMPzWdY8SAHjfvIv0If1RDUUlyLc9Vt3FYjq9Q9aA6m%2FtAPZO%2FhnJvUV7zl2syY2HqNjWbpe7a47X8daN7tNYdyQX9U2NCybmjL%2BjIiYFpcI7w4zzf8umQyavBbIoLM%2BgEQO9OMPu0VTw8N1vzB7G6WApzcq2%2FGwjASNbqOHOHVQvCAhrG%2F17z5agjnL99Vl3vZZU282hRcDePA5i7usLuwwAkFeXd7VhIINAYVsSbTygrAbpBSzGRad4ZcAK%2Bfkt3sUVekHoI7LEiVgMUN0TzA6b%2Fw9PLRhAcRMf9h0DMR6qP2GIqcafCQiczJ6COF63AgnXUlQQU%2FzfziOQX91v3HzegYzpJ4f%2BRiqqcQvcpQMiTktomPVMOqb%2Bbt6EjFKfWtpCLhCoDVLRHUrXK70zZrGNG%2BLshmO66iIDwkq5t6jf4UYT%2Byf6ke6JehAYkD7L0g%2BsagGv6I3tkkVZWV6BjnRaJcuHYOmhtfVxaHuGrvKiUII1wWeody2lwwoHEBI94syoTf%2BplWFdqJzFsaNCnT7QJPTponGo8RSmWJBZWEjoYV58SxYUzPxIcuVw%2F2TrHmQoNshl069xp%2FXfKXTGR0aSOW5DXPvoE8nDZJdhvTf1AdnuAw9JTDyQY6pgHtK5sPFA4Pkhq5UtpGGsZyZmALpYXUMbOCJ3mhpDP9UBEjh3oaZgavXNkb1humawSzRho541mRTCkUz2NrrahEKMDaXz17KYNq2QoELAcW88l7Mi7vtiNc14M57I3d%2FwztdDlneONcELwsMFbhkjY58Na5EcEB0a35oL5IeDNTeTGvyICp3%2FpsPQfOeqD6AxcHM8a67WZIW6VVM6j6%2BPEuvpVh3QUc&X-Amz-Signature=158e6f1339714ffd031219be919fd3b3ab2f62004cee1e7fe0448748051b9494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
