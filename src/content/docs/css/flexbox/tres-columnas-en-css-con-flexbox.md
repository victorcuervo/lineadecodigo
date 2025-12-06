---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNQ4KRL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXs%2BKjBz3mr74LX2%2BtxjveCJUZW1zKhL22bKkRYeLK5QIgRcYbEiSvFrKKGleLQIt0G4t2FAncPXtoXOve9vhEE0Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJye98BKTNFb32yPYyrcA4rifJhZYSy4AoB4DuHhRPD8fSL3Ws8ukG5g3tIlh84emAs59yRDGzZvv2oXXR3cJk0L6pWzBlIv5RJJTs3ApL4MGIx73QQFwNORIEVMmWyawH%2FtZnCb3KQtnGIFrYyZeXBbJqFKfDUfKld2VuDOdU0mBGwfRnu8TGsrXoGX0ccoEUFnkFAo%2BKBRejfBVGpcSAjVMXP3H1ibRq6D1MYabdJzrQKVEjZyyHUV97aKFseQfIcsmiJa3wfohSMcYeCnB2zMnfKKqI7fBJCGvjgYaGu2RWxHJ2%2FyFKBbaMAIwyCWgABH%2BLdW5J7Qxt%2B9dIyIpokdO4hWoQoSA0LUNAbOUDNP%2FBsnfJyW4XvNCAzFtWTZoDLIJjT6rNq%2FHb72gPzGrupvCdujy2KCJTMbuWyYQQ51m5EoXF1dIVwjnbKPxet3MryJhtYNKZ1Bplx0OMfA111bmEqzOyWImiKJ3ogV4GhHaBZQR2E5odaj%2FuJNQ%2BDn4OsnfkNtB0pNhxbvuHeOOk%2BItN7YcIFzfKduX2SYpdPIfebAdnCUu17a%2Fps2u8zexfyqivkA%2FamKqO%2Bt6ruKyt0PpKcbJ4LLhy0vQeXHtm0mWIV%2FTxpnqH6reeMBfyi6p1Fmj4nQmCfbYmXIMJXT0skGOqUBtAlUzxir99cOlFy6uPQa54WoMXd8pHdxYu32euInYuTO3v9N0IMsqknjcA9Y%2BwQjxNtZoK1bEYhAf40I%2Ff5F79g8dg9NrBQRZT0xka70POfrzShzqrntiXFe6IBg%2Fm5dHVv2wxx0UV9e1vY5kcQtZZGD9RwKNwEZJDASamsCgdb02L0%2B99apbKDyhjcaeBCeuocTWTJQO8kb2Q7vRCgpeEeqG8yP&X-Amz-Signature=cd476ad2c4cd25e8e1c9e11d76ad8103fb102ac3d4de9b996c36580abcaf915b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNQ4KRL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXs%2BKjBz3mr74LX2%2BtxjveCJUZW1zKhL22bKkRYeLK5QIgRcYbEiSvFrKKGleLQIt0G4t2FAncPXtoXOve9vhEE0Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJye98BKTNFb32yPYyrcA4rifJhZYSy4AoB4DuHhRPD8fSL3Ws8ukG5g3tIlh84emAs59yRDGzZvv2oXXR3cJk0L6pWzBlIv5RJJTs3ApL4MGIx73QQFwNORIEVMmWyawH%2FtZnCb3KQtnGIFrYyZeXBbJqFKfDUfKld2VuDOdU0mBGwfRnu8TGsrXoGX0ccoEUFnkFAo%2BKBRejfBVGpcSAjVMXP3H1ibRq6D1MYabdJzrQKVEjZyyHUV97aKFseQfIcsmiJa3wfohSMcYeCnB2zMnfKKqI7fBJCGvjgYaGu2RWxHJ2%2FyFKBbaMAIwyCWgABH%2BLdW5J7Qxt%2B9dIyIpokdO4hWoQoSA0LUNAbOUDNP%2FBsnfJyW4XvNCAzFtWTZoDLIJjT6rNq%2FHb72gPzGrupvCdujy2KCJTMbuWyYQQ51m5EoXF1dIVwjnbKPxet3MryJhtYNKZ1Bplx0OMfA111bmEqzOyWImiKJ3ogV4GhHaBZQR2E5odaj%2FuJNQ%2BDn4OsnfkNtB0pNhxbvuHeOOk%2BItN7YcIFzfKduX2SYpdPIfebAdnCUu17a%2Fps2u8zexfyqivkA%2FamKqO%2Bt6ruKyt0PpKcbJ4LLhy0vQeXHtm0mWIV%2FTxpnqH6reeMBfyi6p1Fmj4nQmCfbYmXIMJXT0skGOqUBtAlUzxir99cOlFy6uPQa54WoMXd8pHdxYu32euInYuTO3v9N0IMsqknjcA9Y%2BwQjxNtZoK1bEYhAf40I%2Ff5F79g8dg9NrBQRZT0xka70POfrzShzqrntiXFe6IBg%2Fm5dHVv2wxx0UV9e1vY5kcQtZZGD9RwKNwEZJDASamsCgdb02L0%2B99apbKDyhjcaeBCeuocTWTJQO8kb2Q7vRCgpeEeqG8yP&X-Amz-Signature=762f4fae63398293bbb01df6adcbbf63de6a9d14f61ddf4c54cc931d91e620a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

