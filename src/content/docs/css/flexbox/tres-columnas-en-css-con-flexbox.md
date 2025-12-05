---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTMGFDL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05boIUKFUiZb4dkS6JuQC1XZ3EGrOYmCvP1ACBorIWQIhAJfqLGPbCyktR1jFN7FPPCNx5YwPJEXz2rUVp4d1fwKpKv8DCFsQABoMNjM3NDIzMTgzODA1Igw%2FqQVvclWi%2BjWd%2FuQq3AMFt5UvhUNb6%2F43oCx9km7uBSzOB%2BU%2BlqYeFkW%2B%2BKRNHnambcF2amihMwyCHfaDAgXpfZTX1zQZ2CHM1noRIEXFRRJTSFD61ZyygRGglJJ5rVyjMfXhbE7na6HJ0WkX4aOe%2BlvR9VxuQgXMD766RrGlDXXrJjdW2GshVlmApVDl0Is3QD2j4GycTngb6kYhEIlZqcK%2BAKsWaraYbAfZSG8gexyhBqwFl6jKlkIUK%2BJSuAhqSfTe%2BbqncIgiK1WVHEqJMrEcYElKFnTARu5nRdjberHl6esM9h%2BZ885UQ2CMs7u4RkYfT0pwfHG70bCngT2J8pnXljQK6nCDD7CQNBRV1bkhMa0fyBk2%2BZhwUFs%2FCOgM2gr5cTXgHehkU4Yx4dML4seMeM9LlxIhmUJq5fybWxVNowsgyObutYH5pcuMIJxI%2F3mihyDDNlMuAvZg3QknXpeSCNSj1ck2Tt6vpew0zjM5qWYHyy2vkdXZAo%2FXKvUDQ%2F87dY9B7q7ptbIPJQpsvvZvcGlnK7Rga4gavtk5hOLXAs6DCSeuWlf3NTzqef01Pm7m9tHbwXq43D4HDdUbI6znzMLRp1gGxXFnPPBPOb6JMLDZKCaHWgh9psi42vHu06HzfkGhDG63CTChz8rJBjqkAUtU2cfBO1W%2Bxf2ErpCUxjuDDewxvC9qZuCAN38fuEeluxtCKrwTS9wXNn%2FakKoSM6PbbgxzorvxO1UlGqQU2JXkjW7yElWtsJNTnmeNMXjJilyQVDfl0jsKrgKA5%2BGQ8ilLZXq9FU757BLekerQqOipHdDjQ3OgVKs4Lzi5vRYJ2SPOIEcKUuQLUjPPVBj6u6kfU02Mv7i9USiPwu%2FRpw6GcgvL&X-Amz-Signature=c0eb68a87f7067c1e3aeead810185a124d15b7fa782da5fe494b426c0a57ec31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTMGFDL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05boIUKFUiZb4dkS6JuQC1XZ3EGrOYmCvP1ACBorIWQIhAJfqLGPbCyktR1jFN7FPPCNx5YwPJEXz2rUVp4d1fwKpKv8DCFsQABoMNjM3NDIzMTgzODA1Igw%2FqQVvclWi%2BjWd%2FuQq3AMFt5UvhUNb6%2F43oCx9km7uBSzOB%2BU%2BlqYeFkW%2B%2BKRNHnambcF2amihMwyCHfaDAgXpfZTX1zQZ2CHM1noRIEXFRRJTSFD61ZyygRGglJJ5rVyjMfXhbE7na6HJ0WkX4aOe%2BlvR9VxuQgXMD766RrGlDXXrJjdW2GshVlmApVDl0Is3QD2j4GycTngb6kYhEIlZqcK%2BAKsWaraYbAfZSG8gexyhBqwFl6jKlkIUK%2BJSuAhqSfTe%2BbqncIgiK1WVHEqJMrEcYElKFnTARu5nRdjberHl6esM9h%2BZ885UQ2CMs7u4RkYfT0pwfHG70bCngT2J8pnXljQK6nCDD7CQNBRV1bkhMa0fyBk2%2BZhwUFs%2FCOgM2gr5cTXgHehkU4Yx4dML4seMeM9LlxIhmUJq5fybWxVNowsgyObutYH5pcuMIJxI%2F3mihyDDNlMuAvZg3QknXpeSCNSj1ck2Tt6vpew0zjM5qWYHyy2vkdXZAo%2FXKvUDQ%2F87dY9B7q7ptbIPJQpsvvZvcGlnK7Rga4gavtk5hOLXAs6DCSeuWlf3NTzqef01Pm7m9tHbwXq43D4HDdUbI6znzMLRp1gGxXFnPPBPOb6JMLDZKCaHWgh9psi42vHu06HzfkGhDG63CTChz8rJBjqkAUtU2cfBO1W%2Bxf2ErpCUxjuDDewxvC9qZuCAN38fuEeluxtCKrwTS9wXNn%2FakKoSM6PbbgxzorvxO1UlGqQU2JXkjW7yElWtsJNTnmeNMXjJilyQVDfl0jsKrgKA5%2BGQ8ilLZXq9FU757BLekerQqOipHdDjQ3OgVKs4Lzi5vRYJ2SPOIEcKUuQLUjPPVBj6u6kfU02Mv7i9USiPwu%2FRpw6GcgvL&X-Amz-Signature=31a565c39c84f836fb0f07469b7f6e35aed3ce6d10dd1b98455f4adce4111341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

