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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYXHMJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMXxiet%2FPTpnLI9UUvqPj1CWhYJfl9ZPQtmqWUK40%2BVwIhAIieR4rU%2BodoSkcPBr%2BRH9o2VVj3zMFHnEsVwb5XWKFvKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwcGc97L%2FkVsLuaOEq3ANadMfjc86HZJWOkRmOrcRLDn%2FQszo8rufuJlEWipF%2BV%2BswuNDdUZLsJ0isEgYGMQAvYFPqqJKbQpe9znzR1sydrnM%2Fc2VqkOSHY3BpSB1JZLOzb2g7GhPvfIqjVrIRH9iSfaLQDIYF2SRWkT5WOJFpLEzcjFPH5cRVSeUmpG4HIW7Hyp07YIR36K1yVOvTiSBg5iat3Al%2FEGT9iP9Zz%2BAZosPoFsZo06KuAPeA4PXjSd2AuhXMEYSP8Z%2B9YPQBCCpLBblmDuLJkqbQDIZbBXTdaBrogDDxw%2FvMakCLlheAZnwA1rhQrLgETtq3Ov1l9P8p41yiOyTWf4Bmmmwnbv1ophu3Ffgo%2BX%2BtGXzeaB8CinRI2RbfetzIJFpWAmLwQvdDELiiCEY0AhtvXLUy5DErAn2PtaUiZU0EISM%2Fd8cDx3WQvIWCY7R2BiqPy966rxKlwLWWen45fojqhDSYwj04oSgzVvVE3%2BT%2FsJnXrbiWotfaWRUeEkwjqYYBThXjAxWzMZ2ebDm6gHtM8n47ozFSpCMykha97SJO4xZ3Gf4CzzYOlcod5EFnVDz6VKYjfHDIGtWzc2pKymun4mYXeF7Bi7KvYedEuSr1zYkgXK7Q8C7R3%2BoHbD8NNSYeCDDo%2FdLJBjqkAfUk%2BVmWmLBhcImYjRrVVFxYrYYmGxD83dLW%2Bz5Ez5j4KsFm7FlFTzRwxVt4T6dEuOaUYuyCb0MU8bMtUozPcjZVoF1l5CIb4RuANS1%2FgQwpT5uNZ8rpSdzrrtYMgYBqLkpCWtXnK8EOSOpiMCRWJuH4nW9AftBprz8xlKYHXxcZWlrdL51EK9bo3Mmrxr192S9b%2FTsxTS68QnFVWuxM6EJGw2dZ&X-Amz-Signature=c667810d2a6ad0d673cae7a1f9a62573f72a86d1a656afb24ff6ecf8b481ac67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYXHMJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMXxiet%2FPTpnLI9UUvqPj1CWhYJfl9ZPQtmqWUK40%2BVwIhAIieR4rU%2BodoSkcPBr%2BRH9o2VVj3zMFHnEsVwb5XWKFvKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwcGc97L%2FkVsLuaOEq3ANadMfjc86HZJWOkRmOrcRLDn%2FQszo8rufuJlEWipF%2BV%2BswuNDdUZLsJ0isEgYGMQAvYFPqqJKbQpe9znzR1sydrnM%2Fc2VqkOSHY3BpSB1JZLOzb2g7GhPvfIqjVrIRH9iSfaLQDIYF2SRWkT5WOJFpLEzcjFPH5cRVSeUmpG4HIW7Hyp07YIR36K1yVOvTiSBg5iat3Al%2FEGT9iP9Zz%2BAZosPoFsZo06KuAPeA4PXjSd2AuhXMEYSP8Z%2B9YPQBCCpLBblmDuLJkqbQDIZbBXTdaBrogDDxw%2FvMakCLlheAZnwA1rhQrLgETtq3Ov1l9P8p41yiOyTWf4Bmmmwnbv1ophu3Ffgo%2BX%2BtGXzeaB8CinRI2RbfetzIJFpWAmLwQvdDELiiCEY0AhtvXLUy5DErAn2PtaUiZU0EISM%2Fd8cDx3WQvIWCY7R2BiqPy966rxKlwLWWen45fojqhDSYwj04oSgzVvVE3%2BT%2FsJnXrbiWotfaWRUeEkwjqYYBThXjAxWzMZ2ebDm6gHtM8n47ozFSpCMykha97SJO4xZ3Gf4CzzYOlcod5EFnVDz6VKYjfHDIGtWzc2pKymun4mYXeF7Bi7KvYedEuSr1zYkgXK7Q8C7R3%2BoHbD8NNSYeCDDo%2FdLJBjqkAfUk%2BVmWmLBhcImYjRrVVFxYrYYmGxD83dLW%2Bz5Ez5j4KsFm7FlFTzRwxVt4T6dEuOaUYuyCb0MU8bMtUozPcjZVoF1l5CIb4RuANS1%2FgQwpT5uNZ8rpSdzrrtYMgYBqLkpCWtXnK8EOSOpiMCRWJuH4nW9AftBprz8xlKYHXxcZWlrdL51EK9bo3Mmrxr192S9b%2FTsxTS68QnFVWuxM6EJGw2dZ&X-Amz-Signature=643cd96ed21358da7ae00ee92a965dfd6d479745517f1d8f3a09ed3a8a0f518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
