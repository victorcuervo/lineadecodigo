---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGIQS3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5MhFbQO%2F%2Fp8qixq0ryT8gtUFXx%2FvLoyuxJdpqh1%2BJCAiEA9F3X5u8toitcK8LnbtSubO%2FO7HwWuSoIJD1I3MOoAd8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8A1thA%2F87g%2FIZTHircA70x%2FkLRjgPJJduSyk5rBSvE5W4vbbinc8TJWkeNdPa%2BQOtf0siu%2BGZigx9onWaBNuXN41r1rsvJw5AdDLsywv5d781XJn3ICB7S0OWZN%2FbcjbrFfIv5TlWcX4hoTO6jq380g9ausZFa%2FKpwKvZJS5PZpbj2apyHYnuur9qdtP0NAY3DyLNnGyhOE59lN20GjGKFmMVn9AYSex7oLJzy8jZ6uafYD%2F2fHNCIFZyldxdug141DKdKS0MAlHB26Pv6%2FPv3B6jdzmVNmNChFbVqGR7gWDV3hB9O%2BRE068sSATkYQeXXrWm7u5qFbdNYBIHzhkvYqfGE5BGhyxCVLQ7ugpgMXTa578GMZ8P8TWx0XZYP7%2Ft%2BQn4t1KJlI49EBq3ldRo0GNa7fa5vvjHFO1Baymo91HzqymyQDWzonLZnWCTuQlOYd0ZDw2wGlmUt24NBDfGGeaitpA%2FRlI62jWsWifgMXPWcoHxFdVgE5oyQC0Gn7h0rcp0%2FIl%2FSmdLav6v4Ij4dC%2Fm9P2%2B1fnw4DVBEj%2BWhOsL5KCD%2BEI5grcO%2BEHElJntNXkisSJiaBqisSM5veUGFUQ4gZhT9V5lEx5QNiRmwRLTtEzHPEFGgJlcLDMus9ZYz4jNR8s7l5nKwMIqk1MkGOqUBQsuJfZSQR4PhFzGYEGFWc7TAeYxhmxY7sPqE0j293Lk9n3M4WzRKeH6er%2FuppwY2sjLe9%2FuVzWnIdmmBHQ2qS6Fdqle85PMKEAlWoiViYEfX36Hf9y35h4j4ETkWIYEifSVRFtKMuKzYYNTWkGwCKFio33jxeQtaVScPtuWHVc%2BsT%2BD2munf6NhDAXWLIfnCU4xai1Vk8oMHKnk%2F%2Fdwzd4UV9Bm0&X-Amz-Signature=cb672b388c925594c33d2ce2c157e795e213fa91376fbf22f3a5bdfc31b1003c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGIQS3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5MhFbQO%2F%2Fp8qixq0ryT8gtUFXx%2FvLoyuxJdpqh1%2BJCAiEA9F3X5u8toitcK8LnbtSubO%2FO7HwWuSoIJD1I3MOoAd8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8A1thA%2F87g%2FIZTHircA70x%2FkLRjgPJJduSyk5rBSvE5W4vbbinc8TJWkeNdPa%2BQOtf0siu%2BGZigx9onWaBNuXN41r1rsvJw5AdDLsywv5d781XJn3ICB7S0OWZN%2FbcjbrFfIv5TlWcX4hoTO6jq380g9ausZFa%2FKpwKvZJS5PZpbj2apyHYnuur9qdtP0NAY3DyLNnGyhOE59lN20GjGKFmMVn9AYSex7oLJzy8jZ6uafYD%2F2fHNCIFZyldxdug141DKdKS0MAlHB26Pv6%2FPv3B6jdzmVNmNChFbVqGR7gWDV3hB9O%2BRE068sSATkYQeXXrWm7u5qFbdNYBIHzhkvYqfGE5BGhyxCVLQ7ugpgMXTa578GMZ8P8TWx0XZYP7%2Ft%2BQn4t1KJlI49EBq3ldRo0GNa7fa5vvjHFO1Baymo91HzqymyQDWzonLZnWCTuQlOYd0ZDw2wGlmUt24NBDfGGeaitpA%2FRlI62jWsWifgMXPWcoHxFdVgE5oyQC0Gn7h0rcp0%2FIl%2FSmdLav6v4Ij4dC%2Fm9P2%2B1fnw4DVBEj%2BWhOsL5KCD%2BEI5grcO%2BEHElJntNXkisSJiaBqisSM5veUGFUQ4gZhT9V5lEx5QNiRmwRLTtEzHPEFGgJlcLDMus9ZYz4jNR8s7l5nKwMIqk1MkGOqUBQsuJfZSQR4PhFzGYEGFWc7TAeYxhmxY7sPqE0j293Lk9n3M4WzRKeH6er%2FuppwY2sjLe9%2FuVzWnIdmmBHQ2qS6Fdqle85PMKEAlWoiViYEfX36Hf9y35h4j4ETkWIYEifSVRFtKMuKzYYNTWkGwCKFio33jxeQtaVScPtuWHVc%2BsT%2BD2munf6NhDAXWLIfnCU4xai1Vk8oMHKnk%2F%2Fdwzd4UV9Bm0&X-Amz-Signature=12d51bc0a8aba7dda31630bb490780e1a4d9c10153be2c26bf2cac0710e4f57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

