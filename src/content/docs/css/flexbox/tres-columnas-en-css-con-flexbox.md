---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHW3UATZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO0Al0ZCjX92bClmkfwjLCWX%2BgZPaVBpyV6iIKuH4lmQIhAN2hyovJVbRWFWHRYHYRJtCnIIgv4%2F7%2FFyYM7kItToDrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzE2bTG%2B1ELCSeWNPEq3AONgUwcL%2BCAFBBqDYl0zYO90zCVU%2BtkjJqx%2BCztpcJMEBXGVy7kfKmg58It1ewwhrW%2BiHX8QdyX%2FmuJDD%2B%2BmxjPIjhqUQo8bRz%2FVl8XjIGxbT9uGhAAtUHxEJDW%2F1WRvvywZE7vMhMCNpzyDqAj7NhxJM295iXwq2loL0YqfrZ%2FO1eMTM1yA%2BUL8tl0BuK3A4nae8dFwlY%2Bm6cvqdwel7hbpCg2oH5YF9125kuESd4pgqogQixFCwGj0uplgvc5WJCCeEcFcY1lFIicAbncHkw8w6%2BefY%2F6urkL5IRqtG2qU5oi6UrX2k68AfAYf4ConhWBlfnO3UUKJ8wkgHafCB%2Fp6ya8rNleQ%2BWFHQ5HqYzQQ7UJwBm%2FSnpU5CqWmsg4gVwUANNdNpVPuTZwZJAbMC4%2FQhs8BYLf35ryANlRTV8sAWpe%2BbThKyKxMzOu8pf9pYQ0iMFWcGtvg%2BAs7Ln0APf1waGkJUUekg7ojotFCh10etyv2RWT6Jr%2BrQV4GA8xngfS01vyDJJv8%2BZGHHzR2cFQ9ZPVx9piyIRPBqnJvTIp1mcONY2x7wSWrqtA9x7hQOArLY8cXJw58jxKLosipVmsmbZuQCKx3t49HqC%2FWaxtGb2%2B3khfapt5kar75DD1ptDJBjqkAY8Po%2BTK1ojWdlyKjyKpmIo1S9fowgbmRAqXDTR2jjpRnnNWoFlY4Y33h12BMO8VFn%2BnnStQFeqo05alp%2Bfy7jgQyXsHS1EcHLww%2F16l10dbKKeNY5ViZvWliGFEObyYlyx1tS8SghNcwwNruyr0Of%2FsldoOZn%2FtcUl4hDYAKpRs04gBBeI8hMh%2BGHWfUND29GyOVN0wDfH%2FY2UnLGquvLknLRSq&X-Amz-Signature=69e7423963b816c76d3d1ecdac069c52617c6ea61e5536d3bf8d9bfd8ee46d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHW3UATZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO0Al0ZCjX92bClmkfwjLCWX%2BgZPaVBpyV6iIKuH4lmQIhAN2hyovJVbRWFWHRYHYRJtCnIIgv4%2F7%2FFyYM7kItToDrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzE2bTG%2B1ELCSeWNPEq3AONgUwcL%2BCAFBBqDYl0zYO90zCVU%2BtkjJqx%2BCztpcJMEBXGVy7kfKmg58It1ewwhrW%2BiHX8QdyX%2FmuJDD%2B%2BmxjPIjhqUQo8bRz%2FVl8XjIGxbT9uGhAAtUHxEJDW%2F1WRvvywZE7vMhMCNpzyDqAj7NhxJM295iXwq2loL0YqfrZ%2FO1eMTM1yA%2BUL8tl0BuK3A4nae8dFwlY%2Bm6cvqdwel7hbpCg2oH5YF9125kuESd4pgqogQixFCwGj0uplgvc5WJCCeEcFcY1lFIicAbncHkw8w6%2BefY%2F6urkL5IRqtG2qU5oi6UrX2k68AfAYf4ConhWBlfnO3UUKJ8wkgHafCB%2Fp6ya8rNleQ%2BWFHQ5HqYzQQ7UJwBm%2FSnpU5CqWmsg4gVwUANNdNpVPuTZwZJAbMC4%2FQhs8BYLf35ryANlRTV8sAWpe%2BbThKyKxMzOu8pf9pYQ0iMFWcGtvg%2BAs7Ln0APf1waGkJUUekg7ojotFCh10etyv2RWT6Jr%2BrQV4GA8xngfS01vyDJJv8%2BZGHHzR2cFQ9ZPVx9piyIRPBqnJvTIp1mcONY2x7wSWrqtA9x7hQOArLY8cXJw58jxKLosipVmsmbZuQCKx3t49HqC%2FWaxtGb2%2B3khfapt5kar75DD1ptDJBjqkAY8Po%2BTK1ojWdlyKjyKpmIo1S9fowgbmRAqXDTR2jjpRnnNWoFlY4Y33h12BMO8VFn%2BnnStQFeqo05alp%2Bfy7jgQyXsHS1EcHLww%2F16l10dbKKeNY5ViZvWliGFEObyYlyx1tS8SghNcwwNruyr0Of%2FsldoOZn%2FtcUl4hDYAKpRs04gBBeI8hMh%2BGHWfUND29GyOVN0wDfH%2FY2UnLGquvLknLRSq&X-Amz-Signature=8c85437fd4bf21adf0c8056a75c09c5d67cfa7c571502ca7d064b5f996c8ef16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

