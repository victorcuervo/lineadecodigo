---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNTJK63%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM55h6xEwO5JK%2BXya4wkzLWqVIBpT%2FvdHAMWVIRZOzaAiA93fQ56AFUIBQqktHEpHE0L6Z9o6WETLK0SFUT1RGLoyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkdkMcpIe66aA6YC0KtwD8HVciQqaTyxKhNSeUG5g3%2FBeGHwU0OACQk%2BwmioeuiY7BV4qi5%2F%2FsjutSmsTYWHcM6uhmiL54rS4iRDa%2BiLDersGRgWu0pPGsdXwTZYpofvRJMgneT%2F3EJ%2F1F94LQBOghOfbgBunFmHajvigjT0%2BtICdCgPvOwfPsSmCxoAXfZypgVLfkaGDv5IcNZyvhOmUzS2RiMK9RI3k7pFAVADc7tA6X8QZVpi7gSzUmyXmdA6EhYHE8GHsNaJAur381GYvrrCra7%2FGkjxRsMdmip5tFjiyJlN%2B%2BYcvQDeTg6qRcBevvLdB3GXHEt%2Fv2ppgiybO%2FAMhTiRG9RrOLPTLlRwb686NfwEh3hyTr056AEU88sGWQ32WPfMJrW7zVUh2v3sYhQc%2FKNod6zuko87MuUL8d510MUpvno819tFbj7Tj6QNerebBsdiPO%2FMmIS9IoRt0h9gYcOZr2T9HYh2e0RNkxk4rn%2B2EKbOuAsvOM%2BAF3%2F07dBqOU2XCLAFBUN0u2IWObfBDUZYvjLzgcRF9SArEDBvmtyRZeQeExauZ%2BmeGzNmt8x3Yew57P1Ot6iuZIzdMxx9NWTjgrkVnc1LUL4HRz6NusOGwgZqdJigPIDRQZ5hqRZn71ytSSEfiKVYw9MfRyQY6pgFBwYFOxE%2FWEw1kf4KZfGEv2AM%2BJiVr8T0TFaY%2FkwmHb90N4B5Di9Q6Ekld0I2jRkCCwOzyOfRTx5Eyqo44%2B11wHD2uAyhza7TquUi%2FytInfQ5EhVOeNdhdB7GFcy235fqsd6GjzvIA7WRyDbJb%2Bwv4yUoLbbzTaEJiDtZLDois0Wx5zZox%2F0E4%2B0TZFewS6r%2BH66TRZ7zHYJ3XSzse2uPu84h7eKTM&X-Amz-Signature=36718dcb5eb7b9c70869259230d68b8370732d4852dff9689e4cbf88c257f77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNTJK63%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM55h6xEwO5JK%2BXya4wkzLWqVIBpT%2FvdHAMWVIRZOzaAiA93fQ56AFUIBQqktHEpHE0L6Z9o6WETLK0SFUT1RGLoyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkdkMcpIe66aA6YC0KtwD8HVciQqaTyxKhNSeUG5g3%2FBeGHwU0OACQk%2BwmioeuiY7BV4qi5%2F%2FsjutSmsTYWHcM6uhmiL54rS4iRDa%2BiLDersGRgWu0pPGsdXwTZYpofvRJMgneT%2F3EJ%2F1F94LQBOghOfbgBunFmHajvigjT0%2BtICdCgPvOwfPsSmCxoAXfZypgVLfkaGDv5IcNZyvhOmUzS2RiMK9RI3k7pFAVADc7tA6X8QZVpi7gSzUmyXmdA6EhYHE8GHsNaJAur381GYvrrCra7%2FGkjxRsMdmip5tFjiyJlN%2B%2BYcvQDeTg6qRcBevvLdB3GXHEt%2Fv2ppgiybO%2FAMhTiRG9RrOLPTLlRwb686NfwEh3hyTr056AEU88sGWQ32WPfMJrW7zVUh2v3sYhQc%2FKNod6zuko87MuUL8d510MUpvno819tFbj7Tj6QNerebBsdiPO%2FMmIS9IoRt0h9gYcOZr2T9HYh2e0RNkxk4rn%2B2EKbOuAsvOM%2BAF3%2F07dBqOU2XCLAFBUN0u2IWObfBDUZYvjLzgcRF9SArEDBvmtyRZeQeExauZ%2BmeGzNmt8x3Yew57P1Ot6iuZIzdMxx9NWTjgrkVnc1LUL4HRz6NusOGwgZqdJigPIDRQZ5hqRZn71ytSSEfiKVYw9MfRyQY6pgFBwYFOxE%2FWEw1kf4KZfGEv2AM%2BJiVr8T0TFaY%2FkwmHb90N4B5Di9Q6Ekld0I2jRkCCwOzyOfRTx5Eyqo44%2B11wHD2uAyhza7TquUi%2FytInfQ5EhVOeNdhdB7GFcy235fqsd6GjzvIA7WRyDbJb%2Bwv4yUoLbbzTaEJiDtZLDois0Wx5zZox%2F0E4%2B0TZFewS6r%2BH66TRZ7zHYJ3XSzse2uPu84h7eKTM&X-Amz-Signature=e9003aae4b45b201183ed96a027e9ee5c13e501c0ce913dc1c03a72847cfee9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

