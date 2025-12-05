---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=2cae39bf362a06c204b36a4fe5eab47c35d9432f9df224e5ef33d0335546af40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=d48f3272da13fa4b44ee7fc039f446106f98f5995a2ec6384dbefd954fab7abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

