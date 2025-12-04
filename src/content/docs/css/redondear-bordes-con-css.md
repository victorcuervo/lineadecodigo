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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3BKEWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDQyti1GgW5IfWJinUVOUuO6oIuE1Ym81Kw32Wv13dA6AiBtAJfGdrpR65D1sssNqIcyu2geETmZhVZ6zBz2OYSI9yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPlS%2F2gLd%2FrbFMAT%2FKtwDDkTr0aUZ%2F1%2BV4CpeKnCgaaAnyOIt%2F4rUKcRLtzOdXD1Ch5IpLZxYx%2FOtflKaJv92m30Wa4NtK3oju26XD0m4XWPptsPFIDsPTBa3Z%2FUkUrStxJ62fuGBCp4HaRBotj3ME4yZ7XV6K1hdlb9myoL3KzjpeOKdXmB%2FsWRKRYlTGecTVW%2BJ2l2dy3ptoV0Es5wQL9T7Vydu5P3pxZqWrsa2hdxmzt8WIBWPYghkGTo2MPGn8d7wSyhawNhqmbTuTf4J%2FUhNmvOwfQFDxOv0V2u%2FtctFNdDkJaL%2FEMfCZ%2Bg5sEyyrpQt2cAA2RX5oOK%2Ff0PYwItA%2FgIUKmWKNiAgcYLLf%2BASNiIw3tVICMGbDDXF0x3PYpXKQEW2kJoaSxZioVOVi4UBzeCYvxrVjzZorpCneY7o70oRp1IKlxjUiKDenyoHX2oaq3P8GLY5S%2FZLrdcZOF3Ix1WyuqwowDfXVWCSf1lxqUFLgYYRlXZrG8gINgHLRYnGUaJFHlvUakI%2F1YtQZPxSNDkEkAXI0S3Ukcn9vRnfI6mG8NNGJvZtHbGXPpYtqcnSlyGb10BJ31dT30kaEeNY7iuhA5ZTTqbOTb9jAJLi4ekTMzNQFrnXqOWfQQMLkeuBbJ6co0MK3Tcwh8rFyQY6pgFBlI%2BagGwl1Ckg7KYHxvEH8zCtwJG5NRbxgOguqAk3CW4himslg2VeNUEB258dCD89dwgDTC4%2F0OFs9yijBJi8MI9igy%2FSoc7fGCcFsr%2B12mkHlxBmMu71i0nSfUe5nqWL4%2Ffve1BndVFYur4dZKT%2B5XerWGq1n3ImlIxa9O%2FXl3uGpTFLuu7tnOAu56BeNtWFvOMzUDAIwlzepcoLebMzMZ7TnJWB&X-Amz-Signature=6840360cc84fc97ced41d730d5cbed96b66d6d406b367b45a4483f0020c4434c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3BKEWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDQyti1GgW5IfWJinUVOUuO6oIuE1Ym81Kw32Wv13dA6AiBtAJfGdrpR65D1sssNqIcyu2geETmZhVZ6zBz2OYSI9yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPlS%2F2gLd%2FrbFMAT%2FKtwDDkTr0aUZ%2F1%2BV4CpeKnCgaaAnyOIt%2F4rUKcRLtzOdXD1Ch5IpLZxYx%2FOtflKaJv92m30Wa4NtK3oju26XD0m4XWPptsPFIDsPTBa3Z%2FUkUrStxJ62fuGBCp4HaRBotj3ME4yZ7XV6K1hdlb9myoL3KzjpeOKdXmB%2FsWRKRYlTGecTVW%2BJ2l2dy3ptoV0Es5wQL9T7Vydu5P3pxZqWrsa2hdxmzt8WIBWPYghkGTo2MPGn8d7wSyhawNhqmbTuTf4J%2FUhNmvOwfQFDxOv0V2u%2FtctFNdDkJaL%2FEMfCZ%2Bg5sEyyrpQt2cAA2RX5oOK%2Ff0PYwItA%2FgIUKmWKNiAgcYLLf%2BASNiIw3tVICMGbDDXF0x3PYpXKQEW2kJoaSxZioVOVi4UBzeCYvxrVjzZorpCneY7o70oRp1IKlxjUiKDenyoHX2oaq3P8GLY5S%2FZLrdcZOF3Ix1WyuqwowDfXVWCSf1lxqUFLgYYRlXZrG8gINgHLRYnGUaJFHlvUakI%2F1YtQZPxSNDkEkAXI0S3Ukcn9vRnfI6mG8NNGJvZtHbGXPpYtqcnSlyGb10BJ31dT30kaEeNY7iuhA5ZTTqbOTb9jAJLi4ekTMzNQFrnXqOWfQQMLkeuBbJ6co0MK3Tcwh8rFyQY6pgFBlI%2BagGwl1Ckg7KYHxvEH8zCtwJG5NRbxgOguqAk3CW4himslg2VeNUEB258dCD89dwgDTC4%2F0OFs9yijBJi8MI9igy%2FSoc7fGCcFsr%2B12mkHlxBmMu71i0nSfUe5nqWL4%2Ffve1BndVFYur4dZKT%2B5XerWGq1n3ImlIxa9O%2FXl3uGpTFLuu7tnOAu56BeNtWFvOMzUDAIwlzepcoLebMzMZ7TnJWB&X-Amz-Signature=f3187e93f41ae93f2766e8537701859e58da5b0de9942865128f71f5cdb25a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
