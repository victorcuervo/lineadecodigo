---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHDP36N3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDtfCA4IxvyCHonfO8k2bCDPdgpebm0vYdSycnutfQbZQIhAMizy0xBpvZU8m%2FvMlvV0vIBy5m4mfNJfExs5P%2BMZCo1Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxMJnd8a0mTl6Gu%2BB0q3ANkFwj4ueFepVGggOQuOwdXIx1HvGzaHeyVgu07kX6N6K%2F6m41eQk7SSDM8a8T8K0Ubuyun0UrAgvuykBsrMlYRVuDWKno2rAiTq2YOXN8bRdXHlJd%2FX4iVPmjnmnh3zc1USbG9GyxtoEUzz7s74V5Wpeh2vs75LrBLFVrZegf3EmhthyQxHG9f99QOWLR4%2FOQKMnolM4GkYN4e2nA1rnDpbM325e12cMcwpQzyi3HnKOzmYOhV1CzUmrVn1IY7EAvol9vHq8AjrNDDK7GoGPt3j61kV0fhKrMiuruXhZf2%2FnLjgQpzKKV2wapxPMGWPrI0PN4acDkUUTDpOPl0C9YE8be5c10bxgL48%2BxkMXFVTIjWLVqWxPmNxya%2BgDLMwknwbd9QqgdPuNYp4n083FRsqwquCyG6BUViCDBDRePfR3bwx66e4yQRMCzo71veAg2z2%2FWlixUzlH28Ro6%2BPQBXECNlAw879kWq898pHjIiC%2Fzlov17c7KZsWsPC%2BgpWMMFxFgu2xzSD4%2BoDjCQ%2BP54nYrxcIRA4MAOYv6lPwYkICb92ZC58bOAxJOjCHq4B5UEBhvXcNY3bAgEvBsIpEV3qgc1bW5HKnrdQuK1nxP5yhs0uv4XwcuULBMmCzDX58TJBjqkAVHcBGySkkdHXfrCz90IBkVnlFcLeSuf1zLzLC6B%2BlwiFSHzWfzgUr5P53wWgCBwwtZBCUm9VnGZlRy9%2Fpn9pt1BCHlova%2BZWhAGch8JXYgt%2By1BK2n5eE7CU%2BXnFzXVKrSfqTI3nECtR6i1SwAuivWAJPZoXtY%2BtL%2FmVktxBwxmtFB7v8nP5IXwVfrBvz%2FnNuGfN7tAqE6VSVOw25aN4U5ZnBel&X-Amz-Signature=a9e182b408117c2f06071c24a3e2e23d5b7ea6a88981d1160f618583ef3af948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHDP36N3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDtfCA4IxvyCHonfO8k2bCDPdgpebm0vYdSycnutfQbZQIhAMizy0xBpvZU8m%2FvMlvV0vIBy5m4mfNJfExs5P%2BMZCo1Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxMJnd8a0mTl6Gu%2BB0q3ANkFwj4ueFepVGggOQuOwdXIx1HvGzaHeyVgu07kX6N6K%2F6m41eQk7SSDM8a8T8K0Ubuyun0UrAgvuykBsrMlYRVuDWKno2rAiTq2YOXN8bRdXHlJd%2FX4iVPmjnmnh3zc1USbG9GyxtoEUzz7s74V5Wpeh2vs75LrBLFVrZegf3EmhthyQxHG9f99QOWLR4%2FOQKMnolM4GkYN4e2nA1rnDpbM325e12cMcwpQzyi3HnKOzmYOhV1CzUmrVn1IY7EAvol9vHq8AjrNDDK7GoGPt3j61kV0fhKrMiuruXhZf2%2FnLjgQpzKKV2wapxPMGWPrI0PN4acDkUUTDpOPl0C9YE8be5c10bxgL48%2BxkMXFVTIjWLVqWxPmNxya%2BgDLMwknwbd9QqgdPuNYp4n083FRsqwquCyG6BUViCDBDRePfR3bwx66e4yQRMCzo71veAg2z2%2FWlixUzlH28Ro6%2BPQBXECNlAw879kWq898pHjIiC%2Fzlov17c7KZsWsPC%2BgpWMMFxFgu2xzSD4%2BoDjCQ%2BP54nYrxcIRA4MAOYv6lPwYkICb92ZC58bOAxJOjCHq4B5UEBhvXcNY3bAgEvBsIpEV3qgc1bW5HKnrdQuK1nxP5yhs0uv4XwcuULBMmCzDX58TJBjqkAVHcBGySkkdHXfrCz90IBkVnlFcLeSuf1zLzLC6B%2BlwiFSHzWfzgUr5P53wWgCBwwtZBCUm9VnGZlRy9%2Fpn9pt1BCHlova%2BZWhAGch8JXYgt%2By1BK2n5eE7CU%2BXnFzXVKrSfqTI3nECtR6i1SwAuivWAJPZoXtY%2BtL%2FmVktxBwxmtFB7v8nP5IXwVfrBvz%2FnNuGfN7tAqE6VSVOw25aN4U5ZnBel&X-Amz-Signature=064a807f54ecd969ce96c7888f8a1148783f07fe18a42dfdd39309e1f8a8fb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
