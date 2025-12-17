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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLY3VLC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjdn%2F0tZVPVq2bi4%2BcOTQngElNyRQ%2BP53sVz4hqBrVQIgSKKYhARG7WbdJrBwZ7TIgkwkOEP0DQdU6wt3wJKF14Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDmkhhymPYxgAcP7oCrcA%2FliFHlyDk%2BxBAdq%2FmVQWXg054nlBT15XCHZtZ8gNu%2BzSMkeP%2FSD3I1BC3iAFABwNzw%2BELoHfgNpAFdPEEq9q%2Be5grmRH1ujXB9SH2NSYm0ObMPMuo9bcQB4EAnnKXwNiwqv1iKJ8DsacFnsv5NNWBePSSK89VoReYhNPIDK3fnIQ8cNEyiYfz6dCFrpxbiN%2BuzbTNhOCX7MGOuEvpIiJbsgXYG92Qk8jRvFT5Qyvbio6LEVVBI0UZQwoGYd43SEy%2FG0%2BP3o8NZ%2Fii7dh%2FPEFu7Fopn2460wKaJnxgA43qByplzabC%2FJSOVtch6jZuw6i9Lz41onrem2YLQoWJgVWjrAdQI5fALTyFqjEz23VzCh5kK91d0sfbZizU0vSdgdJfe5%2BsV6brRPpjReCWdnL6mJzobXoXZG11eAEc4tWwWi0HYhGRu7N7MI3xfqxt%2BhIr5RdUDjfxUP%2F7g1%2BYEh6yf%2FWIZXH8P%2F2OkAVhMaaZ9KkJkrO%2B6Nu4hka3ZrC1MbLfj2AZ8kAeqcu4NbYqqP%2ByvuohloR0tzlOx%2BX99rqz7tURycNfmlf1Jy5UJs86gpf3XbDCph4FGqMJ3qUmAo1cAhoCZuD5dlh6QrZKTtMizUyd4MNhS0ysKm%2BGSTMNG3icoGOqUBegNpmOIV1RT9vS0VU78uzdTvd8gBtJzdSeefgp0DGuqwHTVcSwk50v5R0l0hx53pTPPB4JzSmOqfizKDbj34pgcoylrYt%2FzFJSRQwcWPWDZAq9uVxaVXWLj77KB1So%2F%2FEzLZHdAr98%2BECM8I9SVoY2fRlL35hbDCnLLIAqy0Jn8ZDx4gZTDPcXIAUUbbroK1t3eIShQTv6Ismd2yW0JTwscBC4qG&X-Amz-Signature=2ffb93a0549bf88794f57adf789ab8fbe3c5956029c7cb9f9d2fc8276219f8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLY3VLC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjdn%2F0tZVPVq2bi4%2BcOTQngElNyRQ%2BP53sVz4hqBrVQIgSKKYhARG7WbdJrBwZ7TIgkwkOEP0DQdU6wt3wJKF14Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDmkhhymPYxgAcP7oCrcA%2FliFHlyDk%2BxBAdq%2FmVQWXg054nlBT15XCHZtZ8gNu%2BzSMkeP%2FSD3I1BC3iAFABwNzw%2BELoHfgNpAFdPEEq9q%2Be5grmRH1ujXB9SH2NSYm0ObMPMuo9bcQB4EAnnKXwNiwqv1iKJ8DsacFnsv5NNWBePSSK89VoReYhNPIDK3fnIQ8cNEyiYfz6dCFrpxbiN%2BuzbTNhOCX7MGOuEvpIiJbsgXYG92Qk8jRvFT5Qyvbio6LEVVBI0UZQwoGYd43SEy%2FG0%2BP3o8NZ%2Fii7dh%2FPEFu7Fopn2460wKaJnxgA43qByplzabC%2FJSOVtch6jZuw6i9Lz41onrem2YLQoWJgVWjrAdQI5fALTyFqjEz23VzCh5kK91d0sfbZizU0vSdgdJfe5%2BsV6brRPpjReCWdnL6mJzobXoXZG11eAEc4tWwWi0HYhGRu7N7MI3xfqxt%2BhIr5RdUDjfxUP%2F7g1%2BYEh6yf%2FWIZXH8P%2F2OkAVhMaaZ9KkJkrO%2B6Nu4hka3ZrC1MbLfj2AZ8kAeqcu4NbYqqP%2ByvuohloR0tzlOx%2BX99rqz7tURycNfmlf1Jy5UJs86gpf3XbDCph4FGqMJ3qUmAo1cAhoCZuD5dlh6QrZKTtMizUyd4MNhS0ysKm%2BGSTMNG3icoGOqUBegNpmOIV1RT9vS0VU78uzdTvd8gBtJzdSeefgp0DGuqwHTVcSwk50v5R0l0hx53pTPPB4JzSmOqfizKDbj34pgcoylrYt%2FzFJSRQwcWPWDZAq9uVxaVXWLj77KB1So%2F%2FEzLZHdAr98%2BECM8I9SVoY2fRlL35hbDCnLLIAqy0Jn8ZDx4gZTDPcXIAUUbbroK1t3eIShQTv6Ismd2yW0JTwscBC4qG&X-Amz-Signature=614dfa329bf887a5a2b23be56fa648886d6265c120fae4457bd29917da56e0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
