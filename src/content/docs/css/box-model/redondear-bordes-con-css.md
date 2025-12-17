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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTXO7RB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPHcSBBpP4uLjwxBhVZDGqyKeeMy9ItXxzqpAkUVLB1AiBz2CXQo2EvbUAzwmWUd4VPGfQQr8pWxUqDx%2BB8v72JaSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM%2FGkC3LnKmlUVbZjbKtwDtqJ%2BJlH4MV5zt90fP520q0P8pAjbwVXsJgRj34kVz048wQE4LPk3Sm4T6h61BHqrOLdo91IkKHwpqX3odScSYfC%2BdyK6ysJdRe45CiX%2F7ftLbwOeqNHx1TyckSYhXOQ8t2hRn%2BluL4astWCWz9c9zmbVGiQoP84p%2B3HhddpVSGH84hlzEk5qGNkYN4dEkr6R03z%2BhNM71wU3gQSaWgf5ZaCUsRPQdsyAOEf%2BQn6cTni0%2FsU5Zb8RZ1G4l67ZuRO3laSpM%2BgsBNZXYaPpjwWO%2F%2Boyfi4Aks3LKb9zskIblLY4b4%2FKsbEtG2UF4%2FgcJpMGtB8goIxufUAatJ6lzevLC7K%2BhHQa1zJSCHNKyuPVTNWFNNh3i4nWCReaz9v76XYLDNpP1ktQetdh%2Bkdcz85byPdQCxXBDzQ%2BkElUNrNNFNT7La%2F5U%2FnP934J7iwqTqtVTO9JhO60JUHha5aIzfhrdgpIjUC%2B3ce5RVCqlw3R3%2FB7hh3l%2BfuVFgkuJpPVDWUG%2BVQEPwf%2B%2F%2BhQfxgLTW%2F%2BeDsoQWlbIX1HQ%2FDG%2BOCLJXxevM6qBdudJjqrCCTN8AZSHg2v%2Bj0XhJ2Orv9GKvas3eYLl4GdRC%2BB297f0A2I2taUcCYZIoRRL8ecTIMwzY6KygY6pgGQrexT1USWlKxAvxxVp13FOnLCX6o%2BlrYtZb1wMWHgAOnQGRxRYmtGGXczaoqXxJQm6Dp6cnyY1UkeY5ft6ltfcfluj7NnGKsIFTXVb2a9vBt6Ll07RdObhRQVlz05rPxHBlQFNzyBYnahihNvHO%2BWliUcOjZm%2BODmI7HUrW4iegGK4DCdQICBY4Z%2BWZnmhoHFjYn%2FH%2FcqiXax7X9RFhF17Ek8uIN3&X-Amz-Signature=859b5df13dcfefccd395e9f24c85e26f595736871566906086ba752531d4875a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTXO7RB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPHcSBBpP4uLjwxBhVZDGqyKeeMy9ItXxzqpAkUVLB1AiBz2CXQo2EvbUAzwmWUd4VPGfQQr8pWxUqDx%2BB8v72JaSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM%2FGkC3LnKmlUVbZjbKtwDtqJ%2BJlH4MV5zt90fP520q0P8pAjbwVXsJgRj34kVz048wQE4LPk3Sm4T6h61BHqrOLdo91IkKHwpqX3odScSYfC%2BdyK6ysJdRe45CiX%2F7ftLbwOeqNHx1TyckSYhXOQ8t2hRn%2BluL4astWCWz9c9zmbVGiQoP84p%2B3HhddpVSGH84hlzEk5qGNkYN4dEkr6R03z%2BhNM71wU3gQSaWgf5ZaCUsRPQdsyAOEf%2BQn6cTni0%2FsU5Zb8RZ1G4l67ZuRO3laSpM%2BgsBNZXYaPpjwWO%2F%2Boyfi4Aks3LKb9zskIblLY4b4%2FKsbEtG2UF4%2FgcJpMGtB8goIxufUAatJ6lzevLC7K%2BhHQa1zJSCHNKyuPVTNWFNNh3i4nWCReaz9v76XYLDNpP1ktQetdh%2Bkdcz85byPdQCxXBDzQ%2BkElUNrNNFNT7La%2F5U%2FnP934J7iwqTqtVTO9JhO60JUHha5aIzfhrdgpIjUC%2B3ce5RVCqlw3R3%2FB7hh3l%2BfuVFgkuJpPVDWUG%2BVQEPwf%2B%2F%2BhQfxgLTW%2F%2BeDsoQWlbIX1HQ%2FDG%2BOCLJXxevM6qBdudJjqrCCTN8AZSHg2v%2Bj0XhJ2Orv9GKvas3eYLl4GdRC%2BB297f0A2I2taUcCYZIoRRL8ecTIMwzY6KygY6pgGQrexT1USWlKxAvxxVp13FOnLCX6o%2BlrYtZb1wMWHgAOnQGRxRYmtGGXczaoqXxJQm6Dp6cnyY1UkeY5ft6ltfcfluj7NnGKsIFTXVb2a9vBt6Ll07RdObhRQVlz05rPxHBlQFNzyBYnahihNvHO%2BWliUcOjZm%2BODmI7HUrW4iegGK4DCdQICBY4Z%2BWZnmhoHFjYn%2FH%2FcqiXax7X9RFhF17Ek8uIN3&X-Amz-Signature=660bd0e4ea31fdc93a77794e6c424cd83b6a33f9154ff9fa6686ec1ffa2234f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
