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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGLFVI7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD78ZOeNL28k%2F9a1cNE10w2HuH5go0iZIcAY%2BaEx%2FawAQIhAIBZVx%2Bo4VK%2BZaMcSmtmHsJARhsS2CoFteqqlEVTv4b5Kv8DCD4QABoMNjM3NDIzMTgzODA1Igxq6hnaWAXA7y%2B9lV4q3APMJrkwPTlscTek0rPyAv4xf8kJkNZWltnBQTqit4t%2Br0%2Blt8149tLA8TFU2EYws6X3YhhmSLENgyvfa%2FWNqS3TtoLkmOBvmvBBWl6E5%2Bwc%2B86zll6fexmtFFYju8QvJdM7ciIh2DvIVtBM9X58Ox2nwy5SKqzUVO%2Bz7QJliNo3JBX70b%2FzTsE%2FFvDbHqMJIMnrwqgv8a6qCgMQdorMNgggOlbtEQQ1GsSzWUdWxbQ5ab7ZDXT2h5hjV%2BwKBCNEcU6bo2zLMWfh1PYYSplovIGiZNmPyGMj%2FxpcHNY0DOw0Ikk8rq2X%2FGo9tobB5%2FpgRnKL0E9yZ6fofMDgeX8pFL%2BT8N5%2FA%2F2TnB6OV7ZMdbkgqkwPWapnL1uCDuGI28h%2BNi1bEc84v7t4gBR8mikuUJJrzP4c8aJWWG5MzVwfd%2F66gcl2djwBcs%2FZA%2FMIfxya2Ri%2F949yfUeOmNMuAjjepF74o8KPJAV%2B82m1i9kM5SjEJbPqM%2FwJiVWQwF0ZboTnN%2FyUz3IPxuYUllGrLJ3TMzDOODUNKVl17yqwc0qgWAsK9p3Gpqs6lcdmuaChDcKYC1er5azBAO4L5ejImrFIGWesPWCXeRjkfm%2BYJSTCdenGfUcUWWS4dPqKTv6pVTDkrsTJBjqkARbD25z97aJlua1n5bBedDSDIcNxF9gYPN7iT4OnvxcMF8penykcVt8SHr%2BdIhdlad43GS3ENslOBYWX3llO0%2BwUXswwvYvq1O3AQZ6VepTgK5zmLgrQj5ctUkZwO7HAZGN0OKsNrHQdNe7IJ1sujFyB7UCrcPwYEyvGg8%2BavdwK4DoR8sie6sieu4Ye0LvRJKaJWy78zgBMzLcPEArHuT1CDKtq&X-Amz-Signature=15d94df73202c75f0f0185360c217ab9cd2492fd38f91c21f24cec2a34d2d7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGLFVI7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD78ZOeNL28k%2F9a1cNE10w2HuH5go0iZIcAY%2BaEx%2FawAQIhAIBZVx%2Bo4VK%2BZaMcSmtmHsJARhsS2CoFteqqlEVTv4b5Kv8DCD4QABoMNjM3NDIzMTgzODA1Igxq6hnaWAXA7y%2B9lV4q3APMJrkwPTlscTek0rPyAv4xf8kJkNZWltnBQTqit4t%2Br0%2Blt8149tLA8TFU2EYws6X3YhhmSLENgyvfa%2FWNqS3TtoLkmOBvmvBBWl6E5%2Bwc%2B86zll6fexmtFFYju8QvJdM7ciIh2DvIVtBM9X58Ox2nwy5SKqzUVO%2Bz7QJliNo3JBX70b%2FzTsE%2FFvDbHqMJIMnrwqgv8a6qCgMQdorMNgggOlbtEQQ1GsSzWUdWxbQ5ab7ZDXT2h5hjV%2BwKBCNEcU6bo2zLMWfh1PYYSplovIGiZNmPyGMj%2FxpcHNY0DOw0Ikk8rq2X%2FGo9tobB5%2FpgRnKL0E9yZ6fofMDgeX8pFL%2BT8N5%2FA%2F2TnB6OV7ZMdbkgqkwPWapnL1uCDuGI28h%2BNi1bEc84v7t4gBR8mikuUJJrzP4c8aJWWG5MzVwfd%2F66gcl2djwBcs%2FZA%2FMIfxya2Ri%2F949yfUeOmNMuAjjepF74o8KPJAV%2B82m1i9kM5SjEJbPqM%2FwJiVWQwF0ZboTnN%2FyUz3IPxuYUllGrLJ3TMzDOODUNKVl17yqwc0qgWAsK9p3Gpqs6lcdmuaChDcKYC1er5azBAO4L5ejImrFIGWesPWCXeRjkfm%2BYJSTCdenGfUcUWWS4dPqKTv6pVTDkrsTJBjqkARbD25z97aJlua1n5bBedDSDIcNxF9gYPN7iT4OnvxcMF8penykcVt8SHr%2BdIhdlad43GS3ENslOBYWX3llO0%2BwUXswwvYvq1O3AQZ6VepTgK5zmLgrQj5ctUkZwO7HAZGN0OKsNrHQdNe7IJ1sujFyB7UCrcPwYEyvGg8%2BavdwK4DoR8sie6sieu4Ye0LvRJKaJWy78zgBMzLcPEArHuT1CDKtq&X-Amz-Signature=b0accbe16a44b17ab2c1a1fde250b3fc6dc9e2b35aa1ed14e60866ec2e427d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
