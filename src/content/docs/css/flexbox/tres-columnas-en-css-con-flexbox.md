---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6R7VYG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNEz1c58gxCVIY2JDA8AE3uWjrnTxhEHwBk2E8QUpRgIgVdkC37DOCuvTYm7cGj7e2EESK2pWg3WuIAkdGtVZjKIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOC0S1kV%2BYWpFe2NiCrcAwGxu13dDW53l2xtCbgh9nCWrsZ2nVA6UXldaHIZM5I0QGYDseCKw65bXNoiQupiLBxHJofDf2E7Dpo8w1ZslsLDmdJzrbTtnLM6aPGxrmoKyuP0YOww14B1DAVMnif7dqzzPFpNF5lcEFIzWYTat33psLLyFgCzdZqQBHTSXMsVmFH%2Bn1yV%2BK700A3faObCyGXUXeZXITD0buYonCWfvHcfQRCEs8b640quV%2FqAtEgMG%2FOOj4zYyak05S7HPEHOFh1wo0bqLrWSd4n3izCEu9HfZIaMiz8GjMYgijBNAf1SwSSoLTdb1xctWFYmvwcv5IniW%2FKYYXzUxacxd0XEAXH1W3jp5AUpcNrDFGpFJldJ5jWrAtQcVAzRD7QgHwcy5Hc9Kaa%2FMhQ0bcvzoQ7D%2Fc7Q1OzPmRKOxqFdgv3yQUS45x0RIODa5v04O2A4jq4BAyCGtk%2Bm59oHP9XZtS4WNeCgOk3YNDTiBnkGsz2cTggke8HGSt7KlzCBZF5gfgGZwRU6QjrdLvG0MkKAt0lhplOU0b4N2eg3L%2F0NcHanu%2BADXVl9MRMs5N8FadkhYU5aA3cZl3iA9jAfo8k1XTpwB4BXp1CLF277P5KtTRyxAcanlQj8R3mpXabANN5sMKSnzskGOqUBsdlCf2eOi9S%2BBzgVt0wNR4iYemn%2BKGY6tDEvIjIZrZu7YHK8uG1nX%2BLvQv%2FcEaBHu4yU0iLuoVPXD6zIlIC%2BGtVqlZYi4pNldJ7gzrT26p%2B5HPHqF85EhYTefOiHttqx%2BQX6lGUK9zAJFjGqrvPVjh9UUzt5e93fzZb2plpVuaqYvDZUPVQJ%2FPae0bLR6rDV%2FwDT%2BJQJagpn8GgIu7seO8wuIjSP&X-Amz-Signature=51bf1654d401145785e3191308b65d9895840f86052e3c5e0a92a8bcc2383f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6R7VYG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNEz1c58gxCVIY2JDA8AE3uWjrnTxhEHwBk2E8QUpRgIgVdkC37DOCuvTYm7cGj7e2EESK2pWg3WuIAkdGtVZjKIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOC0S1kV%2BYWpFe2NiCrcAwGxu13dDW53l2xtCbgh9nCWrsZ2nVA6UXldaHIZM5I0QGYDseCKw65bXNoiQupiLBxHJofDf2E7Dpo8w1ZslsLDmdJzrbTtnLM6aPGxrmoKyuP0YOww14B1DAVMnif7dqzzPFpNF5lcEFIzWYTat33psLLyFgCzdZqQBHTSXMsVmFH%2Bn1yV%2BK700A3faObCyGXUXeZXITD0buYonCWfvHcfQRCEs8b640quV%2FqAtEgMG%2FOOj4zYyak05S7HPEHOFh1wo0bqLrWSd4n3izCEu9HfZIaMiz8GjMYgijBNAf1SwSSoLTdb1xctWFYmvwcv5IniW%2FKYYXzUxacxd0XEAXH1W3jp5AUpcNrDFGpFJldJ5jWrAtQcVAzRD7QgHwcy5Hc9Kaa%2FMhQ0bcvzoQ7D%2Fc7Q1OzPmRKOxqFdgv3yQUS45x0RIODa5v04O2A4jq4BAyCGtk%2Bm59oHP9XZtS4WNeCgOk3YNDTiBnkGsz2cTggke8HGSt7KlzCBZF5gfgGZwRU6QjrdLvG0MkKAt0lhplOU0b4N2eg3L%2F0NcHanu%2BADXVl9MRMs5N8FadkhYU5aA3cZl3iA9jAfo8k1XTpwB4BXp1CLF277P5KtTRyxAcanlQj8R3mpXabANN5sMKSnzskGOqUBsdlCf2eOi9S%2BBzgVt0wNR4iYemn%2BKGY6tDEvIjIZrZu7YHK8uG1nX%2BLvQv%2FcEaBHu4yU0iLuoVPXD6zIlIC%2BGtVqlZYi4pNldJ7gzrT26p%2B5HPHqF85EhYTefOiHttqx%2BQX6lGUK9zAJFjGqrvPVjh9UUzt5e93fzZb2plpVuaqYvDZUPVQJ%2FPae0bLR6rDV%2FwDT%2BJQJagpn8GgIu7seO8wuIjSP&X-Amz-Signature=f54ad9fbce15cf81c295503e09e65b8c03d7df880281e5cb5da0572618551383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

