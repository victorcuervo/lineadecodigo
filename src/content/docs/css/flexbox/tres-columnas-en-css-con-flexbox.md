---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD7PQWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqP0aYq3y5U8pJNGn%2B4MM8el3%2FUCHbhUZNjJy%2FjUPRHwIgavsKUGbrinWgNLJZmr9z4a9oI%2FD9GfVYnOI1bgLLatcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMPDVsiZ20vzyHHeAircA6tEXC9uGYG7%2BXoZk2lYUb%2BA9fdrJrzV6I%2Bye7NYp2e%2B9rthapHE8juuO0wZgdX5XDelLIivhf7la%2FUQjEcTApH%2FXZ1B56gj%2Fbweb%2FGmOwcrUA0p1OVec1hJdEj3DqpPjO8NAYlIOA3VexVokdwXAsN0pXEQ%2FBlwhUT0nHpRbYnJ9vx7WZhwie89fuKdfoDUUC%2FqUv%2BiyzADTBfqVmB4iiT61iSHlgtT4zR68Py2lv7yzXB4b7PJcF%2BFwPE9bAriJj0pphY3%2Fgew5G0ptsVPukzyTAk4osr71C7URBTiT6NFGB9ngdfPxB193Lkf6OCzA2f%2BZ2VPshVirqDf5R7CjfUiBY2TTaMe9o0NuNO8gZtYn5vONLhgSCX8qhY%2BW2h%2FVM6So6Rgi2VaqWvAZXs4E183weQXvRhVuIPteigxdD1Z3xtRJ8s9lkiAtzS04nkX14tL73jAvVEkozvyoyJrj4PKggLf0v28P7ohut1DjDYZFUJ0SDelB%2F9qNhnriqQvcGIkLjhAhcoN3ySGd2Q0RaPpiQTl8BvwLQnbkmOxBdftDnBYLvAs1aUyitwqHlu28JLHEdi8ZtO9YD9rpXcmEPgVnpvHqE6L9KVeQH08k4si0fNNHfcwGEBVxXBJMIigzckGOqUBUfKU7IZoWtwvqG6qbRcE23SqCvgtCaowl3T3nfj3Bhv9wz3CxM2jzx%2F6dJA%2Fj7E7T2jExnqcVLFatKKHEK7hxk9%2FSKukjVxydBYk76SfA20TMovK4LRc9YOdSj1mz8Hm5P20skOqHQtZt7HrBaF9iFStavRXpQU7tnMC6ZilXPeyz9zP4AaVOn8WqgUEtaWaKRGauiymWlpbRxNmCJv9U20kOPBc&X-Amz-Signature=d9c7860b94e04f38b37ed57203fe1cd887e50dc3398b54d4468f612239e3e181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD7PQWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqP0aYq3y5U8pJNGn%2B4MM8el3%2FUCHbhUZNjJy%2FjUPRHwIgavsKUGbrinWgNLJZmr9z4a9oI%2FD9GfVYnOI1bgLLatcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMPDVsiZ20vzyHHeAircA6tEXC9uGYG7%2BXoZk2lYUb%2BA9fdrJrzV6I%2Bye7NYp2e%2B9rthapHE8juuO0wZgdX5XDelLIivhf7la%2FUQjEcTApH%2FXZ1B56gj%2Fbweb%2FGmOwcrUA0p1OVec1hJdEj3DqpPjO8NAYlIOA3VexVokdwXAsN0pXEQ%2FBlwhUT0nHpRbYnJ9vx7WZhwie89fuKdfoDUUC%2FqUv%2BiyzADTBfqVmB4iiT61iSHlgtT4zR68Py2lv7yzXB4b7PJcF%2BFwPE9bAriJj0pphY3%2Fgew5G0ptsVPukzyTAk4osr71C7URBTiT6NFGB9ngdfPxB193Lkf6OCzA2f%2BZ2VPshVirqDf5R7CjfUiBY2TTaMe9o0NuNO8gZtYn5vONLhgSCX8qhY%2BW2h%2FVM6So6Rgi2VaqWvAZXs4E183weQXvRhVuIPteigxdD1Z3xtRJ8s9lkiAtzS04nkX14tL73jAvVEkozvyoyJrj4PKggLf0v28P7ohut1DjDYZFUJ0SDelB%2F9qNhnriqQvcGIkLjhAhcoN3ySGd2Q0RaPpiQTl8BvwLQnbkmOxBdftDnBYLvAs1aUyitwqHlu28JLHEdi8ZtO9YD9rpXcmEPgVnpvHqE6L9KVeQH08k4si0fNNHfcwGEBVxXBJMIigzckGOqUBUfKU7IZoWtwvqG6qbRcE23SqCvgtCaowl3T3nfj3Bhv9wz3CxM2jzx%2F6dJA%2Fj7E7T2jExnqcVLFatKKHEK7hxk9%2FSKukjVxydBYk76SfA20TMovK4LRc9YOdSj1mz8Hm5P20skOqHQtZt7HrBaF9iFStavRXpQU7tnMC6ZilXPeyz9zP4AaVOn8WqgUEtaWaKRGauiymWlpbRxNmCJv9U20kOPBc&X-Amz-Signature=6bc45c0e53e33f09456455dde878f324b8b79bbd2da90700225e5727de6bf702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

