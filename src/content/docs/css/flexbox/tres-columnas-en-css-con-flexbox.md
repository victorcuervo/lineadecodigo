---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5AZCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmyXIGLuo2hm%2BlqQBxmYEFGFUavJmDbspzu3q3p1Y5rAiEA%2F3m3pq99qhiSqztlLSMifJK3QzFYxNTFvM65E1kir8AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFggpv92702%2BfWPATyrcAxE9QMN3L8BvylZt2L8nFaWHoYMGHy5AnCnxa1uByw6eBCipGH%2FKa8LdY9thzsSr%2BAdD35rJmuHDW7Q3hK7mB%2Bo1N0Va7MgP%2BqVMqVUmf%2Be5Abw9JW5vFobW9RCbFXimIssBogAR8N8SJN4lfucwu%2ByqP%2BVctYOqOrnfbiNupUar7fVxdKfZrJ%2Bm8zRNEDFpyWw7%2BNscYUXUAo3ExpdVyVywzOxJ2PS6OWNRAocsvFWOjnq601X%2FAA28RVXijn6ds4sPHexJqM4CAFD3IhjUL3o4HoBjpI7YLDZnXMb%2BMgAsZDKY3tSrUp9f%2BuqGTR9fw%2Ba7nS2olwgzwBzfC4DiKJKkZTvDQLSNNCtMSp9erTLlL18eZQ3APsf5MwyzDFenTEG2WZ%2BMks%2FpbG2Xpu%2FfRd1I0IhBPynC16fhXlyBDikh7ls%2BKbEP7Pe4QkH%2FjvY1ssqjFoW1iuU%2FiM7U0Ch94Q2J7LVtQZ74k0Ud8tazHoLpPbWMBrLFdctZeCbhLWuzdczmMsFuDtysFBVG5uViJakO3I%2FsXdb9HhYD1lkTvI2X859%2BDiW0WyHMYvS8hLcrgnx0mnAp3SqqPlJOh%2B5QytWW0dqSwAPk9jXaZLwPKPWjBKsIXGiEOcyhOzZ4MIXI18kGOqUBwo5hDQkok5LeHByESH9lEKsZvgKSnlIMmJCu9TwVeMKDHo%2B09CBfuebTCK28RiVRuv4UMJ4XL%2BUGA4Vjuh5I7pf%2FaysVw5Mgtd5nxPwzFKqrFjYzj%2B%2FSNlKuOi0e95lZbD8Y69U%2FADiCmGOnnUXqyE%2BESDM7lalJiYU2cxpl3GXu7vNq9jxK8X7RQYcIwdBi6PpEEMJwkLTANjlPbz7Sx5hzeE8%2B&X-Amz-Signature=733ad6c56d40400f0d46aeebd7757a9a6c6f1fd0a74a100bb041ea126a9554ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5AZCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmyXIGLuo2hm%2BlqQBxmYEFGFUavJmDbspzu3q3p1Y5rAiEA%2F3m3pq99qhiSqztlLSMifJK3QzFYxNTFvM65E1kir8AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFggpv92702%2BfWPATyrcAxE9QMN3L8BvylZt2L8nFaWHoYMGHy5AnCnxa1uByw6eBCipGH%2FKa8LdY9thzsSr%2BAdD35rJmuHDW7Q3hK7mB%2Bo1N0Va7MgP%2BqVMqVUmf%2Be5Abw9JW5vFobW9RCbFXimIssBogAR8N8SJN4lfucwu%2ByqP%2BVctYOqOrnfbiNupUar7fVxdKfZrJ%2Bm8zRNEDFpyWw7%2BNscYUXUAo3ExpdVyVywzOxJ2PS6OWNRAocsvFWOjnq601X%2FAA28RVXijn6ds4sPHexJqM4CAFD3IhjUL3o4HoBjpI7YLDZnXMb%2BMgAsZDKY3tSrUp9f%2BuqGTR9fw%2Ba7nS2olwgzwBzfC4DiKJKkZTvDQLSNNCtMSp9erTLlL18eZQ3APsf5MwyzDFenTEG2WZ%2BMks%2FpbG2Xpu%2FfRd1I0IhBPynC16fhXlyBDikh7ls%2BKbEP7Pe4QkH%2FjvY1ssqjFoW1iuU%2FiM7U0Ch94Q2J7LVtQZ74k0Ud8tazHoLpPbWMBrLFdctZeCbhLWuzdczmMsFuDtysFBVG5uViJakO3I%2FsXdb9HhYD1lkTvI2X859%2BDiW0WyHMYvS8hLcrgnx0mnAp3SqqPlJOh%2B5QytWW0dqSwAPk9jXaZLwPKPWjBKsIXGiEOcyhOzZ4MIXI18kGOqUBwo5hDQkok5LeHByESH9lEKsZvgKSnlIMmJCu9TwVeMKDHo%2B09CBfuebTCK28RiVRuv4UMJ4XL%2BUGA4Vjuh5I7pf%2FaysVw5Mgtd5nxPwzFKqrFjYzj%2B%2FSNlKuOi0e95lZbD8Y69U%2FADiCmGOnnUXqyE%2BESDM7lalJiYU2cxpl3GXu7vNq9jxK8X7RQYcIwdBi6PpEEMJwkLTANjlPbz7Sx5hzeE8%2B&X-Amz-Signature=d50d742410307b027571a960340bc2396a950a57ad5efabf03c7011a6eb93cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

