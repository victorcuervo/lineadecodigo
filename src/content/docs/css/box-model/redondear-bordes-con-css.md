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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FTC2NF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxyimn0dBEwBPtwDgqHd1ZagjoqztgRS5XtypmMr9aQIgSFkFZD%2BCQWqhcuXQukil7zg0BG63%2Bx3RaJp2MAQmkygq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK%2FKAIgf80ymDNQXgCrcA5P9AzV%2FeUbTfBOHNPZ8nDt%2B%2BBljrlmmK9TdOF%2B6OtIPgBuHCES%2F5eYyCKAWP%2FGx6pmWhqpmLbCnK0b79cPAar%2Fie%2Bbf%2BkvtdFDDV08BYNxvEckiEhGpH2p%2FNVFKfiA0NAObfevEIPRDGvm%2Bfk7tlRd1dnJoMCt%2BMqfBBAojwGsDKdLMTX%2Fek1TrWpc2Pmo6hx9XGPpZ2rtEsEd26gDyxw%2FqaYpE104smTj9kp5cDpJESpUENKBAZlPYb20bZ%2B7qIoVY%2BLmDDetbfFj0CK6tpBzRtwmzr6ff75KcYheIUd92hNKtJnUqITSIKmBjBYJT3fokx8DLo4M3UcEE%2B3fGG5jDYrycKTWbFhkEIymkmmNTEfS8wIxnhjAihcHyFHAOsPXQJvHMYNq1GS2gl4mK9upOE%2FavpOH6YX9C5Sac9Vlt0nKL87JWmVd3Or4Yhld3SIdNXJawLTIVw9KsUbwgweuwNepj4n8DlGDoG%2B%2BnBOPua0rYZVBOWRgYF8SEJiqr2P9q1oGKE9IEUvTpWlYIMRmcXeKYJjnE9c%2FNrDqfShUVFz%2FA3kDSlv0jhO8CwKPflsfTvKaPLEoiHWUU1grJ5nx8MPzFZdIO2ZPw7vHIQEfHLsGCwdNJUBucOyMBMN%2FOiMoGOqUB6GlKtZ2lx3EMK%2B33P7BTSw57O7V0o86JnRclasjLP0wH8GeE0HbnnWgXDlDbqjBVdm1YlhuAhOUcj0Am1SCj28p40zZCntZUm2m9E%2FZEb51Br7eg%2Bor5XCA0v433bpXvt3xi5Qt%2BVr8rbwQHxziLXoswyPBeqdpL82J4FkllU8PZs4W5C1Rus0ijgTua93OxVmZaRC8JeB8cc4JRMgd0%2FhvdPH4E&X-Amz-Signature=4be4ebe4598490814d39dc7c2aecdf5bb1863cd8050b4744a4e1e18c1491de9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FTC2NF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxyimn0dBEwBPtwDgqHd1ZagjoqztgRS5XtypmMr9aQIgSFkFZD%2BCQWqhcuXQukil7zg0BG63%2Bx3RaJp2MAQmkygq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK%2FKAIgf80ymDNQXgCrcA5P9AzV%2FeUbTfBOHNPZ8nDt%2B%2BBljrlmmK9TdOF%2B6OtIPgBuHCES%2F5eYyCKAWP%2FGx6pmWhqpmLbCnK0b79cPAar%2Fie%2Bbf%2BkvtdFDDV08BYNxvEckiEhGpH2p%2FNVFKfiA0NAObfevEIPRDGvm%2Bfk7tlRd1dnJoMCt%2BMqfBBAojwGsDKdLMTX%2Fek1TrWpc2Pmo6hx9XGPpZ2rtEsEd26gDyxw%2FqaYpE104smTj9kp5cDpJESpUENKBAZlPYb20bZ%2B7qIoVY%2BLmDDetbfFj0CK6tpBzRtwmzr6ff75KcYheIUd92hNKtJnUqITSIKmBjBYJT3fokx8DLo4M3UcEE%2B3fGG5jDYrycKTWbFhkEIymkmmNTEfS8wIxnhjAihcHyFHAOsPXQJvHMYNq1GS2gl4mK9upOE%2FavpOH6YX9C5Sac9Vlt0nKL87JWmVd3Or4Yhld3SIdNXJawLTIVw9KsUbwgweuwNepj4n8DlGDoG%2B%2BnBOPua0rYZVBOWRgYF8SEJiqr2P9q1oGKE9IEUvTpWlYIMRmcXeKYJjnE9c%2FNrDqfShUVFz%2FA3kDSlv0jhO8CwKPflsfTvKaPLEoiHWUU1grJ5nx8MPzFZdIO2ZPw7vHIQEfHLsGCwdNJUBucOyMBMN%2FOiMoGOqUB6GlKtZ2lx3EMK%2B33P7BTSw57O7V0o86JnRclasjLP0wH8GeE0HbnnWgXDlDbqjBVdm1YlhuAhOUcj0Am1SCj28p40zZCntZUm2m9E%2FZEb51Br7eg%2Bor5XCA0v433bpXvt3xi5Qt%2BVr8rbwQHxziLXoswyPBeqdpL82J4FkllU8PZs4W5C1Rus0ijgTua93OxVmZaRC8JeB8cc4JRMgd0%2FhvdPH4E&X-Amz-Signature=e9cbcc23df5025dc307b58eda54e2fd609253b54f86f80e074c25d97a97306c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
