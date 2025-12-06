---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATUAKZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPxbzLkM%2BUKV4NL1q0Wisz8a2Jf9bDbV9mtcclRo3CwAiEA8nIZweI9547uk7xoLGAkVEjXiIqpoXydm8L7GdnMhcAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOFiFkvxTBYM8A7KNyrcA%2F7NgPrNMVCeP%2Fqxx%2BuBDx4VUyx6zk1ZslUwPDmgwYXiZPLvipYbxoMQLy0CSHVqZBVQN8AbRym0EfFktmARs9ONAVCZHMOOyW3JBjLWsGs2atLXeqtX6TiTs62IooZa4dcTNqh1Hur6ytPXbRlZZnP4Qmh3l3vGo6SsO5SRfHF5M4Ki5x1bkwS0%2BUyhKFx8i%2FUQ08G%2F2YVnboqDltd0dzfQXGfgMV8q8%2F20RxXNh6qTYAeXpHDKXj%2BFffMuxQ%2BMlxJtCsSDUQILmjwsFbc4DmU3xWd8rjmDQ6FkN4F6mL89M6IUMEh%2BHnKyomXNszUPPrFOkY96%2B4yCi4Gats0FryJ5Kopck1kEQcoUC%2FgKnoRRb2cTmRJtvuiGrRB%2B5TpT31HvreUZq37qs3h1Td%2FvEygrVAUrTuvs0ce3ivfQ8HmqUSR2Cj3tXLBz96XDtryHey9cWP1u7P3%2FQOB4a5V%2FGaNK9BSqTg%2B9jdJHk8A2xR1dSiyxBAWIzjTSrGbnZM5FMMQBT2aaTdlO88hMn%2BCz4GTy%2FEeecRezF3Ke470iGT0eZ4lfDvAtRQ037SGImsBaNUC4DYZNAt7YSisvauIqBEx5bttzkpF6ZhM2dMRLTmBStYpHuKVofbWtD0SSMInezskGOqUBVFvLie6%2BYkgRA3N2B7kOTOJ62OG8kpDYcnJGy5xz%2Fh2ZT4E2NwhhZaIazbBIi0ifwXxwAD4Qt8umepypIYjl3ZTDG4Nt4M8NZNhOQweQmcSVvfZOY6IGISnKWAN2W3G0HRNp%2B6h7Q8ET0h%2BA2muC2u%2Flz5wX6t4oa%2FghLXmhOkcaHKRS9Ea5a5wmQX9PTz2Vrh14X1cop8n0uqzzDb6bwLkiT%2B%2Bh&X-Amz-Signature=adc41fc1d1c81ea5420226d6b8868ba9a0aa415e470ef159466301777ed66c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATUAKZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPxbzLkM%2BUKV4NL1q0Wisz8a2Jf9bDbV9mtcclRo3CwAiEA8nIZweI9547uk7xoLGAkVEjXiIqpoXydm8L7GdnMhcAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOFiFkvxTBYM8A7KNyrcA%2F7NgPrNMVCeP%2Fqxx%2BuBDx4VUyx6zk1ZslUwPDmgwYXiZPLvipYbxoMQLy0CSHVqZBVQN8AbRym0EfFktmARs9ONAVCZHMOOyW3JBjLWsGs2atLXeqtX6TiTs62IooZa4dcTNqh1Hur6ytPXbRlZZnP4Qmh3l3vGo6SsO5SRfHF5M4Ki5x1bkwS0%2BUyhKFx8i%2FUQ08G%2F2YVnboqDltd0dzfQXGfgMV8q8%2F20RxXNh6qTYAeXpHDKXj%2BFffMuxQ%2BMlxJtCsSDUQILmjwsFbc4DmU3xWd8rjmDQ6FkN4F6mL89M6IUMEh%2BHnKyomXNszUPPrFOkY96%2B4yCi4Gats0FryJ5Kopck1kEQcoUC%2FgKnoRRb2cTmRJtvuiGrRB%2B5TpT31HvreUZq37qs3h1Td%2FvEygrVAUrTuvs0ce3ivfQ8HmqUSR2Cj3tXLBz96XDtryHey9cWP1u7P3%2FQOB4a5V%2FGaNK9BSqTg%2B9jdJHk8A2xR1dSiyxBAWIzjTSrGbnZM5FMMQBT2aaTdlO88hMn%2BCz4GTy%2FEeecRezF3Ke470iGT0eZ4lfDvAtRQ037SGImsBaNUC4DYZNAt7YSisvauIqBEx5bttzkpF6ZhM2dMRLTmBStYpHuKVofbWtD0SSMInezskGOqUBVFvLie6%2BYkgRA3N2B7kOTOJ62OG8kpDYcnJGy5xz%2Fh2ZT4E2NwhhZaIazbBIi0ifwXxwAD4Qt8umepypIYjl3ZTDG4Nt4M8NZNhOQweQmcSVvfZOY6IGISnKWAN2W3G0HRNp%2B6h7Q8ET0h%2BA2muC2u%2Flz5wX6t4oa%2FghLXmhOkcaHKRS9Ea5a5wmQX9PTz2Vrh14X1cop8n0uqzzDb6bwLkiT%2B%2Bh&X-Amz-Signature=f220862834fbdacccf70ab5718ec80a07d38310dc4212f5b54d2d3eb853f937a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

