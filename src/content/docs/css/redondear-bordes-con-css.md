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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZADTKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSFSRRJ3qkZMtCI14N8sYdBxOdUBQ%2FCuXYQxmQRVxOgAiAdMDY1ESuxoztnjdr0jPHqg2LqUZXpe0Um4jMwondw2yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMbJw04fIjiAmsOfExKtwDKZprA%2BUWURdeEoYR5AABko8AcszSRFK1TQ9uyFnqEJMvWe2E9lPeoeXjGVe815kcDzf4PNYa67udeNImyUUpHIlDuidUSTW9J1r4CzGI%2FAOxDbRqhmb7hbVdirvj2NR%2FMfnSz0pr3r0YL1hBtLYZBWOzJdL8XVeT9RaZglhfx0BTxhz37gJMJn6oOVpS5aK7J9d0vHxgZ3vM6tcrT5XQ%2Be31xvIe7DWsGztPU1yoRbERWo5ZASbZ2fE8J7TxQ%2FAUyveoX9Xl7oSa1a1gTB7Q8MMPCagZqdb2D9mNariLlFByWNlxqzCi5A3hWK9TpWi7wxDu%2FozMIg0AFr8uGnckyLsU6S3MBcqBsMHE%2BazeAqgCnWpc03IZzydSUE5V5laXS2ffDQy07rmKTCgTO0PTys2GbdJBww8FdwE3mLN1s9jd7yZyQRdQHpttJLvgU4fJhVLuCVnsjSrGzJhWoTW3MmPPvP0DLNWTUO8VV9%2BlsRAs0I5YXVVLp8by9xayBB%2FMwNSIKwi7NHWrLPVKlmFmbr6u74t0NIVhtIkrklyFbo%2F%2BO%2BHGfE%2FoU3zaEe8BjE0Aii3ONKBCgKjZmxVpjN5rhYfUTXV9VpHTS4e2LlvE%2FgCitNImtfbhlcTpEVQwtP3OyQY6pgFFLyhQn4i0g3ShstzMtwYcyNLXFFdsw2ZT7AtWiAo58IaiepS4xOMNv7hJOauCM2qVmzkAb3Zodmu2BZLNk60RxRGGI%2BN8i0yQ4VyXySijpmoHhe8rwTXSQ1VGqqrtZ%2FyKFCljqQV98eud3HsJNMleemIlIG35An0HvuwoQOimq%2FHvKoDtQnPCusOeL6JwYvzyiZRfe3kPwsoqlOrGJcNegCMGZ1fj&X-Amz-Signature=ff03fc7c771a24683ff5492f82ecb8b672b3faefdfe3a07f529c4dae4a721616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZADTKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSFSRRJ3qkZMtCI14N8sYdBxOdUBQ%2FCuXYQxmQRVxOgAiAdMDY1ESuxoztnjdr0jPHqg2LqUZXpe0Um4jMwondw2yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMbJw04fIjiAmsOfExKtwDKZprA%2BUWURdeEoYR5AABko8AcszSRFK1TQ9uyFnqEJMvWe2E9lPeoeXjGVe815kcDzf4PNYa67udeNImyUUpHIlDuidUSTW9J1r4CzGI%2FAOxDbRqhmb7hbVdirvj2NR%2FMfnSz0pr3r0YL1hBtLYZBWOzJdL8XVeT9RaZglhfx0BTxhz37gJMJn6oOVpS5aK7J9d0vHxgZ3vM6tcrT5XQ%2Be31xvIe7DWsGztPU1yoRbERWo5ZASbZ2fE8J7TxQ%2FAUyveoX9Xl7oSa1a1gTB7Q8MMPCagZqdb2D9mNariLlFByWNlxqzCi5A3hWK9TpWi7wxDu%2FozMIg0AFr8uGnckyLsU6S3MBcqBsMHE%2BazeAqgCnWpc03IZzydSUE5V5laXS2ffDQy07rmKTCgTO0PTys2GbdJBww8FdwE3mLN1s9jd7yZyQRdQHpttJLvgU4fJhVLuCVnsjSrGzJhWoTW3MmPPvP0DLNWTUO8VV9%2BlsRAs0I5YXVVLp8by9xayBB%2FMwNSIKwi7NHWrLPVKlmFmbr6u74t0NIVhtIkrklyFbo%2F%2BO%2BHGfE%2FoU3zaEe8BjE0Aii3ONKBCgKjZmxVpjN5rhYfUTXV9VpHTS4e2LlvE%2FgCitNImtfbhlcTpEVQwtP3OyQY6pgFFLyhQn4i0g3ShstzMtwYcyNLXFFdsw2ZT7AtWiAo58IaiepS4xOMNv7hJOauCM2qVmzkAb3Zodmu2BZLNk60RxRGGI%2BN8i0yQ4VyXySijpmoHhe8rwTXSQ1VGqqrtZ%2FyKFCljqQV98eud3HsJNMleemIlIG35An0HvuwoQOimq%2FHvKoDtQnPCusOeL6JwYvzyiZRfe3kPwsoqlOrGJcNegCMGZ1fj&X-Amz-Signature=2405bbc849e1b6e36cbee8554667d39b9c9e42fd8d5346bedb6356b266a0324d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
