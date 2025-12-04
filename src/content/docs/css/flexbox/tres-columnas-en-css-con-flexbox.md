---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5OAOO2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCpb8B6PMKuwbigfdK7vdpbARaclNVTIe2uQSelFGbkAgIhAOEL5%2B3E9AtD4EmvnoLwVZhdElLGfDe7n4nGHEifcyWlKv8DCEUQABoMNjM3NDIzMTgzODA1IgzZ2sFnrjAk4INVhQIq3APYU9YbdHdecp%2BJM0vMcYjvcdJUf8m3AvHfjTW1n1YJMesgvvp%2BuPABf06RVkQU0pUKDVTJV0lMcyUwB1mP0nE3Htgoain5oKlB04gbaRSPojA2VO2KOghTrWpBpf45ywCe%2FV3c%2Bnhqp1JW4kLN9dVolCrsr6c8eZ%2FORvsGBWMbFc6i%2Bmpi9Zfjzvjf6bVcJxtqnXy4vSA9URUHwaaRUek5RFT2X98QvDQbWV2fx6UMzks45pkrRVDeRmc9fekWy9GTWW1lqPhAImbAoIeuXWEXH7H9jLKeq4ZcDS9KtjkH1oV%2Bgd6GicRJjoi2wI66BoCgoiCmV23xTQ8OFIBGTNlw%2FJcJmUNG1hk0mNxhBoWzBFLIGMPgAy8adNn5ebQ44QZupitBOChIyLENHgXv5boIGr1fTvRuncIIU7bzEV%2FuUqbpBFkVIkay1WyjMQF6BS2RZt1pk933dX6gFJYfVOEgQnQzAl8KokDrp0mkV22NpfK0k%2FlrzOL4%2BuJde0%2Bo7NKG5xlbW1B1zGu2ZmWZ0D49HNdANGhPdkBQICbiMX1EC81ykQ%2FfAeNEkd6jZBUQkr77tRh13CVKPP%2Bm1TNrRqCTs97LtYcIXq4LkKUmx2N4qVxj2f8AT35KPcg7kTCa58XJBjqkAR3D7Ber%2B4mTay%2F3jy%2FXs7HDZ0bFoNRClhZiz7Oj1DYnEC%2BzWpIjrV0tESNd9nHHGb%2FqE2YFrH4ofPvYeCUB4r%2FbJb37aIf9SxpihDq8W2vgfy7wX7HVZOMCmcN%2BTLB8LHWQ%2BML7XYenZ3sKp%2FGl1BkziKy3GjjA5Abu7hkVesNOb2pFAVGusE6JUrqyPkaFy1Qcek6g6WYyRajh4KRHDOwRQ5j4&X-Amz-Signature=e84342ffa1cb9e7a2e62f86d0742abbb4be3f4af433d295b409204e564b58880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5OAOO2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCpb8B6PMKuwbigfdK7vdpbARaclNVTIe2uQSelFGbkAgIhAOEL5%2B3E9AtD4EmvnoLwVZhdElLGfDe7n4nGHEifcyWlKv8DCEUQABoMNjM3NDIzMTgzODA1IgzZ2sFnrjAk4INVhQIq3APYU9YbdHdecp%2BJM0vMcYjvcdJUf8m3AvHfjTW1n1YJMesgvvp%2BuPABf06RVkQU0pUKDVTJV0lMcyUwB1mP0nE3Htgoain5oKlB04gbaRSPojA2VO2KOghTrWpBpf45ywCe%2FV3c%2Bnhqp1JW4kLN9dVolCrsr6c8eZ%2FORvsGBWMbFc6i%2Bmpi9Zfjzvjf6bVcJxtqnXy4vSA9URUHwaaRUek5RFT2X98QvDQbWV2fx6UMzks45pkrRVDeRmc9fekWy9GTWW1lqPhAImbAoIeuXWEXH7H9jLKeq4ZcDS9KtjkH1oV%2Bgd6GicRJjoi2wI66BoCgoiCmV23xTQ8OFIBGTNlw%2FJcJmUNG1hk0mNxhBoWzBFLIGMPgAy8adNn5ebQ44QZupitBOChIyLENHgXv5boIGr1fTvRuncIIU7bzEV%2FuUqbpBFkVIkay1WyjMQF6BS2RZt1pk933dX6gFJYfVOEgQnQzAl8KokDrp0mkV22NpfK0k%2FlrzOL4%2BuJde0%2Bo7NKG5xlbW1B1zGu2ZmWZ0D49HNdANGhPdkBQICbiMX1EC81ykQ%2FfAeNEkd6jZBUQkr77tRh13CVKPP%2Bm1TNrRqCTs97LtYcIXq4LkKUmx2N4qVxj2f8AT35KPcg7kTCa58XJBjqkAR3D7Ber%2B4mTay%2F3jy%2FXs7HDZ0bFoNRClhZiz7Oj1DYnEC%2BzWpIjrV0tESNd9nHHGb%2FqE2YFrH4ofPvYeCUB4r%2FbJb37aIf9SxpihDq8W2vgfy7wX7HVZOMCmcN%2BTLB8LHWQ%2BML7XYenZ3sKp%2FGl1BkziKy3GjjA5Abu7hkVesNOb2pFAVGusE6JUrqyPkaFy1Qcek6g6WYyRajh4KRHDOwRQ5j4&X-Amz-Signature=1293b196c9635a5e55c49c17de02856ea27f6e716bf46ad09fd94e7cf4ce893a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

