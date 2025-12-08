---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJMB4VG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyo4rdsL3%2BK88%2F8cAKMMlehdCDRz0Sf64glUmEi9JczgIgd7wpQ9sujEyjV%2FCMsu4%2FLr0GY7yXBuhC7tPHRRPQjvgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1%2BnLgo2EssEDd3CyrcA%2FiIW4V6x2KgYq87oXk0lvDeDHIAStxmLP66O%2FLZNi9cBkIt1aYMPt7ICq5Fx9SWWZWKYAak%2BqTnDt12f9Fek9Yh2V6uHgd8DUgPHVszTi3LxP5Da8HkD1oOSY5%2FhCLhk2EDcft87aN%2BMqNaTFJaKBpq42RDWfHyVdUtoL1R7DUjiHmEN5l9PSVSOT2K0jCCAmnRyhUXmHN9hhrFZ%2BO%2BpIXOwhrbJ%2FjFJkuYq%2F%2FvOYxgOfLrRQQ%2FslXLeYMwAhNJ5JDovc4gCagqwlGoB8y7OD1aV0PNe%2BzwIvMrS%2BY8sm6zU2HDiOYR6BEmSnKAhXQGrMW2RPx18D9zl8niD2ln3e4%2BYsMr97fb91CQfAGvDwMGER80S%2FXaqCGoWAp9SyBhQAcPjO%2FCbVgH4yifpTlphi1al9nIdAzzYx%2FLohDUlpSbDs52HUeXSks%2Bx%2BrJAlw0Hx6SeqxAIBqNcwBLrFcBtu1OURW2C5a0CbaUIdlooijj4GiD6zE6PWavbx0ypGPzKoUx53uyq0hAcJ8oIV3o%2BxlvEjMu1uqxfGVVxSI96wjvFSAdYuXZsi6y5%2F5KhSpO7n8IIicpbWxDljtfSyZyXpTBj9B6ZWox26Y1muRgVpyqKryDIMUbjtB2GdS9MOSU2ckGOqUBf3v6TcW1Cd1rdVUB6LI79G93iOtgWxbKJ2MhRv9s40FAVYJ6XgCUcQmw1BNNiSenZbaa0QntnnVeYBUzH2Rfo%2FGS40POzWVJ2LTDprOfrlyHs9U%2B2zRC51cAVG9DHO1cQhqTWsa9R%2BsMZGShyZ%2BH9lbz1xOzeYvVyeAVyRRpbnvqHjL6BMuYoBZdrzHw7v7fv1mQ%2Fr4MJ6R2VifyJBY79MRS02lj&X-Amz-Signature=f26b959975defeea1c95f191f1f47ea75d6644415b5b148af307da06a902d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJMB4VG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyo4rdsL3%2BK88%2F8cAKMMlehdCDRz0Sf64glUmEi9JczgIgd7wpQ9sujEyjV%2FCMsu4%2FLr0GY7yXBuhC7tPHRRPQjvgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1%2BnLgo2EssEDd3CyrcA%2FiIW4V6x2KgYq87oXk0lvDeDHIAStxmLP66O%2FLZNi9cBkIt1aYMPt7ICq5Fx9SWWZWKYAak%2BqTnDt12f9Fek9Yh2V6uHgd8DUgPHVszTi3LxP5Da8HkD1oOSY5%2FhCLhk2EDcft87aN%2BMqNaTFJaKBpq42RDWfHyVdUtoL1R7DUjiHmEN5l9PSVSOT2K0jCCAmnRyhUXmHN9hhrFZ%2BO%2BpIXOwhrbJ%2FjFJkuYq%2F%2FvOYxgOfLrRQQ%2FslXLeYMwAhNJ5JDovc4gCagqwlGoB8y7OD1aV0PNe%2BzwIvMrS%2BY8sm6zU2HDiOYR6BEmSnKAhXQGrMW2RPx18D9zl8niD2ln3e4%2BYsMr97fb91CQfAGvDwMGER80S%2FXaqCGoWAp9SyBhQAcPjO%2FCbVgH4yifpTlphi1al9nIdAzzYx%2FLohDUlpSbDs52HUeXSks%2Bx%2BrJAlw0Hx6SeqxAIBqNcwBLrFcBtu1OURW2C5a0CbaUIdlooijj4GiD6zE6PWavbx0ypGPzKoUx53uyq0hAcJ8oIV3o%2BxlvEjMu1uqxfGVVxSI96wjvFSAdYuXZsi6y5%2F5KhSpO7n8IIicpbWxDljtfSyZyXpTBj9B6ZWox26Y1muRgVpyqKryDIMUbjtB2GdS9MOSU2ckGOqUBf3v6TcW1Cd1rdVUB6LI79G93iOtgWxbKJ2MhRv9s40FAVYJ6XgCUcQmw1BNNiSenZbaa0QntnnVeYBUzH2Rfo%2FGS40POzWVJ2LTDprOfrlyHs9U%2B2zRC51cAVG9DHO1cQhqTWsa9R%2BsMZGShyZ%2BH9lbz1xOzeYvVyeAVyRRpbnvqHjL6BMuYoBZdrzHw7v7fv1mQ%2Fr4MJ6R2VifyJBY79MRS02lj&X-Amz-Signature=bc373b8823036bf612ade58d78d3cdedb1d8d104089aa1d95ad00ecb61110be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

