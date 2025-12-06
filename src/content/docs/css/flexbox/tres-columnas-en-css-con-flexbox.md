---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJJA3DV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpRWpmbh4KN%2F4t8n7eNKCn%2FhgyS7XOVU%2B0t%2BcqBMsslAiB%2FO8GA%2FVtnfVDrVZ2VWe0bllOPMxOXwpMmScE7ZqB5eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfIBzSh50qhNp%2BBnsKtwDSRLLubom5A74A2nVfqSuUefRBoKiO2JNl5A%2BlEIBhnwON6J2kSFb7r4yskUcp6MiX3daHEz59ikAG%2BUSYUFmWMxvI6ET87dIw76spBdlrTI%2FOlRnwSjzdnGR%2Blm5R%2B%2Fqm%2B57MtOi46J6sX2zyean11jVgFmDyUfs8P%2FeMe%2B03MEy6JtFtKqD6Vzpv6ukp%2FESJIDzUcFSRCFki97DFC0RYPjxSY6my04tyXSi3S2S%2F4XNEpYtnLPsa5PS7K6jvkhYnPqVuCBE2Or0h6QGkB6x1BUORESAEuXRfZXD1luC3W7v9EScjsmZBknKwPynFaM7lPvMmcV5mB9HxUVBqRUM5hpss9Q4wIrSUGwr3AfV%2F3OiGBg8sAWGCp1dja1ybTzG04l2K5z3llVYxP%2BpW%2BuSybSMdwxObdwhBxQpQwWTMJq2bi8QuhT%2Bbo9SZW37zwPEu44NmKkPhhHgjhxRk3EgtFrkzS8ZzHv2TGpMv3jTChOqAB57iwXs905oFMA4UCfdqprWwpYAcmXMtl%2BhQuWq5hgibXBoMUE2dniOCPFNkIGqL4tr5jJYgOgnnSlIh4rYTduLyeU5g7VIjmIu8vL7oNgxNiBfPakzc%2BuHt9hI8bVmWzT05CuqCUyag2swxabQyQY6pgFvimeE9CzdMck4MSlylKUHQhzkH%2BInJ%2BTROAtBErtsmb5LkRTSkynY8kjtLdjCLFQUCYBSpUC1HnddW0Hf%2BxGqPW0%2F3tEbrFVfoo6i69Ye0G29uOKJlc1ysOCNWql%2Ff2ZBJBBmN4dCxv4lOBxAI4hK%2BSyPTkyJGhl48YVhZqYUPmChKPLu55wFg5CkIlnQvSk57yr2gm%2FiwscJ5bIpJr8jkhg2cvEY&X-Amz-Signature=76098429ac1141b069330a045c222d0d6ed43213185a6f0bd5c82008d2549d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJJA3DV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpRWpmbh4KN%2F4t8n7eNKCn%2FhgyS7XOVU%2B0t%2BcqBMsslAiB%2FO8GA%2FVtnfVDrVZ2VWe0bllOPMxOXwpMmScE7ZqB5eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfIBzSh50qhNp%2BBnsKtwDSRLLubom5A74A2nVfqSuUefRBoKiO2JNl5A%2BlEIBhnwON6J2kSFb7r4yskUcp6MiX3daHEz59ikAG%2BUSYUFmWMxvI6ET87dIw76spBdlrTI%2FOlRnwSjzdnGR%2Blm5R%2B%2Fqm%2B57MtOi46J6sX2zyean11jVgFmDyUfs8P%2FeMe%2B03MEy6JtFtKqD6Vzpv6ukp%2FESJIDzUcFSRCFki97DFC0RYPjxSY6my04tyXSi3S2S%2F4XNEpYtnLPsa5PS7K6jvkhYnPqVuCBE2Or0h6QGkB6x1BUORESAEuXRfZXD1luC3W7v9EScjsmZBknKwPynFaM7lPvMmcV5mB9HxUVBqRUM5hpss9Q4wIrSUGwr3AfV%2F3OiGBg8sAWGCp1dja1ybTzG04l2K5z3llVYxP%2BpW%2BuSybSMdwxObdwhBxQpQwWTMJq2bi8QuhT%2Bbo9SZW37zwPEu44NmKkPhhHgjhxRk3EgtFrkzS8ZzHv2TGpMv3jTChOqAB57iwXs905oFMA4UCfdqprWwpYAcmXMtl%2BhQuWq5hgibXBoMUE2dniOCPFNkIGqL4tr5jJYgOgnnSlIh4rYTduLyeU5g7VIjmIu8vL7oNgxNiBfPakzc%2BuHt9hI8bVmWzT05CuqCUyag2swxabQyQY6pgFvimeE9CzdMck4MSlylKUHQhzkH%2BInJ%2BTROAtBErtsmb5LkRTSkynY8kjtLdjCLFQUCYBSpUC1HnddW0Hf%2BxGqPW0%2F3tEbrFVfoo6i69Ye0G29uOKJlc1ysOCNWql%2Ff2ZBJBBmN4dCxv4lOBxAI4hK%2BSyPTkyJGhl48YVhZqYUPmChKPLu55wFg5CkIlnQvSk57yr2gm%2FiwscJ5bIpJr8jkhg2cvEY&X-Amz-Signature=78570b0172a0494ca9e6ccaba80610c38951b1f67739a9319033f1b3ca82c346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

