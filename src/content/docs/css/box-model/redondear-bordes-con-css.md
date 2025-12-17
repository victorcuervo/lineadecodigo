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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3REBHS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHjPRVHiIt7qpaVnmlcp47P1K7RJIOgsEEE7dk5P26QIgD84zW8XaxFoBwIcT7HqzFNPLcie8IeNCB7i3%2F8F3o3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNZxM1SIwxUibgrj%2BCrcA9yPNjdkP8IRy9Rr8DTWwHAmZfrVpeXDHkQXlNETX9Bu0%2B3fWEJoKNO6dQ%2FXR3rh5tuqg%2FElKCAIHted2WgvnraAhQxsvIPtIN4BP828R3RtZceJ%2BN2tld%2FAE8dr2KZdV6Cy5bpf6hJqn45PA8qh69BqNqvVsrcmAHTZ%2BXCBxUBQJstMTtsMFFRNHFoMYy8lGguZX6EUzNeSM%2FuQ8kz%2FVqpspEzMRB8%2Fay7jm6GGHoFxMa%2Bzg%2FBrzCgNmMJTb4nrVa1ViTCQj5zNloTBRncmwuJSkNvCkePDpay%2Fgnv2%2BMQz%2FzACG65t3bDHXqN4Np49ARtT1VR1tEDS137vy4adJNSsafggSaS8Pvpi40gM0wGv0l1EPnQukupaa2vVk%2B%2BCzvVyMHeQvFGuZpkjtfggtsmg%2BxQ9PuHxxSto1mPzFTybznwxgoY5r45ZxlRuJyJQumYiMMnlERNCUvA%2FrYEFMVGMuDQlJroi%2BeV2ujhlPb6%2BCEqFdLrPGAgJhhuqWv%2Fb3g%2FjnYgulrlCaMIjLfAxj3PyoP2Gsr%2Fztm1v%2BuX5tFTAuOafOoZkN9wySddVFDzP6fjuqWSFg4pImdH44yvj7QGn8%2BGEoCwD0SM8e5PF7bOGKHpeCFSdwx18ZA2RMJr7h8oGOqUBegEL0Rk0aeiNl73ssu8ionlhGjM70i8GYCredrxo%2B1rieV6HZlIhQVxVlGh%2BzWKharvPS179dn%2FwKY%2FXfG2tUV6k64EDDhHPlxreE%2Basc7A70UQJAi%2Br9gDFQRsUEz6YNdVD4LoT7g2hLGVtpHzyqWwk5uiOGfhGlBkr0LIvDdArMIrrBSId79auB6I1mjBVsyYrY7WXPGK7S216TPyDjiJsWi9D&X-Amz-Signature=c718e6a7e74c80a738b5bc5d7bc16d796f8986356186efe1f4535ac16d993498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3REBHS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHjPRVHiIt7qpaVnmlcp47P1K7RJIOgsEEE7dk5P26QIgD84zW8XaxFoBwIcT7HqzFNPLcie8IeNCB7i3%2F8F3o3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNZxM1SIwxUibgrj%2BCrcA9yPNjdkP8IRy9Rr8DTWwHAmZfrVpeXDHkQXlNETX9Bu0%2B3fWEJoKNO6dQ%2FXR3rh5tuqg%2FElKCAIHted2WgvnraAhQxsvIPtIN4BP828R3RtZceJ%2BN2tld%2FAE8dr2KZdV6Cy5bpf6hJqn45PA8qh69BqNqvVsrcmAHTZ%2BXCBxUBQJstMTtsMFFRNHFoMYy8lGguZX6EUzNeSM%2FuQ8kz%2FVqpspEzMRB8%2Fay7jm6GGHoFxMa%2Bzg%2FBrzCgNmMJTb4nrVa1ViTCQj5zNloTBRncmwuJSkNvCkePDpay%2Fgnv2%2BMQz%2FzACG65t3bDHXqN4Np49ARtT1VR1tEDS137vy4adJNSsafggSaS8Pvpi40gM0wGv0l1EPnQukupaa2vVk%2B%2BCzvVyMHeQvFGuZpkjtfggtsmg%2BxQ9PuHxxSto1mPzFTybznwxgoY5r45ZxlRuJyJQumYiMMnlERNCUvA%2FrYEFMVGMuDQlJroi%2BeV2ujhlPb6%2BCEqFdLrPGAgJhhuqWv%2Fb3g%2FjnYgulrlCaMIjLfAxj3PyoP2Gsr%2Fztm1v%2BuX5tFTAuOafOoZkN9wySddVFDzP6fjuqWSFg4pImdH44yvj7QGn8%2BGEoCwD0SM8e5PF7bOGKHpeCFSdwx18ZA2RMJr7h8oGOqUBegEL0Rk0aeiNl73ssu8ionlhGjM70i8GYCredrxo%2B1rieV6HZlIhQVxVlGh%2BzWKharvPS179dn%2FwKY%2FXfG2tUV6k64EDDhHPlxreE%2Basc7A70UQJAi%2Br9gDFQRsUEz6YNdVD4LoT7g2hLGVtpHzyqWwk5uiOGfhGlBkr0LIvDdArMIrrBSId79auB6I1mjBVsyYrY7WXPGK7S216TPyDjiJsWi9D&X-Amz-Signature=b8de0698e8633f485e54c74f19152d736a4b2db6d5a05c6986e67c70a2ee650c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
