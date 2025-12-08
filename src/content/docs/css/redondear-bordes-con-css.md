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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFUWN6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByazdNLukyVZt88xOfj0JCKWqOT9wdXS7TklHJkqQC5AiBRKn8E5Q3r3mEQ%2BtsxeQ270MADsOan0lkneeU%2BkcpkYCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCVDXrRGJ2NZHsy5KtwDLSVf8IKosmlRPZxfjlEd6V%2BG%2BJlca%2B3F1h%2B%2FlvtME6rqZ4zis4e1eyB8pURjMM7Ogd5X28LHxRNjbEtZkEpCQTPp5D0%2FmwTULCyrusHXHUomfUKNgrEZapkpTrT85Rxn44x%2BdmFtyB77o5%2FAcqSoiPkog5Fj8%2BsiXuidIQgBPxh%2FNQNiNy4m5OKx2FxTMBs8JKtQoMp8280t4YBsA8GERdmBmAx6XlovvGtKVPptcwP34sK8LnVoHhMZHlTSMRMUEBn%2BP2NDfWq58krBZlOBaGnJ9LWG7W2KEs6hCBmmJXkSF7Gxml%2BnmQIBseUrzai4M%2FQops7eg4p5v%2BLzQCn4h%2BXoMSR%2FlJdSDv2%2FeJibpY92Qw1anR2pviELg3DQd0e%2F%2F7QOLLOoKjA0ehONKVT%2BQYySQw8%2ByIAV352fcMJ4FFoJ86L7buPDn9dqhyqUrVy5sxHAbkKzXHuWSTXTDdQNUHJJYu6M%2F4D8wNgn5FZnoOOu%2FUm2d%2B9L7K%2B302XckDllJowEW%2BboPoeu%2FGbtzAiVAti7jpNBSHyuBpDnnQBZ6QfPcxi4SZgrsqDh%2B4vKNAcKcABBC4xM376JXxmlVaD2dHu99xQY20YKhMz4zBxaRKlI7%2BPtyK1CRBFnq9gwv5DbyQY6pgGgAKRpFPAcw1zHylElDLO5hgIsjCMj9r9U8zo3oMCMcPnOR9Ib9%2F%2BQslcdH6nSnpqHXcWMW6oMpoLSkJU8nUnGa9CVoFrJBDemTLut%2BZGBtp1b4z%2FJggWcF1W7n072q1E2C%2BH4jK0JBKoaP2iaBJJBGiolKIJiOoh%2FJ3EuIFi5tJwkEeOFDorYU1XYreIXHbnybkWNF%2FInGbFRcbQOlLCKoTAi5mjM&X-Amz-Signature=00159c6f3a23cf02146a55f165adf45694f62046dfc1e0616c7d34b94a4b47c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFUWN6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByazdNLukyVZt88xOfj0JCKWqOT9wdXS7TklHJkqQC5AiBRKn8E5Q3r3mEQ%2BtsxeQ270MADsOan0lkneeU%2BkcpkYCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCVDXrRGJ2NZHsy5KtwDLSVf8IKosmlRPZxfjlEd6V%2BG%2BJlca%2B3F1h%2B%2FlvtME6rqZ4zis4e1eyB8pURjMM7Ogd5X28LHxRNjbEtZkEpCQTPp5D0%2FmwTULCyrusHXHUomfUKNgrEZapkpTrT85Rxn44x%2BdmFtyB77o5%2FAcqSoiPkog5Fj8%2BsiXuidIQgBPxh%2FNQNiNy4m5OKx2FxTMBs8JKtQoMp8280t4YBsA8GERdmBmAx6XlovvGtKVPptcwP34sK8LnVoHhMZHlTSMRMUEBn%2BP2NDfWq58krBZlOBaGnJ9LWG7W2KEs6hCBmmJXkSF7Gxml%2BnmQIBseUrzai4M%2FQops7eg4p5v%2BLzQCn4h%2BXoMSR%2FlJdSDv2%2FeJibpY92Qw1anR2pviELg3DQd0e%2F%2F7QOLLOoKjA0ehONKVT%2BQYySQw8%2ByIAV352fcMJ4FFoJ86L7buPDn9dqhyqUrVy5sxHAbkKzXHuWSTXTDdQNUHJJYu6M%2F4D8wNgn5FZnoOOu%2FUm2d%2B9L7K%2B302XckDllJowEW%2BboPoeu%2FGbtzAiVAti7jpNBSHyuBpDnnQBZ6QfPcxi4SZgrsqDh%2B4vKNAcKcABBC4xM376JXxmlVaD2dHu99xQY20YKhMz4zBxaRKlI7%2BPtyK1CRBFnq9gwv5DbyQY6pgGgAKRpFPAcw1zHylElDLO5hgIsjCMj9r9U8zo3oMCMcPnOR9Ib9%2F%2BQslcdH6nSnpqHXcWMW6oMpoLSkJU8nUnGa9CVoFrJBDemTLut%2BZGBtp1b4z%2FJggWcF1W7n072q1E2C%2BH4jK0JBKoaP2iaBJJBGiolKIJiOoh%2FJ3EuIFi5tJwkEeOFDorYU1XYreIXHbnybkWNF%2FInGbFRcbQOlLCKoTAi5mjM&X-Amz-Signature=664e8fc6959f40cbd30364ae9312db8122d5c4752e526811fbc94144f44205a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
