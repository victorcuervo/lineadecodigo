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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVDQUGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDLqnoRDCD7bO%2FCLKQJT0hZe6Bg4cJKLcCIjCSixn%2FKwIgX7%2FZohVI7zfizeJZg%2B%2FVbaM97UM%2FryUG3DMg%2BtwL7c8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNOk9KWKbMImB6tWircA9M2kt8k1RYexrwShoi7l4cJGo83e%2Fm8RmEHjm7u4b8UMHQ6mJMVga79REODK7jw%2BXk%2FikY%2FXhz2VbdPUR3IIZ1yFkzlIUicl831KXYXQNx6sYN1hBxxi0d4JoZlDnmqrMU5lKbQEMk3FZcR3tjS%2B7X9O9MtJqyXNXypHMqtvSeh9xJw40wMhVQGJlZdqI9Uypr91QUamCjt28sCzpu9LwzRB%2FJiHRTz2WjGWYBhr2dzCYaEkyDE%2BK6%2FR05Ls3DLthcfZRrwXlW9BWzJ5jMq4IRIB3k6RhyxjkAc9VYk8rku0sFYi%2BzYgEDgMPMp0Bf7qdxDHYgiUord53ANQuHBE2LTfKqX3OWZIRekIYtXHo%2BxqbdbcNaIx8Nch0Cz9dXUCjOvBUQcJxRICcsIhpXsFFWabyLu8b6%2BDdDvBKfexhr2pEDSRQcq5f4IC9AwgT5PEMjFbrXfPNEXgUf3nINORSCScmAWMI%2Bf9gzK8m7z81Ki8t9BVy%2FH1FC3OGgqmFfnXS4GLhAkKFHhTkg3ux9QmzY13Hf0KeUwMMk32JhZ%2Fdv8mNKYyINjFa8cz257RHXdzJ%2BXS1mECZnpB2hsDqPUSny%2BxqHXLHrKrA1GdMCr35tAYyYUGP10dWKsdrDpMIaAi8oGOqUBtICEaqPSu5Jhre1UFp1agE61tFbOEnrHOVev3jr89d1KTczNShLG%2FUGlvW5ZI6bSGNgECpZnsndWmEDE3OLIxtR09UyzlwXy61rnBpNquw5gMzg94G3jfs0aCahpNckfpoPXqk1BYkg0Tft1dhubW2dWCDiydPhWb5IUb2eUtCV5gH5N9WHO833BfVT0AINqKtr5X8g5P23XNxPN6x%2FJZKIm94%2Fy&X-Amz-Signature=46ed6a5f75914ca9bd2e8fc489455cebe0fcd4ae6f4c0981167b7545cde80bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVDQUGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDLqnoRDCD7bO%2FCLKQJT0hZe6Bg4cJKLcCIjCSixn%2FKwIgX7%2FZohVI7zfizeJZg%2B%2FVbaM97UM%2FryUG3DMg%2BtwL7c8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNOk9KWKbMImB6tWircA9M2kt8k1RYexrwShoi7l4cJGo83e%2Fm8RmEHjm7u4b8UMHQ6mJMVga79REODK7jw%2BXk%2FikY%2FXhz2VbdPUR3IIZ1yFkzlIUicl831KXYXQNx6sYN1hBxxi0d4JoZlDnmqrMU5lKbQEMk3FZcR3tjS%2B7X9O9MtJqyXNXypHMqtvSeh9xJw40wMhVQGJlZdqI9Uypr91QUamCjt28sCzpu9LwzRB%2FJiHRTz2WjGWYBhr2dzCYaEkyDE%2BK6%2FR05Ls3DLthcfZRrwXlW9BWzJ5jMq4IRIB3k6RhyxjkAc9VYk8rku0sFYi%2BzYgEDgMPMp0Bf7qdxDHYgiUord53ANQuHBE2LTfKqX3OWZIRekIYtXHo%2BxqbdbcNaIx8Nch0Cz9dXUCjOvBUQcJxRICcsIhpXsFFWabyLu8b6%2BDdDvBKfexhr2pEDSRQcq5f4IC9AwgT5PEMjFbrXfPNEXgUf3nINORSCScmAWMI%2Bf9gzK8m7z81Ki8t9BVy%2FH1FC3OGgqmFfnXS4GLhAkKFHhTkg3ux9QmzY13Hf0KeUwMMk32JhZ%2Fdv8mNKYyINjFa8cz257RHXdzJ%2BXS1mECZnpB2hsDqPUSny%2BxqHXLHrKrA1GdMCr35tAYyYUGP10dWKsdrDpMIaAi8oGOqUBtICEaqPSu5Jhre1UFp1agE61tFbOEnrHOVev3jr89d1KTczNShLG%2FUGlvW5ZI6bSGNgECpZnsndWmEDE3OLIxtR09UyzlwXy61rnBpNquw5gMzg94G3jfs0aCahpNckfpoPXqk1BYkg0Tft1dhubW2dWCDiydPhWb5IUb2eUtCV5gH5N9WHO833BfVT0AINqKtr5X8g5P23XNxPN6x%2FJZKIm94%2Fy&X-Amz-Signature=8d18ef858580e7226149ddfee1934d7027a4f4c692f64f8e894a63bf00b9daba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
