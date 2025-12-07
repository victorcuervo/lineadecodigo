---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT33GK52%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDONge98a6e76hqIOgKW8HQmHUOJ2EKxrSf6Mo%2F7RGgHAiEA5uZ80pl2YwlG5%2BNEV3jzgHlkPwicygrDDyls3lQMhqUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP90Kj8vCNnt3UuPwyrcA8gTCs5pnqz%2BL%2BbDxnD3cA05QBfol7j45GExnwgX7zjqMbe3oSExgkC%2Bq8Nz661UMZuiBcjmE028RdZn1hGVa6V5VodM9CJOI%2BWpLSRvdO6THk0pHPbm2YS2c%2FBEtwhmFv07hRSP%2BGYjRAPGlzWXLm0SoQbbRF8NYx7FRlIHba7QXIm4fNgk%2FtKiz4J5fZmAWy3Uc%2BK36HZvk%2Bd0YjG6q6Rst%2Bv9wR2vEqQxFm4zgzVUGHk8sK0nqhPSZCgDN8hp4aD5hy2tclNIgxfADj6e5rro6u13JPxKiUv9cXTXSNatKsXsQUL%2BGrWfUzArGirfVDViUQgcXqj4CPehMRCEZFrIO2qWDJIicYVdkJqh5qsU1tQ076sW9s5XwugCTl0%2F%2BGgyqli88ncIOWx%2Bsh8tRdpZOG8%2FJ7XDMiXNS5aIkqlyauk3Y%2BLfmVMsdFg761xHIvdqhCUqP5M8T407YQ5FYvcYgwQpNjyvm6E6QgdcAo1H04DvbjzDFQJrEt7x%2B92a7Hso5ubrFxhW3mZTAnS3fOoCMFxPIgBvV7PhKXa1AwPZxchY%2FbbEvycqnDdfZsTLX75kmP%2BGscY4sh%2Fy9KvH9YI%2BF6SXMFgLHcrNOFVEVrKkjNNbtK7MylGyH0h8MNj90skGOqUBSJ6aBgteN1Tp5sqms9QAbNOfI%2Br7CDa1XfmFebgm6qwVJkq%2F3FKPT2ANoaYI%2FtL6e11hNE7UJd8%2BqBCPF8HkxU2EIHIFMp1jE%2BSx1TaV%2F%2Bqce5l5Xb%2FtHHfaGnmQQ%2BL5WxV%2BCEpPn4w0YCHrn9Ey8aqOmL7ykWJLNOHne7%2F8hyZmvK6tJ52l7q6%2BBRCWybfjrDt91R28xD75BgvyCUkzqlu4QEbi&X-Amz-Signature=7906758f081e529ebecf0b49a7ae58f9c8f194d5c6bcdb02b73d305de47478e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT33GK52%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDONge98a6e76hqIOgKW8HQmHUOJ2EKxrSf6Mo%2F7RGgHAiEA5uZ80pl2YwlG5%2BNEV3jzgHlkPwicygrDDyls3lQMhqUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP90Kj8vCNnt3UuPwyrcA8gTCs5pnqz%2BL%2BbDxnD3cA05QBfol7j45GExnwgX7zjqMbe3oSExgkC%2Bq8Nz661UMZuiBcjmE028RdZn1hGVa6V5VodM9CJOI%2BWpLSRvdO6THk0pHPbm2YS2c%2FBEtwhmFv07hRSP%2BGYjRAPGlzWXLm0SoQbbRF8NYx7FRlIHba7QXIm4fNgk%2FtKiz4J5fZmAWy3Uc%2BK36HZvk%2Bd0YjG6q6Rst%2Bv9wR2vEqQxFm4zgzVUGHk8sK0nqhPSZCgDN8hp4aD5hy2tclNIgxfADj6e5rro6u13JPxKiUv9cXTXSNatKsXsQUL%2BGrWfUzArGirfVDViUQgcXqj4CPehMRCEZFrIO2qWDJIicYVdkJqh5qsU1tQ076sW9s5XwugCTl0%2F%2BGgyqli88ncIOWx%2Bsh8tRdpZOG8%2FJ7XDMiXNS5aIkqlyauk3Y%2BLfmVMsdFg761xHIvdqhCUqP5M8T407YQ5FYvcYgwQpNjyvm6E6QgdcAo1H04DvbjzDFQJrEt7x%2B92a7Hso5ubrFxhW3mZTAnS3fOoCMFxPIgBvV7PhKXa1AwPZxchY%2FbbEvycqnDdfZsTLX75kmP%2BGscY4sh%2Fy9KvH9YI%2BF6SXMFgLHcrNOFVEVrKkjNNbtK7MylGyH0h8MNj90skGOqUBSJ6aBgteN1Tp5sqms9QAbNOfI%2Br7CDa1XfmFebgm6qwVJkq%2F3FKPT2ANoaYI%2FtL6e11hNE7UJd8%2BqBCPF8HkxU2EIHIFMp1jE%2BSx1TaV%2F%2Bqce5l5Xb%2FtHHfaGnmQQ%2BL5WxV%2BCEpPn4w0YCHrn9Ey8aqOmL7ykWJLNOHne7%2F8hyZmvK6tJ52l7q6%2BBRCWybfjrDt91R28xD75BgvyCUkzqlu4QEbi&X-Amz-Signature=ca15f9b1055211a7b163adff76d6fbcf3677ef48038a9306e08a76d509aa0d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

