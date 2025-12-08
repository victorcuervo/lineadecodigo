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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPPKMDU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwsbFu4s9XL2bSECYElfH5P5Qv73IiEudlV%2B%2FIvkaSjAiALs9xxa5jlhKA%2F8US7veS%2B8Y0oVnQV3CWoxUSXrxiANSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqXzq4TutqA5C5ZZKtwDGkIDOlBELNypWgkhGf87dn0%2F0IC1WOmCIY%2BsClU3kgB4j9MquvDRaLT5CGoC5q7Dsi2JPZ6QnkzATz5l3eFPnqn4%2BkR7lmF2EfZqvANjsInw1cWIQECuMPcYZfajesFqgtsLE5VaX3hD2PTNbyhOHUyaS7xUhM0AobpoHOWTsugPUtkIsvVIwfQxnrfgRUf8OSpTTiLE0Ge55O1IDeTY06qhIknzBcy9xznEIxD64Ia%2BDnLcR6XjFu4MMz5dJhXKPrkWe4xXoKtuDhwPGS2qgU6O1B7Mgd0VJKkgL4cfIGsp0vL6u%2BsDyYLBmYAlX42tJx%2FecUbSb1SU9uPwXYT9G%2BpJ25DX4lvARdD3SQDoA80BzJHmWn92PqbadEt%2FmbAbQtRnpAIwR%2B3icx%2FwB0xSNLWnCFxnlMHsdJXfiwtsEkIXuxcckhTzHdvF67uVs8yC5Xl5QEemjmUspWdwiHV1tHdDxSXKqE9rZyMgZcNOLA5CCzJU%2B1jgG8N3gWLgqrcELw%2F40dbe%2B%2F7kVHTrFfoSqAeMIcbsEoBB%2FHo9CLfAbUpj9CZDQ61d47XDPf8EP9ri%2BFSDcsDr2A5v6fpRuJtHSJndavtf0NfC1qp7DyP%2F4oKZ0hK%2FmGZ92mfUDNMw5KHdyQY6pgE9jQFaKK9s16AbkWlKKdKSLOLMroGEsyWudsxFkDzuI4Tpy6S4R%2FFrZSaBQ00xpnQRBuSINrx8xUCEcYNBcxaTuPShLHjLqk70FsDymIEUL4Qvf6S1ySv3ig5%2BMlKDXVb%2FaSHRgZSNT8XUl3s3y0uVq2corbJlbrCwBS0B%2BULntSwtU3HC6ez%2F2pKnMvOQOMBNvCQZX8cTQC8mFGZtq%2BM1c7mv7lzS&X-Amz-Signature=66a7d5b0d59acc3c7ddd2302cbc2fb4c884cf6c912aec24d2ff8e048f394959e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPPKMDU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwsbFu4s9XL2bSECYElfH5P5Qv73IiEudlV%2B%2FIvkaSjAiALs9xxa5jlhKA%2F8US7veS%2B8Y0oVnQV3CWoxUSXrxiANSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqXzq4TutqA5C5ZZKtwDGkIDOlBELNypWgkhGf87dn0%2F0IC1WOmCIY%2BsClU3kgB4j9MquvDRaLT5CGoC5q7Dsi2JPZ6QnkzATz5l3eFPnqn4%2BkR7lmF2EfZqvANjsInw1cWIQECuMPcYZfajesFqgtsLE5VaX3hD2PTNbyhOHUyaS7xUhM0AobpoHOWTsugPUtkIsvVIwfQxnrfgRUf8OSpTTiLE0Ge55O1IDeTY06qhIknzBcy9xznEIxD64Ia%2BDnLcR6XjFu4MMz5dJhXKPrkWe4xXoKtuDhwPGS2qgU6O1B7Mgd0VJKkgL4cfIGsp0vL6u%2BsDyYLBmYAlX42tJx%2FecUbSb1SU9uPwXYT9G%2BpJ25DX4lvARdD3SQDoA80BzJHmWn92PqbadEt%2FmbAbQtRnpAIwR%2B3icx%2FwB0xSNLWnCFxnlMHsdJXfiwtsEkIXuxcckhTzHdvF67uVs8yC5Xl5QEemjmUspWdwiHV1tHdDxSXKqE9rZyMgZcNOLA5CCzJU%2B1jgG8N3gWLgqrcELw%2F40dbe%2B%2F7kVHTrFfoSqAeMIcbsEoBB%2FHo9CLfAbUpj9CZDQ61d47XDPf8EP9ri%2BFSDcsDr2A5v6fpRuJtHSJndavtf0NfC1qp7DyP%2F4oKZ0hK%2FmGZ92mfUDNMw5KHdyQY6pgE9jQFaKK9s16AbkWlKKdKSLOLMroGEsyWudsxFkDzuI4Tpy6S4R%2FFrZSaBQ00xpnQRBuSINrx8xUCEcYNBcxaTuPShLHjLqk70FsDymIEUL4Qvf6S1ySv3ig5%2BMlKDXVb%2FaSHRgZSNT8XUl3s3y0uVq2corbJlbrCwBS0B%2BULntSwtU3HC6ez%2F2pKnMvOQOMBNvCQZX8cTQC8mFGZtq%2BM1c7mv7lzS&X-Amz-Signature=44355184f4c4660e9e9d8e092840010866f29e08acda70e9cabfc4b7a77fe4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
