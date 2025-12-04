---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75IX6Z3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDcJu2%2Fr9JTkhJiam%2Fue6TE5rwBaoXY7Lz3pvAp3OT7OAiB3FyleoAC9uwunFNqCNzBYA%2BjATtN7qZEdi%2BMnKmjd8ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUHWitbaX0du6NNl2KtwD%2BySfN1Sx0%2BcjzUs8MBuLSUjeqFToLRVxsTaV9%2B9Gy0mphR1iz%2ByBJlAp6s%2BYq6%2FAqhmsjNFo00847hcFaUnd%2BtCm0pH4FO9cpqaJqrvhqZiMR4yqiSaEe1tSf1qz%2FUuha1x2Vd4f2AajmcDaENZrIUuKrYNRb3FC8J5iQYIqYdcl1uxb3BG643qbrWTo8J4kVGKX1D0q9CFlqsa6ZMtYkOX0MpWxsxeRaIhTdHlc%2Fo8yMhMQBamcJJENpxMBmeeEPiq%2FsFK%2FuKUrX7H4hvvtJwXGifTa6gnQMtiXryrwsm9%2FGigICuqDExbc5PwjxQzd18z6q01moR3Ki%2FSiQ%2Fyrf5hNy3jpxBSWWQWFYE9z%2BFWfq0dzAObCo0n0yXENR6A%2B9%2BrpRoSSsHGvA8bCabdXzVF8BmkOImBcS0MzI6%2Bwc5PDTeB7CHAreeyEbugVeynfzAT7cHJY%2BL4N0AECJrXy1sardGoid9BGZ%2BaxRofJTFxxUuPCjbHVmormZrue%2F4TTaUa%2FmpOZWagfzIyPa473Vlvrrz7xfgCKaFKku91gDKjam%2F0hgVKZ0dwFljY%2FSmY7SbndMae4GJkwm%2BTYfKevMIk2ME%2BDsiNZxr57P0%2FEjXJF%2FD81vbmjDyOvx%2FQwiZXDyQY6pgEhza8zLK3FvArD498C3FhLCT6RSHttqje9E2gdPB1GoKldYoGeYudBHWYW4Vrq9JW%2BzWWU0ERQBGStsqMOQJNZ2tmM3RuEOEYUD9Jh9sJWBFC4iTNsmGxNzAPuUxCjICevxtr8n%2Byux0RWwjra5o4BXBPPMnqQnoivaAxzd81HB9CtV80AkCbneYx3b9QWP%2BSVpJEHbahjWdoAyw4Uop3Yg%2FfyBi5j&X-Amz-Signature=5d544f27c997d70cead1b9194f082365f044ea25a55feda9053e63b21e7af1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75IX6Z3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDcJu2%2Fr9JTkhJiam%2Fue6TE5rwBaoXY7Lz3pvAp3OT7OAiB3FyleoAC9uwunFNqCNzBYA%2BjATtN7qZEdi%2BMnKmjd8ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUHWitbaX0du6NNl2KtwD%2BySfN1Sx0%2BcjzUs8MBuLSUjeqFToLRVxsTaV9%2B9Gy0mphR1iz%2ByBJlAp6s%2BYq6%2FAqhmsjNFo00847hcFaUnd%2BtCm0pH4FO9cpqaJqrvhqZiMR4yqiSaEe1tSf1qz%2FUuha1x2Vd4f2AajmcDaENZrIUuKrYNRb3FC8J5iQYIqYdcl1uxb3BG643qbrWTo8J4kVGKX1D0q9CFlqsa6ZMtYkOX0MpWxsxeRaIhTdHlc%2Fo8yMhMQBamcJJENpxMBmeeEPiq%2FsFK%2FuKUrX7H4hvvtJwXGifTa6gnQMtiXryrwsm9%2FGigICuqDExbc5PwjxQzd18z6q01moR3Ki%2FSiQ%2Fyrf5hNy3jpxBSWWQWFYE9z%2BFWfq0dzAObCo0n0yXENR6A%2B9%2BrpRoSSsHGvA8bCabdXzVF8BmkOImBcS0MzI6%2Bwc5PDTeB7CHAreeyEbugVeynfzAT7cHJY%2BL4N0AECJrXy1sardGoid9BGZ%2BaxRofJTFxxUuPCjbHVmormZrue%2F4TTaUa%2FmpOZWagfzIyPa473Vlvrrz7xfgCKaFKku91gDKjam%2F0hgVKZ0dwFljY%2FSmY7SbndMae4GJkwm%2BTYfKevMIk2ME%2BDsiNZxr57P0%2FEjXJF%2FD81vbmjDyOvx%2FQwiZXDyQY6pgEhza8zLK3FvArD498C3FhLCT6RSHttqje9E2gdPB1GoKldYoGeYudBHWYW4Vrq9JW%2BzWWU0ERQBGStsqMOQJNZ2tmM3RuEOEYUD9Jh9sJWBFC4iTNsmGxNzAPuUxCjICevxtr8n%2Byux0RWwjra5o4BXBPPMnqQnoivaAxzd81HB9CtV80AkCbneYx3b9QWP%2BSVpJEHbahjWdoAyw4Uop3Yg%2FfyBi5j&X-Amz-Signature=914638c0295551c462583c93572838ed8419e49b108db6f6d51ddbd496314601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

