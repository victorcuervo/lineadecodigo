---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4Q3GPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC1rK9dDVMn6AfUvqoEoGBtgM0C5IDgdOa8o%2BIDxbBUMQIhALO%2BRCtC9JrtmIVq1eGYi5MciZfagUweX8Eu4cJhvDh2Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxjX9vu438TkZ27gEQq3AOKYT%2FdsapNbN%2FohYNV4q2lmcbLYsnUbYNKhsAGDahDJtWUFv4yQg006PW1VbjOSnYUr7OE6ef9s5H9c3rNnkRGCbLYp8dUKdbJ0NomfGHiQlxMLjMGyEejQin%2FR9%2BU5zwlDMf4Xm7vtU%2BCPfKp1jDCzA5HC7YS9m4fp9W3SKVZDDa7JxNekOB0rK19Z%2FH2sbjpmFOmgjjX2ZcVFbngLVignFjJI%2Bowoe3v7BVPiYLgF2QcS7X0xDRR2ScM1x3FTR4U%2BuS1YaDWPt0DKkevfvt5wWTyZBprXkiAuO%2Bn%2FyKYorkZxx4JAa2MjXaqhvEHkKBlCIgtsA%2Bz%2F%2BBYbkt%2B71SWrFeMQHA8ltZQlWqB4z%2BPq9r1wZHW6gffwY2Pmn8DZsrossSoXD4Ceq1IBvMR0VTa3SodvWACGwpLFkaKLlh0IuwSE%2FAG%2FA%2Fx1%2FgdcINgzIvhFttK0ACc7l8ImIAspp7skxil5eVHVtgEHk4ol%2FmVy3CAcTIktVnFNadvLEJWiOB%2Fw3Dlz2uodADL98Sp75MTKUj5Fpjb3WHeKsIixRUuef9SdFy8dXJD6kjhmhtkZ3zWZcoKIXH21h9A4ayFvitSkPTjIRoqb2aRsP5KKqHrwBPgX%2B1ut8wYCeV78jCfkMTJBjqkAQxWqnbXQq0nFWLtttGcaqkrpfHK9DlDybulPS1AbRtL45GFguE7OsBqiANP9OWIVP3IB5VFFlAc6ktiWAldDe4ilRnTABOY0TmqC23%2BPSmOz4wjlMeRPKkYdR%2Fyoi2i7hG91ltRQz%2FU6rCRrISGcYkfr%2BFEwV1uXV8aMSnyfiAZ73VbbDDmYhheApt4ysbvtFfOYePNMYTgVpI%2F1s6aRMvRX8vY&X-Amz-Signature=f215717cd2a0d8f541bc0a882731b29a61ea4b52d08b23f58e1ab5e8f826aba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4Q3GPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC1rK9dDVMn6AfUvqoEoGBtgM0C5IDgdOa8o%2BIDxbBUMQIhALO%2BRCtC9JrtmIVq1eGYi5MciZfagUweX8Eu4cJhvDh2Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxjX9vu438TkZ27gEQq3AOKYT%2FdsapNbN%2FohYNV4q2lmcbLYsnUbYNKhsAGDahDJtWUFv4yQg006PW1VbjOSnYUr7OE6ef9s5H9c3rNnkRGCbLYp8dUKdbJ0NomfGHiQlxMLjMGyEejQin%2FR9%2BU5zwlDMf4Xm7vtU%2BCPfKp1jDCzA5HC7YS9m4fp9W3SKVZDDa7JxNekOB0rK19Z%2FH2sbjpmFOmgjjX2ZcVFbngLVignFjJI%2Bowoe3v7BVPiYLgF2QcS7X0xDRR2ScM1x3FTR4U%2BuS1YaDWPt0DKkevfvt5wWTyZBprXkiAuO%2Bn%2FyKYorkZxx4JAa2MjXaqhvEHkKBlCIgtsA%2Bz%2F%2BBYbkt%2B71SWrFeMQHA8ltZQlWqB4z%2BPq9r1wZHW6gffwY2Pmn8DZsrossSoXD4Ceq1IBvMR0VTa3SodvWACGwpLFkaKLlh0IuwSE%2FAG%2FA%2Fx1%2FgdcINgzIvhFttK0ACc7l8ImIAspp7skxil5eVHVtgEHk4ol%2FmVy3CAcTIktVnFNadvLEJWiOB%2Fw3Dlz2uodADL98Sp75MTKUj5Fpjb3WHeKsIixRUuef9SdFy8dXJD6kjhmhtkZ3zWZcoKIXH21h9A4ayFvitSkPTjIRoqb2aRsP5KKqHrwBPgX%2B1ut8wYCeV78jCfkMTJBjqkAQxWqnbXQq0nFWLtttGcaqkrpfHK9DlDybulPS1AbRtL45GFguE7OsBqiANP9OWIVP3IB5VFFlAc6ktiWAldDe4ilRnTABOY0TmqC23%2BPSmOz4wjlMeRPKkYdR%2Fyoi2i7hG91ltRQz%2FU6rCRrISGcYkfr%2BFEwV1uXV8aMSnyfiAZ73VbbDDmYhheApt4ysbvtFfOYePNMYTgVpI%2F1s6aRMvRX8vY&X-Amz-Signature=77dcc73def6ff07df8e82b4c4cfabaec982ae7f411771c7a085b051cf0896a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

