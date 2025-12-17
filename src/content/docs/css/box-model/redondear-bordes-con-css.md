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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQWDGPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS9sP3jdXiHuRxiS%2BZYQI1uyoyiCXltZcXRXlMMpeu7AiBs5Z%2FaEfrS575lxkUr4RkcU%2Ff6SfdQuOg2H3jltuudAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMYHixkkR%2F8NKQMlCSKtwDFLsn2t1vQ0yT6bQT20oj188e6STbRkFhvxm9X9xSpzrHzXV46%2BAlLJovpppXR%2B6j98ORuER2jp2spIDGARY0MiM0IDJXmVHLSQu8w1lrqmm2zAh5p7H1ktc12qZEtgLQROL1C%2BZMlOZ4Gi75qtlM046myE%2FzChTBKm%2FbGXiiQx6pltX5R6vYs45tXhO85KY0GrrTBQo9TQnDPGrHjrQFOSNXoEuh9P02ybkbquFyBQ5MS%2F4%2FogU0BqbDTKrjAzxn7%2FPc5lyUr%2FUPWxIXEQ%2BZz8KJ%2FkBzs3UQrBfgHkPHCwNOkRm7aeI22xVLir9hUr1A4MhY%2BSCuiI3yKjhOFWCK9lNX2XwVR74aZTyLqbbfx7tMMpjLQ3Y%2Fb5hoh6DAP8WcJVNUv7SxhOoZaiyCzcrc8p1ADgSmLXAN%2B0oXFM%2FWPRwsaLHPddmSY3UukqCV5lvTLqZcyQQLFTHb1rxmho5pGKuAN%2FcWcPXaD1gqPJKlAAYhVL4Z61xH8JXy8lnxZjvbuEohFy8hrNPkHzMm1wihiLGaRzLe0qK5HMlFO4BB3THJyVBpVIpq7uOLouLNb8DLV45KpV0j327f%2BVRYismbCY2Bl5qUIFlUjLPJCboTJhJlquuINx49PT%2B0yAMwn7iJygY6pgGUrHi%2BOAwCdrYrDF91v4r9xBxfThVOUXbKwZkQDuSKA77a6QpVQTWR%2BTbrl4mT2gnl33MVtP11DFl8bwnsMyUkXl8X9hfjbPn7cGgWHuZpF%2B9uYXfA%2FvHeVPhtt1DcG1gLd8hbBfizTxE73M8e325vl5K4oPIcS7Oc71%2Fi2HVMX35z1iacEkJ6dbZp9z2PkJCbMZpKiTB%2FqbVq6V0IG87QBtqLJinE&X-Amz-Signature=ebf8a24e732b9a7dff82dd42363a590c3d5a0203b3bc7d6561fcb84b9d547e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQWDGPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS9sP3jdXiHuRxiS%2BZYQI1uyoyiCXltZcXRXlMMpeu7AiBs5Z%2FaEfrS575lxkUr4RkcU%2Ff6SfdQuOg2H3jltuudAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMYHixkkR%2F8NKQMlCSKtwDFLsn2t1vQ0yT6bQT20oj188e6STbRkFhvxm9X9xSpzrHzXV46%2BAlLJovpppXR%2B6j98ORuER2jp2spIDGARY0MiM0IDJXmVHLSQu8w1lrqmm2zAh5p7H1ktc12qZEtgLQROL1C%2BZMlOZ4Gi75qtlM046myE%2FzChTBKm%2FbGXiiQx6pltX5R6vYs45tXhO85KY0GrrTBQo9TQnDPGrHjrQFOSNXoEuh9P02ybkbquFyBQ5MS%2F4%2FogU0BqbDTKrjAzxn7%2FPc5lyUr%2FUPWxIXEQ%2BZz8KJ%2FkBzs3UQrBfgHkPHCwNOkRm7aeI22xVLir9hUr1A4MhY%2BSCuiI3yKjhOFWCK9lNX2XwVR74aZTyLqbbfx7tMMpjLQ3Y%2Fb5hoh6DAP8WcJVNUv7SxhOoZaiyCzcrc8p1ADgSmLXAN%2B0oXFM%2FWPRwsaLHPddmSY3UukqCV5lvTLqZcyQQLFTHb1rxmho5pGKuAN%2FcWcPXaD1gqPJKlAAYhVL4Z61xH8JXy8lnxZjvbuEohFy8hrNPkHzMm1wihiLGaRzLe0qK5HMlFO4BB3THJyVBpVIpq7uOLouLNb8DLV45KpV0j327f%2BVRYismbCY2Bl5qUIFlUjLPJCboTJhJlquuINx49PT%2B0yAMwn7iJygY6pgGUrHi%2BOAwCdrYrDF91v4r9xBxfThVOUXbKwZkQDuSKA77a6QpVQTWR%2BTbrl4mT2gnl33MVtP11DFl8bwnsMyUkXl8X9hfjbPn7cGgWHuZpF%2B9uYXfA%2FvHeVPhtt1DcG1gLd8hbBfizTxE73M8e325vl5K4oPIcS7Oc71%2Fi2HVMX35z1iacEkJ6dbZp9z2PkJCbMZpKiTB%2FqbVq6V0IG87QBtqLJinE&X-Amz-Signature=93a512150fa115d031c3415dd5360e1512a45bb947aa4cae20aa501860f55f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
