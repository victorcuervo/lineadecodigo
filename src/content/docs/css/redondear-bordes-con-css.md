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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYSCH6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQa7NPtSf4FLgI9UtQjC72s9xuKY0eX1yx8Wna8NEcrAiEAiKZy7cTP9le%2FQ6NCbnM5kL%2FbDB2p%2Ff0qJbNWKsSCm6Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLTMkUkgKPqHr8BjSrcA9BQ4XA62JOaaSbUwh89eGP7ucDft8D6TuHcSiyPkBqF4RTou2o64Ug8nJDleZ88pGE%2FbtjiBzzrWcV6Zp8tstkwGd9QVbYzFpe%2BY8XX7Ze%2By1L3feZ29WM9o0FHOrJkTtc%2FSIekco2QSpNUUHd4MPd0El8VEria7kgqn3DW5B55%2Fto5QuyBRhyehkSXr9iIpFRW49Puo8sTQLCqaYdDv2tyyM%2B8XoJIka15hI1I%2BkM44aia1ezL6pFhZ215vDkYYzNDCok1QbSb0kkAhFYEscoRe6IyXYx922ZrKmM6pBENZiaYUXfh4YoLUIHfmOVHN6cfTSH7bXHWLNe5BRlrJSLQ%2BssXCStEUk1wnocRTcBQjzE1v%2BroTan%2FDH2hmkFC7uDkXPNsxPNh1q8iA2RqFDquX9BQjsSA9eqCii6YVn698KNKtXKHq6IJP2mepKuOyVwYfLvc9uOswnRFtipbWtRDQYsXrxndKPC3EQJV6GYJYqP%2FcFn1yGtUa9iZOG13XYGeYBMZufOf6791VQlRHJWV4eUz6p4bRoQi%2BR4BWvVwpwEhPHSe8x5qBW4Msxyd%2FVkDmiVz7PXRT0b9LdFMxSxOOL2r2ge6wgTKypw0yomxLv2rAsN2RPZWB%2BffMJT4y8kGOqUBQpdiV6%2FPhKwSYXWfxnPW9fU7WGe5bSaVSWkYahKBGy0%2FF6e1MdLf6ZIw0FbhZqcUrhYMn24ou2TFz8KUUV4BmqMoV58kZx1P8L85XcwQMuzXMu6etc%2BMRGxwfWR8SiBbW%2FEnnYSTosq3lkcndK3dcWXmJw7MO8tYYGCROz8rVL0NymBIzg%2Bt5EmEhcwgjFVfoejF2tlC7XX%2FZh3WPVZrvTF6H4nL&X-Amz-Signature=38a101d12a1c20b0922c4b7368b804dd114b0f6cafc20266846253ce4c26fc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYSCH6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQa7NPtSf4FLgI9UtQjC72s9xuKY0eX1yx8Wna8NEcrAiEAiKZy7cTP9le%2FQ6NCbnM5kL%2FbDB2p%2Ff0qJbNWKsSCm6Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLTMkUkgKPqHr8BjSrcA9BQ4XA62JOaaSbUwh89eGP7ucDft8D6TuHcSiyPkBqF4RTou2o64Ug8nJDleZ88pGE%2FbtjiBzzrWcV6Zp8tstkwGd9QVbYzFpe%2BY8XX7Ze%2By1L3feZ29WM9o0FHOrJkTtc%2FSIekco2QSpNUUHd4MPd0El8VEria7kgqn3DW5B55%2Fto5QuyBRhyehkSXr9iIpFRW49Puo8sTQLCqaYdDv2tyyM%2B8XoJIka15hI1I%2BkM44aia1ezL6pFhZ215vDkYYzNDCok1QbSb0kkAhFYEscoRe6IyXYx922ZrKmM6pBENZiaYUXfh4YoLUIHfmOVHN6cfTSH7bXHWLNe5BRlrJSLQ%2BssXCStEUk1wnocRTcBQjzE1v%2BroTan%2FDH2hmkFC7uDkXPNsxPNh1q8iA2RqFDquX9BQjsSA9eqCii6YVn698KNKtXKHq6IJP2mepKuOyVwYfLvc9uOswnRFtipbWtRDQYsXrxndKPC3EQJV6GYJYqP%2FcFn1yGtUa9iZOG13XYGeYBMZufOf6791VQlRHJWV4eUz6p4bRoQi%2BR4BWvVwpwEhPHSe8x5qBW4Msxyd%2FVkDmiVz7PXRT0b9LdFMxSxOOL2r2ge6wgTKypw0yomxLv2rAsN2RPZWB%2BffMJT4y8kGOqUBQpdiV6%2FPhKwSYXWfxnPW9fU7WGe5bSaVSWkYahKBGy0%2FF6e1MdLf6ZIw0FbhZqcUrhYMn24ou2TFz8KUUV4BmqMoV58kZx1P8L85XcwQMuzXMu6etc%2BMRGxwfWR8SiBbW%2FEnnYSTosq3lkcndK3dcWXmJw7MO8tYYGCROz8rVL0NymBIzg%2Bt5EmEhcwgjFVfoejF2tlC7XX%2FZh3WPVZrvTF6H4nL&X-Amz-Signature=8b527415144a85fd256f8ca8e59e73f6c2f17d188805acdd75f64d6cb2209e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
