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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7THZLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnWshkDyuUsRd%2BYf345FmFq%2BZp%2BGXGwumqT2ow84cfYAiEA7IPXkDjk0Bn8uZz1hY0xLfLKFjVmmXdRa2xmRXOcNMYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5s4l75DbX3SEz%2F9CrcA2%2FDBQq1D%2BKVH64QrKjS%2B5UfsPMjh9llYjyTBH7%2Bc7JGjt0%2FEOh%2B9%2FjiyotLF8030bdAzsKd5moLcGEnYO%2BL45dwJxbEBcISvyCBdbDlOrjidwKV1C9Exs0abbkeW6sn3O9i%2FJvl4toNFtS1HQ22LKTbspyfKaRPuxdH5dJWSk9jaZ87FA9z10sLB6z5iAOAtD45qMZcXhfXBlviUSx7qMBIk0OsfctkwwDkVi8V%2Bpl4PcVeoecFOCQJ8bNUr6TT8VUmDc%2BNgsm2hgrrGMVqI76cxcow0HQMjGQozk%2BQGfnki4Axtn3pFHUtT1umCJaOy8mn4HICZOKPzcxUCAEpPHIy6BNhby0RYQf8tPqmmb%2BmZVAxM%2BQP9mkKVZaQ2CfRkbu2QxgAWV%2FVMd4Tuh3Vw4ypqrfqF144xQGWPyVKeG3J1w0udxvKZzc7epPO1CeM9BXFIu0oxo4Qm71cMIMa6L7da%2FkUl8fOzpiP9Q0CoeGdjJKoq6zgV7dNb%2FP72L%2FlY2Y5tFFGv84ZR44uQS%2BwTd9Qz6lVoTrCDXE0mBGOpbBioSSRp9JundFE8xCCFsSqf9fyqR9MpIGKEmXS294m%2BKhUErEy6PHoIg8Kew0vxGrmClJywCBe%2B0GNHcYIMLj90skGOqUB08eJJZC3mDct43SO8zA0RnyRujKkbnWtiNJ5r21%2B8TPoUgAXxFpW%2FSBPSg%2FGzbzJANw8stF%2BRZzcRR878ZOQz7qjJVe%2F16Qm0H8etq3X%2BiDuhtK03GxQqlpA3cjbpFM%2BXD3kLEYA51SrkixmBjKM7NzNZxFHkv%2B8axAQZGL1Tow%2Blrv1u0p3YfE2Z0UXHCBCvx1aGG7V78Dshqdg4%2Bg5yb6keJc7&X-Amz-Signature=1f9ca52da93631a2ca480ebc6dedb842a6e11fc74f8bfefdf5b5f1bc216377ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7THZLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnWshkDyuUsRd%2BYf345FmFq%2BZp%2BGXGwumqT2ow84cfYAiEA7IPXkDjk0Bn8uZz1hY0xLfLKFjVmmXdRa2xmRXOcNMYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5s4l75DbX3SEz%2F9CrcA2%2FDBQq1D%2BKVH64QrKjS%2B5UfsPMjh9llYjyTBH7%2Bc7JGjt0%2FEOh%2B9%2FjiyotLF8030bdAzsKd5moLcGEnYO%2BL45dwJxbEBcISvyCBdbDlOrjidwKV1C9Exs0abbkeW6sn3O9i%2FJvl4toNFtS1HQ22LKTbspyfKaRPuxdH5dJWSk9jaZ87FA9z10sLB6z5iAOAtD45qMZcXhfXBlviUSx7qMBIk0OsfctkwwDkVi8V%2Bpl4PcVeoecFOCQJ8bNUr6TT8VUmDc%2BNgsm2hgrrGMVqI76cxcow0HQMjGQozk%2BQGfnki4Axtn3pFHUtT1umCJaOy8mn4HICZOKPzcxUCAEpPHIy6BNhby0RYQf8tPqmmb%2BmZVAxM%2BQP9mkKVZaQ2CfRkbu2QxgAWV%2FVMd4Tuh3Vw4ypqrfqF144xQGWPyVKeG3J1w0udxvKZzc7epPO1CeM9BXFIu0oxo4Qm71cMIMa6L7da%2FkUl8fOzpiP9Q0CoeGdjJKoq6zgV7dNb%2FP72L%2FlY2Y5tFFGv84ZR44uQS%2BwTd9Qz6lVoTrCDXE0mBGOpbBioSSRp9JundFE8xCCFsSqf9fyqR9MpIGKEmXS294m%2BKhUErEy6PHoIg8Kew0vxGrmClJywCBe%2B0GNHcYIMLj90skGOqUB08eJJZC3mDct43SO8zA0RnyRujKkbnWtiNJ5r21%2B8TPoUgAXxFpW%2FSBPSg%2FGzbzJANw8stF%2BRZzcRR878ZOQz7qjJVe%2F16Qm0H8etq3X%2BiDuhtK03GxQqlpA3cjbpFM%2BXD3kLEYA51SrkixmBjKM7NzNZxFHkv%2B8axAQZGL1Tow%2Blrv1u0p3YfE2Z0UXHCBCvx1aGG7V78Dshqdg4%2Bg5yb6keJc7&X-Amz-Signature=9827c7d5ce47fcfb7006fdb37a259f24f062a5e504413cbdc623e3ad6a7a9a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
