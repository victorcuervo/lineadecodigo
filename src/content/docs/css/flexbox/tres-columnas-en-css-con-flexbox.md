---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUX2RGYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FY6f5UDkPTrS7NnVk6IXGD%2Fy6bIbQEUjgHIsln3wpZAiAjm13%2FNGsudMHiesvotRb4xLXbnzJdaV8UI0ZwCqwn8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gdnoRd%2FAwUFDhTOKtwDNDd12vuwm22PVixuOB1LXtJa8kD%2Bcz5qoi6z5L8CI6x%2BUDiUL1HOEZWmM%2BCEohU7GglRoV%2F%2BL3wukLaRKdKZoMRU312mwTJodhzDfbsmlntM%2FrruwiZwfUgtE%2Fqc9PpyaNUlJZE%2BvfrdJGrO3Wfv0eT7JeKnpYxY6MDlrujVXMSVC%2FFv6E%2Bt8KgPWUlBfLPUCrk70IjCJylAo7llAdTNYo5GcA%2F7WOmalQuPdQVSR8eQs48y1us1a2NITBVgTZdC4hL8slnLPliBAMaQvEWpejXRZwIY1duvmuO6HS2tLhGJL3fysORWQyhcKhhFwgZ52H%2BNpn29AbMsVmQ8WuQ%2Bx9V14hj%2BVE1HeJU%2BKhzJo7eJwhCyMXcUmaexffcxkGzFV40gKLN8AUqoeR5S4%2FkR1WPiDP9ByVBlg74K%2BqlFnxxDo3hH7u%2F1I6MzBwtSStKy2UFkCQIZTPcQ5y7CNn3V%2FNN%2Bstm6eMJx9A%2BJ1eIjsVoh02D5GbLeT5EzuMIObkrnwhCeDo4UeLWZlq7%2FRYGj2YBvDat8ud2O6MZJMLN1TlBXOyj1FIDXbivQSBkd7fNmbnnnEBwni4ke6nCjP9Ws9tm94J8ZMKbQbKiVGLKxHBC2gfmnkWLbBIuqkDswrv7SyQY6pgGOKOAkbBRmUWEsUr6r6zin%2BuDY5vZjFAtr1lz5LoZdMZlgsPD7Y1s46K4aMrT1Z5R5U8DbNphagaqDQNkfJxMLtnYpCcIK1lDuB23dOWM30GNs%2BmfRS76to1lkNGwLFTdNEKp4Ap306Mmk%2F65W6ZyRQ0%2Bk%2BvUio9ATWLDLDX08iz3nD8cP2q3f7dvGHJf73OCfLo7Tb16Bs1Hi0q6dcXrUpb536Q%2FH&X-Amz-Signature=cfe49a3cadfa6287dd84c13901d00c4face45148963ad6798027894e81726429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUX2RGYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FY6f5UDkPTrS7NnVk6IXGD%2Fy6bIbQEUjgHIsln3wpZAiAjm13%2FNGsudMHiesvotRb4xLXbnzJdaV8UI0ZwCqwn8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gdnoRd%2FAwUFDhTOKtwDNDd12vuwm22PVixuOB1LXtJa8kD%2Bcz5qoi6z5L8CI6x%2BUDiUL1HOEZWmM%2BCEohU7GglRoV%2F%2BL3wukLaRKdKZoMRU312mwTJodhzDfbsmlntM%2FrruwiZwfUgtE%2Fqc9PpyaNUlJZE%2BvfrdJGrO3Wfv0eT7JeKnpYxY6MDlrujVXMSVC%2FFv6E%2Bt8KgPWUlBfLPUCrk70IjCJylAo7llAdTNYo5GcA%2F7WOmalQuPdQVSR8eQs48y1us1a2NITBVgTZdC4hL8slnLPliBAMaQvEWpejXRZwIY1duvmuO6HS2tLhGJL3fysORWQyhcKhhFwgZ52H%2BNpn29AbMsVmQ8WuQ%2Bx9V14hj%2BVE1HeJU%2BKhzJo7eJwhCyMXcUmaexffcxkGzFV40gKLN8AUqoeR5S4%2FkR1WPiDP9ByVBlg74K%2BqlFnxxDo3hH7u%2F1I6MzBwtSStKy2UFkCQIZTPcQ5y7CNn3V%2FNN%2Bstm6eMJx9A%2BJ1eIjsVoh02D5GbLeT5EzuMIObkrnwhCeDo4UeLWZlq7%2FRYGj2YBvDat8ud2O6MZJMLN1TlBXOyj1FIDXbivQSBkd7fNmbnnnEBwni4ke6nCjP9Ws9tm94J8ZMKbQbKiVGLKxHBC2gfmnkWLbBIuqkDswrv7SyQY6pgGOKOAkbBRmUWEsUr6r6zin%2BuDY5vZjFAtr1lz5LoZdMZlgsPD7Y1s46K4aMrT1Z5R5U8DbNphagaqDQNkfJxMLtnYpCcIK1lDuB23dOWM30GNs%2BmfRS76to1lkNGwLFTdNEKp4Ap306Mmk%2F65W6ZyRQ0%2Bk%2BvUio9ATWLDLDX08iz3nD8cP2q3f7dvGHJf73OCfLo7Tb16Bs1Hi0q6dcXrUpb536Q%2FH&X-Amz-Signature=293cb5c7718a23b4d8a976fb0100bb4a8500bd70c89a9648f11b8cb4abfb5a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

