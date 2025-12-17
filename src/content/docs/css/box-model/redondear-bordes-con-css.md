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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNAGVJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdHgXtjisFYVac1y5imgLJ8pht6yCZeRTgstzG3V5h%2BAIgN4Oz2fE08MoM10AVbBMcy18mPSPFRqzaiuycIXetvLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F6t6cYri%2FA%2BEEplSrcA3Urm%2FWMhEhUYZr4tjyzsly4R9A66OeKGe5W7eLHrE4vtl%2B%2BcR%2B3hiTKmII494RgQ%2FObifz%2B2iLCk41%2Fz%2FOQlVXZRY3c4onVWgrJc94XTEz%2BaOnsBbL1rYQDt3VLNLMubNGLFCjXYvfAtD8lwo%2FoAxiLfFf%2Bz1fWqpHxDWPSP6st911FmhNMxOjprMJ%2F2hmWiHV3e3%2F9mCbeF0qsTTfP5KLHUySPfjQTtpvfdkTIssvKIHq2qj%2F71I1l2oVGmotJ27cd8R8Bf5dnfqEWZiy1eksCZwnbGoVvygQ58wkX0oliEGmBKjYZgZloRnmUeRptYgH74oytY31Xy9S3A28SEC4kWQXSai1QtR9acM%2BzP%2BybA4beoYAIhdmGwMPFks%2BR3%2FoxNCoFqFNtbVqxugktprYu3fEHZuCDAU1MFHPUwA7iBmIRPPWZ8G0spE8alrxTjWMH0%2F1cVKqyK31RhWNx0EiMhFMlvMzveWm2ORo61p5wP7UYmY4m5HYqCFcg23nYknzYHZuwny6i1WPzh7TXMbsJ%2B3Ho6pMXTGExLd95NWJPgO1CQPnhkAKkky2wkcg3vZi%2BMMGKHjEudKFcBy8LDBSV2Bm8a96rr%2BgEWCp9st3NdtUGfVo5fzqzVDY2MKufi8oGOqUB7VdGNYqJfoY6%2Bhl5A2%2BwxcphuT761XL5lu5kdptUOLCFJFL8AxuUZ0vCGO0p%2BKCYQslk4D21MvVlQamWBC5hdfIfBnzf0S3od5YV33BdiDRbca%2B6GWMpF%2Fl6a%2BJxhZAp%2FMInkxo8wP689Hb2znh0YWJAAtFKiNUUaqjNKrXu1%2B6%2Fu8AlOUAwVVs2ghxvnBrT%2FyxnIIQaoJ7FeSWxCRHK6qArLTDH&X-Amz-Signature=831908bec85815ce7fbd77209d5b7b599b0ece9a1ebdb0277a17280f47831920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNAGVJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdHgXtjisFYVac1y5imgLJ8pht6yCZeRTgstzG3V5h%2BAIgN4Oz2fE08MoM10AVbBMcy18mPSPFRqzaiuycIXetvLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F6t6cYri%2FA%2BEEplSrcA3Urm%2FWMhEhUYZr4tjyzsly4R9A66OeKGe5W7eLHrE4vtl%2B%2BcR%2B3hiTKmII494RgQ%2FObifz%2B2iLCk41%2Fz%2FOQlVXZRY3c4onVWgrJc94XTEz%2BaOnsBbL1rYQDt3VLNLMubNGLFCjXYvfAtD8lwo%2FoAxiLfFf%2Bz1fWqpHxDWPSP6st911FmhNMxOjprMJ%2F2hmWiHV3e3%2F9mCbeF0qsTTfP5KLHUySPfjQTtpvfdkTIssvKIHq2qj%2F71I1l2oVGmotJ27cd8R8Bf5dnfqEWZiy1eksCZwnbGoVvygQ58wkX0oliEGmBKjYZgZloRnmUeRptYgH74oytY31Xy9S3A28SEC4kWQXSai1QtR9acM%2BzP%2BybA4beoYAIhdmGwMPFks%2BR3%2FoxNCoFqFNtbVqxugktprYu3fEHZuCDAU1MFHPUwA7iBmIRPPWZ8G0spE8alrxTjWMH0%2F1cVKqyK31RhWNx0EiMhFMlvMzveWm2ORo61p5wP7UYmY4m5HYqCFcg23nYknzYHZuwny6i1WPzh7TXMbsJ%2B3Ho6pMXTGExLd95NWJPgO1CQPnhkAKkky2wkcg3vZi%2BMMGKHjEudKFcBy8LDBSV2Bm8a96rr%2BgEWCp9st3NdtUGfVo5fzqzVDY2MKufi8oGOqUB7VdGNYqJfoY6%2Bhl5A2%2BwxcphuT761XL5lu5kdptUOLCFJFL8AxuUZ0vCGO0p%2BKCYQslk4D21MvVlQamWBC5hdfIfBnzf0S3od5YV33BdiDRbca%2B6GWMpF%2Fl6a%2BJxhZAp%2FMInkxo8wP689Hb2znh0YWJAAtFKiNUUaqjNKrXu1%2B6%2Fu8AlOUAwVVs2ghxvnBrT%2FyxnIIQaoJ7FeSWxCRHK6qArLTDH&X-Amz-Signature=025b00140cf481ec11d2cf3e9fe8c9b021fb9bec0b4758fa5730c802162614d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
