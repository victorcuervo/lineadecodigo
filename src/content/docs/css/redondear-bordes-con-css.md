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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBFBNHK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChB%2Fznm%2BjKVsPSLPJnlqY54BhGzUi0%2FtI80ooc5Kd0RwIhANTP7eIH69bteQPo4qL5yUhAifMeGJUQs8s7rQvNP%2BGfKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzte80vGgXCvYInU0gq3AMM8BLcX8Flxy6yLCTK1s9dHteIWhA1QAA%2Bwp9jkJbZEmV9YytmgkiB8wAtl4QlK9Xx7scTd%2FDuZYsA4WvmDImlrMwwRnAt9cIEKqy%2BdICuvmbjm9sPP3DFBT1Hps1paXk06gykc3IKzn18pJ02X9GpgjIz%2FnZcbGvRlgsf1hS3TjX6YNE2rYDhoWyLM1qOobrw86Kp%2FfOKc3yLboT40K8%2BaZ6iyi0josNjtbN%2FJk%2BYeMAnDg6vr3G4mZYu5BTTAbDUsBemSX%2BIO6RnO2GtsuSS%2FHIELHJu6keZljqxLe6xPOMAZTAqd4eJ0Vyq5I%2BfthrH6wRKMhxX2DdRqzHDpTNRERSghANvBZFJcks0%2BbDOWXl4Vdl1KERLdNVI3JuRNMo8BVleGhL9IFTKtRmP9h3%2F6xnIW3WlLU5e%2F2gyKr6fFnca8l26pxoPGNinp9j5I0TPcUYfTaq7tuq5N61C7iVo0wJdT8z54%2Fgsp8i%2FXg0nTjkq5QpGzKQtEeuTq7bV6MXUJBVvmRtVLuMD0xzEnG3lKXKgMkWA7Aq%2BK8303t3a8j61T52wjqEjxjmBPzvqh0yaCWjvYIt0zeF%2FbE953%2F04kwtKq%2BFmNWgJWJLdK49p3wSh2kAMfM7vX2FrKTCHiN%2FJBjqkASinonJ%2Ba6MJzFnpSTByscE4FbaGk6iA3uNRyZ%2F5TM7x6Qg9Ego1NN%2BaI8agfVrenVnMBQxMUFtfxvmreXKhdpBI3BqA6t7mC6dMDezLex0x%2FGa5y0adZAQGK88fefnZk%2B2HXa876264KqEFGTgpHnedklWwrPdSmZC%2BX3iG4E0yhR1kXi4UgRfralJznlLX1Qx%2Bk5yXYMSEJ%2FQkNrcYjVNxH5%2B2&X-Amz-Signature=20c56a8531b80b0ddb9497271c2947a2dde28bbd2a9d504bb835a5de822de459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBFBNHK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChB%2Fznm%2BjKVsPSLPJnlqY54BhGzUi0%2FtI80ooc5Kd0RwIhANTP7eIH69bteQPo4qL5yUhAifMeGJUQs8s7rQvNP%2BGfKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzte80vGgXCvYInU0gq3AMM8BLcX8Flxy6yLCTK1s9dHteIWhA1QAA%2Bwp9jkJbZEmV9YytmgkiB8wAtl4QlK9Xx7scTd%2FDuZYsA4WvmDImlrMwwRnAt9cIEKqy%2BdICuvmbjm9sPP3DFBT1Hps1paXk06gykc3IKzn18pJ02X9GpgjIz%2FnZcbGvRlgsf1hS3TjX6YNE2rYDhoWyLM1qOobrw86Kp%2FfOKc3yLboT40K8%2BaZ6iyi0josNjtbN%2FJk%2BYeMAnDg6vr3G4mZYu5BTTAbDUsBemSX%2BIO6RnO2GtsuSS%2FHIELHJu6keZljqxLe6xPOMAZTAqd4eJ0Vyq5I%2BfthrH6wRKMhxX2DdRqzHDpTNRERSghANvBZFJcks0%2BbDOWXl4Vdl1KERLdNVI3JuRNMo8BVleGhL9IFTKtRmP9h3%2F6xnIW3WlLU5e%2F2gyKr6fFnca8l26pxoPGNinp9j5I0TPcUYfTaq7tuq5N61C7iVo0wJdT8z54%2Fgsp8i%2FXg0nTjkq5QpGzKQtEeuTq7bV6MXUJBVvmRtVLuMD0xzEnG3lKXKgMkWA7Aq%2BK8303t3a8j61T52wjqEjxjmBPzvqh0yaCWjvYIt0zeF%2FbE953%2F04kwtKq%2BFmNWgJWJLdK49p3wSh2kAMfM7vX2FrKTCHiN%2FJBjqkASinonJ%2Ba6MJzFnpSTByscE4FbaGk6iA3uNRyZ%2F5TM7x6Qg9Ego1NN%2BaI8agfVrenVnMBQxMUFtfxvmreXKhdpBI3BqA6t7mC6dMDezLex0x%2FGa5y0adZAQGK88fefnZk%2B2HXa876264KqEFGTgpHnedklWwrPdSmZC%2BX3iG4E0yhR1kXi4UgRfralJznlLX1Qx%2Bk5yXYMSEJ%2FQkNrcYjVNxH5%2B2&X-Amz-Signature=9d540d04b451322e09509dfe08ac26cc37206c43479e1bf1f29617302b2f249c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
