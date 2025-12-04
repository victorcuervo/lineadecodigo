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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ITHYXT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAeXkz3Sf775wXB%2FpXrNlBF2InSkpUCnV8G7mYOtVbUqAiEAgzdUFUIL3oI8NLiXf8haJSP3KFGBSk%2FrEBTAgHIWeZkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJJk1HZaVzJ1rh2JDyrcA7tUoVtwPMehzHp%2BJuRmsobKwBqMiP%2BAUz52o%2FJggUdIYYsz7jsQ3Z8yrA5elJKvs7uckHt9xyQx7hT6o4R%2Bt0cHYXtmwNY%2BjjXmq6YOLaekBpX5P5ZCbUeK1FC3rtByUWrd1L56iAhL7r4Iwh%2Fw2QL1CRoDn%2BHGdxTQc8B%2FON3gmCzMlnhFrwqV1PV1unGMqssfOXaSGOYU7qlAG7Nh2oWUbhjFCLloYuksVbJYdaVVAHmiBmlfzP7PwgJFnn7UuqaqLgOSMRXpqe%2Bv7GDe9LpLePxVWE3%2Fag4ZSMUoyjnutdyMu26I8WzsyYluxmDiiko7pUp033MbLchuOxAviTRgOi5TnaZkvy8sqlo5Th4Dy4esx15tCAEO8%2FacoOWn8IUO%2BVHHngJb7CaDb2X3mZtet3yXSWe7urNWSxGcDtwyzvI9JNFjqsnv8Y28digxn57mIbJE%2F4PrjEMWoAx5YlRtBgBw7yjR9Wrqk1Ye012QJwuhxRyIJarrmeGTfezzr1lswJLfmVBvc34jREM2d7dwzZMt3E%2FEH1CE%2BLLWTwK0zFUl2CNHhNeqEupGHIh1lSkQv3DgtI2bvMS5kSVzo1tKERgzeQhhE%2BA%2FgmNPDJuWBB6qxy6i81kajSQ6MIK0w8kGOqUBQvWKOmyfsFCgPzS14W%2FglVmv5e%2B%2BOXmUM0VmlODxnr8VyUmR8JAeonSxpKZj%2B4GytEkoT5FKiXL7VrKj%2Bl54ddELwWiyooL%2BjvUGq88c%2FEd2BapsjgFL02Bc540954ueS5zopEcFh%2B4Qqf4uwcTSjBIrQY1V7vki9KRW6eoqGyMRwGm%2BPdH8NI9Lni4CDm7Ch9wtdZVxwD%2Fax4zWW%2BNRQqOeCFiA&X-Amz-Signature=065cda748fa19ae29bdc33bc07c00ea07c0aa8b0db09ce8a6e8b73ee4a0f31e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ITHYXT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAeXkz3Sf775wXB%2FpXrNlBF2InSkpUCnV8G7mYOtVbUqAiEAgzdUFUIL3oI8NLiXf8haJSP3KFGBSk%2FrEBTAgHIWeZkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJJk1HZaVzJ1rh2JDyrcA7tUoVtwPMehzHp%2BJuRmsobKwBqMiP%2BAUz52o%2FJggUdIYYsz7jsQ3Z8yrA5elJKvs7uckHt9xyQx7hT6o4R%2Bt0cHYXtmwNY%2BjjXmq6YOLaekBpX5P5ZCbUeK1FC3rtByUWrd1L56iAhL7r4Iwh%2Fw2QL1CRoDn%2BHGdxTQc8B%2FON3gmCzMlnhFrwqV1PV1unGMqssfOXaSGOYU7qlAG7Nh2oWUbhjFCLloYuksVbJYdaVVAHmiBmlfzP7PwgJFnn7UuqaqLgOSMRXpqe%2Bv7GDe9LpLePxVWE3%2Fag4ZSMUoyjnutdyMu26I8WzsyYluxmDiiko7pUp033MbLchuOxAviTRgOi5TnaZkvy8sqlo5Th4Dy4esx15tCAEO8%2FacoOWn8IUO%2BVHHngJb7CaDb2X3mZtet3yXSWe7urNWSxGcDtwyzvI9JNFjqsnv8Y28digxn57mIbJE%2F4PrjEMWoAx5YlRtBgBw7yjR9Wrqk1Ye012QJwuhxRyIJarrmeGTfezzr1lswJLfmVBvc34jREM2d7dwzZMt3E%2FEH1CE%2BLLWTwK0zFUl2CNHhNeqEupGHIh1lSkQv3DgtI2bvMS5kSVzo1tKERgzeQhhE%2BA%2FgmNPDJuWBB6qxy6i81kajSQ6MIK0w8kGOqUBQvWKOmyfsFCgPzS14W%2FglVmv5e%2B%2BOXmUM0VmlODxnr8VyUmR8JAeonSxpKZj%2B4GytEkoT5FKiXL7VrKj%2Bl54ddELwWiyooL%2BjvUGq88c%2FEd2BapsjgFL02Bc540954ueS5zopEcFh%2B4Qqf4uwcTSjBIrQY1V7vki9KRW6eoqGyMRwGm%2BPdH8NI9Lni4CDm7Ch9wtdZVxwD%2Fax4zWW%2BNRQqOeCFiA&X-Amz-Signature=9c7a31ea4fdf7e32b67440a2c4defbc7e755fe011b748727706e554f002a5ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
