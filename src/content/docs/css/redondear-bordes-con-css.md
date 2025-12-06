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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLMCRSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB7r%2F%2FPMdfCFHfRWZvL9FNfOBSGV9mhuuZa9zmiixPiAiAaGKIar1zT8Xhf810JPUi606nwwChwPysZ9rYo9v7Ihyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMnzfINE2dY2gHtXb5KtwDZW0gsK8nHmlwa2Q%2Fo2Yj4dY5o281WKNFBXQJZYfPyRwSelFLmS2Kz5gNGTpzhhCRFt14lH0UlQvZBsKv3G5qH8XsgVhklxyRpA04IpqfWUIgzTCkSPgj%2B%2FE5I%2BJeLYxvYPZNdOkulCvJkt1%2FcxGQhXZZC8alTFOjn1bP%2BynfhQbXZHPj8DtVcdueOkCCV6BtFWOfEUNKyHz0C9xldACvnIe1Y71ERIeJlMDLOZgKc1PppasJfBK%2Fw40jYoLhai85X1b%2Bkop4Lmu03Zwr0%2F0W5C7xGHhV2svJ%2F06FaB0AmdKYpVgflYmRhJunZ%2F%2FJWz9iLjB1K0ii9LaIpu9MPXyPvU%2FiggE5gf8CY%2BZCxiK1nO5Al%2FwrezSS7v%2B7%2BmsgUIFdhoxs%2BU7odHGvAV0Z4%2Bk0VHpEFr7vml8m%2FfwN%2FTpTiD6FD5CbzJndq0yjvrhXZf9j2wp34IeyB7mgMEQ3FuJHLINztGvH%2FHyKM%2BCwFo3E7YJ7UJhacMDmyYM2xrU4xuk%2FDucmxWSLCvD%2Bxh4m0MW2wlc1LG1CyeT6VPSuC9U0sRY%2FmOHE%2FghV%2BanQcpUd2nHmZCBKGebKZdnvPEPl6Bx6h%2BJ79VuVa6wmuJ6k6WJC3Vw9RtpRs%2FAWUbhbP%2BUwpNTSyQY6pgFgz35n0XNLykZq22bHJKobdxVbDylLfEVQ4G4aiPp7XYwZmyAmkqRl6bbA6exJRaQhD7yt1EMU92x4kmSAGsGyKH96XvC13kwRohOkzJT3wkLQWvlYTbgzo29BUANbZgwjAjx5cF17YwvUwQ8T92Q4EMVxcuRX6UiSpTspaeiZvoYlPUqQL07QynbLv9j0qi1AU%2FQgM4sByzTRMWO1QcKTnWfXA2Na&X-Amz-Signature=6361cf50daba405f534c16b922a12965fea3e2ff2e28c3389350ca9670940f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLMCRSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB7r%2F%2FPMdfCFHfRWZvL9FNfOBSGV9mhuuZa9zmiixPiAiAaGKIar1zT8Xhf810JPUi606nwwChwPysZ9rYo9v7Ihyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMnzfINE2dY2gHtXb5KtwDZW0gsK8nHmlwa2Q%2Fo2Yj4dY5o281WKNFBXQJZYfPyRwSelFLmS2Kz5gNGTpzhhCRFt14lH0UlQvZBsKv3G5qH8XsgVhklxyRpA04IpqfWUIgzTCkSPgj%2B%2FE5I%2BJeLYxvYPZNdOkulCvJkt1%2FcxGQhXZZC8alTFOjn1bP%2BynfhQbXZHPj8DtVcdueOkCCV6BtFWOfEUNKyHz0C9xldACvnIe1Y71ERIeJlMDLOZgKc1PppasJfBK%2Fw40jYoLhai85X1b%2Bkop4Lmu03Zwr0%2F0W5C7xGHhV2svJ%2F06FaB0AmdKYpVgflYmRhJunZ%2F%2FJWz9iLjB1K0ii9LaIpu9MPXyPvU%2FiggE5gf8CY%2BZCxiK1nO5Al%2FwrezSS7v%2B7%2BmsgUIFdhoxs%2BU7odHGvAV0Z4%2Bk0VHpEFr7vml8m%2FfwN%2FTpTiD6FD5CbzJndq0yjvrhXZf9j2wp34IeyB7mgMEQ3FuJHLINztGvH%2FHyKM%2BCwFo3E7YJ7UJhacMDmyYM2xrU4xuk%2FDucmxWSLCvD%2Bxh4m0MW2wlc1LG1CyeT6VPSuC9U0sRY%2FmOHE%2FghV%2BanQcpUd2nHmZCBKGebKZdnvPEPl6Bx6h%2BJ79VuVa6wmuJ6k6WJC3Vw9RtpRs%2FAWUbhbP%2BUwpNTSyQY6pgFgz35n0XNLykZq22bHJKobdxVbDylLfEVQ4G4aiPp7XYwZmyAmkqRl6bbA6exJRaQhD7yt1EMU92x4kmSAGsGyKH96XvC13kwRohOkzJT3wkLQWvlYTbgzo29BUANbZgwjAjx5cF17YwvUwQ8T92Q4EMVxcuRX6UiSpTspaeiZvoYlPUqQL07QynbLv9j0qi1AU%2FQgM4sByzTRMWO1QcKTnWfXA2Na&X-Amz-Signature=86c5009e80f3496fc501b17ca559cd433327b6b17a44e36601dab860f6c14785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
