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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664II2B4R6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMAiVL95OwfIbYz%2B9iIFZopPIyVHR3Xsfz0ObkhiSdwAiAb3tODZos7YXVZWlvwoNzu3Yta%2Bdz5GMYXihidUlLmiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbs5buer550muy28kKtwDcE8oUPCvjLkhsycHawsTt%2FxqVfGLS%2Bvnu0rZZcuE62j7eXpXqmuJaDk4%2BLRbWZU3ZR8vUiZsXTmxnol1Ubs36LBC7XP6bfHc6MREUiIOeOviNg1fv%2FO9EY6SlIi8xKzoUIANVmL8Zby1j3N%2B%2FZAvqD%2FD%2BdouQxYqWSg0ADp2xu%2BhnySoOPoPFMKBqUxeZCwCD%2B3oRAZZDNC0s29xUaPoJt6NKfTDXaETz3wL8NJiKN70zBfLbohnu9BucRTCyvNY52XmwzRJZ0dxzBbXPd3EouOKR1tVHfyYvL1DXnmqjcrHwOfSlGk49%2BmOA7PEph%2Fr1xaMauzyLGOiMS6pU1vC86HhDcOSVu8YfQON1hOvOnoZtixyoAGI8RZlOPXksJxcFcpxcFTu7juHtMevX0exuoDWvj%2F34rxCx90XoWLQAopODIQ05FPUph0xO13CTtw8jVbUBQHLfKD%2Bsh6ISmbBseO3kVAvr2Ja4kkGayy1a93kkqflF5qdkxfNZ%2BFqxTLsWjUra2BN7hHofVMh8Vo5pJRhQxsvlzwIElAnrDXNkMmzMC8c0BTzslxmCWpLNm4Sqk5xl6Rx4dFQd4XG6iW7o6ETfVSMeQCXGWCVvZQpoPE%2BARDP47u6BlLdVMkwrf7SyQY6pgHFk0mjUwuM7ulbSwmBAaPIRtR9chnXc%2F2adwqGzIDQaPwpQosGpRSx4DGzPRQioHCcEQlpKrPi%2B6%2F%2Bf4FHldtoQxAF%2BNzxYk%2FVr4fLmt5wqhcfdevQ4LcXCer95OKyo7iuy2zeWeNnIfgSaMJoGWvLN4r0f%2BPXWiQtW2a5pAXkED0x%2FyddlaFvZ1pRTmoYIL73ZcJW%2B7q9SeROnWNdvbCkQq2HFjPh&X-Amz-Signature=e596f341d56dc84fb74c6651bae33260b211de35f9a9cd6cd1b60cfa266c2f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664II2B4R6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMAiVL95OwfIbYz%2B9iIFZopPIyVHR3Xsfz0ObkhiSdwAiAb3tODZos7YXVZWlvwoNzu3Yta%2Bdz5GMYXihidUlLmiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbs5buer550muy28kKtwDcE8oUPCvjLkhsycHawsTt%2FxqVfGLS%2Bvnu0rZZcuE62j7eXpXqmuJaDk4%2BLRbWZU3ZR8vUiZsXTmxnol1Ubs36LBC7XP6bfHc6MREUiIOeOviNg1fv%2FO9EY6SlIi8xKzoUIANVmL8Zby1j3N%2B%2FZAvqD%2FD%2BdouQxYqWSg0ADp2xu%2BhnySoOPoPFMKBqUxeZCwCD%2B3oRAZZDNC0s29xUaPoJt6NKfTDXaETz3wL8NJiKN70zBfLbohnu9BucRTCyvNY52XmwzRJZ0dxzBbXPd3EouOKR1tVHfyYvL1DXnmqjcrHwOfSlGk49%2BmOA7PEph%2Fr1xaMauzyLGOiMS6pU1vC86HhDcOSVu8YfQON1hOvOnoZtixyoAGI8RZlOPXksJxcFcpxcFTu7juHtMevX0exuoDWvj%2F34rxCx90XoWLQAopODIQ05FPUph0xO13CTtw8jVbUBQHLfKD%2Bsh6ISmbBseO3kVAvr2Ja4kkGayy1a93kkqflF5qdkxfNZ%2BFqxTLsWjUra2BN7hHofVMh8Vo5pJRhQxsvlzwIElAnrDXNkMmzMC8c0BTzslxmCWpLNm4Sqk5xl6Rx4dFQd4XG6iW7o6ETfVSMeQCXGWCVvZQpoPE%2BARDP47u6BlLdVMkwrf7SyQY6pgHFk0mjUwuM7ulbSwmBAaPIRtR9chnXc%2F2adwqGzIDQaPwpQosGpRSx4DGzPRQioHCcEQlpKrPi%2B6%2F%2Bf4FHldtoQxAF%2BNzxYk%2FVr4fLmt5wqhcfdevQ4LcXCer95OKyo7iuy2zeWeNnIfgSaMJoGWvLN4r0f%2BPXWiQtW2a5pAXkED0x%2FyddlaFvZ1pRTmoYIL73ZcJW%2B7q9SeROnWNdvbCkQq2HFjPh&X-Amz-Signature=e22e6eecd0d96beb740398268fd6e72833ca4527cc53682ad9e015ac55184d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
