---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7HEC4L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDScPs9bR0F8EJJ780w28vhHqlNrF6ZrIgDMVQn6VmqnQIgF9S8vWXKi9F5rLzPwc2hPu2Dr2OJ0%2Fq6nsIp2VSBr3Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEdT%2BDyEo2olFfAgXyrcA7u4iulIEXnbKRcireZVxaV%2FqoHhEHFDvSq7leoE1dRbVXmXXRJqdK3FGrkY5kJnhc8Bv0tfPo3J2RVlqB1X7zgsYr4f3gM0G54eEE%2BIyKCxSq8dS0segv0P78dGU3fso4KawsU6JPRLYT3fA5GhbbYHvRlsK7YCTjmN1n6heLTrIagKkqz5UBbnfr6wYKCmC8MDKX%2FAH%2FOaNPBGIYXFtgPwzXk%2B69Ht%2FwFU2i%2FEXNkv0qqCMrEVXNAqQ7AbCz1CumwAvziZOgrQ1%2BQyQMxxS2WmM3njM0Lmd1YiSoM4%2FLJj0lrhI%2Fv8OyRhOo2oNFNc4GzCBmW4Rln9aX1yn0TOqk1L9GT6eo2OnEwDleqsjI0f%2Ft2fpSH1t1xu8q4GVW%2FrbLki9F%2Fr%2FdPNp9WvAuDvEYW%2BR4Xj1cDbNeeXRLo5vWLQ4TNDf%2FvUtCs6tz8ygCX2ZKoUUhqpjEaZE45c1dgg3jGkXNuaS3c3B4d45d%2BhyJEdW1fzV3MagNNczJKseDGFKbgmkAiXX7C3Re%2B5mjBG5XYUoxQEOqpYJ3TEBan0qkwGsvcwbnsCMs6Mi5SLoy8AjcWU7hD6%2FE5dqxzpsybBriHvAdQDSAOlSPmOVb%2BL9LQTN02zamOnQLp0dnWOMKuPzckGOqUBYR%2FVLFX4VIQeorCiKtvRzftQdDqZWWvzg7ivoyo%2FKvMwx9nbYDMi8vNDKZVadm0b5GGML96vGAHpKc5sqVdiPCmE%2F%2FIJ2xgNE2O0GbGjPe0LksznYu%2FD1dQhdoDMAvjkZVG%2FmZysjTrbeYDW6I0uU4wdmeEk%2FuUdBMeLQWJmZPhf600IKWGHS6hdId6cwfvIL63dOykC63f8%2FhQowpZvDtRdHXCW&X-Amz-Signature=ed37ecdb30a0660e886a7a243ddf3ab2d327142a73a6a38358985139af4e8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7HEC4L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDScPs9bR0F8EJJ780w28vhHqlNrF6ZrIgDMVQn6VmqnQIgF9S8vWXKi9F5rLzPwc2hPu2Dr2OJ0%2Fq6nsIp2VSBr3Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEdT%2BDyEo2olFfAgXyrcA7u4iulIEXnbKRcireZVxaV%2FqoHhEHFDvSq7leoE1dRbVXmXXRJqdK3FGrkY5kJnhc8Bv0tfPo3J2RVlqB1X7zgsYr4f3gM0G54eEE%2BIyKCxSq8dS0segv0P78dGU3fso4KawsU6JPRLYT3fA5GhbbYHvRlsK7YCTjmN1n6heLTrIagKkqz5UBbnfr6wYKCmC8MDKX%2FAH%2FOaNPBGIYXFtgPwzXk%2B69Ht%2FwFU2i%2FEXNkv0qqCMrEVXNAqQ7AbCz1CumwAvziZOgrQ1%2BQyQMxxS2WmM3njM0Lmd1YiSoM4%2FLJj0lrhI%2Fv8OyRhOo2oNFNc4GzCBmW4Rln9aX1yn0TOqk1L9GT6eo2OnEwDleqsjI0f%2Ft2fpSH1t1xu8q4GVW%2FrbLki9F%2Fr%2FdPNp9WvAuDvEYW%2BR4Xj1cDbNeeXRLo5vWLQ4TNDf%2FvUtCs6tz8ygCX2ZKoUUhqpjEaZE45c1dgg3jGkXNuaS3c3B4d45d%2BhyJEdW1fzV3MagNNczJKseDGFKbgmkAiXX7C3Re%2B5mjBG5XYUoxQEOqpYJ3TEBan0qkwGsvcwbnsCMs6Mi5SLoy8AjcWU7hD6%2FE5dqxzpsybBriHvAdQDSAOlSPmOVb%2BL9LQTN02zamOnQLp0dnWOMKuPzckGOqUBYR%2FVLFX4VIQeorCiKtvRzftQdDqZWWvzg7ivoyo%2FKvMwx9nbYDMi8vNDKZVadm0b5GGML96vGAHpKc5sqVdiPCmE%2F%2FIJ2xgNE2O0GbGjPe0LksznYu%2FD1dQhdoDMAvjkZVG%2FmZysjTrbeYDW6I0uU4wdmeEk%2FuUdBMeLQWJmZPhf600IKWGHS6hdId6cwfvIL63dOykC63f8%2FhQowpZvDtRdHXCW&X-Amz-Signature=f9edc72111e1ad8daa99478e4939d9982290ae7a19a282414934090544e7d82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

