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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPULEI5R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcLeKJ4wmDyD6Y0gdxiMQKdDdJNplPVAEMTXDeiYql6AiBM4C%2BRaPHvG2oCdwXGlNbXVb7Qe10GNUKOGj%2BTRZeBrSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmFSOyenOL9B9egimKtwDW1cb9zwxYddSCddBtVB0inR2g6aqXHALgaIPTS%2BtgzLkR7qsDlWVzZTslvCvz22tfpGvKszj4Jg3GRhKW7%2BB4Ji1Sb%2FBqcAkVUBLhu033C37yxuDIyJNt4VyO8CmkasdudHDNht9L7D7ZTSwQrbe%2FE6C4KU89fS6YxUjFNn1HlCgmkC1RUOj6MYmLz5h7ZzZff4n94VTaOuVXbqSi21%2BDGnHJ0AK7tR1%2FiKZMAcPKsPp7MJxFFNEl8YF74jqlo7ck9tBa6OwD6dXvELJcwLHiWMBLcHAO8p5bMs4J6%2BywY%2BPj%2Bxrh2522nMYwgg%2B99%2B34rucA0TYWurqM3Bj%2FyqFqH6OsPTaZh%2Fbc%2F63ciNloz4n7E6r2XvxhC68JOmc5KKi98ZMv2pPQVnf7cyPMDDsBTE9elU7S24w51Ulw5QAyIeHun7yreX2EJqSG2etFnwWpDhEDTfDGTeEJm4Gx6CYgdSFshUlhn3FOPFrwtw978Vx2wAbXWqKmblTQHxiNQ7KH8RHH6vMN1IQ2nNnatC5tXej0fjiJUDYBsiyjf%2FtFa8dTEITajRLljm7XastZyNoqUUqTpwV%2F5nKKz9ShYdCORmw7%2By%2BNjjaylS6UwdPnqCRCoEYBYr9eckrQgUwgMnKyQY6pgE3WOUXXrKZHpc2O4iGdabyStKbvgLfEzcLewSJC23UQxFSv%2Fo7Y8NDm%2F4oOy3zwDaH228IhtQtG%2BO1VdjtnQRSpVGj1QlDMaNVG7IySPdngvYjFg2Dm0fs2ExlbErJ32tWrS73JCuIZvkyykpBHLgiIlnJuOfwDr%2Bi5PMLD29jtWYnUVJvRAQueBdIFEQo1rweosAWDl6mbbT7NBCOUWU1YsjQP8qS&X-Amz-Signature=c39d117cb648196f34ac7cf5724fa547e526e32c4ab5d7b6b7ba6404a745d202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPULEI5R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcLeKJ4wmDyD6Y0gdxiMQKdDdJNplPVAEMTXDeiYql6AiBM4C%2BRaPHvG2oCdwXGlNbXVb7Qe10GNUKOGj%2BTRZeBrSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmFSOyenOL9B9egimKtwDW1cb9zwxYddSCddBtVB0inR2g6aqXHALgaIPTS%2BtgzLkR7qsDlWVzZTslvCvz22tfpGvKszj4Jg3GRhKW7%2BB4Ji1Sb%2FBqcAkVUBLhu033C37yxuDIyJNt4VyO8CmkasdudHDNht9L7D7ZTSwQrbe%2FE6C4KU89fS6YxUjFNn1HlCgmkC1RUOj6MYmLz5h7ZzZff4n94VTaOuVXbqSi21%2BDGnHJ0AK7tR1%2FiKZMAcPKsPp7MJxFFNEl8YF74jqlo7ck9tBa6OwD6dXvELJcwLHiWMBLcHAO8p5bMs4J6%2BywY%2BPj%2Bxrh2522nMYwgg%2B99%2B34rucA0TYWurqM3Bj%2FyqFqH6OsPTaZh%2Fbc%2F63ciNloz4n7E6r2XvxhC68JOmc5KKi98ZMv2pPQVnf7cyPMDDsBTE9elU7S24w51Ulw5QAyIeHun7yreX2EJqSG2etFnwWpDhEDTfDGTeEJm4Gx6CYgdSFshUlhn3FOPFrwtw978Vx2wAbXWqKmblTQHxiNQ7KH8RHH6vMN1IQ2nNnatC5tXej0fjiJUDYBsiyjf%2FtFa8dTEITajRLljm7XastZyNoqUUqTpwV%2F5nKKz9ShYdCORmw7%2By%2BNjjaylS6UwdPnqCRCoEYBYr9eckrQgUwgMnKyQY6pgE3WOUXXrKZHpc2O4iGdabyStKbvgLfEzcLewSJC23UQxFSv%2Fo7Y8NDm%2F4oOy3zwDaH228IhtQtG%2BO1VdjtnQRSpVGj1QlDMaNVG7IySPdngvYjFg2Dm0fs2ExlbErJ32tWrS73JCuIZvkyykpBHLgiIlnJuOfwDr%2Bi5PMLD29jtWYnUVJvRAQueBdIFEQo1rweosAWDl6mbbT7NBCOUWU1YsjQP8qS&X-Amz-Signature=18858e8e4d090755a43333d644a7c2518c64fdbdd72a5e42e99700982177c53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
