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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4RNR6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ9xnVJ8Ghn1rM1GMTWWCuQGqwwQ%2FcdYlzLv74TWJULAiBdeWjpg%2Fnq2ePOS4sGAvVV2ysor9DvMnE3XKwYoiSArSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5F6woUFZFeDAtN%2BKKtwDZOwmjScyC1GtJiyYDvVtD1AMQxT16UUCphg5%2Bo8k8JMtsXafj5HV%2ByVIa1ywq9lEHR%2F1vaOj7vqIsM7N1O6wvRM00FxicJZmYUtEDgrxgWfQtENQOC3kKRzwKMG14MDxm7tEITE49ILBzrd%2FMSKOizv7mTFou4xKtU9toni9oC2qCHFKZqaM3G6xwRfVfY00n%2BJs86%2BWvokEJLSNXAR1lrd3%2FS4KKtWjnftf3Vmj7tqBKTY2L860Fh1SG%2FdQhdXcUjoN9kz8Z%2FEXUyIA634VP%2B9Hu8vM3KuNcZnl%2BiR%2FNymciJL4PVQm%2B3kkjdkBoX2TDptetKMBcBiI6O0zkmGFlbudxgfLe1LgNG4OjKqSN5KrShE6Ek2tOjipHbZDBhHpvM%2BQIE%2BLTf039tOOUkyDdF8bnxItrYT3Iw7IcMZz%2BBC5yH9KFTDXAqNp9RW0J3g%2FydPz4Y0%2F6BzgK8Y%2BiK9X1BsGrOmbohtbD5DtoE8YT3T5at%2B1mtpBjOdmNoLlzClT1PUavq%2F3HcptxHdwHqxKb7GlV%2F6EMukKVrBsfSq9QfkviouqFvXyL6EpifKIO7zC6yLGx0hU%2Bz%2BgMvFD2XU6X9MbzUZUbxONR%2F%2FRi0Q6OzvY9FQFUqatnJXTbwswkYCLygY6pgHdV%2FSFn2lwOCIxQwCAgdNzD81Tm1PJkyQ1oLctk%2BeiNc4iSlQYNivmic42zs1nnGyNNPADiegUkDwXl9qgN7siHRZsqhH3RdiHonNrNyDRi77YQRElGHHFdc%2B3LOHchL0OiNsohcmWpu0%2FtxvNg6g3hysXqJnroaqTape%2BrtpPOi%2FoGTv2eeO6EduXgn%2BiIb5wgd7U%2BHH7ns%2BRHVH%2BScC0fvBOph4I&X-Amz-Signature=0fe605138d87cdf297d32813f7373321876c3440707d04ab6a36e1c43c1cfeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4RNR6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ9xnVJ8Ghn1rM1GMTWWCuQGqwwQ%2FcdYlzLv74TWJULAiBdeWjpg%2Fnq2ePOS4sGAvVV2ysor9DvMnE3XKwYoiSArSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5F6woUFZFeDAtN%2BKKtwDZOwmjScyC1GtJiyYDvVtD1AMQxT16UUCphg5%2Bo8k8JMtsXafj5HV%2ByVIa1ywq9lEHR%2F1vaOj7vqIsM7N1O6wvRM00FxicJZmYUtEDgrxgWfQtENQOC3kKRzwKMG14MDxm7tEITE49ILBzrd%2FMSKOizv7mTFou4xKtU9toni9oC2qCHFKZqaM3G6xwRfVfY00n%2BJs86%2BWvokEJLSNXAR1lrd3%2FS4KKtWjnftf3Vmj7tqBKTY2L860Fh1SG%2FdQhdXcUjoN9kz8Z%2FEXUyIA634VP%2B9Hu8vM3KuNcZnl%2BiR%2FNymciJL4PVQm%2B3kkjdkBoX2TDptetKMBcBiI6O0zkmGFlbudxgfLe1LgNG4OjKqSN5KrShE6Ek2tOjipHbZDBhHpvM%2BQIE%2BLTf039tOOUkyDdF8bnxItrYT3Iw7IcMZz%2BBC5yH9KFTDXAqNp9RW0J3g%2FydPz4Y0%2F6BzgK8Y%2BiK9X1BsGrOmbohtbD5DtoE8YT3T5at%2B1mtpBjOdmNoLlzClT1PUavq%2F3HcptxHdwHqxKb7GlV%2F6EMukKVrBsfSq9QfkviouqFvXyL6EpifKIO7zC6yLGx0hU%2Bz%2BgMvFD2XU6X9MbzUZUbxONR%2F%2FRi0Q6OzvY9FQFUqatnJXTbwswkYCLygY6pgHdV%2FSFn2lwOCIxQwCAgdNzD81Tm1PJkyQ1oLctk%2BeiNc4iSlQYNivmic42zs1nnGyNNPADiegUkDwXl9qgN7siHRZsqhH3RdiHonNrNyDRi77YQRElGHHFdc%2B3LOHchL0OiNsohcmWpu0%2FtxvNg6g3hysXqJnroaqTape%2BrtpPOi%2FoGTv2eeO6EduXgn%2BiIb5wgd7U%2BHH7ns%2BRHVH%2BScC0fvBOph4I&X-Amz-Signature=7fe7c04d964114051b08cbe7ca20b755374443d8e3d521db4e0a0f5523c8d7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
