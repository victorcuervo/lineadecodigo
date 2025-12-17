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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6DWEQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0GUEfI3WJ4nQ3mT14mBpw4vZwsHxHHckmYs6y7i7adAiEApLiBmgemnkRx3Cti6RZAkLccbBfIgZNHOfjsDlmK3lIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxkZU%2BJqJq5kCsuKCrcAzEaBhcIyAqi1Okqx6K25%2FscEc%2BBUkPe64OndYAXYOZnnWEjU%2B1nPA%2BQW9GaW4%2B0Ia%2Fc%2BvqqALxvlvL9x0NbVG%2BAih6cEtmlhyEJswt1N4pUXQTIjkbkda9nfxmqbNgcE1VC40j1w%2FdszivkQN%2BwKwJwpKtBSlkNG90ZD%2BByvF8m%2BbsO29XRIWNKasBWxXezHEsBudHU2Ykp8fr0oQLcnnwcdmkvLMw7fQyTxpyNO%2FWMxPFmi666PTRCjThFBexOwpYwBWIBp%2F7Zh9u4HTSa2VbsmoF3CUcfpMd%2BjIFmm%2BAESlZriRJSyyUty3dbU1eSj1Qwf7IjgS4KvqVPrTOqc%2B7FssE3ON5HOzr7iImoEByGrj1LoIe9mkwDNShBmGDUQAlE4Y7ADMFtdES464YpHl7gHFGliBI9UQHEvpJ%2B6vD6XEBWniXpoKPcbNTHzBBYxqz6t2%2Fx9d4VdNHEEGn4cejnCXSWI2mQCw2IU%2FYGr8f3X29fubiD04ICmvWQ5DuROnlrL8ZGvN2HVywCk6%2F6vQkTIvJd4egk%2BLE7cavRvvQseng%2Fx4AI5DsTDrT7tGNwcDzjGyuRhy%2F%2Fedef4ltPNCouJKmCEnbHDnWINb%2FFDZWF9VnpAY%2F8UTXaB7%2FRMJ2gi8oGOqUBFW0%2FCAdhQp%2FHGtNpM2eq5MndwMV%2FEdjOrFOppmiQrDicUHen2A6PysbvLxNRpn1d26RYNJlxNmosVVRWYHW1MHUwL6unD64lZoa7pAUzQzO5hlTQSyH8OY2ZuS%2BFObH7C1XQyLHVocMXEHQRW6nl3v6%2FuI75KgfIQx1QzwG9JcHNoiZGQkaxuscmUGyvo1POIlKUrKES1%2FUDzbvZhmd08kQKSO5G&X-Amz-Signature=13609d51bec6fafbde17804f1c7d3c3b0d7ffcd9cd868d19a08d868a4fc2e1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6DWEQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0GUEfI3WJ4nQ3mT14mBpw4vZwsHxHHckmYs6y7i7adAiEApLiBmgemnkRx3Cti6RZAkLccbBfIgZNHOfjsDlmK3lIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxkZU%2BJqJq5kCsuKCrcAzEaBhcIyAqi1Okqx6K25%2FscEc%2BBUkPe64OndYAXYOZnnWEjU%2B1nPA%2BQW9GaW4%2B0Ia%2Fc%2BvqqALxvlvL9x0NbVG%2BAih6cEtmlhyEJswt1N4pUXQTIjkbkda9nfxmqbNgcE1VC40j1w%2FdszivkQN%2BwKwJwpKtBSlkNG90ZD%2BByvF8m%2BbsO29XRIWNKasBWxXezHEsBudHU2Ykp8fr0oQLcnnwcdmkvLMw7fQyTxpyNO%2FWMxPFmi666PTRCjThFBexOwpYwBWIBp%2F7Zh9u4HTSa2VbsmoF3CUcfpMd%2BjIFmm%2BAESlZriRJSyyUty3dbU1eSj1Qwf7IjgS4KvqVPrTOqc%2B7FssE3ON5HOzr7iImoEByGrj1LoIe9mkwDNShBmGDUQAlE4Y7ADMFtdES464YpHl7gHFGliBI9UQHEvpJ%2B6vD6XEBWniXpoKPcbNTHzBBYxqz6t2%2Fx9d4VdNHEEGn4cejnCXSWI2mQCw2IU%2FYGr8f3X29fubiD04ICmvWQ5DuROnlrL8ZGvN2HVywCk6%2F6vQkTIvJd4egk%2BLE7cavRvvQseng%2Fx4AI5DsTDrT7tGNwcDzjGyuRhy%2F%2Fedef4ltPNCouJKmCEnbHDnWINb%2FFDZWF9VnpAY%2F8UTXaB7%2FRMJ2gi8oGOqUBFW0%2FCAdhQp%2FHGtNpM2eq5MndwMV%2FEdjOrFOppmiQrDicUHen2A6PysbvLxNRpn1d26RYNJlxNmosVVRWYHW1MHUwL6unD64lZoa7pAUzQzO5hlTQSyH8OY2ZuS%2BFObH7C1XQyLHVocMXEHQRW6nl3v6%2FuI75KgfIQx1QzwG9JcHNoiZGQkaxuscmUGyvo1POIlKUrKES1%2FUDzbvZhmd08kQKSO5G&X-Amz-Signature=a7c6c7ea7eb47a521f3da6aa4689c403853f557f75f057896adac33c17f1405b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
