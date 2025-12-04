---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERMG2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnj161UGLoG0Oiq9JzdB5n7BjiwEuMCtoFouE%2FvzE5ogIhAN8ZMr63aIDup6MwXWIuipdRoCCP1ZMgviHXMxJIHkcUKv8DCE8QABoMNjM3NDIzMTgzODA1IgxEW08Vgb2WOhs5gUQq3AOIQjdc9RIoD%2F4lcYRPpEqJ1BFELLMOBFj7S90lh4VwFx3AreX5kjSl4pXfTCsD8mqghroxb2aKPjOCCsafSQKZSdOU9YTPI7D3sA5BZZJgnq7UbIQ7a1RJ%2F0eKr0H1hoCf83%2Fli5DCgsUW%2BTBK%2F1%2B9NVInbV%2FRWik%2FCSl%2FhghhR3d13Aa9%2B5AfBfNeens2ylArgZBYtDD%2BLTYzVJAD%2BIePs%2BuXISZAhff8OLKYg437LYUWX6sYdCNM6TG%2FXBwNS6qX2is%2F9xwl1ugwT1qTov2o8kXdNxXWoWYANYNDRXt116BNMM1fLkDvZsZIng8ZAxTL7Fkag%2BWPpDlV2plhjJM2e26ILMAYXrNsY08M3RDxdeRQ4%2F7vN1IzIJ6guIakQxoJYJRvN7D0jBtmeG6CmrLgfz3Fz037YI8sVr0gVE%2BNqHr1lrXil8n0gDkRvODfMEpRc9uo0hHJD5i7mTq2jfolSAMdhvI558amKw%2B%2FQTLnrj0Gdv8RdzFWbRFCzVtN%2B9KDA6jO6mddSdQ6jfshPQm7YSOkUb0vmxNS4WaD5ootK9uWNPbcVZtG%2BxISm3GpX0lRjrXqjzVZ4yr5v4CofBabuHdBlM6ShS1z3PxZCPaJb7II10uFDtsu8aEvOzCyjMjJBjqkAeISGpu8DyvtOnt8xHRxq7ab1UsxeSMSZnqIiL4qbEhfpxP6BjxF5TtgSHl%2BG4zjS47YCY%2FK4zjnfjpzkkupGbQkDCsXmwIbc8v5yhOizt4rGx%2BweEnxuHql6Pm9wk1qC5TX3td0wgvlVRExuOU9rRUeNnLhrWgKUeT7AkvFSmbCWdrMB4fkz730LArWw6tmA38re865aqz%2FyUESNvJK0CCQSu6t&X-Amz-Signature=9d5563798b0fd06a0ffdd2a115b2530e79e86bda7fefcd8c371f0c70b7486acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERMG2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnj161UGLoG0Oiq9JzdB5n7BjiwEuMCtoFouE%2FvzE5ogIhAN8ZMr63aIDup6MwXWIuipdRoCCP1ZMgviHXMxJIHkcUKv8DCE8QABoMNjM3NDIzMTgzODA1IgxEW08Vgb2WOhs5gUQq3AOIQjdc9RIoD%2F4lcYRPpEqJ1BFELLMOBFj7S90lh4VwFx3AreX5kjSl4pXfTCsD8mqghroxb2aKPjOCCsafSQKZSdOU9YTPI7D3sA5BZZJgnq7UbIQ7a1RJ%2F0eKr0H1hoCf83%2Fli5DCgsUW%2BTBK%2F1%2B9NVInbV%2FRWik%2FCSl%2FhghhR3d13Aa9%2B5AfBfNeens2ylArgZBYtDD%2BLTYzVJAD%2BIePs%2BuXISZAhff8OLKYg437LYUWX6sYdCNM6TG%2FXBwNS6qX2is%2F9xwl1ugwT1qTov2o8kXdNxXWoWYANYNDRXt116BNMM1fLkDvZsZIng8ZAxTL7Fkag%2BWPpDlV2plhjJM2e26ILMAYXrNsY08M3RDxdeRQ4%2F7vN1IzIJ6guIakQxoJYJRvN7D0jBtmeG6CmrLgfz3Fz037YI8sVr0gVE%2BNqHr1lrXil8n0gDkRvODfMEpRc9uo0hHJD5i7mTq2jfolSAMdhvI558amKw%2B%2FQTLnrj0Gdv8RdzFWbRFCzVtN%2B9KDA6jO6mddSdQ6jfshPQm7YSOkUb0vmxNS4WaD5ootK9uWNPbcVZtG%2BxISm3GpX0lRjrXqjzVZ4yr5v4CofBabuHdBlM6ShS1z3PxZCPaJb7II10uFDtsu8aEvOzCyjMjJBjqkAeISGpu8DyvtOnt8xHRxq7ab1UsxeSMSZnqIiL4qbEhfpxP6BjxF5TtgSHl%2BG4zjS47YCY%2FK4zjnfjpzkkupGbQkDCsXmwIbc8v5yhOizt4rGx%2BweEnxuHql6Pm9wk1qC5TX3td0wgvlVRExuOU9rRUeNnLhrWgKUeT7AkvFSmbCWdrMB4fkz730LArWw6tmA38re865aqz%2FyUESNvJK0CCQSu6t&X-Amz-Signature=b78af4e886efaae2e0040663a378ef3a8970ed863959afedbce062b09d09950b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

