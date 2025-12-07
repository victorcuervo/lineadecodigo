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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJABX76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsIDzW4y%2BHptxDsS%2FUSZAxiMAJVze9ocJIBpfS9PKOyAiAPGKGTM9sDxvUbZX7UAm9273%2FvrryQZUF1eFwhmRl8%2FCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BYAEzBsLHVPmV4eKtwD%2FGmN4CZdPULbtmEUboAi5oBCSngN%2FWaLIkwWqF1jPfmB9w%2B3ayhU5MK0WsVdVJdsCEQ1gSvpCqqYk6297NrVbyO1KLZfxa4wjPm97RZtuqub%2BtBPbsDx9tH3w0e%2BawoShYHDnL63fGpjFRp%2BAXN3jxGaKNm25ziXSqkItdLHRuUfUgISzM0fDasBak3ZSNzc2a8jmNMMMkm4kn2NOqRuCU8Qw%2FTnSHH1D6rn5XlUCvk1o35T9YZYKvX2HtTwizQJP5GwNY31%2BaAmHAaH5e%2BqVVyD18tBhkv9ZvJlWNcZ04PktTZNdUlMN1Osu9gbvDG64%2F6pmjYe6VABdPckP2uZoBnyddtN2%2BcaeSqrGGY1y1NNOc5%2Fq30xUrdAAgfMuubY4eow6ARPyFYq%2BffYkbikTuxt6iKW6MBBdHCpR4boJhijcmBRU%2B4sPgUikT7TB1S7gL4ogG%2FDKOnSvQD5zV3aWZbJPo%2BQM2BZZA35tsFVfjpp2Mizl%2BkJub4O8A44wDi5aDfq%2FIXQLce2vn71%2BvV473vI4jtqx1xxNGqWie32d6AIRIjL2JWUP6E1G%2BkPTAQ0JHkBn4IGjf23p37XUCNIHiOKbBMpnEDcheEMZC0%2FI3Un1et7xByMjIfBFb0wvYXYyQY6pgGBpNiQFeMOQwa10Yb6ErxipDkCdqOSNiRQJ3oD7fYSp%2BF%2FiZjp9ZY7Zwg6u39azMVA7GIrdTw73eccNYAiWSSAxkVsPLhUHR4g90MXtp4m%2FsLsifRiQS6BugljX2aZJ%2BLboHZjRFQ0epBmfeI1JhqvERlqFG%2FMz48HMUvxgGvRQtH1uP%2BOmmsAoO2%2FVfwmyNMmLhldTDutq4zYJNGnV3PTka0txDcW&X-Amz-Signature=afebd3f514580f40cd7042cb39b5b72081aeddfae4697578c4f5ba2f7d0d517c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJABX76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsIDzW4y%2BHptxDsS%2FUSZAxiMAJVze9ocJIBpfS9PKOyAiAPGKGTM9sDxvUbZX7UAm9273%2FvrryQZUF1eFwhmRl8%2FCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BYAEzBsLHVPmV4eKtwD%2FGmN4CZdPULbtmEUboAi5oBCSngN%2FWaLIkwWqF1jPfmB9w%2B3ayhU5MK0WsVdVJdsCEQ1gSvpCqqYk6297NrVbyO1KLZfxa4wjPm97RZtuqub%2BtBPbsDx9tH3w0e%2BawoShYHDnL63fGpjFRp%2BAXN3jxGaKNm25ziXSqkItdLHRuUfUgISzM0fDasBak3ZSNzc2a8jmNMMMkm4kn2NOqRuCU8Qw%2FTnSHH1D6rn5XlUCvk1o35T9YZYKvX2HtTwizQJP5GwNY31%2BaAmHAaH5e%2BqVVyD18tBhkv9ZvJlWNcZ04PktTZNdUlMN1Osu9gbvDG64%2F6pmjYe6VABdPckP2uZoBnyddtN2%2BcaeSqrGGY1y1NNOc5%2Fq30xUrdAAgfMuubY4eow6ARPyFYq%2BffYkbikTuxt6iKW6MBBdHCpR4boJhijcmBRU%2B4sPgUikT7TB1S7gL4ogG%2FDKOnSvQD5zV3aWZbJPo%2BQM2BZZA35tsFVfjpp2Mizl%2BkJub4O8A44wDi5aDfq%2FIXQLce2vn71%2BvV473vI4jtqx1xxNGqWie32d6AIRIjL2JWUP6E1G%2BkPTAQ0JHkBn4IGjf23p37XUCNIHiOKbBMpnEDcheEMZC0%2FI3Un1et7xByMjIfBFb0wvYXYyQY6pgGBpNiQFeMOQwa10Yb6ErxipDkCdqOSNiRQJ3oD7fYSp%2BF%2FiZjp9ZY7Zwg6u39azMVA7GIrdTw73eccNYAiWSSAxkVsPLhUHR4g90MXtp4m%2FsLsifRiQS6BugljX2aZJ%2BLboHZjRFQ0epBmfeI1JhqvERlqFG%2FMz48HMUvxgGvRQtH1uP%2BOmmsAoO2%2FVfwmyNMmLhldTDutq4zYJNGnV3PTka0txDcW&X-Amz-Signature=dd111cb254170d718b4ac92cf7c5f213d39888743801e4ff595bee7b1e71dd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
