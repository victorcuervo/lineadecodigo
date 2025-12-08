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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQY6GOF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ6%2FB%2BCgCePz9VYGuBa1nDIaNczRP6vZNCWCXtcZ8Q%2FAIgHsT6hjpZvKRMPrXKdKK2e52HAQldCezDlpjjRN%2FvDe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbut8uZEyonh9q0DircA85oM5pY6zm9jITkiG2rAb0CkDhlmHiD1Rq4kXEX5Lzt7VXvcsxmIADImbwDQVUOZx7yq5tg39rxJIsov%2BFIhxa4TkK8gp5ZK3dIsXwNOevgWadYFHDABKD3xSuhWI9MfdzArPpokUJyBDR9xmAIYOFC2YQFrzUhOxetCdHMYID3ezxzH1cqfjmJGQlWoDhAxBEf03H89rtV2m0uQr8C8sQCNO3bGoKh1Or1sUra%2BmtowIvwNICnWJwbbgDHihTSMExoq0h%2BD2pA4Pj3XcRlXLfX2A6TpUXCpEkxD7J%2F6TLd5qmDZVsSRyfzKjiC5x4atttUK2VpUd8SuVaV%2FVq1pq3aEAHKZ%2BmVLNpNKQdCmbf3znX%2Bx6g7vxGlXlwFDk%2FHHoUZoyClsGLw9tSucnjJ2fp9TPk5AcWNmzhGKwNnmvMwEkuRELR%2Beq0RZXtG1iDU3X7fUkbT8P4DuAh8MQEaHAEv5b9UQjXIX6OaA7v4mhnCPCjkTt67641gtH5Vl%2FwEhOOjBRO53nup0MXQw1R8RXxEOA1pSdotcuIubzNgQ7GHTonlR5NxAwBiBW37HQoAe9PfzE99zr6nbZvv51jeZsb2L09WnUrE%2BX%2BN6AVFtL4y5YalNOk18ALo%2Fjs5MOyU2ckGOqUBS6FNMGDpDtbEmNhld2EWgfTyk96VCetaUULX5814Q0fSVZcEq%2BBeYNfsj1upssA8VwS01kgPqeR0Q9OV3u%2BixzBcdSTa6IKFoSkVRmM6C28c4Y%2BEqedNWxlViKX%2FMihrOEOJUyhwHB8mEQnxdm8wmT7hN4CWvk%2FE1R604Rudr9%2F02HY8%2BmLBxFabo0Wpz5%2BNPe%2FJqhW%2B7RY%2BVz9RQHEjp%2Beg1jPt&X-Amz-Signature=004dd491fddce3c33f5e10ac6b4f1a7dc7e6466a29425d6eb2484eae7157653f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQY6GOF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ6%2FB%2BCgCePz9VYGuBa1nDIaNczRP6vZNCWCXtcZ8Q%2FAIgHsT6hjpZvKRMPrXKdKK2e52HAQldCezDlpjjRN%2FvDe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbut8uZEyonh9q0DircA85oM5pY6zm9jITkiG2rAb0CkDhlmHiD1Rq4kXEX5Lzt7VXvcsxmIADImbwDQVUOZx7yq5tg39rxJIsov%2BFIhxa4TkK8gp5ZK3dIsXwNOevgWadYFHDABKD3xSuhWI9MfdzArPpokUJyBDR9xmAIYOFC2YQFrzUhOxetCdHMYID3ezxzH1cqfjmJGQlWoDhAxBEf03H89rtV2m0uQr8C8sQCNO3bGoKh1Or1sUra%2BmtowIvwNICnWJwbbgDHihTSMExoq0h%2BD2pA4Pj3XcRlXLfX2A6TpUXCpEkxD7J%2F6TLd5qmDZVsSRyfzKjiC5x4atttUK2VpUd8SuVaV%2FVq1pq3aEAHKZ%2BmVLNpNKQdCmbf3znX%2Bx6g7vxGlXlwFDk%2FHHoUZoyClsGLw9tSucnjJ2fp9TPk5AcWNmzhGKwNnmvMwEkuRELR%2Beq0RZXtG1iDU3X7fUkbT8P4DuAh8MQEaHAEv5b9UQjXIX6OaA7v4mhnCPCjkTt67641gtH5Vl%2FwEhOOjBRO53nup0MXQw1R8RXxEOA1pSdotcuIubzNgQ7GHTonlR5NxAwBiBW37HQoAe9PfzE99zr6nbZvv51jeZsb2L09WnUrE%2BX%2BN6AVFtL4y5YalNOk18ALo%2Fjs5MOyU2ckGOqUBS6FNMGDpDtbEmNhld2EWgfTyk96VCetaUULX5814Q0fSVZcEq%2BBeYNfsj1upssA8VwS01kgPqeR0Q9OV3u%2BixzBcdSTa6IKFoSkVRmM6C28c4Y%2BEqedNWxlViKX%2FMihrOEOJUyhwHB8mEQnxdm8wmT7hN4CWvk%2FE1R604Rudr9%2F02HY8%2BmLBxFabo0Wpz5%2BNPe%2FJqhW%2B7RY%2BVz9RQHEjp%2Beg1jPt&X-Amz-Signature=ee63bf70d546fd4d278f4f1f43f1752b9e3c9a5551e16af4bce930f73f9f0d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
