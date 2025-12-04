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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBVTUJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpv33YqcU9KVbzD7Vi5di0D8gMCE9y6i041NcJFP8aCAiEAyn3UXI15fxwBvBY9EjFZr9PPCXDdTPDpOdUtAzNEml0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLJk6T3WvUoS28uH%2BCrcAzGFc9vSErC7ZzgzE2bzONfVH0AfFivHkT4oIF2ldsqRet2HCUlaogc2OOgLiqWV81v0UVtWUVDYolEW7xLmoQqrZZNiyz5w6gg7m3aUUc4kYxVqsDcOvI5%2FC0t2J0nisxfO7QZ2KY7MqQmsIOGynd%2FnV0iIYYtxAuB%2FTRSH7z9qcI2EHiv8GZBuUvsJJmB5VEYip4MDTRhKAQzfYXzm%2Bpeb1H%2BGKO3CrEyaOuozGRfHKakbelxlkA0OzSYSLmiWUuUmy0UOldGaIgDEaUVQUlDzpCwnrA5puNbkZGTQ21fnjj5qRU%2BxK%2FGBH%2FfnKd7QGz03RwfnQ9pjTi%2BwsDCqykwjyS86UplZ2B%2F5UWCkErQilBAF2hRj3inZOOEXRskxi4Hpjau2WHl3vwORlQH9Y5aA%2FM8tpeVtlh%2BNkyN8zTVVMF70gTTi950xvkWzT3ZNmD86vl6dvoIq%2FqUMiiYDQIfqflmst%2BCHZtZ43uQ4q8jSu791HtIZzZEWkhZ%2F%2Bml6lADidwi9%2FPwN5zlRWnvAL%2Fdy6%2BHTJD2Bjq4mDKRmbQTDflmHBIQc7HhJ4yOmQ8JeSOWJCRJF8lhs29CxbAhBhW%2FBtp05BUL5XJx1nW99RcjC1mDI95jNQsWPneRuMKGMyMkGOqUBMhPrGNKNnOBd77oopGlG3yy9twCOyWnYsb4mc%2FvVWuhGuDy8969FnzYnozRbtnxl6oFdISmXz%2BiSMsbUOibtKZrMN2g62uKtDYHirzw08aU04DrMBNAa8dPKWOE033zOHvfkdImtiv3TABzPin7oY8tv45JhwyhE5D1YSHXpr%2FyHKJ5JvAW3bLbzrThFfc%2FfkP59BezdS5q9AvAb6HESDP%2Fq4e8s&X-Amz-Signature=daf2c730561d65ca62423e38f8cc201a82f1aa588400091e4705b9a7d79b71a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBVTUJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpv33YqcU9KVbzD7Vi5di0D8gMCE9y6i041NcJFP8aCAiEAyn3UXI15fxwBvBY9EjFZr9PPCXDdTPDpOdUtAzNEml0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLJk6T3WvUoS28uH%2BCrcAzGFc9vSErC7ZzgzE2bzONfVH0AfFivHkT4oIF2ldsqRet2HCUlaogc2OOgLiqWV81v0UVtWUVDYolEW7xLmoQqrZZNiyz5w6gg7m3aUUc4kYxVqsDcOvI5%2FC0t2J0nisxfO7QZ2KY7MqQmsIOGynd%2FnV0iIYYtxAuB%2FTRSH7z9qcI2EHiv8GZBuUvsJJmB5VEYip4MDTRhKAQzfYXzm%2Bpeb1H%2BGKO3CrEyaOuozGRfHKakbelxlkA0OzSYSLmiWUuUmy0UOldGaIgDEaUVQUlDzpCwnrA5puNbkZGTQ21fnjj5qRU%2BxK%2FGBH%2FfnKd7QGz03RwfnQ9pjTi%2BwsDCqykwjyS86UplZ2B%2F5UWCkErQilBAF2hRj3inZOOEXRskxi4Hpjau2WHl3vwORlQH9Y5aA%2FM8tpeVtlh%2BNkyN8zTVVMF70gTTi950xvkWzT3ZNmD86vl6dvoIq%2FqUMiiYDQIfqflmst%2BCHZtZ43uQ4q8jSu791HtIZzZEWkhZ%2F%2Bml6lADidwi9%2FPwN5zlRWnvAL%2Fdy6%2BHTJD2Bjq4mDKRmbQTDflmHBIQc7HhJ4yOmQ8JeSOWJCRJF8lhs29CxbAhBhW%2FBtp05BUL5XJx1nW99RcjC1mDI95jNQsWPneRuMKGMyMkGOqUBMhPrGNKNnOBd77oopGlG3yy9twCOyWnYsb4mc%2FvVWuhGuDy8969FnzYnozRbtnxl6oFdISmXz%2BiSMsbUOibtKZrMN2g62uKtDYHirzw08aU04DrMBNAa8dPKWOE033zOHvfkdImtiv3TABzPin7oY8tv45JhwyhE5D1YSHXpr%2FyHKJ5JvAW3bLbzrThFfc%2FfkP59BezdS5q9AvAb6HESDP%2Fq4e8s&X-Amz-Signature=b6a16d6c3bf51c6b635a047716a2e4fe1566aa803cf78dfe7c34b84288541241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
