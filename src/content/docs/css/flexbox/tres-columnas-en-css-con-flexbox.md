---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPGRZBJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXLEQ3%2BYtUOUhifiNdjO2fK%2BgAA1LGRcPx39y9vc%2BCmAiEArVwPQVOHNmsNJpnxy1rTrfH2Y4PrxGrGCN5XaY4CjYoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKeqzxUtZiqfBEnmIircAzs9ESSuoEa8bf53V45%2B8TW2ji3KRc6FYNnNf5MWCX%2Fyiv9CcGW15bF7GRw5ldOPYsk7InK21RJO9fCh3A3IpMHbpjTArEs%2BscOFcI%2Fjmpph9veaosrQm4joAXt7u3BlBvzTvzJZDrD0VFpctjGryuXTnW%2F%2FIr8%2Bv27Nzt%2FXPVxFyeRUWaov5OWDPWcd%2BQHZ20fX9NbDGO8DYuQNW7MSCkCQLteXmo2uu5RRyO1saqA5C57x9SYEWG3ODP2u%2BwqFbAdEpRMf2yBdTNyVy4%2Fe1v75xZzqY673J9Gw0Ba7JAku%2FnfZX3B8J5gkoiPYMhp%2Bn21VOgiPxo2bZ3NR9XYi3QmkJf%2B%2B799SyZ93V9SP%2BC0DqyudiFQbjUZyl%2B%2Fv%2BZ1GM%2B5bnh8ZUmVkgsrXI3xZ%2BKaRTADY1HByFKkOwbN4zLb7mHPjwQPapB3L7U6CSHGoR4TbEUxUmyb%2BOLZfgfF7x4ezVME%2B9GMzQOWYyi5dyAeOypnAGcVRVxcJgDR0PmBzpTxWpl5nfvAnNLEcS%2FP7ofYN765K%2FT%2BC1a6m10bBCkpyTWgjT%2B38MSZzfnLNWNL%2BLEzLGyIImXsrgLlVY9IHhqDs8Rw7of5%2FDoXhn6daGlkr4JOS3oairto7YG9UMKynzskGOqUBwxvUsuOXT8zkQwxXbB95%2BQ4EkBLbzLlQKLrNOpW%2B%2BIbvZ73U0%2FEuQ6v0PWz7AmX16TEQ%2BHRjyCQZYtA9edbIWtS2xO3%2BPj8IEdvJwM%2BpTKH1Z0oM6Fcb1UI6F6y9jhBqLgJuqdtsS7TaB5TmHbcYMe34o8q2AgB2uyA%2F4e1uInfysRQwlPF03mT3x3r6mHmz9KL5aOYzBdJjxnjLHapeLoB6CZC%2F&X-Amz-Signature=995bcd5de66b221fd0e8c02c9d87a5b8109a24fd5c3e91bd1c698f25e47b73a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPGRZBJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXLEQ3%2BYtUOUhifiNdjO2fK%2BgAA1LGRcPx39y9vc%2BCmAiEArVwPQVOHNmsNJpnxy1rTrfH2Y4PrxGrGCN5XaY4CjYoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKeqzxUtZiqfBEnmIircAzs9ESSuoEa8bf53V45%2B8TW2ji3KRc6FYNnNf5MWCX%2Fyiv9CcGW15bF7GRw5ldOPYsk7InK21RJO9fCh3A3IpMHbpjTArEs%2BscOFcI%2Fjmpph9veaosrQm4joAXt7u3BlBvzTvzJZDrD0VFpctjGryuXTnW%2F%2FIr8%2Bv27Nzt%2FXPVxFyeRUWaov5OWDPWcd%2BQHZ20fX9NbDGO8DYuQNW7MSCkCQLteXmo2uu5RRyO1saqA5C57x9SYEWG3ODP2u%2BwqFbAdEpRMf2yBdTNyVy4%2Fe1v75xZzqY673J9Gw0Ba7JAku%2FnfZX3B8J5gkoiPYMhp%2Bn21VOgiPxo2bZ3NR9XYi3QmkJf%2B%2B799SyZ93V9SP%2BC0DqyudiFQbjUZyl%2B%2Fv%2BZ1GM%2B5bnh8ZUmVkgsrXI3xZ%2BKaRTADY1HByFKkOwbN4zLb7mHPjwQPapB3L7U6CSHGoR4TbEUxUmyb%2BOLZfgfF7x4ezVME%2B9GMzQOWYyi5dyAeOypnAGcVRVxcJgDR0PmBzpTxWpl5nfvAnNLEcS%2FP7ofYN765K%2FT%2BC1a6m10bBCkpyTWgjT%2B38MSZzfnLNWNL%2BLEzLGyIImXsrgLlVY9IHhqDs8Rw7of5%2FDoXhn6daGlkr4JOS3oairto7YG9UMKynzskGOqUBwxvUsuOXT8zkQwxXbB95%2BQ4EkBLbzLlQKLrNOpW%2B%2BIbvZ73U0%2FEuQ6v0PWz7AmX16TEQ%2BHRjyCQZYtA9edbIWtS2xO3%2BPj8IEdvJwM%2BpTKH1Z0oM6Fcb1UI6F6y9jhBqLgJuqdtsS7TaB5TmHbcYMe34o8q2AgB2uyA%2F4e1uInfysRQwlPF03mT3x3r6mHmz9KL5aOYzBdJjxnjLHapeLoB6CZC%2F&X-Amz-Signature=6d8e664814b5d670a4c8c01d3002c580fa7836ec0a9cc32fb69dbec458dc1740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

