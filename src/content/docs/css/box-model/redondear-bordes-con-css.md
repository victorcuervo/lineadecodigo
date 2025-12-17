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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735WHF5T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH34oISaJV3hl1kNUi75c5sszOgmzCG%2FKDP6Muu0oV0oCIQCofaKJnp%2BckWPXJEPFNLZtYeRYhwXpSyofmQTBPetNrCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMzJi28FJhuaa9Pck6KtwDnyUNUyVDovwvEZFTX2PN7prHklebgFCO6OFVh8AvDnDWczZThLFSJKy33zcID3Rb541gwQGY2WP%2Bc7PvcbaJIbowpAAhqc7pkupKevWDmPW1rWeyyYEsuyBpileQ6nqNFCVWqSX%2Bs2%2BI1wEmr%2F2TO0ooXGPqE%2FCzoDuandY9L9EiMYfmxDS3AUjamAkA81szWy6%2FSVZeFdriw5oamWxbe%2FMqRm644zamL4LWr%2F665jVglhspLHy%2B7xdeksCdfSArtWO93o1WCvBsGSIIM%2B9fSHcBNEC1Jh7nZavmDzlZn6PuUFPT6s2gB5FSQG4VCVhKwgJ8ck3onmID6LbmA6F57ErRNz0gmqMTaUEEru7IqaiTLTXxgxaNdrc6QkRyEQN%2BawLU7aTeBSj%2F8OMtW0tuwvcBayKzYhPYRgoJMcLMzC%2BMFERT4zwkNm%2B7tf9OptNOEvu6pr92slsQw91m%2BeZmwe0hZXrlTt%2FjyA7FxjjWlQHudbU%2Fb7DDpftBzU32ff5w2sk17KqcfaFzFIYiND32fr%2BVJyL%2B3vtxtwYqel%2FOcAVGEqHerzlmJL5Y4N5KAHfe%2F6vQrem30AJTwsmmHpPdDUqffNs%2FY2F4p0bI6GyOb2QBu8dNMxAlwTERHYkwouOKygY6pgExVMGIP72EbzRHTVdQVhgB47HG1uT1f0KBXj3miEU3xaHYn8a7SLjGpPBePEM4Ox8Qt5%2BQn6hSwy7Vnz%2F5SDX20TZ4i9293LkALz%2FbPYPcfN%2BUroaOu%2F%2BHObstGIhzGIAl1Y2muinJ%2FV9MLAran9ktxnsGhRLgbgCWJpjzB2RSvGgtVTLxkOKrwwfXlZmuXTNtjrAyJuR4Wkg3Bj%2F9LqS2c99Km0%2B1&X-Amz-Signature=46c5836e156a422882b3e754e436ca7d34fb53727af5a4c7ae8682070a2d18c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735WHF5T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH34oISaJV3hl1kNUi75c5sszOgmzCG%2FKDP6Muu0oV0oCIQCofaKJnp%2BckWPXJEPFNLZtYeRYhwXpSyofmQTBPetNrCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMzJi28FJhuaa9Pck6KtwDnyUNUyVDovwvEZFTX2PN7prHklebgFCO6OFVh8AvDnDWczZThLFSJKy33zcID3Rb541gwQGY2WP%2Bc7PvcbaJIbowpAAhqc7pkupKevWDmPW1rWeyyYEsuyBpileQ6nqNFCVWqSX%2Bs2%2BI1wEmr%2F2TO0ooXGPqE%2FCzoDuandY9L9EiMYfmxDS3AUjamAkA81szWy6%2FSVZeFdriw5oamWxbe%2FMqRm644zamL4LWr%2F665jVglhspLHy%2B7xdeksCdfSArtWO93o1WCvBsGSIIM%2B9fSHcBNEC1Jh7nZavmDzlZn6PuUFPT6s2gB5FSQG4VCVhKwgJ8ck3onmID6LbmA6F57ErRNz0gmqMTaUEEru7IqaiTLTXxgxaNdrc6QkRyEQN%2BawLU7aTeBSj%2F8OMtW0tuwvcBayKzYhPYRgoJMcLMzC%2BMFERT4zwkNm%2B7tf9OptNOEvu6pr92slsQw91m%2BeZmwe0hZXrlTt%2FjyA7FxjjWlQHudbU%2Fb7DDpftBzU32ff5w2sk17KqcfaFzFIYiND32fr%2BVJyL%2B3vtxtwYqel%2FOcAVGEqHerzlmJL5Y4N5KAHfe%2F6vQrem30AJTwsmmHpPdDUqffNs%2FY2F4p0bI6GyOb2QBu8dNMxAlwTERHYkwouOKygY6pgExVMGIP72EbzRHTVdQVhgB47HG1uT1f0KBXj3miEU3xaHYn8a7SLjGpPBePEM4Ox8Qt5%2BQn6hSwy7Vnz%2F5SDX20TZ4i9293LkALz%2FbPYPcfN%2BUroaOu%2F%2BHObstGIhzGIAl1Y2muinJ%2FV9MLAran9ktxnsGhRLgbgCWJpjzB2RSvGgtVTLxkOKrwwfXlZmuXTNtjrAyJuR4Wkg3Bj%2F9LqS2c99Km0%2B1&X-Amz-Signature=5a526a56563a08608f63b5727da65a0831535edde774582d32b6ff86e77072a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
