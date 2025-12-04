---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSTGRR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrnYnbODaQJnXMyb1gdCMBr9U94esAEUkKs9KCImkjLgIhAO9WHocaEn07uIlPMhFjgrIzuoe%2B2F0f9ijNPtwy9PlMKv8DCEYQABoMNjM3NDIzMTgzODA1IgwxGoJS4pq1i8nkkXMq3AONrf6bZ50JQpEQ4fh0FeVVHIZHLjvBEPFob7oEJVz6GEMOIw6YZhJt3zMzQ6%2BmMUr0utg6CV1Kz6hLXNiO42ffHykdUAgY4k%2BZY9hcrQjLGlzs0kpGJXSth17SBW1TbtDaRWcDDQF7%2B4f41%2F%2FDAHAM3E4eyRbUAX1VTh4WgpXSa%2By%2F4mFaRiMRqJfMqWFldTnVmoMVQQsufjPjc0yI8BkUizzogtmmlGbBgelQw72qCoCfrG88MJaxR507xFDcHjkwm3C0UmiTb0uAhbChUbURNLonAvUkiyfgPYW%2FyasWO27Zin9UAtM8wxxa8rNnPh%2Bh2oENJTdwKBzIUTb9gXfhKqjEHgVE4FhFB8oHvfOwZZ0EJCIqBIqqqVMzzYmMOyTjLOFZ629EgDuIDpZEHNyIt94JV4OjfB9%2BfiqfibQtKa5vA54NtW1weSKv%2B%2BM8EFV%2BYkt06uWg8kpude8YvNLUtm5sFj2Eyo%2BDEYaLskLvP65pX7luGJB8srskh3ba3BBFeGw4pHHu3lrelphZC94Owg13pWTl1hash%2FhNew%2Bk3C0QmWmBogIEB5z1%2B8p0DRkTrSWgCMK11odGcdPb%2BATSO4YTh2eCumpL2Y3tXzTUaH8M6fKQrlb0VkKObDDEg8bJBjqkAeRpasZQZD6kqSQB7oQfOuP%2Btt7aBYgkX%2BTTh7T8%2BTHJdIia1DAYkR6kYqpfYH5Mx2amuhhhsv5YHPE3WfhLRXDYxgplBMSImp%2F1%2B10BdpVjzh3dBJ4HV7SRa%2FFjo7Nm9PcIcTzroyofiBiDvWOlclc2a6EwN9Eaza9yyLGXVbQprs2oaWvJ8qzixjFKM5rdTRKpXVPRVtN8Crz0T4wqwieFoB%2FK&X-Amz-Signature=aa0d056af2fa786935c2f0793d6bb838d0a839c743cadec30b07322ae4aedbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSTGRR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrnYnbODaQJnXMyb1gdCMBr9U94esAEUkKs9KCImkjLgIhAO9WHocaEn07uIlPMhFjgrIzuoe%2B2F0f9ijNPtwy9PlMKv8DCEYQABoMNjM3NDIzMTgzODA1IgwxGoJS4pq1i8nkkXMq3AONrf6bZ50JQpEQ4fh0FeVVHIZHLjvBEPFob7oEJVz6GEMOIw6YZhJt3zMzQ6%2BmMUr0utg6CV1Kz6hLXNiO42ffHykdUAgY4k%2BZY9hcrQjLGlzs0kpGJXSth17SBW1TbtDaRWcDDQF7%2B4f41%2F%2FDAHAM3E4eyRbUAX1VTh4WgpXSa%2By%2F4mFaRiMRqJfMqWFldTnVmoMVQQsufjPjc0yI8BkUizzogtmmlGbBgelQw72qCoCfrG88MJaxR507xFDcHjkwm3C0UmiTb0uAhbChUbURNLonAvUkiyfgPYW%2FyasWO27Zin9UAtM8wxxa8rNnPh%2Bh2oENJTdwKBzIUTb9gXfhKqjEHgVE4FhFB8oHvfOwZZ0EJCIqBIqqqVMzzYmMOyTjLOFZ629EgDuIDpZEHNyIt94JV4OjfB9%2BfiqfibQtKa5vA54NtW1weSKv%2B%2BM8EFV%2BYkt06uWg8kpude8YvNLUtm5sFj2Eyo%2BDEYaLskLvP65pX7luGJB8srskh3ba3BBFeGw4pHHu3lrelphZC94Owg13pWTl1hash%2FhNew%2Bk3C0QmWmBogIEB5z1%2B8p0DRkTrSWgCMK11odGcdPb%2BATSO4YTh2eCumpL2Y3tXzTUaH8M6fKQrlb0VkKObDDEg8bJBjqkAeRpasZQZD6kqSQB7oQfOuP%2Btt7aBYgkX%2BTTh7T8%2BTHJdIia1DAYkR6kYqpfYH5Mx2amuhhhsv5YHPE3WfhLRXDYxgplBMSImp%2F1%2B10BdpVjzh3dBJ4HV7SRa%2FFjo7Nm9PcIcTzroyofiBiDvWOlclc2a6EwN9Eaza9yyLGXVbQprs2oaWvJ8qzixjFKM5rdTRKpXVPRVtN8Crz0T4wqwieFoB%2FK&X-Amz-Signature=14732508d6f307d2d804f319a9e2603ceab746e90911f40961cafe0e4580e0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

