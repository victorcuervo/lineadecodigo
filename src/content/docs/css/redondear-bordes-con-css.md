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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBUSJKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIAXzw5%2FEwXci3SRf67IaoORiNhPQKxB1cJPKrcoSBxAIhAJLEs4EDt98bWBkwNUkLm8cKn9XeoBHKXzRee7THklBfKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzVXemHZXu48Wzb3oq3AM0W6lpPoYiwNAEuPltAsg3LRxvctXmcXjcCGjbNvP6pdZcg6Ksn3u0wiMk4i0N9D%2FKL2j5nlKzc9yuEtC8ZVBndQb4guh88gpWjl%2FDP4PlvYIIhqYfJlJa2k47CehoS53b1jLf8S%2FC6FXToXgjL2k%2FuEmiQXqytZFSpaMuCW6M%2BiAsWVG9y6VMeXVdNsP7IUiMiD9mUPEaKatVyN9RwPsWc9uT6AOZ6McgzVhxyNuIYBfgZlOlBi9WqsPcH%2BtfjYgM6KznBoxJeC1INdt4uTSIyPHaht8ghGwPSQtJHiM7wv5f9KuruRhhLJkb%2BYTQTW2%2FPJ1ADAlEb4CJgxz4ArzFuY00oqSLWtJtTca7i%2BHLwXGARLozGkzuzgzW9s6EPU5rIA5MO1WUrsH148rLZvZXJErTDOks0GMVwxIhJmojpNVUXV35nrM6C%2BlK2Ox7uyEdpzI4UCToYPuon%2F86BAD%2FewXjf3tTCgQVOe5RkWUSfT5Q1QHRoKBY5FwflcQ6oaltqoczPc0bUOnKw%2F07vrKPCOYT68WEmcJHRM9VZA8Oo3Y38yOsUKe6qNVmpu72wtFrRIBu%2Ftgm6XnJrZSHO%2Fo8EEM4a4rdSpPdFfWLwTCTxVg5QymAwtHN28eCCTCjtNnJBjqkAUocs3X9wm4rssmbZy%2FJHkrxNaCY5P6XkAMIK%2BfpHNYvoBxC5IjHAPmspJOw%2FQjgzzQGAbQ6WPiIRp2ET6IQG5qS5JLhoPRhiEqtSYQYUtihtOWuXSGz0eygURsSOQYgbdeQoDe5qmrXU3GISsSo053nqhddHeC3tXwfiWo4omBTpHCOzRtZYoSThJE6pqz1HaHg0B7XkhFtSyTmPIK46xnDX%2Bm4&X-Amz-Signature=f3d3a22d91a98c21cbf992cb9e936325f35cc44db9bc0c4c29bc478c2c65189d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBUSJKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIAXzw5%2FEwXci3SRf67IaoORiNhPQKxB1cJPKrcoSBxAIhAJLEs4EDt98bWBkwNUkLm8cKn9XeoBHKXzRee7THklBfKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzVXemHZXu48Wzb3oq3AM0W6lpPoYiwNAEuPltAsg3LRxvctXmcXjcCGjbNvP6pdZcg6Ksn3u0wiMk4i0N9D%2FKL2j5nlKzc9yuEtC8ZVBndQb4guh88gpWjl%2FDP4PlvYIIhqYfJlJa2k47CehoS53b1jLf8S%2FC6FXToXgjL2k%2FuEmiQXqytZFSpaMuCW6M%2BiAsWVG9y6VMeXVdNsP7IUiMiD9mUPEaKatVyN9RwPsWc9uT6AOZ6McgzVhxyNuIYBfgZlOlBi9WqsPcH%2BtfjYgM6KznBoxJeC1INdt4uTSIyPHaht8ghGwPSQtJHiM7wv5f9KuruRhhLJkb%2BYTQTW2%2FPJ1ADAlEb4CJgxz4ArzFuY00oqSLWtJtTca7i%2BHLwXGARLozGkzuzgzW9s6EPU5rIA5MO1WUrsH148rLZvZXJErTDOks0GMVwxIhJmojpNVUXV35nrM6C%2BlK2Ox7uyEdpzI4UCToYPuon%2F86BAD%2FewXjf3tTCgQVOe5RkWUSfT5Q1QHRoKBY5FwflcQ6oaltqoczPc0bUOnKw%2F07vrKPCOYT68WEmcJHRM9VZA8Oo3Y38yOsUKe6qNVmpu72wtFrRIBu%2Ftgm6XnJrZSHO%2Fo8EEM4a4rdSpPdFfWLwTCTxVg5QymAwtHN28eCCTCjtNnJBjqkAUocs3X9wm4rssmbZy%2FJHkrxNaCY5P6XkAMIK%2BfpHNYvoBxC5IjHAPmspJOw%2FQjgzzQGAbQ6WPiIRp2ET6IQG5qS5JLhoPRhiEqtSYQYUtihtOWuXSGz0eygURsSOQYgbdeQoDe5qmrXU3GISsSo053nqhddHeC3tXwfiWo4omBTpHCOzRtZYoSThJE6pqz1HaHg0B7XkhFtSyTmPIK46xnDX%2Bm4&X-Amz-Signature=2a5c134b97634748139c93dad54f259eeaf56d6b864b1a5a795cd28e32c08dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
