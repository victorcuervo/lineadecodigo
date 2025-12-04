---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJKSP7M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDw7UZtxqHkJgwmYXmpCX13lj6ZTkIDpGONwpbvN6U1cAIgDLJKPdWA8CDn0L9HdSay%2F9vYMh6ElpfnpWfmt%2FKAlBIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBf510a8UaCz7B0DZCrcA%2BMPX3vmTsgCOpUC0JKcGROW8Dc%2BRqppIiYSr3fNEvFGMrciV9JREI36m5OMEU3%2Fdgre6B7Toq%2Ft%2Blft9tKabxHlDIFZHsTUwqmZoPjVUH85%2FDWzeUYMchcDvpGIk2C94NqJms6X3pqJVuusp%2BFLboxp7NdkkB5fwSa7r4fNkf1W7e2qzOO%2FpHospc2VX%2BiaU2fRtUl6hoTBgcuccOOHEZebgKO3KtYI3wNyntpd2CO3IGAYuXfS8Q%2BdcGVJXax3NdFfKZlT9IE6YgzQKDyuWKqMqKE0D2dmzDx2%2Fm8helgwSPwARJHYXC2GnKGiDxO3BLlol7AaiuTuSTKLsKIhGK74JNbOZPD6%2BG%2FKckyY7f2AGGqHAxmixVkerTjJAmcSehl5CCpwBN%2BXyDpxEi9%2Bdb0SCXvHn%2BMzOMRU8jYidDBt575KXoVr1DupEs8ns4aAP56nlaD5V%2BEEmKHZM012ss4l8%2BtpjXCqCispI3N4pgjzaJWnZGnzNyaCFUg5WnR%2BpfVdkk2UvY34u5wPvCf3S9%2FwH38Eq34YL%2FrNTaBLHUIQJgf6g3YZKunb8Y2oBlGFmuhWI22dB2gXmHSBBqoyWo67KKYceTb%2BfRetBDbUcUC9Sb80NstRxq%2BygQCpMMDnxMkGOqUBVEq2zvM7ev3r1nZAptY7YxAcFB7AUdYoDMI35TC4r6kVv2y4%2BRArY7NMuWOpI%2FpW80m206tRFyFIQT8smj8AFCT4FgVBHgh9J%2FhHH0%2FYKsPOh4gdik8hUShMWFO%2BGICzEpJQinU5nljCWRmR9b3q331QAOI4FzRet86AO5lcj8%2BgO4HvFuMATfaLrvvaNmmL2XuJOQE%2FgFRqnC2zW1Jp5BYYEAV9&X-Amz-Signature=76439d840b3c6e50e7ce7608b602c0e3b94fbdbe132d6025088fca08d998646b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJKSP7M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDw7UZtxqHkJgwmYXmpCX13lj6ZTkIDpGONwpbvN6U1cAIgDLJKPdWA8CDn0L9HdSay%2F9vYMh6ElpfnpWfmt%2FKAlBIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBf510a8UaCz7B0DZCrcA%2BMPX3vmTsgCOpUC0JKcGROW8Dc%2BRqppIiYSr3fNEvFGMrciV9JREI36m5OMEU3%2Fdgre6B7Toq%2Ft%2Blft9tKabxHlDIFZHsTUwqmZoPjVUH85%2FDWzeUYMchcDvpGIk2C94NqJms6X3pqJVuusp%2BFLboxp7NdkkB5fwSa7r4fNkf1W7e2qzOO%2FpHospc2VX%2BiaU2fRtUl6hoTBgcuccOOHEZebgKO3KtYI3wNyntpd2CO3IGAYuXfS8Q%2BdcGVJXax3NdFfKZlT9IE6YgzQKDyuWKqMqKE0D2dmzDx2%2Fm8helgwSPwARJHYXC2GnKGiDxO3BLlol7AaiuTuSTKLsKIhGK74JNbOZPD6%2BG%2FKckyY7f2AGGqHAxmixVkerTjJAmcSehl5CCpwBN%2BXyDpxEi9%2Bdb0SCXvHn%2BMzOMRU8jYidDBt575KXoVr1DupEs8ns4aAP56nlaD5V%2BEEmKHZM012ss4l8%2BtpjXCqCispI3N4pgjzaJWnZGnzNyaCFUg5WnR%2BpfVdkk2UvY34u5wPvCf3S9%2FwH38Eq34YL%2FrNTaBLHUIQJgf6g3YZKunb8Y2oBlGFmuhWI22dB2gXmHSBBqoyWo67KKYceTb%2BfRetBDbUcUC9Sb80NstRxq%2BygQCpMMDnxMkGOqUBVEq2zvM7ev3r1nZAptY7YxAcFB7AUdYoDMI35TC4r6kVv2y4%2BRArY7NMuWOpI%2FpW80m206tRFyFIQT8smj8AFCT4FgVBHgh9J%2FhHH0%2FYKsPOh4gdik8hUShMWFO%2BGICzEpJQinU5nljCWRmR9b3q331QAOI4FzRet86AO5lcj8%2BgO4HvFuMATfaLrvvaNmmL2XuJOQE%2FgFRqnC2zW1Jp5BYYEAV9&X-Amz-Signature=0c4df7a51d93fbd0856439884ae0b65ac1fea70e27f2d430407c520df6d81afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
