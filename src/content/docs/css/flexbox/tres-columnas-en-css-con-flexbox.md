---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MEJYZW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0jDDFShmiDonUJ%2F96f0TyDEHM3hPGauC2BD%2FHZpHvwIgLFepTOuGcBJKy%2BWDI0EHXx%2Bj7Lf3%2Fvd4Pn3pDH3uYGUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaqzVlKnlbFme3dZyrcA2PBr%2F0wrCcAqcK7bHbnQVl%2Bjx3HwaNiHG9JHVs8k%2FbWZxaa4vWlTXz5wgM6bztgGig%2F64ZU%2B3Rip8rU7j7BN4NZx9naYlCwU9u99imQTUmJHCU6byJ7A7uovkvvLdiNo3jt4zClHJg%2Fzh7%2FUZeRPK62EhIXq7iO7fn8bWSc4hEdsh92bd3EHzicajFRm4LCJpX1SOt2GSCtWWbBJJuSQxP9hPOQFS3bHy4HnexQ5HZHUzqhegJtHbKa9dEo0mS%2BOLCGF9%2BzCNyOHAGi66C5s8sc0mjCd8vY95Ue2Cwi4XUcjtV83ynIJqi%2FrjiYsArpJUFVDSluAKjDrIo1Getbv3T9bsveEbPkbrrSi85gECEaMNQhe%2FHQ3r46%2BoagUe2f6FQyKaFc0h%2FC4Wd7QpclJiaEKc9F1ZL6%2FREbgHh6hBCQ55ksaRC4IDFMkOjwJGcJlITFv0s%2FikzNltBgygyW8xkz2vaczzeeNhzZH%2B4uWJfkQsIfwi5%2Bv2tcTWZARMxuuCSnqyxf9pZjFW%2BU%2BreZ6%2BA%2FSPUNv%2BPxn%2B%2Bj3FV8JtVhQAjXudUgeJVBP0aQH7OVawvr0cRdy8lrpvsaV9aqn5bEehfbeOvu5Y2zGnW8R3XUlxBUsr8DdhxPP7hsMPOl38kGOqUBFPNqkY4poUTuy8aj4ZOY7V5UTs7BGzzL7K7JrIBQktepok8APImwzmTQJPCEq%2BZ2HyiiVMBpgzVO7iHdwvW%2BRxmzz3dd67uoDt8E0aLqaAic2rVjt4Zu62Bkwc87552U%2BGp4E4MwAh6wExpIfQMwyzf4wziZgiOeQrTuB7zIhNfv%2BLlwu3YzDASBElhRTaA2vcFUDbZ0EP%2BJygRKPIuhxCfD26I6&X-Amz-Signature=35114454bc388b08fcecbaa370d076704e1dcff06bac882dbefd43c6a721fc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MEJYZW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0jDDFShmiDonUJ%2F96f0TyDEHM3hPGauC2BD%2FHZpHvwIgLFepTOuGcBJKy%2BWDI0EHXx%2Bj7Lf3%2Fvd4Pn3pDH3uYGUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaqzVlKnlbFme3dZyrcA2PBr%2F0wrCcAqcK7bHbnQVl%2Bjx3HwaNiHG9JHVs8k%2FbWZxaa4vWlTXz5wgM6bztgGig%2F64ZU%2B3Rip8rU7j7BN4NZx9naYlCwU9u99imQTUmJHCU6byJ7A7uovkvvLdiNo3jt4zClHJg%2Fzh7%2FUZeRPK62EhIXq7iO7fn8bWSc4hEdsh92bd3EHzicajFRm4LCJpX1SOt2GSCtWWbBJJuSQxP9hPOQFS3bHy4HnexQ5HZHUzqhegJtHbKa9dEo0mS%2BOLCGF9%2BzCNyOHAGi66C5s8sc0mjCd8vY95Ue2Cwi4XUcjtV83ynIJqi%2FrjiYsArpJUFVDSluAKjDrIo1Getbv3T9bsveEbPkbrrSi85gECEaMNQhe%2FHQ3r46%2BoagUe2f6FQyKaFc0h%2FC4Wd7QpclJiaEKc9F1ZL6%2FREbgHh6hBCQ55ksaRC4IDFMkOjwJGcJlITFv0s%2FikzNltBgygyW8xkz2vaczzeeNhzZH%2B4uWJfkQsIfwi5%2Bv2tcTWZARMxuuCSnqyxf9pZjFW%2BU%2BreZ6%2BA%2FSPUNv%2BPxn%2B%2Bj3FV8JtVhQAjXudUgeJVBP0aQH7OVawvr0cRdy8lrpvsaV9aqn5bEehfbeOvu5Y2zGnW8R3XUlxBUsr8DdhxPP7hsMPOl38kGOqUBFPNqkY4poUTuy8aj4ZOY7V5UTs7BGzzL7K7JrIBQktepok8APImwzmTQJPCEq%2BZ2HyiiVMBpgzVO7iHdwvW%2BRxmzz3dd67uoDt8E0aLqaAic2rVjt4Zu62Bkwc87552U%2BGp4E4MwAh6wExpIfQMwyzf4wziZgiOeQrTuB7zIhNfv%2BLlwu3YzDASBElhRTaA2vcFUDbZ0EP%2BJygRKPIuhxCfD26I6&X-Amz-Signature=5d87a9461bcb2d324d2c2ba3e1b0a24bfd5e0e8121b87ad1065c52fee62f21c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

