---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5Y7DZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHuG0A6uEpCNGhGTFEAEXlxiDaT0ctDGrBEk0%2BJNktIRAiEAndK2d%2Fm7BMm2t73mtafp7LPtOTLHVV6InLl5nAMzZ1sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHdCy1TzOqK1UCUuBircAwyB9R2kT70px%2FSh%2FqpzA7MwqNPetKSS9Y64IX3uEshv3ZQZU%2FJia44aBlfj94k5qDO%2F%2F6H6fWrwt1ZtHvkqABV048%2F7Cndov3ElZmB1IBpOQjbqJoMO5SBwz29knDpQ%2F1zITNmG8e82SrUiVTwalOIRtFquot7V57i%2B9rj4YtENML3eMHI%2FnrnQWFCzU1UdghpuLeBAtg4HM%2FyLjMSdP5fV4tG7il7jSrz%2FKVnZ6bCVmglslOzBebkHmtuWI5lJCaZkNjl3jenP88bmFS2eAd8uHRtkayR8Q%2BBj5jBS1eBD%2BAdur%2FgiKGtOIq7koGHcDsuHmhJ0rHKzgjn9D86GtSSLLvtxYfQQBPyjoA5IOjqLqQrtaRCpqbdb%2FV%2FgLiJh2HHCCfBRumO0rsrsdn0veW8bB57f4KrNvnLsdq65PI1wHDxSKwF%2FEm4z2gL8bfxPySMODstGKJC%2F7z9PUjledRBt0drLYU6a0jau7qbfS5MPT1TqK996esgZbJ%2FYqVOR8WIhEjh5ngSZHKpi7YUbp%2FDufM0htZd9rdTSvleapkFlbdIdqzJ83FHDDSuY6ZrHwycO3IGf51YqwclZ7GiJyafosg6KuiF%2Fj6CU8jfuoBAxskCcml4kfjOZzAo6MMrKxMkGOqUBtW58o7PrVHjzqZZirFVaxcJvre3Of99SI4VWbu9May%2BAc9uaBUSOD46w9h9teGtGc2w%2BOX63R76vt0eoE%2FO5sQkG%2BkQMUOhkvP2VVjU%2F7clplgMPrrh9iEwMhT%2Fsa%2BUVBRgxoJxEOYEEBYuuRX6q9EuPPAvnrkfeWfD7Zv2iuiNT%2Bh%2BB3QTHe98hhPHRUiA2mCe%2Fk2k1VRjDm3T00F5aZIph%2B9Tz&X-Amz-Signature=26f1203d113ebb6f4edf647d321275fc4e4e3bb4102f847d5487d3dea08c9a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5Y7DZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHuG0A6uEpCNGhGTFEAEXlxiDaT0ctDGrBEk0%2BJNktIRAiEAndK2d%2Fm7BMm2t73mtafp7LPtOTLHVV6InLl5nAMzZ1sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHdCy1TzOqK1UCUuBircAwyB9R2kT70px%2FSh%2FqpzA7MwqNPetKSS9Y64IX3uEshv3ZQZU%2FJia44aBlfj94k5qDO%2F%2F6H6fWrwt1ZtHvkqABV048%2F7Cndov3ElZmB1IBpOQjbqJoMO5SBwz29knDpQ%2F1zITNmG8e82SrUiVTwalOIRtFquot7V57i%2B9rj4YtENML3eMHI%2FnrnQWFCzU1UdghpuLeBAtg4HM%2FyLjMSdP5fV4tG7il7jSrz%2FKVnZ6bCVmglslOzBebkHmtuWI5lJCaZkNjl3jenP88bmFS2eAd8uHRtkayR8Q%2BBj5jBS1eBD%2BAdur%2FgiKGtOIq7koGHcDsuHmhJ0rHKzgjn9D86GtSSLLvtxYfQQBPyjoA5IOjqLqQrtaRCpqbdb%2FV%2FgLiJh2HHCCfBRumO0rsrsdn0veW8bB57f4KrNvnLsdq65PI1wHDxSKwF%2FEm4z2gL8bfxPySMODstGKJC%2F7z9PUjledRBt0drLYU6a0jau7qbfS5MPT1TqK996esgZbJ%2FYqVOR8WIhEjh5ngSZHKpi7YUbp%2FDufM0htZd9rdTSvleapkFlbdIdqzJ83FHDDSuY6ZrHwycO3IGf51YqwclZ7GiJyafosg6KuiF%2Fj6CU8jfuoBAxskCcml4kfjOZzAo6MMrKxMkGOqUBtW58o7PrVHjzqZZirFVaxcJvre3Of99SI4VWbu9May%2BAc9uaBUSOD46w9h9teGtGc2w%2BOX63R76vt0eoE%2FO5sQkG%2BkQMUOhkvP2VVjU%2F7clplgMPrrh9iEwMhT%2Fsa%2BUVBRgxoJxEOYEEBYuuRX6q9EuPPAvnrkfeWfD7Zv2iuiNT%2Bh%2BB3QTHe98hhPHRUiA2mCe%2Fk2k1VRjDm3T00F5aZIph%2B9Tz&X-Amz-Signature=aa802b0b200fb1adda88ef1963c245b71d92f589557a78539efe844e7d8f2eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

