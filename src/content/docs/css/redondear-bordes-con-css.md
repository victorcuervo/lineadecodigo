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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJIBFI6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu9LgILbLd4OFWi%2FryPdfg6iwp3IBT5JKm6FryGiiVSAiEAlEuoQZNRkizXp0KXNFJ31caeK3DDnkfj0jSKSD2LhJwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiXOZ%2FYW0R2wXY%2B4SrcAyhC4mZYqM5%2BSnFAJ%2BHv0N9F%2BjK%2FEDGw9qNFSnHJj79syhAlrCfCHiF65raSToQ1buBLW%2FBvOy7JTwHCNe3%2FrnYLTlkaV9AXFqKWAk%2BioISl68SdJhZTSlo2GDbcK3IaIaqN8mebYkMQkGSig3LuhvyrxjBDIBomNa5jiSKEJm76%2FiLX5kqckK97XdvRmc170EEFC%2Fy3xxklrS07UtVEJMMUkR88iRDQkZFoiyGUFoSEOIXan2luNCx%2FWRnLCXdhAZ6IlFl9MLdrvI3c1Z4BDYeaD%2BDUH4sUe34H%2BLqXNjI7Bk0JdD%2F6qKqdbPEp81OZxLL8dgJ1DzwSaMJTCSYGGqgiSDWw0j2XhfARDm92hq%2BpuCYOeKWOga8x%2BXbB%2FJ4y4Ymcm8wPjdRrWzs4yeDuAE4P0zidyHAI3PQbod%2FJzt7EJqa30Sg8EYJKmwyfLGhbsuXkSApqGwhNh3DH4DzBGa1bTUoWaseWYQAaIHPB7hlOfgpnXUGR5YlpFEBTNff9vR9%2F6gsWG53nDJjvJFGWMCVz0sO5HAnbZKDazK%2BbQG5qF9xluRxWEGX7z%2F24ws2BFOn5SVCcTS066pS0zaj6RLOIff8hgPKMfSdwJgPE54kZec2gVcnuns0AcujxMJPu2ckGOqUBz9iJWP91AwICt4%2B2HNvQVOJUJuAoyeDk%2BIQ9274Ca9w1squBmN5xW69eTCF1n1R%2F9Afxn1077HcLkQh7YivciIEWWeJjaOjc9kC7Zws%2Baf5%2FibppvZhSyQ7dMje3Ydq929uNM4qrXuEXtbrnBxZja9ErOutRjMwnzhC833oqN%2B1G5c7y1ufvIzOIcukwaRQF4qOc%2FH6XhnNEkCtrwM0JXFjtjDRl&X-Amz-Signature=86a0d788ea258a601f782d3aec61570c6c1b9541e51df5a3b764e069985e26a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJIBFI6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu9LgILbLd4OFWi%2FryPdfg6iwp3IBT5JKm6FryGiiVSAiEAlEuoQZNRkizXp0KXNFJ31caeK3DDnkfj0jSKSD2LhJwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiXOZ%2FYW0R2wXY%2B4SrcAyhC4mZYqM5%2BSnFAJ%2BHv0N9F%2BjK%2FEDGw9qNFSnHJj79syhAlrCfCHiF65raSToQ1buBLW%2FBvOy7JTwHCNe3%2FrnYLTlkaV9AXFqKWAk%2BioISl68SdJhZTSlo2GDbcK3IaIaqN8mebYkMQkGSig3LuhvyrxjBDIBomNa5jiSKEJm76%2FiLX5kqckK97XdvRmc170EEFC%2Fy3xxklrS07UtVEJMMUkR88iRDQkZFoiyGUFoSEOIXan2luNCx%2FWRnLCXdhAZ6IlFl9MLdrvI3c1Z4BDYeaD%2BDUH4sUe34H%2BLqXNjI7Bk0JdD%2F6qKqdbPEp81OZxLL8dgJ1DzwSaMJTCSYGGqgiSDWw0j2XhfARDm92hq%2BpuCYOeKWOga8x%2BXbB%2FJ4y4Ymcm8wPjdRrWzs4yeDuAE4P0zidyHAI3PQbod%2FJzt7EJqa30Sg8EYJKmwyfLGhbsuXkSApqGwhNh3DH4DzBGa1bTUoWaseWYQAaIHPB7hlOfgpnXUGR5YlpFEBTNff9vR9%2F6gsWG53nDJjvJFGWMCVz0sO5HAnbZKDazK%2BbQG5qF9xluRxWEGX7z%2F24ws2BFOn5SVCcTS066pS0zaj6RLOIff8hgPKMfSdwJgPE54kZec2gVcnuns0AcujxMJPu2ckGOqUBz9iJWP91AwICt4%2B2HNvQVOJUJuAoyeDk%2BIQ9274Ca9w1squBmN5xW69eTCF1n1R%2F9Afxn1077HcLkQh7YivciIEWWeJjaOjc9kC7Zws%2Baf5%2FibppvZhSyQ7dMje3Ydq929uNM4qrXuEXtbrnBxZja9ErOutRjMwnzhC833oqN%2B1G5c7y1ufvIzOIcukwaRQF4qOc%2FH6XhnNEkCtrwM0JXFjtjDRl&X-Amz-Signature=9ea32d8a4e808ad4e92ce915209b229b714ffcc0e3f1c5d692216cb61d610daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
