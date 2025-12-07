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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UVETY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUe7sX2wgd%2Be8Fda39xeKIY7Q7snqpxB1KmVFet%2BZabAiEApgC3NpGZvBKV9RjY6qU8cYbjs57%2FWtbzeJKITZADZqcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhCAOJe4UH51eCmSrcA2A3hlwHPo9x9wTS7PLkRV8etchvmVnmKpJxUEUbxIwBiKnPt2MCzt%2BHE7yMo%2BXGDbzXYRBH8QcnRnV4ZuW7M6Zt9PLchtideJNyKA5OxOI1LQLj%2FayNKh0mbWP7Z1XYkvNVvbeCzn1lnF9piPDMe22moCtanhSdZSPds8l0YjySPtGa%2BJy1ob4x%2BRywfmK7naiwo9vCtgyQZcBLJc4BD8mHr6JneZjtr2%2B6P%2Bwt0juZQZga3EOkCuHfmmoxmpIy0q%2BUTolfh5dZI%2F7fUMAkrSTt9%2BPkMIzPhwO6c7Y%2FqEo493AHKwx5eJfd%2Fj4kypd5VwprU6E3LGNQmqIj61hRAe7KwTKfcRrG%2FmLL024xNbtSHAg1C8s61C7wxfHqkP%2FihAAX%2B6ZCQonoSVVOgc9pMd80LSQbHTGfrsOsOuozNRcw6ClJV%2FLvw7d2dHXNHcTosz9KpqYY0H4Qs1IWUp01teF13ukrA7nEE6snPFfrG2QNgCazMBJ%2BF1tuInrNGUokJ96B5MKOm1qQqEcHgwhnOkZdcW9LVdiwT21%2BJ3kBMtDv3X01%2FvQUaaEP3xTMP%2BvEnc6QvEpf762snEdCNAz2HaF8Wb0e0rEd4vC9QXoApSj%2BQki42WtTEY8Y9JIPMKOZ1ckGOqUBcbXcTZJCPotIZaXCH0I6wF8i%2F8OhcBCqdSLqIww9PWoxRtRY%2BTYk4qI2SHR3IoC2Ui9bF5mQ2Wwoi5oI%2Fs0t%2F7bc%2B4IiVtQGM4CRC8zoyYAL%2F14T3rySAdHuZRvRJ8urSBmwTmX%2BinsYmQ98TEraiQA%2FRRj8%2FlHrdCV6Xoq2wI1RkUybvUwqefGrRD3C%2BxmZe%2FwE7eL6iQd9827hlZ1sPghg2pyZ&X-Amz-Signature=fb372b86d7b9837dd3368a202f01f005e4e2ecfee2385c504166a3e3256e2f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UVETY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUe7sX2wgd%2Be8Fda39xeKIY7Q7snqpxB1KmVFet%2BZabAiEApgC3NpGZvBKV9RjY6qU8cYbjs57%2FWtbzeJKITZADZqcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhCAOJe4UH51eCmSrcA2A3hlwHPo9x9wTS7PLkRV8etchvmVnmKpJxUEUbxIwBiKnPt2MCzt%2BHE7yMo%2BXGDbzXYRBH8QcnRnV4ZuW7M6Zt9PLchtideJNyKA5OxOI1LQLj%2FayNKh0mbWP7Z1XYkvNVvbeCzn1lnF9piPDMe22moCtanhSdZSPds8l0YjySPtGa%2BJy1ob4x%2BRywfmK7naiwo9vCtgyQZcBLJc4BD8mHr6JneZjtr2%2B6P%2Bwt0juZQZga3EOkCuHfmmoxmpIy0q%2BUTolfh5dZI%2F7fUMAkrSTt9%2BPkMIzPhwO6c7Y%2FqEo493AHKwx5eJfd%2Fj4kypd5VwprU6E3LGNQmqIj61hRAe7KwTKfcRrG%2FmLL024xNbtSHAg1C8s61C7wxfHqkP%2FihAAX%2B6ZCQonoSVVOgc9pMd80LSQbHTGfrsOsOuozNRcw6ClJV%2FLvw7d2dHXNHcTosz9KpqYY0H4Qs1IWUp01teF13ukrA7nEE6snPFfrG2QNgCazMBJ%2BF1tuInrNGUokJ96B5MKOm1qQqEcHgwhnOkZdcW9LVdiwT21%2BJ3kBMtDv3X01%2FvQUaaEP3xTMP%2BvEnc6QvEpf762snEdCNAz2HaF8Wb0e0rEd4vC9QXoApSj%2BQki42WtTEY8Y9JIPMKOZ1ckGOqUBcbXcTZJCPotIZaXCH0I6wF8i%2F8OhcBCqdSLqIww9PWoxRtRY%2BTYk4qI2SHR3IoC2Ui9bF5mQ2Wwoi5oI%2Fs0t%2F7bc%2B4IiVtQGM4CRC8zoyYAL%2F14T3rySAdHuZRvRJ8urSBmwTmX%2BinsYmQ98TEraiQA%2FRRj8%2FlHrdCV6Xoq2wI1RkUybvUwqefGrRD3C%2BxmZe%2FwE7eL6iQd9827hlZ1sPghg2pyZ&X-Amz-Signature=a33ccd87b87306fc341aafa978f35f23df4d7d4f1b0299b2e207e86e7c9f93c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
