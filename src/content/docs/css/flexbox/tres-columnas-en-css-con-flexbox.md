---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GXPKSO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV15zFHwAn4xTtU0Tk2H05OhAcg8uRhO3nHzoY%2BlegEwIhANxr2s9%2B9kSJsoow9uNnQXFN1%2B0Mp3iyVxRGON2hhWrAKv8DCFsQABoMNjM3NDIzMTgzODA1IgzVu%2FkHvXjE%2FZp06mYq3APaUwcXveABPQ7T5u8GLVm%2FO56BkKBXMo%2B4AhGp%2Fwt%2FaUP%2BCKT7hecdidaV%2B0DgodpPmgzvXw9dhpMnc%2F1QVIXwPIMx2GKncpIgtNgQuSDjf3KdMzouSVFPYHFSCnOH3rzA5t6V3iVXm%2F5WTC%2BoHJ8WpRdIoitEGHszLTsggiX48Zh8z0B%2F0%2BbEZMyjHmu9A%2Bd7n4E9RXBDgs1ki9N8jXnaNZlnLkD5q5d0CYccn%2FAi1RV0gpZn3cAc2X4gTMgY3K%2FeRayCmQyg%2FylAygPWOY%2FBEMiHgdBeHumTOG9DpqYiOdebagCX0hOQN1nPexLoRrobU6Fa4EnAwq8s7OaxQ5ZbUPlx2UFKhCJmDONt0xC4J2tRUxxMs1iU0q9KGmabYuUhaAiznakca28%2BwNuxAOgbx0CVSyG8wZWNpnziF%2FVqGz4f%2B2a1HZnLEdOe2Ozpaw4SDzyw1%2BsOUX3q6%2BhrPonEkh4Z4SWO400urNe9bCGHyG7ffUyZl48Xr3pp6qz9GLREUbP%2FQbh6AO8mQeS2d861iEFEBfMuiJtMnCd4T9rPnnt02LmldDUPaG2MiqXzVfeyJF8fz1ggmAplGPwQTiRwiCOHMC8VUhdO%2BmMU58Embeboj8jWoKUvKvsOIjCtysrJBjqkAYapJ%2BytjNwp27vOSnhVmVUyu868PZFLgOQbq0WeswQjMTa2rIyXBJKnpZqXPZxIa2zZAfqUagT18qmzqvXFJMXi1beT2cJw%2BxMZD15b0BNSkcel7X6FGqPArmWvirfbM0JNDJXjlKj5NIc6I3BN%2ByFRtHETpMNIGfe61h9tc5gVMXbW2buGvvKdsbWtVdUhNAI8LL8Tf4l7La97CcGnSeWbAX8p&X-Amz-Signature=4927bd547052960784113f42b97d36110262f305c15784ba8bc0a330831a7b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GXPKSO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV15zFHwAn4xTtU0Tk2H05OhAcg8uRhO3nHzoY%2BlegEwIhANxr2s9%2B9kSJsoow9uNnQXFN1%2B0Mp3iyVxRGON2hhWrAKv8DCFsQABoMNjM3NDIzMTgzODA1IgzVu%2FkHvXjE%2FZp06mYq3APaUwcXveABPQ7T5u8GLVm%2FO56BkKBXMo%2B4AhGp%2Fwt%2FaUP%2BCKT7hecdidaV%2B0DgodpPmgzvXw9dhpMnc%2F1QVIXwPIMx2GKncpIgtNgQuSDjf3KdMzouSVFPYHFSCnOH3rzA5t6V3iVXm%2F5WTC%2BoHJ8WpRdIoitEGHszLTsggiX48Zh8z0B%2F0%2BbEZMyjHmu9A%2Bd7n4E9RXBDgs1ki9N8jXnaNZlnLkD5q5d0CYccn%2FAi1RV0gpZn3cAc2X4gTMgY3K%2FeRayCmQyg%2FylAygPWOY%2FBEMiHgdBeHumTOG9DpqYiOdebagCX0hOQN1nPexLoRrobU6Fa4EnAwq8s7OaxQ5ZbUPlx2UFKhCJmDONt0xC4J2tRUxxMs1iU0q9KGmabYuUhaAiznakca28%2BwNuxAOgbx0CVSyG8wZWNpnziF%2FVqGz4f%2B2a1HZnLEdOe2Ozpaw4SDzyw1%2BsOUX3q6%2BhrPonEkh4Z4SWO400urNe9bCGHyG7ffUyZl48Xr3pp6qz9GLREUbP%2FQbh6AO8mQeS2d861iEFEBfMuiJtMnCd4T9rPnnt02LmldDUPaG2MiqXzVfeyJF8fz1ggmAplGPwQTiRwiCOHMC8VUhdO%2BmMU58Embeboj8jWoKUvKvsOIjCtysrJBjqkAYapJ%2BytjNwp27vOSnhVmVUyu868PZFLgOQbq0WeswQjMTa2rIyXBJKnpZqXPZxIa2zZAfqUagT18qmzqvXFJMXi1beT2cJw%2BxMZD15b0BNSkcel7X6FGqPArmWvirfbM0JNDJXjlKj5NIc6I3BN%2ByFRtHETpMNIGfe61h9tc5gVMXbW2buGvvKdsbWtVdUhNAI8LL8Tf4l7La97CcGnSeWbAX8p&X-Amz-Signature=5da9c08311d8cacfff4ef508ff1a9fd8cfe20ea44318512a17410b84203759d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

