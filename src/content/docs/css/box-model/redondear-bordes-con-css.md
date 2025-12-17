---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOLFTGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPUgsdcYQOQ1N2rcIIptz3dpu%2Big%2BtTenwiq4PFpkuEAiEAo90xYHpMfd%2FmQy7u3tIK2bsI0dipy5Wqb1Yp76OHuDcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGZgCabM28ouPtgJrCrcA0xiQCvP3o7v4eeCDa7roo3YxNgWakY5hEpagBdxGu7Ww%2FjyU73oc67vqkSADhfozb83pDpz0IUneUjBjzuzmD7jbph%2BbcO7oBw34BRDrdOhnjNDzoptSamcMHAfb0yhkhBdEB5eUfI9bdou9XX8i%2BARxU03SgG%2BqgbgC0zFxR7uQUyAmDcxrMORl%2Bw1uIOb6N0e0zOSFrY%2Fygi15uKy0PcAF3%2Be93OWBE4PzUiv9Is0NMl9Cw1rCcpfa86g2FbRViRB9FQTGFLfxYdgRw021DW7g1jnFiTTiT6pmomuPXcQwrhTIc5X09yoOVv2usg7bKP%2FXL6KfW4dGFV3gEB0H%2FISX5Sg%2FXuTh6JEj%2Bo3L%2FNj%2B0vCxj7%2FVcFiSSqU7hbyJQrUc%2FtKfGU7UkquG5tbVGe%2FgpwgqpWYooEiuDp0HK36NhcGbHrXr49uq%2FS0CtajBjISoVbdJ%2Bswmaej2XoU6qcj5WL5kVdHSA4kWUOiZhbX9n59sS3Ms6AKbJS7ps5hpp7O%2BcCxbT9TtitoO8ZTZbQ9YwuxzLFyd4tyzKa3I5EkIVw7fj1WpF7xrBt8jTU7O3NRWSl%2FHSxRCo0VOhtHuODxxLjplgMsGjfEytkFcTX4FzZmLPnoYW7LY3YGMLb6h8oGOqUBeznF%2FAwgj2qcGsOO%2FwjwdWaCOl6yG%2FnfLMcoTcTGZLzp8XZrpQJsqEk94014gVE9IDCpM17Oartay3pGIvYyb7R7q3cWYBD4aHkDNJ1EYjVQLfU5qnxvPz5nr9hFgzTesWdtmbY0aeZ2WGWDablOvOrBXHduOPj3qzSA0mg65WHdWT7x2U93HZ0WQCscEciBlIAc67iJJs%2FVGlkaaKiA6eZ0Jigz&X-Amz-Signature=a9adf667a32e113cf934187e0c4015cd69f78df939828e83243661b43ab23d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOLFTGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPUgsdcYQOQ1N2rcIIptz3dpu%2Big%2BtTenwiq4PFpkuEAiEAo90xYHpMfd%2FmQy7u3tIK2bsI0dipy5Wqb1Yp76OHuDcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGZgCabM28ouPtgJrCrcA0xiQCvP3o7v4eeCDa7roo3YxNgWakY5hEpagBdxGu7Ww%2FjyU73oc67vqkSADhfozb83pDpz0IUneUjBjzuzmD7jbph%2BbcO7oBw34BRDrdOhnjNDzoptSamcMHAfb0yhkhBdEB5eUfI9bdou9XX8i%2BARxU03SgG%2BqgbgC0zFxR7uQUyAmDcxrMORl%2Bw1uIOb6N0e0zOSFrY%2Fygi15uKy0PcAF3%2Be93OWBE4PzUiv9Is0NMl9Cw1rCcpfa86g2FbRViRB9FQTGFLfxYdgRw021DW7g1jnFiTTiT6pmomuPXcQwrhTIc5X09yoOVv2usg7bKP%2FXL6KfW4dGFV3gEB0H%2FISX5Sg%2FXuTh6JEj%2Bo3L%2FNj%2B0vCxj7%2FVcFiSSqU7hbyJQrUc%2FtKfGU7UkquG5tbVGe%2FgpwgqpWYooEiuDp0HK36NhcGbHrXr49uq%2FS0CtajBjISoVbdJ%2Bswmaej2XoU6qcj5WL5kVdHSA4kWUOiZhbX9n59sS3Ms6AKbJS7ps5hpp7O%2BcCxbT9TtitoO8ZTZbQ9YwuxzLFyd4tyzKa3I5EkIVw7fj1WpF7xrBt8jTU7O3NRWSl%2FHSxRCo0VOhtHuODxxLjplgMsGjfEytkFcTX4FzZmLPnoYW7LY3YGMLb6h8oGOqUBeznF%2FAwgj2qcGsOO%2FwjwdWaCOl6yG%2FnfLMcoTcTGZLzp8XZrpQJsqEk94014gVE9IDCpM17Oartay3pGIvYyb7R7q3cWYBD4aHkDNJ1EYjVQLfU5qnxvPz5nr9hFgzTesWdtmbY0aeZ2WGWDablOvOrBXHduOPj3qzSA0mg65WHdWT7x2U93HZ0WQCscEciBlIAc67iJJs%2FVGlkaaKiA6eZ0Jigz&X-Amz-Signature=222f42a330728f4667d38cc950df616343e4214e33f021462dac55a985f20a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
