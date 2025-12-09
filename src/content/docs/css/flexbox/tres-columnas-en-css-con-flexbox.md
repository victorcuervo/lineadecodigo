---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBGKVCQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTLRJr9O6Eg86dnnUPEwY55bs4oTsRe9b6DJsVz%2BhCwIgdw4Dp%2B1WENugqZ9B5UbU8cl5pmwhsRwjyVdFv72EPTQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB4Dj7W9dA8yJa7gircAyP2kcjwMSuK1cEcZjezCOtWJbofuR1%2BufsmVkHq4dstUz0yGpjHSY5wYl%2FhsW70txZhPxLb%2BxeEkXjbPfp%2BcXMTCLMwEb%2FceywsyHqwCGo56FPZJv%2FpbcJkc4ENcN%2FW0uoVDK60COHheLEMeiIAlEwZsS9putnEpG8zI9Quw44H5yYY%2B3WG0UBZ1Ra6ilMZD8fCqwHHPLq5n6hsQemHignpEEo1kcTshQTPr%2FD%2FzuFAqV5qTkZfWzBpW1ddH2fUPHln0zpuRv9MuePFKD8PnuC3zNK3WCEYLguCcMPiCLEDFaCkdDfrO7ungFIFtfAfr%2BrXaZ5FWOJFRM9B3CnnKwFWg%2Fj7lKItrcxiocsOBgVoiwfQN1cKatMF64lRsTkIXGmOUW0rNcvxNfeEiXaMHIK%2FRuC2pfv7BBxD9ehr%2FV3Lq%2Fw3AFGyVuRy1AzIx79yDQVlxBlBfRXanHC2pz2rRwqe91A9oBO2Rg7Se%2BqKZMienshKY9AELSt3MwCigyvg7lDHIjRRj21f3KVVp7RsgO2gNbbdUO3U5eu%2BBcy6oNhkLth%2FgUAUStJXoLSbQzWg8FMYifElPy8YuNxxar9pfeFpOwO2Zl%2FRzktM3Tap31XEA1asOeo3wTrwwE9bMLyk38kGOqUBDnatPOlQxB%2BxNfjumtZi9Aj%2FJ9tS2MDwyTCv8geD%2BoLgvSE71iiayQxDZZ0BOByWLVNQicS46vYP5rxzrevSfhlqM9cHu5bUSRLQxh%2BvqKkKKhIMlBLe7I3IHaGcFto%2BvmMEqftrH3R0quL6pinVxAbLwlOMv8i%2BFDnLwUIWUxCC5FxPPfEMKSpZXSeK5yE7fdGnlDZ0UHm9%2FSeT%2BF5uTi7mZWS4&X-Amz-Signature=125e0cc33932fcfcd1dd985b7e4f130d12f4b3dff5399198c46f23464c527ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBGKVCQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTLRJr9O6Eg86dnnUPEwY55bs4oTsRe9b6DJsVz%2BhCwIgdw4Dp%2B1WENugqZ9B5UbU8cl5pmwhsRwjyVdFv72EPTQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB4Dj7W9dA8yJa7gircAyP2kcjwMSuK1cEcZjezCOtWJbofuR1%2BufsmVkHq4dstUz0yGpjHSY5wYl%2FhsW70txZhPxLb%2BxeEkXjbPfp%2BcXMTCLMwEb%2FceywsyHqwCGo56FPZJv%2FpbcJkc4ENcN%2FW0uoVDK60COHheLEMeiIAlEwZsS9putnEpG8zI9Quw44H5yYY%2B3WG0UBZ1Ra6ilMZD8fCqwHHPLq5n6hsQemHignpEEo1kcTshQTPr%2FD%2FzuFAqV5qTkZfWzBpW1ddH2fUPHln0zpuRv9MuePFKD8PnuC3zNK3WCEYLguCcMPiCLEDFaCkdDfrO7ungFIFtfAfr%2BrXaZ5FWOJFRM9B3CnnKwFWg%2Fj7lKItrcxiocsOBgVoiwfQN1cKatMF64lRsTkIXGmOUW0rNcvxNfeEiXaMHIK%2FRuC2pfv7BBxD9ehr%2FV3Lq%2Fw3AFGyVuRy1AzIx79yDQVlxBlBfRXanHC2pz2rRwqe91A9oBO2Rg7Se%2BqKZMienshKY9AELSt3MwCigyvg7lDHIjRRj21f3KVVp7RsgO2gNbbdUO3U5eu%2BBcy6oNhkLth%2FgUAUStJXoLSbQzWg8FMYifElPy8YuNxxar9pfeFpOwO2Zl%2FRzktM3Tap31XEA1asOeo3wTrwwE9bMLyk38kGOqUBDnatPOlQxB%2BxNfjumtZi9Aj%2FJ9tS2MDwyTCv8geD%2BoLgvSE71iiayQxDZZ0BOByWLVNQicS46vYP5rxzrevSfhlqM9cHu5bUSRLQxh%2BvqKkKKhIMlBLe7I3IHaGcFto%2BvmMEqftrH3R0quL6pinVxAbLwlOMv8i%2BFDnLwUIWUxCC5FxPPfEMKSpZXSeK5yE7fdGnlDZ0UHm9%2FSeT%2BF5uTi7mZWS4&X-Amz-Signature=3f4978ead8e5c28feaa1bb6e94122f546ddd28ec99ea90e808e1b7b033492906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

