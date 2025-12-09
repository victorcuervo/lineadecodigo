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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHANIK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zKTa86gMOzacpYwL4qxaA7206lmSwz0bKF%2B6GB76KAIhAKqt5WE1WGDM7YUpr6vr8dGkK%2FHggiV89AWWRSf01DRWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7g%2FgT4090O%2BUbXM8q3APWevEqGu8UxdWAzTEdrKdgDiO%2BP63C%2BxW8PzxjGZsjKzGhzYU%2FXkb%2B5FgUt8OYrFT6i2OginNSUMyqBqeJOGT50QAQpHjz%2FPdvRCbK11184wjobVB8DbgkmvzLDGurZBMK1zLl%2F9CEPOKJlNAIT9q%2BnXd3oM1rQC7ajHl1s1jKejwxZ%2FU83gIkr6l8o06Oaa5dB7PQdd0Xpl42lxdsR4F6Hsut1ToU6ZScQBZDLNtAIjfeRB8XvsHC5gqyDG6a25IhuiwExZHLXEO%2FQmV3CwGHFvXfi1aNMgteyH9twM1hXQezMHiZYKIEPt126CoF%2Be0j10xl8%2FZLLzNlHWHED6gRlhOkxRDZYloOngM6w9jlNC6gIlU5wHAFo5xySVodPG1KbIG%2BnJtBWmT4dk7nQf19BXu14JXxveO5QKeZmju1Zo%2Bjqz7ep%2F%2FhHa86003bj6JwYFUsEoYBL%2FTXekGSbfpDGgiSI1dm%2F9kRWCiF5d%2BvqP0SY3AVVs594%2F2fXHG4Ag8cPd8enDiMuNZO0t0VsuC7ryNoQuPoRY1MHSUmm5%2BL35jr1l1Ik4qFxzm%2FWY6aoabfabp6KqhqhEeWmjVX4DLbDeTm7Xvi67%2F%2BkDxBfuzo7ldNjYBHvZ%2Fxb2TKuTCR6d3JBjqkAaqeDoKqDrzelC%2BkkXgOdd6dRDCSwQEqGSlFPgKyPbu9IgdtXnvShafX514qJR9Gtd4D0QRQEMV%2FTLiplwv0H%2Fv6GgcNVaWe5y%2BjTeoMIXDxlsjel2HCoPFOBRhl9AKY%2BQcJbkoUAdwD6vFn85A4u4uRpve%2F1wQUa5xyLyOhtRN6IWP9jT8Pfe6RLBfDi0EecCFLVMxPSIVKZgVu4qnLfiRASCtN&X-Amz-Signature=d14ad6b5df98f2ce4a09aaa02367cb5a2df21d9950b3b4c74e0640b9494df01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHANIK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zKTa86gMOzacpYwL4qxaA7206lmSwz0bKF%2B6GB76KAIhAKqt5WE1WGDM7YUpr6vr8dGkK%2FHggiV89AWWRSf01DRWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7g%2FgT4090O%2BUbXM8q3APWevEqGu8UxdWAzTEdrKdgDiO%2BP63C%2BxW8PzxjGZsjKzGhzYU%2FXkb%2B5FgUt8OYrFT6i2OginNSUMyqBqeJOGT50QAQpHjz%2FPdvRCbK11184wjobVB8DbgkmvzLDGurZBMK1zLl%2F9CEPOKJlNAIT9q%2BnXd3oM1rQC7ajHl1s1jKejwxZ%2FU83gIkr6l8o06Oaa5dB7PQdd0Xpl42lxdsR4F6Hsut1ToU6ZScQBZDLNtAIjfeRB8XvsHC5gqyDG6a25IhuiwExZHLXEO%2FQmV3CwGHFvXfi1aNMgteyH9twM1hXQezMHiZYKIEPt126CoF%2Be0j10xl8%2FZLLzNlHWHED6gRlhOkxRDZYloOngM6w9jlNC6gIlU5wHAFo5xySVodPG1KbIG%2BnJtBWmT4dk7nQf19BXu14JXxveO5QKeZmju1Zo%2Bjqz7ep%2F%2FhHa86003bj6JwYFUsEoYBL%2FTXekGSbfpDGgiSI1dm%2F9kRWCiF5d%2BvqP0SY3AVVs594%2F2fXHG4Ag8cPd8enDiMuNZO0t0VsuC7ryNoQuPoRY1MHSUmm5%2BL35jr1l1Ik4qFxzm%2FWY6aoabfabp6KqhqhEeWmjVX4DLbDeTm7Xvi67%2F%2BkDxBfuzo7ldNjYBHvZ%2Fxb2TKuTCR6d3JBjqkAaqeDoKqDrzelC%2BkkXgOdd6dRDCSwQEqGSlFPgKyPbu9IgdtXnvShafX514qJR9Gtd4D0QRQEMV%2FTLiplwv0H%2Fv6GgcNVaWe5y%2BjTeoMIXDxlsjel2HCoPFOBRhl9AKY%2BQcJbkoUAdwD6vFn85A4u4uRpve%2F1wQUa5xyLyOhtRN6IWP9jT8Pfe6RLBfDi0EecCFLVMxPSIVKZgVu4qnLfiRASCtN&X-Amz-Signature=067fb5135d30357204f6df204586e73ff1572ade39e920ba99c26c3a9476da65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
