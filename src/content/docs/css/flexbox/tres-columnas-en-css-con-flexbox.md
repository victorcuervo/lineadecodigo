---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWQZZP5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBni%2FZR7cCC2%2BUI%2FCjUnp8u%2BIWWQD8s1qKyiiauLRVZ%2BAiEAs%2FiDzjtK8600mhxBJqZGBOW2azMsvViE8zHKFeOc83MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkDC34btPNU%2FowYBCrcA2QgUSL2EUy6nfB8%2FM%2FjDPVJvGgcsJfAJkmVzU2%2BOjz8lomdweAI7kS6DpHnXZ1SFJHm%2FozylA1hFxGaTmhivT87z%2BRLFKBtY3NI5Npt3BR6ssOJ1%2Be4Y2ZKEatE9b8FzY5bO8naRSyVIpTfv%2BJJxzLI4d%2B6DieBRHn6SBT%2BbCOmGTFVyuwHiePELpVyvVPm45s%2FmXEGupAyfKxH6tABUfMVlHNmZB7osg5HejBXp6RqbFmFSDycBNO9gHzXuAOdIY7BjzpxgoIu1uKddlCqkTT3NTe6MKEg%2Fj8yYYPHWV67MA1rCHlqpJXJ4V6wv0vLT3FYiwUzukTFchJMdC9Mkc%2Ffdu%2B9GKzflEMboZYP%2FV8BRWgD5dZxda5EOoTW8fXUaIf3R%2FwkY%2BfUUfCrlJjD831%2BrzPSoRu%2BB3D2OlKdWtPGHd559w6U1JSxJ%2BdO%2Bb4ER8WXaiPe3QaVSjNNJ5R5wyb%2FEA1w3ED%2FIUi9axuQxNlB5taR61fAHxveJ0xJZdpEJhB6xhe%2BDqkrD%2F6aBQKgT%2FzJQ1juxJYuZlZuAGw4Xsg3oD%2FFfaP0s53It3lul45%2BdKAvMHgV9vd6EVv%2FLCEKS8%2BY6hSihZrPrv9FWUI0ndlbY7RBSXfQmijeopHNMM621skGOqUBZe33CJc73tceZFdvQTkd%2FScamGDmHaVDWlXrfSB61RSum0Y%2FU%2BZs97Yf4zvceLHQAtSseGK2%2FLMR405kvrF63mUpRJ1aqM%2BAi44CoO3UCHzEezRBbiTx6Xv37ZcA2%2F%2BUuJVxsD1yMhJDVLjFmyVSW39Y9M9ix2oRRVodQuDdhssDtFpnhwL2fTW4POYCECFoyfGDxYqBQM36pUWgjVUZYtOlGRX9&X-Amz-Signature=fea2fb75be6209136dd8e0191c70b683774dc52b536ac4ce6f3b56d793cc2ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWQZZP5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBni%2FZR7cCC2%2BUI%2FCjUnp8u%2BIWWQD8s1qKyiiauLRVZ%2BAiEAs%2FiDzjtK8600mhxBJqZGBOW2azMsvViE8zHKFeOc83MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkDC34btPNU%2FowYBCrcA2QgUSL2EUy6nfB8%2FM%2FjDPVJvGgcsJfAJkmVzU2%2BOjz8lomdweAI7kS6DpHnXZ1SFJHm%2FozylA1hFxGaTmhivT87z%2BRLFKBtY3NI5Npt3BR6ssOJ1%2Be4Y2ZKEatE9b8FzY5bO8naRSyVIpTfv%2BJJxzLI4d%2B6DieBRHn6SBT%2BbCOmGTFVyuwHiePELpVyvVPm45s%2FmXEGupAyfKxH6tABUfMVlHNmZB7osg5HejBXp6RqbFmFSDycBNO9gHzXuAOdIY7BjzpxgoIu1uKddlCqkTT3NTe6MKEg%2Fj8yYYPHWV67MA1rCHlqpJXJ4V6wv0vLT3FYiwUzukTFchJMdC9Mkc%2Ffdu%2B9GKzflEMboZYP%2FV8BRWgD5dZxda5EOoTW8fXUaIf3R%2FwkY%2BfUUfCrlJjD831%2BrzPSoRu%2BB3D2OlKdWtPGHd559w6U1JSxJ%2BdO%2Bb4ER8WXaiPe3QaVSjNNJ5R5wyb%2FEA1w3ED%2FIUi9axuQxNlB5taR61fAHxveJ0xJZdpEJhB6xhe%2BDqkrD%2F6aBQKgT%2FzJQ1juxJYuZlZuAGw4Xsg3oD%2FFfaP0s53It3lul45%2BdKAvMHgV9vd6EVv%2FLCEKS8%2BY6hSihZrPrv9FWUI0ndlbY7RBSXfQmijeopHNMM621skGOqUBZe33CJc73tceZFdvQTkd%2FScamGDmHaVDWlXrfSB61RSum0Y%2FU%2BZs97Yf4zvceLHQAtSseGK2%2FLMR405kvrF63mUpRJ1aqM%2BAi44CoO3UCHzEezRBbiTx6Xv37ZcA2%2F%2BUuJVxsD1yMhJDVLjFmyVSW39Y9M9ix2oRRVodQuDdhssDtFpnhwL2fTW4POYCECFoyfGDxYqBQM36pUWgjVUZYtOlGRX9&X-Amz-Signature=9fa1c22035d94e7e5ae84dd31cffc9180886987425ae9ce7a7d08268a16808ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

