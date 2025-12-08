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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHTZ6WX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYmmL%2FMzAi6pXuXFx7J3QHXKqFpJth6PqF06CYdGkh6AiAFRANfUfS8fb50q43YUcuc0XTTbxM1WQzLnoZFw4OxoiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyLulhKRKpHeGxReKtwD8t6mPLjvkKtUt%2FkTd3VSMwB575zXI%2BUi1SD2n4Bu9yoEDjyXUxg76qbkROCma74PMrE2vsgnLMFtm%2BIWFFKHSTYlopimJ119jhG9TkKMsJJ3HAlhOXHkuF4v%2FzyM7JUkSM3uskB2l7eGpNcuLZjQakrQ6RlJJGUKjyoSsx%2BJfROhdBk3iLTCXgs%2FhHm2T9EwHxFueoIIdSh7bIXnkPFhkNeCkCD65S0y46Rm%2FSas2r%2BijLxcPz71rtnr1rjlBH1c3z326RcvEM4M%2BUlHwpnfP3%2FRZ77wW8N8emCUvz6mdycZs01PPRRkA0FiQrZNf1jjUMnZ%2FvoYzbtS0vJ1yySQ%2BPp8UmWxE5PjVzh18beLBvsk3%2Bs09%2BtFZinY8ayWMtnNUfHSNgJtQDzx0XnPF7iaOtTrZJ1quq6L2waHj7m1jBSeYGCrh8ylkZ%2F1eUctrES%2ByD79SQSKvX%2FpKT5TkmJgoP1kitdleNOAWb6WhuycZ6TzINzNmoq%2BsJyiPXANod5k%2Bt9BopopOzYRLETMbC6vPfn0jBMA9f8B86Rx%2BVQvnNxB8NCqouLWh2Iga7h%2FbaO%2Frc7bqPEAvjq3zaw6J07a09SU6Aj3%2FEXqMCkFfguxE%2BbN6wnkPoNvq7j6sHAwgIDdyQY6pgGxsay5BMXzbz%2Bw0J60Dv2FfMNbFcYCfi9y2qTPMuedEVcMvlcmhyx4qC0EUzH1jCO20YXKBCjBL8Bmu7d95AtMYehwBxjZHcYtdLsDL3xEoFVu9h%2BxmwVnjyu8uL%2FRgSVQLbVM%2BSr7Ip6Hpor9Fc9ukTflcLifSHXn9HFgp7bGTlMwGdgVFRAC4cghXbuAmyaql0fyo3LesosweInaqP3WCIVC0dLI&X-Amz-Signature=3a1ad844601eb4e89cc979eb4e5b08550d2acce1dc93929cf548feeaa7ec9c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHTZ6WX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYmmL%2FMzAi6pXuXFx7J3QHXKqFpJth6PqF06CYdGkh6AiAFRANfUfS8fb50q43YUcuc0XTTbxM1WQzLnoZFw4OxoiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyLulhKRKpHeGxReKtwD8t6mPLjvkKtUt%2FkTd3VSMwB575zXI%2BUi1SD2n4Bu9yoEDjyXUxg76qbkROCma74PMrE2vsgnLMFtm%2BIWFFKHSTYlopimJ119jhG9TkKMsJJ3HAlhOXHkuF4v%2FzyM7JUkSM3uskB2l7eGpNcuLZjQakrQ6RlJJGUKjyoSsx%2BJfROhdBk3iLTCXgs%2FhHm2T9EwHxFueoIIdSh7bIXnkPFhkNeCkCD65S0y46Rm%2FSas2r%2BijLxcPz71rtnr1rjlBH1c3z326RcvEM4M%2BUlHwpnfP3%2FRZ77wW8N8emCUvz6mdycZs01PPRRkA0FiQrZNf1jjUMnZ%2FvoYzbtS0vJ1yySQ%2BPp8UmWxE5PjVzh18beLBvsk3%2Bs09%2BtFZinY8ayWMtnNUfHSNgJtQDzx0XnPF7iaOtTrZJ1quq6L2waHj7m1jBSeYGCrh8ylkZ%2F1eUctrES%2ByD79SQSKvX%2FpKT5TkmJgoP1kitdleNOAWb6WhuycZ6TzINzNmoq%2BsJyiPXANod5k%2Bt9BopopOzYRLETMbC6vPfn0jBMA9f8B86Rx%2BVQvnNxB8NCqouLWh2Iga7h%2FbaO%2Frc7bqPEAvjq3zaw6J07a09SU6Aj3%2FEXqMCkFfguxE%2BbN6wnkPoNvq7j6sHAwgIDdyQY6pgGxsay5BMXzbz%2Bw0J60Dv2FfMNbFcYCfi9y2qTPMuedEVcMvlcmhyx4qC0EUzH1jCO20YXKBCjBL8Bmu7d95AtMYehwBxjZHcYtdLsDL3xEoFVu9h%2BxmwVnjyu8uL%2FRgSVQLbVM%2BSr7Ip6Hpor9Fc9ukTflcLifSHXn9HFgp7bGTlMwGdgVFRAC4cghXbuAmyaql0fyo3LesosweInaqP3WCIVC0dLI&X-Amz-Signature=e3808f44988caecdd8f0459e32bf6cd2f3adab1266a1426b1d84d768854b2b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
