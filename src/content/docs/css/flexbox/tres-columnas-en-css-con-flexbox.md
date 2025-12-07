---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S473LXUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHg%2FgxIE6UcFwAQnbXGxMGXks2lGWt6kqkfdPmdxedNAiEA774YGCFJCnBTqFK2w%2B1c0fKTTfy4cVGAadNmob0In1gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyauL3zFEJqaZzs2SrcA3UpFcFhbaBmJ1DACgyG65AwC6j3d6UgRzgIkwiCZsAvDTH4d6PsnBUjZ6dkjx2EWS%2BvJA4itpUfQlnY99QcaEM%2BBdbF%2BOP1%2Bu1tVJSuBjGcXR8lG1Yb0d0zaBHK%2BjnSbKAyTKqpVJQ0sAd5C%2BnETLyPnpNa76LhENzLqRKZcEe5gC0wLKvF8d52qMDT9SdhH%2FWA%2FNslasNQeGQGVKXj548CpKNGgfrrT39%2Bge6OQVnuYG3LHlnOTm9d6H23GwCGsX%2FtIOdGozl3R0YujQGy%2FISsAxrpFKC%2F8Fpihb4ZfBAhtsNRkPYkEATcW9vxa2jbNOr8KsBm804ptkPmXrejIlyA9xdFK0e7zERFrRuvcYed93dpAZjJjpTIuh5vwT646m%2FlOPg3ywUVuRBJ6UQO9t5vSx2ObsjRjazZWwKS4q2lKM7ecnQ%2BPOsewwcxp%2F8WdhzLncWr8zJN9w%2BTdlw8d3JZ8in%2FCLGdECLHh7YusB1X8PWS1Es9lJ%2BhWW%2FwJWmGoRONJ1EeFq4lGMa%2FPuQKkLySVoGTpxFVvlgyIhyxsF%2B%2F%2Fy7HskaOjTnCWUeSQPciPjUa5%2Br1o0bl%2BpATEJLyH1KiYAFf9kIE2V8SvmuT4IPhQk7E8%2BTLStkENx8IMOa21skGOqUBa5R7mSxyxHESnZ4LfV9mqgqKpunhrgHNn1TCfaALdXb82uUbQX%2BqsI7pfE9r9YWhZJrWCtVwQggd%2BiAPNWfs8KJFKk8Hoz0LilJBCoENTYCmsSRR8JlWKN2BLeZpxAZ2yifQvmGgrfc%2BKedxQMs6mqY8h4Bfu%2FN%2FmR%2BMMAN82P2mXPkCGA%2FsiEwULDwd4gxFPu74qm5yxcDJtPD%2Bw02mfQ7krCBH&X-Amz-Signature=013b18cbff4aad597d717c791537c81ca9c50859e51b2a899740287aae09d3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S473LXUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHg%2FgxIE6UcFwAQnbXGxMGXks2lGWt6kqkfdPmdxedNAiEA774YGCFJCnBTqFK2w%2B1c0fKTTfy4cVGAadNmob0In1gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyauL3zFEJqaZzs2SrcA3UpFcFhbaBmJ1DACgyG65AwC6j3d6UgRzgIkwiCZsAvDTH4d6PsnBUjZ6dkjx2EWS%2BvJA4itpUfQlnY99QcaEM%2BBdbF%2BOP1%2Bu1tVJSuBjGcXR8lG1Yb0d0zaBHK%2BjnSbKAyTKqpVJQ0sAd5C%2BnETLyPnpNa76LhENzLqRKZcEe5gC0wLKvF8d52qMDT9SdhH%2FWA%2FNslasNQeGQGVKXj548CpKNGgfrrT39%2Bge6OQVnuYG3LHlnOTm9d6H23GwCGsX%2FtIOdGozl3R0YujQGy%2FISsAxrpFKC%2F8Fpihb4ZfBAhtsNRkPYkEATcW9vxa2jbNOr8KsBm804ptkPmXrejIlyA9xdFK0e7zERFrRuvcYed93dpAZjJjpTIuh5vwT646m%2FlOPg3ywUVuRBJ6UQO9t5vSx2ObsjRjazZWwKS4q2lKM7ecnQ%2BPOsewwcxp%2F8WdhzLncWr8zJN9w%2BTdlw8d3JZ8in%2FCLGdECLHh7YusB1X8PWS1Es9lJ%2BhWW%2FwJWmGoRONJ1EeFq4lGMa%2FPuQKkLySVoGTpxFVvlgyIhyxsF%2B%2F%2Fy7HskaOjTnCWUeSQPciPjUa5%2Br1o0bl%2BpATEJLyH1KiYAFf9kIE2V8SvmuT4IPhQk7E8%2BTLStkENx8IMOa21skGOqUBa5R7mSxyxHESnZ4LfV9mqgqKpunhrgHNn1TCfaALdXb82uUbQX%2BqsI7pfE9r9YWhZJrWCtVwQggd%2BiAPNWfs8KJFKk8Hoz0LilJBCoENTYCmsSRR8JlWKN2BLeZpxAZ2yifQvmGgrfc%2BKedxQMs6mqY8h4Bfu%2FN%2FmR%2BMMAN82P2mXPkCGA%2FsiEwULDwd4gxFPu74qm5yxcDJtPD%2Bw02mfQ7krCBH&X-Amz-Signature=b0c147507c4dc78725c37595ead29adadd079849f3d733c0a62c8e967585f5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

