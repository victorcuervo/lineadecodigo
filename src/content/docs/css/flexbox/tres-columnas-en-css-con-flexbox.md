---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHDYG2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDBWCYATCx10xo4BotlBWfUJSg6waKD%2BpaKYgqImTWzdAiEAickg233BqCVDV%2B6UWTGeWS4v6%2FcH7HdK1QYMRwDEU1cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAKBcjH31951qu0FOSrcA5QO8M1FcMMvIX6Ybev6RrZB7UhjYxdqlnnA71%2FRWc8pHve2YU1Mt%2BPgr5nL26YNM13xtLdgjx1uefUi1hF%2F9p5%2BWglDalZRZUWkdA8gcK36OJbCoX4gZHYpqczufrpla438TriQlZmHXqv1y9uBWhiIxqNSICJb0MYNLcZYoG%2Fi%2FDBMtpUUNKY8LlQEqdGxkHNSfPQF6lErKaInZvdaASTWmnRgvhvvOE6kVGFXRg7gT15wRzLXbe1%2F151nxdZ4K898naPK6mJ%2FSnYqp3sYcHzm5RZdct3pKMgGQHU2IMPNfQCMVRwHvbXRJ%2Fe2gnE8r6oGjQRNugPir%2BNVgtYz%2F6WJCVISVwxKRsm4fn2stSwt%2BbK7ybmXD9BeOhnr3BwGn6OggBpeawV%2F0A%2BG7%2FTDxoYL4%2FfN9YUpADfNwzXmH1vSmdHuLDqwLhG22G84r%2FMRAUzUrCZdRr1Q1CrmPmcxkB%2FTXuf%2FGwtH2OymlSiZRdQigwuWwpDqA2EQ8oVSp86Bgmj0QmQMXwv2XQnKEBkz61eq%2BO2R0LizeycIrZyL1WrmGcP0lTnzLWzV5EY%2FMXbcCf1OtvHAUTH1euFWknY9YYPOi2kb3DBRGxGmM08CKLIUeXih7fz9qgcT%2FRTxMOvoxMkGOqUB6AckUCTLu2SYTTdlg0YU2aU6Nv%2BI%2FZTtwEG5o4o%2B0ASzZDQiWg0Oj8mwxorsTXlv6VnY81uTG%2Fej%2Bc79wzQrKJZzojNFMtvjKZq1myhMUNsIzlPjkd6IExbg93RsoUoC84IOYoCZLqeS5KaDS7tFG0l0p5kKdT1tc9kUCv1lV7OArDD%2BmObqO0wzRlM3X0bfTXFbUfMrOl3eAqZGHy6ftdHopcCB&X-Amz-Signature=0af6b7b804aa0eef42417a665e3ab350eaf815613e9a80a31bca4b076b77ab75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHDYG2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDBWCYATCx10xo4BotlBWfUJSg6waKD%2BpaKYgqImTWzdAiEAickg233BqCVDV%2B6UWTGeWS4v6%2FcH7HdK1QYMRwDEU1cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAKBcjH31951qu0FOSrcA5QO8M1FcMMvIX6Ybev6RrZB7UhjYxdqlnnA71%2FRWc8pHve2YU1Mt%2BPgr5nL26YNM13xtLdgjx1uefUi1hF%2F9p5%2BWglDalZRZUWkdA8gcK36OJbCoX4gZHYpqczufrpla438TriQlZmHXqv1y9uBWhiIxqNSICJb0MYNLcZYoG%2Fi%2FDBMtpUUNKY8LlQEqdGxkHNSfPQF6lErKaInZvdaASTWmnRgvhvvOE6kVGFXRg7gT15wRzLXbe1%2F151nxdZ4K898naPK6mJ%2FSnYqp3sYcHzm5RZdct3pKMgGQHU2IMPNfQCMVRwHvbXRJ%2Fe2gnE8r6oGjQRNugPir%2BNVgtYz%2F6WJCVISVwxKRsm4fn2stSwt%2BbK7ybmXD9BeOhnr3BwGn6OggBpeawV%2F0A%2BG7%2FTDxoYL4%2FfN9YUpADfNwzXmH1vSmdHuLDqwLhG22G84r%2FMRAUzUrCZdRr1Q1CrmPmcxkB%2FTXuf%2FGwtH2OymlSiZRdQigwuWwpDqA2EQ8oVSp86Bgmj0QmQMXwv2XQnKEBkz61eq%2BO2R0LizeycIrZyL1WrmGcP0lTnzLWzV5EY%2FMXbcCf1OtvHAUTH1euFWknY9YYPOi2kb3DBRGxGmM08CKLIUeXih7fz9qgcT%2FRTxMOvoxMkGOqUB6AckUCTLu2SYTTdlg0YU2aU6Nv%2BI%2FZTtwEG5o4o%2B0ASzZDQiWg0Oj8mwxorsTXlv6VnY81uTG%2Fej%2Bc79wzQrKJZzojNFMtvjKZq1myhMUNsIzlPjkd6IExbg93RsoUoC84IOYoCZLqeS5KaDS7tFG0l0p5kKdT1tc9kUCv1lV7OArDD%2BmObqO0wzRlM3X0bfTXFbUfMrOl3eAqZGHy6ftdHopcCB&X-Amz-Signature=d611f66f0557ba3e0a6beb9e7bbd4988ccbdeb63cd042c3cc220e80656730cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

