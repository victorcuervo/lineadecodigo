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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPXEO6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYHQ954e0EVVPj2D5mGDs%2B%2BVa0WPlN9S53DY%2FANb6bYAiAYePsyAVHLn5qSSxh3SL%2BRSmiOc33fUpdEriht4aqChyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03KYgDe%2BfPsGJu8iKtwDskOg5zl5c8t6ENYvVjzQ7U1aZFFxh7aeQ%2BpGwGgVEv%2Biq5NIJv186MEpVgHcAvsdU91r%2Botv1H7uZ21xtiH1emuIFB0r8gSAOMuJPAgYCz51UMFrcPqd015LqRSQ0WrmsjtSIsCczPbARHREFBOeQt8YTEE6lAuZApP0cRob5s5ki3Op09EFzntg7hAX3mJ2UvTa1BFRn3QAF8qk1UyLQL0LSswbUa04I26OaXCDdvwnHyo79wMvyaWW%2ByiLJAwchh0S39mTWHojMZv9R5EQ56wled3pji9mL%2Fy3idsYKA4kcIfByxLzpfLCx1F0A4IfOZ00q9LZgtVnWDCuCVo455Xo9gblrkpqDN6iyfycubOTnFZAte9S5x%2B%2Fu5E9vKMhAGJl9%2FRzmV3FN4PyLlO%2Bgf95vU8yOGJ7%2FG7ScVfpYrfd0i5BDrq15l1Ji4nQbJ6AAs0TjOYQHIoF4ZuDoh4q%2BTm4Xia1Cp21jYxA2X1qIZO3Yv%2BW5N13aKO2ukswj5ak9dGOfPOmkSDFJuE9QXHomZn%2BiafnsbA%2FwiPzqauLi%2BkBbPC%2FWDHCNVAd52xb1XDSEWLY2iwyf5vTJDse%2BWIGzGKPvDa4HrnTWZ8HDbTlkT%2F2437RN7jC03KMhdswkO7ZyQY6pgGF7VqVzJlnuYfAvtdXOJ2PVMSpcqE79hyfoEQUh4k8p4S3Zkpl8NdkAM3nSL4%2Fzvv%2BNWbIdl5%2F%2F50emIJX4Fx%2BtCslcz78M7Kv3O8gAkWFugcGlsde%2FpBpoeNr313slN6PHk8sMXx5Z%2FlmBNQY2hgQKAJI03O1v0rMnAC779fyyyVPSts2HNL1jaWDoKjeuYMYYw8IZpNrh8VfWD7X23eVYLcEoGv5&X-Amz-Signature=d15d9630ef18a83fa18f300dc41a78c51032d0d22d41f986ef978f42a686ec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPXEO6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYHQ954e0EVVPj2D5mGDs%2B%2BVa0WPlN9S53DY%2FANb6bYAiAYePsyAVHLn5qSSxh3SL%2BRSmiOc33fUpdEriht4aqChyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03KYgDe%2BfPsGJu8iKtwDskOg5zl5c8t6ENYvVjzQ7U1aZFFxh7aeQ%2BpGwGgVEv%2Biq5NIJv186MEpVgHcAvsdU91r%2Botv1H7uZ21xtiH1emuIFB0r8gSAOMuJPAgYCz51UMFrcPqd015LqRSQ0WrmsjtSIsCczPbARHREFBOeQt8YTEE6lAuZApP0cRob5s5ki3Op09EFzntg7hAX3mJ2UvTa1BFRn3QAF8qk1UyLQL0LSswbUa04I26OaXCDdvwnHyo79wMvyaWW%2ByiLJAwchh0S39mTWHojMZv9R5EQ56wled3pji9mL%2Fy3idsYKA4kcIfByxLzpfLCx1F0A4IfOZ00q9LZgtVnWDCuCVo455Xo9gblrkpqDN6iyfycubOTnFZAte9S5x%2B%2Fu5E9vKMhAGJl9%2FRzmV3FN4PyLlO%2Bgf95vU8yOGJ7%2FG7ScVfpYrfd0i5BDrq15l1Ji4nQbJ6AAs0TjOYQHIoF4ZuDoh4q%2BTm4Xia1Cp21jYxA2X1qIZO3Yv%2BW5N13aKO2ukswj5ak9dGOfPOmkSDFJuE9QXHomZn%2BiafnsbA%2FwiPzqauLi%2BkBbPC%2FWDHCNVAd52xb1XDSEWLY2iwyf5vTJDse%2BWIGzGKPvDa4HrnTWZ8HDbTlkT%2F2437RN7jC03KMhdswkO7ZyQY6pgGF7VqVzJlnuYfAvtdXOJ2PVMSpcqE79hyfoEQUh4k8p4S3Zkpl8NdkAM3nSL4%2Fzvv%2BNWbIdl5%2F%2F50emIJX4Fx%2BtCslcz78M7Kv3O8gAkWFugcGlsde%2FpBpoeNr313slN6PHk8sMXx5Z%2FlmBNQY2hgQKAJI03O1v0rMnAC779fyyyVPSts2HNL1jaWDoKjeuYMYYw8IZpNrh8VfWD7X23eVYLcEoGv5&X-Amz-Signature=20fc4c625e372fa95b02d1f916901ff888f642945dbc2efd7edf0488eaa84340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
