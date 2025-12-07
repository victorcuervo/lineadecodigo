---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4YD55Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFpmqlsrIhfFlwT7BGEad0h6u7qAVtumMW6PboCvLjsAiBNkWnSvGu16E%2Fryplc8Cehfy24T9MQRUVNFFcmiJsqNSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOqYy1cPLDAEf061IKtwD0oq4X0VaKwscnkj9%2F7D3RGW7gUbB%2FIfqvpOeLtV%2FvjpPpgGV4z8jSiyqM83CKrPv59CGf37Nbfr6xHAISX1IXsMuveFrZ5tvP7UOvuOfn1DqKMbC98C6fv%2FBWl6XZUVwbSdihmf3IZGCnrxSvwK1hxT4hwrmR1iKzKzAulTbp5Ev9jQgi9AGTu6nMmjddn0EJbWpQXFypYojVL6GyUruFCDd9bns07di3KQSBtJiFCmkGUoRVgAhO0mwBJqfPtQQuPWe1%2FaAxFZvwsxtoAB%2FnX8o0DBgquesOYGQVddO%2BJoc0wN2ZzTRRKK4LZYrtJfhCsCbqI9Z9Kdx2sLEPcovcTh4Bix1Vpw0lgjvPUZtjIwCiJhzboNTpVWtQN8eiLnet4hmMNgp3Xs579Kh8IGtLXzEAwKtBHDuUPHc%2BJSaSL94breTfnhjQUwtD8Z1kSwZT71sM2mNRXVZFCWhnnBw8WM%2B6RH2sjqxULB1kYasQeX7bLpwRizA4%2Bc1SFjGMxiB4w1CAl7q9Db3%2BiFBBRuaDix76LBmRqQS6nefZZe9mM3PaVrvw8%2FIfoJTddbtR27JM%2BcVsUhAov4H0hnjfw6GJW3cSuYnl%2F0Ta5xlkZDUZiOjljV34RHV7HDLn2MwqaLYyQY6pgEPpqTCUGuA%2F97NTQVSDE6zu2jWKaPCzPHfftZ1mYYkOwpU6MRMQVlYwgINZh6oKbrb5f%2FWBHnVMvj2%2BoQ6%2FBZwOWjk8jBqBqvIAclUq2gPCWjRjVWfAex6dw8NORl54dZ2mDmkufP8VD6Ub6PE3Ouj4%2BxA0v0IxQHeOSg8G81ATls7aQtxTEoYvgshqNIVMvNDWtYVGVjHD2Hd8ZNR6MgOmsqFjrSE&X-Amz-Signature=c676b71f026ead9b6ce9a609986cccc5f946e292381ac3a48c1c9afb62f26bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4YD55Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFpmqlsrIhfFlwT7BGEad0h6u7qAVtumMW6PboCvLjsAiBNkWnSvGu16E%2Fryplc8Cehfy24T9MQRUVNFFcmiJsqNSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOqYy1cPLDAEf061IKtwD0oq4X0VaKwscnkj9%2F7D3RGW7gUbB%2FIfqvpOeLtV%2FvjpPpgGV4z8jSiyqM83CKrPv59CGf37Nbfr6xHAISX1IXsMuveFrZ5tvP7UOvuOfn1DqKMbC98C6fv%2FBWl6XZUVwbSdihmf3IZGCnrxSvwK1hxT4hwrmR1iKzKzAulTbp5Ev9jQgi9AGTu6nMmjddn0EJbWpQXFypYojVL6GyUruFCDd9bns07di3KQSBtJiFCmkGUoRVgAhO0mwBJqfPtQQuPWe1%2FaAxFZvwsxtoAB%2FnX8o0DBgquesOYGQVddO%2BJoc0wN2ZzTRRKK4LZYrtJfhCsCbqI9Z9Kdx2sLEPcovcTh4Bix1Vpw0lgjvPUZtjIwCiJhzboNTpVWtQN8eiLnet4hmMNgp3Xs579Kh8IGtLXzEAwKtBHDuUPHc%2BJSaSL94breTfnhjQUwtD8Z1kSwZT71sM2mNRXVZFCWhnnBw8WM%2B6RH2sjqxULB1kYasQeX7bLpwRizA4%2Bc1SFjGMxiB4w1CAl7q9Db3%2BiFBBRuaDix76LBmRqQS6nefZZe9mM3PaVrvw8%2FIfoJTddbtR27JM%2BcVsUhAov4H0hnjfw6GJW3cSuYnl%2F0Ta5xlkZDUZiOjljV34RHV7HDLn2MwqaLYyQY6pgEPpqTCUGuA%2F97NTQVSDE6zu2jWKaPCzPHfftZ1mYYkOwpU6MRMQVlYwgINZh6oKbrb5f%2FWBHnVMvj2%2BoQ6%2FBZwOWjk8jBqBqvIAclUq2gPCWjRjVWfAex6dw8NORl54dZ2mDmkufP8VD6Ub6PE3Ouj4%2BxA0v0IxQHeOSg8G81ATls7aQtxTEoYvgshqNIVMvNDWtYVGVjHD2Hd8ZNR6MgOmsqFjrSE&X-Amz-Signature=de3e4a48577f3cff3d51e4b4981007114b2bec2474515ee888fb95bd60e5892d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

