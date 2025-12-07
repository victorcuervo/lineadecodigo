---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DIFULK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1uZgkjHjzgE1SBI7cNuSnYvq%2F3jPX97LQI6ZrIWCxTQIgdjJTrClBXccsL8d8q22Z100Aoys8UuK0EYpRroY9XGcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe2FiNCDcLjGS12CrcAwIvZjCOg%2FHpPnx1cyAxNR8XuddkopsXU%2BxgQwWRHdkf42wrhyne4Xdn7rUOlU1toc00ujnkbO5WCccG6ztRd1Sr2h47gJmoiUOP%2BPh%2B9tbeHqXqMjItzbS76Klw9NTPqrGLor60XeHPb13HQqs0dmKUUCzGRG6tAMs16d3EK%2Bd39ArlBbmhy2MI4t8jPGhJZZjuobN%2FzqqkHNrRdfXhr9nhcGxuKgAQXMpGI1CXxf2hBXxT2OJmq5BfF%2FHkOhs3LfpkybAO1G4u5gTctN%2BW6gubXIzlS0n8bYRIv7znjUBw4BqTyPOp6m%2Bhu4JZYj%2Fp%2B7V%2FlP9N%2FtKSYf%2BxCWYqpUBI8rlCYkHw6jpnm5PsrjSADjB%2BdjhCPHrugPKBOgnE17GrBWgdnhrhI4DK5KG3QvO2e9LHj8XRMjPHWywOIn9bwXLS6O9%2FHdz3ei10LgX13BK47x4SSfQObdX8O5IN9Df3nSuvo2xt86DiitgYnNv5Uem6HoZWhrSItP0y7hEL9r3FuomnV5mI06szw4Exet26oTURG6q8Hb6H9cg4IXedYkFwTnCT2s5dPHTRD8FHw%2BUARuUlnT%2F4bTbFDU6DJxgMjqz%2BNoyNniMXA3n4ToN1%2F7K%2FLlEQSVPBxQIXMKCa1ckGOqUBmWiJc6vJCtsO7WmW7%2FCnK9%2FJXB%2FvZXrLda1Ui817KOsfzrUGL6RgBUnucLkDTU7xKyUV7HtkoVyIJ05tI2g5PGZnzjI5q2Fy4hvCYmPHtA25noA6FXicbGQCwC52BdFgQOzxgXd7mjCeLwaYpdhVB%2FdYrhsqHGOcJb1jC7Dh45BiS%2BcABjNSsg68gloFz%2FTycqGNDBICyzVkuSXCieWQAeB2%2Fz1z&X-Amz-Signature=3d519d46ad18b7302565a1df95f4ff640e6dc33bd71bb7cd04a1ad83ad9855e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DIFULK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1uZgkjHjzgE1SBI7cNuSnYvq%2F3jPX97LQI6ZrIWCxTQIgdjJTrClBXccsL8d8q22Z100Aoys8UuK0EYpRroY9XGcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe2FiNCDcLjGS12CrcAwIvZjCOg%2FHpPnx1cyAxNR8XuddkopsXU%2BxgQwWRHdkf42wrhyne4Xdn7rUOlU1toc00ujnkbO5WCccG6ztRd1Sr2h47gJmoiUOP%2BPh%2B9tbeHqXqMjItzbS76Klw9NTPqrGLor60XeHPb13HQqs0dmKUUCzGRG6tAMs16d3EK%2Bd39ArlBbmhy2MI4t8jPGhJZZjuobN%2FzqqkHNrRdfXhr9nhcGxuKgAQXMpGI1CXxf2hBXxT2OJmq5BfF%2FHkOhs3LfpkybAO1G4u5gTctN%2BW6gubXIzlS0n8bYRIv7znjUBw4BqTyPOp6m%2Bhu4JZYj%2Fp%2B7V%2FlP9N%2FtKSYf%2BxCWYqpUBI8rlCYkHw6jpnm5PsrjSADjB%2BdjhCPHrugPKBOgnE17GrBWgdnhrhI4DK5KG3QvO2e9LHj8XRMjPHWywOIn9bwXLS6O9%2FHdz3ei10LgX13BK47x4SSfQObdX8O5IN9Df3nSuvo2xt86DiitgYnNv5Uem6HoZWhrSItP0y7hEL9r3FuomnV5mI06szw4Exet26oTURG6q8Hb6H9cg4IXedYkFwTnCT2s5dPHTRD8FHw%2BUARuUlnT%2F4bTbFDU6DJxgMjqz%2BNoyNniMXA3n4ToN1%2F7K%2FLlEQSVPBxQIXMKCa1ckGOqUBmWiJc6vJCtsO7WmW7%2FCnK9%2FJXB%2FvZXrLda1Ui817KOsfzrUGL6RgBUnucLkDTU7xKyUV7HtkoVyIJ05tI2g5PGZnzjI5q2Fy4hvCYmPHtA25noA6FXicbGQCwC52BdFgQOzxgXd7mjCeLwaYpdhVB%2FdYrhsqHGOcJb1jC7Dh45BiS%2BcABjNSsg68gloFz%2FTycqGNDBICyzVkuSXCieWQAeB2%2Fz1z&X-Amz-Signature=eab6c616cfd94fe4614f81eaefa9be7c88040194c4796bbd0e0d91c3a0b7de6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

