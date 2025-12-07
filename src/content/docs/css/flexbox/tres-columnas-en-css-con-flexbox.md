---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI5EOVT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErDE719aDDkyAvjCySCF9rUMVE7H5PWMYHK75tdokE2AiEApOTK%2FTV3EmXZ8xRRbTLlr0oRrpLIGNLPtvJuU6qMe7YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bi%2FDvfp834BXL3bircA1nz3T3f0lme7rVzDlU%2B24TR%2BzKD%2F2bLvOTcmvF70YgFcQLXFsuyKf00J8uJ%2BHrgOCeum9ejwhmD36OGpmkMwCQTc657yVdC7RL5%2FXc1TClbp8B4SY%2BXIQjirrnay9WLFh6NvwYR%2FB6TS3iNxW4mCW9ZhrZnefFQUSfI8OwJ29oDjrHkH8msFAXPlVE5tNAe%2BcyUwmYmrZ7aApDM5cqyspUuVhjZmnMKOmyDTMS88870QdVT7fI%2FUoVIn5NEb04Pmlvl9CPJzEI%2FGvd7HHfd4JqCOiPbm%2B5k2X7IcB9g9Q9VhhLEO40jxuA81dJ4Ea4TBdLkqaJ3tMMuUt4QXoq1GdAd5%2FoOXZjsxoPzteRA%2BDG9QOXVUasH1PMIFKplxvwJpJxPJXreVy3ToQaGG9rrspYW9SHwkcepw73UvC9QnBPU0p67qSWDOYH3%2BnVyaM93B2IByV2%2BgFAACTa%2FBmdbi4hCsSEO%2BayXAae8ZkQVeOGQdfesU54ZH5FDKNUr4zIFA92ayZVXdCe0VB8G3D9DHAaYec3gX0BvQobMx%2FSnQeF7JSTjg7swgSawdT4aLw4INmwJUfSPB3ijk%2Fo6fcJ92%2FVEuRpwwWHiZzmT3vEC3TaaA%2BevJb1AMz3oLpvBMIua1ckGOqUBf5lZ%2F6eDgEdmU2lUA%2FSSLay1AZczHkFFhgOvsIeDleGBA9f8gdfmAKQWXvEyQEkjIj5NW8jHnyYWFP25yf4G%2FqXg0NomGS96T3yX6Ai9tdrJlyQuZ8iKxQOgaZUsfWUo0ZTYxETpvl428MgNVRPSPeAvid%2FgV2Vux%2F49%2BZrdRpifDxZam3TpWkMtUvIfWee5odr0sJQemae6YuMwvkeIW%2BdH8%2Fv%2B&X-Amz-Signature=125ee191b7e5d550ccf966033571055d852211a0fe9e1949c07638f8abbb7ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI5EOVT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErDE719aDDkyAvjCySCF9rUMVE7H5PWMYHK75tdokE2AiEApOTK%2FTV3EmXZ8xRRbTLlr0oRrpLIGNLPtvJuU6qMe7YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bi%2FDvfp834BXL3bircA1nz3T3f0lme7rVzDlU%2B24TR%2BzKD%2F2bLvOTcmvF70YgFcQLXFsuyKf00J8uJ%2BHrgOCeum9ejwhmD36OGpmkMwCQTc657yVdC7RL5%2FXc1TClbp8B4SY%2BXIQjirrnay9WLFh6NvwYR%2FB6TS3iNxW4mCW9ZhrZnefFQUSfI8OwJ29oDjrHkH8msFAXPlVE5tNAe%2BcyUwmYmrZ7aApDM5cqyspUuVhjZmnMKOmyDTMS88870QdVT7fI%2FUoVIn5NEb04Pmlvl9CPJzEI%2FGvd7HHfd4JqCOiPbm%2B5k2X7IcB9g9Q9VhhLEO40jxuA81dJ4Ea4TBdLkqaJ3tMMuUt4QXoq1GdAd5%2FoOXZjsxoPzteRA%2BDG9QOXVUasH1PMIFKplxvwJpJxPJXreVy3ToQaGG9rrspYW9SHwkcepw73UvC9QnBPU0p67qSWDOYH3%2BnVyaM93B2IByV2%2BgFAACTa%2FBmdbi4hCsSEO%2BayXAae8ZkQVeOGQdfesU54ZH5FDKNUr4zIFA92ayZVXdCe0VB8G3D9DHAaYec3gX0BvQobMx%2FSnQeF7JSTjg7swgSawdT4aLw4INmwJUfSPB3ijk%2Fo6fcJ92%2FVEuRpwwWHiZzmT3vEC3TaaA%2BevJb1AMz3oLpvBMIua1ckGOqUBf5lZ%2F6eDgEdmU2lUA%2FSSLay1AZczHkFFhgOvsIeDleGBA9f8gdfmAKQWXvEyQEkjIj5NW8jHnyYWFP25yf4G%2FqXg0NomGS96T3yX6Ai9tdrJlyQuZ8iKxQOgaZUsfWUo0ZTYxETpvl428MgNVRPSPeAvid%2FgV2Vux%2F49%2BZrdRpifDxZam3TpWkMtUvIfWee5odr0sJQemae6YuMwvkeIW%2BdH8%2Fv%2B&X-Amz-Signature=6c8f20588cf22fd112384291363c100bf391c9f367180b26a3c14ecb1c1e1e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

