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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FI2KH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQx3c0wld4YwXdoRlezu1c2vtYR9492CKq3dUCG2aRuQIgWMWFYiGyVEm2Mc1BsFITzEmkPeVmSudhLzyvRrsUs4gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzjZHlIDVm4tF5pwyrcA0AdTtTW2UYud1Qv7p20PjnyclQe2g7JdRcbym1vTkD7aLTDZbo1%2BJoETqdB7oiaafDKEQv1kRFW6ux5f6ytR01k0GQGS0IVf9XIpB6phE1gupB46CizR6pFKZlEcg8%2FaZg4WN4pWLhaacQ8Lv2YJLZFR0DhF%2BmyM4WMQ5x3v4IRq%2FDx8oqDvmmZp3Hk4yFliS631LhDpQQ%2F069oGx58PbUA6jDgK6KUlC2a94%2BjN%2BTSUXQLb2Fx%2FzxRRajen9d806LUkFlBoz58qUxLvZvUg5EPYP6EWlmdQUbBQ4dJe29cT8i3Z9TkmfognrcGLAcZTst7R7gr4SKs1VWw%2F6POuKFuzZXhdgn3sJfvVJz9GW4hf00It0ZcXuMBnZwXMGmC%2B%2FBEUi%2F54Ng1RXGSdwdHzNdUhi6zBAQFGfp1BSBCLUUAEnY8wVGjfEY0XUKyCY%2BM4Y6MS0ZSD4YOp9%2F%2FjvusL7pzx%2FMjNsabfCB0XJvr5MtP7yeZi%2FRexIOrhhrF0a3EaisRApExUqrh7XibkABhM5evFwZxeshqKmFXL8LPux1T4Zq3AF9QwbfFurvh2He8Hgm1tqR8kemclXuZBdVaamycodLFZR%2FFPFwANOfxrJ2nNBhJ%2FcNGjqzOWDR%2BMNWA3ckGOqUB4zRSmLw5Y6nPqRnNbg2%2Fa2BPmJdEZXtCOF2MQ2bhml4L%2FV6tk4Fa2GWHA0BF2rRXyL5Ea9aGl525UT5aFaYGE%2FE09f1PJ6SjmMTUFno0%2B0RMiNFSP1dEDj7BvRtwYvMX4YCCKbfa39SF7lTPIvpaEdkBi0%2FX61JVw9hzJ634xlxffr40lWQHErP%2Fmz66ZC%2BX9hgjdmjnCQuroMrEBuv5GLM%2F%2BBm%2B&X-Amz-Signature=102e855f50fdeef1bccf20e81b616c0a03d360e142d199b8aa9e5cce1e1a2e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FI2KH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQx3c0wld4YwXdoRlezu1c2vtYR9492CKq3dUCG2aRuQIgWMWFYiGyVEm2Mc1BsFITzEmkPeVmSudhLzyvRrsUs4gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzjZHlIDVm4tF5pwyrcA0AdTtTW2UYud1Qv7p20PjnyclQe2g7JdRcbym1vTkD7aLTDZbo1%2BJoETqdB7oiaafDKEQv1kRFW6ux5f6ytR01k0GQGS0IVf9XIpB6phE1gupB46CizR6pFKZlEcg8%2FaZg4WN4pWLhaacQ8Lv2YJLZFR0DhF%2BmyM4WMQ5x3v4IRq%2FDx8oqDvmmZp3Hk4yFliS631LhDpQQ%2F069oGx58PbUA6jDgK6KUlC2a94%2BjN%2BTSUXQLb2Fx%2FzxRRajen9d806LUkFlBoz58qUxLvZvUg5EPYP6EWlmdQUbBQ4dJe29cT8i3Z9TkmfognrcGLAcZTst7R7gr4SKs1VWw%2F6POuKFuzZXhdgn3sJfvVJz9GW4hf00It0ZcXuMBnZwXMGmC%2B%2FBEUi%2F54Ng1RXGSdwdHzNdUhi6zBAQFGfp1BSBCLUUAEnY8wVGjfEY0XUKyCY%2BM4Y6MS0ZSD4YOp9%2F%2FjvusL7pzx%2FMjNsabfCB0XJvr5MtP7yeZi%2FRexIOrhhrF0a3EaisRApExUqrh7XibkABhM5evFwZxeshqKmFXL8LPux1T4Zq3AF9QwbfFurvh2He8Hgm1tqR8kemclXuZBdVaamycodLFZR%2FFPFwANOfxrJ2nNBhJ%2FcNGjqzOWDR%2BMNWA3ckGOqUB4zRSmLw5Y6nPqRnNbg2%2Fa2BPmJdEZXtCOF2MQ2bhml4L%2FV6tk4Fa2GWHA0BF2rRXyL5Ea9aGl525UT5aFaYGE%2FE09f1PJ6SjmMTUFno0%2B0RMiNFSP1dEDj7BvRtwYvMX4YCCKbfa39SF7lTPIvpaEdkBi0%2FX61JVw9hzJ634xlxffr40lWQHErP%2Fmz66ZC%2BX9hgjdmjnCQuroMrEBuv5GLM%2F%2BBm%2B&X-Amz-Signature=aab414faeb138c2161114ee4e4cedc14303b1dec2640543d63838fff10176f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
