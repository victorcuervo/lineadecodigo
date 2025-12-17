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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMZGHT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB1QY2F1ClkoCwm3NjFnbAoxvO0Elh%2Bdqoe7ILfzCsyAIhAMflv7LDx8Og8kYj8qfDknty6Rbf2xOkpkKigXseFMvDKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2CEpSr%2BaSY6RKr7sq3ANHV7VMK6Wzid2R65A%2BtqOlvLkFsWRLKqrV9bz1NM3AU2z7Lms%2Fp4dXr3zdga17ZZZiYXw6140J9CL7opUgccMhzvdofKmT79zog%2BNmSzcXNKtQ5mtc2Xls2BHQ4d0LdibyYNrTSCFz1ZM5CDN3SOTnMqQqhs48gS9zDYVjSjHlSvUUUCpTVXHv%2FwJIy3UJ5mg2RtDF3dDDEWo9cYbFUTA0iM7dFCK%2FH5T43PoGphNVKAR9CxPsfQNVjvalLsqNsIRMLEp9%2FWf7HqL8wMCdUXQUr50zblHAWbVrSnJqEhLbqgf95PRA5YWH21U4nbe3nawa4dsNFQOfWXAU%2BTfGqqcaGovkJfPVTFI8nQAQoXsDJJxB894qZtdwOlDmFAHunrstBsCGITiIQiayB4fwqITz%2BM01GBomxkjPAl9u%2B9MiJx6UP9OJJzU6cYOG4H9Nx%2BAGgFxhmEAzbhcTYR%2Fn6GYjlBv2BdxkmVemoIG5TzNKg%2FHvhgbtN3pBuWg4cQqfeNdhvYHHEaimUbQjHi3RziqIy59idqUbR78jaRqJShqq27Hlrkhtr5q%2FlGEu132xXavrk0c9Krj5l71vu%2BwQ2B7lW1RbQ2Ybe6V4oKVm9ck7bZIPrWcVnTh%2FFh1IXzCri4zKBjqkAT7vb8%2FAKlL1Nscp52EEiCrSDsa5nHGas92JfEavCyLBfPhHYAMD35FRUktJy%2FW20ltkS%2B16llYZzfn8fahDYU6wSquyB5pwcWJ1GYP%2FS7xvD0xOGq2d7VTGkzIcW3f7VLsJZ6xFsHwaeN602mPfGbT9M%2BliG1IaDothoys8yIUxnJCVpW48R9zI70LOzQ0YTxMLh16%2BaC%2F%2B9%2FzRQflsm4g98qnX&X-Amz-Signature=3ae9456c7677af7f330c6c5cd959117f47f2f4b01fdc6b407c6e7451f8700c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMZGHT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB1QY2F1ClkoCwm3NjFnbAoxvO0Elh%2Bdqoe7ILfzCsyAIhAMflv7LDx8Og8kYj8qfDknty6Rbf2xOkpkKigXseFMvDKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2CEpSr%2BaSY6RKr7sq3ANHV7VMK6Wzid2R65A%2BtqOlvLkFsWRLKqrV9bz1NM3AU2z7Lms%2Fp4dXr3zdga17ZZZiYXw6140J9CL7opUgccMhzvdofKmT79zog%2BNmSzcXNKtQ5mtc2Xls2BHQ4d0LdibyYNrTSCFz1ZM5CDN3SOTnMqQqhs48gS9zDYVjSjHlSvUUUCpTVXHv%2FwJIy3UJ5mg2RtDF3dDDEWo9cYbFUTA0iM7dFCK%2FH5T43PoGphNVKAR9CxPsfQNVjvalLsqNsIRMLEp9%2FWf7HqL8wMCdUXQUr50zblHAWbVrSnJqEhLbqgf95PRA5YWH21U4nbe3nawa4dsNFQOfWXAU%2BTfGqqcaGovkJfPVTFI8nQAQoXsDJJxB894qZtdwOlDmFAHunrstBsCGITiIQiayB4fwqITz%2BM01GBomxkjPAl9u%2B9MiJx6UP9OJJzU6cYOG4H9Nx%2BAGgFxhmEAzbhcTYR%2Fn6GYjlBv2BdxkmVemoIG5TzNKg%2FHvhgbtN3pBuWg4cQqfeNdhvYHHEaimUbQjHi3RziqIy59idqUbR78jaRqJShqq27Hlrkhtr5q%2FlGEu132xXavrk0c9Krj5l71vu%2BwQ2B7lW1RbQ2Ybe6V4oKVm9ck7bZIPrWcVnTh%2FFh1IXzCri4zKBjqkAT7vb8%2FAKlL1Nscp52EEiCrSDsa5nHGas92JfEavCyLBfPhHYAMD35FRUktJy%2FW20ltkS%2B16llYZzfn8fahDYU6wSquyB5pwcWJ1GYP%2FS7xvD0xOGq2d7VTGkzIcW3f7VLsJZ6xFsHwaeN602mPfGbT9M%2BliG1IaDothoys8yIUxnJCVpW48R9zI70LOzQ0YTxMLh16%2BaC%2F%2B9%2FzRQflsm4g98qnX&X-Amz-Signature=22c5080d30d27164de263b682241853f0fb6ae9bb14eae234cc88b63bcdbd4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
