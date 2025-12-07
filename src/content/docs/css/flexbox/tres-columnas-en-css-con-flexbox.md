---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBPE3SM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxKk%2F8Ck%2FZgSo%2BEjRKEliidiV0pCOU0Z%2BlBlqcxsxmwIhAJjAuNmsl2W4rZmyAS3M97DBke1E4Gd9sMSErJ8nhysjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ3VTDToFyJLXVG6gq3APULXOzqu36wSAWf4UX2v3lcOJ7WdKCG4xKKp901ejt2rXYuNFTF18VLuwG9OaIUqqMwbGLeZMLZJ6i1OGb1hDk2Kn8xUtvdszOY9iYiXHjLsowsvBSDdtVyy%2BplFVzlNsWkE19ojzFkz%2B8kxc85vQ6oBS%2FPc12m8nyxmjZ89oe%2BjSb%2BkQVkrMBs0byuywUi1a9S5rIY2h1dxBh98JfgIhYkiC3vh2WmOr43FN7HhUXVg9MQjVOwLM%2FAIzuwCHzABdm%2Bvt%2BSB9ycOxQ8%2FulH7llxWBxwpv3%2Bi4NIJrxJoC7SkZIYAha3HOKGOZbfNfD%2FKb8DCKl%2BlIZ0voXrc7hv%2FlBODQuBD9x0XkIWeZFOTDO1j9DWJ3i8NdC7X6ccywYPAzSnkzZLppFWTFlWBq0Zf4i1ulhbxMmUNALwRrNIs9l5fYLN5wsZxIzdxJjgwaiC5OjC%2Bv7nghum8nHJOQxoZgqlrO7vluz3OTmkH1kJVNyHb3DdQRZnwqSsKiiNHnrBnphCDj5BEyberLRsqFKQfCv4u6JdncMcv9a7UXSf3O%2BA7Y%2BeA9jrkl0nrWxsSE68LyfMJ09dW3M1Zh1LOn7eqw01bhpnrBJyHt1owQ47CgqAHR9xg4DEJ%2FfuglJ2DDymtXJBjqkAXlWXSMMhQjPKmhP9xCNRk0IiZrAAbjWgyHf7bwgATSDBirrRrPY83FsaZXWcgarpIjIDRa50jzsrNJNvvdDhKaP6qwOL8HzyEIXfr4mR%2Fn1j1SOhuhkC3TrB56Wc52rA%2FUYrFfAteMcp%2BanBQqjJbGEvr83h7c8Oj%2BWGju0CmIYE5LtQoLkBIr8k7kzfiMhpqvVOMLgArwi78Okpsn2yrmaEpM2&X-Amz-Signature=bf53028776962534ae09da74fedbc4835ed5f355b75af1637408a9469cf1ccfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBPE3SM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxKk%2F8Ck%2FZgSo%2BEjRKEliidiV0pCOU0Z%2BlBlqcxsxmwIhAJjAuNmsl2W4rZmyAS3M97DBke1E4Gd9sMSErJ8nhysjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ3VTDToFyJLXVG6gq3APULXOzqu36wSAWf4UX2v3lcOJ7WdKCG4xKKp901ejt2rXYuNFTF18VLuwG9OaIUqqMwbGLeZMLZJ6i1OGb1hDk2Kn8xUtvdszOY9iYiXHjLsowsvBSDdtVyy%2BplFVzlNsWkE19ojzFkz%2B8kxc85vQ6oBS%2FPc12m8nyxmjZ89oe%2BjSb%2BkQVkrMBs0byuywUi1a9S5rIY2h1dxBh98JfgIhYkiC3vh2WmOr43FN7HhUXVg9MQjVOwLM%2FAIzuwCHzABdm%2Bvt%2BSB9ycOxQ8%2FulH7llxWBxwpv3%2Bi4NIJrxJoC7SkZIYAha3HOKGOZbfNfD%2FKb8DCKl%2BlIZ0voXrc7hv%2FlBODQuBD9x0XkIWeZFOTDO1j9DWJ3i8NdC7X6ccywYPAzSnkzZLppFWTFlWBq0Zf4i1ulhbxMmUNALwRrNIs9l5fYLN5wsZxIzdxJjgwaiC5OjC%2Bv7nghum8nHJOQxoZgqlrO7vluz3OTmkH1kJVNyHb3DdQRZnwqSsKiiNHnrBnphCDj5BEyberLRsqFKQfCv4u6JdncMcv9a7UXSf3O%2BA7Y%2BeA9jrkl0nrWxsSE68LyfMJ09dW3M1Zh1LOn7eqw01bhpnrBJyHt1owQ47CgqAHR9xg4DEJ%2FfuglJ2DDymtXJBjqkAXlWXSMMhQjPKmhP9xCNRk0IiZrAAbjWgyHf7bwgATSDBirrRrPY83FsaZXWcgarpIjIDRa50jzsrNJNvvdDhKaP6qwOL8HzyEIXfr4mR%2Fn1j1SOhuhkC3TrB56Wc52rA%2FUYrFfAteMcp%2BanBQqjJbGEvr83h7c8Oj%2BWGju0CmIYE5LtQoLkBIr8k7kzfiMhpqvVOMLgArwi78Okpsn2yrmaEpM2&X-Amz-Signature=a3b5759c218babb6b807a11d2771ba05c8753b572af3c4806bf2f9a6603d810e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

