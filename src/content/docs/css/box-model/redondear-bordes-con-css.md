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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBWFVRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXuufQ5lFGpwpY905NM07qr0Nvrr1BKfGw17Fa6oSgQIhAKbsk%2FvSKc9X44syVoC5e7dNl7cuUhHFY51udFsM7BthKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG5VNWP8ZK%2FBryT1Iq3ANrBPit1l7F5hG65BvlydpHeB5tzlm1h74Qg2Dd%2FNVPlD73A4e%2B%2FDP86VJCwyfv2uTtevS2BaKvkXz%2FCnfOHM4hTot4MXlBkULSRQ6YxCKenezEUIDCNdHJSAXypQhZ0sViKRvV3P6wfnyaYNjJZ7It2yGKMkF4gmrE5803KsqX4QJBlH%2FEY150aaGf5ZLuQXUg%2BD1hgvaWLRCJ06eLB%2BwSd07lwSyOkOIMm8QVpmmIwZFXfKBB4b51vHszdtpkUbQMcGPOHm9bgNXbm6PImmLmwno0VkcBSL6EfNZXSVBoELToyNX6TBBV4B%2BmIurCAH%2BSJdmOnJfketIaGsAT6G%2BwpAkFCNo8pCdEr%2FxT%2FD%2FVQcUZMHrFyr%2BWXvZLclwhN2vTyLeNUdFY%2FgqHOi0tYN%2FplXxNi6S%2B%2BhtTNtMO3p5NBb7qYZJXfB5jR9PuqrA8z6RQEJ6AHRa8OHXcd8y25gALByaI8pkcO8jN%2B7JJOtBXfmJj3sNHc%2BNY8LsWUGoSZG6S5Twncftz%2F0Cs%2BVhhbE8zWP0UkXA3g9%2BPz4UkwtJCZek5CMnu4VgOgPOv9vpC8tYdxyA2i0Kz1WoKhNJ2qv4BZYGCfy%2BswbtcPTZW%2F1%2B7cKOMauNc3o7zoCij%2FzDorYzKBjqkAf8ZBSsZJqIPUqX%2BwU7FNJPEPIYLLBO73OoY5qrdVwE7mmTnoroRxyWsJykd0xjnPhhCvZ1MEjHiFxkPEZiZFi9LL%2FkXhPvSVpKQJCl8UIzcyeH4d1eLyGbYM2XitnLyIqbdiR%2BChPjldRcPjChBCtujVEw5szQnkkHZKlSFaaPuQyynPCxNf%2BmOC3O9lLpLejoUFmr%2BAmvc%2BaEZPSEhNM73db%2Bo&X-Amz-Signature=9dd8938c19d03cede87caa6821b0845b2358e83fa6210d1767dadc7f32131a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBWFVRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXuufQ5lFGpwpY905NM07qr0Nvrr1BKfGw17Fa6oSgQIhAKbsk%2FvSKc9X44syVoC5e7dNl7cuUhHFY51udFsM7BthKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG5VNWP8ZK%2FBryT1Iq3ANrBPit1l7F5hG65BvlydpHeB5tzlm1h74Qg2Dd%2FNVPlD73A4e%2B%2FDP86VJCwyfv2uTtevS2BaKvkXz%2FCnfOHM4hTot4MXlBkULSRQ6YxCKenezEUIDCNdHJSAXypQhZ0sViKRvV3P6wfnyaYNjJZ7It2yGKMkF4gmrE5803KsqX4QJBlH%2FEY150aaGf5ZLuQXUg%2BD1hgvaWLRCJ06eLB%2BwSd07lwSyOkOIMm8QVpmmIwZFXfKBB4b51vHszdtpkUbQMcGPOHm9bgNXbm6PImmLmwno0VkcBSL6EfNZXSVBoELToyNX6TBBV4B%2BmIurCAH%2BSJdmOnJfketIaGsAT6G%2BwpAkFCNo8pCdEr%2FxT%2FD%2FVQcUZMHrFyr%2BWXvZLclwhN2vTyLeNUdFY%2FgqHOi0tYN%2FplXxNi6S%2B%2BhtTNtMO3p5NBb7qYZJXfB5jR9PuqrA8z6RQEJ6AHRa8OHXcd8y25gALByaI8pkcO8jN%2B7JJOtBXfmJj3sNHc%2BNY8LsWUGoSZG6S5Twncftz%2F0Cs%2BVhhbE8zWP0UkXA3g9%2BPz4UkwtJCZek5CMnu4VgOgPOv9vpC8tYdxyA2i0Kz1WoKhNJ2qv4BZYGCfy%2BswbtcPTZW%2F1%2B7cKOMauNc3o7zoCij%2FzDorYzKBjqkAf8ZBSsZJqIPUqX%2BwU7FNJPEPIYLLBO73OoY5qrdVwE7mmTnoroRxyWsJykd0xjnPhhCvZ1MEjHiFxkPEZiZFi9LL%2FkXhPvSVpKQJCl8UIzcyeH4d1eLyGbYM2XitnLyIqbdiR%2BChPjldRcPjChBCtujVEw5szQnkkHZKlSFaaPuQyynPCxNf%2BmOC3O9lLpLejoUFmr%2BAmvc%2BaEZPSEhNM73db%2Bo&X-Amz-Signature=2358f55fb9c4633790462f3c041e4e0dc6fe9e9d9494c7c1589e9b4f703ce5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
