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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WRCH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEQswHaZk%2B%2Fm%2FP6T9vKkIBbyJv8qiV%2FG3IWUay141moQIgDeHVuqQgGyLk7b64j8DfaTiW7rpHrt%2Fsu24JPAqRYdAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxEeTDYbuhEyGVz5yrcA0BacRcc9N1G0eKxGDWC%2FZRum0ouJ9DHtRbwlgc%2B3YxGTsBw6%2BMiAN9x1iZOOA6vtxchsseB%2B%2Fx9WBgGfIjoS0ZpoBSWsZ8bs1qGYBFUT2MKUN8%2F32%2F53ULYA7wqOvqN8oQSO9%2FWCwhGNtWB6XgY1e%2FAvWt0Ib1hr9OnhzBU2%2B6Jrky%2F8W98moEqgjfbsj%2FaWuSXAQDz3a13DT%2BS9DEEwIDE0xOTTt%2FnKpexBwO2Je843Fph7veUURgRdnXtIycxhkyzFG2OJJ7mqf7KY6mSvVF%2BmbKXtQT40JB4RbWPJvNbJXJ6LDYLHEpK8aJ6vnapNBurkPMRbpP4CFfT1tlzwGiZC7XqaUaf%2FX6RhbKcmgHcWFVBYfakfcO195H2%2FcQTaHH%2F%2Bol63xdGWffYditOFxAXdlRsYUMdRUgT6T9YJwC%2BkEG5U0ZrCiIpn09zf6qa%2Fn2Mt2lYva7XKkr6pSLcNCei0UmIthQzi%2BnthKJ9lcpJa0QQtWSDBL3rhvTXYAyyzk%2FPoZ4uMlTKioagzbC%2FcqkPUUMzGXZiPjM6JsEpu6ZIJKr7w9E15uRTR4uL5VFk8IKIwKGBsjch1%2FeJC9fvt41OQoI1zMkioOSeujcTVyQ9EAFy0U5O1HpdAPvJMNutjMoGOqUBWlXnYsZV8LdPQscdFd5T0SuJkn8JQ5jEGqiy6HPa2TqKdqjOUex1lZcvji0joaaNdcgxyBISzIPSQb38XFGVmkId1GBTbgYofF09qXypG4kePANuctgC1tZfJhQ8pJyFUuICuBY39lDAHvE4ltF71zaWGAp1ptrC0ACeKy%2BN9C4FW6NJQ%2B501Iy%2BgvmGJrLd6ikwy5tOvNRZTVz9svloIMfAaZ51&X-Amz-Signature=8152553b8ccb3876bf01665fc16ef31a1727500313f17cd03e6482eb6cc4498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WRCH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEQswHaZk%2B%2Fm%2FP6T9vKkIBbyJv8qiV%2FG3IWUay141moQIgDeHVuqQgGyLk7b64j8DfaTiW7rpHrt%2Fsu24JPAqRYdAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxEeTDYbuhEyGVz5yrcA0BacRcc9N1G0eKxGDWC%2FZRum0ouJ9DHtRbwlgc%2B3YxGTsBw6%2BMiAN9x1iZOOA6vtxchsseB%2B%2Fx9WBgGfIjoS0ZpoBSWsZ8bs1qGYBFUT2MKUN8%2F32%2F53ULYA7wqOvqN8oQSO9%2FWCwhGNtWB6XgY1e%2FAvWt0Ib1hr9OnhzBU2%2B6Jrky%2F8W98moEqgjfbsj%2FaWuSXAQDz3a13DT%2BS9DEEwIDE0xOTTt%2FnKpexBwO2Je843Fph7veUURgRdnXtIycxhkyzFG2OJJ7mqf7KY6mSvVF%2BmbKXtQT40JB4RbWPJvNbJXJ6LDYLHEpK8aJ6vnapNBurkPMRbpP4CFfT1tlzwGiZC7XqaUaf%2FX6RhbKcmgHcWFVBYfakfcO195H2%2FcQTaHH%2F%2Bol63xdGWffYditOFxAXdlRsYUMdRUgT6T9YJwC%2BkEG5U0ZrCiIpn09zf6qa%2Fn2Mt2lYva7XKkr6pSLcNCei0UmIthQzi%2BnthKJ9lcpJa0QQtWSDBL3rhvTXYAyyzk%2FPoZ4uMlTKioagzbC%2FcqkPUUMzGXZiPjM6JsEpu6ZIJKr7w9E15uRTR4uL5VFk8IKIwKGBsjch1%2FeJC9fvt41OQoI1zMkioOSeujcTVyQ9EAFy0U5O1HpdAPvJMNutjMoGOqUBWlXnYsZV8LdPQscdFd5T0SuJkn8JQ5jEGqiy6HPa2TqKdqjOUex1lZcvji0joaaNdcgxyBISzIPSQb38XFGVmkId1GBTbgYofF09qXypG4kePANuctgC1tZfJhQ8pJyFUuICuBY39lDAHvE4ltF71zaWGAp1ptrC0ACeKy%2BN9C4FW6NJQ%2B501Iy%2BgvmGJrLd6ikwy5tOvNRZTVz9svloIMfAaZ51&X-Amz-Signature=c24d32e01acebb26960b923f6a3e8770604741651bef138cfe501ee625e120a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
