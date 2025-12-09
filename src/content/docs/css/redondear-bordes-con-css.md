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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGRODSE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfT6ENWLnxEpxOVdqwoPjhxOzNKaerfcBDdM2nweUZKAiEAmJ%2BmckMeVAjRvcZpHRYwov%2BACNFTCNc9JRpaf0Pw%2BgcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0sq2Qd%2FH2f%2FmVs6ircAy1vlHnDaBhm%2BVx8X06gsqTA6k%2F8OT3ITvH1QNe3ctpovk5IGCrWYukvxUe9%2Bzii2GfzirYVOm2D0TGTyKTOBtAzyg1dbR2MaSqUM%2Bn4prSVatPLURC2l%2B9KMQavKN4e3%2BwBBhdyoFBozK2VlDRDKWDNjEDVdzzqL8DjXimnjGSK7k8fKPYWMA0N%2FLcmCrQMwzfZeOH5hnLtizBQk85c0xTr6D%2B4Iz14zd5UIo1Vt%2FsM%2BT4NszyLn7flL2WTeqxX2z0Tu1W0oJ2oGKGUwcLdfts%2FFzYXyY%2BBOnOThVzmuCdfSMGGJ4Xt7Om2uN2EmQdqlrZILKYS2C8%2F1I%2BVOEgeL%2BgS1oGvmR7bBGW6Gm0Kf%2F%2FNahQc4Xd5BxbqnwKlnjwbQxg%2FlHXBO4GpMrx6xMgMD2JiNuDrL1rDpnrNyh%2BQ9M6xNJqqvZcQm4U5kcsakGzWdLRAOiCaqlG1CXRtYV3Ia7q1gDVfWE0tdeSzYGH6DxoFyngp0UFuheVije9MbSeWVTDtYtqeL2uqw1s7SM19UU1JQBUyN0Ji1NlZ1qotyQvHeExpvpM3Rm%2FiKhGHOFZGEBMsHeLf08K1hvGYO7Up4BYpaks3puVEVcanZ55Idq9fF%2FhBjoqekXi80iiJMMel38kGOqUBQVxeDfXFIZ2MZMOIn%2Bt8arfui913DF1kvToPaFWtrdbyV%2FvQzPUJwZMOHO4q6VKMkmLvS1vI%2B999ydfDNBvqqToxlqXAmGRpEf41T3g58Vz4n%2FMG0g3lCntBuv3AWod9noJAIyw%2FpqgNq3p62r%2F0kB%2BmMLzocfhO%2FU4JFvhUZ37sxLJF6W7bOAPCDc9tEzRp3XkQe%2FPgRkNrchyuiRTiKoJn4klm&X-Amz-Signature=46e64dd637c37e0d00b472ac38ed303122ae661790830f933cad3bccad6041d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGRODSE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfT6ENWLnxEpxOVdqwoPjhxOzNKaerfcBDdM2nweUZKAiEAmJ%2BmckMeVAjRvcZpHRYwov%2BACNFTCNc9JRpaf0Pw%2BgcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0sq2Qd%2FH2f%2FmVs6ircAy1vlHnDaBhm%2BVx8X06gsqTA6k%2F8OT3ITvH1QNe3ctpovk5IGCrWYukvxUe9%2Bzii2GfzirYVOm2D0TGTyKTOBtAzyg1dbR2MaSqUM%2Bn4prSVatPLURC2l%2B9KMQavKN4e3%2BwBBhdyoFBozK2VlDRDKWDNjEDVdzzqL8DjXimnjGSK7k8fKPYWMA0N%2FLcmCrQMwzfZeOH5hnLtizBQk85c0xTr6D%2B4Iz14zd5UIo1Vt%2FsM%2BT4NszyLn7flL2WTeqxX2z0Tu1W0oJ2oGKGUwcLdfts%2FFzYXyY%2BBOnOThVzmuCdfSMGGJ4Xt7Om2uN2EmQdqlrZILKYS2C8%2F1I%2BVOEgeL%2BgS1oGvmR7bBGW6Gm0Kf%2F%2FNahQc4Xd5BxbqnwKlnjwbQxg%2FlHXBO4GpMrx6xMgMD2JiNuDrL1rDpnrNyh%2BQ9M6xNJqqvZcQm4U5kcsakGzWdLRAOiCaqlG1CXRtYV3Ia7q1gDVfWE0tdeSzYGH6DxoFyngp0UFuheVije9MbSeWVTDtYtqeL2uqw1s7SM19UU1JQBUyN0Ji1NlZ1qotyQvHeExpvpM3Rm%2FiKhGHOFZGEBMsHeLf08K1hvGYO7Up4BYpaks3puVEVcanZ55Idq9fF%2FhBjoqekXi80iiJMMel38kGOqUBQVxeDfXFIZ2MZMOIn%2Bt8arfui913DF1kvToPaFWtrdbyV%2FvQzPUJwZMOHO4q6VKMkmLvS1vI%2B999ydfDNBvqqToxlqXAmGRpEf41T3g58Vz4n%2FMG0g3lCntBuv3AWod9noJAIyw%2FpqgNq3p62r%2F0kB%2BmMLzocfhO%2FU4JFvhUZ37sxLJF6W7bOAPCDc9tEzRp3XkQe%2FPgRkNrchyuiRTiKoJn4klm&X-Amz-Signature=be7436d05b744fb09efadf5cea3d9131a8b58308aa63c286efa63fd48220bbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
