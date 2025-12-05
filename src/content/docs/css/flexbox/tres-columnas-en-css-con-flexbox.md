---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDFYJ7NZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuDnfMINCOgSOStk8aWqZm4JwM0G5MoYy1MhVwf5HpEAiByhS9gQ%2BzWU1SwNna%2BeCVbfGGSQOEeA6Fq7WmA3vzp4yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVs6nxhDTh2bzR2suKtwDLZR%2FlAMQ51f0%2BL1%2BgGpNiX8%2FMIgiicO%2FcC6wI5aPKKzz7FdQJWfnOo%2FAfOPDciYRlc%2BawphWTiTiBTdyyQkyXomAOEhzfrPfnVH%2FDeFSijNqbMqR5qM7rX1HvE8JQDs48h6BYsHx3w1Cwm7Rdn9jcrVZr0AQ9OpsYqqoFphPt5tM6CdsgM30MCdGceV0377vv7RQiody19TX%2FCnvctC%2FWGW%2Fdzq4Tkza3OSr4EJ8y8FDPW9xIog%2BNJc2ZXSeeXCnE0D575m4WapqlhzWJJqHnPW7yyivVg7lKqJvChDSIqXSUiyFkxluGSbkx%2BWYoKa68uChsna7U18pEFFiq4%2FdT3IBAZbcQ97Tdi8cz8OaAgr297tOG%2B2%2BDrYgTwYC4Bfa%2FIjBBaY6iBFFTpb51G%2B6bG80oNSU4sxLwWr7VJOO0XIewF%2BYRiiag1YyQQ2Bp5eY8hG%2FPZDh4Z7Cmr0VbgtXysFv%2FFXY94n3KzTA0%2FiLTGFYqum95xvIDBSJ8Rkk6Rd%2BgTlvPS5oSBCRuzTKdMey5CIIwz%2FuabtlrqNT8lu6rVSjWklw%2FytookRgypvQ%2BrdtMO7rdd9pCefJmHJo2n%2BofiEdq%2FMpi3n5Pil%2Bl3PtqpOXxgvAYemuYzaw9nUwr8bKyQY6pgF6bG8jkXAAL9CEB6G2tdQUEDKPizX2HSFcybBkYxgYSFVgQkBJyrpjbgsFe0W83NzGnDIJypIzHZwOd8MbrtSLkzrE87zR%2FoOkQa3bGeCz1qv7UQV7ExGuu6vhOxcCETt5UGcSDGllp0yKLCMOcRwTzkt5nSDZquASXUpHCuwWY9LWY8CWWwjB%2BDhMgM4xDrjWtW8XpQRluwD66YsJ%2Bjg%2FRQcT8g9Z&X-Amz-Signature=1b233b97455a432381bd7248ffe42dfa9d8a069a068e7f13dfc43b08bb9a26a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDFYJ7NZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuDnfMINCOgSOStk8aWqZm4JwM0G5MoYy1MhVwf5HpEAiByhS9gQ%2BzWU1SwNna%2BeCVbfGGSQOEeA6Fq7WmA3vzp4yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVs6nxhDTh2bzR2suKtwDLZR%2FlAMQ51f0%2BL1%2BgGpNiX8%2FMIgiicO%2FcC6wI5aPKKzz7FdQJWfnOo%2FAfOPDciYRlc%2BawphWTiTiBTdyyQkyXomAOEhzfrPfnVH%2FDeFSijNqbMqR5qM7rX1HvE8JQDs48h6BYsHx3w1Cwm7Rdn9jcrVZr0AQ9OpsYqqoFphPt5tM6CdsgM30MCdGceV0377vv7RQiody19TX%2FCnvctC%2FWGW%2Fdzq4Tkza3OSr4EJ8y8FDPW9xIog%2BNJc2ZXSeeXCnE0D575m4WapqlhzWJJqHnPW7yyivVg7lKqJvChDSIqXSUiyFkxluGSbkx%2BWYoKa68uChsna7U18pEFFiq4%2FdT3IBAZbcQ97Tdi8cz8OaAgr297tOG%2B2%2BDrYgTwYC4Bfa%2FIjBBaY6iBFFTpb51G%2B6bG80oNSU4sxLwWr7VJOO0XIewF%2BYRiiag1YyQQ2Bp5eY8hG%2FPZDh4Z7Cmr0VbgtXysFv%2FFXY94n3KzTA0%2FiLTGFYqum95xvIDBSJ8Rkk6Rd%2BgTlvPS5oSBCRuzTKdMey5CIIwz%2FuabtlrqNT8lu6rVSjWklw%2FytookRgypvQ%2BrdtMO7rdd9pCefJmHJo2n%2BofiEdq%2FMpi3n5Pil%2Bl3PtqpOXxgvAYemuYzaw9nUwr8bKyQY6pgF6bG8jkXAAL9CEB6G2tdQUEDKPizX2HSFcybBkYxgYSFVgQkBJyrpjbgsFe0W83NzGnDIJypIzHZwOd8MbrtSLkzrE87zR%2FoOkQa3bGeCz1qv7UQV7ExGuu6vhOxcCETt5UGcSDGllp0yKLCMOcRwTzkt5nSDZquASXUpHCuwWY9LWY8CWWwjB%2BDhMgM4xDrjWtW8XpQRluwD66YsJ%2Bjg%2FRQcT8g9Z&X-Amz-Signature=25bd5cca2043ad7090d5618264beb4486e9cc5cc6aba900fffe2e85b43f3b8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

