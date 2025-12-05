---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YFGINK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCORGZdMkp7orEbuFBf%2B8Tg6jBXc1MCrqlYhWj4geNDAiBHsqfFVKrsOLzx4kOmUp7Z9poBCtl7Hb6HzRxr1SCrYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMk%2BVUFbIREqYexozHKtwD0btwMSxlWkQsgbfonsePjtuLU3HkKG90ShGgpdz1q4MsrPkrN6uOzsLAgv%2BA3B7hrUP3N%2BGYKywOXhQQqkEWvn8c%2BIDG2G4SGBEeSGe7b0tO94nls0AEPNfqCyiRPzwzfrqy1wIsRNxoBVGZKj31AB966EcvynV7kHS6IRJKQJL2je1Iab3A5s9cs2ci%2F%2FAVnwruh4g7Ceu65oS8%2BSjX9%2FmLG9urhVcjz%2F17LsXo8geaSSt%2FNoHTzzI3MtdMEn7BjpdB41koPZX%2FmL2Oe84YfM20860RblGkBt8NGZdJ%2FFCzNyFGmHkPiEP8sAWQB0qXDBjzMLNpTxNocYzD120l38nldw17whYJQXML5P%2FoaTxWsv5yMC086UNK37QxjwUkVYEIjqYD8VubSmMCnYFjd9GbLEckru5TlWOlf29Krz97P9ROQaRUHujuRWRsBiLv1ii1%2BdynY8aZjHUBsRTEwRGGZrvjdJKt3%2Bz2Ou%2FgQmqQERjnE3WTJhVJiIMCh9HFAOKQDzieUJxDdyB5Zrd2CPr0T0CnGPmTc5EK%2BF%2B3AGpn7qe6qC2UwJUv7rDs%2FIpwaZ5YDIBoDWOl5w3B4GflJcPm1xw0LB8zM0i5o%2F%2F4JVIE48sxSiN20T7gOyswkfTLyQY6pgHh2XOEIBSAXbUE4%2FgODYIUAAapI%2Fa6hX1WcYALaKgEo373M9X%2FH%2FM5%2BL4dSibWR9tVtQr0i5C9OzhfmDAvsKIjShZn%2Fxx%2BWJ2bubgD6qxLvPhAUaK3WlQBBG4eA2SOfV43XifZ13djOtPtGwKIW94trx1WKBBocup05kiFCUl%2B0tcYygfJMUO9F6Ssin3wWnbrK3MnBJmPiNnNxFzhudW%2F%2F60GZbvo&X-Amz-Signature=f091db27e3c215dfd47666e71c496ebe52ad02dcfcf16d4cd2aeedfd67504127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YFGINK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCORGZdMkp7orEbuFBf%2B8Tg6jBXc1MCrqlYhWj4geNDAiBHsqfFVKrsOLzx4kOmUp7Z9poBCtl7Hb6HzRxr1SCrYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMk%2BVUFbIREqYexozHKtwD0btwMSxlWkQsgbfonsePjtuLU3HkKG90ShGgpdz1q4MsrPkrN6uOzsLAgv%2BA3B7hrUP3N%2BGYKywOXhQQqkEWvn8c%2BIDG2G4SGBEeSGe7b0tO94nls0AEPNfqCyiRPzwzfrqy1wIsRNxoBVGZKj31AB966EcvynV7kHS6IRJKQJL2je1Iab3A5s9cs2ci%2F%2FAVnwruh4g7Ceu65oS8%2BSjX9%2FmLG9urhVcjz%2F17LsXo8geaSSt%2FNoHTzzI3MtdMEn7BjpdB41koPZX%2FmL2Oe84YfM20860RblGkBt8NGZdJ%2FFCzNyFGmHkPiEP8sAWQB0qXDBjzMLNpTxNocYzD120l38nldw17whYJQXML5P%2FoaTxWsv5yMC086UNK37QxjwUkVYEIjqYD8VubSmMCnYFjd9GbLEckru5TlWOlf29Krz97P9ROQaRUHujuRWRsBiLv1ii1%2BdynY8aZjHUBsRTEwRGGZrvjdJKt3%2Bz2Ou%2FgQmqQERjnE3WTJhVJiIMCh9HFAOKQDzieUJxDdyB5Zrd2CPr0T0CnGPmTc5EK%2BF%2B3AGpn7qe6qC2UwJUv7rDs%2FIpwaZ5YDIBoDWOl5w3B4GflJcPm1xw0LB8zM0i5o%2F%2F4JVIE48sxSiN20T7gOyswkfTLyQY6pgHh2XOEIBSAXbUE4%2FgODYIUAAapI%2Fa6hX1WcYALaKgEo373M9X%2FH%2FM5%2BL4dSibWR9tVtQr0i5C9OzhfmDAvsKIjShZn%2Fxx%2BWJ2bubgD6qxLvPhAUaK3WlQBBG4eA2SOfV43XifZ13djOtPtGwKIW94trx1WKBBocup05kiFCUl%2B0tcYygfJMUO9F6Ssin3wWnbrK3MnBJmPiNnNxFzhudW%2F%2F60GZbvo&X-Amz-Signature=0d604eb05b799ed6418017b2a047d12c0962340b5eaade1ba20ca42f90ec856e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

