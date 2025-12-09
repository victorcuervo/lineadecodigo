---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDYYO7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD02ETDF0oZ1lxgIVMMG%2FnarnU6n0MBq0V%2BxY1YQ7Rf5wIgWWqYUo2Krob7gYi0ndtf7IKwazxYBhwqvlht4PnhtYMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvssdBOt4zfR8X7BircAzHyO3x%2BseTx9mV5v%2BbfBd3Q%2Bhlg3eVGljpDVXVhU9cT8dUIP%2FlvX177AcVLxExeXcRF9WGUSI3TPXbW%2Fq7nt1%2BYMfB0xe7sus9oBOcswJqZYZ1hO1K2UWz8hMMDvQrrYgL5FTK0nylcd38ZFmPERi5IN0XQe9u%2BA35aach3GulNkn5VXkz6VQtaHbtpWzyh%2BOZrWnTT1IrNm%2FJ7WGgavm9szZsxt2BYoVvY2GiKGn4jFtxV%2FRnqch%2FXd%2FroxaqbHguJZ2lCHRszovFVIe9ztS97w3bhI8xThXN4dPs1%2Brt91TTOAqfCcbeLzIlZLLIOvsxRDObzhOOZN9PPvSk7oiv5n0Akidy%2Fvp4L6kRjx6HMhMAmWLnWMR6aPVO6O%2F%2Baodkrz6QZQNO0zJmXQBRzg96ba%2BLklwJgytKGxpreiuCoR1ffZZGNUgJpKSsc42rznBKd%2BGketcoZ%2F7vnf1uvqHP5mrkoHO0dd4X%2B1K2RBIvxsA5KDyjzkr77Z3UYlus400yo%2FkbDZmdxstM1%2B2ja9UtelWymId6d1BGteStCjz70FobvveCsnGp%2F4B5QmMwXw8YezkC2PAW3Pi5SzJHW%2BXZiyA%2B%2BDCaEIbt133w%2BH3ap8hxiFHoDNaunu5jcMJPp3ckGOqUBbjW3bHb0hpCu1PBpgPbMoaP6EIw%2B7dploFBKMW8JGVAi8HEY2sd85dmGIslsJpNAKKGP3ecMBIHYzJC5wW1X56FZqOTtDo5N6fCrLVFlN5iygeOSG%2B4Wx%2BkERRLxBL2HCdo0HPtLiKIoDGnGBD4nAMVPCGicAZBqrc7zDnK6GDgVc2yDEh1vbRK9Os7GzvnWZNGHEqpApIJ8zHXsDIaPizhLA8xi&X-Amz-Signature=df3cdb8e1433b9265defa419e21928402cd4aa9ad5bf6a954dec75a6c53fa1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDYYO7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD02ETDF0oZ1lxgIVMMG%2FnarnU6n0MBq0V%2BxY1YQ7Rf5wIgWWqYUo2Krob7gYi0ndtf7IKwazxYBhwqvlht4PnhtYMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvssdBOt4zfR8X7BircAzHyO3x%2BseTx9mV5v%2BbfBd3Q%2Bhlg3eVGljpDVXVhU9cT8dUIP%2FlvX177AcVLxExeXcRF9WGUSI3TPXbW%2Fq7nt1%2BYMfB0xe7sus9oBOcswJqZYZ1hO1K2UWz8hMMDvQrrYgL5FTK0nylcd38ZFmPERi5IN0XQe9u%2BA35aach3GulNkn5VXkz6VQtaHbtpWzyh%2BOZrWnTT1IrNm%2FJ7WGgavm9szZsxt2BYoVvY2GiKGn4jFtxV%2FRnqch%2FXd%2FroxaqbHguJZ2lCHRszovFVIe9ztS97w3bhI8xThXN4dPs1%2Brt91TTOAqfCcbeLzIlZLLIOvsxRDObzhOOZN9PPvSk7oiv5n0Akidy%2Fvp4L6kRjx6HMhMAmWLnWMR6aPVO6O%2F%2Baodkrz6QZQNO0zJmXQBRzg96ba%2BLklwJgytKGxpreiuCoR1ffZZGNUgJpKSsc42rznBKd%2BGketcoZ%2F7vnf1uvqHP5mrkoHO0dd4X%2B1K2RBIvxsA5KDyjzkr77Z3UYlus400yo%2FkbDZmdxstM1%2B2ja9UtelWymId6d1BGteStCjz70FobvveCsnGp%2F4B5QmMwXw8YezkC2PAW3Pi5SzJHW%2BXZiyA%2B%2BDCaEIbt133w%2BH3ap8hxiFHoDNaunu5jcMJPp3ckGOqUBbjW3bHb0hpCu1PBpgPbMoaP6EIw%2B7dploFBKMW8JGVAi8HEY2sd85dmGIslsJpNAKKGP3ecMBIHYzJC5wW1X56FZqOTtDo5N6fCrLVFlN5iygeOSG%2B4Wx%2BkERRLxBL2HCdo0HPtLiKIoDGnGBD4nAMVPCGicAZBqrc7zDnK6GDgVc2yDEh1vbRK9Os7GzvnWZNGHEqpApIJ8zHXsDIaPizhLA8xi&X-Amz-Signature=1b362e5822c8c20a364eb2158812be6b699d4056a29e6ba066d4d2d30b4a46f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

