---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575L7N4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDO%2FcvSVfKrkC4LRDPeESZaicf1agoUoRMh0pbVKZLSUwIgCpCD3l1pu9Jkb2wWeRe2Rsfh5eyvnnrxRg%2BUsuXCJjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKUI%2BIz13nmKTbNOnircA38Y3XDK%2FziVQqB9W7jYOms%2FkUZHJascww4Vfm7DhTaAccpIzWnx3f%2BB9UgA2H8aSkS5IjsAuoIfmUVf%2BshFxXupDR%2BfOtDGegX5V4Xdh6MM90vF%2F7JIIXbbvq8pvt8Ggb9jdDoGj7uhMzOgVVb7rkkdwr6JybfMrQebS81gWJ224wiBo4svTeJg10mkCYALQ5ONjF9%2FvLIC3ipTo25TOIIAt624lc9rOoC7VHj2WulMbjCtS3tY%2FFWxnUAynPOUiaLzT17klHCBvBgTfZVOCFAD%2BnWF8PvPHa1bLMpEpvV7mRyrrOuA2xK3ndxMRkKWC%2FofU%2BOBPWJz0qGn2be7nCpf8x%2BREFr4J7tBHbT6AgL4ezf71yqHmGCjkZYczeN99quU6RYkP%2B1HWhBoyRek89OMm1aND4XDVnyxYhA5rEFnKJOUsaRCg5uaWtJvFmt3AF0AzoTZ00wRRrAHgmiE%2FVSt6j5DKgh2UKcs2xRTjFX6yOAz9B8tbRSXcEHt9F%2FJtkIWKEE9R155vDDN8dSsXnzjof%2FBjRfyR3f7DpdTYmatOgZIVEJKk5rncTxmzmFp3XqT6V0ibWwW8BWwMdN0fnfPKorxkS6UES9RspXrS3XQal0PSwOlDD32jL2PMK3cwskGOqUBLcWmFz%2BmlQwUhqFOi9oO84MlXQKvMNuk3rzDuoEs1DcdoYQl%2BT2G3nXUW5w%2B68FxpmTdw7%2F7MpobL%2FVrYY9LlHHoIRFhV5KB%2BAIL%2BY6EytO1xo2HX%2FzIfZ%2FvSiAgQOda6XZWbDNYR33Yvo%2F68eHy2Pe3LZymi%2B8ipAYaD3T69fwQMfGSZ2%2F7hK%2FcwlFc7V8x9AWnytBIk7aqXpz6bmdVwCLlxT5C&X-Amz-Signature=7ec08d5d98fd50e1f4bbbde44115c2e440043d8d3999c11948d601bcc255ad37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575L7N4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDO%2FcvSVfKrkC4LRDPeESZaicf1agoUoRMh0pbVKZLSUwIgCpCD3l1pu9Jkb2wWeRe2Rsfh5eyvnnrxRg%2BUsuXCJjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKUI%2BIz13nmKTbNOnircA38Y3XDK%2FziVQqB9W7jYOms%2FkUZHJascww4Vfm7DhTaAccpIzWnx3f%2BB9UgA2H8aSkS5IjsAuoIfmUVf%2BshFxXupDR%2BfOtDGegX5V4Xdh6MM90vF%2F7JIIXbbvq8pvt8Ggb9jdDoGj7uhMzOgVVb7rkkdwr6JybfMrQebS81gWJ224wiBo4svTeJg10mkCYALQ5ONjF9%2FvLIC3ipTo25TOIIAt624lc9rOoC7VHj2WulMbjCtS3tY%2FFWxnUAynPOUiaLzT17klHCBvBgTfZVOCFAD%2BnWF8PvPHa1bLMpEpvV7mRyrrOuA2xK3ndxMRkKWC%2FofU%2BOBPWJz0qGn2be7nCpf8x%2BREFr4J7tBHbT6AgL4ezf71yqHmGCjkZYczeN99quU6RYkP%2B1HWhBoyRek89OMm1aND4XDVnyxYhA5rEFnKJOUsaRCg5uaWtJvFmt3AF0AzoTZ00wRRrAHgmiE%2FVSt6j5DKgh2UKcs2xRTjFX6yOAz9B8tbRSXcEHt9F%2FJtkIWKEE9R155vDDN8dSsXnzjof%2FBjRfyR3f7DpdTYmatOgZIVEJKk5rncTxmzmFp3XqT6V0ibWwW8BWwMdN0fnfPKorxkS6UES9RspXrS3XQal0PSwOlDD32jL2PMK3cwskGOqUBLcWmFz%2BmlQwUhqFOi9oO84MlXQKvMNuk3rzDuoEs1DcdoYQl%2BT2G3nXUW5w%2B68FxpmTdw7%2F7MpobL%2FVrYY9LlHHoIRFhV5KB%2BAIL%2BY6EytO1xo2HX%2FzIfZ%2FvSiAgQOda6XZWbDNYR33Yvo%2F68eHy2Pe3LZymi%2B8ipAYaD3T69fwQMfGSZ2%2F7hK%2FcwlFc7V8x9AWnytBIk7aqXpz6bmdVwCLlxT5C&X-Amz-Signature=07bd4ca555ecf8828e15845bdbdeb78dca8563d805dc4ebac68afc7802ecc767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
