---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW24K5R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2oPBppSo5uBbr5iv%2FK9pTZO3tkz2lOF0hLr0JN6PanQIgWCGSDIzbkWGb4BN1OquNV%2BCh8K2Ggq20xbIcTZpSY3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8%2BzfTjN%2FxwyTqYircA95hbbzXKJw4uudEo%2F2G8gSJjekluhv2pybm1mhvr9kAcCMe%2Bo894LcCrOI%2Fg00rwmSrG3uEx%2FmxVrq1BIC3Qzbl%2BzynkqvO7we6UUGuVjLSWazTB6JGXa%2BkF4VqQ4YgrMvwIHkeaGTragdKiOcAprxs5VnNc6uTp7zmB9W6MJoVPojQC5zo8q2MJDBlElWHc5LafHSLP6DsY9PReUItV0W8kcGUQ%2FgzVhpXbsUmCddhKRJbwijOn9aO0%2Fcf6pAc38f8LYzWXVbiMZ0koZ%2FkCtOxbwrgqfaG%2Fbn3o%2FHtRj9EhKcCPOJWqdz%2BZytFPJiGAAAdER7cC6NzHEJx41xwlvCyKbd%2BV3pfG68LLktdb%2BBvE9b86k9Lu8r8kUNwIZ%2FwGddnkMzIhBKbzRia7pkJGMKmy0RH5EG1UOr1NgP8rX6bEYzG7OWNLKE6mlUmwDrkLMjX%2Fx6vjxLsDah5V%2FuqX5qLl6co70l9e0gn7cx57GJohx9Z624S%2FnpIQVYt62GdPrRtjNKas3jnvZaAMNTxi2PAKVlkCrtk60Rj%2Bu%2Fj8yAcY6KElQkRlbBeYJW9%2BJlW9M9lST71ensUT9ZdZLQGijEGs%2B3b7WladGcrzRFsfhM%2FQoWR5jrEo25SiIe3MOWE2MkGOqUBXqJ9Qmsb4Wu%2BbgzyqqfrdpCKNFQe4LZklCXn7JvKbV546FXGPu0olRv0DpKTKVesPuSO7MW1%2Ff%2BIAqqVDYNzH66hGQ%2F2xMuuhiP9ExQdxcRX4SsmhTL41I%2BC5XeWG0fVLKZdSV%2FKd%2FS7%2Bq1qFl%2FIGPiKqJm%2BiNpiVf0eRkBVfmZqrO9cW41aZn8nrVY4HaDcP8lCAuBSctk4nimO3pUdzRibbCDe&X-Amz-Signature=01c45e16ca70d23b7978ac581252cca999ebfcbabd248a4f81568f9a9c8ca717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW24K5R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2oPBppSo5uBbr5iv%2FK9pTZO3tkz2lOF0hLr0JN6PanQIgWCGSDIzbkWGb4BN1OquNV%2BCh8K2Ggq20xbIcTZpSY3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8%2BzfTjN%2FxwyTqYircA95hbbzXKJw4uudEo%2F2G8gSJjekluhv2pybm1mhvr9kAcCMe%2Bo894LcCrOI%2Fg00rwmSrG3uEx%2FmxVrq1BIC3Qzbl%2BzynkqvO7we6UUGuVjLSWazTB6JGXa%2BkF4VqQ4YgrMvwIHkeaGTragdKiOcAprxs5VnNc6uTp7zmB9W6MJoVPojQC5zo8q2MJDBlElWHc5LafHSLP6DsY9PReUItV0W8kcGUQ%2FgzVhpXbsUmCddhKRJbwijOn9aO0%2Fcf6pAc38f8LYzWXVbiMZ0koZ%2FkCtOxbwrgqfaG%2Fbn3o%2FHtRj9EhKcCPOJWqdz%2BZytFPJiGAAAdER7cC6NzHEJx41xwlvCyKbd%2BV3pfG68LLktdb%2BBvE9b86k9Lu8r8kUNwIZ%2FwGddnkMzIhBKbzRia7pkJGMKmy0RH5EG1UOr1NgP8rX6bEYzG7OWNLKE6mlUmwDrkLMjX%2Fx6vjxLsDah5V%2FuqX5qLl6co70l9e0gn7cx57GJohx9Z624S%2FnpIQVYt62GdPrRtjNKas3jnvZaAMNTxi2PAKVlkCrtk60Rj%2Bu%2Fj8yAcY6KElQkRlbBeYJW9%2BJlW9M9lST71ensUT9ZdZLQGijEGs%2B3b7WladGcrzRFsfhM%2FQoWR5jrEo25SiIe3MOWE2MkGOqUBXqJ9Qmsb4Wu%2BbgzyqqfrdpCKNFQe4LZklCXn7JvKbV546FXGPu0olRv0DpKTKVesPuSO7MW1%2Ff%2BIAqqVDYNzH66hGQ%2F2xMuuhiP9ExQdxcRX4SsmhTL41I%2BC5XeWG0fVLKZdSV%2FKd%2FS7%2Bq1qFl%2FIGPiKqJm%2BiNpiVf0eRkBVfmZqrO9cW41aZn8nrVY4HaDcP8lCAuBSctk4nimO3pUdzRibbCDe&X-Amz-Signature=a729db109e45dd4a67955312a183353edce99534de6cd58aff0b1bc0cad1887b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

