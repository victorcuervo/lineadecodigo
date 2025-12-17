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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIOE7QW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC23xn7BGtNB9xW42OEjT0VX8RfLpIIgpwhS42aWUGm8AIgGmoAjwaNzAy112DXSbJimxL56wTQw%2FBI5h7KO0Bbb5sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGaGoDZMQLcT%2F0%2Br7ircAyMLGM5zWct1QzAcIwd%2FC%2BXg6%2BVb%2BrC9ufuzUByAP8yetcPyhCko5kjZzLVgn15pBBV57UvkE3AVOPoEz%2FCmtN0mQn3YFZevkuaBzpl3ntVXzkQbsvsxRfgRWkjWEH0186WSg1gMkrMI1NzMLC1VEBebOMDudZGSd4uLHjkZ5SSdqt7zdKmBxXORv4zcWVErbnkXOXVzhQ4o8DIi5dC0%2FeROJ8EOQ31gwhuj724fjVOYd7JxIX4laYoIY1ooEAOur6zMkYzIcbkEZJkabbW%2Fb7gda2WLUI6yKp%2FqWYtyfx5%2Bb5zvB9ClvXoyeL%2FqLUod24T1BCL1j%2BS%2BxySFhvm7OYdVNJy6TAOW9pzzprOpIBX65gamP3S6r19C3mGPDmd%2Bu%2BKZzMj5qU%2BltP98luTPDswSvGDiTTsHC2xqqZqBBozEMQb63VOaGBR%2F4xGzfgjnjbpSP1mKcrITMPNBCjHcry35QA%2FiVUXaysykRpgwWd40PEQPZyrnnjfys37jj5Y%2F4PuQOKsO270SOTQayX9uH3F7LeB7AkrpYOzlW2C6CIirv58ABtI%2F7TmmgyHtjtk1%2BwpjGUYXAFAfZivC9rbPKbnmhedhEDKTBeOtsUSZmbOZKlOJJcAywK6Pfj1bMLD6h8oGOqUBOcUq32E%2BT%2B%2FMC7KhRAOmaO5PaS3Rq7Mqhrvhrxxv4yS7E8aRPrWkNCef87TX%2BPSYZYk%2BUACTXA%2F7trpcVleZ80OkmYDt8rmqUER4FpIS2fnpk4wxiYF%2FecIeI5IrSDgeNLcTsLLWWKS5UrZlHXX9F81tvpCwSlTYTMdp40L%2BErYNor77RIrBYjPjCAy1260hTga%2FMaoQff5%2BZg0X7mLtrQpXgyiQ&X-Amz-Signature=a1b3e33e0e6a70a9a5820e29c1b7bbeb9b2abac9b4eb961fd341af4142291032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIOE7QW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC23xn7BGtNB9xW42OEjT0VX8RfLpIIgpwhS42aWUGm8AIgGmoAjwaNzAy112DXSbJimxL56wTQw%2FBI5h7KO0Bbb5sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGaGoDZMQLcT%2F0%2Br7ircAyMLGM5zWct1QzAcIwd%2FC%2BXg6%2BVb%2BrC9ufuzUByAP8yetcPyhCko5kjZzLVgn15pBBV57UvkE3AVOPoEz%2FCmtN0mQn3YFZevkuaBzpl3ntVXzkQbsvsxRfgRWkjWEH0186WSg1gMkrMI1NzMLC1VEBebOMDudZGSd4uLHjkZ5SSdqt7zdKmBxXORv4zcWVErbnkXOXVzhQ4o8DIi5dC0%2FeROJ8EOQ31gwhuj724fjVOYd7JxIX4laYoIY1ooEAOur6zMkYzIcbkEZJkabbW%2Fb7gda2WLUI6yKp%2FqWYtyfx5%2Bb5zvB9ClvXoyeL%2FqLUod24T1BCL1j%2BS%2BxySFhvm7OYdVNJy6TAOW9pzzprOpIBX65gamP3S6r19C3mGPDmd%2Bu%2BKZzMj5qU%2BltP98luTPDswSvGDiTTsHC2xqqZqBBozEMQb63VOaGBR%2F4xGzfgjnjbpSP1mKcrITMPNBCjHcry35QA%2FiVUXaysykRpgwWd40PEQPZyrnnjfys37jj5Y%2F4PuQOKsO270SOTQayX9uH3F7LeB7AkrpYOzlW2C6CIirv58ABtI%2F7TmmgyHtjtk1%2BwpjGUYXAFAfZivC9rbPKbnmhedhEDKTBeOtsUSZmbOZKlOJJcAywK6Pfj1bMLD6h8oGOqUBOcUq32E%2BT%2B%2FMC7KhRAOmaO5PaS3Rq7Mqhrvhrxxv4yS7E8aRPrWkNCef87TX%2BPSYZYk%2BUACTXA%2F7trpcVleZ80OkmYDt8rmqUER4FpIS2fnpk4wxiYF%2FecIeI5IrSDgeNLcTsLLWWKS5UrZlHXX9F81tvpCwSlTYTMdp40L%2BErYNor77RIrBYjPjCAy1260hTga%2FMaoQff5%2BZg0X7mLtrQpXgyiQ&X-Amz-Signature=49d05aac38f16e024f442da8524adbab4e35149b5f7afbf4f4513bc2fbc070b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
