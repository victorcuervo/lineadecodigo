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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJOCNB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtizGTc8X6GbrYzoMrTWxA8szZLeV0mFdwNxcv7wQkkAiBC2y4PoKE1XYAQz5fxRmvB%2FUqLbV6HODKQNGzAf3wgWir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1Vdy1VdaiEE%2FbJpQKtwDHBMBrCvxLIyt07G2%2F6UkLcB5CuGGQ%2BBC49H09NRuWRnqRIk5IDFxKP%2BL6Q7Mlu9rDhE%2BHqOY%2F3UCt%2BPejRD3O9ueUG5Ld4UvM8pz8Ionp4RB7g1wiZD6oHq6Wk%2Ba5slfwYZln68XtFwyc8reSGOFQFDZG95nEeLVxeqrw64VE%2FQu4R2G79oYH1jCHL09jICpya%2BN6X0A4nLJV1kTjdncE0vUFwaxKGWxztLR6BHW8k8itHnhn%2BkfyY32X7mtBecbPVCI1ddZFDbvGzhF4XrgKy9vZnRoZ%2FM3tiW6YD8eKI0evTxSi6j1%2FW8zNGjkY6jePVVwPmvBaOuV3XYv52gOjCr9Cfu6Us1UI8M16%2B%2FTdpvKQIyy2NGGl%2Bio1Asd54zSoK1cOfQ%2Fe8kke%2BkBdkL2KdgQVxLS0ImeiigRRibCZsYzrFklAu07Zl6GWYy6SoPghirBuU2EzT1fVYBQitOWWso0rq657dTPgXayswsHruap00BcV19vwlS5Cum1WC6ch6wtradnxddDz9qN32vrpNSySIiu0R3OQaAY56c53MAd0HSfUNC6BOuEBEvTT81sfR%2FrsBghc0r%2FapHt%2BOd0ahFN8G7n3iu%2FC5%2BPfuC3GLdX9PTs0%2B%2BVBC8Vdykw%2FsfRyQY6pgEeh0mDvMxuw330GTAfBjn1HgJiXe487XFLZ%2BjxL4L3FYUvXEyHhg%2F%2FaaTxThIqmHbXFWaDOcrtnaEcuOdHM7MomBacu1l9tFTmKfzi0cNnVQIrr83GuOcJ5Dsfp5KucEWDqO4rn8J%2FxwKhaZBijRo11L0%2FP2U%2BGDuYpmw38wFOXPnHZXeFY4HhQa%2BiRTnUugbp5mIl6AriI6mnd4mb65ptrN%2BmuATw&X-Amz-Signature=a4c99db9127435a995e93a5dd6089dbc3c67d69536a5ab5cd5bbf115b77cdb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJOCNB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtizGTc8X6GbrYzoMrTWxA8szZLeV0mFdwNxcv7wQkkAiBC2y4PoKE1XYAQz5fxRmvB%2FUqLbV6HODKQNGzAf3wgWir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1Vdy1VdaiEE%2FbJpQKtwDHBMBrCvxLIyt07G2%2F6UkLcB5CuGGQ%2BBC49H09NRuWRnqRIk5IDFxKP%2BL6Q7Mlu9rDhE%2BHqOY%2F3UCt%2BPejRD3O9ueUG5Ld4UvM8pz8Ionp4RB7g1wiZD6oHq6Wk%2Ba5slfwYZln68XtFwyc8reSGOFQFDZG95nEeLVxeqrw64VE%2FQu4R2G79oYH1jCHL09jICpya%2BN6X0A4nLJV1kTjdncE0vUFwaxKGWxztLR6BHW8k8itHnhn%2BkfyY32X7mtBecbPVCI1ddZFDbvGzhF4XrgKy9vZnRoZ%2FM3tiW6YD8eKI0evTxSi6j1%2FW8zNGjkY6jePVVwPmvBaOuV3XYv52gOjCr9Cfu6Us1UI8M16%2B%2FTdpvKQIyy2NGGl%2Bio1Asd54zSoK1cOfQ%2Fe8kke%2BkBdkL2KdgQVxLS0ImeiigRRibCZsYzrFklAu07Zl6GWYy6SoPghirBuU2EzT1fVYBQitOWWso0rq657dTPgXayswsHruap00BcV19vwlS5Cum1WC6ch6wtradnxddDz9qN32vrpNSySIiu0R3OQaAY56c53MAd0HSfUNC6BOuEBEvTT81sfR%2FrsBghc0r%2FapHt%2BOd0ahFN8G7n3iu%2FC5%2BPfuC3GLdX9PTs0%2B%2BVBC8Vdykw%2FsfRyQY6pgEeh0mDvMxuw330GTAfBjn1HgJiXe487XFLZ%2BjxL4L3FYUvXEyHhg%2F%2FaaTxThIqmHbXFWaDOcrtnaEcuOdHM7MomBacu1l9tFTmKfzi0cNnVQIrr83GuOcJ5Dsfp5KucEWDqO4rn8J%2FxwKhaZBijRo11L0%2FP2U%2BGDuYpmw38wFOXPnHZXeFY4HhQa%2BiRTnUugbp5mIl6AriI6mnd4mb65ptrN%2BmuATw&X-Amz-Signature=75b65dbd45e4537702f9a776a0168b647a6fb9e3463d851cc96538779decbb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
