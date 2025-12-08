---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFNEHPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCO9oRONk%2BrsjgwsoDLUJeQH8iMKT1dGetq%2BDAkCbwAAiAFe2mzTRRIcDVaAOTheaAEfdUx1lc6b%2FxVXUlzE6gc3yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAO2pem%2BdAJzJ6qqKtwDaG8h0SxLx9yC%2FskclhDNiMo%2BPc4tIL9JrSJPCVNtWGSCjINJYTv%2FQySP8yzi8jJHzmLBz1%2BNlOTAg4X7FO4VfQgQzWH0Lhb93WU0BtNcsRoY6SVjEBtrYzRD7PkqXON9QQRb2V43%2Ba4WO5Ge08P5d3r7Ps4w%2BpmvX8OqCUZlWOqz92sq8xIZrazj%2BGAviAjRFl%2BaiM8%2FZ7QKikGjocsUvbB6%2BEp24VltWRbKykQyoTQjngMkGAcZwdh%2BnOjUbKM8vSp4Myw9hDhbQbK13erlI2M01hx5x3NuaQvZ0PQtXXPDR3iGxeP5VCU6RakthFZlTyGwSNxHWQGMTFAfzu9VRXag8djQKmHQSyZGGgMqP%2BIpBPO6f8UZI%2FBhA9XJFZ3uHvjijeUcJsVBdPO25ed0BS4O58menUr9dWt6E4s3Oko9cjpnJKFjf2hopEPJNZMuEN9t2NqEYfJkm4R%2Fgt%2BbX0YChgFpgpe58tkhou63d2Fz1Z%2FsnpCdaMeyVUCctXhVINd0a2%2B0Os8uVJHabtElSztC7bZUhD%2F254sDH6SWAkOrIeT4BVgtAK5n9pinMXz7V7OXXFR2omFOvrFxsRp1o6IvgVxbRQ19CUcIjqNSsWsC%2F6kOlgcVHeMWMJ0w7tDZyQY6pgE7%2BwpAnuo5ejELU7sdM8o4fwWHGTXtzHJ%2BjyDGAnaeCUvv3KxWW9I19dFplVICuxWfY7Qh3T6o1kILB2uETzPttDDUSVlzeVeXjt2%2BXF5sMGGbRBsr5sHr3ut%2BhNX6g5OI94KQYSfZohk8gtuAjSVFF4CunPFqbVWCPjY9Uc1OoXJb9H9RMZy5M49NBAqH%2Ff66Z7BJIN6%2BfXmgoT%2BLIS5OhwdlVf2%2F&X-Amz-Signature=65aa2e0d67a97929aab74c12401b9f2b9f79c54a111f2adda47574acce59475e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFNEHPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCO9oRONk%2BrsjgwsoDLUJeQH8iMKT1dGetq%2BDAkCbwAAiAFe2mzTRRIcDVaAOTheaAEfdUx1lc6b%2FxVXUlzE6gc3yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAO2pem%2BdAJzJ6qqKtwDaG8h0SxLx9yC%2FskclhDNiMo%2BPc4tIL9JrSJPCVNtWGSCjINJYTv%2FQySP8yzi8jJHzmLBz1%2BNlOTAg4X7FO4VfQgQzWH0Lhb93WU0BtNcsRoY6SVjEBtrYzRD7PkqXON9QQRb2V43%2Ba4WO5Ge08P5d3r7Ps4w%2BpmvX8OqCUZlWOqz92sq8xIZrazj%2BGAviAjRFl%2BaiM8%2FZ7QKikGjocsUvbB6%2BEp24VltWRbKykQyoTQjngMkGAcZwdh%2BnOjUbKM8vSp4Myw9hDhbQbK13erlI2M01hx5x3NuaQvZ0PQtXXPDR3iGxeP5VCU6RakthFZlTyGwSNxHWQGMTFAfzu9VRXag8djQKmHQSyZGGgMqP%2BIpBPO6f8UZI%2FBhA9XJFZ3uHvjijeUcJsVBdPO25ed0BS4O58menUr9dWt6E4s3Oko9cjpnJKFjf2hopEPJNZMuEN9t2NqEYfJkm4R%2Fgt%2BbX0YChgFpgpe58tkhou63d2Fz1Z%2FsnpCdaMeyVUCctXhVINd0a2%2B0Os8uVJHabtElSztC7bZUhD%2F254sDH6SWAkOrIeT4BVgtAK5n9pinMXz7V7OXXFR2omFOvrFxsRp1o6IvgVxbRQ19CUcIjqNSsWsC%2F6kOlgcVHeMWMJ0w7tDZyQY6pgE7%2BwpAnuo5ejELU7sdM8o4fwWHGTXtzHJ%2BjyDGAnaeCUvv3KxWW9I19dFplVICuxWfY7Qh3T6o1kILB2uETzPttDDUSVlzeVeXjt2%2BXF5sMGGbRBsr5sHr3ut%2BhNX6g5OI94KQYSfZohk8gtuAjSVFF4CunPFqbVWCPjY9Uc1OoXJb9H9RMZy5M49NBAqH%2Ff66Z7BJIN6%2BfXmgoT%2BLIS5OhwdlVf2%2F&X-Amz-Signature=b11e4478cf99cc9920dd4985feabc574beaacb6c1688cd7495f9a8731bab1f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

