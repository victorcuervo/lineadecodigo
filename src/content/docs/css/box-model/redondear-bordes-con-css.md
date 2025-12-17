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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STWQGWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzadCVKuUQUKBKCvtP%2BxVthjSari%2F70DusKl0vkuVMQgIhAPRjQKILXetuEj66aIXBirAUdeLC1qVvKEzhVTBy0xC%2FKv8DCH8QABoMNjM3NDIzMTgzODA1Igx71o22LyGAIM6XIt8q3ANLPR1pKHHv0TwqMeGxTM5j7e5z%2F9S9qLc1Z8RNWRwMY50ulc9jwV7gXTp40el1zjJ4htx2KTSghp3UT9zaaYs7WlvCVZB%2BhLpOcVRIjSadGS7rRbFEoNKq5483BukW%2Fl25xTgBs97ga8X56M3HbQ%2FG53VHO5N%2BApo65JDm4Vfj70MBkIXS1P40kaErIfYp%2FJn1MPmC3LUZqjdKH9Y3nM9u3es3zmzZ%2BOtbtDLPDGdVE4jq9yhSrQghClQlr3CijXhpFeIJ3GH4e6ilds4kUxJowpwKrry2NIXS4IAIx1goFwe87N1NVCpmPrBKRv2i2pRJ6od%2FgalxSCmw6tD6%2BQs5%2FiwrSVnAvc2bmEoCW3Ca97Eje8QclO8IwQjNmLNw9lbz4c8UTPhab%2BdYLOhg2mAj%2FH%2Bfw0CzAVMM8C3DIVxzNI6I%2FwBW91xYQcJaYLeqwPmOzPI4X549OYwCcRsfzSR55PlFAINLTz%2B7Ge75KL7BusS1aesuuaDt2iIn2RFwLhx4dmc4GP03ZsB1dEe8A2zijegD1Q%2FS7uUVDvOm3B1WrWXU5OcSE1NDy47plMykfgAeO63kNi%2B5RYqeez7Q9VCmoxDq15MNm8%2BiL5jWf7WC2r7UOMp2eHTkRro1rjCB4orKBjqkAVIv5QtQP6MHbjq09vv%2BuNM2qK0vjQVlwsfuhYpWAgIX5FR8yc8z0tIy45GW1%2FBXcwB5y9LFEKGTgy8eKYEIJCE0BBeP5dmCpy%2FyxQIvGQWmw0mg5JNojblEqgs43kz4lwc1qqcTAdDqJ49xQBMBjJaBAeiCwtBco32rBEUr9UNPFQshjV8Elivd6qx7PDkDPaMur742z%2B6ECRrg62Cb0PqwxIPq&X-Amz-Signature=2442e90ac79d85531140a60e56ea87e1290e19043de5c310ff90f93914244a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STWQGWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzadCVKuUQUKBKCvtP%2BxVthjSari%2F70DusKl0vkuVMQgIhAPRjQKILXetuEj66aIXBirAUdeLC1qVvKEzhVTBy0xC%2FKv8DCH8QABoMNjM3NDIzMTgzODA1Igx71o22LyGAIM6XIt8q3ANLPR1pKHHv0TwqMeGxTM5j7e5z%2F9S9qLc1Z8RNWRwMY50ulc9jwV7gXTp40el1zjJ4htx2KTSghp3UT9zaaYs7WlvCVZB%2BhLpOcVRIjSadGS7rRbFEoNKq5483BukW%2Fl25xTgBs97ga8X56M3HbQ%2FG53VHO5N%2BApo65JDm4Vfj70MBkIXS1P40kaErIfYp%2FJn1MPmC3LUZqjdKH9Y3nM9u3es3zmzZ%2BOtbtDLPDGdVE4jq9yhSrQghClQlr3CijXhpFeIJ3GH4e6ilds4kUxJowpwKrry2NIXS4IAIx1goFwe87N1NVCpmPrBKRv2i2pRJ6od%2FgalxSCmw6tD6%2BQs5%2FiwrSVnAvc2bmEoCW3Ca97Eje8QclO8IwQjNmLNw9lbz4c8UTPhab%2BdYLOhg2mAj%2FH%2Bfw0CzAVMM8C3DIVxzNI6I%2FwBW91xYQcJaYLeqwPmOzPI4X549OYwCcRsfzSR55PlFAINLTz%2B7Ge75KL7BusS1aesuuaDt2iIn2RFwLhx4dmc4GP03ZsB1dEe8A2zijegD1Q%2FS7uUVDvOm3B1WrWXU5OcSE1NDy47plMykfgAeO63kNi%2B5RYqeez7Q9VCmoxDq15MNm8%2BiL5jWf7WC2r7UOMp2eHTkRro1rjCB4orKBjqkAVIv5QtQP6MHbjq09vv%2BuNM2qK0vjQVlwsfuhYpWAgIX5FR8yc8z0tIy45GW1%2FBXcwB5y9LFEKGTgy8eKYEIJCE0BBeP5dmCpy%2FyxQIvGQWmw0mg5JNojblEqgs43kz4lwc1qqcTAdDqJ49xQBMBjJaBAeiCwtBco32rBEUr9UNPFQshjV8Elivd6qx7PDkDPaMur742z%2B6ECRrg62Cb0PqwxIPq&X-Amz-Signature=36eb932803ef8d66a58b2769ca1002891a3fa4034b3d8ccbd79cb54886ba5d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
