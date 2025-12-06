---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZQXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFmlMSJz9wpJGegYIej6k%2BLYBdG4ajGUWkRMzNpZqOAIgTf7ntsU%2FhWZD8hx%2F%2BuPBWLF4Idn6nTbfBqsUBvATFAIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFk%2BZPF8SLeAdWj11SrcA%2F9Y6W6RUqKhn5kc7f8vcuW4%2Bc2CBfoXDsMw4kyWIGNknogXO7op12dPTtrZ%2FqslUE5sRjBYYXi2yxPP40s6YcDtXSM%2FYkI2Cl%2B8qSzimlQkTGAkSuNJ9lFBKReoL%2FmfbcAEOfQwd2AkO7u2y56DQf7BjC2xv2qjUYurD47V2v0LIJlmq%2B%2BUqW2LdHlTuXSgInr1EmJMH0zGXZzQJz6EuLqzbVzrZpMRfDVSRLozKyEeXBLCDpHkjg2DTRnDVZEUulradWT539jycHm%2BShwt3MxBtAMziltuq6ujgk9k0jhEbP0ygBiP9s2jRVygHbdlfKjIZrnBIQ4VjXPe8rOTuinRO5bc6sjqL7M70BHjZl9jtniJHmukmuS7Ochky9OnQKmLPZGI4Ik%2BGfbr0SSm5FyJRzjzU70mgkkqj02hRbGsdEvmFAX27kaqvjKPHBtf%2BFW3mZoSsLf%2BlgMTeUkR7GZ8Tc%2FpHFKgdpHruxWv2jik2Fkqph%2BoUMkME3YGauB906G%2BfsxH5%2BuTHZt7wOsXDMgdvZExxyRIjpNyhEm7l9fNI2Mg27BOO%2F0cgqHoRpGgfRSwtTyoanl3oiHrv6I%2FNBPprbrtZqUocmayzsgs0cM0EnuR2smi8Or25k2jMPim0MkGOqUB7b9lxTRhZqa7XZ0NUvf%2FfrjPNwHve5WEw9yo2zvd1PPBhgNFHfl6pQeCqwz1%2Fc8hOE%2FWEBVFXcyj3%2FWtIh%2BZ2Mxwfh1sbrTAssvyc9z2hBYXVp4Glep9OmUlJNKixIZF%2FUO7euXgCD9zFyzzoU7PUm7XsiXrKJBhH2oPRqVpk2OiS70FnKlUXf9uXR0t00ndQXpdCMRYTrVdwpTHL0p6Dk2fHo%2BA&X-Amz-Signature=c4bb1e12d461b614edd72c6b3369ac1203e21cef89bff0e58a79cb43fcf79551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZQXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFmlMSJz9wpJGegYIej6k%2BLYBdG4ajGUWkRMzNpZqOAIgTf7ntsU%2FhWZD8hx%2F%2BuPBWLF4Idn6nTbfBqsUBvATFAIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFk%2BZPF8SLeAdWj11SrcA%2F9Y6W6RUqKhn5kc7f8vcuW4%2Bc2CBfoXDsMw4kyWIGNknogXO7op12dPTtrZ%2FqslUE5sRjBYYXi2yxPP40s6YcDtXSM%2FYkI2Cl%2B8qSzimlQkTGAkSuNJ9lFBKReoL%2FmfbcAEOfQwd2AkO7u2y56DQf7BjC2xv2qjUYurD47V2v0LIJlmq%2B%2BUqW2LdHlTuXSgInr1EmJMH0zGXZzQJz6EuLqzbVzrZpMRfDVSRLozKyEeXBLCDpHkjg2DTRnDVZEUulradWT539jycHm%2BShwt3MxBtAMziltuq6ujgk9k0jhEbP0ygBiP9s2jRVygHbdlfKjIZrnBIQ4VjXPe8rOTuinRO5bc6sjqL7M70BHjZl9jtniJHmukmuS7Ochky9OnQKmLPZGI4Ik%2BGfbr0SSm5FyJRzjzU70mgkkqj02hRbGsdEvmFAX27kaqvjKPHBtf%2BFW3mZoSsLf%2BlgMTeUkR7GZ8Tc%2FpHFKgdpHruxWv2jik2Fkqph%2BoUMkME3YGauB906G%2BfsxH5%2BuTHZt7wOsXDMgdvZExxyRIjpNyhEm7l9fNI2Mg27BOO%2F0cgqHoRpGgfRSwtTyoanl3oiHrv6I%2FNBPprbrtZqUocmayzsgs0cM0EnuR2smi8Or25k2jMPim0MkGOqUB7b9lxTRhZqa7XZ0NUvf%2FfrjPNwHve5WEw9yo2zvd1PPBhgNFHfl6pQeCqwz1%2Fc8hOE%2FWEBVFXcyj3%2FWtIh%2BZ2Mxwfh1sbrTAssvyc9z2hBYXVp4Glep9OmUlJNKixIZF%2FUO7euXgCD9zFyzzoU7PUm7XsiXrKJBhH2oPRqVpk2OiS70FnKlUXf9uXR0t00ndQXpdCMRYTrVdwpTHL0p6Dk2fHo%2BA&X-Amz-Signature=bc0837e5594f12515316650ced8fc19df3bf66d600a9592710239225573fa6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

