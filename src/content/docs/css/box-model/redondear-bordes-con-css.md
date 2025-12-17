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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWHTP4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPynSTUXQeDdjfHFRwj9O8kiHXl%2B85yY%2BrdglgBKZ94AiBHe5w2JnqKBCwyCCnHMEz5xgFSfbfSk3jNEY1WLS4xTSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmXy%2FBv2nOWeGwp8KtwDztX4RyFO46AKXISlctI5SHRMrXpJBBqo0OXjmUTE5Uqc%2FG6t6o%2FmlTOqg08iikqu08%2F3NConFP27AtwTvLVupEfXcxeRuF20v5auSfTm8QlpZJdzj1ZMOHhbE9RJPhRz6XSKQDdnnFigeXvS2S0ep3z4ed2bthTYb8lL58ld3%2BxvtVzaCG1wFgbozQrvazQ%2FbI3MWvuIjY42FbNFrxWOyUVawFQMnD171ih4punUwKIVqD0%2BXKxqkpKdVcCH57hfTigyYFA2RLkWDG8VESlehy9cG1fwGs6TT1RBqgMIpdvW96uzNjpfDCF3ByJTRRaK2Scw9dfdt4fAFEW%2Bo7rYMFHkrVIIph7eZiIbPMxi2p7kDhem1CyF%2FF5nTG2ghfY7z5HLkM4NQWT%2FkFGANOAmlOwTyBVNR73K0L2E2DzJWWCiWvnbwjfmxvRmiuKghn9dhg5W9U5eg9PKyrJk3eiGSAxJQlHRS1ZUS0G0H7GFMNNqxHXsW3CK9qaOlAzcoKX59UNXlwKDPfBqeBP3J8%2FLIgWyeun8FXtW228lp%2F%2BEPHadBHd3qo6lV3g2pELuNl2H6U6iGkVZvZq1ugEqkz0sdlGLqeLtWsQ5P6ulbUCNEQaFhH%2BjoKF9ZQ8hRgowtIGLygY6pgEQXK1Q%2F1C4TuQs4pVdyYgxPAjp3hm5GTrWTlB8UroIofLLfbZ40P%2Fo0ZkvFb7fhC5lN6rzarqlfgBt9s%2FMIyYFEe4rcOqGabs1%2BSBayvKGgypM6xZhAQ3lBuHLJSO%2BT8utSYr49j66rf5Ip2o048zdDkavqhvB5CftBZApT9U6EKkzsEoJ4O9EJtLnTqEVK8bCtTMvEF4ovVIVG95GNwn8IW6N8gx%2F&X-Amz-Signature=f396ef7cba39fc02a6b64de6989400e38c904be630dc6f3c8dbe0eb622a9cd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWHTP4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPynSTUXQeDdjfHFRwj9O8kiHXl%2B85yY%2BrdglgBKZ94AiBHe5w2JnqKBCwyCCnHMEz5xgFSfbfSk3jNEY1WLS4xTSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmXy%2FBv2nOWeGwp8KtwDztX4RyFO46AKXISlctI5SHRMrXpJBBqo0OXjmUTE5Uqc%2FG6t6o%2FmlTOqg08iikqu08%2F3NConFP27AtwTvLVupEfXcxeRuF20v5auSfTm8QlpZJdzj1ZMOHhbE9RJPhRz6XSKQDdnnFigeXvS2S0ep3z4ed2bthTYb8lL58ld3%2BxvtVzaCG1wFgbozQrvazQ%2FbI3MWvuIjY42FbNFrxWOyUVawFQMnD171ih4punUwKIVqD0%2BXKxqkpKdVcCH57hfTigyYFA2RLkWDG8VESlehy9cG1fwGs6TT1RBqgMIpdvW96uzNjpfDCF3ByJTRRaK2Scw9dfdt4fAFEW%2Bo7rYMFHkrVIIph7eZiIbPMxi2p7kDhem1CyF%2FF5nTG2ghfY7z5HLkM4NQWT%2FkFGANOAmlOwTyBVNR73K0L2E2DzJWWCiWvnbwjfmxvRmiuKghn9dhg5W9U5eg9PKyrJk3eiGSAxJQlHRS1ZUS0G0H7GFMNNqxHXsW3CK9qaOlAzcoKX59UNXlwKDPfBqeBP3J8%2FLIgWyeun8FXtW228lp%2F%2BEPHadBHd3qo6lV3g2pELuNl2H6U6iGkVZvZq1ugEqkz0sdlGLqeLtWsQ5P6ulbUCNEQaFhH%2BjoKF9ZQ8hRgowtIGLygY6pgEQXK1Q%2F1C4TuQs4pVdyYgxPAjp3hm5GTrWTlB8UroIofLLfbZ40P%2Fo0ZkvFb7fhC5lN6rzarqlfgBt9s%2FMIyYFEe4rcOqGabs1%2BSBayvKGgypM6xZhAQ3lBuHLJSO%2BT8utSYr49j66rf5Ip2o048zdDkavqhvB5CftBZApT9U6EKkzsEoJ4O9EJtLnTqEVK8bCtTMvEF4ovVIVG95GNwn8IW6N8gx%2F&X-Amz-Signature=e89e941c69fc9d5e634fda3d7ed4152bbab58d995bc9d706a2f1945931ac4c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
