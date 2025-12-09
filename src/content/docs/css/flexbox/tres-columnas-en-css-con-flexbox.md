---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675TWOCZC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFqnUgzPnHorQglIggxZu%2B4Hk5FXCSbHj7%2BOaiFK5aHAiEApvcHHchpIXlG1vfR%2BlYlGKwvokIs5h%2BzTaU%2BUT9%2Bqm8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCeBUxM%2FIdlLpEUgyrcA2Xa8vUQYvvY8KJrH%2FAM6sOmlslC9SitzrmfIs%2BzXKN19c5UVupbR7FyfQrA5wiBGX0gyu7dLX%2FehbEn8AQMqIVeoLalB%2BgaFKxHRcZgSzmk5DjX%2Bp3eBTDiDQOTK6XGTMjJA2TH5EzHU%2BXg66E4VN3UqILr%2F3GVU%2B6gLcf%2BaP6NX9%2Fxi1PFxtANlFAogCcbbAlrv%2B9W1h7cyysav%2BIuz7yrHDILjzgAJSCudOs02Rn84PiOke5srVHNBwvKHqE4Z%2BWicD7QhQVSqQrrDAum2eZVVB%2FHPYL0Mgge9yOWNBAXFQkR2Dai%2F7HGP7kAaMIo3GgYAlC2ORIiHBQ140D5Jj4RBp%2FpZ70gRu4Z9ejYhD0qQc%2BDpY%2BoB69NNlusozV4HN93hw3gYAwoV77HXN0kwVAy93vVlZoG7%2F1kx4SZPggj%2BBHWGBDqB20FYscTZrZREVaSayaVW%2BTnCU29s81hvEhDBOSd%2BofmW0BEvJX%2Fu9YizMIY1e4GrdnNl2c5Gq%2F9UqgB%2B8798xli%2BpkYrp4QCHAK1YuIlgByr%2BYq6ra8vH%2FtvFeFCsfdCzznDRZIEWEFzm3k77HVyb3j5CU%2BI5HIdLmIQ2Tf4287TcSwKOwaWjCh8dhVaKPrfnRkpH9JMPvk3skGOqUBYZf18C%2Fpk9l%2Bn5Df5HSo1D7PQAQ9nLQ4DcZfhUaUTOlWfKdx%2FoqvI2oJPuRwRusR5dj1ysIY%2FjgH5bJTvwqYdxM8PQkGQ2JMMBsNWb2g0xxcjvNus8JyhBcnnMHpib2ytKpeU8AN0Y1Jmkr4FBxUGJBdGhGYLWT9LaDPLGO6PYsBycsNJv3FaTlQHQHEC0RiO%2FKNig5X7a8Rw9%2B4ylWGbChYTZTV&X-Amz-Signature=7a12aa4fdd54da3dcb3d2241b60fa680e4010754f805d093ec045e63c2f92c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675TWOCZC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFqnUgzPnHorQglIggxZu%2B4Hk5FXCSbHj7%2BOaiFK5aHAiEApvcHHchpIXlG1vfR%2BlYlGKwvokIs5h%2BzTaU%2BUT9%2Bqm8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCeBUxM%2FIdlLpEUgyrcA2Xa8vUQYvvY8KJrH%2FAM6sOmlslC9SitzrmfIs%2BzXKN19c5UVupbR7FyfQrA5wiBGX0gyu7dLX%2FehbEn8AQMqIVeoLalB%2BgaFKxHRcZgSzmk5DjX%2Bp3eBTDiDQOTK6XGTMjJA2TH5EzHU%2BXg66E4VN3UqILr%2F3GVU%2B6gLcf%2BaP6NX9%2Fxi1PFxtANlFAogCcbbAlrv%2B9W1h7cyysav%2BIuz7yrHDILjzgAJSCudOs02Rn84PiOke5srVHNBwvKHqE4Z%2BWicD7QhQVSqQrrDAum2eZVVB%2FHPYL0Mgge9yOWNBAXFQkR2Dai%2F7HGP7kAaMIo3GgYAlC2ORIiHBQ140D5Jj4RBp%2FpZ70gRu4Z9ejYhD0qQc%2BDpY%2BoB69NNlusozV4HN93hw3gYAwoV77HXN0kwVAy93vVlZoG7%2F1kx4SZPggj%2BBHWGBDqB20FYscTZrZREVaSayaVW%2BTnCU29s81hvEhDBOSd%2BofmW0BEvJX%2Fu9YizMIY1e4GrdnNl2c5Gq%2F9UqgB%2B8798xli%2BpkYrp4QCHAK1YuIlgByr%2BYq6ra8vH%2FtvFeFCsfdCzznDRZIEWEFzm3k77HVyb3j5CU%2BI5HIdLmIQ2Tf4287TcSwKOwaWjCh8dhVaKPrfnRkpH9JMPvk3skGOqUBYZf18C%2Fpk9l%2Bn5Df5HSo1D7PQAQ9nLQ4DcZfhUaUTOlWfKdx%2FoqvI2oJPuRwRusR5dj1ysIY%2FjgH5bJTvwqYdxM8PQkGQ2JMMBsNWb2g0xxcjvNus8JyhBcnnMHpib2ytKpeU8AN0Y1Jmkr4FBxUGJBdGhGYLWT9LaDPLGO6PYsBycsNJv3FaTlQHQHEC0RiO%2FKNig5X7a8Rw9%2B4ylWGbChYTZTV&X-Amz-Signature=fadc5841ec43381ce8a974434fc54ddc9b32b28a111ac451e2972baf9a004cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

