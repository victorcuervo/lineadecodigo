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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXR56TG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLgCW6Es0H%2FnysGbL9ec7V2hnxniL9yfeggctGJkvs9QIhANhmwyowA9Ze%2BeLF%2BGlUVyn3rgfNbFChnBeYMN9MNrpJKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtiLjFX34LYB2LkE4q3AM0FALBSddN2wptqpLpmJ%2F%2BMRUiffGwnl%2BwSHr3BFOEPvJjULfm7fE78hwkMOuiIJjEgF%2B0%2FbFAyyStPtbfw6u6z9xJfeXvl5kPSjcCbG6gX02FwTDZaxNkqqAbWIY0s3bQUop0HGBjpWv9zVQSZ4sRYvcD8st4RNGc8qXo4Jg8JTPXz7wNJzG1ziPkIhBbMLPjVLVD92mYNBKKusSuGQCnVtk7ZRzm%2BQrr1SJJNrCIk5W8AgwCG50GRMmiH0v477Ce7W2UU0Wko1x9WTzJ7sbknG8DIk%2BKYUH1rJVoB8mjydMuGq3m8ZT7MPgMk6Ff6K%2F0oUZDewTGEGR8EAtPv5Ql%2B%2BsQu4a0vIUMbK2JVkA%2BI66QhvxqDVlcnNXzlNrBnq52Ngkh4%2FTMBbh2DUnW6IOAbQiz26YwcthOob9B65qwyHPF8zAnanjaLZQl7YzCZvGYCmgejW9cZgLKy7Grob6Mlk%2FgvHdzTR%2B6rAuvzmpRLkMW7c%2B4W6WwJJg7ipXgjV9pFBLAdW0UWzv3IAVljxyrw%2F3DR6kCmIvDxRMYDj48TdZlv1bFeT0UZH8HEx2jxnREq0OKncP7O6V7kvD6BsZDLZms3QZ%2FIdpk4VrbPDO2UJQu%2BFK%2BD0jz87TV%2BDC27tnJBjqkAflm9by7vS5bCKjVqz7E2IRktwumM4Z8U8eM4TZH7OM2SSdOPFekzQfqnaIzl%2B2AKy40sHFlPM9iqMFMBLnnT2JlGGg2VHH%2BslKcbyGE%2FQjXmFybG1uGblJaZRCtbmclA%2FTTTuuksiIqP%2BbfUhwuN04BOBgAIE102tEc%2BVLF0DHnasHhpVp94jA42fLwXGwBvofTf3kTnkYamSkP1oF985zOD7dv&X-Amz-Signature=4432711adb3c9a972b5879f9b9f7edff1238b02b2134707f22e5815471d67662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXR56TG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLgCW6Es0H%2FnysGbL9ec7V2hnxniL9yfeggctGJkvs9QIhANhmwyowA9Ze%2BeLF%2BGlUVyn3rgfNbFChnBeYMN9MNrpJKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtiLjFX34LYB2LkE4q3AM0FALBSddN2wptqpLpmJ%2F%2BMRUiffGwnl%2BwSHr3BFOEPvJjULfm7fE78hwkMOuiIJjEgF%2B0%2FbFAyyStPtbfw6u6z9xJfeXvl5kPSjcCbG6gX02FwTDZaxNkqqAbWIY0s3bQUop0HGBjpWv9zVQSZ4sRYvcD8st4RNGc8qXo4Jg8JTPXz7wNJzG1ziPkIhBbMLPjVLVD92mYNBKKusSuGQCnVtk7ZRzm%2BQrr1SJJNrCIk5W8AgwCG50GRMmiH0v477Ce7W2UU0Wko1x9WTzJ7sbknG8DIk%2BKYUH1rJVoB8mjydMuGq3m8ZT7MPgMk6Ff6K%2F0oUZDewTGEGR8EAtPv5Ql%2B%2BsQu4a0vIUMbK2JVkA%2BI66QhvxqDVlcnNXzlNrBnq52Ngkh4%2FTMBbh2DUnW6IOAbQiz26YwcthOob9B65qwyHPF8zAnanjaLZQl7YzCZvGYCmgejW9cZgLKy7Grob6Mlk%2FgvHdzTR%2B6rAuvzmpRLkMW7c%2B4W6WwJJg7ipXgjV9pFBLAdW0UWzv3IAVljxyrw%2F3DR6kCmIvDxRMYDj48TdZlv1bFeT0UZH8HEx2jxnREq0OKncP7O6V7kvD6BsZDLZms3QZ%2FIdpk4VrbPDO2UJQu%2BFK%2BD0jz87TV%2BDC27tnJBjqkAflm9by7vS5bCKjVqz7E2IRktwumM4Z8U8eM4TZH7OM2SSdOPFekzQfqnaIzl%2B2AKy40sHFlPM9iqMFMBLnnT2JlGGg2VHH%2BslKcbyGE%2FQjXmFybG1uGblJaZRCtbmclA%2FTTTuuksiIqP%2BbfUhwuN04BOBgAIE102tEc%2BVLF0DHnasHhpVp94jA42fLwXGwBvofTf3kTnkYamSkP1oF985zOD7dv&X-Amz-Signature=4e9a5b96e468eb7b79d8fe5181ec5afc8ba3b8e70bf1761d0d254f0bb3d634a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
