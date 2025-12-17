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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQOC5K4A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTOhElx1S%2Fn5M7eXPlIn2Rp8iCLlqAeRx36UTaiHZh4QIgXsc%2BJZxltzcPW4ByAgwl5%2FdYmlUaoTHxdLlBY7Wz4kEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFK6CdHtgt%2BUnrGY%2FCrcA2SNneZj05ybGwg404YDDfsLpVwubPuZIUugmCaX%2FH5EFmphqTY6OiPCoZsJ1cAUVUfdXJahQrHeEOaULRCqxkI%2FWfTfxt0LrzncnZd%2Bw%2BhUiYB8z7ejD5pV2q2sZuNGidBuUdGtmZXiJMWvPg2S62Qsl8C5b3MN94WrNtfTQ8ZCg6pRVQjMQa3S%2FR1XyN7ubStrRuKolA5GGkDDbVtc1elbdFhXt0TGDVtjboLkds9XTZwxwJlj0PsNPQw4%2BAjgKgeLS6JLl%2BtW6eRG2o3Py04mXD322A0VA1U%2BYdHsU3owAI7kGKfuACpmI09z8T1jx946WCaDNvAdvs7KMslMLorV7nPiABFXvzpdnYLub7uWqo6GVtI%2BQa3vJelXLul%2BAXHd32XdZuzyJ1ciVWQ6JHMWJJ01HOWKvQNWgyWR8zd%2FbW0w7qCsHLLiVqXv7x1BI5pUOJwc6Cq1UsuCc8rls3m8ryQ0HvfognyJ8EKdRtuwB6g6GDCA566V69rVoboki1h7yYtIgSbASaY8zLJn3p7H8InQgD4Nx%2BEKDvp5jg4IG6i0qa7tMYdEdqwpJXv%2BgHlBsthVlweJIwGboQJzfL%2BpSTEibWaXNg1ay12Gx8o7kozisWanBkBNFqKWMJ%2B4icoGOqUBAUJyiYCXN73PuQlgW%2Bmt9M99Ffy%2F2CrLYXqL1KK3FoI15QR9zUxNWCmsNflpflEuH1UHXt1qRtQ4UjCM3%2FbBVJ9JJY50ckgst6YiCy%2BhN2rCz0L0q99cy3xAm5nKVGBnyLBgxrnxx9CEWWmMN7Hom%2FDpLPnR4C773FF%2Bd%2F8QG2VVdwRSQ7RLVVYupzO8nBL0BDUvKRO7NHiVlyNaADFlW0%2FUr8Q%2F&X-Amz-Signature=6202cab713ee99eef183546efebf6717ca8e043d831c514990b894c9d7bcfe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQOC5K4A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTOhElx1S%2Fn5M7eXPlIn2Rp8iCLlqAeRx36UTaiHZh4QIgXsc%2BJZxltzcPW4ByAgwl5%2FdYmlUaoTHxdLlBY7Wz4kEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFK6CdHtgt%2BUnrGY%2FCrcA2SNneZj05ybGwg404YDDfsLpVwubPuZIUugmCaX%2FH5EFmphqTY6OiPCoZsJ1cAUVUfdXJahQrHeEOaULRCqxkI%2FWfTfxt0LrzncnZd%2Bw%2BhUiYB8z7ejD5pV2q2sZuNGidBuUdGtmZXiJMWvPg2S62Qsl8C5b3MN94WrNtfTQ8ZCg6pRVQjMQa3S%2FR1XyN7ubStrRuKolA5GGkDDbVtc1elbdFhXt0TGDVtjboLkds9XTZwxwJlj0PsNPQw4%2BAjgKgeLS6JLl%2BtW6eRG2o3Py04mXD322A0VA1U%2BYdHsU3owAI7kGKfuACpmI09z8T1jx946WCaDNvAdvs7KMslMLorV7nPiABFXvzpdnYLub7uWqo6GVtI%2BQa3vJelXLul%2BAXHd32XdZuzyJ1ciVWQ6JHMWJJ01HOWKvQNWgyWR8zd%2FbW0w7qCsHLLiVqXv7x1BI5pUOJwc6Cq1UsuCc8rls3m8ryQ0HvfognyJ8EKdRtuwB6g6GDCA566V69rVoboki1h7yYtIgSbASaY8zLJn3p7H8InQgD4Nx%2BEKDvp5jg4IG6i0qa7tMYdEdqwpJXv%2BgHlBsthVlweJIwGboQJzfL%2BpSTEibWaXNg1ay12Gx8o7kozisWanBkBNFqKWMJ%2B4icoGOqUBAUJyiYCXN73PuQlgW%2Bmt9M99Ffy%2F2CrLYXqL1KK3FoI15QR9zUxNWCmsNflpflEuH1UHXt1qRtQ4UjCM3%2FbBVJ9JJY50ckgst6YiCy%2BhN2rCz0L0q99cy3xAm5nKVGBnyLBgxrnxx9CEWWmMN7Hom%2FDpLPnR4C773FF%2Bd%2F8QG2VVdwRSQ7RLVVYupzO8nBL0BDUvKRO7NHiVlyNaADFlW0%2FUr8Q%2F&X-Amz-Signature=2f240d0de48baa0fa69241d9548dee78c67260ba5acab6556db870765ce43cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
