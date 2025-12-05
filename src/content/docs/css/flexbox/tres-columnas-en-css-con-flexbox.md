---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQ2Q2N5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu02K7EcIUy5Mf4utQNpZvD8j4NB7JR%2FW3IgtftuvV3gIgJWqAlp9LyHO9MSmIqwStWvmJMuyKP4BjhVoHiPX9Nk8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGkznGepNHPVHXcOpCrcAwdkfYuJ4r0VGhZfiwaiXvgAhPDxH4pxFR1HIPazJJN%2FwGjgEDg8x2geF1NvNcomBBumvAK5ifRZzBaMBK34D16uy%2BZr0OkhzWLSLIvfrCeoQDeZXNYhL%2F9azv%2FnKKfENLdDAIDs8%2FHhceD%2Fel1YLy8AHWLOnixgcxMf4PRGU9VnGoXggGLPzVU62YfrDqtz3mwSIKbZMr2bcU1dVJ%2FPwtshc%2FEADyLyGgIE%2FeKCJUFu8j953ytx8LXkvTiX4UDyvUttwcQpcqDpfnLi5WYN09XR7hUaqiGivk%2FRaJzLEpnJNwXujGL61GSYjLIn3OuKfTQrItV51CRUxdhgpkvj9btFC%2BzKOUSXxMfNzwUMgIuJnG4dJP9%2Fn4QKz7AqXvTOQMpNW%2Fd6kYSOB78R4CWqnyveYyxDqNLkgCqSeLG8al5dYg2luhAtmT3Xk6lZpxl0fvccuSGrmW2YDvulp5T0kg5qceTfYDZBIyYXsEjYtEanEW4RIUnxMtDD8ApXZA0BiA%2BjS5WaoZLZdSk%2FPbHPENq0IBMssTF3qoZsMhXoicJ2RQ6%2F2qEMFaslKsCDUfwncLLais%2BzZA9hGPX78SN%2Fn0lVbQy2AR8fRqEjywEjsf61VWnMxrYhXBJJ%2FdudMJ7iy8kGOqUB7OqmgQwyxD7oKOG%2FyJfB9TgW3DUoNx%2FpL2lUqzEtCbljT3aWoPtyMONstkBEgc7so1A5D9A6l3LyHIEIjboP%2Fl3Fu8a4YQM23tir5oMpucuHeVA%2FV7zyof6fGkMNv2PrN8ZmB1hme%2BK%2BFVi4X6Q45vOPOXAUVuW4LhC%2B%2By3RfX50UbF6GKObvHQ4OxBwFq2wbKdMk%2FU8utjjbb3%2BpUVYi%2FzamhSy&X-Amz-Signature=0d65b3852b18b893c3f47b2bfb361430f7df51c4569100c8cf7908924697c6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQ2Q2N5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu02K7EcIUy5Mf4utQNpZvD8j4NB7JR%2FW3IgtftuvV3gIgJWqAlp9LyHO9MSmIqwStWvmJMuyKP4BjhVoHiPX9Nk8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGkznGepNHPVHXcOpCrcAwdkfYuJ4r0VGhZfiwaiXvgAhPDxH4pxFR1HIPazJJN%2FwGjgEDg8x2geF1NvNcomBBumvAK5ifRZzBaMBK34D16uy%2BZr0OkhzWLSLIvfrCeoQDeZXNYhL%2F9azv%2FnKKfENLdDAIDs8%2FHhceD%2Fel1YLy8AHWLOnixgcxMf4PRGU9VnGoXggGLPzVU62YfrDqtz3mwSIKbZMr2bcU1dVJ%2FPwtshc%2FEADyLyGgIE%2FeKCJUFu8j953ytx8LXkvTiX4UDyvUttwcQpcqDpfnLi5WYN09XR7hUaqiGivk%2FRaJzLEpnJNwXujGL61GSYjLIn3OuKfTQrItV51CRUxdhgpkvj9btFC%2BzKOUSXxMfNzwUMgIuJnG4dJP9%2Fn4QKz7AqXvTOQMpNW%2Fd6kYSOB78R4CWqnyveYyxDqNLkgCqSeLG8al5dYg2luhAtmT3Xk6lZpxl0fvccuSGrmW2YDvulp5T0kg5qceTfYDZBIyYXsEjYtEanEW4RIUnxMtDD8ApXZA0BiA%2BjS5WaoZLZdSk%2FPbHPENq0IBMssTF3qoZsMhXoicJ2RQ6%2F2qEMFaslKsCDUfwncLLais%2BzZA9hGPX78SN%2Fn0lVbQy2AR8fRqEjywEjsf61VWnMxrYhXBJJ%2FdudMJ7iy8kGOqUB7OqmgQwyxD7oKOG%2FyJfB9TgW3DUoNx%2FpL2lUqzEtCbljT3aWoPtyMONstkBEgc7so1A5D9A6l3LyHIEIjboP%2Fl3Fu8a4YQM23tir5oMpucuHeVA%2FV7zyof6fGkMNv2PrN8ZmB1hme%2BK%2BFVi4X6Q45vOPOXAUVuW4LhC%2B%2By3RfX50UbF6GKObvHQ4OxBwFq2wbKdMk%2FU8utjjbb3%2BpUVYi%2FzamhSy&X-Amz-Signature=3a73b63278cc8e90ce1309c60d268724ca60540a7d0a786f068597d6982f0085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

