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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6OV6GK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDYYg9qtl5fq1ksNz0RSXfF81YUOlrhKNBazZdDLXqkFAiEA%2FHAVvddwq9vbMpbZew4gzhnfwG1Pc0vLMChLs6ss9Foq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJO%2BdmjgIpB6abK6myrcA1RuSIdnsvPVE%2FeJ9OX71PBO2pZ0c%2BabMUSmcTxP%2FufdqQ4a3mFXjlrlErBG0zht7MPQVQfOrd9P6J%2FDf0njaze0uLfjzaVwAsDyWGAbJdzs7lsnFtZLqn3U2S2NgqctyeUBJznb4Y%2FkVY3UImih0G5WnBIUXaAzuJg5joaN1Vs9ZA%2Fw34vKO0jeAYqYd8f5ICT6ByUKQISGokb7cNnRYki65zHDHO7BgnX%2Fh02WexlIxpwgzh25s5COYhbQtqI29JfU4fqT1eBMTO%2FyF%2BqYbXC9HtKAKxPf98%2FihwZhCPBc8aVvbh9iO1CgwrJGvvoWVrCR85gi6%2BaRQDuyJEpwuHu70Of07ISxnwaitNFhW6qphpOycBdKtgw0yZN%2F9HVpV3Ulngg0WqUOFHI35uXvvgbL3t8adX%2BQbWixQ0PkNAraIjARHjgNSQGesvVzcpF0trBJoXh4HfqoiZIdsz4Jxcun6IJHIJuRMS7mwq7Swc%2BYwxWpQg0L15idgKN1ilE3E%2BWL3RsOk3sW0OPieaxZOWICYlI55zYF59GDkuhly1UmosiwzS6TYDZyZ5MW1YY%2B4fT24Pj2g0PHLeoA1VFaleoCN%2FnZoI9ZZrOKHe4xbfgPsjV2sLyaNVUUhO7CMLCuxMkGOqUBeTRZ5FcO8eLw521xHVxhGtNAG67ll6WZNWSSHBsa%2BqorO3ReNYwr2NLxzSsQp3Z0695x99%2BuQBA2M5IX8NxCTnzMSFWw1846VtOyJz4ziPOUhGh8reQC2O0p8PgV%2F%2BsW7HynvG47yJCkIdtdxgtPXcdC1pvDC%2F%2FWHYb6TIkpHuGAzfOkSzWnvzYj80S7bZo3E50Fx4Mrm0XJvyn9aNnZ47Uefjyg&X-Amz-Signature=194d495355f8afa7ef52897256005ddfdc66ac465dd696ea6d7fe72215b4e819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6OV6GK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDYYg9qtl5fq1ksNz0RSXfF81YUOlrhKNBazZdDLXqkFAiEA%2FHAVvddwq9vbMpbZew4gzhnfwG1Pc0vLMChLs6ss9Foq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJO%2BdmjgIpB6abK6myrcA1RuSIdnsvPVE%2FeJ9OX71PBO2pZ0c%2BabMUSmcTxP%2FufdqQ4a3mFXjlrlErBG0zht7MPQVQfOrd9P6J%2FDf0njaze0uLfjzaVwAsDyWGAbJdzs7lsnFtZLqn3U2S2NgqctyeUBJznb4Y%2FkVY3UImih0G5WnBIUXaAzuJg5joaN1Vs9ZA%2Fw34vKO0jeAYqYd8f5ICT6ByUKQISGokb7cNnRYki65zHDHO7BgnX%2Fh02WexlIxpwgzh25s5COYhbQtqI29JfU4fqT1eBMTO%2FyF%2BqYbXC9HtKAKxPf98%2FihwZhCPBc8aVvbh9iO1CgwrJGvvoWVrCR85gi6%2BaRQDuyJEpwuHu70Of07ISxnwaitNFhW6qphpOycBdKtgw0yZN%2F9HVpV3Ulngg0WqUOFHI35uXvvgbL3t8adX%2BQbWixQ0PkNAraIjARHjgNSQGesvVzcpF0trBJoXh4HfqoiZIdsz4Jxcun6IJHIJuRMS7mwq7Swc%2BYwxWpQg0L15idgKN1ilE3E%2BWL3RsOk3sW0OPieaxZOWICYlI55zYF59GDkuhly1UmosiwzS6TYDZyZ5MW1YY%2B4fT24Pj2g0PHLeoA1VFaleoCN%2FnZoI9ZZrOKHe4xbfgPsjV2sLyaNVUUhO7CMLCuxMkGOqUBeTRZ5FcO8eLw521xHVxhGtNAG67ll6WZNWSSHBsa%2BqorO3ReNYwr2NLxzSsQp3Z0695x99%2BuQBA2M5IX8NxCTnzMSFWw1846VtOyJz4ziPOUhGh8reQC2O0p8PgV%2F%2BsW7HynvG47yJCkIdtdxgtPXcdC1pvDC%2F%2FWHYb6TIkpHuGAzfOkSzWnvzYj80S7bZo3E50Fx4Mrm0XJvyn9aNnZ47Uefjyg&X-Amz-Signature=bbd87df4f5f2d839bbd562bb8ec371dc809d1892b24b9e1fef235f33ec481bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
