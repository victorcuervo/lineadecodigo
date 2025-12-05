---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7OCLJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBlpVhevnWN97XBbgOeix6IED%2F5UAsinUNtWAIR4QYvAiEAwDcjfs8qRauAiURo80kyTFp1nnCJB1XEmccPmKLRwlUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHx%2FffhDznRTN9jNQyrcAxMlhDWs%2BsHjhcxLLqCW3UJ1sC4dDywdGN7%2F8Qc1vh6lASmhd1ah%2FXmH6DaSKeG%2FFZn2MSUwqvvzAijqvNIT0A7%2Fn%2FVYFttg9uMlcXL%2B9P1x4sOIBbcfFxIUHj7btObKi3E6Z6ewthxaXSB1SN5YPI%2FwovFCuLpiJiBCsVmTGyilKWBrF9pDZpU9mEOvzoc9LE3inkTdDNKpww6e7AZhoSc4sZah77KYm8IfRjXdzpsiEmhI8axwP7bsNXmJaJ3xqrqkaBpJdOYm3vcjm7NTSsnaj2svfPAB87NWCfqSEwV4a1j8f6g%2Fx2vL529UrZ1GGDm9gV%2F90aK4J8SRO%2Bjr5ZA9W0rFqs%2Ff2Ku%2B7lGDz0B%2BtwiTwgSBYAz%2FSh7xj6WT2B863NZyjp4MLXBJKvXGmcQ757bIXtybxDAPzv%2BrifOm6fJ%2FLbgYCpKkhZsOxZfqw11ML7z5C9XqTFp0vDKHS2vhBgD0tVPtEffPrbqGWw0wMtC2hcF%2FKRsl8UgwUtNucHbYWvRJQkxWD8zndTysJy%2B3g%2FC3oDipnm6lh3I%2BZhYRzKkXKek9m0Dcfr3cMyBupHx7E4m%2Ffr89QYYnG7zFD6zlsQHz8t9QDXBdCaO7aRhYp9kWeHm%2BITac%2FMGRMJ%2FTyskGOqUBYgsBnmKwo9dAJw%2FfBXzWHnFpCk1droxqSH3OxiXfoJAU3oX8cvhJAGCHnNbnY6aU2zZoYegcerawnqKfhOe8sZ8oE4MsFonYHs1pFMA%2BvBm0MFToKvVYGJXdjJWprD77CV9XUpG3d8xunu9NlTsb5kr1zsxY%2Fki7q%2FPwBw%2F0Pse4zDrZ8eL7TrnRN%2BIm8n3gM1i0rJb9bfcEwxlePb80gJubrBQc&X-Amz-Signature=05824c6874e63a0e4be7e62435cf240463d489b0ccc2498267a4f7b5ace4f511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7OCLJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBlpVhevnWN97XBbgOeix6IED%2F5UAsinUNtWAIR4QYvAiEAwDcjfs8qRauAiURo80kyTFp1nnCJB1XEmccPmKLRwlUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHx%2FffhDznRTN9jNQyrcAxMlhDWs%2BsHjhcxLLqCW3UJ1sC4dDywdGN7%2F8Qc1vh6lASmhd1ah%2FXmH6DaSKeG%2FFZn2MSUwqvvzAijqvNIT0A7%2Fn%2FVYFttg9uMlcXL%2B9P1x4sOIBbcfFxIUHj7btObKi3E6Z6ewthxaXSB1SN5YPI%2FwovFCuLpiJiBCsVmTGyilKWBrF9pDZpU9mEOvzoc9LE3inkTdDNKpww6e7AZhoSc4sZah77KYm8IfRjXdzpsiEmhI8axwP7bsNXmJaJ3xqrqkaBpJdOYm3vcjm7NTSsnaj2svfPAB87NWCfqSEwV4a1j8f6g%2Fx2vL529UrZ1GGDm9gV%2F90aK4J8SRO%2Bjr5ZA9W0rFqs%2Ff2Ku%2B7lGDz0B%2BtwiTwgSBYAz%2FSh7xj6WT2B863NZyjp4MLXBJKvXGmcQ757bIXtybxDAPzv%2BrifOm6fJ%2FLbgYCpKkhZsOxZfqw11ML7z5C9XqTFp0vDKHS2vhBgD0tVPtEffPrbqGWw0wMtC2hcF%2FKRsl8UgwUtNucHbYWvRJQkxWD8zndTysJy%2B3g%2FC3oDipnm6lh3I%2BZhYRzKkXKek9m0Dcfr3cMyBupHx7E4m%2Ffr89QYYnG7zFD6zlsQHz8t9QDXBdCaO7aRhYp9kWeHm%2BITac%2FMGRMJ%2FTyskGOqUBYgsBnmKwo9dAJw%2FfBXzWHnFpCk1droxqSH3OxiXfoJAU3oX8cvhJAGCHnNbnY6aU2zZoYegcerawnqKfhOe8sZ8oE4MsFonYHs1pFMA%2BvBm0MFToKvVYGJXdjJWprD77CV9XUpG3d8xunu9NlTsb5kr1zsxY%2Fki7q%2FPwBw%2F0Pse4zDrZ8eL7TrnRN%2BIm8n3gM1i0rJb9bfcEwxlePb80gJubrBQc&X-Amz-Signature=7ea3aab31eee9ff0f10834a562a4eb27931467abf433ebd1bfbbff7e5d2aed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

