---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WVQ75J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PtRw%2BTD8OKeuZLPcxXVWeqX8bqPBaX3BNoXJQ7bVhwIgFmpVO33zWqbpoVfOU5gKFba1%2BNsTnsWpUmL6%2BVFpnqEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLMkNCP0GC%2F%2B%2F0CxMCrcA0k%2BGlFh7YkAafoDsA9JX4BTUbfzw2XWnOgst9ja48oGlQ0CX2zPlTQ4wscavrOt9n2rXrDSvC%2BKGEYZ0L9fJu3Kf%2FJ0%2BM7dZYmev5l9vGS9eJuVGGMoDor42FYmQV68nwOAjI31EBi2kMs%2F5js3eY5eO1BGM0NUu0%2Bnp%2Bh7KCK4uTOCQMMKNOz%2BSHYAlQYolFvPHBMc70N6BDfZgM%2BktKIueTeSovPS9O%2B8Iz6veP%2BHtX0RkS6v8qRo%2BOEBdtKQheNzqXN9QJzUdWhX2KBUBrgQ4%2BMqn8a%2FbQatiBBtNcWeHY0v2DSFpWaMP1DsfcBoGkCxnlNdw9wIe7KSHK4qNLAqo8tGXqZOpjOB6BH6CiTxhBMBO8VRXoa7ZabcNcOakc8kmRf8TJRFUwMPLTmMVhjto4%2FZeQ0oy5V5PxmmSBUjhYUI9iMnwPNeBLB1h1vgabHcZuJcTLnFRph8AD8dl0maEM4gCqdUNK8EMm5CQ7ScDPcdFM0ceReQVwJF%2FO2u7TzCKCN%2F1hn5iS%2BYv7qP%2BuYsFqBDLweaLVnjzZOWBBpuTxyTczgVq14dwz%2FEs0lrBrzonJ6KMbIfdFJNMr2bnFAdEeA9k3k3hW%2FeaSa0DqnCmeodt3GQPDY3oW5EMMSsyckGOqUBtTYH6UwU4KXLp4o82PNk6rtbqJqRS64J2adFWBKUqFRXZ%2FutnyUnSmy0yWA4t7v7TiV56nMfu7pjcH3ga1QLF77SzOch%2FF%2BoqZeEt4v7qAL78ajpp0Abd0sUNvpYMqk4wPO2C41loMU0jj2P%2Fr2RdMrpK8Ds%2FVkNMhO4hXBvkSo5k3TzrRm4ze3Wp%2Bm0VuiT21uBkjUAJCpZ2F52m8cDhnx8ldBH&X-Amz-Signature=ecf7f4beed7b81602554676e2d39af2c829e48bda75132af8f0cba4e3fc09542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WVQ75J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PtRw%2BTD8OKeuZLPcxXVWeqX8bqPBaX3BNoXJQ7bVhwIgFmpVO33zWqbpoVfOU5gKFba1%2BNsTnsWpUmL6%2BVFpnqEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLMkNCP0GC%2F%2B%2F0CxMCrcA0k%2BGlFh7YkAafoDsA9JX4BTUbfzw2XWnOgst9ja48oGlQ0CX2zPlTQ4wscavrOt9n2rXrDSvC%2BKGEYZ0L9fJu3Kf%2FJ0%2BM7dZYmev5l9vGS9eJuVGGMoDor42FYmQV68nwOAjI31EBi2kMs%2F5js3eY5eO1BGM0NUu0%2Bnp%2Bh7KCK4uTOCQMMKNOz%2BSHYAlQYolFvPHBMc70N6BDfZgM%2BktKIueTeSovPS9O%2B8Iz6veP%2BHtX0RkS6v8qRo%2BOEBdtKQheNzqXN9QJzUdWhX2KBUBrgQ4%2BMqn8a%2FbQatiBBtNcWeHY0v2DSFpWaMP1DsfcBoGkCxnlNdw9wIe7KSHK4qNLAqo8tGXqZOpjOB6BH6CiTxhBMBO8VRXoa7ZabcNcOakc8kmRf8TJRFUwMPLTmMVhjto4%2FZeQ0oy5V5PxmmSBUjhYUI9iMnwPNeBLB1h1vgabHcZuJcTLnFRph8AD8dl0maEM4gCqdUNK8EMm5CQ7ScDPcdFM0ceReQVwJF%2FO2u7TzCKCN%2F1hn5iS%2BYv7qP%2BuYsFqBDLweaLVnjzZOWBBpuTxyTczgVq14dwz%2FEs0lrBrzonJ6KMbIfdFJNMr2bnFAdEeA9k3k3hW%2FeaSa0DqnCmeodt3GQPDY3oW5EMMSsyckGOqUBtTYH6UwU4KXLp4o82PNk6rtbqJqRS64J2adFWBKUqFRXZ%2FutnyUnSmy0yWA4t7v7TiV56nMfu7pjcH3ga1QLF77SzOch%2FF%2BoqZeEt4v7qAL78ajpp0Abd0sUNvpYMqk4wPO2C41loMU0jj2P%2Fr2RdMrpK8Ds%2FVkNMhO4hXBvkSo5k3TzrRm4ze3Wp%2Bm0VuiT21uBkjUAJCpZ2F52m8cDhnx8ldBH&X-Amz-Signature=7ce565fe1a84a7c61f2aea8c81e8368933f5dd33a262ce145701207e9feddc59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

