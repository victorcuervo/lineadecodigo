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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEUKX4K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiqKMnSOSlX0Bp2FYOyAoolu2KBbX1FccrcObS10urgQIhAJQP0NBs3aOO24AXgXYGeXH8RSSmUX9fp59wFidQ2FsTKv8DCH8QABoMNjM3NDIzMTgzODA1IgxNhT2h%2Fs471EbmKYoq3AM4YZfNnxh2gbpObUi0FEb3XwJaGmHPvWjh5EtEfGJ92WrXHkXZWC%2Fc1F%2Bb2JBvOVWoQTdCcDmgcDnEHbc5dh9nhdk0fbXZfiUcVM62UcJ7SQG81vJT6jvUG1407zWum3QUstu3%2BacMWQf7ly36VNYl2Pdl6y8EgIu872zyrUKaryKsRs7bHifI4%2FrhcDmbIxyIGTFbO%2FXdkrUXLaOMCR0dfRcr3LWhGuMHb7YwZzSveQUmPfAu9UCq0fJ6LPENXU8fVGJ1bKnLBhKN%2FFPxfsb4qO5t9poJ%2FbDHzLnlfUe5cnt2bEq%2BwmPX0k8rmG6awRZzt8AN%2BBjg3%2FyKFhtYNpObP2Jgv%2F6RSBXF0SnEZFrMPpSymRXDhhXLL%2FP3lHXeXoB2Zm5mVm%2FJ2%2BU4UzTCIUUY9qx2nO8MSurC4S7FKIYBndKGVnjPb9Dk1241Bj94SiNlduDdtpqwOVDRA3XsrVtumc8Tv8hfrGVL6WixayZBZdNZZiKU0vaVp7WYXCbcOLUFgsKGcidAgXLmT2PRr7pauZaWC%2FnI2yx9YxsOUUeGHwebkE9wyZOZnuYGKdEowBfXsFGIbifHAaEYiok4n62aqCLbCExsTK%2BgT%2BblKBgG3v3HB%2FuA8nuTyx9ZgjDx4IrKBjqkAVO0vU95Q61Bz95%2B2dMVTy5IZvO%2BzZMGa7fV0TKcrVPraDDqHjTKPSIh%2Bd6BC0qePbx%2FZ0l%2B9m5LBxxmuLH0wt0nAFHa%2FIr64biWb14ZAkPIKKNDkXnNbhzOsr0Ll8fqdcwVifjg5%2F7iz6JC7yAeEN4K49OqRrgreNOA%2BRQ%2B6PUtTxFT469XZ2EPGusoFoNZ35ydQNn2ELdrTxGIr7oj%2BY3vmVsV&X-Amz-Signature=ca3f37fef6ecfb489b6a750955ee879a8319fb0f15545c82622c6b5d7661aaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEUKX4K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiqKMnSOSlX0Bp2FYOyAoolu2KBbX1FccrcObS10urgQIhAJQP0NBs3aOO24AXgXYGeXH8RSSmUX9fp59wFidQ2FsTKv8DCH8QABoMNjM3NDIzMTgzODA1IgxNhT2h%2Fs471EbmKYoq3AM4YZfNnxh2gbpObUi0FEb3XwJaGmHPvWjh5EtEfGJ92WrXHkXZWC%2Fc1F%2Bb2JBvOVWoQTdCcDmgcDnEHbc5dh9nhdk0fbXZfiUcVM62UcJ7SQG81vJT6jvUG1407zWum3QUstu3%2BacMWQf7ly36VNYl2Pdl6y8EgIu872zyrUKaryKsRs7bHifI4%2FrhcDmbIxyIGTFbO%2FXdkrUXLaOMCR0dfRcr3LWhGuMHb7YwZzSveQUmPfAu9UCq0fJ6LPENXU8fVGJ1bKnLBhKN%2FFPxfsb4qO5t9poJ%2FbDHzLnlfUe5cnt2bEq%2BwmPX0k8rmG6awRZzt8AN%2BBjg3%2FyKFhtYNpObP2Jgv%2F6RSBXF0SnEZFrMPpSymRXDhhXLL%2FP3lHXeXoB2Zm5mVm%2FJ2%2BU4UzTCIUUY9qx2nO8MSurC4S7FKIYBndKGVnjPb9Dk1241Bj94SiNlduDdtpqwOVDRA3XsrVtumc8Tv8hfrGVL6WixayZBZdNZZiKU0vaVp7WYXCbcOLUFgsKGcidAgXLmT2PRr7pauZaWC%2FnI2yx9YxsOUUeGHwebkE9wyZOZnuYGKdEowBfXsFGIbifHAaEYiok4n62aqCLbCExsTK%2BgT%2BblKBgG3v3HB%2FuA8nuTyx9ZgjDx4IrKBjqkAVO0vU95Q61Bz95%2B2dMVTy5IZvO%2BzZMGa7fV0TKcrVPraDDqHjTKPSIh%2Bd6BC0qePbx%2FZ0l%2B9m5LBxxmuLH0wt0nAFHa%2FIr64biWb14ZAkPIKKNDkXnNbhzOsr0Ll8fqdcwVifjg5%2F7iz6JC7yAeEN4K49OqRrgreNOA%2BRQ%2B6PUtTxFT469XZ2EPGusoFoNZ35ydQNn2ELdrTxGIr7oj%2BY3vmVsV&X-Amz-Signature=75a98e47cbc1d72d4c80f610141e62342572595ec360e3aabad18ecb93511b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
