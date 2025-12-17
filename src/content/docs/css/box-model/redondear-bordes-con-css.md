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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEFX7AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBV16Maq7rI7X4MPaqqe00DbiL%2Bym12T4SwgEHJ4GmAIhAKTGSBncuSTemF5FgM2Y%2FjmvCdqyV4%2BHvnjVn4MuFrOoKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1IeATmhvzVsW4TNsq3AOjteGwkEDLkAeb%2Fmq8ZuiuW53ETCJVqMo%2BT6pMgAY2v9C5kodvf6MbT2ozPdRciGQHSoNN8yXIfjOEx%2BhPLHusulkySGrtS3ftYrsdzTdZhMAt%2F4a7fT%2BZheuL7WFQxLGHkZwjMYODvyTSz9bne3%2B97%2FXuHRDm2dCBvIDshAml1smAO%2B0V0Ho1AVEX5AAvcJfm2NSsVCw9ufyGjpH2NoPcV16X9Fr10KvSwtX3XWmFUEwQGZE2d47Y%2BwDuz7B1juHTIoSti21DspbAnS2BSTkZ7G%2BpFvnQ44oIe38DTL%2Fb547GGSYlzwvsJ%2FeCIaoe2bU%2BbigZq2JYzdKKKjuqJzV5AEc1cSp03t7aKZFu4yQplE3ncF9EjbQ3MmpSyzT2i14FSIH62S1oLd9ZDh0xdthn3DXnC2e1mSuWAzoFw709%2BqajpG3zri6u1yZwuwn1AGpFbi29zgxnY8kRev5G0sb7HQsZ29wTh7RTQ6i%2BU7lJrHP9ISp3DkMtB%2FpKJEmoPkA126i1EYi8mL%2B30Upc%2BmrX%2FpRBN4o9HY6Ehq7T1HcwOYGANXXEHd2YkgjYSikYbfNnn1oDnk%2BdRq1FGY6U%2BrgwkzmqJq3p2kd6NIBYK8bjs9%2BTPcAZhu8frPKuTDDHqorKBjqkAeQvYCrNVmwsIfxDRHT7iQbcilodT619yNLMG1I8SGT4dxGHcRtbe8jLMZfouXG6jO4uJIIaZJ2RUefpkcZWbDrHROA8LLse9abNsJyrF9xE90JI24qqaO3u69EziakBzMTF%2BmXUbzPK%2FNVcJDZv3h7jPmf5brr%2BZh5BzpArtGODkW09of6gFlQTd2pygdIy7X2Y61FKMRI%2FqxCq55XCxj%2BFIXTW&X-Amz-Signature=6f4934c52482600738ebce6496501185a8e56e1234097638a9490ff82a583a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEFX7AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBV16Maq7rI7X4MPaqqe00DbiL%2Bym12T4SwgEHJ4GmAIhAKTGSBncuSTemF5FgM2Y%2FjmvCdqyV4%2BHvnjVn4MuFrOoKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1IeATmhvzVsW4TNsq3AOjteGwkEDLkAeb%2Fmq8ZuiuW53ETCJVqMo%2BT6pMgAY2v9C5kodvf6MbT2ozPdRciGQHSoNN8yXIfjOEx%2BhPLHusulkySGrtS3ftYrsdzTdZhMAt%2F4a7fT%2BZheuL7WFQxLGHkZwjMYODvyTSz9bne3%2B97%2FXuHRDm2dCBvIDshAml1smAO%2B0V0Ho1AVEX5AAvcJfm2NSsVCw9ufyGjpH2NoPcV16X9Fr10KvSwtX3XWmFUEwQGZE2d47Y%2BwDuz7B1juHTIoSti21DspbAnS2BSTkZ7G%2BpFvnQ44oIe38DTL%2Fb547GGSYlzwvsJ%2FeCIaoe2bU%2BbigZq2JYzdKKKjuqJzV5AEc1cSp03t7aKZFu4yQplE3ncF9EjbQ3MmpSyzT2i14FSIH62S1oLd9ZDh0xdthn3DXnC2e1mSuWAzoFw709%2BqajpG3zri6u1yZwuwn1AGpFbi29zgxnY8kRev5G0sb7HQsZ29wTh7RTQ6i%2BU7lJrHP9ISp3DkMtB%2FpKJEmoPkA126i1EYi8mL%2B30Upc%2BmrX%2FpRBN4o9HY6Ehq7T1HcwOYGANXXEHd2YkgjYSikYbfNnn1oDnk%2BdRq1FGY6U%2BrgwkzmqJq3p2kd6NIBYK8bjs9%2BTPcAZhu8frPKuTDDHqorKBjqkAeQvYCrNVmwsIfxDRHT7iQbcilodT619yNLMG1I8SGT4dxGHcRtbe8jLMZfouXG6jO4uJIIaZJ2RUefpkcZWbDrHROA8LLse9abNsJyrF9xE90JI24qqaO3u69EziakBzMTF%2BmXUbzPK%2FNVcJDZv3h7jPmf5brr%2BZh5BzpArtGODkW09of6gFlQTd2pygdIy7X2Y61FKMRI%2FqxCq55XCxj%2BFIXTW&X-Amz-Signature=8a3762e35f8b1f42882539b436782069b800ea12d90d861c2f95a6e4c8716f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
