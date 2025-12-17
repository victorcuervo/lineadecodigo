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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWTLWQPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID745Sip2d76KfkZzMGaEA4ThCcB1%2FV%2BNt62oaNhnU%2FPAiBRT%2B2S4agj4CVuI36OaMgIW%2F29VK6hvMEVdk79L5EcFCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMc5twFb9kvPZmSg%2FCKtwD145QjUtWWjD9PNPHLqaduGfZIuJAXB%2FDXNf56Mx0IHOCrTsAfuRTYkgAUQdUioHYTNOKXRaeMuX9b%2BqC1QQoK7LZ1nXXtygTjOGO9%2BjwC2HmsidR4t0l3sIsvF1%2BKJdPOCLSg%2FoLWQ93kqujvlqME1KfsjMyO%2FzH6VKYQn0rbhYGzVaypiM570eHfIPXIuYlG7TSItMiS2e2r2tEBISYNcclnWuSVE6j%2FSYNxnILVNlp9Z8F%2B%2F%2BuRNPGG1E%2Fck%2FvoHizgRaIcrBb1lgtgFiGzen0mzBg1IvJOtldOGlLZWV9avqlQWbpL3nxzhsn6RlcogkQkkrJimILNxL26JfsG%2FAP3OpBGTXUBhamm6VqheMuoMSqz%2Ba%2BaoKwx6kCzA7N1PSJC8WiwPR9Gx43jS2I59IIHPBkOiHzctDjzs%2FDrrb7rPAl1KKXCBohVXnvunJwEAXWRqunE8RYGROYnxelsZXBTOcs0Va4CCL2%2F0nHywRtfoAUCos%2Fd6T%2F3m3uiJ1fW3h3IUbi9VMoyLPruaWU1lhBweQD6UU4PiVThXkmUbaaoGSX9Evm2O279CVxEm152Am5vdm%2Fp0F4mo5N1O0G37w%2Fv0uv4CQS9%2FHXRUsGL7JgNZYjLXqgmWLUnBow%2Bc2IygY6pgHC3cM7tu97LjIjYFaTphI%2BII1jyuNPNo1NiUDMYhjtAIP1dhPOuRHr%2BUujAa8szwAonezMWo3rPvsxUIQg6lad%2Bye3IRoiPGpdMmAOkBtYC2%2BXJraxG2YlPgvlCuxafD6Qj%2BACRskQf6dzId8VdNRgntWsbQzyKzwNPfgh3MJkfwWLLPBooF%2FDIRFgCNrt1IUmglSQNJ3CGOeR5NgsMWW2ci4cjkFm&X-Amz-Signature=351c4680844274da3fb699313ab122e905768b641d9de2253211d5ccd843121f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWTLWQPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID745Sip2d76KfkZzMGaEA4ThCcB1%2FV%2BNt62oaNhnU%2FPAiBRT%2B2S4agj4CVuI36OaMgIW%2F29VK6hvMEVdk79L5EcFCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMc5twFb9kvPZmSg%2FCKtwD145QjUtWWjD9PNPHLqaduGfZIuJAXB%2FDXNf56Mx0IHOCrTsAfuRTYkgAUQdUioHYTNOKXRaeMuX9b%2BqC1QQoK7LZ1nXXtygTjOGO9%2BjwC2HmsidR4t0l3sIsvF1%2BKJdPOCLSg%2FoLWQ93kqujvlqME1KfsjMyO%2FzH6VKYQn0rbhYGzVaypiM570eHfIPXIuYlG7TSItMiS2e2r2tEBISYNcclnWuSVE6j%2FSYNxnILVNlp9Z8F%2B%2F%2BuRNPGG1E%2Fck%2FvoHizgRaIcrBb1lgtgFiGzen0mzBg1IvJOtldOGlLZWV9avqlQWbpL3nxzhsn6RlcogkQkkrJimILNxL26JfsG%2FAP3OpBGTXUBhamm6VqheMuoMSqz%2Ba%2BaoKwx6kCzA7N1PSJC8WiwPR9Gx43jS2I59IIHPBkOiHzctDjzs%2FDrrb7rPAl1KKXCBohVXnvunJwEAXWRqunE8RYGROYnxelsZXBTOcs0Va4CCL2%2F0nHywRtfoAUCos%2Fd6T%2F3m3uiJ1fW3h3IUbi9VMoyLPruaWU1lhBweQD6UU4PiVThXkmUbaaoGSX9Evm2O279CVxEm152Am5vdm%2Fp0F4mo5N1O0G37w%2Fv0uv4CQS9%2FHXRUsGL7JgNZYjLXqgmWLUnBow%2Bc2IygY6pgHC3cM7tu97LjIjYFaTphI%2BII1jyuNPNo1NiUDMYhjtAIP1dhPOuRHr%2BUujAa8szwAonezMWo3rPvsxUIQg6lad%2Bye3IRoiPGpdMmAOkBtYC2%2BXJraxG2YlPgvlCuxafD6Qj%2BACRskQf6dzId8VdNRgntWsbQzyKzwNPfgh3MJkfwWLLPBooF%2FDIRFgCNrt1IUmglSQNJ3CGOeR5NgsMWW2ci4cjkFm&X-Amz-Signature=a3895a78d889fc894abf9f785952fa835c93ed03a03856ae8e54a7afa719afa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
