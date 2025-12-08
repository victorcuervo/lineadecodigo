---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HZKXCI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuYzRNM2CrolAvNsAAiQEt4akMoHOhUOBCdAJtlrAfeQIgIEi3HZsrRscWanAh1p%2Bx82wrbxR4Xiut8C3Z36DYpFAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP%2BP3WDbyH1ZcOnMyrcA5xQbj22pnKWwUZDqkVY%2FnoHy9IjJJZR%2FR%2BgOfLuK1zsQ%2BXqHS4RH%2F9%2FoAitXJexSQQB%2BbyI%2BTw1b%2FEDIMYxm8AJE1Ysm7jhcgGYunTcvtIxIl6UO5GDUlCfe%2FNfZ57WWU%2BNqmLSp2vqJHTiUguZMcnHUpp%2BEvcUZPWOXskkum5evRgOoE%2BLUe2h4aa%2BZjBvq%2FyTIv5v1MaPa2yWngejAchJn1KGC1Iu4snkKZzXuO7ZNvTpOncwLs5xZYmy8Rt984lRMczMUcG3XKl0usZi1NcxPtYBdFNzBQo%2FpZ%2FrcUFJ0qWQUP5VU2t8NX4lA9c00q7C9CYY%2BEiekZ5IXTf2u2u2uKM9a6ev%2BuAUP%2BGmpF0cz0gXjjzGASjdEpB2Iaps%2F%2BD5gNZjRjTJ8VklZlicL19Ohh239mXwL%2BdoesMrSux1obJ0qS8b3%2Fq02NZ3JPdauiEVY9%2F2kmKbWmMxhZC6MjPNa4qlo%2FXI3FX4CAWU9FuZ4lwz%2B3ytDyMPmi9IpG6Gf5%2Bfh57oRsk%2BHRKOwCK%2FKSs63QQXrygb%2BQh23W7bY%2FDZeCqW5JfU4eqUOK%2BDK%2F3LVAVTzgNCmI1Shk1b2T35x5UWYEuXJi2sh%2BsR1XBu%2BsEevpsTTAoCzDNVT4cKMITu2ckGOqUB7LTOx0o5mHWJA6gLD9eCfdl5lenw%2FjLweqj1Ycu1G2TADx00mc6XcmSaXBtS%2BtO2RxJ4Wu3oHcgk20DjiedFU8sGu0gSHTXQATz4UtRrjVvE3mbVePRZnaKXHDZG%2Bgfk0D3%2F%2FEzV49u03NPprdRg54smrRIm149u8BWigEdTgtIn1BbY5ucR5Dq1yyhuw3U9hrF8SuCqGFnBMKDH10wXEGBTxG9Y&X-Amz-Signature=ebb564b328a5b1f24bbf83087ebd7cbcdebdc301a799ac554eba19ddafdbf864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HZKXCI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuYzRNM2CrolAvNsAAiQEt4akMoHOhUOBCdAJtlrAfeQIgIEi3HZsrRscWanAh1p%2Bx82wrbxR4Xiut8C3Z36DYpFAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP%2BP3WDbyH1ZcOnMyrcA5xQbj22pnKWwUZDqkVY%2FnoHy9IjJJZR%2FR%2BgOfLuK1zsQ%2BXqHS4RH%2F9%2FoAitXJexSQQB%2BbyI%2BTw1b%2FEDIMYxm8AJE1Ysm7jhcgGYunTcvtIxIl6UO5GDUlCfe%2FNfZ57WWU%2BNqmLSp2vqJHTiUguZMcnHUpp%2BEvcUZPWOXskkum5evRgOoE%2BLUe2h4aa%2BZjBvq%2FyTIv5v1MaPa2yWngejAchJn1KGC1Iu4snkKZzXuO7ZNvTpOncwLs5xZYmy8Rt984lRMczMUcG3XKl0usZi1NcxPtYBdFNzBQo%2FpZ%2FrcUFJ0qWQUP5VU2t8NX4lA9c00q7C9CYY%2BEiekZ5IXTf2u2u2uKM9a6ev%2BuAUP%2BGmpF0cz0gXjjzGASjdEpB2Iaps%2F%2BD5gNZjRjTJ8VklZlicL19Ohh239mXwL%2BdoesMrSux1obJ0qS8b3%2Fq02NZ3JPdauiEVY9%2F2kmKbWmMxhZC6MjPNa4qlo%2FXI3FX4CAWU9FuZ4lwz%2B3ytDyMPmi9IpG6Gf5%2Bfh57oRsk%2BHRKOwCK%2FKSs63QQXrygb%2BQh23W7bY%2FDZeCqW5JfU4eqUOK%2BDK%2F3LVAVTzgNCmI1Shk1b2T35x5UWYEuXJi2sh%2BsR1XBu%2BsEevpsTTAoCzDNVT4cKMITu2ckGOqUB7LTOx0o5mHWJA6gLD9eCfdl5lenw%2FjLweqj1Ycu1G2TADx00mc6XcmSaXBtS%2BtO2RxJ4Wu3oHcgk20DjiedFU8sGu0gSHTXQATz4UtRrjVvE3mbVePRZnaKXHDZG%2Bgfk0D3%2F%2FEzV49u03NPprdRg54smrRIm149u8BWigEdTgtIn1BbY5ucR5Dq1yyhuw3U9hrF8SuCqGFnBMKDH10wXEGBTxG9Y&X-Amz-Signature=019f2564ac0d141dd3c117ecdf6bb3b4df77b5991db8d91ed9e39307ceb9ed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

