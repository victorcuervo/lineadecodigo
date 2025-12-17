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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMNDHBH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0SxuEyAvPg9F3sOZfwaaPTsv8XYVtEM7QmhPmvPLLJAiAcQVTi7XN1EN%2BMryzdRXwTOSjVbzMLrTlyvftvk%2F0lXyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMRDXQlf8OUNZswKMDKtwDE9zQayIiD%2BYPQjJjo7H5tYRHsFKE%2FosH7T6o%2FZ4LD97LNr1VMNkOT8NZALY0iUPwzJIfNrfiEL8bwlDf1DiUBnEVm8aM1KCKms0%2FkRxxQAio%2Bb5q1O9sBFXScQgtHYPsuiBTOkz0o72Zd%2BCbO49UjYfijwy0BvCt%2F5jgVD6R1JOSRh8J%2F49ErDuy8vje7ml4vU0e0JmGKoBkwjY4GsfvATHtWVfDY2fqqiTBBujDUuP9NfAMA4Ozluo8N9MDMoQ9Dt0uKKNHtq45YWN4Xu%2F1Y0SWkss0hajWkoMw0kJmmaWF2CfF4crAb5K7WQ%2BzrGbuVnfvDLQgW0mdLrqgVms1NvhyY%2F4BUX%2FTWo9J8HjzGDRj%2FFoJdl6AtVhJCm3jykPHNFeNzpouvC2mcIzDDbJnmgxQ%2FVWr62vb69pP3B8KFehkO2jnWLLoZFHKtY5%2B%2FEaeaa%2BCuJcapaeluzuLuc7yiKyh%2FhOBhq3LmGVaFmdjB1z1ESgNQiO9X%2FKADpvMgdUXSumaIgLux2cXjQ5IwRU%2F4emZEXLUNQLapTM%2BmhXXIbBzBOUxMpqiPr%2BJ0kYwRnjy%2Fdtfynloep7CnhiYr69b6o9Sge54YvRsnjUXzbf4dREkH99gkZtEcTQs86gwtY%2BKygY6pgGnLDrtK4m2FZvv1%2B6OYggdDbTqbFcMB886vD7PEblUIL%2BcLT4jp%2BP0ZQvqXXy9p4RiIz7mZOW%2FI3xNFd1VfwFyqFY1fDFY6mk%2BUndjcYZr8GRjOvvcwUlyx5vn8EadlXwKADTmJ4%2BHHWK6dz3GpRnmDYNUpsGtijFSpY6Tdcs3vEL4wum7NPAOCH3OptaE75P%2BTut47lUSfmAyxxxzurn0UICc3zfQ&X-Amz-Signature=7e86aa83da6f31538c6e536d456cc1cda89b567b6b3a318df21bc571fa732ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMNDHBH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0SxuEyAvPg9F3sOZfwaaPTsv8XYVtEM7QmhPmvPLLJAiAcQVTi7XN1EN%2BMryzdRXwTOSjVbzMLrTlyvftvk%2F0lXyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMRDXQlf8OUNZswKMDKtwDE9zQayIiD%2BYPQjJjo7H5tYRHsFKE%2FosH7T6o%2FZ4LD97LNr1VMNkOT8NZALY0iUPwzJIfNrfiEL8bwlDf1DiUBnEVm8aM1KCKms0%2FkRxxQAio%2Bb5q1O9sBFXScQgtHYPsuiBTOkz0o72Zd%2BCbO49UjYfijwy0BvCt%2F5jgVD6R1JOSRh8J%2F49ErDuy8vje7ml4vU0e0JmGKoBkwjY4GsfvATHtWVfDY2fqqiTBBujDUuP9NfAMA4Ozluo8N9MDMoQ9Dt0uKKNHtq45YWN4Xu%2F1Y0SWkss0hajWkoMw0kJmmaWF2CfF4crAb5K7WQ%2BzrGbuVnfvDLQgW0mdLrqgVms1NvhyY%2F4BUX%2FTWo9J8HjzGDRj%2FFoJdl6AtVhJCm3jykPHNFeNzpouvC2mcIzDDbJnmgxQ%2FVWr62vb69pP3B8KFehkO2jnWLLoZFHKtY5%2B%2FEaeaa%2BCuJcapaeluzuLuc7yiKyh%2FhOBhq3LmGVaFmdjB1z1ESgNQiO9X%2FKADpvMgdUXSumaIgLux2cXjQ5IwRU%2F4emZEXLUNQLapTM%2BmhXXIbBzBOUxMpqiPr%2BJ0kYwRnjy%2Fdtfynloep7CnhiYr69b6o9Sge54YvRsnjUXzbf4dREkH99gkZtEcTQs86gwtY%2BKygY6pgGnLDrtK4m2FZvv1%2B6OYggdDbTqbFcMB886vD7PEblUIL%2BcLT4jp%2BP0ZQvqXXy9p4RiIz7mZOW%2FI3xNFd1VfwFyqFY1fDFY6mk%2BUndjcYZr8GRjOvvcwUlyx5vn8EadlXwKADTmJ4%2BHHWK6dz3GpRnmDYNUpsGtijFSpY6Tdcs3vEL4wum7NPAOCH3OptaE75P%2BTut47lUSfmAyxxxzurn0UICc3zfQ&X-Amz-Signature=c4b711ba8b962c9da1b15a1c0d712a2377f6ffeda73aa1e996c46163c8a59523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
