---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHF4ZYSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDoyKKpcNcb3yO%2Bt%2BM1ODH19fEExhOaU1KjdiIid2KI3AIhAJ1Z%2BlLWr%2B0YPT1QMAyZR4YLuKv8JHVg8X7eUnyNvZn%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwYIHVZU3O1zPTgnlIq3AOn5KGN61%2FZ8VSbeqTIhXqB%2FyOwZfzyWWajhwNMPau3rnqdL5MpUuwoe7ly0wQWf%2FVSHAFOHfH9L%2BLaKrgxdgW5VdlZ6NkXv%2BC%2FkSl7SY2YOBDgOJtPCi3bXkaMJm4id7KT5ChYuqUsm%2B%2F6HQSSm1EOqY5Px0qrOoeB7uVmUYT6QYugFZownwUCIemqolQolehCS7ymIX8Toapblp28rXBcFxmGG4uuyhxpMZIMkMGBtsYG0NuQaqaXkjJ0EjKBRbrNPp94j%2BHyxvSQmtyW900SckO9L%2BLo54w3IoDAuzUfq%2F64iauiBa%2BaW%2BdIGA%2B0YbEg30d5smh0iVKRME%2B9TFEqTXvJRmCY3pt1mT%2BbaFE4q3%2BshEbNQ9N8pVegdnklyEPQ46tVySYI1jPmtYwR39zX1qkfrGcdviK52x%2FhMO6mhP9Eow%2BJbok5mJ%2B1Gd4OQ%2Bi4TsZB%2BbcvYEdkhXmIq3Ersha%2BWXs0QTRCkByaDsYU84pgemhptPyBOFiMlq8pDlm4Y9s6Zz9tnntWRBlB073C43Oe9%2FodQiEk4qLNLRr6zd11Uqb97tCRW6sVlckKp4nOt6UgbzuTwstbZ8AJSQPAaAnJvsLuSDwCzghqx71RTW%2F2h%2BbPs5mMH6sM7zCw58XJBjqkAVFSjpNNMH9uvep4BHMueo5SBGKQb%2BBrvwLQ2w9OtrAKUTIpOosGSgXOC2G3CxyadA0P08EjPhPZXUMv4VH2TWFg5z0Re1d6ZExdyaCznWorKQe25Jj5HkenYKCLpm8br7zQE5%2BqsWpKO1bLGTDFiQgQF0m9BGbzm8lhtnfmQE7%2BjRYznrw1bpBTiuLqy1nxGEAkC2tu7Zr144fe5Gxj4Udzzy2f&X-Amz-Signature=c506413dcda323af84e00227abe6fd1e02cd14c4cdeb80ee5caedbeca91cf98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHF4ZYSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDoyKKpcNcb3yO%2Bt%2BM1ODH19fEExhOaU1KjdiIid2KI3AIhAJ1Z%2BlLWr%2B0YPT1QMAyZR4YLuKv8JHVg8X7eUnyNvZn%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwYIHVZU3O1zPTgnlIq3AOn5KGN61%2FZ8VSbeqTIhXqB%2FyOwZfzyWWajhwNMPau3rnqdL5MpUuwoe7ly0wQWf%2FVSHAFOHfH9L%2BLaKrgxdgW5VdlZ6NkXv%2BC%2FkSl7SY2YOBDgOJtPCi3bXkaMJm4id7KT5ChYuqUsm%2B%2F6HQSSm1EOqY5Px0qrOoeB7uVmUYT6QYugFZownwUCIemqolQolehCS7ymIX8Toapblp28rXBcFxmGG4uuyhxpMZIMkMGBtsYG0NuQaqaXkjJ0EjKBRbrNPp94j%2BHyxvSQmtyW900SckO9L%2BLo54w3IoDAuzUfq%2F64iauiBa%2BaW%2BdIGA%2B0YbEg30d5smh0iVKRME%2B9TFEqTXvJRmCY3pt1mT%2BbaFE4q3%2BshEbNQ9N8pVegdnklyEPQ46tVySYI1jPmtYwR39zX1qkfrGcdviK52x%2FhMO6mhP9Eow%2BJbok5mJ%2B1Gd4OQ%2Bi4TsZB%2BbcvYEdkhXmIq3Ersha%2BWXs0QTRCkByaDsYU84pgemhptPyBOFiMlq8pDlm4Y9s6Zz9tnntWRBlB073C43Oe9%2FodQiEk4qLNLRr6zd11Uqb97tCRW6sVlckKp4nOt6UgbzuTwstbZ8AJSQPAaAnJvsLuSDwCzghqx71RTW%2F2h%2BbPs5mMH6sM7zCw58XJBjqkAVFSjpNNMH9uvep4BHMueo5SBGKQb%2BBrvwLQ2w9OtrAKUTIpOosGSgXOC2G3CxyadA0P08EjPhPZXUMv4VH2TWFg5z0Re1d6ZExdyaCznWorKQe25Jj5HkenYKCLpm8br7zQE5%2BqsWpKO1bLGTDFiQgQF0m9BGbzm8lhtnfmQE7%2BjRYznrw1bpBTiuLqy1nxGEAkC2tu7Zr144fe5Gxj4Udzzy2f&X-Amz-Signature=c26aef7d1d7c42d1b68216543093bcf69463528ad43bd4bdd10d64e8ef672f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

