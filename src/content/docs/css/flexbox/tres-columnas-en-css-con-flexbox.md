---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIWUROA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy9A7ROJ%2FZgj0jG7HJENzhAfAvbPhUmxb6RAuGia6K%2FAIhALqm1WeFuCASUOyp%2FOIfC7uAf9B0fRBzI7z8iI3vkmFfKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBl%2FPMdjbR1cSD54Uq3AOYPERBfg%2BURBpzkoMJDA9LDR87%2BdAbSTxydxQPBALJF4u5LzB5Ipwr96hhVIhpBWSn5nO%2FYZzSosqtRJXYqa2%2Bf7QJ7iY7sVpoO%2FHB35YjTtD33SYi5MxVd%2BGy96NpfEoEAEmt%2FwzTM5DgLCCs46ZKKra0D3xmlET%2FOy6Gktg8nJUVckFg3%2FfDuWuUbEir0nxKWZ3GjESWtmMljGLcS4tOezW4ZIj5yxWMSTxg0MfDN4g96Qwvv%2BuYxkk8fkclHmDgnhDx4bLXok5nC%2Fg8I%2Bwn%2F84KSuzNhZmzVdBCXmAdlHFdqoJ3ceE1vcBfTKEMw4TeYLZWo3yj3gVX%2BBVVAYALhoZv3EQD2X4qmXhVvRvRTwojhi1OZ5gyPNEBqFpYTBg9ztWNfvoOTv%2FhGh8CUJgYZLTFwuJTP5kDT7%2FX7Q0Czte%2BwQUsm9i9i18CMUAtP%2BTRn4vUMxvUQ39Zn2rvm1Sim%2FzlcLrCBGa956hE0jKj9ybe96%2F0zvD6nj53tAYB6VbQLfQWsfYhXnQZYwXUdvLX3LJSOUTejNSfQ9COgKoVsww2J2cLUbI87YR7NsSnVAvGEn9%2BI2eEdLscfbFUoNAFOgh7%2Bq2es5alHXx4arkQWtMxZx8%2BFdFiPo8VgzCmpcrJBjqkAVqCCdqSpnd%2FIlFlwERX5yHYnftrtEgYcssqIrH9aKKPGT2o%2BpGF6sh%2F4Wq9E8MtHKfYrnpG%2FWMCr3mhPnhvYH2YxlGINUyxGAFpyLkWfm5EKmpXU5t07jhddAQrZ2UMN9jKqxsloyzD2%2B0Trob%2Fjfpdf5N5urKVHzPUyzk2uSFZjjtZZp7tR1LTwz83e9y7plyEoeRAsgcK53QqFguQ7A2%2Fvas0&X-Amz-Signature=cffc869a41c34f5cdda2ed9ec2f6f39e94358b394c3c911309c543eef2e8d7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIWUROA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy9A7ROJ%2FZgj0jG7HJENzhAfAvbPhUmxb6RAuGia6K%2FAIhALqm1WeFuCASUOyp%2FOIfC7uAf9B0fRBzI7z8iI3vkmFfKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBl%2FPMdjbR1cSD54Uq3AOYPERBfg%2BURBpzkoMJDA9LDR87%2BdAbSTxydxQPBALJF4u5LzB5Ipwr96hhVIhpBWSn5nO%2FYZzSosqtRJXYqa2%2Bf7QJ7iY7sVpoO%2FHB35YjTtD33SYi5MxVd%2BGy96NpfEoEAEmt%2FwzTM5DgLCCs46ZKKra0D3xmlET%2FOy6Gktg8nJUVckFg3%2FfDuWuUbEir0nxKWZ3GjESWtmMljGLcS4tOezW4ZIj5yxWMSTxg0MfDN4g96Qwvv%2BuYxkk8fkclHmDgnhDx4bLXok5nC%2Fg8I%2Bwn%2F84KSuzNhZmzVdBCXmAdlHFdqoJ3ceE1vcBfTKEMw4TeYLZWo3yj3gVX%2BBVVAYALhoZv3EQD2X4qmXhVvRvRTwojhi1OZ5gyPNEBqFpYTBg9ztWNfvoOTv%2FhGh8CUJgYZLTFwuJTP5kDT7%2FX7Q0Czte%2BwQUsm9i9i18CMUAtP%2BTRn4vUMxvUQ39Zn2rvm1Sim%2FzlcLrCBGa956hE0jKj9ybe96%2F0zvD6nj53tAYB6VbQLfQWsfYhXnQZYwXUdvLX3LJSOUTejNSfQ9COgKoVsww2J2cLUbI87YR7NsSnVAvGEn9%2BI2eEdLscfbFUoNAFOgh7%2Bq2es5alHXx4arkQWtMxZx8%2BFdFiPo8VgzCmpcrJBjqkAVqCCdqSpnd%2FIlFlwERX5yHYnftrtEgYcssqIrH9aKKPGT2o%2BpGF6sh%2F4Wq9E8MtHKfYrnpG%2FWMCr3mhPnhvYH2YxlGINUyxGAFpyLkWfm5EKmpXU5t07jhddAQrZ2UMN9jKqxsloyzD2%2B0Trob%2Fjfpdf5N5urKVHzPUyzk2uSFZjjtZZp7tR1LTwz83e9y7plyEoeRAsgcK53QqFguQ7A2%2Fvas0&X-Amz-Signature=f80f25fed15d85c98cc75fc7e8b06d4d7db867af7ee235874df6515e36276a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

