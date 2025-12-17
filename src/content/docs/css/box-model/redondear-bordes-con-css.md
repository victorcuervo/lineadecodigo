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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHCLMOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe6IAQ4nTCTucjbYFKRhpTDaTaHmkGL2HWKuKmUKZMMAiBkZWNd9afR7D4TD0SkEaFIJXW%2FNO5nEGHsGvKEqkBk%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMBMAsbj3n2PBed9YlKtwDV2YqRHfXkjX9QmGAzGivX9qf79F2j%2BY6v36rGEFNR4sXePAuTx3xuJATzP1Wb2VAB216OXKFTIF4eqCfcKbibZ%2BuU6OMDF4QsB58GexSyaKcQUvN%2BYSZWl5LwrMH%2Bi7jC8oRZTL14NeifHYuDL3YRrgSw5vVrGob8GiFiRmg0R3%2BrF8xAFMFeCNHbN9taekaK0gwTZo%2BthrvLXjy0fuFwLpCt5Kj27s0JvT9DxWLtXJ%2BdUIEmXmPbDre0pZi7NAP%2Fic%2Bp4BiG9t38l4TrFh22h5ylYuBWXicMHyTV%2BpSl1RBx99R8jP%2Fvkvlgi%2Fna6lQNujcvukfaFuwVRRVc5frt0uWdr1eLBpml%2FZWXxumKs65hKiJVF3vyMIbE9bIaK%2BRBaCHdHgqoWGDdrJ7wgJu3cz2XPAI8ru5SAeh2vp41G3JOmvYUHTwxK7yKhoAiYl4dbobCt6NzYsQoYfRXZBlcUKIj3%2Bp6R8H12IK16BHmnS6U%2Bq12ijpdBnIsir2alMUCwZwObqe3DK5WvaihkUcbXfjKpalN2qdbKaIULiQhThz9Q9jpUcPnjXBaL%2FwNR96b8ErvEAJktZNXoFwaIgI%2FucTRHNS0aU07aF3laAUTuq8tSXkSGE6tgM2IX8wno%2BKygY6pgGn0eQVWgN%2FGT83IG1iSp%2B8LRj6ALYsee3PcImpnyv9zHFTWUfHFGNk7vfe8sadSxfvgzbliLy%2B9gvtkQg9SIFXaIwb1kI4pluzzRvoefOqhGmJY4XyzOe4KZwcviuCT4VP2%2BFdLzQuR6G2dMr2JIr2vODylc1LjN0JcqU5lo7BTY%2BuWNoYZ2ILmduXFdBkDKAwRrP6U3IAiYAW2yz7g7Lv40TfXmIO&X-Amz-Signature=ccb7fbff2f2e0bec939c215123344e054998edbcf060564af2f4f35c93f880d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHCLMOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe6IAQ4nTCTucjbYFKRhpTDaTaHmkGL2HWKuKmUKZMMAiBkZWNd9afR7D4TD0SkEaFIJXW%2FNO5nEGHsGvKEqkBk%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMBMAsbj3n2PBed9YlKtwDV2YqRHfXkjX9QmGAzGivX9qf79F2j%2BY6v36rGEFNR4sXePAuTx3xuJATzP1Wb2VAB216OXKFTIF4eqCfcKbibZ%2BuU6OMDF4QsB58GexSyaKcQUvN%2BYSZWl5LwrMH%2Bi7jC8oRZTL14NeifHYuDL3YRrgSw5vVrGob8GiFiRmg0R3%2BrF8xAFMFeCNHbN9taekaK0gwTZo%2BthrvLXjy0fuFwLpCt5Kj27s0JvT9DxWLtXJ%2BdUIEmXmPbDre0pZi7NAP%2Fic%2Bp4BiG9t38l4TrFh22h5ylYuBWXicMHyTV%2BpSl1RBx99R8jP%2Fvkvlgi%2Fna6lQNujcvukfaFuwVRRVc5frt0uWdr1eLBpml%2FZWXxumKs65hKiJVF3vyMIbE9bIaK%2BRBaCHdHgqoWGDdrJ7wgJu3cz2XPAI8ru5SAeh2vp41G3JOmvYUHTwxK7yKhoAiYl4dbobCt6NzYsQoYfRXZBlcUKIj3%2Bp6R8H12IK16BHmnS6U%2Bq12ijpdBnIsir2alMUCwZwObqe3DK5WvaihkUcbXfjKpalN2qdbKaIULiQhThz9Q9jpUcPnjXBaL%2FwNR96b8ErvEAJktZNXoFwaIgI%2FucTRHNS0aU07aF3laAUTuq8tSXkSGE6tgM2IX8wno%2BKygY6pgGn0eQVWgN%2FGT83IG1iSp%2B8LRj6ALYsee3PcImpnyv9zHFTWUfHFGNk7vfe8sadSxfvgzbliLy%2B9gvtkQg9SIFXaIwb1kI4pluzzRvoefOqhGmJY4XyzOe4KZwcviuCT4VP2%2BFdLzQuR6G2dMr2JIr2vODylc1LjN0JcqU5lo7BTY%2BuWNoYZ2ILmduXFdBkDKAwRrP6U3IAiYAW2yz7g7Lv40TfXmIO&X-Amz-Signature=e32015be832cb249c93da0327c525dfef91558f3835024431818dbbec63dd274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
