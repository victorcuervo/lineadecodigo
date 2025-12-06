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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5C3RQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb6fJujdoSWqYON%2BgG%2BR5MMz6suQEo%2BY1d%2FDgoftKN2QIgGk30adau0ll5wZzAOrCmPRBAM%2BSwa9cceeF5vvt4AeUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDI7reuahmY4a04i%2BRCrcA3uZwy6J0Q4%2FdevmpcVQ%2Fo4T4cwDJRvWf%2F2bb05uwJIsbMm%2BxQxX%2BtdBr8BraxtTDBeW4Va7IWfhZVOZezvQCbLlCpzAAbhazFTVo2oBQMGyV4o9%2FlA3TLMNu39xAfZnhdwadpNIFek6DGYD%2Bed6tQm15f9stj6leaBIwBCwFt5o%2FsgL6%2FSrzFzldgPC9HqPDdGhYe4QPA4A%2FARZMYPukINTbKreEys6g%2F8XiyUAIWa6CTIfd8C45%2BwL13RINBge0YrGCsKITDuG8GUZXxPUI09FohwRiJ%2FMwj9JJgSalCoVU7OOZG0GU7QiK5h9bq7ZnLPsN9uKBltBhbT1In4Vvm4bdS2THsThfbk3eArXWgT4cWJWKaqq%2F9%2B8Sp7bESG2YdQEctY8e0977ggM6P1FPY0ry1Hc%2BZ2CrWDfE5rS0Dn5oNXJ2rQtgl1GPcYH702WF%2BFFRGRH3zese7rykiFG6RnUxmoO6dJE%2BjT%2BaR%2F2KKCizLp9LxRaA70g4K7P5WVTIUecNiiFMjym6VPyHuJl3o8m8rr58BmhHd4GLcIcUDdXK87XPqOSEir00xuNsJlcrOhtzjzPTaCVBF3pqTug9JipdwAGxrhdzQg2DmmvWAcaG4u3XVp3L2Z3C%2BFlMI3H0ckGOqUBXIF8jYRnvTpWII%2FXd07rYxi8pF9ndFVJDYTSyZkbZF8aQx92SypBQYQ3oguKivQDALxuy48oYzmHTWzZMOq9fDt%2B9MSvKzKmpjTO%2Ft6Vc0HlD%2F2sx6R7kaBNHxg9rUerzKK4eypxIsBQw0OhG5nZlzzkVFwFj9dSJAi%2FkauJVmxI4q4xd07qTFB%2FBTWgCaf253fFhnTEsDwkoE5Gcj9aaTZ1weo0&X-Amz-Signature=8cd50a4494a8dbd8bc2b71e6dbe674cce7834f24830d1e28b3cd24d5f5c981ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5C3RQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb6fJujdoSWqYON%2BgG%2BR5MMz6suQEo%2BY1d%2FDgoftKN2QIgGk30adau0ll5wZzAOrCmPRBAM%2BSwa9cceeF5vvt4AeUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDI7reuahmY4a04i%2BRCrcA3uZwy6J0Q4%2FdevmpcVQ%2Fo4T4cwDJRvWf%2F2bb05uwJIsbMm%2BxQxX%2BtdBr8BraxtTDBeW4Va7IWfhZVOZezvQCbLlCpzAAbhazFTVo2oBQMGyV4o9%2FlA3TLMNu39xAfZnhdwadpNIFek6DGYD%2Bed6tQm15f9stj6leaBIwBCwFt5o%2FsgL6%2FSrzFzldgPC9HqPDdGhYe4QPA4A%2FARZMYPukINTbKreEys6g%2F8XiyUAIWa6CTIfd8C45%2BwL13RINBge0YrGCsKITDuG8GUZXxPUI09FohwRiJ%2FMwj9JJgSalCoVU7OOZG0GU7QiK5h9bq7ZnLPsN9uKBltBhbT1In4Vvm4bdS2THsThfbk3eArXWgT4cWJWKaqq%2F9%2B8Sp7bESG2YdQEctY8e0977ggM6P1FPY0ry1Hc%2BZ2CrWDfE5rS0Dn5oNXJ2rQtgl1GPcYH702WF%2BFFRGRH3zese7rykiFG6RnUxmoO6dJE%2BjT%2BaR%2F2KKCizLp9LxRaA70g4K7P5WVTIUecNiiFMjym6VPyHuJl3o8m8rr58BmhHd4GLcIcUDdXK87XPqOSEir00xuNsJlcrOhtzjzPTaCVBF3pqTug9JipdwAGxrhdzQg2DmmvWAcaG4u3XVp3L2Z3C%2BFlMI3H0ckGOqUBXIF8jYRnvTpWII%2FXd07rYxi8pF9ndFVJDYTSyZkbZF8aQx92SypBQYQ3oguKivQDALxuy48oYzmHTWzZMOq9fDt%2B9MSvKzKmpjTO%2Ft6Vc0HlD%2F2sx6R7kaBNHxg9rUerzKK4eypxIsBQw0OhG5nZlzzkVFwFj9dSJAi%2FkauJVmxI4q4xd07qTFB%2FBTWgCaf253fFhnTEsDwkoE5Gcj9aaTZ1weo0&X-Amz-Signature=e994e5c7ac68f878f49a993d37ea352333706755958f83993f6501cf658faeb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
