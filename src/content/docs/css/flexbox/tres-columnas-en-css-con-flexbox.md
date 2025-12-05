---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMPYBL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuS25BNAQOsMk%2FfFwOX0ENvfOGp%2BEqCmdaK7F5gfDdMAiARkhSJ8hPwcHdeVBTczUXVXANDcJ%2BEMv2FN7OzzCCCUyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhY5vfUzHPoY2e4b7KtwDFP9AdGrbJvACFBD059ZAe7qB1Cc6iMby4OWTfgWp25dUmTEbOTdAfenDFrawwVSn9B35%2FGkgpXytlMIC9tf%2FIdB%2FThVcPRrrRez00ktjb1BKn6dwRZ2pUGYKiTyAHtzIVQA6qkAJP6s0tXonvxLGmN%2BcztxxHyLiaUlF%2FLZ2HWR3Nmv8J1n5BDqejAEzKg%2Bh8NyLJfTYVCdZje2q75gm75GF04v6fR7GzwYuQeA%2FYDnV3e9iP46vwHglw5%2F8PRPVntEP1z3raVV9dw4q%2FWEbTEcvWcUN0iz%2F4KyfEdlfRv2simjReelTy6JFEVCmb06KV3th1HmWeeuWu%2FTHNC7Mgw6z7ozobmALLCkbFdDxLRDaPA8xoIIyMF8ydxy9IddElPul3uDeN9v09YpiswtXpqrnXw8ZVbHi8eX2E9vreHeotSAEXyhdoY7HuWbidisXYjie6ebHQAfFMMEfmC0d1iBxfXs8Ipz1JQcMYx2uWsRUIFjR59iFc5Mh7hVA1kSdz9teyurV9jGsjbI%2BVEezY9%2BkoxyuD48TOOWMjwT8AWPGjt47dJsfpL6eGklaoSsfoqTGQzpG4qCwPl6pf2grHcmDzQ55t7VQiNEAuwnEAJg6t%2B6t2od%2Fd3oWpnkw4NPKyQY6pgF%2F5uhzcLm5MuM2FiLRJc0WkTYkxfnXM0BBxwUStKQjzTl8M2BJRE60iRsjlhW5JPAcS0C1lmKgtItXY%2F0L%2FsSRV%2FDLxKojnO4KSa81pIcc9pUwLjmhRmut%2FuaaqY1sM3x%2BCcbgo2phRmgdcD7Pq0ZHvj0Z7aLkqNrNx9kwzZrk%2FX2hPS%2BLovvrxDuNZghJPXb63nkZDrC41yTHwuysp1mkFiBvf0Gw&X-Amz-Signature=5373a71880b57cd11fbfa4d260a5e19c48fc7a48717c307a242ee6919052f14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMPYBL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuS25BNAQOsMk%2FfFwOX0ENvfOGp%2BEqCmdaK7F5gfDdMAiARkhSJ8hPwcHdeVBTczUXVXANDcJ%2BEMv2FN7OzzCCCUyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhY5vfUzHPoY2e4b7KtwDFP9AdGrbJvACFBD059ZAe7qB1Cc6iMby4OWTfgWp25dUmTEbOTdAfenDFrawwVSn9B35%2FGkgpXytlMIC9tf%2FIdB%2FThVcPRrrRez00ktjb1BKn6dwRZ2pUGYKiTyAHtzIVQA6qkAJP6s0tXonvxLGmN%2BcztxxHyLiaUlF%2FLZ2HWR3Nmv8J1n5BDqejAEzKg%2Bh8NyLJfTYVCdZje2q75gm75GF04v6fR7GzwYuQeA%2FYDnV3e9iP46vwHglw5%2F8PRPVntEP1z3raVV9dw4q%2FWEbTEcvWcUN0iz%2F4KyfEdlfRv2simjReelTy6JFEVCmb06KV3th1HmWeeuWu%2FTHNC7Mgw6z7ozobmALLCkbFdDxLRDaPA8xoIIyMF8ydxy9IddElPul3uDeN9v09YpiswtXpqrnXw8ZVbHi8eX2E9vreHeotSAEXyhdoY7HuWbidisXYjie6ebHQAfFMMEfmC0d1iBxfXs8Ipz1JQcMYx2uWsRUIFjR59iFc5Mh7hVA1kSdz9teyurV9jGsjbI%2BVEezY9%2BkoxyuD48TOOWMjwT8AWPGjt47dJsfpL6eGklaoSsfoqTGQzpG4qCwPl6pf2grHcmDzQ55t7VQiNEAuwnEAJg6t%2B6t2od%2Fd3oWpnkw4NPKyQY6pgF%2F5uhzcLm5MuM2FiLRJc0WkTYkxfnXM0BBxwUStKQjzTl8M2BJRE60iRsjlhW5JPAcS0C1lmKgtItXY%2F0L%2FsSRV%2FDLxKojnO4KSa81pIcc9pUwLjmhRmut%2FuaaqY1sM3x%2BCcbgo2phRmgdcD7Pq0ZHvj0Z7aLkqNrNx9kwzZrk%2FX2hPS%2BLovvrxDuNZghJPXb63nkZDrC41yTHwuysp1mkFiBvf0Gw&X-Amz-Signature=498f39b5379e9e5da714d7e26747afe44595aed492bcc61d497a7198ef2f3226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

