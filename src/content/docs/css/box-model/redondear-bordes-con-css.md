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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYD4N4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrXcg0JaO8HDgjlGGuyJadd3ybvFVEwEWpZOPhAYgrQIhAJzltGjErao%2Ff%2FimTGgRFJMmf%2Bk0bpia35ULmrEIP9vMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfZKMAdKdDYHsAXqcq3AM5UegrG50oN1ItyyOL%2BOl6uhGn8i6CnhCfJs2zaEOy6DBVFY1Ja26jucfNOlSgaVtYw8IMiHOn0JTOrLHcviOqvoE86ORYrGUWWGPuA3no7Oimg%2B89l3NGIjA84mVf7kn3WA0NCZwdPHDGERdWhVOyNVm3vtDq8ACvM3y3kX%2Bll3MZnLmfRQkf1%2FLCJSQtx6gr6vpU7m5YClSKsVrfapLXb6f4X0ptX%2BtZoJKMTRoziqsOom3pivVzRIt8ZMC5LklzMXVN%2BQgc3d7mBEvLG%2F6cMBrD1RQ2%2FU9YQLsK4Qy%2FIfLUnfB6BhvNoe4lEG1LzvTmkw27gfnF3HRehkwkU5MobJElzQh%2Bfyne%2FhK%2FEv1WTuOI5mKUx8xpgEReD9xv3m5%2FskXGGMNAX4rk2CmOm%2FGFhjbeYGgpS2iZAaBKhO77S6ulTZsFtrX9csNylELjuBbS8wlzxlkWlq%2Bp%2FV0ijqOYiQ9Yan7E3GM7sU4jzGEH4A1%2FFxghz2ZcA55Lq5mUGex9MKWTl2z8lRgLGcxxMDSc0a6bTkjVhuyg1D%2F52ev0q6vYciez96ooV%2Bv8Q0VPVk09rXQ9d64wKvrSropxaxYmHiUMZuEkz%2BykspLv625kESeoFTJ4QSmFEVVz0jCtgYvKBjqkAajWtt466AcHO8JMu%2FftTTgWrCTgle9su7OrUNjSa%2BoUpRuYYUuix%2B9diB7yAd1OUSRCObyK1nO6WqVbChSvd1lRm0Ih6rF2IfjZS4bp4B%2B9CmsXiyrwq9tYLxlGOKU6nXWGeAvB2%2FBukMmhvz1q0fpSjgwWUOMljGgsHLDRRHqW2THP7RJNq7FWP8%2BUijwIWkR%2B2EmsykC8BqDW%2FH3W5HFyXY2A&X-Amz-Signature=87ee50bdf4c44f19db88dfbc2eb107b21c5b431b10923454c195752a0b654a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYD4N4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrXcg0JaO8HDgjlGGuyJadd3ybvFVEwEWpZOPhAYgrQIhAJzltGjErao%2Ff%2FimTGgRFJMmf%2Bk0bpia35ULmrEIP9vMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfZKMAdKdDYHsAXqcq3AM5UegrG50oN1ItyyOL%2BOl6uhGn8i6CnhCfJs2zaEOy6DBVFY1Ja26jucfNOlSgaVtYw8IMiHOn0JTOrLHcviOqvoE86ORYrGUWWGPuA3no7Oimg%2B89l3NGIjA84mVf7kn3WA0NCZwdPHDGERdWhVOyNVm3vtDq8ACvM3y3kX%2Bll3MZnLmfRQkf1%2FLCJSQtx6gr6vpU7m5YClSKsVrfapLXb6f4X0ptX%2BtZoJKMTRoziqsOom3pivVzRIt8ZMC5LklzMXVN%2BQgc3d7mBEvLG%2F6cMBrD1RQ2%2FU9YQLsK4Qy%2FIfLUnfB6BhvNoe4lEG1LzvTmkw27gfnF3HRehkwkU5MobJElzQh%2Bfyne%2FhK%2FEv1WTuOI5mKUx8xpgEReD9xv3m5%2FskXGGMNAX4rk2CmOm%2FGFhjbeYGgpS2iZAaBKhO77S6ulTZsFtrX9csNylELjuBbS8wlzxlkWlq%2Bp%2FV0ijqOYiQ9Yan7E3GM7sU4jzGEH4A1%2FFxghz2ZcA55Lq5mUGex9MKWTl2z8lRgLGcxxMDSc0a6bTkjVhuyg1D%2F52ev0q6vYciez96ooV%2Bv8Q0VPVk09rXQ9d64wKvrSropxaxYmHiUMZuEkz%2BykspLv625kESeoFTJ4QSmFEVVz0jCtgYvKBjqkAajWtt466AcHO8JMu%2FftTTgWrCTgle9su7OrUNjSa%2BoUpRuYYUuix%2B9diB7yAd1OUSRCObyK1nO6WqVbChSvd1lRm0Ih6rF2IfjZS4bp4B%2B9CmsXiyrwq9tYLxlGOKU6nXWGeAvB2%2FBukMmhvz1q0fpSjgwWUOMljGgsHLDRRHqW2THP7RJNq7FWP8%2BUijwIWkR%2B2EmsykC8BqDW%2FH3W5HFyXY2A&X-Amz-Signature=574b2fe7dc3dd328068386e56914208a6cf3f00d1ca504d6d723b09efd7bb8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
