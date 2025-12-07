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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELYXZ6X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlnil%2BlX7YhAitN%2BiDw1xcccC1A3JLnRhCsVdWue3gdAiEA7%2B4XmfCitwlTWMG82Io18GeUCM1uUjkqySWt14uGcBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1gMZ2FrAbOnvvcFircAzKdPbe1VBK67tV1LVprpbiuMPkRMALEJCQJ4zsZdYmP%2F4PbrMYsMnIB44ps529WdAvzg9%2BUgEitQ2bkUt3GO9E6g%2FWZ2sW1vl1AGPiU%2BJ8Hqx6eJh3HjtrY2yi43%2F9%2F1FXgpzVx4HpsfYwMreeSjexRi%2FxZCdxpIZK7cMl5rJay6o41b4MieWKg5pXJgr%2Bdg1Lo5EtE5ZBicaM%2Ff0cBhzfciZJoZj8sZE49fd2upGxs2AjQTVaXiziNrBWsJGXYhHjd2BPj8ROwJmFioIX3DY8BjkV7asz5DeLJJJ2xf9eL5f5RCsi%2BRhdGlS79ZXwCFiEQ5GqPk7qN3xU1KNOPRczKlRl6PGuDkqCj3t3j3L1PnqVH6F1i4vCWlfhOoqWxuA0p5PRbqJgq5pLiwVlPYKFrZBHjxG1VEQ%2BsZB%2F0cVPJl4PU9Kcm2Jutu9En2ue1G8s6x0Ho%2Fv3YwFhR7g7QT2nSCR4ScDAck3oRKzd1%2B88XqVCpISInUAN08TzEqUewuSd0%2BDT3QwvfX%2BkD9ARmhTZtkyL3r4zf4u9UbXDqhCrm98tjLa9afF6%2F4Gt6mXoJ3u5UNwh7CqI07cxi8NEoW7QY9AX3XJFiO%2BjU9VIqoPB71XuWD2FF1C2LmN2vMK7%2B0skGOqUBx9lhTklUmg3E6ctiN6Qri4SrXOzCEAJ5A6BGv5YGBGzirI6WnFp4IPZQoa0tLldb6%2BJHMBr3zDp7eJRpjqnj0W0b3tQDoOrLBatXDtdCdYxpRiNK65%2F2c5BNCNuP8onBrEyF08%2BA1pM9%2FUZHEY6y7VF667hxbjOdaTHj46bBu%2Fc1Ypdir3gJmKfuNOjhv6B60%2FTlK1hMBbJPYBJ6k3eSL93R%2Bmng&X-Amz-Signature=03ac23329a1ac47f6ffc126bb9b38c040db83d5c2c93f458c79e8d309dff0fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELYXZ6X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlnil%2BlX7YhAitN%2BiDw1xcccC1A3JLnRhCsVdWue3gdAiEA7%2B4XmfCitwlTWMG82Io18GeUCM1uUjkqySWt14uGcBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1gMZ2FrAbOnvvcFircAzKdPbe1VBK67tV1LVprpbiuMPkRMALEJCQJ4zsZdYmP%2F4PbrMYsMnIB44ps529WdAvzg9%2BUgEitQ2bkUt3GO9E6g%2FWZ2sW1vl1AGPiU%2BJ8Hqx6eJh3HjtrY2yi43%2F9%2F1FXgpzVx4HpsfYwMreeSjexRi%2FxZCdxpIZK7cMl5rJay6o41b4MieWKg5pXJgr%2Bdg1Lo5EtE5ZBicaM%2Ff0cBhzfciZJoZj8sZE49fd2upGxs2AjQTVaXiziNrBWsJGXYhHjd2BPj8ROwJmFioIX3DY8BjkV7asz5DeLJJJ2xf9eL5f5RCsi%2BRhdGlS79ZXwCFiEQ5GqPk7qN3xU1KNOPRczKlRl6PGuDkqCj3t3j3L1PnqVH6F1i4vCWlfhOoqWxuA0p5PRbqJgq5pLiwVlPYKFrZBHjxG1VEQ%2BsZB%2F0cVPJl4PU9Kcm2Jutu9En2ue1G8s6x0Ho%2Fv3YwFhR7g7QT2nSCR4ScDAck3oRKzd1%2B88XqVCpISInUAN08TzEqUewuSd0%2BDT3QwvfX%2BkD9ARmhTZtkyL3r4zf4u9UbXDqhCrm98tjLa9afF6%2F4Gt6mXoJ3u5UNwh7CqI07cxi8NEoW7QY9AX3XJFiO%2BjU9VIqoPB71XuWD2FF1C2LmN2vMK7%2B0skGOqUBx9lhTklUmg3E6ctiN6Qri4SrXOzCEAJ5A6BGv5YGBGzirI6WnFp4IPZQoa0tLldb6%2BJHMBr3zDp7eJRpjqnj0W0b3tQDoOrLBatXDtdCdYxpRiNK65%2F2c5BNCNuP8onBrEyF08%2BA1pM9%2FUZHEY6y7VF667hxbjOdaTHj46bBu%2Fc1Ypdir3gJmKfuNOjhv6B60%2FTlK1hMBbJPYBJ6k3eSL93R%2Bmng&X-Amz-Signature=8f9e41c9d29e0c39b2e7cbf26f08c7ca45ea5896fb81146443cebf47c31a10ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
