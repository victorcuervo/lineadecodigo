---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZEFRCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOqtXDPcbYVlubLOgT4iQ3c6CUukdgVO5ctHTA21DPpAiEA4v%2F2HJyqf%2F%2FHi1rwQHfcwT6JFlxFvcOvZCxwlLuc5iUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx9odJdzIEbHBRl8ircA4pnGg3srjC%2Bc27XRukiz5%2FXxWLSvEqLUP97rUbSDdTRhbOwcz7Zb3QoL%2BYZLEpYQvcODaC5NwF3CL25PIx%2Bbl3jVEt%2Bae10TGsyUn48Qc6faJInxHxe3r0mAgKRF5vDm3oggtnaXX4QL9LFW0bNspSnKGH5ogD3pO93zTvYnXESwYBRBmGANRB%2BLM%2Bna0hhDWRCN23ER%2BcC%2F7x%2BQbVHZZXcwp3JqKESuWYMMqyG%2FioITRZcNlEBcG%2F%2F4eZaIwrI3Spu37NDl9Kk1x5VYIMEGuR%2FvGgUzDgFonVkdVYqC0%2Bjls2G26cqEG3oIjGW%2FwHG%2F8EXCF%2FWhVijSXwh4sgupD8Gy9bJFzsF%2BWqqfVQKSGvKcwPOCKzK7uCxoSUi%2B1ZpjPnnfKfqdPMNuLQej0SdLpkWV8iiVT0po01sV7XKyDMYstzwL67Wx1y6n4tEED%2BpqTW%2Bc5sjxLD%2BeNUBrhqepnHkGY9dn4deK98etWAiz1S2WPX3Bguj1btc%2BYgSbTn84ArOa5c4HVo2ldoQgyIPVMTLmE0775You9h0%2BdYdTZS08Arx2OqVyEvaj5bbSKj6L2NOs91RBjJh6sGcucUR%2FLukaHDv1F1SegoxVbqY0PkPlJ2ZK2Ec8qc92KuwMJiU2ckGOqUBaufMTLL8NkYMiNDbHsqKW09prame5fonOb36Y9IL%2FeQ78qUShkQItyJW5%2FmNdT6wCgDDgmZ%2BimIIvDaIi3dmrD5x7j6ye53sxW%2BpSAeHAqmVaq%2FqIvVmEzOKaJAGD0TKmrnfaE7t6RQ4XY6rQRJyI3vC4oNIVUrRT%2BgUzY2MaDyRAmktzu7EeKK5cByI6VL3Be5v65lO56wWUeNsvPbR6rWV4d3X&X-Amz-Signature=9f583552ae00c5ebfb700dd9eb79b27991653353283b1cbc6f19b9d656e2048a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZEFRCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOqtXDPcbYVlubLOgT4iQ3c6CUukdgVO5ctHTA21DPpAiEA4v%2F2HJyqf%2F%2FHi1rwQHfcwT6JFlxFvcOvZCxwlLuc5iUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx9odJdzIEbHBRl8ircA4pnGg3srjC%2Bc27XRukiz5%2FXxWLSvEqLUP97rUbSDdTRhbOwcz7Zb3QoL%2BYZLEpYQvcODaC5NwF3CL25PIx%2Bbl3jVEt%2Bae10TGsyUn48Qc6faJInxHxe3r0mAgKRF5vDm3oggtnaXX4QL9LFW0bNspSnKGH5ogD3pO93zTvYnXESwYBRBmGANRB%2BLM%2Bna0hhDWRCN23ER%2BcC%2F7x%2BQbVHZZXcwp3JqKESuWYMMqyG%2FioITRZcNlEBcG%2F%2F4eZaIwrI3Spu37NDl9Kk1x5VYIMEGuR%2FvGgUzDgFonVkdVYqC0%2Bjls2G26cqEG3oIjGW%2FwHG%2F8EXCF%2FWhVijSXwh4sgupD8Gy9bJFzsF%2BWqqfVQKSGvKcwPOCKzK7uCxoSUi%2B1ZpjPnnfKfqdPMNuLQej0SdLpkWV8iiVT0po01sV7XKyDMYstzwL67Wx1y6n4tEED%2BpqTW%2Bc5sjxLD%2BeNUBrhqepnHkGY9dn4deK98etWAiz1S2WPX3Bguj1btc%2BYgSbTn84ArOa5c4HVo2ldoQgyIPVMTLmE0775You9h0%2BdYdTZS08Arx2OqVyEvaj5bbSKj6L2NOs91RBjJh6sGcucUR%2FLukaHDv1F1SegoxVbqY0PkPlJ2ZK2Ec8qc92KuwMJiU2ckGOqUBaufMTLL8NkYMiNDbHsqKW09prame5fonOb36Y9IL%2FeQ78qUShkQItyJW5%2FmNdT6wCgDDgmZ%2BimIIvDaIi3dmrD5x7j6ye53sxW%2BpSAeHAqmVaq%2FqIvVmEzOKaJAGD0TKmrnfaE7t6RQ4XY6rQRJyI3vC4oNIVUrRT%2BgUzY2MaDyRAmktzu7EeKK5cByI6VL3Be5v65lO56wWUeNsvPbR6rWV4d3X&X-Amz-Signature=519a2befcb0ce6ab47a437afdbe38f518fb365b855f486caa6e84b82ade49483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

