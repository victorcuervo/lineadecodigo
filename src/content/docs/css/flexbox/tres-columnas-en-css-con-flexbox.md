---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRCE7XX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxF1tnfbCTwAKXpUXrBpsDo3MmSlWbT3wUUXjQPsnlPAiEAk5xfQXlGquKjkjO%2FjJkxpmUycAPy5lmVkvw4zdJvyTwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGRYNRo7yPYJYan5dircA2BH6IZ%2FBhYJ5gNJNkXNhPZEMWDhHRY9dDrDIUwlRtYtr8%2B6jkhbzFov4aXSip7CviWeNeIXnEJDRQGF6LhTrOuuR4JMt%2BwKyZojkDb5XgDuqASuHpBAIer1t2Oy%2FJU8HkXVCUNtVvHCXBG6150ADHh1fK61AoWu%2Fru1keM1zDpUaWbGYSDGBQdbA3dbAQJ1RjYzj1zXBPOvJ5sumzx0rmRVK4vsb3KumHGrv5MK9Lu66Nri1deXZCns9PkaYoQau4M0liK1Gk5%2FuLKmsqHyCXf2IAAEWU9%2FbLiDjT3QCsRhZ5I7hl%2BvtRkoIdTnCmjs5gAx4uxU2m7m6DyXcQzpCMtJ%2FhsktQl%2FRLjCGJseQFlZhoqrkaNeeUajSi5JSkKJW5kLXdBDnm7JjgjsLat%2FOaPpgoVwUoMfQxOdqig5HKpMl%2FSW%2BK9Pe7YV2wCUC4ymFLnQdE6ODSypEFMOgbc0NuOfDXSsaba4hC%2BYM%2FzL%2FtewXEQkdQhkf2PYUkBfBVGCZEGQ3jZaIO6y0GHRFyaE7pez75bkphYVk%2BIeo%2FfVEFXMvKqmF7GX8jcG0vLoZwyENI4c%2B3%2B7pn4naeIwfg9SYMCpCs%2F%2FQkMjJ3NzSZr%2BJN8b3O1g%2FbE68KlusrKFMOSpyckGOqUBX1H4QqjowJlJ%2BE%2BA2%2Fn1a8s43xb3ROGo97yKOSQM%2FN2Zugf980QrY5Q%2BRDOiA1FpyR6VjFe79cV7Q9UgkDgsSYG7Rp%2Fsjepv1zsTWs0LoiKIlfDmx%2F8MNuFRsUiGiHvk4ccIZFcrHT7DOAbre%2FYHAhwAnX3urSkUj8yMB4%2BC2ZoFc8%2F4NaYQi9JyKCwlz5mWUWVjZNtLeEw6T7QZ6wDxkNFdsQkI&X-Amz-Signature=d2a309c493036c8823f9f101443f751dc2c21e2b4639f40ebb6b901a92dce3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRCE7XX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxF1tnfbCTwAKXpUXrBpsDo3MmSlWbT3wUUXjQPsnlPAiEAk5xfQXlGquKjkjO%2FjJkxpmUycAPy5lmVkvw4zdJvyTwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGRYNRo7yPYJYan5dircA2BH6IZ%2FBhYJ5gNJNkXNhPZEMWDhHRY9dDrDIUwlRtYtr8%2B6jkhbzFov4aXSip7CviWeNeIXnEJDRQGF6LhTrOuuR4JMt%2BwKyZojkDb5XgDuqASuHpBAIer1t2Oy%2FJU8HkXVCUNtVvHCXBG6150ADHh1fK61AoWu%2Fru1keM1zDpUaWbGYSDGBQdbA3dbAQJ1RjYzj1zXBPOvJ5sumzx0rmRVK4vsb3KumHGrv5MK9Lu66Nri1deXZCns9PkaYoQau4M0liK1Gk5%2FuLKmsqHyCXf2IAAEWU9%2FbLiDjT3QCsRhZ5I7hl%2BvtRkoIdTnCmjs5gAx4uxU2m7m6DyXcQzpCMtJ%2FhsktQl%2FRLjCGJseQFlZhoqrkaNeeUajSi5JSkKJW5kLXdBDnm7JjgjsLat%2FOaPpgoVwUoMfQxOdqig5HKpMl%2FSW%2BK9Pe7YV2wCUC4ymFLnQdE6ODSypEFMOgbc0NuOfDXSsaba4hC%2BYM%2FzL%2FtewXEQkdQhkf2PYUkBfBVGCZEGQ3jZaIO6y0GHRFyaE7pez75bkphYVk%2BIeo%2FfVEFXMvKqmF7GX8jcG0vLoZwyENI4c%2B3%2B7pn4naeIwfg9SYMCpCs%2F%2FQkMjJ3NzSZr%2BJN8b3O1g%2FbE68KlusrKFMOSpyckGOqUBX1H4QqjowJlJ%2BE%2BA2%2Fn1a8s43xb3ROGo97yKOSQM%2FN2Zugf980QrY5Q%2BRDOiA1FpyR6VjFe79cV7Q9UgkDgsSYG7Rp%2Fsjepv1zsTWs0LoiKIlfDmx%2F8MNuFRsUiGiHvk4ccIZFcrHT7DOAbre%2FYHAhwAnX3urSkUj8yMB4%2BC2ZoFc8%2F4NaYQi9JyKCwlz5mWUWVjZNtLeEw6T7QZ6wDxkNFdsQkI&X-Amz-Signature=de0aa00eb1c459501b6d7f3d248103ba6da347c94793bfe5d08649d6ecd279d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

