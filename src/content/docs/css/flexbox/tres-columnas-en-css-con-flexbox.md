---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23GVJGH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDKfOd6T3xdfW5TNtmr2TVcOxe4HuFBKceiMbLDkhM1fgIhAKpt9qutPMv5eQEf29YPwLDHmn%2BFsp2Rujn9AaMJiY34Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzKu22dt1n72cWGCokq3APe7KMi9kQ9%2BGpHW901MwgttGLfB6buOyRDSCERFGxq%2BIEpvCUjlWt5YCjb78UBA%2FiHeb7xYk3GIMCtTMymhIpdBuNHGB7GxgHpvz8OwjIRwZ1icAYYV3lRaYGK0qW6g42PQMAAouTGUxlJgmuhbhzb%2FmOurU7b5RPn3cnV2ub0n5ChOZDLxDWwfGoXkPuntqUoV8BKxAmsKIsxdxvegb9HjzEZflxThCXbW7jmexPxfcLgRJkE0MQCd5z7aVNpjBCiKre%2Fq2div7ocjy%2F4x77mqasuT6AUH2gfI3J2Rbl8gMvFlhHmCFwuEPLJM3aEaGfzbsnxZ0Nw5toxbbVK8P2DCsm6S00IQ4QPSvOeKAkZU0bzZn0P8AylqmDgGJ7krJaN9owzofqv8TPOod5A72%2FQpL493KqeLBoaMCFykIjbiPzjLOUUFpgGuh78Lq4eLPmjdfYae2CfM1E9IKjqADWV4R7aIFqOaiYxMx4FcR5geAOJGEhIAxEP3eRAWDrA90U52peUF8jCcxHQC7T2ShLW%2Fcsfjp2MF%2FGYA3JRFpLOJkCo9bNmT3XSgruk3M2SQiA3jd%2FvtPglPm4AegO3mc%2FFxUVxIE99YHtxoaZ%2FsR6FiwhYxaDYd34gZxWxkjCzhsXJBjqkAZ0eMASTKSwD20064PVNm6fDZLYitxhsaKGSEy1Zn%2FzGCz0a53ZU0xxb8RosPBqafby3BYWbcdEhBvYrI4TXEmt4XswQ%2BdsWPjyO%2F%2BYqkoPysHTP68gCn0eVmZfNPoY7Eq5IWDeUG6OATEAC6m2Ce6ba0i5YhNahLeCJdzt7REsLYH4kgNE7T%2B2zLxdXA%2BX1%2BVBxij5zS1NehYtFxfoyY18Lcwp0&X-Amz-Signature=6070c0974a7dfc8244143057d4e110ad83d4028bdf4cda79e4fecc68cc961294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23GVJGH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDKfOd6T3xdfW5TNtmr2TVcOxe4HuFBKceiMbLDkhM1fgIhAKpt9qutPMv5eQEf29YPwLDHmn%2BFsp2Rujn9AaMJiY34Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzKu22dt1n72cWGCokq3APe7KMi9kQ9%2BGpHW901MwgttGLfB6buOyRDSCERFGxq%2BIEpvCUjlWt5YCjb78UBA%2FiHeb7xYk3GIMCtTMymhIpdBuNHGB7GxgHpvz8OwjIRwZ1icAYYV3lRaYGK0qW6g42PQMAAouTGUxlJgmuhbhzb%2FmOurU7b5RPn3cnV2ub0n5ChOZDLxDWwfGoXkPuntqUoV8BKxAmsKIsxdxvegb9HjzEZflxThCXbW7jmexPxfcLgRJkE0MQCd5z7aVNpjBCiKre%2Fq2div7ocjy%2F4x77mqasuT6AUH2gfI3J2Rbl8gMvFlhHmCFwuEPLJM3aEaGfzbsnxZ0Nw5toxbbVK8P2DCsm6S00IQ4QPSvOeKAkZU0bzZn0P8AylqmDgGJ7krJaN9owzofqv8TPOod5A72%2FQpL493KqeLBoaMCFykIjbiPzjLOUUFpgGuh78Lq4eLPmjdfYae2CfM1E9IKjqADWV4R7aIFqOaiYxMx4FcR5geAOJGEhIAxEP3eRAWDrA90U52peUF8jCcxHQC7T2ShLW%2Fcsfjp2MF%2FGYA3JRFpLOJkCo9bNmT3XSgruk3M2SQiA3jd%2FvtPglPm4AegO3mc%2FFxUVxIE99YHtxoaZ%2FsR6FiwhYxaDYd34gZxWxkjCzhsXJBjqkAZ0eMASTKSwD20064PVNm6fDZLYitxhsaKGSEy1Zn%2FzGCz0a53ZU0xxb8RosPBqafby3BYWbcdEhBvYrI4TXEmt4XswQ%2BdsWPjyO%2F%2BYqkoPysHTP68gCn0eVmZfNPoY7Eq5IWDeUG6OATEAC6m2Ce6ba0i5YhNahLeCJdzt7REsLYH4kgNE7T%2B2zLxdXA%2BX1%2BVBxij5zS1NehYtFxfoyY18Lcwp0&X-Amz-Signature=10347143bd60eb3cd6fc4cfccf8706eda2e4268e1e5236a5b284c3931410da9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

