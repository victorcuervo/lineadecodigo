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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCR3ASK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCElsvimB7IEWzVlwhNnab%2BXngCCz4jClajQS6K2kOoLwIgB7wzxEvwQXO041dvI6xFb2Xjevi9vTX%2F79KTofVs0B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFCDApO%2B%2Bjf0rWPi8CrcA1x4%2FV7WH6Ec%2BdVOmpidQfv2daj9WM0JGnNU3FFmF7DCha%2F%2BuUwSsy9zVe3YBo2%2FqvdFxVKEXXGD12MlmQciYPf%2BrB%2BpqnjDJM2ciNtHNUoSMgw14HcS80O1M%2BAB8zxuCk709%2FQ2DLvxZwjrO4t6sjErPv0M0NMPAl3T%2FPxZviV4N1GSPUiI0y1tH18cyDZ7T995HTcMhIKwglvYO9LATaz%2FDR7IiMehRX3d1z7LyZ8wahGE8dA2uw1hkFjKUreU691UHjOK53EivRvkLS3lgMW%2BnviGW3eg2kpAM%2B%2BwAAZ2rfNHWYCBKPbBlJK57iHIY9DeAq82ZsP92s4k6Qz40ihOXIXparDEV8yKFyTuxXcPUz77Aw7mFMY5U7TE3YYLkNB7MPt3yFCPiysbBd2R18ZIzHkq%2FseUzTUJHdvNb13cxTlef5pzWkKgXoinHVZCOkQOrL7bVQ5vr5u8VLAoqcRLPOJCIFGWNBdlHbJArrWMsqxt1bv5zJz36%2BJiR6Yd02GFPxb41rEfDWQ2fad%2BDEYo7cJP%2BmGADmIWD9g7qidXFIO1FbSx%2BPtPcOdgD1zaVJnqHzuTBtiRNLUCVRM6WTjWhmKOW7PidnaGSMX8NSC78Nus6T0j9omx2WyGMLb9h8oGOqUBGoQa8bCeCjMTrxJ0mpY2VlSBbmFAez9H09Rd1hRKFbojuHTjgotaKLv2z8phY1V8E9wbx71nPKByThNpnx2tYsr%2BkHCxvnVQoYXCBDVUOH6ElAKKfM5pO36F8NTPPFD%2BAShZRjOL%2Fnf0tPxQ4IqTy0KGqRMHdcZpSExcj0LeXwzUr2s9XZt0OIGyFYl875wAcolGQrGymB8lvEGoCChOaxtsdJwI&X-Amz-Signature=589461779066ff8ca4223f210c99815620ffe978888324f1d7f6cfa5b208bfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCR3ASK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCElsvimB7IEWzVlwhNnab%2BXngCCz4jClajQS6K2kOoLwIgB7wzxEvwQXO041dvI6xFb2Xjevi9vTX%2F79KTofVs0B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFCDApO%2B%2Bjf0rWPi8CrcA1x4%2FV7WH6Ec%2BdVOmpidQfv2daj9WM0JGnNU3FFmF7DCha%2F%2BuUwSsy9zVe3YBo2%2FqvdFxVKEXXGD12MlmQciYPf%2BrB%2BpqnjDJM2ciNtHNUoSMgw14HcS80O1M%2BAB8zxuCk709%2FQ2DLvxZwjrO4t6sjErPv0M0NMPAl3T%2FPxZviV4N1GSPUiI0y1tH18cyDZ7T995HTcMhIKwglvYO9LATaz%2FDR7IiMehRX3d1z7LyZ8wahGE8dA2uw1hkFjKUreU691UHjOK53EivRvkLS3lgMW%2BnviGW3eg2kpAM%2B%2BwAAZ2rfNHWYCBKPbBlJK57iHIY9DeAq82ZsP92s4k6Qz40ihOXIXparDEV8yKFyTuxXcPUz77Aw7mFMY5U7TE3YYLkNB7MPt3yFCPiysbBd2R18ZIzHkq%2FseUzTUJHdvNb13cxTlef5pzWkKgXoinHVZCOkQOrL7bVQ5vr5u8VLAoqcRLPOJCIFGWNBdlHbJArrWMsqxt1bv5zJz36%2BJiR6Yd02GFPxb41rEfDWQ2fad%2BDEYo7cJP%2BmGADmIWD9g7qidXFIO1FbSx%2BPtPcOdgD1zaVJnqHzuTBtiRNLUCVRM6WTjWhmKOW7PidnaGSMX8NSC78Nus6T0j9omx2WyGMLb9h8oGOqUBGoQa8bCeCjMTrxJ0mpY2VlSBbmFAez9H09Rd1hRKFbojuHTjgotaKLv2z8phY1V8E9wbx71nPKByThNpnx2tYsr%2BkHCxvnVQoYXCBDVUOH6ElAKKfM5pO36F8NTPPFD%2BAShZRjOL%2Fnf0tPxQ4IqTy0KGqRMHdcZpSExcj0LeXwzUr2s9XZt0OIGyFYl875wAcolGQrGymB8lvEGoCChOaxtsdJwI&X-Amz-Signature=84b36db91baa8e9f70835063088b91e2a28ed987b360f9a08b5f9e88a2f2d1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
