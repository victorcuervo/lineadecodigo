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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=3ac8d31e22ca5a2a0b525f491cf4203a45ef13a7b9d16f96de6695760906c548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=a940222ef555f90e1b5be81992f2db79cc90db65c985d5247603ccfd46ce9ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
