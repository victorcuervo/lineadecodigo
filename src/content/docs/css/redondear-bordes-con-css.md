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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH22UM5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkUTGY76EQ8PCTDXkXN9ruVyKdUK%2BH%2F9xs3jq%2BlcFUcgIgPoC%2Fw1WiIlWzenBuJndPntdQ476CFkqZCkmBj8FqCWkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQUhj759jMg7ToJFyrcA01E9lbjbYyAjfIwZSlj7PXofGaI647wxSzeNN%2Fnq%2BtpEctT5sKMeW4qnPiSr%2FE1LQx5Zju5%2FbYc1Z9VhgITYliB%2F%2B8GkiUadgVZq9enJqiAMUPhMx15n81osgzTFvXGl2U9OcosuPAsu5Yip2%2BuuILVfLYLXTm%2BvJuQqg%2BdpKoFSb7JBSc6IKSZHKr3Hxq0KxOnPo8dQC1%2BzFQ0%2BW3h%2B4J%2Fxkqv1Hl8%2BGocAWskTFWnKf5Vw1qtH%2FxNAFg5gvV5V26KSnluZ6CNnJ%2B30ei8mQkVweA5HPyVoVn0C8ynWBlkT6rgte0DtabTltnUnGmvuxh2EjCyn1xZvZWVcfdxItMBbyE3iOXcjTr%2B8g0wyA8aeyghcnpkHfrojTBXHrmIia%2B3VIHAQFmmxU2JWi0ENW6kmdzM6aY4kRqQBFizQ7IlFLC6RZxlpjZoFSlv0PnI%2F16sWB6%2Btac5Ab%2BX1OCL5Gak5apxl9lkxKZtJfLP%2Bn%2FgE4ddMoeYy7H7cnE3xLHvOF0Ha7gvkv%2FZj%2FrhgXbxgSrIUi2eukDE6hVWsf%2Fs3wYP4oKGL0rRmFrSXAnAslT1EC5CBu5jM5r0TyDbpmITmRdz0yxJJ3HARdWxKkkxIlvpa3C68cZWOijV9CX8MP%2FC3ckGOqUBfnPrU3LOlVFyUQfEnH%2Fio2QXBC%2Fq7B8yxvp34nBHb143O82hAq2ogsmQyUgpDVjyyyP%2BUYARRlVBky498hf90VUaM7pUpiK24OufkWDykOxnx1y%2ByN0WOeTraw%2BynLhURA%2Fq1i2ZU4me6b0FosMupg3bFh%2F1IbvJDmYqEN5FJjCrTZC490n8Jkc14t6yFPW56Zk5B%2FyqWOK3JWWzw1VIebJTVKpE&X-Amz-Signature=53b7d10d433b3697b8ab38cccf458c370cbbf195b6c181a835ae07e8100e8baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH22UM5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkUTGY76EQ8PCTDXkXN9ruVyKdUK%2BH%2F9xs3jq%2BlcFUcgIgPoC%2Fw1WiIlWzenBuJndPntdQ476CFkqZCkmBj8FqCWkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQUhj759jMg7ToJFyrcA01E9lbjbYyAjfIwZSlj7PXofGaI647wxSzeNN%2Fnq%2BtpEctT5sKMeW4qnPiSr%2FE1LQx5Zju5%2FbYc1Z9VhgITYliB%2F%2B8GkiUadgVZq9enJqiAMUPhMx15n81osgzTFvXGl2U9OcosuPAsu5Yip2%2BuuILVfLYLXTm%2BvJuQqg%2BdpKoFSb7JBSc6IKSZHKr3Hxq0KxOnPo8dQC1%2BzFQ0%2BW3h%2B4J%2Fxkqv1Hl8%2BGocAWskTFWnKf5Vw1qtH%2FxNAFg5gvV5V26KSnluZ6CNnJ%2B30ei8mQkVweA5HPyVoVn0C8ynWBlkT6rgte0DtabTltnUnGmvuxh2EjCyn1xZvZWVcfdxItMBbyE3iOXcjTr%2B8g0wyA8aeyghcnpkHfrojTBXHrmIia%2B3VIHAQFmmxU2JWi0ENW6kmdzM6aY4kRqQBFizQ7IlFLC6RZxlpjZoFSlv0PnI%2F16sWB6%2Btac5Ab%2BX1OCL5Gak5apxl9lkxKZtJfLP%2Bn%2FgE4ddMoeYy7H7cnE3xLHvOF0Ha7gvkv%2FZj%2FrhgXbxgSrIUi2eukDE6hVWsf%2Fs3wYP4oKGL0rRmFrSXAnAslT1EC5CBu5jM5r0TyDbpmITmRdz0yxJJ3HARdWxKkkxIlvpa3C68cZWOijV9CX8MP%2FC3ckGOqUBfnPrU3LOlVFyUQfEnH%2Fio2QXBC%2Fq7B8yxvp34nBHb143O82hAq2ogsmQyUgpDVjyyyP%2BUYARRlVBky498hf90VUaM7pUpiK24OufkWDykOxnx1y%2ByN0WOeTraw%2BynLhURA%2Fq1i2ZU4me6b0FosMupg3bFh%2F1IbvJDmYqEN5FJjCrTZC490n8Jkc14t6yFPW56Zk5B%2FyqWOK3JWWzw1VIebJTVKpE&X-Amz-Signature=4fa097a0a2e515da501f52aa1d3fab2122b584f1c8e777c7fa6c15efeeeb00b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
