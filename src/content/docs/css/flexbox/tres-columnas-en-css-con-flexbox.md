---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4C36WCB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVuGGlb8QvIw%2FPo9BuRjw%2B6qt8ySQR3%2BFo9XgF9KUkAiBogLmEeacWrMNnCiYa58evikGNprvxs1%2FDD27ANcdV9CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGsZYgN%2FHQox31i2jKtwDJ%2BbLX9tu9SJ2nhSx7Y887b5KTSH3OFD%2BoGiIY5nfBQOrrADfAmAZBEaSdEMULrbYQV0s9rX1GBp7cEnaa16LkQHaIiVVyIZXm9N%2BIYv8woEo%2BbopuiO1FXBjASeoAMDjLQPf%2FIBlux%2FDbU71rF%2Be7lEA84CUNG4hSZgZXKVWIMaYzkfPMVxlrcJc%2BlUOrVoNgtJrm3ld4WyOCXXSr8d59QPRd38GtTjUDIUakx4P6qG4Sc3%2B1a2GgZ1Ov%2F%2BVZm97GPxWn5F%2BTmknidw3cvW2TPEnZNwHRxr7RCO0teR7Fd96Duk3qYjS1zSQKEyT3UKAc%2BlWFHc%2F82EtDLczMHW8fnhMnT1EjKhXgbZ206z8xPjOTY1xRaCD%2FgdFL7%2FbeD0bckz0EymCjpGZS3%2BVYtD76271IK3IqUw2bUGINM4YYUFRHDUc%2BuLTwlprT3W9%2FeGjL8dIeD6IQJz6pgmj2NHIKjb%2B%2FN%2FdIwO2x7eU%2BXVFgiGdd2oHfzublyE%2BEL06zXc3HFVnNQPMKF9KIcN9ANkV%2BolnzQMUdYbLbUXpjYZ4Q10dFPgnymUZarahM7kqXB9oH2E10ul1bYqLHYAv5n3FuDGg5baV6sjTyMq%2FRXYztVhs1%2B8h6%2FNXXKsHNlkwnJnVyQY6pgGxCLKt1cFN%2B5Bp1dWnWsE2QW9nFnHDS2UphaYmH5hfNvYU8uyuUf7engrEsyN7%2F3fpMlP1hRfnNvS0blX2MKbAPA43oRb%2FJYgZuktLXXVx7p59hUTuvS3fTn1IdhEVm%2Fz85PCE6g3TVVQn%2BmEJyyAZCst8uzXDhRNiqokiOIUdePFSrmrVs8JfKhIVmKOtPWRtlbdhrHG8GI%2Fa16zqfUfsUWhXCUQH&X-Amz-Signature=7e5b4013d8013b203a643a936a636eebe1ffb2f2da858516dc789e20f057178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4C36WCB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVuGGlb8QvIw%2FPo9BuRjw%2B6qt8ySQR3%2BFo9XgF9KUkAiBogLmEeacWrMNnCiYa58evikGNprvxs1%2FDD27ANcdV9CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGsZYgN%2FHQox31i2jKtwDJ%2BbLX9tu9SJ2nhSx7Y887b5KTSH3OFD%2BoGiIY5nfBQOrrADfAmAZBEaSdEMULrbYQV0s9rX1GBp7cEnaa16LkQHaIiVVyIZXm9N%2BIYv8woEo%2BbopuiO1FXBjASeoAMDjLQPf%2FIBlux%2FDbU71rF%2Be7lEA84CUNG4hSZgZXKVWIMaYzkfPMVxlrcJc%2BlUOrVoNgtJrm3ld4WyOCXXSr8d59QPRd38GtTjUDIUakx4P6qG4Sc3%2B1a2GgZ1Ov%2F%2BVZm97GPxWn5F%2BTmknidw3cvW2TPEnZNwHRxr7RCO0teR7Fd96Duk3qYjS1zSQKEyT3UKAc%2BlWFHc%2F82EtDLczMHW8fnhMnT1EjKhXgbZ206z8xPjOTY1xRaCD%2FgdFL7%2FbeD0bckz0EymCjpGZS3%2BVYtD76271IK3IqUw2bUGINM4YYUFRHDUc%2BuLTwlprT3W9%2FeGjL8dIeD6IQJz6pgmj2NHIKjb%2B%2FN%2FdIwO2x7eU%2BXVFgiGdd2oHfzublyE%2BEL06zXc3HFVnNQPMKF9KIcN9ANkV%2BolnzQMUdYbLbUXpjYZ4Q10dFPgnymUZarahM7kqXB9oH2E10ul1bYqLHYAv5n3FuDGg5baV6sjTyMq%2FRXYztVhs1%2B8h6%2FNXXKsHNlkwnJnVyQY6pgGxCLKt1cFN%2B5Bp1dWnWsE2QW9nFnHDS2UphaYmH5hfNvYU8uyuUf7engrEsyN7%2F3fpMlP1hRfnNvS0blX2MKbAPA43oRb%2FJYgZuktLXXVx7p59hUTuvS3fTn1IdhEVm%2Fz85PCE6g3TVVQn%2BmEJyyAZCst8uzXDhRNiqokiOIUdePFSrmrVs8JfKhIVmKOtPWRtlbdhrHG8GI%2Fa16zqfUfsUWhXCUQH&X-Amz-Signature=144bc33898c5f71cf676b49902687f97907fa59c1af76a600b6042ca87b3855d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

