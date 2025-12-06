---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2Y2BZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyToeOPqx6HW1h%2F11UAiYtGZl4ZcKCutdmhqsHuvsAIhAJ041me4VxcKs6R8nv032GZZTdsxeJL%2Fa5wYqXVNXv6WKv8DCGwQABoMNjM3NDIzMTgzODA1IgzuyvFRs0BLP03s9F0q3AMNKIgYnik6tEQOYg6KfpoTnOHs6En%2F4WRcJqPu1Omv6FP1e%2BH8kevUwSN%2FxHfI%2FxuTLms0CLqxupjNGnRHWlztHITcqX92EDmk7vRTTuc5mSUKWMf4JH6eL3Azo0k4HGPMY4oMgMSDTO72fiE6ihrujfy5Myt94OI%2BpX7utS98cddHpIciFf11b0Yrpw7uUbWKk94PJ7zj2lFDC%2BRSN4gqQcSpR1wSo6frdRRq3DymaaXU3mV3gP1mFIM4KYTELCJdHUm09fG4UNI8os7uWYtACe39wrKAVYCDWV4oArBLL3jziILPn%2FGWUTLYc6InQnofDscMtde9aebGb0s%2FHXii9kVBWUdE4eOKRHfjVqJYpTH8pHlXScVbaAtoj0gsGX%2BhrizDaEJiUl%2FqxBwkAuz9eY%2BNR%2FrRfx8KCx%2FEFpYfBfbWoj%2BiDH5qZBGVgdX2%2FIj%2FIDK8VlVF9voO1vdXiFnreT5x3KZH1EOBIWNg4C5EfVwq1HekYD%2BX%2B2G7uDNB%2B0DMqUAJ4S5u5ZPGw4cI%2BwFz%2FupSp%2Bf6Ka%2BLrVYMg0HSqN%2BGjDXMs3torwc7l4mXLa%2BA%2FeyaeGYW%2FEiQn7HcoGMpQBGScW6k99YToN%2BUzRoavEdZ9V8KiWFKcY2mEDDyp87JBjqkAdvMbIvGeHF2%2F5nmrijCsJkX8uqu%2BBlT9l%2FiICZspG0iiVaT2nTVtXoTgFyhNOZfrvaW0EGT1%2B67B5onR79DcFK%2BLC5475CKWKreWFJDjADSgQtyACKbfxexN29jRvsznbWY9gLuCMyUyK8kB%2BN8mSNUavKMpsjPcCm5x%2BhLcehsoe8lGBT513ESJHayz8hFAO2HsQ%2FYNouLz%2FJIpZjCiBWM3TZW&X-Amz-Signature=86383bab8f4e17dd2ca48935e13cca8e88644df2460b0eee33dfe0a91cfec09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2Y2BZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyToeOPqx6HW1h%2F11UAiYtGZl4ZcKCutdmhqsHuvsAIhAJ041me4VxcKs6R8nv032GZZTdsxeJL%2Fa5wYqXVNXv6WKv8DCGwQABoMNjM3NDIzMTgzODA1IgzuyvFRs0BLP03s9F0q3AMNKIgYnik6tEQOYg6KfpoTnOHs6En%2F4WRcJqPu1Omv6FP1e%2BH8kevUwSN%2FxHfI%2FxuTLms0CLqxupjNGnRHWlztHITcqX92EDmk7vRTTuc5mSUKWMf4JH6eL3Azo0k4HGPMY4oMgMSDTO72fiE6ihrujfy5Myt94OI%2BpX7utS98cddHpIciFf11b0Yrpw7uUbWKk94PJ7zj2lFDC%2BRSN4gqQcSpR1wSo6frdRRq3DymaaXU3mV3gP1mFIM4KYTELCJdHUm09fG4UNI8os7uWYtACe39wrKAVYCDWV4oArBLL3jziILPn%2FGWUTLYc6InQnofDscMtde9aebGb0s%2FHXii9kVBWUdE4eOKRHfjVqJYpTH8pHlXScVbaAtoj0gsGX%2BhrizDaEJiUl%2FqxBwkAuz9eY%2BNR%2FrRfx8KCx%2FEFpYfBfbWoj%2BiDH5qZBGVgdX2%2FIj%2FIDK8VlVF9voO1vdXiFnreT5x3KZH1EOBIWNg4C5EfVwq1HekYD%2BX%2B2G7uDNB%2B0DMqUAJ4S5u5ZPGw4cI%2BwFz%2FupSp%2Bf6Ka%2BLrVYMg0HSqN%2BGjDXMs3torwc7l4mXLa%2BA%2FeyaeGYW%2FEiQn7HcoGMpQBGScW6k99YToN%2BUzRoavEdZ9V8KiWFKcY2mEDDyp87JBjqkAdvMbIvGeHF2%2F5nmrijCsJkX8uqu%2BBlT9l%2FiICZspG0iiVaT2nTVtXoTgFyhNOZfrvaW0EGT1%2B67B5onR79DcFK%2BLC5475CKWKreWFJDjADSgQtyACKbfxexN29jRvsznbWY9gLuCMyUyK8kB%2BN8mSNUavKMpsjPcCm5x%2BhLcehsoe8lGBT513ESJHayz8hFAO2HsQ%2FYNouLz%2FJIpZjCiBWM3TZW&X-Amz-Signature=27fca2fb83fa19039e6ac5c3e77b25b5181a02a19d5d6665483a203784076d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

