---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVXOAFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhBgCdjBGZb8mNj0keMvQeunn2nU2RI2O6cnxKBEo%2BYAiEA6EyApTHAQQuRHOR0OmeHoDLRemBgPQABxqLWgIXZLYcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBMbjgSb3dLB1igupSrcA7sUny4985bpKDoqeu3yKtjnZiBp8KXnvTHrcfw87xxlZ1W3phsXWZKEGsEb1pRtbfjy6m04OKl%2Bxi9M00uD0NsXc0%2BEnUFsiBVFVwjOOg7lJrWZEuHBV1N%2B6RlOQUV7pe0TW%2BYQo%2B3LXtYlkBwoQi%2FOAZBnRupEBa3dEy5C%2FWTp0JW%2BfJ2vvPhSiWLHJ0%2FuCP4%2FthU8MxrY18SdMQ1izSZ0EH7HD%2FYJhMrYp%2BpZ4LCbv1Ff885AAWRc8KtIUUJWoXD9Q%2BmGF122XEfuhFaMY988pTYIXbz1LFr5E%2Bs7jKLRmwyVus42jzinFgRHTyt8cIi1ZaPmSe1qOQ3oQT1%2B0vnCEYKyIp45ZYJtXtkSAD3m0%2Ff5tF7ftpq5%2BoIof6xBIvOnwJuAnsHZYann3odZ21Me%2Fb4UDrWAbPhdrSdiL1yatsh7syQMWOQkvt1p5WIzBCLh8MhSZkMSFoiEgPqlqbgjbZt%2FKph30zDy2jxAR7dKfAoM982xR0Q6GQ6qXrLhAWIaTYPtqralxCLcJR4RidamQ8qj1nF8je82ZDABsLMKlb4UUbM26soxCpMGGnBjwkvsW0VciA8BWuSspqdI1TFE2JuBLJzMuymREO3q8PT3sdSAeu%2B3OuSmiW%2F5MLzzy8kGOqUBUElhs4z4N7QKeGQpNaTSJ1xjxPzAjKPnUnhxih%2Bv91NvFvZSf0JdOnjO2ZnMzgVPqZL8ct3UlQyExM7pbsYDxtMvugK1KDzLG%2BO3GN5dQNMJIkRbO9%2BLIxVsE0eQvQDOjz66zSIJV8UExxoh5Mnz6brSqXJy2eYtCTxKSyKk24sti0JLCoswCwgcKT3Qk4xhLMIH3%2BEwppvg25E5KUzUirF8l0Ap&X-Amz-Signature=302ebe336ffec27ea1559405219e16ab6cdd5a463bd0767c6bad3455ad20eaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVXOAFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhBgCdjBGZb8mNj0keMvQeunn2nU2RI2O6cnxKBEo%2BYAiEA6EyApTHAQQuRHOR0OmeHoDLRemBgPQABxqLWgIXZLYcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBMbjgSb3dLB1igupSrcA7sUny4985bpKDoqeu3yKtjnZiBp8KXnvTHrcfw87xxlZ1W3phsXWZKEGsEb1pRtbfjy6m04OKl%2Bxi9M00uD0NsXc0%2BEnUFsiBVFVwjOOg7lJrWZEuHBV1N%2B6RlOQUV7pe0TW%2BYQo%2B3LXtYlkBwoQi%2FOAZBnRupEBa3dEy5C%2FWTp0JW%2BfJ2vvPhSiWLHJ0%2FuCP4%2FthU8MxrY18SdMQ1izSZ0EH7HD%2FYJhMrYp%2BpZ4LCbv1Ff885AAWRc8KtIUUJWoXD9Q%2BmGF122XEfuhFaMY988pTYIXbz1LFr5E%2Bs7jKLRmwyVus42jzinFgRHTyt8cIi1ZaPmSe1qOQ3oQT1%2B0vnCEYKyIp45ZYJtXtkSAD3m0%2Ff5tF7ftpq5%2BoIof6xBIvOnwJuAnsHZYann3odZ21Me%2Fb4UDrWAbPhdrSdiL1yatsh7syQMWOQkvt1p5WIzBCLh8MhSZkMSFoiEgPqlqbgjbZt%2FKph30zDy2jxAR7dKfAoM982xR0Q6GQ6qXrLhAWIaTYPtqralxCLcJR4RidamQ8qj1nF8je82ZDABsLMKlb4UUbM26soxCpMGGnBjwkvsW0VciA8BWuSspqdI1TFE2JuBLJzMuymREO3q8PT3sdSAeu%2B3OuSmiW%2F5MLzzy8kGOqUBUElhs4z4N7QKeGQpNaTSJ1xjxPzAjKPnUnhxih%2Bv91NvFvZSf0JdOnjO2ZnMzgVPqZL8ct3UlQyExM7pbsYDxtMvugK1KDzLG%2BO3GN5dQNMJIkRbO9%2BLIxVsE0eQvQDOjz66zSIJV8UExxoh5Mnz6brSqXJy2eYtCTxKSyKk24sti0JLCoswCwgcKT3Qk4xhLMIH3%2BEwppvg25E5KUzUirF8l0Ap&X-Amz-Signature=f590ac64a7fb01c788059f0db4c18bf6dd928ec36db867f4796b420266076379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

