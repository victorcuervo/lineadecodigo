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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKKYQLK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3P8tc%2BonP5zB%2B%2F33oFkUkpwwaCb%2BEPg%2BR1zBcdoJ9TgIhAPQ6p51tdEXSK%2F30TaMm86jnFjx%2Fr%2FmWKuYWUc8GY0lAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAh0ty5bkBjVScbWwq3ANkFxCDO7F4sKVvk5aRbuPi7aXPxRT5bDmwWXMgEieJ2HR%2B%2Br%2BkE9gP9BwhXNEp6i0vl6StQebNYQHZ6hl0gTLlbAEGRQ0lRxVzrWcbK5nGVX2XX5CHSu6%2Bus6WtpKR3G%2FqGgn5%2BitIIktdtMRGLukOXSy9Wm6F7tD42cHHNY0p%2Bih0GssOeBfs5tI1JcEd3oCDzttznJrWKt8s2am8ZBmPTW47dt9sPJTonxP8MQy%2BgEBhg80x5N2Hd5oW1i9y0%2F2o8ABaHLjvH34qcvng4z1%2FuHTfPLyE10DCFmvFeUpZw83bjwx5ObDUaDClPfomkNPtnYzvaaqCFudDIwbp0QzQREINVSJ3uIjtSmcDaivZAAk3u8mnYQXnpnoOJSL4PbZGLeiVM5p4mX0RbqQ0188UioKfzbcICdQRHshcSw8HJjPQc4eObrYn%2Bb%2FfJKtunghjWbGMcpPvYnH7ODCBK9e6kHNaiGY2zOthu4JZVa91p6sOeXParMP3N0ep69%2Bpg4nXziOtIVbNM2bd1KCvzcdNls2%2FwxXuMlrASzcVFqx9xXAm%2BGHrwXSh7v9h9kk7Pg5kxM%2BzCU6R9mrQmKYdh8py6BPDRmwMHTgOhlHQAvnlBNAWYcrrppkoh4YLzDCo7tjJBjqkAVFBUxETkUX0uDntdOR%2BnCJejLhJkCjt2ukGop3Ad%2FyQ2kNFN7Ynv8%2Fy8yPGubos5YYgbRohe3dCr4N104YmNo1VBkKrJgLlmoucpKJ3q%2FRL3sbSj67E%2FpaXs26nhqherWpx%2FW1ZTk%2FVO75F0h9UE0QDIB9LBgMagevLYHHaeVcbBReDffu0Qtmr5p%2FK3LsHG8P3guXJAwxjGX9qmnGhdsXz0hAk&X-Amz-Signature=cf2eb2f58b7cf40f1df7364a210197a62c9da602190cfba33b914ccb23fcd43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKKYQLK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3P8tc%2BonP5zB%2B%2F33oFkUkpwwaCb%2BEPg%2BR1zBcdoJ9TgIhAPQ6p51tdEXSK%2F30TaMm86jnFjx%2Fr%2FmWKuYWUc8GY0lAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAh0ty5bkBjVScbWwq3ANkFxCDO7F4sKVvk5aRbuPi7aXPxRT5bDmwWXMgEieJ2HR%2B%2Br%2BkE9gP9BwhXNEp6i0vl6StQebNYQHZ6hl0gTLlbAEGRQ0lRxVzrWcbK5nGVX2XX5CHSu6%2Bus6WtpKR3G%2FqGgn5%2BitIIktdtMRGLukOXSy9Wm6F7tD42cHHNY0p%2Bih0GssOeBfs5tI1JcEd3oCDzttznJrWKt8s2am8ZBmPTW47dt9sPJTonxP8MQy%2BgEBhg80x5N2Hd5oW1i9y0%2F2o8ABaHLjvH34qcvng4z1%2FuHTfPLyE10DCFmvFeUpZw83bjwx5ObDUaDClPfomkNPtnYzvaaqCFudDIwbp0QzQREINVSJ3uIjtSmcDaivZAAk3u8mnYQXnpnoOJSL4PbZGLeiVM5p4mX0RbqQ0188UioKfzbcICdQRHshcSw8HJjPQc4eObrYn%2Bb%2FfJKtunghjWbGMcpPvYnH7ODCBK9e6kHNaiGY2zOthu4JZVa91p6sOeXParMP3N0ep69%2Bpg4nXziOtIVbNM2bd1KCvzcdNls2%2FwxXuMlrASzcVFqx9xXAm%2BGHrwXSh7v9h9kk7Pg5kxM%2BzCU6R9mrQmKYdh8py6BPDRmwMHTgOhlHQAvnlBNAWYcrrppkoh4YLzDCo7tjJBjqkAVFBUxETkUX0uDntdOR%2BnCJejLhJkCjt2ukGop3Ad%2FyQ2kNFN7Ynv8%2Fy8yPGubos5YYgbRohe3dCr4N104YmNo1VBkKrJgLlmoucpKJ3q%2FRL3sbSj67E%2FpaXs26nhqherWpx%2FW1ZTk%2FVO75F0h9UE0QDIB9LBgMagevLYHHaeVcbBReDffu0Qtmr5p%2FK3LsHG8P3guXJAwxjGX9qmnGhdsXz0hAk&X-Amz-Signature=84d1171c33661e47857f6113130f4caa6ba8e3c0abb8edfc46debd4af316ff3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
