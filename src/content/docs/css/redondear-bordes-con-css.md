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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJ2RXF7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjhpJeAf4ZNqok6qMcNPRNPp2FgyKgadf6Lq4NFz%2BgBAiEA3cXZuWrPva8setpwNiq3BvENOPPqsqJxs9iRFBE%2FaREqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElWh6d6XBKhk04nsyrcA26MghmpLFRYau8rbN4YdII4GWFJfdlsAdNeefLo7%2BND94K0Csad5dTkCAWZZFAkRSZnIXkSkh8kFyii8B%2FuxpDpuh5V4rPQn5jbTciXNSpn5ETi0aUrjO9DfXK87K1YuRkqQovdNvY0XmyG1Gfd4yy%2F43H2U3RlLiypt4sQmmn91A8qQ1J1%2B4LuQRmZnJU10AsuQAZIOar8r0iKBWP905w9dkBgupyJnWb4nF6enH5RyhSXK%2BYEd9Fcpv%2FXWf5LgVZ0%2Fi8%2FrHRSbaUXUQZUopEoaeoHejymAOH6crVwzfV0qsTXeqaHt4LqjEK2eWIWRfW1E7JlHKsX9LVIrkVZ6KRQUZ2H8ggvFvS6lwtqlKF%2B9KHxboCDJ%2Fl%2FDa01Fk19pTDm%2BieNRl%2BJSokgc4NR7MwmyaL4l%2FDsPfkAaY8QTVRxyuObo%2B7aT61OnSAk8Cx%2B94Y1l85ve9HRW2E9cpNGjKu6DATYB%2FWfA0yqQTGY0RtieiW9rGxv7i1iOK1DxLieFTiRr4uI8Y2gx%2FLMXBV3F%2FAy9PJfnZkN%2Bnb3FIG1pr0kXGQ7AElWA9rc3cqrNuVlkzY27PFV7Fa0cDTQkM5LoT%2BWTTfWkGkU9QelffaEW7CMZ5sKwU2ia3l%2FhDhKMI%2BQ28kGOqUBeFwI8B72kim%2BXxz9CXI4Bm9N8PGKdZVE2jaEeeXW%2BYpb5tpTfGHsLX6W1zIAVmRWpGGdfqbCS%2BVSieh9PsDz2HraGPJXobby2o8tufWgyuj%2BSvXYsvlbWQ6YEhluORfZ%2B0TYWxJsZE4ZH4ZXWQvXoW4BX9YWzGBop81lGnuJ%2BCHs7GOfQgCzbLEczgsNQ7KnyD0YJOcwPXdAdXc4tjKc00SeztPY&X-Amz-Signature=55778681c251617f4584b3bac31208fc090be372e24cc29115ab74d97bd6ab55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJ2RXF7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjhpJeAf4ZNqok6qMcNPRNPp2FgyKgadf6Lq4NFz%2BgBAiEA3cXZuWrPva8setpwNiq3BvENOPPqsqJxs9iRFBE%2FaREqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElWh6d6XBKhk04nsyrcA26MghmpLFRYau8rbN4YdII4GWFJfdlsAdNeefLo7%2BND94K0Csad5dTkCAWZZFAkRSZnIXkSkh8kFyii8B%2FuxpDpuh5V4rPQn5jbTciXNSpn5ETi0aUrjO9DfXK87K1YuRkqQovdNvY0XmyG1Gfd4yy%2F43H2U3RlLiypt4sQmmn91A8qQ1J1%2B4LuQRmZnJU10AsuQAZIOar8r0iKBWP905w9dkBgupyJnWb4nF6enH5RyhSXK%2BYEd9Fcpv%2FXWf5LgVZ0%2Fi8%2FrHRSbaUXUQZUopEoaeoHejymAOH6crVwzfV0qsTXeqaHt4LqjEK2eWIWRfW1E7JlHKsX9LVIrkVZ6KRQUZ2H8ggvFvS6lwtqlKF%2B9KHxboCDJ%2Fl%2FDa01Fk19pTDm%2BieNRl%2BJSokgc4NR7MwmyaL4l%2FDsPfkAaY8QTVRxyuObo%2B7aT61OnSAk8Cx%2B94Y1l85ve9HRW2E9cpNGjKu6DATYB%2FWfA0yqQTGY0RtieiW9rGxv7i1iOK1DxLieFTiRr4uI8Y2gx%2FLMXBV3F%2FAy9PJfnZkN%2Bnb3FIG1pr0kXGQ7AElWA9rc3cqrNuVlkzY27PFV7Fa0cDTQkM5LoT%2BWTTfWkGkU9QelffaEW7CMZ5sKwU2ia3l%2FhDhKMI%2BQ28kGOqUBeFwI8B72kim%2BXxz9CXI4Bm9N8PGKdZVE2jaEeeXW%2BYpb5tpTfGHsLX6W1zIAVmRWpGGdfqbCS%2BVSieh9PsDz2HraGPJXobby2o8tufWgyuj%2BSvXYsvlbWQ6YEhluORfZ%2B0TYWxJsZE4ZH4ZXWQvXoW4BX9YWzGBop81lGnuJ%2BCHs7GOfQgCzbLEczgsNQ7KnyD0YJOcwPXdAdXc4tjKc00SeztPY&X-Amz-Signature=82a3991d511acd01b5c4588cff23d0c9018c7dea6bd0d4c8e629843fd63b498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
