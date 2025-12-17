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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6UFMOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9dPq1AlrH7ysrKscRzdrqJLcB3kSkzHEs4k8bCuhhQIhAM3XI2VHgVpHPmG9LMCGoaoLcLp1XAqZgF62PK2B%2BATrKv8DCH4QABoMNjM3NDIzMTgzODA1IgzkEWudSnZ5X8ZYmegq3ANKb%2BklvNarhfKoZoTtcITt9%2FscLwtCVvPZf719h1pdhiVcyB%2B7sCZDDR1o6974COV9FCfYzKH3blHc%2BCDtijDw3hWx7FT9XFbq8ZZJpbfiqftb4YGGDrzCQqoNl23SxHlEQcWvMq7%2FqK%2FTdXPUZ%2Fr3q%2BENad1lMc16tFXLl0B%2BaoMyG9sJrdrKuQ0qwhFRuuteNKYbpfmAjAMxFXGmzqTJ%2FhS4LZ6ZwN4TGBLuEBF8xcREB5QXwGpNS8XAqREmySy8NL6FKV1Qx5%2FqezWUxk0AYslIdh0KnhYyJgAqEnBx6aJDkQQ%2BqNQl7MhWchsH4Qkfq92tPuA3oTRB%2FDTMhTswkIV5mqMQv2pYbKA8afzaiqTvl17DqBfwJPiaQgNqxBq5g4Kxnux%2BL%2FGyXBm7EPDneKW3livMQ%2FtlRzS700r9Zh9AeecHRVITfwnXbwomWdXe2Gkym9ngvcR7kOCqwiN%2FLUi0jlPuV8xtxNnF2h0rHRDCX3llSPsHPlGmoUwOPaa3Ee7XoBZWtqNhIXXd7W8akTg8Hzd0X5A8mZKvMNkKQO9OfGohTO27XXOirDe5wbi0RyPt7%2F%2BkMBZIy5hANdIZGxom32x442Q1SxVPo0WAtjwofnjS%2F6HfXnrBJjCfxorKBjqkAXnjptoaasvW%2BrrQpo%2FACNesMWsFwaJtwQTWbmWUfQEsGUTOAE%2BnRUwv1ThKO6ITHYGe8a9x2t%2BXHQ6ulTE0pBHovESAnfLFZxtu0yrOg2Ky9Q0GugzqcKZ96%2F73tzm9uDgBIX9Ormv2F1C74tHOWegykvvTFQs119y5OQmuqHLvSZlHteOuSre4aJNdehSo1g%2BqqtYZ5OycCsABnFzxwgnHt0Rk&X-Amz-Signature=467b1b910cf7c7f41bb0462c6f1ff335ac6000a739135450101baa9824f1077d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6UFMOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9dPq1AlrH7ysrKscRzdrqJLcB3kSkzHEs4k8bCuhhQIhAM3XI2VHgVpHPmG9LMCGoaoLcLp1XAqZgF62PK2B%2BATrKv8DCH4QABoMNjM3NDIzMTgzODA1IgzkEWudSnZ5X8ZYmegq3ANKb%2BklvNarhfKoZoTtcITt9%2FscLwtCVvPZf719h1pdhiVcyB%2B7sCZDDR1o6974COV9FCfYzKH3blHc%2BCDtijDw3hWx7FT9XFbq8ZZJpbfiqftb4YGGDrzCQqoNl23SxHlEQcWvMq7%2FqK%2FTdXPUZ%2Fr3q%2BENad1lMc16tFXLl0B%2BaoMyG9sJrdrKuQ0qwhFRuuteNKYbpfmAjAMxFXGmzqTJ%2FhS4LZ6ZwN4TGBLuEBF8xcREB5QXwGpNS8XAqREmySy8NL6FKV1Qx5%2FqezWUxk0AYslIdh0KnhYyJgAqEnBx6aJDkQQ%2BqNQl7MhWchsH4Qkfq92tPuA3oTRB%2FDTMhTswkIV5mqMQv2pYbKA8afzaiqTvl17DqBfwJPiaQgNqxBq5g4Kxnux%2BL%2FGyXBm7EPDneKW3livMQ%2FtlRzS700r9Zh9AeecHRVITfwnXbwomWdXe2Gkym9ngvcR7kOCqwiN%2FLUi0jlPuV8xtxNnF2h0rHRDCX3llSPsHPlGmoUwOPaa3Ee7XoBZWtqNhIXXd7W8akTg8Hzd0X5A8mZKvMNkKQO9OfGohTO27XXOirDe5wbi0RyPt7%2F%2BkMBZIy5hANdIZGxom32x442Q1SxVPo0WAtjwofnjS%2F6HfXnrBJjCfxorKBjqkAXnjptoaasvW%2BrrQpo%2FACNesMWsFwaJtwQTWbmWUfQEsGUTOAE%2BnRUwv1ThKO6ITHYGe8a9x2t%2BXHQ6ulTE0pBHovESAnfLFZxtu0yrOg2Ky9Q0GugzqcKZ96%2F73tzm9uDgBIX9Ormv2F1C74tHOWegykvvTFQs119y5OQmuqHLvSZlHteOuSre4aJNdehSo1g%2BqqtYZ5OycCsABnFzxwgnHt0Rk&X-Amz-Signature=7c807c96683679ce15afba09fecfb9a0174ec0c44258133d574da27bb0fa39c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
