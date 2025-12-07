---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJSOFV7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp2G8CwG21hHfd78TicdvfnKVK4h1%2BRfv0dMWqMppO6gIgaP8XS7SUpRv8qoEzkSSKIRLc0XaDXHp1FGhSHKbQgnwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN74CcqtxnOAePPXSrcA1BmP47wNIAB3d8b68iJ2jSvFoGQjpaBDHOxqqk27p8Eu9t4u7NiKjxY%2FKSNBJY7BdpYKocuCeQoYIkNoY68OdEO9PX%2BWftrI30zqli6MTC0nGt0rEyI%2FQcLRrnciaoX%2BxD2pm7RZ3EOvOWA%2BGRGrbJJUHFPxvFIoSSR%2BwPI%2FsqjI%2FO1zmoc11%2BKH%2BwH5C5mNq4lYyxOcBBpKn1Km59T73rFm2fDi3CrtfNtDc35i85uySpdy4klQa4xzTuWI1UACQbBSVv8INq2DkMkDe86YI%2B5o4pboYcf3jMw%2FnXnar%2FHDs8q6is3%2BZ0SsjvjYxXb4XkxDVsgJgjWhyjv05mlOe2q1pqenlfw2WFRu6gWU4hWTqdQ1%2BMz0mcfLviQC91YYYZFXjX4S%2Br19CIFe1jP%2FH9PHwqcOcQKz45LJ9Oy3Y%2BwQRpJwWDdz1KIWbtBIv0fiYV6CnCY9iI%2BqMY3NkoESFYGvviwJqmRQTBWNN1gHoDFqXSme5SI3681OrRLk02O9T7dVvUg2wsJbKJa6XPVrKrtW8cWUVaeDkF86Hszqy7hHZHh9lnCxN3SVUWe6wsmowvYK2GMUnXCxsnJFW8oxWbsdjyIpexsTJ%2Fcs0Lw2YKZ4XL8d01piSf2AYPhMIHI18kGOqUB%2BPAQfCJ40xJ27wpw7wfB2QFH3rufeHWGL9BvEiNLF7onzrpQmWc2M0X%2BFH6FF02j6PA7NnaDl1om8TAyyh5nbMZ8MlUXvNlcC%2FagPp7Rt8c8Wmn%2Fu5mbPYYiShEaJPpBZbVP2x4kCL3BwPd1RFeRu9hYYqaK654MmOKXPn3Ov34Nhh1eu9F3Lxd1FVpKYmOCS8NNdBIiCWek2PhWoSX3KIBDZ09I&X-Amz-Signature=a6837f76250a03b0b7a85c1ee9b92824df00260429d389f15d9f63844b4d637e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJSOFV7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp2G8CwG21hHfd78TicdvfnKVK4h1%2BRfv0dMWqMppO6gIgaP8XS7SUpRv8qoEzkSSKIRLc0XaDXHp1FGhSHKbQgnwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN74CcqtxnOAePPXSrcA1BmP47wNIAB3d8b68iJ2jSvFoGQjpaBDHOxqqk27p8Eu9t4u7NiKjxY%2FKSNBJY7BdpYKocuCeQoYIkNoY68OdEO9PX%2BWftrI30zqli6MTC0nGt0rEyI%2FQcLRrnciaoX%2BxD2pm7RZ3EOvOWA%2BGRGrbJJUHFPxvFIoSSR%2BwPI%2FsqjI%2FO1zmoc11%2BKH%2BwH5C5mNq4lYyxOcBBpKn1Km59T73rFm2fDi3CrtfNtDc35i85uySpdy4klQa4xzTuWI1UACQbBSVv8INq2DkMkDe86YI%2B5o4pboYcf3jMw%2FnXnar%2FHDs8q6is3%2BZ0SsjvjYxXb4XkxDVsgJgjWhyjv05mlOe2q1pqenlfw2WFRu6gWU4hWTqdQ1%2BMz0mcfLviQC91YYYZFXjX4S%2Br19CIFe1jP%2FH9PHwqcOcQKz45LJ9Oy3Y%2BwQRpJwWDdz1KIWbtBIv0fiYV6CnCY9iI%2BqMY3NkoESFYGvviwJqmRQTBWNN1gHoDFqXSme5SI3681OrRLk02O9T7dVvUg2wsJbKJa6XPVrKrtW8cWUVaeDkF86Hszqy7hHZHh9lnCxN3SVUWe6wsmowvYK2GMUnXCxsnJFW8oxWbsdjyIpexsTJ%2Fcs0Lw2YKZ4XL8d01piSf2AYPhMIHI18kGOqUB%2BPAQfCJ40xJ27wpw7wfB2QFH3rufeHWGL9BvEiNLF7onzrpQmWc2M0X%2BFH6FF02j6PA7NnaDl1om8TAyyh5nbMZ8MlUXvNlcC%2FagPp7Rt8c8Wmn%2Fu5mbPYYiShEaJPpBZbVP2x4kCL3BwPd1RFeRu9hYYqaK654MmOKXPn3Ov34Nhh1eu9F3Lxd1FVpKYmOCS8NNdBIiCWek2PhWoSX3KIBDZ09I&X-Amz-Signature=cb790a0e821f75367eb6636d7d78af0d94fbea8f4b6d698e3f4e4f47f821dbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

