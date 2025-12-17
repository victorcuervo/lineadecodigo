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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU2I2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnXEsTJfHKGXZGhqX%2FIIlij8PjiPv9vO5ZpLQrXnQnCgIhALssTlw%2FCfsYLAa9g31GFG8voyhvGZF6cdbGOnb7GQRHKv8DCHsQABoMNjM3NDIzMTgzODA1IgxstXZ0T%2FwfEXiGGX0q3AMhrA0a2ay0qu2y4xR4zVuQGVqV%2FXL7s8U5X%2B8ADJH5YuNAMVYhtRbjJOZpAKZt%2FNgF6hNKrS0KoHvVJEYBiuT8j18%2Bn6%2FEMHzcmiiNG1uD64nO3qeIDJfFRJoIVeb8YuhILjUfaPaULWYkUpAt2V5nIRN7J4hgpUObRi7kj2NBfEL6WmFJO58mrsEWKGIYuM1FfqmYqCdivNVdptBIjGVSnrfWhk3%2FfGAqZ0rGMSVnEDXtsIOSfpVs51iyy%2F8Tzw%2BefwWrXIVCp32J17HHgdV5qX8Z6xyn3zVBQ%2FAVhkvenZYUfXmkY%2FLFAsVi6hEIikS7q85TMOBaeZDQxD5yyYTqpucKMe2x6Cg9m6HkbJH6B9J%2FObggQelsdbl8XV3GqfgfqG8URUlXzA5JUb8rkhMznL37MplWZk4rpJ1tB%2Bw47XzB%2FA5FreGxISMlva7g8B3OYchbnunHiUJYLwH2h46emDf89gJYUcHriDyYDiMCbPIjgxdTtOwXDgrpuSOJ9XXPBOvYG3SISvlLDLQKLjIl7RhDzowIdKtB4l7bFgdCwcPbc5%2FT7fl5QPSvK8B7Qn8rHH3bXOFuBybjOiA8z3L892R62ku5jBRB2kVpu9p%2BN7GfA6Cx%2FH1KLKYXDzCn8InKBjqkAex7j3eXmmGBRW4OCaHZfO0tqB6%2Fl%2FcRzJUmIJNxIEYANJ%2FtXp6seNDLmYr8Ni83f4FMcc%2FmehOduKzcuBd0YKupWS6ED1i%2FkXLKFIeH%2Bw2aDlsdtpvlCCFrb26qPFMTzQFzToG7qFRomUP%2BwEjFreo4TaoUlVcsW1fHtfcUiIaZtYc39fcArheJ61WsdDoD09yhUjWpdRK8k%2BasLXMUIJO%2BgPE4&X-Amz-Signature=f2b84bf333eec9640751b44937e3bf04f36c64da45760de4bda22d3ca3df5dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU2I2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnXEsTJfHKGXZGhqX%2FIIlij8PjiPv9vO5ZpLQrXnQnCgIhALssTlw%2FCfsYLAa9g31GFG8voyhvGZF6cdbGOnb7GQRHKv8DCHsQABoMNjM3NDIzMTgzODA1IgxstXZ0T%2FwfEXiGGX0q3AMhrA0a2ay0qu2y4xR4zVuQGVqV%2FXL7s8U5X%2B8ADJH5YuNAMVYhtRbjJOZpAKZt%2FNgF6hNKrS0KoHvVJEYBiuT8j18%2Bn6%2FEMHzcmiiNG1uD64nO3qeIDJfFRJoIVeb8YuhILjUfaPaULWYkUpAt2V5nIRN7J4hgpUObRi7kj2NBfEL6WmFJO58mrsEWKGIYuM1FfqmYqCdivNVdptBIjGVSnrfWhk3%2FfGAqZ0rGMSVnEDXtsIOSfpVs51iyy%2F8Tzw%2BefwWrXIVCp32J17HHgdV5qX8Z6xyn3zVBQ%2FAVhkvenZYUfXmkY%2FLFAsVi6hEIikS7q85TMOBaeZDQxD5yyYTqpucKMe2x6Cg9m6HkbJH6B9J%2FObggQelsdbl8XV3GqfgfqG8URUlXzA5JUb8rkhMznL37MplWZk4rpJ1tB%2Bw47XzB%2FA5FreGxISMlva7g8B3OYchbnunHiUJYLwH2h46emDf89gJYUcHriDyYDiMCbPIjgxdTtOwXDgrpuSOJ9XXPBOvYG3SISvlLDLQKLjIl7RhDzowIdKtB4l7bFgdCwcPbc5%2FT7fl5QPSvK8B7Qn8rHH3bXOFuBybjOiA8z3L892R62ku5jBRB2kVpu9p%2BN7GfA6Cx%2FH1KLKYXDzCn8InKBjqkAex7j3eXmmGBRW4OCaHZfO0tqB6%2Fl%2FcRzJUmIJNxIEYANJ%2FtXp6seNDLmYr8Ni83f4FMcc%2FmehOduKzcuBd0YKupWS6ED1i%2FkXLKFIeH%2Bw2aDlsdtpvlCCFrb26qPFMTzQFzToG7qFRomUP%2BwEjFreo4TaoUlVcsW1fHtfcUiIaZtYc39fcArheJ61WsdDoD09yhUjWpdRK8k%2BasLXMUIJO%2BgPE4&X-Amz-Signature=b1743a075d2483ddc91c3a4053107764af65931a3e3eaad6f6c0d384602dbae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
