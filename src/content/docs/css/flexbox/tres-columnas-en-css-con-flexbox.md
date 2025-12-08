---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWZLX5L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDypRpOCJTaqCFWWVVLndNyORsk9Da2JwpMytIWs6weMAIhAIg3n9utyZ2P5yLLGzr2hIfBr2HRNvuMyv%2BFitE8uIdEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa66VxNdTTElwFF%2FAq3AOLPOn406fAfdCAlcJS5eaaItnE1%2FRBYy1JYRNJDyhmcT43fnIhlZud4kmzHvcQ5d03564Q1a5JykfsZRw5aZeQTssG%2Fa9d%2BjydHz180INmaS9ikE3mknAn9UuHeuMxCUD2DQzMl3Fi4DvGL%2F9didzO2%2BCubAuMt1KeTfDT73U8EdpUGwLBPApzzoOIEtbH6JnRFpYcBocm4NII77bUuXTuN85qSUwUscLg2bFSJ%2F4cpFvSQ2PBwicFYyTTy0QirPCEjY14fHgHpR49z3XIQ3bUKWl1AMJpxRJZh1%2Bhl7zgrl2hjsBoweheXqweHq9rf8KrL%2B2Vd21dp490Nm7mRTAfiX2Vz2udKTH0h8S0LeHdZVaMh1vXo6xcb6NyqyniAKDmqakJnPgXYZ%2FezudIU0RvhB5RQdu%2Fhh2pF3MBpTvEMhnj0HBuK0DcWQa9wpGKvWvjHVjKAcTEX7uwk8M6EKVwqka3olDhPY6gvovo6w6X6Cp8FniS5TmIpvh7RK1cU3wPe%2FKpGoxKw6X8FgVNCU3E7YcMq3ddOerDBEBmjrG38Decb0ysifI5Xxv4Jk4PGYNQ18aDf18y6VM1iZBN2N1X7hLQ7hoImg%2B9s%2FEDhPJpusvlZ%2FuVhUltxcBbWDDq7dnJBjqkAdrKvjjerD0RTmBmI6OW%2BStc7CAvxlSEh%2F8ruQd0DmJKaq4YyumVkQ9PboQ2lJ6wu5u8ASJsifSxgqEGlAilI52K%2BosJ2HbcGdS2ra%2Fyi4KFxC5NixseKCLRGXpaGm81LZWNck87Rm9R91ON4fOy%2FeOpn%2Bj9P8w2whTcBqJ5%2Bd9dC9ouxvYQ43b2lwoN702AfDOQR08GcGUUyx1OuRQpqDxK0miu&X-Amz-Signature=35c5c34882268b883303aac374598ccf96722b009347a2189ef1992c4e8fc997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWZLX5L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDypRpOCJTaqCFWWVVLndNyORsk9Da2JwpMytIWs6weMAIhAIg3n9utyZ2P5yLLGzr2hIfBr2HRNvuMyv%2BFitE8uIdEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa66VxNdTTElwFF%2FAq3AOLPOn406fAfdCAlcJS5eaaItnE1%2FRBYy1JYRNJDyhmcT43fnIhlZud4kmzHvcQ5d03564Q1a5JykfsZRw5aZeQTssG%2Fa9d%2BjydHz180INmaS9ikE3mknAn9UuHeuMxCUD2DQzMl3Fi4DvGL%2F9didzO2%2BCubAuMt1KeTfDT73U8EdpUGwLBPApzzoOIEtbH6JnRFpYcBocm4NII77bUuXTuN85qSUwUscLg2bFSJ%2F4cpFvSQ2PBwicFYyTTy0QirPCEjY14fHgHpR49z3XIQ3bUKWl1AMJpxRJZh1%2Bhl7zgrl2hjsBoweheXqweHq9rf8KrL%2B2Vd21dp490Nm7mRTAfiX2Vz2udKTH0h8S0LeHdZVaMh1vXo6xcb6NyqyniAKDmqakJnPgXYZ%2FezudIU0RvhB5RQdu%2Fhh2pF3MBpTvEMhnj0HBuK0DcWQa9wpGKvWvjHVjKAcTEX7uwk8M6EKVwqka3olDhPY6gvovo6w6X6Cp8FniS5TmIpvh7RK1cU3wPe%2FKpGoxKw6X8FgVNCU3E7YcMq3ddOerDBEBmjrG38Decb0ysifI5Xxv4Jk4PGYNQ18aDf18y6VM1iZBN2N1X7hLQ7hoImg%2B9s%2FEDhPJpusvlZ%2FuVhUltxcBbWDDq7dnJBjqkAdrKvjjerD0RTmBmI6OW%2BStc7CAvxlSEh%2F8ruQd0DmJKaq4YyumVkQ9PboQ2lJ6wu5u8ASJsifSxgqEGlAilI52K%2BosJ2HbcGdS2ra%2Fyi4KFxC5NixseKCLRGXpaGm81LZWNck87Rm9R91ON4fOy%2FeOpn%2Bj9P8w2whTcBqJ5%2Bd9dC9ouxvYQ43b2lwoN702AfDOQR08GcGUUyx1OuRQpqDxK0miu&X-Amz-Signature=4b91c4faf97db9e52bd748f72a1713f0af757d8941462c958029279c7be5a386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

