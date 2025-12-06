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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FGQBLX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQkVKdnRAn%2BC3iVFFueHgtSLLiMI07GcWgIA7RhQsbRwIgDvxvs%2BEy8O0Pnc4KY4Mw2OgrZV2bLEb3Z%2FrTupqpD14q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDD%2BDdXmD85nwodoubCrcA3jLiaIEeDGXOy9m3umAFJi4GtuRirOXFlEgSljDzN4IjDsHQQ35bF%2B6ZSR5YyS6PZmecA3Tq5mFvul01T6tdpgyAAonZQsH6jTpt6ldea2lUwFB%2Baw4FTbi1CcKrgIGgi3k3csvhRzfPu938%2FDg7PqDZHKQc28lrB%2FRPPdIZBEs3bObD3gKwjsRKz4tce5ADv%2BMb4v5Ps3xfUPipitH53772gLdyji77HtTdcjWiL%2BgT5pkII40vpjGiCfADazi%2BYKSTaV9RSte54HjDU10zvWjJ584RlX6oiIfh6LRXkfF1cfEoxte%2FpTdmL%2BamK6uBVE6BCeC0izC0YYWEhd1IVgPc4OL%2BhnPBlhL49FpNXkNTRLE620zBa3EShUjiZLsi6YUr7m3QaIG4UnbSaf70jOenxdUt1P2Tnany1ItDnkr2r3oxcAOJXB1v%2BvVTetzBOcZF9MLP2HXwrNPZNlesubI%2Bufi7t9zbuHUUS1rXfqgYfBnFtjcAFlWHbB6%2Bh6gu0MIFOMJj3vU1CMpIUZJFBcPznyWSwMzwl%2BxkNXZ49pixdW8JekwnbsfIsQJ3ee2auDKSfjuOwT27eNr8s3Zm8iFjTWlDJm8xe6wiwh1Dhm1nYcXCqCidL%2BMWXPcMPPT0skGOqUB5Zd%2BstltumF5fk3qIm20ZHk2DLO%2F42PrHyeO5MsGC%2BRWLttVMddq9n3HxRzhHWx9%2B6Eao8j38%2B6c5S2tdz0qv25D2OxuyU0cPvivJFTfgjYRQONgZNYxDxRY4Cth6tRP3bgo7skPhAOFp%2BTSVK2jzk%2FnYrGxFEO4H6OJpOYeDD8y9%2FAdlTSfqn%2FGHkKngopMh0hFBOsyS4icvtdYhojwkImBx5Ex&X-Amz-Signature=6c831bf8bd5c94a5a5b7fc21d69281644cf852a2899d4d6b0fc6e2a8c944b7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FGQBLX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQkVKdnRAn%2BC3iVFFueHgtSLLiMI07GcWgIA7RhQsbRwIgDvxvs%2BEy8O0Pnc4KY4Mw2OgrZV2bLEb3Z%2FrTupqpD14q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDD%2BDdXmD85nwodoubCrcA3jLiaIEeDGXOy9m3umAFJi4GtuRirOXFlEgSljDzN4IjDsHQQ35bF%2B6ZSR5YyS6PZmecA3Tq5mFvul01T6tdpgyAAonZQsH6jTpt6ldea2lUwFB%2Baw4FTbi1CcKrgIGgi3k3csvhRzfPu938%2FDg7PqDZHKQc28lrB%2FRPPdIZBEs3bObD3gKwjsRKz4tce5ADv%2BMb4v5Ps3xfUPipitH53772gLdyji77HtTdcjWiL%2BgT5pkII40vpjGiCfADazi%2BYKSTaV9RSte54HjDU10zvWjJ584RlX6oiIfh6LRXkfF1cfEoxte%2FpTdmL%2BamK6uBVE6BCeC0izC0YYWEhd1IVgPc4OL%2BhnPBlhL49FpNXkNTRLE620zBa3EShUjiZLsi6YUr7m3QaIG4UnbSaf70jOenxdUt1P2Tnany1ItDnkr2r3oxcAOJXB1v%2BvVTetzBOcZF9MLP2HXwrNPZNlesubI%2Bufi7t9zbuHUUS1rXfqgYfBnFtjcAFlWHbB6%2Bh6gu0MIFOMJj3vU1CMpIUZJFBcPznyWSwMzwl%2BxkNXZ49pixdW8JekwnbsfIsQJ3ee2auDKSfjuOwT27eNr8s3Zm8iFjTWlDJm8xe6wiwh1Dhm1nYcXCqCidL%2BMWXPcMPPT0skGOqUB5Zd%2BstltumF5fk3qIm20ZHk2DLO%2F42PrHyeO5MsGC%2BRWLttVMddq9n3HxRzhHWx9%2B6Eao8j38%2B6c5S2tdz0qv25D2OxuyU0cPvivJFTfgjYRQONgZNYxDxRY4Cth6tRP3bgo7skPhAOFp%2BTSVK2jzk%2FnYrGxFEO4H6OJpOYeDD8y9%2FAdlTSfqn%2FGHkKngopMh0hFBOsyS4icvtdYhojwkImBx5Ex&X-Amz-Signature=91e9d2353b7f29e9cf45e230790ad3ceda8a41cedbb078a2db7e0fd23f0305a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
