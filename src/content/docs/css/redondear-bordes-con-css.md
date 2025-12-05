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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGYNYNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPSeXc4g4b0EsDCt3waGP6d%2BzG0i%2Fi7GqQA2kC9eBfYAiEA9%2FlCyjX4d1AkM9YAZU9Su8QHVa%2FD%2BHbLvpxTLtHcOjsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMj1wNhbk%2FUK3r5HwircAwg0FFovxdPqz6Py0OuDXzGkWIMl3EM8TkT63%2BxFT1fA1ryR5x4WwFfKDhPWMu0K2GvUQ3wpqwutlrGV6ey6SiSugrl1IDEsr5rKK9QDlyQq2gICFcfv%2Bhrh%2B63ug7%2BnEL25fBGlC%2FwLwCjtISrRCB%2FjU3LPbiOp0QgdH%2BIOUCB0zoeg8zIqC8M9wKTTvRYWE8PC1EHdy5BoUkGtzbe5SpsYZskBqiRtbwJyREo8H790TRHNguv1iQKIdawFISr%2BohP154xRh62z76YKbXtXLZ5rsL3YaacPoTp%2FSHgJ%2BvMnKNuk4oP48KN0C6szevglGoMO8eNvdcJKc58mftzl2Yn74NS8CSFQ2%2FexBChIHzlRGKT%2Fw2YcNouu1sS3Pb1xc6SbeM2C2%2FBvqZAwpzVAWex0gaU%2F5NQcdy5Q2ZbFuRW73DDqsp5JpWn4p0W5GSBgWn6FMzQEhF5yEdqrnarozrIZeDHKwpCK3BA%2BoQkyksfQPRidWa87hMmu40bxxTK7iHzKjixCruJrxRY5zfF8i7oENytfnBGndPrZO9NQghCzYtSJBky7p6EfOY%2BMutBKFCk22vGJLZpY3sEvxlnYvZeNMgnsmdP2GZNGQbTqtL5Lig9qM1WZvjBRaQcwMLeMyMkGOqUBcWBbKn02PoBRmYjP5g0f7m3aLUClrBKuRgk7J09bjOxH7dtIK2X4VEDBuRBetEX7ni%2Bwnozwz2Ew7Z15%2FqNJULU8Z1N%2B6J1QkRM7%2F5byoiWlOXHq9DDI0qxAr4JxiSY82lCF0XgTU1N1O62KD47KghX5hd7vqKFm%2B5HK%2BWg0GLWN2Uf5eNGvofeqqKGjYs2Pgd7xIqeuCcczFqbcpRBznJM%2BgNtb&X-Amz-Signature=2dfabe79c060d792fe4ede856960929e45855f8420639ec572703aefa87658e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGYNYNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPSeXc4g4b0EsDCt3waGP6d%2BzG0i%2Fi7GqQA2kC9eBfYAiEA9%2FlCyjX4d1AkM9YAZU9Su8QHVa%2FD%2BHbLvpxTLtHcOjsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMj1wNhbk%2FUK3r5HwircAwg0FFovxdPqz6Py0OuDXzGkWIMl3EM8TkT63%2BxFT1fA1ryR5x4WwFfKDhPWMu0K2GvUQ3wpqwutlrGV6ey6SiSugrl1IDEsr5rKK9QDlyQq2gICFcfv%2Bhrh%2B63ug7%2BnEL25fBGlC%2FwLwCjtISrRCB%2FjU3LPbiOp0QgdH%2BIOUCB0zoeg8zIqC8M9wKTTvRYWE8PC1EHdy5BoUkGtzbe5SpsYZskBqiRtbwJyREo8H790TRHNguv1iQKIdawFISr%2BohP154xRh62z76YKbXtXLZ5rsL3YaacPoTp%2FSHgJ%2BvMnKNuk4oP48KN0C6szevglGoMO8eNvdcJKc58mftzl2Yn74NS8CSFQ2%2FexBChIHzlRGKT%2Fw2YcNouu1sS3Pb1xc6SbeM2C2%2FBvqZAwpzVAWex0gaU%2F5NQcdy5Q2ZbFuRW73DDqsp5JpWn4p0W5GSBgWn6FMzQEhF5yEdqrnarozrIZeDHKwpCK3BA%2BoQkyksfQPRidWa87hMmu40bxxTK7iHzKjixCruJrxRY5zfF8i7oENytfnBGndPrZO9NQghCzYtSJBky7p6EfOY%2BMutBKFCk22vGJLZpY3sEvxlnYvZeNMgnsmdP2GZNGQbTqtL5Lig9qM1WZvjBRaQcwMLeMyMkGOqUBcWBbKn02PoBRmYjP5g0f7m3aLUClrBKuRgk7J09bjOxH7dtIK2X4VEDBuRBetEX7ni%2Bwnozwz2Ew7Z15%2FqNJULU8Z1N%2B6J1QkRM7%2F5byoiWlOXHq9DDI0qxAr4JxiSY82lCF0XgTU1N1O62KD47KghX5hd7vqKFm%2B5HK%2BWg0GLWN2Uf5eNGvofeqqKGjYs2Pgd7xIqeuCcczFqbcpRBznJM%2BgNtb&X-Amz-Signature=182b2bd876817f9fd2dfebf2fb320d0d6f8b41cd17e8d3c18f100d4abcc747b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
