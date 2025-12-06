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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMIHNJ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpeOe%2BJPcAUuJXo1sRysT2TKJBWfQ2qzJJdF2ZWAYO8AiBbfljnZu4q0GsE6Nt9ZFfeek43YyiO9gbWc6%2BymRgsuSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMgTpg4lPib6Xiu5EDKtwD92MWS06RMjU0BE0uhAyPyGGopvxKOwVwk5KwBZwpEreyDOhLwUCd7hFkA%2Bi3djf41vMAcR73OXUMEitzwxq%2Fbp8YFg4r%2FE6sQkeNWEoWWq%2Bb2gAR7jWFkh1RTRXfS%2Bw2cqd99909e1Wmg%2FWAdhc%2FJsqR6Himtee%2FzjZ6x%2BDlN9SXB1TPuOQYBhvTKbALTSpHvAIvHQDoNaF4w165hqudeg%2Fj0zNc2qpshuB%2B2tSPlmIEeRtncpJ%2B%2F4v4tLpmpEV8q2aZAH6aRD95Hs6Sele7dGNpcpF%2FoJymfbceRmFhqyYdesq6PzECv4Q40iYFwr%2FOmLWdUm6aLner%2BoUMRomeC5VKrYpcS%2BV0Egv%2BTQarjKQGQK%2FaTVT7ZqfeN5SBG9kQtIPee2BCNjV%2F9VHrKEirW4PfmCal8TzoySCVsjd7BMyDKlCq5C%2Blot%2FlF%2B607oEPUDgVGsN%2BqiMv0i1%2FGZvSMTX2sKLbIBgMxffmIwXdKMaKidzG9wkre2%2B9ZcefhNRcmYlNkuncvv%2BLCwjeReveBIlsTGbxXjrMXwgjTaKsObygTpR11wKdnHBwu6BX8HXeJzw0yO0zB2bukjP8XeVqWPRON55%2BgJpSux5Bl63ZBZ%2FMzjLlOr74UCUmQGYwhonQyQY6pgFksZF6DK62qtL9KHGDueXWuXDKzMCEVsK0FmkaLTnvncuURTQCJSNH0vjDWdr3BsLK%2BKUwZZhBrTGkwT9DfezmGiKcYxMZipV2Shpws44YgChPTe89dmlLkGTJSXgzqHmZUjT9pW1CLeLoc%2B1i4j575Xjdkrwc8%2BbYJNOxLvSrxObUcF69usWQjdikwW%2B1WNO9Wgfqdk%2Fu3MAhVtkBkwHJ1UYtNz8b&X-Amz-Signature=d9ce33b3ca932d9dc0516e6d0773e296a8ee89acfb095b057bc97d200de81525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMIHNJ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpeOe%2BJPcAUuJXo1sRysT2TKJBWfQ2qzJJdF2ZWAYO8AiBbfljnZu4q0GsE6Nt9ZFfeek43YyiO9gbWc6%2BymRgsuSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMgTpg4lPib6Xiu5EDKtwD92MWS06RMjU0BE0uhAyPyGGopvxKOwVwk5KwBZwpEreyDOhLwUCd7hFkA%2Bi3djf41vMAcR73OXUMEitzwxq%2Fbp8YFg4r%2FE6sQkeNWEoWWq%2Bb2gAR7jWFkh1RTRXfS%2Bw2cqd99909e1Wmg%2FWAdhc%2FJsqR6Himtee%2FzjZ6x%2BDlN9SXB1TPuOQYBhvTKbALTSpHvAIvHQDoNaF4w165hqudeg%2Fj0zNc2qpshuB%2B2tSPlmIEeRtncpJ%2B%2F4v4tLpmpEV8q2aZAH6aRD95Hs6Sele7dGNpcpF%2FoJymfbceRmFhqyYdesq6PzECv4Q40iYFwr%2FOmLWdUm6aLner%2BoUMRomeC5VKrYpcS%2BV0Egv%2BTQarjKQGQK%2FaTVT7ZqfeN5SBG9kQtIPee2BCNjV%2F9VHrKEirW4PfmCal8TzoySCVsjd7BMyDKlCq5C%2Blot%2FlF%2B607oEPUDgVGsN%2BqiMv0i1%2FGZvSMTX2sKLbIBgMxffmIwXdKMaKidzG9wkre2%2B9ZcefhNRcmYlNkuncvv%2BLCwjeReveBIlsTGbxXjrMXwgjTaKsObygTpR11wKdnHBwu6BX8HXeJzw0yO0zB2bukjP8XeVqWPRON55%2BgJpSux5Bl63ZBZ%2FMzjLlOr74UCUmQGYwhonQyQY6pgFksZF6DK62qtL9KHGDueXWuXDKzMCEVsK0FmkaLTnvncuURTQCJSNH0vjDWdr3BsLK%2BKUwZZhBrTGkwT9DfezmGiKcYxMZipV2Shpws44YgChPTe89dmlLkGTJSXgzqHmZUjT9pW1CLeLoc%2B1i4j575Xjdkrwc8%2BbYJNOxLvSrxObUcF69usWQjdikwW%2B1WNO9Wgfqdk%2Fu3MAhVtkBkwHJ1UYtNz8b&X-Amz-Signature=9bffe0ee65616158434c8dd2614e49c1d57cdcb3ee9379e418dfb2f090494bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
