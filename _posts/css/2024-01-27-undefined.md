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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE3JR4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIERH%2F7bq%2BuSxkQXXaeqbgtcPXklE5upjRK53tw09DRgAAiEAqTsRYeZeIOV%2FPGJjQQnHFJAraMOewhJbsV8Zy5diT1kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOp%2BX%2BTN4sqljDlzRCrcA2XyL2ZZDf8HiB6OdVa6H%2Bs4i1%2BdCS%2FsrT1NAKw2sg%2BWy12R05FEj38A2c5CDMBjzT%2BNfb4Mq9YJa5MfZVXQtiJN5vjinCBkdYIzogTMXHVO5ytGkQPDJPrItFE6Y3huucHBjDBXpkts%2BW1Vng3%2Bit67mslVtxBMs%2FBNhqbcwqnkYjp7fp6Mi5grbd33PZDGG3D2UPgqF3TOyLomIDa9ylYRiTWiSL%2BdE9En%2Fg2lsi5gfG7on7%2FtI2dV8wg3vMCcr%2Bcy8xkpOXBiqaTZPTNs2tJ7gOH4Y%2BLYGYZ6WenXyjjTcIKWnE6Z6mx68SfjXrbmPGyCERO6jcXyJ%2BByYbkxu2q9Xd7zK2GEwtSzsKsk9svLYP%2BArFjPxi8u9WH3%2FQFSuU9l8v66uhiLLhFx8mngt5lRP0CPuba7s4hHZEWzFVjy0tH4Erv%2B6UCyfQWqtaKZI%2BZmBzAgj5jPHxqkVBDlJb2OJoQaSbuL%2FXmKTakSAHmeExhqAYIdLIeX5CjpyJb%2BS4jdgVl5CJn8E0lPrnTLwgxdyOewzOhuebc%2B%2BnjJU9CxayRYcZ%2FI1cTQmWCoooBXDYoKJXqr4E81aPj4LZsQukieNQny2Bh0vBsQ1CWEmWhyChikoYUpE4XYUelwMNyUvskGOqUBrd8%2FOJfM2JhSoGinZ6lWnrY1dTdUlTwlcpv5FPAbQHN9OzoTl6AhewtAQDaFnUyksvw7X8wigXZBrqr03kQ4vh4hMFMAIJ71rU%2BWEJBHyG1VB1qxBYWwHN2cXcFNHW9E9bmTfR1WWB5uUXqiPvCMlGfyfJvjRrL%2FpmMdP1m%2FnhQDar3GcZMYNgvjJM7SOCbXr39TKl508d6jYabwNTboh7oF7u3o&X-Amz-Signature=81f67c6a23b1ca74f20f2e8fc0838c3b8364712a4b347913dd1436edb2326748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE3JR4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIERH%2F7bq%2BuSxkQXXaeqbgtcPXklE5upjRK53tw09DRgAAiEAqTsRYeZeIOV%2FPGJjQQnHFJAraMOewhJbsV8Zy5diT1kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOp%2BX%2BTN4sqljDlzRCrcA2XyL2ZZDf8HiB6OdVa6H%2Bs4i1%2BdCS%2FsrT1NAKw2sg%2BWy12R05FEj38A2c5CDMBjzT%2BNfb4Mq9YJa5MfZVXQtiJN5vjinCBkdYIzogTMXHVO5ytGkQPDJPrItFE6Y3huucHBjDBXpkts%2BW1Vng3%2Bit67mslVtxBMs%2FBNhqbcwqnkYjp7fp6Mi5grbd33PZDGG3D2UPgqF3TOyLomIDa9ylYRiTWiSL%2BdE9En%2Fg2lsi5gfG7on7%2FtI2dV8wg3vMCcr%2Bcy8xkpOXBiqaTZPTNs2tJ7gOH4Y%2BLYGYZ6WenXyjjTcIKWnE6Z6mx68SfjXrbmPGyCERO6jcXyJ%2BByYbkxu2q9Xd7zK2GEwtSzsKsk9svLYP%2BArFjPxi8u9WH3%2FQFSuU9l8v66uhiLLhFx8mngt5lRP0CPuba7s4hHZEWzFVjy0tH4Erv%2B6UCyfQWqtaKZI%2BZmBzAgj5jPHxqkVBDlJb2OJoQaSbuL%2FXmKTakSAHmeExhqAYIdLIeX5CjpyJb%2BS4jdgVl5CJn8E0lPrnTLwgxdyOewzOhuebc%2B%2BnjJU9CxayRYcZ%2FI1cTQmWCoooBXDYoKJXqr4E81aPj4LZsQukieNQny2Bh0vBsQ1CWEmWhyChikoYUpE4XYUelwMNyUvskGOqUBrd8%2FOJfM2JhSoGinZ6lWnrY1dTdUlTwlcpv5FPAbQHN9OzoTl6AhewtAQDaFnUyksvw7X8wigXZBrqr03kQ4vh4hMFMAIJ71rU%2BWEJBHyG1VB1qxBYWwHN2cXcFNHW9E9bmTfR1WWB5uUXqiPvCMlGfyfJvjRrL%2FpmMdP1m%2FnhQDar3GcZMYNgvjJM7SOCbXr39TKl508d6jYabwNTboh7oF7u3o&X-Amz-Signature=bb45e60e624ba39f4a21e4529f0c8c7e0d46ac30f991113c22db0938fdc2df9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

