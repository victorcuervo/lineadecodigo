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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBUPMGM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCBAtu%2Bz3iItkyC3tA1lp35fUwEmGYTgTUpBnr4RqsJAiBwhfN%2BxNkqdgCVnnBkTPLkAa1Op%2BpEN8h6nJK1KbjpsCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMNdH7PpTZ8V4uy74EKtwDctvZI5YjORbnTkJghli7PUG96zzhDf%2Blwrl3lEfoCReH5KCsV5rVEiDiGva5Yx2ozJzjTyEaS31vsXn8PVV6%2B61YJfMKggaGOLILK8KVxSFZNLnYhwUVew81fwB%2BvDDq4Uiv6rGIf2iyza2TaVXWVtLa7qdSnx0W97RKiloyOjHUHSCTXEkty9n6M7EvRdBBIOseUmYxvNRiNjgVyaQBvPPHVpn2ct10lzaLGQSYdJ0gXnNUxvAdR%2FTbD8r9MHrmQwUn%2FSi93H0WJTqn9vmPgdtGgxcy3qaavrOXCIEfUEHa0Oku98wYk4U8WsJ9W2f2lop8TnKVLxLzd7%2BtRGZcXFVUXA3FV4nl5tchB635zm%2B0qPEce85ezUZO0u7%2BERFJvlu6aWVTGBa4NIMc%2Fo2oqjpIEMkHhuuMNrOAL2njz9O%2BRWSXejmGd5bhj9pacreClDgTGQQfCeJRp2jE6Ij8AGzirmj8x%2BQFDY55WWGCRPD0oGgJqcGTaqzS0ONXdWxNqA2y070Ow7FLC%2FiBYq2ZCzhlYxKmiu5sSES%2Bra1%2Fo6hp%2FErEQ6ftHptR2KzikbaI4KrlwPx%2FPx9luwniSI0aHqpEJkaI12%2FMq4t4TV8DJ1uw%2FBoqFrJRbhQr1DgwoajOyQY6pgEJyhWlFFRFC6%2FaMl0Ll6t1O6DZ3Q5JLqTwzTuA%2F2mZq9%2BiEFNXmZY3GEsqrGarp0c3iIqI4NUXoU8aV2QTuBfwjKmXqafiiDQP%2BAovJDOE%2B5hvNxl4jFwLLGKKZw%2BPYLArVnk5mCTDmAVBLRU205%2BaXxGVwpI8QUmYUo8nM0G%2BE2VFpGCmXlO1NFGiHYW3FLLNiP9qDFG%2FkZtBWX66pKMik7OH9hwq&X-Amz-Signature=226d6a6f757a8d32b677f8d5427008818dbae1de1135c2666e96f7b0594a4cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBUPMGM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCBAtu%2Bz3iItkyC3tA1lp35fUwEmGYTgTUpBnr4RqsJAiBwhfN%2BxNkqdgCVnnBkTPLkAa1Op%2BpEN8h6nJK1KbjpsCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMNdH7PpTZ8V4uy74EKtwDctvZI5YjORbnTkJghli7PUG96zzhDf%2Blwrl3lEfoCReH5KCsV5rVEiDiGva5Yx2ozJzjTyEaS31vsXn8PVV6%2B61YJfMKggaGOLILK8KVxSFZNLnYhwUVew81fwB%2BvDDq4Uiv6rGIf2iyza2TaVXWVtLa7qdSnx0W97RKiloyOjHUHSCTXEkty9n6M7EvRdBBIOseUmYxvNRiNjgVyaQBvPPHVpn2ct10lzaLGQSYdJ0gXnNUxvAdR%2FTbD8r9MHrmQwUn%2FSi93H0WJTqn9vmPgdtGgxcy3qaavrOXCIEfUEHa0Oku98wYk4U8WsJ9W2f2lop8TnKVLxLzd7%2BtRGZcXFVUXA3FV4nl5tchB635zm%2B0qPEce85ezUZO0u7%2BERFJvlu6aWVTGBa4NIMc%2Fo2oqjpIEMkHhuuMNrOAL2njz9O%2BRWSXejmGd5bhj9pacreClDgTGQQfCeJRp2jE6Ij8AGzirmj8x%2BQFDY55WWGCRPD0oGgJqcGTaqzS0ONXdWxNqA2y070Ow7FLC%2FiBYq2ZCzhlYxKmiu5sSES%2Bra1%2Fo6hp%2FErEQ6ftHptR2KzikbaI4KrlwPx%2FPx9luwniSI0aHqpEJkaI12%2FMq4t4TV8DJ1uw%2FBoqFrJRbhQr1DgwoajOyQY6pgEJyhWlFFRFC6%2FaMl0Ll6t1O6DZ3Q5JLqTwzTuA%2F2mZq9%2BiEFNXmZY3GEsqrGarp0c3iIqI4NUXoU8aV2QTuBfwjKmXqafiiDQP%2BAovJDOE%2B5hvNxl4jFwLLGKKZw%2BPYLArVnk5mCTDmAVBLRU205%2BaXxGVwpI8QUmYUo8nM0G%2BE2VFpGCmXlO1NFGiHYW3FLLNiP9qDFG%2FkZtBWX66pKMik7OH9hwq&X-Amz-Signature=013e841051af393794ce8517549ed55fc6e9352c10ae63fe789ad233eb527b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
