---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHHUPB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2BpTYPLXTuNasXI7dELvpdMx0vDack9Jvr0MuQNCIngIhAOMCfSGC3voOLol1PO%2FOCVeFmMworekMdA8tQyW4qF5RKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh17e7Y6Uy6hDekuIq3AP0Ol8vdhH9U6YxTthsoKiu4VMtvwZ3rmLnwl5F8vO%2FRahb9sPIOsYlwqi2RBuMVMZT4L0sWhE88yl3cEfNn%2FE3bXXcPYy5EGJgLZeNuGdxXuN6m6CdD102UV4r%2FSro0dqoERu2FNwLoySjfMBeDV%2FnwIs4Q3wzE%2BWYB3K%2BbEocqNx4x7plIvxEkM54L6QQAoSEwF0KAPTgG3irpWxP2K%2Bglt0N6X9SXcHUOxboug%2BKG%2BwnIqXiyNqMsMu0HVgLabQxTBxcnPF%2F3b3PKn8MQw5LEJg6Yz9b5TfHx6nTd%2BTMUleJPOlYtLUXSckGVgN%2Bo86i9I4%2BOiJjWqoQiQhwzEIAuB1B3SB5%2FO7AJvbpi9GSLbEStoETL%2BvVDwLdL7JX80JvltxpVP5Mv%2FsX4bnIOYW1rsdcJS7ZruHQKoJlD9QJs6coyjppsI%2FF5ll8tjOaw0owG5tvLhdHRRffVfEna73LbebbwPywib39iqpI34vB8MQkXpCqVtjjsWBI0wvujmpSvxdDg3Y9XgTfYFeAAjykyXW9aPVNJY0WPbqS7Fs6C3eG%2F23KnNqIImg5Y2JZ1gOlqkheTWMgprfg3FeNRthl%2F8nG%2B2HkYs6zESSReFRE0vXhbEoz7FwSxPz4ZTDU3NzJBjqkARLj9XC6qnrlLdBAUaCAAgj1qGmq4MYwIrra4N9TiG4H4oIPEVCebnsziu3PzYS1RQl0dzbRo1nR%2BabvV1qB4NIpweONLR4peGpJSsFTMV55TqAxcfYwUseeIQTOj6PsEpCTWyJyZxhV8FWqGAdvBD4A2VDQxKFjLCkLtLXDGQnB7GE9Z1Wnjg7YW%2FqYFk%2Flk%2FUrVmd4tLWqWzQ7celTjs2CuVoP&X-Amz-Signature=e512d14c27be06a3c2d7e09968296dcd341ac53f555166522c8b2096d90f22cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHHUPB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2BpTYPLXTuNasXI7dELvpdMx0vDack9Jvr0MuQNCIngIhAOMCfSGC3voOLol1PO%2FOCVeFmMworekMdA8tQyW4qF5RKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh17e7Y6Uy6hDekuIq3AP0Ol8vdhH9U6YxTthsoKiu4VMtvwZ3rmLnwl5F8vO%2FRahb9sPIOsYlwqi2RBuMVMZT4L0sWhE88yl3cEfNn%2FE3bXXcPYy5EGJgLZeNuGdxXuN6m6CdD102UV4r%2FSro0dqoERu2FNwLoySjfMBeDV%2FnwIs4Q3wzE%2BWYB3K%2BbEocqNx4x7plIvxEkM54L6QQAoSEwF0KAPTgG3irpWxP2K%2Bglt0N6X9SXcHUOxboug%2BKG%2BwnIqXiyNqMsMu0HVgLabQxTBxcnPF%2F3b3PKn8MQw5LEJg6Yz9b5TfHx6nTd%2BTMUleJPOlYtLUXSckGVgN%2Bo86i9I4%2BOiJjWqoQiQhwzEIAuB1B3SB5%2FO7AJvbpi9GSLbEStoETL%2BvVDwLdL7JX80JvltxpVP5Mv%2FsX4bnIOYW1rsdcJS7ZruHQKoJlD9QJs6coyjppsI%2FF5ll8tjOaw0owG5tvLhdHRRffVfEna73LbebbwPywib39iqpI34vB8MQkXpCqVtjjsWBI0wvujmpSvxdDg3Y9XgTfYFeAAjykyXW9aPVNJY0WPbqS7Fs6C3eG%2F23KnNqIImg5Y2JZ1gOlqkheTWMgprfg3FeNRthl%2F8nG%2B2HkYs6zESSReFRE0vXhbEoz7FwSxPz4ZTDU3NzJBjqkARLj9XC6qnrlLdBAUaCAAgj1qGmq4MYwIrra4N9TiG4H4oIPEVCebnsziu3PzYS1RQl0dzbRo1nR%2BabvV1qB4NIpweONLR4peGpJSsFTMV55TqAxcfYwUseeIQTOj6PsEpCTWyJyZxhV8FWqGAdvBD4A2VDQxKFjLCkLtLXDGQnB7GE9Z1Wnjg7YW%2FqYFk%2Flk%2FUrVmd4tLWqWzQ7celTjs2CuVoP&X-Amz-Signature=3d00c2ddf360c9e4d539b3b92445885ba622accc563f50d9458efbf570345780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

