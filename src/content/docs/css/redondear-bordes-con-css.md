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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFNPLX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzGGotjRouzO6%2BrkGQBPgbW73O%2BzsoP93cMwUX%2BCv%2BkAiAsz%2BQb0Vif4JphaXsqnNkYMoRrpJTAsH6goqALrxCLdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMGsHSmsWrAb4xZNuxKtwDeA1V%2B%2BKnAutFbQS%2FwWOKCfAL8FZxtfsHeo3lhwr9PYIR83aP69zqMZ7ehZE8mL8jz9eFf45dllF46XxOpmK21lFIQ4m%2Fu7hDrL%2F9jWlX%2FQ0d38dtHNklkoij1NwqJnQYuCjnX7dOcbnvrmvulfw9orVn4k%2FVJ%2FiQcKkfcWnZFs7nBFpCVbF4OFN5KQgeeFysykkMG%2F2O4hEIHURFcogFrZ335MykN5Q3eou5s0XMjULv2vJHsBdQOkfMcYw%2FnefwyA4H1jWdKRgc%2FsvS%2FWLKGhb0QVckzIlgYYSjajpADlHVfLM%2FSqCzg6wA0hO9V6%2B814VaacHG%2FG1XH0AX43%2Bi1U0mWqVl8bnuvhoSgbd70tKr%2FhyViMQN4TrRJyVuBqxswy0KekQiD%2Fq%2FusSORM4%2Fn2YLVODEshh3Mpko5tXkUGKBd5rS3OONo7D45mrfyrrzCkhmSFOeQ4U2rNW3B2NXq5vDl4RxbGvRS%2F4bXgE%2BXKe9wdzAKm8VYAVP8az0jY4HYNIu1VpsLISR3eim%2FdsCo7grYl2D3wv2dHCDLEAM9RmSgyJSch0FOT6JNRSeeXsz%2F96O30JeUx1r2AHYeWF40CwO%2F4yyaQLHEn3YkgrtXbTVOpTWKFRFx0jb%2FT4w6fDLyQY6pgHC53Cv4PZUvURfgyu5gYcF4UYwifqOsFXTq2HoIUU0OstMYECb3TUWGlBoRSyYg0WGshJhaSaazcDqGmCD68x%2FY3C5I9Udp7zY9wVqovjKpPGW%2BD2sagqWplzjlF%2B%2BurqFEKacmlEQ%2BEF6MaXHP6sGf4%2BAwoMjPsbcLCvMQuY%2FKigDi1CE5xK5YRGJW2q%2B1zRMBy020VKJgZiYlBnR3by7hP4TZS8D&X-Amz-Signature=963e181b750f1f6bd3947e8a53648bc16ec3102c874122f502d0e6cf3f72abda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFNPLX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzGGotjRouzO6%2BrkGQBPgbW73O%2BzsoP93cMwUX%2BCv%2BkAiAsz%2BQb0Vif4JphaXsqnNkYMoRrpJTAsH6goqALrxCLdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMGsHSmsWrAb4xZNuxKtwDeA1V%2B%2BKnAutFbQS%2FwWOKCfAL8FZxtfsHeo3lhwr9PYIR83aP69zqMZ7ehZE8mL8jz9eFf45dllF46XxOpmK21lFIQ4m%2Fu7hDrL%2F9jWlX%2FQ0d38dtHNklkoij1NwqJnQYuCjnX7dOcbnvrmvulfw9orVn4k%2FVJ%2FiQcKkfcWnZFs7nBFpCVbF4OFN5KQgeeFysykkMG%2F2O4hEIHURFcogFrZ335MykN5Q3eou5s0XMjULv2vJHsBdQOkfMcYw%2FnefwyA4H1jWdKRgc%2FsvS%2FWLKGhb0QVckzIlgYYSjajpADlHVfLM%2FSqCzg6wA0hO9V6%2B814VaacHG%2FG1XH0AX43%2Bi1U0mWqVl8bnuvhoSgbd70tKr%2FhyViMQN4TrRJyVuBqxswy0KekQiD%2Fq%2FusSORM4%2Fn2YLVODEshh3Mpko5tXkUGKBd5rS3OONo7D45mrfyrrzCkhmSFOeQ4U2rNW3B2NXq5vDl4RxbGvRS%2F4bXgE%2BXKe9wdzAKm8VYAVP8az0jY4HYNIu1VpsLISR3eim%2FdsCo7grYl2D3wv2dHCDLEAM9RmSgyJSch0FOT6JNRSeeXsz%2F96O30JeUx1r2AHYeWF40CwO%2F4yyaQLHEn3YkgrtXbTVOpTWKFRFx0jb%2FT4w6fDLyQY6pgHC53Cv4PZUvURfgyu5gYcF4UYwifqOsFXTq2HoIUU0OstMYECb3TUWGlBoRSyYg0WGshJhaSaazcDqGmCD68x%2FY3C5I9Udp7zY9wVqovjKpPGW%2BD2sagqWplzjlF%2B%2BurqFEKacmlEQ%2BEF6MaXHP6sGf4%2BAwoMjPsbcLCvMQuY%2FKigDi1CE5xK5YRGJW2q%2B1zRMBy020VKJgZiYlBnR3by7hP4TZS8D&X-Amz-Signature=a0b5a9327183b953fc96746b04e9986dce34e73b6f96233dc7ab38adee7eef83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
