---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMKNUX6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLC5AFXOCJnRkD2vVW%2BKR5MKlq%2BBTgafVvQ4bA%2FZFLOwIhAJESFwZ7AopII%2FBNygEi3EFnWDcImOWqWLee4g7W5BkjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJwsGmlA%2Bou7100PIq3AMZlw05u671xDGvDzN94K1XM8BRL8eE1qOcgGbWdBlfTqK8yGYiCxvSceZdRCYM81VtWYFSSgnk8xoSsH0lMRwGb7yp7lF9HbWdnDi5xMofro%2F72ioMU6hFzyxc%2BySlBaKoeCXxGvh8NY8XTHjhpzaurM25av2Pz8kwkyUnbua5JQwDfLtyaRLt02gMv6Vl5Y1o3LrUUdQ8ymQ6Gqk0l25Zbyc96nq0kj4TAjLot%2F86a9%2FJ%2F%2BceqQiT6tGQGaNDD%2FhYHhbB26IZKzTYpNLT3k4s8AK95NobSE63bDqRYwDzt8Ay01ryhEhkA6IeM4Wc5lsI9cnSUH6cLxtyVwXwoeq8Dsm4A%2F3Z62eUB4nomAwZeRuGMNls8ZShFOKFg71GZCzYd3kzc1EzSHVStfnqWn3e73oPvmK65BU0AMAzSp7%2F6l8b50rAAE0pT48yuKFQM17PRg8wHhQ8OqT8fHTbap9CDNbHe0NIkf%2FV5QhxsrSANAvja6i7rDX2u9L2MVepcF4DC%2FefHzDUODA300otWcM2yycWxeC2WIddg%2F4Qz%2FZVRGfw3f20rRhKQUwC6bMoncSwhomU0bukbjAkv%2B4OnKoip03ezzM%2BV3SVnVZkPNp8G0IKVvuZ9Asae%2BS8GDDZvtbJBjqkASwJKi%2FlY9vFo%2F%2Fot8YbMAam0JCSiYgaMGAVd5frV0RXA2iOpEkrWQ5WepeNC1iMT3JVftJOfXeQH%2F8Hjpy%2BmfNjh6pXP7gWtSvbWbWCcRfqc5d%2BtCT0%2FhSdofBJOEE%2BSw7vbPqeis7GlmeFhi8ufgUP4ylK14U3Svm6ye0wUtW8835%2FaIZq4cvj%2BxCVY1G%2BM34XMgfty4P3n10S8rAcQd7Ubvgz&X-Amz-Signature=0be7a74dbf2479247f42834988225b3d1ae19bbbcafc4bd69b2a4a7ba2fc8409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMKNUX6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLC5AFXOCJnRkD2vVW%2BKR5MKlq%2BBTgafVvQ4bA%2FZFLOwIhAJESFwZ7AopII%2FBNygEi3EFnWDcImOWqWLee4g7W5BkjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJwsGmlA%2Bou7100PIq3AMZlw05u671xDGvDzN94K1XM8BRL8eE1qOcgGbWdBlfTqK8yGYiCxvSceZdRCYM81VtWYFSSgnk8xoSsH0lMRwGb7yp7lF9HbWdnDi5xMofro%2F72ioMU6hFzyxc%2BySlBaKoeCXxGvh8NY8XTHjhpzaurM25av2Pz8kwkyUnbua5JQwDfLtyaRLt02gMv6Vl5Y1o3LrUUdQ8ymQ6Gqk0l25Zbyc96nq0kj4TAjLot%2F86a9%2FJ%2F%2BceqQiT6tGQGaNDD%2FhYHhbB26IZKzTYpNLT3k4s8AK95NobSE63bDqRYwDzt8Ay01ryhEhkA6IeM4Wc5lsI9cnSUH6cLxtyVwXwoeq8Dsm4A%2F3Z62eUB4nomAwZeRuGMNls8ZShFOKFg71GZCzYd3kzc1EzSHVStfnqWn3e73oPvmK65BU0AMAzSp7%2F6l8b50rAAE0pT48yuKFQM17PRg8wHhQ8OqT8fHTbap9CDNbHe0NIkf%2FV5QhxsrSANAvja6i7rDX2u9L2MVepcF4DC%2FefHzDUODA300otWcM2yycWxeC2WIddg%2F4Qz%2FZVRGfw3f20rRhKQUwC6bMoncSwhomU0bukbjAkv%2B4OnKoip03ezzM%2BV3SVnVZkPNp8G0IKVvuZ9Asae%2BS8GDDZvtbJBjqkASwJKi%2FlY9vFo%2F%2Fot8YbMAam0JCSiYgaMGAVd5frV0RXA2iOpEkrWQ5WepeNC1iMT3JVftJOfXeQH%2F8Hjpy%2BmfNjh6pXP7gWtSvbWbWCcRfqc5d%2BtCT0%2FhSdofBJOEE%2BSw7vbPqeis7GlmeFhi8ufgUP4ylK14U3Svm6ye0wUtW8835%2FaIZq4cvj%2BxCVY1G%2BM34XMgfty4P3n10S8rAcQd7Ubvgz&X-Amz-Signature=558d506806e43ac871fab7bae02faf8275df891a8d5b721d7751a9465daa51fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

