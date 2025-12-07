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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZGHYKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRwwTkhl96qbmRl0LIWzcCc2Qh7XMCFAbaOGCxPwF2bwIgf6N8VEEI8%2BX%2BR35GXmzCHd5bSjNLlyOffthef71SF38qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC8yU25vwC4ELPdqSrcA5JaZ0RCuV2LWbSfSPI179LqQFPngePZ0si%2FcH%2FOy%2Fz13ywR64pS03FOzy9Gf7Or%2Bma0uJDe3m2n9KhPpK4Q5zujmfJbn0s764el08aNFO0TVlxooNo9Nsblm0HkIKSW3mT%2F3LaZYzM5%2F0y7AN5vp2hBZh%2Fj5p2t5ui3gyGoAtYbw9Os2BLN%2FX7z1OBMwwGOKYvXP3wzYobZ2JzugVMIfRFlwQyvgXo8TDEf3OGfazo0VtqdI91rFVwmWeJ9lAmdDC0wBxilSJxRNVu8Cv1nGa6LlAhk%2FwRwaMvoPXd%2FH%2BQgbaEKVrPEgTePMlRUm%2BnLVp53uEsYDZLFq7kx%2FOZBzkf%2Fij%2FaDLzeUJFWsUp6kFOgOupE%2BhxXN2XCc7Gt1j0e2SkR8EE%2FoHRUYnAMHLHciKDQD7P%2BZ7Vc8JuGqO0dC1abIlCBfg9ktmU%2BajSXMqeGccsmkAFg%2FeEoOXPgLlbpmTjFMXvtg0inz44MFCp%2B%2FcA4LX05yu2rfLgq9F3JQlBqxOsXmsn50fUCLMYgkQaJXZXb%2F0PDvTXg0VHPSyCyUtXrcOswEHjqU2kDpAC9v%2FpPS7jce09ISHp00DZBr3cdheEKJsZ2Ojq6pM4sNd%2FjWWav6gYOv%2BL%2Fw4HDDk5JMPyZ1ckGOqUB1VR%2BH73uRtYY%2BdRzY1%2FzXdzhJBsbWPe0jc4xNQpemh%2FHREluPXXIx1jtcO3%2Fdj8FxTjI0OpdtNiwjimaRZUB8IDjbdGPwdmBoyYJNm64PA31H42aGee%2BmVhUMq9VAK%2BdLhqmnVRqfS1ErGeHEUNXEKGktd993i3Lf6eNcQonR5MiwxJ%2BK4ohHw%2By%2BPLf%2BDj8nyq8IxVk71Lj90p%2FKknx2cGHf4Vs&X-Amz-Signature=398482e8ff13fedf3616b7793a34f995872624e4cafb386a039d61bd39746cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZGHYKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRwwTkhl96qbmRl0LIWzcCc2Qh7XMCFAbaOGCxPwF2bwIgf6N8VEEI8%2BX%2BR35GXmzCHd5bSjNLlyOffthef71SF38qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC8yU25vwC4ELPdqSrcA5JaZ0RCuV2LWbSfSPI179LqQFPngePZ0si%2FcH%2FOy%2Fz13ywR64pS03FOzy9Gf7Or%2Bma0uJDe3m2n9KhPpK4Q5zujmfJbn0s764el08aNFO0TVlxooNo9Nsblm0HkIKSW3mT%2F3LaZYzM5%2F0y7AN5vp2hBZh%2Fj5p2t5ui3gyGoAtYbw9Os2BLN%2FX7z1OBMwwGOKYvXP3wzYobZ2JzugVMIfRFlwQyvgXo8TDEf3OGfazo0VtqdI91rFVwmWeJ9lAmdDC0wBxilSJxRNVu8Cv1nGa6LlAhk%2FwRwaMvoPXd%2FH%2BQgbaEKVrPEgTePMlRUm%2BnLVp53uEsYDZLFq7kx%2FOZBzkf%2Fij%2FaDLzeUJFWsUp6kFOgOupE%2BhxXN2XCc7Gt1j0e2SkR8EE%2FoHRUYnAMHLHciKDQD7P%2BZ7Vc8JuGqO0dC1abIlCBfg9ktmU%2BajSXMqeGccsmkAFg%2FeEoOXPgLlbpmTjFMXvtg0inz44MFCp%2B%2FcA4LX05yu2rfLgq9F3JQlBqxOsXmsn50fUCLMYgkQaJXZXb%2F0PDvTXg0VHPSyCyUtXrcOswEHjqU2kDpAC9v%2FpPS7jce09ISHp00DZBr3cdheEKJsZ2Ojq6pM4sNd%2FjWWav6gYOv%2BL%2Fw4HDDk5JMPyZ1ckGOqUB1VR%2BH73uRtYY%2BdRzY1%2FzXdzhJBsbWPe0jc4xNQpemh%2FHREluPXXIx1jtcO3%2Fdj8FxTjI0OpdtNiwjimaRZUB8IDjbdGPwdmBoyYJNm64PA31H42aGee%2BmVhUMq9VAK%2BdLhqmnVRqfS1ErGeHEUNXEKGktd993i3Lf6eNcQonR5MiwxJ%2BK4ohHw%2By%2BPLf%2BDj8nyq8IxVk71Lj90p%2FKknx2cGHf4Vs&X-Amz-Signature=3f3cd3e7673bafc4554feac96ba2ba49348b7711409e401c38fcce922f481462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
