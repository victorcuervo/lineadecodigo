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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGWTDZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCxTBRCgsJqi1F9of%2BAXQ3xBuHu48I6HE%2Fcm1GbKKUSPAIgMRn8Rj2b9ryX68F%2BUIKVuTiqiqm4h4TkGRJ9LY7lb5Mq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBXVFg9BP6o9u6pBESrcA1pSm5PP23OB2reK0RllolSIdaDsvZl2oDNlCEj1e9%2BugT4OFp5cMrfz%2F8L%2B4%2BWp15Sp%2FG8LswKe%2BfiTRfZPxGfgPRNFI%2Bt3xjubHqhB4juIxJtPdNE1s30EYqJWI6B9Rx2YRyCSuVnkR676z7CTfPW4EGhJrE2trQfZeh18kvUHMnHrRDGjU1BFmMWs6Qr2V%2FFubTJ6T3PwzH5K9pwMtzCLLaab3RH7C6r%2FJ2vYvpJPZnF%2FPww2we%2FObRIztu95GaQMHVeZW%2BsXM2ugmekzmXLVXpTb5zSceb6oKcPVyvX8P7xJ0%2FsHt8%2BxQczeOnpvz1o23%2BYdam9%2BXa8GVslOj5KLKobunYRu3f1pl0gORs%2BPVsznmMMGRxd%2Fq2r6ntwASxsSV7P97OWnY3omPOna4dX8QMLOxDAOp8NMwx27agQQDjBZt3c8oPv037cX9eO%2Bp5BgM%2BWIIdDmkQpmF0bbR%2BNLcbeZ0OFeTAr9jH9oe8Mx5L8U4PWolrKUp3lcePqPWgVZeP2QoJyBlIfw%2F0Vf6sp2YU%2FdMfM68xPzmE93ahkYzMntIWqf1brYOAgR7tJWHsFM8s0uN%2BpWMdBFhqgCGqZKVw5wbiab8taWQGWzNXwOpVfKfPWR5WBSepdwMKHnxckGOqUBSQJpNs0BdBsBwIlg9lRPBBcwJRlQD2EHabpq3xnpYOApFKwK%2BwC3L3SLi1nBDuEGoJJ9Kf0GYErs4FLoU0Gjexvm3JpgYmOXkptDkognJt6eDeiOidJbWda0DNYRW8pvUbWVickMDx0ZwLl%2BwFLIx5J3pQDOIEtJ9GodLr5bGBbN6lufS7W6aqhWnzoZ0DV0YrkUyNtMAXX74RYrdcB54fKzM3gD&X-Amz-Signature=06ca167917359e2105f79d4c580da7dc966135b55a4f19dfac92ec69371c4c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGWTDZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCxTBRCgsJqi1F9of%2BAXQ3xBuHu48I6HE%2Fcm1GbKKUSPAIgMRn8Rj2b9ryX68F%2BUIKVuTiqiqm4h4TkGRJ9LY7lb5Mq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBXVFg9BP6o9u6pBESrcA1pSm5PP23OB2reK0RllolSIdaDsvZl2oDNlCEj1e9%2BugT4OFp5cMrfz%2F8L%2B4%2BWp15Sp%2FG8LswKe%2BfiTRfZPxGfgPRNFI%2Bt3xjubHqhB4juIxJtPdNE1s30EYqJWI6B9Rx2YRyCSuVnkR676z7CTfPW4EGhJrE2trQfZeh18kvUHMnHrRDGjU1BFmMWs6Qr2V%2FFubTJ6T3PwzH5K9pwMtzCLLaab3RH7C6r%2FJ2vYvpJPZnF%2FPww2we%2FObRIztu95GaQMHVeZW%2BsXM2ugmekzmXLVXpTb5zSceb6oKcPVyvX8P7xJ0%2FsHt8%2BxQczeOnpvz1o23%2BYdam9%2BXa8GVslOj5KLKobunYRu3f1pl0gORs%2BPVsznmMMGRxd%2Fq2r6ntwASxsSV7P97OWnY3omPOna4dX8QMLOxDAOp8NMwx27agQQDjBZt3c8oPv037cX9eO%2Bp5BgM%2BWIIdDmkQpmF0bbR%2BNLcbeZ0OFeTAr9jH9oe8Mx5L8U4PWolrKUp3lcePqPWgVZeP2QoJyBlIfw%2F0Vf6sp2YU%2FdMfM68xPzmE93ahkYzMntIWqf1brYOAgR7tJWHsFM8s0uN%2BpWMdBFhqgCGqZKVw5wbiab8taWQGWzNXwOpVfKfPWR5WBSepdwMKHnxckGOqUBSQJpNs0BdBsBwIlg9lRPBBcwJRlQD2EHabpq3xnpYOApFKwK%2BwC3L3SLi1nBDuEGoJJ9Kf0GYErs4FLoU0Gjexvm3JpgYmOXkptDkognJt6eDeiOidJbWda0DNYRW8pvUbWVickMDx0ZwLl%2BwFLIx5J3pQDOIEtJ9GodLr5bGBbN6lufS7W6aqhWnzoZ0DV0YrkUyNtMAXX74RYrdcB54fKzM3gD&X-Amz-Signature=fffa9d78eb97f8b0c1f7c14d22fbd7094f9bbf51c1db51cd686ba7455fce47a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
