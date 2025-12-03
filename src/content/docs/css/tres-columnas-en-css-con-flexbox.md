---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMJDUK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0YphBul0ESSffum%2BQubEb3d5KSethLwCw5U1%2BDDMl%2BAIgDjqFIn3mkk8NDqm09oHDSn6c%2FANOEemhCU1bfkS4ATYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJlnrNkDXF8UHOKzrircA7YKlOx8aBIUBIAvS225qGfRlRhdTSzFhpcejoqSRucO2sN8z%2FWgCoZe020U%2FaMB3%2FMM9I1OXxZD%2FVyq6EjoaPJYxLXDF8ByJT4%2FSF7eZ%2FyXgOpiuDFmOOHDUw9G96YIO2lgRVdqVtQzl7asmJ1RUYXXZq5FfRT36Pk2FHmi49Paw2eWexIGxfSjiU0%2FEZtv9nSRJwakALPoV93MR53zBFnfST0NLSAq7wfYoRszXAyH1ghrlVH9HECTUR%2FiuMq1dnCmBOlKZkiE2DyS5hlhjcqRH93ZzYOO1Vpg0HPgmoQ3JXnhcPgIw9RpULFp99atNEVWG2jrUiCO%2BjKEG7ZZxqV9ZBKMSOqfmHkYUGWUY1OEwnfoSHqQH1aOLL6SfC4c5D7rx4JL4COUAI5B3Z2HhBMbuz4fo1i%2FHVvh1w%2BXK%2BxlaIM12%2Fz5%2BWFM6g5IwoaDxr%2FrfrWEbfX3rwwF53cZb%2FRRRIfuJGVghrknAhM%2FzKLRkzsVPgUwT3NKE8O7HdgaTgMEvpMBEhvsCIlo2be7E1VmUDXIHOZyAV0iZluggoXwuhMceL%2FXFHYYpCrYPFoAgWSmEcDGpmtSySSdEvByCj%2BPIqhkVO5E7MDcMswJ%2Bi9QCcU7wJ%2FXIv2tmGBNMMLcwskGOqUBQb1c0xt2fY1sl38T5ry%2B7cSCR%2FzE2m1jUy8z6VsJlo5CMRQw5PMwN10T0i6gggbyF4WuhD%2B5XMsV3noIdJSvOTEiAeRbUP0nf3Z76P5Q3PHKTe5zs1m1oU7BeR1j7vb41997ShYw97V60nUCptrmPT8%2FZxwFsFfUtdsjw0WUUez4N1iYV6bWrAZbhnzK%2Bs0vNjMhezQ6G%2BlLkzZMx1%2BArARHri1T&X-Amz-Signature=44c1cc01da4162ff90cdd4ac1f76279acc59da8285f167983758f534033ac010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMJDUK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0YphBul0ESSffum%2BQubEb3d5KSethLwCw5U1%2BDDMl%2BAIgDjqFIn3mkk8NDqm09oHDSn6c%2FANOEemhCU1bfkS4ATYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJlnrNkDXF8UHOKzrircA7YKlOx8aBIUBIAvS225qGfRlRhdTSzFhpcejoqSRucO2sN8z%2FWgCoZe020U%2FaMB3%2FMM9I1OXxZD%2FVyq6EjoaPJYxLXDF8ByJT4%2FSF7eZ%2FyXgOpiuDFmOOHDUw9G96YIO2lgRVdqVtQzl7asmJ1RUYXXZq5FfRT36Pk2FHmi49Paw2eWexIGxfSjiU0%2FEZtv9nSRJwakALPoV93MR53zBFnfST0NLSAq7wfYoRszXAyH1ghrlVH9HECTUR%2FiuMq1dnCmBOlKZkiE2DyS5hlhjcqRH93ZzYOO1Vpg0HPgmoQ3JXnhcPgIw9RpULFp99atNEVWG2jrUiCO%2BjKEG7ZZxqV9ZBKMSOqfmHkYUGWUY1OEwnfoSHqQH1aOLL6SfC4c5D7rx4JL4COUAI5B3Z2HhBMbuz4fo1i%2FHVvh1w%2BXK%2BxlaIM12%2Fz5%2BWFM6g5IwoaDxr%2FrfrWEbfX3rwwF53cZb%2FRRRIfuJGVghrknAhM%2FzKLRkzsVPgUwT3NKE8O7HdgaTgMEvpMBEhvsCIlo2be7E1VmUDXIHOZyAV0iZluggoXwuhMceL%2FXFHYYpCrYPFoAgWSmEcDGpmtSySSdEvByCj%2BPIqhkVO5E7MDcMswJ%2Bi9QCcU7wJ%2FXIv2tmGBNMMLcwskGOqUBQb1c0xt2fY1sl38T5ry%2B7cSCR%2FzE2m1jUy8z6VsJlo5CMRQw5PMwN10T0i6gggbyF4WuhD%2B5XMsV3noIdJSvOTEiAeRbUP0nf3Z76P5Q3PHKTe5zs1m1oU7BeR1j7vb41997ShYw97V60nUCptrmPT8%2FZxwFsFfUtdsjw0WUUez4N1iYV6bWrAZbhnzK%2Bs0vNjMhezQ6G%2BlLkzZMx1%2BArARHri1T&X-Amz-Signature=1148bdd44f432b732b4cb7954bd8713fe105c39339e7248c533d6d5122642507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

