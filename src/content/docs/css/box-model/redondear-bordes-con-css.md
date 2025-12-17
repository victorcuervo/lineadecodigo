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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622K2WUDX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCag1ar%2FRzSVzB1LaZiovc3EI9dd6osD3gEzKNiF2VMzgIhAKWb%2FkbmJvrPpLP%2FQCpmPyQgfKSuA%2Fary4Ti1nr%2FCF8wKv8DCHsQABoMNjM3NDIzMTgzODA1IgxxlMlEGmGPaBwsDKMq3AP0Dvj4hQEcj64gIHNh28ykCIxewgh3FFBS14Dt54vAI0jLr8dU6d%2Bb2oemf1RDOMMxfr7QBa78yLpaPGJcjrBPF9fmOrOFxYlYo2VmtV6eOO1Fa%2FaZOi2KIcuPMjVozNAgg6haNsjk%2FsXMKic6JjmhucrFSho9mbu7EqWxBvHbsLn88WwYCgo7etpIIyA%2F1nASdeWUsfSOOWP2kYII6dwRJaXgNCHobuL0iPI2yTCx3x52zOlCYqDLR8gTCZaklOeoiLqFIT7i2sQzcaQ49ztI0jiwsod3GuTaQPnQL2Wr%2FNXdyHQs%2FJdI0eiSl7icDMm5rggGdB2kA%2FJ6t%2BGTcS%2F7HtZT%2FhG0a45h7MFui6%2B0jpFspFY7bVcMnUIdPZjKRsOxTSf6Bo475%2Ff5qa7fOdsD9SWscu4v6h5O8DtvA25FdFVEeeN6WrjnMaFxPXOizu445rcqDk%2Ffc7ZU48aEPjVzHozFMl8g1caf05gDWBoD31rjwULslF0OWwwoHYpZ0Kon2JL%2BEtxlPOMxWLLH6x5IHlZeSgH0oLZAxysFnjecOR4nb4%2B5oUiGGnKZFH8xvBI6iX2Qgl6UYkCOboUGnazd%2BwoWNnhNKivaZfyfBt0nfrj%2Bu0AHUzPnk4ZIizDl8InKBjqkATTqIKrQvg7hMNd3iyAeXBSbhl6VkG%2By0P3NclhMfw9sDd7tEhNi%2BO7r6%2BrgVcKMaCBJPbLyTjXKFtLzyBmENupcgRCdshoq6GOH%2Bhsq5pjPyAZRD48TGR1T9wFkwbTcULKsvArAY7Bs9b7y9ACLDeQcwTbpy%2BPm%2FKQMrXBktiFfFw5obW0j5K391kkzmoNokz%2FJRTkF1COsYN%2FXkw6irlgdF5r%2B&X-Amz-Signature=a05c3e1424e978a22373ba14e91a40e51947885caa2f2d8aa6c5c8feb404f45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622K2WUDX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCag1ar%2FRzSVzB1LaZiovc3EI9dd6osD3gEzKNiF2VMzgIhAKWb%2FkbmJvrPpLP%2FQCpmPyQgfKSuA%2Fary4Ti1nr%2FCF8wKv8DCHsQABoMNjM3NDIzMTgzODA1IgxxlMlEGmGPaBwsDKMq3AP0Dvj4hQEcj64gIHNh28ykCIxewgh3FFBS14Dt54vAI0jLr8dU6d%2Bb2oemf1RDOMMxfr7QBa78yLpaPGJcjrBPF9fmOrOFxYlYo2VmtV6eOO1Fa%2FaZOi2KIcuPMjVozNAgg6haNsjk%2FsXMKic6JjmhucrFSho9mbu7EqWxBvHbsLn88WwYCgo7etpIIyA%2F1nASdeWUsfSOOWP2kYII6dwRJaXgNCHobuL0iPI2yTCx3x52zOlCYqDLR8gTCZaklOeoiLqFIT7i2sQzcaQ49ztI0jiwsod3GuTaQPnQL2Wr%2FNXdyHQs%2FJdI0eiSl7icDMm5rggGdB2kA%2FJ6t%2BGTcS%2F7HtZT%2FhG0a45h7MFui6%2B0jpFspFY7bVcMnUIdPZjKRsOxTSf6Bo475%2Ff5qa7fOdsD9SWscu4v6h5O8DtvA25FdFVEeeN6WrjnMaFxPXOizu445rcqDk%2Ffc7ZU48aEPjVzHozFMl8g1caf05gDWBoD31rjwULslF0OWwwoHYpZ0Kon2JL%2BEtxlPOMxWLLH6x5IHlZeSgH0oLZAxysFnjecOR4nb4%2B5oUiGGnKZFH8xvBI6iX2Qgl6UYkCOboUGnazd%2BwoWNnhNKivaZfyfBt0nfrj%2Bu0AHUzPnk4ZIizDl8InKBjqkATTqIKrQvg7hMNd3iyAeXBSbhl6VkG%2By0P3NclhMfw9sDd7tEhNi%2BO7r6%2BrgVcKMaCBJPbLyTjXKFtLzyBmENupcgRCdshoq6GOH%2Bhsq5pjPyAZRD48TGR1T9wFkwbTcULKsvArAY7Bs9b7y9ACLDeQcwTbpy%2BPm%2FKQMrXBktiFfFw5obW0j5K391kkzmoNokz%2FJRTkF1COsYN%2FXkw6irlgdF5r%2B&X-Amz-Signature=716bc4b78a233deb2c121fe391ff16ed2870cf358b1b886e2c653f7af9350ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
