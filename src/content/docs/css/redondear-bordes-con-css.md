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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTIA22J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM%2BFCNVh3hIrtFBNMOv4iU2%2BR7aONM0VYFjwvaPOPDsAiEAhJoLCyjh3a%2FnT4M7OxuNln4kCGfyabyZhgt7JzOk1k8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFQjG8r5tgCF0L9hWircAxPoD1bRLW98o0Sb5sCZ2UxemKhXxRSKJ1HZgf15oEl%2FQ4dPO47vKdGWa610hb%2FbfTnOQWc9QHhTI5qJuiCT4Rz2BAPIyOzCzbW%2FC21cq0sEhGIpkPDHddVOa4XC4cTSab%2FJ9IqzP%2F%2B%2FKuW5abtKLaOq53NC57c%2BO%2BZq8uOc10T5XGUPxtcwn%2By8s1vKnwyh0BJg3ElZpPNRl5KjMVYOoRHs4%2FBiT%2FSTrKiFsFVVKD4%2B3aL70ykSVYWsQrztPy%2Fvvn5ArZrgWqEeL7Gpvhq3rqy7RFSUEIxqnKlQ8sOyw9F36GCRvd71nrOvRFs5UZuHwrgXpJ3v3%2FzDMu%2BCh0ihtg57ty%2FyPsSIQzGBLgB7HBUyWMj8k9AilwIFnAt8ymqaikRUXBRTiR22th3pXwXoV3oJthzqxg%2BukSWHuar1FMe0DGzavttmrR9h319%2BNABR8L5Ju0KNKJL4vajGfLM0hW8ryRzRQfJCD5VlgfAzanMYY3JjGFnSEqe%2BbyqJia1sT%2Bim4Ceug3vKtcErgXUq%2FfJZp%2FeCGDJzJUE%2Bvdz6GWrznN6quzHX8FMeZeoBxXu7FTFzRHxbG0YVjR%2BcG9k8THWyxdD4qZT%2BNPtEWE%2FDm6cfPFdZmr%2Bb3LpaGWF1MOn8zskGOqUBc60t59CLCM6yZ4HY63LxPsjiT9lSYHajaK9%2BSoLcF41P1T2mPifs2McCYQK9CSe%2B%2Ft9wyDcHgKnLeF2IZs31vai14eBz6Ld%2BTRXYHGMwW459WiGgsxLhkOWMwADrJKvKSfRIyZY%2FZ51Kkt8AS2abs5aZQfz%2Fi3Ki0V0bCfvGftpG09A2JQniH%2Brl7bG3KwOEwyrYaEqx8SKlPLbI5ZGm9911mgwi&X-Amz-Signature=926ead8e933a004dec35627f0af64419ca1ac185b7d1d6a6a30309c5310aacc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTIA22J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM%2BFCNVh3hIrtFBNMOv4iU2%2BR7aONM0VYFjwvaPOPDsAiEAhJoLCyjh3a%2FnT4M7OxuNln4kCGfyabyZhgt7JzOk1k8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFQjG8r5tgCF0L9hWircAxPoD1bRLW98o0Sb5sCZ2UxemKhXxRSKJ1HZgf15oEl%2FQ4dPO47vKdGWa610hb%2FbfTnOQWc9QHhTI5qJuiCT4Rz2BAPIyOzCzbW%2FC21cq0sEhGIpkPDHddVOa4XC4cTSab%2FJ9IqzP%2F%2B%2FKuW5abtKLaOq53NC57c%2BO%2BZq8uOc10T5XGUPxtcwn%2By8s1vKnwyh0BJg3ElZpPNRl5KjMVYOoRHs4%2FBiT%2FSTrKiFsFVVKD4%2B3aL70ykSVYWsQrztPy%2Fvvn5ArZrgWqEeL7Gpvhq3rqy7RFSUEIxqnKlQ8sOyw9F36GCRvd71nrOvRFs5UZuHwrgXpJ3v3%2FzDMu%2BCh0ihtg57ty%2FyPsSIQzGBLgB7HBUyWMj8k9AilwIFnAt8ymqaikRUXBRTiR22th3pXwXoV3oJthzqxg%2BukSWHuar1FMe0DGzavttmrR9h319%2BNABR8L5Ju0KNKJL4vajGfLM0hW8ryRzRQfJCD5VlgfAzanMYY3JjGFnSEqe%2BbyqJia1sT%2Bim4Ceug3vKtcErgXUq%2FfJZp%2FeCGDJzJUE%2Bvdz6GWrznN6quzHX8FMeZeoBxXu7FTFzRHxbG0YVjR%2BcG9k8THWyxdD4qZT%2BNPtEWE%2FDm6cfPFdZmr%2Bb3LpaGWF1MOn8zskGOqUBc60t59CLCM6yZ4HY63LxPsjiT9lSYHajaK9%2BSoLcF41P1T2mPifs2McCYQK9CSe%2B%2Ft9wyDcHgKnLeF2IZs31vai14eBz6Ld%2BTRXYHGMwW459WiGgsxLhkOWMwADrJKvKSfRIyZY%2FZ51Kkt8AS2abs5aZQfz%2Fi3Ki0V0bCfvGftpG09A2JQniH%2Brl7bG3KwOEwyrYaEqx8SKlPLbI5ZGm9911mgwi&X-Amz-Signature=4f9cfad161a12bf554b4e640f88c69942e029b32f187dbe082484265a6fe92fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
