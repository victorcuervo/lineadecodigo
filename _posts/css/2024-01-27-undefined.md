---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7AZZA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIG1Gj%2FoP9dyKI2lyMmBjzR1gXq1B4iowAhCBEwMO69ExAiEAmJKONTtU%2BxQ9ossBKtTirNxifu%2FHc1uFGXB3vFC9JaEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNtB4D6Od9vmEKNF1CrcA13%2B84vkF5hp9oM0EERqLlgLa8Am3te8ZYvp7%2FFOG81R5VX%2FC4FUD%2Fu0pILTXHMaAtt7TT7lPSPZRy7n%2F%2BOVADbOCEGOW7eMBMkHHDUmKX2azCsG36LEaehgqLBquqlx%2BIXDslSV1dmD4nGV%2F1HqWjFDCwpy%2FDnhC%2Fp9nfkAFSco%2BUn15iF7CKRbiD%2ByRrI9806u9%2BeEA%2BUNPNVoi3NcBnZ8SUSE%2BDvoC0Wsl8lrljPgB8RYOU2OeLroESG2OkqH239MmR3GwaDh95lv39ESrzKEdBJippQBJ7cNAUCleRPGFdCZq9O2lkcelzIbmkvExBlu%2F0H4hRgBgZKMbRY8YWte5DNHXF7UeLDOYMOa%2BnClVwelx179GSejSKJGLBHXWFS2EcBYSjd1uZmjywZ1r6hbSw6GRq%2FWtOWV8TeRRoiQpkYH7IM9KR2RnmRtCbPSV90Cc0XnUoBEW6z5EqOnyNo0RfBH6l8BnYMAgj8rqc21oi%2FzqG%2FTkfaJZ1ReMexTk2nSiAgzlqoC5TWAmtQcpbdgxnVRSBcVm6pFYocLWeA3wGlEU9SbrIqg%2Br2dorOzkPWOg1OeJphUTN9sdwH22yx6AKg1WCnjKoZ1HZEDFBMwUnu1tT9FmFfT9E5fMLGSwMkGOqUBiWKXjDwO2smYNNZ5FfgJULJPqixSxfvFDVm2%2B9Q6LTFftfczCB%2F4BtNPvTEPJZlU%2F92ly1uKgToxqWLiQgClSosB6Lf1megSZXJBjBJ9L0VsI08yyvcB5AQojguDmp2svBWEambJYHm9l%2FbPkDgEMKCxbtQgEOQU33Z3ucjTRgC%2BhoSo2XUMEGIYeymC3oa0sKXa33xHBaj31i0BKtSBFxTQZPYT&X-Amz-Signature=13b22c55b1e622a64670a5e1823e93361d94a6802d47e6e8cfa942cc01b21d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7AZZA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIG1Gj%2FoP9dyKI2lyMmBjzR1gXq1B4iowAhCBEwMO69ExAiEAmJKONTtU%2BxQ9ossBKtTirNxifu%2FHc1uFGXB3vFC9JaEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNtB4D6Od9vmEKNF1CrcA13%2B84vkF5hp9oM0EERqLlgLa8Am3te8ZYvp7%2FFOG81R5VX%2FC4FUD%2Fu0pILTXHMaAtt7TT7lPSPZRy7n%2F%2BOVADbOCEGOW7eMBMkHHDUmKX2azCsG36LEaehgqLBquqlx%2BIXDslSV1dmD4nGV%2F1HqWjFDCwpy%2FDnhC%2Fp9nfkAFSco%2BUn15iF7CKRbiD%2ByRrI9806u9%2BeEA%2BUNPNVoi3NcBnZ8SUSE%2BDvoC0Wsl8lrljPgB8RYOU2OeLroESG2OkqH239MmR3GwaDh95lv39ESrzKEdBJippQBJ7cNAUCleRPGFdCZq9O2lkcelzIbmkvExBlu%2F0H4hRgBgZKMbRY8YWte5DNHXF7UeLDOYMOa%2BnClVwelx179GSejSKJGLBHXWFS2EcBYSjd1uZmjywZ1r6hbSw6GRq%2FWtOWV8TeRRoiQpkYH7IM9KR2RnmRtCbPSV90Cc0XnUoBEW6z5EqOnyNo0RfBH6l8BnYMAgj8rqc21oi%2FzqG%2FTkfaJZ1ReMexTk2nSiAgzlqoC5TWAmtQcpbdgxnVRSBcVm6pFYocLWeA3wGlEU9SbrIqg%2Br2dorOzkPWOg1OeJphUTN9sdwH22yx6AKg1WCnjKoZ1HZEDFBMwUnu1tT9FmFfT9E5fMLGSwMkGOqUBiWKXjDwO2smYNNZ5FfgJULJPqixSxfvFDVm2%2B9Q6LTFftfczCB%2F4BtNPvTEPJZlU%2F92ly1uKgToxqWLiQgClSosB6Lf1megSZXJBjBJ9L0VsI08yyvcB5AQojguDmp2svBWEambJYHm9l%2FbPkDgEMKCxbtQgEOQU33Z3ucjTRgC%2BhoSo2XUMEGIYeymC3oa0sKXa33xHBaj31i0BKtSBFxTQZPYT&X-Amz-Signature=c341bfb78d7fd20ed2e7e5e1c0dba1d08ac9268ad8275c0f61fee3b907d9d0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

