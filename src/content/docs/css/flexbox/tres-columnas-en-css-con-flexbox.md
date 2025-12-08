---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2ZXXDU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEudcm0LscxB4GVcJBtgm5HNrLvGt6tfiXxKyyAg4yDAIgeMgnU8xtNDQtkRBGWVfDuqVi6hkVwJKqVNqvDCqj5LQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eER6tje3yuMWRircA0VNXssAcEP98DvUS8yPkaetYOC%2F8B9%2B01%2BCK1O8J8%2B%2F0t8xHZyFUG8JQ1ad5yP93lofREUUavcR0prcnxlNguc%2FWKqLM0n%2Frs58Tbrwccf%2FFjZCfvKXAe3enuOIaZni4tIvw3nt0jAu%2FYLGiXtyF2MY5OftK90CMrhJqVt4LQiMDTz4qADiQV2DE7CzzxURKYpSzR%2FFONoeya5l8iJZJFHhZy82CbWE8kOqdlXj5W%2Bgt7matnJfx%2BypAGvBU9jchn4YyANn3AqY1jF43wEDsS70rkvD1wM%2BxM%2FWDc4t%2B630MCcJvW37oecIn%2FWjPkexRc%2F8m3%2BXUGQ10VrbYMtIX0ZIW%2FDfnQ0HGqnh%2FyPo9%2FCBjO89m%2BQkveLMwGI5YuKrpoe4EHyUcG13Ypz62TUPpgUr3g4n6HQ0ry1mA7S1vyoPk3fPwjxKW0CGDWrME9fVa7UxPDwj5yLOTcOeplFmE7r3xhB%2FHbF5uC7%2F1t61FYwovn0S0XmaRgFJkYvhFDY052sPXQjlMovOU4Umh2EnGMV0StCkSrZngsffCV4QITbJNiGYOSjRKgoL2sGgYfQhP43bv2ORDpuTZ1El%2B4X9T4zUG%2Br1qU8eaB4tNXdpQhsqENj9EmE0JDC%2F0cx9MJ%2Fv2MkGOqUBb%2FUn77uYDL0dYU%2BO39PJ1HaQyGaAVD3jmfiH%2B%2Bc23u%2FisihCvcVTvi9LQn9Gj0v6okTL0JDXN9Rj%2FCQM8e1tck5zI5dBBH%2BUDQrF7UhemrLCDtOF%2BCrsr4gCNQrSxv14UJEzGeei6dboMeo5Bkw%2FdEi%2BYd7%2Foh5FqawATrgr5pOUZnZCOG8jlKWCfhqDK95Ec184GBG40f63M9G%2BZB0ZTqAa2hLT&X-Amz-Signature=840174d28f5f417a1af02686424207f03d321406442ad772bc6b228186dbccd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2ZXXDU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEudcm0LscxB4GVcJBtgm5HNrLvGt6tfiXxKyyAg4yDAIgeMgnU8xtNDQtkRBGWVfDuqVi6hkVwJKqVNqvDCqj5LQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eER6tje3yuMWRircA0VNXssAcEP98DvUS8yPkaetYOC%2F8B9%2B01%2BCK1O8J8%2B%2F0t8xHZyFUG8JQ1ad5yP93lofREUUavcR0prcnxlNguc%2FWKqLM0n%2Frs58Tbrwccf%2FFjZCfvKXAe3enuOIaZni4tIvw3nt0jAu%2FYLGiXtyF2MY5OftK90CMrhJqVt4LQiMDTz4qADiQV2DE7CzzxURKYpSzR%2FFONoeya5l8iJZJFHhZy82CbWE8kOqdlXj5W%2Bgt7matnJfx%2BypAGvBU9jchn4YyANn3AqY1jF43wEDsS70rkvD1wM%2BxM%2FWDc4t%2B630MCcJvW37oecIn%2FWjPkexRc%2F8m3%2BXUGQ10VrbYMtIX0ZIW%2FDfnQ0HGqnh%2FyPo9%2FCBjO89m%2BQkveLMwGI5YuKrpoe4EHyUcG13Ypz62TUPpgUr3g4n6HQ0ry1mA7S1vyoPk3fPwjxKW0CGDWrME9fVa7UxPDwj5yLOTcOeplFmE7r3xhB%2FHbF5uC7%2F1t61FYwovn0S0XmaRgFJkYvhFDY052sPXQjlMovOU4Umh2EnGMV0StCkSrZngsffCV4QITbJNiGYOSjRKgoL2sGgYfQhP43bv2ORDpuTZ1El%2B4X9T4zUG%2Br1qU8eaB4tNXdpQhsqENj9EmE0JDC%2F0cx9MJ%2Fv2MkGOqUBb%2FUn77uYDL0dYU%2BO39PJ1HaQyGaAVD3jmfiH%2B%2Bc23u%2FisihCvcVTvi9LQn9Gj0v6okTL0JDXN9Rj%2FCQM8e1tck5zI5dBBH%2BUDQrF7UhemrLCDtOF%2BCrsr4gCNQrSxv14UJEzGeei6dboMeo5Bkw%2FdEi%2BYd7%2Foh5FqawATrgr5pOUZnZCOG8jlKWCfhqDK95Ec184GBG40f63M9G%2BZB0ZTqAa2hLT&X-Amz-Signature=b1765bfbc5b6b7c3ae94c9f878ab06df7b072f626a6be6acf18ef384ba128a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

