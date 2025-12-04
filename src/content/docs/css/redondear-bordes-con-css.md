---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43VYNP5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGw%2BoYrPc7aNCcXZV0T9%2BsgyG9arQdo6g9W6inXgq8qEAiEAqAhp5%2FpdvXY%2BPsOkkFMyNPyljvqKIIT%2FvyQRekx4pLgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFLumR7GOC%2F%2BXaHbDircA8yhL37%2B%2BdXgYkWGVaJVjHbADTIMIshr7AUHk0XtjFp5JYc26x9kOEjCSvjkqgcbTGPJBVFGFzxA%2FoeGiPGKvNsKkiXIMvMWIb%2BfNYGFyRl7a9mGJ8D71%2Fxh8Yit64wvkn%2F%2FWpflOmO7tL1fNquI1cVhvX5ypAuVbYhUMOfgpDt47LIKWA0vDJ4QjXwdk6gXLEOTr48RUBkg2Dd%2B8HELMMTlFvEZdjgtgqsQkbI%2BxYDYf2p34VvxyX%2BZs9%2FF%2FEUhYSzDHxJUjQt51MUcD6taYin89Tw3UeYCc3O%2F3xmKVprtYCIKzuo8h9AL%2F9Bo4gJ6CDaY89hTh%2BcVbFQs3P84qucWXmI1ORn3WZAuaTYXhzBtY52u2aOeLdR9F4agZDTk%2FxSmRGcP15nYkCuwICeTp4mE%2BMoI8%2BPY5FzTlvBCPmw5ViNeRPEumUo4GN5MC5hIjCVIodmGgU8MgcRmnSGk5HrUxNLx7yKYcKEjlu0Dm27%2B1u%2FvDdZmtR88CMwsZAcMWkCP0t7lB6WukY6KHWg3WspuIMLS%2F%2BNHDNArAv4TSjAmnnYqI6laSmJaKL96SCVxny0%2Bl4j5ANlXWecmLlr2hIlMEn%2BrwGemz3QvdYKvyQkH5ALLizX%2B6LTKlai6MMG1w8kGOqUByOayHHlotrOc%2BFRbDgTU7msoiNLxAbbLjxRZaiZCua8kRsU7aAuNA%2FxmuTV%2F3i8JfAJvVaQwLkEox4WBx6iXp47fKEbJz7cJuiDQd97cY9YkPbyeqvXzRzr7w6m61xFAGUJndHDR1bmgDzfuC6vCQqbPLXYCUyVJWsq3lF6iL6H1p1MXcFAK4b9pUyMYG%2FT5z4SkvA5Z11gcP3JvLB3mhCC7mFPS&X-Amz-Signature=07733c4142868cce15d684a4b2e18f4f9743711b5fe78c1e33bbb190c4b226b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43VYNP5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGw%2BoYrPc7aNCcXZV0T9%2BsgyG9arQdo6g9W6inXgq8qEAiEAqAhp5%2FpdvXY%2BPsOkkFMyNPyljvqKIIT%2FvyQRekx4pLgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFLumR7GOC%2F%2BXaHbDircA8yhL37%2B%2BdXgYkWGVaJVjHbADTIMIshr7AUHk0XtjFp5JYc26x9kOEjCSvjkqgcbTGPJBVFGFzxA%2FoeGiPGKvNsKkiXIMvMWIb%2BfNYGFyRl7a9mGJ8D71%2Fxh8Yit64wvkn%2F%2FWpflOmO7tL1fNquI1cVhvX5ypAuVbYhUMOfgpDt47LIKWA0vDJ4QjXwdk6gXLEOTr48RUBkg2Dd%2B8HELMMTlFvEZdjgtgqsQkbI%2BxYDYf2p34VvxyX%2BZs9%2FF%2FEUhYSzDHxJUjQt51MUcD6taYin89Tw3UeYCc3O%2F3xmKVprtYCIKzuo8h9AL%2F9Bo4gJ6CDaY89hTh%2BcVbFQs3P84qucWXmI1ORn3WZAuaTYXhzBtY52u2aOeLdR9F4agZDTk%2FxSmRGcP15nYkCuwICeTp4mE%2BMoI8%2BPY5FzTlvBCPmw5ViNeRPEumUo4GN5MC5hIjCVIodmGgU8MgcRmnSGk5HrUxNLx7yKYcKEjlu0Dm27%2B1u%2FvDdZmtR88CMwsZAcMWkCP0t7lB6WukY6KHWg3WspuIMLS%2F%2BNHDNArAv4TSjAmnnYqI6laSmJaKL96SCVxny0%2Bl4j5ANlXWecmLlr2hIlMEn%2BrwGemz3QvdYKvyQkH5ALLizX%2B6LTKlai6MMG1w8kGOqUByOayHHlotrOc%2BFRbDgTU7msoiNLxAbbLjxRZaiZCua8kRsU7aAuNA%2FxmuTV%2F3i8JfAJvVaQwLkEox4WBx6iXp47fKEbJz7cJuiDQd97cY9YkPbyeqvXzRzr7w6m61xFAGUJndHDR1bmgDzfuC6vCQqbPLXYCUyVJWsq3lF6iL6H1p1MXcFAK4b9pUyMYG%2FT5z4SkvA5Z11gcP3JvLB3mhCC7mFPS&X-Amz-Signature=6fa8e5c79f958efa853ee18746e7e5f9c88af0fcf57667066b426e3a064870a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
