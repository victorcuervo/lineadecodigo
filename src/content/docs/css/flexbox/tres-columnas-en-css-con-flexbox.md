---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4WXZW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8EcDHxT4FqvFLOUrPqOXpz4L%2FtjulUhEzIr2eEOO9bgIgLdmA4%2FHwQSyzBg1h1swI0jIJerhviIk7xHdDb6r0vkMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FH6n3TWkvlGUNZCyrcA6Wwk32iy%2BAcHacvWASg53%2BpH%2F24XzI%2FTZljGybVhC8GhWcNxqsvmwI7DT28xPb6uf%2B11edwr%2BhSw%2BZZFq3PQvGa5FD4w8lWvJQbefkFI3x%2B%2BLs62nUGTQ812i9PbOtVZ7q%2BWH7tldpNTempPQgUByjvojIysgwg4k6kEmzJFEEPkPDtLFTVm9WtVbDPLBQjXJyrU%2FsR%2F7FjML7teQaKPkCP6BwmASZe5Nj46bJWz7V2Si0Kk9cu%2BL5bLMswhSqCNXjQubHMRiiPU%2BfdEoOIpVoJ4p%2Bv0cC9e82uMs5E%2BPzqbJFLA3wyU8LBuE0r%2F%2Fsva%2FqVivvDuwDT4h1gFUoRiLQZY5lnZSTICKVkelKWJM8vp3g0fVkzpplopH41K3Ck0oxrxeGn0bCp1nXVSBiubjxFTwNgI7dnUAYy3AoA87rh8voYQX%2FKWAtKyXVs%2BviMtsIn2FyMWsOoiE%2F6UjvPCiRYHmePHysIWqNLFvN9HiluHd%2F4r%2Bw1xro7tOvOiPbwhnFb3WdisPxHIERZidaMUgiUANuhyhbcvdmw8YVI1QYaEcX684ToYLXXEzGKve6VKRSl3qjTaQmr05JdnCyHBza7xAva%2Fi2ZUctEBQOklzZQjBDpU915s3B4gMtLMKjt2ckGOqUB8Ea%2FyKVdC5IGw1TiD9mzC37Fs4AyrDSP3aXakM%2BPBtXr%2Fhx86eBKM6AZu%2FHwz%2Fk5sZ5H7DzEW%2BKbVqppSRd6ZREo1kly5%2F%2BYhCZiF5BS%2Bip2rsxZJlJ9NDunRN42SSDN0%2FIPtt2pa4hRemr4M6NWFckfyw6tr%2FKZ1sudG9t6BDO63tVm4yZlTQOYDyEOOcnuy5eb%2FZXGddkOGbDjQachBY0J405f&X-Amz-Signature=189be675890be02bd0528e6a0a33e655f7490da16badf4102d651b8df0bfb2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4WXZW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8EcDHxT4FqvFLOUrPqOXpz4L%2FtjulUhEzIr2eEOO9bgIgLdmA4%2FHwQSyzBg1h1swI0jIJerhviIk7xHdDb6r0vkMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FH6n3TWkvlGUNZCyrcA6Wwk32iy%2BAcHacvWASg53%2BpH%2F24XzI%2FTZljGybVhC8GhWcNxqsvmwI7DT28xPb6uf%2B11edwr%2BhSw%2BZZFq3PQvGa5FD4w8lWvJQbefkFI3x%2B%2BLs62nUGTQ812i9PbOtVZ7q%2BWH7tldpNTempPQgUByjvojIysgwg4k6kEmzJFEEPkPDtLFTVm9WtVbDPLBQjXJyrU%2FsR%2F7FjML7teQaKPkCP6BwmASZe5Nj46bJWz7V2Si0Kk9cu%2BL5bLMswhSqCNXjQubHMRiiPU%2BfdEoOIpVoJ4p%2Bv0cC9e82uMs5E%2BPzqbJFLA3wyU8LBuE0r%2F%2Fsva%2FqVivvDuwDT4h1gFUoRiLQZY5lnZSTICKVkelKWJM8vp3g0fVkzpplopH41K3Ck0oxrxeGn0bCp1nXVSBiubjxFTwNgI7dnUAYy3AoA87rh8voYQX%2FKWAtKyXVs%2BviMtsIn2FyMWsOoiE%2F6UjvPCiRYHmePHysIWqNLFvN9HiluHd%2F4r%2Bw1xro7tOvOiPbwhnFb3WdisPxHIERZidaMUgiUANuhyhbcvdmw8YVI1QYaEcX684ToYLXXEzGKve6VKRSl3qjTaQmr05JdnCyHBza7xAva%2Fi2ZUctEBQOklzZQjBDpU915s3B4gMtLMKjt2ckGOqUB8Ea%2FyKVdC5IGw1TiD9mzC37Fs4AyrDSP3aXakM%2BPBtXr%2Fhx86eBKM6AZu%2FHwz%2Fk5sZ5H7DzEW%2BKbVqppSRd6ZREo1kly5%2F%2BYhCZiF5BS%2Bip2rsxZJlJ9NDunRN42SSDN0%2FIPtt2pa4hRemr4M6NWFckfyw6tr%2FKZ1sudG9t6BDO63tVm4yZlTQOYDyEOOcnuy5eb%2FZXGddkOGbDjQachBY0J405f&X-Amz-Signature=2c286fd66b9dc41c651ca2c5fd1c77b1cdf22a461a243bbedb1975782146fa24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

