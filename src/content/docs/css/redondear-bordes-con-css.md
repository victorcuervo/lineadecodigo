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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMR3C43%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL7QIBbjciyPtMO5MY1sXIIUzaWnDSZss4mUWmcuKlZAiEAjOjJWtf%2FqTu1Bp8wPphi7i19c6%2FSp5qcKUmi1PV6hyMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjSznIXghXZ2WtMMSrcA6jLnr7oe%2F2y%2FEKAqkeG6iYGfnHlUX2Wm%2FX%2Ftbf4i40V78DaF3Epmc3CN6%2BxLoHnn6erOtoYTGrESyc1xJSaucuKMY9CzBNh%2BTWzIQga%2Bp1aH%2FII4NMMiKEP9wn8aAY7HRUEYVQAMFN%2BUal0gTVCmrvyMz82yZMV6QaK9pypquoMTKaunz9MYcXBFPnNiM9VprJBZM1HIRNJ%2F6NUx71b10YekeMO0M3LFPolFB6r7cnBwF7b3Y7POcas%2BIhQIy5az6%2BKBiR%2BYkY2F5vLR5sf1WvPgGYBn3KrETCorjTZcxRpXm7Z2mcaBcwfqCvZaFIOF%2FqZ9pHUHU8MV5oamVd71gp2xGm9XAay1K98l0UI4QZsFhiyyDfikobHdrkMk8anBRrsYgBTtlDDcf2IGT8VLJaeBZiw3ciesrLMQWxNl4SnnMCeo%2BJ0a9X%2FThXiTaTK33BOIXLe7NC2ZD500C%2FtUfD1NKMz2s89n4DAiwfTlNkehVhbuKoTxK7AESLk%2FbgDyW0S8dt9DlfMvsZTem3DrmJGKlhahz7fuX2MXzRQgMyM0G6rs1%2B%2F6p%2BN%2FltcSEfubVrzm9EM9bnVup0M40my%2FOlJb2%2BgImAzpaKjJ1%2BnJ669Gl%2BkzBqLvGUWcEhSMM%2Fk28kGOqUBO7Mp8g9lS8ah8WxUWz%2FhtL0JUGXJEqlzSQj9baeo5nBjBuij%2F1v78ptj6VxCNT%2F7yqPCGU%2FqoA4Ti9OxrftZdqHvTMfxb8DQx%2FVlZv7Gfo35bWDZjTlvpXq7sXLotuJyo1XSkyDLrtGWciF26yoTozw3MzFAKLsupvS%2BDIANNEB9HWnesNMSlYs%2FqDlNQ7j8ZpsR7Tx0j9PS5NB%2FKM7zKkDE9vKB&X-Amz-Signature=da154cef2e58bfcd9fe03d2ee178cecacec693545f408d02b5a3996a6dcfa711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMR3C43%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL7QIBbjciyPtMO5MY1sXIIUzaWnDSZss4mUWmcuKlZAiEAjOjJWtf%2FqTu1Bp8wPphi7i19c6%2FSp5qcKUmi1PV6hyMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjSznIXghXZ2WtMMSrcA6jLnr7oe%2F2y%2FEKAqkeG6iYGfnHlUX2Wm%2FX%2Ftbf4i40V78DaF3Epmc3CN6%2BxLoHnn6erOtoYTGrESyc1xJSaucuKMY9CzBNh%2BTWzIQga%2Bp1aH%2FII4NMMiKEP9wn8aAY7HRUEYVQAMFN%2BUal0gTVCmrvyMz82yZMV6QaK9pypquoMTKaunz9MYcXBFPnNiM9VprJBZM1HIRNJ%2F6NUx71b10YekeMO0M3LFPolFB6r7cnBwF7b3Y7POcas%2BIhQIy5az6%2BKBiR%2BYkY2F5vLR5sf1WvPgGYBn3KrETCorjTZcxRpXm7Z2mcaBcwfqCvZaFIOF%2FqZ9pHUHU8MV5oamVd71gp2xGm9XAay1K98l0UI4QZsFhiyyDfikobHdrkMk8anBRrsYgBTtlDDcf2IGT8VLJaeBZiw3ciesrLMQWxNl4SnnMCeo%2BJ0a9X%2FThXiTaTK33BOIXLe7NC2ZD500C%2FtUfD1NKMz2s89n4DAiwfTlNkehVhbuKoTxK7AESLk%2FbgDyW0S8dt9DlfMvsZTem3DrmJGKlhahz7fuX2MXzRQgMyM0G6rs1%2B%2F6p%2BN%2FltcSEfubVrzm9EM9bnVup0M40my%2FOlJb2%2BgImAzpaKjJ1%2BnJ669Gl%2BkzBqLvGUWcEhSMM%2Fk28kGOqUBO7Mp8g9lS8ah8WxUWz%2FhtL0JUGXJEqlzSQj9baeo5nBjBuij%2F1v78ptj6VxCNT%2F7yqPCGU%2FqoA4Ti9OxrftZdqHvTMfxb8DQx%2FVlZv7Gfo35bWDZjTlvpXq7sXLotuJyo1XSkyDLrtGWciF26yoTozw3MzFAKLsupvS%2BDIANNEB9HWnesNMSlYs%2FqDlNQ7j8ZpsR7Tx0j9PS5NB%2FKM7zKkDE9vKB&X-Amz-Signature=f83fc50278d68eddeda5a4db39d393a57d7b3bb4fc650cf90a56b9d1b9e9baa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
