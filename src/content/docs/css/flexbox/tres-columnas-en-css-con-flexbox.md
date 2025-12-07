---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KEEJOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVJcc5rOJXZ4FoVQ6ALrPrpmZUem9w%2FYv1Ewhh6vMPAIgZPsRgMMQkyQJVwctZ74uhNEhBiO9t1ShYIjm1HJYMH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3RkaaC8%2BaKe5nftSrcA%2BBTvX7VHicE2K2WBttr8JKOmEgM4HVVtvpPpWFLp%2Bu1yORkmN6VUv2pvDZYXBo89pAYniZMuHI1XKYvQRSOwHr5aeGVvoNPgJ04Ly%2Fu0bAyk4kwTLKMvMRWhnoJEumKP55FYC3sPAjqElWuZjSWikisdSTUxW6rCIVem%2BhiTw2tSdJsH6Ytz%2B7%2BPVM3KmfR0DvdKVuO7lwgUhKzIo2OxDRR8NNCXap%2BGCh6TVRuBhL5ypxmgGC7xw1JAGSW6ClwC1TFT0FVbuxwsV42r7Q6uUIVSLZeWhYMdGUhI7BpHE1cMDqLDXYEhfSO5HOKu%2B2k2HJQX2fOYvMzCvnic%2F1Rs20XDNoqfmJLl47juf8LhawcQpdV173%2FlPAxwsgj1F%2B7delnWdIlNGP6GMWrrSauDaSjo7bMOZlHeEo5Y9%2BP7m%2B2eVNZwcJpc%2B2%2BfZZoETDgv8C47YiL5e24nuV78LJYzyupnMDC%2BXt%2Fg85EGWK4MvgPOKb78t6B6bxLsh2PdcB1UY30Mpsmcqk3VUINbBThhSY2q%2B0QTAuZcxcC2L1d8KmVduo2CX9RIwQnnZinTTlN4ieviNu20TjE4HgsEFsPt1t85r%2BPxn9kcpu6z6%2B0o1XgzS%2Fx%2BwXFwWmnXpUfMLCi1MkGOqUBVkP%2Bz%2BdBkuQ4jhBFdv%2FUTeD34TUtbYK5%2FcGsl3gAusuamB33hwe%2BNo3UxodwlGlqMRzl%2BHvgA%2B8hjjNi6NYL2Z75g383T%2BFoSiIsLAhItDixSiZrHzUwqp5tyKEgJ1EmVsBWZhin0kT8j5xe6%2BzB5%2FNvWnFoNxMyTnIRyZkicp6fCbfSVPS4yIx9pSvY%2BiKD5yiOqQdZioBXWSzqGN5QT6Eq89cp&X-Amz-Signature=c7b96f21cb4a30a111f6851888860682037a61b48d7262e320c0ac6d694bb323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KEEJOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVJcc5rOJXZ4FoVQ6ALrPrpmZUem9w%2FYv1Ewhh6vMPAIgZPsRgMMQkyQJVwctZ74uhNEhBiO9t1ShYIjm1HJYMH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3RkaaC8%2BaKe5nftSrcA%2BBTvX7VHicE2K2WBttr8JKOmEgM4HVVtvpPpWFLp%2Bu1yORkmN6VUv2pvDZYXBo89pAYniZMuHI1XKYvQRSOwHr5aeGVvoNPgJ04Ly%2Fu0bAyk4kwTLKMvMRWhnoJEumKP55FYC3sPAjqElWuZjSWikisdSTUxW6rCIVem%2BhiTw2tSdJsH6Ytz%2B7%2BPVM3KmfR0DvdKVuO7lwgUhKzIo2OxDRR8NNCXap%2BGCh6TVRuBhL5ypxmgGC7xw1JAGSW6ClwC1TFT0FVbuxwsV42r7Q6uUIVSLZeWhYMdGUhI7BpHE1cMDqLDXYEhfSO5HOKu%2B2k2HJQX2fOYvMzCvnic%2F1Rs20XDNoqfmJLl47juf8LhawcQpdV173%2FlPAxwsgj1F%2B7delnWdIlNGP6GMWrrSauDaSjo7bMOZlHeEo5Y9%2BP7m%2B2eVNZwcJpc%2B2%2BfZZoETDgv8C47YiL5e24nuV78LJYzyupnMDC%2BXt%2Fg85EGWK4MvgPOKb78t6B6bxLsh2PdcB1UY30Mpsmcqk3VUINbBThhSY2q%2B0QTAuZcxcC2L1d8KmVduo2CX9RIwQnnZinTTlN4ieviNu20TjE4HgsEFsPt1t85r%2BPxn9kcpu6z6%2B0o1XgzS%2Fx%2BwXFwWmnXpUfMLCi1MkGOqUBVkP%2Bz%2BdBkuQ4jhBFdv%2FUTeD34TUtbYK5%2FcGsl3gAusuamB33hwe%2BNo3UxodwlGlqMRzl%2BHvgA%2B8hjjNi6NYL2Z75g383T%2BFoSiIsLAhItDixSiZrHzUwqp5tyKEgJ1EmVsBWZhin0kT8j5xe6%2BzB5%2FNvWnFoNxMyTnIRyZkicp6fCbfSVPS4yIx9pSvY%2BiKD5yiOqQdZioBXWSzqGN5QT6Eq89cp&X-Amz-Signature=1cf0b7d8002f66107c2d59a40f5530963f37d69cfd7fc86149bd212375e0fbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

