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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDU5HIUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdRJA7sdDjVSmNL%2FuufCSqHhzYdNU%2FFRv8nVJrAUr5bAiEAp6AM9knsfYxW4TUMqot9rcGkGBhE2FIEgU1pCDqeYVgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGmi5SMtdhpC2KIY%2FSrcA71%2Boldk%2FCpvklfvfLmyx47hRHYPGz7qfza27cLfFGVknzV9fhfFnXUThilP6OZ1Bw0xDUexZrmSa7ZyyulxYpqtkVevkyitISFCbJgn4cWbp59KOb3I2DUcDOKx6Hd%2Fb1rYeUT5TyThZ32gyE7iPX3omxY%2BNrpo4wXvxLKILmuSt1lDlVu062a0a2od3lg2ilfQe7PBAR5mEW75Cs%2FYMvBLIYpfvlCsnha09scLAKHuz%2BL4WVgmHpyl7sAoioqcJP2Evs%2BgZHARLn9uknbB6cEDJqWu4mU6Hubk745lyVgdUszMBu9cg3xCwAvQfdiTEuU65tK8%2FX6WpBNNC%2BtvPz6Sokrwxewc1cQprJddR3bo%2FzlASDTNaal3PnbkazQFGquj6IkynzjgiqEgDMd3dGm%2FqXWSCPdYD0O0FQD86ojhffeetzz7KDx6lpfHU6LckJUMfb5fhgBiiDaVRX4FTmArkLTDNNMn%2FIJYU7cdtdxjslE%2F%2FENnmM4cje63YjQqPXGJo%2BmJV3imj2xewbopFkFQAZfEupVndck2DC9A%2BaC7gnaLytqWkkIEL9yc3t%2FIbRkew5Y4gRqFElxolmdRaSDNhksAs2wBRIxdgd1p7u%2Fm6JOSntdA1gZYpx4HMPHhisoGOqUBUrT2h9vXIxn%2BLHjuiW9fq23X97Aex8Lg1GRf86M0ehaA4erEjMUcfyIf0tmW3BYT1jwTXOU9uShSkw30DfUOEVwgHruQRZnK5Iy9nzLo7e4U5o5q0X2fsRVWxZNgovdEokYP85spUNPnfuEvKnLdOTOEXW7A40lWVG17zO8K5IQRcX%2FGmUCs5MyRD3Y%2Bv11LqSYD0Di3r8RntiZ5v40J7cPyOfz3&X-Amz-Signature=490516dc0f7b3dd8ef9dd7a7c5f0d432ad884652d94524199c0a4ac879c42dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDU5HIUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdRJA7sdDjVSmNL%2FuufCSqHhzYdNU%2FFRv8nVJrAUr5bAiEAp6AM9knsfYxW4TUMqot9rcGkGBhE2FIEgU1pCDqeYVgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGmi5SMtdhpC2KIY%2FSrcA71%2Boldk%2FCpvklfvfLmyx47hRHYPGz7qfza27cLfFGVknzV9fhfFnXUThilP6OZ1Bw0xDUexZrmSa7ZyyulxYpqtkVevkyitISFCbJgn4cWbp59KOb3I2DUcDOKx6Hd%2Fb1rYeUT5TyThZ32gyE7iPX3omxY%2BNrpo4wXvxLKILmuSt1lDlVu062a0a2od3lg2ilfQe7PBAR5mEW75Cs%2FYMvBLIYpfvlCsnha09scLAKHuz%2BL4WVgmHpyl7sAoioqcJP2Evs%2BgZHARLn9uknbB6cEDJqWu4mU6Hubk745lyVgdUszMBu9cg3xCwAvQfdiTEuU65tK8%2FX6WpBNNC%2BtvPz6Sokrwxewc1cQprJddR3bo%2FzlASDTNaal3PnbkazQFGquj6IkynzjgiqEgDMd3dGm%2FqXWSCPdYD0O0FQD86ojhffeetzz7KDx6lpfHU6LckJUMfb5fhgBiiDaVRX4FTmArkLTDNNMn%2FIJYU7cdtdxjslE%2F%2FENnmM4cje63YjQqPXGJo%2BmJV3imj2xewbopFkFQAZfEupVndck2DC9A%2BaC7gnaLytqWkkIEL9yc3t%2FIbRkew5Y4gRqFElxolmdRaSDNhksAs2wBRIxdgd1p7u%2Fm6JOSntdA1gZYpx4HMPHhisoGOqUBUrT2h9vXIxn%2BLHjuiW9fq23X97Aex8Lg1GRf86M0ehaA4erEjMUcfyIf0tmW3BYT1jwTXOU9uShSkw30DfUOEVwgHruQRZnK5Iy9nzLo7e4U5o5q0X2fsRVWxZNgovdEokYP85spUNPnfuEvKnLdOTOEXW7A40lWVG17zO8K5IQRcX%2FGmUCs5MyRD3Y%2Bv11LqSYD0Di3r8RntiZ5v40J7cPyOfz3&X-Amz-Signature=322b54e79513bbe7692f495f6d04fc7d9c67536a5db64b1d9a63d29099cb2ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
