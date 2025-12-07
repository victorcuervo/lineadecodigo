---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WP2EICO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbeySmbBzTPu4hlRF01bhtQf915mqrqiJhcRKKhAQeAiEAhBZoNAey36YlxsFJ17q4FO1FYZi1G5xWmVBMUcYnx6AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIlPktNhoGHwLVtHyrcAyAAdqphJ5SGEkJS8ujf6ikRZ3NUQ2fESnDuJi0Ffy3o5bQqb%2B5yDdBkoQFMUc8HR0Frv%2FDeunBN5QCQmZkaWYB%2BMshaEhH%2BAlfodkNy79qzAj3w6CmiezXEB9ZJvOy9JDoih442j%2Bv6qNUX6cgmpU8FOVKghIoV%2BpoYEzQjzK2cEav69nd7G8tVD24%2BtqiKVZ%2F1YgqjdKCFlmRvVr1xNsVx45ho6abaaVOq%2BFM9mfJ80V%2B%2BaC49C3ugcDUS1Z9s333msMr1BgCM9InYwCWcP0QFo6CurdlHIKkIsgEpyDAwqrn1TwOInXgYKf8fJs2%2FOU4CmmoIhkgIO43rM9ZQ9%2BA%2BOS0lmvrHBqZSP9bpHsEWNSiGjuJJDvWLhDBrqJrA1cR17wEisQOAI8ekc5N%2B2we2QaZRWqbMtTwGD%2Bls3ng0NowdKu4lnuwXz7Q%2Fvvzl0cMylGrBMuBdo%2BXyE79Aqu3AU137W8VSEnb%2FViEilykYIfIPXKv8t07Cdx2E%2FNUcYYl%2BNYz5WmIaPJ%2FCFnI87qYpKrbcAjSQ0TUg64%2BrdK0rcHcbsgfrQLGq1PqOW%2BMaaj9%2F966AyPTBA6jMBpsnP%2B2kh%2FHvMnlU9evwrUkg0Ne7WPDbKCXonefynwhAMOrH18kGOqUB7FRh7xGti15Jq93VfjZm6ho4mtdumlrkFdw6x%2FBFWKzD2i9HGsx5QaYzuT529HMj8V1jtDrLWD2JCcJk2GYxBpYN71WG1P9oUYOcih8Pqf8fXn2WczgYRWPoZ9kKcXjqNFrpIzub2lRg2HUPB9QfEvRFo7ZJhQ9A3PUOOSzgCc%2BtjbOFLPz%2BWsc%2FR1DTy%2F9if3rTrS62NsiPlGzMY4OZNb3UpMrS&X-Amz-Signature=8a899b6249fc30c6deb8cb82b790143f4398e2065dbdb8c415ee114b4ad734a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WP2EICO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbeySmbBzTPu4hlRF01bhtQf915mqrqiJhcRKKhAQeAiEAhBZoNAey36YlxsFJ17q4FO1FYZi1G5xWmVBMUcYnx6AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIlPktNhoGHwLVtHyrcAyAAdqphJ5SGEkJS8ujf6ikRZ3NUQ2fESnDuJi0Ffy3o5bQqb%2B5yDdBkoQFMUc8HR0Frv%2FDeunBN5QCQmZkaWYB%2BMshaEhH%2BAlfodkNy79qzAj3w6CmiezXEB9ZJvOy9JDoih442j%2Bv6qNUX6cgmpU8FOVKghIoV%2BpoYEzQjzK2cEav69nd7G8tVD24%2BtqiKVZ%2F1YgqjdKCFlmRvVr1xNsVx45ho6abaaVOq%2BFM9mfJ80V%2B%2BaC49C3ugcDUS1Z9s333msMr1BgCM9InYwCWcP0QFo6CurdlHIKkIsgEpyDAwqrn1TwOInXgYKf8fJs2%2FOU4CmmoIhkgIO43rM9ZQ9%2BA%2BOS0lmvrHBqZSP9bpHsEWNSiGjuJJDvWLhDBrqJrA1cR17wEisQOAI8ekc5N%2B2we2QaZRWqbMtTwGD%2Bls3ng0NowdKu4lnuwXz7Q%2Fvvzl0cMylGrBMuBdo%2BXyE79Aqu3AU137W8VSEnb%2FViEilykYIfIPXKv8t07Cdx2E%2FNUcYYl%2BNYz5WmIaPJ%2FCFnI87qYpKrbcAjSQ0TUg64%2BrdK0rcHcbsgfrQLGq1PqOW%2BMaaj9%2F966AyPTBA6jMBpsnP%2B2kh%2FHvMnlU9evwrUkg0Ne7WPDbKCXonefynwhAMOrH18kGOqUB7FRh7xGti15Jq93VfjZm6ho4mtdumlrkFdw6x%2FBFWKzD2i9HGsx5QaYzuT529HMj8V1jtDrLWD2JCcJk2GYxBpYN71WG1P9oUYOcih8Pqf8fXn2WczgYRWPoZ9kKcXjqNFrpIzub2lRg2HUPB9QfEvRFo7ZJhQ9A3PUOOSzgCc%2BtjbOFLPz%2BWsc%2FR1DTy%2F9if3rTrS62NsiPlGzMY4OZNb3UpMrS&X-Amz-Signature=7806f00b2326234c18b9d7962474ced6a5131d011c3d6b668af5fccb03a82d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

