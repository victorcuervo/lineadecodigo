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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6SF2GI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMW5Zk%2FrprVfuyoFSOheezQUTwOFukfabghEkGtsbPAIgWbAZFu5FkQUynhmRbamyZCz07la8yCTfw9ATFctOn74q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPU4SlFZjZgP62GXJyrcA%2F6t1dyiMWpjTtoL2kNMLqMJT13zEC1pX2QPBf3bKrX8vamKJqcb5%2BxTv41ZAuCHaQd1jVUmnKCiHUrhjBUGvYq1JIvPdAjnoRmCB5JvZUf4mLEfwZvSWJFiW7pf%2F%2B43fgq1HXiai75f%2B%2BBLA80HNiGYtZIU5519YdHsasByLUJPsdz8u8ujBjb7gAPEJTJJ0Buq9U8%2F8NB2Ox9TeAOF%2F6ixpAEVJ028VCfz9eCyYnIj5GDJILBjRaNrGGZqaytIaQDd1m%2BsRNdnLUiGY8%2BZQyZsAHU5BUXUb5PZ02nH%2FS8At8Nl2tphyDhhmZ5I%2FpUJ%2BrtecwQv7gxfd15be6CjbgwIwPK%2FRppTDJijfVHb6VJTMC1r2OtDDLaktFRk8GecZxwvVWMZIIIXhP6ODeeqkBYC4ldOm%2FY4EgHalCW8q2PhB3ufDSWWcJMeWMFhxzRtQNwV2n7L7VVyagEn2Gg3U0n1KJRmJ%2BuJ52QM0c4%2B8QA5LJ%2FbKRq37nVMLiddd397Uo1RKLh%2FL1PgTS8YzIqasFeofJ0z7JRsxO%2F1QlDotRNt%2BpNKii4dTLHU6ekq6Jc9%2F8IeGeEEelBDaKRzgpcKThl5Ni1gvWXCgRTOpu3mn8ZbxPqB8gcvmlra5ypqMIPOiMoGOqUBBk6uaNrk6S73W6RT6Df%2BMM4HEgBH4uRR%2BPf9EZO5a1nAIfjYcldaopy6G1SnU%2BGFjelwf6sGI4JJG2kJzfxHjdBP0JKXUJpWOHgtZh85AfHfmqBjzoNefA5CIeFwv4XLXwBGXG5%2FWogrithY9IGYQ2iu%2B%2FJdcODcd5w1Sol8IhZfRPWJZ1d78VF1MqNGPwxs2sUtSSXiwQbpvm334AO9OtTOSPCB&X-Amz-Signature=7ff316d9b8dc5100d9f7409af2d18a23f11822a74975ae239084439416d6ffa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6SF2GI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMW5Zk%2FrprVfuyoFSOheezQUTwOFukfabghEkGtsbPAIgWbAZFu5FkQUynhmRbamyZCz07la8yCTfw9ATFctOn74q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPU4SlFZjZgP62GXJyrcA%2F6t1dyiMWpjTtoL2kNMLqMJT13zEC1pX2QPBf3bKrX8vamKJqcb5%2BxTv41ZAuCHaQd1jVUmnKCiHUrhjBUGvYq1JIvPdAjnoRmCB5JvZUf4mLEfwZvSWJFiW7pf%2F%2B43fgq1HXiai75f%2B%2BBLA80HNiGYtZIU5519YdHsasByLUJPsdz8u8ujBjb7gAPEJTJJ0Buq9U8%2F8NB2Ox9TeAOF%2F6ixpAEVJ028VCfz9eCyYnIj5GDJILBjRaNrGGZqaytIaQDd1m%2BsRNdnLUiGY8%2BZQyZsAHU5BUXUb5PZ02nH%2FS8At8Nl2tphyDhhmZ5I%2FpUJ%2BrtecwQv7gxfd15be6CjbgwIwPK%2FRppTDJijfVHb6VJTMC1r2OtDDLaktFRk8GecZxwvVWMZIIIXhP6ODeeqkBYC4ldOm%2FY4EgHalCW8q2PhB3ufDSWWcJMeWMFhxzRtQNwV2n7L7VVyagEn2Gg3U0n1KJRmJ%2BuJ52QM0c4%2B8QA5LJ%2FbKRq37nVMLiddd397Uo1RKLh%2FL1PgTS8YzIqasFeofJ0z7JRsxO%2F1QlDotRNt%2BpNKii4dTLHU6ekq6Jc9%2F8IeGeEEelBDaKRzgpcKThl5Ni1gvWXCgRTOpu3mn8ZbxPqB8gcvmlra5ypqMIPOiMoGOqUBBk6uaNrk6S73W6RT6Df%2BMM4HEgBH4uRR%2BPf9EZO5a1nAIfjYcldaopy6G1SnU%2BGFjelwf6sGI4JJG2kJzfxHjdBP0JKXUJpWOHgtZh85AfHfmqBjzoNefA5CIeFwv4XLXwBGXG5%2FWogrithY9IGYQ2iu%2B%2FJdcODcd5w1Sol8IhZfRPWJZ1d78VF1MqNGPwxs2sUtSSXiwQbpvm334AO9OtTOSPCB&X-Amz-Signature=21d74545b249e724827f383f8445e7b14ec8aa2c44553295001ae8a16c739a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
