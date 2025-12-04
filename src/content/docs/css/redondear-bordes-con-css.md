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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3IL3KW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDlXri%2FCEIiiZTyHsnCckiKWdCwFxpJmFqEQFZSwOGzaAIgbTAebLK5LrLLhjg%2BPAulqAed%2BrQy1VgzUrt40mMXdTgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAT28v6Gbaf%2BOGbcYyrcA8Kb%2FJi8dJ2q2YEg%2Bya8u%2FmvdzmuPPX2hgpfh06dpcQPQpBMLl7gNn2vpU%2B5kS1rLlraqtUx637LGinq%2BF7JCUclsMyjwLU831VwQO9OuH5N06XgCojE0%2B0VuEsL%2B%2FGbLZ7OSgpLQAG%2FgN0isghgrohqb2LpTeTUCntEO%2BQ6R3%2FfW7TRjcTYmjrC%2BFk9j%2FFX4A3w%2Fbl4Ik2IipV2m9y9Bv6jGeg1xHlOmoNUXiKH4BdRA7z%2Fs0%2BPk9W%2F3wmlryOusIMTeYnTkA26N9rMkmkh2uDUJVIl110vgeYbj687j6fSwvcbq0Shjw5iqOV2ckZ5LqF9QmVY47pmKsxTi52EDlGu0ZLONP4qRgS9hTddBu1O6ldlxtK9s0E8FdIt3T5W2grthLqDergaeROjVjbNENSH9UHx3T1FcJFnUnuQrqazi06Kv%2BV6H%2FzD6JjCLpi3KVjASAbehg52r3I42585x9jVZmERs251NTx60nWDcNhRdmWv6nyhVfhvYWds9EzpaqHi6eof5s%2FKRgNd5lkWKD7DWbfjz2Vq7rZ6yHys%2F9JkzjNy6SO8HbcohAb1jA7Mf2woAxnKnqHl15WPOmGp4koECHTxBtasJmjnCct26ZVATxnzJOCmLr2Z3PTZMO%2FUw8kGOqUBdQEuTbfHuapvNaenwfLvJgzJye8Xk5PhDVIcArfZZZ0wHPVKI7l%2B8hQdpCDASfniEnKZJsDw8LX3bLlKrfIi0VRoS9zYb5SfL91CvH0fvGHWTfSVmLTvDvWM3wR6a1up0cPK8yYU3ZDLEEHMp9P2pgz8XD7IE3ARmLVWNFd8ufO0Z0KqPW53z4XHzLg1umjcwDAJmzT9SsYmId3OaKEqRfFxsvb6&X-Amz-Signature=0a25be7e0177371f646f306608e907b2a3d965db59d212805ccb0394f7b10897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3IL3KW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDlXri%2FCEIiiZTyHsnCckiKWdCwFxpJmFqEQFZSwOGzaAIgbTAebLK5LrLLhjg%2BPAulqAed%2BrQy1VgzUrt40mMXdTgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAT28v6Gbaf%2BOGbcYyrcA8Kb%2FJi8dJ2q2YEg%2Bya8u%2FmvdzmuPPX2hgpfh06dpcQPQpBMLl7gNn2vpU%2B5kS1rLlraqtUx637LGinq%2BF7JCUclsMyjwLU831VwQO9OuH5N06XgCojE0%2B0VuEsL%2B%2FGbLZ7OSgpLQAG%2FgN0isghgrohqb2LpTeTUCntEO%2BQ6R3%2FfW7TRjcTYmjrC%2BFk9j%2FFX4A3w%2Fbl4Ik2IipV2m9y9Bv6jGeg1xHlOmoNUXiKH4BdRA7z%2Fs0%2BPk9W%2F3wmlryOusIMTeYnTkA26N9rMkmkh2uDUJVIl110vgeYbj687j6fSwvcbq0Shjw5iqOV2ckZ5LqF9QmVY47pmKsxTi52EDlGu0ZLONP4qRgS9hTddBu1O6ldlxtK9s0E8FdIt3T5W2grthLqDergaeROjVjbNENSH9UHx3T1FcJFnUnuQrqazi06Kv%2BV6H%2FzD6JjCLpi3KVjASAbehg52r3I42585x9jVZmERs251NTx60nWDcNhRdmWv6nyhVfhvYWds9EzpaqHi6eof5s%2FKRgNd5lkWKD7DWbfjz2Vq7rZ6yHys%2F9JkzjNy6SO8HbcohAb1jA7Mf2woAxnKnqHl15WPOmGp4koECHTxBtasJmjnCct26ZVATxnzJOCmLr2Z3PTZMO%2FUw8kGOqUBdQEuTbfHuapvNaenwfLvJgzJye8Xk5PhDVIcArfZZZ0wHPVKI7l%2B8hQdpCDASfniEnKZJsDw8LX3bLlKrfIi0VRoS9zYb5SfL91CvH0fvGHWTfSVmLTvDvWM3wR6a1up0cPK8yYU3ZDLEEHMp9P2pgz8XD7IE3ARmLVWNFd8ufO0Z0KqPW53z4XHzLg1umjcwDAJmzT9SsYmId3OaKEqRfFxsvb6&X-Amz-Signature=79ac942f21be62fa7b9cb0cc0549bdf2cf07df76c61022e2529a883f4947fcaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
