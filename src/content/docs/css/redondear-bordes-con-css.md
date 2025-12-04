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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ3BAWW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD61GrURZmHKr1Yw9v%2BpeXPbT9kHoYGBkg4OMd9BX7LDAIgX1EQvPhISvh5hz2IcelIldtiSCbDVzaXc2WgYQOqAYAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGvRWYjn8iUtVDoBcyrcAxFi8OcvQj9IR9tj6uPBG9iTPE5KcbF9vWHaOeJQa4zsdX2r2sPo4698fhEBNdgxQXxJcF%2FoeXgRg4HPDPXlW4vDdqZYsLNrmQQWqHAXt9D3hA%2Byl%2BKof8wxV3Sgj%2BXvQT1%2FO0T%2Fo1vvZOjXjWVQsQS%2BnA1NwIbYXXnZ1zu6KjwUuE%2BX1%2F9keim%2Fy7nRj0EFOKBH3UtzZ6lpDttfEJpa%2Bacj6LlbYiL48d5cL63aUnGnVF66Z26nOivTioxgHWOAjSniGrG8yjxCc6cgnMuB1kJEbGcmfs61r%2BlpOxb6xALgV3Mey43pqNSG5n%2BmIzBna4zuM0k9hGZgHaLLxWGzMHxAAros4nUdOMVNDh1wdM3nQ8J%2BPl%2FNfkpCCGomVVLvvinoV%2FFMHBq5%2FaiEXV6G%2FHCFe1oLUWolp0XzCeGvuewEKzB%2FLy66kxQv8IgIt1WbX1B61IyuAcwPWarzzGlma9wsZP2B45QehmhW1mnBqbRya3HlP%2F01az0Rhlyw8PEDHxldVnBG3IuqHRANVCXwdyG2%2FRrFp9yLin5FPDVzwHRuHJt%2FY%2B8R2KOydTy%2F01Xwfd6Bp3NG2jxugcOJdDYj9xYcSiYYkMhwk6UzGU10%2FkiNrsWv4STrY2CZ6ms9MLOVw8kGOqUBmlMb%2BFUmB03c2fEu3x3sNXGLRZnAO8wIUofd2DLd%2Bc0dtFh%2BdCZ46jhmmwEZfzaqZ9dv1hd59Z2c4ci9Irm2MLxdymq1KiIpCtg3Y%2BHtBUpX7Rx6iHX%2BeQ9OZWff218v1NTSv7sXnIQZektenf9O15K0hwqPOsbRwBDVY2%2BC6f%2Foy8QM9vWT3WSCbkqG5oIgJyCs8U1pE6KYL5ufuplHfHHbN6hR&X-Amz-Signature=f7ac9ce3a82731ebe79da3ae148d17acf42515a06ff96f0a818b26b5f0d3f08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ3BAWW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD61GrURZmHKr1Yw9v%2BpeXPbT9kHoYGBkg4OMd9BX7LDAIgX1EQvPhISvh5hz2IcelIldtiSCbDVzaXc2WgYQOqAYAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGvRWYjn8iUtVDoBcyrcAxFi8OcvQj9IR9tj6uPBG9iTPE5KcbF9vWHaOeJQa4zsdX2r2sPo4698fhEBNdgxQXxJcF%2FoeXgRg4HPDPXlW4vDdqZYsLNrmQQWqHAXt9D3hA%2Byl%2BKof8wxV3Sgj%2BXvQT1%2FO0T%2Fo1vvZOjXjWVQsQS%2BnA1NwIbYXXnZ1zu6KjwUuE%2BX1%2F9keim%2Fy7nRj0EFOKBH3UtzZ6lpDttfEJpa%2Bacj6LlbYiL48d5cL63aUnGnVF66Z26nOivTioxgHWOAjSniGrG8yjxCc6cgnMuB1kJEbGcmfs61r%2BlpOxb6xALgV3Mey43pqNSG5n%2BmIzBna4zuM0k9hGZgHaLLxWGzMHxAAros4nUdOMVNDh1wdM3nQ8J%2BPl%2FNfkpCCGomVVLvvinoV%2FFMHBq5%2FaiEXV6G%2FHCFe1oLUWolp0XzCeGvuewEKzB%2FLy66kxQv8IgIt1WbX1B61IyuAcwPWarzzGlma9wsZP2B45QehmhW1mnBqbRya3HlP%2F01az0Rhlyw8PEDHxldVnBG3IuqHRANVCXwdyG2%2FRrFp9yLin5FPDVzwHRuHJt%2FY%2B8R2KOydTy%2F01Xwfd6Bp3NG2jxugcOJdDYj9xYcSiYYkMhwk6UzGU10%2FkiNrsWv4STrY2CZ6ms9MLOVw8kGOqUBmlMb%2BFUmB03c2fEu3x3sNXGLRZnAO8wIUofd2DLd%2Bc0dtFh%2BdCZ46jhmmwEZfzaqZ9dv1hd59Z2c4ci9Irm2MLxdymq1KiIpCtg3Y%2BHtBUpX7Rx6iHX%2BeQ9OZWff218v1NTSv7sXnIQZektenf9O15K0hwqPOsbRwBDVY2%2BC6f%2Foy8QM9vWT3WSCbkqG5oIgJyCs8U1pE6KYL5ufuplHfHHbN6hR&X-Amz-Signature=981fcaf8f1ce9bbd3e9ed018de2841d063703d85183e6d978fa288b1f0af61b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
