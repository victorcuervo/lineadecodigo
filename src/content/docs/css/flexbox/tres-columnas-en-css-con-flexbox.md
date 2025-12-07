---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3FNVJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuU3%2FjnF2jzohLbXyUlLTKuuyh87bPYYdZB1jMZCWNAIhAN38h%2BoFvA%2FEIRwjLiI%2FaD7zsTySDijl9Z9mPFRcd75kKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpKKO0EVLK%2F2VCgUYq3AODWK5hZ3EijC7anZYvkTLcbCbK8aClQt0KQW5hGi%2Fly6O%2BpLnWb%2FGlFJTmNa%2BMwzDL3YthLrCx92bjxA9es7%2FV%2B%2BtjJTQMJo9agp1vrYBKHcQpkdUGdDNYH0bl2nHqM%2FYHoY8RHHVkPL4vz5rxNQX82T0uly%2B7ll3C68PrjPR3Tb8cKhM0E7rfUhzr5VyadVWEe3DDiLnfrDwQs%2Bt20oyrcaAXhURVBZPamdhty68YFMAf7t8LImntHR7p40DwLTlcALgXjz%2BT1cpyz3E3pwFP5Ri5TDmEwp0pvhDF4jssgBdaTlQ6N9sIM9z4cpVJQlBW3EYoxQyGbqgbmaAFF%2FGdJTt904rRn31AsXXjPEEjP%2BG0WahtGVrqEl1LTELMCHftG5E%2BAunhIYGdITpfliMrl60dOY67GIu%2BeQGhoGT7Meh6YOGNaNyckQ%2B7VuSpKsS9%2BD0aXySYzVDLX39JRs8dTmsgL2%2FoKF6G8jbdw6xv%2BmVqmYMKN2PRVSdvzQqUGosmQ33hDRfmhK3wNvalcDCzkfIXigdZNqfO5OsMZq%2B4GqUcoLdj%2B%2F7eglrcIKSIIzLs2gKL69b7qkrXtjmox74S136kGXO1bzUC%2Fu67PF0keZYHJwLitb41FeGzmTCAmtXJBjqkATjp9ya4I6kEBYLR41z9S23uour0vSAQKtTPr06OoNIMxgWgT0hhsFS7zpBiux47oHT8URDLuGMP7mgn81GEctB3cCn8xLirhP%2BCUQ7oLmahJoh643J6I3I2DxFv1TBi4HNk4JsdJNuNaMHszsCA7p8IMD%2FTPVAIrqWtdqrgw86Dwl5ypmZXQYuMloRFv7sDOK7sEjXrOqDJPLSiA8BOogfCUGxK&X-Amz-Signature=941a238b6c41424d7590c826d8c0b86097264ea9e5d9d155f1c851f5c6037fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3FNVJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuU3%2FjnF2jzohLbXyUlLTKuuyh87bPYYdZB1jMZCWNAIhAN38h%2BoFvA%2FEIRwjLiI%2FaD7zsTySDijl9Z9mPFRcd75kKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpKKO0EVLK%2F2VCgUYq3AODWK5hZ3EijC7anZYvkTLcbCbK8aClQt0KQW5hGi%2Fly6O%2BpLnWb%2FGlFJTmNa%2BMwzDL3YthLrCx92bjxA9es7%2FV%2B%2BtjJTQMJo9agp1vrYBKHcQpkdUGdDNYH0bl2nHqM%2FYHoY8RHHVkPL4vz5rxNQX82T0uly%2B7ll3C68PrjPR3Tb8cKhM0E7rfUhzr5VyadVWEe3DDiLnfrDwQs%2Bt20oyrcaAXhURVBZPamdhty68YFMAf7t8LImntHR7p40DwLTlcALgXjz%2BT1cpyz3E3pwFP5Ri5TDmEwp0pvhDF4jssgBdaTlQ6N9sIM9z4cpVJQlBW3EYoxQyGbqgbmaAFF%2FGdJTt904rRn31AsXXjPEEjP%2BG0WahtGVrqEl1LTELMCHftG5E%2BAunhIYGdITpfliMrl60dOY67GIu%2BeQGhoGT7Meh6YOGNaNyckQ%2B7VuSpKsS9%2BD0aXySYzVDLX39JRs8dTmsgL2%2FoKF6G8jbdw6xv%2BmVqmYMKN2PRVSdvzQqUGosmQ33hDRfmhK3wNvalcDCzkfIXigdZNqfO5OsMZq%2B4GqUcoLdj%2B%2F7eglrcIKSIIzLs2gKL69b7qkrXtjmox74S136kGXO1bzUC%2Fu67PF0keZYHJwLitb41FeGzmTCAmtXJBjqkATjp9ya4I6kEBYLR41z9S23uour0vSAQKtTPr06OoNIMxgWgT0hhsFS7zpBiux47oHT8URDLuGMP7mgn81GEctB3cCn8xLirhP%2BCUQ7oLmahJoh643J6I3I2DxFv1TBi4HNk4JsdJNuNaMHszsCA7p8IMD%2FTPVAIrqWtdqrgw86Dwl5ypmZXQYuMloRFv7sDOK7sEjXrOqDJPLSiA8BOogfCUGxK&X-Amz-Signature=33715cf540e0f3f4dc4f183991a7776bf326fc6e3f499843774249b24a0f03f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

