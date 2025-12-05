---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ITVWN3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkMjZUrrmtOiXXl7VWe2AKy448xRh7rYQgZFSAuZWZJQIgETDNmMUZgzcT3VquKq7IoBX2XPGgcHLAHaRVOccV7yEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmA%2BYIbEpFuV6ZvGircAwW9C0hcqSuMqqxbpGQAGhPYSpukjYCT9M%2B3wFg%2F20RjmPiT89OhviX%2BvP4NPdfHIYAbSp5G0pou0KrgWSeiObFUGZ9iNhjiSajFC8%2BLb45M70%2Fie0DOidwUv4kMvWxnKoj1cESjcq15DnZ%2FVstii%2FFFWl9jKhm%2BhRGuqDL4w3jETvVinnHiWzQ%2BGBtMaMWyvM0dZf0RB7M9TNM3X%2F0fuV8P0aTxnngj%2Bv3zBkql8MNt13tmibP9q8nh4i7HgLUrPFw0qpKkc%2BOM0UPq3zKPx6I%2BH0ep6ewSTCs9Id1t61U0Yru%2BsX8uprJF%2BiE92lSTT0YLvf8%2BCcUDLnWH0y92%2BjSpRpZnSOVCgd2kRNnN2VGgXV%2BzV9ruAnk5lT%2FI8dvlAEyWsk5A7uBJp52mQUftpqi%2FmPj%2BxcXiZ4jiJ8navj7MEhcIFxBpJ3RO%2BLmWry7TzoHl9CGlMXRRYUzyy7lve6RXXRqtNpIqlMYraNIE%2FEjtLezTcMyxowQ4TltKiKygvyOhlopLnm6Zuh34wwYTz6LFqNEI5s6E50U4%2FUB%2ByCxZ%2FkqFhkAqUYHX28wdQqz8HEuqOhV4Krd%2BIGIhMh0WTsu7XIxDBQoYXBT1NFEud50tLglCH2yZ0CoWgGHIMNfly8kGOqUBlSGhgHKbFfdWMjkidqqDvBD0NV%2FSKY7yxtsXFd1QoaSaxQtV9ccf5KKPMaGUNx8G7IADkZ7eHz9yfntZqvVCbQxWKKrCxes4HO3M1i6X2gPhgbjLe3WNhpFgg319v8nfnwLOwZXTIUIjSnkcalW6xNOMJm1Baw%2FuG1CL2l%2FFuJSMZlf2pYEFXUMx9cWfUaIbJk7MUiKGHFQizLjXiUqE9ggS8JaT&X-Amz-Signature=16f09a135b6bd5e14a5335bacfd1fd4967927a45c9fa46a4492c05d002be066a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ITVWN3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkMjZUrrmtOiXXl7VWe2AKy448xRh7rYQgZFSAuZWZJQIgETDNmMUZgzcT3VquKq7IoBX2XPGgcHLAHaRVOccV7yEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmA%2BYIbEpFuV6ZvGircAwW9C0hcqSuMqqxbpGQAGhPYSpukjYCT9M%2B3wFg%2F20RjmPiT89OhviX%2BvP4NPdfHIYAbSp5G0pou0KrgWSeiObFUGZ9iNhjiSajFC8%2BLb45M70%2Fie0DOidwUv4kMvWxnKoj1cESjcq15DnZ%2FVstii%2FFFWl9jKhm%2BhRGuqDL4w3jETvVinnHiWzQ%2BGBtMaMWyvM0dZf0RB7M9TNM3X%2F0fuV8P0aTxnngj%2Bv3zBkql8MNt13tmibP9q8nh4i7HgLUrPFw0qpKkc%2BOM0UPq3zKPx6I%2BH0ep6ewSTCs9Id1t61U0Yru%2BsX8uprJF%2BiE92lSTT0YLvf8%2BCcUDLnWH0y92%2BjSpRpZnSOVCgd2kRNnN2VGgXV%2BzV9ruAnk5lT%2FI8dvlAEyWsk5A7uBJp52mQUftpqi%2FmPj%2BxcXiZ4jiJ8navj7MEhcIFxBpJ3RO%2BLmWry7TzoHl9CGlMXRRYUzyy7lve6RXXRqtNpIqlMYraNIE%2FEjtLezTcMyxowQ4TltKiKygvyOhlopLnm6Zuh34wwYTz6LFqNEI5s6E50U4%2FUB%2ByCxZ%2FkqFhkAqUYHX28wdQqz8HEuqOhV4Krd%2BIGIhMh0WTsu7XIxDBQoYXBT1NFEud50tLglCH2yZ0CoWgGHIMNfly8kGOqUBlSGhgHKbFfdWMjkidqqDvBD0NV%2FSKY7yxtsXFd1QoaSaxQtV9ccf5KKPMaGUNx8G7IADkZ7eHz9yfntZqvVCbQxWKKrCxes4HO3M1i6X2gPhgbjLe3WNhpFgg319v8nfnwLOwZXTIUIjSnkcalW6xNOMJm1Baw%2FuG1CL2l%2FFuJSMZlf2pYEFXUMx9cWfUaIbJk7MUiKGHFQizLjXiUqE9ggS8JaT&X-Amz-Signature=47e7ad364f803246fa7496e9f41834fc14b7d2af6c41970eb8816e121cd613c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

