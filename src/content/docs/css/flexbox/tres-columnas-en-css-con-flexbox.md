---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVM5574Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZv0wZ0%2BCs2LpCrucj22pzcEsRA2%2FwL8LnWy7IxEu3wAIgcSg9FnF7H2Fza9lT6M4UooBJmKODeVl6eXmVx3u%2B15Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDED%2F3sDYwmss79Tw5SrcAz3gME3s2baVE1nskR6DerLN5HjNWxDmVb%2FJp5EUIIu9Rzu5b%2Bg6iwt9VG42njDNXM%2F05cq99WNW2wD7J01avZCPhgtcLT1zV7iosHV5O0h%2BsjGGDNs2YMka%2FWgayq8hNFt64lm9KrSP%2BY94E9VZMD6RSl58M0iHlyrEEktrDEwnpQ%2B0bLfE3raTEZdEnPdxSHyDT9Q4ADz66wKNZp%2FIJzgj%2FnHCSOc2FNNI40Sj3RkLOZGloZiKBG%2Fp8DxANPCeKQpp0OEWCIBmfZZhESEC6qKWf473lWDs%2BydN6ZHKok55NKPkjHxCihjxfapZFGfQ7E2bM6VynfmFwpKLxN9Vd%2BMop%2FA4wEDAoAKdAfCepC3Xno6gWE9kFh0grtbj%2BpAsJ5Y5vuLLGbi0Me12nYgmWUB3n1MEVmahOLxAVPddj2UZm8GwfkWveQLwduR6InoQhTfu6APdiNisUUNYxr13hFP44Uj0MKk1bFuEV6879shVGI3dlvGrmY8Fc%2B3fIQ%2BiyabxBr1bQl6YUO3mfn5%2Bq99Bp5Bhm29IYnR%2FBl7bF4x9EVH%2BpNYynBx5ETl8ap0H6X%2BtJDnZjimxb8yfazZlpP6R3c7m6zXrBcK2exIbxhM0gg2kTiNt%2FS%2FncXVpMLKMyMkGOqUBTUCBDEDgp2mJFAlHJxbPUWKtYeE8OTkkw4HhksCC9xSU4X6anpOjm096aBldnPmu0NWCO6FaQYU%2BqFnM6EtPTlPzK5WhHOGBey7rtDZ%2B3d4mVbY8IUXfVgvU8KiXutUaYjGFRswoHbNOAoY7jCQk397TX0nSEQc8nz2ai%2BQyo%2BGfr433kSwfAbIQLrGOrhF8Pw0Bm9WKJ%2B8DhPlKykFYpycjGS2Z&X-Amz-Signature=6d7c87d06fc3335e92a17b9db5b287c221a25d49cab43da3783cf100b845d4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVM5574Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZv0wZ0%2BCs2LpCrucj22pzcEsRA2%2FwL8LnWy7IxEu3wAIgcSg9FnF7H2Fza9lT6M4UooBJmKODeVl6eXmVx3u%2B15Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDED%2F3sDYwmss79Tw5SrcAz3gME3s2baVE1nskR6DerLN5HjNWxDmVb%2FJp5EUIIu9Rzu5b%2Bg6iwt9VG42njDNXM%2F05cq99WNW2wD7J01avZCPhgtcLT1zV7iosHV5O0h%2BsjGGDNs2YMka%2FWgayq8hNFt64lm9KrSP%2BY94E9VZMD6RSl58M0iHlyrEEktrDEwnpQ%2B0bLfE3raTEZdEnPdxSHyDT9Q4ADz66wKNZp%2FIJzgj%2FnHCSOc2FNNI40Sj3RkLOZGloZiKBG%2Fp8DxANPCeKQpp0OEWCIBmfZZhESEC6qKWf473lWDs%2BydN6ZHKok55NKPkjHxCihjxfapZFGfQ7E2bM6VynfmFwpKLxN9Vd%2BMop%2FA4wEDAoAKdAfCepC3Xno6gWE9kFh0grtbj%2BpAsJ5Y5vuLLGbi0Me12nYgmWUB3n1MEVmahOLxAVPddj2UZm8GwfkWveQLwduR6InoQhTfu6APdiNisUUNYxr13hFP44Uj0MKk1bFuEV6879shVGI3dlvGrmY8Fc%2B3fIQ%2BiyabxBr1bQl6YUO3mfn5%2Bq99Bp5Bhm29IYnR%2FBl7bF4x9EVH%2BpNYynBx5ETl8ap0H6X%2BtJDnZjimxb8yfazZlpP6R3c7m6zXrBcK2exIbxhM0gg2kTiNt%2FS%2FncXVpMLKMyMkGOqUBTUCBDEDgp2mJFAlHJxbPUWKtYeE8OTkkw4HhksCC9xSU4X6anpOjm096aBldnPmu0NWCO6FaQYU%2BqFnM6EtPTlPzK5WhHOGBey7rtDZ%2B3d4mVbY8IUXfVgvU8KiXutUaYjGFRswoHbNOAoY7jCQk397TX0nSEQc8nz2ai%2BQyo%2BGfr433kSwfAbIQLrGOrhF8Pw0Bm9WKJ%2B8DhPlKykFYpycjGS2Z&X-Amz-Signature=14e357562f4c3621ee261e88b05e0334b55dba756b21d7f0b2bda49137acdbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

