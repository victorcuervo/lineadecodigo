---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LDDYSD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEXUSL23pIcbTxctFZ6g4hslWyL32sLsQu%2Fb%2Fwd35e24AiBBrzzsp7nay4LyVRYeg9rP2Fe2W3gfh6fhRKdb9j7BsSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ce17Bkblm%2B6qHk0KtwDxe6k%2BNqxnRRDLv%2FBXC%2FjVKZH1HiW6gMp0%2B1Oj3a5AFy5qz1PaIV45%2BUhI7B8ZIOE9zFgyy8tl6tGUtbTbtnjjQpiZIsTfRzKQmpX19E%2B0EwExw4YTCJt%2FovYGKdq51jUo%2FERN6ukhTaQ%2Fi9wyiTXi%2FL%2FsTWRJJ72M4FW6lbGj%2Bk97qkIPsbn%2FdvGux8VgDy3w0DvXz47Yi5vPpreZ8V1wGgsI2vhUWLPqWIQgXgAMjEo3wjBoCkOa%2FMFnGkcPbTc4nUuYeVgsRtdHud3xsmyfr89lXBf2kSNBSfJNaOrNitUticQiYederP9FfzEuF7LCtcEuZzH4PzPIvv%2FIBWelqg5mTqQ1D12QhHOWgthhXVpysugl7q%2F6syiz5eIPmDQKrN4OI1YNdGolnkxmRyF64wyvZ%2Fa%2BKcLCEycDczL%2B48qT%2B7lS9357I6BBUzrhpkwX82FdQIcu7oQ4GLkbD1wbM5HLFLs65mMSUW85IYVjDugAtIS2M2SirGs%2BFp6gvtwQwh6FNEizgwGxC8Vf4SlYFKv1jwnjPmlwgh2E2FC3WFxAJPoUsgJ5GdJBJ5hCNdWCC4vOFLIBEc3O9F%2Bhg5NOe09ZAsuddHt5M1dc8%2BPW03pJA934%2BsmBYirKQMwtsHByQY6pgEqRSGfzHOU6xmHWKwy2mOXrvQSiqH%2FjZk5%2FBnrpMxmEixK24xsytV1pmXLfTrUpejgtTCeG5nLqQkRra9Uq%2Fx9lfO5s5vh6aQoL%2FWY0zWLZ5D3ThjvQbngLiqy2OVmD0iYuinZQwUI2NiG3%2FGXYGTUTtxjiN5%2Bg4EG9%2BByeSid5VeN%2Bnx4Li4qvFUXUNMgsjV0ngt%2B9LQvUZ5bsoC9Z%2FeG1CLh94SV&X-Amz-Signature=89839a122a79d30fcb46483ccf56f1ecf80004a880d7620512e5e1557961bf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LDDYSD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEXUSL23pIcbTxctFZ6g4hslWyL32sLsQu%2Fb%2Fwd35e24AiBBrzzsp7nay4LyVRYeg9rP2Fe2W3gfh6fhRKdb9j7BsSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ce17Bkblm%2B6qHk0KtwDxe6k%2BNqxnRRDLv%2FBXC%2FjVKZH1HiW6gMp0%2B1Oj3a5AFy5qz1PaIV45%2BUhI7B8ZIOE9zFgyy8tl6tGUtbTbtnjjQpiZIsTfRzKQmpX19E%2B0EwExw4YTCJt%2FovYGKdq51jUo%2FERN6ukhTaQ%2Fi9wyiTXi%2FL%2FsTWRJJ72M4FW6lbGj%2Bk97qkIPsbn%2FdvGux8VgDy3w0DvXz47Yi5vPpreZ8V1wGgsI2vhUWLPqWIQgXgAMjEo3wjBoCkOa%2FMFnGkcPbTc4nUuYeVgsRtdHud3xsmyfr89lXBf2kSNBSfJNaOrNitUticQiYederP9FfzEuF7LCtcEuZzH4PzPIvv%2FIBWelqg5mTqQ1D12QhHOWgthhXVpysugl7q%2F6syiz5eIPmDQKrN4OI1YNdGolnkxmRyF64wyvZ%2Fa%2BKcLCEycDczL%2B48qT%2B7lS9357I6BBUzrhpkwX82FdQIcu7oQ4GLkbD1wbM5HLFLs65mMSUW85IYVjDugAtIS2M2SirGs%2BFp6gvtwQwh6FNEizgwGxC8Vf4SlYFKv1jwnjPmlwgh2E2FC3WFxAJPoUsgJ5GdJBJ5hCNdWCC4vOFLIBEc3O9F%2Bhg5NOe09ZAsuddHt5M1dc8%2BPW03pJA934%2BsmBYirKQMwtsHByQY6pgEqRSGfzHOU6xmHWKwy2mOXrvQSiqH%2FjZk5%2FBnrpMxmEixK24xsytV1pmXLfTrUpejgtTCeG5nLqQkRra9Uq%2Fx9lfO5s5vh6aQoL%2FWY0zWLZ5D3ThjvQbngLiqy2OVmD0iYuinZQwUI2NiG3%2FGXYGTUTtxjiN5%2Bg4EG9%2BByeSid5VeN%2Bnx4Li4qvFUXUNMgsjV0ngt%2B9LQvUZ5bsoC9Z%2FeG1CLh94SV&X-Amz-Signature=988583ea2ee4564603ed01a0099a3ce59783afd705ceba1187d4479d1a042a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

