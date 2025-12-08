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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBWK7FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwL%2B8xRQnAtHcGdsuprOIqCAlWy%2F39KfDlyOhskXLSmAiEAmWIRq8An2Mz2TbhJObl7B9crC6iJuqVz%2FMlfWprcCQMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFJ4NzQaoTvoAOiuircA5NVS33BSXHR%2FFxtGnvNhbi8BmIXM6n%2F7DEnJCPi13hAASmObi2pAiv%2BVRsDplA17%2BpZ8g1uU4nTRC69W%2B21TLeyrQz%2BdzHBlMil6OLuxFxohGEJEFg1V5KlVCiAg840PcHH4oCNVtDa0xHiwW2AbtdZLbHdT1DzG%2Fw91JMI2ezAHBnaR7ExVSVvqu8Ybd8XJahwytq41vWkRZCQMRXO7an%2F4WULFJRf86ICwAb6t1oNFBOuS3Txj%2BfmRWbL2TFB9ucRHnZPozdZ5AK%2FLu6ROoAWEom6lylDVJ%2BO%2FTUf1KF%2BlqUczCB2XqV22%2BWyMyvWpEmQVhyxUJSyTGMcet3CKoe0MwD4nUrdesgFkg3lxS1aNdDVmi2HiPj6auLNt7NilfIPq5rkIUYHXCDjbwCZiHGJHLjkQcLC11uDSCbomBms7NePWQqY9NnVrULvebv%2FEKMBX85DqHUwm9HGhTphNeTwhSy0E9vI5lLQFoYMCRvT2ZHfXL1nwSLxc8aGsmIIELMi6xJCZycQ85SLnr%2BDdDgid5gp%2B1qi3QlBzOPWKhWa%2FyBbdEjwNYxkAkvxeYAa2ECpCK8jjgSKsxz%2BYz3IBIxfHxpYY5icWf2xGLMm5635mQT5O%2Bk8hM1Zy1MhMMXt2ckGOqUBIdsT1NmKzyanvpeSsw0qqOkfQUh5DBipYCX8oQVvxZBFgMrDwi6NJjxe6TPQOjWJ5Uk3qGEpBlY819ZY0%2FHqSQX%2BCvkgQKpCl7f0HE%2BvyXjJq9z%2BtmtnuL80MfmChTxMwbHxs%2FYLN4fUkdJj5iugY1OVNxbVdSnHRHUM2e0D9J35C6YizNX6P9gao1GTL8IGluHpzINQHg6Ux%2BF89jWem049lVUe&X-Amz-Signature=c5a7d834839d2e2894651923edbf8edad9da64b182315d0ef2cfb4cbac64dcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBWK7FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwL%2B8xRQnAtHcGdsuprOIqCAlWy%2F39KfDlyOhskXLSmAiEAmWIRq8An2Mz2TbhJObl7B9crC6iJuqVz%2FMlfWprcCQMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFJ4NzQaoTvoAOiuircA5NVS33BSXHR%2FFxtGnvNhbi8BmIXM6n%2F7DEnJCPi13hAASmObi2pAiv%2BVRsDplA17%2BpZ8g1uU4nTRC69W%2B21TLeyrQz%2BdzHBlMil6OLuxFxohGEJEFg1V5KlVCiAg840PcHH4oCNVtDa0xHiwW2AbtdZLbHdT1DzG%2Fw91JMI2ezAHBnaR7ExVSVvqu8Ybd8XJahwytq41vWkRZCQMRXO7an%2F4WULFJRf86ICwAb6t1oNFBOuS3Txj%2BfmRWbL2TFB9ucRHnZPozdZ5AK%2FLu6ROoAWEom6lylDVJ%2BO%2FTUf1KF%2BlqUczCB2XqV22%2BWyMyvWpEmQVhyxUJSyTGMcet3CKoe0MwD4nUrdesgFkg3lxS1aNdDVmi2HiPj6auLNt7NilfIPq5rkIUYHXCDjbwCZiHGJHLjkQcLC11uDSCbomBms7NePWQqY9NnVrULvebv%2FEKMBX85DqHUwm9HGhTphNeTwhSy0E9vI5lLQFoYMCRvT2ZHfXL1nwSLxc8aGsmIIELMi6xJCZycQ85SLnr%2BDdDgid5gp%2B1qi3QlBzOPWKhWa%2FyBbdEjwNYxkAkvxeYAa2ECpCK8jjgSKsxz%2BYz3IBIxfHxpYY5icWf2xGLMm5635mQT5O%2Bk8hM1Zy1MhMMXt2ckGOqUBIdsT1NmKzyanvpeSsw0qqOkfQUh5DBipYCX8oQVvxZBFgMrDwi6NJjxe6TPQOjWJ5Uk3qGEpBlY819ZY0%2FHqSQX%2BCvkgQKpCl7f0HE%2BvyXjJq9z%2BtmtnuL80MfmChTxMwbHxs%2FYLN4fUkdJj5iugY1OVNxbVdSnHRHUM2e0D9J35C6YizNX6P9gao1GTL8IGluHpzINQHg6Ux%2BF89jWem049lVUe&X-Amz-Signature=ce369ca577ec4ba6ad44444c2a5d2a975b66774d862731ceefd4f2e0ebdd1f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
