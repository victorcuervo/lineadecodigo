---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDJCCLV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtWm4bDbIImeawqJvihPWqq5ZBybssYqQx98mq6Lje0QIhAJTBYwEkhrQbiCtBLgZO2dU6O9PvHr2ioBMBfvEX8EnBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGQwzj%2BRPhhaXAjcgq3AOHgL%2BngEdwn1bRxCkg1Q5C8FiDdxXs0qynzCOEolTnSzl%2BaTIpXxoT%2FFzSvimH98NNf1bCMGIE1DGaOa4cOxl7DAAmuIpPOd2N5njg7osMZAmnFSaAp8FTQ0w9PuSrw1xru6zLB736aDqGT6hb70nFfkO87UMIg%2BO1E8NBc9XbdJaS%2BznWkV4SK92SF6xjLERreVb2rzoleRQDIvyPdKh3GHT1ZeP9HWfl0QKs0CfBMvM8aFBV1hPG7ZusbSjxkIkuRTwksMSyU2vgADR7gZD%2Brm1hxZXJeqMypc6ubW%2FrQLcad4MLc4p%2F8kPhLQ2luacMFf5svcN3NphWVh4xaW8kM4440uyPJ%2B7T%2FEhZs7M%2FyPOGD%2B5m6p8W35I6JD6dZ843FGP4VSaYj3XnbaJ4Uko%2BNVKh%2B8aIFgdY6B1nMgyRrxDej4%2BzU6aRVek5fPY21OOLYXvR%2Bl2OKuX%2FplZ4%2FqD2FXX8Nd1AkbLyC8Lpe23ZlnlX1D9OjdC7hGgQnEcIHxT%2B5YNKcivvH5ql3%2BJHCZw46SjkvTVXKnZGXX4t%2FdXz9cg771Ii7L5Qk1NkMACJwZ4d63ikvBmNThdKZZlLUQi22ma1DBJlCkgBQeR3Ve1JXpDu3V19zHiHcwZIRTCQ%2FdLJBjqkAQEO5fRYt8X%2BX1TXu1agq%2Bkuf4UI5MbMLQoRhLyAJjPUFVyndlUITYcIyF%2BZ01SEXUvqtRq7EKseA3lymtonxnzPhnjkhGHXuYsZamLNjUSHkRCClUEytySp3ynZGGGluIuFDkvOPomQ5WqUXMcOLMxRAXpSQRgAKgBu7Eqb3a21TyJgbm5eBqrpeKSQfcPEMKj1%2Fh%2FoMfyBvP6mPWxJcSrxqaSv&X-Amz-Signature=a199fd1390b1a4479d4eac4dd45774f23deaa5c3a07577c931df7f8a4d0a6fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDJCCLV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtWm4bDbIImeawqJvihPWqq5ZBybssYqQx98mq6Lje0QIhAJTBYwEkhrQbiCtBLgZO2dU6O9PvHr2ioBMBfvEX8EnBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGQwzj%2BRPhhaXAjcgq3AOHgL%2BngEdwn1bRxCkg1Q5C8FiDdxXs0qynzCOEolTnSzl%2BaTIpXxoT%2FFzSvimH98NNf1bCMGIE1DGaOa4cOxl7DAAmuIpPOd2N5njg7osMZAmnFSaAp8FTQ0w9PuSrw1xru6zLB736aDqGT6hb70nFfkO87UMIg%2BO1E8NBc9XbdJaS%2BznWkV4SK92SF6xjLERreVb2rzoleRQDIvyPdKh3GHT1ZeP9HWfl0QKs0CfBMvM8aFBV1hPG7ZusbSjxkIkuRTwksMSyU2vgADR7gZD%2Brm1hxZXJeqMypc6ubW%2FrQLcad4MLc4p%2F8kPhLQ2luacMFf5svcN3NphWVh4xaW8kM4440uyPJ%2B7T%2FEhZs7M%2FyPOGD%2B5m6p8W35I6JD6dZ843FGP4VSaYj3XnbaJ4Uko%2BNVKh%2B8aIFgdY6B1nMgyRrxDej4%2BzU6aRVek5fPY21OOLYXvR%2Bl2OKuX%2FplZ4%2FqD2FXX8Nd1AkbLyC8Lpe23ZlnlX1D9OjdC7hGgQnEcIHxT%2B5YNKcivvH5ql3%2BJHCZw46SjkvTVXKnZGXX4t%2FdXz9cg771Ii7L5Qk1NkMACJwZ4d63ikvBmNThdKZZlLUQi22ma1DBJlCkgBQeR3Ve1JXpDu3V19zHiHcwZIRTCQ%2FdLJBjqkAQEO5fRYt8X%2BX1TXu1agq%2Bkuf4UI5MbMLQoRhLyAJjPUFVyndlUITYcIyF%2BZ01SEXUvqtRq7EKseA3lymtonxnzPhnjkhGHXuYsZamLNjUSHkRCClUEytySp3ynZGGGluIuFDkvOPomQ5WqUXMcOLMxRAXpSQRgAKgBu7Eqb3a21TyJgbm5eBqrpeKSQfcPEMKj1%2Fh%2FoMfyBvP6mPWxJcSrxqaSv&X-Amz-Signature=9bcb016dd01d2ebd2c429d69b418ef8a8589fba8e5f52c4a6cfd46c7db9ad74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

