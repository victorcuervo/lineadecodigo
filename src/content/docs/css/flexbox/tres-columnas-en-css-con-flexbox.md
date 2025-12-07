---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAJ7LCW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FL0E7FcNDdRN5Dx1hpiJkREsweaqseq6vHSIOlkPbnAiAAygJS7vfMRTL%2BPU%2FItkPlqOa%2FnxyAV1tckijSP1gLoSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNJwHaTjItJZksRDKtwDKXw9DqkjvwXVu3uyQuKbo%2FAYMrqnM7tRZGxtMbDRV%2F6KzqsZyBvhALXos7SrH%2BGpHPk4o3hkawJLMxtoxWIwQH6iFkaw1yjd%2Bn6lJSg2qfgICcymVYudY%2BH%2BycI5YIWIOIzvC9HRK1goK%2BFNkNc5trsGWGGUwOqOh9Y%2Ftc%2FR44mu1dHbE0gjrqBd0%2BSvN1kiDZk%2FEu4uNgILTEpZQkNFF%2BkF6w8Sn4lRxUyQbuIzh1fKmqKD%2Ftjy6onmI0hdssMY6eWoL4f2jxxNte6%2B9X8eDUhEMkKGdVGmwb7ynCuZjXXhpNICf2DHIuPMybCF20GRuZ3Sohu2g2XH0En7l1lkWZO3MfLVScEDOeoIEi77epB1oaEQaYch2jIuJfjt70cZwEQbL3IdzZz0xKQZZkhSpYyQ42o3Q0y8O7ZJmifU2FFOSDLD1mdC3zTlJZXZ%2FlMkoROuFVeKyEMNkv%2F21Lmq05r%2Bi%2BnXVjQ0qPjcEb7RSbF5RwlBwS6aBOysgweHRBB7DH%2B4zWCVlP9DVABaQmURFSi6RnA5E8WyJbqi9%2FRaC0FZTcjP1hhie2WpJVEUjGARFZ4g9nKdaF8nvb4KLE8q2zIGJStXDWnbYQhadSy7oLQMowmklfB%2BzdmpMg0wrv7SyQY6pgH25jZXp6%2FTWYpcQuDI90UP0MAtTnomFoCYZdgMx5xNO3LKufDJRXTVmrdTfdhIksfAPH0CuoQUrVIoDtQadffuUj%2BsGixuPEnGNpQlGdRSGQo7TnjkClGNXwuZqNoeUD9DKeZPFYOqdA2t%2Fbaw%2BYz01Mn6ljVUqK2d3kqMTYbdV1IFU4Q9y%2BZadZz%2BS2HA9QFWXGjSRbEZdqJS%2BDI0OJPFRua6xfCQ&X-Amz-Signature=bfb1d46aec648c8c8fedaf6574ebe964ce1125fac46b29457efdafa847b412e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAJ7LCW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FL0E7FcNDdRN5Dx1hpiJkREsweaqseq6vHSIOlkPbnAiAAygJS7vfMRTL%2BPU%2FItkPlqOa%2FnxyAV1tckijSP1gLoSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNJwHaTjItJZksRDKtwDKXw9DqkjvwXVu3uyQuKbo%2FAYMrqnM7tRZGxtMbDRV%2F6KzqsZyBvhALXos7SrH%2BGpHPk4o3hkawJLMxtoxWIwQH6iFkaw1yjd%2Bn6lJSg2qfgICcymVYudY%2BH%2BycI5YIWIOIzvC9HRK1goK%2BFNkNc5trsGWGGUwOqOh9Y%2Ftc%2FR44mu1dHbE0gjrqBd0%2BSvN1kiDZk%2FEu4uNgILTEpZQkNFF%2BkF6w8Sn4lRxUyQbuIzh1fKmqKD%2Ftjy6onmI0hdssMY6eWoL4f2jxxNte6%2B9X8eDUhEMkKGdVGmwb7ynCuZjXXhpNICf2DHIuPMybCF20GRuZ3Sohu2g2XH0En7l1lkWZO3MfLVScEDOeoIEi77epB1oaEQaYch2jIuJfjt70cZwEQbL3IdzZz0xKQZZkhSpYyQ42o3Q0y8O7ZJmifU2FFOSDLD1mdC3zTlJZXZ%2FlMkoROuFVeKyEMNkv%2F21Lmq05r%2Bi%2BnXVjQ0qPjcEb7RSbF5RwlBwS6aBOysgweHRBB7DH%2B4zWCVlP9DVABaQmURFSi6RnA5E8WyJbqi9%2FRaC0FZTcjP1hhie2WpJVEUjGARFZ4g9nKdaF8nvb4KLE8q2zIGJStXDWnbYQhadSy7oLQMowmklfB%2BzdmpMg0wrv7SyQY6pgH25jZXp6%2FTWYpcQuDI90UP0MAtTnomFoCYZdgMx5xNO3LKufDJRXTVmrdTfdhIksfAPH0CuoQUrVIoDtQadffuUj%2BsGixuPEnGNpQlGdRSGQo7TnjkClGNXwuZqNoeUD9DKeZPFYOqdA2t%2Fbaw%2BYz01Mn6ljVUqK2d3kqMTYbdV1IFU4Q9y%2BZadZz%2BS2HA9QFWXGjSRbEZdqJS%2BDI0OJPFRua6xfCQ&X-Amz-Signature=66958e051b014f7db1d79ec351187a72e5e1787f7fa3dd537c6481104b264a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

