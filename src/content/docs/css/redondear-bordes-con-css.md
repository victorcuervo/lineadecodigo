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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIE72QJL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk8l%2Bu%2FgMRny3FooX3hgC5OpggjwhskYTrqHSaw%2BsoAAiBp0y0MYCx7L6tT5zhXJIav1EPVz3Lv3v0PySYaedPRWSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcd4kjjeNmh7gkVqYKtwDFB1Jkzy4p%2FeKfBOr1QIr6c%2FjqBcKIkwVbXeANTgY4TN71YAjBc6%2ByNJbpRklBgb8tWPKRMveAucz2gQA6NE5oROn4Jpk9lPDoEeybjXDQykbmgsaMrAMLpNKiH89KKVVItfo14BMfguGlHECB2uM4eAo5CARhAaLVf4yP17AZibVi1vfWBzjrxDYrYlKGEacBKsZISVaGrZmCqAGDtMykHJ%2B1fvo4hnso76%2FLJ9TGQLMIWXRVmRSw9cFtL7N3EtCQWG0IhiRiG56T2ZCqwvApOrLbay0qY0yqKkpSPazljUWpDhOwcMTLNrjw%2FyV2cHajSUywhxLkPOqRwW9j1Zlvi33%2F%2FXbDNopVYfm3YHd9R%2Fls%2FyHJfu%2FI5PqpIgLIxIvg6ZOo4l%2F5A26o15X2u8KZtC%2B7C6k1l3uxFNemItCMmO%2BwbiGaKlabLDEtYEvsYrAlbRkdLM3%2FbPmswNeI5Di1xXA15C%2FH%2Bo%2BBCYlEntiF18Eem4NDOPuimnx%2FhrnqTGMhVs5PZonwmeZW4sdiYXKq6P6u9VBRVofVxLf1F6ccU8V9AEqvdweQmpyH2%2FL4aDG5ZVt%2BhiS9ELjaAlbPPTHLq4szufJfDkLsNjAkMa3KNwysw8yN8mICy%2B9MHcwn7TWyQY6pgE08lWFIqtLrwvdonereZWluUekjCYMsiq%2B1vniGKiylYZjwa35lLEHQABZmZSPdl5Mfay4Mo9pdUNbdvmKR7MUYC%2B6nf18umY1QPooC4UiRrPk77vF1wt9G72OEhvdDQrRthI5qjInWJF96FVsyWrf%2F23z0foylpnHkmLB7L5LDCQgnDR%2B%2BAlUm1o1dcp4hef9EvPZumbnxNvqcvhejaqmYNjcudL%2B&X-Amz-Signature=51bc40503f53f576913b8a3d0587722933c8f4ed16a9686b7d30da61d35fefca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIE72QJL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk8l%2Bu%2FgMRny3FooX3hgC5OpggjwhskYTrqHSaw%2BsoAAiBp0y0MYCx7L6tT5zhXJIav1EPVz3Lv3v0PySYaedPRWSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcd4kjjeNmh7gkVqYKtwDFB1Jkzy4p%2FeKfBOr1QIr6c%2FjqBcKIkwVbXeANTgY4TN71YAjBc6%2ByNJbpRklBgb8tWPKRMveAucz2gQA6NE5oROn4Jpk9lPDoEeybjXDQykbmgsaMrAMLpNKiH89KKVVItfo14BMfguGlHECB2uM4eAo5CARhAaLVf4yP17AZibVi1vfWBzjrxDYrYlKGEacBKsZISVaGrZmCqAGDtMykHJ%2B1fvo4hnso76%2FLJ9TGQLMIWXRVmRSw9cFtL7N3EtCQWG0IhiRiG56T2ZCqwvApOrLbay0qY0yqKkpSPazljUWpDhOwcMTLNrjw%2FyV2cHajSUywhxLkPOqRwW9j1Zlvi33%2F%2FXbDNopVYfm3YHd9R%2Fls%2FyHJfu%2FI5PqpIgLIxIvg6ZOo4l%2F5A26o15X2u8KZtC%2B7C6k1l3uxFNemItCMmO%2BwbiGaKlabLDEtYEvsYrAlbRkdLM3%2FbPmswNeI5Di1xXA15C%2FH%2Bo%2BBCYlEntiF18Eem4NDOPuimnx%2FhrnqTGMhVs5PZonwmeZW4sdiYXKq6P6u9VBRVofVxLf1F6ccU8V9AEqvdweQmpyH2%2FL4aDG5ZVt%2BhiS9ELjaAlbPPTHLq4szufJfDkLsNjAkMa3KNwysw8yN8mICy%2B9MHcwn7TWyQY6pgE08lWFIqtLrwvdonereZWluUekjCYMsiq%2B1vniGKiylYZjwa35lLEHQABZmZSPdl5Mfay4Mo9pdUNbdvmKR7MUYC%2B6nf18umY1QPooC4UiRrPk77vF1wt9G72OEhvdDQrRthI5qjInWJF96FVsyWrf%2F23z0foylpnHkmLB7L5LDCQgnDR%2B%2BAlUm1o1dcp4hef9EvPZumbnxNvqcvhejaqmYNjcudL%2B&X-Amz-Signature=24a65a8dab2d2bd35d1b8db427a0a256b4dd4f2e0e45be78a05b085e544e81ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
