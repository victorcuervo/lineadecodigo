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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKP3HTA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICy1ac32xdK9SV3gQJoC4GPS4%2FS5N%2FUOQ%2FRZPCvsP8p7AiBUyYgt%2B6NXKDeD7i8yBYmpNt8Tqwnvx8fUwfzFO%2Fk6oiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4O5Si9ZKWn71AdG1KtwD8%2BoX%2BYoGBODmUJT4rGoqxsJj2j2hG7kX%2BMYQMgSK%2FxSmgD1R88KK4wjqEueaVP2g%2F7%2BpbnXOhNWU9D16QyMEn7T9HhFajhghKHWe99w3wAhI03aRTRAaAhRaDL%2B5UrhYwezZVEQWXxZ%2BkP7cukaXCZFs86pel1Mg1U4gjzSJvYjGW1V%2B1moCk7UCEN5dwe7WmeI9mmhmbvv1v3N455hjbfWZfoZu7lFWlDJqFJpCcavWjIQ8Jnt8sQE564D3FuxNgBq0BcKeLXlksntmZW9pFAxSW6lTyRwnZomyi8lVvGxUTnp67pDxG2P3ShYH7sQC0jBkiQ9vRCdYLfFho9%2B6mSsxDuQ7Tn5g8%2FiAiXjag4xnaD8X13UJ7NkYDX3a%2B0KYnxDwuyjwYr73ilBjywWdrIUwXLI0Rs4xhhtp%2FQ8CYigw3b1wfq%2FaaUAZJO7fkDTYEaUuYdiVX0nl0v1u9gn2XnMHfUxF3C%2BzmE8J5eWXArbZNghVkBUI%2FOrp0lwos%2F3s9Fx1Niz%2B5Te8V%2FcMspp1tmA0dFwq1xKgtXlWazGuoGfq7MMczThz%2Fq6CvLefm7vmwGRr85uQEF1fwUXveMjMdK6z2WdB%2FImHwqU0aM5byeX6l6o4%2Bar4L5TlOwQwqMneyQY6pgEaujGspleZgAA8XyXk27o4onGcjUpeIiEa4FuxAEYjxfkiGm6mJR0xHI2fxzbPCCRA%2Bn8WcWJzscyQs8nj%2BgTHB%2FLPjeEcpuo6zstSwulvgY0If8UCVUxrSVEQRU5zgKsXdcxNosRATpS%2B040zR0hIN6po977LrLzIZGcMlfV0vGaigkOCA%2F4u%2FoCA4Ay%2Fg7ASVRZtG0oyNag8BmWu1ZOnOi1RSwHE&X-Amz-Signature=f4b3e60fc2d38798bbdba8ab4d32f04decabcd2e31ca49a9add4401ddb601c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKP3HTA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICy1ac32xdK9SV3gQJoC4GPS4%2FS5N%2FUOQ%2FRZPCvsP8p7AiBUyYgt%2B6NXKDeD7i8yBYmpNt8Tqwnvx8fUwfzFO%2Fk6oiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4O5Si9ZKWn71AdG1KtwD8%2BoX%2BYoGBODmUJT4rGoqxsJj2j2hG7kX%2BMYQMgSK%2FxSmgD1R88KK4wjqEueaVP2g%2F7%2BpbnXOhNWU9D16QyMEn7T9HhFajhghKHWe99w3wAhI03aRTRAaAhRaDL%2B5UrhYwezZVEQWXxZ%2BkP7cukaXCZFs86pel1Mg1U4gjzSJvYjGW1V%2B1moCk7UCEN5dwe7WmeI9mmhmbvv1v3N455hjbfWZfoZu7lFWlDJqFJpCcavWjIQ8Jnt8sQE564D3FuxNgBq0BcKeLXlksntmZW9pFAxSW6lTyRwnZomyi8lVvGxUTnp67pDxG2P3ShYH7sQC0jBkiQ9vRCdYLfFho9%2B6mSsxDuQ7Tn5g8%2FiAiXjag4xnaD8X13UJ7NkYDX3a%2B0KYnxDwuyjwYr73ilBjywWdrIUwXLI0Rs4xhhtp%2FQ8CYigw3b1wfq%2FaaUAZJO7fkDTYEaUuYdiVX0nl0v1u9gn2XnMHfUxF3C%2BzmE8J5eWXArbZNghVkBUI%2FOrp0lwos%2F3s9Fx1Niz%2B5Te8V%2FcMspp1tmA0dFwq1xKgtXlWazGuoGfq7MMczThz%2Fq6CvLefm7vmwGRr85uQEF1fwUXveMjMdK6z2WdB%2FImHwqU0aM5byeX6l6o4%2Bar4L5TlOwQwqMneyQY6pgEaujGspleZgAA8XyXk27o4onGcjUpeIiEa4FuxAEYjxfkiGm6mJR0xHI2fxzbPCCRA%2Bn8WcWJzscyQs8nj%2BgTHB%2FLPjeEcpuo6zstSwulvgY0If8UCVUxrSVEQRU5zgKsXdcxNosRATpS%2B040zR0hIN6po977LrLzIZGcMlfV0vGaigkOCA%2F4u%2FoCA4Ay%2Fg7ASVRZtG0oyNag8BmWu1ZOnOi1RSwHE&X-Amz-Signature=f8d23eb041493f029096d428b2e3f92e90b969681e8e211f9789e8b8c360b191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
