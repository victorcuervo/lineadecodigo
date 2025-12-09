---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7GBXLA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWLXMFN%2Fy%2FWEtr8trJf6vcmoeKa9XdZHX7TxdbdeyEaAiBms%2BNrOmFkZPObW%2BnLfzuwWqR1g0d2GVtx76%2Ft6uj%2FgCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXcztoN3VgkT70%2B0qKtwDUalSiRqlmtSnfFcAGFIDcQlfeF6YQTFVd9Sw8CyyKlupR%2BARXFihyzDrVLSzHZUtvhYEc5kl9VhZNsIo%2FgofShmxGvSYB9X9cyZYqIvMZb1q6ZzBp2jtnlaxnXVOmnmTSa%2FY1Fj559PaieHItlY6nvU1TyU1sa4jO6c6pX8ywd%2BtU0KjDfh5BttBq%2BKAdNxNnzCWy9%2By36PkmWtvKRHmDmofm8KLlZPWCnwxJaPfB0X2CAuyDHgchYzsMo%2BHaoILeWLGZRmNXVpV%2FXCU15Yv5TcfPLBoKUckgVjmy6xC6QojcqXSI%2FUH3ZG%2BTyK64UrC1FEmjDZ7ipq9xOOWFebRI75QoIraaBahlbh3w8UzKn%2FwM4slJaQXxYbw95VIMzPdtM6KFlHHUKYs%2Be7VS1swt8uUY6mLs5Xz1ct4vm%2Beli%2FvyhLNrdgw2KqyDrSIA0rQ3ixUcR5nSYYVLyDwjRwzp93vK58WY7g7pE3PWV9ckGlbqHaTDj5ic8UbdWXDA4QVG%2F2wildmpTsef2CjhAsK8wgtpvU%2FYK%2FtTzvOUwtxPnQwlV5hpjzAk1fpdVQ6OFfQUh2HKMtPr4uAoeTpN67DvqMnG4FFsadDEPrTYsI8Z0QBgvRNA6%2F8GUmsHYwwqeXeyQY6pgGSUDyL%2F2Rok6rHo7DxS69r%2BaT8fQ687R1IJ2R2IenVL0JfXibFKtwRumuQ0OGuS8iDp5%2FXykV9MFbGRBgdWo1CgI16SeIaYer2bmxrSFcrI4suFw4lNduEpOfl3wO8CVY%2Fy509xoKgaOBM9CZCoixch7Unmd0UUIZbeyjEwpcyPSlh4FEoifinPvh8GgnBOTiw9rr7%2BQshCtBIhUK90a9UxyEtkMQO&X-Amz-Signature=8481b0cacec347da880798771e7ea805c229a38438ea9b8ef96b1c3132e68096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7GBXLA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWLXMFN%2Fy%2FWEtr8trJf6vcmoeKa9XdZHX7TxdbdeyEaAiBms%2BNrOmFkZPObW%2BnLfzuwWqR1g0d2GVtx76%2Ft6uj%2FgCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXcztoN3VgkT70%2B0qKtwDUalSiRqlmtSnfFcAGFIDcQlfeF6YQTFVd9Sw8CyyKlupR%2BARXFihyzDrVLSzHZUtvhYEc5kl9VhZNsIo%2FgofShmxGvSYB9X9cyZYqIvMZb1q6ZzBp2jtnlaxnXVOmnmTSa%2FY1Fj559PaieHItlY6nvU1TyU1sa4jO6c6pX8ywd%2BtU0KjDfh5BttBq%2BKAdNxNnzCWy9%2By36PkmWtvKRHmDmofm8KLlZPWCnwxJaPfB0X2CAuyDHgchYzsMo%2BHaoILeWLGZRmNXVpV%2FXCU15Yv5TcfPLBoKUckgVjmy6xC6QojcqXSI%2FUH3ZG%2BTyK64UrC1FEmjDZ7ipq9xOOWFebRI75QoIraaBahlbh3w8UzKn%2FwM4slJaQXxYbw95VIMzPdtM6KFlHHUKYs%2Be7VS1swt8uUY6mLs5Xz1ct4vm%2Beli%2FvyhLNrdgw2KqyDrSIA0rQ3ixUcR5nSYYVLyDwjRwzp93vK58WY7g7pE3PWV9ckGlbqHaTDj5ic8UbdWXDA4QVG%2F2wildmpTsef2CjhAsK8wgtpvU%2FYK%2FtTzvOUwtxPnQwlV5hpjzAk1fpdVQ6OFfQUh2HKMtPr4uAoeTpN67DvqMnG4FFsadDEPrTYsI8Z0QBgvRNA6%2F8GUmsHYwwqeXeyQY6pgGSUDyL%2F2Rok6rHo7DxS69r%2BaT8fQ687R1IJ2R2IenVL0JfXibFKtwRumuQ0OGuS8iDp5%2FXykV9MFbGRBgdWo1CgI16SeIaYer2bmxrSFcrI4suFw4lNduEpOfl3wO8CVY%2Fy509xoKgaOBM9CZCoixch7Unmd0UUIZbeyjEwpcyPSlh4FEoifinPvh8GgnBOTiw9rr7%2BQshCtBIhUK90a9UxyEtkMQO&X-Amz-Signature=493ddd5760393eef5d6b3961ae371eecfda6bea805a2744dea165db0c3fa9d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

