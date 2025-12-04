---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCZKWE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCqc1B9RNJgXk4DtHxzdm63GmI3jI5lB0nO51dj83Vj%2BgIgHgLZOUav6qMacKaJEDugpByVTGmlCu2CGm6hS9Yye5Mq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG0jd2NBcBQ0%2FPHpfyrcAzcn%2F%2BHJkrylXavY3KXB7rcq26cWNHtySzfdsIGLMLlfd5OW2oOoGrNscbHO9LALbrFPdNCEn4ILXpudtsLFx9uVsOc%2Br09pxNVOzGEB1aIP0KsKRmPFz%2Bmm27wAbL5i88Rk%2BiK6vNACZ9Stxm0A4jc2Mh9Q8lUdYgSZLC1BeIeKUUMo523MVu80NwmCdTS0C2tem6wZYBQfGNOW7C7GAGU1J2m1U8WKfOe5K%2Ft0RhC24g0l0rdB%2BkUlNf4tQlCOM8efFRWevR1IiBoL7qvAzWRITlt6GlmHWl%2BAhw2UGksQm8RIRUoJqN0y5P7VAfeXRgPXS3AO8EBPNO3BvC%2FJ1Xi6FHv1boyyeSzbpqKLg9I9aaLHoan6PQD4m2QjOkBdE%2Bm%2BK4pvo5McETr2omE6WP1fjKVDft2yeFDkJ%2FP5gWvPn033L6soLMEsj5yn6Ny4Kp0qC6ZUpzGaRfjT8r%2B4HbwFoxmMFEDyt25roakeelXexUHZ8XzRHMljR7MnGbx6xGCmlJLLWguz6l1%2FKD%2B7%2Ff64NFX0Wca81sWZlf7RoG9i9V%2FRnETNtsuXklU2%2FXSzUa%2BNeehrNGzzoZfLM1AWY8aI%2Be6gNttTV%2FkOocLRXykGGmGGitryddRACQ2UMI%2B0w8kGOqUBwgN7zn36n8ZJQnFJvEWW6Te3X7BFi0qMg%2F1WoVpcsS%2B19HcRwj2OF9QQG8lTFV7VbxUKBvpp13DiCvo6VlBUsIreIk9EDO5PEATlWpw6bCY3pOOtnkqQaMkeN4fJb73h8NJ2LV9bHEKVOR8jGx0Hzff44aDeDlNozW%2BH%2FY0MCTHGwv2RrZxqft%2BdGMOgtmE9vAItF3vS75%2BsOgxMnq1fhb%2BuUBBR&X-Amz-Signature=f206c6e2b4c68b52241f00d545883e781b5c1ef437a0cc4264326d207ba514b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCZKWE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCqc1B9RNJgXk4DtHxzdm63GmI3jI5lB0nO51dj83Vj%2BgIgHgLZOUav6qMacKaJEDugpByVTGmlCu2CGm6hS9Yye5Mq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG0jd2NBcBQ0%2FPHpfyrcAzcn%2F%2BHJkrylXavY3KXB7rcq26cWNHtySzfdsIGLMLlfd5OW2oOoGrNscbHO9LALbrFPdNCEn4ILXpudtsLFx9uVsOc%2Br09pxNVOzGEB1aIP0KsKRmPFz%2Bmm27wAbL5i88Rk%2BiK6vNACZ9Stxm0A4jc2Mh9Q8lUdYgSZLC1BeIeKUUMo523MVu80NwmCdTS0C2tem6wZYBQfGNOW7C7GAGU1J2m1U8WKfOe5K%2Ft0RhC24g0l0rdB%2BkUlNf4tQlCOM8efFRWevR1IiBoL7qvAzWRITlt6GlmHWl%2BAhw2UGksQm8RIRUoJqN0y5P7VAfeXRgPXS3AO8EBPNO3BvC%2FJ1Xi6FHv1boyyeSzbpqKLg9I9aaLHoan6PQD4m2QjOkBdE%2Bm%2BK4pvo5McETr2omE6WP1fjKVDft2yeFDkJ%2FP5gWvPn033L6soLMEsj5yn6Ny4Kp0qC6ZUpzGaRfjT8r%2B4HbwFoxmMFEDyt25roakeelXexUHZ8XzRHMljR7MnGbx6xGCmlJLLWguz6l1%2FKD%2B7%2Ff64NFX0Wca81sWZlf7RoG9i9V%2FRnETNtsuXklU2%2FXSzUa%2BNeehrNGzzoZfLM1AWY8aI%2Be6gNttTV%2FkOocLRXykGGmGGitryddRACQ2UMI%2B0w8kGOqUBwgN7zn36n8ZJQnFJvEWW6Te3X7BFi0qMg%2F1WoVpcsS%2B19HcRwj2OF9QQG8lTFV7VbxUKBvpp13DiCvo6VlBUsIreIk9EDO5PEATlWpw6bCY3pOOtnkqQaMkeN4fJb73h8NJ2LV9bHEKVOR8jGx0Hzff44aDeDlNozW%2BH%2FY0MCTHGwv2RrZxqft%2BdGMOgtmE9vAItF3vS75%2BsOgxMnq1fhb%2BuUBBR&X-Amz-Signature=03060509c6739ec2dbfe2eb3c836ddd45598b878c333f1273041ec6138305342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

