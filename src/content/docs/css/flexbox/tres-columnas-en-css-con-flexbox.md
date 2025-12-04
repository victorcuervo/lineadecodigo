---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMBXYMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwHemcNm9RdTJhCr3LToFJ5Is%2FHV66h1f1ermp4%2FDluAIhAJ7AjLwlxCLrG3qiL2YL5z9JsB%2BWG3tHk0vr8gKeeKcvKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMJI3cDPL66RYSyq4q3AMSiu037KC7YtzczxmAS4%2B2rjQm0usBLQcRMk2nRHbk73259MXGSB9OX63Ixxl8VM9g5GhsTGWpwYY9%2B0cyFAokrI12Ir4FIOLpG5gAKs3VLeDHMbwkwm0HeioorRWUYZIcku8sAKigQR872gstOw9f5yb4tjp4Vk2e8U26pvkblYExXOjvKRS2zQ2Kd7ugAotNAaGDD0dq3iTI%2FP9KdQTC%2FC%2B1ekuHF25IkvXjx%2B%2FdIN2p0V5bQNCubEJ5SALvTOoClBAcSovn7wu%2BiLoeMHn9yDs6%2BWJf7%2B67Q9Re7RlNIxV7DQA0wF45zYs1IUFhS8LI1ZEPg8wVvgMu00gJktb56wKhgVLyRFOzEfsf0O0m9IDhC34r0PeUtD3gs1%2BKNgNVt7LwMA4cKDoWgx%2FywEpmnUNPbn2gyML6%2BAyY1Yq66N0Dw4FLrzaYnR%2BuWGP61jK%2Bnez4qMG4PPz9Mrp0n1fqs3miBLN1VTXaE3NgBO%2FDgAGlvx2UpxSw06iungFmSQjIZ35kujXZYXVQSAhB%2Bi%2BSsQfVknssPNZa4IdJxuBf5LLtxJP67I6IlpiAiUpgeQvAkrJaoRThI%2BQKW3%2BaAWepMeraWgXByvHM%2BCaIDNkXdIjWlmPM%2BqjrRH6ykzDejMjJBjqkAWXr4XRN8fA50MGDbVFXwfVUDoMQO5OpjzxnJaSNlh5nVNxR5vYBU%2FKqVbkH5u0HymxNKp5vyhQjbmw7dOgN4GUb0r8T2JnljlQLexDQ4wxXTqPxnw%2BmMvMB8%2BJtsYdK6SocxQpY2ZUiaccslTnEvi4y9ddqFf3P2xN4W6yj77xrmSDdB4ZdSqJF4Fwbmf84Kvpw2JCrPfCh45mR39%2B5AOdKMFSy&X-Amz-Signature=4582b26a065ff0c3b86b18b192032e42401492aba8969718a43f65fa87f925cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMBXYMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwHemcNm9RdTJhCr3LToFJ5Is%2FHV66h1f1ermp4%2FDluAIhAJ7AjLwlxCLrG3qiL2YL5z9JsB%2BWG3tHk0vr8gKeeKcvKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMJI3cDPL66RYSyq4q3AMSiu037KC7YtzczxmAS4%2B2rjQm0usBLQcRMk2nRHbk73259MXGSB9OX63Ixxl8VM9g5GhsTGWpwYY9%2B0cyFAokrI12Ir4FIOLpG5gAKs3VLeDHMbwkwm0HeioorRWUYZIcku8sAKigQR872gstOw9f5yb4tjp4Vk2e8U26pvkblYExXOjvKRS2zQ2Kd7ugAotNAaGDD0dq3iTI%2FP9KdQTC%2FC%2B1ekuHF25IkvXjx%2B%2FdIN2p0V5bQNCubEJ5SALvTOoClBAcSovn7wu%2BiLoeMHn9yDs6%2BWJf7%2B67Q9Re7RlNIxV7DQA0wF45zYs1IUFhS8LI1ZEPg8wVvgMu00gJktb56wKhgVLyRFOzEfsf0O0m9IDhC34r0PeUtD3gs1%2BKNgNVt7LwMA4cKDoWgx%2FywEpmnUNPbn2gyML6%2BAyY1Yq66N0Dw4FLrzaYnR%2BuWGP61jK%2Bnez4qMG4PPz9Mrp0n1fqs3miBLN1VTXaE3NgBO%2FDgAGlvx2UpxSw06iungFmSQjIZ35kujXZYXVQSAhB%2Bi%2BSsQfVknssPNZa4IdJxuBf5LLtxJP67I6IlpiAiUpgeQvAkrJaoRThI%2BQKW3%2BaAWepMeraWgXByvHM%2BCaIDNkXdIjWlmPM%2BqjrRH6ykzDejMjJBjqkAWXr4XRN8fA50MGDbVFXwfVUDoMQO5OpjzxnJaSNlh5nVNxR5vYBU%2FKqVbkH5u0HymxNKp5vyhQjbmw7dOgN4GUb0r8T2JnljlQLexDQ4wxXTqPxnw%2BmMvMB8%2BJtsYdK6SocxQpY2ZUiaccslTnEvi4y9ddqFf3P2xN4W6yj77xrmSDdB4ZdSqJF4Fwbmf84Kvpw2JCrPfCh45mR39%2B5AOdKMFSy&X-Amz-Signature=08d79035a61e37114211f829f4cadca55991c88e0532ebc2abf48cb0ec941754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

