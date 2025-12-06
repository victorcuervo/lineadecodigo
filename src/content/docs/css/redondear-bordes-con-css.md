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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AP6H2L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfi021nI6EpPMK6EQ4zCueMkaNO%2Bljq7wAfqOgEOiyVAiEA%2FQd0Z8zlcrE900XYmwfRl2BiKM2AJCfLO8OO%2FZzfy7Uq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEPnO2Mk9dBSUdn%2BmSrcAyM30bL%2FZqQS%2FamYFDfL73RMtjWz14bHStI3Sr9mb4gLeFNgY03%2BE%2B3j7Y87oEiat2Xw4m5tFz0yaf3yhdMrst%2B%2FEIgA0EV3yGXXcL6aWEKVJ2K%2F1sY3B1LQSsxjuAGF5aIzIumIkXf2xYZoIx1wIJKjEOuCtMVvsRHCMlkAP8MOvcgDS56YGXmcq%2F5LGAGXnzV0cO0Xpe6dcj7MYkGa4R8OLtk2W%2F4XUdR9WDoQjvCdZDetCX1zaDLE4MmmKxe9jvZSYo1U8filtKCIVGlyHAx6EgMwUyE0OpS%2F2miF7qMD6na7MqjGiQvdbVm1rKTz%2BG2Pz9rfypisW3VI4SzHNST%2FUbTBA%2F8OFxk%2F4jeCDi1at6uOyGGnFQuUeLy2az4MxLcpQxwHcMBu%2FYuTMVOIAe8Xqhn47TeEXrDSvxzs9gqEU%2B%2BuOgOnzWPFnvtDuv0QzWZmvubb8oGAHhOdxWj%2BeUacpuMmLFeEHk1Dlj16furJiP%2BCVnXxUk8W6kD7oucPLg2pbjIhp3Xtt3b2Qa6d4FXgpKSaxDLgHyMk565aRMB2onE1rFMB2VhCebD4%2BcMEdax9%2B%2Fltivbbfmr%2Bupbi2XxcMPBKY11mZEMSgRBBIs29Nv2ZR5jhhr5d%2F3O9MNj8zskGOqUBjbfhLy5V%2Fd32oOg95Vykc2FNdxE7z2qvtba3pl65WSZBrhvDyGfkx86gdwC1iYoL57xWki1cweUs%2B7oZHRVD%2F5WNy5dbvtTbOtQ1M1%2Fni%2FHKZuM2n4NhZNtNL7HpBsaNueDfexyEHI%2BIvirH3I4qk968npqK3NmrjYUa%2B6z%2B38YMi9SNfX46P4rH9b6WN%2BcP5C6ym5yS8BGYV7cBK8N%2BR9ibROMs&X-Amz-Signature=727d19675e05fd9042d7342f0f7bc5ad771f8230da484a98510e2bd2aa88bec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AP6H2L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfi021nI6EpPMK6EQ4zCueMkaNO%2Bljq7wAfqOgEOiyVAiEA%2FQd0Z8zlcrE900XYmwfRl2BiKM2AJCfLO8OO%2FZzfy7Uq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEPnO2Mk9dBSUdn%2BmSrcAyM30bL%2FZqQS%2FamYFDfL73RMtjWz14bHStI3Sr9mb4gLeFNgY03%2BE%2B3j7Y87oEiat2Xw4m5tFz0yaf3yhdMrst%2B%2FEIgA0EV3yGXXcL6aWEKVJ2K%2F1sY3B1LQSsxjuAGF5aIzIumIkXf2xYZoIx1wIJKjEOuCtMVvsRHCMlkAP8MOvcgDS56YGXmcq%2F5LGAGXnzV0cO0Xpe6dcj7MYkGa4R8OLtk2W%2F4XUdR9WDoQjvCdZDetCX1zaDLE4MmmKxe9jvZSYo1U8filtKCIVGlyHAx6EgMwUyE0OpS%2F2miF7qMD6na7MqjGiQvdbVm1rKTz%2BG2Pz9rfypisW3VI4SzHNST%2FUbTBA%2F8OFxk%2F4jeCDi1at6uOyGGnFQuUeLy2az4MxLcpQxwHcMBu%2FYuTMVOIAe8Xqhn47TeEXrDSvxzs9gqEU%2B%2BuOgOnzWPFnvtDuv0QzWZmvubb8oGAHhOdxWj%2BeUacpuMmLFeEHk1Dlj16furJiP%2BCVnXxUk8W6kD7oucPLg2pbjIhp3Xtt3b2Qa6d4FXgpKSaxDLgHyMk565aRMB2onE1rFMB2VhCebD4%2BcMEdax9%2B%2Fltivbbfmr%2Bupbi2XxcMPBKY11mZEMSgRBBIs29Nv2ZR5jhhr5d%2F3O9MNj8zskGOqUBjbfhLy5V%2Fd32oOg95Vykc2FNdxE7z2qvtba3pl65WSZBrhvDyGfkx86gdwC1iYoL57xWki1cweUs%2B7oZHRVD%2F5WNy5dbvtTbOtQ1M1%2Fni%2FHKZuM2n4NhZNtNL7HpBsaNueDfexyEHI%2BIvirH3I4qk968npqK3NmrjYUa%2B6z%2B38YMi9SNfX46P4rH9b6WN%2BcP5C6ym5yS8BGYV7cBK8N%2BR9ibROMs&X-Amz-Signature=93ce3b569fa4a0825fcfe362f22d367dc244cdf9377c6a7316dbfdb2e14b62d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
