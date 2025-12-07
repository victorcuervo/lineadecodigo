---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF6MNIX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bEfP9nvAuuA1IBQKUxDF3dZQLtbhzrg8GjmjK5%2BkAAIgCWKkJuFxm%2FRfumRraxwbm2x14NKtvReyr7NVpL64eUEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQcFWDlZ%2BRCnm%2BO3SrcA00CPvizxuxTmf%2BttV71SrNGtMi7R8eEVDIPINheM7FaNE8Vu%2FO2h2lQw%2BBuUc2C06NArhQP5yg8RfgNm%2FxxqYGamkdoyLpnKQbU2umudZu6zgVVumcphrdzUTKWrJdJjmjXHyEO0%2FIVmYK3i789ujpjrbJR3xA2oZYWURmDO9d5rHK%2ByGSxnK%2F4xF%2B2fi0OAxzA7mt3AGEAheaJ%2Fy7etSYUbOFPohkgySdmOO%2Fs%2F%2B26m9C0xl6ASSu1dhSBe6IGQ1EEScsG8bQdkvi3XRDBTUnFu09CyzDA%2FPLuqib%2BKBTs1n6E%2BJ5DZZutEZeRQ82YgP%2BXGskH5V7%2BHXcH4L6bCLqlcXshd4VP9DvWXHaHVJcim01snpf86LIuhnDNtUGaOwRL2qbZLe1HkMrkr2gdZUIwVuFlJNVf6fbUdQ0Gl0iMGppZdu5wpfvHiKRIam5RTzZcQWs1hrToqavA1TAPzx1CUCQeSpueT7jG1ls9hs0ZRxdU2WtYZBzUUVF%2FDL%2BxrmrE1CxT12lyLwa0n7kKYsHnWU9p1B10gLskw%2BfigrxhdRsh%2BiSMmS7zcRoybyC3XcgSYMWVFMcJ2C4ae%2FjAMr8M3WJcESTnFQtiOvtHJ%2BwV1J%2BxFlEMN7EH6oqmMJeZ1ckGOqUBJQKdx%2Fq1HSGdeW%2F6wugNAzCaa9dIhVPSe%2BY7e3dax88EOMB%2BrdrvHo7niEXuhOdjkOsk6lHHMCSMzQd9QoETmjxjM9GWUyQo%2FGD7iiJU9MhiQNnyf%2B0C95TGituTQy09gBBRhjXnE7ByGW4nlCu8dCwFFDdbxlknG9%2BqnWU3SCe%2FZ7gC%2FwbfmCSI0UyBW5zR0Qs6U7TOMkX%2FYnW5kyMcLrADgWMu&X-Amz-Signature=92d64c4bc0ece74ca79023a1b2fe94c2dc691a4ea8791207556174ab4287f4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF6MNIX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bEfP9nvAuuA1IBQKUxDF3dZQLtbhzrg8GjmjK5%2BkAAIgCWKkJuFxm%2FRfumRraxwbm2x14NKtvReyr7NVpL64eUEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQcFWDlZ%2BRCnm%2BO3SrcA00CPvizxuxTmf%2BttV71SrNGtMi7R8eEVDIPINheM7FaNE8Vu%2FO2h2lQw%2BBuUc2C06NArhQP5yg8RfgNm%2FxxqYGamkdoyLpnKQbU2umudZu6zgVVumcphrdzUTKWrJdJjmjXHyEO0%2FIVmYK3i789ujpjrbJR3xA2oZYWURmDO9d5rHK%2ByGSxnK%2F4xF%2B2fi0OAxzA7mt3AGEAheaJ%2Fy7etSYUbOFPohkgySdmOO%2Fs%2F%2B26m9C0xl6ASSu1dhSBe6IGQ1EEScsG8bQdkvi3XRDBTUnFu09CyzDA%2FPLuqib%2BKBTs1n6E%2BJ5DZZutEZeRQ82YgP%2BXGskH5V7%2BHXcH4L6bCLqlcXshd4VP9DvWXHaHVJcim01snpf86LIuhnDNtUGaOwRL2qbZLe1HkMrkr2gdZUIwVuFlJNVf6fbUdQ0Gl0iMGppZdu5wpfvHiKRIam5RTzZcQWs1hrToqavA1TAPzx1CUCQeSpueT7jG1ls9hs0ZRxdU2WtYZBzUUVF%2FDL%2BxrmrE1CxT12lyLwa0n7kKYsHnWU9p1B10gLskw%2BfigrxhdRsh%2BiSMmS7zcRoybyC3XcgSYMWVFMcJ2C4ae%2FjAMr8M3WJcESTnFQtiOvtHJ%2BwV1J%2BxFlEMN7EH6oqmMJeZ1ckGOqUBJQKdx%2Fq1HSGdeW%2F6wugNAzCaa9dIhVPSe%2BY7e3dax88EOMB%2BrdrvHo7niEXuhOdjkOsk6lHHMCSMzQd9QoETmjxjM9GWUyQo%2FGD7iiJU9MhiQNnyf%2B0C95TGituTQy09gBBRhjXnE7ByGW4nlCu8dCwFFDdbxlknG9%2BqnWU3SCe%2FZ7gC%2FwbfmCSI0UyBW5zR0Qs6U7TOMkX%2FYnW5kyMcLrADgWMu&X-Amz-Signature=e258f4f086559fd9df8c53ad0a7d4aaa9c23e167fa71210a8b1c3dee22fa7f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

