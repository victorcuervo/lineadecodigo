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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VIXT44A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDvg0wbKzV8G2EJKfFh1KK3czggHcJTEqR1Hbw4C42TgwIhAMqvc3XK9xdTdGQYIvrWMHUwdIb1WKtBq4qaPxnA2ZGFKv8DCCkQABoMNjM3NDIzMTgzODA1Igx5kpDDzZdlHYb9PZwq3ANXJvAu7lyceAeQHueMjQMwyvDRfgekc2UrRu2RJp1q%2BQH1X0AjNeYaP%2FsXWTyNJJ%2BEnHASY79xAQ1NLdEOllox3tAiAOxzbizugDR86ZuMb3LH%2Fo094OiRLTsBM%2FZjKBdnFIc57GMdb1jg18Kah7MGO0ZSAEmuFL3IYfA7Jtt4KjJb2O6SNLG3p8f8L8djSfomBSYhqLeGPFVhIsuiLZl7eNopijZuhWOV8dkgbZ6iQF20mT2acnmw9CVAsFCwFrU18WNbULjOBftunyAB3eAq6w77%2FQrKnT7ZYxHmGPXzf1wnjxW9m117gglHMN6aqdNO87HdUQSOCJJwZ8vPoKpi0LMSE4NdXCRpQoHBdN9vkjZJa7fO9j%2FLnlhO2ueU6%2F%2B7n0WnpI0N3v2EO8zvCp%2BcL9iagWtyveqDGk9fISEvpbBoIN%2FLSsfNziulRwUOkRVC43cY3V2FQl7st5jfvPXEkMBF2WS8JDDAK1c6LA89YjjmYk1Q7lESvbrq2wHHrF2kVuVal5AYGyPnNaG%2FIPf1xr%2BiBngccYImAmVndETYDE%2FXIkzxEfEoqO%2F6vK3kU5XBXB4a0dB4tuVqHmMncDXvRx3Al0i1OwvZj6adoNcOA9cWLN4pIAa1kHXxwzDY1L%2FJBjqkAcMkI398akbLAbJ14BF1LWAZMM7FBtlmpiE3GB7ZxtvQNdbTQ%2BPOF%2BogAPE1%2F6fdPxhoqi5n122%2FSSL%2FzFMELcoiAfBPdzpq2798%2F%2F9LGsHFucnM3ZYo5D8lv%2B%2BA1XIv9l1AGYk%2FbsoqGjVeGN4dEYMBMx5sdXSwArh2AbkMdVGvIoi3GHLIXx3%2F3EQGAotbAIiPiuax9MiM%2B1G3VhJ67usm2xYL&X-Amz-Signature=03518dd79ee4df3364344c2a7058a12efd1a89dd8e13ef51dd8f1c7efce6724b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VIXT44A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDvg0wbKzV8G2EJKfFh1KK3czggHcJTEqR1Hbw4C42TgwIhAMqvc3XK9xdTdGQYIvrWMHUwdIb1WKtBq4qaPxnA2ZGFKv8DCCkQABoMNjM3NDIzMTgzODA1Igx5kpDDzZdlHYb9PZwq3ANXJvAu7lyceAeQHueMjQMwyvDRfgekc2UrRu2RJp1q%2BQH1X0AjNeYaP%2FsXWTyNJJ%2BEnHASY79xAQ1NLdEOllox3tAiAOxzbizugDR86ZuMb3LH%2Fo094OiRLTsBM%2FZjKBdnFIc57GMdb1jg18Kah7MGO0ZSAEmuFL3IYfA7Jtt4KjJb2O6SNLG3p8f8L8djSfomBSYhqLeGPFVhIsuiLZl7eNopijZuhWOV8dkgbZ6iQF20mT2acnmw9CVAsFCwFrU18WNbULjOBftunyAB3eAq6w77%2FQrKnT7ZYxHmGPXzf1wnjxW9m117gglHMN6aqdNO87HdUQSOCJJwZ8vPoKpi0LMSE4NdXCRpQoHBdN9vkjZJa7fO9j%2FLnlhO2ueU6%2F%2B7n0WnpI0N3v2EO8zvCp%2BcL9iagWtyveqDGk9fISEvpbBoIN%2FLSsfNziulRwUOkRVC43cY3V2FQl7st5jfvPXEkMBF2WS8JDDAK1c6LA89YjjmYk1Q7lESvbrq2wHHrF2kVuVal5AYGyPnNaG%2FIPf1xr%2BiBngccYImAmVndETYDE%2FXIkzxEfEoqO%2F6vK3kU5XBXB4a0dB4tuVqHmMncDXvRx3Al0i1OwvZj6adoNcOA9cWLN4pIAa1kHXxwzDY1L%2FJBjqkAcMkI398akbLAbJ14BF1LWAZMM7FBtlmpiE3GB7ZxtvQNdbTQ%2BPOF%2BogAPE1%2F6fdPxhoqi5n122%2FSSL%2FzFMELcoiAfBPdzpq2798%2F%2F9LGsHFucnM3ZYo5D8lv%2B%2BA1XIv9l1AGYk%2FbsoqGjVeGN4dEYMBMx5sdXSwArh2AbkMdVGvIoi3GHLIXx3%2F3EQGAotbAIiPiuax9MiM%2B1G3VhJ67usm2xYL&X-Amz-Signature=a0063190797be1fcb0c4edf189d261454bbcee0998a1d94fdd9df2b27bcbf916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

