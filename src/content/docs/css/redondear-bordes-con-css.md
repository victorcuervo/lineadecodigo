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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOAMRX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC69k1lQn0s6jWsHKhAWN4vsSDZ4ne4gUzhFV7iOMyZzwIhAPOqAz%2FZpmN%2BRaCY%2Bvvxym5p9ojRIVzMJ%2B0bXNNXiFlLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtcRNqRzEF%2FSOTpoq3AOwvcRHdTY2TQoNwES5LeIKBmZ%2BJNYR6qAfENHSL1%2F8SShDHPNyYJHQxYNeNsq9Nmqhali0idb%2Frnt6y90TxCaX3ndC52t1MpFUqD0BxJl6P%2F2Ve0coBeOmKgKLCvtdgQqu0L%2FRdkKOjflaPOG3UK4ndr268XE7CDHfC3KdEiYwChGcxl0AwrWB37cOaV3ChLLVvCBLzYcY5kZdx8BqpaKkJUQbnx1yyv1eZbpZwsh0PrPA%2Fzzk9yFj0OYZzxe0m%2BS6Jk3QFdEr4KPAnOlXE%2Fqh66I6TtZ1cN7Pl7%2BUurkW2DknqdvlVvuNnd9eRX9nCYSqwjhP%2BuL44VYJHB4L55IlNu%2BfAe6L3AN3pyKF7HOVKoI14Z0XlJdLT6duY%2BKHaV6DuapV3gQlBZ5fTIclnXNhB6YCMnwpX%2B30VRxO2vwNBJy8LYdVwWlGPi%2Bem2WqMuxmjb%2Fk3Bb%2B%2FVgN2c6CH2HALTx1tfuv5biKq70cyJHIbTBtUBssoLVX4xZkuPF9IQozmI3%2F0Y6MutGDUJXYG3PaVAFRD5oZbuwDSxSkRqU2j%2FS3kv5eJiBFV64qeaOj%2BLbtQ1oD6p99%2B67nGjz6%2BdaqtM6xTPlPNuKixY%2FosV2bnKZKDPBMo1LBWRvuUjD0wt3JBjqkARDmQ42B1Lmwc9n4BxNMlJ6SLkfzhWjvvehtK39zginyX51jGkWmffOqkV3DlBXzgABOgPOZvivFRxuWFH1yNTWuhUPixd3%2FkPFiDJ1YnhVJ1ztfBaniQX%2BTxRdLK0wNpBak8XvLk6BSAylc7Qs0U6K6MauzRjimt1boOdf4zYjgNwuGPgetG9xl0pI8AjmhzbFcXjLFz3lRYBW2QGpDV0ffDX8W&X-Amz-Signature=6f0c3ac669a8821df70eb3e32f108bd3bed33a55a664ee58bf25014e0e96eded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOAMRX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC69k1lQn0s6jWsHKhAWN4vsSDZ4ne4gUzhFV7iOMyZzwIhAPOqAz%2FZpmN%2BRaCY%2Bvvxym5p9ojRIVzMJ%2B0bXNNXiFlLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtcRNqRzEF%2FSOTpoq3AOwvcRHdTY2TQoNwES5LeIKBmZ%2BJNYR6qAfENHSL1%2F8SShDHPNyYJHQxYNeNsq9Nmqhali0idb%2Frnt6y90TxCaX3ndC52t1MpFUqD0BxJl6P%2F2Ve0coBeOmKgKLCvtdgQqu0L%2FRdkKOjflaPOG3UK4ndr268XE7CDHfC3KdEiYwChGcxl0AwrWB37cOaV3ChLLVvCBLzYcY5kZdx8BqpaKkJUQbnx1yyv1eZbpZwsh0PrPA%2Fzzk9yFj0OYZzxe0m%2BS6Jk3QFdEr4KPAnOlXE%2Fqh66I6TtZ1cN7Pl7%2BUurkW2DknqdvlVvuNnd9eRX9nCYSqwjhP%2BuL44VYJHB4L55IlNu%2BfAe6L3AN3pyKF7HOVKoI14Z0XlJdLT6duY%2BKHaV6DuapV3gQlBZ5fTIclnXNhB6YCMnwpX%2B30VRxO2vwNBJy8LYdVwWlGPi%2Bem2WqMuxmjb%2Fk3Bb%2B%2FVgN2c6CH2HALTx1tfuv5biKq70cyJHIbTBtUBssoLVX4xZkuPF9IQozmI3%2F0Y6MutGDUJXYG3PaVAFRD5oZbuwDSxSkRqU2j%2FS3kv5eJiBFV64qeaOj%2BLbtQ1oD6p99%2B67nGjz6%2BdaqtM6xTPlPNuKixY%2FosV2bnKZKDPBMo1LBWRvuUjD0wt3JBjqkARDmQ42B1Lmwc9n4BxNMlJ6SLkfzhWjvvehtK39zginyX51jGkWmffOqkV3DlBXzgABOgPOZvivFRxuWFH1yNTWuhUPixd3%2FkPFiDJ1YnhVJ1ztfBaniQX%2BTxRdLK0wNpBak8XvLk6BSAylc7Qs0U6K6MauzRjimt1boOdf4zYjgNwuGPgetG9xl0pI8AjmhzbFcXjLFz3lRYBW2QGpDV0ffDX8W&X-Amz-Signature=2bab6a9e3b73d93119b81df8bf993cfd2d5119010bc4e7b5c4d580241080e824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
