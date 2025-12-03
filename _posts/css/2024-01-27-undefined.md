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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXUNUQM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIH1ECJMhytU8sSZ8LJh%2BRzfEmcV1yBkqi3EfpckxKv6LAiEAxa%2BlGgFIXVO2gssR6LV1ziy4ppy9B7tp%2F1%2BQso35ECUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIUFMBkRm3C96RwcgircAx9La904CUt7Ebp%2BccZJeIj2t9D1CTQsM6ABqvUbeLPnPmsSt7mNH%2F5ZDVitWSXnEVq2%2BzNrmnM%2F6qD6Ye76bOg0Rm%2BaMpcO%2F7J41z7lB9muQFxjNq6dW%2Fltbc6w01dEDL3EMelV%2B2tEssHiD3%2BeDUc3ZCOXgqZwFbJFrVBlVLPIDx4Uf1R26oa6WMTWFHeScWrKLqe7JmUZEhde8261yT1TmIZSIbB%2F8YP35F4qXxvubYNHlOxwB%2FHz5Z68EMFPaxMUiZQflLrp7aSnBceuzAk7V5WZGlP2RpuL5azoeKXDM9RnhAav4Sbp95DsofK46tnmnf0E%2Bqu6eYCbmTqDXKsFxFICcfzuGlL5tiZvJsmpk5I8gOO8%2FxKi5VQp%2FMiLm38yh0HdgzpYL2zNaw3O8Ls1JPiK9%2BhafLg8%2B78w2uo%2F5vBjWrVPDVZQDjuhvzlxelPrNG8cTqyd1O3k8azGungOx0JYe7acss%2FlEBvHnwhHoOO3Pht3RvNItllakdwUZdL%2BA9CEHNDx5lkkHlhZhGS%2Fbp8i94i1D54NhaC8YRUYdUuNH2IhTNiy6E8w5e80QVEGHtPoo3xvDuwUFKgGaH%2ByH0c1W4BhOek4PgCbwIogKnIsbtuRB6ZaEXeyMMeav8kGOqUB0cGp%2FmAHVOJtmSR93mV%2Bru616ZxBrN7uk0diNrAZUXwj7UbFjJRBLQ%2Fgs51g8O2NTxgiloWGNSRaLT%2FXFRtpH%2F7qajVfMpbnhyAep1q0PzUqun1keciUZzbO0zSRyEcgRa%2FxGJgXF2WrCEAcQEUKDxCxbEETwo9jxuRnqPXekXMN2eucIr4mHHGGaXydOlcgF8ufZb4QkQZ6I5jPotGPKV9vpUWe&X-Amz-Signature=6819146130cf92296ecf76af3e3998a0d7d02314ef5328d02d9ade8ee36cdeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXUNUQM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIH1ECJMhytU8sSZ8LJh%2BRzfEmcV1yBkqi3EfpckxKv6LAiEAxa%2BlGgFIXVO2gssR6LV1ziy4ppy9B7tp%2F1%2BQso35ECUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIUFMBkRm3C96RwcgircAx9La904CUt7Ebp%2BccZJeIj2t9D1CTQsM6ABqvUbeLPnPmsSt7mNH%2F5ZDVitWSXnEVq2%2BzNrmnM%2F6qD6Ye76bOg0Rm%2BaMpcO%2F7J41z7lB9muQFxjNq6dW%2Fltbc6w01dEDL3EMelV%2B2tEssHiD3%2BeDUc3ZCOXgqZwFbJFrVBlVLPIDx4Uf1R26oa6WMTWFHeScWrKLqe7JmUZEhde8261yT1TmIZSIbB%2F8YP35F4qXxvubYNHlOxwB%2FHz5Z68EMFPaxMUiZQflLrp7aSnBceuzAk7V5WZGlP2RpuL5azoeKXDM9RnhAav4Sbp95DsofK46tnmnf0E%2Bqu6eYCbmTqDXKsFxFICcfzuGlL5tiZvJsmpk5I8gOO8%2FxKi5VQp%2FMiLm38yh0HdgzpYL2zNaw3O8Ls1JPiK9%2BhafLg8%2B78w2uo%2F5vBjWrVPDVZQDjuhvzlxelPrNG8cTqyd1O3k8azGungOx0JYe7acss%2FlEBvHnwhHoOO3Pht3RvNItllakdwUZdL%2BA9CEHNDx5lkkHlhZhGS%2Fbp8i94i1D54NhaC8YRUYdUuNH2IhTNiy6E8w5e80QVEGHtPoo3xvDuwUFKgGaH%2ByH0c1W4BhOek4PgCbwIogKnIsbtuRB6ZaEXeyMMeav8kGOqUB0cGp%2FmAHVOJtmSR93mV%2Bru616ZxBrN7uk0diNrAZUXwj7UbFjJRBLQ%2Fgs51g8O2NTxgiloWGNSRaLT%2FXFRtpH%2F7qajVfMpbnhyAep1q0PzUqun1keciUZzbO0zSRyEcgRa%2FxGJgXF2WrCEAcQEUKDxCxbEETwo9jxuRnqPXekXMN2eucIr4mHHGGaXydOlcgF8ufZb4QkQZ6I5jPotGPKV9vpUWe&X-Amz-Signature=ed453490c577d92f65ff6d53eee4d16fda25330c915e8d404dc6b078798c1c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

