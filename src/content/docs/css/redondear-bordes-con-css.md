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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT5K3QC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmXwORVUKS0niN3d6ehcUWQceL%2FdLt0jaYzKPp2TYgvAiAozukLZRGqH2T76%2BE6fm7ahP%2BExSVkhkYFhiiQeBDr4SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGrS7H9gkCfRCCq7QKtwDI0TQ1LvD78zehE%2F%2BWKA84qXilY4gNq0zfSfRp%2FXEeZPxuNs86M%2FwLU2HnQKxvhUefwCBGpDaO2s42rKsxCSW0us5amG9RodNOEbLl6rr%2BlP3NzNjCIZlxLA2GNpyb2LVPnm1VFR4qnJWl3i9uYm%2F0gTqP%2FEwHsRk2SPfswV5GWE2Hd32yasyBtbiw4GBgdqKMrVy8%2BHzp1LHy8SkoGDIl%2BHFBqr%2BQ0%2FO5HDJnbeK0r44o%2FxmZhJm9y2DUeNC036ot2IqcFvfeoleJXr07BDa6IpPdLI5vZo78pvkDMFGODSSEo2TIcqnypB4Rdi3b1KIuIoZqABNym5UButTL3cII%2FZK6aWntcaI7lKd7fUG5EpPtYzzcNZKEO2XZ7v%2BXcgTudSEOOKnHN92uDI6xbmt%2F16pleCIwEZypis%2B5olQhNmVr9uWzjjAIyNDNR%2BgnhM%2Fe69ktJar%2FeprMj6zQYQsxO5lH4Sv2eaq%2Fcp3hwBgLcuu2v7R%2F%2B27G9e4wV93rbFcsjQgv%2BW90H0bhMOivI9CrMmvQ7t3mS9r%2BIXXdK7RcJ2O%2BvwC8LjE5yxJCcibNeErNwgUFmkh8yX3sIyfcD6cEA8sWSfal%2BE%2FPIotmAQA0k%2FTRLQcBl4gy6G8cf8wzJrVyQY6pgG8xXohO9IL0LTaDSv8051yIZnVWqs1uHs92KLyxtu5Ef2v1Ehs0mItKwtJaiBlOBF9VrHXIKQNpVj6Nhyu5nWfDP%2B6pHiZq542SlLyJzpsW3Qt8GyiJJ3b%2BYnZlB3nZ6c01gbQjtS%2FzJks%2BRx8L7mlK%2BHV6%2BxuiGr8t%2F2XFyYmK6LypeNJda36dQL5BQEWISxX53YqnxoxP6Ecthfk6h02T8icg8ch&X-Amz-Signature=3c28eb66712d0811d9a462c6be49a798ed8c39486f47a91dbb7fd095bbbcbfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT5K3QC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmXwORVUKS0niN3d6ehcUWQceL%2FdLt0jaYzKPp2TYgvAiAozukLZRGqH2T76%2BE6fm7ahP%2BExSVkhkYFhiiQeBDr4SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGrS7H9gkCfRCCq7QKtwDI0TQ1LvD78zehE%2F%2BWKA84qXilY4gNq0zfSfRp%2FXEeZPxuNs86M%2FwLU2HnQKxvhUefwCBGpDaO2s42rKsxCSW0us5amG9RodNOEbLl6rr%2BlP3NzNjCIZlxLA2GNpyb2LVPnm1VFR4qnJWl3i9uYm%2F0gTqP%2FEwHsRk2SPfswV5GWE2Hd32yasyBtbiw4GBgdqKMrVy8%2BHzp1LHy8SkoGDIl%2BHFBqr%2BQ0%2FO5HDJnbeK0r44o%2FxmZhJm9y2DUeNC036ot2IqcFvfeoleJXr07BDa6IpPdLI5vZo78pvkDMFGODSSEo2TIcqnypB4Rdi3b1KIuIoZqABNym5UButTL3cII%2FZK6aWntcaI7lKd7fUG5EpPtYzzcNZKEO2XZ7v%2BXcgTudSEOOKnHN92uDI6xbmt%2F16pleCIwEZypis%2B5olQhNmVr9uWzjjAIyNDNR%2BgnhM%2Fe69ktJar%2FeprMj6zQYQsxO5lH4Sv2eaq%2Fcp3hwBgLcuu2v7R%2F%2B27G9e4wV93rbFcsjQgv%2BW90H0bhMOivI9CrMmvQ7t3mS9r%2BIXXdK7RcJ2O%2BvwC8LjE5yxJCcibNeErNwgUFmkh8yX3sIyfcD6cEA8sWSfal%2BE%2FPIotmAQA0k%2FTRLQcBl4gy6G8cf8wzJrVyQY6pgG8xXohO9IL0LTaDSv8051yIZnVWqs1uHs92KLyxtu5Ef2v1Ehs0mItKwtJaiBlOBF9VrHXIKQNpVj6Nhyu5nWfDP%2B6pHiZq542SlLyJzpsW3Qt8GyiJJ3b%2BYnZlB3nZ6c01gbQjtS%2FzJks%2BRx8L7mlK%2BHV6%2BxuiGr8t%2F2XFyYmK6LypeNJda36dQL5BQEWISxX53YqnxoxP6Ecthfk6h02T8icg8ch&X-Amz-Signature=bd6028d40fbbdeda358c0324952cfa6aa36a15f5a6fe221ab69a926a36c42c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
