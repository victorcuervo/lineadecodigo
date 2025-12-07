---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK7URKZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG12ZdOx0XSORxB7SdviwZGd2UHDZpetxqtQDiAx%2BxjPAiAaZlJx4Kjh4q5f%2F4wKOgUPAaD%2BFGug5a1ecmQK7fOxxyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgIUf2Q4XIchqh5EKtwDL83lT%2FvVnEwpGbvNuXuHobsQgjoS%2FWXUJTFzj6P%2FgxSw9SQOHJEc9wqTGEr3WL4J1iUlnlowO2bclFIAMNwaA4kRvzETNi5gIrauP9TShbbnIymr%2FOMfKXXWi4nnUCuJhf6PS8gI%2BA7rN5UtVDSldF0D3fTopqzsPeG1jg8rgqbgRMQXEFaEXc1H7WJDIs0G3%2F8XayFaAoKSWcDAleIfdei9Efks0DnDGhdQ4ULS3WYgj2FPP1Cb7sZB257%2BTZfPJ9dlg0HcpywJlDkhQaoJySNaIpobEJ8GPRs%2FpUbAw%2B4VW9bUyqDPslbGOgTjWk0LvoxLjykaKP7S8CFuGsK5aq%2BMnhHgfaNHLqoJp0t4otUqz2Y4jZJmzuC7zQqq0124l1ISS1IvoG%2FYq%2Ba9GhMGLW%2B56tCTcA7Y7g5kliomyJidKpPHrrVEs3FagBlEdFpGtovASAM4ctdxr1skFis5npmHEzYwD4hGc%2BCvtwlVmCOxqR%2B55AZQk8K6i7%2FBbiHOQvRz3xb%2Bwasiq%2Bf%2FQP1Gy9%2Ft1oDKYvrD95f8JC1OOkuKeX9RESBDXFgh3jG3VrqOgJm62DYgrMUfhbx769kTkQkqtiKY74KeETj89Lca3Brb4PuFZVnkoytM3EswpZ7UyQY6pgErMtYMbSuPF3%2FjWhYw1iSHKmi02I%2FXm53EaZu%2F9ZB4dezAwCvGAkR6ifsBJD79qv9jWXDXqY7bKxMPru8gP0YUy75WERBLITjmsGq8kBHsMXOu3KquZ%2BB7fG4hDn5D9T39AGq2oPj%2Ffzwg%2FkztN2LAISnYxU4NgLaQEADXW2dssC%2B%2FTrvbLMd3SOdbhkqcG14Qpq4mc4lUFQd1JnO4JMXrGrLzAana&X-Amz-Signature=1def2cfd808b69267288967eec890ba4490145840b0136b5b558274742a835f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK7URKZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG12ZdOx0XSORxB7SdviwZGd2UHDZpetxqtQDiAx%2BxjPAiAaZlJx4Kjh4q5f%2F4wKOgUPAaD%2BFGug5a1ecmQK7fOxxyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgIUf2Q4XIchqh5EKtwDL83lT%2FvVnEwpGbvNuXuHobsQgjoS%2FWXUJTFzj6P%2FgxSw9SQOHJEc9wqTGEr3WL4J1iUlnlowO2bclFIAMNwaA4kRvzETNi5gIrauP9TShbbnIymr%2FOMfKXXWi4nnUCuJhf6PS8gI%2BA7rN5UtVDSldF0D3fTopqzsPeG1jg8rgqbgRMQXEFaEXc1H7WJDIs0G3%2F8XayFaAoKSWcDAleIfdei9Efks0DnDGhdQ4ULS3WYgj2FPP1Cb7sZB257%2BTZfPJ9dlg0HcpywJlDkhQaoJySNaIpobEJ8GPRs%2FpUbAw%2B4VW9bUyqDPslbGOgTjWk0LvoxLjykaKP7S8CFuGsK5aq%2BMnhHgfaNHLqoJp0t4otUqz2Y4jZJmzuC7zQqq0124l1ISS1IvoG%2FYq%2Ba9GhMGLW%2B56tCTcA7Y7g5kliomyJidKpPHrrVEs3FagBlEdFpGtovASAM4ctdxr1skFis5npmHEzYwD4hGc%2BCvtwlVmCOxqR%2B55AZQk8K6i7%2FBbiHOQvRz3xb%2Bwasiq%2Bf%2FQP1Gy9%2Ft1oDKYvrD95f8JC1OOkuKeX9RESBDXFgh3jG3VrqOgJm62DYgrMUfhbx769kTkQkqtiKY74KeETj89Lca3Brb4PuFZVnkoytM3EswpZ7UyQY6pgErMtYMbSuPF3%2FjWhYw1iSHKmi02I%2FXm53EaZu%2F9ZB4dezAwCvGAkR6ifsBJD79qv9jWXDXqY7bKxMPru8gP0YUy75WERBLITjmsGq8kBHsMXOu3KquZ%2BB7fG4hDn5D9T39AGq2oPj%2Ffzwg%2FkztN2LAISnYxU4NgLaQEADXW2dssC%2B%2FTrvbLMd3SOdbhkqcG14Qpq4mc4lUFQd1JnO4JMXrGrLzAana&X-Amz-Signature=98bc5fc0d080185f65c3c6c0819214033f825f9c561474fef83e9f70739d8af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

