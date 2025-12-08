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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTPEFXU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq86Mb7OtujKfcjSGUMTURLBCrmAzwHxCsqW0QB%2BbvhAIgAQIpFH%2FMQWaCUJD6wPGFiYd1vrJMyTVHJQtJi8umzn4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYq1TSqRqgCzaE37yrcA6VvSOa3cBkydyXdh4Ioxi7%2BJ0XbaBp6FbgR8V9wH8oVBSlAFErFS47jaVWmz2urczX8JX%2F65t8rTrtiEEEQ6YaJlpZzTIaTw6yJuyrw7%2BaxApzDc16Qj%2BmW2nHvv%2FwXaHOspyAuXxO4HVl23m6eWsdAaR68zGyNEbNie0Qsg%2F0VdO%2BYKoDktBUL3bIKSuw%2FClLrIQx7MD33Oq9kVtcqJ7VTVi8z%2F9ILGnqdesRJPSBoM4cOKfAUw9y06lfdDx1mt%2FarP9VNseSqnq88MEFU%2F%2BgqKZiXn0TIwhyHg2C5vwSBc%2Fz%2Bo%2F2r4mOx6%2BtrYdoZp4gZbAOXds73mPtpPvI1EKOG1YURvBCAziS8RZe%2Frwh8PbkL6QbeTYmD5ejWpbHezywv6jCgkn83K9yEWy9DjrEmjGOCZsBpoCQdGFLtH44Jf6sr6wto50t5puJlevSfHblbti2pSLX%2BN8yoPPAROyroIBKP8wcEEgw2MiNff6yn4evtZYOC2caAr%2BP9lK2e1L5vfOt%2FlzCsaV1rOmtlLDDKjF2ODvWh4owb%2B4wzW%2F7uoHmlGy2p1aS9haxbYzno1i1DFkZSqKXK700gG6F6w%2BSa%2FDFk1dWOkD%2BtJO4rYMfdAbc1qPK0AxoPvlsqMKDt2ckGOqUBQ8Ec4kBMcbjssIldx9rwUiakBP0%2Fb%2B2upSyQo9b%2BIa%2F%2BKNKR8UgWYZbAUKtu5wDsqqQ2%2FqyqpMDyLGAogQjjKQock4yEjQ2Z8hOM%2FZ%2Blv%2Fcmgwkhyt3%2BBayQMLceo%2FEBIF1wZrfcH%2F8rmhuUknF0Cyue9oPpgY20bihyZZfyQhBxT4zURv%2FtoVlnNQNExNkpChqiVTcYUa%2BXXoauQCAo8gwEDgbS&X-Amz-Signature=e8e8b92090d837cf8bcf24cf4873beb054495614fb572fa1c6d799af9bbb76a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTPEFXU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq86Mb7OtujKfcjSGUMTURLBCrmAzwHxCsqW0QB%2BbvhAIgAQIpFH%2FMQWaCUJD6wPGFiYd1vrJMyTVHJQtJi8umzn4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYq1TSqRqgCzaE37yrcA6VvSOa3cBkydyXdh4Ioxi7%2BJ0XbaBp6FbgR8V9wH8oVBSlAFErFS47jaVWmz2urczX8JX%2F65t8rTrtiEEEQ6YaJlpZzTIaTw6yJuyrw7%2BaxApzDc16Qj%2BmW2nHvv%2FwXaHOspyAuXxO4HVl23m6eWsdAaR68zGyNEbNie0Qsg%2F0VdO%2BYKoDktBUL3bIKSuw%2FClLrIQx7MD33Oq9kVtcqJ7VTVi8z%2F9ILGnqdesRJPSBoM4cOKfAUw9y06lfdDx1mt%2FarP9VNseSqnq88MEFU%2F%2BgqKZiXn0TIwhyHg2C5vwSBc%2Fz%2Bo%2F2r4mOx6%2BtrYdoZp4gZbAOXds73mPtpPvI1EKOG1YURvBCAziS8RZe%2Frwh8PbkL6QbeTYmD5ejWpbHezywv6jCgkn83K9yEWy9DjrEmjGOCZsBpoCQdGFLtH44Jf6sr6wto50t5puJlevSfHblbti2pSLX%2BN8yoPPAROyroIBKP8wcEEgw2MiNff6yn4evtZYOC2caAr%2BP9lK2e1L5vfOt%2FlzCsaV1rOmtlLDDKjF2ODvWh4owb%2B4wzW%2F7uoHmlGy2p1aS9haxbYzno1i1DFkZSqKXK700gG6F6w%2BSa%2FDFk1dWOkD%2BtJO4rYMfdAbc1qPK0AxoPvlsqMKDt2ckGOqUBQ8Ec4kBMcbjssIldx9rwUiakBP0%2Fb%2B2upSyQo9b%2BIa%2F%2BKNKR8UgWYZbAUKtu5wDsqqQ2%2FqyqpMDyLGAogQjjKQock4yEjQ2Z8hOM%2FZ%2Blv%2Fcmgwkhyt3%2BBayQMLceo%2FEBIF1wZrfcH%2F8rmhuUknF0Cyue9oPpgY20bihyZZfyQhBxT4zURv%2FtoVlnNQNExNkpChqiVTcYUa%2BXXoauQCAo8gwEDgbS&X-Amz-Signature=75fa55e4616d56c35ae366807f1cf1e29e12582a30a726dc57a4a7d79ba9e8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
