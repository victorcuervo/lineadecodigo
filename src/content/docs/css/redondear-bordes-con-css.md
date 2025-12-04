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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SDKOMR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCo7drv0qt0cB7oauMiwJTTX6w2LTJ82nma9IGTgOs%2BAiBlDZtTtP94KNsLmK71ZARqNCLXInUA7jyKtmN6oLE5PSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMf2TFWs%2B43POlNT8qKtwDiN87IMaraPdpBfyIcaZFGSSV%2B390wfBvBf%2BT7a8mJeEBfoR3CxzV6KfW4nC4oiD7jIvErQKi4GULe%2BTicOniyv29rM75pnq0MyiCi6UieCotaba5QIqffZRFFT98x72lTqElUA3z9GlwtEAQjOGufX6vY08TOwWHUmaIDm6ymoqe6lzT680tmbbusVcMouJjcONYowyMXYTmA4efPe%2FVdEMC0LLiGcPzr%2BAUmza6LniRWKVCPO5iSYeSOUSR4YycUGGYTa76hSQIfE5Wn9Cdd%2BKzK0X%2B6pElI0o2F6oEvk%2B7wViWKrzH2nCis75sFXZdxis%2FI3AV9l9QxJScee2oeOu0EcDhteaFp09Xps6k8rCMBWm4T0cu3OckHLq0EG0mMKRntUTeamHNRjuL4EXVdZbEsv1AATvZa9leQHz%2B96oM6OG21MWaOdLcZ6MQQDpk4GaulMFBvMDjgWYKPoQatw6PBBm5uePA%2BjMVLjwVwszLDWcuQoApJNnhuiTg3WiBXj1HahhAjcUl5JwrsqeiZuMCWp0LxzrdeHY5ory7nF1kzNwhq8AT19fEsxWAsXWoTjTOxPoj4RFsUDCZB8M0gN9boyKqdtnxjctnuhN13p8XkqdL5yZyChSQO9kw44zIyQY6pgEUVZSA7e81BNgJYxrFOL%2FNWxacPXuA697fmXQjOk3C8ysolbtW%2FlpEIhhfsw2Zt4ECjKdpjQgv34hbtKH2FxrOX9Q2b26Iw2W4Bezp4KDEjuys%2B7f8MjXcGRA83XPm34Uo92Ij8ipwHypZjsqpVRk%2FRpWdUyypOKkuSv06IflZfNWW179Zp%2BX%2B5ax6uGTDARwA0hZYT7f%2FJ18Z06OP73YTsKnzUEJt&X-Amz-Signature=a7b30dc07c2f9b24b12bdae393d91207f8df2ae68b9539438200e3c45ff773c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SDKOMR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCo7drv0qt0cB7oauMiwJTTX6w2LTJ82nma9IGTgOs%2BAiBlDZtTtP94KNsLmK71ZARqNCLXInUA7jyKtmN6oLE5PSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMf2TFWs%2B43POlNT8qKtwDiN87IMaraPdpBfyIcaZFGSSV%2B390wfBvBf%2BT7a8mJeEBfoR3CxzV6KfW4nC4oiD7jIvErQKi4GULe%2BTicOniyv29rM75pnq0MyiCi6UieCotaba5QIqffZRFFT98x72lTqElUA3z9GlwtEAQjOGufX6vY08TOwWHUmaIDm6ymoqe6lzT680tmbbusVcMouJjcONYowyMXYTmA4efPe%2FVdEMC0LLiGcPzr%2BAUmza6LniRWKVCPO5iSYeSOUSR4YycUGGYTa76hSQIfE5Wn9Cdd%2BKzK0X%2B6pElI0o2F6oEvk%2B7wViWKrzH2nCis75sFXZdxis%2FI3AV9l9QxJScee2oeOu0EcDhteaFp09Xps6k8rCMBWm4T0cu3OckHLq0EG0mMKRntUTeamHNRjuL4EXVdZbEsv1AATvZa9leQHz%2B96oM6OG21MWaOdLcZ6MQQDpk4GaulMFBvMDjgWYKPoQatw6PBBm5uePA%2BjMVLjwVwszLDWcuQoApJNnhuiTg3WiBXj1HahhAjcUl5JwrsqeiZuMCWp0LxzrdeHY5ory7nF1kzNwhq8AT19fEsxWAsXWoTjTOxPoj4RFsUDCZB8M0gN9boyKqdtnxjctnuhN13p8XkqdL5yZyChSQO9kw44zIyQY6pgEUVZSA7e81BNgJYxrFOL%2FNWxacPXuA697fmXQjOk3C8ysolbtW%2FlpEIhhfsw2Zt4ECjKdpjQgv34hbtKH2FxrOX9Q2b26Iw2W4Bezp4KDEjuys%2B7f8MjXcGRA83XPm34Uo92Ij8ipwHypZjsqpVRk%2FRpWdUyypOKkuSv06IflZfNWW179Zp%2BX%2B5ax6uGTDARwA0hZYT7f%2FJ18Z06OP73YTsKnzUEJt&X-Amz-Signature=7c7582f2d80ebbbad72801821847d2bc35eeb194c0f9fe397108e2ee0dae2569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
