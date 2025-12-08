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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH4JIPKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAisKWCr%2FNX1iJ6GwQSnBn6cH4n9PmiqkBAAYblEyZiAiEArLuHK4hQGS%2BvfArpOo1ThAVk5UZIbLv5oEyObV5qj1wqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBCGBBO4APU%2FOMoPCrcAw2XGMgeVolM560dN%2BJJ8bvff8vQ1YLAjMefs%2BVkQ6oZKGr594sg3ku6Wt69miMkibnkeBwaaWv7A9fEp4JsLbPAjYqu5CeKQ5%2BMwauHM8UERFQVzCXXfa4IVXoJ%2BR0PmBAQYtJ2Gwy5d4DejAvAcpTiZxAoOLkNSPdRr8DxHxyTNNFIwkA2wSoCQS5Ywgwjv5mlP0h7kTQw4s9L9UWyVkvOa2BDO47%2B996mraADJ%2BNVlbphK0sZhy5f7FOvyV7f%2FOnLPrQykL78iF%2FUjAPC56fLOI6KUODlk39%2BrHM4wjTgbB3sV1327lofg%2Bq5EJsNOf2FFDtgF2VMU8Ip0wkBGoN%2Blywf8nicscnUARBP6rys8heasDj%2BrpTkNnBWU3u%2BGJEMiTbebx%2BR2BdTNgVgWjSln8XFSs6uLjFqNcE4hCNy8zSazdbJKS%2BsaUqAkqU4PnsrOOQoRLvhNexsDi%2F2ldrkeCt5n%2BgJ1cXZHeHD32nhfqziNzq8A9TOPHm1XJKQOdiio%2BNClZ3alU3U9l8VdE0uL2esp4RYbSpTTPCij0Tb50ZaFn%2Fi1BR7ALwe5mJ7UQUN5t2L%2BhkGlJl7z3H0CHulqgPNJMFyHzlsJi9rZIX5R%2FwmqITOd%2BbSjM2%2FMIyi2MkGOqUBaQ9zuPI%2BWb%2Bm%2FyS6w0Q6qTBs3z8lr%2BydBIJ7h9xMnXeBqkkS7P7DMk6Dl3OWCgf4OClVU%2FBJTK8iqwSalvBI%2F7ZklM%2BARP%2Bdq5xPY0tb6md9CR32Y7RlstYxgZA2bYXR2EiYYy7u8R%2FRuvMkzIGEFyR686Ee6rO%2F9xDXFZ%2Bvuk2zW47MuuEID2fgWt92iPWH97zabtdxHfnvOTiH0WAcvw%2Fjb2mE&X-Amz-Signature=c84f097c4e9b448e36c8be15630da7cf3ff6d0629d533f81faa35e28655f7728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH4JIPKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAisKWCr%2FNX1iJ6GwQSnBn6cH4n9PmiqkBAAYblEyZiAiEArLuHK4hQGS%2BvfArpOo1ThAVk5UZIbLv5oEyObV5qj1wqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBCGBBO4APU%2FOMoPCrcAw2XGMgeVolM560dN%2BJJ8bvff8vQ1YLAjMefs%2BVkQ6oZKGr594sg3ku6Wt69miMkibnkeBwaaWv7A9fEp4JsLbPAjYqu5CeKQ5%2BMwauHM8UERFQVzCXXfa4IVXoJ%2BR0PmBAQYtJ2Gwy5d4DejAvAcpTiZxAoOLkNSPdRr8DxHxyTNNFIwkA2wSoCQS5Ywgwjv5mlP0h7kTQw4s9L9UWyVkvOa2BDO47%2B996mraADJ%2BNVlbphK0sZhy5f7FOvyV7f%2FOnLPrQykL78iF%2FUjAPC56fLOI6KUODlk39%2BrHM4wjTgbB3sV1327lofg%2Bq5EJsNOf2FFDtgF2VMU8Ip0wkBGoN%2Blywf8nicscnUARBP6rys8heasDj%2BrpTkNnBWU3u%2BGJEMiTbebx%2BR2BdTNgVgWjSln8XFSs6uLjFqNcE4hCNy8zSazdbJKS%2BsaUqAkqU4PnsrOOQoRLvhNexsDi%2F2ldrkeCt5n%2BgJ1cXZHeHD32nhfqziNzq8A9TOPHm1XJKQOdiio%2BNClZ3alU3U9l8VdE0uL2esp4RYbSpTTPCij0Tb50ZaFn%2Fi1BR7ALwe5mJ7UQUN5t2L%2BhkGlJl7z3H0CHulqgPNJMFyHzlsJi9rZIX5R%2FwmqITOd%2BbSjM2%2FMIyi2MkGOqUBaQ9zuPI%2BWb%2Bm%2FyS6w0Q6qTBs3z8lr%2BydBIJ7h9xMnXeBqkkS7P7DMk6Dl3OWCgf4OClVU%2FBJTK8iqwSalvBI%2F7ZklM%2BARP%2Bdq5xPY0tb6md9CR32Y7RlstYxgZA2bYXR2EiYYy7u8R%2FRuvMkzIGEFyR686Ee6rO%2F9xDXFZ%2Bvuk2zW47MuuEID2fgWt92iPWH97zabtdxHfnvOTiH0WAcvw%2Fjb2mE&X-Amz-Signature=f6cccc566d0a7f18ba25263266d097735a0f728b963d14f3d143dfe6a44591ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
