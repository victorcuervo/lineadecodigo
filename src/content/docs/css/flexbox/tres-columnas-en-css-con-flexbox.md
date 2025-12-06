---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZXWZQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpAS40OKO2MPblkOkO7XtLeoxgDqDNz4YIHVGGD9M%2BAiEAxZLPIyCfCxIhgbQv5%2Fr4no6bGMXOw5P6QJr0vtpHCWYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPdipuw%2Be6aqnDktuSrcA1qkvVkCs2lWJc0R7IUywngQqJ7qP8fMDawAfTQ2lTJk8vE92WahTbsqUcjMl%2FPgzidKvXUh9uSskqV5mqbkzJ8VhFDZC9%2FAxHROM6i5vdp5HsM7omUQ8SVCf2l9UHz45hEce8kqT7LKTpyAJh83rklnFYYRSFN692ktyk7xQeasirBIAfLBcV0LncJOmj7vugNVsbpxCO5PRsHus3Odx%2BRlNS1nPZf2IbEjp8JTRKObZ9Vks8HacCSH4PejAGIVve8TQKnZC0qJ7ocB%2BvlG5Q8bljsLtdLRbEZFNK1P6ZvpggKMe3YdMn0sRtFawjYHSjxVPwJD2F8B0M2uudziVPQWrfIFsRApVnex%2BPfLgssZVB%2Fy8qqqrGtPmsrFmEO3iEZsiK%2BwbtQcTILg4NSokBI%2FrYxmEVQ92wR8HP1oLwPn9mO0QX7rrVkJv%2B1qHkwE05%2BBAlYvXP7hC5QenssVVVSii8gu8LJLwtg4gM9MTuDHVJ9rQS0rYFX7dgq3jNq4pLOCZEQdJYYzRjzIfzkGCs6YMp0zKxcamM4NjZKvI578Sgjg%2BIQPb56E8FMPW4LaGXya1vLEXFNGB1%2BXvFii049%2BhPF37BE4RDLUPPiEpOtr9DeCirpbOkvjiN54MNX8zskGOqUB0EcNnKUQ432BbJ8aKTYo9Ugtj8hYaYR4ObJ9NYFNQ%2Fvr1jRvh3u7zzHco3dPXl8%2BfHJNarXijCi%2BPxUN3z4iwZo%2F7FE4ze5EYNnkEl5Ub1LFibajj3OnD1BudcCvtR1GKm6SvTxzThaT6gLANqwbjRJcVPRr3X6uyotscA9ZtbF7VBVGuUC%2FBn4bi%2BHWjrLbN074OoutvulGQWtzkwpU2FcnlisT&X-Amz-Signature=0122b0f58a93c8c9917764e6b3b7665804999b0d7a829060c3b73fb0b07f43fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZXWZQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpAS40OKO2MPblkOkO7XtLeoxgDqDNz4YIHVGGD9M%2BAiEAxZLPIyCfCxIhgbQv5%2Fr4no6bGMXOw5P6QJr0vtpHCWYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPdipuw%2Be6aqnDktuSrcA1qkvVkCs2lWJc0R7IUywngQqJ7qP8fMDawAfTQ2lTJk8vE92WahTbsqUcjMl%2FPgzidKvXUh9uSskqV5mqbkzJ8VhFDZC9%2FAxHROM6i5vdp5HsM7omUQ8SVCf2l9UHz45hEce8kqT7LKTpyAJh83rklnFYYRSFN692ktyk7xQeasirBIAfLBcV0LncJOmj7vugNVsbpxCO5PRsHus3Odx%2BRlNS1nPZf2IbEjp8JTRKObZ9Vks8HacCSH4PejAGIVve8TQKnZC0qJ7ocB%2BvlG5Q8bljsLtdLRbEZFNK1P6ZvpggKMe3YdMn0sRtFawjYHSjxVPwJD2F8B0M2uudziVPQWrfIFsRApVnex%2BPfLgssZVB%2Fy8qqqrGtPmsrFmEO3iEZsiK%2BwbtQcTILg4NSokBI%2FrYxmEVQ92wR8HP1oLwPn9mO0QX7rrVkJv%2B1qHkwE05%2BBAlYvXP7hC5QenssVVVSii8gu8LJLwtg4gM9MTuDHVJ9rQS0rYFX7dgq3jNq4pLOCZEQdJYYzRjzIfzkGCs6YMp0zKxcamM4NjZKvI578Sgjg%2BIQPb56E8FMPW4LaGXya1vLEXFNGB1%2BXvFii049%2BhPF37BE4RDLUPPiEpOtr9DeCirpbOkvjiN54MNX8zskGOqUB0EcNnKUQ432BbJ8aKTYo9Ugtj8hYaYR4ObJ9NYFNQ%2Fvr1jRvh3u7zzHco3dPXl8%2BfHJNarXijCi%2BPxUN3z4iwZo%2F7FE4ze5EYNnkEl5Ub1LFibajj3OnD1BudcCvtR1GKm6SvTxzThaT6gLANqwbjRJcVPRr3X6uyotscA9ZtbF7VBVGuUC%2FBn4bi%2BHWjrLbN074OoutvulGQWtzkwpU2FcnlisT&X-Amz-Signature=7795a38ad1ae3c139f286c531482a3164d58a3aa917a3f0a5b31866d9901821a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

