---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPJSB5Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PYCW1IkyutLOGXKn4q1I%2B30gs6ODQZ6kBdfKb1JHjgIgBLBsI4lwLOKIYpjuVWUCsKrKjqvlrK3pBwUubdyn%2B4IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAStqtEjdI7vsc%2B%2BircA6DM0HrjQKg7CBkG2jvVj52t%2FYzJPNSbROKrMpm6c6icJA8RAv%2B4r1%2FuauWmiLseNl7IQplxljeH8ZcqPMPkd5kcVBk2L3lLauZEn8zkzQyImlAraWjNZNb4KtgfRXdVKpCByFSidttbgoDaTynRuuZ%2FfE97FUjlPgNPpZOR7fYRmgEnuIfJEYkEIuC6%2BeScQwBF%2FVmszGR047yguWsOuMc9WRZsjw90%2BLHSFJa5OBFU4I8kzSsNwg8XJuKx8UL6YHHlDAOj9Yv1tAAkH4asS%2FerMOHUpbjBGZ7jYG0h0rd1s6%2F3FA38Ev9lHvts44zYypkUfE1aXRC3Oa6JKV6F8Bjd967SKT5bx1Q6%2BR6kLt6rt6dDNFudAHISglM3%2BF5vNJ%2FzkqiniszIywt3d6mUdSy9V8kQfle1CuPcHV8l17isHkF6H5dZCtUfKtS4LkZu5zHEIB%2FojgTYUMaBtoG0hcUOh47cP7wXaLm7D%2BvNWAeGn8svN8x%2BfYa0MWQfnc5h9Xjhi34OT4EWe8xaBE%2BT5lA1CYvbl5U3iRFBdadTAhfDUTCgWeun9dmoX90hWKB3Zyy1T1bos1nUkDQ7oTq8lwkGV1zKhuSUwACETpecsIqwyztN3u9jhqJ0SQIzMJ7k28kGOqUB6adxT2%2FkpYEMPO7nRaWRYTzdNLH3o%2BEpWNIGpHBTJdeZ4DGYasZzcaipy4ClEXKFnGde2JVzaSiHCw%2BW7VIS6Lawk4Z01FlH87Qx7UxwgTs69xPW3yuKjxUwA%2FXJHT4q2iIJaPsoxIZ7ZJoRqQpQcpfksqgEe5nonKemPoDcXEZt8h2en%2BTm%2BwYqrj2eqPQ3KPwM8Bw3hS3KCjlRCiMLHRkJwJ%2BN&X-Amz-Signature=c84583e91e719ea3f53c2f43dc900b3909d4c914a690cf2ffc5393f20d5d5d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPJSB5Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PYCW1IkyutLOGXKn4q1I%2B30gs6ODQZ6kBdfKb1JHjgIgBLBsI4lwLOKIYpjuVWUCsKrKjqvlrK3pBwUubdyn%2B4IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAStqtEjdI7vsc%2B%2BircA6DM0HrjQKg7CBkG2jvVj52t%2FYzJPNSbROKrMpm6c6icJA8RAv%2B4r1%2FuauWmiLseNl7IQplxljeH8ZcqPMPkd5kcVBk2L3lLauZEn8zkzQyImlAraWjNZNb4KtgfRXdVKpCByFSidttbgoDaTynRuuZ%2FfE97FUjlPgNPpZOR7fYRmgEnuIfJEYkEIuC6%2BeScQwBF%2FVmszGR047yguWsOuMc9WRZsjw90%2BLHSFJa5OBFU4I8kzSsNwg8XJuKx8UL6YHHlDAOj9Yv1tAAkH4asS%2FerMOHUpbjBGZ7jYG0h0rd1s6%2F3FA38Ev9lHvts44zYypkUfE1aXRC3Oa6JKV6F8Bjd967SKT5bx1Q6%2BR6kLt6rt6dDNFudAHISglM3%2BF5vNJ%2FzkqiniszIywt3d6mUdSy9V8kQfle1CuPcHV8l17isHkF6H5dZCtUfKtS4LkZu5zHEIB%2FojgTYUMaBtoG0hcUOh47cP7wXaLm7D%2BvNWAeGn8svN8x%2BfYa0MWQfnc5h9Xjhi34OT4EWe8xaBE%2BT5lA1CYvbl5U3iRFBdadTAhfDUTCgWeun9dmoX90hWKB3Zyy1T1bos1nUkDQ7oTq8lwkGV1zKhuSUwACETpecsIqwyztN3u9jhqJ0SQIzMJ7k28kGOqUB6adxT2%2FkpYEMPO7nRaWRYTzdNLH3o%2BEpWNIGpHBTJdeZ4DGYasZzcaipy4ClEXKFnGde2JVzaSiHCw%2BW7VIS6Lawk4Z01FlH87Qx7UxwgTs69xPW3yuKjxUwA%2FXJHT4q2iIJaPsoxIZ7ZJoRqQpQcpfksqgEe5nonKemPoDcXEZt8h2en%2BTm%2BwYqrj2eqPQ3KPwM8Bw3hS3KCjlRCiMLHRkJwJ%2BN&X-Amz-Signature=a345dbb6dc4413fd5b85aafab0e44c859752cf45809507b824fe3d03fd5809f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

