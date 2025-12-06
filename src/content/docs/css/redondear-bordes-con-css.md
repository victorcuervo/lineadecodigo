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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56B2YT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhZxH8RbkGGEJLHvKWXpNOCHLdyitk0ORiQZufugBU%2FAIhAOaA%2BNe0SnWPhSglfIpAJubAq8ZjlQcH906tLbZ1SNXJKv8DCHAQABoMNjM3NDIzMTgzODA1IgwuVBsnGOCqcmcF7AAq3AO%2FFq1iiuf22ojuErUV7UB6XdfzmnWqFev6LPTb5rjkITVlwP7ut6Hng0Zb0Njy3rZN9pbuMscPMv2HwCI3%2BtqBU2XzLvss3AAc%2BSs3J1oGZcB1WFGDwmRo7s0SE%2BH8o348%2B6WeTVkfTU44GxAU8sI6eJr8grKgnqxcCGFszi%2BZTz4YpQPXlthrU6gtp304y9PQpDZYTw3GsmYVBkFd8wqjXQz2HUW%2FyInpDjC3YZ%2FAVTu%2FglJAFadjITLvbeSgf0iaBy1i43vwzA%2BLb41lTlLL0e2FruX2BLBnxQATrI6TZNl3OkqvLDoFcMIy4ckOXlONNYtBnjMc2L6ZHFTzOJ40lDlDoHNVsKafaeJvi%2BEV2PPYHUHp1vwbrf6Ft95%2FhIlqDuoerzC9tcRkJwAzX26I2hqag24aYv41gnZ5OFFXGK%2FMtLTW9CvnQNPYTYwKzKS2YBisHA0AusnvUzXqdeczv8zCIyOnsMuLQssOiOmGSf9jfC83sxVqSdYLx3xG9Fp%2BTCeJJxiYWFdx6lwxKzf%2BraUnAi%2B4cj7HCDKbogAIwo1hqY3gUHLL%2BPnuetC4GTZpwlhHmSa3GVqQaV%2B7D%2Bq7AZ8dEFkN9uBochNiRoMbAqT%2Bb1NY8SZoESb2LzDjns%2FJBjqkAWMLI2sQEnkd6n45LTeDCTJLcpmF9GigCY8612wsQbFd8LSWQ4OH7AowZv4vnboSGsY66EDThJR2t2DPm2637neSqcKR1QVcQiGt3m4UKBMTAbU5lmhJcfH9HJ58oo1sUx%2BTWLARd2WxpGb6mhFHFfqNTUFLb9mpzr%2BRZqR24lp1rrGl73kGCLpl%2F0qLMA07LWgx24WkRda0jfbgSkRkrd6cRTmG&X-Amz-Signature=9d7b72328a8b8db5bbf7a1bb79ea46e39ba59116c9a4e26b15cb53ae38eda9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56B2YT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhZxH8RbkGGEJLHvKWXpNOCHLdyitk0ORiQZufugBU%2FAIhAOaA%2BNe0SnWPhSglfIpAJubAq8ZjlQcH906tLbZ1SNXJKv8DCHAQABoMNjM3NDIzMTgzODA1IgwuVBsnGOCqcmcF7AAq3AO%2FFq1iiuf22ojuErUV7UB6XdfzmnWqFev6LPTb5rjkITVlwP7ut6Hng0Zb0Njy3rZN9pbuMscPMv2HwCI3%2BtqBU2XzLvss3AAc%2BSs3J1oGZcB1WFGDwmRo7s0SE%2BH8o348%2B6WeTVkfTU44GxAU8sI6eJr8grKgnqxcCGFszi%2BZTz4YpQPXlthrU6gtp304y9PQpDZYTw3GsmYVBkFd8wqjXQz2HUW%2FyInpDjC3YZ%2FAVTu%2FglJAFadjITLvbeSgf0iaBy1i43vwzA%2BLb41lTlLL0e2FruX2BLBnxQATrI6TZNl3OkqvLDoFcMIy4ckOXlONNYtBnjMc2L6ZHFTzOJ40lDlDoHNVsKafaeJvi%2BEV2PPYHUHp1vwbrf6Ft95%2FhIlqDuoerzC9tcRkJwAzX26I2hqag24aYv41gnZ5OFFXGK%2FMtLTW9CvnQNPYTYwKzKS2YBisHA0AusnvUzXqdeczv8zCIyOnsMuLQssOiOmGSf9jfC83sxVqSdYLx3xG9Fp%2BTCeJJxiYWFdx6lwxKzf%2BraUnAi%2B4cj7HCDKbogAIwo1hqY3gUHLL%2BPnuetC4GTZpwlhHmSa3GVqQaV%2B7D%2Bq7AZ8dEFkN9uBochNiRoMbAqT%2Bb1NY8SZoESb2LzDjns%2FJBjqkAWMLI2sQEnkd6n45LTeDCTJLcpmF9GigCY8612wsQbFd8LSWQ4OH7AowZv4vnboSGsY66EDThJR2t2DPm2637neSqcKR1QVcQiGt3m4UKBMTAbU5lmhJcfH9HJ58oo1sUx%2BTWLARd2WxpGb6mhFHFfqNTUFLb9mpzr%2BRZqR24lp1rrGl73kGCLpl%2F0qLMA07LWgx24WkRda0jfbgSkRkrd6cRTmG&X-Amz-Signature=8f7e2c55c8a16ca5a9aa87865acdf3d82d10b58b4cc4a3f769edbc1789f30412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
