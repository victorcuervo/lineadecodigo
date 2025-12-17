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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YANPGTV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdFn9LdVN6ZzKCjScma%2BJph0Fz8I%2FLpVLZECPMWJ20vAiEAv6%2BM90P0hnNVFRkhTIfrPHAzpDMTQdjnMddyQwSCTHoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAqeKQVjTVKnzSAfxCrcA8sqHf5nf8sqmmfjjkSmtEa7D5i4xLOEsuRQ85bwyDjL910j6wYyt%2FTN0oYCdegy2wVdy5TaZuGnOoOLZWRJH9OOcscjt4%2BrtodX3MTACofmNY01llbxTgiflSf2oxR3uF7VqHhWFWpXX%2BzTfukvO5964wIJpoLYblMRK33BnCGm9dGu3Tz0YZ5IcTpzErbQ8RbxG4kZX8b4t4a9kdskKdYNQJmKWCZ%2FxnFHN2SfcrWk7mfle82cPnoTjJC%2BOy7Gkx%2F2vwKRooQ1uDpQcPhyyYxbnxqA7sc7FK9rao3tNnKx%2BMIPDdtAuTmenWHQhuWpLuE7J85N9ZhknOU1Wl%2B%2FRMhEwHQpGrqio%2FaRAIGIfQxEQnH3A8daZo1uEEHHYXN8fT8LVWSOoZR5yaJ3yVsVcgI0eEsC4pNzHrgWa26rXuHD%2FA20LPgnuUOnoqpoi5GqHKgVVz9ZFvAZzO%2BiuD9KsN%2BOUkleQuTdD6oZ7lu2zuZn9lqFACAouud8d6yRda1G19a8JdffXSurkIzC6P6eW27hBTh8iNANaXYb4sfli8SrLTpwNUR4Th0bgZs9Pyg%2BcJ8j8%2FNboG3NLOGZLBeifJ6FCDPXd768BLoMo7VYAj3NfHfzvq%2FsiLSx2X97MPe3icoGOqUBZ5gDx6lUnpgKauDBCppl6xQPpTf7oJ%2BYrZl0K1VVnATDIo3NniqO4H7Y62j8ZU9flgKnBB4TsX6EpzA33pZH8UrBJSPnx%2FrEtg%2Bz8hCYt51K%2FllRDOqJp8201wZ5%2BcmzxAJHBPRPyP%2BBV4UfSPX%2FOZbh4PXjDEcHdQiKEpmNtsITKkeKv6mKj0%2Bjh8CsbnoCtCacGdQxTAdW4nKgFAJ72S8yLnl7&X-Amz-Signature=8c18947c35b4b1a4354337884d4da6929fac6dd9f34a6a672c23913e8553bc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YANPGTV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdFn9LdVN6ZzKCjScma%2BJph0Fz8I%2FLpVLZECPMWJ20vAiEAv6%2BM90P0hnNVFRkhTIfrPHAzpDMTQdjnMddyQwSCTHoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAqeKQVjTVKnzSAfxCrcA8sqHf5nf8sqmmfjjkSmtEa7D5i4xLOEsuRQ85bwyDjL910j6wYyt%2FTN0oYCdegy2wVdy5TaZuGnOoOLZWRJH9OOcscjt4%2BrtodX3MTACofmNY01llbxTgiflSf2oxR3uF7VqHhWFWpXX%2BzTfukvO5964wIJpoLYblMRK33BnCGm9dGu3Tz0YZ5IcTpzErbQ8RbxG4kZX8b4t4a9kdskKdYNQJmKWCZ%2FxnFHN2SfcrWk7mfle82cPnoTjJC%2BOy7Gkx%2F2vwKRooQ1uDpQcPhyyYxbnxqA7sc7FK9rao3tNnKx%2BMIPDdtAuTmenWHQhuWpLuE7J85N9ZhknOU1Wl%2B%2FRMhEwHQpGrqio%2FaRAIGIfQxEQnH3A8daZo1uEEHHYXN8fT8LVWSOoZR5yaJ3yVsVcgI0eEsC4pNzHrgWa26rXuHD%2FA20LPgnuUOnoqpoi5GqHKgVVz9ZFvAZzO%2BiuD9KsN%2BOUkleQuTdD6oZ7lu2zuZn9lqFACAouud8d6yRda1G19a8JdffXSurkIzC6P6eW27hBTh8iNANaXYb4sfli8SrLTpwNUR4Th0bgZs9Pyg%2BcJ8j8%2FNboG3NLOGZLBeifJ6FCDPXd768BLoMo7VYAj3NfHfzvq%2FsiLSx2X97MPe3icoGOqUBZ5gDx6lUnpgKauDBCppl6xQPpTf7oJ%2BYrZl0K1VVnATDIo3NniqO4H7Y62j8ZU9flgKnBB4TsX6EpzA33pZH8UrBJSPnx%2FrEtg%2Bz8hCYt51K%2FllRDOqJp8201wZ5%2BcmzxAJHBPRPyP%2BBV4UfSPX%2FOZbh4PXjDEcHdQiKEpmNtsITKkeKv6mKj0%2Bjh8CsbnoCtCacGdQxTAdW4nKgFAJ72S8yLnl7&X-Amz-Signature=0de56f6abd373e279db9e2e9b808d61f1e51d636b98655ddef0414facdb7a881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
