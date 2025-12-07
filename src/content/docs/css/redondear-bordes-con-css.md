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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNEV26UA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwOkyNNMIFASesQy6wvF0Mr6w6QUqDF%2FE%2BxqNMJKFQtQIgDvkgwIK9mZzpy1Zsc7lMWYGFSLBK5dZrOTjElEgowwkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOQuWRG4NFnRju%2BKyrcA2iGr4VTbnCg%2FYS%2BfM%2FXGjiHCiK%2Fm6hiE%2FtvErx218%2FeVvx3JbLYJquTeyPICy2IWJ%2Fj2QmUIcqBrrrCkgARlK%2F3KRHDraVjNPOmRDrftgb3ptQOLcxXDrbne%2B%2BvMnWSmSF5Id41cM00QcOrgygq2nFAExlMzxS7mKHYoVGvEiIvOwAywOyqdI0KfjLb4i7eyb3e6qyjyJyCYzlaMT%2BAcPZ1jWi8i0KgnwFL9e2D55hY%2F8ER22jAmjmlMrc4g8IgVIjSUOvDG62NAOyxuDeyyk4mh1Xwh6i47yNnOmCX2wIjppv8H8wNF9wOVAR2%2Bj80IVWs0mqK3hIzfMGfu04YKzbXPvgtpAUoUFzqeawGoG%2BNiHYjtzT6D6jEHOVrHWka%2FVndvBg1uOa9Ob8S68QMm3G9gQ06Y6jhwKICxFtiuXK%2FF%2F7bIA7jXW0O31wkKIGMXZUi4d9EONK8QPKjRug%2FjejZvyI9SpT0ytxoK0twNr51hvuw%2F%2FGj%2BI5ov5AdHu4hM0C0%2FxtLpGfDfxa%2FBK5bcxFut38TUm0gF9z2xLSLgU0QNioyVz8AC5zdQoKT4B9%2BXpQewQhxNg2ThArbRcLfcAIGmByHqBctMRB3c8l5Mzc2ISXxQcXZdXAgD66%2BMLu21skGOqUBaDIRx5bTZUE%2Bfs38HZ8ecbJL1qypnIK8Z2AX1Y5oN80PXCdQpzKTJ30G4Z1U3etPW3mkCjncdS9oI5mTSW2RPmw6atBf8NBV2GxwKbn%2BhCKy76nvVkVGEJgS8wcUOSmLDKHHRi%2FuXT%2BHeiQu7Q%2BwrnBz5HH%2F%2Ft51iV2qpNMdqgUUXDlbv4WdDsUgFmrqInyaA%2BTadapjx3Jj47nAV37spcBlyV2q&X-Amz-Signature=a4458663062d2e662e0c3c57d432c15a4f6e382eb2af4518287ef78c80d453ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNEV26UA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwOkyNNMIFASesQy6wvF0Mr6w6QUqDF%2FE%2BxqNMJKFQtQIgDvkgwIK9mZzpy1Zsc7lMWYGFSLBK5dZrOTjElEgowwkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOQuWRG4NFnRju%2BKyrcA2iGr4VTbnCg%2FYS%2BfM%2FXGjiHCiK%2Fm6hiE%2FtvErx218%2FeVvx3JbLYJquTeyPICy2IWJ%2Fj2QmUIcqBrrrCkgARlK%2F3KRHDraVjNPOmRDrftgb3ptQOLcxXDrbne%2B%2BvMnWSmSF5Id41cM00QcOrgygq2nFAExlMzxS7mKHYoVGvEiIvOwAywOyqdI0KfjLb4i7eyb3e6qyjyJyCYzlaMT%2BAcPZ1jWi8i0KgnwFL9e2D55hY%2F8ER22jAmjmlMrc4g8IgVIjSUOvDG62NAOyxuDeyyk4mh1Xwh6i47yNnOmCX2wIjppv8H8wNF9wOVAR2%2Bj80IVWs0mqK3hIzfMGfu04YKzbXPvgtpAUoUFzqeawGoG%2BNiHYjtzT6D6jEHOVrHWka%2FVndvBg1uOa9Ob8S68QMm3G9gQ06Y6jhwKICxFtiuXK%2FF%2F7bIA7jXW0O31wkKIGMXZUi4d9EONK8QPKjRug%2FjejZvyI9SpT0ytxoK0twNr51hvuw%2F%2FGj%2BI5ov5AdHu4hM0C0%2FxtLpGfDfxa%2FBK5bcxFut38TUm0gF9z2xLSLgU0QNioyVz8AC5zdQoKT4B9%2BXpQewQhxNg2ThArbRcLfcAIGmByHqBctMRB3c8l5Mzc2ISXxQcXZdXAgD66%2BMLu21skGOqUBaDIRx5bTZUE%2Bfs38HZ8ecbJL1qypnIK8Z2AX1Y5oN80PXCdQpzKTJ30G4Z1U3etPW3mkCjncdS9oI5mTSW2RPmw6atBf8NBV2GxwKbn%2BhCKy76nvVkVGEJgS8wcUOSmLDKHHRi%2FuXT%2BHeiQu7Q%2BwrnBz5HH%2F%2Ft51iV2qpNMdqgUUXDlbv4WdDsUgFmrqInyaA%2BTadapjx3Jj47nAV37spcBlyV2q&X-Amz-Signature=52795995990b7dc80d0ab9391a008df6a8a9f2e66746741702efd89b7c52dc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
