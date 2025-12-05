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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN23P5MF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUgctE0JIGe2AM6gqI1i09g8tXR8y5EXwG8VjPAMUt8AiBZIDoqRoJF8xC4vggcPTrkxjKA2lNU0X847YVemHK%2FACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnw%2F48ggbNRRkPcfFKtwDhtNRTaUy1WqiIReY8X%2FTcp7Y3UMliM%2F6Al5psDKTJVtqi%2BplfsUFynPrsYBI1Kxnp2KgZwhYYv8YF2nB4%2F4eX%2FD4CXmqpc7%2FsVCQrGWEVq5j78lloXbhrg1lNt%2FCcAhdWVOC1F0hUyeenOgyLtVbjBvoGVCFiM%2FK2kiqx7sYhca0r3xHjk8BQMy%2BRr7AvDXY%2FL%2BaMGJ%2Bc%2F28KX%2BYoHn6pl3LQM9BLj3OqwbRw73AeH7mLsv6Aponpsr6U%2BwaoikQgBGcqRbmIps65z85pOIf3qEoECUmNfGhOjOXGrbjuExWeR8KyM1dxFgAoJpzf7grQOnadEP5pjoazs77BTDOSfVWSIWzPVY%2BkrZzKaMitftSYXm1GKiavc%2B3728cQJhRodeIS1czksVK7rdwzYE8aUFXzKrOArlkXX5TOIMeH5nq00KbEa%2F1xdO%2BHEPp4QVpbZrJ1bUg5hXsYkDTx1FbiIyVHfMwfhVkIx5WWcX2OJRAefYC882kYBC%2F%2FmCnmHqLVrLPaAK%2FwTVz5UDoYGOV1WjZVvCE84dic4%2FZrHBBellWZlX1CTG55btfoAuIMV3xAy9B9sNFZWIbACDaQXPZl3%2BzAzivfStR3Q1pFF2pilhwrZYS8Mp%2FrkU41l8wu6zJyQY6pgFSiEd7aslz4aVz%2FVwdo1ZJnsy%2BRPH5oDeKi1%2FhsYKnrXwiHs5a99rV4pDMnF113capT5bpDQ%2FMtCXyJ4Oekj%2BPTKRzt9L7Oi%2BcQIJQowjYWvRW0%2BfHegA%2BbmxLYsAAajJc0dQOuGI37yLTU7Y%2BnhwWDSM6Y4%2BNGZPHyeGkeEWg2GXSKlh2Em0F5y6J3GSPXupYyZb41K5M%2Boadr9AI4hOfbtF4O0Rq&X-Amz-Signature=e918c2223f825c064f8b7e3632eddf7f6a9672e3fe0ed955c18090a6a54cee90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN23P5MF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUgctE0JIGe2AM6gqI1i09g8tXR8y5EXwG8VjPAMUt8AiBZIDoqRoJF8xC4vggcPTrkxjKA2lNU0X847YVemHK%2FACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnw%2F48ggbNRRkPcfFKtwDhtNRTaUy1WqiIReY8X%2FTcp7Y3UMliM%2F6Al5psDKTJVtqi%2BplfsUFynPrsYBI1Kxnp2KgZwhYYv8YF2nB4%2F4eX%2FD4CXmqpc7%2FsVCQrGWEVq5j78lloXbhrg1lNt%2FCcAhdWVOC1F0hUyeenOgyLtVbjBvoGVCFiM%2FK2kiqx7sYhca0r3xHjk8BQMy%2BRr7AvDXY%2FL%2BaMGJ%2Bc%2F28KX%2BYoHn6pl3LQM9BLj3OqwbRw73AeH7mLsv6Aponpsr6U%2BwaoikQgBGcqRbmIps65z85pOIf3qEoECUmNfGhOjOXGrbjuExWeR8KyM1dxFgAoJpzf7grQOnadEP5pjoazs77BTDOSfVWSIWzPVY%2BkrZzKaMitftSYXm1GKiavc%2B3728cQJhRodeIS1czksVK7rdwzYE8aUFXzKrOArlkXX5TOIMeH5nq00KbEa%2F1xdO%2BHEPp4QVpbZrJ1bUg5hXsYkDTx1FbiIyVHfMwfhVkIx5WWcX2OJRAefYC882kYBC%2F%2FmCnmHqLVrLPaAK%2FwTVz5UDoYGOV1WjZVvCE84dic4%2FZrHBBellWZlX1CTG55btfoAuIMV3xAy9B9sNFZWIbACDaQXPZl3%2BzAzivfStR3Q1pFF2pilhwrZYS8Mp%2FrkU41l8wu6zJyQY6pgFSiEd7aslz4aVz%2FVwdo1ZJnsy%2BRPH5oDeKi1%2FhsYKnrXwiHs5a99rV4pDMnF113capT5bpDQ%2FMtCXyJ4Oekj%2BPTKRzt9L7Oi%2BcQIJQowjYWvRW0%2BfHegA%2BbmxLYsAAajJc0dQOuGI37yLTU7Y%2BnhwWDSM6Y4%2BNGZPHyeGkeEWg2GXSKlh2Em0F5y6J3GSPXupYyZb41K5M%2Boadr9AI4hOfbtF4O0Rq&X-Amz-Signature=21fc6d516b16102d72a741130f29b6b3f91e9a6fe6b071794aa83635d077ceb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
