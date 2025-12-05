---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FOUKMJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi2ks83slwOP3144jWaFyhyXuJP%2F3nMemjTwcAA5NKgAiEAgsW%2F2jB5kYIibDbS%2B8%2BcJo%2FuaX51rlx5O9kIzhf837Qq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLQDCUHFA6qfzm1wnyrcA8mSXTiQT30uzO%2F7wyhMiXHbN5W5QM4rrAbnqw5oR5nqBPzXZtu5rD7jKxVso01vSHAeH2YFfdehaHCnLnu4%2Ft5aoBY7bqgNpaMumzpgus7cM%2BDYGJkBM9P%2FAR0hDMAh6UxtJUYGhrgpvf0i%2Ft07EZ5wh7RF4Ayebl5Ffeaq%2B%2BvVOLX9Ew5TdYmjMVIbglEzim08lIGiu%2BB8FiZHCAAr1iEetCDeiEXTIvZER%2FULxVfkzvDuyb7vpe%2FHnVqv5QTY55%2BNWrq4UBX9CayYcQfIKW3fpV677ZOjFyYUjc9YIzMcnDNMCPJKVnDSaf6UKnYHAfeOky4fzNR4EGpcNhzXcEcNWKHedifbNBMhXBzPGKOcPqYBSAibcrbQ28koTg4RVQWzZTLeg5NX9763bxlmFYo52HBQqdHlSOtlQ0c7Chf68zvRqvxfY78QwG5XcVLAUR6FZbX4VAooTi25kDYZly%2FbIu%2B5B%2BEp3IatcD9zZu2gIywZ37jMPU2kixH1o0jZGdVQlVeeBlJ449bN%2B%2BxRnI4R5lFgtkTlVs2gwGA5Wez00BvulS7y6lXwuRFU7uZBCb7G6PZHnyrEkcqJpbikbh5nrqtAamJ6KR86JLfGRAAXJIAfGOO3YMm27mhxMNbGzckGOqUBt05Z8%2B5nWz8wfIiL5d49bArbBUNmdCjZ1xFM9f%2B%2FXldOzI6pqmJAYsDm2oEAQTJaWySfhshewGZ0nSWCc6lKTgVeHnCJQTh%2FME%2BeplcKkbryjHzNDaG3bDClw5c2i26gv%2BNp8sJsz%2BqXzThnRpdgQOXnH%2FcI6HxuyW6oQrMDPZiGCrBkGX5NPZBcNHnh8JBh1tz%2Fb5fZrcHui5uAwYpu94zYg1aD&X-Amz-Signature=bb3dd40db5fd71f12fbc823cf63a122938d103fee97a569125d878b1a80ac909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FOUKMJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi2ks83slwOP3144jWaFyhyXuJP%2F3nMemjTwcAA5NKgAiEAgsW%2F2jB5kYIibDbS%2B8%2BcJo%2FuaX51rlx5O9kIzhf837Qq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLQDCUHFA6qfzm1wnyrcA8mSXTiQT30uzO%2F7wyhMiXHbN5W5QM4rrAbnqw5oR5nqBPzXZtu5rD7jKxVso01vSHAeH2YFfdehaHCnLnu4%2Ft5aoBY7bqgNpaMumzpgus7cM%2BDYGJkBM9P%2FAR0hDMAh6UxtJUYGhrgpvf0i%2Ft07EZ5wh7RF4Ayebl5Ffeaq%2B%2BvVOLX9Ew5TdYmjMVIbglEzim08lIGiu%2BB8FiZHCAAr1iEetCDeiEXTIvZER%2FULxVfkzvDuyb7vpe%2FHnVqv5QTY55%2BNWrq4UBX9CayYcQfIKW3fpV677ZOjFyYUjc9YIzMcnDNMCPJKVnDSaf6UKnYHAfeOky4fzNR4EGpcNhzXcEcNWKHedifbNBMhXBzPGKOcPqYBSAibcrbQ28koTg4RVQWzZTLeg5NX9763bxlmFYo52HBQqdHlSOtlQ0c7Chf68zvRqvxfY78QwG5XcVLAUR6FZbX4VAooTi25kDYZly%2FbIu%2B5B%2BEp3IatcD9zZu2gIywZ37jMPU2kixH1o0jZGdVQlVeeBlJ449bN%2B%2BxRnI4R5lFgtkTlVs2gwGA5Wez00BvulS7y6lXwuRFU7uZBCb7G6PZHnyrEkcqJpbikbh5nrqtAamJ6KR86JLfGRAAXJIAfGOO3YMm27mhxMNbGzckGOqUBt05Z8%2B5nWz8wfIiL5d49bArbBUNmdCjZ1xFM9f%2B%2FXldOzI6pqmJAYsDm2oEAQTJaWySfhshewGZ0nSWCc6lKTgVeHnCJQTh%2FME%2BeplcKkbryjHzNDaG3bDClw5c2i26gv%2BNp8sJsz%2BqXzThnRpdgQOXnH%2FcI6HxuyW6oQrMDPZiGCrBkGX5NPZBcNHnh8JBh1tz%2Fb5fZrcHui5uAwYpu94zYg1aD&X-Amz-Signature=ed564d49d5649f164cc13fc8aa4321ba57b239756a568189247168dfdf5c61d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

