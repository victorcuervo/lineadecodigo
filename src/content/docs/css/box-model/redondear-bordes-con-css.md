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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJCDTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfwvGV8pL6aPtX%2FGmkf0OvvOKIOKV7QD1nu6dtntwUIAiBU1umDQJPzYp7dO%2B1kCyP%2FiAzgHN3Q7MjtyZ2NsSpBhiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvtv5QjAbKVgg%2F0DlKtwD8OVjjsAufc9yi5MlE0hldMfuDy%2FY9rHfIDLqDMkSGqBwUi%2FfIQihS9OIj0I5X%2B2P8OKtOpQ3xUzqO%2FtpeLNgOXabtjOKdpyk1gIlM%2FL4RRhX%2FCBCZjPkCYFVdDSDchpSJN%2BKP%2B3avOxNQsdtsCOaKK7XxD1LIKO3s5Htz5oFdv6h7TBCaiAkU%2FEGM2dNnAJGztWXyxzB3DjDRn8OUV1%2BLkY6JvkNzMe22nBnbpVGI2XCTlXkbOGkv7layK9PRBFAwWmJw1DSsajfMB%2BJ8uLDdU0bU%2FWeMf%2FbmM16RVoYxCEy5z%2BqtORAOEra%2FY0Wfk9d6u7YAPq5i5%2B8%2F1Qa5lDCFhOuGvfe5XQ9UIFvOACzdCBQAfvMZyWGYO1AJBsmaqjc2tCZfdlmvQ1hjet0ocBflFs3DdrRzoIvo2csU1YtEObMqfgR%2BElVU03wBPa7B4lvW5Ttm4fnAPhRlyxhUZ9CXY6Nns2sA%2FmSstc%2FIQ2esLMky2HJ9vUJkBhpHRxCUXDTkXMRT%2BEi17095YcBMhY4SxX2oTTkQIGS2wx7%2BjVC1YL82vC65PsnYyCz6zKm66Eg54QsU1jy9aqaWX87UGmW%2B4R%2FnCo6tKWXWLYGsr3%2Bb55%2Fa8JgLpeDqT6e9igw%2Ba2MygY6pgE1lIqqhrJrB6UwcDQiFyxIwp1n4Xo5RV6X1OjPQwndCQxIrLf77GQhTwwewKUFQ9SmMQFlePRlGa%2F0RPbfGIDAgylfdAlIA2sg7Z0zkJJ1JsuY1%2F9zEBPpxdZjPH66Q%2BAfOjhskQ%2F8LAaBpvNV8WWYr1FVxHJYmKBwE%2FFbcsiOtrZBm40EKyCRCKf1TdUM9103XDa5ky0Cp%2FZHQg%2BD3OZ7H6wVPPUY&X-Amz-Signature=7bd011b83c8341ac2729b110520905f72ddc22ae491e1b99f12c2feda2ab0706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJCDTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfwvGV8pL6aPtX%2FGmkf0OvvOKIOKV7QD1nu6dtntwUIAiBU1umDQJPzYp7dO%2B1kCyP%2FiAzgHN3Q7MjtyZ2NsSpBhiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvtv5QjAbKVgg%2F0DlKtwD8OVjjsAufc9yi5MlE0hldMfuDy%2FY9rHfIDLqDMkSGqBwUi%2FfIQihS9OIj0I5X%2B2P8OKtOpQ3xUzqO%2FtpeLNgOXabtjOKdpyk1gIlM%2FL4RRhX%2FCBCZjPkCYFVdDSDchpSJN%2BKP%2B3avOxNQsdtsCOaKK7XxD1LIKO3s5Htz5oFdv6h7TBCaiAkU%2FEGM2dNnAJGztWXyxzB3DjDRn8OUV1%2BLkY6JvkNzMe22nBnbpVGI2XCTlXkbOGkv7layK9PRBFAwWmJw1DSsajfMB%2BJ8uLDdU0bU%2FWeMf%2FbmM16RVoYxCEy5z%2BqtORAOEra%2FY0Wfk9d6u7YAPq5i5%2B8%2F1Qa5lDCFhOuGvfe5XQ9UIFvOACzdCBQAfvMZyWGYO1AJBsmaqjc2tCZfdlmvQ1hjet0ocBflFs3DdrRzoIvo2csU1YtEObMqfgR%2BElVU03wBPa7B4lvW5Ttm4fnAPhRlyxhUZ9CXY6Nns2sA%2FmSstc%2FIQ2esLMky2HJ9vUJkBhpHRxCUXDTkXMRT%2BEi17095YcBMhY4SxX2oTTkQIGS2wx7%2BjVC1YL82vC65PsnYyCz6zKm66Eg54QsU1jy9aqaWX87UGmW%2B4R%2FnCo6tKWXWLYGsr3%2Bb55%2Fa8JgLpeDqT6e9igw%2Ba2MygY6pgE1lIqqhrJrB6UwcDQiFyxIwp1n4Xo5RV6X1OjPQwndCQxIrLf77GQhTwwewKUFQ9SmMQFlePRlGa%2F0RPbfGIDAgylfdAlIA2sg7Z0zkJJ1JsuY1%2F9zEBPpxdZjPH66Q%2BAfOjhskQ%2F8LAaBpvNV8WWYr1FVxHJYmKBwE%2FFbcsiOtrZBm40EKyCRCKf1TdUM9103XDa5ky0Cp%2FZHQg%2BD3OZ7H6wVPPUY&X-Amz-Signature=a50746e755c6d5a38d0e70c5acc6c07bbe0dbca123bc2bb5348b2fe95ba15052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
