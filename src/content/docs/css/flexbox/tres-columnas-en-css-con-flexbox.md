---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTMP4R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qqpWIWUSFpLErek2d7jTveWkXiZW2ae8sFusMissnwIgF7sP6AzckTKme8qWfNRuC7eqVvwOnPqVtt9sP5k4zDMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEbBRF6vJMJbCl3zircA%2BvvtvQ5%2Bq30THMPd0wguCLtu7H1BguMHe4QCwxq9rXKq8pTYInMAml7Z9qmG8rCP4W4PErbOLTYVh%2BrMRifQBk1hehtBalYNrGYmNb0fsnG6QnNO4%2BBGJeEcjZd%2BUNFi0ZOM2aD0Tew1etm7%2BDmRKlo79jAozWclLPYPp6wl4isgKyRg2jgwYPNGI2HyYryFzVGKUR5jtgdtWlKPDiEzSGrWeLbaWEaKFqynnN8PXxw%2B60GnQBuCYPnOddn7uaXccGFbfbkK7xx99dxjqM1tfseYFzCKM8KgB0bimLPut68A0rdE9nmYHPGjxYouq5DjwP7VQqZOSVu5YryEviUSyIpmnMEB0GF%2F0kt4He0wb92HbmfmX0x5q%2FiXZK25B2FmSDMob6U%2B1gzxnBh3Pk1QYEwLMWNDeXIqfUp%2FJb0CsftockV4dZ9XMoyxK6CIQ0mB8z7cWIhjXNBwlhi4%2B4LhO9PnNx%2BOTaWl0eiZGhZ7hh2NybIZuowfoazJ5iraA0Gjib%2FURX8P5w7ArB6%2Fd0tLKj38TAHIvhRdx03%2BXatmJ0LcyCUPJ04Z2qx0FcROrQAAquV6ja1Sj828e4LfNKv0yj2Sd5KyKzNdx6C0MmS0iuUaVrKNzYdy3C9j7iSMIjk3skGOqUBiX7FM88qZ6Dxz9G35UM%2BE1r4YzmJY%2FJXpNUnCmz3cWpzZ4UGjz49DIbZv99sMd6nJTd2kXE5ausYEwXCzlMmET6%2FhAG6JsDvj25cxRCxaPrgztQbNAmjyYx9RzjU2w4QVwt5aWqIYKJCrmyaYGmjW2AeLKeGwiH2MTAZ%2BLBKtLyK5WekNcgVqt7zv9jKodf1hS8jvU7dGvmzOSbKx%2FAqnzpXNGsV&X-Amz-Signature=5d485100735053ec2029e43c13b2ae4b1c682b0455c5f89b1bace810bdefda83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTMP4R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qqpWIWUSFpLErek2d7jTveWkXiZW2ae8sFusMissnwIgF7sP6AzckTKme8qWfNRuC7eqVvwOnPqVtt9sP5k4zDMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEbBRF6vJMJbCl3zircA%2BvvtvQ5%2Bq30THMPd0wguCLtu7H1BguMHe4QCwxq9rXKq8pTYInMAml7Z9qmG8rCP4W4PErbOLTYVh%2BrMRifQBk1hehtBalYNrGYmNb0fsnG6QnNO4%2BBGJeEcjZd%2BUNFi0ZOM2aD0Tew1etm7%2BDmRKlo79jAozWclLPYPp6wl4isgKyRg2jgwYPNGI2HyYryFzVGKUR5jtgdtWlKPDiEzSGrWeLbaWEaKFqynnN8PXxw%2B60GnQBuCYPnOddn7uaXccGFbfbkK7xx99dxjqM1tfseYFzCKM8KgB0bimLPut68A0rdE9nmYHPGjxYouq5DjwP7VQqZOSVu5YryEviUSyIpmnMEB0GF%2F0kt4He0wb92HbmfmX0x5q%2FiXZK25B2FmSDMob6U%2B1gzxnBh3Pk1QYEwLMWNDeXIqfUp%2FJb0CsftockV4dZ9XMoyxK6CIQ0mB8z7cWIhjXNBwlhi4%2B4LhO9PnNx%2BOTaWl0eiZGhZ7hh2NybIZuowfoazJ5iraA0Gjib%2FURX8P5w7ArB6%2Fd0tLKj38TAHIvhRdx03%2BXatmJ0LcyCUPJ04Z2qx0FcROrQAAquV6ja1Sj828e4LfNKv0yj2Sd5KyKzNdx6C0MmS0iuUaVrKNzYdy3C9j7iSMIjk3skGOqUBiX7FM88qZ6Dxz9G35UM%2BE1r4YzmJY%2FJXpNUnCmz3cWpzZ4UGjz49DIbZv99sMd6nJTd2kXE5ausYEwXCzlMmET6%2FhAG6JsDvj25cxRCxaPrgztQbNAmjyYx9RzjU2w4QVwt5aWqIYKJCrmyaYGmjW2AeLKeGwiH2MTAZ%2BLBKtLyK5WekNcgVqt7zv9jKodf1hS8jvU7dGvmzOSbKx%2FAqnzpXNGsV&X-Amz-Signature=bb8b48c18d90a2ba0bb701440c1fedc90fb1b7b5096cfaa63ad5e7a73d1a98da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

