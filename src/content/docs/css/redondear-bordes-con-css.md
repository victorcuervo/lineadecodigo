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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q323UTH7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHSoItYYinSHdm%2B%2FBgadHUolCIApyliO4NWu4krDa5uoAiA2tAILH%2FGHoqwFdQy%2FBoLvk4NRFGiy0JbptoVgM6Px7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM3AnZqnN2sVi9dED%2FKtwDsQsJdNgU7VoLVKnfpt5C9UITuGd2kRkmYuosEgKruoR%2B5qGjIgDUMga%2BHVRK3WoD8F%2Bbj5T%2BffXy8mtUT3y7VHa0Iupx%2BJcY2sPA0ShHcOnUsFfmYjj%2FIZIUWhu4Q4G2dARs9oKwZ3bWaGBhA5C%2FuZOHFFaOZooUr%2BIaj50M7haQpsRhiS2oKqxlsHFnILD9mfzjbIESjmLNED%2FO0ZkvM7YLEgJ4x%2BGAkc5mhbBKkNh3al5csmBIHtrjezguHKGUPS7oopWvBfthxKvqZfpxK6DVqy0BG8vb4n6gRf73TcJoYb3X7yM9WPBMaPt86fLRl%2BlS%2FL9OEjckNJNlHhuHysMvyxvDaxRFX6IPxC6IXXU%2Bt%2BH0enBl7OH6Hs7aIUBKvFj20CLonizBiVdo1wUdgRlUu0mUH83rCJrnvL%2BGQVRZ%2BqZsPZzn%2B9QSivOBXWoZU3bhdw%2FO%2FtBiNMvdhj6dXmQzcWe3S85C8Szp1wx8NrBH2huiuYAHSOAfcl1G6GGY6AU1bY0cVCFZqVDnflngxm7TQ8wG34E7SncVX5ezAXlNwape9Gjde%2FsES6SyGH5nRCsX9XBiviPtaMV6lOU2KRfqXrB08k2nvq4v4g0EVA3vWN%2FLUcWVSxjxtd8wxJTDyQY6pgGdnOgZsMx0BkANib0zp8ypiKHzdk%2BywF%2F1Ks9AwJa1j2RdpIkx5KCyuO0zxfJLni%2FNfsCnt8oVsCWf5yfJRo7Lt2O1o4VdDweW2XYowNf49nh3HFCg7b5cji4NF8pNpDW07RqdKBPXy77ll7AKmcGsU1Kg23qwLxIv%2Fy4VJ3FLSe%2BgJumJ9a7W6PgJMoIBUq5oWSLC7rwJ5QDrXVQ%2FRTcmSleG8I1E&X-Amz-Signature=225104276b2b1a379d4f63cab303ce283f18d1f7bdcc4ebd00b83bd683a6223a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q323UTH7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHSoItYYinSHdm%2B%2FBgadHUolCIApyliO4NWu4krDa5uoAiA2tAILH%2FGHoqwFdQy%2FBoLvk4NRFGiy0JbptoVgM6Px7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM3AnZqnN2sVi9dED%2FKtwDsQsJdNgU7VoLVKnfpt5C9UITuGd2kRkmYuosEgKruoR%2B5qGjIgDUMga%2BHVRK3WoD8F%2Bbj5T%2BffXy8mtUT3y7VHa0Iupx%2BJcY2sPA0ShHcOnUsFfmYjj%2FIZIUWhu4Q4G2dARs9oKwZ3bWaGBhA5C%2FuZOHFFaOZooUr%2BIaj50M7haQpsRhiS2oKqxlsHFnILD9mfzjbIESjmLNED%2FO0ZkvM7YLEgJ4x%2BGAkc5mhbBKkNh3al5csmBIHtrjezguHKGUPS7oopWvBfthxKvqZfpxK6DVqy0BG8vb4n6gRf73TcJoYb3X7yM9WPBMaPt86fLRl%2BlS%2FL9OEjckNJNlHhuHysMvyxvDaxRFX6IPxC6IXXU%2Bt%2BH0enBl7OH6Hs7aIUBKvFj20CLonizBiVdo1wUdgRlUu0mUH83rCJrnvL%2BGQVRZ%2BqZsPZzn%2B9QSivOBXWoZU3bhdw%2FO%2FtBiNMvdhj6dXmQzcWe3S85C8Szp1wx8NrBH2huiuYAHSOAfcl1G6GGY6AU1bY0cVCFZqVDnflngxm7TQ8wG34E7SncVX5ezAXlNwape9Gjde%2FsES6SyGH5nRCsX9XBiviPtaMV6lOU2KRfqXrB08k2nvq4v4g0EVA3vWN%2FLUcWVSxjxtd8wxJTDyQY6pgGdnOgZsMx0BkANib0zp8ypiKHzdk%2BywF%2F1Ks9AwJa1j2RdpIkx5KCyuO0zxfJLni%2FNfsCnt8oVsCWf5yfJRo7Lt2O1o4VdDweW2XYowNf49nh3HFCg7b5cji4NF8pNpDW07RqdKBPXy77ll7AKmcGsU1Kg23qwLxIv%2Fy4VJ3FLSe%2BgJumJ9a7W6PgJMoIBUq5oWSLC7rwJ5QDrXVQ%2FRTcmSleG8I1E&X-Amz-Signature=d5c44c018deca251fe7792870aae14d57fdac3d88a8b21ac445f421fe52300a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
