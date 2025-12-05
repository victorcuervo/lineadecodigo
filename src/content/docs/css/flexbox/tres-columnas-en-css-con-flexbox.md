---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOC44XZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSPqlEW8yJP9yN6O8jRjAfgOpVIbEJgdaCWd4TQLfoNAiEAnwcKohiEMVsJ5CHzagMMZRj4XMD2lWBGRiOcuFbzSyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLpyHJWOvgnKp%2BoAUSrcA%2FXn06AOELb2THHyEv7gpS6XHkdFVERzGsmfY8dYzxpikT5ABkUB0MJpiRXTWOt4aFw4AZY8RUko5UxRHBBuzfBaGZWdNgddDiwitshbOMT0VJHGe33cLF4v1bfTTIxHsJ6%2BXCD%2FcsiU%2FGrlNhqchEbLOZPoTK4hnpT66g36dd551MauMZaLSmNo3fY7uWmhyCr%2BNXjD2ubo23gqiMI%2FdOdwPIF9J2dlctAuHJQu8AZ3Qfr%2FpeeY4L3gehdYjKpvXPzdAookIfLaA2JnVDcOsw16dGgVZv2R%2Ft40eD0%2BBN%2B8vBWO4xP4rzqTwv4Dq%2BsMjvEVZaqjEzNke4cueoWTkpLX9L%2FUMeN80iXri8p1cibQ4sc2fSpRds7mPlOOTEbK823gfRq%2BS1yeBFraYLASrwZFbKqME%2B41%2BX20Wwv2XMP%2FsM%2FnYlErQ8v%2FtxAt6C6gkLFXcz0G1b23eSb8NeIYNHUVhxGUT2%2FyLXNg51%2FBu3U4I%2BkD09de52rXnUJNU50l0M%2FSRCiDMyJl7dPbS9dNWE24S5SZoQeD%2FERHCKagI9NeN%2FEg%2Ff11IUOQMX5sIQVJ5tMBziHAWCV8t%2F2yHjpIo49bR2AusvJluyMsYgv%2F%2BeTaWBGzCypH1uERcFRyMNmqyckGOqUBHVaArSylO0YXluauQtxg%2BNe5hafJeW1xY6ioZcPRvkrYl6Mc0l%2BflidemUyfeSMupIYoWBXLc3SVtfWc%2BQbB6WWZIAegeyznmUyKfs4wsGW%2BHFIHanWfzO4sGj2WEZRPjAb7nSk%2B4%2FRhK5X2Ui88V0jBcn5fJBjKz7LctNtdiKi%2FdG1kBk2jKORv15EUPzAq%2BHTWxWORgxXsTZS8207tj03ur4Y2&X-Amz-Signature=c4fa2cd057675abe1e30518dcbcb1c5df496565851b2211d172e7481723cff12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOC44XZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSPqlEW8yJP9yN6O8jRjAfgOpVIbEJgdaCWd4TQLfoNAiEAnwcKohiEMVsJ5CHzagMMZRj4XMD2lWBGRiOcuFbzSyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLpyHJWOvgnKp%2BoAUSrcA%2FXn06AOELb2THHyEv7gpS6XHkdFVERzGsmfY8dYzxpikT5ABkUB0MJpiRXTWOt4aFw4AZY8RUko5UxRHBBuzfBaGZWdNgddDiwitshbOMT0VJHGe33cLF4v1bfTTIxHsJ6%2BXCD%2FcsiU%2FGrlNhqchEbLOZPoTK4hnpT66g36dd551MauMZaLSmNo3fY7uWmhyCr%2BNXjD2ubo23gqiMI%2FdOdwPIF9J2dlctAuHJQu8AZ3Qfr%2FpeeY4L3gehdYjKpvXPzdAookIfLaA2JnVDcOsw16dGgVZv2R%2Ft40eD0%2BBN%2B8vBWO4xP4rzqTwv4Dq%2BsMjvEVZaqjEzNke4cueoWTkpLX9L%2FUMeN80iXri8p1cibQ4sc2fSpRds7mPlOOTEbK823gfRq%2BS1yeBFraYLASrwZFbKqME%2B41%2BX20Wwv2XMP%2FsM%2FnYlErQ8v%2FtxAt6C6gkLFXcz0G1b23eSb8NeIYNHUVhxGUT2%2FyLXNg51%2FBu3U4I%2BkD09de52rXnUJNU50l0M%2FSRCiDMyJl7dPbS9dNWE24S5SZoQeD%2FERHCKagI9NeN%2FEg%2Ff11IUOQMX5sIQVJ5tMBziHAWCV8t%2F2yHjpIo49bR2AusvJluyMsYgv%2F%2BeTaWBGzCypH1uERcFRyMNmqyckGOqUBHVaArSylO0YXluauQtxg%2BNe5hafJeW1xY6ioZcPRvkrYl6Mc0l%2BflidemUyfeSMupIYoWBXLc3SVtfWc%2BQbB6WWZIAegeyznmUyKfs4wsGW%2BHFIHanWfzO4sGj2WEZRPjAb7nSk%2B4%2FRhK5X2Ui88V0jBcn5fJBjKz7LctNtdiKi%2FdG1kBk2jKORv15EUPzAq%2BHTWxWORgxXsTZS8207tj03ur4Y2&X-Amz-Signature=de72265bde71221e9b20406b015608ac12c6b549fddb5c68a8c7ca239812257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

