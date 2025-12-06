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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXFRJGG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyW%2FWtr%2FVEtJesBJQOWfVItLjlN8flFRtr9l5kx25jIwIgCG9jOwicAqutK%2FKuxlH9qbaleFxqvZ0NUlLgROJtCdoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBznpR4GtdWdqI1XBircAxLwAwL7Gy2cZb%2B%2BRIdqnfW%2FNEqzxlyh9Roke0u0rfl6KQFO9SwEBPyhK5mP9LSw5E8WyWZYR65DvOX%2F76X5y49k8bZC0m2Kb7DkXuVHc020y20yGl4p5aD9Xj%2F1L5gCDNCSnAz%2Fdf%2BxeTFSaBk7yzL0Ipu8wzFP1tCZ7E9zkEVFYeOwcTyErE1P5eDeQ2gmgsjPdwcbFMp%2BnY67%2B%2F5uHy6keRGY2tV3b%2B9kMaUO0pWzADmkq5Rjn8zxDtQoSdX%2F9VThHXtHy8L57bkkz22bkmGbM3DwHg89XVh%2Bprn3icC4BmPtatMWtvdZ1%2FHiuz9%2FR8bobpDi5uiZDesodxJY6Vur6K7Ef2cvirhlwDgOZ6oXCx0cHYNhszLqfPIhOSeadhNMRj9lVe1K4cOVmWSzqppvzu6EhU6WNvviKjBpS%2F7kvhbhiZGwBRs0m7StvUA3jt0q3visbmthwiq80jvd8369koi5x8ODi4LDahE9igplfAi8qRV3oB5dwFXhQeZyU44k9tuprn0ZkKNdFXGeLqD2KA7btH7OIWGfn5LnMgZSM%2BPawK%2FtMzjwsxbuAeQ5wV6Hma2sYDqwfC6qcLSXFRb8YTR1Am4ElYn8IWDZ2CmfInuZMTN7j9KnOynTMMym0MkGOqUBjcLDjaYNBJjfOlV0tooBAIq8ZAO%2FXR9yZYH2tv9ZpqrSHjkO6ihN68UaNpCNWPumU3JpIMaIBvMh0ZSSoWAuldJXR2LFqOZcFx7pyd0%2BB01ORBslYNoipbqE%2BwINkhWFs75dr%2F%2BCTEjEIF2MRX08UsSjCSEjSKFwZgjK0N75wd1uvaJK%2B%2BjjoQcwhI%2BqHeUenlIBZk29AbX1czxDL1iKPPxmtWck&X-Amz-Signature=aca623a4ae1981a29a059823c5bd9c6dd66afc78956222fb24caf218f33ace8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXFRJGG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyW%2FWtr%2FVEtJesBJQOWfVItLjlN8flFRtr9l5kx25jIwIgCG9jOwicAqutK%2FKuxlH9qbaleFxqvZ0NUlLgROJtCdoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBznpR4GtdWdqI1XBircAxLwAwL7Gy2cZb%2B%2BRIdqnfW%2FNEqzxlyh9Roke0u0rfl6KQFO9SwEBPyhK5mP9LSw5E8WyWZYR65DvOX%2F76X5y49k8bZC0m2Kb7DkXuVHc020y20yGl4p5aD9Xj%2F1L5gCDNCSnAz%2Fdf%2BxeTFSaBk7yzL0Ipu8wzFP1tCZ7E9zkEVFYeOwcTyErE1P5eDeQ2gmgsjPdwcbFMp%2BnY67%2B%2F5uHy6keRGY2tV3b%2B9kMaUO0pWzADmkq5Rjn8zxDtQoSdX%2F9VThHXtHy8L57bkkz22bkmGbM3DwHg89XVh%2Bprn3icC4BmPtatMWtvdZ1%2FHiuz9%2FR8bobpDi5uiZDesodxJY6Vur6K7Ef2cvirhlwDgOZ6oXCx0cHYNhszLqfPIhOSeadhNMRj9lVe1K4cOVmWSzqppvzu6EhU6WNvviKjBpS%2F7kvhbhiZGwBRs0m7StvUA3jt0q3visbmthwiq80jvd8369koi5x8ODi4LDahE9igplfAi8qRV3oB5dwFXhQeZyU44k9tuprn0ZkKNdFXGeLqD2KA7btH7OIWGfn5LnMgZSM%2BPawK%2FtMzjwsxbuAeQ5wV6Hma2sYDqwfC6qcLSXFRb8YTR1Am4ElYn8IWDZ2CmfInuZMTN7j9KnOynTMMym0MkGOqUBjcLDjaYNBJjfOlV0tooBAIq8ZAO%2FXR9yZYH2tv9ZpqrSHjkO6ihN68UaNpCNWPumU3JpIMaIBvMh0ZSSoWAuldJXR2LFqOZcFx7pyd0%2BB01ORBslYNoipbqE%2BwINkhWFs75dr%2F%2BCTEjEIF2MRX08UsSjCSEjSKFwZgjK0N75wd1uvaJK%2B%2BjjoQcwhI%2BqHeUenlIBZk29AbX1czxDL1iKPPxmtWck&X-Amz-Signature=1f17d877b7e8d5bc25f4a3544cc7701d153e14babfb8eb3a226d7b93b96566ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
