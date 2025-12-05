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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZOIAUIA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAtXADKRm6GZDBOYtMa%2BWkX46TA8rYrpVLHS268zS9JAiBayXsMmm0xPyL%2FcD6dmw5HP08Uy3YDrzFvZLGwkHDV%2Fir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMcL2y4WTwTe4h7NBFKtwDxQMIO1DSeTPlpdMyGV8zEGqK4JPZGH0hyA3AqqQ3Gb85e9Pr6ebCrG3S2zMTr9e0oQcqfNKQ95Iz7EPdiMWxNMMYPrcpfCBY0uxMSBCu%2FlGRfru0fb%2Bjf%2FDF9l1zJtTylgqKLAEPKY97ByMwLnb%2Bp6qT5E2OfNs4YnosdmwAXZVeEWAySwJbIvPYza%2BtkD3DwV7lww2DIX0%2FDACnypXAeW%2BWzCXlXlGt%2Bk2zv2TkFBOezJ9gD0wmtEw8nfx8ASN0Gb3xmWkkUlm1%2B8vUes5XtrRW5yaaajrHVmBRMrIjL3qHmRovh5FUF6MdeObL8RJHfLGC90aTGUAzGTMcz%2BY8LUeVHyxKz50Jb1UGXrpvcjtVE7rVD4sm9Q4fW2pFScL%2B%2FHqaaKGrJx82jOt%2FEqHDtm2iMkYAvk%2BJma1tJlNI6eANYGP3SCYQMdVdx0p1Ag1vICYQ8UoFpsRxldgHcRwbrvnPsh7IWZB2XEE%2FVaG33%2BRU8vxlf6guY20dt6ixgv2%2BQICMvMzTPHRpZmynuLE85jTopGVlYGZergOdPCa9M5JGma8ZsSt0HsAadhND%2FO2tQV%2Bk5Bc8n7pwXUavbUoBKraeT5aW8rkZ9XHZeF14CMD5mJV4Lh2kqno41QcwpMvKyQY6pgGFbne1U%2F0OFsz6V4n5jZF1BUjCj1%2BZeRZkeRgoaDUlL3zujou0PDKSA7DWUxS%2BQ0b7%2BbLjBLRvnhxelY9Ue0bq%2BOgBKNdSRD5u4RYQKPTs7jNtKpiRAWDVqUMJXGbTyH97V%2FQAjDh3WuidnFVkP9ZjyMqUZArvKLOkM1fRpKEjMEJ8sG0jeBip8J1azgSwezg6YIVWhT9ZVnq5b0FScq%2B2YFsFv3Yc&X-Amz-Signature=0aea12b24bab4d0dc1a5317c64dc38e5acce003ed429f0cc77c94bf47a6872d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZOIAUIA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAtXADKRm6GZDBOYtMa%2BWkX46TA8rYrpVLHS268zS9JAiBayXsMmm0xPyL%2FcD6dmw5HP08Uy3YDrzFvZLGwkHDV%2Fir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMcL2y4WTwTe4h7NBFKtwDxQMIO1DSeTPlpdMyGV8zEGqK4JPZGH0hyA3AqqQ3Gb85e9Pr6ebCrG3S2zMTr9e0oQcqfNKQ95Iz7EPdiMWxNMMYPrcpfCBY0uxMSBCu%2FlGRfru0fb%2Bjf%2FDF9l1zJtTylgqKLAEPKY97ByMwLnb%2Bp6qT5E2OfNs4YnosdmwAXZVeEWAySwJbIvPYza%2BtkD3DwV7lww2DIX0%2FDACnypXAeW%2BWzCXlXlGt%2Bk2zv2TkFBOezJ9gD0wmtEw8nfx8ASN0Gb3xmWkkUlm1%2B8vUes5XtrRW5yaaajrHVmBRMrIjL3qHmRovh5FUF6MdeObL8RJHfLGC90aTGUAzGTMcz%2BY8LUeVHyxKz50Jb1UGXrpvcjtVE7rVD4sm9Q4fW2pFScL%2B%2FHqaaKGrJx82jOt%2FEqHDtm2iMkYAvk%2BJma1tJlNI6eANYGP3SCYQMdVdx0p1Ag1vICYQ8UoFpsRxldgHcRwbrvnPsh7IWZB2XEE%2FVaG33%2BRU8vxlf6guY20dt6ixgv2%2BQICMvMzTPHRpZmynuLE85jTopGVlYGZergOdPCa9M5JGma8ZsSt0HsAadhND%2FO2tQV%2Bk5Bc8n7pwXUavbUoBKraeT5aW8rkZ9XHZeF14CMD5mJV4Lh2kqno41QcwpMvKyQY6pgGFbne1U%2F0OFsz6V4n5jZF1BUjCj1%2BZeRZkeRgoaDUlL3zujou0PDKSA7DWUxS%2BQ0b7%2BbLjBLRvnhxelY9Ue0bq%2BOgBKNdSRD5u4RYQKPTs7jNtKpiRAWDVqUMJXGbTyH97V%2FQAjDh3WuidnFVkP9ZjyMqUZArvKLOkM1fRpKEjMEJ8sG0jeBip8J1azgSwezg6YIVWhT9ZVnq5b0FScq%2B2YFsFv3Yc&X-Amz-Signature=e05a4cf96d6df17bf4121f2373eb03a2bc6b68da027940e5919af2e23afcd392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
