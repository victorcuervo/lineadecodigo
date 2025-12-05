---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S7WUIC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3bAQPwVC3w4h6ngGOEhNQedJDpZNiU2h49M5gbAj%2FngIhALCPbh0wu7KUvyl%2BZBs%2BhaOZvbkoD029QcIsYr6nx%2FjLKv8DCGAQABoMNjM3NDIzMTgzODA1IgxBlAI43huW9Tf7TKwq3AMQrjeHcx9RBOXzmMi2eUYxD1L7kYoaZfng05MSu%2BrCRHBS0J2kJmnTJ6Tpfd7WPba9t55qVfrbzKWtZHu%2B%2F6F95hRHoLc43%2BH%2BQ%2FlwifUclel6BOgzk22bGk631aYHJ2QuFN1MkK9hZ7NkYA5xg8vlXd6J4r1tWuDsa6trKDDql5qvtjPyPMPPBuPNyYPStxrWsbSaNS4BMCzO276EJY1T%2FlyyXjcO5%2FMVAvaSCgVY0tzb8G3abhcTOCCYCwUsE9aDIzQ8za8kbdNBnN5iftxMA3H1hDTqw5zmlwoRYvfz4UW8zGhWkltqyFDxmbyUhJu2JrlPWFoRxtaETufR4Z0kUdMIBvPp5vQj4GhYJ5QGjjCnOHZi647JbJAnJYDHUZXnmHcE%2FDhvjNaAGpQhsNUlDeVrWpC942PIHW1KRvoYtmxkPiP4DHVQ%2FHo0PcdO8Fs6zQZdW39oHhVoc3QnjHbsSSZmEMNlhVWoqhXq1%2Ffd7Hie3Ms461j6g2LPlBTeH8cd64Sn6FJPV49mB6uLzxfzbId7LaEVkWS6YgRWuDhAvdnZKYIpP0QF3S%2BsDpCY59TdLsUumEMMY%2FutKzB4pvfbzIfgB0fXBDciCKrVt3PurAduVsVw6YUMXvfXCDCm7svJBjqkAbcpRszh6HgUBjDAKsVQGdXeq8agxMh1n0vqumzOZGtaQAVevuWRB5cBEVMpXgIjftP5d6hQSv%2BP6bS7e0g9ofFvQCuC%2BfOYl1WIwEEEUrHAaNuOH9f0nqcoz2PHVe2p8rtz1uH8vC1TUc9wYD879JG1p8Bc1kMWQgqhdM85mg%2Bjv5TxkapcOoaxVlPU5wqGicOpbhoXgH0Sg%2FMNnAtRzwnll5Mq&X-Amz-Signature=bf87e2245730bb1a163527fd7ece2f32be8cdd9a43cf1c3456e6952f5cfacea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S7WUIC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3bAQPwVC3w4h6ngGOEhNQedJDpZNiU2h49M5gbAj%2FngIhALCPbh0wu7KUvyl%2BZBs%2BhaOZvbkoD029QcIsYr6nx%2FjLKv8DCGAQABoMNjM3NDIzMTgzODA1IgxBlAI43huW9Tf7TKwq3AMQrjeHcx9RBOXzmMi2eUYxD1L7kYoaZfng05MSu%2BrCRHBS0J2kJmnTJ6Tpfd7WPba9t55qVfrbzKWtZHu%2B%2F6F95hRHoLc43%2BH%2BQ%2FlwifUclel6BOgzk22bGk631aYHJ2QuFN1MkK9hZ7NkYA5xg8vlXd6J4r1tWuDsa6trKDDql5qvtjPyPMPPBuPNyYPStxrWsbSaNS4BMCzO276EJY1T%2FlyyXjcO5%2FMVAvaSCgVY0tzb8G3abhcTOCCYCwUsE9aDIzQ8za8kbdNBnN5iftxMA3H1hDTqw5zmlwoRYvfz4UW8zGhWkltqyFDxmbyUhJu2JrlPWFoRxtaETufR4Z0kUdMIBvPp5vQj4GhYJ5QGjjCnOHZi647JbJAnJYDHUZXnmHcE%2FDhvjNaAGpQhsNUlDeVrWpC942PIHW1KRvoYtmxkPiP4DHVQ%2FHo0PcdO8Fs6zQZdW39oHhVoc3QnjHbsSSZmEMNlhVWoqhXq1%2Ffd7Hie3Ms461j6g2LPlBTeH8cd64Sn6FJPV49mB6uLzxfzbId7LaEVkWS6YgRWuDhAvdnZKYIpP0QF3S%2BsDpCY59TdLsUumEMMY%2FutKzB4pvfbzIfgB0fXBDciCKrVt3PurAduVsVw6YUMXvfXCDCm7svJBjqkAbcpRszh6HgUBjDAKsVQGdXeq8agxMh1n0vqumzOZGtaQAVevuWRB5cBEVMpXgIjftP5d6hQSv%2BP6bS7e0g9ofFvQCuC%2BfOYl1WIwEEEUrHAaNuOH9f0nqcoz2PHVe2p8rtz1uH8vC1TUc9wYD879JG1p8Bc1kMWQgqhdM85mg%2Bjv5TxkapcOoaxVlPU5wqGicOpbhoXgH0Sg%2FMNnAtRzwnll5Mq&X-Amz-Signature=78c19a4ac5dd85bd2ea6fef78b1e615f737cbc60e684650c8652409ddfb3aa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

