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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7F5LIJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcyNJxrJkuO%2FZI48IhqplhD%2FcVaPqP8uE9jLdFpzNQCwIhANYhBPblv5UJW19FaIxY3cGKeky1IKZolBDwM%2B1TkGdXKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTZoo9uvgbVPxoq%2BAq3AMgozIXSrPycJzd2jqHfajaL4JxuzGDC98TsP8D64CT3xfpVmrQcfm63uNnIT5phu%2FZ7fDSbeCmfGXB5cZlfXJJw2JmvLEmMsb3IfjUpB4GCVAldzVT6pvz5yjyhvin8iKKefHJGFu540KV9mnlhWVBAa%2Fc8XU%2BIwocLsXDOCxuoY9xy2PQ0QnU9shu%2FprR%2F4Ucaeazk7zxig01hdvxMM22fVgbC6aYZGIqawrx6gKk3op58tt1li%2FYiBCMqDwUlnrvezj0WoXZFfgcBRL45twHR1t8RcoWS8oI1zkOrBKJJ0hYlXerRosuzbwcH0XzGSPMy0%2Brxh6JlGOoEUNF%2BVp54zhSGCpYvi8E2oH3WUjlRMRvfQ%2FhWei4n85OerRzygkQ2M%2FEWhSTapt1QFjbO1P%2BhkAV3%2Fu%2BZHMDVXcxVJcWFAj8hY5XCzBmqYra4Wz%2BUvIq1y%2BGcAVOszAvx7aOeh4JBZUtPct2TE9jQ1Kr9hveV5qx4BddBFwWI1yohSPAyJSMp%2Fz4Dos9KZcqQacE2tKvf%2FBV8d510rsrTWBcqwbPjbnF88MuPljAFmS1QMzDSt0SQAsZSUe92Kd%2BXnmncMynZYRh0dfj5HQp0Hv2pXdG02Owdlv86Lalv1XPZDDTj9vJBjqkAfkFJJy%2BJjqDUzIxDp5StiXqPJTBJDubjtCmSwNarVIKfbcBu8ymKSw0sJ0Jvd16JX%2BoxpZVhJW3nt%2BctQM%2Bhp7fVMwH8e4bvKvjw8twKdj2KFje3h29lmC%2FNzaDmMPjLzmYLJ2RPijvg%2BE3l8IiycWrj29RwEFvt5gQetDv7rfhUEuwlmex%2BfJDZohDcLq8XG3cNVPqH%2BZ3xu0YdbsV440QhK0G&X-Amz-Signature=76cf5258e6e46a3c1631dcf92a7129e240b0bb0b1c6235843200aa18b8b7d553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7F5LIJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcyNJxrJkuO%2FZI48IhqplhD%2FcVaPqP8uE9jLdFpzNQCwIhANYhBPblv5UJW19FaIxY3cGKeky1IKZolBDwM%2B1TkGdXKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTZoo9uvgbVPxoq%2BAq3AMgozIXSrPycJzd2jqHfajaL4JxuzGDC98TsP8D64CT3xfpVmrQcfm63uNnIT5phu%2FZ7fDSbeCmfGXB5cZlfXJJw2JmvLEmMsb3IfjUpB4GCVAldzVT6pvz5yjyhvin8iKKefHJGFu540KV9mnlhWVBAa%2Fc8XU%2BIwocLsXDOCxuoY9xy2PQ0QnU9shu%2FprR%2F4Ucaeazk7zxig01hdvxMM22fVgbC6aYZGIqawrx6gKk3op58tt1li%2FYiBCMqDwUlnrvezj0WoXZFfgcBRL45twHR1t8RcoWS8oI1zkOrBKJJ0hYlXerRosuzbwcH0XzGSPMy0%2Brxh6JlGOoEUNF%2BVp54zhSGCpYvi8E2oH3WUjlRMRvfQ%2FhWei4n85OerRzygkQ2M%2FEWhSTapt1QFjbO1P%2BhkAV3%2Fu%2BZHMDVXcxVJcWFAj8hY5XCzBmqYra4Wz%2BUvIq1y%2BGcAVOszAvx7aOeh4JBZUtPct2TE9jQ1Kr9hveV5qx4BddBFwWI1yohSPAyJSMp%2Fz4Dos9KZcqQacE2tKvf%2FBV8d510rsrTWBcqwbPjbnF88MuPljAFmS1QMzDSt0SQAsZSUe92Kd%2BXnmncMynZYRh0dfj5HQp0Hv2pXdG02Owdlv86Lalv1XPZDDTj9vJBjqkAfkFJJy%2BJjqDUzIxDp5StiXqPJTBJDubjtCmSwNarVIKfbcBu8ymKSw0sJ0Jvd16JX%2BoxpZVhJW3nt%2BctQM%2Bhp7fVMwH8e4bvKvjw8twKdj2KFje3h29lmC%2FNzaDmMPjLzmYLJ2RPijvg%2BE3l8IiycWrj29RwEFvt5gQetDv7rfhUEuwlmex%2BfJDZohDcLq8XG3cNVPqH%2BZ3xu0YdbsV440QhK0G&X-Amz-Signature=28f1dea247a97ac61daed623c803204c114761804484a33604365c1bae634daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
