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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWUZTHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ZtVED%2BudJVgXTNnFoo%2FiEwdTli9U%2BcuuwbGQ%2FuRWXAiEAjpH%2Bb4zzqoO%2F7oDQi96uQ0R8Ob%2BMgNkCd3205QQ1ZX4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKSk3%2BCLTMg%2Ftf0YRyrcAy4F7faJegwuh56kz1%2BAGNyoiXtpHmXGqQxuamQhffjszmPfpKYxiC3G%2FTTvcbdRFNHZiqefzGGrGUHPSgsh4nN24XH1fO%2Fh6pe1zqoa1v3qiMJU8UPS3nB2LLPvrGA556prPqb9mlr8uVD%2FjgMVwIWlf%2F2FqG%2Bk8GnUTaRO1UbHTDAmLo25EmZRlyNjVMy8wUFskOAn3uBn8L1ZOQchHLMb%2BwcT93J2wS8luJb41nTZUOopM3b3GJBbPIG2uvMvN4Ah3aR1QMIRb9hGwAK04xoL0X6UT5GEAs5bxEkaMOR0gR4CCeMEPBviM1Gt%2Fpxw6gXq%2FZ64WE3qU9HyZdxDVxuXcFTg%2BtHgCRudzcE3XtIIPstVbJWI%2FdSNtRsvJpkQYfbvGTNPLhQlQXMZmjixaM2K3t2wrQQv0u2J9WGxGmtyJ80J8Y9X8%2Bu4wJeqX4Ca2kIIf5lethdawe8TrePTic%2FhsfK2ZL4lacbsYz5YMUT%2FK47zKFXsQCMYUz7A5rTXSrCYL8roUarvB08RwL%2BWooh%2BaKrijnPcK8tGsq8fzQ7xBS44%2FL9%2FZePdQSAZsUdFlBS0rgSseDV7bwRh2ymvKhT1tmUOf99OL5522LH3In71sIcxSRtnEuJkJnskMNXhisoGOqUBhgjYeu%2BR8G0iFuU9K8zKiR1tEYgqRBjLoVZt9QsVmNSwi%2BOeL6xY4gDBi8Bmj1UWEy2jPWuDqs1AMu1Qbc8L53NCYm5HesRIKv%2BP1hSoFUGvm7oslB6jLsjtywITqci2LYDLBoJ9O%2BSEo4wWjLBpfOFajL%2BzK3xkoQPv%2FviWdpeZ0Sj2f%2FOxaQ4fJXOjZ6CDdjABef6kGHrJsTNSEjlRNuPA8KNM&X-Amz-Signature=98ea13515efc6b55e1c4c5b9b78bd05b8e02c365e8c1d4c5726c3391fbf2f517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWUZTHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ZtVED%2BudJVgXTNnFoo%2FiEwdTli9U%2BcuuwbGQ%2FuRWXAiEAjpH%2Bb4zzqoO%2F7oDQi96uQ0R8Ob%2BMgNkCd3205QQ1ZX4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKSk3%2BCLTMg%2Ftf0YRyrcAy4F7faJegwuh56kz1%2BAGNyoiXtpHmXGqQxuamQhffjszmPfpKYxiC3G%2FTTvcbdRFNHZiqefzGGrGUHPSgsh4nN24XH1fO%2Fh6pe1zqoa1v3qiMJU8UPS3nB2LLPvrGA556prPqb9mlr8uVD%2FjgMVwIWlf%2F2FqG%2Bk8GnUTaRO1UbHTDAmLo25EmZRlyNjVMy8wUFskOAn3uBn8L1ZOQchHLMb%2BwcT93J2wS8luJb41nTZUOopM3b3GJBbPIG2uvMvN4Ah3aR1QMIRb9hGwAK04xoL0X6UT5GEAs5bxEkaMOR0gR4CCeMEPBviM1Gt%2Fpxw6gXq%2FZ64WE3qU9HyZdxDVxuXcFTg%2BtHgCRudzcE3XtIIPstVbJWI%2FdSNtRsvJpkQYfbvGTNPLhQlQXMZmjixaM2K3t2wrQQv0u2J9WGxGmtyJ80J8Y9X8%2Bu4wJeqX4Ca2kIIf5lethdawe8TrePTic%2FhsfK2ZL4lacbsYz5YMUT%2FK47zKFXsQCMYUz7A5rTXSrCYL8roUarvB08RwL%2BWooh%2BaKrijnPcK8tGsq8fzQ7xBS44%2FL9%2FZePdQSAZsUdFlBS0rgSseDV7bwRh2ymvKhT1tmUOf99OL5522LH3In71sIcxSRtnEuJkJnskMNXhisoGOqUBhgjYeu%2BR8G0iFuU9K8zKiR1tEYgqRBjLoVZt9QsVmNSwi%2BOeL6xY4gDBi8Bmj1UWEy2jPWuDqs1AMu1Qbc8L53NCYm5HesRIKv%2BP1hSoFUGvm7oslB6jLsjtywITqci2LYDLBoJ9O%2BSEo4wWjLBpfOFajL%2BzK3xkoQPv%2FviWdpeZ0Sj2f%2FOxaQ4fJXOjZ6CDdjABef6kGHrJsTNSEjlRNuPA8KNM&X-Amz-Signature=b0a1ff9323b80af6f91994c13438bfc43b3bed528b2f80f71877b36d256414b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
