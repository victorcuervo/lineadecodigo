---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPZZ5M3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaWYuPyZdzkUSy9KzyMFIz08vPKHHIa5IQCVGw%2FzqQ5QIgCveOSVJabTrHsGYPqL91AFLIJlkT%2Flx091cNJ8wXO58qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG59lwQYPSNQWfhCSrcA8ORzBTb7FEsi81M0XslUt5klRK%2F9QsuG%2B87v6bhbeWyWoqjm7BzAQ46vlMiJkz8OQWynVN%2FvCf5%2Bigun%2FP3WqB%2BLuRMhki2AKq%2Bqq8FYu%2B1H%2FDcnGjv7uBTau2DbpXtNDp5mcEk%2BC%2FJ35vmeVxbHDRnq4aRR8g30f%2B8OxtT%2BGs9jNHxUj1ZNOOJUYU8zGnCzeQNpV1e7BzS%2FzaxOnMy5ACcTfy5JVnl4YX3BHWDFZ7vYAvvVAOT4u0LDZuG%2FRPY8a2D%2FbVZ4JYqAhE14yOvSrTYKZorQHVrpU2tx5t9N6hMMH%2FGBtpHkFpVMTfc%2FomXiGGif2jAnSChYihbrMxQgCDlMxqt0TOO0kMGLP06FNZ5Wsg0JGWaB%2BFbDnCj06OWDsaRwUPuO1nPn41OPtmALKJOvVcx6yryr7T0Hgu9FUK2mUSrdL4wakJSMUKSDsWR2i%2Bh87AE7746clRq3f0qybcvmzQlkaQraGpORr2yfbNkyoZ91HMADmU%2Bknd0FoDVXft38acI3JVx3a9w9A6HFINgWWJK1vU%2FYJUqFHzC6BY5qi%2Fgm0K1ZbpRu%2BifPCzxbteCoTqVNsxgKemFfDxtQBbWNE0O%2FF%2BaNCyOWY7u0p1KbSiKNkrsCEjl8uGqMJDu2ckGOqUBHWGDNx%2BLsDjFJ%2B5F%2BoJJt16n7NY10aLlbohcjs9kzKmMzBsuEzUUwTz6YDJELnPe%2BKkI1lHbein8Ih2BvtPZd33F43uiJolrIsWFT1UA1b8MPAP%2BuiJsfQfNgbnss4H2T4UnHAj%2B90I59VFj52tyboMFZdrG3JAAM1XBFxJe1tXVmpZz94KPfBmJlsI279K4Fn%2FEEi6i%2FK4xsEbjsKUF%2FenPokd6&X-Amz-Signature=a46d2d7e0f2b152f1797e781b6c313f07d0facb0abfc2175e4159f2e43760b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPZZ5M3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaWYuPyZdzkUSy9KzyMFIz08vPKHHIa5IQCVGw%2FzqQ5QIgCveOSVJabTrHsGYPqL91AFLIJlkT%2Flx091cNJ8wXO58qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG59lwQYPSNQWfhCSrcA8ORzBTb7FEsi81M0XslUt5klRK%2F9QsuG%2B87v6bhbeWyWoqjm7BzAQ46vlMiJkz8OQWynVN%2FvCf5%2Bigun%2FP3WqB%2BLuRMhki2AKq%2Bqq8FYu%2B1H%2FDcnGjv7uBTau2DbpXtNDp5mcEk%2BC%2FJ35vmeVxbHDRnq4aRR8g30f%2B8OxtT%2BGs9jNHxUj1ZNOOJUYU8zGnCzeQNpV1e7BzS%2FzaxOnMy5ACcTfy5JVnl4YX3BHWDFZ7vYAvvVAOT4u0LDZuG%2FRPY8a2D%2FbVZ4JYqAhE14yOvSrTYKZorQHVrpU2tx5t9N6hMMH%2FGBtpHkFpVMTfc%2FomXiGGif2jAnSChYihbrMxQgCDlMxqt0TOO0kMGLP06FNZ5Wsg0JGWaB%2BFbDnCj06OWDsaRwUPuO1nPn41OPtmALKJOvVcx6yryr7T0Hgu9FUK2mUSrdL4wakJSMUKSDsWR2i%2Bh87AE7746clRq3f0qybcvmzQlkaQraGpORr2yfbNkyoZ91HMADmU%2Bknd0FoDVXft38acI3JVx3a9w9A6HFINgWWJK1vU%2FYJUqFHzC6BY5qi%2Fgm0K1ZbpRu%2BifPCzxbteCoTqVNsxgKemFfDxtQBbWNE0O%2FF%2BaNCyOWY7u0p1KbSiKNkrsCEjl8uGqMJDu2ckGOqUBHWGDNx%2BLsDjFJ%2B5F%2BoJJt16n7NY10aLlbohcjs9kzKmMzBsuEzUUwTz6YDJELnPe%2BKkI1lHbein8Ih2BvtPZd33F43uiJolrIsWFT1UA1b8MPAP%2BuiJsfQfNgbnss4H2T4UnHAj%2B90I59VFj52tyboMFZdrG3JAAM1XBFxJe1tXVmpZz94KPfBmJlsI279K4Fn%2FEEi6i%2FK4xsEbjsKUF%2FenPokd6&X-Amz-Signature=c95ea1897a893418e52b78ad2c91a41681f17d6b057deedba0b97acd9cdbca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

