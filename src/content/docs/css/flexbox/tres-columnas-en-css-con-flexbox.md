---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ42H5TE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvP8K8qsmz8e0NXHoJkKUOkw99r281QsYU1YzJcmjdIAiEAyfE8WNRLgFL7%2BAZxSOX28kqw3hKjWOsiFlJXNEpl8uQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZosomKsj6vbTGZCrcA5vME6mWyvK2dCBJnsu0pFqz5cDEbMBSY%2BC3kIsKCKjeTtcGXo8uPwk%2Fvcl2Z5J0mi%2BLmCLeRqxDZQTKh5%2FtxIYr6xEflx0HNi7%2B7%2F6Ay4oaFaxt8a6RPG8KvgbXAbQrXLkxmm6T%2FagHlvTxP8MHAH4SDy5KrVx0eHFpRbI%2FHXWCvgdic8fu%2FRvyBxzSex5L%2BIKJ7T%2BabVRbbZhPD7RNSyJTGrLVxGZK31SMYFUeXp7OEcfAx8i0Ct778CK%2F9W8EwpTpWqRGTq0Y5EBeUTQbBOS44FpkhpQA1KtC2rkKPpu4YaYMQ4PxaCgn0uiE8Dmu%2BYtR1cTpR9VaqPYcjf%2B34gMc4AGMllvd1p96cEE6wH6VoupTSMxFE%2FndyK0HuprbTy9U%2Fg%2BTS1PKmYHIi7aEWAijZbuO42hL4ONofxWEhmCL%2B1WHyycrbOPKNI%2FEwVlJaiQdjMF0364eXZcvc%2FisYvtUSTolNPMBfEiU8Pqk6K2PenYDjqz4AnoB64cJpKdugnB%2B%2ByzR2RcA5yqvFw9RhDSto2rJDXwN1Pc1o9uN2Feb3EFOg5Qu9oITemmuV5iJwQvJ22oaoTamwLEDusWwpfiIITxHOsdd%2F2%2FuWHRaMSod0M68y3Cc87EhcawDMN%2Bk38kGOqUBFK3YgVKdiRto4fZY6vpsq7ZTClPQHw8lSPPCflE%2BVGSc56wu8%2B%2B4gsXuwJ7W%2Fg3oKVgl9IjFVA3qkRvyLst7dEziT6DyDWkzIxivqWm5RetVuyoXreLBJ6UyjamB4ImR7u5D5ZzE3hDLFpYWUSuojrk5xAopWiXnNKqhglCCMr5RQlQBFNHxqVdsYa1y6fcBqdy15etg%2F1XdeyBi3NuAzj0GKGXr&X-Amz-Signature=bc886b68b0b50f2b469b645f10958960a1a3c8ac6ef62bb4fd7d4f5f0af546ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ42H5TE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvP8K8qsmz8e0NXHoJkKUOkw99r281QsYU1YzJcmjdIAiEAyfE8WNRLgFL7%2BAZxSOX28kqw3hKjWOsiFlJXNEpl8uQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZosomKsj6vbTGZCrcA5vME6mWyvK2dCBJnsu0pFqz5cDEbMBSY%2BC3kIsKCKjeTtcGXo8uPwk%2Fvcl2Z5J0mi%2BLmCLeRqxDZQTKh5%2FtxIYr6xEflx0HNi7%2B7%2F6Ay4oaFaxt8a6RPG8KvgbXAbQrXLkxmm6T%2FagHlvTxP8MHAH4SDy5KrVx0eHFpRbI%2FHXWCvgdic8fu%2FRvyBxzSex5L%2BIKJ7T%2BabVRbbZhPD7RNSyJTGrLVxGZK31SMYFUeXp7OEcfAx8i0Ct778CK%2F9W8EwpTpWqRGTq0Y5EBeUTQbBOS44FpkhpQA1KtC2rkKPpu4YaYMQ4PxaCgn0uiE8Dmu%2BYtR1cTpR9VaqPYcjf%2B34gMc4AGMllvd1p96cEE6wH6VoupTSMxFE%2FndyK0HuprbTy9U%2Fg%2BTS1PKmYHIi7aEWAijZbuO42hL4ONofxWEhmCL%2B1WHyycrbOPKNI%2FEwVlJaiQdjMF0364eXZcvc%2FisYvtUSTolNPMBfEiU8Pqk6K2PenYDjqz4AnoB64cJpKdugnB%2B%2ByzR2RcA5yqvFw9RhDSto2rJDXwN1Pc1o9uN2Feb3EFOg5Qu9oITemmuV5iJwQvJ22oaoTamwLEDusWwpfiIITxHOsdd%2F2%2FuWHRaMSod0M68y3Cc87EhcawDMN%2Bk38kGOqUBFK3YgVKdiRto4fZY6vpsq7ZTClPQHw8lSPPCflE%2BVGSc56wu8%2B%2B4gsXuwJ7W%2Fg3oKVgl9IjFVA3qkRvyLst7dEziT6DyDWkzIxivqWm5RetVuyoXreLBJ6UyjamB4ImR7u5D5ZzE3hDLFpYWUSuojrk5xAopWiXnNKqhglCCMr5RQlQBFNHxqVdsYa1y6fcBqdy15etg%2F1XdeyBi3NuAzj0GKGXr&X-Amz-Signature=1f348f7335d4c80ea26559883be1a58ba44e32568cc91a7b65f2d791ee30813c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

