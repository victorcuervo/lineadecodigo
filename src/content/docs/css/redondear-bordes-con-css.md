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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3RYDUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA0DHA17pmaSWhxXxN78BP3bpw3BNdRNrv8KJq%2FquTmAiEAhYl1zcMsAEOm1%2FaWpHdlv80bc4yqbfP0mUBQOnjSwDQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOSAIoPOy28izLFYSrcA31oJQ5bfAVP4nUbCaTykMRINRmaQNGFIrNp1VuH41AglsElLitgp7s%2BJwZM3EOYkhWuqb5cD9P%2Bg3sU%2BHbxk9%2Bd0vl%2FAZT%2FGJbLEdmF1pQR4FTgWgUSOowk6owZ8n38%2FMpWQiUBz82Jg6L2mB6Ql%2FbZCn5au3fDU0zLaS6Gvs2%2BKv5SzP5x2ZhdlLnJtdQ1mQTTxPF1RLNInRTwESYbfHuBvzXvDf1RlrXHpEHvgRxAFzkDIkqOldn7UfSMZXscJjFQQxe8mTehkkFXQGvmf9zMH1moviieyWMvfwJ2gpsa2Cq14zzNo0HraJp3Kffs%2FdcxvV7Cgvjq7JV91FxVhZp1JuI0IWkk3xyRYx%2Bnq%2BAWTjEoZYSxV8FNaeO6inj%2BIz1T9qqPiMlen9wRGq%2B6UcybGah6G05zypt3CnLYq8zu7%2Fgb3zD5BEX7Sjv2K%2FuoqvAc%2BFUM%2BDuWeQcjlzQ7%2BF3A%2BR7ko29uvr2TeSrz1TttL663jh1f%2Fh7upYYwmdoGFdXgRebTfX6ZQbk6%2B89%2B30F%2BpEnqMvZXuTC6J5VScA7DrPzQ7orQOIgrzvS95S5UlYZhSHapqLOBp4iwHg2gQDX0CM81w9PtVQQ6SHwUj24G8r8GlVRWCWNMfVy5MJ%2Bc1MkGOqUBCPYl00AYKAb2JF2eo%2B3S6Rnc1gttGRMuh2J8U45cKlt%2Fd89L7pgRvH3CbpHXtd3PlobZm8imiGnNbn%2FUk%2BeSf9JNKUxg3rUcW1kSfsMtnC0H0AHLP8vj86ey7kM9twj3ENDV2D19U6eTKHj%2BSSHJC40AT9Bf%2BpYKrHQCo3A5DMqO59EkumAO8s0a0VVqnwV4lWfc2%2FD8OA52z8w5xbxVr6fy02gS&X-Amz-Signature=fde1bb9a5f16140b1ebfa856388464f751f6780e2c67783f61ac77fe9d2bdc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3RYDUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA0DHA17pmaSWhxXxN78BP3bpw3BNdRNrv8KJq%2FquTmAiEAhYl1zcMsAEOm1%2FaWpHdlv80bc4yqbfP0mUBQOnjSwDQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOSAIoPOy28izLFYSrcA31oJQ5bfAVP4nUbCaTykMRINRmaQNGFIrNp1VuH41AglsElLitgp7s%2BJwZM3EOYkhWuqb5cD9P%2Bg3sU%2BHbxk9%2Bd0vl%2FAZT%2FGJbLEdmF1pQR4FTgWgUSOowk6owZ8n38%2FMpWQiUBz82Jg6L2mB6Ql%2FbZCn5au3fDU0zLaS6Gvs2%2BKv5SzP5x2ZhdlLnJtdQ1mQTTxPF1RLNInRTwESYbfHuBvzXvDf1RlrXHpEHvgRxAFzkDIkqOldn7UfSMZXscJjFQQxe8mTehkkFXQGvmf9zMH1moviieyWMvfwJ2gpsa2Cq14zzNo0HraJp3Kffs%2FdcxvV7Cgvjq7JV91FxVhZp1JuI0IWkk3xyRYx%2Bnq%2BAWTjEoZYSxV8FNaeO6inj%2BIz1T9qqPiMlen9wRGq%2B6UcybGah6G05zypt3CnLYq8zu7%2Fgb3zD5BEX7Sjv2K%2FuoqvAc%2BFUM%2BDuWeQcjlzQ7%2BF3A%2BR7ko29uvr2TeSrz1TttL663jh1f%2Fh7upYYwmdoGFdXgRebTfX6ZQbk6%2B89%2B30F%2BpEnqMvZXuTC6J5VScA7DrPzQ7orQOIgrzvS95S5UlYZhSHapqLOBp4iwHg2gQDX0CM81w9PtVQQ6SHwUj24G8r8GlVRWCWNMfVy5MJ%2Bc1MkGOqUBCPYl00AYKAb2JF2eo%2B3S6Rnc1gttGRMuh2J8U45cKlt%2Fd89L7pgRvH3CbpHXtd3PlobZm8imiGnNbn%2FUk%2BeSf9JNKUxg3rUcW1kSfsMtnC0H0AHLP8vj86ey7kM9twj3ENDV2D19U6eTKHj%2BSSHJC40AT9Bf%2BpYKrHQCo3A5DMqO59EkumAO8s0a0VVqnwV4lWfc2%2FD8OA52z8w5xbxVr6fy02gS&X-Amz-Signature=2bae72a5084dbfee97fdaa0b7a4bb31957764d3f8f324a0d04a993fdc05731fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
