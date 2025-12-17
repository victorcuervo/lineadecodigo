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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKGPDGP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFJVWawC7JFCGjG1qdX8pbjX5o%2FEx2fOUf0DAZc9l1AiEA5R2SHMX6%2FfBAtmAqDas4TM8LXihGwzySOcZeRXw6HQUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMXEghdaNbC4CvHbFyrcAzjIPRJ1fyIL%2Bm7h92xHkF3oCNHOX5aEySw1mfiTJ2Mp2LIuVe2hEWsdaXR9mVWzF7lu5nsWRSTN1rt2c%2FO5Cx9n%2FBkBjBtXerE4IjJk0ozh4f7cPcUZWeJEahoZEa0KSxlUnjbLG40c9TJ%2FFUwtoetT%2F0CUSGU9iZ2pD%2BFck%2BNBOg4eYi%2Fe2O3tOFUgSubQ2nZZmZgsV6bVwaiL2%2BN8DZ%2FAEEXQo5%2BKbjUkQnmOIv6ETIS%2B5CB6uh%2BBJV5ivfFDreZ7z2YIiKzxIDhCLQm1x2D%2FWCLaRbjr%2Bs44jVKr8Yh2nwUlWZjhCnwzeQRpScaIU8ylar6LSo3F%2BQX%2Fw1VixPncyMT2D7sb0ZoMH3hXjS5hkIY5kZIqczpNn2uiwYh9mtEHDja%2F%2BhOwqVu8tTNHLwEoAFXcajXtuQDyKWVMuqqpMD%2FvNvnaEk%2Biu3B%2F5Jry6IYCwl%2Bx1qXKSkNau6%2BmpVZBcnRxOSV%2B2bj5dcw7KIgH5oQTwQrhXPAK4GPfELv8dqxOZRCdvS6bG3H%2F3m6UNE3%2F7BZhwBxGO7SAsaHMguLt59ukthG65CfIBMhSUDul2jp32S64XIbEt%2FFXfcuPmQFGjYUUIV%2Fp%2FBO6Wdit33ulw7Bj9HBCgINMDc3pMOeOisoGOqUBasUtnTrVWum%2ByAh3qAfKzeM4%2Bje6l9bV3ax0fD0efjSFayWEOocn71UhTcP6gflE%2FY55%2FR2wCbyManAp6LDlCXjdeWeFBAqmm2y0uQ1Au%2FFCBWZq2lBZxHcuLYjS0WsJl%2FOjYYggG%2BmzlaNowOvvvLQatreR6pR9QxddxgApORGNzke59%2Bs5qcSnYPea52jBiNwOx2MXjtKsg9KmuLv3Sk093Hzm&X-Amz-Signature=d2b9f41cce3fb752a03cbf0bdaab1c3f21c983989eabb6c56d838890113a5f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKGPDGP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFJVWawC7JFCGjG1qdX8pbjX5o%2FEx2fOUf0DAZc9l1AiEA5R2SHMX6%2FfBAtmAqDas4TM8LXihGwzySOcZeRXw6HQUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMXEghdaNbC4CvHbFyrcAzjIPRJ1fyIL%2Bm7h92xHkF3oCNHOX5aEySw1mfiTJ2Mp2LIuVe2hEWsdaXR9mVWzF7lu5nsWRSTN1rt2c%2FO5Cx9n%2FBkBjBtXerE4IjJk0ozh4f7cPcUZWeJEahoZEa0KSxlUnjbLG40c9TJ%2FFUwtoetT%2F0CUSGU9iZ2pD%2BFck%2BNBOg4eYi%2Fe2O3tOFUgSubQ2nZZmZgsV6bVwaiL2%2BN8DZ%2FAEEXQo5%2BKbjUkQnmOIv6ETIS%2B5CB6uh%2BBJV5ivfFDreZ7z2YIiKzxIDhCLQm1x2D%2FWCLaRbjr%2Bs44jVKr8Yh2nwUlWZjhCnwzeQRpScaIU8ylar6LSo3F%2BQX%2Fw1VixPncyMT2D7sb0ZoMH3hXjS5hkIY5kZIqczpNn2uiwYh9mtEHDja%2F%2BhOwqVu8tTNHLwEoAFXcajXtuQDyKWVMuqqpMD%2FvNvnaEk%2Biu3B%2F5Jry6IYCwl%2Bx1qXKSkNau6%2BmpVZBcnRxOSV%2B2bj5dcw7KIgH5oQTwQrhXPAK4GPfELv8dqxOZRCdvS6bG3H%2F3m6UNE3%2F7BZhwBxGO7SAsaHMguLt59ukthG65CfIBMhSUDul2jp32S64XIbEt%2FFXfcuPmQFGjYUUIV%2Fp%2FBO6Wdit33ulw7Bj9HBCgINMDc3pMOeOisoGOqUBasUtnTrVWum%2ByAh3qAfKzeM4%2Bje6l9bV3ax0fD0efjSFayWEOocn71UhTcP6gflE%2FY55%2FR2wCbyManAp6LDlCXjdeWeFBAqmm2y0uQ1Au%2FFCBWZq2lBZxHcuLYjS0WsJl%2FOjYYggG%2BmzlaNowOvvvLQatreR6pR9QxddxgApORGNzke59%2Bs5qcSnYPea52jBiNwOx2MXjtKsg9KmuLv3Sk093Hzm&X-Amz-Signature=f9429ef7af33bfca3e2b457d9c7b6b65d12c2461e84614581af04cc38d09c058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
