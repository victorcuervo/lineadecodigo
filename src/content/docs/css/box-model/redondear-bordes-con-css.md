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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKHJI44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJ4ACvBgjxvBuri4h3XIwqCzFuNQqL9GXrl0ZLtYeQgIgcr%2BlVw3g3VAnoC4WKH2BlpCjw162JYFzoguPcDf8bl4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKN8zJhoe2mndpwypCrcA%2FozGAxc8iGVAp%2BFP%2FILbmSno8CkcGGKs6hBFD0DPMwFRjXDiOWuz1Vz8tysRAuLt%2BCsuUQ0LmFDkJvS3RE2LokPVJCy3jF2ksIN4dwm%2F6i%2BAKvxpuLs8dO%2BGEYFqqHfj%2F6pBcmmVl0JE1Kil3TNgbFoL5BCeNxxiNfeLeRmVB7nC4x3UiyV%2BHuB2wIVcv1J%2Bxprv2Tbdkip6DopqnfBdtT2Cc8w%2F8gShdYEBTjPUVkjHXgi8hsk8h41j82i2V6aI6tm0Dwadg55wYAKKkQy1Z7vQ3IjcO7DtzfFa%2FCM5qZto0NnONtu7ji2DAwPzkmK2oUUX%2FPvj%2FfugHW3IBFWLd7QjyBRf4SAzR7Pci97OFw8lR6c8tMB3MJ%2F54BHx4qN7c2WXEP8ma4OBLWyadX1%2BM1giF6meLq2RdrTzKS5WkJQd6IQVQXKBnvKcvYhpfIfBS%2F%2BbCfoEP14wpTZmgXIMHZTperVWUjECgOT%2BF0bnrvn3%2BHeXml61vUBVe5r7FVjxHGsPvwxsiEDB2t3sbLLwGByYNNdt2gAbz9ZfnTWeIGLolOpAXi8x86x3tWG7AzG%2FZi5qbYKG%2Bq2IaPL9hThCUfbO1FAkAWsCGvyCI13QF%2Ba9JEJTTSPaIufj%2FzBMNbwicoGOqUBtCIweX3ZWVoBzVni7uCG8sSwn2uY1nb%2BNRU7Hm51HJU5o%2BotY9W5w5VUi1VUQG5VN%2BKnjTqBsvugb57zi%2FvbZ1aUhgdFPLZ4FIrJryfPhLNpt4mxnGbU1UeX9Vf1SB7Irnr4LDJTPMTf8lOMJbeVXokQlvR1Ojm1ULMZ%2FGmClFqsBtP1P6%2FphgY%2FkWtEaVSulJCWi5DuhCElujAZ2JAXm6GZDX3O&X-Amz-Signature=f8cf70fe65e2fbe521e3a9743cb791253c1cdda6edc3c9f6c1a23fddf9f05963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKHJI44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJ4ACvBgjxvBuri4h3XIwqCzFuNQqL9GXrl0ZLtYeQgIgcr%2BlVw3g3VAnoC4WKH2BlpCjw162JYFzoguPcDf8bl4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKN8zJhoe2mndpwypCrcA%2FozGAxc8iGVAp%2BFP%2FILbmSno8CkcGGKs6hBFD0DPMwFRjXDiOWuz1Vz8tysRAuLt%2BCsuUQ0LmFDkJvS3RE2LokPVJCy3jF2ksIN4dwm%2F6i%2BAKvxpuLs8dO%2BGEYFqqHfj%2F6pBcmmVl0JE1Kil3TNgbFoL5BCeNxxiNfeLeRmVB7nC4x3UiyV%2BHuB2wIVcv1J%2Bxprv2Tbdkip6DopqnfBdtT2Cc8w%2F8gShdYEBTjPUVkjHXgi8hsk8h41j82i2V6aI6tm0Dwadg55wYAKKkQy1Z7vQ3IjcO7DtzfFa%2FCM5qZto0NnONtu7ji2DAwPzkmK2oUUX%2FPvj%2FfugHW3IBFWLd7QjyBRf4SAzR7Pci97OFw8lR6c8tMB3MJ%2F54BHx4qN7c2WXEP8ma4OBLWyadX1%2BM1giF6meLq2RdrTzKS5WkJQd6IQVQXKBnvKcvYhpfIfBS%2F%2BbCfoEP14wpTZmgXIMHZTperVWUjECgOT%2BF0bnrvn3%2BHeXml61vUBVe5r7FVjxHGsPvwxsiEDB2t3sbLLwGByYNNdt2gAbz9ZfnTWeIGLolOpAXi8x86x3tWG7AzG%2FZi5qbYKG%2Bq2IaPL9hThCUfbO1FAkAWsCGvyCI13QF%2Ba9JEJTTSPaIufj%2FzBMNbwicoGOqUBtCIweX3ZWVoBzVni7uCG8sSwn2uY1nb%2BNRU7Hm51HJU5o%2BotY9W5w5VUi1VUQG5VN%2BKnjTqBsvugb57zi%2FvbZ1aUhgdFPLZ4FIrJryfPhLNpt4mxnGbU1UeX9Vf1SB7Irnr4LDJTPMTf8lOMJbeVXokQlvR1Ojm1ULMZ%2FGmClFqsBtP1P6%2FphgY%2FkWtEaVSulJCWi5DuhCElujAZ2JAXm6GZDX3O&X-Amz-Signature=c1a48752c5fbb0f306daa6da28b8f966085907126d0147d595ef934cee326c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
