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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3Z5B6I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2AUeYYDsAHgrVwsF5LjbepVOomEV2vteG1zGRRzyDAAiEAwQqHrpiZ70OtylGaphAmb3EtxTNF%2FFJu8tb1Oq0jfCQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEeTvbhZqQp0xl4cSrcA9jIu1DBx70IQGeHct%2BBw6m%2BXlQhR9GYvEaAnU22s1Z1OSiXCKAOc2FpSmP8gDFbtARoMY%2FIr%2BpJawVcFnJuxZ1rWLzCKtNwiBxxhf%2BYwM8WUASbwJr19kgukDFLxwZKhF5Wn7SmJACJY23Zp7vi2gAEbepg%2BBp0xl%2Fl5NGok5ZREsSz6mNqLZNb7tqaSBiWubU3nhbXETDN%2B5khJKgKlLwVK1DIymEgQ3TXh6TSv4QKOzQW%2BhnJ%2FdhCoJ2wbkdORDTW0G3GyOyAES92gghnBjeaSqZN%2BiZKv6PQyi4cM6goVHhowUiaK8ahFQHb7Yu%2BqMd2%2Fp6iMe96HbQeJxhStyBJrWeAJX5NzHF%2BKFt%2FMEZ2KMsGU87oDJIZBpg68jsT9dtHuHyNmYc7rpIIbudDjX3MyryFujtEZLjTaJYaFah9fYcC6g7dr%2B6x6b9C6ouKUeLHofww%2BPTdVf%2F1WIDAPEqWqukCQKd8DRItJ2cfWiWten5oiSZoIrjRtZozfkqaCuScwbXwj2GGT%2FdYJauZM7ZEZOoOk8Lwb1p3GEv6XwwrFUCeGdWr2tzYx1UpJs1lHvI5IF3soMyyR%2BUsCDyyAje%2F%2FkKSBZtY0SCKJCSowQvkET1mQxvhUfbmi9usMKuF2MkGOqUBnxTcc18hWV5%2BerzjGR5ypBRG1Bnhsl8tJabA1ujtVbVUr4%2B9BpMSuoDKg3IElRv3xXO7Z8%2FNe5aKkBT3cUQMT6kQ7blaCI3rNxoBGBJH0eUCYRO%2B5G639ZiyRnyYRVxbKgCC5B4RmYy4ZUSDxoEVgS26GUbPykwxgDR3PqIz2oh7fFV9LknXkzbkBXl8HpmyHb9kA8hA%2FsrL9%2BqXU1c%2BCcp0wEt6&X-Amz-Signature=2f51bf8bf57c5a2beeb78b340a7b2cb5ae3001bd7319a3e15ebf631129d05c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3Z5B6I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2AUeYYDsAHgrVwsF5LjbepVOomEV2vteG1zGRRzyDAAiEAwQqHrpiZ70OtylGaphAmb3EtxTNF%2FFJu8tb1Oq0jfCQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEeTvbhZqQp0xl4cSrcA9jIu1DBx70IQGeHct%2BBw6m%2BXlQhR9GYvEaAnU22s1Z1OSiXCKAOc2FpSmP8gDFbtARoMY%2FIr%2BpJawVcFnJuxZ1rWLzCKtNwiBxxhf%2BYwM8WUASbwJr19kgukDFLxwZKhF5Wn7SmJACJY23Zp7vi2gAEbepg%2BBp0xl%2Fl5NGok5ZREsSz6mNqLZNb7tqaSBiWubU3nhbXETDN%2B5khJKgKlLwVK1DIymEgQ3TXh6TSv4QKOzQW%2BhnJ%2FdhCoJ2wbkdORDTW0G3GyOyAES92gghnBjeaSqZN%2BiZKv6PQyi4cM6goVHhowUiaK8ahFQHb7Yu%2BqMd2%2Fp6iMe96HbQeJxhStyBJrWeAJX5NzHF%2BKFt%2FMEZ2KMsGU87oDJIZBpg68jsT9dtHuHyNmYc7rpIIbudDjX3MyryFujtEZLjTaJYaFah9fYcC6g7dr%2B6x6b9C6ouKUeLHofww%2BPTdVf%2F1WIDAPEqWqukCQKd8DRItJ2cfWiWten5oiSZoIrjRtZozfkqaCuScwbXwj2GGT%2FdYJauZM7ZEZOoOk8Lwb1p3GEv6XwwrFUCeGdWr2tzYx1UpJs1lHvI5IF3soMyyR%2BUsCDyyAje%2F%2FkKSBZtY0SCKJCSowQvkET1mQxvhUfbmi9usMKuF2MkGOqUBnxTcc18hWV5%2BerzjGR5ypBRG1Bnhsl8tJabA1ujtVbVUr4%2B9BpMSuoDKg3IElRv3xXO7Z8%2FNe5aKkBT3cUQMT6kQ7blaCI3rNxoBGBJH0eUCYRO%2B5G639ZiyRnyYRVxbKgCC5B4RmYy4ZUSDxoEVgS26GUbPykwxgDR3PqIz2oh7fFV9LknXkzbkBXl8HpmyHb9kA8hA%2FsrL9%2BqXU1c%2BCcp0wEt6&X-Amz-Signature=f2369cac2592e6451c84d0962cd9445794d4ba063cfd8709ebf179a58dd1a87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
