---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEWOV32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FKRbgcaWKCCXaQJ8li1RupWF4UanUi5VJbLsCn07f%2FAiEAz8u4NiqcGQBn%2FIstXn6B7KcD3P7QQYpk5gqOEmtb7PYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGMOD43T5LzZ6z3cpCrcA1li6Vt1o5w9kQWbEW3K%2Bo7nkw4BOfj3vtbTH1ol9E8Kwyp52kjiwa4LgBTpwpZt8xoMTGCRWU6KIZcGqWyoyNeMAqr3fH%2B0hmgHZAvP9lHj05aUar%2BUj%2FwJZxrVRRk22nP2bFjOyqyUI8H07YntyypMMfU0MnAVuI2hj9p84csD8%2Fcm5%2FkKp2Q1t8q4b4Bm3%2BT%2B%2BExOlQ2B3flCZy8AjvgIjfoUkBS8XAMzBt8LpaKBSCPa0caOwhj9C5ncZrCApK%2FKpGEOIcW1%2BKTM2Hj1nhJI9%2Bfh1dX%2FnuO3oWpDg5xrZIzbKSf%2BJcUIp1LQvQB4qa2wK1BggdLzlyXjVUee9KPJiU1yAXbMFm7jlwgkyoeaDpZLnmTZ7%2Bmt4iv8IDVoMLgcJvhyuaxduJ8S2C75chkNwEMvRTyGEDCg28411EKk89YquNnkI8xGYwQ7ubfv2QhZbcd4c1g9R9J5M14lRGPO3W8wyzulcXBZbXf980rJFpFvwyTgKDUevF5TXEi6Y%2Bmi86rjSi7TTzmPYEr48DtSQ5Z6AtH%2F1aXlfNU0Q6QfichIEkIlSc8wKXX6PkwxVJnOMIgHPuGjcut%2BACBqeTdVntAQmCeRcwd4wkRqtf1JHKsl14Ksa4ADBfnYMMuMyMkGOqUBNS9E17d%2Fam68ebdEkkFKFnQqn66hI9y8xReDl0%2FZT5FhYzSxI79DK%2FukPgTdHrrPoW3D0tajpRMGgVXWj2uqeW0sy%2FNv%2BRiYe3QEJCOtyHW9yERzpMC5xrDgckKCLxYoiALB%2FWF5JE2Uli06Rsuq4flUA3eO%2F%2BuiNr3toKQ8BJ2dAXIHloeJNZg5quDYG%2FOfQ%2BgyYDF%2FvX1isPQPDr0uhsUEg%2FdQ&X-Amz-Signature=d43586ab37aa7f3ef37e227e2e2cfeb631f8419b765decf4ef00d4a89bc686e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEWOV32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FKRbgcaWKCCXaQJ8li1RupWF4UanUi5VJbLsCn07f%2FAiEAz8u4NiqcGQBn%2FIstXn6B7KcD3P7QQYpk5gqOEmtb7PYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGMOD43T5LzZ6z3cpCrcA1li6Vt1o5w9kQWbEW3K%2Bo7nkw4BOfj3vtbTH1ol9E8Kwyp52kjiwa4LgBTpwpZt8xoMTGCRWU6KIZcGqWyoyNeMAqr3fH%2B0hmgHZAvP9lHj05aUar%2BUj%2FwJZxrVRRk22nP2bFjOyqyUI8H07YntyypMMfU0MnAVuI2hj9p84csD8%2Fcm5%2FkKp2Q1t8q4b4Bm3%2BT%2B%2BExOlQ2B3flCZy8AjvgIjfoUkBS8XAMzBt8LpaKBSCPa0caOwhj9C5ncZrCApK%2FKpGEOIcW1%2BKTM2Hj1nhJI9%2Bfh1dX%2FnuO3oWpDg5xrZIzbKSf%2BJcUIp1LQvQB4qa2wK1BggdLzlyXjVUee9KPJiU1yAXbMFm7jlwgkyoeaDpZLnmTZ7%2Bmt4iv8IDVoMLgcJvhyuaxduJ8S2C75chkNwEMvRTyGEDCg28411EKk89YquNnkI8xGYwQ7ubfv2QhZbcd4c1g9R9J5M14lRGPO3W8wyzulcXBZbXf980rJFpFvwyTgKDUevF5TXEi6Y%2Bmi86rjSi7TTzmPYEr48DtSQ5Z6AtH%2F1aXlfNU0Q6QfichIEkIlSc8wKXX6PkwxVJnOMIgHPuGjcut%2BACBqeTdVntAQmCeRcwd4wkRqtf1JHKsl14Ksa4ADBfnYMMuMyMkGOqUBNS9E17d%2Fam68ebdEkkFKFnQqn66hI9y8xReDl0%2FZT5FhYzSxI79DK%2FukPgTdHrrPoW3D0tajpRMGgVXWj2uqeW0sy%2FNv%2BRiYe3QEJCOtyHW9yERzpMC5xrDgckKCLxYoiALB%2FWF5JE2Uli06Rsuq4flUA3eO%2F%2BuiNr3toKQ8BJ2dAXIHloeJNZg5quDYG%2FOfQ%2BgyYDF%2FvX1isPQPDr0uhsUEg%2FdQ&X-Amz-Signature=6859b00e5cc5ba02b65a4e7279a9f48a6907e232bb18226984b906898635757d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

