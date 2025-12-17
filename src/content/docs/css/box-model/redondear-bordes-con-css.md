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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BS4IP6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZBIOzwaLb8mQBGqkfza%2FypPeGxCKumETis%2BbLZpCmAiA9Qid3uCQlOgyHYjNwkO%2B578%2F%2BTTXUbF2NOT1JkKsEUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3an9Ty%2FZxn9O57VJKtwDVIAIf%2B037BTO%2FZcunKEAaT0fF%2FXwvyvgHiCg6M%2BKJVG%2BDECThoVF%2BYI1UFkPGBudRks8C0K48124BAq56lALVaQrqm5c1XZei3mKcl0lFa7cw1dN41%2FEzUH1I95YiuCg%2BM06kNdrOtq9JxH%2BCdI7h2pVKrvwPjFtRLFFbNwRiYhXDDtFap%2FvTk2P2ZbjFuLKau5ER6zKhc%2BblwrjF6pPftgtqaJpaTb19BYXO9eJBY2c51xU5b5ancJuX6RnJiU6O%2F6Dct2hzZtP%2FPejNEAygdnYwA5VRlFUKU5fmvR5dyBWkPGPdMxS0mx3m3pPk%2FSjXo%2F65acLsYTbV%2BMkpuKtgIiId3yXc%2BrFIxuzXU4ffeJd2MSdon7l03rJGPdEonmiDkiHq9axUZY99LFegRqKVntRzYZ2HJ1Jc37htA7rzajDkqp3iLMin2XHE2oyx2AHw8uyPRbo3nJzj21yIeLj1A%2FbFeHLG4nNaYTIk%2Fiv9keXaix59EF2X%2BXo3RxII9QByqwbUPURClPJAWJAzBedbiGBk14%2BGvSpUWl5sYwR%2B6wukuIAIHt8Crnm4eazm6WWPBs2%2Bn0fI%2FkzfGdCdfJtOfGYug2SjVaUzsJsr%2B6%2BVHr9V9ZANbVpBqpBsoww3p%2BLygY6pgFXhDXdb71RdXs1IxQQg3F1XJGYO4V8EiqrRJA7uOxisk4GNIr4aLf1GyaIQx9nG0weSUaGpZ2NPrMqlJvyx294j0kKeI1BE5LOoSxT5LQ4CHT3yPNPWLe9VUoSUPM2BJbS1F1d%2FUE0sPDCup2NSo9ZL0eOEoMDgrn3MbGisBu8hOECrqu982YjnH2loYf3g9JQ9BCI36hOmoryt7S%2Fb3h4FIX3gWPC&X-Amz-Signature=c9b7c129d0572dba9ae69c91f38f4d20b02c526c9f610be7b118a3d085792e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BS4IP6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZBIOzwaLb8mQBGqkfza%2FypPeGxCKumETis%2BbLZpCmAiA9Qid3uCQlOgyHYjNwkO%2B578%2F%2BTTXUbF2NOT1JkKsEUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3an9Ty%2FZxn9O57VJKtwDVIAIf%2B037BTO%2FZcunKEAaT0fF%2FXwvyvgHiCg6M%2BKJVG%2BDECThoVF%2BYI1UFkPGBudRks8C0K48124BAq56lALVaQrqm5c1XZei3mKcl0lFa7cw1dN41%2FEzUH1I95YiuCg%2BM06kNdrOtq9JxH%2BCdI7h2pVKrvwPjFtRLFFbNwRiYhXDDtFap%2FvTk2P2ZbjFuLKau5ER6zKhc%2BblwrjF6pPftgtqaJpaTb19BYXO9eJBY2c51xU5b5ancJuX6RnJiU6O%2F6Dct2hzZtP%2FPejNEAygdnYwA5VRlFUKU5fmvR5dyBWkPGPdMxS0mx3m3pPk%2FSjXo%2F65acLsYTbV%2BMkpuKtgIiId3yXc%2BrFIxuzXU4ffeJd2MSdon7l03rJGPdEonmiDkiHq9axUZY99LFegRqKVntRzYZ2HJ1Jc37htA7rzajDkqp3iLMin2XHE2oyx2AHw8uyPRbo3nJzj21yIeLj1A%2FbFeHLG4nNaYTIk%2Fiv9keXaix59EF2X%2BXo3RxII9QByqwbUPURClPJAWJAzBedbiGBk14%2BGvSpUWl5sYwR%2B6wukuIAIHt8Crnm4eazm6WWPBs2%2Bn0fI%2FkzfGdCdfJtOfGYug2SjVaUzsJsr%2B6%2BVHr9V9ZANbVpBqpBsoww3p%2BLygY6pgFXhDXdb71RdXs1IxQQg3F1XJGYO4V8EiqrRJA7uOxisk4GNIr4aLf1GyaIQx9nG0weSUaGpZ2NPrMqlJvyx294j0kKeI1BE5LOoSxT5LQ4CHT3yPNPWLe9VUoSUPM2BJbS1F1d%2FUE0sPDCup2NSo9ZL0eOEoMDgrn3MbGisBu8hOECrqu982YjnH2loYf3g9JQ9BCI36hOmoryt7S%2Fb3h4FIX3gWPC&X-Amz-Signature=6a1d1d2d54fe8e7410c169f451512ba636fa930bdfeb7b078faa27f227f11e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
