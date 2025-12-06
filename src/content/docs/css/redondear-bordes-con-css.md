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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVDZY5E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJlNCsU%2FbnGDTigZZ9rOI81ZSEu752lQ9uG4S37Nu%2BQAiEA1u%2FsC%2BOveZBUiakwPL0u7iHRZIcn0KknQrE%2BBqv40Qwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPsuRK77pG4bhSP%2FxyrcAxAl75wUwTWO270Z2hfmcSw6%2BbpKfZBxRTyygrLuUdqcUB3KGfAfJMu5euPat8Fih9qMJyCacejxSDdhSEUnag0nJs2sc1Vcv4DQZ%2B4yxLSPEMk4oxiG%2BGgGwXiJ1AjyyLGD50MxgpVxe24WQwzhw4uK0nwYT0PS4Um8Rdg6EgqlsEr1g9TWVIjm2AbqlPeza5BVSdsm1c3iu963gAOZrBWAGqNQaffHS32x5MknVQTeeJHK3xQ9kCouJZHrv6r6V%2F0oInd8%2FyRQHxCarog9zjqxfcdWLeQQ6gh7F0dp%2Fz3mugusLMPmUQ%2BbMqv12LlVO6y%2FwDKXKvQBH1%2B2G26oea4aX8FM5jdtByjO4uYkAIO%2BdNYd2i4OZmbiBAW%2Fmh4%2FN0zIu1mvQgjfpaUIKGQeDNK3JhZQ1WsANwBymgWckHqSn1N6zvwl8DKC27miqkzHnu3YqATErAq2bBhzYi%2FVEw4z%2FmXg3k8DX%2FI1NO1NzekgKL4fFzTAr7YGhYE3P6Zly9u44XbiX5zssKEDgKmysYbDqk5dzHEocYBnFagCcf8Ldsazlsy5YcA1kezUV86FNbjsUfnNMkLpD%2FuGlozvU9FzwD2ohkOl5m03CLyOKlv7uPdFblvqQSyHx1woMIrK0ckGOqUBx%2B3s2aQq0THl%2F6yq%2B%2BMsLXgpbO4oJuILcQ%2FqGIkFwOPCaZfd1B5VViAdVqI1n4W%2BFLNnhmEpLarARIhaUcSzw2wv%2BV7OE2GgS7Fm2icVuLhDtXMDk5fIKd512N3%2FtkXAgjLfXp6%2BKwqX1qN3%2FfjabIC%2BiKaBfjGbxJgkNQI6LSAXu8cGGD3xBog%2Bd7tYw%2BuU%2FlAB4GYukqf%2BmO%2BSRwnGkKMDw2Yx&X-Amz-Signature=df61e678b8dd8299361cd55b3367fa88c6e53fa53bd43b5e1c8720f5043ba7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVDZY5E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJlNCsU%2FbnGDTigZZ9rOI81ZSEu752lQ9uG4S37Nu%2BQAiEA1u%2FsC%2BOveZBUiakwPL0u7iHRZIcn0KknQrE%2BBqv40Qwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPsuRK77pG4bhSP%2FxyrcAxAl75wUwTWO270Z2hfmcSw6%2BbpKfZBxRTyygrLuUdqcUB3KGfAfJMu5euPat8Fih9qMJyCacejxSDdhSEUnag0nJs2sc1Vcv4DQZ%2B4yxLSPEMk4oxiG%2BGgGwXiJ1AjyyLGD50MxgpVxe24WQwzhw4uK0nwYT0PS4Um8Rdg6EgqlsEr1g9TWVIjm2AbqlPeza5BVSdsm1c3iu963gAOZrBWAGqNQaffHS32x5MknVQTeeJHK3xQ9kCouJZHrv6r6V%2F0oInd8%2FyRQHxCarog9zjqxfcdWLeQQ6gh7F0dp%2Fz3mugusLMPmUQ%2BbMqv12LlVO6y%2FwDKXKvQBH1%2B2G26oea4aX8FM5jdtByjO4uYkAIO%2BdNYd2i4OZmbiBAW%2Fmh4%2FN0zIu1mvQgjfpaUIKGQeDNK3JhZQ1WsANwBymgWckHqSn1N6zvwl8DKC27miqkzHnu3YqATErAq2bBhzYi%2FVEw4z%2FmXg3k8DX%2FI1NO1NzekgKL4fFzTAr7YGhYE3P6Zly9u44XbiX5zssKEDgKmysYbDqk5dzHEocYBnFagCcf8Ldsazlsy5YcA1kezUV86FNbjsUfnNMkLpD%2FuGlozvU9FzwD2ohkOl5m03CLyOKlv7uPdFblvqQSyHx1woMIrK0ckGOqUBx%2B3s2aQq0THl%2F6yq%2B%2BMsLXgpbO4oJuILcQ%2FqGIkFwOPCaZfd1B5VViAdVqI1n4W%2BFLNnhmEpLarARIhaUcSzw2wv%2BV7OE2GgS7Fm2icVuLhDtXMDk5fIKd512N3%2FtkXAgjLfXp6%2BKwqX1qN3%2FfjabIC%2BiKaBfjGbxJgkNQI6LSAXu8cGGD3xBog%2Bd7tYw%2BuU%2FlAB4GYukqf%2BmO%2BSRwnGkKMDw2Yx&X-Amz-Signature=a0c93fe60e1695b276bf9f322d2cc066b8c54d57033a3da3b5dc4d722a3e4dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
