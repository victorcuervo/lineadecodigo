---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YP3FTT6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmt10eyfn85tK3ha%2FklMwSy%2FH9FnDRjcamCRk9FKAO%2BAiAZKHcGyXKITgaMO2E%2FdjJyg7Az3LFjjlqe9tNgwljdvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMFt%2FEKLdx6CTo9s7sKtwDM2yWiUdexhLwYrlovqUcDbFz36WpmMEfCVcVZSuPvoBwwjJ0eM%2BFWtjmRNZxam%2BXdj0xZlCRd3wu5xK2AW3fbFgnPejvBNV4WgLi%2FPjgLJT3dkjhki%2BiP3Nev4TBYZquWb1iW5E4qZ0Y2bzE7jEddaHA27HRIaxgjJrZYz4bRhAWODULPTS9mZv53lxd66xHeFZ3sh9ziEwRsWAv%2FPGslffBEntfYHrj61RsDVuvbOahFW3aCpYF8PM5yairB%2FiXdgAOhp0z%2B9Qyzz3s3eLrU7a%2BU6JvYI7OPgjutsKjaUygqWKTBeSoMcL2L7He%2BsPdl2mD0IxDvlEv5%2BFXEsPhiMsZBqYvoW0Z9SyenUAIM0nltTreIiQ9Q2lUn6cCSaeu12ycKRBDeUJJRHciEKk3ZJjPyFx4J1zIuGRBVVrJyfANnTpyWaYwjWRfAnwb2Bqsdwm85vwWJxwxxnU9mg5FMwY25e9qnr79gWS4F21LX8E0svsd8RWDoOQtithgJpUiMyKcaeI6STiM7e3n%2FrY5d4L57vJVvhOBjENzCtK8AtfdnYRdYctzDBQSvb%2FYFWDegvOxtAhuTgxTB0dpHDStRT8m0Hmr%2Bdc9DzuIM2dncKzQc7O1Z7YIqbGeKh4wnabQyQY6pgGStMU%2BsdVAsgSiYiclXdAJva0LLGqlw951HmKncLAbrtxSvbOwsoSOUCG4pMiB7xPtpPN4713WkEyveAs34cLCtqpCJUl%2B0mwlKjWwYJK2G2RJ%2Bxv31dPp3tw6kJ4jRlt6%2BfZ8iEgXb%2BjA3E1rCZPzA4f0FGtYxwPnI0jA%2F9qThp7nM%2BLmxKhIIae3ekr%2BZyI9kTsDMUINg5YMgWo3od%2FhKR2REcUB&X-Amz-Signature=70a49e51d8350321124144ed738765920f7a03623803be72cc48d31ad3f1d2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YP3FTT6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmt10eyfn85tK3ha%2FklMwSy%2FH9FnDRjcamCRk9FKAO%2BAiAZKHcGyXKITgaMO2E%2FdjJyg7Az3LFjjlqe9tNgwljdvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMFt%2FEKLdx6CTo9s7sKtwDM2yWiUdexhLwYrlovqUcDbFz36WpmMEfCVcVZSuPvoBwwjJ0eM%2BFWtjmRNZxam%2BXdj0xZlCRd3wu5xK2AW3fbFgnPejvBNV4WgLi%2FPjgLJT3dkjhki%2BiP3Nev4TBYZquWb1iW5E4qZ0Y2bzE7jEddaHA27HRIaxgjJrZYz4bRhAWODULPTS9mZv53lxd66xHeFZ3sh9ziEwRsWAv%2FPGslffBEntfYHrj61RsDVuvbOahFW3aCpYF8PM5yairB%2FiXdgAOhp0z%2B9Qyzz3s3eLrU7a%2BU6JvYI7OPgjutsKjaUygqWKTBeSoMcL2L7He%2BsPdl2mD0IxDvlEv5%2BFXEsPhiMsZBqYvoW0Z9SyenUAIM0nltTreIiQ9Q2lUn6cCSaeu12ycKRBDeUJJRHciEKk3ZJjPyFx4J1zIuGRBVVrJyfANnTpyWaYwjWRfAnwb2Bqsdwm85vwWJxwxxnU9mg5FMwY25e9qnr79gWS4F21LX8E0svsd8RWDoOQtithgJpUiMyKcaeI6STiM7e3n%2FrY5d4L57vJVvhOBjENzCtK8AtfdnYRdYctzDBQSvb%2FYFWDegvOxtAhuTgxTB0dpHDStRT8m0Hmr%2Bdc9DzuIM2dncKzQc7O1Z7YIqbGeKh4wnabQyQY6pgGStMU%2BsdVAsgSiYiclXdAJva0LLGqlw951HmKncLAbrtxSvbOwsoSOUCG4pMiB7xPtpPN4713WkEyveAs34cLCtqpCJUl%2B0mwlKjWwYJK2G2RJ%2Bxv31dPp3tw6kJ4jRlt6%2BfZ8iEgXb%2BjA3E1rCZPzA4f0FGtYxwPnI0jA%2F9qThp7nM%2BLmxKhIIae3ekr%2BZyI9kTsDMUINg5YMgWo3od%2FhKR2REcUB&X-Amz-Signature=8c2ab6046a5bf94042c218bdcb211d386be436626e373dfd52743a0e756ac9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

