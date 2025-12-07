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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5Y7MJZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiLEMyftxmh5jNoi622HPbTH9zUSeiL2pyO4ykqFtXiAiEA7XBx4td8omrYeP3nT2cSpc6r6igIPyJBikV%2Bv8omjUwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHQE9XAI9japdAogyrcA93G6R5OjUEHSMINk9DkmAFWqxcMTpfzwk43ptxAg5REyBHnsa8DMPh3%2FbyEfq5CLsktg%2FhOQJtDRs3Z%2F8Jhv5YGpvHeC%2B6S2SLccKM2KAujWF8iDTSJnr5gpXNv5f0PSA3KH2DnGTI%2F9z4C5pn9PDWASJEqp%2FzvLsjbZhRkSwzlqxHAqBXFzgqrYRtDlaIDsoXJ6nW%2B4vPuglspCUFMLrqtJTc%2BKH8zyM7qMCuyQG9nQCjmjY7e9s005e18YR8Bopr%2Bl01RFFOwdZc93Ugos5CULAuY6nnTeeTt%2BzTJdOVpj92D6eHourxN3aFZwQVCiqnbXBZHTmCvlG8jkL97pz5HZn3PHm356bLY%2BjL1A99JLtXFl1zTkxr7wqbJjdfDhzbbnY0sxHO80SV0%2FznCLUFGNlvw9P%2Bw7S7T9KyTSYlRyJhb%2BDiwO2xjThmWxYA5M%2FAY53eSnBo18SjwFtg4SXg8boTbkG4FOqrezY%2Fp30UknNL%2Bd2OyJ4blpWK02rdASQkhNRiAIEk9LR2d4P7OyuLOb3UeLnCEAhUTjfnhpP%2B%2BZIFVi7kt6FOjnNgVu71I1mRwaHuT7Gz3m3vH0gc6jWekDuqquD9WmAyPLA2tTa0sB%2FbStRfSC6FmQs3CMNub1MkGOqUB4LIScC3EmdXRXtz3MOMBkqFzvMxQI2aF4HP4KfgPdwBMFhqK0yjKh0EVhbVbEC1bOT5U5R6oneYVX91juHRjdIAQI5pmq1nwBwIMfpcSiyItq6Y7hNTWh2LjHX9pcY6PX9CC4aNDWRdjxOCOyR0QIx0fZxahNOTcwzjLeYoQj3U8zST7F4JB8Dm1XPwOwq4w2CfxPCrHPKQ%2Fz5qAcPoJZdWfKYKu&X-Amz-Signature=7a0b25bf2000eb04050ab111cf6984c25a728a51f60d249018675454ac22613d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5Y7MJZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiLEMyftxmh5jNoi622HPbTH9zUSeiL2pyO4ykqFtXiAiEA7XBx4td8omrYeP3nT2cSpc6r6igIPyJBikV%2Bv8omjUwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHQE9XAI9japdAogyrcA93G6R5OjUEHSMINk9DkmAFWqxcMTpfzwk43ptxAg5REyBHnsa8DMPh3%2FbyEfq5CLsktg%2FhOQJtDRs3Z%2F8Jhv5YGpvHeC%2B6S2SLccKM2KAujWF8iDTSJnr5gpXNv5f0PSA3KH2DnGTI%2F9z4C5pn9PDWASJEqp%2FzvLsjbZhRkSwzlqxHAqBXFzgqrYRtDlaIDsoXJ6nW%2B4vPuglspCUFMLrqtJTc%2BKH8zyM7qMCuyQG9nQCjmjY7e9s005e18YR8Bopr%2Bl01RFFOwdZc93Ugos5CULAuY6nnTeeTt%2BzTJdOVpj92D6eHourxN3aFZwQVCiqnbXBZHTmCvlG8jkL97pz5HZn3PHm356bLY%2BjL1A99JLtXFl1zTkxr7wqbJjdfDhzbbnY0sxHO80SV0%2FznCLUFGNlvw9P%2Bw7S7T9KyTSYlRyJhb%2BDiwO2xjThmWxYA5M%2FAY53eSnBo18SjwFtg4SXg8boTbkG4FOqrezY%2Fp30UknNL%2Bd2OyJ4blpWK02rdASQkhNRiAIEk9LR2d4P7OyuLOb3UeLnCEAhUTjfnhpP%2B%2BZIFVi7kt6FOjnNgVu71I1mRwaHuT7Gz3m3vH0gc6jWekDuqquD9WmAyPLA2tTa0sB%2FbStRfSC6FmQs3CMNub1MkGOqUB4LIScC3EmdXRXtz3MOMBkqFzvMxQI2aF4HP4KfgPdwBMFhqK0yjKh0EVhbVbEC1bOT5U5R6oneYVX91juHRjdIAQI5pmq1nwBwIMfpcSiyItq6Y7hNTWh2LjHX9pcY6PX9CC4aNDWRdjxOCOyR0QIx0fZxahNOTcwzjLeYoQj3U8zST7F4JB8Dm1XPwOwq4w2CfxPCrHPKQ%2Fz5qAcPoJZdWfKYKu&X-Amz-Signature=41eaaa327a6bbe1173c0f5b911557da1fd5f38ae1accc9ffd5b8f3d3d8988bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
