---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPUKVCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqrIbJ3nxil8%2Fs%2BQVJeLNELxXbdBB973cMKLWNgDqK9AiBFOrOjUkGDfEiH3oxTU85uWD55rKnR5wp8ujytKlk0nCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMQOll4PK7gg7%2BAVuzKtwDvfOX7U7Q8fuwEspdUjBV0clEIbZvOKHxDyN0p%2BN8rjzZ4Bmwa5GssR26dG6esCbfbv%2B8jChmcfAUBlpj%2BDiGfiZ6hTufjsA8Cq7WgRUoXQ0r7aRiMn4jx%2FSCFi7IdLV70B0xOtRn8M0KX3990d9S1imCfkmKBTn07wTQ7KrJzyaKKB66muoY1UsByV92vx6Z0%2B0%2BLjd2pmyYU7rohrGUdBP1uqzRJdionYjrcrQ%2FfywgRnOlbz4R1WxmxDqWm2GL3WyAJ%2B6CxsBStt1ooL3wjTyZoQPhJ5Fczm%2FKAR0c%2Bbu89S86zLsszPkCK1SRefGZlni7l4ocvec6jGU4n1uYuU0OGCOgL6PrLCUbbtI3yY%2FAr3ZNjneRX7fVmxEkh1D%2B%2BfJT%2BC8LDWCnk8LkAiJjYvf3Nini%2F54qAihMZQ5rS9U1HI7Y54K6I5QJOBThRwLJ8NgSKAp9U8tgsLszhnpokL%2BgEHo00v%2BrhCWZkTfIl6GjEl0gl5bMZV1xihCgah8j47pMJxRDWFvD%2BzzKB7cgBJp%2FHsqNYfOBuiZyJGEvbu3vJ9oGcymOvIfK4yc2bTfdxkjYCE71DTP3Ku%2F7yuiyu5zSnZIf86ykscrS4tBqfqa%2BYDCFhGH2RJF91p0wkP3OyQY6pgHrzfVZWiphtAN1v1R5VHfjUFwddscaRu6gacq17TuIl3ZQSJL4mqKsShxr7x8ahDg4MZmvhJBm0MF0UV%2BbUctHtyE4BAMUPBmgUE1x5vgXax%2Frh4e87SIaP71fAGgTMD9UzqdrHy%2Fij1ThZRE4oyC%2FdJMZbjCDlxZfDxBdaIIqpZ4fZZm%2FD5Z0noarb6%2FExnOrmg5R2k8QFNmrY9J3%2BCFogIhjyZsR&X-Amz-Signature=9ba46cb541f15098fc08afc01fb60052ea295479f4c4cb2a8a4483741b11ef49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPUKVCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqrIbJ3nxil8%2Fs%2BQVJeLNELxXbdBB973cMKLWNgDqK9AiBFOrOjUkGDfEiH3oxTU85uWD55rKnR5wp8ujytKlk0nCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMQOll4PK7gg7%2BAVuzKtwDvfOX7U7Q8fuwEspdUjBV0clEIbZvOKHxDyN0p%2BN8rjzZ4Bmwa5GssR26dG6esCbfbv%2B8jChmcfAUBlpj%2BDiGfiZ6hTufjsA8Cq7WgRUoXQ0r7aRiMn4jx%2FSCFi7IdLV70B0xOtRn8M0KX3990d9S1imCfkmKBTn07wTQ7KrJzyaKKB66muoY1UsByV92vx6Z0%2B0%2BLjd2pmyYU7rohrGUdBP1uqzRJdionYjrcrQ%2FfywgRnOlbz4R1WxmxDqWm2GL3WyAJ%2B6CxsBStt1ooL3wjTyZoQPhJ5Fczm%2FKAR0c%2Bbu89S86zLsszPkCK1SRefGZlni7l4ocvec6jGU4n1uYuU0OGCOgL6PrLCUbbtI3yY%2FAr3ZNjneRX7fVmxEkh1D%2B%2BfJT%2BC8LDWCnk8LkAiJjYvf3Nini%2F54qAihMZQ5rS9U1HI7Y54K6I5QJOBThRwLJ8NgSKAp9U8tgsLszhnpokL%2BgEHo00v%2BrhCWZkTfIl6GjEl0gl5bMZV1xihCgah8j47pMJxRDWFvD%2BzzKB7cgBJp%2FHsqNYfOBuiZyJGEvbu3vJ9oGcymOvIfK4yc2bTfdxkjYCE71DTP3Ku%2F7yuiyu5zSnZIf86ykscrS4tBqfqa%2BYDCFhGH2RJF91p0wkP3OyQY6pgHrzfVZWiphtAN1v1R5VHfjUFwddscaRu6gacq17TuIl3ZQSJL4mqKsShxr7x8ahDg4MZmvhJBm0MF0UV%2BbUctHtyE4BAMUPBmgUE1x5vgXax%2Frh4e87SIaP71fAGgTMD9UzqdrHy%2Fij1ThZRE4oyC%2FdJMZbjCDlxZfDxBdaIIqpZ4fZZm%2FD5Z0noarb6%2FExnOrmg5R2k8QFNmrY9J3%2BCFogIhjyZsR&X-Amz-Signature=93e77a6cc98c81fcbd6ba99443a106e1a10a7fb0c8a5db92e6abd9ba118dbf49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

