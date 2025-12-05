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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZEBUP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTLLuQgFjWf%2F98uzjVkcvOpwpmRsHuNLYh%2BQXzLSRnBAIhANas%2BSJd%2FDMl3DkzFvrqoQ%2BRQbSx0sJGNjGXJmKtjNA1Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxL8SNA%2B6%2FjobcX%2FjYq3AO5jaGIdyyWLRze%2BQ44kAqEZpcP%2Bryx28mu4o0nWyP7BsZ0qDdWIdy8GrnX69%2BpsI2EKZgj2Ge1XVXw7pA%2B4lglJQDNe%2BhHnw9qhPgbKpLl7DjRL9BqbhWbTJ5VSS78IboiD88gnAuEHLfLidb0ZUvK49AUORBg5UrhUmakCzGZYtHx8LI7RK8g3UCQ6Qdam%2BXLpBWHuuDupwniKRUXVbRRVfs%2Fex8As7j36WMHESPC%2BzfUKXyhZoMzk9BeWtiujzbW9HQoIbxX2OBHVEUMxHHVvtiWQmGxmhNAMHsZOpD%2FUI%2FmSWRPxK%2Bpnb5CxbhKgND7h41A30hD3MTnEJa4GTNesI%2BYw5qNOe%2BjPPQh8ukr3GSyxmd5lG3xFW1l%2BRyXQ9pASaMHipNkc3ndFCboIB3ao5yFpe8AySjwqlTqNe4thF2zxWwkQGlIzA%2B0HDg5LsKpGujCGLm9%2FDzaJk7h0XKnZiFW%2BbDu0yArGBLXfemTmm8lWh5a0ggJYyWNxcbfQ2PwhnCYt5wX5mlSWTGciaMbhnGcGCZgWrbbTCI2BYQuKm7%2BnGeAuVG%2B6XSvtlJmH2%2FDz1uptqg3A%2F%2BSNBEE%2BTDARS9njoXREeV5KzMfkhVVBiMlZT8tAXrdSzhQWzDvls3JBjqkAYcqcAZ3HNYFFZCJjjpx2p9UbAIvM%2FphCbD6nA9PhlPTdsyn4f6vpTpXZ1CSZnkOGWQ4ebKK6cJmos8%2FfR%2Bz%2FxdXnNUZqKuugorMI%2B1KCPCYAnvot386uPkprFxiLDKGpaAF4smUOO2%2FYYK%2FAHU4gLYj5G0xwqPaxgLSMIzWxX2fMvJ%2FPQ0fuCMZeP1VioP7%2BiYTB5Yyfx5iCupzGsuZGuYD2pBF&X-Amz-Signature=d2024fa747fbf1387309cf714ccd3d94ae2ded1bfc4ef5611d6287eb2e37191a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZEBUP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTLLuQgFjWf%2F98uzjVkcvOpwpmRsHuNLYh%2BQXzLSRnBAIhANas%2BSJd%2FDMl3DkzFvrqoQ%2BRQbSx0sJGNjGXJmKtjNA1Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxL8SNA%2B6%2FjobcX%2FjYq3AO5jaGIdyyWLRze%2BQ44kAqEZpcP%2Bryx28mu4o0nWyP7BsZ0qDdWIdy8GrnX69%2BpsI2EKZgj2Ge1XVXw7pA%2B4lglJQDNe%2BhHnw9qhPgbKpLl7DjRL9BqbhWbTJ5VSS78IboiD88gnAuEHLfLidb0ZUvK49AUORBg5UrhUmakCzGZYtHx8LI7RK8g3UCQ6Qdam%2BXLpBWHuuDupwniKRUXVbRRVfs%2Fex8As7j36WMHESPC%2BzfUKXyhZoMzk9BeWtiujzbW9HQoIbxX2OBHVEUMxHHVvtiWQmGxmhNAMHsZOpD%2FUI%2FmSWRPxK%2Bpnb5CxbhKgND7h41A30hD3MTnEJa4GTNesI%2BYw5qNOe%2BjPPQh8ukr3GSyxmd5lG3xFW1l%2BRyXQ9pASaMHipNkc3ndFCboIB3ao5yFpe8AySjwqlTqNe4thF2zxWwkQGlIzA%2B0HDg5LsKpGujCGLm9%2FDzaJk7h0XKnZiFW%2BbDu0yArGBLXfemTmm8lWh5a0ggJYyWNxcbfQ2PwhnCYt5wX5mlSWTGciaMbhnGcGCZgWrbbTCI2BYQuKm7%2BnGeAuVG%2B6XSvtlJmH2%2FDz1uptqg3A%2F%2BSNBEE%2BTDARS9njoXREeV5KzMfkhVVBiMlZT8tAXrdSzhQWzDvls3JBjqkAYcqcAZ3HNYFFZCJjjpx2p9UbAIvM%2FphCbD6nA9PhlPTdsyn4f6vpTpXZ1CSZnkOGWQ4ebKK6cJmos8%2FfR%2Bz%2FxdXnNUZqKuugorMI%2B1KCPCYAnvot386uPkprFxiLDKGpaAF4smUOO2%2FYYK%2FAHU4gLYj5G0xwqPaxgLSMIzWxX2fMvJ%2FPQ0fuCMZeP1VioP7%2BiYTB5Yyfx5iCupzGsuZGuYD2pBF&X-Amz-Signature=bbbefd09c8480af5176052c90978ac29761a33e424a7135fd67fc3bc6820b393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
