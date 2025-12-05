---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZZ63TP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY4uBfI6kOfn7WCosnUqmWGo942YTecHMK5nfXANiyawIgGe4w6I%2FVqc0%2FiXMhqCN70hM%2F4js2vSL4J9y%2B%2BCSOnHsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGg4dpml4WbRCsJMoSrcA23s2CeMVovyB4fzOgqylTFIEYUZwNExJKAfkNSY%2BR6C8QIEcifynKsk5NMH7hv%2BEeUtDvgyDkLJ0mQwg6nsjGM2jMvB%2FurGaA1hB23yhJUFB%2F1ABegQSR1lATMiTCRNi%2BwS8HEee6hStVJHDShexb7EgkPggrZWpmK9WR6jqa%2BubE7yvBv8dD49ITqRhKuAtYWs7EWCmv3Um%2FCa1G50zY2bzfJs4qDFfQWqSd0ONaHU5lnOlEwEPzhm2qnmWPfV%2FV%2FejZj5nWRB9ErIRfMun0aUq08K6QxKR4MrwsU0ARjdSN6IogGoxWXnwYBxS15Hvt3U7vDRa46tmIqrV4GWdGsMREKg5JFNU8wC5BflwLAmW8QGN1pkQ2y68739GGQXKdUkIbWpXETc2TSImT55EmrI2oqnjUqwOEbHW4oaS2Y9gz3pGZhMsWJx8dih6HgPqc4WhcGETSonrWWibC0pmXwdE4Q9RdcrBld2bJST00Aby0azoG5o5%2BTUkQmC5D22AtSd4a2CAYyIrbUnVZhY5eLsocuXo7i7%2F9XSUafbhWLYYdxVD00u6Iu%2FF4%2FTiSOEeDIlI6Tb4wr8rKE5cwPe6QgCRh6Q%2F%2FF9pzpCCHqX8LnIUvC%2BmqGaYc08qW4pMKbGzckGOqUBKK8Ro8QcXQYWqytZJOvdvrmHDm%2Fww3jEdJs50k0Aw%2B7CO%2FIZhupHVNNEa37EG2zoHT%2FynT%2Bl6HFL5e00ED5za%2B%2BbmF4%2Fu6z1xzY6njxKx%2BCjysgO3O1Xjr%2FdouM0am0TajSyDp1SJzJi5oXKU6aTBi4fr0tmDW6G5X1xm%2FWKtN5lf8e4L0crlhjOualXY2EBDnVmZEacqZMstz2z7sEgAempdliD&X-Amz-Signature=eb9d5869106d3a50dec3a9412805dcd1ff1fb532cce67dee04ee2125f4cdb7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZZ63TP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY4uBfI6kOfn7WCosnUqmWGo942YTecHMK5nfXANiyawIgGe4w6I%2FVqc0%2FiXMhqCN70hM%2F4js2vSL4J9y%2B%2BCSOnHsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGg4dpml4WbRCsJMoSrcA23s2CeMVovyB4fzOgqylTFIEYUZwNExJKAfkNSY%2BR6C8QIEcifynKsk5NMH7hv%2BEeUtDvgyDkLJ0mQwg6nsjGM2jMvB%2FurGaA1hB23yhJUFB%2F1ABegQSR1lATMiTCRNi%2BwS8HEee6hStVJHDShexb7EgkPggrZWpmK9WR6jqa%2BubE7yvBv8dD49ITqRhKuAtYWs7EWCmv3Um%2FCa1G50zY2bzfJs4qDFfQWqSd0ONaHU5lnOlEwEPzhm2qnmWPfV%2FV%2FejZj5nWRB9ErIRfMun0aUq08K6QxKR4MrwsU0ARjdSN6IogGoxWXnwYBxS15Hvt3U7vDRa46tmIqrV4GWdGsMREKg5JFNU8wC5BflwLAmW8QGN1pkQ2y68739GGQXKdUkIbWpXETc2TSImT55EmrI2oqnjUqwOEbHW4oaS2Y9gz3pGZhMsWJx8dih6HgPqc4WhcGETSonrWWibC0pmXwdE4Q9RdcrBld2bJST00Aby0azoG5o5%2BTUkQmC5D22AtSd4a2CAYyIrbUnVZhY5eLsocuXo7i7%2F9XSUafbhWLYYdxVD00u6Iu%2FF4%2FTiSOEeDIlI6Tb4wr8rKE5cwPe6QgCRh6Q%2F%2FF9pzpCCHqX8LnIUvC%2BmqGaYc08qW4pMKbGzckGOqUBKK8Ro8QcXQYWqytZJOvdvrmHDm%2Fww3jEdJs50k0Aw%2B7CO%2FIZhupHVNNEa37EG2zoHT%2FynT%2Bl6HFL5e00ED5za%2B%2BbmF4%2Fu6z1xzY6njxKx%2BCjysgO3O1Xjr%2FdouM0am0TajSyDp1SJzJi5oXKU6aTBi4fr0tmDW6G5X1xm%2FWKtN5lf8e4L0crlhjOualXY2EBDnVmZEacqZMstz2z7sEgAempdliD&X-Amz-Signature=f066e06c73cd6a61eb2558cbb01c4ee8354b424be0daeec1b16cf68528ef1075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

