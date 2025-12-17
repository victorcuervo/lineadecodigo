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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MHWF7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8mBsYlb1h3U9TGtmZr1EKEqfj%2Fs0vFHHPRrqr68sd9AiAiLu029Kvm3hFpF0FTYP%2Fc0jh0d9wakZ%2BF8%2FGDzgSs6Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMqZLauYo7aJaWa15rKtwDB5YMpFX9ZMw9a4H0xlZUMfCoIEPDEynNzoG0l0ZjOrX0mT3c%2BUExCQYmYZhN%2BY36eI%2FgYM6Hd2dP11ZBb6SQgk2sDwGBgG0r%2BYWn4dTE11n5xp2oKTUC2Iq%2BHFiLtR4DwHowbNQkxvGydnlWwnqGnny32%2FEMH1mJv5w1C5sE%2FklvIOEUF0AofF0ls2rolKWqX0fcqQbdqEI062JJjI0fsuNvGUw9VHBL9tHf7KuqSSw0ghmGXAeuvdfhuu3NAFNSZ74VhFwFakXR7qATHi0Y2dN2qeXaFH5Y1wlY5tf2nB%2Br4oDGY3JXy%2FlxLihpOUETUVq4WGgx456%2FT1Nygz%2FjgqRczvmZLaUtBVc8R2BUBYGGfEEPhqVoD4CH7eS27Mz1OWjGG4HMhOx4J2k9T0blE5Cazot15PIA5KiVtgDaquRkx31CBEv32m4L%2FTpgELZoCIBOd%2FTIh5b56AMkcgqJNnQ%2BC01FD1i74i%2BGrpI6Rp30oVB7QJkvK%2B6lfeKZn7wXpE6MrY3IFYGFQUa35VrtEDeF1oVk9ewgI3SmdFbG8G%2BJ%2FK1%2FrDziuWe97G1uPaAGdhdqTrLN1sXWW%2FDnzU744NTO1%2FCtHYgXxxXYhCJLR7IC41qX46Kq2cys9uAw%2BJaIygY6pgElnYk6rivl9Apytq%2Bmpj6PDUJeVudTAFkwaX9P3Zg72L1p6%2B56AXkKNq1R42ICP1VPYAjmvI9VI3ogUlHP1SWhAi14DNP8hBB%2BikWpb4Jpxygyub%2BHmC4%2B0ZqdrYYW7mFCNBQLOMhsZECW7wKicwghLnyKmrzz8ViyCqWjIrnn9i9XoqrFxxcxkp0aJ4RhVUgJ98YPd1WCBiBjnUkHDV%2BSjyQ03icv&X-Amz-Signature=3083c102043c3f27fbc57ecaaa785f694d7daa644afe6d3b9cea608a8f98a309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MHWF7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8mBsYlb1h3U9TGtmZr1EKEqfj%2Fs0vFHHPRrqr68sd9AiAiLu029Kvm3hFpF0FTYP%2Fc0jh0d9wakZ%2BF8%2FGDzgSs6Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMqZLauYo7aJaWa15rKtwDB5YMpFX9ZMw9a4H0xlZUMfCoIEPDEynNzoG0l0ZjOrX0mT3c%2BUExCQYmYZhN%2BY36eI%2FgYM6Hd2dP11ZBb6SQgk2sDwGBgG0r%2BYWn4dTE11n5xp2oKTUC2Iq%2BHFiLtR4DwHowbNQkxvGydnlWwnqGnny32%2FEMH1mJv5w1C5sE%2FklvIOEUF0AofF0ls2rolKWqX0fcqQbdqEI062JJjI0fsuNvGUw9VHBL9tHf7KuqSSw0ghmGXAeuvdfhuu3NAFNSZ74VhFwFakXR7qATHi0Y2dN2qeXaFH5Y1wlY5tf2nB%2Br4oDGY3JXy%2FlxLihpOUETUVq4WGgx456%2FT1Nygz%2FjgqRczvmZLaUtBVc8R2BUBYGGfEEPhqVoD4CH7eS27Mz1OWjGG4HMhOx4J2k9T0blE5Cazot15PIA5KiVtgDaquRkx31CBEv32m4L%2FTpgELZoCIBOd%2FTIh5b56AMkcgqJNnQ%2BC01FD1i74i%2BGrpI6Rp30oVB7QJkvK%2B6lfeKZn7wXpE6MrY3IFYGFQUa35VrtEDeF1oVk9ewgI3SmdFbG8G%2BJ%2FK1%2FrDziuWe97G1uPaAGdhdqTrLN1sXWW%2FDnzU744NTO1%2FCtHYgXxxXYhCJLR7IC41qX46Kq2cys9uAw%2BJaIygY6pgElnYk6rivl9Apytq%2Bmpj6PDUJeVudTAFkwaX9P3Zg72L1p6%2B56AXkKNq1R42ICP1VPYAjmvI9VI3ogUlHP1SWhAi14DNP8hBB%2BikWpb4Jpxygyub%2BHmC4%2B0ZqdrYYW7mFCNBQLOMhsZECW7wKicwghLnyKmrzz8ViyCqWjIrnn9i9XoqrFxxcxkp0aJ4RhVUgJ98YPd1WCBiBjnUkHDV%2BSjyQ03icv&X-Amz-Signature=0e6c76490e507e5ed8725910db37c9b83ce1489fc7b7e8060eb59a562015fa30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
