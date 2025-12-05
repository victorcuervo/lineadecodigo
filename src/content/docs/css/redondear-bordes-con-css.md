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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45NHQYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3HMvihHQ3xIvy5SB1CNkBnU2iQKcHrX4bMs4ijJl3VwIhAMc9uuvc4NM%2FqSwy%2FU4P0q93Mhdl9VVWPFnFEO0L%2F%2F3gKv8DCFUQABoMNjM3NDIzMTgzODA1Igyc4zt7dGRWsXNmYDUq3APzpB4HRT79%2FR4v7yAnHe7TVL1yUgSdzMLEYqwNBct2gZNe8h2C6Zcw3ktAdYNvKsVLwqX0b6Lz1odHHDv4FB7XxHEh2QcMETMhwqTw8bsQPQl4s8Pxazq%2B6W4U8PNRUNJXfIhwhFYaaXQZV%2FQQ1y3I%2B%2F0ECf8Vb5RZwZnb5MY2FI0BmT2tqDzyi7fohEO%2Bah1C0tIxi0DINyA4IsRw7QfkD15k8cAhEbwfOPsqd%2B8Z5SiDNYhlikRHnTSvRmKEdPH1exjHut3PUgMpYIteYaF15YMhLEuXqLNps%2BANKosekhrww4aLAgHGkFaRxZq8IMSQfZ418o4TqLRn6oojJNNmVpq2l%2B6ffSb8L0UASW2pO6Fmzoo%2F4yGrH%2BwBER3eMqUt0XjeUFCsLJvIby5AmSfE8x9lXo1TLB3gSy1VmehcX0ikwMNaywWwoB45MLsSU2jU%2FQTWxiacPz%2B%2F8KIIj0kaRtJsmAN2EgP3UzwRltWe8b%2Bscje%2BC1%2FFjODdBiieCk5vMfRLo5C0tfY3kP87%2B9Q%2F4zUz9LexsroAG2jbjD9SSjjA5L5GrtO4%2BtOMQlqfQhgKHUjrxoo4wEwRRDeDSKsmCtDoEjFtVUwdNa%2FkP6cZOLDfsG%2B35DoAAP%2FpvDDUqsnJBjqkAS4ZecJIHl9Qn%2FxcpjcNG%2F8vVuh2ba6IyDQBM0MpnhGFIi%2FIoEYNdSZrTNFchE5qX1C0pOFCTJJuNuAnt8v79pxMPcd17GU7PGuQ6wBGFg6NfXnoDuhGL31hhJbEoygqSb%2FZHVB%2FELrU0Nftu9cNx3vPne5%2FKdpoiDYuDIaPZNRjTGRzM16TcBBOSozuix%2F9hArxgZ2VSYTGhamt2FdaWdzGOmf%2B&X-Amz-Signature=d25ec68cd07a3d5c0a686c5f7d7a39abd342b2063ab44de33ebe622aff463c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45NHQYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3HMvihHQ3xIvy5SB1CNkBnU2iQKcHrX4bMs4ijJl3VwIhAMc9uuvc4NM%2FqSwy%2FU4P0q93Mhdl9VVWPFnFEO0L%2F%2F3gKv8DCFUQABoMNjM3NDIzMTgzODA1Igyc4zt7dGRWsXNmYDUq3APzpB4HRT79%2FR4v7yAnHe7TVL1yUgSdzMLEYqwNBct2gZNe8h2C6Zcw3ktAdYNvKsVLwqX0b6Lz1odHHDv4FB7XxHEh2QcMETMhwqTw8bsQPQl4s8Pxazq%2B6W4U8PNRUNJXfIhwhFYaaXQZV%2FQQ1y3I%2B%2F0ECf8Vb5RZwZnb5MY2FI0BmT2tqDzyi7fohEO%2Bah1C0tIxi0DINyA4IsRw7QfkD15k8cAhEbwfOPsqd%2B8Z5SiDNYhlikRHnTSvRmKEdPH1exjHut3PUgMpYIteYaF15YMhLEuXqLNps%2BANKosekhrww4aLAgHGkFaRxZq8IMSQfZ418o4TqLRn6oojJNNmVpq2l%2B6ffSb8L0UASW2pO6Fmzoo%2F4yGrH%2BwBER3eMqUt0XjeUFCsLJvIby5AmSfE8x9lXo1TLB3gSy1VmehcX0ikwMNaywWwoB45MLsSU2jU%2FQTWxiacPz%2B%2F8KIIj0kaRtJsmAN2EgP3UzwRltWe8b%2Bscje%2BC1%2FFjODdBiieCk5vMfRLo5C0tfY3kP87%2B9Q%2F4zUz9LexsroAG2jbjD9SSjjA5L5GrtO4%2BtOMQlqfQhgKHUjrxoo4wEwRRDeDSKsmCtDoEjFtVUwdNa%2FkP6cZOLDfsG%2B35DoAAP%2FpvDDUqsnJBjqkAS4ZecJIHl9Qn%2FxcpjcNG%2F8vVuh2ba6IyDQBM0MpnhGFIi%2FIoEYNdSZrTNFchE5qX1C0pOFCTJJuNuAnt8v79pxMPcd17GU7PGuQ6wBGFg6NfXnoDuhGL31hhJbEoygqSb%2FZHVB%2FELrU0Nftu9cNx3vPne5%2FKdpoiDYuDIaPZNRjTGRzM16TcBBOSozuix%2F9hArxgZ2VSYTGhamt2FdaWdzGOmf%2B&X-Amz-Signature=ef2077de1b574fc1ded6468d832823dd5cfe31c466f774a68bc635ba4c8c9bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
