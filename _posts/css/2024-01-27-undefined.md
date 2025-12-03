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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ3NYKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCNHars0DRwWO6TheK42DIUvdpsW39M5HilrYGkUpJ0DQIhANohj7RWBrMpHgq5R4Eh1%2FkdXOzVJFBqbbJzxg93TpYgKv8DCCIQABoMNjM3NDIzMTgzODA1IgyirU46hzi6QPJRXdEq3AMHRrrMENscVf9RuaXTz4WvwxsT8FbQjw8tdArCf1Ui2yM5kVw%2BktY1vu02An38kxWLcMTLgcf94Zo3iulq3AwCkcqQN4j57cxIww3%2FhdaocgpRv4fPd4BfGkXvVV1ZmqNZHbTeTW%2BJ3p6mnbxDtN9NRU1q1IkXie5j%2F13Zm81UTMkr8hf3DIklngsitfnFJki7VvB1f0VfNmz4qJ6SKiMiHvOVd03OS8Jm7atg7MwCvrYQ9X0WnRs8NC%2BCTtu8CDQLJwoZXSqS0E140ghmcOyEygzJ6PnPkd%2Be7VbnUU9%2BQpOrwMLtTZi3NnpJKruKeBADswDiKqqWrOGfidT0xYrGiac9qSA5Ch4lz5nrMCd%2Be2Pjc%2BnxpK2Sl5iaTlgg51WFhtxxXeQpE3CiqFXnMwrUTlADZctd60VWmCPCanSsPSN9TXk3HIauDO%2FizJ6y0W3J00Uqh2S8RKP9jJAb1pHznUdhgnUHy5mOOZ2PCBGiM%2FnB8v57a1LJ3467MxgSNQPfWygq0JNmUi%2FTC1lvUASJLmoiWQIkmzx4RFBGY0Wx%2FYKQPvgXXX8bb1nmO%2B7BOBXlVCSKWPZrojgLGuNBzNozrvOBZZo9Uo56OElPpZMq7KRREVbOEKG76ECxOzCglr7JBjqkAddjT6oC2ErEoCzN3BT9FEGo6kurr9%2FE0w6mKvMt2ckZ6WZNuiA8oKpHLuemGvukLVoYw7K9XwhCVr%2BQnyetDGrt2VW%2BFcdS9QfwPs%2FQCM05PWeEwKCAoQyqtEsoI69O33wlkEguE%2BRdSduzYp7DGEMwS0z7uHr7wYg9lXEcMJgQUZ0YF8FByz6yUhLMt9eW%2BBCT9dnKgrEzeYHzBW8lmNbUO8o9&X-Amz-Signature=d209b12189006956de1b68664c78e5de3b2be6d98b64ece9356d75a985a424cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ3NYKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCNHars0DRwWO6TheK42DIUvdpsW39M5HilrYGkUpJ0DQIhANohj7RWBrMpHgq5R4Eh1%2FkdXOzVJFBqbbJzxg93TpYgKv8DCCIQABoMNjM3NDIzMTgzODA1IgyirU46hzi6QPJRXdEq3AMHRrrMENscVf9RuaXTz4WvwxsT8FbQjw8tdArCf1Ui2yM5kVw%2BktY1vu02An38kxWLcMTLgcf94Zo3iulq3AwCkcqQN4j57cxIww3%2FhdaocgpRv4fPd4BfGkXvVV1ZmqNZHbTeTW%2BJ3p6mnbxDtN9NRU1q1IkXie5j%2F13Zm81UTMkr8hf3DIklngsitfnFJki7VvB1f0VfNmz4qJ6SKiMiHvOVd03OS8Jm7atg7MwCvrYQ9X0WnRs8NC%2BCTtu8CDQLJwoZXSqS0E140ghmcOyEygzJ6PnPkd%2Be7VbnUU9%2BQpOrwMLtTZi3NnpJKruKeBADswDiKqqWrOGfidT0xYrGiac9qSA5Ch4lz5nrMCd%2Be2Pjc%2BnxpK2Sl5iaTlgg51WFhtxxXeQpE3CiqFXnMwrUTlADZctd60VWmCPCanSsPSN9TXk3HIauDO%2FizJ6y0W3J00Uqh2S8RKP9jJAb1pHznUdhgnUHy5mOOZ2PCBGiM%2FnB8v57a1LJ3467MxgSNQPfWygq0JNmUi%2FTC1lvUASJLmoiWQIkmzx4RFBGY0Wx%2FYKQPvgXXX8bb1nmO%2B7BOBXlVCSKWPZrojgLGuNBzNozrvOBZZo9Uo56OElPpZMq7KRREVbOEKG76ECxOzCglr7JBjqkAddjT6oC2ErEoCzN3BT9FEGo6kurr9%2FE0w6mKvMt2ckZ6WZNuiA8oKpHLuemGvukLVoYw7K9XwhCVr%2BQnyetDGrt2VW%2BFcdS9QfwPs%2FQCM05PWeEwKCAoQyqtEsoI69O33wlkEguE%2BRdSduzYp7DGEMwS0z7uHr7wYg9lXEcMJgQUZ0YF8FByz6yUhLMt9eW%2BBCT9dnKgrEzeYHzBW8lmNbUO8o9&X-Amz-Signature=edcc6fe15fbbea57e35bbe19bdf62e492854ece832938dc358ec5f61bd3dc7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

