---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764VVCOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdqESfgaU2CTCtmTben54lLcoe5sZN5D6%2F3d3Um88ivgIgddvDciOZFhmlbeE0F2UE4lzbVAk8Gv2w4lm7M%2BnUGoAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMqi1%2F7%2F3o20koBbLircA3oYqY4WBW4Ic2tPFeCoxxV3c6YnlFMdcKdStfTBIYSjqLVFqRdE3%2B3cW1iRC%2F2RDVa6la0Z2SUS58ISgbPVO061VTbH7ZhXQ45oTDXynNZmB%2F7Y7cYwK3HAzKEsnVeKT7chaLozFalVQhwQH8TcLjt%2FXyXLY5H7yAKJJpPkYxROz4pDEYQ4xX%2BRHJgpn2lY1Q2IUmRifoLxgCW6tj1wPIVxd%2BCD2EWgeefE48fzou6GtU5lMNcN05c8QJGI%2Fx78gDS955rnvE7DPpq0mFzPOBrEeQmC%2FMJzIQw9n7ynzO%2FiUkKYo1b86obbpD98WJFrU51SAnebmcvGetV9mbwSvPeYl2k%2BSm4x1lf9%2F2Z85s%2BwsIW2Q73lRMhIE318tl9e4eLPb9AdYXmUbfSL%2BI87yw0d7NJbySQd%2FPbomBZejneQhgV8h07wW3VjGbz8tTeZ8gTtvNX85JfxbhzoTHx3UzPadeCUwK%2FU4aN2%2BhY9PjfKuDf0LgPrPshqEiQszL9LpMa%2FvP8qVcyBpPtJizmQUL%2BCMZd%2BnZHk1Cn%2BERD7KFT2hZPq3Vvnt9uxp7tgVPwVxp39IXT3jH3J9rAW6HxyY5sZQo0dZ5brSsxAoiWEdkMEHVjMk2NYohtdCrFdMO%2F9zskGOqUBG3fRF1kbjdA%2BnZxcycVlh70GFICcT1dTWLhP8bASRsls5UxeI5yAn8D6Aj45FM%2FbFVibG5UOm13Jha36kPQ0rvOycDNuupjX9XZ8VIUl2M%2BnMe5AmCKZ3k7CVzrcDfm8s%2F8bfmfBSID%2FiyOZEXL9Qavk%2B7eRLWpe50dul7xxAhBj%2BbemJL5EldncLbAHAdHzjZ0SSQY1RicHbeZlVbpmzPPsobRr&X-Amz-Signature=0e554c9ffe3fe5949e679b989fa320e1606cff2d73ea688c7a926413049199b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764VVCOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdqESfgaU2CTCtmTben54lLcoe5sZN5D6%2F3d3Um88ivgIgddvDciOZFhmlbeE0F2UE4lzbVAk8Gv2w4lm7M%2BnUGoAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMqi1%2F7%2F3o20koBbLircA3oYqY4WBW4Ic2tPFeCoxxV3c6YnlFMdcKdStfTBIYSjqLVFqRdE3%2B3cW1iRC%2F2RDVa6la0Z2SUS58ISgbPVO061VTbH7ZhXQ45oTDXynNZmB%2F7Y7cYwK3HAzKEsnVeKT7chaLozFalVQhwQH8TcLjt%2FXyXLY5H7yAKJJpPkYxROz4pDEYQ4xX%2BRHJgpn2lY1Q2IUmRifoLxgCW6tj1wPIVxd%2BCD2EWgeefE48fzou6GtU5lMNcN05c8QJGI%2Fx78gDS955rnvE7DPpq0mFzPOBrEeQmC%2FMJzIQw9n7ynzO%2FiUkKYo1b86obbpD98WJFrU51SAnebmcvGetV9mbwSvPeYl2k%2BSm4x1lf9%2F2Z85s%2BwsIW2Q73lRMhIE318tl9e4eLPb9AdYXmUbfSL%2BI87yw0d7NJbySQd%2FPbomBZejneQhgV8h07wW3VjGbz8tTeZ8gTtvNX85JfxbhzoTHx3UzPadeCUwK%2FU4aN2%2BhY9PjfKuDf0LgPrPshqEiQszL9LpMa%2FvP8qVcyBpPtJizmQUL%2BCMZd%2BnZHk1Cn%2BERD7KFT2hZPq3Vvnt9uxp7tgVPwVxp39IXT3jH3J9rAW6HxyY5sZQo0dZ5brSsxAoiWEdkMEHVjMk2NYohtdCrFdMO%2F9zskGOqUBG3fRF1kbjdA%2BnZxcycVlh70GFICcT1dTWLhP8bASRsls5UxeI5yAn8D6Aj45FM%2FbFVibG5UOm13Jha36kPQ0rvOycDNuupjX9XZ8VIUl2M%2BnMe5AmCKZ3k7CVzrcDfm8s%2F8bfmfBSID%2FiyOZEXL9Qavk%2B7eRLWpe50dul7xxAhBj%2BbemJL5EldncLbAHAdHzjZ0SSQY1RicHbeZlVbpmzPPsobRr&X-Amz-Signature=072703986530ac59eb41c00c960181dc1e8e0d59f9b276b174b0b5c8ebaab8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

