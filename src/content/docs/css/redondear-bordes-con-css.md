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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGSXCLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD87beT4kNQlN3Y4rhxvWC3i0cb3O7nPmwWVDHXnVUIKwIgd81B696VQ17E0CmqqEzzYeaHxqbwyvAEUjkFEg42K4sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5DGq1KxHAalztjaCrcA8XQWehuAzKmdsm2EykBYm2HX91TGJjvN6Qz8aE%2BYQQANZeCi1LSV6gpPDJJFEmzQg9isLRGIiaOdVU02XdSniBBm8S2ydajTA5plog%2Fob%2FbJy4uNyTOLCmIXd0MG7MIdKtR8lY8PDR85Ntf8saBP%2Fi2fra0hBf%2BbJ2b3fhJb5tfT3V74pJUYG1ZLTmXbwr6SnNEht3x3FaQ2cl7421j0lbw1lxd2OXFkV2h5m2M7zltNRncf0u3oE0uym8FE3WyTBCa8fUv%2BkHAvz0j%2Fg3FCZtDysO9ATMdZhtf246b9L3z8QCdo%2B%2BDnZsjLVi7yfE0nHziMulzwA4wM2u8oty7EnuGhVHiASIw7eueBYOp7M8okzwvWRo7hxvNX8Z4ye3IjmuZtDi%2BxfBP4637GhnOCguyEaiEIrMN3AnB6aQMnycbKKq%2FN0SJD1oQyIRSm1Qa%2BT9%2B0Y9g%2BNVsYgL8gyA2EAAg72Qn7wxreSBB%2FyIcARVATZQrdGliaF4V9cKf6VjR47o%2F9HasC9%2Bbo46wxSSuA2e9zi3vVD5PkxF0S6KlYXBWsqfDP6ixnxk4wpENtvluLeIy%2ByKXgmhofjK%2Fr1Nq5AXU8Hzp%2BeG73yqpaFE5LrNRsonXQT5NKjh85fB%2FMJGd1MkGOqUBFSUt4eLPJsqSLh6SY8wf2EzJdmlJcb5SzK5wWMnMoCK1xyrdHoHWw6fsnKb01z6gqODtlP32xBusOVV8fnJjefG%2F96bWg2xGhQrvYWYLV3qF%2BEJx44c9WIk%2BLlFmTjyTwCpCMsnN6q9wxnbdqgscRJ8CNOzcs5y2ygi2LFOyYEA%2BZOLeX%2Flfl8mz7RV7EtR%2Fv0aM0Ja0BW20Nd6xFIa%2Fsp4O1YKu&X-Amz-Signature=1991d03f18007c7dbd15a23d759ee3331a82659a4c0894c31a63e495656ad849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGSXCLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD87beT4kNQlN3Y4rhxvWC3i0cb3O7nPmwWVDHXnVUIKwIgd81B696VQ17E0CmqqEzzYeaHxqbwyvAEUjkFEg42K4sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5DGq1KxHAalztjaCrcA8XQWehuAzKmdsm2EykBYm2HX91TGJjvN6Qz8aE%2BYQQANZeCi1LSV6gpPDJJFEmzQg9isLRGIiaOdVU02XdSniBBm8S2ydajTA5plog%2Fob%2FbJy4uNyTOLCmIXd0MG7MIdKtR8lY8PDR85Ntf8saBP%2Fi2fra0hBf%2BbJ2b3fhJb5tfT3V74pJUYG1ZLTmXbwr6SnNEht3x3FaQ2cl7421j0lbw1lxd2OXFkV2h5m2M7zltNRncf0u3oE0uym8FE3WyTBCa8fUv%2BkHAvz0j%2Fg3FCZtDysO9ATMdZhtf246b9L3z8QCdo%2B%2BDnZsjLVi7yfE0nHziMulzwA4wM2u8oty7EnuGhVHiASIw7eueBYOp7M8okzwvWRo7hxvNX8Z4ye3IjmuZtDi%2BxfBP4637GhnOCguyEaiEIrMN3AnB6aQMnycbKKq%2FN0SJD1oQyIRSm1Qa%2BT9%2B0Y9g%2BNVsYgL8gyA2EAAg72Qn7wxreSBB%2FyIcARVATZQrdGliaF4V9cKf6VjR47o%2F9HasC9%2Bbo46wxSSuA2e9zi3vVD5PkxF0S6KlYXBWsqfDP6ixnxk4wpENtvluLeIy%2ByKXgmhofjK%2Fr1Nq5AXU8Hzp%2BeG73yqpaFE5LrNRsonXQT5NKjh85fB%2FMJGd1MkGOqUBFSUt4eLPJsqSLh6SY8wf2EzJdmlJcb5SzK5wWMnMoCK1xyrdHoHWw6fsnKb01z6gqODtlP32xBusOVV8fnJjefG%2F96bWg2xGhQrvYWYLV3qF%2BEJx44c9WIk%2BLlFmTjyTwCpCMsnN6q9wxnbdqgscRJ8CNOzcs5y2ygi2LFOyYEA%2BZOLeX%2Flfl8mz7RV7EtR%2Fv0aM0Ja0BW20Nd6xFIa%2Fsp4O1YKu&X-Amz-Signature=b56dbd83995f540863ca43349644e8e2dac528e2bc6e31a32d3b883873d68f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
