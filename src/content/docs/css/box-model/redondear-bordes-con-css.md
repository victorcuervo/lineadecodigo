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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOO7F2H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtW7U%2B%2BxU%2B4Y9xq1NydlOsFx8%2BlNfTBSn1JCA7PALJ2AiB0AuPxkw0hxPc9tomOMGu0belY%2Bousa6vrhcMAofuNqyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSeZ8fIRh7zXTPIdKtwDoBKiSeLHYdqF45n8M9ysldIn8glCULWAw%2Fg2WZwq5aDRlB3vKaTWiI%2B6H4yGlktiBCY6bwm3VhX70UFms08HXS%2F%2FoXUQYMBmagkR2PaETVUFkXBv7cim9pEqmPVoUcV%2FEvlf65IevQEEonaX3ML%2BGGvQSY1vWzmqr1mCbB2szELwj1SKQQTJQBvpXPd%2BeP7DDEpTH0%2FRMYdk51o1JsWjJiQoaT971DiqTG57riGljRUCnZx9Ihz3AJx%2F2TPPbRsXAme5gMkBFachbnjxqmCAWF9HcI0MkLKid34cm25H%2FekH0muqw5enVPCpTnjO7NBkBiiOF5bzc6UcORksOllS%2F46Zn1zfrL6xv8aJcsSJzy%2B2x0AKi4yl3q9glvYoSINVNaR2%2Ft%2BBAb8QhDcrPMM0NHkNqj5CH9Co8%2FVHkxpQ7zk9gX4fS9XI36h3rXEPTkUEMY85Ep1ug5nSzBuWwXzbPWSJTXc69gJKdkVNhJyohodB75uF6AgVmHVXmr27qvsP0YynnIpBiVjirz%2BKESw5TI6OvfmeopjWLZskbyQPNOaKjI%2B%2FV1FvVsfXLTbCa7OLyMopEyXWHDlQCHyA32smdRmPhD32J8uBFJrGhA0Z%2BfohiLJD5z3DjGlsctAwlIGLygY6pgHOA6r%2B1sK3xvB%2Fn7b20B8CZaFnW5vDVl9Qm0FzbOyzPc5jt3g2M5zZOqUYhwwpTDexy5FMfuJDVbBtl%2BOxWoMwkP3qQhylD%2FPRXsN0qCYJEymrtVYZ%2BnhMl2GnTqItLDbB6nR%2BgAYn3W9%2BWhRBWH7K90An5%2FaTO9Tjq2YJuzqtBBWd%2BSXWCSCDXiqP93McMpLRBY%2BBcTzvFB%2F50RGTduQaiIiEVzMU&X-Amz-Signature=9503aa4015c4c645498158731b5100cc5d85003d59b76b437d2cd446a7156b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOO7F2H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtW7U%2B%2BxU%2B4Y9xq1NydlOsFx8%2BlNfTBSn1JCA7PALJ2AiB0AuPxkw0hxPc9tomOMGu0belY%2Bousa6vrhcMAofuNqyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSeZ8fIRh7zXTPIdKtwDoBKiSeLHYdqF45n8M9ysldIn8glCULWAw%2Fg2WZwq5aDRlB3vKaTWiI%2B6H4yGlktiBCY6bwm3VhX70UFms08HXS%2F%2FoXUQYMBmagkR2PaETVUFkXBv7cim9pEqmPVoUcV%2FEvlf65IevQEEonaX3ML%2BGGvQSY1vWzmqr1mCbB2szELwj1SKQQTJQBvpXPd%2BeP7DDEpTH0%2FRMYdk51o1JsWjJiQoaT971DiqTG57riGljRUCnZx9Ihz3AJx%2F2TPPbRsXAme5gMkBFachbnjxqmCAWF9HcI0MkLKid34cm25H%2FekH0muqw5enVPCpTnjO7NBkBiiOF5bzc6UcORksOllS%2F46Zn1zfrL6xv8aJcsSJzy%2B2x0AKi4yl3q9glvYoSINVNaR2%2Ft%2BBAb8QhDcrPMM0NHkNqj5CH9Co8%2FVHkxpQ7zk9gX4fS9XI36h3rXEPTkUEMY85Ep1ug5nSzBuWwXzbPWSJTXc69gJKdkVNhJyohodB75uF6AgVmHVXmr27qvsP0YynnIpBiVjirz%2BKESw5TI6OvfmeopjWLZskbyQPNOaKjI%2B%2FV1FvVsfXLTbCa7OLyMopEyXWHDlQCHyA32smdRmPhD32J8uBFJrGhA0Z%2BfohiLJD5z3DjGlsctAwlIGLygY6pgHOA6r%2B1sK3xvB%2Fn7b20B8CZaFnW5vDVl9Qm0FzbOyzPc5jt3g2M5zZOqUYhwwpTDexy5FMfuJDVbBtl%2BOxWoMwkP3qQhylD%2FPRXsN0qCYJEymrtVYZ%2BnhMl2GnTqItLDbB6nR%2BgAYn3W9%2BWhRBWH7K90An5%2FaTO9Tjq2YJuzqtBBWd%2BSXWCSCDXiqP93McMpLRBY%2BBcTzvFB%2F50RGTduQaiIiEVzMU&X-Amz-Signature=41ff3cdaf24d5297f1262a373868d91e6ea0a2945b8fb3cedb81cdd3400adafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
