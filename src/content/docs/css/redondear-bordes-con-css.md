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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGC4CMZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FpAJLZI4UyN%2BGvO2remqpFMhgc2dnwkYw%2BI7AatiZQAiBCT2cTlaANFIknlVgRO%2FswvjA2SylIF2KkdoLlTWraPiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVRGP1Nqx5kBAIqQlKtwDudANHV%2Fzp%2F69o4mNSCvbZtiiI2nS57b7Bq11wWaHfOdcpD0PqTKvM1d4tWH4PlrnalAkFmgUhkPWadbKMiTzJNDuoz5qb%2BOGW2quv4K%2BpzdChhwnFV0sTB%2Fd0Ksy2n%2BH1SndPXFHcPoU%2F%2BbFiuPJJKhOipUjbxT2pAK4J2ILOCLfQSo%2FxWiHA4a2cQ96J8Jfeyw00aqoGNr26UbFst4mtPYAgSCW5XZAkAaOaArNJ%2Fw1ZoLHfkvuSoxOamQVHCPriC6GpROYTMTr6J3ziTOozOquM%2BiJU3zRsmwz8aOkYgt%2FdrofNse8BZ62kY5oiTl5fDeN7Zm5s2i29TBZrAcNQf1OdLgueeQqWuDVeHn5Dn3LGomtnkxKYrVUSwSYTWjB6sld%2FVPEVb2dURgXuAkiaHqFUjVkhsA%2Bg4Too5F306SuPyoNO4ORVHtMZJWT0VjseYtPSuDBFex7jETg%2FZH7C2x0iGCNK4L0JHA95iuQdXupzR3g8b0FLJbkyQDcZwQCYGkwQoVDuNSDCSig6c2nyFIlMV2Jk%2Fe%2FMRxIFumDkcrlA479eENzg1fuxe4H8MtgoDUzYYksLTnxB2SMltHaUQZwQ6R%2FHKrGs4UqREH8ioud27Q3sXjZmGBTd4owiojcyQY6pgE1PrC%2Bw1d5JYrZRW%2FnjsuCAzlWL6B5ixlEwY3xdSuTN13z9a6QOvmr6xL%2BnLQ1wiaM19un2l6I4pLZxghs%2BmW1xA03lKCzKR%2FyhbnG4UyNora3n9k0XkcQ4SF%2FtHBeCluiBYZDxvoIw5eDH379YwiRHI4cztAYbYpaGmCOJDxpSeuUqB0QUncAvQCf8vczTExu8%2FONKyy1H6sJCsuG7gBhfmOniOS3&X-Amz-Signature=72b75e0bc40e85d3e7d5ff0b7cd4aeb0562f315c3723a59a1132618c3ab74319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGC4CMZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FpAJLZI4UyN%2BGvO2remqpFMhgc2dnwkYw%2BI7AatiZQAiBCT2cTlaANFIknlVgRO%2FswvjA2SylIF2KkdoLlTWraPiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVRGP1Nqx5kBAIqQlKtwDudANHV%2Fzp%2F69o4mNSCvbZtiiI2nS57b7Bq11wWaHfOdcpD0PqTKvM1d4tWH4PlrnalAkFmgUhkPWadbKMiTzJNDuoz5qb%2BOGW2quv4K%2BpzdChhwnFV0sTB%2Fd0Ksy2n%2BH1SndPXFHcPoU%2F%2BbFiuPJJKhOipUjbxT2pAK4J2ILOCLfQSo%2FxWiHA4a2cQ96J8Jfeyw00aqoGNr26UbFst4mtPYAgSCW5XZAkAaOaArNJ%2Fw1ZoLHfkvuSoxOamQVHCPriC6GpROYTMTr6J3ziTOozOquM%2BiJU3zRsmwz8aOkYgt%2FdrofNse8BZ62kY5oiTl5fDeN7Zm5s2i29TBZrAcNQf1OdLgueeQqWuDVeHn5Dn3LGomtnkxKYrVUSwSYTWjB6sld%2FVPEVb2dURgXuAkiaHqFUjVkhsA%2Bg4Too5F306SuPyoNO4ORVHtMZJWT0VjseYtPSuDBFex7jETg%2FZH7C2x0iGCNK4L0JHA95iuQdXupzR3g8b0FLJbkyQDcZwQCYGkwQoVDuNSDCSig6c2nyFIlMV2Jk%2Fe%2FMRxIFumDkcrlA479eENzg1fuxe4H8MtgoDUzYYksLTnxB2SMltHaUQZwQ6R%2FHKrGs4UqREH8ioud27Q3sXjZmGBTd4owiojcyQY6pgE1PrC%2Bw1d5JYrZRW%2FnjsuCAzlWL6B5ixlEwY3xdSuTN13z9a6QOvmr6xL%2BnLQ1wiaM19un2l6I4pLZxghs%2BmW1xA03lKCzKR%2FyhbnG4UyNora3n9k0XkcQ4SF%2FtHBeCluiBYZDxvoIw5eDH379YwiRHI4cztAYbYpaGmCOJDxpSeuUqB0QUncAvQCf8vczTExu8%2FONKyy1H6sJCsuG7gBhfmOniOS3&X-Amz-Signature=5da147fa9b95d84c6c030edc3afcd740643f52611f6e2063cd8d69fd4d0396c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
