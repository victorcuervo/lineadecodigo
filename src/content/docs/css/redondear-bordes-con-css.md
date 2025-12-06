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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKNMZKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5sKCUsnqGgxplPTTCnui8nic5lS1M3YmmgRvulCVNAiBparaROrjs0de9VDjbkDQsL6cLB5ma6IxSY7wl6Wz70yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BYJNa0nTfDxIQyDKtwD9TDYOwrS%2FQ%2BSGU3UPItyFWPa8dWIuz%2FZV8Gs%2BUuBys6IbvfUEyNXckcHdnkxtWmNuyuDtGm%2BF9jV8p4Ku4OGkNopZaaG05qzNVwnTt1GJydiPSt%2BtVgq14WsAYa2iW2aRU7%2FQOhO695XPItH7TG2jPUncRUkMZ5twEkkQsjSUKfpDQq0uigwuA8QGqicjKzI09DTCaAa7k4x8dHGuRAOBRHSMsiqkTgzN9D4Rd7AJbD4wXZdgXkqGvrIQ%2BNVMTrz5N216%2FpBBfCYUrbp2%2B1Ycu3ldR3hOujToGwYVlaxlKoDX%2Bpj5EvTKLKK8fFBY9J3YQpLe23kvgqRH2ic%2Fju1lZRce6C85%2FKcL2M2AfGdvsen0M%2FqBR5shIbnvNBSnqjTHmkfZEoRu5veCvpmYcE%2FFuEEznk9hUE7RMzzkOc959WfiFXCukSTqtY1QsWX34odDpoEMkuSUeXf1%2FHq2fUsXXHamosi5gysSmpGhqI%2BjNQxioXbSJA3rGLhKcdIvzjtRD1Yg7u03Kk%2FfytTqWHXUMI%2BdDOTYf1Pwq5J0Kt6lqSCd6VUk58DRIcAOxayGO7ywchJMBYAlfOJAJqbs1Qcyo8TFVj6kpl9toy5dVf7SoyDgb74MqPCnV2gZQ8wjf7SyQY6pgGKDq74ntI6VQqJ%2BIRDBXlhFcKHNvDHLp%2BkfnE8fzWwcyP5LXfEyMRFIZSVVcEn1t8IyvNVfPOxS92XrerQdf51VVepkQm%2FnkFwxPyuf%2F%2B7CK9PY%2BKzH%2F3Bk3o3x9MI4lEmgs2fU1LU8AA0CLL2yQpcVJdtR%2B6Z9%2FjXZLj3WIM88M6Kv%2BizOYe2cd8zTuS2VqYAY5L9bFjTygl7ukxqlU4iabf%2BtgNs&X-Amz-Signature=3317ec65c7ac83fc60ae417e81d741d6de2ad6001948010f211f247bb4aedc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKNMZKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5sKCUsnqGgxplPTTCnui8nic5lS1M3YmmgRvulCVNAiBparaROrjs0de9VDjbkDQsL6cLB5ma6IxSY7wl6Wz70yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BYJNa0nTfDxIQyDKtwD9TDYOwrS%2FQ%2BSGU3UPItyFWPa8dWIuz%2FZV8Gs%2BUuBys6IbvfUEyNXckcHdnkxtWmNuyuDtGm%2BF9jV8p4Ku4OGkNopZaaG05qzNVwnTt1GJydiPSt%2BtVgq14WsAYa2iW2aRU7%2FQOhO695XPItH7TG2jPUncRUkMZ5twEkkQsjSUKfpDQq0uigwuA8QGqicjKzI09DTCaAa7k4x8dHGuRAOBRHSMsiqkTgzN9D4Rd7AJbD4wXZdgXkqGvrIQ%2BNVMTrz5N216%2FpBBfCYUrbp2%2B1Ycu3ldR3hOujToGwYVlaxlKoDX%2Bpj5EvTKLKK8fFBY9J3YQpLe23kvgqRH2ic%2Fju1lZRce6C85%2FKcL2M2AfGdvsen0M%2FqBR5shIbnvNBSnqjTHmkfZEoRu5veCvpmYcE%2FFuEEznk9hUE7RMzzkOc959WfiFXCukSTqtY1QsWX34odDpoEMkuSUeXf1%2FHq2fUsXXHamosi5gysSmpGhqI%2BjNQxioXbSJA3rGLhKcdIvzjtRD1Yg7u03Kk%2FfytTqWHXUMI%2BdDOTYf1Pwq5J0Kt6lqSCd6VUk58DRIcAOxayGO7ywchJMBYAlfOJAJqbs1Qcyo8TFVj6kpl9toy5dVf7SoyDgb74MqPCnV2gZQ8wjf7SyQY6pgGKDq74ntI6VQqJ%2BIRDBXlhFcKHNvDHLp%2BkfnE8fzWwcyP5LXfEyMRFIZSVVcEn1t8IyvNVfPOxS92XrerQdf51VVepkQm%2FnkFwxPyuf%2F%2B7CK9PY%2BKzH%2F3Bk3o3x9MI4lEmgs2fU1LU8AA0CLL2yQpcVJdtR%2B6Z9%2FjXZLj3WIM88M6Kv%2BizOYe2cd8zTuS2VqYAY5L9bFjTygl7ukxqlU4iabf%2BtgNs&X-Amz-Signature=685ed82820ab9375cd24a94b71737b60da181d2f3b4ad6fb58cf0c483415877d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
