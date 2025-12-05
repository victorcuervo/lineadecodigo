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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPEZYJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV1QS4KF5l0WPpkbflFPdiKaGKzMA6Df0trKqFRHMI6QIgRqqQqLh1Yafal3hVWxwbu3FOb3ystYZWgSeEsRx1Lcgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFF6MyS5k5l7YGO1oCrcA%2B7HKAfWqNmiQtKEQkyc30TbTWWQaRIvFy9wmZ8eslrlaAIioUCkVEJYthhH5cnWsZQrn6NhLoEri3BysMO77olMnHAWDqpdbjePIofjFGsir4d46jaGJP%2BQnwnyW9bseqSrj7bkM9clcI6se9Bl7nvhQo2OtKJ%2B3UfndRj13aV3p2fG8FLscYYbjTFd9iTbTkcaoEKWeeD%2BAassmHJOHPc3qhIjGnncykZZwOL1N1pAPVVqpEWsG0Q9gj4wUNblOaJmExtrqlWgYAtQC9lwkoPxwTAtS2lqyDbq%2FKrO72hJIllXWo6%2Broir7WuwGQ1DuJfp6pIrUGi3Y8dm65jqHHJOVRZFofAtgqRfgdlo%2FcvgL4vdTMoK%2BObqe%2BZcFQJtMPFfdBIlo5vazSCUb1dvmYyvq0530chXRAexB4L4WqCQlBjoxbATgWoJ773R4dOBmISor8T15V86BBw9hlSeQe%2FqZwz7tmIUZFBAik7zFhZlI7SbC%2BbhTL39%2B7EffSIe6UoYOCv5C6By1WyjxCke5tyxjTIl4kwcCP1tKdmCf9%2BRVw1VvIFFbvGoL9aCLpwYp8wWd4QGM4OxyUqvgrem%2FL3QccQUZdX%2Fbp00x%2FLSgucwS%2FwCn%2FAbp2yrS4AGMOnGyskGOqUB%2FdnoZZL60jY3iYZIyQ3TZT6aaaovXcAlb30q6o4WTzeuCgRq4fxTG0bllaw6bontaEaTCxNxKU72G%2B8Q9IuXKGGhH%2BZFG4AYIVpTfAeFB5s0XCjGeW4REsNzVs25OuNajhNBjVIZ%2BpJCf%2Bqwcc0xpRIBjI5ogp8wahF8GXKGuy9RThENLm%2FMVk02IELbrmrawy58ZUPAiTauffaPQC%2Bsn%2FVutYX6&X-Amz-Signature=4b4fe05d78a988bc248f09ccac46432c7164fff87b691ac33b7af2c87f298010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPEZYJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV1QS4KF5l0WPpkbflFPdiKaGKzMA6Df0trKqFRHMI6QIgRqqQqLh1Yafal3hVWxwbu3FOb3ystYZWgSeEsRx1Lcgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFF6MyS5k5l7YGO1oCrcA%2B7HKAfWqNmiQtKEQkyc30TbTWWQaRIvFy9wmZ8eslrlaAIioUCkVEJYthhH5cnWsZQrn6NhLoEri3BysMO77olMnHAWDqpdbjePIofjFGsir4d46jaGJP%2BQnwnyW9bseqSrj7bkM9clcI6se9Bl7nvhQo2OtKJ%2B3UfndRj13aV3p2fG8FLscYYbjTFd9iTbTkcaoEKWeeD%2BAassmHJOHPc3qhIjGnncykZZwOL1N1pAPVVqpEWsG0Q9gj4wUNblOaJmExtrqlWgYAtQC9lwkoPxwTAtS2lqyDbq%2FKrO72hJIllXWo6%2Broir7WuwGQ1DuJfp6pIrUGi3Y8dm65jqHHJOVRZFofAtgqRfgdlo%2FcvgL4vdTMoK%2BObqe%2BZcFQJtMPFfdBIlo5vazSCUb1dvmYyvq0530chXRAexB4L4WqCQlBjoxbATgWoJ773R4dOBmISor8T15V86BBw9hlSeQe%2FqZwz7tmIUZFBAik7zFhZlI7SbC%2BbhTL39%2B7EffSIe6UoYOCv5C6By1WyjxCke5tyxjTIl4kwcCP1tKdmCf9%2BRVw1VvIFFbvGoL9aCLpwYp8wWd4QGM4OxyUqvgrem%2FL3QccQUZdX%2Fbp00x%2FLSgucwS%2FwCn%2FAbp2yrS4AGMOnGyskGOqUB%2FdnoZZL60jY3iYZIyQ3TZT6aaaovXcAlb30q6o4WTzeuCgRq4fxTG0bllaw6bontaEaTCxNxKU72G%2B8Q9IuXKGGhH%2BZFG4AYIVpTfAeFB5s0XCjGeW4REsNzVs25OuNajhNBjVIZ%2BpJCf%2Bqwcc0xpRIBjI5ogp8wahF8GXKGuy9RThENLm%2FMVk02IELbrmrawy58ZUPAiTauffaPQC%2Bsn%2FVutYX6&X-Amz-Signature=f86e5e17560438cd89b6c98ab265aea5176830e04ca231f5327541f5d431dec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
