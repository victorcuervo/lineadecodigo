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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5QTDO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDZGQyUCTlw2a9c63PC%2FKQ4suPnjBEuJpXG0aTygPJvQQIhAMxE2Ra88DG2adDHRhVdg%2F%2FPqIvK2PPh7IZhdpbW%2BB8fKv8DCD8QABoMNjM3NDIzMTgzODA1Igy3FIpDkSOBQXxvZPwq3ANfErP%2B5bYe9EAmEmM8wqSwe7%2BnrhQgKN5P4UQHt7M2DoizoXkmuttT%2F8Wi%2FkXijH9QewmkieBhyC3v%2F8hp2O17Mbt3vhHGNzCCfWTdqFFzD9QQHx2wEFNAJ0LoyUznr%2B%2B2uxLdG1j29mSwJia0tFXBJ%2B25dEiJ88%2BRP1%2FbEIGhOx7h6zt9WB%2BZQV9eQyWG80HaIEG4MlEkJ3sSBGogSqlhRE70p%2BF4Zt6i%2FxCGWR5pTD1P3mA2ubPVq7aEn1T%2FW49vq5Xz5UQGzHV9WieKA91Q4evDIuGs2wDzKgt%2FqhEUIgeoJqEtkRCXyM9J%2Bjv4VrLkkLNML0kkOLBzm4lokIuElXTlMTS7nfMC%2Bj%2Fo5MHZqygUvHbCa%2F48Xy7BknaZMDfoSYLRbo%2BQTuvI5ljDUWvsFJKeKu%2BFhdAfm6GhvAlA%2B7sFoCDGC0h8h87DZabCd4rUMQGDwI8ldC5iDH6pxfg79p6l7bDs1FJd9TPZg1V%2BUgllMqfK%2FrsQj8Zz4t4OpPIa4BVNqju%2BTRgCeXyp9vY4%2FzGEbHo9dGoWB77rbBWzuX7j%2BeVKPrLzuXYtt3W24jZOf4iu8DRnjrNoaBfKhQEzSElUTguFBCf%2F4Me0Pa1IZ6XAvumjKcC%2FQpGhFjCnysTJBjqkAU6Cjint%2B5O0KnzNzlbH7mE9Te27v8xMHYy34bVh7BzLYJ6kKf3hOAD9OS5RKzkrGXlrhrY%2FSgZU5LMgnLwnhDe9v%2FlT2P4C43OlVFJBXqa9HNus7J0L5Nt1e8XHCXSzdY7gJtINCDOZMS46%2BtPyypZxb41uN%2FY%2FXQZn3%2BoKttOJB1P2DI7wM7Cfe%2BwT%2F5YMpwWP7BbYsAIXCGxS8Aqzo%2FRePPDO&X-Amz-Signature=30927c8e28d9a9113e4d66fc817dc09f8a9a8028f1f39708d185e5d3c9f8c475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5QTDO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDZGQyUCTlw2a9c63PC%2FKQ4suPnjBEuJpXG0aTygPJvQQIhAMxE2Ra88DG2adDHRhVdg%2F%2FPqIvK2PPh7IZhdpbW%2BB8fKv8DCD8QABoMNjM3NDIzMTgzODA1Igy3FIpDkSOBQXxvZPwq3ANfErP%2B5bYe9EAmEmM8wqSwe7%2BnrhQgKN5P4UQHt7M2DoizoXkmuttT%2F8Wi%2FkXijH9QewmkieBhyC3v%2F8hp2O17Mbt3vhHGNzCCfWTdqFFzD9QQHx2wEFNAJ0LoyUznr%2B%2B2uxLdG1j29mSwJia0tFXBJ%2B25dEiJ88%2BRP1%2FbEIGhOx7h6zt9WB%2BZQV9eQyWG80HaIEG4MlEkJ3sSBGogSqlhRE70p%2BF4Zt6i%2FxCGWR5pTD1P3mA2ubPVq7aEn1T%2FW49vq5Xz5UQGzHV9WieKA91Q4evDIuGs2wDzKgt%2FqhEUIgeoJqEtkRCXyM9J%2Bjv4VrLkkLNML0kkOLBzm4lokIuElXTlMTS7nfMC%2Bj%2Fo5MHZqygUvHbCa%2F48Xy7BknaZMDfoSYLRbo%2BQTuvI5ljDUWvsFJKeKu%2BFhdAfm6GhvAlA%2B7sFoCDGC0h8h87DZabCd4rUMQGDwI8ldC5iDH6pxfg79p6l7bDs1FJd9TPZg1V%2BUgllMqfK%2FrsQj8Zz4t4OpPIa4BVNqju%2BTRgCeXyp9vY4%2FzGEbHo9dGoWB77rbBWzuX7j%2BeVKPrLzuXYtt3W24jZOf4iu8DRnjrNoaBfKhQEzSElUTguFBCf%2F4Me0Pa1IZ6XAvumjKcC%2FQpGhFjCnysTJBjqkAU6Cjint%2B5O0KnzNzlbH7mE9Te27v8xMHYy34bVh7BzLYJ6kKf3hOAD9OS5RKzkrGXlrhrY%2FSgZU5LMgnLwnhDe9v%2FlT2P4C43OlVFJBXqa9HNus7J0L5Nt1e8XHCXSzdY7gJtINCDOZMS46%2BtPyypZxb41uN%2FY%2FXQZn3%2BoKttOJB1P2DI7wM7Cfe%2BwT%2F5YMpwWP7BbYsAIXCGxS8Aqzo%2FRePPDO&X-Amz-Signature=1a34ce60d4fae754351bed616b9a372e0e879eb3dc7733726c51ba4c42c8201f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
