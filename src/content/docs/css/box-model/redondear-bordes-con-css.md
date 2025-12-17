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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMJPZCS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4mVUbumLcGCzfHltmhfg3WQc2uhXOLBgWerP9bJu07wIgGLtRwaQbodRgquWdD6thELnomFtyxrkw%2FUksp7R816kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHxiA%2Bw%2FkQbE5lOCmyrcA%2Bi69cfLATEh0dPjd9t97dfaMfBHCvKNoXGrxDdfAjigDpPScLSweDXyBX87jlRaKLC3fSyYNvqQfZwduXhuqQ8Hge6mqP8i0mga2opdO%2FpA05XXH9bx%2Bdgnl4MJ%2BeucC9Vd0uyutg%2FXFxt%2FUltXlOiRg5Yhfdes6ZP%2BXZ7xooBUDuKHUl9HHhOBYrdGXoU9cvQbin6ORA6daOSGqlXmjRUQAakJCHtGjzQNpiKOa5Ex%2BIZJXMAIOBa7fceq6u5pnWpv5yTyeiXPNtU8bkYRiBWSZKcDb7RGsisToolIQKFZ9fsBbNHwGs5l1AgbskyRFqAI3Ds8GFVQGLNiPdii%2Ft2MJCQ%2FgYxVl23ePPYiCm5i1l9xZzgEfvSCNYgdg1JAF84iBgzUN1FLWCuTjjlk1mkZUJAg7PAv4vqb4BLywqFE1NlgztENOaSpdUSWufK8%2Bs1ohduyMwBto2oC2njYk8hoPNmk4d114yoK0XoRiQA162DhbrdvD%2BElsd9h6mIvDbbA1c9vPh0A%2BRVdBKXgTC3MG8qsoW7p7vWPs5ri2OWfZdt%2Fjk0KCDxIgbA1Q%2FFat1YndjkK3sDDXvdF8qfRtdBV5jjdB1ewbQAkl6NRJaHUtL5RF9eoiK62iektMMzSicoGOqUBnWpp1ZKLyRc%2BCF28h79VUvLerXT06QoRKhGBzjZ%2BDT2BWGMJb3mTMhMx3Lmg4u5%2B9UkDJGS7f4oEGabwdMFa0lClfd52W2XZ%2FYB5hBXei8FwSTYufzSmFAA1rSwWQkcCMRQlPZin8jrnzyGGeHVSPc6Z3IUfbQSfX9HwpYK9q%2F65HWDEHwSFjKIrdvxkMVzPSodvO6Mu9CqwG4%2BfAOvwGE7ibq3w&X-Amz-Signature=23e5ed8817ac2ebba77c27e62ed1fe06f22a26cf8a97d43953a396437223e386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMJPZCS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4mVUbumLcGCzfHltmhfg3WQc2uhXOLBgWerP9bJu07wIgGLtRwaQbodRgquWdD6thELnomFtyxrkw%2FUksp7R816kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHxiA%2Bw%2FkQbE5lOCmyrcA%2Bi69cfLATEh0dPjd9t97dfaMfBHCvKNoXGrxDdfAjigDpPScLSweDXyBX87jlRaKLC3fSyYNvqQfZwduXhuqQ8Hge6mqP8i0mga2opdO%2FpA05XXH9bx%2Bdgnl4MJ%2BeucC9Vd0uyutg%2FXFxt%2FUltXlOiRg5Yhfdes6ZP%2BXZ7xooBUDuKHUl9HHhOBYrdGXoU9cvQbin6ORA6daOSGqlXmjRUQAakJCHtGjzQNpiKOa5Ex%2BIZJXMAIOBa7fceq6u5pnWpv5yTyeiXPNtU8bkYRiBWSZKcDb7RGsisToolIQKFZ9fsBbNHwGs5l1AgbskyRFqAI3Ds8GFVQGLNiPdii%2Ft2MJCQ%2FgYxVl23ePPYiCm5i1l9xZzgEfvSCNYgdg1JAF84iBgzUN1FLWCuTjjlk1mkZUJAg7PAv4vqb4BLywqFE1NlgztENOaSpdUSWufK8%2Bs1ohduyMwBto2oC2njYk8hoPNmk4d114yoK0XoRiQA162DhbrdvD%2BElsd9h6mIvDbbA1c9vPh0A%2BRVdBKXgTC3MG8qsoW7p7vWPs5ri2OWfZdt%2Fjk0KCDxIgbA1Q%2FFat1YndjkK3sDDXvdF8qfRtdBV5jjdB1ewbQAkl6NRJaHUtL5RF9eoiK62iektMMzSicoGOqUBnWpp1ZKLyRc%2BCF28h79VUvLerXT06QoRKhGBzjZ%2BDT2BWGMJb3mTMhMx3Lmg4u5%2B9UkDJGS7f4oEGabwdMFa0lClfd52W2XZ%2FYB5hBXei8FwSTYufzSmFAA1rSwWQkcCMRQlPZin8jrnzyGGeHVSPc6Z3IUfbQSfX9HwpYK9q%2F65HWDEHwSFjKIrdvxkMVzPSodvO6Mu9CqwG4%2BfAOvwGE7ibq3w&X-Amz-Signature=9dfeb41926f8b083c2429e9fa2d1a0b064f2fe57ab0fcb65a1946c5bd31f0395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
