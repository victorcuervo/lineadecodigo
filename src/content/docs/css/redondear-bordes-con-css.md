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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW2G2ZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3n2ZHWqFEg3oWPqpQzloht3mzvkBRyjKFfLuJcXdLQIgClmser5pwUJNEu9Yp9VbJFr2slKmDOHlToIqBbpbbJsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsrHQGBZeVTLGTLCircAwMjB7w9axSmb5Bga3BJ76XjexHcfiBRWQOCFyJsQ4xBDUHa1zFXVEzX9iiaHbyflsT7TnoBajWh5CfcTqeqf3pVIMIjRyx3XxnbL5blvm2Y6G3DI0wD4jumOfc9%2BJ%2Fkt6q7%2B8ijJJlK5okxk4mf%2FPFu5lIqohnSfVUQNvGlsZWkAnp3DLE6aLVvLd1BsR7jgMeZgFVKIhYprOy%2FCe%2FUA8Ae7JHb1PBDskTv5yWKJ3TRIyVdraBjXXMyPa%2Bi%2FjOHl9HeFco7dRldZH1eaj763gNSKLnnX%2BBKvGFg1fg%2Br7s0klj2Ycl5SrUFky%2FZl4kp%2FyLE1doBogG1LmpJZzCUNYEeQVBP7o7O94%2B1pY%2FsiZeru5BTFtBhAs2Rl2VtAXUIMRi8xA5hjebFbar1NWGvY7erBzobCcATC7BMZfcJXj5kgyEFLZpiEDv7%2FB66G83VrkMvCB%2F8ebfrPxr90Ec9EQ42OWEtFH8a7%2F1R6WZ183%2BjL8LSBMjYSi7CeHQl%2FC2g03Zp5om8%2BwhbO0lHhLtbAhsCx0ko1UT3051fhmkrspgJDn8RJBrFiJtDKFX%2F3BYL6QtShAfa5IXHJIk%2Fw2CKAI7COjNxstQ10S%2BbfnH6LIowvKGFcQZcQUI2p%2FVlMLqC3ckGOqUBL50jsKbQLurc2z4Etqg22G%2F9NgAEayAMF3G2RDvQf4V%2BDfZU%2F%2FxIBzaJAruvTXtjItshyDeXp5Qm4R7Xdm29CTDDhId%2BoJUG8OQA1CA0beNTzsSXy18ngaVELHv9BT9KHbu6y4Wqd768jagnA2Vprxss1EZZwSDvZE4KtWCmKls0HJOzPwB5NHExXF%2BuPEv8VR7k9%2FyXsK8%2FLH6sPcQch2ZEUx9b&X-Amz-Signature=c1e46ef2dd248e9c791a2ac7a36d078bf567807a708e6eb7d6b6c40baccfa22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW2G2ZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3n2ZHWqFEg3oWPqpQzloht3mzvkBRyjKFfLuJcXdLQIgClmser5pwUJNEu9Yp9VbJFr2slKmDOHlToIqBbpbbJsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsrHQGBZeVTLGTLCircAwMjB7w9axSmb5Bga3BJ76XjexHcfiBRWQOCFyJsQ4xBDUHa1zFXVEzX9iiaHbyflsT7TnoBajWh5CfcTqeqf3pVIMIjRyx3XxnbL5blvm2Y6G3DI0wD4jumOfc9%2BJ%2Fkt6q7%2B8ijJJlK5okxk4mf%2FPFu5lIqohnSfVUQNvGlsZWkAnp3DLE6aLVvLd1BsR7jgMeZgFVKIhYprOy%2FCe%2FUA8Ae7JHb1PBDskTv5yWKJ3TRIyVdraBjXXMyPa%2Bi%2FjOHl9HeFco7dRldZH1eaj763gNSKLnnX%2BBKvGFg1fg%2Br7s0klj2Ycl5SrUFky%2FZl4kp%2FyLE1doBogG1LmpJZzCUNYEeQVBP7o7O94%2B1pY%2FsiZeru5BTFtBhAs2Rl2VtAXUIMRi8xA5hjebFbar1NWGvY7erBzobCcATC7BMZfcJXj5kgyEFLZpiEDv7%2FB66G83VrkMvCB%2F8ebfrPxr90Ec9EQ42OWEtFH8a7%2F1R6WZ183%2BjL8LSBMjYSi7CeHQl%2FC2g03Zp5om8%2BwhbO0lHhLtbAhsCx0ko1UT3051fhmkrspgJDn8RJBrFiJtDKFX%2F3BYL6QtShAfa5IXHJIk%2Fw2CKAI7COjNxstQ10S%2BbfnH6LIowvKGFcQZcQUI2p%2FVlMLqC3ckGOqUBL50jsKbQLurc2z4Etqg22G%2F9NgAEayAMF3G2RDvQf4V%2BDfZU%2F%2FxIBzaJAruvTXtjItshyDeXp5Qm4R7Xdm29CTDDhId%2BoJUG8OQA1CA0beNTzsSXy18ngaVELHv9BT9KHbu6y4Wqd768jagnA2Vprxss1EZZwSDvZE4KtWCmKls0HJOzPwB5NHExXF%2BuPEv8VR7k9%2FyXsK8%2FLH6sPcQch2ZEUx9b&X-Amz-Signature=30558ff038ec0ee7ac313921821a94c7e6b5ce5b9342ff840e1f9544b34c10d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
