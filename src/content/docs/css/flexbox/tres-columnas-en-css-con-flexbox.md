---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWR7JO7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICkBaGiE5Iw%2FRREqqvfYK%2FuCNiBmAhKSJTzbtciD0v38AiBSca3ilWHXFeXeuOD2lEBMYqcQdOFGNMqnlpxKRjkViyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMYoYPBdrsw0Ovp0PWKtwD7zNAheKOdR9ocymsg7v%2BJkNHRZ0meaIOkyXB77ZOZh8uBh%2BlsuYprBwGnc1hF%2FrJA1F54Iry8EuAlakXpdfOBTzOW%2BzrxU%2Fl3vysdYKcXiDAmSYDqMIhISCApdhS0JbYq4aKtpfkZ5gXU8YQ6nxpWXsSuD4sWgPTAYXVAafr1j68Is3LpXVuDAUDgLsRmiI4MBxiKQaGfXBgUWgUW15mP6i9Fd5MR4HlAMGyRb7oeUl8Mf6aWPtereMr3wcb8%2BMn6fFsi0M%2FgxzZshoi96ByxmQspER8ks8Vm3mncJSZuy2h7SoVl0X0DfYPbtuNRrT9XreyqKTfxzZFgUZICW57SToPNu1pBiGJ4oSbnLltvgjgzQcXOUt9XIr3%2BHbRLCNbW51SE6AZLkXBJVopKM%2Bj94YsvjUllWocQWdGU1pWYu%2BKj51ekveBcWr5CQaCIOvy2SbA5rzPW45XgAR6Yjg55t0zUFuem7tjNutPpjc62qbWfsNg%2BLAEPWfNHrY7j9trJpYkvKWIIDXZbakw5RoZ9zYK9OtG2zXBWNIYtzc7qkj5wbL%2FQFfhY34Sl1GCaPX0ahb%2Fd%2BpNaC4w9l53KBcutAWqDWIOZSqYVaNNYStaP5p6oSBt2IlD9aEsSDgw59PDyQY6pgH382QLVwUPOWaU0lI9QniOCNFHpBGjRvGlYhrxfYoM2eMyGeYMT1JBQhdvQ24nRY%2FR67qvzdcGY2RzE07Xd6ndgOfb0QglGoy1bp8VuoIqtTg0Wr5cSWNsPD58p8oOyx6VaxngYbX18R%2FAkokITt4%2FviRJKUgWRPkHukvd1WdhGOWriyBve7vLdgOILwqISjithsYuDPkR7hIp8rU8oD7hJE%2B8Pt0q&X-Amz-Signature=203ecab3cbb8bb2789785de0aba1d7d7db4056475ec4e23787d780f4c00d4da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWR7JO7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICkBaGiE5Iw%2FRREqqvfYK%2FuCNiBmAhKSJTzbtciD0v38AiBSca3ilWHXFeXeuOD2lEBMYqcQdOFGNMqnlpxKRjkViyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMYoYPBdrsw0Ovp0PWKtwD7zNAheKOdR9ocymsg7v%2BJkNHRZ0meaIOkyXB77ZOZh8uBh%2BlsuYprBwGnc1hF%2FrJA1F54Iry8EuAlakXpdfOBTzOW%2BzrxU%2Fl3vysdYKcXiDAmSYDqMIhISCApdhS0JbYq4aKtpfkZ5gXU8YQ6nxpWXsSuD4sWgPTAYXVAafr1j68Is3LpXVuDAUDgLsRmiI4MBxiKQaGfXBgUWgUW15mP6i9Fd5MR4HlAMGyRb7oeUl8Mf6aWPtereMr3wcb8%2BMn6fFsi0M%2FgxzZshoi96ByxmQspER8ks8Vm3mncJSZuy2h7SoVl0X0DfYPbtuNRrT9XreyqKTfxzZFgUZICW57SToPNu1pBiGJ4oSbnLltvgjgzQcXOUt9XIr3%2BHbRLCNbW51SE6AZLkXBJVopKM%2Bj94YsvjUllWocQWdGU1pWYu%2BKj51ekveBcWr5CQaCIOvy2SbA5rzPW45XgAR6Yjg55t0zUFuem7tjNutPpjc62qbWfsNg%2BLAEPWfNHrY7j9trJpYkvKWIIDXZbakw5RoZ9zYK9OtG2zXBWNIYtzc7qkj5wbL%2FQFfhY34Sl1GCaPX0ahb%2Fd%2BpNaC4w9l53KBcutAWqDWIOZSqYVaNNYStaP5p6oSBt2IlD9aEsSDgw59PDyQY6pgH382QLVwUPOWaU0lI9QniOCNFHpBGjRvGlYhrxfYoM2eMyGeYMT1JBQhdvQ24nRY%2FR67qvzdcGY2RzE07Xd6ndgOfb0QglGoy1bp8VuoIqtTg0Wr5cSWNsPD58p8oOyx6VaxngYbX18R%2FAkokITt4%2FviRJKUgWRPkHukvd1WdhGOWriyBve7vLdgOILwqISjithsYuDPkR7hIp8rU8oD7hJE%2B8Pt0q&X-Amz-Signature=113855d1e2684bfdd582df052c5351b08d8edacb63932c338b32a1aafd29d2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

