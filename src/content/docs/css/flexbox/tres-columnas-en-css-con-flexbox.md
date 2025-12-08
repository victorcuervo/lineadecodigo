---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664A6LHQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL873zCnm7yoh1LhwLJ8FrVvMSenZji3kBIPCzFUAG8wIhAJS8nmkAorUHMH6ubVKTirverLhlft8TbY3L%2Bn7q%2FGRCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FaPnVlWarOcfD7xEq3AMljPR8MdSQw8sL5V%2FDw1e4qLk%2B6hZ7BmCbtOMvJS1tBCDeytHyQLRNdGiRRAqlS9vB9E3cv3%2FYafYUkW4631AJVC3CqGj%2FI9Gxy%2FtXOe7FvKDIr%2BaoxYDsXo5rAt7%2F3XWd3jRYKv%2FkS0gJUFM2ePVFEz6BT6ZZQIY86zXvrvP6vkg7vxmNWu6BSiDy9Hfvh3%2BY5Uhda2Ibc%2BCkX8fHIJfpnqcs5VgDoWYWDds%2FGe%2B1AM7pm2ljaEBq%2B3Yn4MoJSu%2F03snDGRZ5cZlYUWGgSz1RT0yERgby8P9XaYjN21nnPb9ElMTbhI1dLTeb6J2PykMTtz%2FbwLIW%2FBaG3u2VpA5bbsT9gFudtEIsFr%2FVVcFC%2BSXtJJqfxX0Bt4rn577aMBqhOvVX1EaDYkqcPMI88fEVUdaDM%2Bri6YTGpXFU5I7%2FYJi1gan9lBslb%2FDAG%2BitPWyOadAHc0AKL1zpnrE6hxnUiXEVgRyZz2E7RZvXmDPLz%2FiY%2FcdHARW%2FW1nXudM2BDBlRhWbtzI1LIfMHEJc1cNZ0OVlZAaZ7Uf8TkkjDIbLQr8CmIOou%2FABltOinwgrZ3Bbx23iKO1%2FopbKgLP0vNpNKJFEV72gisY3aNalJUIG3nF7oVwm3cjJ5JIQ2DCP0NnJBjqkAVMTGVYXjwBUe2EOH53bbCk4njCZJOzP03Gp31Rw5GxHK%2FqAVUzYQGRC9Tia3TScW8C8oKyaVs9dDKhCt70kUByiELh9xmfwhbEmQlLHgWeh6fdM82B8%2B%2FDbpjVqEI4HjfvTL%2BiHdT%2FcunAWG%2FMbyjZeqv8ZLYWiuZsjtE5IGafG5qp06hGM7dsOkuwHt%2F5XsZ9YR0eOcCXVexcOE4hVDNaXMyf%2B&X-Amz-Signature=8cee88b6c97f58fc1c58810db02032ee132ec53e62a1a970e26027928315e6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664A6LHQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL873zCnm7yoh1LhwLJ8FrVvMSenZji3kBIPCzFUAG8wIhAJS8nmkAorUHMH6ubVKTirverLhlft8TbY3L%2Bn7q%2FGRCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FaPnVlWarOcfD7xEq3AMljPR8MdSQw8sL5V%2FDw1e4qLk%2B6hZ7BmCbtOMvJS1tBCDeytHyQLRNdGiRRAqlS9vB9E3cv3%2FYafYUkW4631AJVC3CqGj%2FI9Gxy%2FtXOe7FvKDIr%2BaoxYDsXo5rAt7%2F3XWd3jRYKv%2FkS0gJUFM2ePVFEz6BT6ZZQIY86zXvrvP6vkg7vxmNWu6BSiDy9Hfvh3%2BY5Uhda2Ibc%2BCkX8fHIJfpnqcs5VgDoWYWDds%2FGe%2B1AM7pm2ljaEBq%2B3Yn4MoJSu%2F03snDGRZ5cZlYUWGgSz1RT0yERgby8P9XaYjN21nnPb9ElMTbhI1dLTeb6J2PykMTtz%2FbwLIW%2FBaG3u2VpA5bbsT9gFudtEIsFr%2FVVcFC%2BSXtJJqfxX0Bt4rn577aMBqhOvVX1EaDYkqcPMI88fEVUdaDM%2Bri6YTGpXFU5I7%2FYJi1gan9lBslb%2FDAG%2BitPWyOadAHc0AKL1zpnrE6hxnUiXEVgRyZz2E7RZvXmDPLz%2FiY%2FcdHARW%2FW1nXudM2BDBlRhWbtzI1LIfMHEJc1cNZ0OVlZAaZ7Uf8TkkjDIbLQr8CmIOou%2FABltOinwgrZ3Bbx23iKO1%2FopbKgLP0vNpNKJFEV72gisY3aNalJUIG3nF7oVwm3cjJ5JIQ2DCP0NnJBjqkAVMTGVYXjwBUe2EOH53bbCk4njCZJOzP03Gp31Rw5GxHK%2FqAVUzYQGRC9Tia3TScW8C8oKyaVs9dDKhCt70kUByiELh9xmfwhbEmQlLHgWeh6fdM82B8%2B%2FDbpjVqEI4HjfvTL%2BiHdT%2FcunAWG%2FMbyjZeqv8ZLYWiuZsjtE5IGafG5qp06hGM7dsOkuwHt%2F5XsZ9YR0eOcCXVexcOE4hVDNaXMyf%2B&X-Amz-Signature=259c5b2ceaaf34f2a4a414e7bc618642d3678e01c31394552da62a2aa722dcbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

