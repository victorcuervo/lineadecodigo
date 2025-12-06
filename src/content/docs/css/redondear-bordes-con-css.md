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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE6MY3Y5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2bOfDsQnxZQkHG1T8y3nzahD21AvaDkAUlG9JDmJg5AiA8HwocdltlgdDkdTS4mTqK%2FzulcIeF8YwONymX0Cig2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdDC2yPnKvW%2BG70FZKtwDIhzI%2BetpdFJxEotpqXtWoBo5kXneyOULBSteScnBIBO2mjFnnauW4OIVRaYZbD8UqF%2BS06TwHRdHxeQ64nlpmb5nHPYXAl2xL75DjMYCkLYABRaxDnPNwHQMCwLauuBFxwdKYrXJnBUlAlEW46pearUcfHS9I70zvD8%2FsFaqH7MF1IaG3v0l8JeKjS46cVokuMiMUNTWvUJcrktgWXHNDHgym7P3QrsJwli8M9g37sfezSsoYfwLRfEbgN9mTSe5R1O0CllLv%2BPqcBNs7bdOmPytlnstqAhVPO8WPiO1b8B4dM9pYwc4K9JDPD9BGAVpIT9lI06dvAr5IK4106Cz%2FEHcmk5Wz3UxvklHyfJjl%2FVMmOaPIQdhaniWIQFYAR1qioiB34OnrfSTxM13wb3apc147fXTev8CF2O8tO0KFZuIf3BJLrbkIfLg9qmquVbDdJJqVHuAukSpwcICmRk%2Fy2R4F%2FEmNjPizviOUNriGBT5e2HeHDB8Eq7WigOh2JI%2F7Lz1cJ0z%2FTShoXsT5pc8BZcVw6TO78C8ruCgMQ0eS%2BeqFGDWtCljnUjcOC2hJgCEAzzvcnrrsJST7axEaZp8E2Pq8aezH%2Btf1SRRFXB7oGv%2B3GCfoafDoLDrEuwwrcHRyQY6pgGu9oXxz1YR4YeUa9iYaI8oJe6mgZDDMqxDcgm2hFaXR21bsBJKVlrQt0aG70V%2FrACMJbNCu13p0YQc%2FFHvHhZlQIzggSAi4MCX4A2HGiQRHxE9W4p9XnRkiE3AsRNJyiceYz6TT2ezJLaaeW8hWGAmIUxdRZcZhXJJUlNwAPNXab1RxTVr0msTRp1tB65kTVkFdstVax2ufeuz9eRrz2cQxAp8xawt&X-Amz-Signature=d740870328df848d6409ee2e0cb1d90a12c149ea5367f1bdbfa7466e0fd26353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE6MY3Y5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2bOfDsQnxZQkHG1T8y3nzahD21AvaDkAUlG9JDmJg5AiA8HwocdltlgdDkdTS4mTqK%2FzulcIeF8YwONymX0Cig2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdDC2yPnKvW%2BG70FZKtwDIhzI%2BetpdFJxEotpqXtWoBo5kXneyOULBSteScnBIBO2mjFnnauW4OIVRaYZbD8UqF%2BS06TwHRdHxeQ64nlpmb5nHPYXAl2xL75DjMYCkLYABRaxDnPNwHQMCwLauuBFxwdKYrXJnBUlAlEW46pearUcfHS9I70zvD8%2FsFaqH7MF1IaG3v0l8JeKjS46cVokuMiMUNTWvUJcrktgWXHNDHgym7P3QrsJwli8M9g37sfezSsoYfwLRfEbgN9mTSe5R1O0CllLv%2BPqcBNs7bdOmPytlnstqAhVPO8WPiO1b8B4dM9pYwc4K9JDPD9BGAVpIT9lI06dvAr5IK4106Cz%2FEHcmk5Wz3UxvklHyfJjl%2FVMmOaPIQdhaniWIQFYAR1qioiB34OnrfSTxM13wb3apc147fXTev8CF2O8tO0KFZuIf3BJLrbkIfLg9qmquVbDdJJqVHuAukSpwcICmRk%2Fy2R4F%2FEmNjPizviOUNriGBT5e2HeHDB8Eq7WigOh2JI%2F7Lz1cJ0z%2FTShoXsT5pc8BZcVw6TO78C8ruCgMQ0eS%2BeqFGDWtCljnUjcOC2hJgCEAzzvcnrrsJST7axEaZp8E2Pq8aezH%2Btf1SRRFXB7oGv%2B3GCfoafDoLDrEuwwrcHRyQY6pgGu9oXxz1YR4YeUa9iYaI8oJe6mgZDDMqxDcgm2hFaXR21bsBJKVlrQt0aG70V%2FrACMJbNCu13p0YQc%2FFHvHhZlQIzggSAi4MCX4A2HGiQRHxE9W4p9XnRkiE3AsRNJyiceYz6TT2ezJLaaeW8hWGAmIUxdRZcZhXJJUlNwAPNXab1RxTVr0msTRp1tB65kTVkFdstVax2ufeuz9eRrz2cQxAp8xawt&X-Amz-Signature=ce6e84c82cb0797cfc48a090b0766121bf29fe4cbd4be50484a2bbd67e7b1842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
