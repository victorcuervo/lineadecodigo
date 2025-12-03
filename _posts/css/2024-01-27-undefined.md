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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXYLLEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEIodEWXWc2T7Ec7QAuXMBKQy%2BeoGqi2Z2QAtgrvLAdwAiEA1cjdxAJL0S7%2BBRf%2FG6FaujA1u0FvWQ%2BOoagwIWSPtM8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOqc7Mqq6kEbWk5zBCrcA5AdpyCcHJg%2Bv2dX1kKYiEmaP6hY5d7LOrpYaF53b8fKxYH4cx%2FxOF19I2JaUbLH2lQ2M87XbWgHJBMNYyzG30czemcR0hNPNA3O1E1d%2Buy4pvctg%2F31C%2BTM1IWYzQ4LZzLlDcKY1kakheZ%2F%2B%2F3cYqup9v%2FyWOYg2oPybWO3MyGcTy05injMqCxHHjTzxQDv3XqeeqUTjjdnXQKyoKUto58pf6WUEX4eVFandckt8JRGM%2FE44z8n%2BqhtrrnLzq86BI4WIXLJiRTiWVPK2TYr0SF%2FyHWEYvhKWVlIX2itbZ0sg2osnVQFo2%2FCb5mWQhvOgvFG3tvewRpX18Hl0Y%2Fbiedy1KuQdyicPRIUZNgcc6NrCPAIFjFJvZz78BG009n%2F%2F7YCtTSnEpqv7klQEHUvkoLIxe1Ry2HNa2HVBJ%2FDIcJ1W3IZ9y8A%2FUC6uiH5ZbOsdQZfmT50fsmmgcmA0SIwAGln%2FMZWv1tOAIPpQV1BUIVVs6vuqmaPANzJXxD%2FTZp5o%2FlTTBZPjbaWW6VcfzBxLXdAJXP6m5KVLSYHWoa98jfA1052Qmcf7Ip2wYgQCE1OyFsiy9QKvVN2jbRou47N%2FynZ%2FQqmIxduj5GQIe7ao0gPhJ3C7cYxSMMdhbnLMN6UvskGOqUB%2Fh3DuVAf0RSCbU0MeCIY1I0juTR%2FuzLgSNC%2FGNXtLEwKxmBwgnvxMcDCqZ%2F45VkFFFoRxsqu5o4XPL2ExT6S0VthGtJwh4Sjhk7fsi2vTstjkjABwllnNwuwq9R8VxTZ4z8r%2F18pYOs4HsRP5GNZLBgjKRx%2FMe8BGERitLyETil42n85MMJhyzUafEieiBBQIHvjstkvikR5fCcKJPYPZW0YTbIV&X-Amz-Signature=c00a1df2f4d63a4d6343862c905f132b05fd0330d34571d5ee1cca308e571593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXYLLEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEIodEWXWc2T7Ec7QAuXMBKQy%2BeoGqi2Z2QAtgrvLAdwAiEA1cjdxAJL0S7%2BBRf%2FG6FaujA1u0FvWQ%2BOoagwIWSPtM8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOqc7Mqq6kEbWk5zBCrcA5AdpyCcHJg%2Bv2dX1kKYiEmaP6hY5d7LOrpYaF53b8fKxYH4cx%2FxOF19I2JaUbLH2lQ2M87XbWgHJBMNYyzG30czemcR0hNPNA3O1E1d%2Buy4pvctg%2F31C%2BTM1IWYzQ4LZzLlDcKY1kakheZ%2F%2B%2F3cYqup9v%2FyWOYg2oPybWO3MyGcTy05injMqCxHHjTzxQDv3XqeeqUTjjdnXQKyoKUto58pf6WUEX4eVFandckt8JRGM%2FE44z8n%2BqhtrrnLzq86BI4WIXLJiRTiWVPK2TYr0SF%2FyHWEYvhKWVlIX2itbZ0sg2osnVQFo2%2FCb5mWQhvOgvFG3tvewRpX18Hl0Y%2Fbiedy1KuQdyicPRIUZNgcc6NrCPAIFjFJvZz78BG009n%2F%2F7YCtTSnEpqv7klQEHUvkoLIxe1Ry2HNa2HVBJ%2FDIcJ1W3IZ9y8A%2FUC6uiH5ZbOsdQZfmT50fsmmgcmA0SIwAGln%2FMZWv1tOAIPpQV1BUIVVs6vuqmaPANzJXxD%2FTZp5o%2FlTTBZPjbaWW6VcfzBxLXdAJXP6m5KVLSYHWoa98jfA1052Qmcf7Ip2wYgQCE1OyFsiy9QKvVN2jbRou47N%2FynZ%2FQqmIxduj5GQIe7ao0gPhJ3C7cYxSMMdhbnLMN6UvskGOqUB%2Fh3DuVAf0RSCbU0MeCIY1I0juTR%2FuzLgSNC%2FGNXtLEwKxmBwgnvxMcDCqZ%2F45VkFFFoRxsqu5o4XPL2ExT6S0VthGtJwh4Sjhk7fsi2vTstjkjABwllnNwuwq9R8VxTZ4z8r%2F18pYOs4HsRP5GNZLBgjKRx%2FMe8BGERitLyETil42n85MMJhyzUafEieiBBQIHvjstkvikR5fCcKJPYPZW0YTbIV&X-Amz-Signature=ab75086283cf1072a9dc63dddd7e9325871f067bfd0656295afc39bf735c68a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

