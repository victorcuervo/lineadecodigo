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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JKSKJ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFyaUkJl9EC6r8rtq%2Fzt04MWgmNAez5yFZyeu0b8isrAiEAiJmd29DUkv8Vi1d1F0fBEo97pYw%2FyporHO5k8XlCFgsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEM35kxNjCP1pc3VCrcAzkFVXyWeu0bWTvqy128AThMOslvLXKwkx65KUQ7HtPTSRqoST7b97yfj%2FE%2B6urtiMMvB0EsoEy5WDlu%2BixZt1DUTXaY0mqHlmckYQ8tC2Vo7whk0%2FqzJJY6WkfmCA1Q7awqwITjJ%2FG%2BP99gjaVblf9EEDvgcNDkYD7x64xp0%2Beg0y5Q%2FP9i4MOy%2F7AhqPm92Wl12Ri%2BU3wjUDV1axud96nq861Fq5M2kF%2F13L9aaOlLwBp%2F3sLe6jLLnhGWKXWATV4VaceHKGbNoEXU6wFmhp%2BfQhDoF7PP38Js%2BM2QWAQKZSu3Cx1R0v6oKDdgjwnaHVVhwsVRyXCvI6NIVPdII7P7AJP3Uq662VebSSp%2B7SDJcyKAmnPrSTHX8N6mLaX8cBI1DkjeVrBH6KL%2BRzASBDYLGQcKaOKpNdIOb%2BuL66%2FWyZUOHJLiIBpBwocxwh%2BFIewttmWt6C%2FHA7MtzaODAkHxI3OlN3Jm%2FKxigBg2GVc43aj0nj1rRcPQKw4ixKTXfIl3MYRB2igGc70nxpqX%2BvA27LC%2F3QXoxhom7w%2F26guPZflkVmma5aDvbnorv6WTXs4WMSy6jgqtb1Z2%2BjHSdF%2BTh%2Bd6FSuywD2KX46oTU1qDV%2BpNgspIg3l%2FdZeMKud1MkGOqUBvXgujrXyl5dlsrB%2FBE6BLHS6e9nifXaS9qs0RAScME5bL06aZdJ%2FnNOZtaZiaKE%2BrnbGbkJuokXFLIJ5S%2FqrzxjjGIOhm89v69C5Dcoka0CpJRxFALCH%2BMHtl2k3fHY15bUBuc%2B%2BLF%2BUVphAIwrKd0gtFD9RtV%2BIJBysLx%2B2lzoJOWyp%2BJLIVynDOxeXFt6Lm1TAFBBkGztyKuVnunOqaHBcoh6q&X-Amz-Signature=8ce7fa0cce1500a396f03ec0ca613e9c982050256bf42969356bb7375eee71f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JKSKJ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFyaUkJl9EC6r8rtq%2Fzt04MWgmNAez5yFZyeu0b8isrAiEAiJmd29DUkv8Vi1d1F0fBEo97pYw%2FyporHO5k8XlCFgsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEM35kxNjCP1pc3VCrcAzkFVXyWeu0bWTvqy128AThMOslvLXKwkx65KUQ7HtPTSRqoST7b97yfj%2FE%2B6urtiMMvB0EsoEy5WDlu%2BixZt1DUTXaY0mqHlmckYQ8tC2Vo7whk0%2FqzJJY6WkfmCA1Q7awqwITjJ%2FG%2BP99gjaVblf9EEDvgcNDkYD7x64xp0%2Beg0y5Q%2FP9i4MOy%2F7AhqPm92Wl12Ri%2BU3wjUDV1axud96nq861Fq5M2kF%2F13L9aaOlLwBp%2F3sLe6jLLnhGWKXWATV4VaceHKGbNoEXU6wFmhp%2BfQhDoF7PP38Js%2BM2QWAQKZSu3Cx1R0v6oKDdgjwnaHVVhwsVRyXCvI6NIVPdII7P7AJP3Uq662VebSSp%2B7SDJcyKAmnPrSTHX8N6mLaX8cBI1DkjeVrBH6KL%2BRzASBDYLGQcKaOKpNdIOb%2BuL66%2FWyZUOHJLiIBpBwocxwh%2BFIewttmWt6C%2FHA7MtzaODAkHxI3OlN3Jm%2FKxigBg2GVc43aj0nj1rRcPQKw4ixKTXfIl3MYRB2igGc70nxpqX%2BvA27LC%2F3QXoxhom7w%2F26guPZflkVmma5aDvbnorv6WTXs4WMSy6jgqtb1Z2%2BjHSdF%2BTh%2Bd6FSuywD2KX46oTU1qDV%2BpNgspIg3l%2FdZeMKud1MkGOqUBvXgujrXyl5dlsrB%2FBE6BLHS6e9nifXaS9qs0RAScME5bL06aZdJ%2FnNOZtaZiaKE%2BrnbGbkJuokXFLIJ5S%2FqrzxjjGIOhm89v69C5Dcoka0CpJRxFALCH%2BMHtl2k3fHY15bUBuc%2B%2BLF%2BUVphAIwrKd0gtFD9RtV%2BIJBysLx%2B2lzoJOWyp%2BJLIVynDOxeXFt6Lm1TAFBBkGztyKuVnunOqaHBcoh6q&X-Amz-Signature=fae09ed7a9f69bd9a0fa8f221f44301b5bc0aeced402af5dfd25c047bc916bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
