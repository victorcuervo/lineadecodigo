---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKSO5CN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG40ofsWOs7J9f1jUYV14sL%2BuZJ4TAO56WGhyGZQ0IGvAiEAmtG2vf87RHyKY5%2BIRgiUXNCUtiyGg6DZtZAJgtuAuI0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcGf8nGBnr1RzNnrircA8y6lQFARe2elHVnClNNEjyfQMGrj4GdnDpiFN7uJunzez5d79oCgYN%2F%2FRS4vLGriKvhOPB4zBQn5tzYnZxBR1rgEQzuJ%2FnPn1c2tptC9z04OyUdCyFfxruTH9RDPr8CHB7C9LiCl56hevsCAuGoCcWqzFWJm55zCFhmoMHPUKicvkU4289zXwyDEx0wLDQg%2B6G3%2BpXv6y2RXRJwWqjrAtUFrAC2zbEcEKbfzG2XdUoMvo%2BzziD4UHVW1w7hf8ALkTsd%2FoMLHYFOsvbrfCHEZZ2tDqn2cQj4OBxIsL5IdSHVNeOdfjEsd0vnMS%2FpsNKJPaPsF2W2Qc%2BdQZRHP8XrPZDKctIEaSrKtqyNKsydiSbK8UGTMl2JPOgweoFMRbnJVO0YGukYuNMY3v6WAnCL916HMvpwq6WlAwGTdtu0cTwwesKOZKsWm12L9lz8W0WzsTslCfojZIyxmKrkKWbRa%2B%2F5eo%2B1Nsq0Tf2tGjd9AL%2Bw9Wr9aN7rElMLlZ9rw8FMKhW%2BlLW2QytrJEpKLWOZH8pbSULhKFr7D2gp9t9pU87l1dvDQ74BVZIc93dSedHreLn1tX2dL3znUXGD9V9yC4iFiJF9sgeYVSATpp8Aq8A9usPFujgDPQXHslY0MJi%2F1skGOqUB7GyMcMq0oCdrRfEkY6sNBeBTpAe%2Fd%2BteDmTt9ag0jarGVl8mBYI8vbywGFr4GADiq%2BLu15I3gqlukFM2gWjHDGhhVjwpuOWgJhnQik%2FJtZSb1Hf2%2B%2FP1mm6pDfVOyPKnKBwsO7jGLWaYJ0AmQo8G0lqrSaClL8SPtZmoTIr4oYYC6UL6SLjkrUqApBroTZMYkt%2BMLIfaNaHU7eqymTQefXbj7Jz3&X-Amz-Signature=9b185f04afe501d5e34a5f92abb62c79cab16981b29a8bb64f9f81cc16e665e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKSO5CN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG40ofsWOs7J9f1jUYV14sL%2BuZJ4TAO56WGhyGZQ0IGvAiEAmtG2vf87RHyKY5%2BIRgiUXNCUtiyGg6DZtZAJgtuAuI0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcGf8nGBnr1RzNnrircA8y6lQFARe2elHVnClNNEjyfQMGrj4GdnDpiFN7uJunzez5d79oCgYN%2F%2FRS4vLGriKvhOPB4zBQn5tzYnZxBR1rgEQzuJ%2FnPn1c2tptC9z04OyUdCyFfxruTH9RDPr8CHB7C9LiCl56hevsCAuGoCcWqzFWJm55zCFhmoMHPUKicvkU4289zXwyDEx0wLDQg%2B6G3%2BpXv6y2RXRJwWqjrAtUFrAC2zbEcEKbfzG2XdUoMvo%2BzziD4UHVW1w7hf8ALkTsd%2FoMLHYFOsvbrfCHEZZ2tDqn2cQj4OBxIsL5IdSHVNeOdfjEsd0vnMS%2FpsNKJPaPsF2W2Qc%2BdQZRHP8XrPZDKctIEaSrKtqyNKsydiSbK8UGTMl2JPOgweoFMRbnJVO0YGukYuNMY3v6WAnCL916HMvpwq6WlAwGTdtu0cTwwesKOZKsWm12L9lz8W0WzsTslCfojZIyxmKrkKWbRa%2B%2F5eo%2B1Nsq0Tf2tGjd9AL%2Bw9Wr9aN7rElMLlZ9rw8FMKhW%2BlLW2QytrJEpKLWOZH8pbSULhKFr7D2gp9t9pU87l1dvDQ74BVZIc93dSedHreLn1tX2dL3znUXGD9V9yC4iFiJF9sgeYVSATpp8Aq8A9usPFujgDPQXHslY0MJi%2F1skGOqUB7GyMcMq0oCdrRfEkY6sNBeBTpAe%2Fd%2BteDmTt9ag0jarGVl8mBYI8vbywGFr4GADiq%2BLu15I3gqlukFM2gWjHDGhhVjwpuOWgJhnQik%2FJtZSb1Hf2%2B%2FP1mm6pDfVOyPKnKBwsO7jGLWaYJ0AmQo8G0lqrSaClL8SPtZmoTIr4oYYC6UL6SLjkrUqApBroTZMYkt%2BMLIfaNaHU7eqymTQefXbj7Jz3&X-Amz-Signature=72e7e9d9468f33aeaa852c8734eaa075dccb08c7d7bad7a918fcfe7526b2e7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

