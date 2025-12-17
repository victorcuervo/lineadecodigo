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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPZJZG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERQAXuQzC6tACz1KI5vpk1Y4m4Ybd7Y5OBnJLMCFGCEAiEArPINEZ2ATUMMrcz5Ypzv2PP0pn%2BSFrz5kqglP9pbAfwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNou8HqeoLGkJr%2FuACrcA4evVF6DQ%2FIh6WM2YyueyBeWKzEntCTWQVpyx1W7ebqW78EhNzq67%2B0P4753jcPGdoa09nuGVkeb7Q8y45Hu3zy%2FxHAS4gp%2B5O%2BlWV9%2BOIsh0B2IKrv4dKWbed%2FjDJnxejmo9GU%2FtwoNasCXrBszuj0416Kt%2Bn%2BT0T4pPvRrxWeKs2LkEDB5YGiRx3uKBcohDQ7daeTJEBr%2Fjj4fRR68ZOZPLkD2hK70XgaVFC6SWfTwqPOzDa6VD5x9TP2nHsezu6Bl1bYCnFpe0zn8G5wuyJmQlXxtdI%2FpPodm4vHFIprbLaYdrqaJ3Cfxo9q%2BuhOTkXwp3ViDwNwPhUBPDagTEi3BA6g6HYHhm7n1OA17WkM5M9hkOWd7zOYUam4YqP%2BZUQ%2BL6MxeaInjCpysGI9RDtMhLinJOM%2FX8ZppWk8K3mVZVBQRFeLlcjXCEdv6bfffSDES0ANGKLjXkAWV4d3eqei7eXTjWkZZ0pZV8g%2B7sdnKjXfs1q0WJ1gTEvhIKvp%2BjAfG3roUKcmjtv7Iym27Fy2zDgAIFJZTiDn5TOCtQ1Zzubsu7Rcl3znkZBE07Tj6a%2BQxcEqS%2BgCA%2Ba2CmLY6AkmR2mB2c9TiOe0KDXKn%2F%2B1W%2BGNKYCHSQ91wCEnCMJ6DicoGOqUBZ%2B5wlM84JHrUAJblkTV1CspTzC9gzrboZVHDW%2BPP%2Bm%2FCJ0mJhQwxqoLYJX%2BD1XuicGfNHtE33hoRnOmh3t5PbL4wrhGSUXCuonkiz6fZT5DE1garIhvP3dhrWC1SkYa6xaEXbUZFlHttTTphBy3bXzx66NcqD04X6tEMcd58%2FfbwPgpYETG%2F7Kza3JKqQPz%2BXzdAQxtaDscLl%2BWhTBc35P47vHry&X-Amz-Signature=953b821f4d4f00658780f4cb672a66c8c0a7ce588e546b0afa42b9bc2b5076cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPZJZG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERQAXuQzC6tACz1KI5vpk1Y4m4Ybd7Y5OBnJLMCFGCEAiEArPINEZ2ATUMMrcz5Ypzv2PP0pn%2BSFrz5kqglP9pbAfwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNou8HqeoLGkJr%2FuACrcA4evVF6DQ%2FIh6WM2YyueyBeWKzEntCTWQVpyx1W7ebqW78EhNzq67%2B0P4753jcPGdoa09nuGVkeb7Q8y45Hu3zy%2FxHAS4gp%2B5O%2BlWV9%2BOIsh0B2IKrv4dKWbed%2FjDJnxejmo9GU%2FtwoNasCXrBszuj0416Kt%2Bn%2BT0T4pPvRrxWeKs2LkEDB5YGiRx3uKBcohDQ7daeTJEBr%2Fjj4fRR68ZOZPLkD2hK70XgaVFC6SWfTwqPOzDa6VD5x9TP2nHsezu6Bl1bYCnFpe0zn8G5wuyJmQlXxtdI%2FpPodm4vHFIprbLaYdrqaJ3Cfxo9q%2BuhOTkXwp3ViDwNwPhUBPDagTEi3BA6g6HYHhm7n1OA17WkM5M9hkOWd7zOYUam4YqP%2BZUQ%2BL6MxeaInjCpysGI9RDtMhLinJOM%2FX8ZppWk8K3mVZVBQRFeLlcjXCEdv6bfffSDES0ANGKLjXkAWV4d3eqei7eXTjWkZZ0pZV8g%2B7sdnKjXfs1q0WJ1gTEvhIKvp%2BjAfG3roUKcmjtv7Iym27Fy2zDgAIFJZTiDn5TOCtQ1Zzubsu7Rcl3znkZBE07Tj6a%2BQxcEqS%2BgCA%2Ba2CmLY6AkmR2mB2c9TiOe0KDXKn%2F%2B1W%2BGNKYCHSQ91wCEnCMJ6DicoGOqUBZ%2B5wlM84JHrUAJblkTV1CspTzC9gzrboZVHDW%2BPP%2Bm%2FCJ0mJhQwxqoLYJX%2BD1XuicGfNHtE33hoRnOmh3t5PbL4wrhGSUXCuonkiz6fZT5DE1garIhvP3dhrWC1SkYa6xaEXbUZFlHttTTphBy3bXzx66NcqD04X6tEMcd58%2FfbwPgpYETG%2F7Kza3JKqQPz%2BXzdAQxtaDscLl%2BWhTBc35P47vHry&X-Amz-Signature=9caa40421ce9902a117dd600fa8a9076b7da458edd03ec6966d6c3bf5348d278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
