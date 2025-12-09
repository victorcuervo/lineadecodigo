---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPHN2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW0n7CYDyksgdRfN8TGEadq21jJaNAIu4KCQkvhKpBlAiBu8UW7%2BrZmTIJ9%2FiVVkZ4GcsYzH%2B8toUyGI8MjxTiFiSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84BhERYyQP%2FxSbr%2FKtwDjcTRBhr%2F6nVLl6N%2BYhPJN7iHCDAunZBoKFd63DxOH0HlSFdjuVLLgsgeNbEFdUG4XeL%2BT1twLo2X4abmOCj2317Bf62BHLBkfFOv3h6XU9CfROVhKNn3jsgd8Lhzj5LEwzRIQ788jaBnAoJlca7g%2FdeDBeiC6nm20Rb5INHtcZiQz2rInJMWZsk%2FqaR%2Bus5vJH6nYr7tjw6Isyw2xPCoj7Tjln8zIASdMhO6yc%2Fqm1kZKKMb1b%2FpsS5uLdqnRzRnUC9fwzeQHBkYB6nQffT%2BGG7MK6NhdA8OWKeyxylQ%2FbeoXfDwG7ul0J0itKfNv%2By%2F75W0tI3ESzR5Oygg7HyryPLZjt%2FEl5fSgp7e1nZGGIWL4lDoZ2tls9TW2p0h%2BSLTB0I6U2KmiAvgRh2eY7PYY3GkPthOO7Fc7cyKh%2FtabqOo9cYYRtkijrh1QjeQwQtO0j%2BwOT7%2F05E7IKHfZSxZ2v3WlbmzrTjFraJiZEVULZpTWmNF2gcFBP43xI%2BosPUifTZTY2WSq0ZuEmWRiu9CocqDW6%2Fk1pohvkkltBcBORle2lUdT83AhZ3dnHhKWmHcOh6spEYU3ybnS31FUVGrEJMwU1QcYaAje9gUGZaDLx4Fn6Qv9nrYZnbabngw%2B6TfyQY6pgFkc3de0K3mEK6jIb2JtsQpM3PllraxFZM%2FB4mqf3nVLNeWHjBZ49%2B20GUqNPgOUeVgnc6WvEVTEWapjQEZdKNeo%2BWd6ywsE5RYLnJ4APHZK0imwrlPHfnVtK5hJRkoRlDLaNWEHbjX8s87jl8PibaBidHDBzn5wnvmmJpw2aYbRgUtaZz2WRvMFd9nqC1hl4ljY4q%2BnIhg3vk74EKAGicP%2FOGmUH5M&X-Amz-Signature=e1e66846f797a81931bab74251b02f45cfbe83dc2fc40228092395950f2a59f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPHN2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW0n7CYDyksgdRfN8TGEadq21jJaNAIu4KCQkvhKpBlAiBu8UW7%2BrZmTIJ9%2FiVVkZ4GcsYzH%2B8toUyGI8MjxTiFiSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84BhERYyQP%2FxSbr%2FKtwDjcTRBhr%2F6nVLl6N%2BYhPJN7iHCDAunZBoKFd63DxOH0HlSFdjuVLLgsgeNbEFdUG4XeL%2BT1twLo2X4abmOCj2317Bf62BHLBkfFOv3h6XU9CfROVhKNn3jsgd8Lhzj5LEwzRIQ788jaBnAoJlca7g%2FdeDBeiC6nm20Rb5INHtcZiQz2rInJMWZsk%2FqaR%2Bus5vJH6nYr7tjw6Isyw2xPCoj7Tjln8zIASdMhO6yc%2Fqm1kZKKMb1b%2FpsS5uLdqnRzRnUC9fwzeQHBkYB6nQffT%2BGG7MK6NhdA8OWKeyxylQ%2FbeoXfDwG7ul0J0itKfNv%2By%2F75W0tI3ESzR5Oygg7HyryPLZjt%2FEl5fSgp7e1nZGGIWL4lDoZ2tls9TW2p0h%2BSLTB0I6U2KmiAvgRh2eY7PYY3GkPthOO7Fc7cyKh%2FtabqOo9cYYRtkijrh1QjeQwQtO0j%2BwOT7%2F05E7IKHfZSxZ2v3WlbmzrTjFraJiZEVULZpTWmNF2gcFBP43xI%2BosPUifTZTY2WSq0ZuEmWRiu9CocqDW6%2Fk1pohvkkltBcBORle2lUdT83AhZ3dnHhKWmHcOh6spEYU3ybnS31FUVGrEJMwU1QcYaAje9gUGZaDLx4Fn6Qv9nrYZnbabngw%2B6TfyQY6pgFkc3de0K3mEK6jIb2JtsQpM3PllraxFZM%2FB4mqf3nVLNeWHjBZ49%2B20GUqNPgOUeVgnc6WvEVTEWapjQEZdKNeo%2BWd6ywsE5RYLnJ4APHZK0imwrlPHfnVtK5hJRkoRlDLaNWEHbjX8s87jl8PibaBidHDBzn5wnvmmJpw2aYbRgUtaZz2WRvMFd9nqC1hl4ljY4q%2BnIhg3vk74EKAGicP%2FOGmUH5M&X-Amz-Signature=336c75f8c53b5413f6d33e2d09825730e579fda12d53012f50ffc4e4b6f8acd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

