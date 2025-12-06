---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJI4OOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzRLcyOGZ3DQ6RmSqVMcZEMNADvEQEEiEyjgrvH%2BUjyAiEAwvOaw4EDqm4lAjH27cfnrjPfj1tdqss02XykRYXKPOEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOPgUhZn%2F96GQiT3JSrcAw4xYUKqzmlB1j3OEQtCiGSRJYBo1Qjs0l6YoAZqvgp3qM5Dwi8GLPJzqG%2FLmJZWt0zbqK4y85XhqmOUgNOHAvSmWOcE9%2F2CAeFaDK5QWXL9aut5eCPNaFTkTCHCbGiNSkRrOBqJqnTj7yqMrfDH8zVYh1cVTjJkKrSeswuPva9oJAQ175bKyc92tnq7GddB%2FP4QdTmatb1eLo9OrolLQzPbbdPM221s5jbap1Cvh3PH4rMxf1Ao%2FxtSnG2Wreos52DMPeKVQD0AGGxd6F3cZkIl4CW%2FRPLsSoJfxLWwV28OSLl3VuhpavkLxKgOoaNUb5t9aCI7IUV7XlVLnlUtvzs%2FU8b380JlTfYcmlX98D7gEbgWxLa%2B8%2FrUlpNvIYDm3%2Bbq6iOoxqPN%2BK%2Bw6%2FV2CQlB8ahc%2FfqUCU0Q3DKGjYT3Zb4mp6aOn2giNUMAMKlT0Ye5KmPT1RIIM8OheYXkdqpLDh7KeIk2JAXFc4hvBCRJOKftBI8RTnmJgak7uqwqCKjyVBrHdgYb4hSRqKs2aJFvKLEG2nN27g1N9Cra%2BBQ%2FSO%2Bzok0Xx5gcUGXsg%2FhIDL%2FL6oSsd4q%2FMGQbOqYoS9MYENlTTJ7qtKwBpnvO4ouHKAr%2BHhJxDGtri3aSMJbI0ckGOqUBpV4vSBsmIEchQAM27IQ061cH03j%2BLIxTiF8VlYAJkaNZRQHg8emvz%2BVQHovbT5H494oxYk7N%2BxGLEKWYejfKm6HSCBUe8636gFdqDFWaDo69paub5R5VrLGo45RkpR9vNYai4TqPffP%2Fey82ZaSNfYcGy%2B60BE%2FFB8Z0QNBZ853GD4%2FnvF4JK0yQAd9O%2FKVq9CMmaexiLAvzMp5zyq0KBarpH2tD&X-Amz-Signature=99fbdccf37cd6a528cc5a25c9420089de783d476709bfc7099a8a69f4a0b1dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJI4OOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzRLcyOGZ3DQ6RmSqVMcZEMNADvEQEEiEyjgrvH%2BUjyAiEAwvOaw4EDqm4lAjH27cfnrjPfj1tdqss02XykRYXKPOEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOPgUhZn%2F96GQiT3JSrcAw4xYUKqzmlB1j3OEQtCiGSRJYBo1Qjs0l6YoAZqvgp3qM5Dwi8GLPJzqG%2FLmJZWt0zbqK4y85XhqmOUgNOHAvSmWOcE9%2F2CAeFaDK5QWXL9aut5eCPNaFTkTCHCbGiNSkRrOBqJqnTj7yqMrfDH8zVYh1cVTjJkKrSeswuPva9oJAQ175bKyc92tnq7GddB%2FP4QdTmatb1eLo9OrolLQzPbbdPM221s5jbap1Cvh3PH4rMxf1Ao%2FxtSnG2Wreos52DMPeKVQD0AGGxd6F3cZkIl4CW%2FRPLsSoJfxLWwV28OSLl3VuhpavkLxKgOoaNUb5t9aCI7IUV7XlVLnlUtvzs%2FU8b380JlTfYcmlX98D7gEbgWxLa%2B8%2FrUlpNvIYDm3%2Bbq6iOoxqPN%2BK%2Bw6%2FV2CQlB8ahc%2FfqUCU0Q3DKGjYT3Zb4mp6aOn2giNUMAMKlT0Ye5KmPT1RIIM8OheYXkdqpLDh7KeIk2JAXFc4hvBCRJOKftBI8RTnmJgak7uqwqCKjyVBrHdgYb4hSRqKs2aJFvKLEG2nN27g1N9Cra%2BBQ%2FSO%2Bzok0Xx5gcUGXsg%2FhIDL%2FL6oSsd4q%2FMGQbOqYoS9MYENlTTJ7qtKwBpnvO4ouHKAr%2BHhJxDGtri3aSMJbI0ckGOqUBpV4vSBsmIEchQAM27IQ061cH03j%2BLIxTiF8VlYAJkaNZRQHg8emvz%2BVQHovbT5H494oxYk7N%2BxGLEKWYejfKm6HSCBUe8636gFdqDFWaDo69paub5R5VrLGo45RkpR9vNYai4TqPffP%2Fey82ZaSNfYcGy%2B60BE%2FFB8Z0QNBZ853GD4%2FnvF4JK0yQAd9O%2FKVq9CMmaexiLAvzMp5zyq0KBarpH2tD&X-Amz-Signature=e58633a2d85f0a6f2d20fb4c8477e61d1cb75bba8755c473416321aa5eb2e1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

