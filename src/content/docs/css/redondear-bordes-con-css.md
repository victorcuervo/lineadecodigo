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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ65SZWO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVBOxPn050GI69J8LjIVzH243xZiyIZuSj59EHj5mBWAiEAqmdtee9AmZU0ZSXp5ZmsynBnrAC7yE46ti%2FAhM920x8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHy%2FmCLrXhnc%2FeaEWircAxxWjlvfcneIPFN76lGpBt2cVYBH0UIniqnSG%2Fd2nXCNQIiYzetH3XKzHbD%2FRQwgVij%2FgP27TULx1Y4EU74HLFTlVIST%2F23x2nybQspLlsHz%2FovKd7qaj1hJA7ZAaVbrsIueFm%2Fj%2BG1NR1%2FfIZTB1pfo04Gqxte5c7NyTfjliQN3lQtJJQA%2FDMKKZkhqdBbMGrmyzLQSOjMSY7AdHSWjowsaVP7Tq%2FAEZcPa0tLj81OXBJ%2F%2BLW8%2BVvaUqT%2BE437ymA0Pc8pMVb6hvb5iV0HPkzWLf9fEzWDw7MYOB%2FGT8XjMkuB3zYST07No0B4Tq5emasBcWRqHU761DPnj8LqABuZyK5EH3BL%2BJAqK9JcvQ83URnafTjvYHxO3DibDDgCo0IZns2n3Z%2F7TFoXcnKdrwXHtWL8bYuvs0Eb7Wz2zcFr7glkNQs54ANERkCDv2uyNaeJbvjVn9EnzJw7tIiTP8Y7EJ8M9qGS%2FeYbzmVkvrHZ%2BrH%2Fi6IjMcjcRu6TngUqaRfxvGWrTAF%2FA7c6FbF7Zalay4k8%2Bk%2F14dnAYcNPU8d%2FvKc2ndIJE5HNeKCyp5eskXVLzU6F4%2F%2ForuFJ6ZNMYk%2B9xxouWol7NUiG9G3%2FvmHzXDzGX6WMuhCDWF0BzMKewyckGOqUB3vASHOWgWaCJCRHJk40lcZPI6LORxs0p4ih9NMGXwa96I69pzjKx0ZEXo4a9H5B9CjLbS%2BaOposrgOZ4ook4yxQUIj06TcwvCTrqNXvwrVkcjSdVDcxq5AR%2Biw9VhRNnotsV%2FQJn5uGs8toAPnVZmRnuDex8JupFmCOc%2FTCiH%2FXT1az%2BB1sXy8%2BwdNVddx3E3FwPBoul0%2FuFfVdsu4V80eIc9BBq&X-Amz-Signature=8d9124b8d7e9386ff33523fa20ebac5f0870827b3cec5216375f0415969331d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ65SZWO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVBOxPn050GI69J8LjIVzH243xZiyIZuSj59EHj5mBWAiEAqmdtee9AmZU0ZSXp5ZmsynBnrAC7yE46ti%2FAhM920x8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHy%2FmCLrXhnc%2FeaEWircAxxWjlvfcneIPFN76lGpBt2cVYBH0UIniqnSG%2Fd2nXCNQIiYzetH3XKzHbD%2FRQwgVij%2FgP27TULx1Y4EU74HLFTlVIST%2F23x2nybQspLlsHz%2FovKd7qaj1hJA7ZAaVbrsIueFm%2Fj%2BG1NR1%2FfIZTB1pfo04Gqxte5c7NyTfjliQN3lQtJJQA%2FDMKKZkhqdBbMGrmyzLQSOjMSY7AdHSWjowsaVP7Tq%2FAEZcPa0tLj81OXBJ%2F%2BLW8%2BVvaUqT%2BE437ymA0Pc8pMVb6hvb5iV0HPkzWLf9fEzWDw7MYOB%2FGT8XjMkuB3zYST07No0B4Tq5emasBcWRqHU761DPnj8LqABuZyK5EH3BL%2BJAqK9JcvQ83URnafTjvYHxO3DibDDgCo0IZns2n3Z%2F7TFoXcnKdrwXHtWL8bYuvs0Eb7Wz2zcFr7glkNQs54ANERkCDv2uyNaeJbvjVn9EnzJw7tIiTP8Y7EJ8M9qGS%2FeYbzmVkvrHZ%2BrH%2Fi6IjMcjcRu6TngUqaRfxvGWrTAF%2FA7c6FbF7Zalay4k8%2Bk%2F14dnAYcNPU8d%2FvKc2ndIJE5HNeKCyp5eskXVLzU6F4%2F%2ForuFJ6ZNMYk%2B9xxouWol7NUiG9G3%2FvmHzXDzGX6WMuhCDWF0BzMKewyckGOqUB3vASHOWgWaCJCRHJk40lcZPI6LORxs0p4ih9NMGXwa96I69pzjKx0ZEXo4a9H5B9CjLbS%2BaOposrgOZ4ook4yxQUIj06TcwvCTrqNXvwrVkcjSdVDcxq5AR%2Biw9VhRNnotsV%2FQJn5uGs8toAPnVZmRnuDex8JupFmCOc%2FTCiH%2FXT1az%2BB1sXy8%2BwdNVddx3E3FwPBoul0%2FuFfVdsu4V80eIc9BBq&X-Amz-Signature=38dc6662402ef6199d941fa385c2dfd38863c7d1b01344be464f3cca7727464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
