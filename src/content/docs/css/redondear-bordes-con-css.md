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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPB4CFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwjhcK8lQ%2B8T7pDdMeFjVhyrzHmmWl7PuSArtWvcVMvgIhANScyyLpzvp456IDPjOmrCW68iwBVtwwPEh2wRMCRNYxKv8DCGEQABoMNjM3NDIzMTgzODA1IgzUTwCjHM%2BhcjEi%2FgMq3APWhGCPRWaYBouAXWyCt%2FOxds%2BKVwnRno%2Fq2ABelO2yURSU8T3Ol718%2BXXfP2leepqymvHqRXbEBx0S02CntXfLt4%2BswYOxwCJGU634kVj3N2SBISxdocucs0FqvkRUS6bRG24sq%2BxJgaGgUPp1LUUOgwtV2WJe3fX8yGSdtClaXBnuZQ2nCn2ZVptcI82%2FnM8BLUNbZ6esHcFO3RL8O94lElGYXnJ7HI%2BJm7PMGzjL8%2BF0CnG1RYFXnDDmYCXXb4xreTBZq6g1aYFg73osFFyUodjYETpL4t5Yy%2FhUrkWJbSOX22Vzu91ZTtSyuxZ2GJOViIGBhNIw3KywlYDFuBkc5B051Tr5YdQKP9mjqWkXcLTIGfTgeww7QSj2YxzI655VMwdyVSe7nSSl7tp2n%2FogsaTw0aHmnVDaYPMX7o17NS1J8UWxIWT4wCCcJC4TL%2B%2B3OXtNMzsNrdvbBpZPkKjYiOUILreI%2FikQAFG3CWwhFQj8zUOWIA9eH1XLa%2FTc4GzziXSLfejZ88wQuflCLFB6rictH%2FZJzS3aEUcsAr2%2BuU98aN%2FwTHPHhAjnGDt9pngS81TtE4DqC8x1ZtykhKrnPLfnDd67LptZzl00ebBBJO0iFJc3ed7a659X4zCX%2BMvJBjqkAdP6cdZztV1tk7RM9PD0DGD%2FRViraW9s9b8%2FDodmodBKeDbz3jCDdLguXyeIlqFNDmAxVeCKakr%2FNC5L3BakZDmJnh9QelSyZvEfkcKfJgA9LpjT3gzsQuqJsb%2BUVhx%2BNcASQ1hUdDAvX8tETkNbzYyAlw9eFYa2Y1VHYfR6nxC2m0A42FY7PFs8t8TDNegfKVVlcEy5QJ8RWWn8lUU5qWgmXgaF&X-Amz-Signature=7a00bfbf820edfaea977aa0ca9d78dbb3646fe09083f302d745381daa56cd622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPB4CFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwjhcK8lQ%2B8T7pDdMeFjVhyrzHmmWl7PuSArtWvcVMvgIhANScyyLpzvp456IDPjOmrCW68iwBVtwwPEh2wRMCRNYxKv8DCGEQABoMNjM3NDIzMTgzODA1IgzUTwCjHM%2BhcjEi%2FgMq3APWhGCPRWaYBouAXWyCt%2FOxds%2BKVwnRno%2Fq2ABelO2yURSU8T3Ol718%2BXXfP2leepqymvHqRXbEBx0S02CntXfLt4%2BswYOxwCJGU634kVj3N2SBISxdocucs0FqvkRUS6bRG24sq%2BxJgaGgUPp1LUUOgwtV2WJe3fX8yGSdtClaXBnuZQ2nCn2ZVptcI82%2FnM8BLUNbZ6esHcFO3RL8O94lElGYXnJ7HI%2BJm7PMGzjL8%2BF0CnG1RYFXnDDmYCXXb4xreTBZq6g1aYFg73osFFyUodjYETpL4t5Yy%2FhUrkWJbSOX22Vzu91ZTtSyuxZ2GJOViIGBhNIw3KywlYDFuBkc5B051Tr5YdQKP9mjqWkXcLTIGfTgeww7QSj2YxzI655VMwdyVSe7nSSl7tp2n%2FogsaTw0aHmnVDaYPMX7o17NS1J8UWxIWT4wCCcJC4TL%2B%2B3OXtNMzsNrdvbBpZPkKjYiOUILreI%2FikQAFG3CWwhFQj8zUOWIA9eH1XLa%2FTc4GzziXSLfejZ88wQuflCLFB6rictH%2FZJzS3aEUcsAr2%2BuU98aN%2FwTHPHhAjnGDt9pngS81TtE4DqC8x1ZtykhKrnPLfnDd67LptZzl00ebBBJO0iFJc3ed7a659X4zCX%2BMvJBjqkAdP6cdZztV1tk7RM9PD0DGD%2FRViraW9s9b8%2FDodmodBKeDbz3jCDdLguXyeIlqFNDmAxVeCKakr%2FNC5L3BakZDmJnh9QelSyZvEfkcKfJgA9LpjT3gzsQuqJsb%2BUVhx%2BNcASQ1hUdDAvX8tETkNbzYyAlw9eFYa2Y1VHYfR6nxC2m0A42FY7PFs8t8TDNegfKVVlcEy5QJ8RWWn8lUU5qWgmXgaF&X-Amz-Signature=0997643fb67778e47489c928eb7e82af363dc82b9b638944d83969ec061c1e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
