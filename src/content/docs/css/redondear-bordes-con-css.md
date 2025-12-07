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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTFZS33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfuKed5TJzj49%2Fh7cWOIzav7LpMHKyiUuM5EZHWVs04AiEA3xn2mF1UYY5wM3iwsC1SBGiXVgSnz%2F5hRWXc8NS8SmoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBjovvWcILMfecbpircA0XtCLVKOt7u%2B%2BfA7hfTmffNrNEE9oZwV7meY%2FJCyFRiU%2FPrl30XDKwb2GUsS0WD9oBSFLceLDZyvOlnrcavjBfSl%2FQkCSR2QA3MWlU%2FXFz1Pk9ECtkNBG%2FRbg4q8MacnSbebgLyugVbVvfCXr%2Fhe1ggoW8OXdfvi04u9z1YzxJVofYOMKf0IDaHJ2yW0ZsfD4Lp7YoAjzSseEI9SluC8z40%2Ftr78tibGLBUMdEm6bmQBqRx53hdxW26CDGd%2F8fvr9BrCQw00EVpZ1HE9z3LG61WfeiudcJtn9I7c9%2B4QSAXTxtUfcQM%2BJqcvmMWG%2F1H3mMhTzUR6NENrdbR41gbU1%2BiWtsk%2FdIjeKoz4CYhMvSMzYDtFYAan3OfPJON7AB2AopShQRTtnNaxfci3xF7XMtwG93UKaSfye2Aa%2BBSx%2Fl54hGV9iJK8XXhmZp6ppUf9sIPs%2FhKkRMDuc9t5uQVEv66egiw1etSlZ1qYv8KndRr8yWUTG8CdH71j2ja6c7Y9Rb9G1RUpILlrgzqxhCcttUgjVFhwXoh%2FjnN1pSCoSWYgm9Ab7iTROMJ5PSMgnifGPwxuo9R%2F%2FILzuXx5MsWT8wB7ySAVXOI7AKj40GhfcljFagmv%2B3iSOAvapetMLOa1ckGOqUBczxAh7qJH1%2BwoXesE7CAVqN6sNsV3yPZ7ppuGyB0frmYDojnfb5GvQlYf7XdIdsPwlhVidnbb073pgYqy%2BQrfoq7mZRFThT33LrdJu0y9rMatbF2WStuDHlbjlbaPUS5ZeKPZwxNbbLnUBZvCr7rsLrBh8y1RskTzKlykd3gvNCkNXtlFzV%2FRskU9c98JDNs2wGjh9wlB3%2BNSmBYQzeUC4WXpbKC&X-Amz-Signature=ac2da513a5d72f5988d40caf97f8e801926743895fce0470e3ea5a1acb0167da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTFZS33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfuKed5TJzj49%2Fh7cWOIzav7LpMHKyiUuM5EZHWVs04AiEA3xn2mF1UYY5wM3iwsC1SBGiXVgSnz%2F5hRWXc8NS8SmoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBjovvWcILMfecbpircA0XtCLVKOt7u%2B%2BfA7hfTmffNrNEE9oZwV7meY%2FJCyFRiU%2FPrl30XDKwb2GUsS0WD9oBSFLceLDZyvOlnrcavjBfSl%2FQkCSR2QA3MWlU%2FXFz1Pk9ECtkNBG%2FRbg4q8MacnSbebgLyugVbVvfCXr%2Fhe1ggoW8OXdfvi04u9z1YzxJVofYOMKf0IDaHJ2yW0ZsfD4Lp7YoAjzSseEI9SluC8z40%2Ftr78tibGLBUMdEm6bmQBqRx53hdxW26CDGd%2F8fvr9BrCQw00EVpZ1HE9z3LG61WfeiudcJtn9I7c9%2B4QSAXTxtUfcQM%2BJqcvmMWG%2F1H3mMhTzUR6NENrdbR41gbU1%2BiWtsk%2FdIjeKoz4CYhMvSMzYDtFYAan3OfPJON7AB2AopShQRTtnNaxfci3xF7XMtwG93UKaSfye2Aa%2BBSx%2Fl54hGV9iJK8XXhmZp6ppUf9sIPs%2FhKkRMDuc9t5uQVEv66egiw1etSlZ1qYv8KndRr8yWUTG8CdH71j2ja6c7Y9Rb9G1RUpILlrgzqxhCcttUgjVFhwXoh%2FjnN1pSCoSWYgm9Ab7iTROMJ5PSMgnifGPwxuo9R%2F%2FILzuXx5MsWT8wB7ySAVXOI7AKj40GhfcljFagmv%2B3iSOAvapetMLOa1ckGOqUBczxAh7qJH1%2BwoXesE7CAVqN6sNsV3yPZ7ppuGyB0frmYDojnfb5GvQlYf7XdIdsPwlhVidnbb073pgYqy%2BQrfoq7mZRFThT33LrdJu0y9rMatbF2WStuDHlbjlbaPUS5ZeKPZwxNbbLnUBZvCr7rsLrBh8y1RskTzKlykd3gvNCkNXtlFzV%2FRskU9c98JDNs2wGjh9wlB3%2BNSmBYQzeUC4WXpbKC&X-Amz-Signature=95f7cdcd572aafcfc4567eb342932bc767ee2a5ca3e181d190ad138739007b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
