---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXL27Q2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCI9vkNvcJ8C2etmKG98CVuTIRhexH90RvaBKcOIIdDGwIgEutCtH560gMDC2Ooz6n7x1rm%2BAFFN0NLmiEtjbx9VIMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI7KWXQfCz72q4tf8yrcA%2FedND9hsDNjrkOORs3OQknbBbkSYbkyt0Grkzddz7IuY0mVlgQp0mBuCYyyueFhViR7wcvp1JeK038nY1y6xzQf0bedI5kWsXCJtchmGOnf9HlxRLDrOKrZknCVJTBL4AOZ1OkjvSaiydT%2BxnMEZ8i5OUNwQFLKe4JwU5l981ELVtAs1Wep%2FwL0ThYPy%2FhYRqpZF9wD0dca14dj3vBvNFHAqd2SkpeGU7VtuHBZwvCvbTfSnn%2FpJkZP9bjt5KV0LpNCQUPcqjUQaSzEd8QC3oC1mApaTo%2FKr5qfSe1pQVZ1o8b9dX1fqzZchljotDLPXn5ftDx5V2W0olxy6MnW%2F%2FCH8mB14OUJukbfSuJPnpcKvEBV1ZxWHCknYCnw9W5qgnkNSgXNt3pz7GiOI6YIyUvUuuQbpqYFoOWF%2BelAGM%2FGL7mH8E6fwNpQ71JmHpT4RxOQW9zMzkCnXk1vKJjqJHiRVazK9efXLXNdqhnZk15j6zgFTBEX0iWd9Fv6B42ApCL4oHAvTZN8pSh2ynM1dU43lcCn2x4XsNo2CCNIaNed4EYs5Ppo1m54ffC5%2F%2FE%2BjVCh6xN1g2%2BaHyE02IyLtSqYYsccFcipw7Wvu%2BwLiQNqL07pvLVd7KmtG7i5MLKRwskGOqUBcE6mzS7MLPmZsn6qwp%2Bmt%2B6N1niZfWPoz0xo0gllEv1gGuheGDsACXGd%2BNrGPIQUH1ZdrVCK95P60AEVjBCLYW4ExsGkBg7ZeAZbkr5PZ%2BfifOVMoI5Qd5GwpF02C0O0kINUAy3BnqJcPwZFBIqbipJo7pnK1bohzpxdEes4dGdbEaO1mciuQkzQcV%2B8tc%2BDtCgtwTTxFU%2BRaAdgVnrLPqBN78N6&X-Amz-Signature=461e0ee569c38e91aa3e23e4c0ab4ddaa26ceee6eac0a70eb1898f649dc93a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXL27Q2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCI9vkNvcJ8C2etmKG98CVuTIRhexH90RvaBKcOIIdDGwIgEutCtH560gMDC2Ooz6n7x1rm%2BAFFN0NLmiEtjbx9VIMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI7KWXQfCz72q4tf8yrcA%2FedND9hsDNjrkOORs3OQknbBbkSYbkyt0Grkzddz7IuY0mVlgQp0mBuCYyyueFhViR7wcvp1JeK038nY1y6xzQf0bedI5kWsXCJtchmGOnf9HlxRLDrOKrZknCVJTBL4AOZ1OkjvSaiydT%2BxnMEZ8i5OUNwQFLKe4JwU5l981ELVtAs1Wep%2FwL0ThYPy%2FhYRqpZF9wD0dca14dj3vBvNFHAqd2SkpeGU7VtuHBZwvCvbTfSnn%2FpJkZP9bjt5KV0LpNCQUPcqjUQaSzEd8QC3oC1mApaTo%2FKr5qfSe1pQVZ1o8b9dX1fqzZchljotDLPXn5ftDx5V2W0olxy6MnW%2F%2FCH8mB14OUJukbfSuJPnpcKvEBV1ZxWHCknYCnw9W5qgnkNSgXNt3pz7GiOI6YIyUvUuuQbpqYFoOWF%2BelAGM%2FGL7mH8E6fwNpQ71JmHpT4RxOQW9zMzkCnXk1vKJjqJHiRVazK9efXLXNdqhnZk15j6zgFTBEX0iWd9Fv6B42ApCL4oHAvTZN8pSh2ynM1dU43lcCn2x4XsNo2CCNIaNed4EYs5Ppo1m54ffC5%2F%2FE%2BjVCh6xN1g2%2BaHyE02IyLtSqYYsccFcipw7Wvu%2BwLiQNqL07pvLVd7KmtG7i5MLKRwskGOqUBcE6mzS7MLPmZsn6qwp%2Bmt%2B6N1niZfWPoz0xo0gllEv1gGuheGDsACXGd%2BNrGPIQUH1ZdrVCK95P60AEVjBCLYW4ExsGkBg7ZeAZbkr5PZ%2BfifOVMoI5Qd5GwpF02C0O0kINUAy3BnqJcPwZFBIqbipJo7pnK1bohzpxdEes4dGdbEaO1mciuQkzQcV%2B8tc%2BDtCgtwTTxFU%2BRaAdgVnrLPqBN78N6&X-Amz-Signature=21dd5fc8f1923d092fc027374f0776653fc77bf5bd56ed7db247a9cf642a701f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

