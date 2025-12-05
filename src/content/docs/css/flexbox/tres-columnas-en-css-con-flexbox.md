---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBX4EA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxw5gvsmw%2Fj7qPWW9YR0ouGrMidY7Insyhk3bAtDTgBAIgN0yAhpK%2BMJ0iDc9vJcqMFBywgHTJGiVrR6d51ROaijUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGO0QxLGFSdelHnxNyrcA8IZfGiOBeVefypPUeYzYN30CHUkiyUTPngMpCEB8cUEo%2F7c%2BR%2BRaKr8ERbKaNE12Yo0x3TXTShSDQK5b62zxAWRr63pvF1cusLeqcV2qMo%2B1ohhRYARpM7XQT8UDbgCTcyFBIj6y11uW58RExxNpck7FC%2B8Yby7Pv8rkTD3EoDQ2aripDNLTYaITPQWEEzULe8LDAws3XHbX2xTLIuOUvM9pDVjGIhBQPZ12L5aE8D4VcvN%2FjqXOfCNvsOJK2qabGRDQOPa7A3q6oif%2FU2SsOfpAkt4YAv42pAeTE3xzMZJZtvKu0c%2BgksCFKzasCQ9j5jecDZ5TQ%2BCjYvq61inoye73c61zV9q8VKmkt%2B4a1%2BUK%2FEEXrl9nFbsy%2BSzs7fErnSLRvdunBw1kBQjUATfwBz8fQeKCrg7SWtlV%2F8ZtxsdnUHrzenlEYeHrZygG1WfXmurZKFA%2BQ%2Fpmvh3SMalPdQWIKK6w%2FAzMUbC0fpYNgtdyYYQ%2BXnMj4MkzV7E%2BxJUP717rJMZdOYExMt3fMuibW2gTz4xHd7cXmJj2RkDCxpYdunQeGXOs%2B9D2AqI3SRf0H7ztZQwa%2FCRdhgRVUuyrBPp9hf8tDevyHNABoce3IS34vsLPQ55rZyLU1JwMNytyckGOqUB9MH3qNZoxAeKAujjiQd6pg55CkKRPRLcg2hz2ey4jrwsrIJtdOcoCbepz01z69n52lazapFJLGoukgxtJMvigYiAuk9r9N9P7OEGLZ0M%2Fr7SSaveqxXcXN3lVf3lBYANoAoqxEyPZya1htYryjnk3NkIhprqEi%2BA32hOKxpuY4fSBeM3zIU6nD9y36w7cm2NB3xX%2BZx3Jk8IWYd3HgCKQuJIhQNC&X-Amz-Signature=429d9c37ec682536c5c6697b62fd31a2b8ed1a4b80df79acaa9fb37fbbc0860b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBX4EA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxw5gvsmw%2Fj7qPWW9YR0ouGrMidY7Insyhk3bAtDTgBAIgN0yAhpK%2BMJ0iDc9vJcqMFBywgHTJGiVrR6d51ROaijUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGO0QxLGFSdelHnxNyrcA8IZfGiOBeVefypPUeYzYN30CHUkiyUTPngMpCEB8cUEo%2F7c%2BR%2BRaKr8ERbKaNE12Yo0x3TXTShSDQK5b62zxAWRr63pvF1cusLeqcV2qMo%2B1ohhRYARpM7XQT8UDbgCTcyFBIj6y11uW58RExxNpck7FC%2B8Yby7Pv8rkTD3EoDQ2aripDNLTYaITPQWEEzULe8LDAws3XHbX2xTLIuOUvM9pDVjGIhBQPZ12L5aE8D4VcvN%2FjqXOfCNvsOJK2qabGRDQOPa7A3q6oif%2FU2SsOfpAkt4YAv42pAeTE3xzMZJZtvKu0c%2BgksCFKzasCQ9j5jecDZ5TQ%2BCjYvq61inoye73c61zV9q8VKmkt%2B4a1%2BUK%2FEEXrl9nFbsy%2BSzs7fErnSLRvdunBw1kBQjUATfwBz8fQeKCrg7SWtlV%2F8ZtxsdnUHrzenlEYeHrZygG1WfXmurZKFA%2BQ%2Fpmvh3SMalPdQWIKK6w%2FAzMUbC0fpYNgtdyYYQ%2BXnMj4MkzV7E%2BxJUP717rJMZdOYExMt3fMuibW2gTz4xHd7cXmJj2RkDCxpYdunQeGXOs%2B9D2AqI3SRf0H7ztZQwa%2FCRdhgRVUuyrBPp9hf8tDevyHNABoce3IS34vsLPQ55rZyLU1JwMNytyckGOqUB9MH3qNZoxAeKAujjiQd6pg55CkKRPRLcg2hz2ey4jrwsrIJtdOcoCbepz01z69n52lazapFJLGoukgxtJMvigYiAuk9r9N9P7OEGLZ0M%2Fr7SSaveqxXcXN3lVf3lBYANoAoqxEyPZya1htYryjnk3NkIhprqEi%2BA32hOKxpuY4fSBeM3zIU6nD9y36w7cm2NB3xX%2BZx3Jk8IWYd3HgCKQuJIhQNC&X-Amz-Signature=f840083b146d938b8bbf740c5b1ed8e1dc9263a82cf3cf0b07da147337ec32a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

