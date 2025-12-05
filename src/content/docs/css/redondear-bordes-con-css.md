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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6QZXLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqb8PlOZrxR9ks7LdzwRP%2BLNeneK5AweiuQoFvs6If%2FgIhAJNc%2FQfLAFZEdvI%2FhPY7Gai79n2D0X5LBFAuyrKKa7alKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH2%2FHtaxmaikoOMOEq3AMi%2BljqvuvR053QH5oD2hoRO9vWeOO%2FADqtfEBCVmTXHWxcXstvYgiasDLZCqF1vcjBxNoDMnyJ%2FF0QaO%2F4%2BqTatPXo4R%2FNt4q4Jne9ZqM7S9FVESvZ3au0CKeneCFtxfxMIGASOV%2B643eCbu7mFhFBvtZuhSSN38kmmX6iPUzTSWYAUDco7gUtLEfPXEzVpTHDMbp4IlQQEsRVnCMejlDIlP%2B4NWmnc0vDwB1K3WMB%2Fk%2BU9KQARw%2BREJivw8tS7WbYqtxXcJ6owToc2plcAYCdYo2jBwRyOLMk%2FlLGQj1n464slsu5aVe%2FEDwI2cgg1VKN6yPAnD9YIOV8%2FNKFi7hKJZEyFAGBCs90l93PsQi1FxNunDTPCf7ubTo7K40drzI2Z8MHDvIPj1rBCSgldv8PFlvKyNRk9l7yDqnw1E%2F4nAWkbV4vleuJZpBs4e1dskeqP%2BHk8pjBrBRxEjuaJxQxtkVZvtf8ksn4JgzJi2FmstSTc699w0LgpMOerlLQfGMAKOKJC42RqLsnBkZYgCpL1hC%2BvNitTJGV10TzTNC8cAl31wlT%2BkAEs07%2Bfkrb9Jj%2Bz%2FguOZFesiEnzj886pLEm91T%2FDgYRadVDAUJzyGxyBwTiGLDGuNROyr7dzDAjM3JBjqkAQEEVZlh72PPWZF3huRa4cNUNSf92QnxWLsER9Rwmal0vXBOobapuMGtx8HGuxeP55h%2Bacb5R9%2FldMoqiYbCLz5iaqv1gbpP0u7BFpdLyL2280SzgvG55vCsQU7u8B0DIvOWBVCTJw4uTLC0K5two9u%2BlyA%2BpYj5K5n4%2BO5FQt%2F6gqaPcLB8LA5UVgh85ZJsDUEcndltA2kzvM9fgRdkkfVmGdGs&X-Amz-Signature=b3d689d54f9e60be2694f0dda4dcd01e893c899511c6062886a10e3fbe33b654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6QZXLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqb8PlOZrxR9ks7LdzwRP%2BLNeneK5AweiuQoFvs6If%2FgIhAJNc%2FQfLAFZEdvI%2FhPY7Gai79n2D0X5LBFAuyrKKa7alKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH2%2FHtaxmaikoOMOEq3AMi%2BljqvuvR053QH5oD2hoRO9vWeOO%2FADqtfEBCVmTXHWxcXstvYgiasDLZCqF1vcjBxNoDMnyJ%2FF0QaO%2F4%2BqTatPXo4R%2FNt4q4Jne9ZqM7S9FVESvZ3au0CKeneCFtxfxMIGASOV%2B643eCbu7mFhFBvtZuhSSN38kmmX6iPUzTSWYAUDco7gUtLEfPXEzVpTHDMbp4IlQQEsRVnCMejlDIlP%2B4NWmnc0vDwB1K3WMB%2Fk%2BU9KQARw%2BREJivw8tS7WbYqtxXcJ6owToc2plcAYCdYo2jBwRyOLMk%2FlLGQj1n464slsu5aVe%2FEDwI2cgg1VKN6yPAnD9YIOV8%2FNKFi7hKJZEyFAGBCs90l93PsQi1FxNunDTPCf7ubTo7K40drzI2Z8MHDvIPj1rBCSgldv8PFlvKyNRk9l7yDqnw1E%2F4nAWkbV4vleuJZpBs4e1dskeqP%2BHk8pjBrBRxEjuaJxQxtkVZvtf8ksn4JgzJi2FmstSTc699w0LgpMOerlLQfGMAKOKJC42RqLsnBkZYgCpL1hC%2BvNitTJGV10TzTNC8cAl31wlT%2BkAEs07%2Bfkrb9Jj%2Bz%2FguOZFesiEnzj886pLEm91T%2FDgYRadVDAUJzyGxyBwTiGLDGuNROyr7dzDAjM3JBjqkAQEEVZlh72PPWZF3huRa4cNUNSf92QnxWLsER9Rwmal0vXBOobapuMGtx8HGuxeP55h%2Bacb5R9%2FldMoqiYbCLz5iaqv1gbpP0u7BFpdLyL2280SzgvG55vCsQU7u8B0DIvOWBVCTJw4uTLC0K5two9u%2BlyA%2BpYj5K5n4%2BO5FQt%2F6gqaPcLB8LA5UVgh85ZJsDUEcndltA2kzvM9fgRdkkfVmGdGs&X-Amz-Signature=7c3c2df51748142dc2cf362df7fa5fd7ab561657e1b067715a241b00a2598ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
