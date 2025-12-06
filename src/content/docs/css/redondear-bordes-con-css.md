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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7UBGWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBLDHj44MqHwzADlC3jFRD7ZMjmc%2FUZpkB0PMvwHLsVwIhAMdJBdMhshbF%2B02siVnUo3N3DUZp7QGSJpKCvKcMro7fKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAraJNVMPFPtO7Gtkq3APIiNPDnLE4A7BJRHojypflZupOg93lAtX2kbJXb4INahDm6llgxyye7noxVl6QUbv42wqqp1Ap9fi0Mrv5MyFRiftIvaA0SKtmZvRe6a3z6Qq2103namb3ep7SvaqcZu408uWsqONz%2FeRc9To2HFFry3kWDmy3ey5keWA7hwZq1kZkhG5qU53xKxliafaD8yNxEX47tM5Yc4uj5vtt5SKLGDr8aEAT7ek%2FOq5MaOv%2BFjwW4IswOARWn%2FNo0H3brhtTD%2F9qm9c1JCRBVGUnBmkqMlsHHpHBELF3v9kwGk%2B8dYdwQz5X6bEqHmUuYMwhMwRwZ%2B8lujAv9zknpON3DecTBE2F0JO9FlyPiM3GDpEP7NthzW8JUqKQfFgO52CKUn2AhILJkZ0qguxjViWppmHpNTcX6p8NyaguESXBfSeGIDROUTFq8dTEso4Yvm4T1PAqL3ugoiNFIEu6RZn6AEkCylri02uGJXQEWLmk7nOPzaY5TQrQXbOp%2BW7h9Ki2hSzDC%2BMYV4z4vVEFOnqrjWfddrcwJ26lIRTPby83si7C4tHPrsRV0ECPSjjuTZvHHFGgU2%2F%2FshlMcehaBwfwRYI%2Bz1Vh2m4utz4oKhfGxUoNkwf229H0vxQPkBBOTzDiptDJBjqkATim34OVO%2BkG43LM%2FhH88BcC%2B%2FZk7JHIw63%2F9wCNWyISbSKhZyZa2YyK6w4GA991N0d%2FY0HEPk8QDvtywqdU%2BGQKJdsHM3pyAKuWhi%2FL0UnR5RDiEBwb%2FIg8wQdsqRJMCPPovtD14kp9aHLEWo0GdEUHtsinAlCQXfkjlBfl0QZS%2FiLUWkGjT8Te%2Fm6NFxeCls2gIK6Gb5U1mRqi4cRZYLfGnVCp&X-Amz-Signature=9575182327380755051edf0d67accd0591b9fda3747fd9910472653aeae4c615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7UBGWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBLDHj44MqHwzADlC3jFRD7ZMjmc%2FUZpkB0PMvwHLsVwIhAMdJBdMhshbF%2B02siVnUo3N3DUZp7QGSJpKCvKcMro7fKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAraJNVMPFPtO7Gtkq3APIiNPDnLE4A7BJRHojypflZupOg93lAtX2kbJXb4INahDm6llgxyye7noxVl6QUbv42wqqp1Ap9fi0Mrv5MyFRiftIvaA0SKtmZvRe6a3z6Qq2103namb3ep7SvaqcZu408uWsqONz%2FeRc9To2HFFry3kWDmy3ey5keWA7hwZq1kZkhG5qU53xKxliafaD8yNxEX47tM5Yc4uj5vtt5SKLGDr8aEAT7ek%2FOq5MaOv%2BFjwW4IswOARWn%2FNo0H3brhtTD%2F9qm9c1JCRBVGUnBmkqMlsHHpHBELF3v9kwGk%2B8dYdwQz5X6bEqHmUuYMwhMwRwZ%2B8lujAv9zknpON3DecTBE2F0JO9FlyPiM3GDpEP7NthzW8JUqKQfFgO52CKUn2AhILJkZ0qguxjViWppmHpNTcX6p8NyaguESXBfSeGIDROUTFq8dTEso4Yvm4T1PAqL3ugoiNFIEu6RZn6AEkCylri02uGJXQEWLmk7nOPzaY5TQrQXbOp%2BW7h9Ki2hSzDC%2BMYV4z4vVEFOnqrjWfddrcwJ26lIRTPby83si7C4tHPrsRV0ECPSjjuTZvHHFGgU2%2F%2FshlMcehaBwfwRYI%2Bz1Vh2m4utz4oKhfGxUoNkwf229H0vxQPkBBOTzDiptDJBjqkATim34OVO%2BkG43LM%2FhH88BcC%2B%2FZk7JHIw63%2F9wCNWyISbSKhZyZa2YyK6w4GA991N0d%2FY0HEPk8QDvtywqdU%2BGQKJdsHM3pyAKuWhi%2FL0UnR5RDiEBwb%2FIg8wQdsqRJMCPPovtD14kp9aHLEWo0GdEUHtsinAlCQXfkjlBfl0QZS%2FiLUWkGjT8Te%2Fm6NFxeCls2gIK6Gb5U1mRqi4cRZYLfGnVCp&X-Amz-Signature=f535f205804fbec1db78e686bf6ffa35cd101a57abe65b36941988377f271c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
