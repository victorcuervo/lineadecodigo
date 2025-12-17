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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WXRN7X2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyvN7aPJNgBdVyQE0oIwMc%2BkNUM3Jthh38NNnGcXz0OAiEAuS9drWcJ%2FR%2FVqEbEXkeu0IVYOu1f28F17IyfUNPqDxwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLfhwMU3hWFtr%2FvSyrcAwkftC%2BM0ze9KfiXhvxsICdJ3yLQXD63COG5Vxnee3HiZ0YMozwLiZx2yA%2FoWpuo6u7texCBmakDAm7KYrPgtqaW09bJST1m7f9fGpIyqio4b2%2FcmxK8T7BP%2BihK9sanJJ5fwmcqxJuaTs5kNFKNygmyurY%2FWAHZ9h3icCNwjTij743t3x4DfZh%2Bw8gAuEtya1QKR5pkfjFGaubHuwBSCskEiryaQj8OhVLw3G7OBZMRLbbrxwNR%2F5t1K1WsahHlfvjNjwzutMI81dObgJDfGJuiyPEdkuQybke2ypc1cewiQ7T%2FQzjNOpyJ6Fk63s3V6vHGynyNdp8fqgIHrb6%2BfLXMqlQc9RxFSLxtsXCrtnTqf4NGB3EU8sGQYf7KSRhVapqA24rn55djBoJK3S8SfF5vMUqlitbj%2FBEtYN%2FZ50OzmDFiqiXfaJkm3sjjfuIsUri829d3ptMzEXzs946hkf2PSNINfWDThb9LY1C04qx9KiHfDYJxsffkuaBW6XLSgH%2BVmb1RjQmuje6607ux7ihpt6ANCcPYoO4K%2FetnzaT1kitif4rrou5Sma2o1w6Xafr2HFxLlSkpoMEPmCJgeoOpsQ7Zj8SaNx8lon3cuuKhv%2FqoVn0HCRLwD0jRMLOLjMoGOqUBh27FwymAqYUO%2FHwegUyxFeNJk0EQK3Eg8UZkkzLf0oOE0djtklfujzHPGfA2WlImP1nZv63Etj0KGsdMsBoUpN1fqhRn%2BlM%2BWGJ0MoCwXb%2BszNAS%2FgyqTyv0ZxpNPZCbnMI%2FRO%2BsPjE7xW%2FtTf758v%2Bu1xVZe85nFo8tasWlUqbpp3g1DLGeyY6uvXSjrUSKKW9RV%2FEjFNRo6lz1Cb6rY2zF5YD8&X-Amz-Signature=77049bc653a26b0d88cbeb568ba0461a34578d9c1a30b36478930b5297ecb1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WXRN7X2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyvN7aPJNgBdVyQE0oIwMc%2BkNUM3Jthh38NNnGcXz0OAiEAuS9drWcJ%2FR%2FVqEbEXkeu0IVYOu1f28F17IyfUNPqDxwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLfhwMU3hWFtr%2FvSyrcAwkftC%2BM0ze9KfiXhvxsICdJ3yLQXD63COG5Vxnee3HiZ0YMozwLiZx2yA%2FoWpuo6u7texCBmakDAm7KYrPgtqaW09bJST1m7f9fGpIyqio4b2%2FcmxK8T7BP%2BihK9sanJJ5fwmcqxJuaTs5kNFKNygmyurY%2FWAHZ9h3icCNwjTij743t3x4DfZh%2Bw8gAuEtya1QKR5pkfjFGaubHuwBSCskEiryaQj8OhVLw3G7OBZMRLbbrxwNR%2F5t1K1WsahHlfvjNjwzutMI81dObgJDfGJuiyPEdkuQybke2ypc1cewiQ7T%2FQzjNOpyJ6Fk63s3V6vHGynyNdp8fqgIHrb6%2BfLXMqlQc9RxFSLxtsXCrtnTqf4NGB3EU8sGQYf7KSRhVapqA24rn55djBoJK3S8SfF5vMUqlitbj%2FBEtYN%2FZ50OzmDFiqiXfaJkm3sjjfuIsUri829d3ptMzEXzs946hkf2PSNINfWDThb9LY1C04qx9KiHfDYJxsffkuaBW6XLSgH%2BVmb1RjQmuje6607ux7ihpt6ANCcPYoO4K%2FetnzaT1kitif4rrou5Sma2o1w6Xafr2HFxLlSkpoMEPmCJgeoOpsQ7Zj8SaNx8lon3cuuKhv%2FqoVn0HCRLwD0jRMLOLjMoGOqUBh27FwymAqYUO%2FHwegUyxFeNJk0EQK3Eg8UZkkzLf0oOE0djtklfujzHPGfA2WlImP1nZv63Etj0KGsdMsBoUpN1fqhRn%2BlM%2BWGJ0MoCwXb%2BszNAS%2FgyqTyv0ZxpNPZCbnMI%2FRO%2BsPjE7xW%2FtTf758v%2Bu1xVZe85nFo8tasWlUqbpp3g1DLGeyY6uvXSjrUSKKW9RV%2FEjFNRo6lz1Cb6rY2zF5YD8&X-Amz-Signature=f2898c8ac975d190d2dd31dff98e7e61d2250cb49889837643df4c5f1ee483da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
