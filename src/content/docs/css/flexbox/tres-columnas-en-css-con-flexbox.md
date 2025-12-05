---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y3KDHT4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtNSb5ygkhAiH%2BuypApOaYTRBWCYWOEmrwoMDAGPJYUAiEAz1D1XhKG2%2BBtHjoM9Ci0sFsTEKoxwShjoBsTFG1iq%2Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMraq00u6%2BezEeH4XSrcAyYjdLQntlVicgTT8w7d3xD3A%2Bm5k5Rv8HVKdcTsf4eVeyGymOp4nhmHbU%2F%2Bep2UFn5oCTNXXhP6iWwfxAiydJbe%2BBa%2BTUBEoTZ1seivBUGVpfNfj6d8fS0HEQ87CU5uNJYVFCdJJO0PesRZkGNSpCL2xG4RV8TfUh6E%2FgKGlmson%2B6lZnqGF1md8zSFMU%2B6WLWwuZXupY%2BH8mATfEeIAx1Rj0mdRM9aAceHjXAVzSoahAGJ2gkr1JJ36YSLcGIKEvML41NhCckgIRjzwtt6E%2FNw0pfoTteqivF%2FlYoxvscql124VkfYFOn8Tc9v7o7EoNUQ%2B8ROD%2BB6gKcgxZ8Fy%2FhPZP9gMGQ4FVo0PD1qyB1V0R4AwXZAp5aG9x1hlesrJunT%2B2FX6Sr7ACROsYRka9UtlrBWySiz146cZhPtTHYM3WAPWDVbbrlYGqXQUBQr1e9M9BreRFCzS%2FJEZnZOr7LsCshCoRudAICE61C%2BGJEjG4s6Wqx7gA6AR9XYxSvSmHThJQzh%2Bz96cTIvku8KpDGZ%2Fs%2B5q6GRQpD51lU3ITY%2FLdkfC3FRq%2B7z1GqIrTgEGP3IfWwy4J0p%2BnDyxczcjZgfM3EDuontzubYQJQBCEylzEMT%2BImzWZ3QlC9aMNWMyMkGOqUBQ%2BpA8EPQp8r9IcwwF%2F6ecLCCK%2BHjN9MchKWC5Q3e2c%2BUx6GdTfJRzrLvAfwnvpg0L0IJFRwKwoJs%2BtQ50ZwPIHn%2FZlzWuU9JqbjqvFmTLobRnm07pW8v0maVT4AIp%2FV7PW7%2FvUVYgQsZcesJSbOvNMUSVG5LCpdlhSbi3g6P4SV4jmeRFTaL%2F2y15YLikPNhZo1qI8vSbK%2Bc%2FO6SsrEiRMf7aY3l&X-Amz-Signature=b8b29b18e4ff138134c9c158e3028550f236338584fd7bf2a3d726e3ea4470d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y3KDHT4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtNSb5ygkhAiH%2BuypApOaYTRBWCYWOEmrwoMDAGPJYUAiEAz1D1XhKG2%2BBtHjoM9Ci0sFsTEKoxwShjoBsTFG1iq%2Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMraq00u6%2BezEeH4XSrcAyYjdLQntlVicgTT8w7d3xD3A%2Bm5k5Rv8HVKdcTsf4eVeyGymOp4nhmHbU%2F%2Bep2UFn5oCTNXXhP6iWwfxAiydJbe%2BBa%2BTUBEoTZ1seivBUGVpfNfj6d8fS0HEQ87CU5uNJYVFCdJJO0PesRZkGNSpCL2xG4RV8TfUh6E%2FgKGlmson%2B6lZnqGF1md8zSFMU%2B6WLWwuZXupY%2BH8mATfEeIAx1Rj0mdRM9aAceHjXAVzSoahAGJ2gkr1JJ36YSLcGIKEvML41NhCckgIRjzwtt6E%2FNw0pfoTteqivF%2FlYoxvscql124VkfYFOn8Tc9v7o7EoNUQ%2B8ROD%2BB6gKcgxZ8Fy%2FhPZP9gMGQ4FVo0PD1qyB1V0R4AwXZAp5aG9x1hlesrJunT%2B2FX6Sr7ACROsYRka9UtlrBWySiz146cZhPtTHYM3WAPWDVbbrlYGqXQUBQr1e9M9BreRFCzS%2FJEZnZOr7LsCshCoRudAICE61C%2BGJEjG4s6Wqx7gA6AR9XYxSvSmHThJQzh%2Bz96cTIvku8KpDGZ%2Fs%2B5q6GRQpD51lU3ITY%2FLdkfC3FRq%2B7z1GqIrTgEGP3IfWwy4J0p%2BnDyxczcjZgfM3EDuontzubYQJQBCEylzEMT%2BImzWZ3QlC9aMNWMyMkGOqUBQ%2BpA8EPQp8r9IcwwF%2F6ecLCCK%2BHjN9MchKWC5Q3e2c%2BUx6GdTfJRzrLvAfwnvpg0L0IJFRwKwoJs%2BtQ50ZwPIHn%2FZlzWuU9JqbjqvFmTLobRnm07pW8v0maVT4AIp%2FV7PW7%2FvUVYgQsZcesJSbOvNMUSVG5LCpdlhSbi3g6P4SV4jmeRFTaL%2F2y15YLikPNhZo1qI8vSbK%2Bc%2FO6SsrEiRMf7aY3l&X-Amz-Signature=5d1a3cf0f0f512280d6d9473397136d4d7daa89a99ff5f3a31345f4d4b1937a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

