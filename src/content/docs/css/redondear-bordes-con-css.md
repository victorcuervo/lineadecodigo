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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JCJHHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXW1PHzWxf31Fbq%2BNwqwtz0QSYHyvB9Zh%2BOzkO9RMmmAIgKysf%2FB%2FPZU7f3OMGuw0vOI9Rha0MBM7DorEVkd8SzAgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4hQWHwe9%2FY%2FV5hOyrcA1uk5b4frog15fUt9sz%2FSpTW4vr6flfZ5qo2l8H%2B1y7uDkdvzRewQ0X5WkGYYHvUTvjSavXee6GbOtJibfMmEDyrnWexnYzxTSTzegp%2FKGvGJ5XTKOLBaOWsYM8QCq%2FcQGc726%2FySbZAK1OEKnT5PlTyqmGvL%2BO%2B38htxCKj3391OTEPS7O0uZHyGzAPh0nKeRFa5wc20xPWcp2Pdp7qobmfXZAy%2BB11BKXXY2F%2B8%2B4mrwzZU8bD%2BWwa1DLAXcJE%2BOqHBcnad3%2FYr%2BYXYF3lQ8F%2BLkVpRwzdT%2Bv%2Bbn7ir9V8Pv0SusBL9%2BifYKZvxe0SpK0b5nWPk530wc49RvOnX3KPCCagG3jMtVx2dGKafwdTrObz%2Be8TiP8F64L39cVNTf3fYJla6oYcC%2B%2F%2FeyMYhO33awQRmppvBJnyet0CLlqt2g7A1pARWM5q7NhJayOdja4MxYPhjOsElKGplsIin1GwWDTA%2F64v5epZ6ktDUaaaxpaxvkwNHNOWZwOtcd3zaBAjloo%2F4UwXnszWRLQthnua25Eqs54FKAzbGcQZ4gKon7GClrfSrjJsXTAN8cf9IIXAv2wAz92QS4R%2B3v3a%2FaKs%2ByukV3V%2BP%2FlC%2F0iqTfhZ9Bym1XAXtQjeFEbCMLvE38kGOqUBzKs%2ByRub0mKwI11ZAgAHQUm3A%2F45i1hLOp%2FamGOKucKWtxzB4x678KtXHrEVnheRRx%2BImhV0oiLT4iLK%2BuoEMxQPlTZDR3wLNu6ieseWnULPcdKMiXG%2FQGWg%2FhXQMYSTBuqEbXeGL%2Fd6XtONtmz1NxJ1ldMySHmUKLiOk0q7YFF%2F%2BmgktApgtKhftrnz42bUwjtDLdBrDj9nKMruvNm11Rx0ZqFZ&X-Amz-Signature=a1bc9c6ec195a0b6bd94d7ee0b7b8161440c1a902ffa563b062279df6323adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JCJHHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXW1PHzWxf31Fbq%2BNwqwtz0QSYHyvB9Zh%2BOzkO9RMmmAIgKysf%2FB%2FPZU7f3OMGuw0vOI9Rha0MBM7DorEVkd8SzAgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4hQWHwe9%2FY%2FV5hOyrcA1uk5b4frog15fUt9sz%2FSpTW4vr6flfZ5qo2l8H%2B1y7uDkdvzRewQ0X5WkGYYHvUTvjSavXee6GbOtJibfMmEDyrnWexnYzxTSTzegp%2FKGvGJ5XTKOLBaOWsYM8QCq%2FcQGc726%2FySbZAK1OEKnT5PlTyqmGvL%2BO%2B38htxCKj3391OTEPS7O0uZHyGzAPh0nKeRFa5wc20xPWcp2Pdp7qobmfXZAy%2BB11BKXXY2F%2B8%2B4mrwzZU8bD%2BWwa1DLAXcJE%2BOqHBcnad3%2FYr%2BYXYF3lQ8F%2BLkVpRwzdT%2Bv%2Bbn7ir9V8Pv0SusBL9%2BifYKZvxe0SpK0b5nWPk530wc49RvOnX3KPCCagG3jMtVx2dGKafwdTrObz%2Be8TiP8F64L39cVNTf3fYJla6oYcC%2B%2F%2FeyMYhO33awQRmppvBJnyet0CLlqt2g7A1pARWM5q7NhJayOdja4MxYPhjOsElKGplsIin1GwWDTA%2F64v5epZ6ktDUaaaxpaxvkwNHNOWZwOtcd3zaBAjloo%2F4UwXnszWRLQthnua25Eqs54FKAzbGcQZ4gKon7GClrfSrjJsXTAN8cf9IIXAv2wAz92QS4R%2B3v3a%2FaKs%2ByukV3V%2BP%2FlC%2F0iqTfhZ9Bym1XAXtQjeFEbCMLvE38kGOqUBzKs%2ByRub0mKwI11ZAgAHQUm3A%2F45i1hLOp%2FamGOKucKWtxzB4x678KtXHrEVnheRRx%2BImhV0oiLT4iLK%2BuoEMxQPlTZDR3wLNu6ieseWnULPcdKMiXG%2FQGWg%2FhXQMYSTBuqEbXeGL%2Fd6XtONtmz1NxJ1ldMySHmUKLiOk0q7YFF%2F%2BmgktApgtKhftrnz42bUwjtDLdBrDj9nKMruvNm11Rx0ZqFZ&X-Amz-Signature=36181ab3a4d3da2276ba7bb5ef8eb13dceebe59519a4f26ef9aa3a66dc4166a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
