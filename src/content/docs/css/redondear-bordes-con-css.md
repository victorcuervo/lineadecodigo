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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIRNCR5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEvOGUCyJzydX%2BwGl9sZASU0BzLIorQFw3dq1VXGqvuAiBuQpgHppep%2BFSNyKaT2jSigN5oJvciK1WpcQd0furqgCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMMxI9i1fYHnJ72K2%2FKtwDCqCVgpsembjG%2F79PGD10o42JbUKrsFLvKf6NDmMzyo90hbFDPgCo1hig96Rjox14yzb70Yw6wFc72Zsd7oy7P8G3lC5aIzqMFGiVXgM7g4k%2Bvsl1S6qmwqp%2BZAZweTqvlZoTg5KwoflBu7rSFlTLFST5dSKLuXMet9NAcgtOIym%2BMgQhBDV%2FNFXgrGLy9zQryQX7WcHr%2BOlJMXCpsxD4hrKDZydfINSbN%2FHTpvnj74AS%2FcrMeb5SSX3QmrIOKv3b7BtaZflEC8kKoB7OIO2F4sa532s7EimhfpDI5Qla%2BsS%2BVGNdFVWI377f%2FFmGkAz5qsmdVJRj4hJowOLm8lwo8eZNNUatorc3ymUI8AnYdqw9%2FPk0JVnrojvWHqu0vlpN3PQiYYIycWd%2FWqsDKzPvINIlRfUuBQwH7p0r%2BpvktKWczK8LfPF9GEEC%2BvYqRo7XRv1iuUC1MY15QsAgUJC9jzOv%2B2EfOM1PNxXwyuw7b1aODeP9bb%2BECfZZ7RGeT5mGUkc0llGYYkIo21y3eOmSnFuk0N20zR2H9fLhlMTwJW4OMpnAaZk%2FnEYN2pnyYrP15OrCkreFfOfFPOb39wStXlmGT4aVap9aE1rdr1PNVE4NRbaGuOdWyVM6oOkw5%2BzMyQY6pgHg0G%2BR8PzBqFTLJnKIDgmMmIYI%2F%2F7c0GNRC5bNEi5lRMHBgs6MwD8aPyFun68yHU4QIRbrSv5%2FucLhf9CmBs68LH61n6zdHr%2B2gN3I0gPmshfOPmFvtT4B0EQpgnjj09%2F0OEjKP3yuVzQwINLh1mRKqqem%2Fmr%2BCvg%2BRdfR4gm6slmq9Lq4FyoDovlTFe9tLEggtzYCBPoR5CLiGm51yO5LcHJavCYB&X-Amz-Signature=eeb0886128bb2e83b2217b5b2bc0b9565805d0a5426c2b9bf52fa8d52ddeeffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIRNCR5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEvOGUCyJzydX%2BwGl9sZASU0BzLIorQFw3dq1VXGqvuAiBuQpgHppep%2BFSNyKaT2jSigN5oJvciK1WpcQd0furqgCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMMxI9i1fYHnJ72K2%2FKtwDCqCVgpsembjG%2F79PGD10o42JbUKrsFLvKf6NDmMzyo90hbFDPgCo1hig96Rjox14yzb70Yw6wFc72Zsd7oy7P8G3lC5aIzqMFGiVXgM7g4k%2Bvsl1S6qmwqp%2BZAZweTqvlZoTg5KwoflBu7rSFlTLFST5dSKLuXMet9NAcgtOIym%2BMgQhBDV%2FNFXgrGLy9zQryQX7WcHr%2BOlJMXCpsxD4hrKDZydfINSbN%2FHTpvnj74AS%2FcrMeb5SSX3QmrIOKv3b7BtaZflEC8kKoB7OIO2F4sa532s7EimhfpDI5Qla%2BsS%2BVGNdFVWI377f%2FFmGkAz5qsmdVJRj4hJowOLm8lwo8eZNNUatorc3ymUI8AnYdqw9%2FPk0JVnrojvWHqu0vlpN3PQiYYIycWd%2FWqsDKzPvINIlRfUuBQwH7p0r%2BpvktKWczK8LfPF9GEEC%2BvYqRo7XRv1iuUC1MY15QsAgUJC9jzOv%2B2EfOM1PNxXwyuw7b1aODeP9bb%2BECfZZ7RGeT5mGUkc0llGYYkIo21y3eOmSnFuk0N20zR2H9fLhlMTwJW4OMpnAaZk%2FnEYN2pnyYrP15OrCkreFfOfFPOb39wStXlmGT4aVap9aE1rdr1PNVE4NRbaGuOdWyVM6oOkw5%2BzMyQY6pgHg0G%2BR8PzBqFTLJnKIDgmMmIYI%2F%2F7c0GNRC5bNEi5lRMHBgs6MwD8aPyFun68yHU4QIRbrSv5%2FucLhf9CmBs68LH61n6zdHr%2B2gN3I0gPmshfOPmFvtT4B0EQpgnjj09%2F0OEjKP3yuVzQwINLh1mRKqqem%2Fmr%2BCvg%2BRdfR4gm6slmq9Lq4FyoDovlTFe9tLEggtzYCBPoR5CLiGm51yO5LcHJavCYB&X-Amz-Signature=bc2df1805db96bbef8acb157f1534a25aa059f55993cb32a4775d32924db4e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
