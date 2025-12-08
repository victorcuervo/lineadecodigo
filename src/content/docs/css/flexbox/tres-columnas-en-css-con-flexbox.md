---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFWCECF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPMFYI0WF36CbtQYGpTlZQy4xMfH8poeFprhQ34OOUsAiBz4PRJvgWx%2Fke1Ahx3CA4O7ZcJZY03Cjm8OurbyQvNKSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFsMdzptNdc7ZKOZKtwD3wMfTlZ4HGvS%2BDXAXLJ8Gmik%2BF%2BzrMRBkZ7w4IlFG8ZtvttCDX5pz2WVx%2BT%2FSCUxMd0lxQcM69hKZdOOxdTciiYC2NpCMZ9Xy2ghJJC4mWhRxH58xxehZKFp4Ip3%2FnZx6qMRU7VsIpcClNwzELYSCrnqYr4PZoUp0%2Fl%2BNpjCcBHlO4OcdagqUUjjmJ888%2FXR4Aru4OcHcIr8qa9DSaleXTKUrgnKx14A%2F4bKb8PunA64w3YyAXNDSyZeyJqi6ZaRji%2BecHRHC1vACNOp3brpRcPVQpj4Wx7cj33KbDaWLzyITQcMztkwi%2FCAGYNrVxZJNMor0J6Jl7HmPjEZMdB277ZcnlclR8PnoS5%2BlU3LazE1uJBomRIifnjYbkGED3ozShG6YospBzrqvOZX3%2BZKw8%2BGPkzBmvgQAhzG1svc5zESIE08li2zqXQyuqoHZ%2FKSNIVfwn8LR2ocdlWtBtD6%2FTFpRYCxjw4kpa2OmZD2S%2FZj6yqfQC7Cmv7xzTCCImU4AZ29U8X3sBn%2BHjTFhnvwDhHhMNqmWTF5D3C46j09%2Fdm6EEo28gV14KGPpjOWNGhDN9MaTo95x5Wd4ssKKe1VN%2B2d%2BdOYAOKXbrNQTH9glOelXBQbYMBdHECWTCswkO7ZyQY6pgHtuVMT6JiwpVmwLQCFcV%2BQTqb%2BkakCxC9Tq%2Bfz08HvnBSCCdaoeaK8uFZ5NZw9mZ5tnVkTC0JsmAtjZunWB%2B%2FxLvmpJMoVLg9uArXjVLw37cQq3ApSvbF3rBvKUbSKvnjWghWcxZd7Eo%2FEDY8JKcmwHOP0wH0l%2FRpIWkkpzFL4pyFAEHJq3i6APMPF48XQiQJZp3aK8twSJKy8o9bbT9rMmqqwpdPi&X-Amz-Signature=7cf06a5aff30a050ad7b333e9994b43b6ae2fee713e9e58afc08eae74bc9ca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFWCECF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPMFYI0WF36CbtQYGpTlZQy4xMfH8poeFprhQ34OOUsAiBz4PRJvgWx%2Fke1Ahx3CA4O7ZcJZY03Cjm8OurbyQvNKSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFsMdzptNdc7ZKOZKtwD3wMfTlZ4HGvS%2BDXAXLJ8Gmik%2BF%2BzrMRBkZ7w4IlFG8ZtvttCDX5pz2WVx%2BT%2FSCUxMd0lxQcM69hKZdOOxdTciiYC2NpCMZ9Xy2ghJJC4mWhRxH58xxehZKFp4Ip3%2FnZx6qMRU7VsIpcClNwzELYSCrnqYr4PZoUp0%2Fl%2BNpjCcBHlO4OcdagqUUjjmJ888%2FXR4Aru4OcHcIr8qa9DSaleXTKUrgnKx14A%2F4bKb8PunA64w3YyAXNDSyZeyJqi6ZaRji%2BecHRHC1vACNOp3brpRcPVQpj4Wx7cj33KbDaWLzyITQcMztkwi%2FCAGYNrVxZJNMor0J6Jl7HmPjEZMdB277ZcnlclR8PnoS5%2BlU3LazE1uJBomRIifnjYbkGED3ozShG6YospBzrqvOZX3%2BZKw8%2BGPkzBmvgQAhzG1svc5zESIE08li2zqXQyuqoHZ%2FKSNIVfwn8LR2ocdlWtBtD6%2FTFpRYCxjw4kpa2OmZD2S%2FZj6yqfQC7Cmv7xzTCCImU4AZ29U8X3sBn%2BHjTFhnvwDhHhMNqmWTF5D3C46j09%2Fdm6EEo28gV14KGPpjOWNGhDN9MaTo95x5Wd4ssKKe1VN%2B2d%2BdOYAOKXbrNQTH9glOelXBQbYMBdHECWTCswkO7ZyQY6pgHtuVMT6JiwpVmwLQCFcV%2BQTqb%2BkakCxC9Tq%2Bfz08HvnBSCCdaoeaK8uFZ5NZw9mZ5tnVkTC0JsmAtjZunWB%2B%2FxLvmpJMoVLg9uArXjVLw37cQq3ApSvbF3rBvKUbSKvnjWghWcxZd7Eo%2FEDY8JKcmwHOP0wH0l%2FRpIWkkpzFL4pyFAEHJq3i6APMPF48XQiQJZp3aK8twSJKy8o9bbT9rMmqqwpdPi&X-Amz-Signature=6f77604e4b3c4a63d7ec1b634795ea85b0f486cc46b3ec24799f7741b0711d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

