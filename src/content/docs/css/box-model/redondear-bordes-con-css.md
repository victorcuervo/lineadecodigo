---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIY4VPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqfegQ%2BHR8S3%2F0zjatb1i3D6Ltsn0io6RS6oeeCkozXAiEAyOpvwW40dN1sEx35p8%2FE2X4gYhsIGEQy%2FXLFkpzAIA0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHODgJiH1OvhnO4csyrcA%2BAXIstpB5AUWOSYpa%2B%2FfVpiOgszXy%2FWjTWbVO4c6ERW7MmCUeg8st9hIPCZs95w1OcYkp4uugAPqBpX4zwdWI5n7Vd7%2FFK0XxXwRROizWMabjEYSdsYGVs%2ByEjDRbvbjfMtqPkH%2B2fi3Vg2y5RMfkXpQc4L%2FmTgViprPgAJ%2Bhe8WkZdS0bCUs5FsN88vnCDMEivtade8uZej%2BWLa4BYGSzplbhDgn8nIZOvqgvkjYXdDHNPxIh6dVwmgB3HTqooTeEFzciFcQxgBdoz8SsyR9IkMs9r98vAjba89P7NNQ1GNJV%2B389HN0NZXRZJd5ofbqdjEaVZFFSgWKwdGB91Y7E%2FB4%2FpotpL7kjfOrr5q%2FdR8R8p2M0rBr0NBXBTQTQqpR9V2Zxwzbehm0NbOmnD%2BQJc8L8E5lx6dM0c548jqVylsy%2BNm4q%2FjNhLzBOj15tL%2BQeRRrraZnBDoMo3neMuN6XgSmGwCTy5nVnIE%2F5Qy8sYX%2Bsjjzr0haigGCw%2BRsh8l6RutQbDxLoI9azjvkt4DtSxlMQ%2Ftq13aLfdZ6%2Bg8%2BaqYjJuNXN63TQRAbp0sNOYi1CwCdh1b0XykWQriYDcguNHmmOZ%2Br%2BBCmJOwqB6Qh1u9A1eIq2X%2Bkqr3mwnML7hisoGOqUBBJsJstOnKaEqmIUTSHCCn7xLoV35kyYssH6wgLvJB5kEPb6pdGw%2FSyzCkpGrtaNWALq23wxDZnmPZTGb3uFobPQlFckJEjKiGglVR3vg3N0WK9Rsr%2B8F9QHhXoy7QbPzL%2FXzWitXAr3KoEFBECSqifeYuZrkpc%2BHTHPgRJ5DB37Q8R%2FHfoR%2FfeEwJz9SlVht46Y%2BOUHw4aE%2BPtXeW90p%2FEIpf0WR&X-Amz-Signature=a16794b07f66ee8a67c2c417e4ea089e0eed36c3e6ddb40b46a1e5682fe57542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIY4VPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqfegQ%2BHR8S3%2F0zjatb1i3D6Ltsn0io6RS6oeeCkozXAiEAyOpvwW40dN1sEx35p8%2FE2X4gYhsIGEQy%2FXLFkpzAIA0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHODgJiH1OvhnO4csyrcA%2BAXIstpB5AUWOSYpa%2B%2FfVpiOgszXy%2FWjTWbVO4c6ERW7MmCUeg8st9hIPCZs95w1OcYkp4uugAPqBpX4zwdWI5n7Vd7%2FFK0XxXwRROizWMabjEYSdsYGVs%2ByEjDRbvbjfMtqPkH%2B2fi3Vg2y5RMfkXpQc4L%2FmTgViprPgAJ%2Bhe8WkZdS0bCUs5FsN88vnCDMEivtade8uZej%2BWLa4BYGSzplbhDgn8nIZOvqgvkjYXdDHNPxIh6dVwmgB3HTqooTeEFzciFcQxgBdoz8SsyR9IkMs9r98vAjba89P7NNQ1GNJV%2B389HN0NZXRZJd5ofbqdjEaVZFFSgWKwdGB91Y7E%2FB4%2FpotpL7kjfOrr5q%2FdR8R8p2M0rBr0NBXBTQTQqpR9V2Zxwzbehm0NbOmnD%2BQJc8L8E5lx6dM0c548jqVylsy%2BNm4q%2FjNhLzBOj15tL%2BQeRRrraZnBDoMo3neMuN6XgSmGwCTy5nVnIE%2F5Qy8sYX%2Bsjjzr0haigGCw%2BRsh8l6RutQbDxLoI9azjvkt4DtSxlMQ%2Ftq13aLfdZ6%2Bg8%2BaqYjJuNXN63TQRAbp0sNOYi1CwCdh1b0XykWQriYDcguNHmmOZ%2Br%2BBCmJOwqB6Qh1u9A1eIq2X%2Bkqr3mwnML7hisoGOqUBBJsJstOnKaEqmIUTSHCCn7xLoV35kyYssH6wgLvJB5kEPb6pdGw%2FSyzCkpGrtaNWALq23wxDZnmPZTGb3uFobPQlFckJEjKiGglVR3vg3N0WK9Rsr%2B8F9QHhXoy7QbPzL%2FXzWitXAr3KoEFBECSqifeYuZrkpc%2BHTHPgRJ5DB37Q8R%2FHfoR%2FfeEwJz9SlVht46Y%2BOUHw4aE%2BPtXeW90p%2FEIpf0WR&X-Amz-Signature=5d83d3da51bf706b80830b652b843008566a35d14709bb6324ca18f18b3cbd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
