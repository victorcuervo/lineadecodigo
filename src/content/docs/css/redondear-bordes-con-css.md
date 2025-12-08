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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOBPNKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWXEt0czOj59dbLcj4GBjdFcgT8Cs%2FW%2BTjeqyRKu65rAIgOJNJIdzlPfEYKDeAop1FOA%2BnCmGwUTz1jB34%2FxB6B4AqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2Az8a7l5CASdlvZyrcAwssKwoSLjWNjBGaKqM%2BJilY%2FW5Ut4oTkqEM1gdqoTN%2B2IcNIYRv1WFBMGm%2F7YkcSg1rvdu6wR6uuV3OEihP1KaVZFEqC38103008EUsCaLD7pvoeGtaJ9HtmP6xPDi7mO4XBF5a8%2FCQITwhKFcvQ4IhQDXqbo7BFKN%2FZUNuoZj7HtqKUMk2P3TNuKm4%2BNlVyeNHs8qRfvLOEO4bdjstR5D7F3EPbzp71fw2p9bv73%2FvnP75g1nzFlhhkCA9kinl61IJWSw%2BpUghNy1oOv0%2FN%2BNp9COifquIJQ%2Bq5A%2BqrcioZzho2sjDUI6rt8rR5GoDfRiSAVrUhzgUm2cwLstlybZsAV2yRSs8qb5sXI1ZhKNDPTMDnmUEvFPNDM%2BCk68ez%2FwcjfQkQkmYidnoGdizViE4U%2Bdhhg8R1nzi9BMMZ%2FnU%2FLNuYWWcVEvVxZyYRroq6mGOSjWfdHq11YrQed6dj7zYYfg%2Bz9emS%2F1VdrZGWXI2KOwP6aRbQO7HwmamUjzwe7d9hxCUJA66pvR8hi5HNNdrZUCCEJzy3Qvz%2FF5RX7cxzwVsghmUH5E%2Ft%2Fig%2FWny7RyckJ8tlLmUvse0jqo52nX6iqQKYrJb6TBqcoa0myIUbFogs%2FbB2P5Wm0ukMP7P2ckGOqUBUGCLc397CBKo1P5Qjrqt%2B1bIPofDnh4cmPqgnF7V8loUrxb5Kg1usikdeGh23jomF8BqYk7Zpf4g6Xc%2BPetV8GaeYOGdU0Doj9%2BFPAeqvtrujYdupMcpAg6MSfEm8fxDRfGXnFMdK%2F7iXyn5jDRnKrZL8536pewWBXD0a3%2Bh%2BT2M%2FufEFLPAbsUq5C4%2B3AfWwk9g%2Fw%2Fpyuq5aB7K%2FQ1fNJ3JglL3&X-Amz-Signature=121fb232391b8ee12dbf7374d59f6714d022673a491491de4ee9c15832e20c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOBPNKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWXEt0czOj59dbLcj4GBjdFcgT8Cs%2FW%2BTjeqyRKu65rAIgOJNJIdzlPfEYKDeAop1FOA%2BnCmGwUTz1jB34%2FxB6B4AqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2Az8a7l5CASdlvZyrcAwssKwoSLjWNjBGaKqM%2BJilY%2FW5Ut4oTkqEM1gdqoTN%2B2IcNIYRv1WFBMGm%2F7YkcSg1rvdu6wR6uuV3OEihP1KaVZFEqC38103008EUsCaLD7pvoeGtaJ9HtmP6xPDi7mO4XBF5a8%2FCQITwhKFcvQ4IhQDXqbo7BFKN%2FZUNuoZj7HtqKUMk2P3TNuKm4%2BNlVyeNHs8qRfvLOEO4bdjstR5D7F3EPbzp71fw2p9bv73%2FvnP75g1nzFlhhkCA9kinl61IJWSw%2BpUghNy1oOv0%2FN%2BNp9COifquIJQ%2Bq5A%2BqrcioZzho2sjDUI6rt8rR5GoDfRiSAVrUhzgUm2cwLstlybZsAV2yRSs8qb5sXI1ZhKNDPTMDnmUEvFPNDM%2BCk68ez%2FwcjfQkQkmYidnoGdizViE4U%2Bdhhg8R1nzi9BMMZ%2FnU%2FLNuYWWcVEvVxZyYRroq6mGOSjWfdHq11YrQed6dj7zYYfg%2Bz9emS%2F1VdrZGWXI2KOwP6aRbQO7HwmamUjzwe7d9hxCUJA66pvR8hi5HNNdrZUCCEJzy3Qvz%2FF5RX7cxzwVsghmUH5E%2Ft%2Fig%2FWny7RyckJ8tlLmUvse0jqo52nX6iqQKYrJb6TBqcoa0myIUbFogs%2FbB2P5Wm0ukMP7P2ckGOqUBUGCLc397CBKo1P5Qjrqt%2B1bIPofDnh4cmPqgnF7V8loUrxb5Kg1usikdeGh23jomF8BqYk7Zpf4g6Xc%2BPetV8GaeYOGdU0Doj9%2BFPAeqvtrujYdupMcpAg6MSfEm8fxDRfGXnFMdK%2F7iXyn5jDRnKrZL8536pewWBXD0a3%2Bh%2BT2M%2FufEFLPAbsUq5C4%2B3AfWwk9g%2Fw%2Fpyuq5aB7K%2FQ1fNJ3JglL3&X-Amz-Signature=38f1b376649e7e89d205cc1f859eced5bdf159d293ec5dc39917e3724f9aea1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
