---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLCTLE6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpiInDyKvCOtHV2PMDjXzEp%2BVBONu8g9qs4UaE9C%2BTnQIhAKcA5sO92c5Y5Is2UpMzGvQesjvwx9rmlNG1t%2Bn2958%2FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXP7aDA%2F47RT3Zm8gq3AOxGtlPiYfGQjQNRLJdBo0IgfFFvqdZAkcAt6Bbqj5azY7b0wIq%2BiYQV1TW4CpPq9aFjtlZuqsRJIRVDqDhc9HXGjogTWAg02rjEPp0omVLOSxKiFgANXUEcYOuZD7vhIybnKHx2FHApOSSMIILE3ylkV59h7LgJTkT8KjviVRXBRjjLva7K%2Bb6qJ228gf%2BHah60dEQgaU2%2FsM5Ol7cG1vBcHdVZLBiG8cQk1Mu6fbEphPWdmgpZrSthCIZjOLClTdh2oqZApY0qCStUxOLrtp4ghEd3rnVE0PeZxoTtKyXqxeoHJU2F9oFfJNjTwmHSNvwfd1RdBWo8TGkbpNB7g1a9iiwBUBYj5QjyNymeD%2FiNCCFxWEUesBJq89gIy7jeFaghwZ%2FvkSctMo3v3eGzZKq9NhgZafJr%2BDvo6YkBh3PFP%2BfP2JRxjz0%2BNHe63aFrpI2IPcyne5MpTuXQkN3TD7wfQsNNT1lwPiCxjqrKQaf3pAKEGsiS0tHSnBkAlOzYvxXonDNFgtO0FEOIcVpG8v%2FjGP1EYk8fSkOi%2F2UuBS4ok9jV7pRRmlOooU1bFmRu5%2Byk9JmqnBMhRPiVUXfzG8ptg0fp10iNkBTlmaRTteALCBX8zklFRn9tED4czCI6d3JBjqkAePEyxsMuWyQLDOcApAGv4GtywfsmgtmyjE4YXTzMj0wi51VcY5MGreBkpxRExb8SWhFuVTbr8uTQoX58%2FL9UoDrYjwAr5zAWtEZS5ctOlh3R9BDeRtiPmBB6amL9Yfj3sheXNco94hPfAZ4bBDQ1ac9lkqX7E1inTNssDABOU0P8rNhX2JdG5M7Yak4xurS55iDl41ZxmP7Ev2QQrdrJ2HsvNL3&X-Amz-Signature=5a3e343c83d6bee3cd9616c9f01d0eb331100a8f00cfc9c0ceb208a2a9b22b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLCTLE6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpiInDyKvCOtHV2PMDjXzEp%2BVBONu8g9qs4UaE9C%2BTnQIhAKcA5sO92c5Y5Is2UpMzGvQesjvwx9rmlNG1t%2Bn2958%2FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXP7aDA%2F47RT3Zm8gq3AOxGtlPiYfGQjQNRLJdBo0IgfFFvqdZAkcAt6Bbqj5azY7b0wIq%2BiYQV1TW4CpPq9aFjtlZuqsRJIRVDqDhc9HXGjogTWAg02rjEPp0omVLOSxKiFgANXUEcYOuZD7vhIybnKHx2FHApOSSMIILE3ylkV59h7LgJTkT8KjviVRXBRjjLva7K%2Bb6qJ228gf%2BHah60dEQgaU2%2FsM5Ol7cG1vBcHdVZLBiG8cQk1Mu6fbEphPWdmgpZrSthCIZjOLClTdh2oqZApY0qCStUxOLrtp4ghEd3rnVE0PeZxoTtKyXqxeoHJU2F9oFfJNjTwmHSNvwfd1RdBWo8TGkbpNB7g1a9iiwBUBYj5QjyNymeD%2FiNCCFxWEUesBJq89gIy7jeFaghwZ%2FvkSctMo3v3eGzZKq9NhgZafJr%2BDvo6YkBh3PFP%2BfP2JRxjz0%2BNHe63aFrpI2IPcyne5MpTuXQkN3TD7wfQsNNT1lwPiCxjqrKQaf3pAKEGsiS0tHSnBkAlOzYvxXonDNFgtO0FEOIcVpG8v%2FjGP1EYk8fSkOi%2F2UuBS4ok9jV7pRRmlOooU1bFmRu5%2Byk9JmqnBMhRPiVUXfzG8ptg0fp10iNkBTlmaRTteALCBX8zklFRn9tED4czCI6d3JBjqkAePEyxsMuWyQLDOcApAGv4GtywfsmgtmyjE4YXTzMj0wi51VcY5MGreBkpxRExb8SWhFuVTbr8uTQoX58%2FL9UoDrYjwAr5zAWtEZS5ctOlh3R9BDeRtiPmBB6amL9Yfj3sheXNco94hPfAZ4bBDQ1ac9lkqX7E1inTNssDABOU0P8rNhX2JdG5M7Yak4xurS55iDl41ZxmP7Ev2QQrdrJ2HsvNL3&X-Amz-Signature=3b583a5ef6a8298739f4da052da8748d0da770d806b1123a073e04a97833058d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

