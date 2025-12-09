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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT22SXU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpnEB4jmPLFF%2BqllEzFwKOfTHzLFoXVWhSSEBjW%2FzQ3AiEAz4FEsT7TFLtaW%2Bn5cMl7H4IqbmmtNHeUjL3AYwXle50qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5OsNT3e0pkM2ixgircA3Vm%2FuMmGPBbWa4uAAEMz4%2BEIDeCD3iXbJ7v0PgRjzKSOhiVsCD3BZMhqEB9CFXmz7GLf6PAc8AVQw32LW%2FwPRD9MJktQ06wwlc4JyRlNlCllXMPowy7f5MN%2BUcI6mKxFmUT8SMEsWngaR3%2BiBUok7OZYh5D1OD3q1%2F0O2w9b4NPZ1YXm9WNhW5xQ5PH9PjiJUMox50mNSFeUDVgcKJYa2CaECk%2FMUrvdIwjO3qDTBk9ySHB0uiPMMaVV8UN6DUAgjXQVEKUBzsNSpRcuCrLLVDoovTuSrU5zb%2BblfG6pdHQd9R%2FzBUsEZbwn56JzGmiF%2BdhiZ9DA4cGk7VvyqB1%2FpQLrmFlo5Zzp1GIFW64aJDap4BKIrPwudyfjfdTroobVd3q6XmnahkNCdU4rtHrgQS8HmUzFL3VW6zk6xX2DB04dO%2FuE46u6ehIEun17YCI8mgZbp%2FTEA4v1KrOHcrbtvCPD%2Fy%2B%2F8NthOuaw1ejJwUGwlvRr0paMEFBcZ0ilOsXuk2V8LViA8RUvIATA1%2BUPMP5EBL%2FVhe3WK4ihYad%2BRYfsvguLWDrn7mfMjWTDskkJnPYSML7PAbaorjQZ9LYabCHsseu1Sgbi%2BQAdEb3WmADnm3ZKq6jPo%2BXDwSoMMCQ3skGOqUBO98p%2B%2F%2FsCKDg%2BRGHU%2BtmVNjLQ2G35GAAhMj%2B2HpCIavMyMe5d8t%2FcmZkJ025dLlOZHkON9UicxraPA%2FMUBdAdwYUNMJS54quDpLdSiIm9V9hoy%2F2ES%2F9gtCRmZYBVvllexXkO8KNNhGMgSkHVhUZDTHZr%2Bt41USXnB3c%2FbQ2NPYWDmrh9WCvetJWVyv9mpuqyNXq%2B7NYzSDHlFXt9c3gTuzLcORP&X-Amz-Signature=3d2228a24ce94d43d33d2401f2c6e9e2807300dc985bf2b0dd07d9c656951817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT22SXU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpnEB4jmPLFF%2BqllEzFwKOfTHzLFoXVWhSSEBjW%2FzQ3AiEAz4FEsT7TFLtaW%2Bn5cMl7H4IqbmmtNHeUjL3AYwXle50qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5OsNT3e0pkM2ixgircA3Vm%2FuMmGPBbWa4uAAEMz4%2BEIDeCD3iXbJ7v0PgRjzKSOhiVsCD3BZMhqEB9CFXmz7GLf6PAc8AVQw32LW%2FwPRD9MJktQ06wwlc4JyRlNlCllXMPowy7f5MN%2BUcI6mKxFmUT8SMEsWngaR3%2BiBUok7OZYh5D1OD3q1%2F0O2w9b4NPZ1YXm9WNhW5xQ5PH9PjiJUMox50mNSFeUDVgcKJYa2CaECk%2FMUrvdIwjO3qDTBk9ySHB0uiPMMaVV8UN6DUAgjXQVEKUBzsNSpRcuCrLLVDoovTuSrU5zb%2BblfG6pdHQd9R%2FzBUsEZbwn56JzGmiF%2BdhiZ9DA4cGk7VvyqB1%2FpQLrmFlo5Zzp1GIFW64aJDap4BKIrPwudyfjfdTroobVd3q6XmnahkNCdU4rtHrgQS8HmUzFL3VW6zk6xX2DB04dO%2FuE46u6ehIEun17YCI8mgZbp%2FTEA4v1KrOHcrbtvCPD%2Fy%2B%2F8NthOuaw1ejJwUGwlvRr0paMEFBcZ0ilOsXuk2V8LViA8RUvIATA1%2BUPMP5EBL%2FVhe3WK4ihYad%2BRYfsvguLWDrn7mfMjWTDskkJnPYSML7PAbaorjQZ9LYabCHsseu1Sgbi%2BQAdEb3WmADnm3ZKq6jPo%2BXDwSoMMCQ3skGOqUBO98p%2B%2F%2FsCKDg%2BRGHU%2BtmVNjLQ2G35GAAhMj%2B2HpCIavMyMe5d8t%2FcmZkJ025dLlOZHkON9UicxraPA%2FMUBdAdwYUNMJS54quDpLdSiIm9V9hoy%2F2ES%2F9gtCRmZYBVvllexXkO8KNNhGMgSkHVhUZDTHZr%2Bt41USXnB3c%2FbQ2NPYWDmrh9WCvetJWVyv9mpuqyNXq%2B7NYzSDHlFXt9c3gTuzLcORP&X-Amz-Signature=cdcd12ff4c63e45eedec6558b6bc0cf5ea78896fa08504233101a1c0dbe2ed4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
