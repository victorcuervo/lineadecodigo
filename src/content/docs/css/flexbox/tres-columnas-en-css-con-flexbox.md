---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PHBOHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMqHzjox3LyXzPWbKeWy2I6KPvhfTfSIWaBNMG4KEIAiAbMhIamN2eBjKn8r%2FggUvQ30rteo9T8mFvcFXcZ4sruyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMcRPxt0B2iWYi6aOMKtwDDu%2BdiuOoT739NYc%2Bg486po%2Ft1gOYZo2rkhiIn4iyX1jgJ%2BnTTcCwuI%2FhE2s4AcOyJ8%2BwSdlDnfbPzY9gr9Z0WC9AayaOnx1lpQCrfmUYExbOftBjK9op61Oo9vx4vq%2BmqNfd0gmrb7bf6R%2Bd2ngd1e7DEy%2BB%2FyBZpCGL4735Em4kvzW%2B9CkYIRa%2F3xzwr5r3bam9j1qSfoX5uIPc0RGJ5nIE%2Bsti9j7pBoDqWHcx8eyvm1fbQHHxcA%2FIgRLYrQvxEjNAN7z7VJkPKfJzVPMxwaQvQvYA%2FfgMdt3trb8dsbykPlJrNxhI72YNJmqVE9jJwXDV6Q%2FU5yTXJ9OUBUMIZ%2BLP8c8ezgREQqFNF%2Bvx%2BUzlbiceCXKix62imGlyxpLfS%2BAkGCay5aGwWLU1VRSYc8IDOzzpFmwiQ0PppUg17kGVydEQb4t41izOCxtoUl%2BvFjxAw0DLMdna8vrMaIQJsJglU1TU3z%2FMz0uo%2BXS77YiiDD8E1BpOYJnF9RtuoIEOZkkbpIaf4L0MOWlEJfVbRAUruPhzCE03J%2BxzAmvUQQOPBdRQEuNhn%2FDNT1Q44uIV0ODfvOdLM1zuslrJC3jVbsYZSmIepsuFJtXnZwyg4W6vfITzIN2%2BQ5dP1AIwhNTSyQY6pgFacqU%2F28guUCL5crOeohof66fiH5469Yhw3s9NMRaQUlvSw4KrXmvygq%2BIOw04LllcAC%2FtFa4YU5n%2B8xgbN4Nd2assrf7XfZnRN1KU96gZOOBCUGNMnDN%2BZK6vk4Mr5SQN2ZPjUKYaHIaMry88MYlPy%2B0FbCA7NFy%2FEAGJsNsQ241aEv5DE32FHrKDY3QgOmpU9NH150HIRKxG%2Bcg%2F6ZkvYTtuBv5%2B&X-Amz-Signature=fbddbe20ef2ca31c546b09e868a94a5e2aa307f1ff061829a7f4561383affed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PHBOHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMqHzjox3LyXzPWbKeWy2I6KPvhfTfSIWaBNMG4KEIAiAbMhIamN2eBjKn8r%2FggUvQ30rteo9T8mFvcFXcZ4sruyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMcRPxt0B2iWYi6aOMKtwDDu%2BdiuOoT739NYc%2Bg486po%2Ft1gOYZo2rkhiIn4iyX1jgJ%2BnTTcCwuI%2FhE2s4AcOyJ8%2BwSdlDnfbPzY9gr9Z0WC9AayaOnx1lpQCrfmUYExbOftBjK9op61Oo9vx4vq%2BmqNfd0gmrb7bf6R%2Bd2ngd1e7DEy%2BB%2FyBZpCGL4735Em4kvzW%2B9CkYIRa%2F3xzwr5r3bam9j1qSfoX5uIPc0RGJ5nIE%2Bsti9j7pBoDqWHcx8eyvm1fbQHHxcA%2FIgRLYrQvxEjNAN7z7VJkPKfJzVPMxwaQvQvYA%2FfgMdt3trb8dsbykPlJrNxhI72YNJmqVE9jJwXDV6Q%2FU5yTXJ9OUBUMIZ%2BLP8c8ezgREQqFNF%2Bvx%2BUzlbiceCXKix62imGlyxpLfS%2BAkGCay5aGwWLU1VRSYc8IDOzzpFmwiQ0PppUg17kGVydEQb4t41izOCxtoUl%2BvFjxAw0DLMdna8vrMaIQJsJglU1TU3z%2FMz0uo%2BXS77YiiDD8E1BpOYJnF9RtuoIEOZkkbpIaf4L0MOWlEJfVbRAUruPhzCE03J%2BxzAmvUQQOPBdRQEuNhn%2FDNT1Q44uIV0ODfvOdLM1zuslrJC3jVbsYZSmIepsuFJtXnZwyg4W6vfITzIN2%2BQ5dP1AIwhNTSyQY6pgFacqU%2F28guUCL5crOeohof66fiH5469Yhw3s9NMRaQUlvSw4KrXmvygq%2BIOw04LllcAC%2FtFa4YU5n%2B8xgbN4Nd2assrf7XfZnRN1KU96gZOOBCUGNMnDN%2BZK6vk4Mr5SQN2ZPjUKYaHIaMry88MYlPy%2B0FbCA7NFy%2FEAGJsNsQ241aEv5DE32FHrKDY3QgOmpU9NH150HIRKxG%2Bcg%2F6ZkvYTtuBv5%2B&X-Amz-Signature=1afcf031c21e8350597bd39aed4d1e7b22d04942dd242c04b4b2d355794713c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

