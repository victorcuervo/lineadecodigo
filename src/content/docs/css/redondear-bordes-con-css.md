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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=e95cf98f5437a86c15cf3f9e76256509136fec4927e8625a79625f01daab35a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=7fec548b5ad69562152c84b641ce1d6bf85eb1728ae165c951982526849839a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
