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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJW72KP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClWoxX8Ti0YeP4qO0wFx3VFaDwxoFyxKDPUmDN0Ju9qAiA1cOqC9WtPWaiqaN4U3h9vN6ssumYLVJeZoKTK78mq5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSeZXm3yQzZYKhu%2BKtwDcHJkSLjDPM0S6f1dECFDhc7GLCVD4FnNrRAyGf%2FYe4cp%2FvWmtULACiCVXtbvTVMeowybiZln2O1AC4zh8Tn6EBR8LfQOV4ESNuixJp8SFR5ZHSiTenJvDVYEmEdPpuFpd9DePB19AfIRjmwMtvUjxLvVRWpj1IQr5vEuZy2qI1uAHIOQlqr2dRBrOa78NQgwCBfOaOx50GV8fHT%2Bw0p4uzvuCPrr%2Fiy%2BfcyGZZ%2FtbQXkhmiRj9nCHkyb%2ByFjIccVHDZTfya%2BHyL%2FeLCfmc2sv9DL68Z1yIJf2Xy2H8B%2FZWxPcSry%2Bf0a9Ms57%2FVcXoOyZMO%2B9JL%2FOPQUUWZXdAxFrwLYY4SA67rMsn28Hk4EaEh4seC2bmZww0pFhd0W%2FpRTc%2BygfNpgg8Y52HGfZp8Z5PuXsen%2F9DlnfSr9nTP8U3HhgLWE9IkZpz9VoxSSL3RxigvYUOrjnNy8ubCznhpsdqa%2BpqtSGLmmvxGykjLejB2w%2BzPq36mhdpyCH1WmSFdquXYOoGmWw7tquWfTQyDNRT256%2B61jLgv3nnFm6%2FEYpP0Wp%2FRPV43HeP947m%2B99mUrZGrnFeIVwdQhPl3frRJ1LPeDXrxX1ja0WdzzI8bhAoDeLiR%2By8Fve3WhzwwhPDYyQY6pgHEFwdHsIGgEcyrccxjsc302wUOXDSRaPsOw83hC4STUkvVK2m9BXIlTu4uT2h9Qw0cs2rU3rECb3BFIp6UsX430REt%2BsTx8ul4HrubC%2Fz3cknPqousexohEQp5HKfPQ9B4ZTMKVl9TVbt82J3LXwKfvFGrxMhuoO4HxokjHjqyp50oKkTQqLnZkxjZy3AIaqIY2C07mY4cnDjDhmclp0p3eM11HbWt&X-Amz-Signature=498699ee4ef37a8f12e0943bc2a421ec6d518b7a03474a58b19cd45319a2dc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJW72KP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClWoxX8Ti0YeP4qO0wFx3VFaDwxoFyxKDPUmDN0Ju9qAiA1cOqC9WtPWaiqaN4U3h9vN6ssumYLVJeZoKTK78mq5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSeZXm3yQzZYKhu%2BKtwDcHJkSLjDPM0S6f1dECFDhc7GLCVD4FnNrRAyGf%2FYe4cp%2FvWmtULACiCVXtbvTVMeowybiZln2O1AC4zh8Tn6EBR8LfQOV4ESNuixJp8SFR5ZHSiTenJvDVYEmEdPpuFpd9DePB19AfIRjmwMtvUjxLvVRWpj1IQr5vEuZy2qI1uAHIOQlqr2dRBrOa78NQgwCBfOaOx50GV8fHT%2Bw0p4uzvuCPrr%2Fiy%2BfcyGZZ%2FtbQXkhmiRj9nCHkyb%2ByFjIccVHDZTfya%2BHyL%2FeLCfmc2sv9DL68Z1yIJf2Xy2H8B%2FZWxPcSry%2Bf0a9Ms57%2FVcXoOyZMO%2B9JL%2FOPQUUWZXdAxFrwLYY4SA67rMsn28Hk4EaEh4seC2bmZww0pFhd0W%2FpRTc%2BygfNpgg8Y52HGfZp8Z5PuXsen%2F9DlnfSr9nTP8U3HhgLWE9IkZpz9VoxSSL3RxigvYUOrjnNy8ubCznhpsdqa%2BpqtSGLmmvxGykjLejB2w%2BzPq36mhdpyCH1WmSFdquXYOoGmWw7tquWfTQyDNRT256%2B61jLgv3nnFm6%2FEYpP0Wp%2FRPV43HeP947m%2B99mUrZGrnFeIVwdQhPl3frRJ1LPeDXrxX1ja0WdzzI8bhAoDeLiR%2By8Fve3WhzwwhPDYyQY6pgHEFwdHsIGgEcyrccxjsc302wUOXDSRaPsOw83hC4STUkvVK2m9BXIlTu4uT2h9Qw0cs2rU3rECb3BFIp6UsX430REt%2BsTx8ul4HrubC%2Fz3cknPqousexohEQp5HKfPQ9B4ZTMKVl9TVbt82J3LXwKfvFGrxMhuoO4HxokjHjqyp50oKkTQqLnZkxjZy3AIaqIY2C07mY4cnDjDhmclp0p3eM11HbWt&X-Amz-Signature=249f532727b57f65492049a129d9c0a216a10f8b58e0eee40294f7137df4e4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
