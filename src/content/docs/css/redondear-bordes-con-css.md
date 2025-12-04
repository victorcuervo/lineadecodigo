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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWGGE66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRMiBvidZdWJr2%2BvRMjtAfuXxXstC4tANzrnV77yfzgIgC%2BL%2F98F8DgXY3nrcyQGB7aWLN7cxkeigd5judV0W1Bcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFITTiPTRHGA82bbVCrcA6xGb5LwS3Flv5WbeKJTyai%2F0u7AB%2BCRK1e5oilryWfSRXfRrHY3e3S7vKbCYDAAmCvRPOy%2BlR8FawB%2FX5W8Qt431a6jGQv%2BQT7XAru0ZOr%2F1C5SIyiuOJ6WoHUhPewrrZ7riEJHU9lRt9jVTDzS6ECWK5UXbJ84VpQ%2FPKjiUH4%2BV3igwUScKrqbY%2BzU9PizYQ8gXm7BGvyQbaUHYt5LSLRmwr4rXEdc6D37bBbhxFuOM7I4OYu07oGmgUWyhNmUYIqzywa81l0V1tCJReeW4Ja7exrE3MRMsdV8RFEDK4gcq10QQWb1WyggM0Y6BiugwEHrlcrm7Q8hOJcfmHEo%2B%2BGJvuZ59CcOTdBEZr6ACRwZIskBHZ4SmO8FsfIXpmzPyPOF9kAbthOVrYgsVC5C4npVYfGaIxUxBWaaUBBX0tgrptxttsyKw2WlxH0hOBTAu6SttAk4NRfK0j%2FBzj%2F3iyQ25LjDmbCNhvyo7PCDItdgg5FCjgwoK%2Bx0odudH9rb04xkAyttUNNXhfNoeOlO%2FWx6kQopvHF74Id4ovqzx61gRuyEZjFcPx%2BaK1fPMYZ%2FB4FngPQ1jxnjB90sKJVcCo0zNFLUmJBkHIUh7n5O1%2Fd5bEwbO3GJAuw8WwtxMOHcxskGOqUB2foR5ZlZPn0%2Bqzl3BZkHDY1hmyVOa%2B9shQqU%2BEjW%2Fg8KrGW7rt8M2nbF0allGntwkfq0qrHEh%2BwI89Yoy7zQvqrUI6YeJNYUrEIwpzXhcUgk%2FB%2BbFQy5JMabXRRGM1gEhMAuHAWWRq8HpJd7hliX0ByG4kW6zMeoedXSbbw5ssW4FN8p3avAdNQIw532xuPS%2Fn%2BHzOFPcDsv%2Fnflj1lrMC1CYaFx&X-Amz-Signature=ada5bb021000545543540e5885fc779662752760feb3c99f66a1990e5cf1706f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWGGE66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRMiBvidZdWJr2%2BvRMjtAfuXxXstC4tANzrnV77yfzgIgC%2BL%2F98F8DgXY3nrcyQGB7aWLN7cxkeigd5judV0W1Bcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFITTiPTRHGA82bbVCrcA6xGb5LwS3Flv5WbeKJTyai%2F0u7AB%2BCRK1e5oilryWfSRXfRrHY3e3S7vKbCYDAAmCvRPOy%2BlR8FawB%2FX5W8Qt431a6jGQv%2BQT7XAru0ZOr%2F1C5SIyiuOJ6WoHUhPewrrZ7riEJHU9lRt9jVTDzS6ECWK5UXbJ84VpQ%2FPKjiUH4%2BV3igwUScKrqbY%2BzU9PizYQ8gXm7BGvyQbaUHYt5LSLRmwr4rXEdc6D37bBbhxFuOM7I4OYu07oGmgUWyhNmUYIqzywa81l0V1tCJReeW4Ja7exrE3MRMsdV8RFEDK4gcq10QQWb1WyggM0Y6BiugwEHrlcrm7Q8hOJcfmHEo%2B%2BGJvuZ59CcOTdBEZr6ACRwZIskBHZ4SmO8FsfIXpmzPyPOF9kAbthOVrYgsVC5C4npVYfGaIxUxBWaaUBBX0tgrptxttsyKw2WlxH0hOBTAu6SttAk4NRfK0j%2FBzj%2F3iyQ25LjDmbCNhvyo7PCDItdgg5FCjgwoK%2Bx0odudH9rb04xkAyttUNNXhfNoeOlO%2FWx6kQopvHF74Id4ovqzx61gRuyEZjFcPx%2BaK1fPMYZ%2FB4FngPQ1jxnjB90sKJVcCo0zNFLUmJBkHIUh7n5O1%2Fd5bEwbO3GJAuw8WwtxMOHcxskGOqUB2foR5ZlZPn0%2Bqzl3BZkHDY1hmyVOa%2B9shQqU%2BEjW%2Fg8KrGW7rt8M2nbF0allGntwkfq0qrHEh%2BwI89Yoy7zQvqrUI6YeJNYUrEIwpzXhcUgk%2FB%2BbFQy5JMabXRRGM1gEhMAuHAWWRq8HpJd7hliX0ByG4kW6zMeoedXSbbw5ssW4FN8p3avAdNQIw532xuPS%2Fn%2BHzOFPcDsv%2Fnflj1lrMC1CYaFx&X-Amz-Signature=ec43464039f974c2429dd7e126297e04326fe14ad80fa51fb9cfe3830be721f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
