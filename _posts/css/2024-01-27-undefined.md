---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLK2BUNT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAwFmJ%2Btfg6Fwst0HQq1%2FqUZ%2F2xZ2g9K5fFJVsnR1mSfAiAb5meKD9N%2FNvMQdPva1PTm%2FZWiM%2FcpOmRSxzyQt0aM4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMrmcJPKD0gcO2upYwKtwDpU6vs7ASoc1BGTLqHXn9oxXDcYLh%2BI7UqJDAOrW0Vm9ZaIsZ8w5mDzTXRcxfooFSYsPVsQmlNadmTn9nyVtD38MCZLmv171Vq1OuhakhnEyadrJJZPMN5K4KrMjR6gOvcWuMPL%2FK8LldiMjF53pvOvxt93XU%2BSPKci7nYO9ph9hKIVs37Sy%2B00rGTWjnjO%2B2xTLAbZ7pV3MpVigkKxa%2F1Lp9Db4LLg4OoHWo8gz9ySABSPKi%2BObFoRxlfX2sB9ckiEiQNqyVEnuLS%2FmbykBDOzScm1%2Ff8ziidTHf8fVcJ6TcQb0xbuqLq8FWATJJilI%2Bz4yrnc52JASVSqHfJCvrdVr%2FjW0GhC%2F01FCDijQr9lwTYGpLtZRM6i6R%2BzRRErELz3F7WmJKajWJ9PGYxe2Ddo%2BnIrQiz9y%2FZL6%2BhdQKR1CiqGs4lfKvayXjJcqaX6r0JP%2Fyufuhh4GZ6gjdSm2xFe8raTYb24Rg3sunCdJdo7dIrHu94bVVVKr1ePw5tHShFoClF1mDzI8wMZAEyT3TYWUtUoYGp5Wtc5YrB9ouQv87w%2FmlfXHL0cfoY0st3yYWMxxqC8q5%2Fyu9j8W0wUnRZ%2BOpO26ATEvZSHfjBItNq%2F0qTCgII2gFkmWTcJ4wqofByQY6pgF9LObmGYZz5p9pw0YjD1sNxGHg1ufCD%2BYylBW2eeb%2BoCER8we2C1gGkOYpj9HjMwE6td9MdEtbitNPYeg4raz5CwIHjoyytOAri%2B%2BbxPVyKq7MtmxYLE%2Frr6%2FHVkL%2BakkDAcdejl7I2dRBCPrekI6gXOCv6Gftdgo%2B2a2uVgh%2FioPq%2FYhQfn2ehaWJAgez%2B6a20owJ3UU%2BUY7cxcLzWiVwDWy9CY63&X-Amz-Signature=3a9bfbb23989196f7bb41ef4ef8f675f5acb020f4f5437fc001b12816e064875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLK2BUNT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAwFmJ%2Btfg6Fwst0HQq1%2FqUZ%2F2xZ2g9K5fFJVsnR1mSfAiAb5meKD9N%2FNvMQdPva1PTm%2FZWiM%2FcpOmRSxzyQt0aM4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMrmcJPKD0gcO2upYwKtwDpU6vs7ASoc1BGTLqHXn9oxXDcYLh%2BI7UqJDAOrW0Vm9ZaIsZ8w5mDzTXRcxfooFSYsPVsQmlNadmTn9nyVtD38MCZLmv171Vq1OuhakhnEyadrJJZPMN5K4KrMjR6gOvcWuMPL%2FK8LldiMjF53pvOvxt93XU%2BSPKci7nYO9ph9hKIVs37Sy%2B00rGTWjnjO%2B2xTLAbZ7pV3MpVigkKxa%2F1Lp9Db4LLg4OoHWo8gz9ySABSPKi%2BObFoRxlfX2sB9ckiEiQNqyVEnuLS%2FmbykBDOzScm1%2Ff8ziidTHf8fVcJ6TcQb0xbuqLq8FWATJJilI%2Bz4yrnc52JASVSqHfJCvrdVr%2FjW0GhC%2F01FCDijQr9lwTYGpLtZRM6i6R%2BzRRErELz3F7WmJKajWJ9PGYxe2Ddo%2BnIrQiz9y%2FZL6%2BhdQKR1CiqGs4lfKvayXjJcqaX6r0JP%2Fyufuhh4GZ6gjdSm2xFe8raTYb24Rg3sunCdJdo7dIrHu94bVVVKr1ePw5tHShFoClF1mDzI8wMZAEyT3TYWUtUoYGp5Wtc5YrB9ouQv87w%2FmlfXHL0cfoY0st3yYWMxxqC8q5%2Fyu9j8W0wUnRZ%2BOpO26ATEvZSHfjBItNq%2F0qTCgII2gFkmWTcJ4wqofByQY6pgF9LObmGYZz5p9pw0YjD1sNxGHg1ufCD%2BYylBW2eeb%2BoCER8we2C1gGkOYpj9HjMwE6td9MdEtbitNPYeg4raz5CwIHjoyytOAri%2B%2BbxPVyKq7MtmxYLE%2Frr6%2FHVkL%2BakkDAcdejl7I2dRBCPrekI6gXOCv6Gftdgo%2B2a2uVgh%2FioPq%2FYhQfn2ehaWJAgez%2B6a20owJ3UU%2BUY7cxcLzWiVwDWy9CY63&X-Amz-Signature=2e9dcefefdce1490ff1c214c890113a0f170602ebd180f604b72fe6aedd09bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

