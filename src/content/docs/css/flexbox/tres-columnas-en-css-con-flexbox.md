---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6GOYC3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeqgWxKl%2B8Syiir5b551zbJZwrZpCsNu26fL%2Baz%2B67wIhAPigd991PxmEd%2BD0ma8REL%2F79%2FWCwr7ZWAj%2FbDUkII%2FyKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmgccByDLJNZGGA38q3AOomo5K1vqKM4%2Ft2gvyfCMXqkuzu4UjIjoAqJLhcZauz%2FsrJhXSfT9Hf01CzyEbyj2A7HjjtVOcryhIkZcFDu6lOzbM8t876c3VpnZd1sfzPFr5K6AOX0Suf9ECA0aEVJuuf7BHm7SZPaG6eg17tQQMSfMEDEw7cu%2FJnjy68qgzR0FLTP7%2BY7J3g4ndrhwYMNJMA9URlX%2BTPChXT0RS1R3BDPc7m3n8gLEj%2B3M0IdH44W3wfRUqNrlj0GkIX1fGs33%2FCPDtZ2C%2FbaVZVQkyLq6t3DGwqFZ1s%2FnxmrW0fCXzw1wE0UelRbo%2BYmyGoBJC3bza7O74jbAAX0m%2BeemHBgAkeIbsK4moKnshnuO3KYgvAAFNedl8FgJKj09PSrQqqaBUxL4NuwXpZTHFTZ9Edqmzmtwq%2F9pIbCKAKQJVbIVkZS3%2Br2kdvN2mgjnytNFBucFxj%2FYJML0MfdQkx2movcc%2Ft9C6yqd3JDJsLBX%2FcrpOMifh%2B96gi2Om6rZhcm9K%2BUZTMunyucCMAa8aNGJfFqJfuq5UbBREI3o7U1NNiT0VohI9pszkD%2FgNfiO0k%2BPow7SD4vUQoj%2FILfZxs6Vw1di8nwKVbauv3NskQPgncX%2BiNcN44HHKhs7PClrfCzDJ6M3JBjqkAXpJfW1X345EqggxN5UCpCs8yoTQID7zwdlVgLbrP7GgG7sTG408KVZrKTVkTIYRRehqjHEfLanUA7MV26ysDAgi0LGd7kO9A7uR8TBGt7xoS9j1xyiinFhAC0er%2Frkd2YrCilCPCcMHw8ppRwm2Rz%2BcvbAG%2BC5qaNOzqyb7uxaY4xmkINf3A3C7S1Ip%2BAXzbWqszL%2BqfbwO2VqN9vMtp9T4eV2t&X-Amz-Signature=6d1503401df8a1ce300c61c818f14de499564ee31c3a8f26482cb138c5866eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6GOYC3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeqgWxKl%2B8Syiir5b551zbJZwrZpCsNu26fL%2Baz%2B67wIhAPigd991PxmEd%2BD0ma8REL%2F79%2FWCwr7ZWAj%2FbDUkII%2FyKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmgccByDLJNZGGA38q3AOomo5K1vqKM4%2Ft2gvyfCMXqkuzu4UjIjoAqJLhcZauz%2FsrJhXSfT9Hf01CzyEbyj2A7HjjtVOcryhIkZcFDu6lOzbM8t876c3VpnZd1sfzPFr5K6AOX0Suf9ECA0aEVJuuf7BHm7SZPaG6eg17tQQMSfMEDEw7cu%2FJnjy68qgzR0FLTP7%2BY7J3g4ndrhwYMNJMA9URlX%2BTPChXT0RS1R3BDPc7m3n8gLEj%2B3M0IdH44W3wfRUqNrlj0GkIX1fGs33%2FCPDtZ2C%2FbaVZVQkyLq6t3DGwqFZ1s%2FnxmrW0fCXzw1wE0UelRbo%2BYmyGoBJC3bza7O74jbAAX0m%2BeemHBgAkeIbsK4moKnshnuO3KYgvAAFNedl8FgJKj09PSrQqqaBUxL4NuwXpZTHFTZ9Edqmzmtwq%2F9pIbCKAKQJVbIVkZS3%2Br2kdvN2mgjnytNFBucFxj%2FYJML0MfdQkx2movcc%2Ft9C6yqd3JDJsLBX%2FcrpOMifh%2B96gi2Om6rZhcm9K%2BUZTMunyucCMAa8aNGJfFqJfuq5UbBREI3o7U1NNiT0VohI9pszkD%2FgNfiO0k%2BPow7SD4vUQoj%2FILfZxs6Vw1di8nwKVbauv3NskQPgncX%2BiNcN44HHKhs7PClrfCzDJ6M3JBjqkAXpJfW1X345EqggxN5UCpCs8yoTQID7zwdlVgLbrP7GgG7sTG408KVZrKTVkTIYRRehqjHEfLanUA7MV26ysDAgi0LGd7kO9A7uR8TBGt7xoS9j1xyiinFhAC0er%2Frkd2YrCilCPCcMHw8ppRwm2Rz%2BcvbAG%2BC5qaNOzqyb7uxaY4xmkINf3A3C7S1Ip%2BAXzbWqszL%2BqfbwO2VqN9vMtp9T4eV2t&X-Amz-Signature=ac1453e3ae960b75480f4a22fcd2abfe6898c6b2ce91942b9f31ab866153724f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

