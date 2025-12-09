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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGJTCBK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvsAuwBwTuHO1EykNst0%2BsHjO8kzhsWKeRHzjHUZ6nDAiEApRI4WhC19ajjOijs2FUAO%2B%2Fv2WyAGGivLy%2FQ2nc9JFMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEnqezil111a69x8yrcAzHYAlPMiNbzcC1CDUrDseROhItKiMufRatq1A6Vpvwy0sGwIE3MeO9QYPUYA7rr7teqp%2Ft5inierSkZNaavRrEYHRI9lgtvPWVhBTi%2FOtMgSKTtQ25pXeeuQEvyuU56ndFWTNtPwPtugoPwB4bLjakd%2FszlWUZT9Vj8fIHEARFkzSoV9J46tWzyYVmEGxsc5OjMyn580Dnz%2F02WXGpA8ERwejQ3dntFRvol4TXne4hCW0i%2FUVHnTTReDZXOeKN85DhFsFAuQQC3s8Jf7aNjrhgW%2BBlP4P9t6t8Vpxd0bvoL6uTG6paDYqqBLyRtTzJWw%2BNRIm%2BepinlFJpLJTxJmydS8HiKcATkqsZMg4v7cabIr99IWav5W5ESIb2%2F6p%2Fd9cIOTFJqKk1nTAwQtZLJyH8Azc7faerBs2%2FnqmyftShq38JtYxWPaSJcMDHRH1gHbZM753WRLlOJwLhFnBEAe73RFy5QmK8LEAwJcqR8UiRdhAAr9CHEnLb6CZBh2Lpu9pCPdI2v7tcrerFApgyf63quOcAQqUNCDWFJHlarM%2B%2FuOv5Da40FDtbmPw0Bu4CX%2B6QfgafES4ND9IGCiDUtnSiM3xjsC%2FhLqTlQgGAaV40WnIaELfOQT00jDjoWMLbD38kGOqUBdsX1z7GW%2BHl5TyLJvNVtjD%2BlrfKRSUzwhXbK1MTt3mpFsb%2B1Sp8AvtXmZrz4GKaypuo0NXHcPNKJO7xvFygPLnkeEiFtEqT5OvLrhfP19VnEsJwqKqFIaRQF3FoNgMM7yPDBGKhrPkGsZmcopc8J1yGbPChN1YKv2INX09U6EkQTdCFaTvI1fSV1nbY9yCvvLR476yVN6ZG%2Frt3YWNtX9VdIg3p6&X-Amz-Signature=dc1e59785e03e2910be6e96ee03f8ec567c33e0b390ccd140dcc0bc2450b2827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGJTCBK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvsAuwBwTuHO1EykNst0%2BsHjO8kzhsWKeRHzjHUZ6nDAiEApRI4WhC19ajjOijs2FUAO%2B%2Fv2WyAGGivLy%2FQ2nc9JFMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEnqezil111a69x8yrcAzHYAlPMiNbzcC1CDUrDseROhItKiMufRatq1A6Vpvwy0sGwIE3MeO9QYPUYA7rr7teqp%2Ft5inierSkZNaavRrEYHRI9lgtvPWVhBTi%2FOtMgSKTtQ25pXeeuQEvyuU56ndFWTNtPwPtugoPwB4bLjakd%2FszlWUZT9Vj8fIHEARFkzSoV9J46tWzyYVmEGxsc5OjMyn580Dnz%2F02WXGpA8ERwejQ3dntFRvol4TXne4hCW0i%2FUVHnTTReDZXOeKN85DhFsFAuQQC3s8Jf7aNjrhgW%2BBlP4P9t6t8Vpxd0bvoL6uTG6paDYqqBLyRtTzJWw%2BNRIm%2BepinlFJpLJTxJmydS8HiKcATkqsZMg4v7cabIr99IWav5W5ESIb2%2F6p%2Fd9cIOTFJqKk1nTAwQtZLJyH8Azc7faerBs2%2FnqmyftShq38JtYxWPaSJcMDHRH1gHbZM753WRLlOJwLhFnBEAe73RFy5QmK8LEAwJcqR8UiRdhAAr9CHEnLb6CZBh2Lpu9pCPdI2v7tcrerFApgyf63quOcAQqUNCDWFJHlarM%2B%2FuOv5Da40FDtbmPw0Bu4CX%2B6QfgafES4ND9IGCiDUtnSiM3xjsC%2FhLqTlQgGAaV40WnIaELfOQT00jDjoWMLbD38kGOqUBdsX1z7GW%2BHl5TyLJvNVtjD%2BlrfKRSUzwhXbK1MTt3mpFsb%2B1Sp8AvtXmZrz4GKaypuo0NXHcPNKJO7xvFygPLnkeEiFtEqT5OvLrhfP19VnEsJwqKqFIaRQF3FoNgMM7yPDBGKhrPkGsZmcopc8J1yGbPChN1YKv2INX09U6EkQTdCFaTvI1fSV1nbY9yCvvLR476yVN6ZG%2Frt3YWNtX9VdIg3p6&X-Amz-Signature=dd519c03a65454825ffe3966b95ba3d7b451e73440a61523a8a340c7532dc8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
