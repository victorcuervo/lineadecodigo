---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDUMRCY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWPTaVFipTjm0YwRi5T4NHkQ%2BePsdQlYpbmOSmqHDXBgIhANdHi1vYFMcERyb%2BTeMxnrBhtzXeECOXtCCTOBdtm4yJKv8DCFsQABoMNjM3NDIzMTgzODA1IgwYDrBiSXfbb7YSvP8q3AMlbWZmIpGhwPJDXnmnWrA06rJVKwoF7Q9Z%2FrdS4E153lZ9Vi%2Bflm3JVK%2F7NetLKnyqny76P0YaaKmAYWcYoeJ8DXwXxTgw6mqqWxlkxBNdmtrDk7duvbC2rvmIca6LJGAeWCotbUhPsG7iRC3wDk6fveuAQ%2FqCq%2BhBb%2F9YoEvysDqYV%2FHs1qJW1fntRhUCJfeNX8tNrluexmTTseimR3TFtZlQ5HB9ZAOytLLcXXwg7QI81nIeaZ4AuoBFkniiAXJZhm5iTzZwb%2F6xMhJ3kI8YD1n%2BeC8R43QL3GjRqPAEqyP6WOiI25UbvuZ2qxfFOUu%2B%2Fgv5WxnOarp67eTTmB6qfBxsfqjHgsh3EYrD5pQfdAkp5Kd7UHXshPKsiLbYFw9HhBWsWe3q%2FloD9LwAQyEfRNUb6b2GCrID1%2BDTHo5QqDB7jww8c%2Buf%2BEgfRdFrdg%2Bewleht4xBolPXsgOK67IB%2BapZ8Etfl%2FKEy6xpTficmWl3cp08wnBXD496krYE5wxufg1FI7A6jtTGnpU%2Ba0p9LIeaxLfWaM7WzsOEfMhNnsSXVFKyPZRaJu966XFNRFr2PPxe%2Ftr8pFCygyzXA%2Bez6PCri%2FkwhsjN4pL4kmvp8ExlgRpqAvbzVHDc0jCf0MrJBjqkAanYYWLDaZA725hHfnClwF%2B1byiCEfpMW3SQCwiDL81HLFSfsk1NPKC86ydC8sxFFuTny5UGXa5KmaUARsiKcoBwgqcoSqxwKIN9EWkI2RoDX%2BKjtJbiDT92xQC3mJJVvvCFPXapPSkASwBDHdoalrGWD4GkI%2FvaiEiHpK6FEQYG7gHfKt%2FVLXhDfJQ%2FSPyB6AotSoyxfzK05wgAoz57rstrVMav&X-Amz-Signature=6b086cf307fd45899890d5ad1e9a3a1ddb40477548b0b2a299288daa0c66f37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDUMRCY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWPTaVFipTjm0YwRi5T4NHkQ%2BePsdQlYpbmOSmqHDXBgIhANdHi1vYFMcERyb%2BTeMxnrBhtzXeECOXtCCTOBdtm4yJKv8DCFsQABoMNjM3NDIzMTgzODA1IgwYDrBiSXfbb7YSvP8q3AMlbWZmIpGhwPJDXnmnWrA06rJVKwoF7Q9Z%2FrdS4E153lZ9Vi%2Bflm3JVK%2F7NetLKnyqny76P0YaaKmAYWcYoeJ8DXwXxTgw6mqqWxlkxBNdmtrDk7duvbC2rvmIca6LJGAeWCotbUhPsG7iRC3wDk6fveuAQ%2FqCq%2BhBb%2F9YoEvysDqYV%2FHs1qJW1fntRhUCJfeNX8tNrluexmTTseimR3TFtZlQ5HB9ZAOytLLcXXwg7QI81nIeaZ4AuoBFkniiAXJZhm5iTzZwb%2F6xMhJ3kI8YD1n%2BeC8R43QL3GjRqPAEqyP6WOiI25UbvuZ2qxfFOUu%2B%2Fgv5WxnOarp67eTTmB6qfBxsfqjHgsh3EYrD5pQfdAkp5Kd7UHXshPKsiLbYFw9HhBWsWe3q%2FloD9LwAQyEfRNUb6b2GCrID1%2BDTHo5QqDB7jww8c%2Buf%2BEgfRdFrdg%2Bewleht4xBolPXsgOK67IB%2BapZ8Etfl%2FKEy6xpTficmWl3cp08wnBXD496krYE5wxufg1FI7A6jtTGnpU%2Ba0p9LIeaxLfWaM7WzsOEfMhNnsSXVFKyPZRaJu966XFNRFr2PPxe%2Ftr8pFCygyzXA%2Bez6PCri%2FkwhsjN4pL4kmvp8ExlgRpqAvbzVHDc0jCf0MrJBjqkAanYYWLDaZA725hHfnClwF%2B1byiCEfpMW3SQCwiDL81HLFSfsk1NPKC86ydC8sxFFuTny5UGXa5KmaUARsiKcoBwgqcoSqxwKIN9EWkI2RoDX%2BKjtJbiDT92xQC3mJJVvvCFPXapPSkASwBDHdoalrGWD4GkI%2FvaiEiHpK6FEQYG7gHfKt%2FVLXhDfJQ%2FSPyB6AotSoyxfzK05wgAoz57rstrVMav&X-Amz-Signature=65d92b3574d8ad154a1dce117578ad0e2eb34c967a8d7560efeb270f7333479e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

