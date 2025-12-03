---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633T7JZAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD8dbnN1arOcmoTjPu0yVEI5m4e5vdMC9OAU4w1UFraVgIgEchAkGKvdlJ%2FGoAAgc%2FNAJOHmGSJcjng7Ma9JRMrtjgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCMpP5Ix35%2F0PDeDryrcA1KuRyW3VeB5v2zU8WqzVObUxELJ7tiarNVXy3X66KnvIHmFWIk%2Fbdr8jVps0BYvnOXE0Q0qYWPNMKMKJTXfXc4zMuuerXx5JhSTeA4ZapeKbRi1crWlkcwWLVJmO%2FtOsddkkS6aLOWGKTcsYfVqoOASOZUowO%2BeqBBt4LW%2BQ8sVnAo4qJXUnY92jgk6fgEuCvbygE%2BP48XFbkjIYvzO75inggkt3Rol06Zd96IphY2QiqFyHErB9fTDg3UI1%2FQFVk4w9Ui1pSqPAyg%2FSrsA9pHsbQ7Vb36bIqqlKIwLn2iZKqGFHZj%2FN9CCAqkPHHpogb%2FVXVk%2BXrIg7tiTKPRm5uhru1D%2F3rrqUZeVNWpsZonNXgeBL0pg5ICCRymfAKduE%2B0FACqIXTDY%2FQfXbXPMjxy7Y7iXLkCLALBwXiidMpG78E5m2u2TiS0miiQw0vTTriAoGXqLytUd93tf1mMYCzYbV0Jqg%2FbJWmpxUiE%2F4a%2F80XJCNTSe01iJrcq26yzRV2IdxnHphKMU%2B4xc6LBMUsFOWuLyF%2BYp2JIff298dPqxgwOIKqT9OF3lOKZ48vtF61PBiml6jnKld6cw%2F3GmM4jOCDTWP7y2bRmjDA3AuUBlmwcsxNRkANFv%2FjK2MK%2B9wskGOqUBnmiYqVEXttfFbW0LU%2BwGDF7nmFCr8POhDb6VnmI32ZiPQh9Q8KEzBQ3oMZ1mnLZ82JnGF%2FQyvSwZrqsYuHDljYb7%2B%2BWwYNgdIDH78RdlOnNGgjBNoQ%2FqsnijWGYNZ9vhFp3m89G4xhQGTsc8MnJVzuVKzTBq61CaBMQMGlca%2F0NcixhsJawp%2BFY4Krywcw23TIo8Y3jTHcimMzoSggBIrDPHZG5s&X-Amz-Signature=0283e29a1891c726feb9e47154aa44592279d76de34c235aa9e6b7058ffce5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633T7JZAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD8dbnN1arOcmoTjPu0yVEI5m4e5vdMC9OAU4w1UFraVgIgEchAkGKvdlJ%2FGoAAgc%2FNAJOHmGSJcjng7Ma9JRMrtjgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCMpP5Ix35%2F0PDeDryrcA1KuRyW3VeB5v2zU8WqzVObUxELJ7tiarNVXy3X66KnvIHmFWIk%2Fbdr8jVps0BYvnOXE0Q0qYWPNMKMKJTXfXc4zMuuerXx5JhSTeA4ZapeKbRi1crWlkcwWLVJmO%2FtOsddkkS6aLOWGKTcsYfVqoOASOZUowO%2BeqBBt4LW%2BQ8sVnAo4qJXUnY92jgk6fgEuCvbygE%2BP48XFbkjIYvzO75inggkt3Rol06Zd96IphY2QiqFyHErB9fTDg3UI1%2FQFVk4w9Ui1pSqPAyg%2FSrsA9pHsbQ7Vb36bIqqlKIwLn2iZKqGFHZj%2FN9CCAqkPHHpogb%2FVXVk%2BXrIg7tiTKPRm5uhru1D%2F3rrqUZeVNWpsZonNXgeBL0pg5ICCRymfAKduE%2B0FACqIXTDY%2FQfXbXPMjxy7Y7iXLkCLALBwXiidMpG78E5m2u2TiS0miiQw0vTTriAoGXqLytUd93tf1mMYCzYbV0Jqg%2FbJWmpxUiE%2F4a%2F80XJCNTSe01iJrcq26yzRV2IdxnHphKMU%2B4xc6LBMUsFOWuLyF%2BYp2JIff298dPqxgwOIKqT9OF3lOKZ48vtF61PBiml6jnKld6cw%2F3GmM4jOCDTWP7y2bRmjDA3AuUBlmwcsxNRkANFv%2FjK2MK%2B9wskGOqUBnmiYqVEXttfFbW0LU%2BwGDF7nmFCr8POhDb6VnmI32ZiPQh9Q8KEzBQ3oMZ1mnLZ82JnGF%2FQyvSwZrqsYuHDljYb7%2B%2BWwYNgdIDH78RdlOnNGgjBNoQ%2FqsnijWGYNZ9vhFp3m89G4xhQGTsc8MnJVzuVKzTBq61CaBMQMGlca%2F0NcixhsJawp%2BFY4Krywcw23TIo8Y3jTHcimMzoSggBIrDPHZG5s&X-Amz-Signature=461b0079445ec762839ea6be15f8d966c16f8dbd5635a00827b9ac1097e6c5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

