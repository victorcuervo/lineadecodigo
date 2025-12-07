---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA7CDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwV9vyOSZ6iouVxe7%2Fd4lw4pHWRN47JXUmH6RxhFwF3wIhAP9Tgtwnofwv4TyZd2ZOYOXyy331%2BXbfJ0N3TeH7ifFCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDqO4rLBzsbGPJBGQq3AP1TbB0nGJj1z9DB5mbXq%2Fi0EvsSh4zQbsBfPcLg92XojnTz1kmOB%2FYBQ7xeehJfoF25lj3yaj6XuwrtHaW17wzH9Y79hmmQzOkmNWMsEjpInx%2BmYBIX0jMsfFmqZbQQq5GiGYuvqAbMF0sSPIks9WvzY%2FMEn%2FT2j9%2F1ubN6cChVn6Rz%2FU%2Furfyu8FDzxfwAwp07GQniSeE6b1cA5mfIBFN80pE2aFQ%2BMoJ%2FKzItlNtzYo6%2FuOAtB7zX%2B0YB1nT06m2PADX9jGMflZoX5uf97Lsva6Kj%2FiIblHU8UQaZ%2BUx75oeTjUSXfmWLs8m4eAlQ%2B1K7p%2B%2BTz%2B%2BtCyLVwPuytygtyFUmaK86yCTHa%2F72BfXBwWlvARwnk%2BJUYY6dRAPWgrmDvt5LZBbo6Z1FPNJ49vOENOOf6sDTPZrlH%2BPPTWVEUIdSSySCPHAleA5rXd2jsshxE6QV0QpzmjLCUDJ4r%2B8%2Fk4OL%2B3ViPURQa7xyQ9zlMZ1XFjDyyPDMRhFuIbGzbprvZxCt8WMGeSVHsK501nH%2FAzp9vJpDs14zxSQ82a6L0vK1MW8XAuv5YF46rgmwU1ao34WKolRKePgGTbdy82712bYWLEe0sym9zm7lGsBJM21Gh0ICJNkqqhxvTC8oNTJBjqkAa%2BFQIrU1uhAndtYZziLcZlUmfYHJ4va8eNpEkAPdh2KVIM3jJkHTJKKYOMtIcWENrv5W8L1%2FRFdX1invNrcANoIrVD9yfr5rP4O%2B89uryp4cbaivCi%2Fw7YIsKq8oOlgJ2MBSt7TSuA2WU8V%2FYfWrh%2BH%2BYglQsjm11nEvW4DyUMm4s3d%2FSUSNiCUKUARK13X6WfF%2Bgy8RAy0GUK9wusm7OHnr7Gm&X-Amz-Signature=ea872e9b4479c383d31399ac0c3e2657f91dc1771a67a5f4abe6da5f1da7da93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA7CDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwV9vyOSZ6iouVxe7%2Fd4lw4pHWRN47JXUmH6RxhFwF3wIhAP9Tgtwnofwv4TyZd2ZOYOXyy331%2BXbfJ0N3TeH7ifFCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDqO4rLBzsbGPJBGQq3AP1TbB0nGJj1z9DB5mbXq%2Fi0EvsSh4zQbsBfPcLg92XojnTz1kmOB%2FYBQ7xeehJfoF25lj3yaj6XuwrtHaW17wzH9Y79hmmQzOkmNWMsEjpInx%2BmYBIX0jMsfFmqZbQQq5GiGYuvqAbMF0sSPIks9WvzY%2FMEn%2FT2j9%2F1ubN6cChVn6Rz%2FU%2Furfyu8FDzxfwAwp07GQniSeE6b1cA5mfIBFN80pE2aFQ%2BMoJ%2FKzItlNtzYo6%2FuOAtB7zX%2B0YB1nT06m2PADX9jGMflZoX5uf97Lsva6Kj%2FiIblHU8UQaZ%2BUx75oeTjUSXfmWLs8m4eAlQ%2B1K7p%2B%2BTz%2B%2BtCyLVwPuytygtyFUmaK86yCTHa%2F72BfXBwWlvARwnk%2BJUYY6dRAPWgrmDvt5LZBbo6Z1FPNJ49vOENOOf6sDTPZrlH%2BPPTWVEUIdSSySCPHAleA5rXd2jsshxE6QV0QpzmjLCUDJ4r%2B8%2Fk4OL%2B3ViPURQa7xyQ9zlMZ1XFjDyyPDMRhFuIbGzbprvZxCt8WMGeSVHsK501nH%2FAzp9vJpDs14zxSQ82a6L0vK1MW8XAuv5YF46rgmwU1ao34WKolRKePgGTbdy82712bYWLEe0sym9zm7lGsBJM21Gh0ICJNkqqhxvTC8oNTJBjqkAa%2BFQIrU1uhAndtYZziLcZlUmfYHJ4va8eNpEkAPdh2KVIM3jJkHTJKKYOMtIcWENrv5W8L1%2FRFdX1invNrcANoIrVD9yfr5rP4O%2B89uryp4cbaivCi%2Fw7YIsKq8oOlgJ2MBSt7TSuA2WU8V%2FYfWrh%2BH%2BYglQsjm11nEvW4DyUMm4s3d%2FSUSNiCUKUARK13X6WfF%2Bgy8RAy0GUK9wusm7OHnr7Gm&X-Amz-Signature=8f22f08c2b8923ee68ac2be994a5079a5bc5c72ff4534ce90b6da09e6db8e77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

