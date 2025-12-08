---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCRKHT7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApUiDmfQxucQG12o%2BJ7oW47pzRMlDYQ5uVKLUvimIAEAiEA5Ov7CmXy3JptUon6A4LBQotHMEiiouAr%2B3eweZJRrRIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA12yIvsqijwggmlaCrcA5yn%2BSY8UrX%2FNh97ueHTGIv6rMq0U0nvuJh25G3sd4Wqnw0OMzxvsT%2FapJOC52Lm98OQPd6oMGCFlCp0Y5kfLugoxVmv93yoh3H8fy1vfZTwbpvMMCkhpmkM00gSUZ3viO6Xzo8DOlm1dKM3fSoYlnkukd2GDvfOcl4ffnrv7KdKQbIpXtPB06PkgWULp99KBmdpcZKISYEZ6nYW5FU1a3q2Ng4rl3pQJmfHBnKHhj%2BF%2FuJgE62pZGG%2B4o6i66sBb6658f8IviLhazyvOXlSDImGGWF5Pam0F3Y82WVQAEX%2BMHuQXEeoLrsDpCy3QuSwsEDhdOr%2FaNQHHxPheienGaDlElXlqJp%2FEmuD1CtaZ1cRrf%2BXnUc%2F%2BUK4Dj2U5saXaSxHpWBvtWAFDnXvudaYJIQGBYc%2BcIMj85ARW0vMqtoBh7O3BK%2FrjMTGly7eZ8hbERhDMDeay4Wg8BgBdyhBkfX5vs4hNn61gXjnnr%2BRVFoSr2UvaR0FIvdcd9%2B%2FNWR2P5lI8vLU49g8NQ5j2pOYyitQLHM9In0xcTxUI8BiWuViaGRaqX2fDU%2F2n8yBL5ttKPFGJargV9oAYVxZMDXXYbjG5posE69DXFe9C5FxiiPJnrXfrfuZmqYpN%2F0ZMIaH3MkGOqUB2rOClyig8Gp2YI5%2FnDYr0ULo2wTxKgm7sP24G%2FomIxutWttJN2jia8YMk6gi9qjkBWZA%2F76%2FjtSLsU6aG%2FNByGxGHH5%2Bm5eNBk3qtdiSBb2qs%2Bmz0hrGJzAmbPBvrHwvmiwXmbEiH3Z%2Bx1UyJghUS5rRii88w%2F3SqcPQ%2BRTVZvHzSE1%2FdgmW5z1qqPfNN9VQfGz32sexqtM6OOxzDzKMg2iZkdoy&X-Amz-Signature=6eb96b0110cd2b8e97473c9367d9aad334d2a205530f8906b2ab73d1e6280d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCRKHT7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApUiDmfQxucQG12o%2BJ7oW47pzRMlDYQ5uVKLUvimIAEAiEA5Ov7CmXy3JptUon6A4LBQotHMEiiouAr%2B3eweZJRrRIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA12yIvsqijwggmlaCrcA5yn%2BSY8UrX%2FNh97ueHTGIv6rMq0U0nvuJh25G3sd4Wqnw0OMzxvsT%2FapJOC52Lm98OQPd6oMGCFlCp0Y5kfLugoxVmv93yoh3H8fy1vfZTwbpvMMCkhpmkM00gSUZ3viO6Xzo8DOlm1dKM3fSoYlnkukd2GDvfOcl4ffnrv7KdKQbIpXtPB06PkgWULp99KBmdpcZKISYEZ6nYW5FU1a3q2Ng4rl3pQJmfHBnKHhj%2BF%2FuJgE62pZGG%2B4o6i66sBb6658f8IviLhazyvOXlSDImGGWF5Pam0F3Y82WVQAEX%2BMHuQXEeoLrsDpCy3QuSwsEDhdOr%2FaNQHHxPheienGaDlElXlqJp%2FEmuD1CtaZ1cRrf%2BXnUc%2F%2BUK4Dj2U5saXaSxHpWBvtWAFDnXvudaYJIQGBYc%2BcIMj85ARW0vMqtoBh7O3BK%2FrjMTGly7eZ8hbERhDMDeay4Wg8BgBdyhBkfX5vs4hNn61gXjnnr%2BRVFoSr2UvaR0FIvdcd9%2B%2FNWR2P5lI8vLU49g8NQ5j2pOYyitQLHM9In0xcTxUI8BiWuViaGRaqX2fDU%2F2n8yBL5ttKPFGJargV9oAYVxZMDXXYbjG5posE69DXFe9C5FxiiPJnrXfrfuZmqYpN%2F0ZMIaH3MkGOqUB2rOClyig8Gp2YI5%2FnDYr0ULo2wTxKgm7sP24G%2FomIxutWttJN2jia8YMk6gi9qjkBWZA%2F76%2FjtSLsU6aG%2FNByGxGHH5%2Bm5eNBk3qtdiSBb2qs%2Bmz0hrGJzAmbPBvrHwvmiwXmbEiH3Z%2Bx1UyJghUS5rRii88w%2F3SqcPQ%2BRTVZvHzSE1%2FdgmW5z1qqPfNN9VQfGz32sexqtM6OOxzDzKMg2iZkdoy&X-Amz-Signature=f7bdd03de39cb3e9d4bd3a4930fa3a2b942890926a278f528e34ed0884220f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

