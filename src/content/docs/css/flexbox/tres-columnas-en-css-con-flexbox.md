---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUEOSIV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEZYlhdKU99k4EkKw4%2BFt5M%2FnrFsy17%2BK1mFVrkp7Pz6AiEA4yA8pAUIw2lBi90%2FTi3UK7VSNY4oISUeKBuMAQlGAbIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHR462Ba6jrVlyNoGCrcA9IzI%2B7C2f4zA%2FVeG1bwWOS6y0FHjJSr7QcaxOxLUa7EUY2tbHRLI53ypS3yLm1d04O1uoFXhWUImtc2Bs57DhPa9Z07DQh2lBwWBAZOMJrPneagPgkQIrKOY8D0LzIn50NEMPYgefFbHHUB%2BsJoP6XOPyESx1RKpu2UyFwJFwA5mqYKCrIC8Gf61YhQhvu3dVUiPY5xj4RUkcmGZ%2FM7DhtpVLOsO2PLUQZihc%2BmogStyc4qFOdLvx063aTaWPHatXbp7zeix2FZr9GUmYLBpgT3%2Fw6VXiG9uyMbizqJcuUeCJliLrjkHiYEOIxpDf2K%2B6TI0qgzj1pVBWxMG13ZXeeAoiC%2FsBErILRUov7qT%2FAcHz5qZL8GvoYB5HabcBuU3kOix5OeQK1wMfZvM3Q9vO48vAgGQgAAALRlP3FZzqyyyYSODIVri7Apiro4pFAtyPLtw5vzKhyEiltpXBcD4BIkKGemCYZNo%2BRipPH8pDmePLncJDDoqMjey5i7SUuub0vmGKNgJ28w%2FSaSMjJVSDMu0UIXNQrua1ShVP1ca9z9oa1QcNnlBbd9S%2Fxly0grWFwwHlhefRXfw3rZ2JSs7rXAyB8xRejqeGNp0XgeNjPtODJAOJY%2F2MmgotP6MIK0w8kGOqUBNstOD6XQGW%2Fhsa9skCHBTcTfaR%2FoTh4syPwesWzuSk%2BhgWB3AYo353fsDqzakgTO5TXJqYz1EbwtlNFq7j41mOdGdXvgqz%2BYrRH2VU2BywvjXuTBGw3RPv8l78Bmt%2BKmp06zXiiKGe29mHOoWLLBe99RqyWh8pKJtASYrMKq0XyAlXnCPnCz3lChz5tXyYRSRedzPbISaOr%2BaP6I4DWLdYAxO6ki&X-Amz-Signature=6df7e911a7f9fe53dbc5c6f87c2ccc42ab4ac9cdecbc361d4d6d96dcff7a4640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUEOSIV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEZYlhdKU99k4EkKw4%2BFt5M%2FnrFsy17%2BK1mFVrkp7Pz6AiEA4yA8pAUIw2lBi90%2FTi3UK7VSNY4oISUeKBuMAQlGAbIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHR462Ba6jrVlyNoGCrcA9IzI%2B7C2f4zA%2FVeG1bwWOS6y0FHjJSr7QcaxOxLUa7EUY2tbHRLI53ypS3yLm1d04O1uoFXhWUImtc2Bs57DhPa9Z07DQh2lBwWBAZOMJrPneagPgkQIrKOY8D0LzIn50NEMPYgefFbHHUB%2BsJoP6XOPyESx1RKpu2UyFwJFwA5mqYKCrIC8Gf61YhQhvu3dVUiPY5xj4RUkcmGZ%2FM7DhtpVLOsO2PLUQZihc%2BmogStyc4qFOdLvx063aTaWPHatXbp7zeix2FZr9GUmYLBpgT3%2Fw6VXiG9uyMbizqJcuUeCJliLrjkHiYEOIxpDf2K%2B6TI0qgzj1pVBWxMG13ZXeeAoiC%2FsBErILRUov7qT%2FAcHz5qZL8GvoYB5HabcBuU3kOix5OeQK1wMfZvM3Q9vO48vAgGQgAAALRlP3FZzqyyyYSODIVri7Apiro4pFAtyPLtw5vzKhyEiltpXBcD4BIkKGemCYZNo%2BRipPH8pDmePLncJDDoqMjey5i7SUuub0vmGKNgJ28w%2FSaSMjJVSDMu0UIXNQrua1ShVP1ca9z9oa1QcNnlBbd9S%2Fxly0grWFwwHlhefRXfw3rZ2JSs7rXAyB8xRejqeGNp0XgeNjPtODJAOJY%2F2MmgotP6MIK0w8kGOqUBNstOD6XQGW%2Fhsa9skCHBTcTfaR%2FoTh4syPwesWzuSk%2BhgWB3AYo353fsDqzakgTO5TXJqYz1EbwtlNFq7j41mOdGdXvgqz%2BYrRH2VU2BywvjXuTBGw3RPv8l78Bmt%2BKmp06zXiiKGe29mHOoWLLBe99RqyWh8pKJtASYrMKq0XyAlXnCPnCz3lChz5tXyYRSRedzPbISaOr%2BaP6I4DWLdYAxO6ki&X-Amz-Signature=90508d5a169023e5840d6726fadb5f6b28c79b4702a3009b7e27e48dee71fc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

