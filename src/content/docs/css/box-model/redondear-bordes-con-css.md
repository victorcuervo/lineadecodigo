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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LMVHWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwi3BOP2cn3dxwBuavam%2BSCaIewHuo%2F6pR77v%2Fn9m6GwIhALACQhLrlk6R1pbRFGY%2Fx1OQXO6Qg14GI%2FVWGyko47ljKv8DCHkQABoMNjM3NDIzMTgzODA1IgyopHc58hZJXMN%2BIU4q3AOo4CIa9pVlEOQ38Ot8EOAfnc10rQrK9P22%2FNeXO%2BgfIx8pqs0jjLvv%2FsCHZp8ong%2B1b523KO8q2Aqf9dsOAThtebDhJNalIl9B9byQq76wb3wNVeuh2gMq%2FYNb6kI2hb%2BmAWkFwd9iisehrOsiAzWSHTdyDhu9EANkjnfXWVx4EgAkdaDoS5qOKWFJtaPDJ494DEO7iuJi9BXZpbmelS3%2F3MrO%2BR7KDrx2AXe4s0ihFYBm9QrKb3ltU1c1pp696vZGUYk%2F86rqP6ry3NeXKFEClCktt0rPc8U0rBx8M9eI3JHLQ1tAs%2BenT%2BfmGkVduL52j9OEuOlRyYtIrIwiRQP21rOrj53d7H0F3hxp2U2NUl5llF4HJj1zG4WFdo7ep6EthAICLjO0KkSHGobMzifbdVBgJ%2FW0iA8tZYSEdmwNG6EX9HuBAfaI0qAe2sTKMMIc6DfAODOY9OPP4Z1DOQPlEP1OkwRDwG1HpYBKbT5Fu8mE9LpfMSgLBqkmzJ7klshA21nDjZDSwXswe2%2BUM4C5XagmX6w8yli51t7VGJOYFukG3hk0PQhHnTRGtiDtSGH19mbU3pfbth7p39wQXBKftni%2B4SQoy%2FSkjpZM08lc%2FrcTlz0ctH85%2Fe8QPDDm0YnKBjqkAWpdkcndfn27N%2FRLpbO%2BkKW3RVd9H80LNTYlgk9BiHEeT0F1pSntTXmtpTGwEninSlyX7k%2Fu7Ve9ettI7EanvbdXWS862XDwCywpIqqX4FhfmpewHWuUVZQp3Q5tq0q5PRXTRcC4djQnm4hYumAS%2FYaFTHtBTXKrYYIBOm0eSfUwf%2FKzbIKvzo%2FpXizQXaWUowEy5GcyupqHmOfw7rXek760CORd&X-Amz-Signature=66ae16f4baca8de4ed9bb2a1f64fb095fbc1cba1feadada12a99ce7eac6eeec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LMVHWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwi3BOP2cn3dxwBuavam%2BSCaIewHuo%2F6pR77v%2Fn9m6GwIhALACQhLrlk6R1pbRFGY%2Fx1OQXO6Qg14GI%2FVWGyko47ljKv8DCHkQABoMNjM3NDIzMTgzODA1IgyopHc58hZJXMN%2BIU4q3AOo4CIa9pVlEOQ38Ot8EOAfnc10rQrK9P22%2FNeXO%2BgfIx8pqs0jjLvv%2FsCHZp8ong%2B1b523KO8q2Aqf9dsOAThtebDhJNalIl9B9byQq76wb3wNVeuh2gMq%2FYNb6kI2hb%2BmAWkFwd9iisehrOsiAzWSHTdyDhu9EANkjnfXWVx4EgAkdaDoS5qOKWFJtaPDJ494DEO7iuJi9BXZpbmelS3%2F3MrO%2BR7KDrx2AXe4s0ihFYBm9QrKb3ltU1c1pp696vZGUYk%2F86rqP6ry3NeXKFEClCktt0rPc8U0rBx8M9eI3JHLQ1tAs%2BenT%2BfmGkVduL52j9OEuOlRyYtIrIwiRQP21rOrj53d7H0F3hxp2U2NUl5llF4HJj1zG4WFdo7ep6EthAICLjO0KkSHGobMzifbdVBgJ%2FW0iA8tZYSEdmwNG6EX9HuBAfaI0qAe2sTKMMIc6DfAODOY9OPP4Z1DOQPlEP1OkwRDwG1HpYBKbT5Fu8mE9LpfMSgLBqkmzJ7klshA21nDjZDSwXswe2%2BUM4C5XagmX6w8yli51t7VGJOYFukG3hk0PQhHnTRGtiDtSGH19mbU3pfbth7p39wQXBKftni%2B4SQoy%2FSkjpZM08lc%2FrcTlz0ctH85%2Fe8QPDDm0YnKBjqkAWpdkcndfn27N%2FRLpbO%2BkKW3RVd9H80LNTYlgk9BiHEeT0F1pSntTXmtpTGwEninSlyX7k%2Fu7Ve9ettI7EanvbdXWS862XDwCywpIqqX4FhfmpewHWuUVZQp3Q5tq0q5PRXTRcC4djQnm4hYumAS%2FYaFTHtBTXKrYYIBOm0eSfUwf%2FKzbIKvzo%2FpXizQXaWUowEy5GcyupqHmOfw7rXek760CORd&X-Amz-Signature=18a721380a3be00754d5e3ce44bb8e1d10080cd656d5c24bc4e307a79792a32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
