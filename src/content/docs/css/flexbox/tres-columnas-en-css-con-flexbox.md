---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUIWOCF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJfUQXNRI6uxDui0UANN1IMcEai18VNtX2KJEj0C1luAiBsNIw24gyxzpIZ%2FTDXz68ROshRCVpdaj4fupsX0WOOoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRT4F2e490XxQVOPxKtwD9GS0uOwB0zuaDgZGSSYWouEsANGCn6lWQKxhK3DAMfed%2F3hqPFViFiorAa4bbZf3iiVhF2G1BkLmY6Bgx3oQggNZ%2F8828nWp5Uz6XmeuzQj%2FdbE7xdouszc%2FSCZW9s1LFSpyxGjfJLsYdcSAIh3NenRJrewN7iG%2BkgicuapV%2FUz0%2FvLN9N%2BJzKqjkhCQw%2F1bpZhmU9bHMF7DDfHHRPsOmBgc8muvx9krGXKTvuSYbBQIJjr0d3NlKOxMXdRdakUPTb9Eix9W1JCxHo%2Bew61f5evN8mkBOqku37oAGm1lvkEinampAQjZ0cvsMDfPc%2F2knoEFO5D3IDI%2BpOBDhxnSvBM4OXNP6UspxEd4TQqSj%2B1OOZ2eOMvvo2AVq8JVvWWaRUYfYr0IgeKvBTX4PcDbk51M3H7bJL0A0EjcsZramFqlMqoVEvSV8%2Fc3IK0xXlfwcfNbcBvMC5Bi8PhMkSH6UsH5%2FSHFX%2BX4v29VHAJj29i2UCc%2BUF3AmydOiUfiZxkaKaFgrpHgYKyBwk%2B1V4hpTJUX%2F670KlbGUB5Ng5WoxNZRgKCy5bOkSZiWhjfmL3TTYe6g7VMLMDWL%2BWoy8dy%2FQ6bBBcqtqM44%2F%2FYFrQ4Klz2jKtYrHI9wWcDc5Rows%2FbLyQY6pgGyrHqWnniR8VYA7elQNWJ4Wtbxx5cTWdvUxhzVTOxGXAG767jpkgm5UbbjZEwFdldpWxpIzqLItWBbfTjpckSn8iMA4LP0OGKqWNCQSfYIePwZb%2B99LSZZ%2FplDM2alVQMMyEsIq11laCGvewAKyVDzX9yKT11YkDbdrybyy7j9ipUvMYWiXW9E8ww47RFON0uDSbE6cW5SqpiwMIfpbW6QkLHa0zx3&X-Amz-Signature=814238dc2f4f779957a00ce01b85a8dafccefddc2e872aa53396f0d6a9b7c8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUIWOCF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJfUQXNRI6uxDui0UANN1IMcEai18VNtX2KJEj0C1luAiBsNIw24gyxzpIZ%2FTDXz68ROshRCVpdaj4fupsX0WOOoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRT4F2e490XxQVOPxKtwD9GS0uOwB0zuaDgZGSSYWouEsANGCn6lWQKxhK3DAMfed%2F3hqPFViFiorAa4bbZf3iiVhF2G1BkLmY6Bgx3oQggNZ%2F8828nWp5Uz6XmeuzQj%2FdbE7xdouszc%2FSCZW9s1LFSpyxGjfJLsYdcSAIh3NenRJrewN7iG%2BkgicuapV%2FUz0%2FvLN9N%2BJzKqjkhCQw%2F1bpZhmU9bHMF7DDfHHRPsOmBgc8muvx9krGXKTvuSYbBQIJjr0d3NlKOxMXdRdakUPTb9Eix9W1JCxHo%2Bew61f5evN8mkBOqku37oAGm1lvkEinampAQjZ0cvsMDfPc%2F2knoEFO5D3IDI%2BpOBDhxnSvBM4OXNP6UspxEd4TQqSj%2B1OOZ2eOMvvo2AVq8JVvWWaRUYfYr0IgeKvBTX4PcDbk51M3H7bJL0A0EjcsZramFqlMqoVEvSV8%2Fc3IK0xXlfwcfNbcBvMC5Bi8PhMkSH6UsH5%2FSHFX%2BX4v29VHAJj29i2UCc%2BUF3AmydOiUfiZxkaKaFgrpHgYKyBwk%2B1V4hpTJUX%2F670KlbGUB5Ng5WoxNZRgKCy5bOkSZiWhjfmL3TTYe6g7VMLMDWL%2BWoy8dy%2FQ6bBBcqtqM44%2F%2FYFrQ4Klz2jKtYrHI9wWcDc5Rows%2FbLyQY6pgGyrHqWnniR8VYA7elQNWJ4Wtbxx5cTWdvUxhzVTOxGXAG767jpkgm5UbbjZEwFdldpWxpIzqLItWBbfTjpckSn8iMA4LP0OGKqWNCQSfYIePwZb%2B99LSZZ%2FplDM2alVQMMyEsIq11laCGvewAKyVDzX9yKT11YkDbdrybyy7j9ipUvMYWiXW9E8ww47RFON0uDSbE6cW5SqpiwMIfpbW6QkLHa0zx3&X-Amz-Signature=4f89965064a87f03770cdbbc4c38c71a1e4f7865ca7f2d273734530b6caad1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

