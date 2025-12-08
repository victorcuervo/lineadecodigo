---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCP7TPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fr0edlhTt8qOaChZyTyjrFDMoZ3vUpAr%2Bs1CuaqE7RAIgITEdrZ0MP0TG9xH9avEv7Bwb0O92uw%2B6aOmGjWMq4wgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVx3jSK2fpzHBnIfircA1zpVlkGPgPgNawcg5x1hadXY6RXKKhrDULXNz3Cv0bdjkF3XJaQezCzqTtnjfbGo7hu%2B8pqys9j%2Fo%2Bn0fESo28ql5Ik%2Fp6ded7KphLx%2BdCog6tSI6%2F8NFeqI%2Bv7vhbsQJ5xtlDMbOWb%2BwzHm6lpRnaqmiIa4TQJzt2%2FMcnxOV4RGiuMy2UDQkaOof0LxEPJVekbjn9m%2BGiTII%2FaXCJXUuD3aJSecvJKbSNYQd9byZYGkTDxv6Lltsz6MlkVk1lyzqnTM3jTmcqwt8NWLeuWGAAkgShjIoXF1dkesRQRMGQtCGsaAsOo7%2FaQy0xNfZOUTReArijeARUxDKPiJtR1AlKbEIUppLGNFLMjerLdRjguwnUm0yW%2BUQBxDIWMw%2BsMg0leln0LM51lScdc7MfsOTiOkcMKaAU2jAZ7DhIn7unIP1nk5zN36%2BRIukcfy5QIV14T%2BRKI6tgsMiQbnjsm4pS72vS3tLRn3zSvVvtay1tfHLS%2FHe13O%2FODcoicnzXzs86p9EjpEtMk6XIKz7OvcnULiTLhpQgA94pltgXf6d0ftYBHYSqnNViyGWIIjtfezqQiRJRYDbTIMRpPi4hpmV710jFLfjFBV%2FA5X0WwOqB1Gv0V1Cs9SKHrhJzEMKvv2MkGOqUBAgnDcBefk3ufmWBBuxGeMk6rEILIJ3staoZBOajZr3%2BFEQ8OoaEctH7b4BszsHdUtznMTQLSVPqqJ2CcFSO63pFS%2F0ZK4lKBEwFcYJR%2B3V%2FfTPbmRK9hYZqc8i3df8q%2FJstROBb1VW3g9yS3rLXdzM8pXvmUy%2FyAwYSqp2lZtcwSJBa2SsKQPC64Kbn6RNWxn%2BRjqUXOIc0azaiFpNsQJxkAXQvW&X-Amz-Signature=2f0013b61adfb662104c62f5d31c093cbcc85737fa8db2d680f56b10966172aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCP7TPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fr0edlhTt8qOaChZyTyjrFDMoZ3vUpAr%2Bs1CuaqE7RAIgITEdrZ0MP0TG9xH9avEv7Bwb0O92uw%2B6aOmGjWMq4wgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVx3jSK2fpzHBnIfircA1zpVlkGPgPgNawcg5x1hadXY6RXKKhrDULXNz3Cv0bdjkF3XJaQezCzqTtnjfbGo7hu%2B8pqys9j%2Fo%2Bn0fESo28ql5Ik%2Fp6ded7KphLx%2BdCog6tSI6%2F8NFeqI%2Bv7vhbsQJ5xtlDMbOWb%2BwzHm6lpRnaqmiIa4TQJzt2%2FMcnxOV4RGiuMy2UDQkaOof0LxEPJVekbjn9m%2BGiTII%2FaXCJXUuD3aJSecvJKbSNYQd9byZYGkTDxv6Lltsz6MlkVk1lyzqnTM3jTmcqwt8NWLeuWGAAkgShjIoXF1dkesRQRMGQtCGsaAsOo7%2FaQy0xNfZOUTReArijeARUxDKPiJtR1AlKbEIUppLGNFLMjerLdRjguwnUm0yW%2BUQBxDIWMw%2BsMg0leln0LM51lScdc7MfsOTiOkcMKaAU2jAZ7DhIn7unIP1nk5zN36%2BRIukcfy5QIV14T%2BRKI6tgsMiQbnjsm4pS72vS3tLRn3zSvVvtay1tfHLS%2FHe13O%2FODcoicnzXzs86p9EjpEtMk6XIKz7OvcnULiTLhpQgA94pltgXf6d0ftYBHYSqnNViyGWIIjtfezqQiRJRYDbTIMRpPi4hpmV710jFLfjFBV%2FA5X0WwOqB1Gv0V1Cs9SKHrhJzEMKvv2MkGOqUBAgnDcBefk3ufmWBBuxGeMk6rEILIJ3staoZBOajZr3%2BFEQ8OoaEctH7b4BszsHdUtznMTQLSVPqqJ2CcFSO63pFS%2F0ZK4lKBEwFcYJR%2B3V%2FfTPbmRK9hYZqc8i3df8q%2FJstROBb1VW3g9yS3rLXdzM8pXvmUy%2FyAwYSqp2lZtcwSJBa2SsKQPC64Kbn6RNWxn%2BRjqUXOIc0azaiFpNsQJxkAXQvW&X-Amz-Signature=918cd464788a93a92ed127939bd9cfb2c88dad5a6a0383107bb808cf87c180f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

