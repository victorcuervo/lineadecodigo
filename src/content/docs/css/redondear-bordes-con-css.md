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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZKJ54N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHU%2BTzveEv4r61jR1GxtZdgEosf%2Fp1eJU%2BS65%2BB3zC4wIhANM0ksjTNOHWtfimJikHGEOUpCB73xb7taypbJPyKjjcKv8DCHAQABoMNjM3NDIzMTgzODA1IgzbaYSzw9gIPJHginQq3AO1YNn%2F2JI9CVF2HY8ScXnsyBmp7HmiZ0Gp%2F6Ll%2Br9o5uAWjvMQ6hNpkoV6weZfXcQCLXCkSL9cdG%2BsLQT%2B%2BbEdzqpeyOaLdKUTrhHgPDVwyOwboWI4ORGlejxXxOYX%2BILNP8vK1SVL2gXwkHVd9RlvyHDe9llprCCyxIddjHQFOD4Fajpc4RsDMDqbpu%2F7jgT8n25QV2nAZptG0Vnph9V6cZVdlJHx%2Bc%2FIV2ARbmk7DdAQua8TVRiXxzSYzED393uzFf%2FgjA1E4cLek9JHVF%2BNgeglGF11LcccuHC5jKXVA853KZkspocP7V%2Bnjai1N6MsRFZNVj1peJvf5OCP6dI40MeYaV3Ho7E%2Bw2nwtwxoAxm5sDuvkRlqdUugqfPwgEE6K6Wf8ZaGXs5wacEqaeE4xB0sChMtf2iRIHpTmKZqeFBNbqSrUADy6FVMwhnbvms%2Blk2AaBgxAn5dYh5PYr7K0FCL5dpY85z88svy9krlTOsBOleA7iCKoDbid1tGh6qvSuEXhpPyLqPM9EaQVzfFUqx4n8u8wJ7hhL2ZZ8WRWiTJyL7W%2FudBSgnO204OA1dY6zBCaetHfgXYfYPTolV3Xa86frkoxPRbqj3DstIESIzK4yUeCq%2Ft1mWrgjDjns%2FJBjqkATl2UBMKVXtjvgeVyAIvWbifdKyulJGX0Yc7HH2Z4a%2F8vgFIqMIuvTXcPSepRSgqXwUb3KwFnmr1QazEn4HKhUAaaq4HDmYRl3ZQI%2BnTQAy45z03S2jru%2FY1Ct%2FaUvpm8%2BrLr7fPVtKCixium97kFb7ideviPAh3YbmVdoKWnhTF4CheMdEF%2FEqqgvzqvwzyhiNu0b5hIrWDWioUWO0jD%2B9FJAfm&X-Amz-Signature=ead27932ce8815f5f5b63fe0bb9eab650cecee0b06cd9b50f0a7858ae34ded4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZKJ54N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHU%2BTzveEv4r61jR1GxtZdgEosf%2Fp1eJU%2BS65%2BB3zC4wIhANM0ksjTNOHWtfimJikHGEOUpCB73xb7taypbJPyKjjcKv8DCHAQABoMNjM3NDIzMTgzODA1IgzbaYSzw9gIPJHginQq3AO1YNn%2F2JI9CVF2HY8ScXnsyBmp7HmiZ0Gp%2F6Ll%2Br9o5uAWjvMQ6hNpkoV6weZfXcQCLXCkSL9cdG%2BsLQT%2B%2BbEdzqpeyOaLdKUTrhHgPDVwyOwboWI4ORGlejxXxOYX%2BILNP8vK1SVL2gXwkHVd9RlvyHDe9llprCCyxIddjHQFOD4Fajpc4RsDMDqbpu%2F7jgT8n25QV2nAZptG0Vnph9V6cZVdlJHx%2Bc%2FIV2ARbmk7DdAQua8TVRiXxzSYzED393uzFf%2FgjA1E4cLek9JHVF%2BNgeglGF11LcccuHC5jKXVA853KZkspocP7V%2Bnjai1N6MsRFZNVj1peJvf5OCP6dI40MeYaV3Ho7E%2Bw2nwtwxoAxm5sDuvkRlqdUugqfPwgEE6K6Wf8ZaGXs5wacEqaeE4xB0sChMtf2iRIHpTmKZqeFBNbqSrUADy6FVMwhnbvms%2Blk2AaBgxAn5dYh5PYr7K0FCL5dpY85z88svy9krlTOsBOleA7iCKoDbid1tGh6qvSuEXhpPyLqPM9EaQVzfFUqx4n8u8wJ7hhL2ZZ8WRWiTJyL7W%2FudBSgnO204OA1dY6zBCaetHfgXYfYPTolV3Xa86frkoxPRbqj3DstIESIzK4yUeCq%2Ft1mWrgjDjns%2FJBjqkATl2UBMKVXtjvgeVyAIvWbifdKyulJGX0Yc7HH2Z4a%2F8vgFIqMIuvTXcPSepRSgqXwUb3KwFnmr1QazEn4HKhUAaaq4HDmYRl3ZQI%2BnTQAy45z03S2jru%2FY1Ct%2FaUvpm8%2BrLr7fPVtKCixium97kFb7ideviPAh3YbmVdoKWnhTF4CheMdEF%2FEqqgvzqvwzyhiNu0b5hIrWDWioUWO0jD%2B9FJAfm&X-Amz-Signature=edf62e0a619b3616c1d3365a302b2730c6c7e51dae2f78bdb1df8240a3f47b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
