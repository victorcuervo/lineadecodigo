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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMOW56W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7KWX4DNsCXdagreviC1rYTwayIXcLbffxd2MHCJ2XEAiEA%2FabgCeolLbBXpKNBbtmvVjNNXvJOrImO8W0QewUWpxQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMQ4toalHPJUlgUUYircA6R9lBqyDJb4AHPAoK2R8a%2F2223f7J2xo%2FsHBff9eVZn7G%2FKW666Hlyvb1%2BwvdmYMQYEQGgKqw3RNGFxUgvAFdFFhLe0unFmvxQNloA8tSjUGI12t%2BjXV3JM38c8raDcT9aT7NWivygtk%2BSag7f4Ud4LeNgkpPJyrm8DHM7Z%2B4fw%2F8Xqm2Zu%2BL2BTGYr9%2BhdsBtl%2BPD96pdbADldwwJqqZ2OrEbSqVoS1jWuzU2M3QO5nUVUbncq2P9vnWtPh%2F2dpQi3t3oB9nIfLKJW7rjN4EBFvrGYfpB83Zmi3ue%2BxOxXn8SHStxdkPZ7411GviEo8mg8htod%2FKXNsumQmUUcp0TM1WFz%2Blrg%2FrUhGxATrNhV%2B5dhe2arCc1XjqTGoqWwLqAOlYv%2BfvOL8mD%2Fnx2d882h%2F8mv2hXMv5yJ7bzFmLAjBXKo3ug41VEkONJ1LFb2w02%2Bpu3bpxUq2pZCbR2O%2B0pNTcT4ro1KLRpM5%2BR0JBGgP9lKopG0EPs9JPMSmRhSeBeCbtd%2FeYyUX2weg8zRlwssrrITzTOMhoKL0dADIIH1vrLkEIQqjrSucJZV3DgyQnm%2BXHKmlJU%2F0b0j2Vc2UUgaMmTUTVU91TW0n4oztRYsL05LRxSAX2uT7YI%2BMIDxicoGOqUBZp9EZc2rhVux7LNVL2qcgEcMKZngUDFKd5nYdZTCgExcOohycMv10yl58324io0zVKidxr8IHfmwgOPVvWguTddPy2DmxT1vAsQbfiTGIUJfAQzcizWl9Xqi%2BFcXwhaGjDDZbwVSO%2BH25dajAaTQ5RRX3MVf%2Bv1zfuF4RI5k%2FAZ3tU%2FBg4IX04zV0QVsKmVsmPDi%2F%2FbT2wGIU8DbrZ6FUsS44JGR&X-Amz-Signature=40b42db1bc6f7bbe2e81636aa1b91787f5076accc727c2cedc41ad7af44db3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMOW56W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7KWX4DNsCXdagreviC1rYTwayIXcLbffxd2MHCJ2XEAiEA%2FabgCeolLbBXpKNBbtmvVjNNXvJOrImO8W0QewUWpxQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMQ4toalHPJUlgUUYircA6R9lBqyDJb4AHPAoK2R8a%2F2223f7J2xo%2FsHBff9eVZn7G%2FKW666Hlyvb1%2BwvdmYMQYEQGgKqw3RNGFxUgvAFdFFhLe0unFmvxQNloA8tSjUGI12t%2BjXV3JM38c8raDcT9aT7NWivygtk%2BSag7f4Ud4LeNgkpPJyrm8DHM7Z%2B4fw%2F8Xqm2Zu%2BL2BTGYr9%2BhdsBtl%2BPD96pdbADldwwJqqZ2OrEbSqVoS1jWuzU2M3QO5nUVUbncq2P9vnWtPh%2F2dpQi3t3oB9nIfLKJW7rjN4EBFvrGYfpB83Zmi3ue%2BxOxXn8SHStxdkPZ7411GviEo8mg8htod%2FKXNsumQmUUcp0TM1WFz%2Blrg%2FrUhGxATrNhV%2B5dhe2arCc1XjqTGoqWwLqAOlYv%2BfvOL8mD%2Fnx2d882h%2F8mv2hXMv5yJ7bzFmLAjBXKo3ug41VEkONJ1LFb2w02%2Bpu3bpxUq2pZCbR2O%2B0pNTcT4ro1KLRpM5%2BR0JBGgP9lKopG0EPs9JPMSmRhSeBeCbtd%2FeYyUX2weg8zRlwssrrITzTOMhoKL0dADIIH1vrLkEIQqjrSucJZV3DgyQnm%2BXHKmlJU%2F0b0j2Vc2UUgaMmTUTVU91TW0n4oztRYsL05LRxSAX2uT7YI%2BMIDxicoGOqUBZp9EZc2rhVux7LNVL2qcgEcMKZngUDFKd5nYdZTCgExcOohycMv10yl58324io0zVKidxr8IHfmwgOPVvWguTddPy2DmxT1vAsQbfiTGIUJfAQzcizWl9Xqi%2BFcXwhaGjDDZbwVSO%2BH25dajAaTQ5RRX3MVf%2Bv1zfuF4RI5k%2FAZ3tU%2FBg4IX04zV0QVsKmVsmPDi%2F%2FbT2wGIU8DbrZ6FUsS44JGR&X-Amz-Signature=f4e57cf567259f3bda649c6864308c1e8dc1c6be97732403c21beaf3056fbf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
