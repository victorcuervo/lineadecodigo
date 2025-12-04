---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5RUJY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBV34E2wF41ogvaFTBmtPhEN8hhOg6ZvG9URAimN%2BCD0AiARBCY7K5rjL9S%2BBnfhGOJ6svDsKYlbmq2m2f1laQz0TCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMPouPUSTqiebwyYR5KtwD3dg4g7xBrOma%2F%2Fe1OjcEjVzsUzlVYt%2BaVD0Up4U0reLJSLU6%2FNH0sbZT9UrGFQmWrWXd0AzBZJMg4PcIiSHbXxLMy5AK9B9qhOJusw9u9SKUxgxPEQMHgO7BMcuN1uhKQFGSm8bQrJi5xwgm%2BPZHnld9Vj6dJgXG9UL2syWH%2F0gTfglxnilx0vgRwKezeSQhcSy8Xk8ftZ3MIcZhu6yAu1Bd6A7Udq4HfrtKeFSU6ljCr5QQpvWAiVQJzR1BmTypW4t75761k3ASCKtWTzOxeS2tYfp4sv4DLjD15PhODUREsS6TDY5XJgjD3RYRHpjO2%2FsDZqjurpl4Z5ltsMRDm4M%2BhZYaYSzfxA%2BuswoQqG%2F3I6GIb0BI5t4JJyLYWbASe4yZc9hS2o%2BaUahwJTAbsxzJs3NN12ID%2FHL4T1AYKQDWEEQ8cq5cs7UNmcI%2FqP5gJiiyivDHDvwL2hrVROXiVMjjkwQkFW6kBX1XpMGCSp6KXEn2nYjtspXF4a2Q41yXVb5GlNyhilZgvpD%2BLmnJ6HYurMscE3OOYpCajNsIyw3FzCLgvPplgV%2BxLOOokTaQHtxipw8iHyQNFAgPY3JCa3hnhcKBE%2BsDyyVzo1YqLrhQpg9eB02PO%2FEBxdMw%2BarFyQY6pgHLtQevWWnhZ%2Bb%2FlYNWfsuJhgMEP9nBHf%2Bp1%2F4AGNZLsv7Liwh2kdKdGZrf3iOKS9yEk7gxRAj5AI%2FsOvLh1nX51UKCIeSFbHEaBCLvbECMyiAw80qbhSj%2FOuw%2BT9j6LezpH8dQHSd4Lp0yLlZB7vEB%2F5IgzXLCEjlrNXBotvrTEHn2txH68leVR%2F2N%2FIWtFW3NHRR%2FadYugZzT3O8rIF4l5NKv71iB&X-Amz-Signature=61c0390303b02063888027db400c6648dd528246f495d6a2aefde2dca81007f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5RUJY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBV34E2wF41ogvaFTBmtPhEN8hhOg6ZvG9URAimN%2BCD0AiARBCY7K5rjL9S%2BBnfhGOJ6svDsKYlbmq2m2f1laQz0TCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMPouPUSTqiebwyYR5KtwD3dg4g7xBrOma%2F%2Fe1OjcEjVzsUzlVYt%2BaVD0Up4U0reLJSLU6%2FNH0sbZT9UrGFQmWrWXd0AzBZJMg4PcIiSHbXxLMy5AK9B9qhOJusw9u9SKUxgxPEQMHgO7BMcuN1uhKQFGSm8bQrJi5xwgm%2BPZHnld9Vj6dJgXG9UL2syWH%2F0gTfglxnilx0vgRwKezeSQhcSy8Xk8ftZ3MIcZhu6yAu1Bd6A7Udq4HfrtKeFSU6ljCr5QQpvWAiVQJzR1BmTypW4t75761k3ASCKtWTzOxeS2tYfp4sv4DLjD15PhODUREsS6TDY5XJgjD3RYRHpjO2%2FsDZqjurpl4Z5ltsMRDm4M%2BhZYaYSzfxA%2BuswoQqG%2F3I6GIb0BI5t4JJyLYWbASe4yZc9hS2o%2BaUahwJTAbsxzJs3NN12ID%2FHL4T1AYKQDWEEQ8cq5cs7UNmcI%2FqP5gJiiyivDHDvwL2hrVROXiVMjjkwQkFW6kBX1XpMGCSp6KXEn2nYjtspXF4a2Q41yXVb5GlNyhilZgvpD%2BLmnJ6HYurMscE3OOYpCajNsIyw3FzCLgvPplgV%2BxLOOokTaQHtxipw8iHyQNFAgPY3JCa3hnhcKBE%2BsDyyVzo1YqLrhQpg9eB02PO%2FEBxdMw%2BarFyQY6pgHLtQevWWnhZ%2Bb%2FlYNWfsuJhgMEP9nBHf%2Bp1%2F4AGNZLsv7Liwh2kdKdGZrf3iOKS9yEk7gxRAj5AI%2FsOvLh1nX51UKCIeSFbHEaBCLvbECMyiAw80qbhSj%2FOuw%2BT9j6LezpH8dQHSd4Lp0yLlZB7vEB%2F5IgzXLCEjlrNXBotvrTEHn2txH68leVR%2F2N%2FIWtFW3NHRR%2FadYugZzT3O8rIF4l5NKv71iB&X-Amz-Signature=1e5233011ee07904900707bf93777f60a6950e4c8b852c87ae28997da67b46a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

