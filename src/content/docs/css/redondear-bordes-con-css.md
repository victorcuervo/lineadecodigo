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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDLXXFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78EdhOjgyxqskauCJX9GAdhtmWsbnl4ullpM0NRtl5wIhAPqScEoC4qAHdMZm0QFcd1ioB1ibDu0j3a8rSqTncOx4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoL3DDMEugfO7ivgkq3AMusnsmL7voM8ukhtZT%2BGYjeB0NQvYAMRLTbnojS%2FvzYSUXyefkgMLNCkXRDaolr9vk%2Bg162YjUkkaMZqgCXS5G7K%2FeotA2R8LIpjoGvlAyDpEuffFlgHXB2w%2FpeF1m0bgq8hUR%2BgLfwAUyeWeOhK4j%2FRUwDrY5qYjtcVVoZ3%2FtD4BcLD58mo9fBgZh695%2FMHShT9tObaohozN3jDRSYgy7olyOPa7Cu9VfyiPoSUamlAaTTqipz6OjB5v1xDKg5JOZS8Sk34QzOns95z2plI4GLGkl0saq%2BdxrFOrIvzm32w0Fhn6HmdonqgC0ovsffRM3SuabybevHpMJj6tIoHq3r4x3kpAQwSYfOeLD1YAHDaYOz8%2FClM%2FwulapRrMaLsv9TdJJy9OCu9akYca8JoYgfaNLaTr8uBufccMiCFBbqvvU%2BwPiJwT3PPL%2FMjU1OSRNpQTQG9owlvs9teZNelI7LDk8QAtjXRvTxt8BGk%2B9%2BrhsA8sE4VK3crpEg9eE8c%2FOOgsUWe9%2BBqHg%2F9%2Bo%2Fou9%2FXgltr1d8olDMnQhsChjmJxZ4lTMJPQ3WkytiEU6c%2BW1nENnX2XNAo1G2YsutfFAaovepr7hBLk9mbMOOm%2BrLU4L720KfE%2FyxEOiUTCq7tnJBjqkATVUjzQ0hRdsxcXmyDEkCZ%2BpVFZUWJqiwGflJ3m2oJY1SVh28itVbYlrtv8wVneZ69KmwTAvFNr34B3i2bF0OUOfIQ%2Bo%2Btn9yaoK150LqtbpxybrLNjx5rrlDRfdAjtCssOYTAF%2Bow0s%2B5GSpWaPUilbi4pc3%2Bs8HMvPMVBds59QjJChDHFkaKlxmeu4ZbLPnDFTSc6netHuORELdpnDq6VzzF%2Ft&X-Amz-Signature=a2fd80157a50a598d17add20aafb4c4a4cd7cb9a222ca04ad38c3579fddb5031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDLXXFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78EdhOjgyxqskauCJX9GAdhtmWsbnl4ullpM0NRtl5wIhAPqScEoC4qAHdMZm0QFcd1ioB1ibDu0j3a8rSqTncOx4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoL3DDMEugfO7ivgkq3AMusnsmL7voM8ukhtZT%2BGYjeB0NQvYAMRLTbnojS%2FvzYSUXyefkgMLNCkXRDaolr9vk%2Bg162YjUkkaMZqgCXS5G7K%2FeotA2R8LIpjoGvlAyDpEuffFlgHXB2w%2FpeF1m0bgq8hUR%2BgLfwAUyeWeOhK4j%2FRUwDrY5qYjtcVVoZ3%2FtD4BcLD58mo9fBgZh695%2FMHShT9tObaohozN3jDRSYgy7olyOPa7Cu9VfyiPoSUamlAaTTqipz6OjB5v1xDKg5JOZS8Sk34QzOns95z2plI4GLGkl0saq%2BdxrFOrIvzm32w0Fhn6HmdonqgC0ovsffRM3SuabybevHpMJj6tIoHq3r4x3kpAQwSYfOeLD1YAHDaYOz8%2FClM%2FwulapRrMaLsv9TdJJy9OCu9akYca8JoYgfaNLaTr8uBufccMiCFBbqvvU%2BwPiJwT3PPL%2FMjU1OSRNpQTQG9owlvs9teZNelI7LDk8QAtjXRvTxt8BGk%2B9%2BrhsA8sE4VK3crpEg9eE8c%2FOOgsUWe9%2BBqHg%2F9%2Bo%2Fou9%2FXgltr1d8olDMnQhsChjmJxZ4lTMJPQ3WkytiEU6c%2BW1nENnX2XNAo1G2YsutfFAaovepr7hBLk9mbMOOm%2BrLU4L720KfE%2FyxEOiUTCq7tnJBjqkATVUjzQ0hRdsxcXmyDEkCZ%2BpVFZUWJqiwGflJ3m2oJY1SVh28itVbYlrtv8wVneZ69KmwTAvFNr34B3i2bF0OUOfIQ%2Bo%2Btn9yaoK150LqtbpxybrLNjx5rrlDRfdAjtCssOYTAF%2Bow0s%2B5GSpWaPUilbi4pc3%2Bs8HMvPMVBds59QjJChDHFkaKlxmeu4ZbLPnDFTSc6netHuORELdpnDq6VzzF%2Ft&X-Amz-Signature=d48301207ebc9d352888e2e464af7a921ea520b3353717de44f14112e79bd31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
