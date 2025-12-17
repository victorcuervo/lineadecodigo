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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDLGHZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9lF799ACH5GYgt1%2FE%2FvPg1XBI8%2FrC4p2ZIJkyfnZS5AIgWKKqs5Dwy%2BJRILl1NKYWiDtPOte9XLXjKnydWAMbq8gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuR5Ogd%2B3CR3yyseSrcA3dFheQ6MG%2BpFivy9U2PrXJHPySekEK5IXAZEcZOO0M4HMTLWcEp9UyHM4%2BRZz1NwEL9Gomnl3He%2FQ5tAr22yHGkNpB96VISuzqHMxSUNpqhhK9o3XCVUkyyM4vMOM0i5QythgqLOdu8RHogPBsd7G6yuU8kXHxM7X9bJ3mWz7XiiyN3vfV9iixe%2FCWmcZPJg%2F0E2RpZ10UCPuqrLD%2F3CRnActaAeTDIhvj0f3S2DJMFcTsuokD4G1E8FD62cT56y8kxtZwhlwXvZp4Svyn9U9VAJjPdwMDRsj9bhkWdysXG9SxEiSZKE%2BwbbCOij94Pb9fpI3TKXkDiFPMKdo3yU2JIXtDV1KfEFhubhy4FyRdgNo%2BxLb464ddhB9RCs5uiP6gKsR4yhYjAAzHFpcbsubsxzrqv1jyIjffpF4ivh8Zmoxme%2BkQpOrwOS7ujVqNcuaYpB99lfxxIntUsg2qbhEXx4bFApt0%2BVrOzxB7CswMgJQf%2BR9F%2FzEE03Ym%2Bk7yhnTrTPuqhUNgAxSzWXYq%2B79mio0YqAdkhfJfFl%2F%2FiuAxD2Y52PemUbmq%2FStunYzW1%2FyAl6bqY0Jeocp33UwV4rqbvpJB2Otcm6fXTQei9wa1mZGH%2BkxA7ORPExKBMMPjpiMoGOqUBiiR1YtpwvtrJmLKUXxd56fOEVqZXOO%2Bp1A18nwqABf4KFmWVBUPc81CMjfFutMjf%2BJoIr0%2BAhQveAMKnX%2BZ7EWUOC1u64Nc26PhK7k7QVt5zGJcGyZYDIKPnRuoDSLEuOiAMNWuQFONHFg9NxnMlFDlf%2BPht1t7fe4MprH%2F7V2W0XLoARRKcQdAi4og8QvXNDASPczV7rsHUvDJ6bAaGU%2FzZmKEb&X-Amz-Signature=a281dd46ea8ea4ecfae0a018fe84c131d727c144c5b8f43098282fb95d22758b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDLGHZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9lF799ACH5GYgt1%2FE%2FvPg1XBI8%2FrC4p2ZIJkyfnZS5AIgWKKqs5Dwy%2BJRILl1NKYWiDtPOte9XLXjKnydWAMbq8gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuR5Ogd%2B3CR3yyseSrcA3dFheQ6MG%2BpFivy9U2PrXJHPySekEK5IXAZEcZOO0M4HMTLWcEp9UyHM4%2BRZz1NwEL9Gomnl3He%2FQ5tAr22yHGkNpB96VISuzqHMxSUNpqhhK9o3XCVUkyyM4vMOM0i5QythgqLOdu8RHogPBsd7G6yuU8kXHxM7X9bJ3mWz7XiiyN3vfV9iixe%2FCWmcZPJg%2F0E2RpZ10UCPuqrLD%2F3CRnActaAeTDIhvj0f3S2DJMFcTsuokD4G1E8FD62cT56y8kxtZwhlwXvZp4Svyn9U9VAJjPdwMDRsj9bhkWdysXG9SxEiSZKE%2BwbbCOij94Pb9fpI3TKXkDiFPMKdo3yU2JIXtDV1KfEFhubhy4FyRdgNo%2BxLb464ddhB9RCs5uiP6gKsR4yhYjAAzHFpcbsubsxzrqv1jyIjffpF4ivh8Zmoxme%2BkQpOrwOS7ujVqNcuaYpB99lfxxIntUsg2qbhEXx4bFApt0%2BVrOzxB7CswMgJQf%2BR9F%2FzEE03Ym%2Bk7yhnTrTPuqhUNgAxSzWXYq%2B79mio0YqAdkhfJfFl%2F%2FiuAxD2Y52PemUbmq%2FStunYzW1%2FyAl6bqY0Jeocp33UwV4rqbvpJB2Otcm6fXTQei9wa1mZGH%2BkxA7ORPExKBMMPjpiMoGOqUBiiR1YtpwvtrJmLKUXxd56fOEVqZXOO%2Bp1A18nwqABf4KFmWVBUPc81CMjfFutMjf%2BJoIr0%2BAhQveAMKnX%2BZ7EWUOC1u64Nc26PhK7k7QVt5zGJcGyZYDIKPnRuoDSLEuOiAMNWuQFONHFg9NxnMlFDlf%2BPht1t7fe4MprH%2F7V2W0XLoARRKcQdAi4og8QvXNDASPczV7rsHUvDJ6bAaGU%2FzZmKEb&X-Amz-Signature=9c08889af99b7ea477eca6df5a8216952f12f63219ad4b22240c94e763a6ea07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
