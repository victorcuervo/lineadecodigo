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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3QAV4U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCg2dTENGC%2Bt1yPAVMZkhUqwchKcHShvRifsRkXQygkkwIhAM26%2BXEmXDl1c%2B9vSC9XJznff%2FbSc3YljQXwsE3zPMvXKv8DCDgQABoMNjM3NDIzMTgzODA1Igz7SWEq8k7yzWVhZQQq3ANiYudGwnxLZ7YfoamWibyur9sj5F63NkzgE48mUr18tivF4TWto4IRtRfWyT0vhjTHFn9yHV0DfBo2MYreufUdQYnY0THNjDIw7%2B93pOJ9HgCy92Y4UcixNOf46p8aN9pwUHc5lyKNsQVTl1C8hUIW9VTKPAU9n4SA0lZOsAFDzEwff%2Br0ZlMYbm6TzOlhZycJWs7jV%2FAEffq6aucNOGyfJXHcoZqtzhjuxcO1hJ%2Bpzf%2BxL5MXVJ7Ujl%2FaRwvo8muhuXAo68QFS%2FSs%2BeQZWxiVV5Hct%2Buk%2FWzGoaLoetLmRxYaY1x%2BjzegUAc%2FwurxDNOD07QHY2P8rcyeOeL4rxng7rWO2f9cv0H1t6Xyr3SrJBX9LkBm6zCzQCdVkuGnPBgsN0fpz%2BP8KERnl1lxi%2FNbavhaYADLZ3kdd1%2Fq8Hs2S41x8dZ%2FD8Dg%2BClo0GaruG757mFC6sZ9bg42yJoB4InU2XXEXDzWTKSG1OtIqnnEDpTWeNc9TtRaLh%2BsAvd38BOFXRJm%2FlM0%2FGPF2szN2AV4CMKfCvGPX5SRTZliHL82yLOJJWGJF9cXfhzkipCkN1Tu%2BSj9X5xF%2BQpbWNEGhtfZBSvAYQIpJhebAu9ENtrSnWzaLH3W5%2FzrOyswLjCz%2BMLJBjqkAeXWlOM%2BiOYHbbXEXizO3qruNSTu%2BGwOyvt5ZcyUb0IZ36HcErE1M%2FXP9nC1WED7YTV1ytcdjljuwyBEa6v1gS41d3EK2L%2Fr2DNwGRPPQs%2FsIk9acSGw27TVP7sfew0xZ4lLSSOMfBKaUmKu4nb8BFHSn92dC2FQMB4qgAWWkCRY43KpW1M8glHnbPaC7OPgyD%2Flp1OWxeTQk3m%2FgVAlwpfCbil3&X-Amz-Signature=e2f6150aae8092eacfce750f23697710e17332defc93b83b6f21f309a283a055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3QAV4U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCg2dTENGC%2Bt1yPAVMZkhUqwchKcHShvRifsRkXQygkkwIhAM26%2BXEmXDl1c%2B9vSC9XJznff%2FbSc3YljQXwsE3zPMvXKv8DCDgQABoMNjM3NDIzMTgzODA1Igz7SWEq8k7yzWVhZQQq3ANiYudGwnxLZ7YfoamWibyur9sj5F63NkzgE48mUr18tivF4TWto4IRtRfWyT0vhjTHFn9yHV0DfBo2MYreufUdQYnY0THNjDIw7%2B93pOJ9HgCy92Y4UcixNOf46p8aN9pwUHc5lyKNsQVTl1C8hUIW9VTKPAU9n4SA0lZOsAFDzEwff%2Br0ZlMYbm6TzOlhZycJWs7jV%2FAEffq6aucNOGyfJXHcoZqtzhjuxcO1hJ%2Bpzf%2BxL5MXVJ7Ujl%2FaRwvo8muhuXAo68QFS%2FSs%2BeQZWxiVV5Hct%2Buk%2FWzGoaLoetLmRxYaY1x%2BjzegUAc%2FwurxDNOD07QHY2P8rcyeOeL4rxng7rWO2f9cv0H1t6Xyr3SrJBX9LkBm6zCzQCdVkuGnPBgsN0fpz%2BP8KERnl1lxi%2FNbavhaYADLZ3kdd1%2Fq8Hs2S41x8dZ%2FD8Dg%2BClo0GaruG757mFC6sZ9bg42yJoB4InU2XXEXDzWTKSG1OtIqnnEDpTWeNc9TtRaLh%2BsAvd38BOFXRJm%2FlM0%2FGPF2szN2AV4CMKfCvGPX5SRTZliHL82yLOJJWGJF9cXfhzkipCkN1Tu%2BSj9X5xF%2BQpbWNEGhtfZBSvAYQIpJhebAu9ENtrSnWzaLH3W5%2FzrOyswLjCz%2BMLJBjqkAeXWlOM%2BiOYHbbXEXizO3qruNSTu%2BGwOyvt5ZcyUb0IZ36HcErE1M%2FXP9nC1WED7YTV1ytcdjljuwyBEa6v1gS41d3EK2L%2Fr2DNwGRPPQs%2FsIk9acSGw27TVP7sfew0xZ4lLSSOMfBKaUmKu4nb8BFHSn92dC2FQMB4qgAWWkCRY43KpW1M8glHnbPaC7OPgyD%2Flp1OWxeTQk3m%2FgVAlwpfCbil3&X-Amz-Signature=c234122fff936f7e0884412ce3a2b80f90e3b92426edbb5490b3b53dd9391684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
