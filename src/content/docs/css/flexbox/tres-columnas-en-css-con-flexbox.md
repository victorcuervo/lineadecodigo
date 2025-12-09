---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE57RN3E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClLuwKn7kHwqqfCon7WsJCqkn1bphcdaEj31FOZud5PAIhAN7zARYFstG7bbHvnrWaRDL7KoU2xmiAVW95EdYG8qfPKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf88eTivvo24PK9Bwq3ANzs6x5rjzUvYnRvrThiL5c1AlWSeFE17NfkcaJs6MpqCXscVV%2FQWGTZnVnbUAIDoPKQ%2BDnURDG2CjZOe8E1Zcf82A%2F6lozxc71ERwabPFTf4xAKrtCPFTbKgrqr3PVgBr%2BU3cLT19%2B1F56aDRVGdTfNIpgOy1a%2FogbICtobfSoA9D9hfIy3wVUuFU2HCgfUi7PCE3Dnt2DK7j78xsaAcWOOXsp%2BEnBHukpqdBqWLcWy8El8fnzXn6y9Sr0pP%2B5v5%2BYgch9GEneMuEPZQ3wXFrMxB%2FZkE7K06Mf1AUUY7G6XnHDZIxJab7izbCa72E8dxBKyr5lGf%2BMYzvlM0RfioFI%2BNVsNn%2FYy7hkS5HBCm2GVAv1JSto%2BxW1BoWPxkvoKfcj3nb28PjcF8Kb%2BwVMiZG%2BMAjCEuP7BTe5BqJ11HW3WXncM9yoOCT4Pz2N2w4bI5AlWWrxSgkgO%2BzbILzAQWVFINXTOr0q2Gd9myzDmjkp73gHuCQrM7hjfRwNkTIxlKSSAAtPmB1vhT5JcMmZ3RMzKsivlOXsQJdcm%2BkiRlm2cdvUrY1wTeXmftnyb0HRv3uLK7evv4J9wmotM5MWm%2BIvx9cmK6%2FzhB2KP9nyAzTjNqQJVDcZhFoq%2Bk0WzTDDkN7JBjqkAaFWj%2BxR5yOSA3gjuvOmeiNaKMJnfK4G%2BxuRm1m17d3Us0NLMit%2Fk4YOm0V6nb9L8lRmgnm1xRGRAF508sThakwXFpAupK5BUHL8ZK2s%2FV37oCqaTOX0LmgiQVFT5Dp00vlv4Plr5goXMPdgCQkMmZOBqsYFAbFKAEVqSqE7pHSw3sOvW7wfFgOXOiYdKJqsK12%2FF%2B06LfRwP3s7%2B7pe75GJM9w3&X-Amz-Signature=cdee2a90039ae1958063ace11897d5efd7f61ca9aacae065914555f74718c975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE57RN3E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClLuwKn7kHwqqfCon7WsJCqkn1bphcdaEj31FOZud5PAIhAN7zARYFstG7bbHvnrWaRDL7KoU2xmiAVW95EdYG8qfPKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf88eTivvo24PK9Bwq3ANzs6x5rjzUvYnRvrThiL5c1AlWSeFE17NfkcaJs6MpqCXscVV%2FQWGTZnVnbUAIDoPKQ%2BDnURDG2CjZOe8E1Zcf82A%2F6lozxc71ERwabPFTf4xAKrtCPFTbKgrqr3PVgBr%2BU3cLT19%2B1F56aDRVGdTfNIpgOy1a%2FogbICtobfSoA9D9hfIy3wVUuFU2HCgfUi7PCE3Dnt2DK7j78xsaAcWOOXsp%2BEnBHukpqdBqWLcWy8El8fnzXn6y9Sr0pP%2B5v5%2BYgch9GEneMuEPZQ3wXFrMxB%2FZkE7K06Mf1AUUY7G6XnHDZIxJab7izbCa72E8dxBKyr5lGf%2BMYzvlM0RfioFI%2BNVsNn%2FYy7hkS5HBCm2GVAv1JSto%2BxW1BoWPxkvoKfcj3nb28PjcF8Kb%2BwVMiZG%2BMAjCEuP7BTe5BqJ11HW3WXncM9yoOCT4Pz2N2w4bI5AlWWrxSgkgO%2BzbILzAQWVFINXTOr0q2Gd9myzDmjkp73gHuCQrM7hjfRwNkTIxlKSSAAtPmB1vhT5JcMmZ3RMzKsivlOXsQJdcm%2BkiRlm2cdvUrY1wTeXmftnyb0HRv3uLK7evv4J9wmotM5MWm%2BIvx9cmK6%2FzhB2KP9nyAzTjNqQJVDcZhFoq%2Bk0WzTDDkN7JBjqkAaFWj%2BxR5yOSA3gjuvOmeiNaKMJnfK4G%2BxuRm1m17d3Us0NLMit%2Fk4YOm0V6nb9L8lRmgnm1xRGRAF508sThakwXFpAupK5BUHL8ZK2s%2FV37oCqaTOX0LmgiQVFT5Dp00vlv4Plr5goXMPdgCQkMmZOBqsYFAbFKAEVqSqE7pHSw3sOvW7wfFgOXOiYdKJqsK12%2FF%2B06LfRwP3s7%2B7pe75GJM9w3&X-Amz-Signature=fb6ef9e5e8b6951c241fa0e408094f6f64cd8741d7ebe7bca1c6aef8015dc885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

