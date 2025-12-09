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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RU7RAT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1up2ARozJZEqASju2%2FVNPQXx1fViNi3p3K4Gwv65eXAiEA0lhFtIyihkCa2BQd8vQ1OYkD3XlQ42ic6BlPDZt82doqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPclY4gztVVEu9%2BCzSrcA7hQfgWfTzoJlYGIXHDKOkOfFCeRdsSLRPyaIcNKXLx%2B1xBgyi2YaVI%2FlqzjDdtbBo%2FGDOm3f45a1edLSAzfhJfruBOhT%2BrZWDyuUazKe9KBIJtYokUITA0POnH5TkfNCeFW%2Bn53a1DQN9Xxd9UHbviVuhPYX4unIidYNLd%2BttFtKMG6tEguTH9Aq0ewVf0VDykJhEWIJsDkMi3Hi8%2FUopvWflApwang1q4yIBreRLb6WnrUNsVBqD6%2BCCV1nUh7cSVw99hNzozr%2BpH2dq5V0m%2BVC9Q76vaEi%2FfRvpJ5bWEbOW78rDu9vn91MmEVdyWI9Akl0InDpmSoNBQtV35%2BzlQbF%2BlGzXVWvrkJuIFL2ZrFxLGL1ClIS4yV0Oxg7tjeDfcUeuwYK5XWq65IOg7uOoJVKljjlu5Ld92JkIv2dOFIViak%2F9r4yoWBzezl4ZpKh4aw5sT%2BbDuHuVmei8p5nYwKsTzTTH3ZilzfLykK0yaXdZ4VmlMiYMZizqiok%2FbKw5qFkhXsqptQ8EwQP8O%2BQCJJ5K8lzabXX7j33ejIAjIqexMgh7M3fZ8yLKjJLUe0CrMxNXBk%2FpZcC1zUQFsupofXzAsP3FXstYweeCn%2FJynrx058Ta93zb3x71zMMO%2Bk38kGOqUBQmndroiHlV0wPZmMcIpWb9LFUPhCIdkBMOPHBoharnbylWzrl3TNWR3KqPYfMYYXlmQDSVh%2F%2BpH41ig6Ujy5XyfN1nk1ryi7XxPnYxQnMPiOzZBxWWNFAYhb1I%2FU2d7Xqeh0pLgU5chVBPZY5TBl6eb%2B72sqyPxS9l%2F5ideOv3CDgO8a0jhyez2Czivbo3kGrQXZJJEjMZgGnnbRj%2B%2BUIoceuIpw&X-Amz-Signature=8eda038cf707b846b6529a27ca2c8bd38db20823db9f55e8d7c4c69dd53320f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RU7RAT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1up2ARozJZEqASju2%2FVNPQXx1fViNi3p3K4Gwv65eXAiEA0lhFtIyihkCa2BQd8vQ1OYkD3XlQ42ic6BlPDZt82doqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPclY4gztVVEu9%2BCzSrcA7hQfgWfTzoJlYGIXHDKOkOfFCeRdsSLRPyaIcNKXLx%2B1xBgyi2YaVI%2FlqzjDdtbBo%2FGDOm3f45a1edLSAzfhJfruBOhT%2BrZWDyuUazKe9KBIJtYokUITA0POnH5TkfNCeFW%2Bn53a1DQN9Xxd9UHbviVuhPYX4unIidYNLd%2BttFtKMG6tEguTH9Aq0ewVf0VDykJhEWIJsDkMi3Hi8%2FUopvWflApwang1q4yIBreRLb6WnrUNsVBqD6%2BCCV1nUh7cSVw99hNzozr%2BpH2dq5V0m%2BVC9Q76vaEi%2FfRvpJ5bWEbOW78rDu9vn91MmEVdyWI9Akl0InDpmSoNBQtV35%2BzlQbF%2BlGzXVWvrkJuIFL2ZrFxLGL1ClIS4yV0Oxg7tjeDfcUeuwYK5XWq65IOg7uOoJVKljjlu5Ld92JkIv2dOFIViak%2F9r4yoWBzezl4ZpKh4aw5sT%2BbDuHuVmei8p5nYwKsTzTTH3ZilzfLykK0yaXdZ4VmlMiYMZizqiok%2FbKw5qFkhXsqptQ8EwQP8O%2BQCJJ5K8lzabXX7j33ejIAjIqexMgh7M3fZ8yLKjJLUe0CrMxNXBk%2FpZcC1zUQFsupofXzAsP3FXstYweeCn%2FJynrx058Ta93zb3x71zMMO%2Bk38kGOqUBQmndroiHlV0wPZmMcIpWb9LFUPhCIdkBMOPHBoharnbylWzrl3TNWR3KqPYfMYYXlmQDSVh%2F%2BpH41ig6Ujy5XyfN1nk1ryi7XxPnYxQnMPiOzZBxWWNFAYhb1I%2FU2d7Xqeh0pLgU5chVBPZY5TBl6eb%2B72sqyPxS9l%2F5ideOv3CDgO8a0jhyez2Czivbo3kGrQXZJJEjMZgGnnbRj%2B%2BUIoceuIpw&X-Amz-Signature=badd8004edbc6a25dd3e7c98bed077510045be086f17743d2d8ad97fb80d06ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
