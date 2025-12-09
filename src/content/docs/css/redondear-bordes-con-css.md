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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQLNUT3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZjI61U5raWO8B8WIPxkKzBoKwWbWObow3aMxxEBcVoAiEAqxaO4ENGcno%2FPpQE%2F0nMALwWagANOENbelnLPOcbnQ8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtgG%2FrP8S6GrSQewyrcAwMI1jyrolJLGpenrkG51KBLSGxYcbQCM45BvhlGaCjCyQo1E%2BThQG%2Bn6R2ptEdJ7EabVKnLpdAO7JrAw0p03Wy%2B9OEWBTGAXgNsiHQDD9vqiwOxMpKdwLCdJdhQpbhOtLcM3%2FIN5kIjFIyBPpxb5S4W6eIrHCNkKDyuh1kJEt8t9HX8yOepCpm8f5VBIZGwIS0cSCBfYsFEzGSDC1oxbHApV%2BMzib032vch3fgcguSpYMPG9CGCFUkxq3%2BJs6%2B3mv4Cjyk%2BksZLAayZWPlIM79aduzrplGVahgfQN8DadhB%2FOY72KjGI%2B1pICncIEPUiKi2v3hiVZmWi%2FrVqbjsPgbyKmsir4%2B2jaueuHxqisd7MEu%2BVA0PR7oZXdAoa7wsZNH2hmeZLBxlHgUFJRSppo2QQyL0RrxNTb%2BawYvsF6PXH%2B%2B61LXzxAl9%2Fb6vIXlsfrKlhU9p0tFmQFKU9xlkmPoUqWmv8lZLvb6cwkSg3A90p2XZ6lJKxejet2fU1aVKf4bmXACSIEG4WjriCd%2BZ4tp5BO6rH9MPx9X7vq8d5KDF74WFPT75o146h0NBNyMGkK2VgqK%2FzM%2FZeInMIisasfMHYjDCqYjP0w4RCSCZUtcTleHeCQEEfRG73c7OMLyP3skGOqUBG3vwDwNJjZ774tEDNSUDi0rtwY0bQdYM7FB1fDtuVt2q%2Fh5mfBEzLcHhzNOe3k1heRgxaIMSW2XS7JiECnTThYZ4XyQCANPWjWgidxUSx5INVReN4SHiYRumZHGS5A3FANevT6nWYbBlzwAOUDiBNT%2FpXOFSkwkZN0os8xPqifPb0eygtbrDHcRAqimKLdyARsl6flWE56Ul4IGc9EH6Zl1THuXg&X-Amz-Signature=60d8582236d1d8b9299e5e67fc4861cea9288ca5bf3fab44f90f3b3525af7db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQLNUT3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZjI61U5raWO8B8WIPxkKzBoKwWbWObow3aMxxEBcVoAiEAqxaO4ENGcno%2FPpQE%2F0nMALwWagANOENbelnLPOcbnQ8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtgG%2FrP8S6GrSQewyrcAwMI1jyrolJLGpenrkG51KBLSGxYcbQCM45BvhlGaCjCyQo1E%2BThQG%2Bn6R2ptEdJ7EabVKnLpdAO7JrAw0p03Wy%2B9OEWBTGAXgNsiHQDD9vqiwOxMpKdwLCdJdhQpbhOtLcM3%2FIN5kIjFIyBPpxb5S4W6eIrHCNkKDyuh1kJEt8t9HX8yOepCpm8f5VBIZGwIS0cSCBfYsFEzGSDC1oxbHApV%2BMzib032vch3fgcguSpYMPG9CGCFUkxq3%2BJs6%2B3mv4Cjyk%2BksZLAayZWPlIM79aduzrplGVahgfQN8DadhB%2FOY72KjGI%2B1pICncIEPUiKi2v3hiVZmWi%2FrVqbjsPgbyKmsir4%2B2jaueuHxqisd7MEu%2BVA0PR7oZXdAoa7wsZNH2hmeZLBxlHgUFJRSppo2QQyL0RrxNTb%2BawYvsF6PXH%2B%2B61LXzxAl9%2Fb6vIXlsfrKlhU9p0tFmQFKU9xlkmPoUqWmv8lZLvb6cwkSg3A90p2XZ6lJKxejet2fU1aVKf4bmXACSIEG4WjriCd%2BZ4tp5BO6rH9MPx9X7vq8d5KDF74WFPT75o146h0NBNyMGkK2VgqK%2FzM%2FZeInMIisasfMHYjDCqYjP0w4RCSCZUtcTleHeCQEEfRG73c7OMLyP3skGOqUBG3vwDwNJjZ774tEDNSUDi0rtwY0bQdYM7FB1fDtuVt2q%2Fh5mfBEzLcHhzNOe3k1heRgxaIMSW2XS7JiECnTThYZ4XyQCANPWjWgidxUSx5INVReN4SHiYRumZHGS5A3FANevT6nWYbBlzwAOUDiBNT%2FpXOFSkwkZN0os8xPqifPb0eygtbrDHcRAqimKLdyARsl6flWE56Ul4IGc9EH6Zl1THuXg&X-Amz-Signature=e32dbde16f7ae0fbbfcfc3f1e6888f98dfa0c185c2d9a2042851afa01340d348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
