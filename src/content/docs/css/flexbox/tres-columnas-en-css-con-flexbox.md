---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGYQCYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF88C4JToz%2BOzxXRqbP8I0Z50hxZo7TvmPMt7vOWBedYAiAaHbWd7CbDEe3tM3g51PVM3rZgP%2FKXtw3ux4HdAhFUDCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTxx2aPu0C4RLIc%2BKtwDZA5FrpOKS9oqYUfF%2BvOY5y1VDnZvm%2FGmNBYvMmIhXvKM3y%2BgcBTreQM%2FmJnEnAoYtZshRU1orHipifvaNdymKPE%2BaByqEYhsBH%2FD%2FOldbKdcIesHL5aDrFpE3s%2FUb7elCtZf%2FBd1rm2A%2BX%2B3a5oJK2LyID%2FVd5r8n5LdoWsMXzcCPnDJJ9m93sqTMJdhyJgjpmCk0AY1rzTBiPxx%2FcDwK9UbxyMUiezd0EaA6TQtrZNc2DhgQz9OpIDKpYGkfAjV09TdoOdBDg54i32I5zA8FYjZxUvUEXJW8yO1NNcYGGUCPs2%2BcuMXRTd6KF%2F3E9MDTesZMg0Qga4noqF%2FISMGnA69GJnPdEUsj2orcEjY0QONvgR1%2F6vrwawdWRAilbL3W5eAdJ3ed4eVaUamBg8wBJLc3jynnq2VuWCMO3jcBXy5WRsOhW3gt%2B8aDUG8aYOHCD3Wd%2BT%2F6kG7Q%2FbXX6WWoejSICk5hWX8fGuGTiiih1EnLYeOGaUnknfET1a%2F%2BFSXyuOsLzRrPcvqgthqR30xrzJoLEJc5AIxd7lxMqP1WfdPNWusis36zFEQUALgQTY6kpCWrj%2Blfkq1jSVzem7vVayJ9h4g4C0RhYc92g7CZkCkffoV10ESTTq4RF8wq5%2FUyQY6pgH2H3LcL8cTgSElHMyWsQjXdcoG%2BsewR11c6%2FII4%2BD73L1R0iv0BiTDl5N2vnQkS%2BrpE2DrO9%2BjDH8PrU1RuF%2BAbMglzHs1afT6guHofN5MUOkHeosGhGrbt%2FxGLXqLkKlIzXc50IPp3PaXlqoRDuSw8nlyBKIkrR84m37Juu%2B3%2Bp34XApRQlpZn%2Bvh13we2ZE4yGEb1gyTWedbpe03rtdwj%2FYmEVpQ&X-Amz-Signature=41a3d8afa566e3e96d2d971f5b3a7609412b338fa2be50ef24ce8a46aac26d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGYQCYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF88C4JToz%2BOzxXRqbP8I0Z50hxZo7TvmPMt7vOWBedYAiAaHbWd7CbDEe3tM3g51PVM3rZgP%2FKXtw3ux4HdAhFUDCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTxx2aPu0C4RLIc%2BKtwDZA5FrpOKS9oqYUfF%2BvOY5y1VDnZvm%2FGmNBYvMmIhXvKM3y%2BgcBTreQM%2FmJnEnAoYtZshRU1orHipifvaNdymKPE%2BaByqEYhsBH%2FD%2FOldbKdcIesHL5aDrFpE3s%2FUb7elCtZf%2FBd1rm2A%2BX%2B3a5oJK2LyID%2FVd5r8n5LdoWsMXzcCPnDJJ9m93sqTMJdhyJgjpmCk0AY1rzTBiPxx%2FcDwK9UbxyMUiezd0EaA6TQtrZNc2DhgQz9OpIDKpYGkfAjV09TdoOdBDg54i32I5zA8FYjZxUvUEXJW8yO1NNcYGGUCPs2%2BcuMXRTd6KF%2F3E9MDTesZMg0Qga4noqF%2FISMGnA69GJnPdEUsj2orcEjY0QONvgR1%2F6vrwawdWRAilbL3W5eAdJ3ed4eVaUamBg8wBJLc3jynnq2VuWCMO3jcBXy5WRsOhW3gt%2B8aDUG8aYOHCD3Wd%2BT%2F6kG7Q%2FbXX6WWoejSICk5hWX8fGuGTiiih1EnLYeOGaUnknfET1a%2F%2BFSXyuOsLzRrPcvqgthqR30xrzJoLEJc5AIxd7lxMqP1WfdPNWusis36zFEQUALgQTY6kpCWrj%2Blfkq1jSVzem7vVayJ9h4g4C0RhYc92g7CZkCkffoV10ESTTq4RF8wq5%2FUyQY6pgH2H3LcL8cTgSElHMyWsQjXdcoG%2BsewR11c6%2FII4%2BD73L1R0iv0BiTDl5N2vnQkS%2BrpE2DrO9%2BjDH8PrU1RuF%2BAbMglzHs1afT6guHofN5MUOkHeosGhGrbt%2FxGLXqLkKlIzXc50IPp3PaXlqoRDuSw8nlyBKIkrR84m37Juu%2B3%2Bp34XApRQlpZn%2Bvh13we2ZE4yGEb1gyTWedbpe03rtdwj%2FYmEVpQ&X-Amz-Signature=0121cd4b7df0b330acc0b747a678eb0b5fab2b1ac77c0e6a5dce36e203b41a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

