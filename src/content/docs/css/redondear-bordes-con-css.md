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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DS4WPTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHwECavV6mPD9LzNBjlXDzV5pPJXweJYPSA3%2Fgu9Jpx4AiEA%2F3VjSfp2tmCoryFR1JWYVpDYprAsh7sGYV%2BuoiBu8ckq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN40QLfQLPadcFp0cSrcA5w4Yk2nyKYEGQojqWepBPqvKg%2BqyE9Lqb4eo8t8hYdesb0r4eTGN2SfH6VevzdB1yMA5jXijyjiT8VWHHx1NTre5knZtmrvrs1AJrEfYeWPJMPaiKId4WqWEKITXS%2BgnsmzQlfkub9MwE8rKZ4I%2F4BuXl4aCk3EYuOZeWylsWfePDOBnPHdDBcQ4mjN43CU%2FZGNx1gRPVoBh%2BXntCkByq18%2BZ%2BGEaiUMGmrQddRMC2csQQgYnZ%2FrmRWQzjUIgXAQ9T5gZ3T%2Fwk2VXClCkihT%2FeLpjBvpKZ0QTgCltsu9apJo3hhwjd5W3tp2pPEhFUxLuooa5jjJVS%2FmuC7vOz19mV2P9Q%2Fa26MaGO%2B2vhJkiz%2Bc6eI9I05WOliXjE3QbKWU51BT61ENarPEUrHmXbVI71okYWc2qbWseCfBxZQalF1e6eM2A2IyAwvhSggzzFy6Gvre%2BzRp3mL%2B4rT4LbYTzVg3eEyyKF3oI28QRXoUwvYOZc6UxKTWnPqomE1yUSkWOzmmoGOziQ%2FiHlODB76DIVWiWQRbW8vAg9KJokKanw2%2Bf5lk6vm36%2FnDOayNWovVJmyQTEyMmMcGYh9yzJvIwfEP%2BE4j%2BqDIiybvDLkdUZHWi94MUanzHuJ5krBMMroxMkGOqUByw2dDWirXZ0AeDowI09HzfLv6719Pg4DVpRNN88QS8K7Bwwg1z7fpQfR0lYKUrhk6SaOO%2BF1ub6LGzJX0NBiGH502NEgK9dpa5cxPxo%2Fov19o4uhmYL73EpoZvQ23YY0eUPAqiTn%2BY%2Bh%2FAK%2Bj%2B0mgOm4MWNPw2HDNlVcZwHqu1hM30I3PUVsPufBwKnBfOofzU4OtUV8awFdo5luI46UvsI4Mz2q&X-Amz-Signature=6835eb00b3a37afefc05fd72ac9b8d4040f20fd10c64dfab1cb1cbfda647a49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DS4WPTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHwECavV6mPD9LzNBjlXDzV5pPJXweJYPSA3%2Fgu9Jpx4AiEA%2F3VjSfp2tmCoryFR1JWYVpDYprAsh7sGYV%2BuoiBu8ckq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN40QLfQLPadcFp0cSrcA5w4Yk2nyKYEGQojqWepBPqvKg%2BqyE9Lqb4eo8t8hYdesb0r4eTGN2SfH6VevzdB1yMA5jXijyjiT8VWHHx1NTre5knZtmrvrs1AJrEfYeWPJMPaiKId4WqWEKITXS%2BgnsmzQlfkub9MwE8rKZ4I%2F4BuXl4aCk3EYuOZeWylsWfePDOBnPHdDBcQ4mjN43CU%2FZGNx1gRPVoBh%2BXntCkByq18%2BZ%2BGEaiUMGmrQddRMC2csQQgYnZ%2FrmRWQzjUIgXAQ9T5gZ3T%2Fwk2VXClCkihT%2FeLpjBvpKZ0QTgCltsu9apJo3hhwjd5W3tp2pPEhFUxLuooa5jjJVS%2FmuC7vOz19mV2P9Q%2Fa26MaGO%2B2vhJkiz%2Bc6eI9I05WOliXjE3QbKWU51BT61ENarPEUrHmXbVI71okYWc2qbWseCfBxZQalF1e6eM2A2IyAwvhSggzzFy6Gvre%2BzRp3mL%2B4rT4LbYTzVg3eEyyKF3oI28QRXoUwvYOZc6UxKTWnPqomE1yUSkWOzmmoGOziQ%2FiHlODB76DIVWiWQRbW8vAg9KJokKanw2%2Bf5lk6vm36%2FnDOayNWovVJmyQTEyMmMcGYh9yzJvIwfEP%2BE4j%2BqDIiybvDLkdUZHWi94MUanzHuJ5krBMMroxMkGOqUByw2dDWirXZ0AeDowI09HzfLv6719Pg4DVpRNN88QS8K7Bwwg1z7fpQfR0lYKUrhk6SaOO%2BF1ub6LGzJX0NBiGH502NEgK9dpa5cxPxo%2Fov19o4uhmYL73EpoZvQ23YY0eUPAqiTn%2BY%2Bh%2FAK%2Bj%2B0mgOm4MWNPw2HDNlVcZwHqu1hM30I3PUVsPufBwKnBfOofzU4OtUV8awFdo5luI46UvsI4Mz2q&X-Amz-Signature=2ab6e2a4a0ef42230f012b0d733afe69a232e6b84687dcbc63e520f6780ef683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
