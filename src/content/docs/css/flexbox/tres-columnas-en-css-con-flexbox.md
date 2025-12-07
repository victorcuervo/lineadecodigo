---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGAKUOA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBctLTZK0AMyZwvxZOh4P%2FHS9Jvpnr1NFu5sQRbK57h2AiEAwEuKJt3cP3dHe7JudwQ5bWnEhVsJ%2BbbzuHNoGY17MXUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsPCVc5txRLulYsaircA6wRde64sn%2BnlVQ8W6bXLSf2N6n%2FcCma6S3Ri4%2Fxgntq5TD9bE%2FTfSz9Ew9WK1e8l97aQtDnO%2BXHN09Se8E%2FKoVlJF%2BLpnSPCq25q76AZM2qbuB5G0rYaZu8JC8WLCcs6C0c%2BR0ByW1JO%2FTqbj7TvcvSGkO0JS64ym7jP%2BXZpY9gVt1N8oYfDyhcQJdwvOTRD503NRmcmsYGNfKXjOmgOWE8a9sMJ4jqwASDCdIxKcQDu8cmy1uMVPTw2JCBaKj%2BQ8ZXlvEHSLdORqI9oXF3UgjgvoMrt2Hdy0N2v%2BnwhcBWemGRnGFHz13BLwkyj4hcYp2INdk7M0jbEDtkiDVUnDc%2Ban17xY3EIlOwn%2B0ikA3mXdkP%2FXVBIVgBv12M8CB6UDJRB8jGcb4ZqZa7%2FyjYw7BRNoWfiDoLf7t70nzdOVoEk7HMm0FaJnbpk4wioJHi49YU9Zz%2F9XH39v9reUXKvqrTyWomKXMRMGIjrMSpac42LxzCkAldLmkdzrnQWNEpZaqjSsiqLYj2y4AKrHwFFRHA0A9YgkCFdhD5UF47ZY4J%2FBGn6OkLvWUekFWv1gTRjoB17rYn0RoJleuW1lBF%2FHxHvIT2nhP0b93nvL8GtCd0UfDwTeX5S6NephxtMLea1ckGOqUBMkaMxNCblEqRzNbLuNG2WOSvUOVNzt90nzx14eCJLJ8NoiAqIEuEQnKtZR%2B8I%2Bko%2B1Hzr3XNK1bIqjmQwkPrNjEDBuwb81RnO1Wd5bnknW72vnFkUKvRDvam34bOVFreRtRK8R9QCi0j921BwHA%2FUoK84AAvpozLB4OCnlWlstup9ZrlZwJHjVursmdJ6lem3E2CCzdzM2nI5cECPpjqwEuoG89I&X-Amz-Signature=5dc7683101a9a907184bd0591b54d6faa5ae82100d732206c7dced1e8d003547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGAKUOA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBctLTZK0AMyZwvxZOh4P%2FHS9Jvpnr1NFu5sQRbK57h2AiEAwEuKJt3cP3dHe7JudwQ5bWnEhVsJ%2BbbzuHNoGY17MXUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsPCVc5txRLulYsaircA6wRde64sn%2BnlVQ8W6bXLSf2N6n%2FcCma6S3Ri4%2Fxgntq5TD9bE%2FTfSz9Ew9WK1e8l97aQtDnO%2BXHN09Se8E%2FKoVlJF%2BLpnSPCq25q76AZM2qbuB5G0rYaZu8JC8WLCcs6C0c%2BR0ByW1JO%2FTqbj7TvcvSGkO0JS64ym7jP%2BXZpY9gVt1N8oYfDyhcQJdwvOTRD503NRmcmsYGNfKXjOmgOWE8a9sMJ4jqwASDCdIxKcQDu8cmy1uMVPTw2JCBaKj%2BQ8ZXlvEHSLdORqI9oXF3UgjgvoMrt2Hdy0N2v%2BnwhcBWemGRnGFHz13BLwkyj4hcYp2INdk7M0jbEDtkiDVUnDc%2Ban17xY3EIlOwn%2B0ikA3mXdkP%2FXVBIVgBv12M8CB6UDJRB8jGcb4ZqZa7%2FyjYw7BRNoWfiDoLf7t70nzdOVoEk7HMm0FaJnbpk4wioJHi49YU9Zz%2F9XH39v9reUXKvqrTyWomKXMRMGIjrMSpac42LxzCkAldLmkdzrnQWNEpZaqjSsiqLYj2y4AKrHwFFRHA0A9YgkCFdhD5UF47ZY4J%2FBGn6OkLvWUekFWv1gTRjoB17rYn0RoJleuW1lBF%2FHxHvIT2nhP0b93nvL8GtCd0UfDwTeX5S6NephxtMLea1ckGOqUBMkaMxNCblEqRzNbLuNG2WOSvUOVNzt90nzx14eCJLJ8NoiAqIEuEQnKtZR%2B8I%2Bko%2B1Hzr3XNK1bIqjmQwkPrNjEDBuwb81RnO1Wd5bnknW72vnFkUKvRDvam34bOVFreRtRK8R9QCi0j921BwHA%2FUoK84AAvpozLB4OCnlWlstup9ZrlZwJHjVursmdJ6lem3E2CCzdzM2nI5cECPpjqwEuoG89I&X-Amz-Signature=53883278c584aad6419ba61c15677c5321eb85a9da3d1e725563e85c93f55716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

