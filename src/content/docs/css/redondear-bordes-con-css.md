---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCUH5GR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0QIDngMZNCCnMUSBUi%2BORRpeRZozLDnHDweMF9cgxAwIgF%2B2NkQEU5Wl75%2Bz6QHHedpm5UVxZpydyigQnzcQKg2Eq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCam1pG5JR0IKmV0eCrcA%2BgpffClIOOKL31mEV9U%2BnGyzbXsEbS%2BdqxCCMlc0LUMgdOlxM3yXlmFcY6huEmvOUg2XZGx6gnJMGTx4u2IH9LQmQFyY8eDIBHLr0xxZQ4aKdvh7zBgTfcxVGBV1xMlDt3vvwyyik4%2B%2FAcUp6WWqApz2pPGgabMoIVrOZuCs8c3sKuQg%2FuHRF1NZf0is%2BFdUWcdr5dsNXnXHhAeTF2OZK8liT3YjcFG8pQ2%2BWuV3VSMuDNjRe28mLLUoE2HpAxPN4rLP2iGllOWZiNgd6TOt%2BF3QHQpk%2F9lwsIgWA15xjMb8PWgoLfqpAX9toAat2qCXT6mg2BYhKTe41%2Fr6gl3Pycp6pqiaRYwUWu9T2IZzQ619k59OrOiaJHcc0GT1WIMEKHsJcDoka96W9SeT6hrqL2iIaUr%2FxNLXZyc%2B033PTvLfo8jjT25Xv%2FjoLwygyO4zwqblXO44h4B2n80gm8egIXXac0ZPFmdZeMtrMSlRbOxCP9EKvnCwthNCe0ghh2nnJcFUBPfVtBBQ4EZix45LIGHw0LusVqgjT8eadUEttxr9B6ZPqrukAAfoqajBYnc9daBgdzWWOc46tmOKdZYRTuT06s%2Fzv1chf4WFXe8JmWqcsFVZm1C5vEtuiOrMJvcxskGOqUBXARkAPRbjxnR3ctzN0vssIcampJAowQInIbS33JTqYdXuZ8Ekd%2B5UzenEmlJl5ntFIQ90aNJXCl78%2FfMii%2BkHDNRk6JAo8inbrP%2FmD4lyK3SUoc3NtUMOiEdB9bSWcUDbhX5lm%2Fm0XOfe%2FeUGLSgor%2BLzmBL1nc0S%2BkY847J4P7lBJKD8v9q5eOxyv3h5OvSz84pS4qJn7zETXuT3iS2gyKzOLNY&X-Amz-Signature=30cd3e1475dd31e96e40e9ff1597b9c33ec20facea7e479187a4e7168595ba94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCUH5GR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0QIDngMZNCCnMUSBUi%2BORRpeRZozLDnHDweMF9cgxAwIgF%2B2NkQEU5Wl75%2Bz6QHHedpm5UVxZpydyigQnzcQKg2Eq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCam1pG5JR0IKmV0eCrcA%2BgpffClIOOKL31mEV9U%2BnGyzbXsEbS%2BdqxCCMlc0LUMgdOlxM3yXlmFcY6huEmvOUg2XZGx6gnJMGTx4u2IH9LQmQFyY8eDIBHLr0xxZQ4aKdvh7zBgTfcxVGBV1xMlDt3vvwyyik4%2B%2FAcUp6WWqApz2pPGgabMoIVrOZuCs8c3sKuQg%2FuHRF1NZf0is%2BFdUWcdr5dsNXnXHhAeTF2OZK8liT3YjcFG8pQ2%2BWuV3VSMuDNjRe28mLLUoE2HpAxPN4rLP2iGllOWZiNgd6TOt%2BF3QHQpk%2F9lwsIgWA15xjMb8PWgoLfqpAX9toAat2qCXT6mg2BYhKTe41%2Fr6gl3Pycp6pqiaRYwUWu9T2IZzQ619k59OrOiaJHcc0GT1WIMEKHsJcDoka96W9SeT6hrqL2iIaUr%2FxNLXZyc%2B033PTvLfo8jjT25Xv%2FjoLwygyO4zwqblXO44h4B2n80gm8egIXXac0ZPFmdZeMtrMSlRbOxCP9EKvnCwthNCe0ghh2nnJcFUBPfVtBBQ4EZix45LIGHw0LusVqgjT8eadUEttxr9B6ZPqrukAAfoqajBYnc9daBgdzWWOc46tmOKdZYRTuT06s%2Fzv1chf4WFXe8JmWqcsFVZm1C5vEtuiOrMJvcxskGOqUBXARkAPRbjxnR3ctzN0vssIcampJAowQInIbS33JTqYdXuZ8Ekd%2B5UzenEmlJl5ntFIQ90aNJXCl78%2FfMii%2BkHDNRk6JAo8inbrP%2FmD4lyK3SUoc3NtUMOiEdB9bSWcUDbhX5lm%2Fm0XOfe%2FeUGLSgor%2BLzmBL1nc0S%2BkY847J4P7lBJKD8v9q5eOxyv3h5OvSz84pS4qJn7zETXuT3iS2gyKzOLNY&X-Amz-Signature=7644c978b4dba1138a24d2e13edbc067b33a452fcef5dbd8d19901d3c3d9e8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
