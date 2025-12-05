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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AYUX27%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWxpw%2BvGQ8fxatEqKwZsWrMVbSKSyuyZZzNqQfEu6bnAiBx8ZCsuGb4nH5uK57B0qUSXHZBYf2KuZb1II0rGEPhbSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMj0fgv1dCE1jMKhvyKtwDMkfGjaawreyEpzRcuN8zS%2Fdq%2BegSuRbj2lj0WNPd%2BrGtL6epvCze06tiegcssiMLqGhj0xNo9q2Ddbdrt9WVC6b7v%2BiGwdnXl44GgzvGnrNEhKn60CrVG9Kpkvlv0Vwp9def8FAUTy7C%2FPtZ2UlUpg%2Bf7%2F3HSyJ4aa32TnWqMhUdV5vJx3UWCPwnvx0Y0TomO8kFjVQLntZKyrnqj4HzNOy1fIMs6HnmvW7TH2M5IDtnZE%2BZ%2FFnfY1FLW7BA1Q4UIVJpkbiKdaQC99PckY%2FEgI%2BqTFeRY3%2BMxxgw4VNVeu28a1zUGrHG0SWjfjjhFYep1Xe47FhPoyEWv%2FSd3eYz%2B3JGJUE63z9y0xLjOaiIB2POHBsEB0ULDzor3rgo2bqQmK2HhLh%2Bk4uPFqyStT9nONV8khoiiMnsjBV%2BRieODNC2jkwYvHX9q3l9hEhW5Gy9R0lXt7CsXWK8cT3FHzCxZQzmd5rBHgoQ9wZgSujKxTGLgwAjvlD9VtfZAy7tBiDebsDODURGNwXRMdcUHVQV51%2F2wUXvmS%2F%2BDQ41C8crRFlK4JVOCK9p3mvJnsp2eRwdb1JHEf5VzM71L2RbgV6i%2B4FaS4N1gudMbskq7vlq14nvvxxgq8rbSjctmxQwn%2BPLyQY6pgGE0afAiZnXBbKi8rXYcS1it7YovSWFYHJm57kG0XL4cDjHRPRr0vTwUpflpOAsZwuK15Kyzx6rp4ZZcVtW%2BTIm66hhDFYM1RAi2LZ50TOF1k3NakB6S0ZHS4ZIoSuJhxmU%2Bug%2FZD8jc8FskHB5jbIw5BLcCoSuTIm2ZtAE%2B4udUAhhW1af0SNLYElwB0MAHLPMEz%2BDYc2eq6Vs%2Fba%2B%2BFWRL7FsFYEQ&X-Amz-Signature=1febe559dfb8487c037c9080d779053ff438a3725ee0d459a89cfd0d64ba4bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AYUX27%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWxpw%2BvGQ8fxatEqKwZsWrMVbSKSyuyZZzNqQfEu6bnAiBx8ZCsuGb4nH5uK57B0qUSXHZBYf2KuZb1II0rGEPhbSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMj0fgv1dCE1jMKhvyKtwDMkfGjaawreyEpzRcuN8zS%2Fdq%2BegSuRbj2lj0WNPd%2BrGtL6epvCze06tiegcssiMLqGhj0xNo9q2Ddbdrt9WVC6b7v%2BiGwdnXl44GgzvGnrNEhKn60CrVG9Kpkvlv0Vwp9def8FAUTy7C%2FPtZ2UlUpg%2Bf7%2F3HSyJ4aa32TnWqMhUdV5vJx3UWCPwnvx0Y0TomO8kFjVQLntZKyrnqj4HzNOy1fIMs6HnmvW7TH2M5IDtnZE%2BZ%2FFnfY1FLW7BA1Q4UIVJpkbiKdaQC99PckY%2FEgI%2BqTFeRY3%2BMxxgw4VNVeu28a1zUGrHG0SWjfjjhFYep1Xe47FhPoyEWv%2FSd3eYz%2B3JGJUE63z9y0xLjOaiIB2POHBsEB0ULDzor3rgo2bqQmK2HhLh%2Bk4uPFqyStT9nONV8khoiiMnsjBV%2BRieODNC2jkwYvHX9q3l9hEhW5Gy9R0lXt7CsXWK8cT3FHzCxZQzmd5rBHgoQ9wZgSujKxTGLgwAjvlD9VtfZAy7tBiDebsDODURGNwXRMdcUHVQV51%2F2wUXvmS%2F%2BDQ41C8crRFlK4JVOCK9p3mvJnsp2eRwdb1JHEf5VzM71L2RbgV6i%2B4FaS4N1gudMbskq7vlq14nvvxxgq8rbSjctmxQwn%2BPLyQY6pgGE0afAiZnXBbKi8rXYcS1it7YovSWFYHJm57kG0XL4cDjHRPRr0vTwUpflpOAsZwuK15Kyzx6rp4ZZcVtW%2BTIm66hhDFYM1RAi2LZ50TOF1k3NakB6S0ZHS4ZIoSuJhxmU%2Bug%2FZD8jc8FskHB5jbIw5BLcCoSuTIm2ZtAE%2B4udUAhhW1af0SNLYElwB0MAHLPMEz%2BDYc2eq6Vs%2Fba%2B%2BFWRL7FsFYEQ&X-Amz-Signature=686f30158ac3d5c5a22a4b7e7f56c46aa4014bc68e86e81d4ccc5cb5b7eb4d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
