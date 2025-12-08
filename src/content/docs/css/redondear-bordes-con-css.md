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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHVA2VF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMq0JxRhOg477Q32G%2BVGku%2BiEjeUXzfOiBKdXhJuArLAIhAKAwCnwaP619zFTgd0THv6pGGDJLNdO0UqPuqHb0Q28JKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw23MoEfquoDNuyuJ8q3APrjhkXMY%2BvT1L3MNeKWgkqPpKuz1mornQVgRtR8tKH6LQ7VhpH0WZpbvR0K6xUgB8zT1TA7x2fE2%2BGfpEOm8BzSTZG6OvfQEVqKf5NXkVpwjPONT8Oi332Jq1fSPCFrSAz%2BGX32lAidaqAzcGx5AB6%2BOZ467q29J802BiPoU0F1FLl82aWUCot2SoGvn7LpmfRk%2B8CFTl3o1rjaAYyPKbpDchOFqEWx6ChSjnhXUth9xr%2BUMIOU7m7419mNNhCmFO4wCak6Jlx4ZMFcC5Yo%2FWvAEqgRwWuCaOyJNVrVjR2paDOhxkQXkAIcezy4D0Uiu5PojmzI2VfZdyquQYQj%2BEeDZMrlSSMgNY6tTRbE%2Fkw6sV2mS%2BSFZvzSwZJPQdrFgIkYjsXoFQBsYTNP7osCVvBJI3eerLIeOXeX1OUOZDymKYsM2qd833LVCoAIguAA6DaEmAFAte653tuxylAMJ9WtR1pOduXIMUBHADXJZ8zJrsql%2B%2FDxw2WXzTX7ncP4b27KwVie66TLR4a8UMEsFeSZoRylCjdv3yxMwTHYJPRnA7N7E4fuCnt7qIqTIRewwBMnb7b8%2BEk2g4ssij0B7PCZQ%2BaJkg%2BfI6RDWwgHnotaPnb%2Fw%2FNN2hJv%2BmU3TDYs9zJBjqkAb5S6xYgXAXeyA2rGWWUpE4dvZIr%2Fnad7j3a5sN7L6MvO%2BFa8N3GBxtIZZ%2F%2FfYGAHSCP2luAEwNueInaLsf%2BdMKjnXvmHxNfWhjSBmYuD7a4pPjvPcHFsyB12TpkCveE03yf8hCef3ZEeVmqMdFkvaiBr4%2FwOpcXR0p1DBc0c27gKrZGHdF3emOARgq3%2FjMtBvCXxH8wMITJybbZN33uRk1MB1ZP&X-Amz-Signature=b44d8bb61957464cdac7409abb3f58043fd4f21dee6476fd6cd6e4a126fc9cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHVA2VF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMq0JxRhOg477Q32G%2BVGku%2BiEjeUXzfOiBKdXhJuArLAIhAKAwCnwaP619zFTgd0THv6pGGDJLNdO0UqPuqHb0Q28JKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw23MoEfquoDNuyuJ8q3APrjhkXMY%2BvT1L3MNeKWgkqPpKuz1mornQVgRtR8tKH6LQ7VhpH0WZpbvR0K6xUgB8zT1TA7x2fE2%2BGfpEOm8BzSTZG6OvfQEVqKf5NXkVpwjPONT8Oi332Jq1fSPCFrSAz%2BGX32lAidaqAzcGx5AB6%2BOZ467q29J802BiPoU0F1FLl82aWUCot2SoGvn7LpmfRk%2B8CFTl3o1rjaAYyPKbpDchOFqEWx6ChSjnhXUth9xr%2BUMIOU7m7419mNNhCmFO4wCak6Jlx4ZMFcC5Yo%2FWvAEqgRwWuCaOyJNVrVjR2paDOhxkQXkAIcezy4D0Uiu5PojmzI2VfZdyquQYQj%2BEeDZMrlSSMgNY6tTRbE%2Fkw6sV2mS%2BSFZvzSwZJPQdrFgIkYjsXoFQBsYTNP7osCVvBJI3eerLIeOXeX1OUOZDymKYsM2qd833LVCoAIguAA6DaEmAFAte653tuxylAMJ9WtR1pOduXIMUBHADXJZ8zJrsql%2B%2FDxw2WXzTX7ncP4b27KwVie66TLR4a8UMEsFeSZoRylCjdv3yxMwTHYJPRnA7N7E4fuCnt7qIqTIRewwBMnb7b8%2BEk2g4ssij0B7PCZQ%2BaJkg%2BfI6RDWwgHnotaPnb%2Fw%2FNN2hJv%2BmU3TDYs9zJBjqkAb5S6xYgXAXeyA2rGWWUpE4dvZIr%2Fnad7j3a5sN7L6MvO%2BFa8N3GBxtIZZ%2F%2FfYGAHSCP2luAEwNueInaLsf%2BdMKjnXvmHxNfWhjSBmYuD7a4pPjvPcHFsyB12TpkCveE03yf8hCef3ZEeVmqMdFkvaiBr4%2FwOpcXR0p1DBc0c27gKrZGHdF3emOARgq3%2FjMtBvCXxH8wMITJybbZN33uRk1MB1ZP&X-Amz-Signature=eb765a8d5402d4cbc05e955b3e530a663049c2403b73a8114ba7e8ea5bf3ab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
