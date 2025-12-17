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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HQOFAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8EQN3heka126APDUnt2bHmopKsIwz8aKNzXJY7Ss%2F5AIhAI9YUg%2Bh8E1L%2FNa2tghelc3oI9vZ3qx0KZhzg%2B2n4xnAKv8DCHMQABoMNjM3NDIzMTgzODA1IgwCCWF0dmw6C5AZ4iUq3AMqs%2FepuL4xpc99wCxLwd0NMQddO3v43uHS%2FrM8TU004gvKz5ZorR3uSDkjYDopav6LaTlBln4xvJ90NUjn6eCLc7j3Gbx9XWM%2FQhI6I3OncDVefZDTUpXFm9BaUcx%2FlJR1RpT6Tr8dgTB6oU6CuoTO5aE3wGTZKoEf00Hp162dhnxWmilp2TRhudUqDD3h%2FEqyVShToQQAVXezJeYdksVWc4jzCjciSYnPHaXofzl5RWoaqDZQydDAiJEypKv%2Fr6uP9bGPd9w97iryKaqcwATApVqqiyS4ob%2FBKZfrVEjf55CT2ZvYtMqfD9XtB1liVjsrKJZYkCL8Nadk%2BU4slhfOAFSlKM0Nwp5xAGGkDPgOJ49TVnLgt0124fz6LYlLN2p0pMt%2FBL8M2He%2FqXFF0idAwfHr57vApAo%2BuAZtD5uLkpkQQ1Ax7%2BFKG5yMsW9em8N%2BuAjB97%2Ffe78Im3FVJWBDP9Dwxs%2FI6hw%2Bfwey1HTc9Cr31zYHdCKOODl2pRYS3m%2FMv0uFUhLIt%2F%2BoIQHUdhp0fHDDnCZGGxoqgGzfAkCcNcx5J%2FTLBdLwYWOQlPNCDNN2YBtD3Jlw3zJGU8s5RVpmQghIzcxf3y2m4gE3hMikd3vWJGyPQRQ%2BAu0fLjDflYjKBjqkAcrnPNyRayTj0ZUSjC1JBLx9ew8DP%2F1QU2PXZ5KpDl6PMNPJ1LXUDulidH7UHGy2TNJeTDhkvwTGE1bOA7jHuZ0LnRRRwbS9es4u3seQ9dGTlnYQxnPDp1fih4wkdOtz2cEu1dm7XgNcz064FGzOaF3moCd0NBqM0gMbJFcjikbaF6HolOxZgotCchowPC%2Fzqbz2RFWj04kD4xRuAXs8k8vhg2Cw&X-Amz-Signature=daf4167b1da5d70349d86126847d6eab2c645d5b24d41c96673e2ffa3713932e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HQOFAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8EQN3heka126APDUnt2bHmopKsIwz8aKNzXJY7Ss%2F5AIhAI9YUg%2Bh8E1L%2FNa2tghelc3oI9vZ3qx0KZhzg%2B2n4xnAKv8DCHMQABoMNjM3NDIzMTgzODA1IgwCCWF0dmw6C5AZ4iUq3AMqs%2FepuL4xpc99wCxLwd0NMQddO3v43uHS%2FrM8TU004gvKz5ZorR3uSDkjYDopav6LaTlBln4xvJ90NUjn6eCLc7j3Gbx9XWM%2FQhI6I3OncDVefZDTUpXFm9BaUcx%2FlJR1RpT6Tr8dgTB6oU6CuoTO5aE3wGTZKoEf00Hp162dhnxWmilp2TRhudUqDD3h%2FEqyVShToQQAVXezJeYdksVWc4jzCjciSYnPHaXofzl5RWoaqDZQydDAiJEypKv%2Fr6uP9bGPd9w97iryKaqcwATApVqqiyS4ob%2FBKZfrVEjf55CT2ZvYtMqfD9XtB1liVjsrKJZYkCL8Nadk%2BU4slhfOAFSlKM0Nwp5xAGGkDPgOJ49TVnLgt0124fz6LYlLN2p0pMt%2FBL8M2He%2FqXFF0idAwfHr57vApAo%2BuAZtD5uLkpkQQ1Ax7%2BFKG5yMsW9em8N%2BuAjB97%2Ffe78Im3FVJWBDP9Dwxs%2FI6hw%2Bfwey1HTc9Cr31zYHdCKOODl2pRYS3m%2FMv0uFUhLIt%2F%2BoIQHUdhp0fHDDnCZGGxoqgGzfAkCcNcx5J%2FTLBdLwYWOQlPNCDNN2YBtD3Jlw3zJGU8s5RVpmQghIzcxf3y2m4gE3hMikd3vWJGyPQRQ%2BAu0fLjDflYjKBjqkAcrnPNyRayTj0ZUSjC1JBLx9ew8DP%2F1QU2PXZ5KpDl6PMNPJ1LXUDulidH7UHGy2TNJeTDhkvwTGE1bOA7jHuZ0LnRRRwbS9es4u3seQ9dGTlnYQxnPDp1fih4wkdOtz2cEu1dm7XgNcz064FGzOaF3moCd0NBqM0gMbJFcjikbaF6HolOxZgotCchowPC%2Fzqbz2RFWj04kD4xRuAXs8k8vhg2Cw&X-Amz-Signature=50b438714521f6d814eff9179d200324427123250542ab86ac569679e427f624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
