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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOR4VCV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVk3mx5A2HML56Wt7aPw6M0mHg1DMWmNknImB3IOBmmAiEAxQtGtT7UcW%2BSI6yt%2FCaoG31Pt0m100NfzNGh8MpDnHkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL2qVWaYqHRWg9PMMCrcA9jpYuoFbbGQRksENL3%2FZL5bRt18e1HqfsPDl6VeXP7AaCIPBRe7uzjQR791gnRoQUOkzEG6%2F5xe%2BFysEhgQX6P7vinEAYRbs0mnzRy7WIb6WR71wSluk8XEWhdOKffMl8DIqCnyq6%2B8udtl%2FQ9HOPrIx3uZISJBKSUYAMIZaTtg3Zsf3T5zYUDOUsTzSaLZrw1mjSNm4Ubii%2BycYokZ%2B2w1pLDVSnDCf0eXNoMXoUDCTh%2F2gy8Jy8XN%2Fgaj5ZlWhKkB00j5zeg4AJmJ7XFETqBo7rIEA%2FYi1brA6E2TF4X36krkQBPCcHBT3UNJZGhmMm7CVMtbx3Suiv%2BpsoL9XFvzJFEgOMniTh%2FFyWd%2F1EKYZ9N8mZtPONdmMlLI%2FM7hyVkSOYiv8HPg8pAZZkWWWVJaBPXR3n0%2BPwbP%2FV6NQ0nAzEKyHz72EPFMO0yIeIDU5df6jAlr9NuOyIRGj9HoZF32Bd2DMQlMihipqjZ4dgF8BroFvihQ6iJxAP10weARDLB1XKt%2BFDVsCDBftQxiP8UhJjE%2FOWuwmfKX8bhlWACwFwVLDI3n%2BH1ECw0h7I5lszj2SEl%2Bob4br3DDRMclHpeagKchXHMfmKa5ehNuohDf78hXvM1NNjVL6sb7MPSOisoGOqUBupgKBCAg3kPzpcYxIazbh0ihIbQOgE8f3P9npFBofJn5u0MI06257FTFSdOHXArH7%2F5e2Hd37NV9nZM5m%2Bj0xFJMPMjxCNwEWWZW7mMjatGcvZ%2Fl%2B05XDfjGuQvVvFkgEeoBWnsfA6AqSRGjAaIvGHf9xtRu3swXvskyUFKCT3%2Bt%2FU5yQqPXELMYjekLad%2B6C%2BSsxKuutSkVH7kWgp8Rf2VzgzVo&X-Amz-Signature=99910e12f8c5e2c8cafa91d06f83925ed34f07c480da640d4c679d0733aceb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOR4VCV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVk3mx5A2HML56Wt7aPw6M0mHg1DMWmNknImB3IOBmmAiEAxQtGtT7UcW%2BSI6yt%2FCaoG31Pt0m100NfzNGh8MpDnHkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL2qVWaYqHRWg9PMMCrcA9jpYuoFbbGQRksENL3%2FZL5bRt18e1HqfsPDl6VeXP7AaCIPBRe7uzjQR791gnRoQUOkzEG6%2F5xe%2BFysEhgQX6P7vinEAYRbs0mnzRy7WIb6WR71wSluk8XEWhdOKffMl8DIqCnyq6%2B8udtl%2FQ9HOPrIx3uZISJBKSUYAMIZaTtg3Zsf3T5zYUDOUsTzSaLZrw1mjSNm4Ubii%2BycYokZ%2B2w1pLDVSnDCf0eXNoMXoUDCTh%2F2gy8Jy8XN%2Fgaj5ZlWhKkB00j5zeg4AJmJ7XFETqBo7rIEA%2FYi1brA6E2TF4X36krkQBPCcHBT3UNJZGhmMm7CVMtbx3Suiv%2BpsoL9XFvzJFEgOMniTh%2FFyWd%2F1EKYZ9N8mZtPONdmMlLI%2FM7hyVkSOYiv8HPg8pAZZkWWWVJaBPXR3n0%2BPwbP%2FV6NQ0nAzEKyHz72EPFMO0yIeIDU5df6jAlr9NuOyIRGj9HoZF32Bd2DMQlMihipqjZ4dgF8BroFvihQ6iJxAP10weARDLB1XKt%2BFDVsCDBftQxiP8UhJjE%2FOWuwmfKX8bhlWACwFwVLDI3n%2BH1ECw0h7I5lszj2SEl%2Bob4br3DDRMclHpeagKchXHMfmKa5ehNuohDf78hXvM1NNjVL6sb7MPSOisoGOqUBupgKBCAg3kPzpcYxIazbh0ihIbQOgE8f3P9npFBofJn5u0MI06257FTFSdOHXArH7%2F5e2Hd37NV9nZM5m%2Bj0xFJMPMjxCNwEWWZW7mMjatGcvZ%2Fl%2B05XDfjGuQvVvFkgEeoBWnsfA6AqSRGjAaIvGHf9xtRu3swXvskyUFKCT3%2Bt%2FU5yQqPXELMYjekLad%2B6C%2BSsxKuutSkVH7kWgp8Rf2VzgzVo&X-Amz-Signature=3f939c671d0d81a66b9784359d946b3bd7eeca3ef0f1b6c36bb6372a411da46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
