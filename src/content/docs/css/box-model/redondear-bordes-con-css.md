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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJOYNM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bc1fKsQwqtEL7WFHp%2Bdnjw%2FZaZqFmyJ6TFMX8R3rQAIgZV%2FB2fVhTcQzZL9j0NEHOvSB8ZdE93IA%2FpAm6KO2hL4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCx81wt6V695AeZYTSrcA4ZJIRqQfK1khpNJyTtvVx5eMlVVH%2BJbeM2xhXL6EIjwbeKjvMjO58Ra83MqLOkXnvaf5sSjmR0CuXCmX0NywFJKeEPRhmgrE6bvyHuhCNyOpUYZkYL6mNfbep8XJrsGSFi5fhsupakIpN%2FKLzcmQYl2cZsrpwcw%2BM3v0OxwlSsk6UWVZHikm0k8d760N85bFDHt6iT%2B4%2FqvmzZQZgXmGUd%2BsGh4tWfrxXiE20iicx9dOmTGFFfXpCfJtZKsYINJC5N8apTY8zwcIK4gM9d%2FtpERWxBkm6QX76niFkI%2BPc1xaC6p3AE7KJgsITt44oQls82vtNXucYccalFLOU5b8Wm5g8E7a2O1x9Zk%2BmLGl2tmyJjrQspx%2FA%2BlZm8LycuR0qhkzzyg76%2Fgk48BAQosHVPVx%2F1EZ7l7SDFMjR82crstrTZnWdXTAWrW%2B67UFnQDMLKQHBeYDFWpJllVKKAOZ3OjfDQem84A6p2nWDC%2BDi9YsXITAn%2FP8Swj6HMtwD%2FlaXzc8N%2FM96ZFWpB5IP1%2FWY%2Fjjh0RzceWRuzcfaDEE2bBPehLpE0ZzuhGA8TB6vlSHEVbiINs%2Fvw3VOiLwhnLosmdvq8wUXrvzLC%2BVthcCglIbuVl%2B9wuapqE5c36MKXvicoGOqUBemdWpmVFV9DTka2odoFwt%2FhDpclmN5Fl7XD9meZ7qNr2cWILkptXrpO7tKWBpjsQ98BWBVRVMj1HhwtZ77V8kqHZsofEC%2B7aqRE%2BLMpLa%2BYNiZS%2FXiCKKgZtlo19AS%2Fw%2B7n7XHikFXsqtvtH0brNDk%2FJXBkuBPeDR2vmCp%2B5eTlLU1Wi9G5dxZroDKyICUOJjABb3iVHPd%2Bx2FjxkJrI2DxYn35k&X-Amz-Signature=8e0a2e739985553f9962631724a6bf3c14b84ebe2c7b27f9118f1360aff9c517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJOYNM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bc1fKsQwqtEL7WFHp%2Bdnjw%2FZaZqFmyJ6TFMX8R3rQAIgZV%2FB2fVhTcQzZL9j0NEHOvSB8ZdE93IA%2FpAm6KO2hL4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCx81wt6V695AeZYTSrcA4ZJIRqQfK1khpNJyTtvVx5eMlVVH%2BJbeM2xhXL6EIjwbeKjvMjO58Ra83MqLOkXnvaf5sSjmR0CuXCmX0NywFJKeEPRhmgrE6bvyHuhCNyOpUYZkYL6mNfbep8XJrsGSFi5fhsupakIpN%2FKLzcmQYl2cZsrpwcw%2BM3v0OxwlSsk6UWVZHikm0k8d760N85bFDHt6iT%2B4%2FqvmzZQZgXmGUd%2BsGh4tWfrxXiE20iicx9dOmTGFFfXpCfJtZKsYINJC5N8apTY8zwcIK4gM9d%2FtpERWxBkm6QX76niFkI%2BPc1xaC6p3AE7KJgsITt44oQls82vtNXucYccalFLOU5b8Wm5g8E7a2O1x9Zk%2BmLGl2tmyJjrQspx%2FA%2BlZm8LycuR0qhkzzyg76%2Fgk48BAQosHVPVx%2F1EZ7l7SDFMjR82crstrTZnWdXTAWrW%2B67UFnQDMLKQHBeYDFWpJllVKKAOZ3OjfDQem84A6p2nWDC%2BDi9YsXITAn%2FP8Swj6HMtwD%2FlaXzc8N%2FM96ZFWpB5IP1%2FWY%2Fjjh0RzceWRuzcfaDEE2bBPehLpE0ZzuhGA8TB6vlSHEVbiINs%2Fvw3VOiLwhnLosmdvq8wUXrvzLC%2BVthcCglIbuVl%2B9wuapqE5c36MKXvicoGOqUBemdWpmVFV9DTka2odoFwt%2FhDpclmN5Fl7XD9meZ7qNr2cWILkptXrpO7tKWBpjsQ98BWBVRVMj1HhwtZ77V8kqHZsofEC%2B7aqRE%2BLMpLa%2BYNiZS%2FXiCKKgZtlo19AS%2Fw%2B7n7XHikFXsqtvtH0brNDk%2FJXBkuBPeDR2vmCp%2B5eTlLU1Wi9G5dxZroDKyICUOJjABb3iVHPd%2Bx2FjxkJrI2DxYn35k&X-Amz-Signature=97873de3e03f0a2d7b0ac396681985ac6f1370a9224ca140b9b468de0d146de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
