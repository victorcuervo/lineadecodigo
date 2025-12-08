---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZE45GJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2MODogTm7WLzynyrpJfcBPDm5%2BS%2B5R2rGpu6YFBE%2BMQIhAP%2BRyWxQn8x9ukVxS4cg9CSak2iuv2B2lRRY1dYQiLo3KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPBszxQwf40NwUNwEq3ANrtftf2GBVlsx6BP1rA4TPCgAruv8i4ePCjZfOMebo5zQ1ATGFEntFosZFJLskOIf4gswVooftXh8sr8A45nvlO4ZKP2cyrTsOyj3z%2F4uPizyMjFQ2qEWrLN2Ckzcv5O%2FKcFbdx0kZ81wgFLrHoe684Nsmoik2CNzf0I8%2BDCLVYJPGC2qsIMhB20c87CoBx0%2Bf6NeY%2B28Hu8wlLLlJhxta2GU2%2B%2B7S0gRw8Y7yKehjbaSLJnoAmbRmOSu83NVtqq3FqE3c4e2vzhkrIwFSwfQM6fOsWwZoxB59Ufg0v%2BIFKnyk6jZzWKf5B%2FoDNz1m%2B3oAVQ5iBNzuexri1Rba%2F4USLekzRokKq1PTGG3jFoouOb3xopbTgLaKxkFB3d8e90269Uymj3tupxwQA53cCo5IQAtQSjuS%2BodAcLF0Fg2OsTMB5b4VQtiQdgcVz8E7W1F2CTnJ8g9QgIajkDMNddIyEJ4Ei5Yq7k2AGfFXZ0bu0%2FyqNWLYZjT76cKmmwYpAVrwo6y7LDtRlMw2Ch7itSj1vTxRxJTkG%2BMo2hO1BaBz27trJ1llt1zsEeoAqCMnejhzH3LTjImdSsvGXBuJ8ii6rESLtVeetoqJOeEmA4xZzFKSZwGj360NuXC4tDCn7tjJBjqkAa81AgGeN1n6oEZMyqbaS2JQhlJErLCmG9fSNqTK1Nk9r2a2%2BiUkSn60b2x9cwNJXWaG7AApGDJ0gHVLr4rNGOff6LuO%2Bb%2Fb48ZppXfm3QTLWVal%2B484%2FLFiy3dmFjgRULp%2Fk5rg1DNADxJHsZI%2BIBs7I5CeAHrsLRTuosB0bXpkE4uX%2FmkhJuSgOE4DIyW4IbK%2FKUk2%2F5XjXKcOEgOUMmhQidvs&X-Amz-Signature=89a8c05780a3c213a603fe1ed0fc9980d9d3bac9e559ab22705fbe51728901c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZE45GJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2MODogTm7WLzynyrpJfcBPDm5%2BS%2B5R2rGpu6YFBE%2BMQIhAP%2BRyWxQn8x9ukVxS4cg9CSak2iuv2B2lRRY1dYQiLo3KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPBszxQwf40NwUNwEq3ANrtftf2GBVlsx6BP1rA4TPCgAruv8i4ePCjZfOMebo5zQ1ATGFEntFosZFJLskOIf4gswVooftXh8sr8A45nvlO4ZKP2cyrTsOyj3z%2F4uPizyMjFQ2qEWrLN2Ckzcv5O%2FKcFbdx0kZ81wgFLrHoe684Nsmoik2CNzf0I8%2BDCLVYJPGC2qsIMhB20c87CoBx0%2Bf6NeY%2B28Hu8wlLLlJhxta2GU2%2B%2B7S0gRw8Y7yKehjbaSLJnoAmbRmOSu83NVtqq3FqE3c4e2vzhkrIwFSwfQM6fOsWwZoxB59Ufg0v%2BIFKnyk6jZzWKf5B%2FoDNz1m%2B3oAVQ5iBNzuexri1Rba%2F4USLekzRokKq1PTGG3jFoouOb3xopbTgLaKxkFB3d8e90269Uymj3tupxwQA53cCo5IQAtQSjuS%2BodAcLF0Fg2OsTMB5b4VQtiQdgcVz8E7W1F2CTnJ8g9QgIajkDMNddIyEJ4Ei5Yq7k2AGfFXZ0bu0%2FyqNWLYZjT76cKmmwYpAVrwo6y7LDtRlMw2Ch7itSj1vTxRxJTkG%2BMo2hO1BaBz27trJ1llt1zsEeoAqCMnejhzH3LTjImdSsvGXBuJ8ii6rESLtVeetoqJOeEmA4xZzFKSZwGj360NuXC4tDCn7tjJBjqkAa81AgGeN1n6oEZMyqbaS2JQhlJErLCmG9fSNqTK1Nk9r2a2%2BiUkSn60b2x9cwNJXWaG7AApGDJ0gHVLr4rNGOff6LuO%2Bb%2Fb48ZppXfm3QTLWVal%2B484%2FLFiy3dmFjgRULp%2Fk5rg1DNADxJHsZI%2BIBs7I5CeAHrsLRTuosB0bXpkE4uX%2FmkhJuSgOE4DIyW4IbK%2FKUk2%2F5XjXKcOEgOUMmhQidvs&X-Amz-Signature=c0c788d4d190e4089448e4bf4ad50c19efd3de5dce18f83e5f5a9ab21b959233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

