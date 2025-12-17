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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVEC5JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKQ5qEIvNhLqbgGaYPEOlgncQC6QBi4ZKM94Me30QzQIgVIyVRO6Vw%2BMEoRIi2UD%2BnWmZMG5kmKppeyv2oXe8akwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEK8Qd9zW4coY4iOdSrcAyLyfWt2shq9SrM4zIcAY7x7IvokoZ%2BXMgVLmRCfX3nx3AasP3YtGA2bU1lcjHpCZ3k3BcfVTMkkGzM5WoU8XpKPfip9y5YaVkKR2t%2Bcvj4zEE6vW75Csxu4IrjbnpT1tMywH1DMzMjVm7N15zxWbkWhUs0wvEnESz%2FyB1c9I%2Bq9AWM%2Bg%2FGwH3uDKrtGdiyi6ADsOxO2S3%2BiWsbXRv41qU%2F1s8uHpVEYcjW02wvXrj71CzYnydHdDieUbuuJSSw%2FqKSdV8KqWAipFQwHWpfGXGQFi%2Fj4ZzhckGLu52cPmoqQnnkyILyag4UnJ%2FBtQN0EQ1LEhXKAGg8IAK7an%2F%2BMOD7320x5Lg7faNnDUt%2F4jbu%2BFioCpqL7yCD2jODioDGldhiZ8R3xNVgEqtdRH6I%2B7vBka0DKt2KF8Z3hhWxobrWf9wf6GVYvLAEcxak1ICTM68Ldb9gHjOGCRBwbfC2CarGGL8NoXU5dOuDWkijEUaC8iC6o%2BOyM6ZzyUVzovFsP3ByBwijCMzvysJ3V00VwPPGkl83dgnpuNSkZB3RLCueGwrrHdZkLNuhQ9lS86ONpooKu7kGIo7I6Qec%2Br%2BUjSyulJfty0avS6E8KrC8JKz4QsCP%2F%2Fo%2BUv1MpNlYaMMq3icoGOqUBlEGdLC%2B26sKGCNDTTPFFx0Y4lH09yxZTB%2B7mm3gvZFMSLgTUlwFvmW8ytsuHYOSr%2BdF8fSwBjIHfBe7NBYJ5is5DZNFLwdiX3MHKKV4fgB67DHxx5tcNFEEKwpNGriEP4hktE1HIl8XTywgLtNbjiqlfeuILwbAUO%2BkdyB4ICCYjVU%2BbceHir7vg%2BydR%2Fic0vGk%2FF7AYTkHghTpLSpwqd1cmhXKE&X-Amz-Signature=75bc8dec2a49ad9c79451015720deb4204017dbd5a0d6b4b71e1f8eb1b66d41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVEC5JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKQ5qEIvNhLqbgGaYPEOlgncQC6QBi4ZKM94Me30QzQIgVIyVRO6Vw%2BMEoRIi2UD%2BnWmZMG5kmKppeyv2oXe8akwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEK8Qd9zW4coY4iOdSrcAyLyfWt2shq9SrM4zIcAY7x7IvokoZ%2BXMgVLmRCfX3nx3AasP3YtGA2bU1lcjHpCZ3k3BcfVTMkkGzM5WoU8XpKPfip9y5YaVkKR2t%2Bcvj4zEE6vW75Csxu4IrjbnpT1tMywH1DMzMjVm7N15zxWbkWhUs0wvEnESz%2FyB1c9I%2Bq9AWM%2Bg%2FGwH3uDKrtGdiyi6ADsOxO2S3%2BiWsbXRv41qU%2F1s8uHpVEYcjW02wvXrj71CzYnydHdDieUbuuJSSw%2FqKSdV8KqWAipFQwHWpfGXGQFi%2Fj4ZzhckGLu52cPmoqQnnkyILyag4UnJ%2FBtQN0EQ1LEhXKAGg8IAK7an%2F%2BMOD7320x5Lg7faNnDUt%2F4jbu%2BFioCpqL7yCD2jODioDGldhiZ8R3xNVgEqtdRH6I%2B7vBka0DKt2KF8Z3hhWxobrWf9wf6GVYvLAEcxak1ICTM68Ldb9gHjOGCRBwbfC2CarGGL8NoXU5dOuDWkijEUaC8iC6o%2BOyM6ZzyUVzovFsP3ByBwijCMzvysJ3V00VwPPGkl83dgnpuNSkZB3RLCueGwrrHdZkLNuhQ9lS86ONpooKu7kGIo7I6Qec%2Br%2BUjSyulJfty0avS6E8KrC8JKz4QsCP%2F%2Fo%2BUv1MpNlYaMMq3icoGOqUBlEGdLC%2B26sKGCNDTTPFFx0Y4lH09yxZTB%2B7mm3gvZFMSLgTUlwFvmW8ytsuHYOSr%2BdF8fSwBjIHfBe7NBYJ5is5DZNFLwdiX3MHKKV4fgB67DHxx5tcNFEEKwpNGriEP4hktE1HIl8XTywgLtNbjiqlfeuILwbAUO%2BkdyB4ICCYjVU%2BbceHir7vg%2BydR%2Fic0vGk%2FF7AYTkHghTpLSpwqd1cmhXKE&X-Amz-Signature=8d028a7c902237e51ddd2e972cd00e1dc9141d6a11f869ae211f08bf52ab3ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
