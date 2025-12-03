---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP36WUEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHCIbsgo16v9FVJOqv%2FzHq%2BK2V0off3LQJXp8RtVB%2BN8AiEApbxUhe4fGP9j%2BI1jujS5u0oYgXlOpcvZdgMIOSyM3ugq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDG5JcrkPQhEn9hNymCrcA5CClKrlwMWtac7BcJjBkqRGU60GgSZ7XixVBQFMF5lrt%2BKvoFdzWd3tX%2BMAM0hkuZoBBS3FeiN10909mtyDjD7ryvlGNNtXZsxqHPTuiS7OFQWtsRU97QoOMaU7QvFxjT3liBwHZuPxMTSUMciUQd2n6jR7iW57GtLwkXUdDI1qYH3jc4f%2BLhVUWTNyM3TDOhfo5gRiTD1betLlROEn1w7QXAb%2BIgu1bj1t4DysR2QAZ3HR1gNyloZnV3RJ7i4NCOxpQt5ZLWdEZtgc1h3bzN4OQs1rqsBLKoQYYVQIyHiyqQ7ha7ePweiz2nYQ%2FkfP8hYI88WUqGjT8iQ1vXxzKk73ODFVgPAe%2BbrVAnm4%2BcFSRyKPp%2BVG0gQpjG3c7zE%2BN8svFCOicEkoCtiGbUkBT2jwSmd5ssMSHq50Xy3iF60o1OGRm5BJfTVYrHFBJ8Olh2s%2FsyBY4VZIT9%2Fuojl2pgBUhLeCbd9Rv6vRtWFL5ijySUS5AADieso3Q7KxC%2B7fV3qiH1bt9PZ0yaiEGiNE3SHd0IC7uLJbjTdQMI8AlNy9QwdxB%2F3eu3250L9PBBU8JXErRdV8y6iQFux2oYRwlBZEEJAz0%2BYh%2BeTZUoAdeaH5uzGKTL9ULqtdLPCiMNr%2BvckGOqUBHCiBSwIFWl93zL0L4L9Zw5ZyDQRRAvE4TfzWObRH8HJThE4gHNRceL2LQ6p327lb98AAoxCzNFH1b63RjuaFR3nsq%2FwoQpepu5GpzFE2tVWBUerxhgvXZWqU6ho7nUuO0yJ8bITOZ%2BYtqOPHb%2B0JTZdi2Pj0mfZyKrrc0zngdM0Vc2%2BSiviTyMjAImstIu5AhGAV%2FMxIM70yQEQkPHzY%2FOb1ysbH&X-Amz-Signature=154eba3b28582b671ced7a312168eb5d6acdd8d6cb5f4154e09d1e72e0c00e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP36WUEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHCIbsgo16v9FVJOqv%2FzHq%2BK2V0off3LQJXp8RtVB%2BN8AiEApbxUhe4fGP9j%2BI1jujS5u0oYgXlOpcvZdgMIOSyM3ugq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDG5JcrkPQhEn9hNymCrcA5CClKrlwMWtac7BcJjBkqRGU60GgSZ7XixVBQFMF5lrt%2BKvoFdzWd3tX%2BMAM0hkuZoBBS3FeiN10909mtyDjD7ryvlGNNtXZsxqHPTuiS7OFQWtsRU97QoOMaU7QvFxjT3liBwHZuPxMTSUMciUQd2n6jR7iW57GtLwkXUdDI1qYH3jc4f%2BLhVUWTNyM3TDOhfo5gRiTD1betLlROEn1w7QXAb%2BIgu1bj1t4DysR2QAZ3HR1gNyloZnV3RJ7i4NCOxpQt5ZLWdEZtgc1h3bzN4OQs1rqsBLKoQYYVQIyHiyqQ7ha7ePweiz2nYQ%2FkfP8hYI88WUqGjT8iQ1vXxzKk73ODFVgPAe%2BbrVAnm4%2BcFSRyKPp%2BVG0gQpjG3c7zE%2BN8svFCOicEkoCtiGbUkBT2jwSmd5ssMSHq50Xy3iF60o1OGRm5BJfTVYrHFBJ8Olh2s%2FsyBY4VZIT9%2Fuojl2pgBUhLeCbd9Rv6vRtWFL5ijySUS5AADieso3Q7KxC%2B7fV3qiH1bt9PZ0yaiEGiNE3SHd0IC7uLJbjTdQMI8AlNy9QwdxB%2F3eu3250L9PBBU8JXErRdV8y6iQFux2oYRwlBZEEJAz0%2BYh%2BeTZUoAdeaH5uzGKTL9ULqtdLPCiMNr%2BvckGOqUBHCiBSwIFWl93zL0L4L9Zw5ZyDQRRAvE4TfzWObRH8HJThE4gHNRceL2LQ6p327lb98AAoxCzNFH1b63RjuaFR3nsq%2FwoQpepu5GpzFE2tVWBUerxhgvXZWqU6ho7nUuO0yJ8bITOZ%2BYtqOPHb%2B0JTZdi2Pj0mfZyKrrc0zngdM0Vc2%2BSiviTyMjAImstIu5AhGAV%2FMxIM70yQEQkPHzY%2FOb1ysbH&X-Amz-Signature=769203e1ef86ced3369339ff99fbb6ecb2545e2d05173d3df50cd65642b0727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

