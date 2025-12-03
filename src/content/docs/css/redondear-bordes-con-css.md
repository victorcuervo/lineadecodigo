---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYKWLTM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDxjA1u3pIte%2F6cSfFh95cVO%2FmSD5eu96G8PdERvUhLAwIhAM3P8klG6WeBJXGrjLyQxssnRoGSaFXC%2FR6ezJB4bQ8fKv8DCDYQABoMNjM3NDIzMTgzODA1IgzYchaB8ftL%2BU%2BkmrYq3ANQJrUC%2BgD8I8EdqPpqGx6k8doDVyElKkJGvuKvE1D5Cpe1w5RDlfUlpI3WzP19d8%2Bg3DGd9t0KwbFp5Dq5QE7QMfLhsrYXNgC3RMdC1O2sxsnMJVDNb7LQ005x6ojDzpsUnv5KlQk3AFBBLijOrgGgqAwIGEA%2BdPj1zxWpHXzpuX6KQULkBgUf%2B2CYspjjLhyqBoQJ0V940HGnrIX9YGORvucoj6ie2FmA0o65OMLYlgKPUi3OvRdeFPv28uVCz7LUaxAHGY6ThQ7OvRTIoSC84PT5y24F%2B11uGATwwhUHTY5oH6N0aLV7wTb0OKajBRRv5IaH7CnrGBf0w40iDuy5TIu8jnsTYfmCTdeYSaJofkVamoxP69ny3%2FUzKtzh75Ef23qyO0I1gc7z9UVaKoJnq4i8lFiTB8ag%2F3TLLWnRnYLBt5ycAVgtecxzLjx6csbI78spaHO1rE82VABwvolDlB8kIgaUmFUiJNeXdmNd54ET%2BZJWuh%2BAtF%2BpcU5W2V%2BipUJp4mwX8rIfKSbJOu3R6ozBwE50UTcZXQJpF1J1jCGwaZRGRxt6tWvINOxxH8sGQ2DJ%2FQrYcXVcPed%2BLK%2BXvpxVcHjlqMdTDU3f%2B%2BpDjzDZRWDNgvSZOKkmHzCvvcLJBjqkAVVSKxntxtyqo%2BePLuN01bWMlYrtfvafBoBTqId%2B2%2BG0SSm%2F%2BFzE1RHio3Afbsw60ud6o5ud992mogBK8sSstwPCmDZiTAP4S%2Fmr4OBRS%2BcNoWq9sNILmVyFgrQuI4qBUC8XT8gEoHuu41Fk%2FennOUYbeSy2FQ628OqZBw%2BgYWmxiEPhFZjiWYsc%2BaxTbjhwukMY2CVF%2ForwzJ767oxfhFEbWSRx&X-Amz-Signature=2bf5f5f16148262d20baac9498db2aa86f06123aae8a1be966c583905908a0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYKWLTM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDxjA1u3pIte%2F6cSfFh95cVO%2FmSD5eu96G8PdERvUhLAwIhAM3P8klG6WeBJXGrjLyQxssnRoGSaFXC%2FR6ezJB4bQ8fKv8DCDYQABoMNjM3NDIzMTgzODA1IgzYchaB8ftL%2BU%2BkmrYq3ANQJrUC%2BgD8I8EdqPpqGx6k8doDVyElKkJGvuKvE1D5Cpe1w5RDlfUlpI3WzP19d8%2Bg3DGd9t0KwbFp5Dq5QE7QMfLhsrYXNgC3RMdC1O2sxsnMJVDNb7LQ005x6ojDzpsUnv5KlQk3AFBBLijOrgGgqAwIGEA%2BdPj1zxWpHXzpuX6KQULkBgUf%2B2CYspjjLhyqBoQJ0V940HGnrIX9YGORvucoj6ie2FmA0o65OMLYlgKPUi3OvRdeFPv28uVCz7LUaxAHGY6ThQ7OvRTIoSC84PT5y24F%2B11uGATwwhUHTY5oH6N0aLV7wTb0OKajBRRv5IaH7CnrGBf0w40iDuy5TIu8jnsTYfmCTdeYSaJofkVamoxP69ny3%2FUzKtzh75Ef23qyO0I1gc7z9UVaKoJnq4i8lFiTB8ag%2F3TLLWnRnYLBt5ycAVgtecxzLjx6csbI78spaHO1rE82VABwvolDlB8kIgaUmFUiJNeXdmNd54ET%2BZJWuh%2BAtF%2BpcU5W2V%2BipUJp4mwX8rIfKSbJOu3R6ozBwE50UTcZXQJpF1J1jCGwaZRGRxt6tWvINOxxH8sGQ2DJ%2FQrYcXVcPed%2BLK%2BXvpxVcHjlqMdTDU3f%2B%2BpDjzDZRWDNgvSZOKkmHzCvvcLJBjqkAVVSKxntxtyqo%2BePLuN01bWMlYrtfvafBoBTqId%2B2%2BG0SSm%2F%2BFzE1RHio3Afbsw60ud6o5ud992mogBK8sSstwPCmDZiTAP4S%2Fmr4OBRS%2BcNoWq9sNILmVyFgrQuI4qBUC8XT8gEoHuu41Fk%2FennOUYbeSy2FQ628OqZBw%2BgYWmxiEPhFZjiWYsc%2BaxTbjhwukMY2CVF%2ForwzJ767oxfhFEbWSRx&X-Amz-Signature=1846bbbf011a2cfb5d9eaaf63097eed0abfa5b68910839c262f03bf8a77dce96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
