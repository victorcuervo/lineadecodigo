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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGIF6PV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u5DklJFwiFnHqEzPXd%2BioQH%2FzlL6%2BLDQRJECmOelRAiBVkinzY4%2FpiUUbjFfO3%2BLTWipJ%2BcHEb3ystYQNYCoiZir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMIcneYDGp3LtlM3zdKtwDm6KiBoyirfeo%2FJ3Ah8q%2FvLuXPmTyod%2BO0Ce9fef5f5CGnhteLfhpJvB8dIwMpMaR2ElT7WHNWLhCyfxiZg8JLcVkMxus9X7O9EKEZVVGZW1d7oMloSmezBJcr7y62t7qddZdASnXjPidXlKyGmfSHWIIOTkQS5ChkV0hoFjFejmLP3qcZF5DNFWTmCdYvt1D2Yb5ybx564bpNrTMi6LDV4OaOGoTc1YhPt0ywJu7x5wiYmv7rjHCi%2Fpu5jd2Wa1tOFGFhScwYjQJ1kja%2BqMxLJn3VAkSQM%2Bj3YNTmh0OtGL3zZyp2AIMdZjZXIkyvKBJLndjhD8%2FSjKf5dNH0ctE8muKrJ8s4WIO2K5yDMfs5GxQ038tUl3KF1TsKwy%2Ftnhj%2FlMZqaxpoPJnQLt4KHMfuOoU4eFW%2FZtB0A%2BmL%2BPVrH6P6ZEuBItuwN0sYlba%2FU14ASRxBPxiQYCG10dwFlecbRn1I9YVLgjun9V57Brz%2FS6%2FmdjF9LjspRxOT1T9nQKr6IUi4dGR6LJJQt13TuwDLpxgeraJdPkib9dZ17Vf72KEdNhX78gQ5HWdo4RBC564MMZ48HdCBAJMNvlTKICex9voTbyj1mINXBfY4AyHsdJkIkbSk3wu3Ei6D%2BgwoP3OyQY6pgFMmiT8%2BjJthL86YMmoBxqiLNATFsnGcZSA26a%2BIQSoQ%2FrByEkmnQmWxQ0C6qKKwWiAzEtmYl8lvphNG0QtVEFxpNBVVcxZa4p1p2KdR%2BmmTxy4umlvwLz6uWQb3cm4lIN3nmhROaizx3%2BSxOtOROpg%2Fu0eFmnv5Vf82%2BmVUVWeyH31VGYcIx2O2ozrfBAOnjD65dG2xR6jHqgfOxBATu0bKWd8OLwp&X-Amz-Signature=02045b12a6ff5fed6ec5daa864c1d3de04346f70804c1a7eb4e3d395a583bcef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGIF6PV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u5DklJFwiFnHqEzPXd%2BioQH%2FzlL6%2BLDQRJECmOelRAiBVkinzY4%2FpiUUbjFfO3%2BLTWipJ%2BcHEb3ystYQNYCoiZir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMIcneYDGp3LtlM3zdKtwDm6KiBoyirfeo%2FJ3Ah8q%2FvLuXPmTyod%2BO0Ce9fef5f5CGnhteLfhpJvB8dIwMpMaR2ElT7WHNWLhCyfxiZg8JLcVkMxus9X7O9EKEZVVGZW1d7oMloSmezBJcr7y62t7qddZdASnXjPidXlKyGmfSHWIIOTkQS5ChkV0hoFjFejmLP3qcZF5DNFWTmCdYvt1D2Yb5ybx564bpNrTMi6LDV4OaOGoTc1YhPt0ywJu7x5wiYmv7rjHCi%2Fpu5jd2Wa1tOFGFhScwYjQJ1kja%2BqMxLJn3VAkSQM%2Bj3YNTmh0OtGL3zZyp2AIMdZjZXIkyvKBJLndjhD8%2FSjKf5dNH0ctE8muKrJ8s4WIO2K5yDMfs5GxQ038tUl3KF1TsKwy%2Ftnhj%2FlMZqaxpoPJnQLt4KHMfuOoU4eFW%2FZtB0A%2BmL%2BPVrH6P6ZEuBItuwN0sYlba%2FU14ASRxBPxiQYCG10dwFlecbRn1I9YVLgjun9V57Brz%2FS6%2FmdjF9LjspRxOT1T9nQKr6IUi4dGR6LJJQt13TuwDLpxgeraJdPkib9dZ17Vf72KEdNhX78gQ5HWdo4RBC564MMZ48HdCBAJMNvlTKICex9voTbyj1mINXBfY4AyHsdJkIkbSk3wu3Ei6D%2BgwoP3OyQY6pgFMmiT8%2BjJthL86YMmoBxqiLNATFsnGcZSA26a%2BIQSoQ%2FrByEkmnQmWxQ0C6qKKwWiAzEtmYl8lvphNG0QtVEFxpNBVVcxZa4p1p2KdR%2BmmTxy4umlvwLz6uWQb3cm4lIN3nmhROaizx3%2BSxOtOROpg%2Fu0eFmnv5Vf82%2BmVUVWeyH31VGYcIx2O2ozrfBAOnjD65dG2xR6jHqgfOxBATu0bKWd8OLwp&X-Amz-Signature=434362d713549cc080568a0f7056318fe39936fbf268048e6f5fe2722f91e9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
