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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSXFODIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgKOttoXY7%2FVq39LySqQnPeHCuY3AMPAD%2BrVygY2%2Ff%2FAiEAs5pUgGd137npIZyEECAREClioPoFDeKvAyR3spTolRYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF2aBu2cYKYqunDlJyrcA2sCzBwEShg4bme1nY3ojl%2BqxaKZsRG%2F7G1N4YrmI%2FzFv%2FW1wk2waVur1dkiQk4q3d3dwwEhQOV5hx7e1mWKN4fG7DBTtUNJERHLR4Mc2%2BvyJE1qALQHPUdaONXk%2BmRUUDyq%2Bl1CbaFb22YMUgxiNB7vJ0DNta97cDlxaJa4qSl1%2Bbhm9shoOJqXd4IfoIP%2B6ySX1rhvljAxqCc37bEKkVYDbrnIj%2Fl7CJAbHoAQ0lJyfCHoLPxcleUitMbZ%2Bw23uwjQGomv%2FSFMZU7B%2FZMaldfSs2KKEhxvSgQrkBBzRoGvoii%2BxliiOeuLpwpxoGuNOlNeviu7c6NuE0ytvLpGu0I648iQaV7pVELWwP90jQJS4pFQ0sM3y7Hx7YLzUUFnBDLXzxo34HOxb1FHtRDZve0UVbP8n%2BDidLEgh8qG%2BE0aGGLFbWx%2FipTw6V4aGrImMRy6BGx2Kv93ki72v9ujq6MNahwGTEvoHtNjKuzsL8Q%2B%2FsxNy3gzPuiLwzxp6NgZOIgiWj%2Bfx%2B5mPfTpLjLuDlWsX6QenkoePftHBaSc1UJvvjJGNa54Dm7pS8ptYCeCB86lxAOKuJV9%2BLP0ZbvXmOVgW5jgFlw5DmHD2Xpxeo982n6LTiZ0RciNTl37MLOvyckGOqUBKNK%2F%2Fjx0aAm9sszWIA5eT1QpC%2B1NJwG6%2FovkTY%2FdXqPwaQG7aeyIkMF3627sGPM6VQuP5lkrTvOarkr8AJgiOe2Sv2jORbARMTuiR1B3El6oOKW296BJZDJhk8kQWmS6K%2FCZPVpUUtsnzC46tLg3ATKyD2F6kWGzWH5t8hd9par1to15Y6mOR7ggHt4xLhdkyx3AD7YYzBUWCBm29vh4Aj7Ug708&X-Amz-Signature=2a140a5ad9046f801c14dfe0a7c200597f44727adbcc936667039263dc9439a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSXFODIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgKOttoXY7%2FVq39LySqQnPeHCuY3AMPAD%2BrVygY2%2Ff%2FAiEAs5pUgGd137npIZyEECAREClioPoFDeKvAyR3spTolRYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF2aBu2cYKYqunDlJyrcA2sCzBwEShg4bme1nY3ojl%2BqxaKZsRG%2F7G1N4YrmI%2FzFv%2FW1wk2waVur1dkiQk4q3d3dwwEhQOV5hx7e1mWKN4fG7DBTtUNJERHLR4Mc2%2BvyJE1qALQHPUdaONXk%2BmRUUDyq%2Bl1CbaFb22YMUgxiNB7vJ0DNta97cDlxaJa4qSl1%2Bbhm9shoOJqXd4IfoIP%2B6ySX1rhvljAxqCc37bEKkVYDbrnIj%2Fl7CJAbHoAQ0lJyfCHoLPxcleUitMbZ%2Bw23uwjQGomv%2FSFMZU7B%2FZMaldfSs2KKEhxvSgQrkBBzRoGvoii%2BxliiOeuLpwpxoGuNOlNeviu7c6NuE0ytvLpGu0I648iQaV7pVELWwP90jQJS4pFQ0sM3y7Hx7YLzUUFnBDLXzxo34HOxb1FHtRDZve0UVbP8n%2BDidLEgh8qG%2BE0aGGLFbWx%2FipTw6V4aGrImMRy6BGx2Kv93ki72v9ujq6MNahwGTEvoHtNjKuzsL8Q%2B%2FsxNy3gzPuiLwzxp6NgZOIgiWj%2Bfx%2B5mPfTpLjLuDlWsX6QenkoePftHBaSc1UJvvjJGNa54Dm7pS8ptYCeCB86lxAOKuJV9%2BLP0ZbvXmOVgW5jgFlw5DmHD2Xpxeo982n6LTiZ0RciNTl37MLOvyckGOqUBKNK%2F%2Fjx0aAm9sszWIA5eT1QpC%2B1NJwG6%2FovkTY%2FdXqPwaQG7aeyIkMF3627sGPM6VQuP5lkrTvOarkr8AJgiOe2Sv2jORbARMTuiR1B3El6oOKW296BJZDJhk8kQWmS6K%2FCZPVpUUtsnzC46tLg3ATKyD2F6kWGzWH5t8hd9par1to15Y6mOR7ggHt4xLhdkyx3AD7YYzBUWCBm29vh4Aj7Ug708&X-Amz-Signature=ca06145d019639b9f9cf404a23973af593eae4bc2484780e361f36e6dc939051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
