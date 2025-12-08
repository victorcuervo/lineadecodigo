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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCFBI3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuu7su2aUdF9seM8NgxcHuCj9XANU%2B%2BDpX0zOg%2FEUb3wIhAOf4%2BNJcfnKrhUQzvY34lhDb33feEqpKlwGB3S%2F50zPjKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz77pJB1HDvFpCA9voq3APEEh5eH4yaP5h8rdLoYVHl%2Frxh%2FeEoQcld%2FQkJpF2XmDPigREdiTVMsYXI%2F5mbUlMHEk6gpYRBW5REIguG1DDbjjzpYhj4kU2kLCIuuLQS%2BgLQqxa74Ymzift%2FU0RWgi0TVoVaIB3n9%2Fq0%2BKiqssyPSHhAgJhZk85xUnRUz4UfZn27O8GH%2Bv8EyouPPXy4e4xWflOdchM8OGg%2BrSVDIdorGTy001ca50NzxbJlK9gG6C1qajUpErGMTwf8DjnikoDCDin147Z8scQ%2FBMWvDtnp2Pn152lrz5HZFhDZS789ynIDJ4aGelgX5TNSDrfbfajwm%2BW2%2B4%2Bpr8tFoNxoKQghiKk1koOSykVMBU0%2FswxZG7i67lb%2Ff6mE9mSkaqDUhiZT0KMy%2Fw34cQSiC4AVEoo6snZPJbXkbzJ%2BY5sT66RIx%2Fb2%2BkVKysyqZkfW42s5fhxa7aFInWxbGbvaRJZwXcuMOd6rQdK%2BL2X%2BmHX2EWjcz3cP1tgcVIIkzenzrXBJXNxvIYyKDzH2Qv8hrMdIB2rqUHFh9LRDYu9iELdPMTc9UdivQu3OunCjVxVraTRkhupUbUQkBohFCQ3wj9ZfKXBN%2Bc7h%2BJ801TyvWPUzcogYRe%2B6NlHmEXwOEapJ2TCF7tnJBjqkAZteRR7svfIsQ0HVhWZAbDtzt13NViXISPbvf%2F4gRsv3oIPZoz9icIrnb2el4McX%2BLRmat98ye85YBNTSwR%2F8wpTdAA8p4sNJxZSLIys1D1S472IB3sobq11geClpHsnkLaIP0q3zC%2FRbP2ng3WtCLLOt5LMrkLxInJy34HGSr9LRp6sfezHDiljwI2kGMwI0g1kGNPAjB54SzTSmSocyY5AowPQ&X-Amz-Signature=ff5eaa70fe895b779c33691cffa701ea7dab93a58cac96e1bbc22da09fce2a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCFBI3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuu7su2aUdF9seM8NgxcHuCj9XANU%2B%2BDpX0zOg%2FEUb3wIhAOf4%2BNJcfnKrhUQzvY34lhDb33feEqpKlwGB3S%2F50zPjKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz77pJB1HDvFpCA9voq3APEEh5eH4yaP5h8rdLoYVHl%2Frxh%2FeEoQcld%2FQkJpF2XmDPigREdiTVMsYXI%2F5mbUlMHEk6gpYRBW5REIguG1DDbjjzpYhj4kU2kLCIuuLQS%2BgLQqxa74Ymzift%2FU0RWgi0TVoVaIB3n9%2Fq0%2BKiqssyPSHhAgJhZk85xUnRUz4UfZn27O8GH%2Bv8EyouPPXy4e4xWflOdchM8OGg%2BrSVDIdorGTy001ca50NzxbJlK9gG6C1qajUpErGMTwf8DjnikoDCDin147Z8scQ%2FBMWvDtnp2Pn152lrz5HZFhDZS789ynIDJ4aGelgX5TNSDrfbfajwm%2BW2%2B4%2Bpr8tFoNxoKQghiKk1koOSykVMBU0%2FswxZG7i67lb%2Ff6mE9mSkaqDUhiZT0KMy%2Fw34cQSiC4AVEoo6snZPJbXkbzJ%2BY5sT66RIx%2Fb2%2BkVKysyqZkfW42s5fhxa7aFInWxbGbvaRJZwXcuMOd6rQdK%2BL2X%2BmHX2EWjcz3cP1tgcVIIkzenzrXBJXNxvIYyKDzH2Qv8hrMdIB2rqUHFh9LRDYu9iELdPMTc9UdivQu3OunCjVxVraTRkhupUbUQkBohFCQ3wj9ZfKXBN%2Bc7h%2BJ801TyvWPUzcogYRe%2B6NlHmEXwOEapJ2TCF7tnJBjqkAZteRR7svfIsQ0HVhWZAbDtzt13NViXISPbvf%2F4gRsv3oIPZoz9icIrnb2el4McX%2BLRmat98ye85YBNTSwR%2F8wpTdAA8p4sNJxZSLIys1D1S472IB3sobq11geClpHsnkLaIP0q3zC%2FRbP2ng3WtCLLOt5LMrkLxInJy34HGSr9LRp6sfezHDiljwI2kGMwI0g1kGNPAjB54SzTSmSocyY5AowPQ&X-Amz-Signature=b8570771e9059551b3d0d07adaa95dd77b8e685b7106f3dba3c4ae1a6bb827b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
