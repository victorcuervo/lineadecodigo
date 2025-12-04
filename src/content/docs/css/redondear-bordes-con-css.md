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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5MHQN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICObkaQCzOz3FyM0ND4%2BZuD9cArIODzdHAI%2BF2efaJ99AiEAm59KjvCDRRhUZycbWJk1ZNGyP7w4%2BZPJHV7mDUc5rf8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIa2zN54ROvQ8Ix62ircAz0Jv19asQR%2FtHd2OiOurKC5eE0oPvCPJeKnH%2FoWlI2%2BjnJx1iKFxjAms%2Fj%2B51Gj%2F%2F8GWXRgjGWQnLsITyyg9UTDNVekU5dAOWPH9pQI3bwdUXo5448E9%2BOjU2DwC14RDA9BvVJ671UVr%2B%2BKzeiVR3g7SEbDk3MF57hhzCaOTKkzhANx2KIqPBRILVt%2FRopNkE4weQt0PfDA0LUR7oJJbLO%2BK4Wcd2Dm%2FNfrEUj6XZHfQdfPNBHxZw3%2BKPlYCpKeWeNPZ%2F9Lb%2Fep8w9hWsEujCIJI83DX2W4JYrC3YitNLehZNBICh3fAM1P3rOWt0%2BZtdKdEI%2BgkSrKV7bWLoT2UtQ324tBNssCBj3o7HTl%2FWlfasknGiwVhCcGnQQ6PKoSUsNfvKmwQoqEh8gxf27SiMjeyNc9Zv79SFvOn3P%2Fw3ZbmEe8PxmC5oMYfABjLAMZWi5NQyKKYjuTQ5jDCqKJKdmUQupHd%2Bd4O4HVoiDTmLZNpo8YfrB35zQeC9%2BnxmWlrD3I10FfYg5DrEDsk3vTVgkPMGqVYfr7gcrlZLbgRvte9hl9zTBmsC1v1xMO8i1M5ywHztYpAy2%2FFdIF71SbecdRLGb5fti2wBTQ7mfXqVuaqhPpyvUGhogoiZCCMILpxMkGOqUBzc8jtIrxt%2BsJfIAVtfFTf8dtGGhvtn%2F8W7XexG8bRAWP%2FcUBiA2BXE6y%2FDeFChdd%2B3mWm2n8vIOLAAeMG27frrS%2BL50YkjwEbK1pMDAgFD3TTfriVBDYGjqmqvQXauZdpNbt%2F2Z33xOgy0ut0QDnSP%2Bpqn0Ovd5Te72QaZTaeICbbIpEjoPQLBiVGQerP5Sgmqd%2B3S0avvGgsr0DFEfWk817DIkC&X-Amz-Signature=9bdf76223ae8631f97c49a8cb04d249dc3f26db110a2f79f29248f53f705437e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5MHQN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICObkaQCzOz3FyM0ND4%2BZuD9cArIODzdHAI%2BF2efaJ99AiEAm59KjvCDRRhUZycbWJk1ZNGyP7w4%2BZPJHV7mDUc5rf8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIa2zN54ROvQ8Ix62ircAz0Jv19asQR%2FtHd2OiOurKC5eE0oPvCPJeKnH%2FoWlI2%2BjnJx1iKFxjAms%2Fj%2B51Gj%2F%2F8GWXRgjGWQnLsITyyg9UTDNVekU5dAOWPH9pQI3bwdUXo5448E9%2BOjU2DwC14RDA9BvVJ671UVr%2B%2BKzeiVR3g7SEbDk3MF57hhzCaOTKkzhANx2KIqPBRILVt%2FRopNkE4weQt0PfDA0LUR7oJJbLO%2BK4Wcd2Dm%2FNfrEUj6XZHfQdfPNBHxZw3%2BKPlYCpKeWeNPZ%2F9Lb%2Fep8w9hWsEujCIJI83DX2W4JYrC3YitNLehZNBICh3fAM1P3rOWt0%2BZtdKdEI%2BgkSrKV7bWLoT2UtQ324tBNssCBj3o7HTl%2FWlfasknGiwVhCcGnQQ6PKoSUsNfvKmwQoqEh8gxf27SiMjeyNc9Zv79SFvOn3P%2Fw3ZbmEe8PxmC5oMYfABjLAMZWi5NQyKKYjuTQ5jDCqKJKdmUQupHd%2Bd4O4HVoiDTmLZNpo8YfrB35zQeC9%2BnxmWlrD3I10FfYg5DrEDsk3vTVgkPMGqVYfr7gcrlZLbgRvte9hl9zTBmsC1v1xMO8i1M5ywHztYpAy2%2FFdIF71SbecdRLGb5fti2wBTQ7mfXqVuaqhPpyvUGhogoiZCCMILpxMkGOqUBzc8jtIrxt%2BsJfIAVtfFTf8dtGGhvtn%2F8W7XexG8bRAWP%2FcUBiA2BXE6y%2FDeFChdd%2B3mWm2n8vIOLAAeMG27frrS%2BL50YkjwEbK1pMDAgFD3TTfriVBDYGjqmqvQXauZdpNbt%2F2Z33xOgy0ut0QDnSP%2Bpqn0Ovd5Te72QaZTaeICbbIpEjoPQLBiVGQerP5Sgmqd%2B3S0avvGgsr0DFEfWk817DIkC&X-Amz-Signature=585c4bf6d2b200ab5ca2ee17654581e29d548dc65d35d5331c072c7522f05449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
