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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O66WQMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzSu83XKGUrxv9dxbVPTowHffEfx15Cr0jDF0OPtQaAiBqSgkevaVGAkXM6JRdlC3FWLTvda2CS7vjY4ivZh2P7yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuAvvR2sUxgmxmUDvKtwD2ddfdeheft%2BsMZevuQexkXPMtjs8V5WJO6vrCHpPo1WhlQxeKnAOd9zplr%2FEQ%2FqPp81JbiGidzCidyBpvw3jrQsMzGdvjBFOJtvNsI03HSVnBr2puNBV4e2sp8rd%2BaYU7ib29E0pR1AL7%2BZBvlnlADnzbwROLKVY8dgLd%2BG1rr7%2FSlFP7v9KqlTtBihI9z4mHJh8EZIKmCRtbotZ3hIkaCCa3NQvofxG5EorxKS0XWtTSu298TNaa3D7v3BtSe%2BScEJkPa1qYSiO3wmSQ6YP0RXjBmOkUEkhxaWhN7z6J4pwOB2b0M4Z%2FODpuS50hDquMj1KL6l4HsqMTuCJ8gExkEK%2B2B%2BaXammlJv%2B7nrgIhrJEfJs%2FADMTSEYUPnmc%2BBIpM8LWK1MV7Je8kEFXL5jY2Zj4QWMKRMXkxE9FLLsz6JVDUxwAg8aVnK2Z0EPfnSfiLzwCgRueCNPOm%2BJ2jwRuoDHG9UNZfGS5zbMnPwqxJcis%2BzmxxJRaexUEkhNzvr60sSMqRXtackmkXO6T95BzANGKg9d0bhPRq5Yp5DXpyYDx73u5dK8ojO0sC1qjSWRqn9rQGmQDAc4ZSAIKyVJEw%2BIzHBVdgSson4FzHlsn6NEdvSHkhHI6OCnIvYwq4zIyQY6pgHGEhPwb%2BKscUeN53OTA8o4ivVPZbTYgmebgi6NJfAppgNWE6xWJWqOHERJf2RZOhpbBxSbRt8CTgqVG7lfuRv7gnDxhll4y5%2BfihnSARjWp3hE87%2BpcXTeDZxTKsllirZ%2BapJHfemPUgaB%2FI36HyspWb%2Fo7P2OSPBBAQTl89pr8ZBSzWS65%2FswDsmoG%2BFG54J6uSr%2FIteZIE569K9nBfAw3bqmZEY6&X-Amz-Signature=f2648920cfe2ecad8c39a0502381c2e6de1c084f0cb94a2f6fc7aec11c3ea952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O66WQMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzSu83XKGUrxv9dxbVPTowHffEfx15Cr0jDF0OPtQaAiBqSgkevaVGAkXM6JRdlC3FWLTvda2CS7vjY4ivZh2P7yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuAvvR2sUxgmxmUDvKtwD2ddfdeheft%2BsMZevuQexkXPMtjs8V5WJO6vrCHpPo1WhlQxeKnAOd9zplr%2FEQ%2FqPp81JbiGidzCidyBpvw3jrQsMzGdvjBFOJtvNsI03HSVnBr2puNBV4e2sp8rd%2BaYU7ib29E0pR1AL7%2BZBvlnlADnzbwROLKVY8dgLd%2BG1rr7%2FSlFP7v9KqlTtBihI9z4mHJh8EZIKmCRtbotZ3hIkaCCa3NQvofxG5EorxKS0XWtTSu298TNaa3D7v3BtSe%2BScEJkPa1qYSiO3wmSQ6YP0RXjBmOkUEkhxaWhN7z6J4pwOB2b0M4Z%2FODpuS50hDquMj1KL6l4HsqMTuCJ8gExkEK%2B2B%2BaXammlJv%2B7nrgIhrJEfJs%2FADMTSEYUPnmc%2BBIpM8LWK1MV7Je8kEFXL5jY2Zj4QWMKRMXkxE9FLLsz6JVDUxwAg8aVnK2Z0EPfnSfiLzwCgRueCNPOm%2BJ2jwRuoDHG9UNZfGS5zbMnPwqxJcis%2BzmxxJRaexUEkhNzvr60sSMqRXtackmkXO6T95BzANGKg9d0bhPRq5Yp5DXpyYDx73u5dK8ojO0sC1qjSWRqn9rQGmQDAc4ZSAIKyVJEw%2BIzHBVdgSson4FzHlsn6NEdvSHkhHI6OCnIvYwq4zIyQY6pgHGEhPwb%2BKscUeN53OTA8o4ivVPZbTYgmebgi6NJfAppgNWE6xWJWqOHERJf2RZOhpbBxSbRt8CTgqVG7lfuRv7gnDxhll4y5%2BfihnSARjWp3hE87%2BpcXTeDZxTKsllirZ%2BapJHfemPUgaB%2FI36HyspWb%2Fo7P2OSPBBAQTl89pr8ZBSzWS65%2FswDsmoG%2BFG54J6uSr%2FIteZIE569K9nBfAw3bqmZEY6&X-Amz-Signature=8acfb671386f97e402a877b929e7cfa30df0eb6389d71a3f54a7d91fbe27e67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
