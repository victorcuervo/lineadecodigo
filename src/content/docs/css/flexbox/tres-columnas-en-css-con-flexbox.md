---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7GFY3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCw2%2BzK46T49qwpd358i09d6ngfV3uYMB6lGJOpGVRLTQIhAMbXTPVxJVaT9sj%2F1Y%2BIZBgrPf4322R31V%2B9zJ3iVMlpKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTLwTwaXtUYOwd6Hoq3APyhBqJ%2FNiIUn%2B3Ym1KpTw3ztZajmpwvn4GxsOFA8V6G1u9lZqUDuthvOj6S%2FdhJgLjowNiCQqhW8KoBgTe%2FX3wRL2S0NYm8gJ8yGnJHNhuZX8TwSiI88XTGsDZLPQZwVSuqUTJ8TbNXCwhFWuXWoX33xEmOv69NEsKXCf5ptHNclfGDCjaEKMro5xpj798KpSIAICo%2B02YiOvqKOVI%2BbgTXl%2BFzZiJAKFx3O6tIyCkWrfq7%2FJXzlcIt0QmiBU83T8OiZorPtQlx63PNmuPpii4%2FAwHRMwhf0974gjE12AnB6ADxqNDfRcr6GWU48IB0uBkPITata0Ge48qwNLRq5B2W9%2FZwi%2FNOZEhr5cSmISR5VmCYCX4JH7fbGNWRiFmGYYSLR3RRbc1ouLO9Ubu5%2FYYVFfjVAs1EUDB2LxKQMNrZFCwJyHWjHHUwXOpbjIabipcuDLV3ZING7FlFZ0BlfvsWT1VXci5hVwxBWbJhI2UTUEv%2FSmoUgA5fOOeYdCLq0IBQsOwhYzYfCqKrXAB7qU3%2F4uWl5dGz4vKf9iFlPkJNK7ESccr0BMd5uYPZutlXrB78H8N3qoMtkIEd1dx63PdCJlnV90rN9l%2BA5pSMYFjA7zKPUfsbEa6Skyh6TDz6MTJBjqkAajSXRROxFrxROWfszI6BMgKNkMo9lCccTYyhn8qmoFESs6UF%2BFOKoEg%2Bomu66CAOkKPgwwVSrrB4ER0TbmPMCeYDjwTZpJvFj7CF7xBhfjdRmZN2rpVHva6tDCK1T6bjZACgVOfg2Kfk%2BnHNpbz1UmfBwu%2BZz8FYELdAxJWgFzWYlpi%2B0lDwGBfFRDh%2FKvt5S9gCXZRr7UT3RBRV8sAhSvke%2BRz&X-Amz-Signature=96755a7a178103c6af99d65db1d2477988f0d4b5d7f06a4d6cb89f500fa854b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7GFY3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCw2%2BzK46T49qwpd358i09d6ngfV3uYMB6lGJOpGVRLTQIhAMbXTPVxJVaT9sj%2F1Y%2BIZBgrPf4322R31V%2B9zJ3iVMlpKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTLwTwaXtUYOwd6Hoq3APyhBqJ%2FNiIUn%2B3Ym1KpTw3ztZajmpwvn4GxsOFA8V6G1u9lZqUDuthvOj6S%2FdhJgLjowNiCQqhW8KoBgTe%2FX3wRL2S0NYm8gJ8yGnJHNhuZX8TwSiI88XTGsDZLPQZwVSuqUTJ8TbNXCwhFWuXWoX33xEmOv69NEsKXCf5ptHNclfGDCjaEKMro5xpj798KpSIAICo%2B02YiOvqKOVI%2BbgTXl%2BFzZiJAKFx3O6tIyCkWrfq7%2FJXzlcIt0QmiBU83T8OiZorPtQlx63PNmuPpii4%2FAwHRMwhf0974gjE12AnB6ADxqNDfRcr6GWU48IB0uBkPITata0Ge48qwNLRq5B2W9%2FZwi%2FNOZEhr5cSmISR5VmCYCX4JH7fbGNWRiFmGYYSLR3RRbc1ouLO9Ubu5%2FYYVFfjVAs1EUDB2LxKQMNrZFCwJyHWjHHUwXOpbjIabipcuDLV3ZING7FlFZ0BlfvsWT1VXci5hVwxBWbJhI2UTUEv%2FSmoUgA5fOOeYdCLq0IBQsOwhYzYfCqKrXAB7qU3%2F4uWl5dGz4vKf9iFlPkJNK7ESccr0BMd5uYPZutlXrB78H8N3qoMtkIEd1dx63PdCJlnV90rN9l%2BA5pSMYFjA7zKPUfsbEa6Skyh6TDz6MTJBjqkAajSXRROxFrxROWfszI6BMgKNkMo9lCccTYyhn8qmoFESs6UF%2BFOKoEg%2Bomu66CAOkKPgwwVSrrB4ER0TbmPMCeYDjwTZpJvFj7CF7xBhfjdRmZN2rpVHva6tDCK1T6bjZACgVOfg2Kfk%2BnHNpbz1UmfBwu%2BZz8FYELdAxJWgFzWYlpi%2B0lDwGBfFRDh%2FKvt5S9gCXZRr7UT3RBRV8sAhSvke%2BRz&X-Amz-Signature=608acdec9900b8c4ce8fbcc9d7963729506768c97cad229c68a43739ae99cf89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

