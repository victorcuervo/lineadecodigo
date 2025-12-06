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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZSMEHC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Ps7IlRRqV2xFeVG83nnnkKQ8e6LgUlm3wswne8Mp4AIhAL5Rly%2Fy5UlkK%2Faiqy7SlHgFgnsATyG5Awa%2BX3siUdfrKv8DCHMQABoMNjM3NDIzMTgzODA1IgxmhrlSx0DtI4cP6K4q3AOcu1OExu5Jg4O9LboijmRE3kNBEX0e37F2ceamYYzem3sIK1u4rg9aVeV%2Bij2%2FWQd9GLDcinDxVi%2FNrWbKGfxbC%2FnP5Zx4hX%2BLijtfLtiatfULkJ1e5UB8uOeedqQbLN1pKDCNI4ASyFO3bsOe%2BQsCnfrsagn7dI8XV6sRnD8egQsFyxoJ3MUgxdYIN5ylc5j26ijhAqNnec64W7JRavm4voh%2BsSO%2BCPrHPjZatbp2ezTFcTgGAqohsBb403HiZZGP1rkUDuCSfrIcIWj5FTnoso2651yDAzGBGqXCDfZiyHuslZV0PVASSxu7UHR6OWpsxjiLCLZj61Oktb9YojVfG6SbzFxJvUlvvAK36QxhmCBLNAbBuLJbBA1TJsIj9c3M0GXwamZ3rDd97s3tnT3e5vYgQ6u4xUpJxj4c01VVM9LsSaUs%2Fnpd2PePfCEkyzqAY2OZMA%2BY7KlLLo5PAaO4NV7vYxwPY%2BRKsBaIEm11XKIhTX2UCRz2US4eZLToQcwjYjU%2BeGh%2FooIzAcOmZAAnNfB8d4ddU6IMm4ir2TUd901qUTRBLk6%2BFOLBTwArsvEUaNGP4vHPf55TcSA0M4cieY9aKO%2B91VpGXSmeGNasEoj47srlha5PBSnM5jDtidDJBjqkAbV%2Fw2%2BFUPtGB5UvVT98cYR6gBM3QsM%2Bb17R1XSIcw8Un3tR%2FIVCZxBbsyfgeViL1P2P96%2BiIYIyT30aIY2WbdMQsauRqZhnhnZT%2Fnlvb1JGFlhyUDwXlpPG0KGV30HhP%2FANPgZc7tYvgQRAB8E7qj8Ep9kaRC%2BwB5ysxeDQ2EQopMYbt3G9QDoYbE3bwhicvtcK6m6bhQBJqZe4Uz1QGVafXPUK&X-Amz-Signature=8d5e68d3733671d18d80871e046bba0014300f221519c37c060e0ca1499bf94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZSMEHC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Ps7IlRRqV2xFeVG83nnnkKQ8e6LgUlm3wswne8Mp4AIhAL5Rly%2Fy5UlkK%2Faiqy7SlHgFgnsATyG5Awa%2BX3siUdfrKv8DCHMQABoMNjM3NDIzMTgzODA1IgxmhrlSx0DtI4cP6K4q3AOcu1OExu5Jg4O9LboijmRE3kNBEX0e37F2ceamYYzem3sIK1u4rg9aVeV%2Bij2%2FWQd9GLDcinDxVi%2FNrWbKGfxbC%2FnP5Zx4hX%2BLijtfLtiatfULkJ1e5UB8uOeedqQbLN1pKDCNI4ASyFO3bsOe%2BQsCnfrsagn7dI8XV6sRnD8egQsFyxoJ3MUgxdYIN5ylc5j26ijhAqNnec64W7JRavm4voh%2BsSO%2BCPrHPjZatbp2ezTFcTgGAqohsBb403HiZZGP1rkUDuCSfrIcIWj5FTnoso2651yDAzGBGqXCDfZiyHuslZV0PVASSxu7UHR6OWpsxjiLCLZj61Oktb9YojVfG6SbzFxJvUlvvAK36QxhmCBLNAbBuLJbBA1TJsIj9c3M0GXwamZ3rDd97s3tnT3e5vYgQ6u4xUpJxj4c01VVM9LsSaUs%2Fnpd2PePfCEkyzqAY2OZMA%2BY7KlLLo5PAaO4NV7vYxwPY%2BRKsBaIEm11XKIhTX2UCRz2US4eZLToQcwjYjU%2BeGh%2FooIzAcOmZAAnNfB8d4ddU6IMm4ir2TUd901qUTRBLk6%2BFOLBTwArsvEUaNGP4vHPf55TcSA0M4cieY9aKO%2B91VpGXSmeGNasEoj47srlha5PBSnM5jDtidDJBjqkAbV%2Fw2%2BFUPtGB5UvVT98cYR6gBM3QsM%2Bb17R1XSIcw8Un3tR%2FIVCZxBbsyfgeViL1P2P96%2BiIYIyT30aIY2WbdMQsauRqZhnhnZT%2Fnlvb1JGFlhyUDwXlpPG0KGV30HhP%2FANPgZc7tYvgQRAB8E7qj8Ep9kaRC%2BwB5ysxeDQ2EQopMYbt3G9QDoYbE3bwhicvtcK6m6bhQBJqZe4Uz1QGVafXPUK&X-Amz-Signature=257a8d327fe9607697dc59a9c26a8cbb4cd4349c90205f5c9e72ed93e37a7eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
