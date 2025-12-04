---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG72F5O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYNE0gjdH2eUkWQ0xXMWzAEVNOsXa6CoQQOS6RUzDW2wIhAM9W%2B89wolZ7Ktt4eYayo2ncZgKsX3Hwa0724JjBqrlDKv8DCEkQABoMNjM3NDIzMTgzODA1IgwTxz%2FWmcZa8dutpDEq3ANYoH7gz1N0LxT5sSQDulj9iH%2Fv47F74dA7%2FcjN5Pc3GBZT1b51uXOz7oN2v5oR1Bqkfx1k%2BwN4Q%2FoXSUjK6RlyQkDMSZRYvVzor1O46qMeTkBByGPO6w5NigOdSurwjAvmqxTFVguRG0WPrJR8eEqcrHe3cL3Hk3O56qcNAFGbRwK%2BUbR8jY%2Bqcd7qtqa1k6C0nmZ5nSXi52AhdOYoqcf7SO8qk4v1cC9M43%2BwuOoz%2B%2FBD1xPyAqMtVBjUqvwxz%2BwK2DdOY2APqnVaDQlHccnGIzyE9bVZhIMznPeRPde9Ajs8pAVYvQN3H8DI5mfl%2FlNA6aBYlNo5PzWllQA5wg%2B7eX%2BoJLDZ0VxGsVH31xKcvJbVLehMCQLoLstE1JeQ0bUcBeIcxhn2TscSLDQQS8Ci1ClD2Mvnr%2FEkBlUg1pXgh%2Fla1cY%2FE%2BqHe7Xww%2BrOC4yYhbf%2B2q35MfxgBzjAdiWZ%2FBUMbNuyCnKo36ccW0S3GjnXwwbB%2B4s6uhZTpkdLAoE9VnwPXcRcSTndaZufBRHSTEzC6iMlCOh5oQlfF3cj8ZM3TJ7o56vxMOIixNb2EIm9%2F5gC0jjP7Qo2Y0HG1RxP0lxa0IOB0RcVgvPLlH7Po9NN3nu%2Bbj%2Bai8cj7TDm3MbJBjqkAc5laXF3N60I8F5XFRDKzhvXjYTdo2wyp%2FzLIu%2BpNdnp2gkHiMhhBUpAWp9UyN%2BMXy3NfNgjThs5fPFby6KhW4Z7wLXMbXS53zzDhRynQBUaXQXEKCQcqxU9WmxSJyUu9PqZhFzXUmBIr%2BtQpQVGdEmGsd0SEoM63oFqW0SR1r5gn89u%2FUjEFEKV8ez0ktQ6o7sfosH2cXpU88cgoeInrimeyaRE&X-Amz-Signature=ca8475b1bbf443031cb79f5b528a40f7522610a93f9d919f749b87a2f3d534fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG72F5O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYNE0gjdH2eUkWQ0xXMWzAEVNOsXa6CoQQOS6RUzDW2wIhAM9W%2B89wolZ7Ktt4eYayo2ncZgKsX3Hwa0724JjBqrlDKv8DCEkQABoMNjM3NDIzMTgzODA1IgwTxz%2FWmcZa8dutpDEq3ANYoH7gz1N0LxT5sSQDulj9iH%2Fv47F74dA7%2FcjN5Pc3GBZT1b51uXOz7oN2v5oR1Bqkfx1k%2BwN4Q%2FoXSUjK6RlyQkDMSZRYvVzor1O46qMeTkBByGPO6w5NigOdSurwjAvmqxTFVguRG0WPrJR8eEqcrHe3cL3Hk3O56qcNAFGbRwK%2BUbR8jY%2Bqcd7qtqa1k6C0nmZ5nSXi52AhdOYoqcf7SO8qk4v1cC9M43%2BwuOoz%2B%2FBD1xPyAqMtVBjUqvwxz%2BwK2DdOY2APqnVaDQlHccnGIzyE9bVZhIMznPeRPde9Ajs8pAVYvQN3H8DI5mfl%2FlNA6aBYlNo5PzWllQA5wg%2B7eX%2BoJLDZ0VxGsVH31xKcvJbVLehMCQLoLstE1JeQ0bUcBeIcxhn2TscSLDQQS8Ci1ClD2Mvnr%2FEkBlUg1pXgh%2Fla1cY%2FE%2BqHe7Xww%2BrOC4yYhbf%2B2q35MfxgBzjAdiWZ%2FBUMbNuyCnKo36ccW0S3GjnXwwbB%2B4s6uhZTpkdLAoE9VnwPXcRcSTndaZufBRHSTEzC6iMlCOh5oQlfF3cj8ZM3TJ7o56vxMOIixNb2EIm9%2F5gC0jjP7Qo2Y0HG1RxP0lxa0IOB0RcVgvPLlH7Po9NN3nu%2Bbj%2Bai8cj7TDm3MbJBjqkAc5laXF3N60I8F5XFRDKzhvXjYTdo2wyp%2FzLIu%2BpNdnp2gkHiMhhBUpAWp9UyN%2BMXy3NfNgjThs5fPFby6KhW4Z7wLXMbXS53zzDhRynQBUaXQXEKCQcqxU9WmxSJyUu9PqZhFzXUmBIr%2BtQpQVGdEmGsd0SEoM63oFqW0SR1r5gn89u%2FUjEFEKV8ez0ktQ6o7sfosH2cXpU88cgoeInrimeyaRE&X-Amz-Signature=9b182c65986ccdc022797e3ab219d87fce2d5aecb47a83707d62a8838845eff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
