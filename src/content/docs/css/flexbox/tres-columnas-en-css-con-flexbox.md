---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GLQIDM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg%2FBY%2BDZFep5FYV4vH114mH4tngH56wygwaxanIfVC%2BQIhAL9N7izYWzDbpsbcBZNARiY6c3Or9RwDPkjzeDWw8fukKv8DCFoQABoMNjM3NDIzMTgzODA1IgyNSlTa2P7flW%2FZN34q3ANmnTCUc%2BGRh%2F3lRxHpJE75SEJvv5Nzp3LKv1aDoFEqfOQcpRtRHof23gB9ueKcIW4AJCCW77sDtEO8SSZnKy6Ii0LR5IgvREmazHvr3OzAjOc9uPs5pZt%2BnYiZhx0Hbv8QQtEXh%2Bvsot1bbjsb2%2FhNlesO86XG%2B5RGTxYs3BxdGoDxd2sGTQAcOOAN2EN6C4avNVnm5bdg5%2Fnsgl1L5XGqD1jn5xnyuvO5WjnafaK51qVlyuCZZZykiMAiUmvPrpEK%2F3r%2FOzIqISn4i7gAJ6DiJ1m1eILe1v7p1VHg0mQzQh93uGJJ4ymQJk%2F1bj%2B1y4325PDaRSYo4Z3Ap7JBR%2FnZQYmKnT3sj4c0Em4amLY90vx0%2FtQkgA5ZcH8yyAxtDB%2F30XaDtV%2Bq%2Bj6GtyWo9g9YvyLYYtvpukYEIGdlmOnFiuFXle0UT7egxkZolfeqYT0Ctfj9sQrHDcBSQqF7l305B8N19obgV7BRysnNV4f0eZ1j%2BiHgtzx8Da%2B6cp5BZBhREQHYhM6YEN6jihva%2BfhzieryV0E5Hy%2BOSQx%2FQhUcLfvKmB%2FVSd1QFP1gICiHzgd06U25KBB22Vz0k3Yt04eugiCtQTIOy52riyne7A8BeQ1AvFD7O8755aOBhDDEyMrJBjqkAbrw0NBFW9PwuPiJjcZBL0o%2Bp3d5%2FFL3WAMarL%2BsIm%2BV1vONAUEseXEpnVhRbPirkehUvjkzXJ6T6bHEbfbcHw5qkt6%2B2JytAhyh%2BQZ84pNLyq5B15355B%2Fr4loPeq2k9O6lxmG2wyLlWv9nnNBHDmJMJQwiSDXYvWvm7fUjSKUjcUqQaXfVhbfVh8IIfWW8o3YlhRr0NZ4aakxjRivsqUOSz3S%2F&X-Amz-Signature=645ae2742f3fd2f8ced0e164b193b0ff7a12b923720133368932dfc3532b9a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GLQIDM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg%2FBY%2BDZFep5FYV4vH114mH4tngH56wygwaxanIfVC%2BQIhAL9N7izYWzDbpsbcBZNARiY6c3Or9RwDPkjzeDWw8fukKv8DCFoQABoMNjM3NDIzMTgzODA1IgyNSlTa2P7flW%2FZN34q3ANmnTCUc%2BGRh%2F3lRxHpJE75SEJvv5Nzp3LKv1aDoFEqfOQcpRtRHof23gB9ueKcIW4AJCCW77sDtEO8SSZnKy6Ii0LR5IgvREmazHvr3OzAjOc9uPs5pZt%2BnYiZhx0Hbv8QQtEXh%2Bvsot1bbjsb2%2FhNlesO86XG%2B5RGTxYs3BxdGoDxd2sGTQAcOOAN2EN6C4avNVnm5bdg5%2Fnsgl1L5XGqD1jn5xnyuvO5WjnafaK51qVlyuCZZZykiMAiUmvPrpEK%2F3r%2FOzIqISn4i7gAJ6DiJ1m1eILe1v7p1VHg0mQzQh93uGJJ4ymQJk%2F1bj%2B1y4325PDaRSYo4Z3Ap7JBR%2FnZQYmKnT3sj4c0Em4amLY90vx0%2FtQkgA5ZcH8yyAxtDB%2F30XaDtV%2Bq%2Bj6GtyWo9g9YvyLYYtvpukYEIGdlmOnFiuFXle0UT7egxkZolfeqYT0Ctfj9sQrHDcBSQqF7l305B8N19obgV7BRysnNV4f0eZ1j%2BiHgtzx8Da%2B6cp5BZBhREQHYhM6YEN6jihva%2BfhzieryV0E5Hy%2BOSQx%2FQhUcLfvKmB%2FVSd1QFP1gICiHzgd06U25KBB22Vz0k3Yt04eugiCtQTIOy52riyne7A8BeQ1AvFD7O8755aOBhDDEyMrJBjqkAbrw0NBFW9PwuPiJjcZBL0o%2Bp3d5%2FFL3WAMarL%2BsIm%2BV1vONAUEseXEpnVhRbPirkehUvjkzXJ6T6bHEbfbcHw5qkt6%2B2JytAhyh%2BQZ84pNLyq5B15355B%2Fr4loPeq2k9O6lxmG2wyLlWv9nnNBHDmJMJQwiSDXYvWvm7fUjSKUjcUqQaXfVhbfVh8IIfWW8o3YlhRr0NZ4aakxjRivsqUOSz3S%2F&X-Amz-Signature=6fd50922de7e8d5358650f5a852e7893dd64b9e752d90c7630a9d68485d3ed10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

