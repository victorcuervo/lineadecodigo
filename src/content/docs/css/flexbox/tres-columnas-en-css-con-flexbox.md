---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WUGK7O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq0%2F%2FUX%2B8nAjgkCjhmXWE4%2F0IwSsZYAVmFgM4%2BBWB3MAiBRCmxurQs8iO4KCRAYFO6pbJOzAi6AOOEGZhqEIB4Glir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnyj8xgls9mQqLJVKKtwDtshJU3m2%2BY0HEvnprJiu%2BnGrslCNdbuFYL7OiHAAej1VHKw8h3ykgepbX4ZyzcREbaXtBTetbs0uMcqZxsTkdyUP6QdPxDyakxBtKl1B%2BmBBlrW9VM5ECn5GSeDwVxNV5XGYi14uN6uxatnQZQyQ52w9MMye%2F0mIzeinS559eU8VJSL1RWGRep4I63gUNfbt9aaB42sqV%2B1oyc%2BNtvGRCRPkBYCZhF7QxwPoux2VKjwG74U5eqF1VzxXS2qL9IiZ3ChYRIGvWOymZQ1tQ80cHTwd1hKF%2BwnbKVvOM40cqXQ38ViAq5iBWYijDSLTeQ0jiqUYBk7qElBomOjtrB4cRToat5ttAkAiqQLRzd5vhlzCWeLTM%2FZ66pItaOEuckPETCpphIve%2BQ84lyuQ%2F%2B4FGB%2BsTxALRA%2FD3Zu1Aip%2FxCESnbv1xpYj0sN%2F%2BF%2FM%2BSrro%2FQ0j42FIV3XA0gGP3CSiSpEyzJJJ%2BW7PU4cuSBSEj2OOHGqm3SIrThIH1lomCW5cRfQJlgDHgBO2W06SUCg%2F81KtiiVGIK8W%2B6S7FEVsBhyjZkPEJ3lT5g1L25ooimUrKhXTF%2BAJelHTdq5BzYAOIg8P8ccmiC19e%2Bsoq%2BEX0Z32du2HbPBVe%2FfawQwsbHJyQY6pgFqResFnov%2Bl8bQqg3Mr5xyWMMNJGr2uIYTJZw%2FxlGn4NoiH1rLOcglMLC2PFMvlZrMMIXJU41Lmt8kESi5n9hh1ZvBBWEU9fJzb2E3sBH9x1vaa%2B729zn%2BcQskP5i2rNJLsrk6jP1ph2CQgF7IzIIke1vDvxdcgxaixgazZiU%2F9q0mH0k98BFEtlrg60zTdn80NmJcO15Zoo5Oyc2f2jGEFEK187Bj&X-Amz-Signature=40e1514429ee37950eecc39cd91c4718fdec79f11bd5709801b8dbfb1aa0df35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WUGK7O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq0%2F%2FUX%2B8nAjgkCjhmXWE4%2F0IwSsZYAVmFgM4%2BBWB3MAiBRCmxurQs8iO4KCRAYFO6pbJOzAi6AOOEGZhqEIB4Glir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnyj8xgls9mQqLJVKKtwDtshJU3m2%2BY0HEvnprJiu%2BnGrslCNdbuFYL7OiHAAej1VHKw8h3ykgepbX4ZyzcREbaXtBTetbs0uMcqZxsTkdyUP6QdPxDyakxBtKl1B%2BmBBlrW9VM5ECn5GSeDwVxNV5XGYi14uN6uxatnQZQyQ52w9MMye%2F0mIzeinS559eU8VJSL1RWGRep4I63gUNfbt9aaB42sqV%2B1oyc%2BNtvGRCRPkBYCZhF7QxwPoux2VKjwG74U5eqF1VzxXS2qL9IiZ3ChYRIGvWOymZQ1tQ80cHTwd1hKF%2BwnbKVvOM40cqXQ38ViAq5iBWYijDSLTeQ0jiqUYBk7qElBomOjtrB4cRToat5ttAkAiqQLRzd5vhlzCWeLTM%2FZ66pItaOEuckPETCpphIve%2BQ84lyuQ%2F%2B4FGB%2BsTxALRA%2FD3Zu1Aip%2FxCESnbv1xpYj0sN%2F%2BF%2FM%2BSrro%2FQ0j42FIV3XA0gGP3CSiSpEyzJJJ%2BW7PU4cuSBSEj2OOHGqm3SIrThIH1lomCW5cRfQJlgDHgBO2W06SUCg%2F81KtiiVGIK8W%2B6S7FEVsBhyjZkPEJ3lT5g1L25ooimUrKhXTF%2BAJelHTdq5BzYAOIg8P8ccmiC19e%2Bsoq%2BEX0Z32du2HbPBVe%2FfawQwsbHJyQY6pgFqResFnov%2Bl8bQqg3Mr5xyWMMNJGr2uIYTJZw%2FxlGn4NoiH1rLOcglMLC2PFMvlZrMMIXJU41Lmt8kESi5n9hh1ZvBBWEU9fJzb2E3sBH9x1vaa%2B729zn%2BcQskP5i2rNJLsrk6jP1ph2CQgF7IzIIke1vDvxdcgxaixgazZiU%2F9q0mH0k98BFEtlrg60zTdn80NmJcO15Zoo5Oyc2f2jGEFEK187Bj&X-Amz-Signature=cc00bf61a4ab8165bc7dca0d5f10a47ec304b6da585a579f5952d732232ba810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

