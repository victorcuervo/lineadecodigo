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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4TI4TE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ4eoei0HiMhNSH2Qm7otdwlIZ9ULn3vtgl9FP0Rx3wIhALu%2FhL2s0dm5I2ilUV7TKijSKqc0ds5FlZfDYr6bZde%2BKv8DCHoQABoMNjM3NDIzMTgzODA1IgyrHgnuVLqtHwpYDiEq3ANAdKqdeNMyWm8YY0Asp4quVZCmwVwbk0TgZvzDK67G3OAcCigCiGzXz9hqY2%2F%2BbpvRsj8Xs1tq0ZrVqJv%2FT02qEq6nGDfigGuDO0q8nKQhPV2pSJbJwxJEO5qLBA65TcXl6pojVxZX8l3HghX6wnSNIsRkQZuSbqCSha1S%2B4Mtv35fZCFUaQG5eCYREjDEsdCl%2B0onUri9x0nm1jZ92Se3AeKe2o005dOAHZsPqeRDUFKOHd7SZZBNL1H%2B%2Bw3SiPTLztc4qX%2F5I2Ot0n3o4p0KBvGzaIpJAW%2FRb0eO1Ar%2BgMG7UQplLF3Tw4vk1DOL0BN2c%2Fax%2BAHsLDxDAbZoiRk%2FOkkDTK7rlEgZWgjAoYusCtr7WowghBYglYHulrFxGz1loE8%2FYH68oOJywoVRqaswjbbCNu6FFsZMbGrkA7Bs5gRK8xTqoUaHmini9DnsfwI5yaCZ0bX00FAp%2F5VdgRqH%2FEHF1IQ9xx1aJmLVs6BYkVAyTNi2aL5gbcDip6enDdM2qqU9Y73rrSEmm2GNbpEfYrCtQ7vxnECZ5dyHJLPMi%2FFP3trL87xQFPt7ghiIx%2BKVNQkz2aoXki6068iIUY9POJBX5rTfY%2BVdRJ%2BK3ddyTPJvPuplCaFy5Tki%2BjCLytHJBjqkAQn2YFxt853JRiWsbsFxPfSnOxGQP%2BS5GphDJZT9z7Ee%2BMe%2FbTH%2FX8r%2BpfJszfBJdPB3fDz9lEyq4MzjBbdBg8XyJIwqh7O5tTTQa8C67wGSj3thSb3I3uA5jRSwWVTEjg3NHdnVvkroprLO8t48O3UGYuBfkTHFxg%2FSXpdezndoK9bs88bqWwSpGaRxcSrTCKZh42oTLUfpH9y%2FZiGliQyF4JP9&X-Amz-Signature=c8d2c01f9987cd36bb86a39d45a4c823d0efdae11637ebbd12a535fb149466c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4TI4TE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ4eoei0HiMhNSH2Qm7otdwlIZ9ULn3vtgl9FP0Rx3wIhALu%2FhL2s0dm5I2ilUV7TKijSKqc0ds5FlZfDYr6bZde%2BKv8DCHoQABoMNjM3NDIzMTgzODA1IgyrHgnuVLqtHwpYDiEq3ANAdKqdeNMyWm8YY0Asp4quVZCmwVwbk0TgZvzDK67G3OAcCigCiGzXz9hqY2%2F%2BbpvRsj8Xs1tq0ZrVqJv%2FT02qEq6nGDfigGuDO0q8nKQhPV2pSJbJwxJEO5qLBA65TcXl6pojVxZX8l3HghX6wnSNIsRkQZuSbqCSha1S%2B4Mtv35fZCFUaQG5eCYREjDEsdCl%2B0onUri9x0nm1jZ92Se3AeKe2o005dOAHZsPqeRDUFKOHd7SZZBNL1H%2B%2Bw3SiPTLztc4qX%2F5I2Ot0n3o4p0KBvGzaIpJAW%2FRb0eO1Ar%2BgMG7UQplLF3Tw4vk1DOL0BN2c%2Fax%2BAHsLDxDAbZoiRk%2FOkkDTK7rlEgZWgjAoYusCtr7WowghBYglYHulrFxGz1loE8%2FYH68oOJywoVRqaswjbbCNu6FFsZMbGrkA7Bs5gRK8xTqoUaHmini9DnsfwI5yaCZ0bX00FAp%2F5VdgRqH%2FEHF1IQ9xx1aJmLVs6BYkVAyTNi2aL5gbcDip6enDdM2qqU9Y73rrSEmm2GNbpEfYrCtQ7vxnECZ5dyHJLPMi%2FFP3trL87xQFPt7ghiIx%2BKVNQkz2aoXki6068iIUY9POJBX5rTfY%2BVdRJ%2BK3ddyTPJvPuplCaFy5Tki%2BjCLytHJBjqkAQn2YFxt853JRiWsbsFxPfSnOxGQP%2BS5GphDJZT9z7Ee%2BMe%2FbTH%2FX8r%2BpfJszfBJdPB3fDz9lEyq4MzjBbdBg8XyJIwqh7O5tTTQa8C67wGSj3thSb3I3uA5jRSwWVTEjg3NHdnVvkroprLO8t48O3UGYuBfkTHFxg%2FSXpdezndoK9bs88bqWwSpGaRxcSrTCKZh42oTLUfpH9y%2FZiGliQyF4JP9&X-Amz-Signature=b4e79c6ef7ba2f4409ebaffeb92f5212991b5d581b1d18e48ef3080efafcfeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
