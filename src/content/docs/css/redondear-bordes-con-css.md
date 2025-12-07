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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DL232G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgLWyfg%2F7JC9oVlX8X840CiCZSgx7CY7xCObkX3FvSgQIhAOFxY%2Bh3gKSujFnKp1xkps%2BZGZYAwQbRzHD%2Fa%2BQw2wogKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxntXNt6E5pqKPPR94q3AP9gyc5SAM%2BwbTotKv43WtSa5Mug%2BKe3YmIYziRnwx%2B2xZJh7%2BL3r4ZiTB5%2BXhdOUCXBfptJa8hfXoEdnZKk4fMC8J8d0Agza%2FM4UL8an41AGJ84beFNQWRZxavSF%2F3Nn8RWLGTfvMzyeGHCaDWpVvwmxY68LBFrkYa1lLn9uES2MJ6LZDB%2F0iFBVYY7%2FMBHy4vfq1NFRLQtmjs6BHjwZjQRsy93pXiMOBS9%2Bqy3mCgjjm34FkWhiRRmxc9%2B9hTLZU%2FQMY63cLzaJtCi0JxyDuDCJU8ho5mLE5%2B%2FP30pz2h3aVn0hWOeR0LiXYP5YssXWbtDkBMsRbP6jTqLigCnKWPPvUunCfWPpohmUJ0vdjLAfOAIl8EfPgrYZveBQxUrhAGAuwtpKu3iKfA%2FqS7c3uLc079fxb18U8nz9T58cnVBoxlJP0%2F1ZorihmmI%2BSrO%2BpySLyxMUEAQcdBeNAjs1BYgfrO0Av8FAq756akrk6Uuw4sKbusI%2BatQVj7mxEZAWhw%2F%2B5%2Favdjm1L0qGB27CKSn0%2FpSo7JGk9xukbJZyboGibaGlpHNBIXouvMJ8t6uTXxs8DgJ0dDUT1mKrJUAWQOuccj1jP6K5l%2BW72wpDf7UXljg%2BOsLN7ZgsJaljDLmtXJBjqkASQHETLOn5u9alhfvFwAqwtJqnR4apV24GXZRgcUjDXPE6BqmcK%2B4T0GLEnmRrV%2Fxx4bSNvO3hziWvnXsZv1TixE2Cju53GvTTMeGWNeRAO5%2FtCYCSSIHlwpJ8d5aDDQFNKVJsJYHv6wz29MIJj1O6DlLkIAHSyb9K06zhFoTnHRbL6w%2FCiCs5oKw4%2Fp7NfcK856fpPqS5Q63dOKwQ6Cra%2Byq378&X-Amz-Signature=3b9d774dbf0140e87e43ca5ec40a81002c4615eafa8becbea65ed1c0a3e39068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DL232G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgLWyfg%2F7JC9oVlX8X840CiCZSgx7CY7xCObkX3FvSgQIhAOFxY%2Bh3gKSujFnKp1xkps%2BZGZYAwQbRzHD%2Fa%2BQw2wogKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxntXNt6E5pqKPPR94q3AP9gyc5SAM%2BwbTotKv43WtSa5Mug%2BKe3YmIYziRnwx%2B2xZJh7%2BL3r4ZiTB5%2BXhdOUCXBfptJa8hfXoEdnZKk4fMC8J8d0Agza%2FM4UL8an41AGJ84beFNQWRZxavSF%2F3Nn8RWLGTfvMzyeGHCaDWpVvwmxY68LBFrkYa1lLn9uES2MJ6LZDB%2F0iFBVYY7%2FMBHy4vfq1NFRLQtmjs6BHjwZjQRsy93pXiMOBS9%2Bqy3mCgjjm34FkWhiRRmxc9%2B9hTLZU%2FQMY63cLzaJtCi0JxyDuDCJU8ho5mLE5%2B%2FP30pz2h3aVn0hWOeR0LiXYP5YssXWbtDkBMsRbP6jTqLigCnKWPPvUunCfWPpohmUJ0vdjLAfOAIl8EfPgrYZveBQxUrhAGAuwtpKu3iKfA%2FqS7c3uLc079fxb18U8nz9T58cnVBoxlJP0%2F1ZorihmmI%2BSrO%2BpySLyxMUEAQcdBeNAjs1BYgfrO0Av8FAq756akrk6Uuw4sKbusI%2BatQVj7mxEZAWhw%2F%2B5%2Favdjm1L0qGB27CKSn0%2FpSo7JGk9xukbJZyboGibaGlpHNBIXouvMJ8t6uTXxs8DgJ0dDUT1mKrJUAWQOuccj1jP6K5l%2BW72wpDf7UXljg%2BOsLN7ZgsJaljDLmtXJBjqkASQHETLOn5u9alhfvFwAqwtJqnR4apV24GXZRgcUjDXPE6BqmcK%2B4T0GLEnmRrV%2Fxx4bSNvO3hziWvnXsZv1TixE2Cju53GvTTMeGWNeRAO5%2FtCYCSSIHlwpJ8d5aDDQFNKVJsJYHv6wz29MIJj1O6DlLkIAHSyb9K06zhFoTnHRbL6w%2FCiCs5oKw4%2Fp7NfcK856fpPqS5Q63dOKwQ6Cra%2Byq378&X-Amz-Signature=8abcbbde754eaf385b5f626666da8c866ad8d1d5ff0a22da44e47c0d941bb224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
