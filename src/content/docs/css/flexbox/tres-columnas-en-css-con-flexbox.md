---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4YWEOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFUpakwBg9nyWrmxEgGzW%2FNZqqAne%2B4ZNjkTdd9qAE2vAiEAlME0jR79PZdG7U2kEEMdqb52BzvE9xDiYN07rTVhDxYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI5T2aA%2FgLkXQAeumyrcAzx94wdF4esiHedLsELka8Kx72tkaP8wqQ7f1QoUregcMqVeUSVcEldfCkHlAciyLQ8ezBvLy%2Bi5RoEA1FuW6qPF41Sk4NJDkvYuDfa01VMU2FEvX3EItHbyhyKpkhWKh9i08keS6l%2FV0XIbdax4IqHxgvxqUWugnhgQe9cUH%2FZCqFoto88ydr17rM0q6H%2BJltY6Eke3Idrwk7Zh5uSZ099PwhvEj%2B6FSAO2kDXngyiHkZ1d87SMVH7DGYdo4zaPv2bqdbWnYa8Ai9puB7P0xPb%2BZq8PRyE%2BPbHIdEbYqQAZkKFuNrkQZcuTTYEAffaCa%2FIbdqBbFhcThjGgPoTckTpq550%2BX4wXC13hJ8yjIDo5Q8pZ7MFaHRpWeuc5jl%2FOTCHsqtd0qPUaqcdDFn6QDs0y9f%2B6sVw9iffSw3Ibd%2B9wqP%2FBqGTkDZd%2FOCj4b8agcE4hrpBC9xechchnUcCzOSRM7e27AeYBD5Qx6ZWy9rAx3eTuCZgEVejP1WSH2eE71w3BR1s%2F9OXVH8KOWyHBfjhBoT8SbxSGynM01XJWRy51DaTZz6Mr%2FHD%2BXzTCnYwjqE6oSb%2BRVV9RhW2GWNJPW5lbhm2J8Xd9ZZ9nf4qpNZgCKtC%2B9JKV7X7zMj3eMIjKxMkGOqUBLB4TUm4eXnpdQSpERjAq48txz4VSyWUcHRjnup3SZKR6Lp3T1FtqaZm%2FaVt%2FZWF5V1tPTtwJvb2vvAM%2BYwRy5nGGJit3M3TVt92LJpqhave9sAQB8lFVGQArp8xWZ88%2B%2F%2FbpX%2Bhc73bb0%2F5r7BK3Y6UzO2El15B%2Fn2Nf2AGOuekbbGoxoEZfmVYl5G%2FFP3DdVzzeUPiUIoYBJiHMI%2BQ9xGfjTY46&X-Amz-Signature=80fd00474f2423917ad78e089c9e934d6ec53421544a5d311cc6f7e7cfdde24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4YWEOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFUpakwBg9nyWrmxEgGzW%2FNZqqAne%2B4ZNjkTdd9qAE2vAiEAlME0jR79PZdG7U2kEEMdqb52BzvE9xDiYN07rTVhDxYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI5T2aA%2FgLkXQAeumyrcAzx94wdF4esiHedLsELka8Kx72tkaP8wqQ7f1QoUregcMqVeUSVcEldfCkHlAciyLQ8ezBvLy%2Bi5RoEA1FuW6qPF41Sk4NJDkvYuDfa01VMU2FEvX3EItHbyhyKpkhWKh9i08keS6l%2FV0XIbdax4IqHxgvxqUWugnhgQe9cUH%2FZCqFoto88ydr17rM0q6H%2BJltY6Eke3Idrwk7Zh5uSZ099PwhvEj%2B6FSAO2kDXngyiHkZ1d87SMVH7DGYdo4zaPv2bqdbWnYa8Ai9puB7P0xPb%2BZq8PRyE%2BPbHIdEbYqQAZkKFuNrkQZcuTTYEAffaCa%2FIbdqBbFhcThjGgPoTckTpq550%2BX4wXC13hJ8yjIDo5Q8pZ7MFaHRpWeuc5jl%2FOTCHsqtd0qPUaqcdDFn6QDs0y9f%2B6sVw9iffSw3Ibd%2B9wqP%2FBqGTkDZd%2FOCj4b8agcE4hrpBC9xechchnUcCzOSRM7e27AeYBD5Qx6ZWy9rAx3eTuCZgEVejP1WSH2eE71w3BR1s%2F9OXVH8KOWyHBfjhBoT8SbxSGynM01XJWRy51DaTZz6Mr%2FHD%2BXzTCnYwjqE6oSb%2BRVV9RhW2GWNJPW5lbhm2J8Xd9ZZ9nf4qpNZgCKtC%2B9JKV7X7zMj3eMIjKxMkGOqUBLB4TUm4eXnpdQSpERjAq48txz4VSyWUcHRjnup3SZKR6Lp3T1FtqaZm%2FaVt%2FZWF5V1tPTtwJvb2vvAM%2BYwRy5nGGJit3M3TVt92LJpqhave9sAQB8lFVGQArp8xWZ88%2B%2F%2FbpX%2Bhc73bb0%2F5r7BK3Y6UzO2El15B%2Fn2Nf2AGOuekbbGoxoEZfmVYl5G%2FFP3DdVzzeUPiUIoYBJiHMI%2BQ9xGfjTY46&X-Amz-Signature=f94659f7f9745e7f2a72a24a8a48d54fed9651c29a82e4a9a5ee6511987c87b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

