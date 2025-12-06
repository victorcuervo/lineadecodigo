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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQMAHF3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFHyDObHg%2F3j2c4reT8pCZ1cvRIqItj3YLy%2BLzpKIPAIgNjNMFPnXLZZL94%2BuVDXcJKJTSHJ%2Fb1SkC%2B5eP7fg5xAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJarFrk1fkOGTd21TCrcA0t%2FDzM0tZkvhPooz3nkq41U5XKHx6RxECyKnPH6eZakKLQq56d5csw%2FsSzt97gfGbA3o50OBigG0PytvSB%2F0qt%2BQf%2B0U7ur8D%2BpcfF6prAwH5kTyIAE6ZnuLJ6bN4DGhyAiWpRwOo5rlJSNeqNWtJnWqs4ui0CMVrs4Tuqktbz5sCfw3HG8xA619i%2Bcjj3A25ZC%2FuRCAgricNJ%2Ba3%2FbHW%2FYmshEmz5JvRwJT7gPB3ifu6PPtA0WApX2Ye3jNnRG%2B7mfJ3H1TAlR2MnSmVIovbDMmqGDfYR3lo%2Bj2uPsY6%2F%2F6DKlHMC0w87PWXGPowx1m95IgpFDuDOX5t%2Bf4svSb5u7WIBVY%2FBLUZ9cy6CyVeYeXH5bKVQjsAXTPW9zmz%2FlOKovxjPHi5AerH1IS5%2Bxi0XdbW05vP8M4JKyNY2Ff9mIy6ASSc1yins39HO%2Bu9vv6jZEINbrp8duO2ZdBcRq8anQkJ7GbJDQTaJCZe14WDlhWOhzPeY%2Bo3gdRppO8nRJiezaecEHcp32rf9mw7tKx%2Bb8euLscwocc%2BcHtP6aVbrdNYfrUOYSgesbRARIrGnouGnOC5Al47YEEGMraOiyrYZgjZ29%2BjL0GskzAei%2BayNroJZNEN4nbY33RiV%2FMLXD0ckGOqUB73DKTpAQzP0T8pnSLMdIK3MAzGJWuxymgAo%2BRlHbiJEwPmadkBnUX3yhUnMWIV8o9XIkpFK4bQsPqmPX69zKeE06uwrm4wzcMF8%2BaSzk1o1uts%2BoxrNwS8JMiX%2F7NGy5CYJdAKZ8Q9XQvIxXfo9HoNnFhVjxZM%2BroHgNZMDLABBswxCrsXQjNhElJAQUteOC20fyvSEB83Z1ZgvnnEXK5TvVrzjJ&X-Amz-Signature=4b0a8c14eccd2c0e46640fe9d4af5051ee24a22b6652dd68afec9ea718e6e0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQMAHF3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFHyDObHg%2F3j2c4reT8pCZ1cvRIqItj3YLy%2BLzpKIPAIgNjNMFPnXLZZL94%2BuVDXcJKJTSHJ%2Fb1SkC%2B5eP7fg5xAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJarFrk1fkOGTd21TCrcA0t%2FDzM0tZkvhPooz3nkq41U5XKHx6RxECyKnPH6eZakKLQq56d5csw%2FsSzt97gfGbA3o50OBigG0PytvSB%2F0qt%2BQf%2B0U7ur8D%2BpcfF6prAwH5kTyIAE6ZnuLJ6bN4DGhyAiWpRwOo5rlJSNeqNWtJnWqs4ui0CMVrs4Tuqktbz5sCfw3HG8xA619i%2Bcjj3A25ZC%2FuRCAgricNJ%2Ba3%2FbHW%2FYmshEmz5JvRwJT7gPB3ifu6PPtA0WApX2Ye3jNnRG%2B7mfJ3H1TAlR2MnSmVIovbDMmqGDfYR3lo%2Bj2uPsY6%2F%2F6DKlHMC0w87PWXGPowx1m95IgpFDuDOX5t%2Bf4svSb5u7WIBVY%2FBLUZ9cy6CyVeYeXH5bKVQjsAXTPW9zmz%2FlOKovxjPHi5AerH1IS5%2Bxi0XdbW05vP8M4JKyNY2Ff9mIy6ASSc1yins39HO%2Bu9vv6jZEINbrp8duO2ZdBcRq8anQkJ7GbJDQTaJCZe14WDlhWOhzPeY%2Bo3gdRppO8nRJiezaecEHcp32rf9mw7tKx%2Bb8euLscwocc%2BcHtP6aVbrdNYfrUOYSgesbRARIrGnouGnOC5Al47YEEGMraOiyrYZgjZ29%2BjL0GskzAei%2BayNroJZNEN4nbY33RiV%2FMLXD0ckGOqUB73DKTpAQzP0T8pnSLMdIK3MAzGJWuxymgAo%2BRlHbiJEwPmadkBnUX3yhUnMWIV8o9XIkpFK4bQsPqmPX69zKeE06uwrm4wzcMF8%2BaSzk1o1uts%2BoxrNwS8JMiX%2F7NGy5CYJdAKZ8Q9XQvIxXfo9HoNnFhVjxZM%2BroHgNZMDLABBswxCrsXQjNhElJAQUteOC20fyvSEB83Z1ZgvnnEXK5TvVrzjJ&X-Amz-Signature=de5214aec1e5881139a99d96649d139cfb374dabf9aa993d464bc3aa1b35a48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
