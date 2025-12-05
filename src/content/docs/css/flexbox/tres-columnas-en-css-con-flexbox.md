---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTPVATU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBXC9ceaJl%2Fq6plCr9xLF5e0uWAHH33T0gooduoooBXQIhAKLfjob%2Bx0Qzj6kxmjM3VDTddyXEkTkMuRjbGxysYopOKv8DCFoQABoMNjM3NDIzMTgzODA1IgzX96wJfKK%2BU77TFOMq3AOh9oDR2%2BPCfN3pHC%2Fz3cRSW%2BcAOaA9ik03RUo7VACGzzynzE2poi9of9XS6TSGBmN6A%2FlHoteMsDtSsuw5GQtRo2zI8Xkji7Vt4JzmBLfT1NBP%2FSSDnlyHRxQouncwJK%2BeSMt0qB8B7DGAP1YDQqAxPf7hJvJR7FZTB04NQbiahkHavxsZStDKEZoHGOjFawxd%2F4p73Y33r8bPki%2FkRE8eK%2FOi1VHfjsZTaO1yLrC59CXX%2BjDo9SFgDf2oBVHRHzBCMF1L%2BT4vWTa%2FLhphlNjinUMWFzdpvhXpJPn8HbbpV1PMq0btLb4bmvXf4kzr6%2Bxh14cuBLJ9t9zMZgBF38QD9M3%2FTTFrogAVYFsQO2uTYTo6X3ivh%2FJO2nXQQP4oCwc853wtTBrWoRFpfYWFOh6mUcXYyb%2FOFyRK3c3ylBuoXG85ZWTSKrK7bLspKblthS1u4%2B2UHE0XbOrtdHaBM3gkL8XSTi%2By0T2diGip%2F5sA6B1qxGsMNGe6P2kaq6XWrSgd%2BRn8R05tthBghKwVTOKcF1ZFEpRRXqMOVrbdqRXcb%2BZAMdc3grJo0bHWbPqvrIq3v7Ve%2BMWLs7p%2BYhLsupziUqAatrUa9JBtFXI%2FDoSe6f9nVchy3mwCUrsqozD4x8rJBjqkAdiokRgbR%2FKvge4Z%2BjCHEtkv2bsolD3ypcv7mONDRFXV1F8SLjTBBldY3BRAvmgcmZl1q73qfmLtYRNaluV728q%2BQB6wlcwR9ktN4DEtQKclCpD6wkdxPfWACuItskVr0oqrvEDUco3SufyNCLghhPF4oLAfEjjie3NKSVp3Y9%2FRnUllXvhCJrWEegkqrEeBnM8KEhUn6TK0HMMpRfAYAp02YTHh&X-Amz-Signature=84fd379f9be513bfad4163a322f4f8f54b9796f74bb435219c0249470512e152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTPVATU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBXC9ceaJl%2Fq6plCr9xLF5e0uWAHH33T0gooduoooBXQIhAKLfjob%2Bx0Qzj6kxmjM3VDTddyXEkTkMuRjbGxysYopOKv8DCFoQABoMNjM3NDIzMTgzODA1IgzX96wJfKK%2BU77TFOMq3AOh9oDR2%2BPCfN3pHC%2Fz3cRSW%2BcAOaA9ik03RUo7VACGzzynzE2poi9of9XS6TSGBmN6A%2FlHoteMsDtSsuw5GQtRo2zI8Xkji7Vt4JzmBLfT1NBP%2FSSDnlyHRxQouncwJK%2BeSMt0qB8B7DGAP1YDQqAxPf7hJvJR7FZTB04NQbiahkHavxsZStDKEZoHGOjFawxd%2F4p73Y33r8bPki%2FkRE8eK%2FOi1VHfjsZTaO1yLrC59CXX%2BjDo9SFgDf2oBVHRHzBCMF1L%2BT4vWTa%2FLhphlNjinUMWFzdpvhXpJPn8HbbpV1PMq0btLb4bmvXf4kzr6%2Bxh14cuBLJ9t9zMZgBF38QD9M3%2FTTFrogAVYFsQO2uTYTo6X3ivh%2FJO2nXQQP4oCwc853wtTBrWoRFpfYWFOh6mUcXYyb%2FOFyRK3c3ylBuoXG85ZWTSKrK7bLspKblthS1u4%2B2UHE0XbOrtdHaBM3gkL8XSTi%2By0T2diGip%2F5sA6B1qxGsMNGe6P2kaq6XWrSgd%2BRn8R05tthBghKwVTOKcF1ZFEpRRXqMOVrbdqRXcb%2BZAMdc3grJo0bHWbPqvrIq3v7Ve%2BMWLs7p%2BYhLsupziUqAatrUa9JBtFXI%2FDoSe6f9nVchy3mwCUrsqozD4x8rJBjqkAdiokRgbR%2FKvge4Z%2BjCHEtkv2bsolD3ypcv7mONDRFXV1F8SLjTBBldY3BRAvmgcmZl1q73qfmLtYRNaluV728q%2BQB6wlcwR9ktN4DEtQKclCpD6wkdxPfWACuItskVr0oqrvEDUco3SufyNCLghhPF4oLAfEjjie3NKSVp3Y9%2FRnUllXvhCJrWEegkqrEeBnM8KEhUn6TK0HMMpRfAYAp02YTHh&X-Amz-Signature=122ae8c70c91478d628da26236c8223e9589f45c91d446a808282bf378ea225b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

