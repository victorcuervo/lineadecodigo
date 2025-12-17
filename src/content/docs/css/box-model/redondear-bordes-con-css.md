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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPM25DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwilYCCPaeeBqcLGzmAaJ3MBaviIV0CntULH2T6UNgKQIhAKWCn56LJjhajKrsELTmDMPNmp2AvW8xDFR%2FVEIU4QHnKv8DCHcQABoMNjM3NDIzMTgzODA1IgwzElTWNCWzb80wt2gq3AN7R6A%2F0MzmWLxAgxmb38QmDAlsbBiEgVZ53bs%2BUU0Jv5T7DEIiORkN35hU8B3XdH1NsZpqTHzEBfI0wf%2FhXPx8vBuSwcE3GqteV7FknRjxWzxFYZLMnouvNwspetCCnXp0Wqb7kqsBshlULiGI7I8X8184Xe4FneGrUAneqhY3VINDJPLXinpwxTnGiUFMr3NrqBvxYr3CI4H76os8K3Px5Iz0TrG24nbz5jfZeHDDs6nn5IArdbeKg23EeHvhPv5QMBFUlClz0bD9JOvrEMfun%2BY2L%2B%2BSLM0tKt1%2FaAu6x8n%2Foxm6nufPdOdG7geGGTBDzswaXIUvP94SDjg1un64EtwipGwtYsyTUrR1Q9E796Y91m4732zyALdijYl8x8D4p9L01fVTVFPFmQYCeTnNSoYwElgDwOtXomOHlsGckwtHQJ1u7hO1YAK0fVJhOv%2BiO2c3Z6YF4SvAHd4GUQOfw7%2BBlGBpOsv4X%2BPO80bnQ3%2FdOBmYfiRMXVPIiRx5nbcI2gRhU5iQnHdYF9pGkl2kGpCjbzBg7tX2dCdxftcpjXvWHDKLJQHCP0C44X66PHCP7%2F4q8BDh8TQHkqb9CxE7CE8BGI%2Fe7vDycKQ%2Fpj0hi4hMdK3ELhiNRyL5mDDRg4nKBjqkAVyASlysPnNa3nJ%2B%2F0pwZie%2FoIvRBLWg4uEDiTaL%2FGNVjSiLG6IzW2cpGvAHOQLEMW8C4M41lt%2FMXc2GS2ojDjQszaT5lsrhzRDODswQ7tAtVfw5LLAM%2F1tbsk7xSQ%2FmNgTnNHO68QegEoOe7uFrtYwydaSqjXMWOWIYHrV5l1lx%2FezIgBoh6UMv9OAI4qG3QskL9FH%2FALXLDDz5pt%2B9EmDqqen7&X-Amz-Signature=cbd2e5f0aff29237e39bacd2a448f9371b7665f136a743067778b181d37243a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPM25DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwilYCCPaeeBqcLGzmAaJ3MBaviIV0CntULH2T6UNgKQIhAKWCn56LJjhajKrsELTmDMPNmp2AvW8xDFR%2FVEIU4QHnKv8DCHcQABoMNjM3NDIzMTgzODA1IgwzElTWNCWzb80wt2gq3AN7R6A%2F0MzmWLxAgxmb38QmDAlsbBiEgVZ53bs%2BUU0Jv5T7DEIiORkN35hU8B3XdH1NsZpqTHzEBfI0wf%2FhXPx8vBuSwcE3GqteV7FknRjxWzxFYZLMnouvNwspetCCnXp0Wqb7kqsBshlULiGI7I8X8184Xe4FneGrUAneqhY3VINDJPLXinpwxTnGiUFMr3NrqBvxYr3CI4H76os8K3Px5Iz0TrG24nbz5jfZeHDDs6nn5IArdbeKg23EeHvhPv5QMBFUlClz0bD9JOvrEMfun%2BY2L%2B%2BSLM0tKt1%2FaAu6x8n%2Foxm6nufPdOdG7geGGTBDzswaXIUvP94SDjg1un64EtwipGwtYsyTUrR1Q9E796Y91m4732zyALdijYl8x8D4p9L01fVTVFPFmQYCeTnNSoYwElgDwOtXomOHlsGckwtHQJ1u7hO1YAK0fVJhOv%2BiO2c3Z6YF4SvAHd4GUQOfw7%2BBlGBpOsv4X%2BPO80bnQ3%2FdOBmYfiRMXVPIiRx5nbcI2gRhU5iQnHdYF9pGkl2kGpCjbzBg7tX2dCdxftcpjXvWHDKLJQHCP0C44X66PHCP7%2F4q8BDh8TQHkqb9CxE7CE8BGI%2Fe7vDycKQ%2Fpj0hi4hMdK3ELhiNRyL5mDDRg4nKBjqkAVyASlysPnNa3nJ%2B%2F0pwZie%2FoIvRBLWg4uEDiTaL%2FGNVjSiLG6IzW2cpGvAHOQLEMW8C4M41lt%2FMXc2GS2ojDjQszaT5lsrhzRDODswQ7tAtVfw5LLAM%2F1tbsk7xSQ%2FmNgTnNHO68QegEoOe7uFrtYwydaSqjXMWOWIYHrV5l1lx%2FezIgBoh6UMv9OAI4qG3QskL9FH%2FALXLDDz5pt%2B9EmDqqen7&X-Amz-Signature=241c74fac9eb71b0f1334c64d3291b92245aa0a844b56d44f009bb45beb82e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
