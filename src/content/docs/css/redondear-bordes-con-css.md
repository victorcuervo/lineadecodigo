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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGTWL6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGbKoGmadFPqBMmTFrFWf%2FfGlfCYNrG441fdnjCeArQIgGO%2BYh%2FXsKCh1k%2FLZxmjkujVNf%2BWHt3yx5bIpMtXNxhcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8fbidgjOoP0GKcyircA25mO5ah8xmg31zekp77H5%2FBR6Qoy%2F%2BEOOb5j%2FtyZedCYnJNRO7%2FOLlv%2F3g89V4b9MxFDe09pPxe9cRM8%2FRW2Y7olv4hNO3C7A8Jj%2FnxWGbRvqqF5EVCoesEoMzGaYVVXSEZsVmfJcSYXFsFo%2F97LLgfxcOTLDZaCliJPU4AQxciCJMKBIFCFedpdAsVc0PgfRLRO1bvfTxU3FynGQW%2Bx4liOkktDlMfH7ZNj26FNZPDzZXUoNvDXVk0tNXctWcNTzFcb7g95X6pKlBGQDqyNnzuHmRGDrJVJv6MnJKEuE43Hfra634DJIAvzLU%2FY7%2FN4j4swgP%2BlCpxYEWD8Ea6AsUIX3pQgwDtWJAvXeHzglWvuyovNJrwAANvpnHEJDZzQ64N3rLRECXEeyKiZBC6RH%2BIWl4Xy%2Fqy8ftzNjjQN4Fthab5BvlHJ5SucH1fOUwWq8lnm5OLQOrvv1sYaW8iAWrqFeGdqwLqR4FqFvuPQ9oYTiYsFpe4EUfAInM3f9OzGbyZUsdRWMbTZalWaOK59a1Xfmcu6PN8MKbRX%2FajF%2BCTRzy0X%2BROZCvywsjjUanbf9%2B00cpUoc%2FKg2DR3y8%2BbHPjj1AiD1c%2BGPRafMwMB%2Fm7%2FcwrvY84JgIpVx1XMKrk28kGOqUBXyfiKtYvqjeHJocHf3mKWFh0Qx4tnwC1Wyogb8kgF5ln81vV9k%2B%2BD8muVOLO9djlrSp1DF56dVVlAYeamxZB8zWHgZARFbyrd2dn7FgBjJeMVyvNF1tuX0CVjc9uareqZTh8cBgYd%2BkydEUUS2U2I2aDvhxYPsQ%2BP7GdZSJl3eQFXCbKazUzyDckoB%2F18nbArWr6FmebJ%2FJBi9EnBRVRCk8FSbuj&X-Amz-Signature=8993a62e71e2f0baaf09e98b6d6b9bd0007ab4ac79933e0148238cd341c37279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGTWL6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGbKoGmadFPqBMmTFrFWf%2FfGlfCYNrG441fdnjCeArQIgGO%2BYh%2FXsKCh1k%2FLZxmjkujVNf%2BWHt3yx5bIpMtXNxhcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8fbidgjOoP0GKcyircA25mO5ah8xmg31zekp77H5%2FBR6Qoy%2F%2BEOOb5j%2FtyZedCYnJNRO7%2FOLlv%2F3g89V4b9MxFDe09pPxe9cRM8%2FRW2Y7olv4hNO3C7A8Jj%2FnxWGbRvqqF5EVCoesEoMzGaYVVXSEZsVmfJcSYXFsFo%2F97LLgfxcOTLDZaCliJPU4AQxciCJMKBIFCFedpdAsVc0PgfRLRO1bvfTxU3FynGQW%2Bx4liOkktDlMfH7ZNj26FNZPDzZXUoNvDXVk0tNXctWcNTzFcb7g95X6pKlBGQDqyNnzuHmRGDrJVJv6MnJKEuE43Hfra634DJIAvzLU%2FY7%2FN4j4swgP%2BlCpxYEWD8Ea6AsUIX3pQgwDtWJAvXeHzglWvuyovNJrwAANvpnHEJDZzQ64N3rLRECXEeyKiZBC6RH%2BIWl4Xy%2Fqy8ftzNjjQN4Fthab5BvlHJ5SucH1fOUwWq8lnm5OLQOrvv1sYaW8iAWrqFeGdqwLqR4FqFvuPQ9oYTiYsFpe4EUfAInM3f9OzGbyZUsdRWMbTZalWaOK59a1Xfmcu6PN8MKbRX%2FajF%2BCTRzy0X%2BROZCvywsjjUanbf9%2B00cpUoc%2FKg2DR3y8%2BbHPjj1AiD1c%2BGPRafMwMB%2Fm7%2FcwrvY84JgIpVx1XMKrk28kGOqUBXyfiKtYvqjeHJocHf3mKWFh0Qx4tnwC1Wyogb8kgF5ln81vV9k%2B%2BD8muVOLO9djlrSp1DF56dVVlAYeamxZB8zWHgZARFbyrd2dn7FgBjJeMVyvNF1tuX0CVjc9uareqZTh8cBgYd%2BkydEUUS2U2I2aDvhxYPsQ%2BP7GdZSJl3eQFXCbKazUzyDckoB%2F18nbArWr6FmebJ%2FJBi9EnBRVRCk8FSbuj&X-Amz-Signature=6304f947cf1114aa369eaaed15073741bdbbe0e7ee58251e9374e8e7be724a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
