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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XH6SXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJGdsDR38z3zhXTBYfkhlLTsQzV%2BZqYbVi1TeBThq0TAiEAk3z57rG2tM98G7IT9soa45I5d8ZKbkKsmteGh4AJCYsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B2N753BTKccgvbFircA0kEEtQgq5Z8ceuWMakEIGyCiP6Z%2BJHimJzYHOv5eD80zq9SM1hAhPPF%2FyFLlqGx5hre4GQo6SfRkw6dNnOaPuMNiP3Ar%2BhBmbgyODA5T17%2FAM%2F4uK8%2BVxl9P5%2BGnXnIvCTk4h7UOnE75fXvpjZpNDtMa457fUi7qgfn3bGkSJXG313YdVAvdT6%2Bm4BT1Wg0y1w%2F6iFIRBHBTsusQwoal%2B3%2FOcAKTmWKJwmgOZPU1Bch9GcdehmcX7RdVA673R8GvLbSmyElpLeNQEq5vZEhjfXdrSIyodKmYeqPcuxUVBJRYjZiYHktjhBx3hzUxbHzXGws7bwWaIgTTqy9JEspkuc%2Bekx4IyvSoAb8wW%2B2fv0vi%2B39HkdiSA2pPuPIGCbvWYSNC5H%2FE%2B0uQ0k0Ue1Id8aXiBvovi0PtLGOJGtIppfqZR1ex3wAkk8u8tlL%2FwvLkQHsU43WLPNOGsvXZtdDxmdPCjHGEnC5I63J6kjdejKEYWzen9oApUDGRUzul5sT%2F53wrCQ4UtJ2PB38jMaLeZAPOChVugyX8BnmDesPN%2F9fOqYGfuQasvB1HzJkIua9lGP4jiy%2FMBQkZocazZ4puz8BtxrcSUYbHRgfLspOTJ4EXl70s2S94tM3sOmZMJ%2Ft2ckGOqUBW5L7md8x%2ByIFyHp19QMCTZwH%2BPrTgFYAcyqGZmymp0DuAe%2FSyBaik9a1zx2pF6OjxEU4vUkWquvVhaOcnk5iyJS1G%2FMfxjr8Lwe0GKnV2hicFwS%2BMJcCiHj693kqTXEZCkqO%2BtaSauuSaSluX5xvKiuHCm%2F%2Bpjxi8P0z%2Fg6aGHtPq26Y4npcHj8zm%2BvMMjjXsGNYHuPRdy%2FMvj%2B3K8UVJzhzDzmg&X-Amz-Signature=b4bf2b5d1858264430b33e0b642729cb887c111e2d6c3ae9e1fea303657df76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XH6SXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJGdsDR38z3zhXTBYfkhlLTsQzV%2BZqYbVi1TeBThq0TAiEAk3z57rG2tM98G7IT9soa45I5d8ZKbkKsmteGh4AJCYsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B2N753BTKccgvbFircA0kEEtQgq5Z8ceuWMakEIGyCiP6Z%2BJHimJzYHOv5eD80zq9SM1hAhPPF%2FyFLlqGx5hre4GQo6SfRkw6dNnOaPuMNiP3Ar%2BhBmbgyODA5T17%2FAM%2F4uK8%2BVxl9P5%2BGnXnIvCTk4h7UOnE75fXvpjZpNDtMa457fUi7qgfn3bGkSJXG313YdVAvdT6%2Bm4BT1Wg0y1w%2F6iFIRBHBTsusQwoal%2B3%2FOcAKTmWKJwmgOZPU1Bch9GcdehmcX7RdVA673R8GvLbSmyElpLeNQEq5vZEhjfXdrSIyodKmYeqPcuxUVBJRYjZiYHktjhBx3hzUxbHzXGws7bwWaIgTTqy9JEspkuc%2Bekx4IyvSoAb8wW%2B2fv0vi%2B39HkdiSA2pPuPIGCbvWYSNC5H%2FE%2B0uQ0k0Ue1Id8aXiBvovi0PtLGOJGtIppfqZR1ex3wAkk8u8tlL%2FwvLkQHsU43WLPNOGsvXZtdDxmdPCjHGEnC5I63J6kjdejKEYWzen9oApUDGRUzul5sT%2F53wrCQ4UtJ2PB38jMaLeZAPOChVugyX8BnmDesPN%2F9fOqYGfuQasvB1HzJkIua9lGP4jiy%2FMBQkZocazZ4puz8BtxrcSUYbHRgfLspOTJ4EXl70s2S94tM3sOmZMJ%2Ft2ckGOqUBW5L7md8x%2ByIFyHp19QMCTZwH%2BPrTgFYAcyqGZmymp0DuAe%2FSyBaik9a1zx2pF6OjxEU4vUkWquvVhaOcnk5iyJS1G%2FMfxjr8Lwe0GKnV2hicFwS%2BMJcCiHj693kqTXEZCkqO%2BtaSauuSaSluX5xvKiuHCm%2F%2Bpjxi8P0z%2Fg6aGHtPq26Y4npcHj8zm%2BvMMjjXsGNYHuPRdy%2FMvj%2B3K8UVJzhzDzmg&X-Amz-Signature=ff68e623fe60ae10cc8f8f2d7300fb22e0a87312dc8cc9f44dbd108e85bc8958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
