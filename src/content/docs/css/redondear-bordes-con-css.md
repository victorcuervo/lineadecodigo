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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665HWBSFA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp3%2F%2BqweAj%2BPNyeKWez6SdZkS28ZXu1FNnCOoD2D%2BgfAiEAjKLbnBhTEZKy0GVYY8Au0xA%2BgczRmPB7huGiaAUQXJ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvCPWB83IvbHy0j%2FyrcA8gt0%2F7xuV8tRvJ%2FurR9UzDZzg2Z393dq937s76jGwVVj8r%2BakJZLrSg4G6vcHlPbDZz9PyR6UFD71uoAtpIzbaD41X1D4Ln%2FPv%2F50xgBrJYIyuhYqsWOgYo04pcGz3K4X%2BmyM6%2FZldgk%2FkRfQil3qyV88Pn3gjyuhvi0%2FiZf8mibrQEesRv%2FVzpxRa8uZRK9b5GTyN9UaEM5J%2Bqf5%2FbZ8nSVJzL83HM7KQhJm1nhWjYZRLT5zexREe5Ln9Y958b1OnmDj1hMDXpw%2B1fmAXGrhqVkV0017t8pYcNwwlU%2FmqzOPRgsT12C70%2F8p39dRpE2MnEZUnf%2FY9xPARUK5ZBW5yc5xb8OcPYLpFHlin76HAkgEJCNFGXeEebZbIy%2BG7t9sk8Su9bi%2B%2BNa9sumz8YLdamdbgumDDeNXODB3ulngjXCrfVpOBG0cNbjecf5WmYlK3FUx2oyumJ1iO2Vh2vGtj9XNxhPtLEaCnBy%2B7WTYcb%2FR5a2LoCNuomJOzW4PkgCeGo7scVqC1b1pt0WMNpgT6OPOtnmuJoGpahnZ3msC%2BS47qqjk%2FHst03%2BiK%2BntkkRbJMu3%2FRFXNyIstAzb0ZrlzXbmoi7Gux6qpKzi9QQ58F5LbBpIJ2Wf1yQ3vFMK%2Fz2skGOqUBUIuPHBbNQOYb316GSmBanuDLnOKjMv7SN%2BC3qTtv5pwjC9fSphLQxVU2EGy3wm%2F4NH2jqze9HSUBj5akhjeaKq22jbqS0XDyosoJT8z6n5C4MPudO%2BWIQRR0MkMe31lGpuuOLR51tlFSzcbDjG1y4pk%2B8jWoZ5ZsakXFYlsvrC34GsDbCQmRpAgk4hBIa8THgL9WLwdT%2FUB6J0g4rRcvJJHHRlHU&X-Amz-Signature=33770a2c163855d9aa5e34c096cff83e20c32f6374ae75845378b86cfbfa8b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665HWBSFA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp3%2F%2BqweAj%2BPNyeKWez6SdZkS28ZXu1FNnCOoD2D%2BgfAiEAjKLbnBhTEZKy0GVYY8Au0xA%2BgczRmPB7huGiaAUQXJ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvCPWB83IvbHy0j%2FyrcA8gt0%2F7xuV8tRvJ%2FurR9UzDZzg2Z393dq937s76jGwVVj8r%2BakJZLrSg4G6vcHlPbDZz9PyR6UFD71uoAtpIzbaD41X1D4Ln%2FPv%2F50xgBrJYIyuhYqsWOgYo04pcGz3K4X%2BmyM6%2FZldgk%2FkRfQil3qyV88Pn3gjyuhvi0%2FiZf8mibrQEesRv%2FVzpxRa8uZRK9b5GTyN9UaEM5J%2Bqf5%2FbZ8nSVJzL83HM7KQhJm1nhWjYZRLT5zexREe5Ln9Y958b1OnmDj1hMDXpw%2B1fmAXGrhqVkV0017t8pYcNwwlU%2FmqzOPRgsT12C70%2F8p39dRpE2MnEZUnf%2FY9xPARUK5ZBW5yc5xb8OcPYLpFHlin76HAkgEJCNFGXeEebZbIy%2BG7t9sk8Su9bi%2B%2BNa9sumz8YLdamdbgumDDeNXODB3ulngjXCrfVpOBG0cNbjecf5WmYlK3FUx2oyumJ1iO2Vh2vGtj9XNxhPtLEaCnBy%2B7WTYcb%2FR5a2LoCNuomJOzW4PkgCeGo7scVqC1b1pt0WMNpgT6OPOtnmuJoGpahnZ3msC%2BS47qqjk%2FHst03%2BiK%2BntkkRbJMu3%2FRFXNyIstAzb0ZrlzXbmoi7Gux6qpKzi9QQ58F5LbBpIJ2Wf1yQ3vFMK%2Fz2skGOqUBUIuPHBbNQOYb316GSmBanuDLnOKjMv7SN%2BC3qTtv5pwjC9fSphLQxVU2EGy3wm%2F4NH2jqze9HSUBj5akhjeaKq22jbqS0XDyosoJT8z6n5C4MPudO%2BWIQRR0MkMe31lGpuuOLR51tlFSzcbDjG1y4pk%2B8jWoZ5ZsakXFYlsvrC34GsDbCQmRpAgk4hBIa8THgL9WLwdT%2FUB6J0g4rRcvJJHHRlHU&X-Amz-Signature=9f81a4e863019147eb9dd58efa2d721f95300b80a735b68c56e34758a873df51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
