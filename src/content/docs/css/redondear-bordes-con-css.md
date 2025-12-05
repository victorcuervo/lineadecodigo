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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUD55A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC00NQ3A8bzvPuFL75h5QoLUajLr7aFkvyJuua7RgbuVwIhAJnYGQKv0Oiz6nbDQ9O1z6ecMOx8m2OLl3NpQ5kPEc3JKv8DCGAQABoMNjM3NDIzMTgzODA1IgyVz%2FDfgIKBAsE6GZ0q3ANGKgEOnTSaVr3Nz%2BtRB743W0PiGwJ5aVrSWQ5kd6mI14ejDl0W7EzO0ksCi2wdr22d2EM9LQ9YgUrPdknBatiIEHrzvTyekCtBKXHbNpWKayoU19SlyIjyRH6wzDEqHsLTpVmuFkSLae0I4au133Kgm4Ol4hUrtbXHsMDTR3GN9Qg1gs1qF8nyo0FsgstV5uHjMrYb7i5j2gyj0hTRb9nvazA4VdxM5Qiplfqk84WyOxCC3GIzJWcH8PhnehXNqIO9bs4WvPLXw%2BYnVqTdv0BTic5NoT%2FpxFYAHik8WV9i9aDCzMag9Ju6mbfJUrNiEZCKFQ5cih3UVXm5pqyS%2BwBkK9bXWkzGTwUfs2yS5VO%2BhI5I2ic%2BN1efCq5tmzaCRkJtPjbfgRa4tWU53sW5lB7dqkOk9Xd%2FmGKqhtuKBoZPsH2D6NEEnu%2F9w5dfh8G3DwVVIgPx3eQTpgDVIPriqoqkt387WzGs6gP0tqdsIDXC7n%2F90wDiSOpmE0%2F8GkzoE%2B0RUkr7AJtlLn3p%2FBQjr2%2BFK70cRqJ1sLaYIRLep%2FiJYhiXaV%2BCSbNz1B4zzJT2zHttdW99Ubzutl3%2BNDhkztJanIWflB5MJHPVuMzsEJW09EOJaqwOxRnL04AG5zDX5cvJBjqkAVYzoMfieCHB47pTYyHIoNMUeO6Od6tTErsisCha%2Fe6w5ZHoRo%2B7iO7HhgZ9E5E1xzgv2%2FRMFCjeSfS2zfRExca3RAMdqU6QKgitAjKEp%2Fe%2FNCqind8fzReSJWpSJZQpUPBvmrhriSMLyAhejyBEAhYHLdP1mxu7SOQxsS9fkzO4ZZmIk3qNRZJ%2Fs1Fcxy%2BAlaZDEjLGP7QH5xaXHQYFSEwLshaf&X-Amz-Signature=3f58d72e9cb0a632b5eb05b234a8d6d887971949ea9b16d087ad44815b19688e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUD55A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC00NQ3A8bzvPuFL75h5QoLUajLr7aFkvyJuua7RgbuVwIhAJnYGQKv0Oiz6nbDQ9O1z6ecMOx8m2OLl3NpQ5kPEc3JKv8DCGAQABoMNjM3NDIzMTgzODA1IgyVz%2FDfgIKBAsE6GZ0q3ANGKgEOnTSaVr3Nz%2BtRB743W0PiGwJ5aVrSWQ5kd6mI14ejDl0W7EzO0ksCi2wdr22d2EM9LQ9YgUrPdknBatiIEHrzvTyekCtBKXHbNpWKayoU19SlyIjyRH6wzDEqHsLTpVmuFkSLae0I4au133Kgm4Ol4hUrtbXHsMDTR3GN9Qg1gs1qF8nyo0FsgstV5uHjMrYb7i5j2gyj0hTRb9nvazA4VdxM5Qiplfqk84WyOxCC3GIzJWcH8PhnehXNqIO9bs4WvPLXw%2BYnVqTdv0BTic5NoT%2FpxFYAHik8WV9i9aDCzMag9Ju6mbfJUrNiEZCKFQ5cih3UVXm5pqyS%2BwBkK9bXWkzGTwUfs2yS5VO%2BhI5I2ic%2BN1efCq5tmzaCRkJtPjbfgRa4tWU53sW5lB7dqkOk9Xd%2FmGKqhtuKBoZPsH2D6NEEnu%2F9w5dfh8G3DwVVIgPx3eQTpgDVIPriqoqkt387WzGs6gP0tqdsIDXC7n%2F90wDiSOpmE0%2F8GkzoE%2B0RUkr7AJtlLn3p%2FBQjr2%2BFK70cRqJ1sLaYIRLep%2FiJYhiXaV%2BCSbNz1B4zzJT2zHttdW99Ubzutl3%2BNDhkztJanIWflB5MJHPVuMzsEJW09EOJaqwOxRnL04AG5zDX5cvJBjqkAVYzoMfieCHB47pTYyHIoNMUeO6Od6tTErsisCha%2Fe6w5ZHoRo%2B7iO7HhgZ9E5E1xzgv2%2FRMFCjeSfS2zfRExca3RAMdqU6QKgitAjKEp%2Fe%2FNCqind8fzReSJWpSJZQpUPBvmrhriSMLyAhejyBEAhYHLdP1mxu7SOQxsS9fkzO4ZZmIk3qNRZJ%2Fs1Fcxy%2BAlaZDEjLGP7QH5xaXHQYFSEwLshaf&X-Amz-Signature=f9464a8cf3422688b0247b0ea89d4b87a5ca13556295dc91ec2b2ecf95942281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
