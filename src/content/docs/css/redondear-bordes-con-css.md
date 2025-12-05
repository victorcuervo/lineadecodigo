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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBC4ZSG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjl1wTtjiILa0XCe4MCzKwwarjLyom6MNEs2UCNU30wAiASB7jC%2FbHJFSc0gcHyEYk4a6slOAGlKtz8VYz5Uq4ppyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMj33hPKNffBCfkTfOKtwDK%2FJgY0sKSV6yGz716uLMu3%2BOPQLWQEZfxLfyti4wcCLHfeSOVJWhtXlsxQoFTenFlgZUh7ZDK%2B4XFsRREOha9Q5iZdBzOInquMmZfQw8XuDAMTmlOCTsgl5plBIWXJ6dKqunGBp9v%2FCRwtELDn5qQDhZteXP7WyXogKunBal5hCYXYh2h2HB2Z7uaZvJiHOs%2B28fh6MS8q68rSZDXs5NVqSQDzOHqNI4RfpLo%2BaToBVY3IqIcWIHTruvXu3eTblHpm4Y61sqVSsItgfFubYrm1iOSrWr%2BpG2zwGLSeODbAOEn2d7Mqp2sWT7P4NClMVZzgdicjxTAdeFV8HwpjuzCeW15ABvip32v%2FzOVjlweIqgFaWrBu5loliHchijKARmGMA52i7karMU26xQwWFWpfxy%2FLBDcZqR2oxYf2sZkrQxH0s2m9yI360354N3x7SO6HYz6Bx0zdTgl6X5mHJ2hS6%2Bl4CiHvXn%2BmYChUHalSNZOePrdHxoEuyH9iFIqT1CEeNFZMfWiB7b1SQYkv5%2BvcbnuJeTP4y8hweqm2Z3qzFbjtAEFeLxw7KAojdXzU8Y9HNmbGpCrpw7zyEiXaUTzEiZDlFJ8kblCbviwyVoiY9YBGw8jzbvTX3yOQEw7ajKyQY6pgFMmgXqx3ogmmJEFyCifH1lF5Hu6CXWG2s1t01KbbuGH1RsdqazcZ6%2F2Vb%2F5WkhvmpUyPKWdzleUpM%2FT8fZeNAutRaGd25vt6nnYBvgdZqWyJ%2FdfweYBUVvQ8hiskGJ71rQ%2BlWQP5FYv3WOAUUupLfhs88ijNRvlP0jIArvV4j7AvlLv352dYhTN7K0AybtiEFGd5Rtno%2BkkXEbn1BEjpFM6yM27o0V&X-Amz-Signature=bdaf32cc5e57d8139279a423f1b283b87291c49e5970dc0da9e730b90ad58b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBC4ZSG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjl1wTtjiILa0XCe4MCzKwwarjLyom6MNEs2UCNU30wAiASB7jC%2FbHJFSc0gcHyEYk4a6slOAGlKtz8VYz5Uq4ppyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMj33hPKNffBCfkTfOKtwDK%2FJgY0sKSV6yGz716uLMu3%2BOPQLWQEZfxLfyti4wcCLHfeSOVJWhtXlsxQoFTenFlgZUh7ZDK%2B4XFsRREOha9Q5iZdBzOInquMmZfQw8XuDAMTmlOCTsgl5plBIWXJ6dKqunGBp9v%2FCRwtELDn5qQDhZteXP7WyXogKunBal5hCYXYh2h2HB2Z7uaZvJiHOs%2B28fh6MS8q68rSZDXs5NVqSQDzOHqNI4RfpLo%2BaToBVY3IqIcWIHTruvXu3eTblHpm4Y61sqVSsItgfFubYrm1iOSrWr%2BpG2zwGLSeODbAOEn2d7Mqp2sWT7P4NClMVZzgdicjxTAdeFV8HwpjuzCeW15ABvip32v%2FzOVjlweIqgFaWrBu5loliHchijKARmGMA52i7karMU26xQwWFWpfxy%2FLBDcZqR2oxYf2sZkrQxH0s2m9yI360354N3x7SO6HYz6Bx0zdTgl6X5mHJ2hS6%2Bl4CiHvXn%2BmYChUHalSNZOePrdHxoEuyH9iFIqT1CEeNFZMfWiB7b1SQYkv5%2BvcbnuJeTP4y8hweqm2Z3qzFbjtAEFeLxw7KAojdXzU8Y9HNmbGpCrpw7zyEiXaUTzEiZDlFJ8kblCbviwyVoiY9YBGw8jzbvTX3yOQEw7ajKyQY6pgFMmgXqx3ogmmJEFyCifH1lF5Hu6CXWG2s1t01KbbuGH1RsdqazcZ6%2F2Vb%2F5WkhvmpUyPKWdzleUpM%2FT8fZeNAutRaGd25vt6nnYBvgdZqWyJ%2FdfweYBUVvQ8hiskGJ71rQ%2BlWQP5FYv3WOAUUupLfhs88ijNRvlP0jIArvV4j7AvlLv352dYhTN7K0AybtiEFGd5Rtno%2BkkXEbn1BEjpFM6yM27o0V&X-Amz-Signature=bcfdfb773b91f0bd8a00ff046bec7a165b2f7b36088e6696081b395c62f54906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
