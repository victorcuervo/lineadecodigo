---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMT3BYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBahMzLYnt57KkN9BeIzg1RzMG4YeM5uSxn%2BP4mmlLlsAiBDWLeQnlh1MV%2B9tbMM84yf1IWJiu3Q%2FOxCYisUnY9hkir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMf1B%2FiUeCEPgt8N98KtwDecgOi81tH2T%2Bv811oOVOb9Djwym3159nI9AWqXdacpq%2FfA6sJFR0xU0RIRqItl2%2BkYz%2Bx4LqIdfvMHzwybxNCWVL63fiBy6flEBDQM3tIJFg0KQ7jbw3t9w2ObRfv0oaOl80%2B4NdokfmJ%2FndFSCElLGatnSVuBb9%2B6ii%2FXK2vMk8Y%2By7dNa9XLYqCljIHfSI7OkWGmRh2BmXfQfo36CVk8%2BpI1db4i4wUE4ar6POfYNV4BPR%2B91PJDFs7QJlFTISMb1%2B9n5uoLn83C3jF4xlXWINcTar%2B3IRI%2F5oRpkG%2BWIGuL0yspu9EMyMQUmsVED2uOCbu6a4yRp3joXNGzNWGKfRPTp4A3IWDYTZA9rlSx7E9jPVVxA99HFNAv5MPwB0E5Tuvatr0b372UycUcKSZXnAeOE2SRfFjIbqjLetQCqhpCq3imu8S7659M8eq6CHqKMBLVMk%2BaYye7ukzhjZ7MoIaAWpO%2BTIWdmbNsJyJ%2Boeij9AhZpsQpQYXGJVYfyj%2BnYBslb6B7aH7E1iRJLdls7zNEfRDcHPCRjaN%2BegftjQ2msNKAjigGRMPNCqYS4E60oVdTc%2FtCR2l%2BtflbViFQzFJbbcGJOEqcZplrhRvxFAlwoBRtvxDJQFHskw2%2FPDyQY6pgEwW8OcZuKVYotEwO1T1EiHDTkfHagqEaGfmGWOVpdTfGYX2xjDgF3L2LGVt1uJDJr6QNPqy3Pe2n9Rrb1A7gbk7tRSHgZJVwc%2F%2FoZaJPA2OjWm3EhYQQ62LEq5CG7DCm0oKHko9J0qajlwlgNqRlu6Y2E68GrBTXvG49Aske3QBre9RJd2l2Fp1XQkIHrj4v8q3itIOjb2S0cEyjniveQ3qNtS2kYB&X-Amz-Signature=412dba1164c0ea7945d5fde6ea8950cd00fe54b12f38ea070c4d293b1aef4a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMT3BYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBahMzLYnt57KkN9BeIzg1RzMG4YeM5uSxn%2BP4mmlLlsAiBDWLeQnlh1MV%2B9tbMM84yf1IWJiu3Q%2FOxCYisUnY9hkir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMf1B%2FiUeCEPgt8N98KtwDecgOi81tH2T%2Bv811oOVOb9Djwym3159nI9AWqXdacpq%2FfA6sJFR0xU0RIRqItl2%2BkYz%2Bx4LqIdfvMHzwybxNCWVL63fiBy6flEBDQM3tIJFg0KQ7jbw3t9w2ObRfv0oaOl80%2B4NdokfmJ%2FndFSCElLGatnSVuBb9%2B6ii%2FXK2vMk8Y%2By7dNa9XLYqCljIHfSI7OkWGmRh2BmXfQfo36CVk8%2BpI1db4i4wUE4ar6POfYNV4BPR%2B91PJDFs7QJlFTISMb1%2B9n5uoLn83C3jF4xlXWINcTar%2B3IRI%2F5oRpkG%2BWIGuL0yspu9EMyMQUmsVED2uOCbu6a4yRp3joXNGzNWGKfRPTp4A3IWDYTZA9rlSx7E9jPVVxA99HFNAv5MPwB0E5Tuvatr0b372UycUcKSZXnAeOE2SRfFjIbqjLetQCqhpCq3imu8S7659M8eq6CHqKMBLVMk%2BaYye7ukzhjZ7MoIaAWpO%2BTIWdmbNsJyJ%2Boeij9AhZpsQpQYXGJVYfyj%2BnYBslb6B7aH7E1iRJLdls7zNEfRDcHPCRjaN%2BegftjQ2msNKAjigGRMPNCqYS4E60oVdTc%2FtCR2l%2BtflbViFQzFJbbcGJOEqcZplrhRvxFAlwoBRtvxDJQFHskw2%2FPDyQY6pgEwW8OcZuKVYotEwO1T1EiHDTkfHagqEaGfmGWOVpdTfGYX2xjDgF3L2LGVt1uJDJr6QNPqy3Pe2n9Rrb1A7gbk7tRSHgZJVwc%2F%2FoZaJPA2OjWm3EhYQQ62LEq5CG7DCm0oKHko9J0qajlwlgNqRlu6Y2E68GrBTXvG49Aske3QBre9RJd2l2Fp1XQkIHrj4v8q3itIOjb2S0cEyjniveQ3qNtS2kYB&X-Amz-Signature=f4bf6133ad58cbf83c06b366884a2e4765a8f4c79f756a5ba197abcbccf29266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

