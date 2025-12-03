---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIMC5JY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDULOdjcpaU98RXlAG4x73iJELb%2Blac2jXrQWvrGLIYuAiEA4dL4Tzdpi8FVzBvcq7iDzanZs2BFP7tlNjAXVWftTzoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJnCZbM%2FpSzsfyfVdyrcA7RrFWuhtoyB08q8dkRMiFn35rCrUCVkPnOxAo9SGBF02ZxqwndjeXulRKjzWOdSqBKaQK7GpaXbjILtI4kpLuLqrcc%2Fm%2BR9rRgVtll%2BxyUgxe88TIgR4HA%2BvFsoepi7wFSQ1QgODWaERxHvBzEru9eidOm76S06qELtpEq4SxnWWa05wA3tHtSSmAl6YTh8TCeMEygDw2Yro8ZMOX9g1%2Bl47Qa01losIE0Wllt%2BQOXBeLhoWqMf7Ku3aumsIJuXtUiu63G%2F%2BnRRMj6kgqbSktpRbV4HVl7brAlgME46y21nJsrzu00OxYnDkJGHb0yyb%2FgdCOZMSF6yodf84A2HBjrTQkqNzzJZHzLHTYAOiYAQinrLuhjdxD5vYRU01%2FgxmhKSUvx9OFIXcMEwStyETMvAPxFXsu1sOvwPI5W4aS%2BnW%2BV4AbF1C5n6scRBJOwDgOBmoJXd7w1ToL%2Fs%2Ftsz9eNos5Li%2BpDygxTFqSPkVXRwPp0QDjRHufal1XAXpJyIAiSuYQErCbyFKrjJeMg58o0VqEiQ1NFqdYnrjLoHq%2BLmX%2BfW4Y4E%2F0Di9vOV4U7d%2BX97wgZQvDtFJ%2Bb5o23H4RhjRYakateg35Bvf2hs9uh9JyEdUOT%2BWK3568AkMPS5v8kGOqUBaLo6yLrS%2BetMZSe6M6yw%2BO8CoGCae%2BNNmgA94FFHKc8GvOqOz2%2FApv3NyeB91NDUzl0IXq%2BWlJfoiY7Nue3fSE1HBMu4J7m6YoniHl6LhPGv3TTg9qxtzt5prpIa0H8mkOVCwbotvdt21pKWOIdD4wFu2DaOZv3rJUl5m9tfoaSScVThYa2iazI1i2JSLK8UQU9dS4zo8itgjrXCT3ge7iYL%2BY8%2B&X-Amz-Signature=3b6f33b10359219353ad5cd54df3cc84234f2ab69aacdb466746278628f64a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIMC5JY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDULOdjcpaU98RXlAG4x73iJELb%2Blac2jXrQWvrGLIYuAiEA4dL4Tzdpi8FVzBvcq7iDzanZs2BFP7tlNjAXVWftTzoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJnCZbM%2FpSzsfyfVdyrcA7RrFWuhtoyB08q8dkRMiFn35rCrUCVkPnOxAo9SGBF02ZxqwndjeXulRKjzWOdSqBKaQK7GpaXbjILtI4kpLuLqrcc%2Fm%2BR9rRgVtll%2BxyUgxe88TIgR4HA%2BvFsoepi7wFSQ1QgODWaERxHvBzEru9eidOm76S06qELtpEq4SxnWWa05wA3tHtSSmAl6YTh8TCeMEygDw2Yro8ZMOX9g1%2Bl47Qa01losIE0Wllt%2BQOXBeLhoWqMf7Ku3aumsIJuXtUiu63G%2F%2BnRRMj6kgqbSktpRbV4HVl7brAlgME46y21nJsrzu00OxYnDkJGHb0yyb%2FgdCOZMSF6yodf84A2HBjrTQkqNzzJZHzLHTYAOiYAQinrLuhjdxD5vYRU01%2FgxmhKSUvx9OFIXcMEwStyETMvAPxFXsu1sOvwPI5W4aS%2BnW%2BV4AbF1C5n6scRBJOwDgOBmoJXd7w1ToL%2Fs%2Ftsz9eNos5Li%2BpDygxTFqSPkVXRwPp0QDjRHufal1XAXpJyIAiSuYQErCbyFKrjJeMg58o0VqEiQ1NFqdYnrjLoHq%2BLmX%2BfW4Y4E%2F0Di9vOV4U7d%2BX97wgZQvDtFJ%2Bb5o23H4RhjRYakateg35Bvf2hs9uh9JyEdUOT%2BWK3568AkMPS5v8kGOqUBaLo6yLrS%2BetMZSe6M6yw%2BO8CoGCae%2BNNmgA94FFHKc8GvOqOz2%2FApv3NyeB91NDUzl0IXq%2BWlJfoiY7Nue3fSE1HBMu4J7m6YoniHl6LhPGv3TTg9qxtzt5prpIa0H8mkOVCwbotvdt21pKWOIdD4wFu2DaOZv3rJUl5m9tfoaSScVThYa2iazI1i2JSLK8UQU9dS4zo8itgjrXCT3ge7iYL%2BY8%2B&X-Amz-Signature=fecbc116e5601a9c4c9c90245fe9e07dfdad16873c52c13d3c1ec10aaa1ffa97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

