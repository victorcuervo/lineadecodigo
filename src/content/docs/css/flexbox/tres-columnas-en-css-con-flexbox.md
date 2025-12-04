---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CK6ZBTA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDIR4v6uBopwlbQVU2eGlun1oJGDyjFoTZpjqNJOmcNVgIgIF8Zkt3pvvizogc278B%2F%2FpICMelz3I5%2Fpylsl8lle8Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOiSdypXxXDnl9HRgSrcA6zx3eDDZdL2eWYlHPHsSQSMatWL0vG382YAjLhOmGWd5WPH2bhXjsehNpkSGjNxtGDmIWiX6x7OjFfSGyE1D5ssZRQ7NjJ%2BLGeMsWyP62qmmPRy9VbOabgYgp6zuBaYcULKeHvxmvkbAA8bcVrIXyiyGnY7PDtzOHDnB3qcONlkRAITazSBh7FCEDKD1ojE5mzz%2BmCIlj9RSFJKkDABkN4a02LIF8akAaVCdDtnPwMWrtPMdjA1UEfSNc9Ovpe3m4WHoVZ2%2B7tOelKG3GkT5x%2FYLP1wQmj%2BDCI0fQQ9QSeAuevwzpAS8y2Ggb6oZghLii%2F23EWCxYRMd9Or%2BbkseLFrBfLn253S3dVq0Bte4RevU3LTQkj2caLS2GJQOEgKrLbmdn5t6ioRDT6nbrnf2YxhdcXf50dpAQRf5c%2BVL0h%2BANNax%2F0hZTeJs4nFhbTIYsUCEKI3UbfapKzlARMheNCm5%2FFrFPjYzBw8icfU7zMU18hhJMN%2Bhufb0VHJi3b%2BcsBkwfYXqihS8PPMPXGEcy78Vcwn2%2FiiwhSnwm21p4WYl3aQzWEcsmGDL11s3%2Fj1MH68oE91IhtuWaekhFdZQaqYm6Z%2F5D3AeDpqO1cNXCnDoMi%2F1AfQkaYMvwGXML6RxMkGOqUBCbQiTe707O%2FxvaRinm7EYTCDEgMOVSYmXrGCD4dG2vyb8qNCesOVjWxgi1BES0F5J8BtSmpUNBSqCcZmOfnj6KvGfTZOkV3On3UK9W1S7uSWKEzkCUSdH%2BEwCe3mBzc3Dgr4%2BJ%2BtIzirCiZ4M5r3Q51hom4tNF54sXdifAZzsdJsNAmBPUfr2sp6WE%2BynxMs7vyd25%2B6r8uVEEkl4BEDivSwU7nc&X-Amz-Signature=78605fd5e61180da22f9e720642e8ca724b20936d0ddd341f077c2a21890c608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CK6ZBTA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDIR4v6uBopwlbQVU2eGlun1oJGDyjFoTZpjqNJOmcNVgIgIF8Zkt3pvvizogc278B%2F%2FpICMelz3I5%2Fpylsl8lle8Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOiSdypXxXDnl9HRgSrcA6zx3eDDZdL2eWYlHPHsSQSMatWL0vG382YAjLhOmGWd5WPH2bhXjsehNpkSGjNxtGDmIWiX6x7OjFfSGyE1D5ssZRQ7NjJ%2BLGeMsWyP62qmmPRy9VbOabgYgp6zuBaYcULKeHvxmvkbAA8bcVrIXyiyGnY7PDtzOHDnB3qcONlkRAITazSBh7FCEDKD1ojE5mzz%2BmCIlj9RSFJKkDABkN4a02LIF8akAaVCdDtnPwMWrtPMdjA1UEfSNc9Ovpe3m4WHoVZ2%2B7tOelKG3GkT5x%2FYLP1wQmj%2BDCI0fQQ9QSeAuevwzpAS8y2Ggb6oZghLii%2F23EWCxYRMd9Or%2BbkseLFrBfLn253S3dVq0Bte4RevU3LTQkj2caLS2GJQOEgKrLbmdn5t6ioRDT6nbrnf2YxhdcXf50dpAQRf5c%2BVL0h%2BANNax%2F0hZTeJs4nFhbTIYsUCEKI3UbfapKzlARMheNCm5%2FFrFPjYzBw8icfU7zMU18hhJMN%2Bhufb0VHJi3b%2BcsBkwfYXqihS8PPMPXGEcy78Vcwn2%2FiiwhSnwm21p4WYl3aQzWEcsmGDL11s3%2Fj1MH68oE91IhtuWaekhFdZQaqYm6Z%2F5D3AeDpqO1cNXCnDoMi%2F1AfQkaYMvwGXML6RxMkGOqUBCbQiTe707O%2FxvaRinm7EYTCDEgMOVSYmXrGCD4dG2vyb8qNCesOVjWxgi1BES0F5J8BtSmpUNBSqCcZmOfnj6KvGfTZOkV3On3UK9W1S7uSWKEzkCUSdH%2BEwCe3mBzc3Dgr4%2BJ%2BtIzirCiZ4M5r3Q51hom4tNF54sXdifAZzsdJsNAmBPUfr2sp6WE%2BynxMs7vyd25%2B6r8uVEEkl4BEDivSwU7nc&X-Amz-Signature=f3249a2e37109a81ba339e616ec8938407467bec649d60e753429d4c824e112e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

