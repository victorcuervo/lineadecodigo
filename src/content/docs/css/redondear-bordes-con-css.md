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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XVZPT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCe4lz3bkbtLbhJWrIIqxmd2Uv%2FiDYNB1enznx4W5%2B4WgIhAITeV1id9hUZthV%2BhCSsM%2BKczd5gQPSUGH94eynBThxnKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEabwAIZqvVmZyN24q3AOPGA%2BQoSvkNpJm8pnruiQ31sukklcqzzoitIcKPv6kkDJfpoeXIffpmYnqwPKm94ttZSSsnLkuJAh1zKWEqIo%2FoT7zcoY9N4SBwnYfU%2FbsNfB6sz7u5YdbQOkPXFJejop42KQ8qqgpKYUH9Uw%2Bn5seGUqa3N9soO9gz%2Fbap7dEjbC9o74H097k6Oy2B%2FvhWxLsCLwc3KsD44wHt5D%2B2NKLAFx99l5ziUu01O9d80GBSyX7wIPhIMyV2OtF2SSlsgIOalo3ZDLPSIq%2F2gldFwnuzHSDkgWeN2kGhKaa9N9qlDW85ATKA98Q0lw5YVVL7cyzXyBQJtWSofq8xgvRaiz4WdmiIh12vD6Ei1DZ6DzeG2ICQep0p7Ie5PP8pzjJyS5iUhrDRzAy5AMyv%2FzyOS1YjGdljhD2w12Cz4FFbwPUI4h%2FOH9FIbU5BWbxUwaGtzV2Uie1SuDHK%2FTQKNzD%2F3tbZZtr8AlfttjwTUNFWMIoLVh4rNFQg5RxF1e1vkJS7DeiFuux%2FKAp5h1XfsitKg2qh7kyrYJwPMfnw3CeL4dzTJEHKCXpjVYri0f6xROYCKXucyh5mpY%2BazlEprcV63YPTUi0A%2FDOkd6cLfEor9J%2BpaMWQfXw7fT%2Fy7guKTDX1MPJBjqkAaaoYx6jV%2FVWMxMTmgtyLRaa%2Fp0Jhr3ImdE0urPQyvzYh8H%2FdtsOBn1VEWlNzPpA3riHMxM0m2MNLKngySxV1L6s6r2CE2QBJeT9G5jAKcp11SK0Viv0UMGP5fvWbcGq0oae5cAzMe0nKx8BTzWPpNBYhND4ir7CI6PIy4cyqEp2n1ZpCnoQapHMENPJ0v0NyHPbse5LCk%2Bd%2B2VdXiPFKVvCAkpt&X-Amz-Signature=49b5c40f393094009964bfae1b71a8ef2e7ddcf3f6ee90600929a480ae87e372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XVZPT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCe4lz3bkbtLbhJWrIIqxmd2Uv%2FiDYNB1enznx4W5%2B4WgIhAITeV1id9hUZthV%2BhCSsM%2BKczd5gQPSUGH94eynBThxnKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEabwAIZqvVmZyN24q3AOPGA%2BQoSvkNpJm8pnruiQ31sukklcqzzoitIcKPv6kkDJfpoeXIffpmYnqwPKm94ttZSSsnLkuJAh1zKWEqIo%2FoT7zcoY9N4SBwnYfU%2FbsNfB6sz7u5YdbQOkPXFJejop42KQ8qqgpKYUH9Uw%2Bn5seGUqa3N9soO9gz%2Fbap7dEjbC9o74H097k6Oy2B%2FvhWxLsCLwc3KsD44wHt5D%2B2NKLAFx99l5ziUu01O9d80GBSyX7wIPhIMyV2OtF2SSlsgIOalo3ZDLPSIq%2F2gldFwnuzHSDkgWeN2kGhKaa9N9qlDW85ATKA98Q0lw5YVVL7cyzXyBQJtWSofq8xgvRaiz4WdmiIh12vD6Ei1DZ6DzeG2ICQep0p7Ie5PP8pzjJyS5iUhrDRzAy5AMyv%2FzyOS1YjGdljhD2w12Cz4FFbwPUI4h%2FOH9FIbU5BWbxUwaGtzV2Uie1SuDHK%2FTQKNzD%2F3tbZZtr8AlfttjwTUNFWMIoLVh4rNFQg5RxF1e1vkJS7DeiFuux%2FKAp5h1XfsitKg2qh7kyrYJwPMfnw3CeL4dzTJEHKCXpjVYri0f6xROYCKXucyh5mpY%2BazlEprcV63YPTUi0A%2FDOkd6cLfEor9J%2BpaMWQfXw7fT%2Fy7guKTDX1MPJBjqkAaaoYx6jV%2FVWMxMTmgtyLRaa%2Fp0Jhr3ImdE0urPQyvzYh8H%2FdtsOBn1VEWlNzPpA3riHMxM0m2MNLKngySxV1L6s6r2CE2QBJeT9G5jAKcp11SK0Viv0UMGP5fvWbcGq0oae5cAzMe0nKx8BTzWPpNBYhND4ir7CI6PIy4cyqEp2n1ZpCnoQapHMENPJ0v0NyHPbse5LCk%2Bd%2B2VdXiPFKVvCAkpt&X-Amz-Signature=bd177d46a0d72f66d5b5a6e611f30e3e5848bc18f8bb4a18c85abc1653bb2d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
