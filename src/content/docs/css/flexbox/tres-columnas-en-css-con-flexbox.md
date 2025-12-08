---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRZ33QC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsWpcc4Obu78uQl0cl2yNdhVK2Gqz2uZJxw6lB0AHI0AiEAvy4%2Bh7rzqPcIAEWb4eyttz9Ph1XBk2P%2F6463Qcrn22kqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb6yzLsH4nzNzCaryrcA%2FUQReW07EooMcqN1vXGKHwbhDGAEO9SNvngaxX%2F9hzj7PFIV5vkJ%2B3LCvzrZmSx7wMOKq8pm%2Bbmx0Zo%2BoAbailYmTaQcCxz3hZHW6hLUS%2BcO4FZva36jN5uineJqk6ukw4ewwNnGaVNrDx7RH9VwFUOApbK6K8EOFtidOYUPZ8SzEjrQLXJBZV7btFH4mNNqqKhovyfKP5ur%2FLjN3vX3EPWHQcMv4q5zV6qrt48kpQwibPT1gJO5HBUoKVyY%2Bvq39tR1A7y6jJ%2BQJ9VAkRpYWAXKD73QdpH9GY71nNSkFTxq3e58LYLwmJyOcUcSqMIMPyaj%2FPHpCsagtzuL0bgbuZUkWsrwgNjCtOYF6O0nET5Wf30gTRO%2F20%2Fqg8OwC%2FvWssyo9E9%2BCz80UpLTk88SAQ7XwNNGMlWAaDy2kPqKoXaPgNrzb36wdzxZ6iCDbrbdpVzDVhETEl%2F4m051j3rL8j5Pw9pp9IIkIGkrdS1Hkk03p1aiRuM%2FZVjXcwG7thycYKCsq6vYfCjrAGTjdTQmpNlddPjQ3IK7QohefrKntr8XnKezyYtG4L95ro6H1jcFMxNPN2zJX3bCmZ7%2FT4Ba4rZRpFPrQlhqU67LYo%2BuZitHMQyQXS9ysK7rhYNMNiU2ckGOqUB%2B10SUwlYnqooqeSQUQp4Tka7x2pwjjpDo4rkh9B72RT4x5m6%2F%2BWF8HzqXWoYCr%2B6rzKSxksmdOZDkftbqY2V7Cwy%2Bqvhlk85baOUVIwSIxG%2Bqx30snt9SjfKtfz7DeE7MMT7GJJgFWp1T%2BPkBAEVFajxFNdSsNtJ%2FhQBm8brtZke%2FSPCLyWYdMEQ8ZlAhx5C%2FwlvpZPaRJ2lMKTeXftx%2BlygBjii&X-Amz-Signature=0d617c01ec8cda0864b89941f7d7afd1b97be6450f02852e7d0086b79ac19be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRZ33QC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsWpcc4Obu78uQl0cl2yNdhVK2Gqz2uZJxw6lB0AHI0AiEAvy4%2Bh7rzqPcIAEWb4eyttz9Ph1XBk2P%2F6463Qcrn22kqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb6yzLsH4nzNzCaryrcA%2FUQReW07EooMcqN1vXGKHwbhDGAEO9SNvngaxX%2F9hzj7PFIV5vkJ%2B3LCvzrZmSx7wMOKq8pm%2Bbmx0Zo%2BoAbailYmTaQcCxz3hZHW6hLUS%2BcO4FZva36jN5uineJqk6ukw4ewwNnGaVNrDx7RH9VwFUOApbK6K8EOFtidOYUPZ8SzEjrQLXJBZV7btFH4mNNqqKhovyfKP5ur%2FLjN3vX3EPWHQcMv4q5zV6qrt48kpQwibPT1gJO5HBUoKVyY%2Bvq39tR1A7y6jJ%2BQJ9VAkRpYWAXKD73QdpH9GY71nNSkFTxq3e58LYLwmJyOcUcSqMIMPyaj%2FPHpCsagtzuL0bgbuZUkWsrwgNjCtOYF6O0nET5Wf30gTRO%2F20%2Fqg8OwC%2FvWssyo9E9%2BCz80UpLTk88SAQ7XwNNGMlWAaDy2kPqKoXaPgNrzb36wdzxZ6iCDbrbdpVzDVhETEl%2F4m051j3rL8j5Pw9pp9IIkIGkrdS1Hkk03p1aiRuM%2FZVjXcwG7thycYKCsq6vYfCjrAGTjdTQmpNlddPjQ3IK7QohefrKntr8XnKezyYtG4L95ro6H1jcFMxNPN2zJX3bCmZ7%2FT4Ba4rZRpFPrQlhqU67LYo%2BuZitHMQyQXS9ysK7rhYNMNiU2ckGOqUB%2B10SUwlYnqooqeSQUQp4Tka7x2pwjjpDo4rkh9B72RT4x5m6%2F%2BWF8HzqXWoYCr%2B6rzKSxksmdOZDkftbqY2V7Cwy%2Bqvhlk85baOUVIwSIxG%2Bqx30snt9SjfKtfz7DeE7MMT7GJJgFWp1T%2BPkBAEVFajxFNdSsNtJ%2FhQBm8brtZke%2FSPCLyWYdMEQ8ZlAhx5C%2FwlvpZPaRJ2lMKTeXftx%2BlygBjii&X-Amz-Signature=dd3cfe0c869ea94d554770d1301f9d4521b890ebcf59ae36719b1cf9d09665d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

