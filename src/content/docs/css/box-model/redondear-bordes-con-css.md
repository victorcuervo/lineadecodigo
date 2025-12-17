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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SRIGOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuVnb%2F5vwFT1a5gdhN8Ts10iiZRUp7FXOrdXjZS3YgkAiAGau%2Fxu6zHAKNfwotkhVxf2I6Wt%2F0zk8%2B1GZKABZy%2BNyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM9Kdvp0HLkZz%2FzAPoKtwDnpbL8XP9DPCBWHHY89H%2B6WBIc6VwB88o7KHKWL2KjWk47%2BCsJvR4BP%2BwK8zSn5sIWENu4PmU40WUtWLMCzonZVfcQs%2Brf18veW8AeE4ioHnkgnGzPl8bAFcibNQIuVDo4x%2B7m0Q4nwbuFYwOkLP%2BSSMxzkp8Hlbm0lQsVx1apirpvM8WsvrFdJ2g4akH2N1yIGLlZyzNbNwxNyZ0EedP20hRsf7ip8NjK5oHkLXf%2B2onB%2FgROj%2BP2wBtVLWngViLoumEpXfL6h1OBzc6lTi8uc0jmo85HbbwWw5cOp0cNU%2Fbl47t4wzji%2FnEtIclMxYuNjNVb1pXbEtrhDIpfVt66AZunUuWg%2FkbJdfnACV%2Byk3e8KHTHQI75DDXNY%2FGdrWkO3dCYFtoCeOK0syRDJM6D1wSCVDD3eCG9PeHzODcR2N88QE9KEStqAE%2Bgq3ZsqaEFuNyIDl5VIHVFufUzYGG1DyjYN5eMTo%2FTf4p5NRa12%2FeeHYFtkoRA4DuzIKsUOsvBw5LcbpmKRkT0wvr6pZhl9sRzv2V3ONC32FhIXOTrbTgO0IdOuvpjCAmrC%2Bar42mgsPYD%2FeYFNuzZx41Cj6Hexj8gMlfpU4DHh2k%2Bbn1sEd57uQlt%2FFlnwLgI6MwxrGIygY6pgGhD5rDAdOVltH85S%2BXB17359Z1MET0n0Gcf8cvrzU%2FUMyP%2Fs7WP2Cv2U0ADJT6rlra14CFeT%2Bk4u%2BWKTlcPKSxs8Bph4%2B8WBAB%2FFAFwAzO%2BcfdxOW3B1noeY4Dk6kPZ0yX6h6OLrXg0%2Buuo5210MsyZQfDojKWBxt4e4PQJCj0j%2B7voItyttLmO%2FCfYfd9VB%2F%2Fj0lttM%2FjyX4k1v0o6Ss1YkIAx1el&X-Amz-Signature=0f9b4610cb8f5c5935695c02d130594c8f00f87f06e887fc92aa7eb4ad02ec36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SRIGOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuVnb%2F5vwFT1a5gdhN8Ts10iiZRUp7FXOrdXjZS3YgkAiAGau%2Fxu6zHAKNfwotkhVxf2I6Wt%2F0zk8%2B1GZKABZy%2BNyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM9Kdvp0HLkZz%2FzAPoKtwDnpbL8XP9DPCBWHHY89H%2B6WBIc6VwB88o7KHKWL2KjWk47%2BCsJvR4BP%2BwK8zSn5sIWENu4PmU40WUtWLMCzonZVfcQs%2Brf18veW8AeE4ioHnkgnGzPl8bAFcibNQIuVDo4x%2B7m0Q4nwbuFYwOkLP%2BSSMxzkp8Hlbm0lQsVx1apirpvM8WsvrFdJ2g4akH2N1yIGLlZyzNbNwxNyZ0EedP20hRsf7ip8NjK5oHkLXf%2B2onB%2FgROj%2BP2wBtVLWngViLoumEpXfL6h1OBzc6lTi8uc0jmo85HbbwWw5cOp0cNU%2Fbl47t4wzji%2FnEtIclMxYuNjNVb1pXbEtrhDIpfVt66AZunUuWg%2FkbJdfnACV%2Byk3e8KHTHQI75DDXNY%2FGdrWkO3dCYFtoCeOK0syRDJM6D1wSCVDD3eCG9PeHzODcR2N88QE9KEStqAE%2Bgq3ZsqaEFuNyIDl5VIHVFufUzYGG1DyjYN5eMTo%2FTf4p5NRa12%2FeeHYFtkoRA4DuzIKsUOsvBw5LcbpmKRkT0wvr6pZhl9sRzv2V3ONC32FhIXOTrbTgO0IdOuvpjCAmrC%2Bar42mgsPYD%2FeYFNuzZx41Cj6Hexj8gMlfpU4DHh2k%2Bbn1sEd57uQlt%2FFlnwLgI6MwxrGIygY6pgGhD5rDAdOVltH85S%2BXB17359Z1MET0n0Gcf8cvrzU%2FUMyP%2Fs7WP2Cv2U0ADJT6rlra14CFeT%2Bk4u%2BWKTlcPKSxs8Bph4%2B8WBAB%2FFAFwAzO%2BcfdxOW3B1noeY4Dk6kPZ0yX6h6OLrXg0%2Buuo5210MsyZQfDojKWBxt4e4PQJCj0j%2B7voItyttLmO%2FCfYfd9VB%2F%2Fj0lttM%2FjyX4k1v0o6Ss1YkIAx1el&X-Amz-Signature=9118f54e344c6e976dac34f7f220833685fa22c056802644693b0eba4892283a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
