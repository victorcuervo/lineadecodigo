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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLVL26H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbUco2oZWpzV4LfNXmuON2LaZsVoex%2FRk57sX5BfCjbAiB%2B%2BCjwg1w2z346V%2FQO1eb0OgXzL0uniTT%2Bve2pfncNRyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJ7AOJcA9TejH3fAKtwDJMCHjSYRjhM13fEn57SlMbbIOPl0Clb6581jFnlOIBciy0cFDJt7b77TeBR0LxnNwW4j2ABel%2FyGSHvmbhif4VYHUEPd23RzKYqJw6QiMzfia3AHp22JhywNH6ixGmlzXbyP1HHvAy2xBeCkWTxLNfh35NFw4VH8ZNnckatljSioi9wCCZMg%2F2VG0PjtgrK%2BaXIUqDJIiHssGjeqU62R9M7Lv8krgL5WC2idp%2FntK3jvX1v%2Fglu8F2nH0mFKAZ3RGGvusdA4lhNqfAaKWZqs83bznx7hB7JdwZkSnaPKRFGCVAm3wgZOcZrEiTCTvz6%2BXQyzZ92Rcl8N3HcUUX85EMxHgWX1wXXW5DEHBnI8p7utcn0IQv%2FnysbYikk3A%2BIoPObF%2BJ%2FRtgzSandUu0pTJ9dNlkT2Hk74EBDgtqU8SHH5T7CMc3q8Xc2Eb6FfAbyDt4mO5MQhDGaBlORWLCI6%2Fh5Nv24z8N2NeDbKBA0go9Ggb6HYCq8xYVGT3uyAPw%2BX9bZ0j3JEqVgAR90sEdxnLzJRTn1mHaynmbq%2BgrM52FjWa26DKfx8lQ5RKkZcwUn9t7pgIhTe7vEWKJG9zOoOGDRhS5uyvZQVO%2BEHOQr8P0rUCOHNUpP9Bnlj2YYwhajXyQY6pgFLPJ9ttlc2Tunn43GnTO0o8H%2BKcXIp8HXrFRMHU6YeFh8%2FO0S169%2BXaSecpJb%2BDqIBaQAJdOCUOINF%2BMp5YryfK1Koi%2B3ljFjIabl07GIUh3TcTjS%2BIUppmY6q733GZVmDBk%2B%2BLFUz1LQOVMJYGXf08aHz0btMW8%2F0fF5wmdJ919dLBM3mE9B2MbkGdstZ8wEl4qPO56AsIBDXClGog4p4QzL3yTC3&X-Amz-Signature=4b564ab9ab4bce5b3686169a05d945be6696176e4e77d74e3cded4eb96d6d88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLVL26H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbUco2oZWpzV4LfNXmuON2LaZsVoex%2FRk57sX5BfCjbAiB%2B%2BCjwg1w2z346V%2FQO1eb0OgXzL0uniTT%2Bve2pfncNRyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJ7AOJcA9TejH3fAKtwDJMCHjSYRjhM13fEn57SlMbbIOPl0Clb6581jFnlOIBciy0cFDJt7b77TeBR0LxnNwW4j2ABel%2FyGSHvmbhif4VYHUEPd23RzKYqJw6QiMzfia3AHp22JhywNH6ixGmlzXbyP1HHvAy2xBeCkWTxLNfh35NFw4VH8ZNnckatljSioi9wCCZMg%2F2VG0PjtgrK%2BaXIUqDJIiHssGjeqU62R9M7Lv8krgL5WC2idp%2FntK3jvX1v%2Fglu8F2nH0mFKAZ3RGGvusdA4lhNqfAaKWZqs83bznx7hB7JdwZkSnaPKRFGCVAm3wgZOcZrEiTCTvz6%2BXQyzZ92Rcl8N3HcUUX85EMxHgWX1wXXW5DEHBnI8p7utcn0IQv%2FnysbYikk3A%2BIoPObF%2BJ%2FRtgzSandUu0pTJ9dNlkT2Hk74EBDgtqU8SHH5T7CMc3q8Xc2Eb6FfAbyDt4mO5MQhDGaBlORWLCI6%2Fh5Nv24z8N2NeDbKBA0go9Ggb6HYCq8xYVGT3uyAPw%2BX9bZ0j3JEqVgAR90sEdxnLzJRTn1mHaynmbq%2BgrM52FjWa26DKfx8lQ5RKkZcwUn9t7pgIhTe7vEWKJG9zOoOGDRhS5uyvZQVO%2BEHOQr8P0rUCOHNUpP9Bnlj2YYwhajXyQY6pgFLPJ9ttlc2Tunn43GnTO0o8H%2BKcXIp8HXrFRMHU6YeFh8%2FO0S169%2BXaSecpJb%2BDqIBaQAJdOCUOINF%2BMp5YryfK1Koi%2B3ljFjIabl07GIUh3TcTjS%2BIUppmY6q733GZVmDBk%2B%2BLFUz1LQOVMJYGXf08aHz0btMW8%2F0fF5wmdJ919dLBM3mE9B2MbkGdstZ8wEl4qPO56AsIBDXClGog4p4QzL3yTC3&X-Amz-Signature=ea8c20b36784a5adf3eab2e68a89d93fab5048c84bbbc0ffef4425e0f316a4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
