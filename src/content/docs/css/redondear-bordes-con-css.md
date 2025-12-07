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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZPFB4M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlK%2F53dD19zHrGCTjMXX5KdLyiPpFWjEpv6d013WF1%2FAiEAyz9F2lkRWk%2BZQzi%2Fmlz1UBKSq6Pa4uiHWJM8A5ryoIoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOQTsvDTcJEmD4uxyrcA58ddrxwwTrksRfcoSUflCS3tIIgyw%2B78lZe4KXzGIDaELGMuVQ43Qa7VqeAMtGoRX3YZPBXMnBNRwgof6m159oIPoMe6uL0JeCTk3%2F3sF0QP8ch4Y4TKLQ5OA%2FlfGpSl7buMXY1ETHx6sH0Wsx626QYVJ6Mz3qtpecCDyg40keULKKjO9RBLLnDuNv9yNlRtQA9FMsbCJjT40VXrVRhiGn1yHWWh5MBQyoSDykjgyYWp%2B3xjMNzdB7rK4mV469x4ttUI9UmaXCtvT3CAlwV%2F7le5bcyivXu%2B8cvqP8UoWsT9ojzUE9%2B6Z92f0N7MuVX66MiBhQD%2BWUGGnxSNCUk7f85TfLrXF5axYdQbqihsTraS0X5DQL%2BQexy9dv85BM0SaUwYJh1tnyg6l1FRZKK3dgg8KYayBxUWome3mIQF4GZ%2Fw%2FkxXwBYDYAKxLqUMPXHyoL5wDjD392bgW6oeiw%2Bwp0%2BULH6r0ZIheJJTwOSmvcsnThohlfgqMEZYBFYDxdU25rCm%2FKfJcwZtpDIKDqrwfmvJAykFCCI3CKIpCHdjDKXJG%2BB22gcMjLDeqYO7MoP64fgK25XzU6ohYxwkAykhhZXMSZu3mjSLnRhpzP4AjCXk51R%2BA4GOOZ%2BId7MMya1ckGOqUB86eG0%2FXRYiN442nGE252Q73ckwTjCxMSupeqTX8dCk96dYzFcCcLG7eZQVKm7EJYv%2FQlIODKb244Vac%2FTEGFd6%2BI0MWuPPGEkEAnB30mQHZNznql5qI3S0byx0p%2BzOlbV3CWpluEq56oqubjvY9su8UYQQRne3O3mPKwh3lRJ%2FiV0R2aEikVDYnWFrDNAQlV8qfKy3xaGOBW6B%2B0mbkuiJImlJPl&X-Amz-Signature=24934823ab51a4d45157cacf4c4c0b1f603036c6d74375de1f64ba73eef30517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZPFB4M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlK%2F53dD19zHrGCTjMXX5KdLyiPpFWjEpv6d013WF1%2FAiEAyz9F2lkRWk%2BZQzi%2Fmlz1UBKSq6Pa4uiHWJM8A5ryoIoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOQTsvDTcJEmD4uxyrcA58ddrxwwTrksRfcoSUflCS3tIIgyw%2B78lZe4KXzGIDaELGMuVQ43Qa7VqeAMtGoRX3YZPBXMnBNRwgof6m159oIPoMe6uL0JeCTk3%2F3sF0QP8ch4Y4TKLQ5OA%2FlfGpSl7buMXY1ETHx6sH0Wsx626QYVJ6Mz3qtpecCDyg40keULKKjO9RBLLnDuNv9yNlRtQA9FMsbCJjT40VXrVRhiGn1yHWWh5MBQyoSDykjgyYWp%2B3xjMNzdB7rK4mV469x4ttUI9UmaXCtvT3CAlwV%2F7le5bcyivXu%2B8cvqP8UoWsT9ojzUE9%2B6Z92f0N7MuVX66MiBhQD%2BWUGGnxSNCUk7f85TfLrXF5axYdQbqihsTraS0X5DQL%2BQexy9dv85BM0SaUwYJh1tnyg6l1FRZKK3dgg8KYayBxUWome3mIQF4GZ%2Fw%2FkxXwBYDYAKxLqUMPXHyoL5wDjD392bgW6oeiw%2Bwp0%2BULH6r0ZIheJJTwOSmvcsnThohlfgqMEZYBFYDxdU25rCm%2FKfJcwZtpDIKDqrwfmvJAykFCCI3CKIpCHdjDKXJG%2BB22gcMjLDeqYO7MoP64fgK25XzU6ohYxwkAykhhZXMSZu3mjSLnRhpzP4AjCXk51R%2BA4GOOZ%2BId7MMya1ckGOqUB86eG0%2FXRYiN442nGE252Q73ckwTjCxMSupeqTX8dCk96dYzFcCcLG7eZQVKm7EJYv%2FQlIODKb244Vac%2FTEGFd6%2BI0MWuPPGEkEAnB30mQHZNznql5qI3S0byx0p%2BzOlbV3CWpluEq56oqubjvY9su8UYQQRne3O3mPKwh3lRJ%2FiV0R2aEikVDYnWFrDNAQlV8qfKy3xaGOBW6B%2B0mbkuiJImlJPl&X-Amz-Signature=3f5bbd4b797e71110aaf917a11571b28ab5dab86a92d7c8d3099957296c7dd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
