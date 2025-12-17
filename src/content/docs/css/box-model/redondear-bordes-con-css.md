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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUEPZNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB%2FN8TPfOAY50NTqBAGb47KUIoMsuUDBU78Y5wThfD1AiEAmiDAH%2FrKg%2BX%2B2%2BjnaZE%2FNuWP9DuTNxZ8MLmc9xGzKXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLMMj1iLdjy%2FShC2YircAzMTIvf96artgtPKqnVpbSPqRDQFKV53KJWb8qFofsrbPlZV%2ByyDPoOw965SeDFSvmlo2ljC%2Feg%2BRlvIPmNvWXYnNHP631Wk362323F2nX7dDR1k%2BYVQAgEzGeQz1kfud9tKJvONvFWcweacOugo0nu86fUAqpERFVvyxVFLJcIfzZ%2BGZZZtus6QXOXL45mYpog6Mbfq0Tyb6gzKbrwtL71TOp4T9%2FZZSmcq7SRkuUVOKccrh6XZoLOGiI1FmjLQNatjzVuxba2C%2BdpUVc8wX2sIxNaYIlvV%2FoZUsHweM0LxqO1M32hcROtKZpvHi%2BGdUjwtB%2FcOf4eHGadZnsmrynjWtlKo0pz9sjnqY9xYrlnRm7A1yonWuZkDclx2rZp4WxMP3nz%2BAu5B3sRyNwBCZ0nEnJQUc5HrjSDmYnxo7B0QLNEdCiIopyV8NDG8k3CRkJzTGxS3tyzzuLI4918t3HsrDSpPqxLRDTZ37ak4jqbA4ZyxTvghh307eDrD%2B%2Bc8Tkfu0Dcrrz4wyLcleD12UdnX898Ue2ICo0wO%2Fa%2B%2FxbAYs9Hq%2BKvwmssUFN%2Fjeqxotp8AjadtRLTBWGTwPkg9brRIs7Gnlzr%2BkTy22thf4AjPHcaS5V1MVyVdevH7MNCXiMoGOqUBnfvzG0O954QePWAnG31SNmrConed7Z1gfVrVAv7bVd%2B2JxdK7NLObjUXlJszCU8YF7NMrhhCSVLO%2BZHBY08Ukf%2Fki1A3kCUeJ%2Fi8c2IWPmpZkm68D9WLEm%2Fh7bZSQFLEvWmHXBdEIMsIUCpK0sc0CFTO7iul4OM6QmpIhyrz04fuu%2B1xGzV0roccPpsduH2DxoKQabvBes7v0iLtk2nF%2FEGwNV%2F9&X-Amz-Signature=6369d77a259344043e75bfde2ad34530db92f934c421e940ab40769ff659c08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUEPZNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB%2FN8TPfOAY50NTqBAGb47KUIoMsuUDBU78Y5wThfD1AiEAmiDAH%2FrKg%2BX%2B2%2BjnaZE%2FNuWP9DuTNxZ8MLmc9xGzKXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLMMj1iLdjy%2FShC2YircAzMTIvf96artgtPKqnVpbSPqRDQFKV53KJWb8qFofsrbPlZV%2ByyDPoOw965SeDFSvmlo2ljC%2Feg%2BRlvIPmNvWXYnNHP631Wk362323F2nX7dDR1k%2BYVQAgEzGeQz1kfud9tKJvONvFWcweacOugo0nu86fUAqpERFVvyxVFLJcIfzZ%2BGZZZtus6QXOXL45mYpog6Mbfq0Tyb6gzKbrwtL71TOp4T9%2FZZSmcq7SRkuUVOKccrh6XZoLOGiI1FmjLQNatjzVuxba2C%2BdpUVc8wX2sIxNaYIlvV%2FoZUsHweM0LxqO1M32hcROtKZpvHi%2BGdUjwtB%2FcOf4eHGadZnsmrynjWtlKo0pz9sjnqY9xYrlnRm7A1yonWuZkDclx2rZp4WxMP3nz%2BAu5B3sRyNwBCZ0nEnJQUc5HrjSDmYnxo7B0QLNEdCiIopyV8NDG8k3CRkJzTGxS3tyzzuLI4918t3HsrDSpPqxLRDTZ37ak4jqbA4ZyxTvghh307eDrD%2B%2Bc8Tkfu0Dcrrz4wyLcleD12UdnX898Ue2ICo0wO%2Fa%2B%2FxbAYs9Hq%2BKvwmssUFN%2Fjeqxotp8AjadtRLTBWGTwPkg9brRIs7Gnlzr%2BkTy22thf4AjPHcaS5V1MVyVdevH7MNCXiMoGOqUBnfvzG0O954QePWAnG31SNmrConed7Z1gfVrVAv7bVd%2B2JxdK7NLObjUXlJszCU8YF7NMrhhCSVLO%2BZHBY08Ukf%2Fki1A3kCUeJ%2Fi8c2IWPmpZkm68D9WLEm%2Fh7bZSQFLEvWmHXBdEIMsIUCpK0sc0CFTO7iul4OM6QmpIhyrz04fuu%2B1xGzV0roccPpsduH2DxoKQabvBes7v0iLtk2nF%2FEGwNV%2F9&X-Amz-Signature=a75c98ea4b2950972241c643afe9444ae1c4a1566df264caa996c4bb3814efe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
