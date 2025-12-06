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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGGJEOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvMoFfHtnASPNX8ekaFRwkof5amiCD3TmfOVTZfvizcAiEA3D%2F2rNMlTyg5JPVARfonEVWIJVmTwxWpjIVwfHH5%2Bmgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBWtRCNamKDVsLvwQircA0M3Vbn5ElijYdOZmdnGdRxKfvs2bsRMJsLvRrAOXtiLS10rvRtDWCQ6xotI%2BJTNOJzWgUkPXYqKWPBXu66HCpFVcv7AR7Xve9Go1Gpx3upeP4ngvLL%2Bea%2FX9N5KaA8Ia4m8uIZyIqq3QIfAnnkJ6UdegQ3ASavBXTohjvMzEdfrFWyBge8vr7os0g5ysLd9ASVER58XaEmtOwEYg%2BROsWHCDQKc5FbhUP0ROu2oB18PJ%2Fl%2B60XvamS7G0nx5ha%2FN8orZHcxiOeEilY7IpTPCQX1LF9mARnie0bs5Q%2BSsfuNROyZHY5fMQocD951Bg%2BSf6fBKdpGxobzeCZMjxT5jagJ46P112d8pQbm1W14Nejwpj0DxCU%2FmtrjN1xBfOxVXfU9%2Fv4AXo8ILxoBKfNgMLHkXscgKo813bRtyZrrk1oyaOZ4Var%2FEzh2gBMA6Ebi%2BUp6Ta2s6E3cLrJyzdSHTVWjag07NBLa6dbqc2YOEGKJ9sCdyshv3aTaqMUOSLDN4j4PuDG79MhGXlPB%2FF5%2FHzGac3UoMmhxZCbTqhnLXeSAyAtvPS8DwOKKz8uJ21ePu%2BY%2FH8RrjcLaD73FE1bZ1%2FiTPqiPHN29BnFfIseSQBBhz9ysx%2BjNs%2FEGtKL1MOXB0ckGOqUBDXUzmWKImfXWubGLWnhDjl35yJmmN8gQqDv%2BlTtaUHwv8vNVF0bax4o5IOU5TwsVm3jSJS9Vp9t5iu16Y8dVlZ5nUUv5SGeJG7bcRRYcXVFltB4%2FeBn45FbShoQm169%2FltSHaMrn937YiqcbviOH0FNU5%2BsxEIK2NUpDGypdmJHRsBd%2BYmWztin%2BXe%2BrRujBuCnfQesi34mYZiywb4H%2BbqYIpQKj&X-Amz-Signature=e87eb2586a27ab63509d3783e2f9f4fb5681c7e429389a206855987fb47ae15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGGJEOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvMoFfHtnASPNX8ekaFRwkof5amiCD3TmfOVTZfvizcAiEA3D%2F2rNMlTyg5JPVARfonEVWIJVmTwxWpjIVwfHH5%2Bmgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBWtRCNamKDVsLvwQircA0M3Vbn5ElijYdOZmdnGdRxKfvs2bsRMJsLvRrAOXtiLS10rvRtDWCQ6xotI%2BJTNOJzWgUkPXYqKWPBXu66HCpFVcv7AR7Xve9Go1Gpx3upeP4ngvLL%2Bea%2FX9N5KaA8Ia4m8uIZyIqq3QIfAnnkJ6UdegQ3ASavBXTohjvMzEdfrFWyBge8vr7os0g5ysLd9ASVER58XaEmtOwEYg%2BROsWHCDQKc5FbhUP0ROu2oB18PJ%2Fl%2B60XvamS7G0nx5ha%2FN8orZHcxiOeEilY7IpTPCQX1LF9mARnie0bs5Q%2BSsfuNROyZHY5fMQocD951Bg%2BSf6fBKdpGxobzeCZMjxT5jagJ46P112d8pQbm1W14Nejwpj0DxCU%2FmtrjN1xBfOxVXfU9%2Fv4AXo8ILxoBKfNgMLHkXscgKo813bRtyZrrk1oyaOZ4Var%2FEzh2gBMA6Ebi%2BUp6Ta2s6E3cLrJyzdSHTVWjag07NBLa6dbqc2YOEGKJ9sCdyshv3aTaqMUOSLDN4j4PuDG79MhGXlPB%2FF5%2FHzGac3UoMmhxZCbTqhnLXeSAyAtvPS8DwOKKz8uJ21ePu%2BY%2FH8RrjcLaD73FE1bZ1%2FiTPqiPHN29BnFfIseSQBBhz9ysx%2BjNs%2FEGtKL1MOXB0ckGOqUBDXUzmWKImfXWubGLWnhDjl35yJmmN8gQqDv%2BlTtaUHwv8vNVF0bax4o5IOU5TwsVm3jSJS9Vp9t5iu16Y8dVlZ5nUUv5SGeJG7bcRRYcXVFltB4%2FeBn45FbShoQm169%2FltSHaMrn937YiqcbviOH0FNU5%2BsxEIK2NUpDGypdmJHRsBd%2BYmWztin%2BXe%2BrRujBuCnfQesi34mYZiywb4H%2BbqYIpQKj&X-Amz-Signature=1a5d6d7cc964fa0b57aafce328f217a7b305016716396e46243051a503847e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
