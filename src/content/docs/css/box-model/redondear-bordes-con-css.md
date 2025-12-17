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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKKMO4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpQ4DYCh8l6eUOwU49kdLgufAHBN5uUtac8QY4En0BQIhAIo%2FZAAIXbKj2u2yuoXSkgdYFZT8MZOLywBD8UNh1%2BDVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDIf63YopjZ7H2dCEq3AOtp30ASWnLXSGIP7rmbv5wfgTnhAMHjcypH9B3vbdvjujukVB4WjkwlwXtZcK1DCkjo4ZVzv2INvWGxpkOixaX0pacy0mOouoJd58GZKJ%2FFbQjxJUn5UZNoT%2F57fWiqrQ2DKQJtpntTkE5JE5kSlPKOT%2FCtMILZB5gbmSPj749FvZNVzfUb6jd1jo38wjnjLpeGV4%2FPwFAWj%2Bm%2B6NTdQ8R9KhZLtgQKNNiw%2BTgfbZbXX9FRoIZ4bWP%2BCttCNYRFznbI2zl79zVEaXSmvyzn9XjNU3Ucpuz61GQa1%2Bk%2BwFPBOi5QIXa%2B%2F%2Bydh%2FctCKtC3emVIosHVHQ2uwUd6fBfEH9Ewu3vuGPz5kFvXRhXe0Z%2Bmh7krKpcTL4GUNY1wuVTQcJHI3oZ6jZDhrnv99zz9oLH3IH2yni5rkCksGdoZYGL9gTamI%2FaYmD2gfp%2B2eb%2FOc85EIoJ%2BRMYWavTXHGx%2BLD%2FZpbO8rgrd67wl0IGKmXS%2B1bIoCs21ruxQ2uzYZluU1CkKBSHPwyXWFbqpXUPkDxAY0dzxQ%2F2KPyKYHzvLBe8tqvyY4V0ZQyygLM32jVqcCiBkbTzYOju7voNZsPdySJ3%2FC%2F%2FlJorHeK0%2B0WyyETvEOafRAtfDYwiZ6%2FozCFgIvKBjqkAaNXNLALYOPMkaLEmVyXXUTXNNElneTHATGMvfUE8okHxxI%2F%2F%2F%2BkcmqHbUS9fL588eVVdnA183a4B2M%2BKBMyNrIFIN%2Fw%2FCNWJoXLAaKrPxHrGGtRRetbUzis07BxNHDLYKTEOCObDtR4Cj1Yl%2FfhHPFmAA6HtKq07NjY6D8e8whnlIokh2NNrZkoW0tAhIHp9KkPajeolxY117C7Gy770t8vAUyD&X-Amz-Signature=870359f9948348a1e7fddeb9278a98373d38ed064fa6945c00d921a42503c0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKKMO4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpQ4DYCh8l6eUOwU49kdLgufAHBN5uUtac8QY4En0BQIhAIo%2FZAAIXbKj2u2yuoXSkgdYFZT8MZOLywBD8UNh1%2BDVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDIf63YopjZ7H2dCEq3AOtp30ASWnLXSGIP7rmbv5wfgTnhAMHjcypH9B3vbdvjujukVB4WjkwlwXtZcK1DCkjo4ZVzv2INvWGxpkOixaX0pacy0mOouoJd58GZKJ%2FFbQjxJUn5UZNoT%2F57fWiqrQ2DKQJtpntTkE5JE5kSlPKOT%2FCtMILZB5gbmSPj749FvZNVzfUb6jd1jo38wjnjLpeGV4%2FPwFAWj%2Bm%2B6NTdQ8R9KhZLtgQKNNiw%2BTgfbZbXX9FRoIZ4bWP%2BCttCNYRFznbI2zl79zVEaXSmvyzn9XjNU3Ucpuz61GQa1%2Bk%2BwFPBOi5QIXa%2B%2F%2Bydh%2FctCKtC3emVIosHVHQ2uwUd6fBfEH9Ewu3vuGPz5kFvXRhXe0Z%2Bmh7krKpcTL4GUNY1wuVTQcJHI3oZ6jZDhrnv99zz9oLH3IH2yni5rkCksGdoZYGL9gTamI%2FaYmD2gfp%2B2eb%2FOc85EIoJ%2BRMYWavTXHGx%2BLD%2FZpbO8rgrd67wl0IGKmXS%2B1bIoCs21ruxQ2uzYZluU1CkKBSHPwyXWFbqpXUPkDxAY0dzxQ%2F2KPyKYHzvLBe8tqvyY4V0ZQyygLM32jVqcCiBkbTzYOju7voNZsPdySJ3%2FC%2F%2FlJorHeK0%2B0WyyETvEOafRAtfDYwiZ6%2FozCFgIvKBjqkAaNXNLALYOPMkaLEmVyXXUTXNNElneTHATGMvfUE8okHxxI%2F%2F%2F%2BkcmqHbUS9fL588eVVdnA183a4B2M%2BKBMyNrIFIN%2Fw%2FCNWJoXLAaKrPxHrGGtRRetbUzis07BxNHDLYKTEOCObDtR4Cj1Yl%2FfhHPFmAA6HtKq07NjY6D8e8whnlIokh2NNrZkoW0tAhIHp9KkPajeolxY117C7Gy770t8vAUyD&X-Amz-Signature=4daf6afab87da85931cb1ead8fec3668e52c9e4d3b6fe019f0136b2f08bf2088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
