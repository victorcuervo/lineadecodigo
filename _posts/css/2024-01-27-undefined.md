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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMVQLRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDFdf1ptvRH286vdCQUmcryAGeKWuySRigNKIvf47zceAiEAsvre1Ghmz3rr9UEy80%2FVEMY6kxDhW%2F5sM7PZE2lFAUUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCRCMCJRtynQnLa6UCrcA%2FqVfm6X8lfr4eFXRjKdfJvW2yrJMKnmEpi3Yo5rsxN7DjS%2BLvPS2A1VGW7dm59R5nxATrmGzIQEOo%2FoO8e94URFt17UVrmiD0DQiO68uTec4fLJtg8MdWen6duMWAnezuAV8okk2HK3boSYZ0ssoSmIw8OEWdTqrxKuxd6X1pBwaASNNBd0ZXCJlz05PKpQAhya%2BllXtQNsEQ8Nr7bNzHaiJDPXvWsbIF%2BoPN1K8O1X4Ro6S0p8%2BvS9XDUD2LO8oL7foFo%2B5eUsz5x53QP7NPRFPI4ohFYfyAY%2BYSr0j3v2nuGr4ae3Cfi7SYwJxfG6L35QSIj8e1pfMB%2F%2BsdWe5QCKK5HpARhq6ky3fs5fc6ATi6J69P9YMCZhamwlcCMYB5VL4rVfrJOW%2F9l2q8AqXk056qCz%2FJXbRNkLBDPzl4bJ446qdi3IEE7tZUDFtZI3RSU1DGD%2FtknAz0SWFgbOry1Nobu0uV4IoApNdnoeKOrH92BsY2%2FzN30u2SWN6Ul9%2FBY8mYwrXMGeuNAsh6bzh3yO%2BhxtKQWr5AZXkLMom1s2qNjIiqtq2qfCGYaUWAklqn85MRZ4lJ1yV5nO7tkXwShbify9TMwQISCFzOYIkGGYA%2BJj8r0bZEbzXD11MKihvskGOqUBHJEhOkomymNIMWuSPx3MmuNiqKTcUDKCiIyrXa9uvKZJS6xuLePyvMnY4vZj%2BpBP3I5g9zxLZJOmMQ4VaVL391wHWlDtXhb8%2FSuXaOwQitWMhs5CJNOuO3ZBUs1QUgAtvfgWKS%2BmU36%2FF4s0%2BXijpIpf1gB1Oz5BofYncYsLQrMHX%2FED7x7oZjRrnnp4vkuhy%2F06Auju3Eqak1bi0Z1zC92VtSx6&X-Amz-Signature=f5e4dc5f85624b45c7bb8455412fa119a99f6dbcd25ccb4428ab68333408a1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMVQLRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDFdf1ptvRH286vdCQUmcryAGeKWuySRigNKIvf47zceAiEAsvre1Ghmz3rr9UEy80%2FVEMY6kxDhW%2F5sM7PZE2lFAUUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCRCMCJRtynQnLa6UCrcA%2FqVfm6X8lfr4eFXRjKdfJvW2yrJMKnmEpi3Yo5rsxN7DjS%2BLvPS2A1VGW7dm59R5nxATrmGzIQEOo%2FoO8e94URFt17UVrmiD0DQiO68uTec4fLJtg8MdWen6duMWAnezuAV8okk2HK3boSYZ0ssoSmIw8OEWdTqrxKuxd6X1pBwaASNNBd0ZXCJlz05PKpQAhya%2BllXtQNsEQ8Nr7bNzHaiJDPXvWsbIF%2BoPN1K8O1X4Ro6S0p8%2BvS9XDUD2LO8oL7foFo%2B5eUsz5x53QP7NPRFPI4ohFYfyAY%2BYSr0j3v2nuGr4ae3Cfi7SYwJxfG6L35QSIj8e1pfMB%2F%2BsdWe5QCKK5HpARhq6ky3fs5fc6ATi6J69P9YMCZhamwlcCMYB5VL4rVfrJOW%2F9l2q8AqXk056qCz%2FJXbRNkLBDPzl4bJ446qdi3IEE7tZUDFtZI3RSU1DGD%2FtknAz0SWFgbOry1Nobu0uV4IoApNdnoeKOrH92BsY2%2FzN30u2SWN6Ul9%2FBY8mYwrXMGeuNAsh6bzh3yO%2BhxtKQWr5AZXkLMom1s2qNjIiqtq2qfCGYaUWAklqn85MRZ4lJ1yV5nO7tkXwShbify9TMwQISCFzOYIkGGYA%2BJj8r0bZEbzXD11MKihvskGOqUBHJEhOkomymNIMWuSPx3MmuNiqKTcUDKCiIyrXa9uvKZJS6xuLePyvMnY4vZj%2BpBP3I5g9zxLZJOmMQ4VaVL391wHWlDtXhb8%2FSuXaOwQitWMhs5CJNOuO3ZBUs1QUgAtvfgWKS%2BmU36%2FF4s0%2BXijpIpf1gB1Oz5BofYncYsLQrMHX%2FED7x7oZjRrnnp4vkuhy%2F06Auju3Eqak1bi0Z1zC92VtSx6&X-Amz-Signature=865cb650b7cd1ee8a385cd0d88769b6dfbe393a97f76708b0b0172b08fda2020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

