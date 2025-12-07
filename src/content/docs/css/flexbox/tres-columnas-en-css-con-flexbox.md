---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OI5JYM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBon29xik8B71yKhkLAmqqm8ASPMZKm3%2BUvIny4a0l7QIhAOmb4cYfnaWhBXlkm1BefHc7sva1IXEKiO9RyBwjvr7sKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6bRuFP8OPb%2F6rd7Yq3AMmOgsA%2Fmhu2VaMCWIV2THXCCf3qKzGxHqmupsoiaUz5jgzMH1Y35GbcowlQasIGWeIYlfpXj%2F7hkcIYj9%2FyLWh12Ka9My%2BN6zGHjatJdyN36hM2JhBt8lvJ0Wligs%2Fzau7wxmEv40zNGs%2BamVGAgjTE7XCW5ATt%2Fey231ttCjlXxd7zw0lVG6mF4jWBIT7IfRvS543Hd28yoDzr%2BL02kr1xaoXdlYfYOIYbx8mQdpC1K7ZxEjMbY3VRX0MKVOp8uWgam7R5D6R7NkJPd2wrDxDThfKGtdq8LInTOd%2BJ201qeI50mVGhrQa4po1MDaTwPGwdEFNBEFTsykgGIwcZLPFrjGfzjty9BVhgz2%2FYjYJGRIHegCMSyx8rc1FZX9ZTe73OFn5xhXU0UyZwvFBW5PMPddHrn%2FEV2pKcCXwNqfFJD3f88RDrSdyWPw9mWspyspGU52Hq0iWkspRgYEfKeTa5Eii%2B1zJu2VeyuO2ezfLlkvcdhw3HDJMmToSR9l9ywmnSNmHfj5bLipK1fhSvfcAqSp0p17LTiyCboJeydsTBBwTL7LIu422e0tFtUH3oz4yWFxG0bB3ao66NAKoO1fXQDbxIlH7QypWmqy48KR3LjYTVENdlrH%2FXuq1FzDUmdXJBjqkASdgRe87uDUg%2BQlc%2FxnmMfS1KbYZqbO9ketKbHJBeDfF%2FemCfkelcH22%2Bal271OMBS9rF0i5VjZmYXaK0v3zH7IGnmZZFMdonugtwoNDe%2FU4euDATf9lzRfJuFv7MmfWCL3Rk4PbLbW015R0RaIJygGWGwtIgatGr7q8tmtRLZbnf4RhUg%2BxBOuGyUABGuQjSaNi%2FHDqcfOmLJk6KMiEpQtsvvqy&X-Amz-Signature=bffb5d099920b4177cb714b715c239c722fc92cbae676d36377133ff118cca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OI5JYM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBon29xik8B71yKhkLAmqqm8ASPMZKm3%2BUvIny4a0l7QIhAOmb4cYfnaWhBXlkm1BefHc7sva1IXEKiO9RyBwjvr7sKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6bRuFP8OPb%2F6rd7Yq3AMmOgsA%2Fmhu2VaMCWIV2THXCCf3qKzGxHqmupsoiaUz5jgzMH1Y35GbcowlQasIGWeIYlfpXj%2F7hkcIYj9%2FyLWh12Ka9My%2BN6zGHjatJdyN36hM2JhBt8lvJ0Wligs%2Fzau7wxmEv40zNGs%2BamVGAgjTE7XCW5ATt%2Fey231ttCjlXxd7zw0lVG6mF4jWBIT7IfRvS543Hd28yoDzr%2BL02kr1xaoXdlYfYOIYbx8mQdpC1K7ZxEjMbY3VRX0MKVOp8uWgam7R5D6R7NkJPd2wrDxDThfKGtdq8LInTOd%2BJ201qeI50mVGhrQa4po1MDaTwPGwdEFNBEFTsykgGIwcZLPFrjGfzjty9BVhgz2%2FYjYJGRIHegCMSyx8rc1FZX9ZTe73OFn5xhXU0UyZwvFBW5PMPddHrn%2FEV2pKcCXwNqfFJD3f88RDrSdyWPw9mWspyspGU52Hq0iWkspRgYEfKeTa5Eii%2B1zJu2VeyuO2ezfLlkvcdhw3HDJMmToSR9l9ywmnSNmHfj5bLipK1fhSvfcAqSp0p17LTiyCboJeydsTBBwTL7LIu422e0tFtUH3oz4yWFxG0bB3ao66NAKoO1fXQDbxIlH7QypWmqy48KR3LjYTVENdlrH%2FXuq1FzDUmdXJBjqkASdgRe87uDUg%2BQlc%2FxnmMfS1KbYZqbO9ketKbHJBeDfF%2FemCfkelcH22%2Bal271OMBS9rF0i5VjZmYXaK0v3zH7IGnmZZFMdonugtwoNDe%2FU4euDATf9lzRfJuFv7MmfWCL3Rk4PbLbW015R0RaIJygGWGwtIgatGr7q8tmtRLZbnf4RhUg%2BxBOuGyUABGuQjSaNi%2FHDqcfOmLJk6KMiEpQtsvvqy&X-Amz-Signature=f20df812dc25363443dde78460ba3f74b12a7b6a70ef554d06f9b7acd4bc3239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

