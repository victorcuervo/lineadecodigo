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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQEFWOB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BBS8S%2B7E7JR3Oa1QSsClQjzFA0vpVyrF5Ps8zUpJH5AiAN0%2Fpb5vX4vwbNGpZoascJpIYbI9BYD70OJx3oi3%2FVaCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMa%2F%2F58Mehe6NwobwOKtwDEk0ZRY6gwI3f8Q%2FcDKASczlYZgYU0gkzFbPMy54C6pydm6as5fE5FIcZyitCz0%2BDdjv7WVnXM5lAF%2FiZ4f07tKROFjSpmqHiNVKRaYuxOX%2BEP%2FLbY%2FjjAh4LtT87kpeEGh1dTG5Ufh2e0O8vdiEgCtuYKrfi7wKDXCDx%2F%2FPeTdZiZjyt7brurKIJOqHtdAbB5yiqcI50Ej7MVSa%2FbtYpYmggWDMPqH%2BfAKTgWdbA5dIif5NVoLVZ0bQ6794TdKn57OWTNyBbbOGruBvu9SXMbMbVi%2F1D1daDGOm61wBgytlHy1ZHM0rghXfVQ9DtxLc1zIQG03NaFidI7dPcdhtNLNKp4Htd3WL1Y%2B4GDDxhouA3vLNlLyeG0vmtFsLuIGYxv8kdYGxwX6oETUE5lTDveCJ7gk2%2BhnqPgLMPU0fiZn0gf%2FhwPzacCpAwAKl%2FsHrJekD8XAZiS3FXNMnr1P8iwvUd81qIYk98mHPPDRwUHNDTp7Feu3RVNF1qm2CrNswmz1x%2BDuNtKJj1FnY1tEgWdrIHPUA2FyaPjDdDKwhytm6HleObsvRoH%2FqoGNNPLx4jAq6GcJZSHtKBw%2Fp2bnFNTvLrYPaplEyHv5RagvccDYKtghzTLDc9B6jEoLAwisvKyQY6pgEh7QKCSpOr8ll3%2FpuWK%2BX%2Fjlb0GSRnr%2F8w5UYk40GdWgSpWHd4R3Gfbq0M11enAHFgYVkvJzVwJoKpPxah0kXTHz2ix3cjIG%2F8IlWaHfX%2Bmz%2BDzSZex3Its20%2FGS6i6d7lIm8pc7RfOtRUrZ7ZP%2BBk6ShRI4xQayEbikUsevgVpKhddRWuDB5slrfCWvDg6C37B2Z0hoiL1nIYzb0GEBLxymqmU61X&X-Amz-Signature=d2c1268f02c73126e5f69cf4603eb2ff3e485ff20aa561c52ac8614ab5b0db95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQEFWOB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BBS8S%2B7E7JR3Oa1QSsClQjzFA0vpVyrF5Ps8zUpJH5AiAN0%2Fpb5vX4vwbNGpZoascJpIYbI9BYD70OJx3oi3%2FVaCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMa%2F%2F58Mehe6NwobwOKtwDEk0ZRY6gwI3f8Q%2FcDKASczlYZgYU0gkzFbPMy54C6pydm6as5fE5FIcZyitCz0%2BDdjv7WVnXM5lAF%2FiZ4f07tKROFjSpmqHiNVKRaYuxOX%2BEP%2FLbY%2FjjAh4LtT87kpeEGh1dTG5Ufh2e0O8vdiEgCtuYKrfi7wKDXCDx%2F%2FPeTdZiZjyt7brurKIJOqHtdAbB5yiqcI50Ej7MVSa%2FbtYpYmggWDMPqH%2BfAKTgWdbA5dIif5NVoLVZ0bQ6794TdKn57OWTNyBbbOGruBvu9SXMbMbVi%2F1D1daDGOm61wBgytlHy1ZHM0rghXfVQ9DtxLc1zIQG03NaFidI7dPcdhtNLNKp4Htd3WL1Y%2B4GDDxhouA3vLNlLyeG0vmtFsLuIGYxv8kdYGxwX6oETUE5lTDveCJ7gk2%2BhnqPgLMPU0fiZn0gf%2FhwPzacCpAwAKl%2FsHrJekD8XAZiS3FXNMnr1P8iwvUd81qIYk98mHPPDRwUHNDTp7Feu3RVNF1qm2CrNswmz1x%2BDuNtKJj1FnY1tEgWdrIHPUA2FyaPjDdDKwhytm6HleObsvRoH%2FqoGNNPLx4jAq6GcJZSHtKBw%2Fp2bnFNTvLrYPaplEyHv5RagvccDYKtghzTLDc9B6jEoLAwisvKyQY6pgEh7QKCSpOr8ll3%2FpuWK%2BX%2Fjlb0GSRnr%2F8w5UYk40GdWgSpWHd4R3Gfbq0M11enAHFgYVkvJzVwJoKpPxah0kXTHz2ix3cjIG%2F8IlWaHfX%2Bmz%2BDzSZex3Its20%2FGS6i6d7lIm8pc7RfOtRUrZ7ZP%2BBk6ShRI4xQayEbikUsevgVpKhddRWuDB5slrfCWvDg6C37B2Z0hoiL1nIYzb0GEBLxymqmU61X&X-Amz-Signature=5c3a08c73c92b8b742188f5db7760445af61ec199c445c8d2be22fea951590fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
