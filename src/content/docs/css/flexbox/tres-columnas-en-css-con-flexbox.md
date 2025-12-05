---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQK6V4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVY%2Fch7iJQyDZPXFtfIQ8VduCmorv9wYtDrIjRAGi0wgIgGm9JklgR5ycjGbpDsvk1gId3fZYYHI8pUc8S%2Fy%2BFp6cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAaMLxrs3poYplTpVyrcAzHzp6Ev%2F12yGTxlHGnQEoGnhGdFu0ChkPsimXXrTnCZvnRHmZ41UAo%2BGtugANtB0qS8qFWu4GD%2F%2B1BFsP8AsVtb09cBr481bkKYr5mBqxi2y53Q7naBhMgeKFdZ9GN3Q6bXETUVOQNAEYiPlcrtystUHUg1USkP0HuHW2Xul8Uv0mPG%2BbzDrUp1h4zOz4LiZ6aPuiP%2BpkpJrLeQhiEs0kYv%2FPOnlitBnozOlpTdOF0fePXgfRfalmRB3C29rC4YWwci7WRaiUNCze%2FDBmrUNTUcXScslicUF8xdSl5ZIsUSkTP9MbFE9vNqL8ErL6JEC5VFy0K9e1dIfaZFBvuwtcgcrxOotLKbTJ2zpIw%2F2gJT7vcUfiscfBV9xCXzGmdlDYeOVS%2BY5E79daFKlvd%2FOoukD4pcJNH97v9QzK9g5Y4Yf3TvqsiWuRagNprHcp19UCDYdzPHbvqzRvuot2zyz%2BuPWGxrpsK8W2%2FJzhp5rKk7VZfogiKEuisncDgce9%2Bvc97cMAgNUzfTrQ7UVl8THhJZn4%2FaWKNV4NyGgfwCy1%2BmgeQ1I6cvW%2FLhfi1LFDTMStYjec7VpKMMre3RIEAFYY0U4Jauy1M22lA9X5RoWxR1%2B49PpykkPNZmXey0MKnGzckGOqUBJcFBBiuh9GKN7kXR%2BXJCZ57N8Qpi3Z4K1Ftpr3JbOIIEcN5sb0mtxa1Uy0uMQDLLHPH9Rksslu3J9mPyKzJiR64HNNRRzjASrOqXGhINSOOcRfnsYe8xfns%2BZ7UA1WCqtaeq3PxadTjeJZA4fb9Q%2Bn80NAw4CHXIAaSblzKBAJAQ0Gkzx4ZvSQ823E%2Ft2mSXd5aqu6%2Fw4dwAIRird45%2B1KAEvqLq&X-Amz-Signature=da2b3e4f8407e44ad786793167dc38f348e36c2e9c7bd26a012589189654e1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQK6V4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVY%2Fch7iJQyDZPXFtfIQ8VduCmorv9wYtDrIjRAGi0wgIgGm9JklgR5ycjGbpDsvk1gId3fZYYHI8pUc8S%2Fy%2BFp6cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAaMLxrs3poYplTpVyrcAzHzp6Ev%2F12yGTxlHGnQEoGnhGdFu0ChkPsimXXrTnCZvnRHmZ41UAo%2BGtugANtB0qS8qFWu4GD%2F%2B1BFsP8AsVtb09cBr481bkKYr5mBqxi2y53Q7naBhMgeKFdZ9GN3Q6bXETUVOQNAEYiPlcrtystUHUg1USkP0HuHW2Xul8Uv0mPG%2BbzDrUp1h4zOz4LiZ6aPuiP%2BpkpJrLeQhiEs0kYv%2FPOnlitBnozOlpTdOF0fePXgfRfalmRB3C29rC4YWwci7WRaiUNCze%2FDBmrUNTUcXScslicUF8xdSl5ZIsUSkTP9MbFE9vNqL8ErL6JEC5VFy0K9e1dIfaZFBvuwtcgcrxOotLKbTJ2zpIw%2F2gJT7vcUfiscfBV9xCXzGmdlDYeOVS%2BY5E79daFKlvd%2FOoukD4pcJNH97v9QzK9g5Y4Yf3TvqsiWuRagNprHcp19UCDYdzPHbvqzRvuot2zyz%2BuPWGxrpsK8W2%2FJzhp5rKk7VZfogiKEuisncDgce9%2Bvc97cMAgNUzfTrQ7UVl8THhJZn4%2FaWKNV4NyGgfwCy1%2BmgeQ1I6cvW%2FLhfi1LFDTMStYjec7VpKMMre3RIEAFYY0U4Jauy1M22lA9X5RoWxR1%2B49PpykkPNZmXey0MKnGzckGOqUBJcFBBiuh9GKN7kXR%2BXJCZ57N8Qpi3Z4K1Ftpr3JbOIIEcN5sb0mtxa1Uy0uMQDLLHPH9Rksslu3J9mPyKzJiR64HNNRRzjASrOqXGhINSOOcRfnsYe8xfns%2BZ7UA1WCqtaeq3PxadTjeJZA4fb9Q%2Bn80NAw4CHXIAaSblzKBAJAQ0Gkzx4ZvSQ823E%2Ft2mSXd5aqu6%2Fw4dwAIRird45%2B1KAEvqLq&X-Amz-Signature=91a68ee61fa63ce7e6fb54062b498480f9cfe973585383f3c2dc0af33e75d86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

