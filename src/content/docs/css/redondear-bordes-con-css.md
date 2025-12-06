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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6RLVZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOYKbTsA8YTVNM5F8Gu0tfSYFHTA2lAP1xQAmBv4LtBAiBZDKWseShlonw9Ip83ZmkmFXYYSKWkLQgy8hXtlcrBBir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdmpT1kfG1MojADLOKtwDnmA%2B053Nj4rQeQ2fgbQm%2BSoF%2F1RX9ocn2MJ9lD2pcjwl6QzywRDjHr148rm%2BKIBBEATMIuhA7N3bEfc7A283PUNlE2XVaopiY7SCi%2BRnJYSE3VxnO3lOn0EySqkWQ1jYOYRy6knmDo%2FR4EsIlJZMYhmiACvI2QgO%2Fru5kmZUtIqZsYsGhHCW48QLR%2BXwCgw%2F9yg62YkX2HB60FaO7IW%2BxEguyRwRum4PyMoiuz31APW4VAKw1mO7np8l3QzgY884QirL6oQnFUrKH6CdRFRHqPda%2FHdjXXAl9lQNogC737ULJUMj62hwyzx4qEtk9g%2FmhvlsqHb9swxk7lxWFFxNzqe14WUgikRsQNYUVxRT%2FXVo5tWyIV4lEKJlPS0L3Bj4yKTrHlBNLwgI2VedDVPohbMTz045%2FMwm7EmY0Xr%2B28a75Fjm1k2AQ%2F15Po9FI9PcMSyQBUBJZo7e1JMFZb0%2BlFyTh5rdbWBUzMW9HTLWw8%2Fw7ZgI8BcIRRZsUs1Sth5Qy%2F16gs31qS6O9Rf23sruleM5fwrV%2BDG0cjiqsM0TPaGNPpi%2BGV%2BNS1%2FJJTlT2QgdHhiRL02g0y2XbPLu3kBWLssCODLC8nghJ7K9OqqivTEurT%2FN6ChSOXNdzxMwpMXRyQY6pgGwAoMqOOl8NCOAPzAxGKQbZr7qNBMi%2BXvmQUeaVRAvAiPw1FWN0hzUOHZyZaAUD%2F2jvHKg%2BJ1Fj23MdHM8Ua3XUv15gPEHrgEwZlzoWKOgdkBw9C%2F5sxDugcPvb%2FywuUBsOd%2F8udTNfOMz%2F90bEOLbSKOaKc5Vupn%2FCHgLGTehutNoOpnUSewZSqjUI86RppjsotSqNasHfNNyHbFAAaILnnGJN365&X-Amz-Signature=c93769c73febf4f4c841fed6e59fd718bbc79c1aefd9f195580e88b73824d948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6RLVZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOYKbTsA8YTVNM5F8Gu0tfSYFHTA2lAP1xQAmBv4LtBAiBZDKWseShlonw9Ip83ZmkmFXYYSKWkLQgy8hXtlcrBBir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdmpT1kfG1MojADLOKtwDnmA%2B053Nj4rQeQ2fgbQm%2BSoF%2F1RX9ocn2MJ9lD2pcjwl6QzywRDjHr148rm%2BKIBBEATMIuhA7N3bEfc7A283PUNlE2XVaopiY7SCi%2BRnJYSE3VxnO3lOn0EySqkWQ1jYOYRy6knmDo%2FR4EsIlJZMYhmiACvI2QgO%2Fru5kmZUtIqZsYsGhHCW48QLR%2BXwCgw%2F9yg62YkX2HB60FaO7IW%2BxEguyRwRum4PyMoiuz31APW4VAKw1mO7np8l3QzgY884QirL6oQnFUrKH6CdRFRHqPda%2FHdjXXAl9lQNogC737ULJUMj62hwyzx4qEtk9g%2FmhvlsqHb9swxk7lxWFFxNzqe14WUgikRsQNYUVxRT%2FXVo5tWyIV4lEKJlPS0L3Bj4yKTrHlBNLwgI2VedDVPohbMTz045%2FMwm7EmY0Xr%2B28a75Fjm1k2AQ%2F15Po9FI9PcMSyQBUBJZo7e1JMFZb0%2BlFyTh5rdbWBUzMW9HTLWw8%2Fw7ZgI8BcIRRZsUs1Sth5Qy%2F16gs31qS6O9Rf23sruleM5fwrV%2BDG0cjiqsM0TPaGNPpi%2BGV%2BNS1%2FJJTlT2QgdHhiRL02g0y2XbPLu3kBWLssCODLC8nghJ7K9OqqivTEurT%2FN6ChSOXNdzxMwpMXRyQY6pgGwAoMqOOl8NCOAPzAxGKQbZr7qNBMi%2BXvmQUeaVRAvAiPw1FWN0hzUOHZyZaAUD%2F2jvHKg%2BJ1Fj23MdHM8Ua3XUv15gPEHrgEwZlzoWKOgdkBw9C%2F5sxDugcPvb%2FywuUBsOd%2F8udTNfOMz%2F90bEOLbSKOaKc5Vupn%2FCHgLGTehutNoOpnUSewZSqjUI86RppjsotSqNasHfNNyHbFAAaILnnGJN365&X-Amz-Signature=7b79f2466a9a8321f19c32bd22eb8979569f33e7f618a8ae14aab9bde62e71ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
