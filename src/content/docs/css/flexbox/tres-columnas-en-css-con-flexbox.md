---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTTXN2F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvoIJWCI3DQfrUmOMUuLbRFuOKffKEcbkYw1gDqp00LAiBJbVvR7n8t1uAcby%2FabfdbnfRCq75PvAz%2BR5CIAO9OUyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMOZvlCcq9J8G%2FyGZNKtwDIrSPdm%2FkE6uw1FOsvhHa88%2FMpHmJ1wVB3ft%2FXWheZek1%2BGc2O0m46jeFd9QRv%2BuXvRZOGRRdqzYMWMrqG46UBUnrTLUZkJtan4amTbxXMG1Hqbt7qxSjzyPuGoK0Xceb3c4KULqcyWqScnDrn9Xof1aKg67lAef7at0EP7%2BGRHRTIz9m0A7tDAbHgRJKUXtVD6QjItnVT0A0HwSAIQ1MhOMp%2Fdtiu8lsAa%2FosnMYJ0ikys3VZKi4vCDvVCKyW0rB%2Fosw7ORA%2BHnKLdMC5yGCWivZm1aVN38gQzVGputkBb6Ouvp9QKYs4rIF675QEPNdw9h1gbnHZiC9rJ6Zwn7Txqp4ma4Ls26V1c4gtpqg7tSBGSE%2FCml3Nz4%2BUJ3UYOPSfZBLkF%2F8hF8ZUPOtrH%2FSV5WDrDRJODGjxBf2w1E8kaNKCMHPeAeKMId7Jt5rHt8Wnj3dYuwoDr5N97fIzifg7AZj%2FZ1t7iFaMO1C1OFMVBvUEgsglcKXykm5GAXnAKwpSydUfsCzh9CTYI1PQuOvfN8%2F6bEOpj2p0aO1Od3Q5%2FwTq4dySLfRW8%2FljjkfLkgyo9BSMXfCtzrQvEA04XPyNM8ALgqWTVl%2FzM9%2BlnFVI%2FBGMvRUzFGUrTw7E9wwx5DNyQY6pgEU0fJTqlp9FpyBBcpL42owHqnHKgFf9QqcVA3m4IrWba1mYjKQherh2ZAAtb5MhEd1Cp7i7Abj3XeoBKbaN0%2FQRKsdE9MVjFd8PqeR3ouUxq516dHJkyn%2B7fzJfoUhMaHa2NWDd41a1qjTzhKqwVt1zGkRqFvZhMAAisuHCKqiOLAlUcKZSxOZmBbsmU%2Bsg%2FVHXnY9hv%2FziGLk3Ba2mwN6axR0Az4a&X-Amz-Signature=94c22fc8971ef6e75608d7a7c596cb8189498e15cc96d6073eda538df25dda43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTTXN2F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvoIJWCI3DQfrUmOMUuLbRFuOKffKEcbkYw1gDqp00LAiBJbVvR7n8t1uAcby%2FabfdbnfRCq75PvAz%2BR5CIAO9OUyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMOZvlCcq9J8G%2FyGZNKtwDIrSPdm%2FkE6uw1FOsvhHa88%2FMpHmJ1wVB3ft%2FXWheZek1%2BGc2O0m46jeFd9QRv%2BuXvRZOGRRdqzYMWMrqG46UBUnrTLUZkJtan4amTbxXMG1Hqbt7qxSjzyPuGoK0Xceb3c4KULqcyWqScnDrn9Xof1aKg67lAef7at0EP7%2BGRHRTIz9m0A7tDAbHgRJKUXtVD6QjItnVT0A0HwSAIQ1MhOMp%2Fdtiu8lsAa%2FosnMYJ0ikys3VZKi4vCDvVCKyW0rB%2Fosw7ORA%2BHnKLdMC5yGCWivZm1aVN38gQzVGputkBb6Ouvp9QKYs4rIF675QEPNdw9h1gbnHZiC9rJ6Zwn7Txqp4ma4Ls26V1c4gtpqg7tSBGSE%2FCml3Nz4%2BUJ3UYOPSfZBLkF%2F8hF8ZUPOtrH%2FSV5WDrDRJODGjxBf2w1E8kaNKCMHPeAeKMId7Jt5rHt8Wnj3dYuwoDr5N97fIzifg7AZj%2FZ1t7iFaMO1C1OFMVBvUEgsglcKXykm5GAXnAKwpSydUfsCzh9CTYI1PQuOvfN8%2F6bEOpj2p0aO1Od3Q5%2FwTq4dySLfRW8%2FljjkfLkgyo9BSMXfCtzrQvEA04XPyNM8ALgqWTVl%2FzM9%2BlnFVI%2FBGMvRUzFGUrTw7E9wwx5DNyQY6pgEU0fJTqlp9FpyBBcpL42owHqnHKgFf9QqcVA3m4IrWba1mYjKQherh2ZAAtb5MhEd1Cp7i7Abj3XeoBKbaN0%2FQRKsdE9MVjFd8PqeR3ouUxq516dHJkyn%2B7fzJfoUhMaHa2NWDd41a1qjTzhKqwVt1zGkRqFvZhMAAisuHCKqiOLAlUcKZSxOZmBbsmU%2Bsg%2FVHXnY9hv%2FziGLk3Ba2mwN6axR0Az4a&X-Amz-Signature=cd8deffe029eaa5bcd3bdd75a60007d2f9de9b8271f572003a33a23e0f109fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

