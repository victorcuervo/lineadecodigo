---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPK7XSQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDaMGhv3k9abMUAUZHq%2FghO4vXsMO62udpfIfCAHJbYHAiBt1mo%2BZ4ZBxv6A6djtLs1y2qcHlj4Ce2xuVD98v4UQnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMxcLSVE7hosnGWV8AKtwDNbg0Y43dHjdfr5JpzxpVFM5sTO3ghA8n7aLe7leksADGaMiFWP9xDKfXS1Q8kxdZ3%2Fsj4twqcg3uYRbEd4I5NouRinEB2BcqLEZeA7ETIjx5MHlehr%2Fjyx7fFq1mxML0il8s1KanXnZ%2BUZ3%2FxLErMoNy4vjla5U19F4C3IgRpMttpNVxZIDQj7%2BZyoUAmD%2Fukw9VHOo4kw9CKYJKw7lHzVx2gEAjY2Nb2ZZ8%2FFCgRzSgZJ7vQH5XgQKnUUXAfsEjC55aCLoS0JYTM5SecK5b5f4uDh%2BVUfyd0g6Wl%2Ftesn3D7FkuWweA9XEogq5IKgyfYY1b0DcFbwpnQnDk5035B0eQ5FBidvTBNIW8dPSFusC5I46hhlgw04YnxrjdjKEWr%2Fx9c8%2B3BIGU%2F0wlpuaZzNr4SSrnNgTNM0dz%2Fyx5ZfYsaMezNY4ewkFZP9tJynQYpSCPxUZb1EQ6aiB0d23gow9HxAtUh4veLe6v0fXv0yuQs1wb1QGrMucDTtnX4lAM5YyVoBZpKthEffQ%2F4P6JQBHP0gkuJha%2Bwv02KTdQW3gNin0Y82z1kd1X9aDl3DnVKG6MGiK12IYekyaXlMPPNojWk7C4Vo8sTitQLwU6%2BpcXR6XPM1C3H82Wu3gw0PLDyQY6pgFxbzaShNaqMhHX3CLAuVc6DS2aVMNULIgvm9eYWO1XNiSpR4WMa2A6E3bov1wafxzybdxJPtL%2BnDmaeTsGukoI8w5V9PurvHwh3Axp1LEjMvhkoBrjhdZty0k5B88gpsiUbIINBVX8ZkhYm2Ou%2FH75AfBBC1%2FY%2BQ9Wc9QI5dR483g3KsS3ef%2BHiK5fjAt1TNobHM6kooaKU3QPVdwHil%2ByVYBa1Z0H&X-Amz-Signature=c45d660e002e91257519fec13885853acb3d0e663e7b54bb33accd473baf8f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPK7XSQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDaMGhv3k9abMUAUZHq%2FghO4vXsMO62udpfIfCAHJbYHAiBt1mo%2BZ4ZBxv6A6djtLs1y2qcHlj4Ce2xuVD98v4UQnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMxcLSVE7hosnGWV8AKtwDNbg0Y43dHjdfr5JpzxpVFM5sTO3ghA8n7aLe7leksADGaMiFWP9xDKfXS1Q8kxdZ3%2Fsj4twqcg3uYRbEd4I5NouRinEB2BcqLEZeA7ETIjx5MHlehr%2Fjyx7fFq1mxML0il8s1KanXnZ%2BUZ3%2FxLErMoNy4vjla5U19F4C3IgRpMttpNVxZIDQj7%2BZyoUAmD%2Fukw9VHOo4kw9CKYJKw7lHzVx2gEAjY2Nb2ZZ8%2FFCgRzSgZJ7vQH5XgQKnUUXAfsEjC55aCLoS0JYTM5SecK5b5f4uDh%2BVUfyd0g6Wl%2Ftesn3D7FkuWweA9XEogq5IKgyfYY1b0DcFbwpnQnDk5035B0eQ5FBidvTBNIW8dPSFusC5I46hhlgw04YnxrjdjKEWr%2Fx9c8%2B3BIGU%2F0wlpuaZzNr4SSrnNgTNM0dz%2Fyx5ZfYsaMezNY4ewkFZP9tJynQYpSCPxUZb1EQ6aiB0d23gow9HxAtUh4veLe6v0fXv0yuQs1wb1QGrMucDTtnX4lAM5YyVoBZpKthEffQ%2F4P6JQBHP0gkuJha%2Bwv02KTdQW3gNin0Y82z1kd1X9aDl3DnVKG6MGiK12IYekyaXlMPPNojWk7C4Vo8sTitQLwU6%2BpcXR6XPM1C3H82Wu3gw0PLDyQY6pgFxbzaShNaqMhHX3CLAuVc6DS2aVMNULIgvm9eYWO1XNiSpR4WMa2A6E3bov1wafxzybdxJPtL%2BnDmaeTsGukoI8w5V9PurvHwh3Axp1LEjMvhkoBrjhdZty0k5B88gpsiUbIINBVX8ZkhYm2Ou%2FH75AfBBC1%2FY%2BQ9Wc9QI5dR483g3KsS3ef%2BHiK5fjAt1TNobHM6kooaKU3QPVdwHil%2ByVYBa1Z0H&X-Amz-Signature=be201af85c72271eb02392d6d16286845bb9fc398d2ad2af41ae45352ede0624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

