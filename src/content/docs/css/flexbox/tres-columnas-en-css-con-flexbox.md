---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH7JNR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHO9lbGtcbEf0%2BTDHwLfd6CjshxBhtlmwOllG67ZnGQRAiEAzUdVx5FE%2Fe9BtlgsEqfqMle0f%2FAJIiXIH3tWr5F7RLAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJCSL%2BdIIh9AyspShCrcA4UTmKwixVWbcBJ0IYAaR5wouz2d5PXY8zejnUng4aeM6IKn5Ge5CbKdf9ikGLWOnFXxe3lHZMEZTpSPd53Wa1HHhgfU5nJIzbv%2Bu2xipfzsY%2FoGoQY3tqoyE7BFgMG4RL1DVg%2Bd7X0%2B70urJhlg59XDhJClsyAkklyp%2FWnRu4HS5n8kzhndjdRxLwkWEjofGh%2FM02gRz%2BbbIOJpDvXDvd0mdlx1L6mbsjs5IQvY2Z2zleMSJYleKcemh1jRMPJa%2B%2B6%2B8CqBRhYdf%2FQsTjvvp67qS1Q5dBR6zwYO1UicU9TdPV9sPVQPWrA5qWPqCVVHg%2Bnw3Dap97sdPBTA%2FkHfRRbLxbmIxHUO3g95EA%2Bwwq9j6QbmBZsnpA3STX0M%2Fr%2FTiNL0vfSKWl9xdRFrlKx1C3G%2F0nOxBZqbqeWzHzS7iCzgzWLBtwnp%2BddXAtEFe0iKBvR5Ymsfc4EyxI3y709fMYUO4SBoD6vpYrPw6n88KTnXW4YcvHQixQRzsUheXcMIYToySJAHR7HT6WOnF0%2Bzh1f2nVUnvv9SwUbDxS0O5BqmUOcebj%2FCYlR3cJZ3dgA3ZbT7asauZH9qtbKPTw7VXQslibFkmN09bWf3Nrhmazh%2B14AeBG2Cn%2BHPgccTMJKGxckGOqUBeHAqvADpziUeIk0QioE56xG83v4Ck1XMK2VFR%2Fpc2B0X9AKJYiEME2mu8ghLJXD%2FL100Yi9QkGNzLQFSpDz3SfvOIReZOjpdxYNrhGhJzVWzAis1vrC8k95a0khOvRqRDVIo5JTm3cK%2FCqqTEjilmozum8NTkL53%2F4JFW4FcLHE8oFZrTXvRKO2QGovYh3kKDREBW4O1%2B95Kfme8gHqOsGvfiChp&X-Amz-Signature=630a813f71639b58fd2ec4ac324789639a5794fc6425a0fe2a57f34f85c5b284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH7JNR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHO9lbGtcbEf0%2BTDHwLfd6CjshxBhtlmwOllG67ZnGQRAiEAzUdVx5FE%2Fe9BtlgsEqfqMle0f%2FAJIiXIH3tWr5F7RLAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJCSL%2BdIIh9AyspShCrcA4UTmKwixVWbcBJ0IYAaR5wouz2d5PXY8zejnUng4aeM6IKn5Ge5CbKdf9ikGLWOnFXxe3lHZMEZTpSPd53Wa1HHhgfU5nJIzbv%2Bu2xipfzsY%2FoGoQY3tqoyE7BFgMG4RL1DVg%2Bd7X0%2B70urJhlg59XDhJClsyAkklyp%2FWnRu4HS5n8kzhndjdRxLwkWEjofGh%2FM02gRz%2BbbIOJpDvXDvd0mdlx1L6mbsjs5IQvY2Z2zleMSJYleKcemh1jRMPJa%2B%2B6%2B8CqBRhYdf%2FQsTjvvp67qS1Q5dBR6zwYO1UicU9TdPV9sPVQPWrA5qWPqCVVHg%2Bnw3Dap97sdPBTA%2FkHfRRbLxbmIxHUO3g95EA%2Bwwq9j6QbmBZsnpA3STX0M%2Fr%2FTiNL0vfSKWl9xdRFrlKx1C3G%2F0nOxBZqbqeWzHzS7iCzgzWLBtwnp%2BddXAtEFe0iKBvR5Ymsfc4EyxI3y709fMYUO4SBoD6vpYrPw6n88KTnXW4YcvHQixQRzsUheXcMIYToySJAHR7HT6WOnF0%2Bzh1f2nVUnvv9SwUbDxS0O5BqmUOcebj%2FCYlR3cJZ3dgA3ZbT7asauZH9qtbKPTw7VXQslibFkmN09bWf3Nrhmazh%2B14AeBG2Cn%2BHPgccTMJKGxckGOqUBeHAqvADpziUeIk0QioE56xG83v4Ck1XMK2VFR%2Fpc2B0X9AKJYiEME2mu8ghLJXD%2FL100Yi9QkGNzLQFSpDz3SfvOIReZOjpdxYNrhGhJzVWzAis1vrC8k95a0khOvRqRDVIo5JTm3cK%2FCqqTEjilmozum8NTkL53%2F4JFW4FcLHE8oFZrTXvRKO2QGovYh3kKDREBW4O1%2B95Kfme8gHqOsGvfiChp&X-Amz-Signature=33fff7e8373e8beedf97a5c6e0115a5433c981ac96944bb811f0fc8ab30c2a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

