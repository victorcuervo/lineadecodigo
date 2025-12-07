---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHBC5DV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUt3LRTASvTERZH7e59ca2FcYUg%2F5tcplFGVADxhyRPgIgSZzGCXnxDCS2kMVVlV0lrnUp%2BIhan%2FpXiE6VpCCU26MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BgoYZJekoIVDz4HCrcA5T3juGhYMdUcm7zfq2ZY9X8LARF%2F1Vpy2jjnzWZZKmVsyScA8RfNJ0rAuO3UkcjAiAHwKCAR3LDBhOF3Sg%2BUJobnCawO%2FmR7mrkFzw03UcY6eFjmPwNgsdAG9EJSC6BdPYkFFUgk03%2FYR%2F5EEiANbTnppQ22JmSWQimt17LInWBFj1UVsOS%2FAxt14S7bV9lvoGRyXRTuUb4JQz9NOgVkLC44D6EoM3NkQDx8PsPNOYX2Gvh2PIMWV%2FBkvQ1K6SYd08EJ0vLFAp08ZAicGoahfwhAcmk78OMkc61684HI6SekBrRQh5P9WWuKmw8BERDQJQQL5XndTqrkJpxYkcCy3uwFqhBnqfOiLVUWUId05OaWWdj3X7711rPyQgE%2FPeYn3cHCyZgp2CLmxwSWqKyjEZvnivotUBC6UrhHtXO4CrQya61ycntc0%2B1iTuRujlRAlxKgDx8LpIsRGl6hUjrUKFLqDRAec5E3Xt21fMD8l6MBGk9zGQsFkcdNgCgkuZ1UEVMpBlAWpqAFlU5kEwUbJF3AreNvWpAirVle8eKVvUSYFibsQiyzHKlk7rZitTSFu25kKS9M9j%2FgOGIqZ07dRfv74O%2BNsRPvVSN%2FTrz6MLvYjc5ZE1P4pXa5QC%2BMM2a1ckGOqUBrCX5N9rVgpVJp12cGikG03%2Bouzd7sf1O5rPQJBhMVe3zBP8sPjNF8vN32Ibr3zAxcK5kO5YASe37HFyDLJzEKpBtfKcaEG9NXpEKkhbR21ufw7MuXDr4ZLF4sWXDn6vrIoma%2FfqqLUQE7L7ndDe53asRoZyQlBbVDH8653tLnnOOidNs0No7CylvaSN5Y4uMXRO5gXsImZUnHkS621iuShnKVl9V&X-Amz-Signature=6c80d181a0f9e2001c8b71a7f2cfb1505ef39ae75ea0fa48dfb32a08ee3aa556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHBC5DV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUt3LRTASvTERZH7e59ca2FcYUg%2F5tcplFGVADxhyRPgIgSZzGCXnxDCS2kMVVlV0lrnUp%2BIhan%2FpXiE6VpCCU26MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BgoYZJekoIVDz4HCrcA5T3juGhYMdUcm7zfq2ZY9X8LARF%2F1Vpy2jjnzWZZKmVsyScA8RfNJ0rAuO3UkcjAiAHwKCAR3LDBhOF3Sg%2BUJobnCawO%2FmR7mrkFzw03UcY6eFjmPwNgsdAG9EJSC6BdPYkFFUgk03%2FYR%2F5EEiANbTnppQ22JmSWQimt17LInWBFj1UVsOS%2FAxt14S7bV9lvoGRyXRTuUb4JQz9NOgVkLC44D6EoM3NkQDx8PsPNOYX2Gvh2PIMWV%2FBkvQ1K6SYd08EJ0vLFAp08ZAicGoahfwhAcmk78OMkc61684HI6SekBrRQh5P9WWuKmw8BERDQJQQL5XndTqrkJpxYkcCy3uwFqhBnqfOiLVUWUId05OaWWdj3X7711rPyQgE%2FPeYn3cHCyZgp2CLmxwSWqKyjEZvnivotUBC6UrhHtXO4CrQya61ycntc0%2B1iTuRujlRAlxKgDx8LpIsRGl6hUjrUKFLqDRAec5E3Xt21fMD8l6MBGk9zGQsFkcdNgCgkuZ1UEVMpBlAWpqAFlU5kEwUbJF3AreNvWpAirVle8eKVvUSYFibsQiyzHKlk7rZitTSFu25kKS9M9j%2FgOGIqZ07dRfv74O%2BNsRPvVSN%2FTrz6MLvYjc5ZE1P4pXa5QC%2BMM2a1ckGOqUBrCX5N9rVgpVJp12cGikG03%2Bouzd7sf1O5rPQJBhMVe3zBP8sPjNF8vN32Ibr3zAxcK5kO5YASe37HFyDLJzEKpBtfKcaEG9NXpEKkhbR21ufw7MuXDr4ZLF4sWXDn6vrIoma%2FfqqLUQE7L7ndDe53asRoZyQlBbVDH8653tLnnOOidNs0No7CylvaSN5Y4uMXRO5gXsImZUnHkS621iuShnKVl9V&X-Amz-Signature=0aa4abc7e5b2a07fc61ff5e8eced948e549a768818b7e2f32de3e062a5031565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

