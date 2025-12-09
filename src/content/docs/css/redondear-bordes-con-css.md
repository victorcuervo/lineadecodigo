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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNOJZOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCac8mYZzf%2BuvzRKcUJPO6AmGjLfuyOGfjDMbF70QuvbAIhAODY4MYlCHUMRYtdrfYWiBQL0Rr8eC5fwpHPIm3kEKzPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWuoEkqkCvKGSDV00q3AOGawq08oeetF4lHOtb6emZTPfQHugeWw%2B%2FTyWt14gpIoqabt7RISqdQJz5d6T76860BMOZ4dnF2ShQbLXLvO2ILGgTcPnP3VNh0XH%2Fo68X5YQW9rzlHqkjz0CMEjrm5J1Z5KE4aOpppIgqIkFKU89zovwEdPqju02C8GgNOPGjdslJLh8iyr8WSwXJqcjQXvUXjesFK1cThtENsdfXhupyV4Js4kSFqIWQEZABao6a1GbFbq4p0kMewZlLeiW3AP6gJ4Q5Xk7acBkADx9D2%2FPO8dgXKVM%2B1NW24d3gmyOelFuFpj%2Fxh8V4%2F8zjuNvydUKLdkdsVSj9Mg3kELgRWAIWzF3IUvw3i3%2B8azD4EhAZxgcfqIl2SAfOMwx2CMq8W4317n3w0wfusX681NqrQu1UTAuhi29NdyohqGFhdyeojzv0aH2ac3x%2BkVc%2Byn3cdZmq37LdwUxmJ2QsVklnloDjsAjm1tRL6lM0mCmsH0dnf4q58x9Ts9mjJCBgDh0LF8ZDco41A4peuyv0mMEQ78TLC%2Br0SEETt1GdB80mt0ZXOTGGMJupY5ggPcRlwE8sqJM1c8q0sbjjRP09YMVgSfVJ6wKetzPKWFdrCIsVYUkwkP8n8zWaEmMbykINJTCArt7JBjqkASydFAKF4e%2FnRZfh8PO7YulopZ0%2FlLULUYBB97nqbR%2Brm011QRpkDcbrAThsrwc84jfbRJp4DiIvNSJ551ViMQrIGLfIRdZ2UiAEkUrU9BJz6gCl208NQH4tWM06ryQqH1ts2UWNJa3KGHOKjvwLgRwYgwKS%2Fw1I2bKcxRrF%2Fbq5q2dK0e7H%2BUTP55c5PpeuRLEfbb%2F5CfSbc%2FkYMt1J5oBQmuWF&X-Amz-Signature=3bba2db02ef2175c183c3e8ca655d7b44bda56af9e996c63be4925c0ee1047d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNOJZOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCac8mYZzf%2BuvzRKcUJPO6AmGjLfuyOGfjDMbF70QuvbAIhAODY4MYlCHUMRYtdrfYWiBQL0Rr8eC5fwpHPIm3kEKzPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWuoEkqkCvKGSDV00q3AOGawq08oeetF4lHOtb6emZTPfQHugeWw%2B%2FTyWt14gpIoqabt7RISqdQJz5d6T76860BMOZ4dnF2ShQbLXLvO2ILGgTcPnP3VNh0XH%2Fo68X5YQW9rzlHqkjz0CMEjrm5J1Z5KE4aOpppIgqIkFKU89zovwEdPqju02C8GgNOPGjdslJLh8iyr8WSwXJqcjQXvUXjesFK1cThtENsdfXhupyV4Js4kSFqIWQEZABao6a1GbFbq4p0kMewZlLeiW3AP6gJ4Q5Xk7acBkADx9D2%2FPO8dgXKVM%2B1NW24d3gmyOelFuFpj%2Fxh8V4%2F8zjuNvydUKLdkdsVSj9Mg3kELgRWAIWzF3IUvw3i3%2B8azD4EhAZxgcfqIl2SAfOMwx2CMq8W4317n3w0wfusX681NqrQu1UTAuhi29NdyohqGFhdyeojzv0aH2ac3x%2BkVc%2Byn3cdZmq37LdwUxmJ2QsVklnloDjsAjm1tRL6lM0mCmsH0dnf4q58x9Ts9mjJCBgDh0LF8ZDco41A4peuyv0mMEQ78TLC%2Br0SEETt1GdB80mt0ZXOTGGMJupY5ggPcRlwE8sqJM1c8q0sbjjRP09YMVgSfVJ6wKetzPKWFdrCIsVYUkwkP8n8zWaEmMbykINJTCArt7JBjqkASydFAKF4e%2FnRZfh8PO7YulopZ0%2FlLULUYBB97nqbR%2Brm011QRpkDcbrAThsrwc84jfbRJp4DiIvNSJ551ViMQrIGLfIRdZ2UiAEkUrU9BJz6gCl208NQH4tWM06ryQqH1ts2UWNJa3KGHOKjvwLgRwYgwKS%2Fw1I2bKcxRrF%2Fbq5q2dK0e7H%2BUTP55c5PpeuRLEfbb%2F5CfSbc%2FkYMt1J5oBQmuWF&X-Amz-Signature=cd0917d6c23e35d6ded229ea717968b40d40ceef1bf353d95b8089bb207b4ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
