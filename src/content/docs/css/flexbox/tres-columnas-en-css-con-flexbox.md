---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2ICQMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHG99gZ%2FV75N%2FjqVfl7UurGJmsZcQRuVifhSFP%2Bo45mAIhAJ0I10nazR5XWxZA3PyJMIqBKVYlya1Y1bvGb%2FgQbRUyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwZcuJCYxcl87hOEq3AO6iLPVw2rQLxZB40XZZ069yK%2Fzg%2BFvoCNsyb7zIPqYt8iw5sHK264K6ylzDNbLKQFn5%2FJhom3wIgYIJZAxLkL3K91CkqI%2F2y5yX3R8Kwx%2BmNpawxdu5hk%2BEe%2BcAsZIKmuk36cudu%2FaoisbGFwLXUwxveOktG4oVQWH2VRXXYbCSYIygmwNhCWOr%2F%2BEdVOortTKv3g65%2FEpeJF7al%2FpkPqshUhdN76rKAmAdya7YUOK0i51VWwat%2FiejdDn839YIYeBmopSdXUiO9IfqWyz%2FAI1jlaZcsH4UvW89Bx0sUJs1CG%2BJvBaUUPBAwcEjCus%2FnhMFxJ8RxSyTvX0Ny67zTm7ixLDB6JEbfmBglJpqM%2FXQu2y3jzZrb2dJDvLEgSEBOzfeDmubZsJo%2BAkzB2%2B7IUErUIEySzmbVuOcYCdovaIA6Y2YAW5For72pXcEwppoFnQN4W3F9VPnqMb5IB6NrPudNmSySECgw55ilYJMPtuyzFMKctJOk3UdBBD2HeN03F%2Fy8zE4D%2F8RxJVC4ekqyydg5Xfxc4wCaaIHK%2BSM0At7sWLmQexNDRRGBgTd2scORoy8VVW%2B8f3mUnIkoykTq9L4cbyGvTW%2Fwp%2BAWrkt6tXAJbtWERTi6JWZx4rAjDJmdXJBjqkAaRP5PwTxuq%2BzVY1dmzcnu9w82eZbmTvfSq2QpT5Ds2uMdPUbm8sWHtu4o0C9RVaAanbsVrclbggGHngnYoebdJ9W8k5OK%2FyQk3GJdVhDYC%2F8amYwkrowFwWP6UkRnBpnNmn4Kxn2f4cJhlbBRVGtpVi7PF4nE7GhY7QD8%2FynGOB%2B1q3cqSQTaczbLGBEk%2FQfvFXXOAemh5ETxXfCNW%2BdDU0%2BFJ3&X-Amz-Signature=6b15d96b27ce08e8dd3911bf11ef148300fa5a50961f53fd3de2104ac232534c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2ICQMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHG99gZ%2FV75N%2FjqVfl7UurGJmsZcQRuVifhSFP%2Bo45mAIhAJ0I10nazR5XWxZA3PyJMIqBKVYlya1Y1bvGb%2FgQbRUyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwZcuJCYxcl87hOEq3AO6iLPVw2rQLxZB40XZZ069yK%2Fzg%2BFvoCNsyb7zIPqYt8iw5sHK264K6ylzDNbLKQFn5%2FJhom3wIgYIJZAxLkL3K91CkqI%2F2y5yX3R8Kwx%2BmNpawxdu5hk%2BEe%2BcAsZIKmuk36cudu%2FaoisbGFwLXUwxveOktG4oVQWH2VRXXYbCSYIygmwNhCWOr%2F%2BEdVOortTKv3g65%2FEpeJF7al%2FpkPqshUhdN76rKAmAdya7YUOK0i51VWwat%2FiejdDn839YIYeBmopSdXUiO9IfqWyz%2FAI1jlaZcsH4UvW89Bx0sUJs1CG%2BJvBaUUPBAwcEjCus%2FnhMFxJ8RxSyTvX0Ny67zTm7ixLDB6JEbfmBglJpqM%2FXQu2y3jzZrb2dJDvLEgSEBOzfeDmubZsJo%2BAkzB2%2B7IUErUIEySzmbVuOcYCdovaIA6Y2YAW5For72pXcEwppoFnQN4W3F9VPnqMb5IB6NrPudNmSySECgw55ilYJMPtuyzFMKctJOk3UdBBD2HeN03F%2Fy8zE4D%2F8RxJVC4ekqyydg5Xfxc4wCaaIHK%2BSM0At7sWLmQexNDRRGBgTd2scORoy8VVW%2B8f3mUnIkoykTq9L4cbyGvTW%2Fwp%2BAWrkt6tXAJbtWERTi6JWZx4rAjDJmdXJBjqkAaRP5PwTxuq%2BzVY1dmzcnu9w82eZbmTvfSq2QpT5Ds2uMdPUbm8sWHtu4o0C9RVaAanbsVrclbggGHngnYoebdJ9W8k5OK%2FyQk3GJdVhDYC%2F8amYwkrowFwWP6UkRnBpnNmn4Kxn2f4cJhlbBRVGtpVi7PF4nE7GhY7QD8%2FynGOB%2B1q3cqSQTaczbLGBEk%2FQfvFXXOAemh5ETxXfCNW%2BdDU0%2BFJ3&X-Amz-Signature=82d2390d3ef0d4e6c5beb6ca4b629232a6b8613552923bc814a869f4d8b76fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

