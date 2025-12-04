---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BETQUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHFjSfUrL003IhO2Oh7XOihCltuGO%2BBK5tz3UrhgixwOAiEA1C24zv5IdStAyQCQPIpQxhNBj7wngsqx5Q3hHnwq5Bwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJinrilXog%2F60rsSgCrcA7wKpEvh%2FTlkhYT6NrDJdft4RzEiTlzNIw52zum3LReYoWPywOHNqI34WaMyfRQ%2FbsD0r3eqYdL%2FDW20TtW7AWfAtDzkbA6IJm%2FCJKckoRbI8G%2BDcCLX7poq3aIrGL1Dai%2BmIGXKnM2DWYxPv3NspaWyLiJQY8Sg%2F7iwImG%2F9KOSv2yP1leEM3tzpLjtWKIGRZwu2zqaoAEkGQMCwh%2B0qzBRV8Im0L%2FvC93tg0jVmfnB9gXENI3AsbUWtGWDE13B2K%2BBOt1k%2FKkD04f5yRxQKCASPjepCPMDklJkpmRxX%2BBmCFX1l262wJ1z3aJfLWH6XBqBn5ykJfPBQtbWLFqCFZZvaAqDG8Yd42KVSdJGYHYYiZTVLhPujyfBuOt5%2FuebDhLQX6q5zkwoDHJlmWy3RMmRbhFZCPnENNJ7vqaRXLXCABRwEkxBuuPmRD86HVWPCYUdz00RiRgmkO5BgRU%2F0D2LilJtoWncVP1B3dOaSbulAVcAjourk5jz4GUYQ98i8XBmfQk2K0DijMKm4Ime4wliAiM%2BQCC0upV%2BwdKpg7QIUEkzxMbfkaqx4ZVAkY6JFkOywCaJ1SEoCdZY%2Br%2BO3kFwTP3sKoLVhn7%2F8Wgn1lQN9dajj4d9bEe0BzMJMMLnxckGOqUBIQNzKlzc03X3AJ4C2nCHezzq%2B4GZ%2BGDqolF6G6VuSc3HeVoMDHAS52ujfI9wziqTtYzqrcJGRzouqUWxDRCtujPoSJ16kDFKQJGXVnGQNVh0hXfQ9LZyVmLhcUzhW%2FaRUQ6xR49PzsiEXEDuGJyyTZR8L55RTSGAUWcqAig1PJWjjsPRPbERuWlud%2Bs%2FIyYomx8wH7DsRptgcO7MV6bqBJOPAJxu&X-Amz-Signature=95ef033d8e9416a39c99d758da0112701abe66e1af848d34de6d20bd6d697432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BETQUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHFjSfUrL003IhO2Oh7XOihCltuGO%2BBK5tz3UrhgixwOAiEA1C24zv5IdStAyQCQPIpQxhNBj7wngsqx5Q3hHnwq5Bwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJinrilXog%2F60rsSgCrcA7wKpEvh%2FTlkhYT6NrDJdft4RzEiTlzNIw52zum3LReYoWPywOHNqI34WaMyfRQ%2FbsD0r3eqYdL%2FDW20TtW7AWfAtDzkbA6IJm%2FCJKckoRbI8G%2BDcCLX7poq3aIrGL1Dai%2BmIGXKnM2DWYxPv3NspaWyLiJQY8Sg%2F7iwImG%2F9KOSv2yP1leEM3tzpLjtWKIGRZwu2zqaoAEkGQMCwh%2B0qzBRV8Im0L%2FvC93tg0jVmfnB9gXENI3AsbUWtGWDE13B2K%2BBOt1k%2FKkD04f5yRxQKCASPjepCPMDklJkpmRxX%2BBmCFX1l262wJ1z3aJfLWH6XBqBn5ykJfPBQtbWLFqCFZZvaAqDG8Yd42KVSdJGYHYYiZTVLhPujyfBuOt5%2FuebDhLQX6q5zkwoDHJlmWy3RMmRbhFZCPnENNJ7vqaRXLXCABRwEkxBuuPmRD86HVWPCYUdz00RiRgmkO5BgRU%2F0D2LilJtoWncVP1B3dOaSbulAVcAjourk5jz4GUYQ98i8XBmfQk2K0DijMKm4Ime4wliAiM%2BQCC0upV%2BwdKpg7QIUEkzxMbfkaqx4ZVAkY6JFkOywCaJ1SEoCdZY%2Br%2BO3kFwTP3sKoLVhn7%2F8Wgn1lQN9dajj4d9bEe0BzMJMMLnxckGOqUBIQNzKlzc03X3AJ4C2nCHezzq%2B4GZ%2BGDqolF6G6VuSc3HeVoMDHAS52ujfI9wziqTtYzqrcJGRzouqUWxDRCtujPoSJ16kDFKQJGXVnGQNVh0hXfQ9LZyVmLhcUzhW%2FaRUQ6xR49PzsiEXEDuGJyyTZR8L55RTSGAUWcqAig1PJWjjsPRPbERuWlud%2Bs%2FIyYomx8wH7DsRptgcO7MV6bqBJOPAJxu&X-Amz-Signature=aa979c28adac2662682708e86115def3255134e76514f8cd58fc2d3f36a532a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

