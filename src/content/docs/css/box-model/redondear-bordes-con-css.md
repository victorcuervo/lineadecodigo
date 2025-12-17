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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKYMQH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8HAWogRP%2B8F2ppIoDaoyoix8EEVtPqIwEdbtt5Kf%2BmAiA0OQEpPv9lfcxKY7Jk7oD2ssVwPGi3ACC%2FqZnuzP33Lir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMe%2BXxQY4oVrsRWTbiKtwDIn2Wf6ZMoJs1Ix8yC5pT7A0UEl6wg%2BIiL%2FFvwHpYu5exoPMP%2FH50hwgsOOPuzdauS6b7rRXBfIMmyU36W%2BBLlcWrjgHCv5IMR7tfuq4g7vEjfE2nQDIA%2FitZp7NzUluig9WFuMQRQyx%2B5MItNXsfkjH8yxCcUQ3xYqoGYus3N8RKKjq4W7Tl%2FTq6v8QJurGdHEryBm7Lmbqws%2BEan2HJiC%2BNpd2a1MybQzAYEkd4OKDS0FF7eKTka3l0%2BMP5gHjk3E9LGztDmGYVPRKxrDqwPjlLdzEjyJnuC84PVp1Q%2FHEjvzh9ihfDlEqgdFWa8d1ZfRZUnTXnqVrS8YXVAwcYdZ%2B0CoVPqJoXcTSkWoTcEUYtKG8Q99wnOn%2B%2BrzOuHXLhwHDUtNN9wfiehxfBrcIbrW%2FnNKbu5br%2Bw3A61XW94HOSNmzFn8yxwpqX2ZbfqZVh35mcerK%2Bd6vSN9yYsC2n1u2M6l9w9pOhjABiniquof5L77lr1a8njwVk4FwNKSv5vi%2F0XjXDVI0rfh5G32nLPWgm%2F0e%2F5uyYtrx6nVyxcCuWJfQo0Q%2FMJldKVan32eeu0r%2FFB68E0zw9ew5Ah8Z6lyEzLFCaBxRNkLK%2BqxYaCD2vRIuINTQBjYn7UzUwu7GIygY6pgGNWdKf2ulA7RUOFvOR4fq%2BwQKszT4TMWbP10dnSdNLzPG9QqSbTCryh2m7uJ8Q88V1onpBRAGDUYM10PDI7CFQJ12xN8qQ4G7ZtqoeL6fVCZyYHMMjO7f8ib4Tzbk7OGFWIEhh2TBZRUf4YOWX6SY0KXkJR2B0IUTQlyPAUJ4gYaqv%2BiTOEfWqht6huMcMnFR1KYOtrrnUV4fN20nrdwsFc3Eq4jaA&X-Amz-Signature=9db97cbf09d10b144134774226fc86d3e526559ab00f0e704837df605103dcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKYMQH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8HAWogRP%2B8F2ppIoDaoyoix8EEVtPqIwEdbtt5Kf%2BmAiA0OQEpPv9lfcxKY7Jk7oD2ssVwPGi3ACC%2FqZnuzP33Lir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMe%2BXxQY4oVrsRWTbiKtwDIn2Wf6ZMoJs1Ix8yC5pT7A0UEl6wg%2BIiL%2FFvwHpYu5exoPMP%2FH50hwgsOOPuzdauS6b7rRXBfIMmyU36W%2BBLlcWrjgHCv5IMR7tfuq4g7vEjfE2nQDIA%2FitZp7NzUluig9WFuMQRQyx%2B5MItNXsfkjH8yxCcUQ3xYqoGYus3N8RKKjq4W7Tl%2FTq6v8QJurGdHEryBm7Lmbqws%2BEan2HJiC%2BNpd2a1MybQzAYEkd4OKDS0FF7eKTka3l0%2BMP5gHjk3E9LGztDmGYVPRKxrDqwPjlLdzEjyJnuC84PVp1Q%2FHEjvzh9ihfDlEqgdFWa8d1ZfRZUnTXnqVrS8YXVAwcYdZ%2B0CoVPqJoXcTSkWoTcEUYtKG8Q99wnOn%2B%2BrzOuHXLhwHDUtNN9wfiehxfBrcIbrW%2FnNKbu5br%2Bw3A61XW94HOSNmzFn8yxwpqX2ZbfqZVh35mcerK%2Bd6vSN9yYsC2n1u2M6l9w9pOhjABiniquof5L77lr1a8njwVk4FwNKSv5vi%2F0XjXDVI0rfh5G32nLPWgm%2F0e%2F5uyYtrx6nVyxcCuWJfQo0Q%2FMJldKVan32eeu0r%2FFB68E0zw9ew5Ah8Z6lyEzLFCaBxRNkLK%2BqxYaCD2vRIuINTQBjYn7UzUwu7GIygY6pgGNWdKf2ulA7RUOFvOR4fq%2BwQKszT4TMWbP10dnSdNLzPG9QqSbTCryh2m7uJ8Q88V1onpBRAGDUYM10PDI7CFQJ12xN8qQ4G7ZtqoeL6fVCZyYHMMjO7f8ib4Tzbk7OGFWIEhh2TBZRUf4YOWX6SY0KXkJR2B0IUTQlyPAUJ4gYaqv%2BiTOEfWqht6huMcMnFR1KYOtrrnUV4fN20nrdwsFc3Eq4jaA&X-Amz-Signature=a07cfdf7766d776f136a600ef2c481d9dacf619b97c44ebd969a8c01360b3399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
