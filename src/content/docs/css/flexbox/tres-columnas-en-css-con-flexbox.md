---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGN66NC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUmJ9jevUGkofkDTTEbBjP5Y%2FBvg9DU0h1IXdWcCWSAiEA4%2Bw7n%2FPpDprCBpghQ6%2F32oqbNlr%2F3LFK8C3%2BgohHky0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BzLAvmDARQrLHByrcA3qCjfoJgR7Nfvws%2FBo4Yjaf68mHJRf%2FhZO7w7K%2B75b4fGRLISWTPepj%2FfqGc%2FgWYBXTnkAA%2BGCy1HzflYmmScrhVhEAMSGpZojhal2CbvGEm%2FZdDFUHCClD5wxGXtqeN%2BUU%2Bw860X1MFR%2B5C3y4NpN4AU9GpneBQ1XuTpBRoUr%2FuyOiNE%2FOTh5SJzobtoB%2FS%2BHvGaj6CIxPNCqz8CdqvE4bFwrVoOt%2BepNIPm2x3lmvTJYfL4XWbOHbUapYw%2F9cUavjZXsy0ylKf271UuDdCGMqfsKhJbrh8OPEihUpJRE1HdifTVQDNyO8sASkSETzknwx7rfEaederU0UIkZG%2FQciqZ1gzb16s%2BwI2jg5pJ6LTLy75x0RKVkbU4vqejIJ6rlHHqXrMRb9uBpTaifT%2FVzlutAzFBDfOhrbKtERaIwc12RH6QIj0r3ZiPfDYRgT1a65qHs6IYic%2FP8CCHuFg9uOKsrGdK4BMUrkjVMfkfYftwfjWKTmJtt4papRY%2FlvIVWMh6i0GGl2Oya2Fpycuc9r0eK1vgJPn12Z2tI4Xm4nBvqNVrVSbdqAOYhEiyA0cRFBoy3uQU8647JT7zYugnDXWYg%2FtBCgS3C41CWHktt8mluqjX5Q3e827NneML6a1ckGOqUBA7mZVoUfGi2Nb4D2DyH8tTRQJAsqBeb7azr8xML82JBZ%2Bu9jICSA6sOqReFluQiZpS3s3W6r%2FGXtx1h%2BcjioTmRApsS2DbIdxs2HYHQ7lF2a0hZYSng5q5oeA8JRzVpxFy6JcbeqUO1yJDrbsVeMOqA%2FkrtJZ5wZgscuhzKJIcIU6V2sHaQVGECZuJn21iBlRJPN4SZ%2FZw49sghpS0KcHaTeAK9D&X-Amz-Signature=9f955acd717383dd4e728972ca71fdf8e4339454b800b05f815f83e432eab5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGN66NC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUmJ9jevUGkofkDTTEbBjP5Y%2FBvg9DU0h1IXdWcCWSAiEA4%2Bw7n%2FPpDprCBpghQ6%2F32oqbNlr%2F3LFK8C3%2BgohHky0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BzLAvmDARQrLHByrcA3qCjfoJgR7Nfvws%2FBo4Yjaf68mHJRf%2FhZO7w7K%2B75b4fGRLISWTPepj%2FfqGc%2FgWYBXTnkAA%2BGCy1HzflYmmScrhVhEAMSGpZojhal2CbvGEm%2FZdDFUHCClD5wxGXtqeN%2BUU%2Bw860X1MFR%2B5C3y4NpN4AU9GpneBQ1XuTpBRoUr%2FuyOiNE%2FOTh5SJzobtoB%2FS%2BHvGaj6CIxPNCqz8CdqvE4bFwrVoOt%2BepNIPm2x3lmvTJYfL4XWbOHbUapYw%2F9cUavjZXsy0ylKf271UuDdCGMqfsKhJbrh8OPEihUpJRE1HdifTVQDNyO8sASkSETzknwx7rfEaederU0UIkZG%2FQciqZ1gzb16s%2BwI2jg5pJ6LTLy75x0RKVkbU4vqejIJ6rlHHqXrMRb9uBpTaifT%2FVzlutAzFBDfOhrbKtERaIwc12RH6QIj0r3ZiPfDYRgT1a65qHs6IYic%2FP8CCHuFg9uOKsrGdK4BMUrkjVMfkfYftwfjWKTmJtt4papRY%2FlvIVWMh6i0GGl2Oya2Fpycuc9r0eK1vgJPn12Z2tI4Xm4nBvqNVrVSbdqAOYhEiyA0cRFBoy3uQU8647JT7zYugnDXWYg%2FtBCgS3C41CWHktt8mluqjX5Q3e827NneML6a1ckGOqUBA7mZVoUfGi2Nb4D2DyH8tTRQJAsqBeb7azr8xML82JBZ%2Bu9jICSA6sOqReFluQiZpS3s3W6r%2FGXtx1h%2BcjioTmRApsS2DbIdxs2HYHQ7lF2a0hZYSng5q5oeA8JRzVpxFy6JcbeqUO1yJDrbsVeMOqA%2FkrtJZ5wZgscuhzKJIcIU6V2sHaQVGECZuJn21iBlRJPN4SZ%2FZw49sghpS0KcHaTeAK9D&X-Amz-Signature=ab801a2e58c11cab40b25e8c2d22ee3fa3d05a8258548ca981e562bf45d3079a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

