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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXJJD32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNEpT3MUOZzlpQqOyzzqv4ac6OWeV6DXFxrpldLJJkgAiBbqbcbrp1wqG%2FedRz%2B2dvrmRdCsN3OhtXbsrvrb8Bi8Sr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMax%2FNTcmyK5%2Bei6A2KtwDk5cIOy32eH10okNBhUvTD0yoAUantTQY9pLFPhZi1mgY6FQUdMb%2FWk4W8OZ94P5mVzye3kFckndN6jBHnP1%2F6jfI%2B%2BLm4eYFu9CUDFNinaXAZWIZMD1%2BsGgg4VrvGsVsEUwzzF%2BAdS%2BrPOXxXja19ZwTS84VMUXPT4nl0BAePKl3ey2qwgtoR3vCN5KnMtqBwj%2BvN3nqH4ol4KwEZkpESYxeZeU1jKIh3QsQ1uC7gi21J92iFMlYbIxMi6HuQgST1FjjB7KX7rgWdE9vYbq0%2BNJp30bm1LTr9jO07IgoDzmy%2FRv6Je1CxIDYtDCwGv7iO0QJpIa%2FhXi%2BiMjQx05wu4OLuzntU%2BlI5XZNoBpHU4a57atGEF67dR2l8Cm9QDH4b3WXhAT0Z6Su4ur64bm4bylM1VZFBSebLVWEoGe2TiHIdXGbK%2BbIbpgmIWQ4yGhLUCBqjR%2FrFru3UeKi4Xf2I5t%2BcWaiP4j9B%2B1eHdngR1DTTxRpbyaOsYGQYfr1L4TVQnmSHxn2AekI%2B%2FsYy%2BDCZ%2FcTMSdHH7Z%2Bhuvfy5IsZt4fRY%2Frz0xtdSJ5s%2BEarS9hD%2BrOx64fx16MMufnJG18r9Mw5wBpGgN6FFgMaeULCLsEVMtEKx1bzi9v5Awwpu3LyQY6pgEsYj217yzzMioWDReUXgphLKIRBkvDpNtp2O7h%2FGk74Xcmjj7aMjPixNUdory257JGobdGLBPuCEhOJCGU8mvpQ91M6Brifh050FurKWZixdxusbTd47YfXpbrbYA%2FDBeWxMkT01Un6sGrwQibQvpWxbUMJkMENx1LTtziGYS1wAk8PWAJKfFXysveLyQcju2rbPsgnQ9delXlkz3AOpNg3mKr%2FfTr&X-Amz-Signature=2f975c23973f58642abaae4ccdda2744e8aced235898edadca472763ddd260ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXJJD32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNEpT3MUOZzlpQqOyzzqv4ac6OWeV6DXFxrpldLJJkgAiBbqbcbrp1wqG%2FedRz%2B2dvrmRdCsN3OhtXbsrvrb8Bi8Sr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMax%2FNTcmyK5%2Bei6A2KtwDk5cIOy32eH10okNBhUvTD0yoAUantTQY9pLFPhZi1mgY6FQUdMb%2FWk4W8OZ94P5mVzye3kFckndN6jBHnP1%2F6jfI%2B%2BLm4eYFu9CUDFNinaXAZWIZMD1%2BsGgg4VrvGsVsEUwzzF%2BAdS%2BrPOXxXja19ZwTS84VMUXPT4nl0BAePKl3ey2qwgtoR3vCN5KnMtqBwj%2BvN3nqH4ol4KwEZkpESYxeZeU1jKIh3QsQ1uC7gi21J92iFMlYbIxMi6HuQgST1FjjB7KX7rgWdE9vYbq0%2BNJp30bm1LTr9jO07IgoDzmy%2FRv6Je1CxIDYtDCwGv7iO0QJpIa%2FhXi%2BiMjQx05wu4OLuzntU%2BlI5XZNoBpHU4a57atGEF67dR2l8Cm9QDH4b3WXhAT0Z6Su4ur64bm4bylM1VZFBSebLVWEoGe2TiHIdXGbK%2BbIbpgmIWQ4yGhLUCBqjR%2FrFru3UeKi4Xf2I5t%2BcWaiP4j9B%2B1eHdngR1DTTxRpbyaOsYGQYfr1L4TVQnmSHxn2AekI%2B%2FsYy%2BDCZ%2FcTMSdHH7Z%2Bhuvfy5IsZt4fRY%2Frz0xtdSJ5s%2BEarS9hD%2BrOx64fx16MMufnJG18r9Mw5wBpGgN6FFgMaeULCLsEVMtEKx1bzi9v5Awwpu3LyQY6pgEsYj217yzzMioWDReUXgphLKIRBkvDpNtp2O7h%2FGk74Xcmjj7aMjPixNUdory257JGobdGLBPuCEhOJCGU8mvpQ91M6Brifh050FurKWZixdxusbTd47YfXpbrbYA%2FDBeWxMkT01Un6sGrwQibQvpWxbUMJkMENx1LTtziGYS1wAk8PWAJKfFXysveLyQcju2rbPsgnQ9delXlkz3AOpNg3mKr%2FfTr&X-Amz-Signature=880b3f07d9af8f89475c2fd3af762814882194aa24711211cab1ceb14aad2016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
