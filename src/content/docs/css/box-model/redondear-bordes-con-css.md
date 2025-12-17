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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDSVBN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyb0tFrUqkgE6amVWLkzHFKhnhRyA%2Fiyv0BCqBayczzwIgEjEncAz9k%2BADQ8MOpJHVTLDyKoKY9mpS2ON83fk9xcsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGne07qaspL7ydWd6SrcAxW3kibmzqwJJ%2FM3TL3LBfUhQPBd2%2F6HNEr7qY5MB7N74nQrhU7T2e2Ya79iwRsTBFmUZBbxI1kNzWAjMaW6ck67N7xAtK2u1GQCUjRDrqZH3Rq3oIrBeVxy%2BXgjCWOsokIz3bRFojrLeUXGDU071Vjr9HaK7xq6ET3I6Itw%2F0gYx9YiUbnIzMcTQI7PCJqQ%2BXMCkz%2Buk2IYen%2B%2BHf%2Bfk%2FItnRun4fTkWLS0%2BmKUdzg4OIDGghws0OIQfMYxUfW8txn5fuQ0%2FHTpG11hG7Xt%2Ft%2BdW9ZcrTj%2BmG%2BEBnISi8OmLdxF66PnnZ0ZUxsC6R66KLKc784zDDF2FyEoA1fPi1XiM1JbbTGbTtYA1ztrgVQJMrnLCQJRhfcuR9TllyJ0D5n%2FWKd0nAkQ1YSkpR7TmKnECTtF3%2BNbLAJcS1gXxAIS1jO5waXXLMy2pzASTsf8KkTdrfGmqDi7kLOuw3jLkauiaVLO2FTokrF0aA2WkZZdLt4XqweFOZYEshSC1BAA915PQIEuN9hpTVduGQmnmemsuPkahFPOCeqLMlNTayUo2gywku7XdKnhHmXVj3%2FoTxK8FLCblsc8h2mSo3rQq5jdEjOOVoSFAM52rI%2BDRhK5ziEccSj2Vb3%2FX%2B%2BhMJzeh8oGOqUBJYrSel%2FblCo6878hIm1hmYsr0AvVAgvMfDZai%2FdW4EhqA3Nc8043uzeAQvTqmoyZAWXnr0TLLDvVcUyZxl9Y2wx3UXgPfu22n4A6e4LRsvywYiDoZHJTOny6sNU%2Bq74%2F09HTeTAZVLkR8q3hr4pR4uZopBd0z83a7SmFkrDa9KdwD%2F9RDGkUgkHXwb%2FBFsOW39w2RXtkShhJetn7fx8MIA2jvlvv&X-Amz-Signature=17a9470ce3c7428a953051a58cf314db5a5e73ba9b3b97ef96785e4d9ead8052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDSVBN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyb0tFrUqkgE6amVWLkzHFKhnhRyA%2Fiyv0BCqBayczzwIgEjEncAz9k%2BADQ8MOpJHVTLDyKoKY9mpS2ON83fk9xcsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGne07qaspL7ydWd6SrcAxW3kibmzqwJJ%2FM3TL3LBfUhQPBd2%2F6HNEr7qY5MB7N74nQrhU7T2e2Ya79iwRsTBFmUZBbxI1kNzWAjMaW6ck67N7xAtK2u1GQCUjRDrqZH3Rq3oIrBeVxy%2BXgjCWOsokIz3bRFojrLeUXGDU071Vjr9HaK7xq6ET3I6Itw%2F0gYx9YiUbnIzMcTQI7PCJqQ%2BXMCkz%2Buk2IYen%2B%2BHf%2Bfk%2FItnRun4fTkWLS0%2BmKUdzg4OIDGghws0OIQfMYxUfW8txn5fuQ0%2FHTpG11hG7Xt%2Ft%2BdW9ZcrTj%2BmG%2BEBnISi8OmLdxF66PnnZ0ZUxsC6R66KLKc784zDDF2FyEoA1fPi1XiM1JbbTGbTtYA1ztrgVQJMrnLCQJRhfcuR9TllyJ0D5n%2FWKd0nAkQ1YSkpR7TmKnECTtF3%2BNbLAJcS1gXxAIS1jO5waXXLMy2pzASTsf8KkTdrfGmqDi7kLOuw3jLkauiaVLO2FTokrF0aA2WkZZdLt4XqweFOZYEshSC1BAA915PQIEuN9hpTVduGQmnmemsuPkahFPOCeqLMlNTayUo2gywku7XdKnhHmXVj3%2FoTxK8FLCblsc8h2mSo3rQq5jdEjOOVoSFAM52rI%2BDRhK5ziEccSj2Vb3%2FX%2B%2BhMJzeh8oGOqUBJYrSel%2FblCo6878hIm1hmYsr0AvVAgvMfDZai%2FdW4EhqA3Nc8043uzeAQvTqmoyZAWXnr0TLLDvVcUyZxl9Y2wx3UXgPfu22n4A6e4LRsvywYiDoZHJTOny6sNU%2Bq74%2F09HTeTAZVLkR8q3hr4pR4uZopBd0z83a7SmFkrDa9KdwD%2F9RDGkUgkHXwb%2FBFsOW39w2RXtkShhJetn7fx8MIA2jvlvv&X-Amz-Signature=24ccb908b6afe978c1be41ee49e2cc6eeb0a3f5dfb772644ef5675973ef4b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
