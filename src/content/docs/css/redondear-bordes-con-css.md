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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD36DUTJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7vWcyphZAFH9eHipmM2bNAXHeyb5Zi83X%2FGhQyI3BJgIgVkl9F%2Fjo9K5uWVyyK1NyWP74cnFSusD7j%2BRPj%2BbIZ0Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFVVkNCGqNwd%2BNKUPyrcAwc41%2B54t6QUBOOKhbZ60NfI3w2%2Fx7bFXwalLuLAvBEE0e7Q63ZN6ngdHRNCxevKb99JXYTpYaF3g6fF8zCZq11FYtC%2FkfUtYI6Wal%2FDKhHNp7ANWrvfqIwHd6nkgvP%2FbmCx7CPyRLU%2BiB55i68vEgs6mknLpDJ8afn7vRF7%2B1An7zEevlScwSIz2ZTGdRn7FrWfiv8Pnj%2FOSwbgPJ45phG6UBGj%2FVmVro6xYzaICPgsm1mhJv7dJVVxhG71yh7WHXxYHcCDo8yd78ib3fu1DEVlpV4KBjpNWKYJKrUYoMMz0iDvz7MOF9KhUwUvowYdKABeqCGrEn0kIQrXazZAncqopU%2FILelsmlEndQp%2Fs5izUChBIEVRkiRhF8tAc9cGYIPV5nETdGMMtCkgqHBx1bshVHT%2F%2FCRKVWgeINZ61bca58pga7CO1qS8NiCbbAFsUYeQ95ldl404CEEEvBro6pg2jO9yfYzCWtQKHoyqMPRXBBimRbgbEQ2E%2BxWBusv90a80n5OyOxTD4y%2FQk5dSrcp9coJGUoDIZDRh4PZZn%2BwOlOABDKFQsh1XHUknFYE9N80VBZCAqHhcEuc0t38qRLEAfAdEZtXLG6RKHshlcGnxqr4xC%2FXzuL5j42ajMMHK0ckGOqUB8mll8Ym4bEoFzgXNRXICExrp99eqK3fhTpvhl3AfjO8R54t59VkNuNmjNAiimVjOKFcyvy0Yl%2FUzqCCnKc6%2BvT1QACNziPj687RL3x%2F%2FYCUmmrLWFZAegW4mkKF6kITJuaXpW5yAqeS93U6ROzedNcaCl4R69mPjmQ7MI89Iqu6OxcbQKge5UP8MB0XQ7Fx9zOARaTlgVeTvu8qUoCnpVWlfmNOM&X-Amz-Signature=41dc231f14bdd616d988693b9d63227142ac50918a37bfb663bae21a59ca24de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD36DUTJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7vWcyphZAFH9eHipmM2bNAXHeyb5Zi83X%2FGhQyI3BJgIgVkl9F%2Fjo9K5uWVyyK1NyWP74cnFSusD7j%2BRPj%2BbIZ0Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFVVkNCGqNwd%2BNKUPyrcAwc41%2B54t6QUBOOKhbZ60NfI3w2%2Fx7bFXwalLuLAvBEE0e7Q63ZN6ngdHRNCxevKb99JXYTpYaF3g6fF8zCZq11FYtC%2FkfUtYI6Wal%2FDKhHNp7ANWrvfqIwHd6nkgvP%2FbmCx7CPyRLU%2BiB55i68vEgs6mknLpDJ8afn7vRF7%2B1An7zEevlScwSIz2ZTGdRn7FrWfiv8Pnj%2FOSwbgPJ45phG6UBGj%2FVmVro6xYzaICPgsm1mhJv7dJVVxhG71yh7WHXxYHcCDo8yd78ib3fu1DEVlpV4KBjpNWKYJKrUYoMMz0iDvz7MOF9KhUwUvowYdKABeqCGrEn0kIQrXazZAncqopU%2FILelsmlEndQp%2Fs5izUChBIEVRkiRhF8tAc9cGYIPV5nETdGMMtCkgqHBx1bshVHT%2F%2FCRKVWgeINZ61bca58pga7CO1qS8NiCbbAFsUYeQ95ldl404CEEEvBro6pg2jO9yfYzCWtQKHoyqMPRXBBimRbgbEQ2E%2BxWBusv90a80n5OyOxTD4y%2FQk5dSrcp9coJGUoDIZDRh4PZZn%2BwOlOABDKFQsh1XHUknFYE9N80VBZCAqHhcEuc0t38qRLEAfAdEZtXLG6RKHshlcGnxqr4xC%2FXzuL5j42ajMMHK0ckGOqUB8mll8Ym4bEoFzgXNRXICExrp99eqK3fhTpvhl3AfjO8R54t59VkNuNmjNAiimVjOKFcyvy0Yl%2FUzqCCnKc6%2BvT1QACNziPj687RL3x%2F%2FYCUmmrLWFZAegW4mkKF6kITJuaXpW5yAqeS93U6ROzedNcaCl4R69mPjmQ7MI89Iqu6OxcbQKge5UP8MB0XQ7Fx9zOARaTlgVeTvu8qUoCnpVWlfmNOM&X-Amz-Signature=18e473173f6a28742d499d5e59749c8f2770729cca20ed62ea238762563924c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
