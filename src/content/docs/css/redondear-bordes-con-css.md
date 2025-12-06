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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIGM3TM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQP%2BiMg%2Fd5ZF11eyNXl3PjvkUjc25yJ%2BDxIRkAOuoZYAIhAOd%2BXrNgmYouJ7NB%2BXIvUuQdWCXeQL4Fz0NCIH%2F8x3TUKv8DCH8QABoMNjM3NDIzMTgzODA1IgzVixOtf25xhPwImF0q3APuMGKE5D6Cb%2F30%2FFKLmjqV%2FzRgpS4%2BPLYzE%2FWQl7o45cw8MDKsWBJOK5XU34OenqrumFzwLkEtxrPRKVreNQJy3aUDvPSiGxo6LbL5sXnfEVTw81Sdkh2VFVU9U1hnDhz9CepTZ0kqXnouTRTGvbrVLfNAx7%2BOlFnpTeN1%2BDi8%2FKyKbFHYN2GrL9M1lxNIASKLoiFblDXsv29Z6eXzAY3e5m2MTFELZfM9dUQEQQHYd3lKFwnRB%2BMcTsmjW4YaM%2BWer1MdamaKUwO00NxV8qz0FbFVsijfN7h0Asw8343ixZAXQxBXL78A7xKOrLGoXzCd5gxVfFnIu%2B%2FA7H4o2Amhl16t1HB2sOPdSEB3N%2BIMMp6g3cQ%2FgD7x6eJpUwVOclT7InZAvPdBHFQnAdhfnEqnN7I9x%2FMr12b3aYrUYBVQN9%2Fjk5rRp6VE90h5s1QENZ3ZTJ5ZtZOnNB6aevJFEKnSYliUgLmTtnwIZHgnjyE34wWHBsG0KGUtnUL0ODzA8veaZ8a825o7YeE6LeMibEaZXkywypOZwFYx5wQgjxrW2potbMO6%2Fiauu68f%2F%2BdksmvUtooZ8AbEstXVA3bV4g1mOtl42TX%2BQlcQ4Fh7Q8RixxmHeRfo7nFNfhy0yTCc1NLJBjqkAQ1orSoNb9EGxT2ULKRJqeuKbTHH4Y8Civy8yLkAHYLAjX6CkFhbtlrSnvuadVnJfESLAon9i0gy8kWatMdo7fz26JwicBBEQBFoia1CIh6ZxlfUMtPNhOEf14aBA4YorZubTUlPNM97dpxI3Ne86vcZtRNdgYcCLli3feCq%2FIULTIGtqcdFcMUXUCdm6LHft5K1MaRymwrGBt1dHT%2FHLq%2BGWokZ&X-Amz-Signature=a6c2f379ec58606fba41eb49fd27f1ae5e36c8e2adba18c35c8d47e47455f7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIGM3TM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQP%2BiMg%2Fd5ZF11eyNXl3PjvkUjc25yJ%2BDxIRkAOuoZYAIhAOd%2BXrNgmYouJ7NB%2BXIvUuQdWCXeQL4Fz0NCIH%2F8x3TUKv8DCH8QABoMNjM3NDIzMTgzODA1IgzVixOtf25xhPwImF0q3APuMGKE5D6Cb%2F30%2FFKLmjqV%2FzRgpS4%2BPLYzE%2FWQl7o45cw8MDKsWBJOK5XU34OenqrumFzwLkEtxrPRKVreNQJy3aUDvPSiGxo6LbL5sXnfEVTw81Sdkh2VFVU9U1hnDhz9CepTZ0kqXnouTRTGvbrVLfNAx7%2BOlFnpTeN1%2BDi8%2FKyKbFHYN2GrL9M1lxNIASKLoiFblDXsv29Z6eXzAY3e5m2MTFELZfM9dUQEQQHYd3lKFwnRB%2BMcTsmjW4YaM%2BWer1MdamaKUwO00NxV8qz0FbFVsijfN7h0Asw8343ixZAXQxBXL78A7xKOrLGoXzCd5gxVfFnIu%2B%2FA7H4o2Amhl16t1HB2sOPdSEB3N%2BIMMp6g3cQ%2FgD7x6eJpUwVOclT7InZAvPdBHFQnAdhfnEqnN7I9x%2FMr12b3aYrUYBVQN9%2Fjk5rRp6VE90h5s1QENZ3ZTJ5ZtZOnNB6aevJFEKnSYliUgLmTtnwIZHgnjyE34wWHBsG0KGUtnUL0ODzA8veaZ8a825o7YeE6LeMibEaZXkywypOZwFYx5wQgjxrW2potbMO6%2Fiauu68f%2F%2BdksmvUtooZ8AbEstXVA3bV4g1mOtl42TX%2BQlcQ4Fh7Q8RixxmHeRfo7nFNfhy0yTCc1NLJBjqkAQ1orSoNb9EGxT2ULKRJqeuKbTHH4Y8Civy8yLkAHYLAjX6CkFhbtlrSnvuadVnJfESLAon9i0gy8kWatMdo7fz26JwicBBEQBFoia1CIh6ZxlfUMtPNhOEf14aBA4YorZubTUlPNM97dpxI3Ne86vcZtRNdgYcCLli3feCq%2FIULTIGtqcdFcMUXUCdm6LHft5K1MaRymwrGBt1dHT%2FHLq%2BGWokZ&X-Amz-Signature=c25a4b84f90599e0a420bc33ceb356f0150da49fc8126d8a7275b09bdd7dd4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
