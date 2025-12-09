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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQYZGXP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLeG66IDerCRemxhes5rPF%2Frkm0juusAdZqh4WwCvb9QIhAKx%2F2ToCIVjbMF9l%2BtZppD%2BzNG0Uuvr6BklwLzUPwSDkKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzopJE8HvkYgbf97Roq3ANYiTpJguVQRQVPBgcydLPOFUPbXBlQYv1%2FMxis9MkvhXFiVy4SG5X9cM2xns0XDiBpc1r2eXcRnEQuEXHmBRsSrCAT5cPwD3za9%2F%2Fim33dX3n3do%2FDVKGk4y%2BwxKgx%2B%2FMnwKydMAzdeL4hAXTi9HegQusIF1Tyo7kOJ1Q%2FdbOYQsrUN52T5Lf4jHPOQv370tXwaCspqA2nfY%2B30sW3OQSq192Tqu%2Bz6den%2FdHobCa%2F%2BbLBbaAsV4JQSE0Y0W8UI%2FdMyNnpLswwrc3lW%2BmiWhNWkL84jQZtpEepI6LIJzif4CSVQT8TdPHSzKWvbhzJvR8R7RTf%2FhIUJVduuu7hJDvTvMx0BtxwDTaWXyV6quz%2F8OSRDtTPcQnFPEJHEEkJ9PQIMqksVfuoJAcu4l31ltMbxvc864Sw6rwJM9oPD3LCcF1n7VGaswKklADhr66d2ALMrpT8QOkWjVH8%2BW88U7uVEcehnthP0q%2BWMKuM%2FRIpNu99rmZ36CHS%2FHPZxEwjiQoSUg%2FZNgVS%2BGPLvjK7AiNTq1Hu5YqBQVXL6%2F%2B4chlfURNNwWiNOk0dh8jyzQn%2FIe17zg32mGxUFjHG8RpWhwZWc7mtUOD%2BKVxcBdp6Vc9ekGhhJvfFzopRi2LpUDCOw93JBjqkATvqIJQtO9jxvkdNTdw4hm8Pp76SYjkXQubRMvgH%2Bk15WW8jwIvnEoJRjR0qFpMRdEAvr2TZoHXUeTSvuw4WE1fJUMpl9%2B1%2BG%2Bel9DVM4inDwQsB035axFtXp69NE0QNEi%2FS29%2BZv0mOIk%2FGQuOGD69b998lbn%2FVxCfBGN%2FCAXpvGa%2BTVcCBQa0%2B5ZqepOdZLypJFeDhfmSmmaESt83lNvAaw%2BhS&X-Amz-Signature=9587fe4a472f7e985a1f9b39b3b557afb31c8615a80456920727af8e72cfb964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQYZGXP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLeG66IDerCRemxhes5rPF%2Frkm0juusAdZqh4WwCvb9QIhAKx%2F2ToCIVjbMF9l%2BtZppD%2BzNG0Uuvr6BklwLzUPwSDkKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzopJE8HvkYgbf97Roq3ANYiTpJguVQRQVPBgcydLPOFUPbXBlQYv1%2FMxis9MkvhXFiVy4SG5X9cM2xns0XDiBpc1r2eXcRnEQuEXHmBRsSrCAT5cPwD3za9%2F%2Fim33dX3n3do%2FDVKGk4y%2BwxKgx%2B%2FMnwKydMAzdeL4hAXTi9HegQusIF1Tyo7kOJ1Q%2FdbOYQsrUN52T5Lf4jHPOQv370tXwaCspqA2nfY%2B30sW3OQSq192Tqu%2Bz6den%2FdHobCa%2F%2BbLBbaAsV4JQSE0Y0W8UI%2FdMyNnpLswwrc3lW%2BmiWhNWkL84jQZtpEepI6LIJzif4CSVQT8TdPHSzKWvbhzJvR8R7RTf%2FhIUJVduuu7hJDvTvMx0BtxwDTaWXyV6quz%2F8OSRDtTPcQnFPEJHEEkJ9PQIMqksVfuoJAcu4l31ltMbxvc864Sw6rwJM9oPD3LCcF1n7VGaswKklADhr66d2ALMrpT8QOkWjVH8%2BW88U7uVEcehnthP0q%2BWMKuM%2FRIpNu99rmZ36CHS%2FHPZxEwjiQoSUg%2FZNgVS%2BGPLvjK7AiNTq1Hu5YqBQVXL6%2F%2B4chlfURNNwWiNOk0dh8jyzQn%2FIe17zg32mGxUFjHG8RpWhwZWc7mtUOD%2BKVxcBdp6Vc9ekGhhJvfFzopRi2LpUDCOw93JBjqkATvqIJQtO9jxvkdNTdw4hm8Pp76SYjkXQubRMvgH%2Bk15WW8jwIvnEoJRjR0qFpMRdEAvr2TZoHXUeTSvuw4WE1fJUMpl9%2B1%2BG%2Bel9DVM4inDwQsB035axFtXp69NE0QNEi%2FS29%2BZv0mOIk%2FGQuOGD69b998lbn%2FVxCfBGN%2FCAXpvGa%2BTVcCBQa0%2B5ZqepOdZLypJFeDhfmSmmaESt83lNvAaw%2BhS&X-Amz-Signature=f02823225efe3cead18bc3c364bcf80f2724e0efb3e81cc1e55076d87f035f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
