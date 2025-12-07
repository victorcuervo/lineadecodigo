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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCOF2DP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqETi7nBF0lzZOXws8IK%2BCnFBQyUTSHQi8xhqUtBUNDwIhAOJVfGLiW8zMr%2BZm9XPBXsZm8dYkUq4ZQagWixgw%2Bz%2BbKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBUbeEq04BSjCPPlQq3AMY6EqeHRxV2XJtTUghll0Ezq3gXn7%2FYdcR30LTCEPEmck8QF4Oib5ZGtbO%2BOjRm4BZBv4nxiY0wagzgTCtvhIYDqpI%2FBoc91TbXXPHRnsDGTKS%2F8%2F2iLBYRQZTpvo535X8Z2gNWH19WkiGll3DRLNPUCr0%2BtdszHBNUpRETaMtGNLHJa33ahV2XzfvPAGiVHOyNAuIIeFRjUEq0f9pu7iM7L9SqAgOJwndf965KE6pUWUj%2FRwEP1HzB9V%2FytxfZTXTaa9MTKdg41M6oNS6fk%2F2wqq4qYPM2EGmc4YatXJcsriU%2BG6X1%2BQzZpZJeIsowfJZHpYbDtunb9y0EImjRcO0gIFa5q5hrzKvyfTYbq0IXwe6gFburI9NLkJqai6bkvCUclSyiKOTXWBMo0hNGTzcsjNTQBe0UgDdqFIZlUfowXfc%2FTfJPkTKthmkMOzvnzLJYgjArHlmsxW0o8ljj7r1UZDZnmPIj4kKVrEAd4E1SL08VCjBLU3A%2BN15G3FU5HwuniNa0Mx2fTZdas5sjIhBUVJKc5x6Cz5G9uBoCeAoGb4U3c4SpbA%2FzJEPn5vkafZscW3aS45ID8PUeFx%2FzkDsfFGEAptYr0l0T4pUkPLOdkF%2BHayGQRrbRSJPFDDuhNjJBjqkAXrv%2FIjTC10czL6Lz3W2%2FgHJvmKIoAxtfWyfMP4GubQYMwnKReRptfLLwX42g%2B7RewI81WzmVaWpdu1vSgN845hKUMyElrmu%2F66jlOj%2BPpksRyC3R2yprLtZJBNB8%2F9AZ9WeATMGiqeVCC3wcKfUGGnxLhKBIjfN%2BKOxw8Cu4iCBpfQpinUEu2%2B4kwUAJEFZb41%2FzxUmlLfh99XjHVHFqImmLjqk&X-Amz-Signature=21508f36ed3b0dd003b12bb1d1a69aaaa5886447570c54107647f3212f6295f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCOF2DP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqETi7nBF0lzZOXws8IK%2BCnFBQyUTSHQi8xhqUtBUNDwIhAOJVfGLiW8zMr%2BZm9XPBXsZm8dYkUq4ZQagWixgw%2Bz%2BbKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBUbeEq04BSjCPPlQq3AMY6EqeHRxV2XJtTUghll0Ezq3gXn7%2FYdcR30LTCEPEmck8QF4Oib5ZGtbO%2BOjRm4BZBv4nxiY0wagzgTCtvhIYDqpI%2FBoc91TbXXPHRnsDGTKS%2F8%2F2iLBYRQZTpvo535X8Z2gNWH19WkiGll3DRLNPUCr0%2BtdszHBNUpRETaMtGNLHJa33ahV2XzfvPAGiVHOyNAuIIeFRjUEq0f9pu7iM7L9SqAgOJwndf965KE6pUWUj%2FRwEP1HzB9V%2FytxfZTXTaa9MTKdg41M6oNS6fk%2F2wqq4qYPM2EGmc4YatXJcsriU%2BG6X1%2BQzZpZJeIsowfJZHpYbDtunb9y0EImjRcO0gIFa5q5hrzKvyfTYbq0IXwe6gFburI9NLkJqai6bkvCUclSyiKOTXWBMo0hNGTzcsjNTQBe0UgDdqFIZlUfowXfc%2FTfJPkTKthmkMOzvnzLJYgjArHlmsxW0o8ljj7r1UZDZnmPIj4kKVrEAd4E1SL08VCjBLU3A%2BN15G3FU5HwuniNa0Mx2fTZdas5sjIhBUVJKc5x6Cz5G9uBoCeAoGb4U3c4SpbA%2FzJEPn5vkafZscW3aS45ID8PUeFx%2FzkDsfFGEAptYr0l0T4pUkPLOdkF%2BHayGQRrbRSJPFDDuhNjJBjqkAXrv%2FIjTC10czL6Lz3W2%2FgHJvmKIoAxtfWyfMP4GubQYMwnKReRptfLLwX42g%2B7RewI81WzmVaWpdu1vSgN845hKUMyElrmu%2F66jlOj%2BPpksRyC3R2yprLtZJBNB8%2F9AZ9WeATMGiqeVCC3wcKfUGGnxLhKBIjfN%2BKOxw8Cu4iCBpfQpinUEu2%2B4kwUAJEFZb41%2FzxUmlLfh99XjHVHFqImmLjqk&X-Amz-Signature=f1f8eaf8683fae3b6f002c5b369cd0838dca816152026433e5ec2811bfaca1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
