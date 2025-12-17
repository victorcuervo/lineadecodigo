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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HONAXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg4qr5jGf%2FwBDSJZzWq6e2dOpVva6mbiQOZroH6lbKgAiEAqz9VmBl%2FMA0yt8rsVKmQYoNDjJHwfaj34Qu8MD2WWqoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjexU3zqn3SsX405SrcA%2BYqlIlHr9EMN4TrsixmAyCD5fp1JfTkopX%2B2VABXzhDLEvIjGmS6PfvbmskREoRL3DAOqv6Z%2Fv4LUFxul8fyX7kWUT8yV3GkZ0O7G15qG6b17sl%2FzhIcfPFfoHnvEFTlr2MFYkVFKb9IpmwfAoMDGX8QD%2Fo6q1NIGtLW3Mv0lKZ9g54sBm5QfstD06kCZ2OjEA963rECt9rWyQ3Kta2Sl99Y%2BhSxyjLTXF6fAPiYXXMPTjnqCK%2FZcgvV1v8oNpaS9a5OaA1kYGogBvT7M1i8OY2aqYtPsJj0rXMrqqKmdCv29D2oZfZjZJBocmjnDC1bl3KSe2hIsyGZbxk6bf346y37gtyjk94uYbZ2%2BlqvZLpaLBREPiHlvXgf9hsvebdJj3vGp91x%2BR2WxJZkoePtL%2BT%2F4dZkKsKbVRDSjdG5OCvGiqDeq6icrqQWhyxrlx7ZzJoPWvTd4FYW%2Fx8uEU3BdqCv%2BH53gTlYK3j%2Fq00dL7ZLvSQphbW6SDdInl18WjMAx0ZGXurs2CEkPmOTcUIuYxW1v%2BkUdSc8Z4qk9wRaaHJfliZrlGmjpiIUq7xsqSqMASsI3L8hHGsDcTPzLkkYktv5H0qOQ7bra7k%2FSpEggloJD6NRp6kLR%2FDy%2FvmMPP%2FisoGOqUBDd0SoY52kuEYAkkiL8fhHuIwkGJPzQQWAuo7JSZZ%2F4FYHomH48m5S%2Bgus1L9kohy2%2BunN1Ls1ZMK1bLB9MNP60S9vGag6RmcIsp26D9hO8BrH0brJ%2FGiuTFs5FYUNAOfEhq3OLRgqcLRXDjRtj36%2BwOuvix3WMCGdiUBv8%2BooJ%2FEUFmpUo7In%2BSMoxIMU%2BH1UQFojGXHA9z1OxW7ZCteAF%2FTufWw&X-Amz-Signature=9e4dd1e6b8df73d4f8c706725cd7202c044d96b8f628203a9cbcbc2323a92752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HONAXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg4qr5jGf%2FwBDSJZzWq6e2dOpVva6mbiQOZroH6lbKgAiEAqz9VmBl%2FMA0yt8rsVKmQYoNDjJHwfaj34Qu8MD2WWqoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjexU3zqn3SsX405SrcA%2BYqlIlHr9EMN4TrsixmAyCD5fp1JfTkopX%2B2VABXzhDLEvIjGmS6PfvbmskREoRL3DAOqv6Z%2Fv4LUFxul8fyX7kWUT8yV3GkZ0O7G15qG6b17sl%2FzhIcfPFfoHnvEFTlr2MFYkVFKb9IpmwfAoMDGX8QD%2Fo6q1NIGtLW3Mv0lKZ9g54sBm5QfstD06kCZ2OjEA963rECt9rWyQ3Kta2Sl99Y%2BhSxyjLTXF6fAPiYXXMPTjnqCK%2FZcgvV1v8oNpaS9a5OaA1kYGogBvT7M1i8OY2aqYtPsJj0rXMrqqKmdCv29D2oZfZjZJBocmjnDC1bl3KSe2hIsyGZbxk6bf346y37gtyjk94uYbZ2%2BlqvZLpaLBREPiHlvXgf9hsvebdJj3vGp91x%2BR2WxJZkoePtL%2BT%2F4dZkKsKbVRDSjdG5OCvGiqDeq6icrqQWhyxrlx7ZzJoPWvTd4FYW%2Fx8uEU3BdqCv%2BH53gTlYK3j%2Fq00dL7ZLvSQphbW6SDdInl18WjMAx0ZGXurs2CEkPmOTcUIuYxW1v%2BkUdSc8Z4qk9wRaaHJfliZrlGmjpiIUq7xsqSqMASsI3L8hHGsDcTPzLkkYktv5H0qOQ7bra7k%2FSpEggloJD6NRp6kLR%2FDy%2FvmMPP%2FisoGOqUBDd0SoY52kuEYAkkiL8fhHuIwkGJPzQQWAuo7JSZZ%2F4FYHomH48m5S%2Bgus1L9kohy2%2BunN1Ls1ZMK1bLB9MNP60S9vGag6RmcIsp26D9hO8BrH0brJ%2FGiuTFs5FYUNAOfEhq3OLRgqcLRXDjRtj36%2BwOuvix3WMCGdiUBv8%2BooJ%2FEUFmpUo7In%2BSMoxIMU%2BH1UQFojGXHA9z1OxW7ZCteAF%2FTufWw&X-Amz-Signature=4205882966e0840c8bdf7ea03b6402dcbcf02f9d34e57b6a9ab2b120c20ecf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
