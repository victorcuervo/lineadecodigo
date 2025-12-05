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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZ773F6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHD%2F19fSNBs6vXWKYFc%2BBVVD2%2F6BjM%2FelMEcbnksuq2AiEAn4w9ZPRIEhE8jzjfCSzOGqT%2Bylj3gp%2FEDz4FuCRC8tIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsgy%2B28kWMJZa1AbircA9oLdlm%2BVwjO7%2FxDYjtseVnp5MxjefLbIniFuCZ7mBwz7LDOQ560YG05yCNRx69isJeNWKMNSlPtX6cFjbqpN2r5DWy8ePdxGjPS8XMbgYFC7ETdLm7Wis%2B2K0FxlbJm3GMFuQT4ZVmL6BtAUrlxMfL6rYC1h9qBZU0fLRii%2FplgeBNuwsEDCfvkatOxoUh9e2l4SrX9juc2rQn18Vq%2FEjh0mFybDtPkwmDLWfqyiBUEoz7LQuzwiJV6K226xgAosnkfw2i4QiR6WJ%2Brq2AlzXTa2FlDGYxmN1X4EiukMubAqlOt39sJ4hBVAhV3xSAWqVFxghUvfCtGTRLKSfs2diQwSX0xq1XaFzInFpgiTi%2BrOZcj3oWqNdJOTPLkRv1TrB3PAzYkrrVEyP0J%2BZr97Io6mzzORzkk%2BFJgc0IoJZ5EWvX%2FwPHUQkUyhpf0HaEGrDENao100GrE3WfyZFPiTAV52yeqZgq35TmIlGi6oghHVj2KuuNo1epWLinXx6FMXvh1FGwI38FBruOl%2Flte%2F0yG%2BpmntxH0Hdl6XriQoN%2Bowt7SX7UJLl%2Fs98htDlrDhLmb8jaNBCi%2BbzgOJ0oAL0tIUrOa7zbOw7HoLYzfrIhjXCuCEOfJufNwkyIOMOmpyckGOqUBs%2B8D%2BSr9BQy2v%2F3DMBxG8rW97jsgNjRU%2BDu18bLNyGx7hFl5%2B%2Ber%2BbTMEd2CtpdFc2%2BJatr1fCAV%2BKvxo5julQ26V7rniP0HxbsCWvkL0tBG3YKvZXCDszVefbda2ToSP0MwynQB3Z3y7jg%2FO%2F6QrOFGhgwkk3FALhdZ4KhzyeUqTtjhT9D9mRe%2FXm6OLsBCs4rFCc3TianXKvhARNlYzddzBtdP&X-Amz-Signature=7f5e47958cd6b10c5ad8c21156a8167cc995eb006ed8a7e8fef2c90245053c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZ773F6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHD%2F19fSNBs6vXWKYFc%2BBVVD2%2F6BjM%2FelMEcbnksuq2AiEAn4w9ZPRIEhE8jzjfCSzOGqT%2Bylj3gp%2FEDz4FuCRC8tIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsgy%2B28kWMJZa1AbircA9oLdlm%2BVwjO7%2FxDYjtseVnp5MxjefLbIniFuCZ7mBwz7LDOQ560YG05yCNRx69isJeNWKMNSlPtX6cFjbqpN2r5DWy8ePdxGjPS8XMbgYFC7ETdLm7Wis%2B2K0FxlbJm3GMFuQT4ZVmL6BtAUrlxMfL6rYC1h9qBZU0fLRii%2FplgeBNuwsEDCfvkatOxoUh9e2l4SrX9juc2rQn18Vq%2FEjh0mFybDtPkwmDLWfqyiBUEoz7LQuzwiJV6K226xgAosnkfw2i4QiR6WJ%2Brq2AlzXTa2FlDGYxmN1X4EiukMubAqlOt39sJ4hBVAhV3xSAWqVFxghUvfCtGTRLKSfs2diQwSX0xq1XaFzInFpgiTi%2BrOZcj3oWqNdJOTPLkRv1TrB3PAzYkrrVEyP0J%2BZr97Io6mzzORzkk%2BFJgc0IoJZ5EWvX%2FwPHUQkUyhpf0HaEGrDENao100GrE3WfyZFPiTAV52yeqZgq35TmIlGi6oghHVj2KuuNo1epWLinXx6FMXvh1FGwI38FBruOl%2Flte%2F0yG%2BpmntxH0Hdl6XriQoN%2Bowt7SX7UJLl%2Fs98htDlrDhLmb8jaNBCi%2BbzgOJ0oAL0tIUrOa7zbOw7HoLYzfrIhjXCuCEOfJufNwkyIOMOmpyckGOqUBs%2B8D%2BSr9BQy2v%2F3DMBxG8rW97jsgNjRU%2BDu18bLNyGx7hFl5%2B%2Ber%2BbTMEd2CtpdFc2%2BJatr1fCAV%2BKvxo5julQ26V7rniP0HxbsCWvkL0tBG3YKvZXCDszVefbda2ToSP0MwynQB3Z3y7jg%2FO%2F6QrOFGhgwkk3FALhdZ4KhzyeUqTtjhT9D9mRe%2FXm6OLsBCs4rFCc3TianXKvhARNlYzddzBtdP&X-Amz-Signature=1faea09833a4a7904d85aaa662340bf7b26c4d33cad612804d76ee143fb7a676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
