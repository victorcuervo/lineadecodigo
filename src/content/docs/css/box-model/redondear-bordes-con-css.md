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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5FQKKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzC2vfdh4NUgPBCnO7nha77Q4aLTU3MBSq59mf9c%2BkAiEAjmot9O8wd0OEX1EKfwRnhx4T4exMTVZ73GMLr2V9Ft0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHCCm7rf3sZXIYZwYircA8XPYkUtv2UEaFkhzM8O5ewbAIwGJkbonbNM2dqKIHRVPO%2FmO%2FlYq2%2Bc8jiyAxplA%2BFG47t6ysdfvNTdBh%2BmBXG9QAhwG2KATSXX04gajjuVfHBrSC4Rib7Be7G11dpoyGKudFEAkKLtum4QMoEU92WDRJdW3gXtorHr%2FhoLK%2B8ViXc5134e6rMkhwW7IZoy6izhUz%2BFefHpmHdvWe%2BATiZTQWSjDqTkWJqOOH%2FoQV01dc6oDAVWR0eePfkfuux5TgX7dhEvC2fmhmnF6LYthJb0RQOhh6BtuhHTAi914DP6fTKWUORgWQPnuqeKrTPKFdMk9bjvdPkBJO0%2FpPhkZy%2FUrndwnJdkINf4BMXy%2FEV92BF5nyFSHkO7xl1ZZcMC37O83JuQX3Ry%2B0o78XpuXASJUICgsg1EJUG8LznASqPadrK%2FITcHv8Ns3ORhIEh3fGcX6vMKBf8APA0kjPr7E%2BgUVMZWbWQpGyH%2FCzFIPYme4sigj8QZWzw1pAu8qnPUxDOegkrgd8hJd4EwfCsWJmUEirdupigJaqm1U%2FPTUjolq1OW3d%2B8QqeWQJSptBvUuFYBgq%2B2EV5Hw2tEjoX6BOV2f8Eic3%2BilsjeYNcAPodm4GYLZu%2BLeuUemVGQMJHOiMoGOqUBybl7MZuORcmDm99gjU5dkuRzGfQBdxpmeYmWAztea%2B4MhUq4E4O5X2TVfeI9%2F%2BvIyMx3PHpYaa5fihASO1zibpcNRx9mFsJvhBCECh%2Bk8caVCRw1E%2FIakkF4Q2zr2ZPapZ1qaWDAGqV0XtwhfRIYB6uXLrHcszdaDBi7vitpfra0fAgBIPBWBnlIvlRfW7yAxxZx%2FcHV%2BEcJ1x390Q3cECWJ11iy&X-Amz-Signature=6a1b7daf7970a95197658fb9112d9d2926682ab09d418fdb35108cead742f877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5FQKKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzC2vfdh4NUgPBCnO7nha77Q4aLTU3MBSq59mf9c%2BkAiEAjmot9O8wd0OEX1EKfwRnhx4T4exMTVZ73GMLr2V9Ft0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHCCm7rf3sZXIYZwYircA8XPYkUtv2UEaFkhzM8O5ewbAIwGJkbonbNM2dqKIHRVPO%2FmO%2FlYq2%2Bc8jiyAxplA%2BFG47t6ysdfvNTdBh%2BmBXG9QAhwG2KATSXX04gajjuVfHBrSC4Rib7Be7G11dpoyGKudFEAkKLtum4QMoEU92WDRJdW3gXtorHr%2FhoLK%2B8ViXc5134e6rMkhwW7IZoy6izhUz%2BFefHpmHdvWe%2BATiZTQWSjDqTkWJqOOH%2FoQV01dc6oDAVWR0eePfkfuux5TgX7dhEvC2fmhmnF6LYthJb0RQOhh6BtuhHTAi914DP6fTKWUORgWQPnuqeKrTPKFdMk9bjvdPkBJO0%2FpPhkZy%2FUrndwnJdkINf4BMXy%2FEV92BF5nyFSHkO7xl1ZZcMC37O83JuQX3Ry%2B0o78XpuXASJUICgsg1EJUG8LznASqPadrK%2FITcHv8Ns3ORhIEh3fGcX6vMKBf8APA0kjPr7E%2BgUVMZWbWQpGyH%2FCzFIPYme4sigj8QZWzw1pAu8qnPUxDOegkrgd8hJd4EwfCsWJmUEirdupigJaqm1U%2FPTUjolq1OW3d%2B8QqeWQJSptBvUuFYBgq%2B2EV5Hw2tEjoX6BOV2f8Eic3%2BilsjeYNcAPodm4GYLZu%2BLeuUemVGQMJHOiMoGOqUBybl7MZuORcmDm99gjU5dkuRzGfQBdxpmeYmWAztea%2B4MhUq4E4O5X2TVfeI9%2F%2BvIyMx3PHpYaa5fihASO1zibpcNRx9mFsJvhBCECh%2Bk8caVCRw1E%2FIakkF4Q2zr2ZPapZ1qaWDAGqV0XtwhfRIYB6uXLrHcszdaDBi7vitpfra0fAgBIPBWBnlIvlRfW7yAxxZx%2FcHV%2BEcJ1x390Q3cECWJ11iy&X-Amz-Signature=b9690ccba1f07d40408d6432c94b77966b59a7ca69104a22517b00d2fb0dfc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
