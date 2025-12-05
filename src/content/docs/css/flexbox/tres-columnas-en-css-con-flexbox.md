---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQBN6WP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRJif0xER%2FDSigDio%2BZXWhLxACSN6C0cXqXzDzW2XonAiA4HX2JYvleSeHNKoA2v83SmMw%2BL%2BokVSshuYHG3jcGQCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsjl2HJZHNeTC9SITKtwD3agCGDUpMAxg0mHpEbudEJFMhr3buCWv5g73XPRB2XPJ8mzkJzdWDPAJgAOz8d2N2pum7CWYfmEemLuXD6BR5x%2BX3Yo8tBQV%2FI3erhz%2FvkGHE3Fwf5osrUgg1l9mIS%2FtwPRA9X1ENSpGbaWd130%2FKJAhjRfSCD1HFnPUgp1C0fy4kW816Cvs5JUJq3KyoIpSrK21lQxEw2bQJMdnNUfK20NX0W4FXEYG4oZ%2BymkDxHA3PmGNgWMy6y00TkgVziB0sM61mSRjEr%2BNuDG0MGHve9jqUuV50q7xhridO4rw5F5UNRsDe%2F0gyGSSFBdeJ9MBIWGk8xMPsejYT8zWmhG1aj8jjn1zMPA71wRKzx02ASO5SaVtvqgAG99gisTBRui3bmXJqvVRXwUQt3iSFaE5QzeJpIjjYUp6yxFzAJlOWvdpZgbG8OCIGfsjAmmLyGD3OplheUWJcVspiq7jSG4PsYOUNhg%2B6NAj4mlmVLB8I90vtBPww6NRez2afxCIW5gSY1ruPH9z%2F6VPOJyEGB%2FjwOEkIqjq6kEnBAA0UD0V0N%2Fn3axTgCGAGtU1zRllHN6fBDbHfitotu5QEfFLy2broSlNg%2BeOGTCh2sYaSQfSs%2FPyJvPEK6vD3XazidEw47DJyQY6pgE8LS%2Bfi22%2FJR68VXp1ytIK5mqbzo7HRaC9CisieOo7q%2Bu%2FHk6%2FICpgD228pS4tpfwCpjWkfl9iZ6EtLjg5Fi80q6Ggo8gqh2XZq8qRAyzfmTDERqtrzWGYHqgIVNKtpPQ3q7yLqfQJruXLTi6XaEBSAXI1SDe3PSZnTjFEkMV04sxw7bVb%2BE3Y%2FYR6LIXyJjjInnEd4Rf3%2BZM4WMUYFtxL5pMful9x&X-Amz-Signature=f713cbf7d80fbb92d915ebdf4eaa2e60c0b3a67302a52720cb02fc6cd09642d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQBN6WP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRJif0xER%2FDSigDio%2BZXWhLxACSN6C0cXqXzDzW2XonAiA4HX2JYvleSeHNKoA2v83SmMw%2BL%2BokVSshuYHG3jcGQCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsjl2HJZHNeTC9SITKtwD3agCGDUpMAxg0mHpEbudEJFMhr3buCWv5g73XPRB2XPJ8mzkJzdWDPAJgAOz8d2N2pum7CWYfmEemLuXD6BR5x%2BX3Yo8tBQV%2FI3erhz%2FvkGHE3Fwf5osrUgg1l9mIS%2FtwPRA9X1ENSpGbaWd130%2FKJAhjRfSCD1HFnPUgp1C0fy4kW816Cvs5JUJq3KyoIpSrK21lQxEw2bQJMdnNUfK20NX0W4FXEYG4oZ%2BymkDxHA3PmGNgWMy6y00TkgVziB0sM61mSRjEr%2BNuDG0MGHve9jqUuV50q7xhridO4rw5F5UNRsDe%2F0gyGSSFBdeJ9MBIWGk8xMPsejYT8zWmhG1aj8jjn1zMPA71wRKzx02ASO5SaVtvqgAG99gisTBRui3bmXJqvVRXwUQt3iSFaE5QzeJpIjjYUp6yxFzAJlOWvdpZgbG8OCIGfsjAmmLyGD3OplheUWJcVspiq7jSG4PsYOUNhg%2B6NAj4mlmVLB8I90vtBPww6NRez2afxCIW5gSY1ruPH9z%2F6VPOJyEGB%2FjwOEkIqjq6kEnBAA0UD0V0N%2Fn3axTgCGAGtU1zRllHN6fBDbHfitotu5QEfFLy2broSlNg%2BeOGTCh2sYaSQfSs%2FPyJvPEK6vD3XazidEw47DJyQY6pgE8LS%2Bfi22%2FJR68VXp1ytIK5mqbzo7HRaC9CisieOo7q%2Bu%2FHk6%2FICpgD228pS4tpfwCpjWkfl9iZ6EtLjg5Fi80q6Ggo8gqh2XZq8qRAyzfmTDERqtrzWGYHqgIVNKtpPQ3q7yLqfQJruXLTi6XaEBSAXI1SDe3PSZnTjFEkMV04sxw7bVb%2BE3Y%2FYR6LIXyJjjInnEd4Rf3%2BZM4WMUYFtxL5pMful9x&X-Amz-Signature=e412712c2c8a758bf87868649cf2bad5e031f7f01496dc51c000aff68d7ed40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

