---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7RDPBV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDE3pQB%2FOuKgEp%2FYZWztVy%2FViKPHL%2FaA2gWRzwtv0n8mgIgf1Py%2F8326GYfDMoCj7%2BeLPcOUfg3lHIIrh00VejLp6Qq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBJLeeA9WWK7dxYGICrcA4UN%2BIe2pmfsKuFFAyUeVHZW0lWTqOOOAryJ%2FAQyHXK0Zn1ixKlHsRYGtUPdStz%2BtBfNSjSa6cmIPNwrMRBrh7HG3nUrZgRnQMZMzIlDEW9Qvj1L%2FL3zDvzZTEbVld9xCylVmNpBozryQ%2Bof7R4doBI%2FWBmUAF9uonxxt8emqU3aOWQXcL50kSVFFNNQpV9oER6jh3AwoW4DXf3sc8XawzQKq%2Foc6psGYVDroZdFbk8VenxXROMmCPVLs6xhYgVX370FoT1DcGRmH6Tas%2FL9%2BLbiA8CtrN4SktA2QKXuM7UYc98RisxGcEAe0ojpl1lMPzpKaaf3VIo2DH1kQWc66RiyEO%2BTEHNnAAn7LlcsISQmj4Yu74hJ2dfbXKL2cP5rKhSxFgPdjz8Vz7wi6byIsxP23MWaZBYkZ0XqGYPAqePLawu7BnM0t2VRVZqNRBhQNp2tOvENyGvDDRfUXT11f6OU%2BYLCSztuducKOJueVF1tORRUhLTae2uwVseMNsEDuNK3IFH%2F2MgRRkihi3T7qvRXLeV0fzlJgjX0IXESHGqYAgc8qTxBgwqKJp1hgS0iHtmJzIyCI%2BtRTfAP0xqjcImqj4YqM5WsDhWT9uv618ERLn3Elyea28sSU1J4MI3LxMkGOqUB1xz8SlJiJOupza0DPlQb6PBp36pNs4WnFpxRMWAvliK5WC3HgDhoMqC1Bsh8VBtjlbFCABm0CLeSnK3wKhKNWg7vjzYjKDCxn0Q5imkFaDNs96PjeGElKllhwaFfzl7aWYjYkwfKhly7FqNSHZE6%2FXe719vLldECKx87TaD%2FauzCy3QWkt7q6qZBDu8j3cJTNHVZTJMvkn%2FiCIooY8xjwmKdtEW2&X-Amz-Signature=ed36b43038a944af1abeda67784b50ef02fd680582d3cd892265cad5e4d2956c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7RDPBV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDE3pQB%2FOuKgEp%2FYZWztVy%2FViKPHL%2FaA2gWRzwtv0n8mgIgf1Py%2F8326GYfDMoCj7%2BeLPcOUfg3lHIIrh00VejLp6Qq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBJLeeA9WWK7dxYGICrcA4UN%2BIe2pmfsKuFFAyUeVHZW0lWTqOOOAryJ%2FAQyHXK0Zn1ixKlHsRYGtUPdStz%2BtBfNSjSa6cmIPNwrMRBrh7HG3nUrZgRnQMZMzIlDEW9Qvj1L%2FL3zDvzZTEbVld9xCylVmNpBozryQ%2Bof7R4doBI%2FWBmUAF9uonxxt8emqU3aOWQXcL50kSVFFNNQpV9oER6jh3AwoW4DXf3sc8XawzQKq%2Foc6psGYVDroZdFbk8VenxXROMmCPVLs6xhYgVX370FoT1DcGRmH6Tas%2FL9%2BLbiA8CtrN4SktA2QKXuM7UYc98RisxGcEAe0ojpl1lMPzpKaaf3VIo2DH1kQWc66RiyEO%2BTEHNnAAn7LlcsISQmj4Yu74hJ2dfbXKL2cP5rKhSxFgPdjz8Vz7wi6byIsxP23MWaZBYkZ0XqGYPAqePLawu7BnM0t2VRVZqNRBhQNp2tOvENyGvDDRfUXT11f6OU%2BYLCSztuducKOJueVF1tORRUhLTae2uwVseMNsEDuNK3IFH%2F2MgRRkihi3T7qvRXLeV0fzlJgjX0IXESHGqYAgc8qTxBgwqKJp1hgS0iHtmJzIyCI%2BtRTfAP0xqjcImqj4YqM5WsDhWT9uv618ERLn3Elyea28sSU1J4MI3LxMkGOqUB1xz8SlJiJOupza0DPlQb6PBp36pNs4WnFpxRMWAvliK5WC3HgDhoMqC1Bsh8VBtjlbFCABm0CLeSnK3wKhKNWg7vjzYjKDCxn0Q5imkFaDNs96PjeGElKllhwaFfzl7aWYjYkwfKhly7FqNSHZE6%2FXe719vLldECKx87TaD%2FauzCy3QWkt7q6qZBDu8j3cJTNHVZTJMvkn%2FiCIooY8xjwmKdtEW2&X-Amz-Signature=3a374b1850083fd83c42987eee5645a356d1b4dbcc95bf2af2fb22ebcdf2939a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

