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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUKF6NW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY0RAnkzj44crM2q1BYr1zgzmoAuU%2B4paUcVEbVM5fQIgH4Qu%2FOGlSx6ohDYucZ9wUeKHRSnx1GrQYE6vwg1EwE4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF58luEL%2FeXQXSg3fCrcA2dKuvth6OPcYro0KHuNJhMMojNarKvANM%2Fk3VotKx4S7%2FfOXgizMLh671RA5YjxMrPxhzVOyAjZWQKf2SlYh8PWa4dY%2BNUk3dSW7Ah1kgKPDveawB9NsJQEC2RlIMro6z0L%2B2o4dTDTtAJs2TIOJZUfD2zHnUFsWr3zD%2Boc4fXJ60WkhPC3PkCeOfQRAPdLKsv9rTzsyol1D39kdfGRtyWmvKNuSvMtImDL00TVlokjZUIDA8FWB29zlqCqWC3oj36OcTlSb16udHilIKtN3UVOKs4MrrNHFjkVtpJLDrpOR%2BfyyYsJcBZU1Ks9R4JIYfLUEvDxexS%2FqhM8taBM2aKdncM%2Fp%2BZd2aRTEvI%2B71Acmac4YKPK%2BY%2BZqmfdYyKzf6x005DLxSEAh31qdqbXPGGf%2FoFjZLU9ymnwh%2BE0IfqthmlaodNtBLAeDwR5DJLM%2BqpXjtr2yD1E2QW57AQ91gwCfygwY5A4cowJ3SCFUjyJD5R5UM2wRi9GEuqqcpZhT%2FVVthmgzRE8wTY4HswYjA0aISOoRtYP1%2FUzWe9s3XCdlxNv6il89NsOq%2FPgtC%2By1SZ%2F2OtafCx1NIdZsqZoBBzh%2FTO3JsrfOPWgs5PIZ44BDcVrSBxkReiKjr5gMICA3ckGOqUBObtQYC1JWpd%2Bna6sOCaq7UqfyQ5IbTPF1RmrufWPtdwXdMqyxrSWnzu6jsADlDYkfOVvJf%2Fg98eigrGfdmhEOBcpgd4dseRDQn3WyrOGvBawIOygNTeG5jHVgibATMCIPYRH44%2BIR8EmyHcyNAES0KoAqkur5jP2jno7PdzTOaRE4WAx8ctzGiX1cIpgfE1iPzQx3T3rTyi%2FCYsACnZ3g%2BSptjCh&X-Amz-Signature=571cd4d4b55fd9b1de6836a5c6b0a043eae2b8f45fa2f9e21139dcf945dd9952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUKF6NW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY0RAnkzj44crM2q1BYr1zgzmoAuU%2B4paUcVEbVM5fQIgH4Qu%2FOGlSx6ohDYucZ9wUeKHRSnx1GrQYE6vwg1EwE4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF58luEL%2FeXQXSg3fCrcA2dKuvth6OPcYro0KHuNJhMMojNarKvANM%2Fk3VotKx4S7%2FfOXgizMLh671RA5YjxMrPxhzVOyAjZWQKf2SlYh8PWa4dY%2BNUk3dSW7Ah1kgKPDveawB9NsJQEC2RlIMro6z0L%2B2o4dTDTtAJs2TIOJZUfD2zHnUFsWr3zD%2Boc4fXJ60WkhPC3PkCeOfQRAPdLKsv9rTzsyol1D39kdfGRtyWmvKNuSvMtImDL00TVlokjZUIDA8FWB29zlqCqWC3oj36OcTlSb16udHilIKtN3UVOKs4MrrNHFjkVtpJLDrpOR%2BfyyYsJcBZU1Ks9R4JIYfLUEvDxexS%2FqhM8taBM2aKdncM%2Fp%2BZd2aRTEvI%2B71Acmac4YKPK%2BY%2BZqmfdYyKzf6x005DLxSEAh31qdqbXPGGf%2FoFjZLU9ymnwh%2BE0IfqthmlaodNtBLAeDwR5DJLM%2BqpXjtr2yD1E2QW57AQ91gwCfygwY5A4cowJ3SCFUjyJD5R5UM2wRi9GEuqqcpZhT%2FVVthmgzRE8wTY4HswYjA0aISOoRtYP1%2FUzWe9s3XCdlxNv6il89NsOq%2FPgtC%2By1SZ%2F2OtafCx1NIdZsqZoBBzh%2FTO3JsrfOPWgs5PIZ44BDcVrSBxkReiKjr5gMICA3ckGOqUBObtQYC1JWpd%2Bna6sOCaq7UqfyQ5IbTPF1RmrufWPtdwXdMqyxrSWnzu6jsADlDYkfOVvJf%2Fg98eigrGfdmhEOBcpgd4dseRDQn3WyrOGvBawIOygNTeG5jHVgibATMCIPYRH44%2BIR8EmyHcyNAES0KoAqkur5jP2jno7PdzTOaRE4WAx8ctzGiX1cIpgfE1iPzQx3T3rTyi%2FCYsACnZ3g%2BSptjCh&X-Amz-Signature=1795d39a24df18280ce5d8486ec0c9cf9d6176a294cfb0dd63cad5620d65a548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
