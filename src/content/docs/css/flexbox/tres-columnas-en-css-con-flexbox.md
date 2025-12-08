---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637UCI7NR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQJtojdV%2Fl%2BFaHT3vSStVq0FuBKyQy0ZTRR6eORIFygIhAI9ZpPElBnNRu%2BmKe74ifTm4Ls4Kw%2F1mCaahOLqK8mY8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FYlaQw5Yr6KudEjUq3AOeVWo178YanzQpoMnTCKDLnTzljDfK0uO1Zo6qQQNyoWMqC%2BOg7k2MN1KZrIfHeINQ6V5PDtqOtzUeSgvdZHmO%2FwVq%2FChnRagfE7sFhJwF4FI2THl27jcfTMFeq3gRRDOsMqT3mgV52Ped0RGLFw6qZV86aWpbPoK6xD0xXCL83svUYQOpURQT%2B4Dy%2BQAK%2Br1Zmp0dHZ2Jn42K2sPNKvknOd5dNMBEfVWIsWy1mMFp5FyfslDGbZW3HKxuhSsg%2F%2FKc8E%2BOkhdDPrlJB3GGXy66CHOrk6i9YnUACULYoC1vH0ZWD9zm70Z6s8MoiYO9ZKT2GjmKC4m%2FEjb8SCkCl7AS8vrKPz0iTLDO11P2IAUY%2BZitSr5ytU7LE3HZ39265PuLBuNL8RRtQ6kkmOglGaofP62VzljkODmEPTysV%2B9E2Mj90TUTeLYNFy7CZsjigKLUhlEwGwDw4tGfCk6XbqXuhFGfoVkamV2e79%2Bu3mRNHd9IFDLdwRPiwGR%2BofHjQ0tGl28QkRa76YDaQa3BB19R0Wblb9aY0UUrFKs%2FALaIaQDBuiTuy7RBTa38wM0VahmIWL%2BFUxgfRJzgK8vQNrqCheypFq6HmShwHrrgfxJhhjg5ilrs%2Fi7uJJXHUTC%2FlNnJBjqkAfJ4ErwdWGiYREyYIoodr79PfwgdZwpZUFZY%2FsONpt1ihUilZlEZH5Dbw0oV0ugs1wzt%2BQiPuul6UngsDZZIGqK4dSXv5finfoZ0cQJkNWNNZE8rGWouaBwqSreCTTN%2FufnGGKEn%2BEreE3mGQJg7SDVArf3XwcyfHv8anJzcIYdzAeamd7QBLPnYkdvnKKesuOHxhYnRytgDbtAwa8BhMG2MhMy9&X-Amz-Signature=06f753065a9c30a7b2730c7f69dde1ec3f704f214f08228386e88dc5f83bb7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637UCI7NR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQJtojdV%2Fl%2BFaHT3vSStVq0FuBKyQy0ZTRR6eORIFygIhAI9ZpPElBnNRu%2BmKe74ifTm4Ls4Kw%2F1mCaahOLqK8mY8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FYlaQw5Yr6KudEjUq3AOeVWo178YanzQpoMnTCKDLnTzljDfK0uO1Zo6qQQNyoWMqC%2BOg7k2MN1KZrIfHeINQ6V5PDtqOtzUeSgvdZHmO%2FwVq%2FChnRagfE7sFhJwF4FI2THl27jcfTMFeq3gRRDOsMqT3mgV52Ped0RGLFw6qZV86aWpbPoK6xD0xXCL83svUYQOpURQT%2B4Dy%2BQAK%2Br1Zmp0dHZ2Jn42K2sPNKvknOd5dNMBEfVWIsWy1mMFp5FyfslDGbZW3HKxuhSsg%2F%2FKc8E%2BOkhdDPrlJB3GGXy66CHOrk6i9YnUACULYoC1vH0ZWD9zm70Z6s8MoiYO9ZKT2GjmKC4m%2FEjb8SCkCl7AS8vrKPz0iTLDO11P2IAUY%2BZitSr5ytU7LE3HZ39265PuLBuNL8RRtQ6kkmOglGaofP62VzljkODmEPTysV%2B9E2Mj90TUTeLYNFy7CZsjigKLUhlEwGwDw4tGfCk6XbqXuhFGfoVkamV2e79%2Bu3mRNHd9IFDLdwRPiwGR%2BofHjQ0tGl28QkRa76YDaQa3BB19R0Wblb9aY0UUrFKs%2FALaIaQDBuiTuy7RBTa38wM0VahmIWL%2BFUxgfRJzgK8vQNrqCheypFq6HmShwHrrgfxJhhjg5ilrs%2Fi7uJJXHUTC%2FlNnJBjqkAfJ4ErwdWGiYREyYIoodr79PfwgdZwpZUFZY%2FsONpt1ihUilZlEZH5Dbw0oV0ugs1wzt%2BQiPuul6UngsDZZIGqK4dSXv5finfoZ0cQJkNWNNZE8rGWouaBwqSreCTTN%2FufnGGKEn%2BEreE3mGQJg7SDVArf3XwcyfHv8anJzcIYdzAeamd7QBLPnYkdvnKKesuOHxhYnRytgDbtAwa8BhMG2MhMy9&X-Amz-Signature=ce4091e1aeb7951bc183394a555e9d20710a63ddc734fbac01bc4c0c792a01ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

