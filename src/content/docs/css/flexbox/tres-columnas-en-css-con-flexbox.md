---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6V6XKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDebvVbhM7yu0wW3dBZtK50WMQ6wdVMKtJeT%2BgIdgyW9AiAf%2FbS3owtYllr2XBOHuBsIMzqlxKZ0PVHUhNKCTeUtgyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRBbrP6F6ABvX5EAzKtwDqNpWoVoArW%2FEtY2BvxCnxpNhU8IY7iN6ddw4CERcth%2BzKvpMamH%2FkyaPHiS4nS135RJhwkVW3tR6%2Fh4M2psjHMKVxnGMiJgEc%2Bf95YbhE9QCCqqXotkipXWglQY5%2FwfySRHQhrXoGSZ7hKL6YPLJb6ohTvErGz58D9cKymHl28fukuA%2B4%2F2BEu5jH9BzgyOcGdRWLRjX6cZyfv0dDaf2bpLBcLZcs58Ab5rOMW5T5Q5UHXIUR30W0OnsD4MJqFUI7rl%2BgjZEHEupoSxDdCnA00n6FPmc%2BSb4U%2FHDPvcrS7m5h0io%2BU%2FLjA1UItbZ8MtReyHi8e9Zz54WEn2b60IymL0SzjRJOiCRctI7A4tpqL3o3JwYxwYRDwB4txdWlofz0YTkD068fMZEinh1185P8Ezdj3BWL1qYbEqCbdwQbd0%2FwtgHREw3N%2BWR9Qm9lROatwGDiK7XLRyzwdJ887b164uoK7ivXdnnU3IV5IFdMI4F8KSZfaDlep61ozL6oVmEwQ6UWeBRj3prOVFAZ0Oco5gORt91v%2FbQ0gTVKRy5YAeKu%2BRlSIZ8k6zXQJO4PStq4sYbY7F9DwEic4ISBi5N2IrqYGYaGGqbVta%2BAQ2u%2FcOkUqs137IkT6FUn1QwpZnUyQY6pgHZf2tVFLmSjydCoe2w1dSV88wPC0cV0zrrBw7VJVnBrmXxy1MtXkDGxLkCFFooca%2FTyxf6JdvoqPUgwuIotsYBxqXIblGc5BqaepwzVMINpUaEr085LO7fA9cfvX6lyGJnVATpLRrHgO4c29oekQiRTX2O8hdtdEnor5B25spDs5GtAKbOC5hKsne0BeHDLzxUBo56c3zYSRVycow6Ls2rkNyGwz3Q&X-Amz-Signature=19b995b86f4c46800a3f7dbd7dcb70fe06946fb7fbc354cec78c927b9626dd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6V6XKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDebvVbhM7yu0wW3dBZtK50WMQ6wdVMKtJeT%2BgIdgyW9AiAf%2FbS3owtYllr2XBOHuBsIMzqlxKZ0PVHUhNKCTeUtgyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRBbrP6F6ABvX5EAzKtwDqNpWoVoArW%2FEtY2BvxCnxpNhU8IY7iN6ddw4CERcth%2BzKvpMamH%2FkyaPHiS4nS135RJhwkVW3tR6%2Fh4M2psjHMKVxnGMiJgEc%2Bf95YbhE9QCCqqXotkipXWglQY5%2FwfySRHQhrXoGSZ7hKL6YPLJb6ohTvErGz58D9cKymHl28fukuA%2B4%2F2BEu5jH9BzgyOcGdRWLRjX6cZyfv0dDaf2bpLBcLZcs58Ab5rOMW5T5Q5UHXIUR30W0OnsD4MJqFUI7rl%2BgjZEHEupoSxDdCnA00n6FPmc%2BSb4U%2FHDPvcrS7m5h0io%2BU%2FLjA1UItbZ8MtReyHi8e9Zz54WEn2b60IymL0SzjRJOiCRctI7A4tpqL3o3JwYxwYRDwB4txdWlofz0YTkD068fMZEinh1185P8Ezdj3BWL1qYbEqCbdwQbd0%2FwtgHREw3N%2BWR9Qm9lROatwGDiK7XLRyzwdJ887b164uoK7ivXdnnU3IV5IFdMI4F8KSZfaDlep61ozL6oVmEwQ6UWeBRj3prOVFAZ0Oco5gORt91v%2FbQ0gTVKRy5YAeKu%2BRlSIZ8k6zXQJO4PStq4sYbY7F9DwEic4ISBi5N2IrqYGYaGGqbVta%2BAQ2u%2FcOkUqs137IkT6FUn1QwpZnUyQY6pgHZf2tVFLmSjydCoe2w1dSV88wPC0cV0zrrBw7VJVnBrmXxy1MtXkDGxLkCFFooca%2FTyxf6JdvoqPUgwuIotsYBxqXIblGc5BqaepwzVMINpUaEr085LO7fA9cfvX6lyGJnVATpLRrHgO4c29oekQiRTX2O8hdtdEnor5B25spDs5GtAKbOC5hKsne0BeHDLzxUBo56c3zYSRVycow6Ls2rkNyGwz3Q&X-Amz-Signature=a1fa19d0f3ecfa9b4f9368aefa545efac2594925aca9b9f96b4165ed76d11ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

