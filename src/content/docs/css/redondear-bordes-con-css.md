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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMJBQL6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCIm18Fa%2FDU1fubkPiwddEWflxz7%2BlwgkGROOhDCw9Y9AIhAIuScDRq2gVtrejrti6MEeeWk4spfvILU%2BUFH5oL9RyFKv8DCDoQABoMNjM3NDIzMTgzODA1IgwNNIU%2FOxehWXzW34oq3AP4YjdFO4mUpCyAjSudLi3efMrueoaC%2FiBW2An63qvntNPhLHXHVg529IYuFxG3ryyQ7Iu9ftqJkiPBl8lAtmZLupDh6xx42DUeh5jBT7BpllO52MuhokwWBxEO1YIepMtPh69oOypBw6ZJIG%2FnqHz9T795QLlp1qiArsgeCmofsyV7fwmSiHXbkoqwC1sune8YWP%2FLKlUcpgwD9uM56nkln7KU9FmZrTnJD1eQORxgI3NL7Y%2BD2fXPXceDpWkiHJOew8%2BtNiO%2BwYs5BvJZnPbHCuI8%2BrpEtQ%2BRc2eMtN1tPOFBlA6NyUE%2FnqHdO1Gnv8ftRC7XEVSSeecmKrP0LYa9VsA%2Bbqrf7pCpGizz%2FVE9BUlWDMBvUM%2F0dSvj6sxdx42cIpLtk5mcvbOnS%2B62pQucaRsRVVHE4940BhgxKOS%2B2Fe9K4Y%2FOBV1SLvW8WfUsEKyiyKAZE8RoEIc4NEifh6ctgrhV5YV0mf1AHYxePWJ2REwpSh4FLAcOa%2BrjxK6S5o5ya0Ar6qrlfoigLUuf5182ctKq6XLMV9UpOkQD3tqqRAKQD%2FfKY%2BKWUAae0r09KbBPGvGMuVAziMiotsmGkhMEFDihD5hWR2afppoL2r7BWW19AHKsykBVPQTqzCitcPJBjqkAQf%2BP5WjAE%2Fv7U%2FgSoBKat%2FNyvEkZ%2BBAcJpQhWfmnPkC1Jot9Tro69tBeE%2FOKy%2Be45BntRaStSWEHgBivAd3LFZqyCbPHsXz2AN%2FOzFbzUbJj73QjmNmVuqC3dl%2BNMkPe5msLEQp1b8cJgY9c05Nc2db0B5wUtbheLRen3xAtynEJ%2BT57HTv0rzr%2BRIVFm2PfZtQMR4c5%2Fm2jeySXg8QYrhzmC8A&X-Amz-Signature=6291ca4df8405974548508e2659abd5e7cb455f7af710a50537975cb717a7374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMJBQL6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCIm18Fa%2FDU1fubkPiwddEWflxz7%2BlwgkGROOhDCw9Y9AIhAIuScDRq2gVtrejrti6MEeeWk4spfvILU%2BUFH5oL9RyFKv8DCDoQABoMNjM3NDIzMTgzODA1IgwNNIU%2FOxehWXzW34oq3AP4YjdFO4mUpCyAjSudLi3efMrueoaC%2FiBW2An63qvntNPhLHXHVg529IYuFxG3ryyQ7Iu9ftqJkiPBl8lAtmZLupDh6xx42DUeh5jBT7BpllO52MuhokwWBxEO1YIepMtPh69oOypBw6ZJIG%2FnqHz9T795QLlp1qiArsgeCmofsyV7fwmSiHXbkoqwC1sune8YWP%2FLKlUcpgwD9uM56nkln7KU9FmZrTnJD1eQORxgI3NL7Y%2BD2fXPXceDpWkiHJOew8%2BtNiO%2BwYs5BvJZnPbHCuI8%2BrpEtQ%2BRc2eMtN1tPOFBlA6NyUE%2FnqHdO1Gnv8ftRC7XEVSSeecmKrP0LYa9VsA%2Bbqrf7pCpGizz%2FVE9BUlWDMBvUM%2F0dSvj6sxdx42cIpLtk5mcvbOnS%2B62pQucaRsRVVHE4940BhgxKOS%2B2Fe9K4Y%2FOBV1SLvW8WfUsEKyiyKAZE8RoEIc4NEifh6ctgrhV5YV0mf1AHYxePWJ2REwpSh4FLAcOa%2BrjxK6S5o5ya0Ar6qrlfoigLUuf5182ctKq6XLMV9UpOkQD3tqqRAKQD%2FfKY%2BKWUAae0r09KbBPGvGMuVAziMiotsmGkhMEFDihD5hWR2afppoL2r7BWW19AHKsykBVPQTqzCitcPJBjqkAQf%2BP5WjAE%2Fv7U%2FgSoBKat%2FNyvEkZ%2BBAcJpQhWfmnPkC1Jot9Tro69tBeE%2FOKy%2Be45BntRaStSWEHgBivAd3LFZqyCbPHsXz2AN%2FOzFbzUbJj73QjmNmVuqC3dl%2BNMkPe5msLEQp1b8cJgY9c05Nc2db0B5wUtbheLRen3xAtynEJ%2BT57HTv0rzr%2BRIVFm2PfZtQMR4c5%2Fm2jeySXg8QYrhzmC8A&X-Amz-Signature=76798c226e168801952488436ead90b312a745616763160e4ccfb418fcd49509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
