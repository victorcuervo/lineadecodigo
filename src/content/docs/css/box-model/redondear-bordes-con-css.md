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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQJELIH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8Ej2i6k1m%2F6H4VS68ZWrkF%2FJt%2B0Hyk94El84P0gYfwIhAKXvKnSERTaICNMO4Ub0L9sw5eFpJW727spjs3RaRoHXKv8DCHMQABoMNjM3NDIzMTgzODA1Igx5%2FY6L%2Bqfqq6NEGKEq3AM5ijnrXQwkQ9RX7kNI7NaI1AU4tQvpbdQJoUdf7NkW2o6N%2F%2BQyB%2FaDr%2FQxPt8BDND57QrA9UMlHVhcgzjaCGg2IWdDcI%2F%2F7s4%2Bob7tA41jBOKL4w1K92WlXQ%2BQXozoymai2Jgc%2FwdjTfWiKJV%2BFnOCS3Z4ftWRBPRfHBd2CYJE6CJTPDV%2B5ztJtLRUT3kJnV9OoEHYF4DSSbhrZLDVqFh40imtTcORzBlKcT%2B37kug0C2lnpV2dR8vbpjtyGi3rIwOLsZbxZ7tuYkl%2Fj3e6sN7bTSFimpG0spoYlJk8DYKfmMSM6UyHpNgrANcd5PD4QFFVFfbkhkLI5piZIzvfQLGAKZ45rzVu4lnM7GHNeZ9vjq8SEF9cBsiUlciRPpmWu0lwnSLMLio7eDk4w3TK8c5a1Thiwov5EE2JMNn%2BrL4YB39qradUK38UYJ1YzGi5qWeCGJ%2BlqDNZgDPkizqUvR%2FnkuTzRj9EwE9JXv%2FE%2FUK6RiERNuWu9QaZqvR3E4GIrI7pXxOzVc9BtBlJUUsXmx1WttvESF%2BZnEdQ%2Bt1RLuD9%2BzXONCS86UEzItvW%2FmLMhdbu1WrTQtmAzed4qPE%2F1gVOuiqrYX%2BxiTKAPsHuOxaDacEMwKsy6E6QdWdnzDmlojKBjqkAYd571X6ctDMy%2Bid7VLl5Wg2S5dw1otnGhFeId5%2FBmWZYkA0nXw173ziDNO8uF6LmYGT%2BQ%2BeaxdZKyIew0nUHud3nr5rYsBcNIx0TR%2FTDMdVb6m3VzYW8wQZyK6zGanxzA01c4eMXhLgoVmNZ2I7D%2FhLHxIKcCpqOyl2LXArreaMjoxm1%2BzMOLbP9utwqd5C%2ByKCW7umR1radEeZQ6xK2XQGjO9x&X-Amz-Signature=12bef957fb1145b175abded7b883b8f9b5c359e7c4be25df2d80c9443fc03de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQJELIH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8Ej2i6k1m%2F6H4VS68ZWrkF%2FJt%2B0Hyk94El84P0gYfwIhAKXvKnSERTaICNMO4Ub0L9sw5eFpJW727spjs3RaRoHXKv8DCHMQABoMNjM3NDIzMTgzODA1Igx5%2FY6L%2Bqfqq6NEGKEq3AM5ijnrXQwkQ9RX7kNI7NaI1AU4tQvpbdQJoUdf7NkW2o6N%2F%2BQyB%2FaDr%2FQxPt8BDND57QrA9UMlHVhcgzjaCGg2IWdDcI%2F%2F7s4%2Bob7tA41jBOKL4w1K92WlXQ%2BQXozoymai2Jgc%2FwdjTfWiKJV%2BFnOCS3Z4ftWRBPRfHBd2CYJE6CJTPDV%2B5ztJtLRUT3kJnV9OoEHYF4DSSbhrZLDVqFh40imtTcORzBlKcT%2B37kug0C2lnpV2dR8vbpjtyGi3rIwOLsZbxZ7tuYkl%2Fj3e6sN7bTSFimpG0spoYlJk8DYKfmMSM6UyHpNgrANcd5PD4QFFVFfbkhkLI5piZIzvfQLGAKZ45rzVu4lnM7GHNeZ9vjq8SEF9cBsiUlciRPpmWu0lwnSLMLio7eDk4w3TK8c5a1Thiwov5EE2JMNn%2BrL4YB39qradUK38UYJ1YzGi5qWeCGJ%2BlqDNZgDPkizqUvR%2FnkuTzRj9EwE9JXv%2FE%2FUK6RiERNuWu9QaZqvR3E4GIrI7pXxOzVc9BtBlJUUsXmx1WttvESF%2BZnEdQ%2Bt1RLuD9%2BzXONCS86UEzItvW%2FmLMhdbu1WrTQtmAzed4qPE%2F1gVOuiqrYX%2BxiTKAPsHuOxaDacEMwKsy6E6QdWdnzDmlojKBjqkAYd571X6ctDMy%2Bid7VLl5Wg2S5dw1otnGhFeId5%2FBmWZYkA0nXw173ziDNO8uF6LmYGT%2BQ%2BeaxdZKyIew0nUHud3nr5rYsBcNIx0TR%2FTDMdVb6m3VzYW8wQZyK6zGanxzA01c4eMXhLgoVmNZ2I7D%2FhLHxIKcCpqOyl2LXArreaMjoxm1%2BzMOLbP9utwqd5C%2ByKCW7umR1radEeZQ6xK2XQGjO9x&X-Amz-Signature=a8638034774a24153204bdc454926af603e6be1c9dc6b119481bdc4254914034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
