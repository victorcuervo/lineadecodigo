---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFC3OPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlEpovwc0y7zzTgNjVxnRmhbZviD%2FclzTuphHERn25AiBeYuqz4fX1z64LOfoutwrG0T2YoH5RipZ9uNz%2FEqCoFyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6CqhdA%2BhBffwBJs0KtwDhqc%2F8HedmqUtx56pQMB6faE07AZNJSAefvXmemcLcU0t%2BRXo5sE1%2B9AlAW3b0tVHQZwr9%2BQ76gCfRiL7an7uyTLXj38Ed9Wphkci6reaT1%2BTJ5JrvJZDPALB0XmVd7WY4PCm2W4seAPiR03%2FPFm0fLJ5wYUqRXIzL7iabkBfrkENhxapV7OuuhF80Cla70yz2W5WELRjujValOc37YCVTOyG9Q4hE3Nna7fR3OFs6C2R1boTkljfGHW4z1mHmTnmRx7OKBVEMKNWhpLcEetW0VAW9XyHd8Cbu01qBJubbMG%2F0PYCCO70qrApVI8fsNoBjucEZj8bu7Hk%2F7Oi%2BWp9iYelhrGJri7k1ofVTpa%2BvU6Pv5jRN%2FUkf01pi%2BSOQnijJJzB5idZm3zrUl0g4NXJGp2DQj%2FFRHLg4XGGZpWeno30%2FZJCG8n7wI5m1Llse3XNRarAWwFMwi7tueDqRPwGNXASrE0XGWH4cie%2F4bJros2WFQgtRbqwyjxAIzlSWGsSyHgu%2BRNfeVNW8NjZEEh7DYmSiBIJE6Oor6sRNNSCV5jkxVpKlqj%2BTuhXrjWg4dw%2FlU%2FYZc6IXrCA92E2j55MFpu8DYpWGVPxWVKwgPHPcDr1sRHwMjNLAR9ih1cwvo7eyQY6pgFDpQvz16gUkhcvIKF8%2BfTDBRPISW2Yu9poW%2BSXnhtb89Y8qg8OK8qWMG12SJjwujEJ%2FbjtdljB7EaitoN8OC3qV9%2BPy%2Bpd9WUrNqr%2BAor%2Fw2hEcNCGFcGhbu4KeDTCgWg%2FnHi31tk4dxBXvGZvqdDsmjR9p9%2BH90pu1Vmt0IZ6poqVnuMEXn677vyWXYtSAKHbb99XIYwfL%2Bjrpx2TuDxAwt4QIU8S&X-Amz-Signature=783bc99913df23503547067f84015631a60b0b3c3fd405dfd9cc1999cbd70b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFC3OPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlEpovwc0y7zzTgNjVxnRmhbZviD%2FclzTuphHERn25AiBeYuqz4fX1z64LOfoutwrG0T2YoH5RipZ9uNz%2FEqCoFyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6CqhdA%2BhBffwBJs0KtwDhqc%2F8HedmqUtx56pQMB6faE07AZNJSAefvXmemcLcU0t%2BRXo5sE1%2B9AlAW3b0tVHQZwr9%2BQ76gCfRiL7an7uyTLXj38Ed9Wphkci6reaT1%2BTJ5JrvJZDPALB0XmVd7WY4PCm2W4seAPiR03%2FPFm0fLJ5wYUqRXIzL7iabkBfrkENhxapV7OuuhF80Cla70yz2W5WELRjujValOc37YCVTOyG9Q4hE3Nna7fR3OFs6C2R1boTkljfGHW4z1mHmTnmRx7OKBVEMKNWhpLcEetW0VAW9XyHd8Cbu01qBJubbMG%2F0PYCCO70qrApVI8fsNoBjucEZj8bu7Hk%2F7Oi%2BWp9iYelhrGJri7k1ofVTpa%2BvU6Pv5jRN%2FUkf01pi%2BSOQnijJJzB5idZm3zrUl0g4NXJGp2DQj%2FFRHLg4XGGZpWeno30%2FZJCG8n7wI5m1Llse3XNRarAWwFMwi7tueDqRPwGNXASrE0XGWH4cie%2F4bJros2WFQgtRbqwyjxAIzlSWGsSyHgu%2BRNfeVNW8NjZEEh7DYmSiBIJE6Oor6sRNNSCV5jkxVpKlqj%2BTuhXrjWg4dw%2FlU%2FYZc6IXrCA92E2j55MFpu8DYpWGVPxWVKwgPHPcDr1sRHwMjNLAR9ih1cwvo7eyQY6pgFDpQvz16gUkhcvIKF8%2BfTDBRPISW2Yu9poW%2BSXnhtb89Y8qg8OK8qWMG12SJjwujEJ%2FbjtdljB7EaitoN8OC3qV9%2BPy%2Bpd9WUrNqr%2BAor%2Fw2hEcNCGFcGhbu4KeDTCgWg%2FnHi31tk4dxBXvGZvqdDsmjR9p9%2BH90pu1Vmt0IZ6poqVnuMEXn677vyWXYtSAKHbb99XIYwfL%2Bjrpx2TuDxAwt4QIU8S&X-Amz-Signature=857f76ab00631cf6ca2e2c3f4edd6f533bf5ffdc5e6deac0cf15cc4b491edf05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

