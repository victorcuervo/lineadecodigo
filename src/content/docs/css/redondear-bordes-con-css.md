---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVLJ6EO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDbQDInrxdu72ACsJSdH6OKU5R71h%2FzGR34MU%2F3SuqIaQIgUU1BsWJs0B5D%2Bocg7tHcdV9Now3dlCVmVJePEnRuKagq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHkNdT9qbxRSdhvdkircA8Vkrjgxx5OYzF5MBXvL%2BqgA%2B4D7y%2BJObIQzfq8vIVNdMwYxEfbP7uxne4VX12OvJduBOYSu4FEU6OXLWoUKBymKqFhCmNIlymnx86hqWyviO9kVyKHRoCU%2FNlAdlfOQVdgqPChyCDHySdRBsCcxoNZsYcZaaSygKwQEEMv347eXxbkkXk%2F6%2FzREQ4y4YpLwc9bIDPJ2kA08cTeOa1GgYi78KWiBFbyqrb5dpOQtXIXqDspDcbrIGXOeiCN2l7fv52kaBAYK%2BELXwJJuvN5iyBUPcy1MpyQujg5P8bo0edSR4UZbnG47FriFxDLF5KW3f9tKmOc8RGMAOOMo29IgUgxtEmvNd2%2BkDOps45%2B6ax4f2sHAdZE2zyUg%2BBWQmbPVB4lMOGNsvPkTw19c%2FnWNSzhCnBSH6LQGOwwpgrzZSg676kCO%2FXpG2WmEsVQyreMvs8wW1NmS7cdthWaG%2BSL0Uz3zQ0llTLYcgsh6KnZxZrOuLioVD8AjMjfrz1aNtFOv3gvvm3SUsH8peV%2FIU4LNJdcomX9pAJuYdbVKwNZNJy1dNtYkbWkm2m8p8juHlf66KommT7CdZW1AksfZ4a%2F4%2BlC3%2FyRhZIsQ5n%2FFEDJqr3dWrO3ALRAftsL82gcmMNSQxMkGOqUBJuODS54qIkRD3dUZXPZcDx6YbWhcGqe50fCvkTY55c8byV%2FBtAcYdZRqh1JHXqd42PrIynSvxxdhtfxDOdGIn0IW7%2F4ZUmx%2FDGf%2FRFgmNFKxkIlYg%2B5AsQhRn0wbSKBZK9are9DCa74EDKEBChkUXLZt9Ok2AKDUhEBwPqCVb3fFLiEDAjjqDa4SBYG3ZV1IGAjdqXt3jfOC64yh6uzXOXmPvgi6&X-Amz-Signature=1ca04ac767e93ad2c6f0860eb26787c2d8541b4091b3843543636a049fb93937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVLJ6EO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDbQDInrxdu72ACsJSdH6OKU5R71h%2FzGR34MU%2F3SuqIaQIgUU1BsWJs0B5D%2Bocg7tHcdV9Now3dlCVmVJePEnRuKagq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHkNdT9qbxRSdhvdkircA8Vkrjgxx5OYzF5MBXvL%2BqgA%2B4D7y%2BJObIQzfq8vIVNdMwYxEfbP7uxne4VX12OvJduBOYSu4FEU6OXLWoUKBymKqFhCmNIlymnx86hqWyviO9kVyKHRoCU%2FNlAdlfOQVdgqPChyCDHySdRBsCcxoNZsYcZaaSygKwQEEMv347eXxbkkXk%2F6%2FzREQ4y4YpLwc9bIDPJ2kA08cTeOa1GgYi78KWiBFbyqrb5dpOQtXIXqDspDcbrIGXOeiCN2l7fv52kaBAYK%2BELXwJJuvN5iyBUPcy1MpyQujg5P8bo0edSR4UZbnG47FriFxDLF5KW3f9tKmOc8RGMAOOMo29IgUgxtEmvNd2%2BkDOps45%2B6ax4f2sHAdZE2zyUg%2BBWQmbPVB4lMOGNsvPkTw19c%2FnWNSzhCnBSH6LQGOwwpgrzZSg676kCO%2FXpG2WmEsVQyreMvs8wW1NmS7cdthWaG%2BSL0Uz3zQ0llTLYcgsh6KnZxZrOuLioVD8AjMjfrz1aNtFOv3gvvm3SUsH8peV%2FIU4LNJdcomX9pAJuYdbVKwNZNJy1dNtYkbWkm2m8p8juHlf66KommT7CdZW1AksfZ4a%2F4%2BlC3%2FyRhZIsQ5n%2FFEDJqr3dWrO3ALRAftsL82gcmMNSQxMkGOqUBJuODS54qIkRD3dUZXPZcDx6YbWhcGqe50fCvkTY55c8byV%2FBtAcYdZRqh1JHXqd42PrIynSvxxdhtfxDOdGIn0IW7%2F4ZUmx%2FDGf%2FRFgmNFKxkIlYg%2B5AsQhRn0wbSKBZK9are9DCa74EDKEBChkUXLZt9Ok2AKDUhEBwPqCVb3fFLiEDAjjqDa4SBYG3ZV1IGAjdqXt3jfOC64yh6uzXOXmPvgi6&X-Amz-Signature=c15341c3b32d7f51de99cbcc937a449260cd4d3adc356cc71419d2f7b1cc53a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
