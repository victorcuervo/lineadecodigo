---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UMHFFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB18ozZYtFQAS%2Bp0IrmPvIfkg1XcmrtlctvD1KXzl82sAiEArZ89GxD7d6WZTgyXR6HZH9Ne5thD%2FVQ30ZGU75U3f3cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3hhX%2FOGNkoIlXXAyrcA2gI%2BTIgv4b%2FrKHBWaTmxpkSiNungekysz87D1sSpWZNjQu6Nhk8t4i2GhUhuy2eUMLuGURyZdiq6XhHFLWjdJGzmiaWlyVGTGBcabz7E%2Bn%2FG1omryOcQICZyRG8WpaYOVOqtYMoAHVhMPz2Uf3cH36Byb53f7lWusIKjnXWEvYlalM3XGdcG0lC5jnS0HUVf4vi4IjDtH1MoJZ55N%2BPxVGksM70EKZVHE%2BcnHdAaciotg38XA%2FFPM3YHoESfUngC6R2SkzVvyU7Vu3Vgyzf9XaVimTLiNcSJIxUPPTmZZ5gQo2D8TycEbTqcFJSfV%2FIDDXjJ8ZddWKOC64ai97vLNtHX9gdsPf0N793m%2F2kFDhlKXyr1%2B5O3mjRLmhb%2Fxu3Zn1fZqS1a4z5zv7FM0Zb74JcmJg6psOybm9yz%2F%2BPD4uubgnnJcWo%2FHzhpnOGig3K2ew1wc1NXsB2GSbB%2BfUdPCIV0OWnGSpsVsZ7b0qdcj7bgO6kQfvWuCqCKwR20wkA2Q7Kg8WWcw7zclFCO8nxEm9UJmhYx99PAN3QBAWhQt%2BB8Mi%2BE1KjOJ%2Bx6nDvS0Vp0Um2ne5vLRg5CV3i6oKSaz%2BWIzfWJNIDdCmZI18k4u6jggMSo67iarEckHMNMJe61skGOqUB02S10kT%2BOmWfVISgonOSVGICUdZhosX9dam34uTlnzO%2FAHDGm4VkdK5g5Pv5juen%2BYbO%2F9OEMQ0vLXdKyRmlS87AccAb4iC6TpSHk5%2ByXkzhf4xUGioCj8DQvf0XX8z5DyuIDtpD0EWTKC7IxfwBqIiLXvKBpHIQojowEr7dI%2FVAFQCEqRijExu1rda2qXy8whvz6ZmDtkRTy9P0lRolHZ3j1hbU&X-Amz-Signature=86c55af91e063d2ca1ce39a14c48a47600e8494bc1b924f5c30ea1cd84f71c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UMHFFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB18ozZYtFQAS%2Bp0IrmPvIfkg1XcmrtlctvD1KXzl82sAiEArZ89GxD7d6WZTgyXR6HZH9Ne5thD%2FVQ30ZGU75U3f3cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3hhX%2FOGNkoIlXXAyrcA2gI%2BTIgv4b%2FrKHBWaTmxpkSiNungekysz87D1sSpWZNjQu6Nhk8t4i2GhUhuy2eUMLuGURyZdiq6XhHFLWjdJGzmiaWlyVGTGBcabz7E%2Bn%2FG1omryOcQICZyRG8WpaYOVOqtYMoAHVhMPz2Uf3cH36Byb53f7lWusIKjnXWEvYlalM3XGdcG0lC5jnS0HUVf4vi4IjDtH1MoJZ55N%2BPxVGksM70EKZVHE%2BcnHdAaciotg38XA%2FFPM3YHoESfUngC6R2SkzVvyU7Vu3Vgyzf9XaVimTLiNcSJIxUPPTmZZ5gQo2D8TycEbTqcFJSfV%2FIDDXjJ8ZddWKOC64ai97vLNtHX9gdsPf0N793m%2F2kFDhlKXyr1%2B5O3mjRLmhb%2Fxu3Zn1fZqS1a4z5zv7FM0Zb74JcmJg6psOybm9yz%2F%2BPD4uubgnnJcWo%2FHzhpnOGig3K2ew1wc1NXsB2GSbB%2BfUdPCIV0OWnGSpsVsZ7b0qdcj7bgO6kQfvWuCqCKwR20wkA2Q7Kg8WWcw7zclFCO8nxEm9UJmhYx99PAN3QBAWhQt%2BB8Mi%2BE1KjOJ%2Bx6nDvS0Vp0Um2ne5vLRg5CV3i6oKSaz%2BWIzfWJNIDdCmZI18k4u6jggMSo67iarEckHMNMJe61skGOqUB02S10kT%2BOmWfVISgonOSVGICUdZhosX9dam34uTlnzO%2FAHDGm4VkdK5g5Pv5juen%2BYbO%2F9OEMQ0vLXdKyRmlS87AccAb4iC6TpSHk5%2ByXkzhf4xUGioCj8DQvf0XX8z5DyuIDtpD0EWTKC7IxfwBqIiLXvKBpHIQojowEr7dI%2FVAFQCEqRijExu1rda2qXy8whvz6ZmDtkRTy9P0lRolHZ3j1hbU&X-Amz-Signature=d5e5efba5df29736db9116419db38987357a72ddeb7019a9920b671a9ee3e635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

