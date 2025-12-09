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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWEXTA3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B0M1ulgTiqf52qIZ%2B5roytHbh%2BYYzQslmLcgQ3NjAKAiEAqRRTCw%2Fab3sZuFfP3mRlJvWHPXIJp48ITvCEV6Sl2mEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5i6HbSp2neZhIpMSrcA7IZ95QAalVlaKzMa%2F11%2Brmip%2FiYXzQP7A5kN7h0Ns0YNQbYOUH1f5GEzMkxfmq9kQryeFKr%2FYLNf%2FJKdJ%2FhLKCfQFGcjGupb%2FDmBgRLLIMImVTekR4AqU4vBX4eQSal1pfv4LQu5yTiZZPRYtEJKN5%2BIYswgufk59j8Ldvd%2FSGzFOT2vhCSyGyDuvOBXO83mXAVLgSdc490sv0WfZ92b9fB2rhxIBC8Ierq76V%2Bszi%2B3XpfJ6j5u5yttnHnQsXW4v8B0lcP47qKQSc5eaUr2CP9eH8PYEd83kz%2FSUSt%2BnCqAmCKo0cNrTyfaqC6onAjmS6jgDMXpgZmX4tbvPAwL%2F6IJU4T30fRMqlRnCm8d6TTcm9hv%2F0wgJacoFXVxA%2Fxgcmi0KmMlQmNIPo2qpIjnRIiHqLc1IDwiEeDrVJqK61Mmljovwq%2Fh78NjAi0PAJrFL2UTc1PDN5aSSXVuQeP8jfUiaZXlnVcH%2BFLpcMU%2F%2FrKRQHYVNA%2B%2FzAu0WGB3S%2FdfNQV6%2BTzBCUlu%2FlaGB0WA4fqpYAL3Y1He2uk6JBalDdiF%2BtEhht4HvAx%2FBAP3cjDHX5IQBL3gLgB4w9lEJT8Djc28FwC62hK2v5XwF4OHC1f912o6ZRWf2C0pMPAMLnD3ckGOqUB%2BRZ%2FLZOTJ1%2FZGrEib%2BDb2twMn0V6si%2Be6NFpkUIJqjyYNKryty%2FBVK0Xa91Tmb%2BIhzUsdxDSWVfhKPqB8ljCaj2iSkka4qAQ6BIOAZHBliPcZwzPmn2Q%2BUxV0NpM5Djuv7V9k%2FN4dZRmKGKeGEfRfCc6zPzFy8B7KoSJ02C6aPw7IH6i6T6uGGqp21illZMUkHaXrAcpCdeEgDylXKw0hL%2F0qFzx&X-Amz-Signature=c3f38bcb9acf3714f997915cd3806fe231b733208bf0d419aaa7aef5b06958e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWEXTA3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B0M1ulgTiqf52qIZ%2B5roytHbh%2BYYzQslmLcgQ3NjAKAiEAqRRTCw%2Fab3sZuFfP3mRlJvWHPXIJp48ITvCEV6Sl2mEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5i6HbSp2neZhIpMSrcA7IZ95QAalVlaKzMa%2F11%2Brmip%2FiYXzQP7A5kN7h0Ns0YNQbYOUH1f5GEzMkxfmq9kQryeFKr%2FYLNf%2FJKdJ%2FhLKCfQFGcjGupb%2FDmBgRLLIMImVTekR4AqU4vBX4eQSal1pfv4LQu5yTiZZPRYtEJKN5%2BIYswgufk59j8Ldvd%2FSGzFOT2vhCSyGyDuvOBXO83mXAVLgSdc490sv0WfZ92b9fB2rhxIBC8Ierq76V%2Bszi%2B3XpfJ6j5u5yttnHnQsXW4v8B0lcP47qKQSc5eaUr2CP9eH8PYEd83kz%2FSUSt%2BnCqAmCKo0cNrTyfaqC6onAjmS6jgDMXpgZmX4tbvPAwL%2F6IJU4T30fRMqlRnCm8d6TTcm9hv%2F0wgJacoFXVxA%2Fxgcmi0KmMlQmNIPo2qpIjnRIiHqLc1IDwiEeDrVJqK61Mmljovwq%2Fh78NjAi0PAJrFL2UTc1PDN5aSSXVuQeP8jfUiaZXlnVcH%2BFLpcMU%2F%2FrKRQHYVNA%2B%2FzAu0WGB3S%2FdfNQV6%2BTzBCUlu%2FlaGB0WA4fqpYAL3Y1He2uk6JBalDdiF%2BtEhht4HvAx%2FBAP3cjDHX5IQBL3gLgB4w9lEJT8Djc28FwC62hK2v5XwF4OHC1f912o6ZRWf2C0pMPAMLnD3ckGOqUB%2BRZ%2FLZOTJ1%2FZGrEib%2BDb2twMn0V6si%2Be6NFpkUIJqjyYNKryty%2FBVK0Xa91Tmb%2BIhzUsdxDSWVfhKPqB8ljCaj2iSkka4qAQ6BIOAZHBliPcZwzPmn2Q%2BUxV0NpM5Djuv7V9k%2FN4dZRmKGKeGEfRfCc6zPzFy8B7KoSJ02C6aPw7IH6i6T6uGGqp21illZMUkHaXrAcpCdeEgDylXKw0hL%2F0qFzx&X-Amz-Signature=12f9dffb6c611dde4004cbb9a4a3446e0b3ee9a4e986e394d056299a32df654c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
