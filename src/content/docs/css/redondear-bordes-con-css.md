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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKX35QKF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDa4yc13wafox6kEty88qbF4%2FNfDWO0%2BN9nMe0T2AxZIAIhAO%2FF%2FSBymTXblU6E%2BM%2B%2BRl%2Bwt2uCKME3r%2Fn%2BKb%2FDLonkKv8DCEAQABoMNjM3NDIzMTgzODA1Igy9BFoaE%2FkxMfxKXhgq3AOhykgEzynFzmvkUSZQ%2BgIYlphjYPvNg1t%2B41uwxQiRhWpgL70omnIItfGFiC6qiXSTvu9kZSdA%2FWkRkAaKolPISBBAo21dG%2Bmxa19nKbrzG5oDTxAopuA1VylhcbqRK5n%2B43RK7TnYBRVDFrZUGyz1LJjkCw8mB7CASKqTP8XIK3MNdH2Q7Lmy4dOM%2FuIN4IpOkDEC8IrDglQ1dwuYPnc4CT0d2VSjNHM4OFLHHIN2qc6dpBjm%2BHdfvIs9s0CN2Sci9NAXsgUfd8qJNy1vdBxFN03r8Cw%2Fp1IteS3ARdvKFLH1xuaGVhlpulB49D7g1FDJTOaWo2f92BNgDhRTmHTZWnv5YsyDvzi9g1C2%2BXLG8K3IH1oY0FTu1llGPaAX2tDuoMs%2FOHQqQyG7UeIrp%2FYBDi5yvpTEzbmOG%2FjnATnHEwcXI06lY7aqkm1Rwf1TWEwOlKRCVbKMDmOIm28XW5l5kSvxas72%2B5FQU6B5SZ75QcT79DA3VVp63Lv7EJbupi4NY1VlgP%2FBptXrrmuJOMR46NIXpC9l%2F3KylV%2B4%2FE%2FbMk5PN0MRVeDvDdhg7JKgtyc9BY%2BmJwl0oLLQiJZI2uV5AocIs99o2qlWTNnYZDjKyuq0BD62uyxNM4IdzzCI6MTJBjqkAfmt8i3YlJlayL6mNTj8xvEtTw9KsUclxIZRH0oEx1SS8AGCwQNexQ9WdzAAqVbXrcaYdL%2Fw0zIXT0Hcwb1tM3XvxGUCwlsL%2BYdTkARCRUegmoM%2BY7JFxIH3%2FqWh0%2FxdYRuIZNQ7OHq2s3OBwen0NKIXPRarNe9zLuk2jOqAmi91RETjz8zxLT6fANL1lGHm574Rt%2F7z7mBg286jWe7tdhFsPzWo&X-Amz-Signature=e1b7df14a69fab5c3e89219361d8d837665fe4d4a297526a32af3d4ec580eb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKX35QKF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDa4yc13wafox6kEty88qbF4%2FNfDWO0%2BN9nMe0T2AxZIAIhAO%2FF%2FSBymTXblU6E%2BM%2B%2BRl%2Bwt2uCKME3r%2Fn%2BKb%2FDLonkKv8DCEAQABoMNjM3NDIzMTgzODA1Igy9BFoaE%2FkxMfxKXhgq3AOhykgEzynFzmvkUSZQ%2BgIYlphjYPvNg1t%2B41uwxQiRhWpgL70omnIItfGFiC6qiXSTvu9kZSdA%2FWkRkAaKolPISBBAo21dG%2Bmxa19nKbrzG5oDTxAopuA1VylhcbqRK5n%2B43RK7TnYBRVDFrZUGyz1LJjkCw8mB7CASKqTP8XIK3MNdH2Q7Lmy4dOM%2FuIN4IpOkDEC8IrDglQ1dwuYPnc4CT0d2VSjNHM4OFLHHIN2qc6dpBjm%2BHdfvIs9s0CN2Sci9NAXsgUfd8qJNy1vdBxFN03r8Cw%2Fp1IteS3ARdvKFLH1xuaGVhlpulB49D7g1FDJTOaWo2f92BNgDhRTmHTZWnv5YsyDvzi9g1C2%2BXLG8K3IH1oY0FTu1llGPaAX2tDuoMs%2FOHQqQyG7UeIrp%2FYBDi5yvpTEzbmOG%2FjnATnHEwcXI06lY7aqkm1Rwf1TWEwOlKRCVbKMDmOIm28XW5l5kSvxas72%2B5FQU6B5SZ75QcT79DA3VVp63Lv7EJbupi4NY1VlgP%2FBptXrrmuJOMR46NIXpC9l%2F3KylV%2B4%2FE%2FbMk5PN0MRVeDvDdhg7JKgtyc9BY%2BmJwl0oLLQiJZI2uV5AocIs99o2qlWTNnYZDjKyuq0BD62uyxNM4IdzzCI6MTJBjqkAfmt8i3YlJlayL6mNTj8xvEtTw9KsUclxIZRH0oEx1SS8AGCwQNexQ9WdzAAqVbXrcaYdL%2Fw0zIXT0Hcwb1tM3XvxGUCwlsL%2BYdTkARCRUegmoM%2BY7JFxIH3%2FqWh0%2FxdYRuIZNQ7OHq2s3OBwen0NKIXPRarNe9zLuk2jOqAmi91RETjz8zxLT6fANL1lGHm574Rt%2F7z7mBg286jWe7tdhFsPzWo&X-Amz-Signature=7f814dac75ddaf051a6e52d4f349922d5034fef0ba1d955f3cab0f6bcfd15e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
