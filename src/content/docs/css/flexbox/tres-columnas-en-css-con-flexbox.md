---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUFGAB6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIb%2BdAXTFJfR8MVkcqUnw8OdOiYoXNIoR%2BOrvDL0C85AiAIeTWm5VvXlNhwWJm0%2BxBSBNxkB2dX%2FBcUEfn635pgDCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEv%2BnnA1myshno%2Fi0KtwDA%2FIU%2FsFu5Zv51GUjB8PuvN%2BT2eLRZB0DLw%2BmPthqlJ5K0Srdyokh5Q9mNsHt801mYwGpJDmCZt%2BHWkEmG%2BiX8ThPpT4bVna4cL0Yz8lzGfbbNWyhD6J1lgtqZteDBLYqjJqFL2RqzDq63dzh%2FXfCGKXdePm9f23N9ayNrRVxzL6Ndo7%2B%2BpzEqXNFFeNN8AFOdPyxwU86ROLm%2FMzmpJcGZ3Ep62EZUFICUiLVNkBVMu5K8Mbz9AeDaHsjZABXoaCTp2c43qB0n%2Bf1G%2FncQH%2BplOtz%2B8QHRcm%2FEWAaFGjyjqARmoT3pF8W4CJfCnElLljtOc1LYlLqNt%2B4%2F9q3LwtiHGbhtafiiRII6avPLC2%2FNQiyGBv4Z8eZllYm4vHu%2BwOejv8HCiUwUQ8ED10RceLcUZKDx%2Fv6zWNHafV7J5uLv8qDz104cmx3qHLlqpLQtXJ29PqYVoY%2FHqPgbIO6vEpgM%2FqWKIjsK9984CAj1WXssNxchSenAeCK4bLODi9fvrF3uzo9PxT1tEA0FnGSyf7Ttn9finDGRSfGUbkHyjxTroPMmk3L20gE2pnbhNx7TQCfS%2B2O7UZfNtrznMEeY%2ByrVRGhdPJYFY4ibkNfcPfkHgoTW0UdVL6wUJxYJGEwuKXfyQY6pgFfxRd3zXfg%2F169TVXgID6pNhEcOicMdm3IZJjrbEEuo7S%2FsoQoNkKHnF3L7vHwLfs7txpBOjEeEN7X8Crk8FaE%2BgV6pR3KmuKgrDRe%2Fuf8l%2BfJn2pnlls2tfddYXuqzl%2FPGkCBLiQh%2FJlywPB97a5moYLCVLddl64maW2zQy%2F9ump3ATG8UpSkROVdGFqfW9sGtlN0zfvG1Lns9GhvSij9d2J2jQHz&X-Amz-Signature=d97b9f8f0118d22da710f7064c50c248feb045e41006b271347535eb1103761c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUFGAB6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIb%2BdAXTFJfR8MVkcqUnw8OdOiYoXNIoR%2BOrvDL0C85AiAIeTWm5VvXlNhwWJm0%2BxBSBNxkB2dX%2FBcUEfn635pgDCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEv%2BnnA1myshno%2Fi0KtwDA%2FIU%2FsFu5Zv51GUjB8PuvN%2BT2eLRZB0DLw%2BmPthqlJ5K0Srdyokh5Q9mNsHt801mYwGpJDmCZt%2BHWkEmG%2BiX8ThPpT4bVna4cL0Yz8lzGfbbNWyhD6J1lgtqZteDBLYqjJqFL2RqzDq63dzh%2FXfCGKXdePm9f23N9ayNrRVxzL6Ndo7%2B%2BpzEqXNFFeNN8AFOdPyxwU86ROLm%2FMzmpJcGZ3Ep62EZUFICUiLVNkBVMu5K8Mbz9AeDaHsjZABXoaCTp2c43qB0n%2Bf1G%2FncQH%2BplOtz%2B8QHRcm%2FEWAaFGjyjqARmoT3pF8W4CJfCnElLljtOc1LYlLqNt%2B4%2F9q3LwtiHGbhtafiiRII6avPLC2%2FNQiyGBv4Z8eZllYm4vHu%2BwOejv8HCiUwUQ8ED10RceLcUZKDx%2Fv6zWNHafV7J5uLv8qDz104cmx3qHLlqpLQtXJ29PqYVoY%2FHqPgbIO6vEpgM%2FqWKIjsK9984CAj1WXssNxchSenAeCK4bLODi9fvrF3uzo9PxT1tEA0FnGSyf7Ttn9finDGRSfGUbkHyjxTroPMmk3L20gE2pnbhNx7TQCfS%2B2O7UZfNtrznMEeY%2ByrVRGhdPJYFY4ibkNfcPfkHgoTW0UdVL6wUJxYJGEwuKXfyQY6pgFfxRd3zXfg%2F169TVXgID6pNhEcOicMdm3IZJjrbEEuo7S%2FsoQoNkKHnF3L7vHwLfs7txpBOjEeEN7X8Crk8FaE%2BgV6pR3KmuKgrDRe%2Fuf8l%2BfJn2pnlls2tfddYXuqzl%2FPGkCBLiQh%2FJlywPB97a5moYLCVLddl64maW2zQy%2F9ump3ATG8UpSkROVdGFqfW9sGtlN0zfvG1Lns9GhvSij9d2J2jQHz&X-Amz-Signature=7bd9ced3b0187a2b5d0e06e019b0a71dda485624368136073cbb45be99cafa7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

