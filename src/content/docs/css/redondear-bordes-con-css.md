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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MIXGUR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe8ftgm%2FUvSsHsgJzyIAelQdtQ6h%2FRQJhOXBA4Qeu7oAiEA6f14YgCxDhNR1M9w0vR8QMaagxf02bVHt%2FF9LgztWvcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3hzMBsKoDP8YdkpircA7NEM%2B7fP4HDL7NZxRYlhGzgF8EuQ3k7Cth5wvlabYW7ctf19k8WaHbeK5g%2BbbjPh317h5wZG7ZRdPr9fAn4lWXogG0lJbJ2jmmRT2UHeLG%2Fn%2FAoSchl0bEru08Ie7p5%2F8d7PcBdcvumIpJ9Zt9tlMffpVTvGtSYVZk034%2F7ubidTuj2q0VBO2HogAD%2FWvdmHH%2B7yubmSa20XN5Nxvw27dcF2CLvfZSVelgmAtZRMpbKC%2F%2FQNOVq1e74vd0Hbpx1lexGW%2Fank%2Bv%2FLzn64%2B8hDFXG2nGyB9uH1HH5AWDl2q4oT7CGFKMNlzhAA8Na13NPaM2PR3t1bhDnmZS3uBHXFuAOIckswwnh74id6%2BtyL7%2BHInqyjwxxQum%2F%2FFpettFwvYU5BWR9GRorYxtXuIDsJAP%2FNqa2CEgV9skZxhgfF6j3pfF7A9IKTHFhTL%2FXcHGAPjNhFFZuTgeir1vUBybqzYQlUDxtwsgOAsUCPKtHKDYXn3CfF%2Fp5tVGuZ3E0FN%2BEpQs3pM0Khu7e1F9HPxKMZsbClmmUVn3mH%2B7U6WOgDRPdSbdQtFIneWfGmQSNONoRVvZzOnlioP9Bj3%2FgtwywtmokXoNRGBlKeWLG9n5UnSLvKNahngU1Tl%2FhcPr0MNP90skGOqUBWGGfyI3E%2Fz0hyWsfXLrxFIYyXw6LOZ4L1RV5%2FwOzoFg1vVdRFsNHeda%2F%2FpCIZ7uBxWCId7Fxba3lmW9C360DLtd62WIArleljFC7IYch3KtlnKfNHGhdSioOlqluHo1Cwc7OU0HildtYqQWEzTD7nGWT1Mu0Z1Ov3nKMmkYg%2BZC2TwyQkUPCifivtwmpFLstskdci3t2yaYl3TyTRX%2FgwvUCBuXK&X-Amz-Signature=dd01f8f853c753d281f0edbbc15dcc2c3a6a49abe6c2d3f26b9a023213431252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MIXGUR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe8ftgm%2FUvSsHsgJzyIAelQdtQ6h%2FRQJhOXBA4Qeu7oAiEA6f14YgCxDhNR1M9w0vR8QMaagxf02bVHt%2FF9LgztWvcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3hzMBsKoDP8YdkpircA7NEM%2B7fP4HDL7NZxRYlhGzgF8EuQ3k7Cth5wvlabYW7ctf19k8WaHbeK5g%2BbbjPh317h5wZG7ZRdPr9fAn4lWXogG0lJbJ2jmmRT2UHeLG%2Fn%2FAoSchl0bEru08Ie7p5%2F8d7PcBdcvumIpJ9Zt9tlMffpVTvGtSYVZk034%2F7ubidTuj2q0VBO2HogAD%2FWvdmHH%2B7yubmSa20XN5Nxvw27dcF2CLvfZSVelgmAtZRMpbKC%2F%2FQNOVq1e74vd0Hbpx1lexGW%2Fank%2Bv%2FLzn64%2B8hDFXG2nGyB9uH1HH5AWDl2q4oT7CGFKMNlzhAA8Na13NPaM2PR3t1bhDnmZS3uBHXFuAOIckswwnh74id6%2BtyL7%2BHInqyjwxxQum%2F%2FFpettFwvYU5BWR9GRorYxtXuIDsJAP%2FNqa2CEgV9skZxhgfF6j3pfF7A9IKTHFhTL%2FXcHGAPjNhFFZuTgeir1vUBybqzYQlUDxtwsgOAsUCPKtHKDYXn3CfF%2Fp5tVGuZ3E0FN%2BEpQs3pM0Khu7e1F9HPxKMZsbClmmUVn3mH%2B7U6WOgDRPdSbdQtFIneWfGmQSNONoRVvZzOnlioP9Bj3%2FgtwywtmokXoNRGBlKeWLG9n5UnSLvKNahngU1Tl%2FhcPr0MNP90skGOqUBWGGfyI3E%2Fz0hyWsfXLrxFIYyXw6LOZ4L1RV5%2FwOzoFg1vVdRFsNHeda%2F%2FpCIZ7uBxWCId7Fxba3lmW9C360DLtd62WIArleljFC7IYch3KtlnKfNHGhdSioOlqluHo1Cwc7OU0HildtYqQWEzTD7nGWT1Mu0Z1Ov3nKMmkYg%2BZC2TwyQkUPCifivtwmpFLstskdci3t2yaYl3TyTRX%2FgwvUCBuXK&X-Amz-Signature=3ea853804c581b3af50b30f87893331b9ee039b40991d40aeede6de86791d765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
