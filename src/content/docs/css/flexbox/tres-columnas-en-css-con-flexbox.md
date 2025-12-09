---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7ASUQB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2muIApyLMoSAlwPsIVxgLAGSzzC3e6Hs%2FNmDk9MbP1AiBTNME4XKdASZl7fiekrhhhXKUFVF4pf1DbvxHYbQmNUyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMibsFWHfuZ6zKZ8Z0KtwDtxwHPQe9rgjePeu2V0RLNgJVtZ0%2Bv0QdYg1y9uoub09gKroS6K13H1BMD9xRcIWx7xwONDRh2hF2RMPCB2XdHOshyAI06%2Fv2TgIPsxCN6nJYELfYP%2B6kZdZ8Z8s16cYydtZx1j8IvV%2BoOFUdCMmqdu1d1Zb2oD1chbbW0bszwlgKUi7SNKRXvb%2F%2FVk%2FSmUHP5whY5ZW5eGm0EemFIF3LEIzCvqdv5h9DwCvjhvFRX7nVHL406P4y6SSvIrp%2B5q%2BGaQJ4ImrJycrLmD0%2F%2Be80dC%2F3NPcesVjo0NXvijy2PFDRlrqxt4uja%2BX4Yx6ebXD%2BrbORH3zunKZiVMEOdJb2c9KzlPF%2B5ow63pG6Tv52qh8xakLYLtLlsbxOzHw2PXpS9AwORIwRQV3AAT0ZOabuUcpBFdlLcAk4WHhvAkCEn9OenPjDz0%2FL%2BIDzAWoKCDDPeKnwtC8SLbd%2BaxRCkwlw2K4p0JIeQXfRhssofS5yq8Dtt1jv%2F3WV9A0gPEMMrDNgA8pH0nB5gDPBcuPOKFqXya6ps%2Bz2HjlXUShZe7Z5OtHaUMc%2BqzjaN4LRY4g3LIGnwu6zH0bHwdDPDGFDWLkD%2FHKHwzRiYGfVZPWOdI%2FXVJKWHD16pQo6uX6Dlfgwm8TfyQY6pgHH%2F6%2BW6ix4y91P6zP03OoViTaMXM%2FYXgJpx3EaHM2XoQDPLvBjWMUyhLPD5SUNABCbUprITV%2BzEN0qrLZXrPqB87Pi1x9reuRtB2JmiYT2OqFYowysmmQf0tSKZ8OajKODxqGbvExya94FCneGkZu7LNOGYeny5l%2FesoilPk%2Bkj42b0CU3yTfOvQLNOIsZPWoKwVcztdksq4u%2FnvsQp6RJpmmSzfGw&X-Amz-Signature=daa3bf75a43eb72a235682da8124336c4c6d6fade88c3a22b02d4a88c7d0e27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7ASUQB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2muIApyLMoSAlwPsIVxgLAGSzzC3e6Hs%2FNmDk9MbP1AiBTNME4XKdASZl7fiekrhhhXKUFVF4pf1DbvxHYbQmNUyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMibsFWHfuZ6zKZ8Z0KtwDtxwHPQe9rgjePeu2V0RLNgJVtZ0%2Bv0QdYg1y9uoub09gKroS6K13H1BMD9xRcIWx7xwONDRh2hF2RMPCB2XdHOshyAI06%2Fv2TgIPsxCN6nJYELfYP%2B6kZdZ8Z8s16cYydtZx1j8IvV%2BoOFUdCMmqdu1d1Zb2oD1chbbW0bszwlgKUi7SNKRXvb%2F%2FVk%2FSmUHP5whY5ZW5eGm0EemFIF3LEIzCvqdv5h9DwCvjhvFRX7nVHL406P4y6SSvIrp%2B5q%2BGaQJ4ImrJycrLmD0%2F%2Be80dC%2F3NPcesVjo0NXvijy2PFDRlrqxt4uja%2BX4Yx6ebXD%2BrbORH3zunKZiVMEOdJb2c9KzlPF%2B5ow63pG6Tv52qh8xakLYLtLlsbxOzHw2PXpS9AwORIwRQV3AAT0ZOabuUcpBFdlLcAk4WHhvAkCEn9OenPjDz0%2FL%2BIDzAWoKCDDPeKnwtC8SLbd%2BaxRCkwlw2K4p0JIeQXfRhssofS5yq8Dtt1jv%2F3WV9A0gPEMMrDNgA8pH0nB5gDPBcuPOKFqXya6ps%2Bz2HjlXUShZe7Z5OtHaUMc%2BqzjaN4LRY4g3LIGnwu6zH0bHwdDPDGFDWLkD%2FHKHwzRiYGfVZPWOdI%2FXVJKWHD16pQo6uX6Dlfgwm8TfyQY6pgHH%2F6%2BW6ix4y91P6zP03OoViTaMXM%2FYXgJpx3EaHM2XoQDPLvBjWMUyhLPD5SUNABCbUprITV%2BzEN0qrLZXrPqB87Pi1x9reuRtB2JmiYT2OqFYowysmmQf0tSKZ8OajKODxqGbvExya94FCneGkZu7LNOGYeny5l%2FesoilPk%2Bkj42b0CU3yTfOvQLNOIsZPWoKwVcztdksq4u%2FnvsQp6RJpmmSzfGw&X-Amz-Signature=7a182880dd0d9d16c3f99f8e2e76248538166b391072ed8fbd8510a0080cf11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

