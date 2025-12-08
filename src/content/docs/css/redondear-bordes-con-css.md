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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAXMT2W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOS6e9nBANlr9QXSNbfQCO8R7VrZihjNoZNz7MlH5B2AIhAInbjAvZaUXdwMGpU%2BPXjfdMIz9hrt6rII5sWU9H0WqWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq1GKc1axTcDBvPl8q3AODjfTBcr4Wzz%2FwcWBvAdTV8FVd4gnz8OoVXi4hJW%2FgOtETT%2F68nKJievIzaLs%2FKgXVGRiBfl0QPy33i191dHMUT0XwA12T%2FkykLM%2B%2FWpzk6IOF5vSrHatMBZTMmRlMmOm5c8ZyTUMAA%2Fz4yyqbfJ%2Bd2fEv61oe5%2Fgkb9tG6nPpWfhzIsd2ItYdZcUcSq40SxVouyG3kViFg2VTmf03xVxi9clyKVsKbuoPsE06GLQG3ooUepUaie5T8MGsH4GBwAzuL5D0zX6vBSiyMPTwQO2u2Dw9y925eXENFJU7ZnNRDh%2FxvrZUf1R0VyztVnHAWH0JkeUFFvOKUeinnPm0fFm6zTuTRd7EnqPANCr%2B3FSxx7%2BQ0ePXQ4VIlpkw%2B6uD9WassLGYNB7p52pVYV9EJBHa5NLjg4WL0SkxvukeowkX%2BNQdSG6EEjtSW8XYg9x6gHZ%2BOHDCmqEuxH1ruRs3HzVNEm2ePlI%2B3ItLOLci%2BGXSO%2BsjJVWnRnwoG2OkFSZo2a6bRwedmZhEKmCXa%2BdyHk12yXmzGEMnP%2F0GigRcAgqYgSphQZaTQ89Bnk5f%2FJ1qJVAUWJBq8%2FV4GkW92fogWpIPKZfaPhgsf0dEqQslwYgoZRBJRm3v%2F17BSNcM4TDqs9nJBjqkAUCZGSU8KTa0TtAfHpKB4TnVKUlDIMBw32cyl%2BpLmRJSZK8zRq603ox%2FmZcytQOD6qG0%2BvKlRf%2FKIBv0KoSME5MjVBnqSZBjteoOL7YInrTQN%2FPVw8pJCzBMsMCY2Y4aD7t8cqQOAcjqRgOBY1kM%2FMMfvtrbhBCX9n4VWL1dUHdAxlxA0aI%2FaCio8nXi8t7TrmXE1Tho4rJ0uzP6bf%2BC4QKPNKj6&X-Amz-Signature=65902c2a9d6b90f6ceeccf45d706a94c105f0714fe856ce04e1a92c1d4ef1ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAXMT2W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOS6e9nBANlr9QXSNbfQCO8R7VrZihjNoZNz7MlH5B2AIhAInbjAvZaUXdwMGpU%2BPXjfdMIz9hrt6rII5sWU9H0WqWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq1GKc1axTcDBvPl8q3AODjfTBcr4Wzz%2FwcWBvAdTV8FVd4gnz8OoVXi4hJW%2FgOtETT%2F68nKJievIzaLs%2FKgXVGRiBfl0QPy33i191dHMUT0XwA12T%2FkykLM%2B%2FWpzk6IOF5vSrHatMBZTMmRlMmOm5c8ZyTUMAA%2Fz4yyqbfJ%2Bd2fEv61oe5%2Fgkb9tG6nPpWfhzIsd2ItYdZcUcSq40SxVouyG3kViFg2VTmf03xVxi9clyKVsKbuoPsE06GLQG3ooUepUaie5T8MGsH4GBwAzuL5D0zX6vBSiyMPTwQO2u2Dw9y925eXENFJU7ZnNRDh%2FxvrZUf1R0VyztVnHAWH0JkeUFFvOKUeinnPm0fFm6zTuTRd7EnqPANCr%2B3FSxx7%2BQ0ePXQ4VIlpkw%2B6uD9WassLGYNB7p52pVYV9EJBHa5NLjg4WL0SkxvukeowkX%2BNQdSG6EEjtSW8XYg9x6gHZ%2BOHDCmqEuxH1ruRs3HzVNEm2ePlI%2B3ItLOLci%2BGXSO%2BsjJVWnRnwoG2OkFSZo2a6bRwedmZhEKmCXa%2BdyHk12yXmzGEMnP%2F0GigRcAgqYgSphQZaTQ89Bnk5f%2FJ1qJVAUWJBq8%2FV4GkW92fogWpIPKZfaPhgsf0dEqQslwYgoZRBJRm3v%2F17BSNcM4TDqs9nJBjqkAUCZGSU8KTa0TtAfHpKB4TnVKUlDIMBw32cyl%2BpLmRJSZK8zRq603ox%2FmZcytQOD6qG0%2BvKlRf%2FKIBv0KoSME5MjVBnqSZBjteoOL7YInrTQN%2FPVw8pJCzBMsMCY2Y4aD7t8cqQOAcjqRgOBY1kM%2FMMfvtrbhBCX9n4VWL1dUHdAxlxA0aI%2FaCio8nXi8t7TrmXE1Tho4rJ0uzP6bf%2BC4QKPNKj6&X-Amz-Signature=78fe1da0452f4fec531b619778e11182292b972bfd5ae232da2bad0fa6c1bf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
