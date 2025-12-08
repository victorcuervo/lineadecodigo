---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHM4FVS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjgLmfLipu%2B%2B7EyFIKKJWVL%2B1kHFWeZctY62EwFTMJAiEAm8YyWKJrdtXaAPA7t92D21jlq3vUR2EaJQ7hwloX5vYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOslpYJr%2Be1YIcGX9CrcAxiDAuvGVDT9FkKaU%2BmLns0mXcrqsuyf89FOF04ZsMX77SYMbMYUoGxQcTYgIH9RRTkKjy6zteciI5zCZV60zWGvSodCulafT9hI%2FM1mbBoGe73GGNPD9vejRKiXckhBXC0oX625IIKcNR1fN4R8p86R2m3MxR8PM%2BbYhvpRlneHqWRltOJLsWBBZPGF0kmY3kp0j5PRRh1tidzNXR70Kp054kzNyMabsKa49rtNtrgV6CO3BDYkoBvwpFL%2B4aBLbalewsxmynFAciKzNi78MuRkIU3ma9okrVBXSLCGpBiqhH2PvkL9aVIFcY5KyPNwMcastw7HAiMPcNt3ghlX8%2FNsXheZkzy9lnUDyl7SQItvC7QTaOaNeW%2FgU2drEX4E1F7t6qOWfzA7k7A6U0s5N3UE7NbDzBn8tODx4AELCLxeTGUfH%2FPI9PGExykr4uqG%2BczA7bAJ4aaY2CkQ1uYIzdeKNPoVtYH%2BnE9G%2FyWkQf5p%2FLWgQYeY9b5yF%2B6jUVJazw4h6WEdqkfVgrZoQmdU6MykFLsqWNrbbvfRfC1V9zSS%2FEtBCg1Odufwu2eAPUwuEfSZxrtQXfBNjEVIua9hDmjlI03XQUrlZNY%2FFdS%2Bv2Azj4dIwMCiFUkHzoaJMI%2Fv2MkGOqUBmoJGNC7M1GMQqm5%2FpqbDTLJcZEdD0tl3Z4d1Me8WJcYdc%2BCytk0EdmtAWRn9lBEW9zhqwYRVm%2B1Tsz2ET%2B5gYZ23WaSC8RF4ym0zKHJ7HqC%2FM3uPfinEzV60VLKFLF1B%2Bfp19T4f%2BtSUj5ni9%2Bb4%2FFtdJiofHCg8QOOLYYt3AeExJuKo%2BXVOiZOdwf5QR5niVQ9Ieew5griCTvO%2BZT6PjGkCqay2&X-Amz-Signature=f96d46b9417e17908ff322cbf6ab1a2091cdbeb3d65273fe655d824d49681fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHM4FVS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjgLmfLipu%2B%2B7EyFIKKJWVL%2B1kHFWeZctY62EwFTMJAiEAm8YyWKJrdtXaAPA7t92D21jlq3vUR2EaJQ7hwloX5vYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOslpYJr%2Be1YIcGX9CrcAxiDAuvGVDT9FkKaU%2BmLns0mXcrqsuyf89FOF04ZsMX77SYMbMYUoGxQcTYgIH9RRTkKjy6zteciI5zCZV60zWGvSodCulafT9hI%2FM1mbBoGe73GGNPD9vejRKiXckhBXC0oX625IIKcNR1fN4R8p86R2m3MxR8PM%2BbYhvpRlneHqWRltOJLsWBBZPGF0kmY3kp0j5PRRh1tidzNXR70Kp054kzNyMabsKa49rtNtrgV6CO3BDYkoBvwpFL%2B4aBLbalewsxmynFAciKzNi78MuRkIU3ma9okrVBXSLCGpBiqhH2PvkL9aVIFcY5KyPNwMcastw7HAiMPcNt3ghlX8%2FNsXheZkzy9lnUDyl7SQItvC7QTaOaNeW%2FgU2drEX4E1F7t6qOWfzA7k7A6U0s5N3UE7NbDzBn8tODx4AELCLxeTGUfH%2FPI9PGExykr4uqG%2BczA7bAJ4aaY2CkQ1uYIzdeKNPoVtYH%2BnE9G%2FyWkQf5p%2FLWgQYeY9b5yF%2B6jUVJazw4h6WEdqkfVgrZoQmdU6MykFLsqWNrbbvfRfC1V9zSS%2FEtBCg1Odufwu2eAPUwuEfSZxrtQXfBNjEVIua9hDmjlI03XQUrlZNY%2FFdS%2Bv2Azj4dIwMCiFUkHzoaJMI%2Fv2MkGOqUBmoJGNC7M1GMQqm5%2FpqbDTLJcZEdD0tl3Z4d1Me8WJcYdc%2BCytk0EdmtAWRn9lBEW9zhqwYRVm%2B1Tsz2ET%2B5gYZ23WaSC8RF4ym0zKHJ7HqC%2FM3uPfinEzV60VLKFLF1B%2Bfp19T4f%2BtSUj5ni9%2Bb4%2FFtdJiofHCg8QOOLYYt3AeExJuKo%2BXVOiZOdwf5QR5niVQ9Ieew5griCTvO%2BZT6PjGkCqay2&X-Amz-Signature=934a73d22477a37677e49ef2e2a7ad70435f2f168ac4ad461597de8dc7c43039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

