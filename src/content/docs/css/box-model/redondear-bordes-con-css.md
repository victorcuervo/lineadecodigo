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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3EBDGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2RDkqgius7r00CKNkRjORzWz89UNxwHXASyl99AKOvAiEAlm7I5orXhuNBnxRWkDa9T%2BRU904Vdsr6FiBMvX5Es3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHCmsBlXLH7IC7fZyCrcA8jHIPnG1Tv8zH0rRzZR1mSaKRcaBeEBDmb%2B5jzqeW8h7I99CgSywvKV0E7JwGvHr1GDas9NgUFlux%2BQ4Pek64uRd6dJ6v8YO5ciO4eR9qre%2FB7X663Ij0tVbx8IYQtrfPD2DorKSK97J9lqShXdJBBfOk7xrs9VhKH4SdXc0RkI0lk%2FUKBoCQCVVB8gpIqo4l%2FmXiRDoEtz3ZXOwErXyQOaS6oEHm4tl6xXjFWGytFgfmtlahlFPti79d%2FS%2FRCzcz5BClihLks3ItNCIjk0bHYeJOMl3WT9N8qBkwIf6F4jq4D%2B2F1k4r8aHJDAZhsCjZLgvgmKzH0LX9%2FjfmHTv5Y%2FCvsvolw1K%2FZC%2F8R1hI2kSOqU%2BKKPJW%2FSu%2BVhHKWII6NGBjaCowXFLABg5VFYKc0aXXNSAllvAdKkmjwbrF5PlZuKVuU6JbmfEhj6MTh3aYILC%2BY3Ay4pQnsK3UDUwasXiLjyVjlJ8C0vYQ%2FJxUPJnIKe8%2BD5%2Bax04WseKRa8ZI68L9e1FLVNJ88qHlof98lN9%2BtgYcF1a8m%2Fq5ZbFhiFUsv3Z5L90p%2BHud6LL81ZtzuX6m053eJnut3bhaX%2BncRAjaVe5XWneU6jfVv0elEj6dX0E3PtBsiyQSmaMKD7h8oGOqUBFsBTjPirnF4p%2FGdKeznAKhrkp%2FuWxozvFit2pCnyZzi4VJba%2BdQQpkhDg20NWw9V8TKA3TDaHAxRMPgUqRAt4d28V6KLjaSGj43Mhmi4w0alo99iOWmMyBVs%2FghpEVUZGJ9897VrKqRbueb8bgnyBV8puus%2B1SzL%2B21%2FbB6VBNiP4Tk8hEdaJNUDB1q%2B39bFM0C85gz%2BT8fI0nwnv93HFborJRVE&X-Amz-Signature=c50b1091ede64cb6a68ea6d4d953853588bd4af4048c114da8e727e133e685f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3EBDGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2RDkqgius7r00CKNkRjORzWz89UNxwHXASyl99AKOvAiEAlm7I5orXhuNBnxRWkDa9T%2BRU904Vdsr6FiBMvX5Es3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHCmsBlXLH7IC7fZyCrcA8jHIPnG1Tv8zH0rRzZR1mSaKRcaBeEBDmb%2B5jzqeW8h7I99CgSywvKV0E7JwGvHr1GDas9NgUFlux%2BQ4Pek64uRd6dJ6v8YO5ciO4eR9qre%2FB7X663Ij0tVbx8IYQtrfPD2DorKSK97J9lqShXdJBBfOk7xrs9VhKH4SdXc0RkI0lk%2FUKBoCQCVVB8gpIqo4l%2FmXiRDoEtz3ZXOwErXyQOaS6oEHm4tl6xXjFWGytFgfmtlahlFPti79d%2FS%2FRCzcz5BClihLks3ItNCIjk0bHYeJOMl3WT9N8qBkwIf6F4jq4D%2B2F1k4r8aHJDAZhsCjZLgvgmKzH0LX9%2FjfmHTv5Y%2FCvsvolw1K%2FZC%2F8R1hI2kSOqU%2BKKPJW%2FSu%2BVhHKWII6NGBjaCowXFLABg5VFYKc0aXXNSAllvAdKkmjwbrF5PlZuKVuU6JbmfEhj6MTh3aYILC%2BY3Ay4pQnsK3UDUwasXiLjyVjlJ8C0vYQ%2FJxUPJnIKe8%2BD5%2Bax04WseKRa8ZI68L9e1FLVNJ88qHlof98lN9%2BtgYcF1a8m%2Fq5ZbFhiFUsv3Z5L90p%2BHud6LL81ZtzuX6m053eJnut3bhaX%2BncRAjaVe5XWneU6jfVv0elEj6dX0E3PtBsiyQSmaMKD7h8oGOqUBFsBTjPirnF4p%2FGdKeznAKhrkp%2FuWxozvFit2pCnyZzi4VJba%2BdQQpkhDg20NWw9V8TKA3TDaHAxRMPgUqRAt4d28V6KLjaSGj43Mhmi4w0alo99iOWmMyBVs%2FghpEVUZGJ9897VrKqRbueb8bgnyBV8puus%2B1SzL%2B21%2FbB6VBNiP4Tk8hEdaJNUDB1q%2B39bFM0C85gz%2BT8fI0nwnv93HFborJRVE&X-Amz-Signature=01caf95a3ecce6f9b06fb04f55c0a12bbc9967e096d14450e4593ae89fd94069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
