---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGGG6MK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVnHt9W3%2F3yUxxiqGsvc4w8G4HgSYlnRlX1oOwoUs7aAiA0AZCVpM%2Bn%2Bp4QjuzM%2Bp2EiZ%2Bi1%2FLp955l6KUDLLLV0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJkTQuxqmJ8WaqYveKtwDYwnf8T5I3HbYWVvHkgU097O%2FtMI9Tj2YvQojwlkzANwlfWc6f38oRNmFAySSMPQvBv6YBEhBRDh6CgE%2Fg4rP6AjrDZNYmeoFDjssFVvaL0lnP6%2BIkNGuAnRsBtgnpB3CkG9J5Os5sbnmUoTIEs2aVdPwDpPn26YKcPO5gJ88mzR9pC%2FpVWAuk0II4L%2B2bsuX5X3pEzUNDTtk9AbD%2BxNq1RT5AIHKOHPKkDoZfd5SiDyaSlYk1XEzLvWYMNPSz6VNuMOBFhHnZTOLLYMCPRkvaOvkYhkCYdRLdef4ibJ2%2Bn5FPWK4jH0FEMa3J44r%2FwRBuAOI4Jm1OjvaADELLW%2BwDSJV%2BBIGPWVCbCM0K927BXYKvLYhCuDMHcrfmkY02pHZzZC2NP8SAk0eme5nEKeHtYaEXILY9cHeP7pqMXx%2BabFcLmu1S3y2wUDV5kaUnbFUHifYwz8uhcADDn6dp8v7r3LbNOecwVM0UAcgqioVzreKBD8WcP7IolFaUJMiYoyBayOczhCQsLSSlYWMK8HzeEs%2B60Cb9UAoE8fFYIviRCr5GIXBkvoJowwnawS9Id3dGtsRMaZpZFzBOkXLkNYl45A5s6sfLB2zmDGfBbH%2F4lmNNnNWjHVZG%2BXbv9UwxvXLyQY6pgFH4IkgYuO1jZ3FCgYYfI2VTQK8FoPwcmpPMQnEsCwT6vcrG9xJ8R7FJV%2BfWV3LjyRva0pz5pvpJlzR3adGLkMzQSRPHgLYBoWThuSGfjFtrnFS2vrQTfTLnMdL1h9QmDchumcD42qAjJ7SAFWoR9iIGlYBBuWClpViGdNYrKq7mmOMw7MRAieTYOL6DiLWByZD20gWa9cL9VupzTXJVqj29MtohDcS&X-Amz-Signature=d21794a8d9e8f963e3a9dfc52477a263c003fe22de3e9e1fbaaef423618955c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGGG6MK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVnHt9W3%2F3yUxxiqGsvc4w8G4HgSYlnRlX1oOwoUs7aAiA0AZCVpM%2Bn%2Bp4QjuzM%2Bp2EiZ%2Bi1%2FLp955l6KUDLLLV0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJkTQuxqmJ8WaqYveKtwDYwnf8T5I3HbYWVvHkgU097O%2FtMI9Tj2YvQojwlkzANwlfWc6f38oRNmFAySSMPQvBv6YBEhBRDh6CgE%2Fg4rP6AjrDZNYmeoFDjssFVvaL0lnP6%2BIkNGuAnRsBtgnpB3CkG9J5Os5sbnmUoTIEs2aVdPwDpPn26YKcPO5gJ88mzR9pC%2FpVWAuk0II4L%2B2bsuX5X3pEzUNDTtk9AbD%2BxNq1RT5AIHKOHPKkDoZfd5SiDyaSlYk1XEzLvWYMNPSz6VNuMOBFhHnZTOLLYMCPRkvaOvkYhkCYdRLdef4ibJ2%2Bn5FPWK4jH0FEMa3J44r%2FwRBuAOI4Jm1OjvaADELLW%2BwDSJV%2BBIGPWVCbCM0K927BXYKvLYhCuDMHcrfmkY02pHZzZC2NP8SAk0eme5nEKeHtYaEXILY9cHeP7pqMXx%2BabFcLmu1S3y2wUDV5kaUnbFUHifYwz8uhcADDn6dp8v7r3LbNOecwVM0UAcgqioVzreKBD8WcP7IolFaUJMiYoyBayOczhCQsLSSlYWMK8HzeEs%2B60Cb9UAoE8fFYIviRCr5GIXBkvoJowwnawS9Id3dGtsRMaZpZFzBOkXLkNYl45A5s6sfLB2zmDGfBbH%2F4lmNNnNWjHVZG%2BXbv9UwxvXLyQY6pgFH4IkgYuO1jZ3FCgYYfI2VTQK8FoPwcmpPMQnEsCwT6vcrG9xJ8R7FJV%2BfWV3LjyRva0pz5pvpJlzR3adGLkMzQSRPHgLYBoWThuSGfjFtrnFS2vrQTfTLnMdL1h9QmDchumcD42qAjJ7SAFWoR9iIGlYBBuWClpViGdNYrKq7mmOMw7MRAieTYOL6DiLWByZD20gWa9cL9VupzTXJVqj29MtohDcS&X-Amz-Signature=0ff325eefaffe9141232f777681b863f8560d43f6bc70fa010ed5123ef35b1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

