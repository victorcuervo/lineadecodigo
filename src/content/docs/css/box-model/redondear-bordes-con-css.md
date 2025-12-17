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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PLI5UL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy9fXpm0xO9ODcd9Ut%2B5Nw69JY52xSqC7%2FkCOUe9oMdAiEA%2BHScKh0OSFnNa%2BnJvM8y8mztLhqBI6stI0FjIon4r6oq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAmGdTTAsg13PvBtmSrcAy2kPp4nelmsuh6uf%2F3jHCN8ZEFbDXopBhfrSJGH3pDh7%2Bh%2BZUjPIKyv3GljqcqauD0sTjxIbzrUY2G%2F2h1bdgrUWbhW47PwukStW0tSERUeDCrCj12SoA5Bylt0cNfVjk3bp3SEVD0ZyQJ9BmGRwWNA9xsGwH9vl9ZnJlUOOq%2FVz1CvJUFtPYkAvXfW8lSiCYgPucOZ8W5Q6VuMP3kVW7%2BZc2N5LSsyM%2F22DYmsLpnurhnQ2U6t1l0PRkj%2FSUxm6fval3%2FWlvisu8mJPl%2FistRNsKU3RGWxu2IRil3K3YZ5QdTaTS4KpraOF%2BRkGHJlBYYlashXr8i%2B1Tciyjevj%2B7ccOXto%2BYc3anYZuI2fh9yxQjcRwUsXQvlJFkfFhCOaM%2BNmxZJihPRR%2FB%2BpOsmnTUqX6LkR%2BjVPFAB%2BScsPE5x%2BS%2BwwvGF4%2BeUKOo4GbjAVhA7WxYyZu1OcHcxwEN1k07CH8e5pIsbJAmjCCpkBSQZwrWqJ6jBcJgASFzVHyTPQ3yYBL0WY9XYzJo%2FaniImjqOuYBxzmwOz6V34jSiGNialChXDWb2nNyQ2gssmzHvO5uEOke2BYz%2FHMV3V3C1F2JdnJsljnBnJWsX%2BGfFbyp45NUP%2BAotpx7geLwIMMfvicoGOqUBqDBGEjYmR%2FNs%2F10t%2F%2FrTp6xFhjBGL8DNdN%2B2r8OHdb33XUpc7ULUEyZw8Uy3ZCWpXt%2FqRSA1wLA%2Fu94ukWnpwGAqo521HrcQkCtRRDJ%2Fi9EEgbTD9LqOvkrdu3sCEjF2%2B8k%2FK7P5BNcYXpmIcNtpwQWrljCmSxXH6fIy3Gt0luItL4jC7pffEze5GweOYLGIGMPoBkHEh8Qhy2JtaTEOA7LifiqH&X-Amz-Signature=6ee02c772a7501ab90a0ad095d836c60258b4855927a670cc3952c19573470d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PLI5UL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy9fXpm0xO9ODcd9Ut%2B5Nw69JY52xSqC7%2FkCOUe9oMdAiEA%2BHScKh0OSFnNa%2BnJvM8y8mztLhqBI6stI0FjIon4r6oq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAmGdTTAsg13PvBtmSrcAy2kPp4nelmsuh6uf%2F3jHCN8ZEFbDXopBhfrSJGH3pDh7%2Bh%2BZUjPIKyv3GljqcqauD0sTjxIbzrUY2G%2F2h1bdgrUWbhW47PwukStW0tSERUeDCrCj12SoA5Bylt0cNfVjk3bp3SEVD0ZyQJ9BmGRwWNA9xsGwH9vl9ZnJlUOOq%2FVz1CvJUFtPYkAvXfW8lSiCYgPucOZ8W5Q6VuMP3kVW7%2BZc2N5LSsyM%2F22DYmsLpnurhnQ2U6t1l0PRkj%2FSUxm6fval3%2FWlvisu8mJPl%2FistRNsKU3RGWxu2IRil3K3YZ5QdTaTS4KpraOF%2BRkGHJlBYYlashXr8i%2B1Tciyjevj%2B7ccOXto%2BYc3anYZuI2fh9yxQjcRwUsXQvlJFkfFhCOaM%2BNmxZJihPRR%2FB%2BpOsmnTUqX6LkR%2BjVPFAB%2BScsPE5x%2BS%2BwwvGF4%2BeUKOo4GbjAVhA7WxYyZu1OcHcxwEN1k07CH8e5pIsbJAmjCCpkBSQZwrWqJ6jBcJgASFzVHyTPQ3yYBL0WY9XYzJo%2FaniImjqOuYBxzmwOz6V34jSiGNialChXDWb2nNyQ2gssmzHvO5uEOke2BYz%2FHMV3V3C1F2JdnJsljnBnJWsX%2BGfFbyp45NUP%2BAotpx7geLwIMMfvicoGOqUBqDBGEjYmR%2FNs%2F10t%2F%2FrTp6xFhjBGL8DNdN%2B2r8OHdb33XUpc7ULUEyZw8Uy3ZCWpXt%2FqRSA1wLA%2Fu94ukWnpwGAqo521HrcQkCtRRDJ%2Fi9EEgbTD9LqOvkrdu3sCEjF2%2B8k%2FK7P5BNcYXpmIcNtpwQWrljCmSxXH6fIy3Gt0luItL4jC7pffEze5GweOYLGIGMPoBkHEh8Qhy2JtaTEOA7LifiqH&X-Amz-Signature=0427ac728157576a50a6f4393c82f160abdb95995d3747ed3fad53068214f034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
