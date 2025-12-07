---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIR5SWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezNVoUswwr43tTr4BzOe%2B5XcVBiS5OlBRlljequDnvgIgTvfxjmA1Yxxtp8U1P72unv7zIx2SBOssIlzkKQFVU6gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuRwYOOUvwY1ms6nSrcA42KRe32OlGq9l4p%2FrJLEKVoW5Ocn6b0Qwdav6VMcEj96lQ6toaXa5puSJO4dgC%2BQEPVtpMZZkI%2B%2BQUfrmxiGjzfj8PyqYgfwsnPyNWZ%2F36hWyJE3CfrftFHLF%2FC0kUVoZp0tC933hZ6T9Ws4hZ5kVboesl3Tjrb6ivlJbJyknUrr1lBOsh11T4gAxgV7WWOW19yBFRNy8epBKoPIbIr%2FfD6utzYcwLN%2FRQR6YRkPQ5ZqFk4%2B97Nyzl9EWWjZl8Nx3Wb3oVv5XGU0adYxPsUvvGqp0ScKp%2FgJrpWm1uBAG%2BF8uNXjRILHwLUVDS4aRZ3nDSGYgCgMiEyOCSsDYDKXOEAD8dSH7kEMymZwO23Ev%2Fi10FVVGdBerVAu%2F3fyUppIMm16beug2SC6mYL4%2BsZaNMEmQTFLQGLB%2FzpfYbMSDx6uZx75SMHf5JgLMc7MS5EWPnoTudkt%2BmKso1kzzrY%2F%2B5gd251SkwTswZ1Dwp2wuAmEW2DV4fKk2%2BnqGpAfwIHasADicZVdj4qDFMECOikaiJ4hDnAPOalAYo%2Be3NhT0v%2FZ7qny70XtmygJUZor71ZroYzWC89wAQInUgIvf%2Fromyd5mLHqWaIS8ICBS4ul612aaeH31r4UjmCsCQkMPGj1MkGOqUB7BymYGoSiwomVlSOjI8E7YHC3vicAj%2FDgqVwF6mggPoF5XCQi0DQ0TOUBRghjBDPwvxOn8lCctuS1AWmkFQNU6sqZnfKQaIGPzCVG18TnKV4vNwhE1IcwpBaRYR1a94ovPHwPJ04CP5UG5nUz9ZbDfr6894SDLrzL%2FMMHU7kPVf92saj1e0%2F3MIs87fW2zzDnNn5m%2B13XfHbZr8MgMee6354H9mk&X-Amz-Signature=c74810a5e93fe9f9d205339c9265faca2f1c924eb3423f21e062d13bd0c2775f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIR5SWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezNVoUswwr43tTr4BzOe%2B5XcVBiS5OlBRlljequDnvgIgTvfxjmA1Yxxtp8U1P72unv7zIx2SBOssIlzkKQFVU6gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuRwYOOUvwY1ms6nSrcA42KRe32OlGq9l4p%2FrJLEKVoW5Ocn6b0Qwdav6VMcEj96lQ6toaXa5puSJO4dgC%2BQEPVtpMZZkI%2B%2BQUfrmxiGjzfj8PyqYgfwsnPyNWZ%2F36hWyJE3CfrftFHLF%2FC0kUVoZp0tC933hZ6T9Ws4hZ5kVboesl3Tjrb6ivlJbJyknUrr1lBOsh11T4gAxgV7WWOW19yBFRNy8epBKoPIbIr%2FfD6utzYcwLN%2FRQR6YRkPQ5ZqFk4%2B97Nyzl9EWWjZl8Nx3Wb3oVv5XGU0adYxPsUvvGqp0ScKp%2FgJrpWm1uBAG%2BF8uNXjRILHwLUVDS4aRZ3nDSGYgCgMiEyOCSsDYDKXOEAD8dSH7kEMymZwO23Ev%2Fi10FVVGdBerVAu%2F3fyUppIMm16beug2SC6mYL4%2BsZaNMEmQTFLQGLB%2FzpfYbMSDx6uZx75SMHf5JgLMc7MS5EWPnoTudkt%2BmKso1kzzrY%2F%2B5gd251SkwTswZ1Dwp2wuAmEW2DV4fKk2%2BnqGpAfwIHasADicZVdj4qDFMECOikaiJ4hDnAPOalAYo%2Be3NhT0v%2FZ7qny70XtmygJUZor71ZroYzWC89wAQInUgIvf%2Fromyd5mLHqWaIS8ICBS4ul612aaeH31r4UjmCsCQkMPGj1MkGOqUB7BymYGoSiwomVlSOjI8E7YHC3vicAj%2FDgqVwF6mggPoF5XCQi0DQ0TOUBRghjBDPwvxOn8lCctuS1AWmkFQNU6sqZnfKQaIGPzCVG18TnKV4vNwhE1IcwpBaRYR1a94ovPHwPJ04CP5UG5nUz9ZbDfr6894SDLrzL%2FMMHU7kPVf92saj1e0%2F3MIs87fW2zzDnNn5m%2B13XfHbZr8MgMee6354H9mk&X-Amz-Signature=3c5df717429860ca6f17a581e4321e10c11ae8637867c2d9595729affdc98ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

