---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W45LKG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYOiXrsjWEafYNrAgAonNw4NJu87QuDks20J%2FoY%2F%2FCRwIgFXgAqUOWtE3qBfTztcE1Xb7g1WNUW28ILUIKlXQNFX0qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyFNCVoGfeNeg4ehSrcA1nDKExjIL0ruv7LPRv1hkZiYugpTylB8xNsQgijAk5Ax%2BBzxCOIeJVthHyicBXm6ojumAeI4mGHAozvbm8qlUmVJQ%2FFM%2BtBCVzszad8qCNsr2iH%2ByUncr2nbWuuyJ94gd7yI%2BhI8etmkQdvfsMGhnbc9LllObgGz6GPD5u2POcL1SyBtoMXXNWXBP29g7BJjoxqPShdIHbzn8Ihykwsu0fU%2F3Iw1%2FUDei287rfrDsettjK4FMZH4ZH5RQHbnZHQNz1yW8tZuo%2FLQpJiLxg8Fz3K7GcLHk9UAWlxaMYrDPQY8uWknT9xFmnKF18UNO3c00xiKKqavVbqgfcpmAqLmMJ1y93vMYVHl9rb1n8BLmh2rH%2BfbiX6PBDlpXxkcK5EAhyu3xUvJgjn4GvIQqxTw7vcfNx4Ye6TKhA%2B1%2FUp2MNhK8Sy59SwfFSvKZQ7uhzOIw4BQAU%2B2D3DZ2LJEj0fY0Zu0b2v2KL2d2skl6jgQiSupjBVU44CNs1VxoeByzEj2MudfJUwI21NlAmmEVklasOzTcpx1voVBOs%2FsKUcMSjqkF2OfwOzOPFXI%2FVLqt5oKFrV6lBT%2F6koYqcpr9Y9Rb1nY1Q2YdaozZYkch4TihvoiT%2B80kXJKGAEO7jYMNiE2MkGOqUB0LFGJP8976IS6WhsIOUgZ10XN0H29pZwIBXjU8iv%2BulmLMO0grRcXGWw1nGfWGYZJ%2BFW8wzGBO5CEUvGMaku8fVKQyeE3cN6dE%2Fy17sgMWDsjLWWVJSQjA5jfW%2BBLJ%2BVS4za0Ut6asOXm7%2BjdOLMgUtE6BtSdqicQBIDoIIPGNTf0hi7uCPvHfEHgN8vi9BlDdLdKIrN0Dz8UcFxgpbcA%2B3GvO53&X-Amz-Signature=a9b12c47bd9f14aa5294f9bc1f8f07d1861c31d6b2b503324765e990df1f3701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W45LKG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYOiXrsjWEafYNrAgAonNw4NJu87QuDks20J%2FoY%2F%2FCRwIgFXgAqUOWtE3qBfTztcE1Xb7g1WNUW28ILUIKlXQNFX0qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyFNCVoGfeNeg4ehSrcA1nDKExjIL0ruv7LPRv1hkZiYugpTylB8xNsQgijAk5Ax%2BBzxCOIeJVthHyicBXm6ojumAeI4mGHAozvbm8qlUmVJQ%2FFM%2BtBCVzszad8qCNsr2iH%2ByUncr2nbWuuyJ94gd7yI%2BhI8etmkQdvfsMGhnbc9LllObgGz6GPD5u2POcL1SyBtoMXXNWXBP29g7BJjoxqPShdIHbzn8Ihykwsu0fU%2F3Iw1%2FUDei287rfrDsettjK4FMZH4ZH5RQHbnZHQNz1yW8tZuo%2FLQpJiLxg8Fz3K7GcLHk9UAWlxaMYrDPQY8uWknT9xFmnKF18UNO3c00xiKKqavVbqgfcpmAqLmMJ1y93vMYVHl9rb1n8BLmh2rH%2BfbiX6PBDlpXxkcK5EAhyu3xUvJgjn4GvIQqxTw7vcfNx4Ye6TKhA%2B1%2FUp2MNhK8Sy59SwfFSvKZQ7uhzOIw4BQAU%2B2D3DZ2LJEj0fY0Zu0b2v2KL2d2skl6jgQiSupjBVU44CNs1VxoeByzEj2MudfJUwI21NlAmmEVklasOzTcpx1voVBOs%2FsKUcMSjqkF2OfwOzOPFXI%2FVLqt5oKFrV6lBT%2F6koYqcpr9Y9Rb1nY1Q2YdaozZYkch4TihvoiT%2B80kXJKGAEO7jYMNiE2MkGOqUB0LFGJP8976IS6WhsIOUgZ10XN0H29pZwIBXjU8iv%2BulmLMO0grRcXGWw1nGfWGYZJ%2BFW8wzGBO5CEUvGMaku8fVKQyeE3cN6dE%2Fy17sgMWDsjLWWVJSQjA5jfW%2BBLJ%2BVS4za0Ut6asOXm7%2BjdOLMgUtE6BtSdqicQBIDoIIPGNTf0hi7uCPvHfEHgN8vi9BlDdLdKIrN0Dz8UcFxgpbcA%2B3GvO53&X-Amz-Signature=05fd2e631ae8f950be2d5ebaf7a8a03375b4ebc65f341654ef702d97c523d5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

