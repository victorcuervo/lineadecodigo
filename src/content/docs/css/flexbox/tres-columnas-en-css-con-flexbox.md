---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5GNXRG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK7gEa20ClVzc6K%2B%2Bdq%2BrfSgHbw19hjAYzfloFG5RQfAiEAojbydv7z8fjGnufdsFVimpGVucEX9vVjf2cPU1K81ugq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOqebmk%2BoItXGdtNkCrcA4NzbqTf%2BKcYP0lrQ38AS%2BFAouHOAUGN6wd%2BTVCdCKZ0gSgAHZm50TM5NEhncD9KrGpGJVneanBAahpoe6LBAP7cdzv1S74L3gRdr8imOhtCfZX01SOD9jYKRzvLRp93XcbNauvvQi%2B2R6tVQ9mpPfGDRsdQUJDDoWi3g%2FzUTZcwiR5l8Hsmysvs%2BvhL20ruxchKHyxNtlTykXB5fSyqaeoQEFxl2braOLp7opzooS7uwqX3%2F4Jf8zOmZutBreSrDnOhiTKWOqwrTaOpzdSsHN6AHo9QClK3Ka5KxSw%2BRG16eGnXSpcMBqMPG%2F0tMqw5FYhKtWtmMS03AQSb9fiRbDrz4ogTSX0A1u%2BBGeIlXIdCN8YQg8dmXzcFZqqppPtyEg9nTvRkAAcu5KQYNS24b6gpDi9UGRg%2FxQpneFTqgZu4f366ysz5e1H%2B%2F4s%2BodkNilTGn%2BFkxf2aAEpeIHFYz7IdLqyzd1hwiymhi0FjYqjzvIAAIShqA7%2BZuAGpi9LlHfNJxlPKUL2hKjKi0lB4J%2BS%2B5YRQGScpOQEycJLka%2Fx%2F%2BoYgbvRAZuJiQEWKmJ%2Bicgr%2FHFdlQQyp%2BaL1B2U2bQzgJFaUoX8VKkUW8JvD2VU9Mivhp%2FmiyAciFi9sMNWMyMkGOqUBvsjq7C%2BTilqCM9ecN7FBrhD%2BShAXFLvxkjmtrzqtCKJjTIEOQDI%2FB8e0hauwqzbJxqvGB6f9of%2FoJoOU0kivMhtEsrPBVCsT5asf6GNNnglQKBZhM4HvcBOQUyepC0%2BKMQbQmARo31sZPa6S9UMBQ7%2F551VUxYYCf5x58iepzMwmKp2TExKZG%2BD3UXSJc3vfy%2F9udL%2B37bSTH5gGzRhrdA2GQYZK&X-Amz-Signature=1d7daa40c65c41430d31f9e305a43a0f968f6814c9e58eb563d0f506a7d45086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5GNXRG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK7gEa20ClVzc6K%2B%2Bdq%2BrfSgHbw19hjAYzfloFG5RQfAiEAojbydv7z8fjGnufdsFVimpGVucEX9vVjf2cPU1K81ugq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOqebmk%2BoItXGdtNkCrcA4NzbqTf%2BKcYP0lrQ38AS%2BFAouHOAUGN6wd%2BTVCdCKZ0gSgAHZm50TM5NEhncD9KrGpGJVneanBAahpoe6LBAP7cdzv1S74L3gRdr8imOhtCfZX01SOD9jYKRzvLRp93XcbNauvvQi%2B2R6tVQ9mpPfGDRsdQUJDDoWi3g%2FzUTZcwiR5l8Hsmysvs%2BvhL20ruxchKHyxNtlTykXB5fSyqaeoQEFxl2braOLp7opzooS7uwqX3%2F4Jf8zOmZutBreSrDnOhiTKWOqwrTaOpzdSsHN6AHo9QClK3Ka5KxSw%2BRG16eGnXSpcMBqMPG%2F0tMqw5FYhKtWtmMS03AQSb9fiRbDrz4ogTSX0A1u%2BBGeIlXIdCN8YQg8dmXzcFZqqppPtyEg9nTvRkAAcu5KQYNS24b6gpDi9UGRg%2FxQpneFTqgZu4f366ysz5e1H%2B%2F4s%2BodkNilTGn%2BFkxf2aAEpeIHFYz7IdLqyzd1hwiymhi0FjYqjzvIAAIShqA7%2BZuAGpi9LlHfNJxlPKUL2hKjKi0lB4J%2BS%2B5YRQGScpOQEycJLka%2Fx%2F%2BoYgbvRAZuJiQEWKmJ%2Bicgr%2FHFdlQQyp%2BaL1B2U2bQzgJFaUoX8VKkUW8JvD2VU9Mivhp%2FmiyAciFi9sMNWMyMkGOqUBvsjq7C%2BTilqCM9ecN7FBrhD%2BShAXFLvxkjmtrzqtCKJjTIEOQDI%2FB8e0hauwqzbJxqvGB6f9of%2FoJoOU0kivMhtEsrPBVCsT5asf6GNNnglQKBZhM4HvcBOQUyepC0%2BKMQbQmARo31sZPa6S9UMBQ7%2F551VUxYYCf5x58iepzMwmKp2TExKZG%2BD3UXSJc3vfy%2F9udL%2B37bSTH5gGzRhrdA2GQYZK&X-Amz-Signature=7933cc9732f54792c44eaef4999f040192653c6afbbb2d445fb7a8cfb96b2baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

