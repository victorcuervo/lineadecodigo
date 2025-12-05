---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLAMZZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2MUPYm2CeiyygXQarz1zCKABZE3eU00g%2BYMEt5YnZOAiEA0LNIz3SUSqDvPhRxAYcTExGNewdmCWo5pJg1MZsR0Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDOfqSAyAY1tqg6YUSrcAwKPF8gGWgnOQlr%2FFNOqA3KSNqQnPyJlaN8jTubbHWjAse%2BX09PuDIA4lg20ctq5njST71Q95l15ICSjTdp8r0d5R%2FCTd86NiUnchSHHQjaSjWHnbXiSZ4588rZToZFaqmkMoXnYVjHNSNouq4KFLjssw88ly3HbBmxakMkeLY%2FS2zHfWdPmxmQ1YQxkdrNqZUfatWZPNpS%2FM5WDY70hdJkpFUyNZRhuVeZBd5jjNLzKTMCigwzvEHDKzxNd2t3wf3SLa1qTGmJLCimmTHvvCMasWiThLzE15nHQ4ZsnsylfwuzXVowaJhEOb8EP99xz8eBbr3hULM6vAvg3Ec7wd7EkSlVXjU%2BljfA6Osp8nYXa9p9LU%2FoPaB3RwEYqKtaZG1ybvACk6I5rJht8whj48N1lnTgOa7IagWaCGyEd364w94O1UCvQx6AB%2F77uUAi6UQ11VtyL7%2BbaLBhixyTvhBFjYGPL2kwMbT9LJbY2%2BxvUnfweCVztlitF7KrLRvJnzmU8JS1tMPyW8po3U1YEolKDNtBa4e9dgw8VVhWtj%2FMqoBsGx3NUmvDUuXZhTl6F4AiHHIttk9xca3QxAFqaWsmGV2GkEDEG6W59a0AQAIB1fwhxk2rA5ZFYlsaZML6MyMkGOqUBNGbYIvRskdyvP%2BQ8VkiTj7mavodwbDrKYVyUT9YkzSqMWwzJ%2F%2B0efYiE9N%2FywDQgWbqXvsCx5wJ7%2BaU7W3tGfnSUKavE5IhCTYd%2BQcmIKI0giz%2BoxLfQ2aFc7lwS4GTUmYxwHkFz68QJDiWM%2B8YPxhlbqbb6QxhIVrNh%2Fs1WleGyHP4lkdCUGgAfayVCeeB%2B%2BBXdOhyh1hQRTqUi0YtcPLir0XKK&X-Amz-Signature=0b6662832170809481a86be7206191be23958acc8ab75fff878de62801d39deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLAMZZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2MUPYm2CeiyygXQarz1zCKABZE3eU00g%2BYMEt5YnZOAiEA0LNIz3SUSqDvPhRxAYcTExGNewdmCWo5pJg1MZsR0Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDOfqSAyAY1tqg6YUSrcAwKPF8gGWgnOQlr%2FFNOqA3KSNqQnPyJlaN8jTubbHWjAse%2BX09PuDIA4lg20ctq5njST71Q95l15ICSjTdp8r0d5R%2FCTd86NiUnchSHHQjaSjWHnbXiSZ4588rZToZFaqmkMoXnYVjHNSNouq4KFLjssw88ly3HbBmxakMkeLY%2FS2zHfWdPmxmQ1YQxkdrNqZUfatWZPNpS%2FM5WDY70hdJkpFUyNZRhuVeZBd5jjNLzKTMCigwzvEHDKzxNd2t3wf3SLa1qTGmJLCimmTHvvCMasWiThLzE15nHQ4ZsnsylfwuzXVowaJhEOb8EP99xz8eBbr3hULM6vAvg3Ec7wd7EkSlVXjU%2BljfA6Osp8nYXa9p9LU%2FoPaB3RwEYqKtaZG1ybvACk6I5rJht8whj48N1lnTgOa7IagWaCGyEd364w94O1UCvQx6AB%2F77uUAi6UQ11VtyL7%2BbaLBhixyTvhBFjYGPL2kwMbT9LJbY2%2BxvUnfweCVztlitF7KrLRvJnzmU8JS1tMPyW8po3U1YEolKDNtBa4e9dgw8VVhWtj%2FMqoBsGx3NUmvDUuXZhTl6F4AiHHIttk9xca3QxAFqaWsmGV2GkEDEG6W59a0AQAIB1fwhxk2rA5ZFYlsaZML6MyMkGOqUBNGbYIvRskdyvP%2BQ8VkiTj7mavodwbDrKYVyUT9YkzSqMWwzJ%2F%2B0efYiE9N%2FywDQgWbqXvsCx5wJ7%2BaU7W3tGfnSUKavE5IhCTYd%2BQcmIKI0giz%2BoxLfQ2aFc7lwS4GTUmYxwHkFz68QJDiWM%2B8YPxhlbqbb6QxhIVrNh%2Fs1WleGyHP4lkdCUGgAfayVCeeB%2B%2BBXdOhyh1hQRTqUi0YtcPLir0XKK&X-Amz-Signature=f09c13b7908d9f48e078d4f432e49e4d01cfadc0b63276f631af7d56ad23117e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

