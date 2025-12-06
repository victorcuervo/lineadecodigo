---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJAD5EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXqxdZk9MIQp7nCYjvQ0dFoKfW4NwUFsg2fzuvSyXRvAiAjSrWlEQKCAKcFjV3F7xA3VSY7OX4Hdlp034Yb5aT0sSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNxEI4REmVcs18qDBKtwDqi8foJfQ0LICHj4V71oy4HgtN8TX70HnONq7tmKJY39%2F59mLJ2SN0Z7qScZZbD62WIlWGkMh08PofSoREmHRf9UTqnQGilHOu7RK8QlWFvH7xRqMbw08Q7zSjQhFS2xNMPgu3AELcWii8doG%2FxgNY00lqv4C2BQU0j%2BmFDlfUC7wsVPj7lJK%2BauDhSVGJgdxfyQEc%2B626ymDqwWAmw7rtvHC9cvF50gXeYBYGc4ZLVw64p%2BM9swY44%2FcLSlP3pL12Eb5wfeuba1iUSRUALxaFF5PViDYVumdqbWwJ0N474sTQpbnpjvFkjyP73rnU6a0trc7XugQn%2Bri90FCFw1PON4u0uAvzWqiSha%2Fs1nmW9Vtw1SyQzRFvsQpphIsmif35oLhoCUeltkoPAW8k6PNODANaRdmrQfnNWSRBztVRotOVdJynRUOJE1crOhboA0PfC2kY9YdqXSnq8IVXBNYuEVJxQndlicvKS2g4BMU8Iavz1fudh07Wai8J4GYrTMJRvN9PiQPoJzgvvKlwmTOOXykFEoEL9gX15GHi5z5EjLhJF%2FsVyYAmGTLJ0ttA8sS8mXLjAxHaBZabele1zJVPPHi%2Bt2HLgX61wooLW1xq1B0fE%2Bhr5naWJ8viyIwibzPyQY6pgGM4XYHBnuwR2L9yPQFVpB%2F6HIp7QLOMGCt3bKf0tS%2BUkJuvrRvEL1OTDO9FArt1D0G%2Fy%2BR5Kyly8cwhjKG%2B567X9dQT7jancSLf9CIYZDmfcgEmY2MjL9eg2MER2AtuuDVIb%2FdFEksEAYANuR1U%2B3EqLe5JYiCQmirUiKqfwk6skN8lP8n5GJGqPtKaOzB%2Be1xEesDu4QtnczwMR4RFHZ1GCtDfNyX&X-Amz-Signature=565a18ffad3d9df1cd792ebc34e2ead50ee66cc2fdaf7254594585205f3a6114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJAD5EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXqxdZk9MIQp7nCYjvQ0dFoKfW4NwUFsg2fzuvSyXRvAiAjSrWlEQKCAKcFjV3F7xA3VSY7OX4Hdlp034Yb5aT0sSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNxEI4REmVcs18qDBKtwDqi8foJfQ0LICHj4V71oy4HgtN8TX70HnONq7tmKJY39%2F59mLJ2SN0Z7qScZZbD62WIlWGkMh08PofSoREmHRf9UTqnQGilHOu7RK8QlWFvH7xRqMbw08Q7zSjQhFS2xNMPgu3AELcWii8doG%2FxgNY00lqv4C2BQU0j%2BmFDlfUC7wsVPj7lJK%2BauDhSVGJgdxfyQEc%2B626ymDqwWAmw7rtvHC9cvF50gXeYBYGc4ZLVw64p%2BM9swY44%2FcLSlP3pL12Eb5wfeuba1iUSRUALxaFF5PViDYVumdqbWwJ0N474sTQpbnpjvFkjyP73rnU6a0trc7XugQn%2Bri90FCFw1PON4u0uAvzWqiSha%2Fs1nmW9Vtw1SyQzRFvsQpphIsmif35oLhoCUeltkoPAW8k6PNODANaRdmrQfnNWSRBztVRotOVdJynRUOJE1crOhboA0PfC2kY9YdqXSnq8IVXBNYuEVJxQndlicvKS2g4BMU8Iavz1fudh07Wai8J4GYrTMJRvN9PiQPoJzgvvKlwmTOOXykFEoEL9gX15GHi5z5EjLhJF%2FsVyYAmGTLJ0ttA8sS8mXLjAxHaBZabele1zJVPPHi%2Bt2HLgX61wooLW1xq1B0fE%2Bhr5naWJ8viyIwibzPyQY6pgGM4XYHBnuwR2L9yPQFVpB%2F6HIp7QLOMGCt3bKf0tS%2BUkJuvrRvEL1OTDO9FArt1D0G%2Fy%2BR5Kyly8cwhjKG%2B567X9dQT7jancSLf9CIYZDmfcgEmY2MjL9eg2MER2AtuuDVIb%2FdFEksEAYANuR1U%2B3EqLe5JYiCQmirUiKqfwk6skN8lP8n5GJGqPtKaOzB%2Be1xEesDu4QtnczwMR4RFHZ1GCtDfNyX&X-Amz-Signature=d704955f1891bf6345ae3fc29a3c160addbb1839a7ba93aa6748d12e0f8b756c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

