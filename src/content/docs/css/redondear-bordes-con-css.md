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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFYGIZHX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU8AHW%2FYqPApgBzfbg8xysVKRmqTDGZlLH6M0xPLJWSAiBq2OLWR1eSrylDU9azFUo2rwvdtsrSpT3KRPi092m%2F3ir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMKzhI7fqySBjJ8uqrKtwD8rQRnLO9HhnP5Rpy%2BxlPkIEythc66UbmGVXG34lhhSillcYncX6j0JqMGb%2BBWLLm8HhMYLpJhS9%2Bw3Xd7NTuPzBuBRYQELAXs6iYpEf1s4y5KZ1r2cQwKDWOlW1b6drkYUj1ul6Tt7JnsJTGojXYaMyHFXyt3luTsd9avVYBSMa6DagE8QiT6oDCsE5d6UuB68Q1FTC2IVNt9e1Vs5wg6TlNXLYCbg3HK%2Fbs%2BdTbOAVcavlEPk85MlFfEthfltQrSRAFbdWbkeLbJ18FuwkABzO9wgSE9%2Fz3315LPwm3A0vgeMf9sJVFsl7EYKE8sHvXKh13RXE1rXqqrSK7YHbnw8ag5jZzKJZ7C7fjVyeXCSZTcweUfhgDnLSZnIhyF%2BbBhf80ZDoi8vo8VyDiSjHnMaYwnqrC6%2Bm7niRAXlByPuWcZ%2FB2jdvLGU33Ae7InIxHA2mML3pUdQfm6FVooBDdEd2NJd1t6yQUfNVuDdzt%2Fm%2FZ%2FxWBeXZbvWxVGnhBDAJgWIz%2BfvnO1OaIQEnxrJXdTYIyWLfYTtKn30aOozRY2FdADaSP5f7GSdzIhvBXCstDndboNSv2rlFRatpv75rl6ppBO6UCvdIl3BtXXMMGJdGRMqPnBEpOicIMJYgwvYzIyQY6pgEaWyyRsYL2E6WnNEWTOpGi%2FMm1pR0mIelB%2BRMeK%2FCl2snTt6RzEwg96UQdfMGX03z3HLOet8F9SvUgeqxSXXomcNaQoy3ztXMqj7GOXQTdiSxoepHuiyNBzMT3KFK76ROaIwt%2FAHLPXrTCey5yeU6JyjB2dof3tgoWG92t8%2B379Fo%2BvqaPeNydulR5SV5keDZGWy3%2BoD1lmHoCQX2jZ1aKyjSLrid5&X-Amz-Signature=5ebf10dc3f7bb7f0fac13ab91f1130014f68f3bfcbfef54c475ef2cb6b9524b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFYGIZHX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU8AHW%2FYqPApgBzfbg8xysVKRmqTDGZlLH6M0xPLJWSAiBq2OLWR1eSrylDU9azFUo2rwvdtsrSpT3KRPi092m%2F3ir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMKzhI7fqySBjJ8uqrKtwD8rQRnLO9HhnP5Rpy%2BxlPkIEythc66UbmGVXG34lhhSillcYncX6j0JqMGb%2BBWLLm8HhMYLpJhS9%2Bw3Xd7NTuPzBuBRYQELAXs6iYpEf1s4y5KZ1r2cQwKDWOlW1b6drkYUj1ul6Tt7JnsJTGojXYaMyHFXyt3luTsd9avVYBSMa6DagE8QiT6oDCsE5d6UuB68Q1FTC2IVNt9e1Vs5wg6TlNXLYCbg3HK%2Fbs%2BdTbOAVcavlEPk85MlFfEthfltQrSRAFbdWbkeLbJ18FuwkABzO9wgSE9%2Fz3315LPwm3A0vgeMf9sJVFsl7EYKE8sHvXKh13RXE1rXqqrSK7YHbnw8ag5jZzKJZ7C7fjVyeXCSZTcweUfhgDnLSZnIhyF%2BbBhf80ZDoi8vo8VyDiSjHnMaYwnqrC6%2Bm7niRAXlByPuWcZ%2FB2jdvLGU33Ae7InIxHA2mML3pUdQfm6FVooBDdEd2NJd1t6yQUfNVuDdzt%2Fm%2FZ%2FxWBeXZbvWxVGnhBDAJgWIz%2BfvnO1OaIQEnxrJXdTYIyWLfYTtKn30aOozRY2FdADaSP5f7GSdzIhvBXCstDndboNSv2rlFRatpv75rl6ppBO6UCvdIl3BtXXMMGJdGRMqPnBEpOicIMJYgwvYzIyQY6pgEaWyyRsYL2E6WnNEWTOpGi%2FMm1pR0mIelB%2BRMeK%2FCl2snTt6RzEwg96UQdfMGX03z3HLOet8F9SvUgeqxSXXomcNaQoy3ztXMqj7GOXQTdiSxoepHuiyNBzMT3KFK76ROaIwt%2FAHLPXrTCey5yeU6JyjB2dof3tgoWG92t8%2B379Fo%2BvqaPeNydulR5SV5keDZGWy3%2BoD1lmHoCQX2jZ1aKyjSLrid5&X-Amz-Signature=cd799c60edb1455bbf9d7afabed360640bda8c458d4c0393eab27086b80312f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
