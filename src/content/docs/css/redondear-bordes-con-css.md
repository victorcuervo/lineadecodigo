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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNRX3YC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDzqFeOO8h4spfVXzhwEIB7HoXWwnpKDV3wMt9du%2BM7TAIhAJBGpJ6TJMLo0sh3yu%2Bd7SmtZio6cOdZLNpADBs0z%2BP6Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxRgMA4XohVCBtQvUEq3APuwy8i9s4rqivSbgsDEqEqBc2bBwSObLmnwB09xZRTiusr6UARBolaokflQFi3bLJfPCIQ%2FVkITrRocNH%2BXkReQ4Yr4a9UOLcS%2Fk4pV4W4WSj3cgqQUT5ToTTd2GvGMi7aMScKGEvnTAx8bXtMVelZNrRJg6TunbQT8Fu3pDPCjPQaybwfsZSNZgqn68dG4SJV57Pt791dF8DVkrFLMgbXzivcHm3PeMucydZacTF9zGJO2ERrGugmLXkoRamGRPDzyXyD4kIvwPt4D3REbYNcBPUWQ2MkbLiDXyNeVwEtAzUJvGaASxkKhke2BW%2FcQjohd3wwQ%2FNQ0eHtT2hgvTIwvSGd3NkDJSUp9d%2BqQww43PHDpYTr%2Fom%2B2l1PLsdSL6Mu3t0M2Ptc94Z%2FOfLiun22cSvKhKTvxXBJgXRaIheZFq%2FuiH3r3VZaEWg7WXWYEInzQu%2FC2EuI9h0pEx%2Flacb%2FlyxMDyCNJXIny6nPE%2B4pLs6PaB%2Bewok00cuUNmpcZzu60FFNErSvXpYufXkRDUIFRoruYH3lB4n9LyZ%2BjZu6YOWU%2B2j4RlOe34IDodH0QgwWBvni7KvkQ0CixpDOXs0UT%2BkZvHDwzlxfU9hKhiw2f7NJBOGCDqWAdngI6zCSrsTJBjqkAbQNAIgB1SwpTU4LgDr%2F%2BcJ28YNkpVpH3W0PV2%2FSjqKaauX0tBvdanjfNT0LCQBddWZCaPexd5IS2rILuq3zthAkmILMvygeyVx6rOz132SmPeveUHYFcScotCIuXFLgqcynqXmH4m%2F%2BwJQ7Ud0T32QB4N6F2Ak8tlKjgTzrqOxpFmSEORDYpUpglUgpKuQ%2FScA9oek07kj8IPEfvzx7gHU6pEyP&X-Amz-Signature=3418fd21a8a87b4d9026d00660faa8f6053c2278c9a88caa57c415edde97d7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNRX3YC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDzqFeOO8h4spfVXzhwEIB7HoXWwnpKDV3wMt9du%2BM7TAIhAJBGpJ6TJMLo0sh3yu%2Bd7SmtZio6cOdZLNpADBs0z%2BP6Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxRgMA4XohVCBtQvUEq3APuwy8i9s4rqivSbgsDEqEqBc2bBwSObLmnwB09xZRTiusr6UARBolaokflQFi3bLJfPCIQ%2FVkITrRocNH%2BXkReQ4Yr4a9UOLcS%2Fk4pV4W4WSj3cgqQUT5ToTTd2GvGMi7aMScKGEvnTAx8bXtMVelZNrRJg6TunbQT8Fu3pDPCjPQaybwfsZSNZgqn68dG4SJV57Pt791dF8DVkrFLMgbXzivcHm3PeMucydZacTF9zGJO2ERrGugmLXkoRamGRPDzyXyD4kIvwPt4D3REbYNcBPUWQ2MkbLiDXyNeVwEtAzUJvGaASxkKhke2BW%2FcQjohd3wwQ%2FNQ0eHtT2hgvTIwvSGd3NkDJSUp9d%2BqQww43PHDpYTr%2Fom%2B2l1PLsdSL6Mu3t0M2Ptc94Z%2FOfLiun22cSvKhKTvxXBJgXRaIheZFq%2FuiH3r3VZaEWg7WXWYEInzQu%2FC2EuI9h0pEx%2Flacb%2FlyxMDyCNJXIny6nPE%2B4pLs6PaB%2Bewok00cuUNmpcZzu60FFNErSvXpYufXkRDUIFRoruYH3lB4n9LyZ%2BjZu6YOWU%2B2j4RlOe34IDodH0QgwWBvni7KvkQ0CixpDOXs0UT%2BkZvHDwzlxfU9hKhiw2f7NJBOGCDqWAdngI6zCSrsTJBjqkAbQNAIgB1SwpTU4LgDr%2F%2BcJ28YNkpVpH3W0PV2%2FSjqKaauX0tBvdanjfNT0LCQBddWZCaPexd5IS2rILuq3zthAkmILMvygeyVx6rOz132SmPeveUHYFcScotCIuXFLgqcynqXmH4m%2F%2BwJQ7Ud0T32QB4N6F2Ak8tlKjgTzrqOxpFmSEORDYpUpglUgpKuQ%2FScA9oek07kj8IPEfvzx7gHU6pEyP&X-Amz-Signature=03db19fbb9c2f937beb26a65bbf02f9ebc95fe09a85fad9a60b66f5ebb19be07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
