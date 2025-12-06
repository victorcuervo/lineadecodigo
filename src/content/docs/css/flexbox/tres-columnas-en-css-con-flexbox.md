---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUG4GBTC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNXItDZp%2BFgXh6fbwmiPz%2BarpzGUG%2B7HRc1MTBKSnIAiBbJtfTrvpXK2hpMgqE0wVWzYZBCUslcMlnnyvK9FyBxyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2Bf4qd%2F9Nx8f2KB4eKtwDZJuehicW6Jsrcy9Wlb7O3Xh7uDvt2zRbwDRtZz7NwFWAjxMGIXkbT545o4yS6cdF1MCDOpG0yPqx3iLlVtVndjtILUEow%2F1nxgr4NfPEnX2j1E2wkNXaUg8oqIOYTxZYAWjs3q2MijKh5NXTdoBHMmulenupDUE5wDhFfLpc5%2FV8ewkU9LMR5IJu9nEMeLf%2FcFBXSlzsJq0X0hzldQx3L43BSJuUp%2B4bu16hY5DXu%2FFUlwsureu%2FYh5IiSWaKwo%2FcSPbSYDj3H0Io%2BiiOyZmWLODU7uPwvINnaBvDQ6muFrAny3nJXwNZZG3%2B8sDFJuZM2LG1i1UejJdigHj4vGfkXcIIGCWicg41ABijSOVuKSCY2T7g5v2EoQSN9wG3z78rrkMeoifDDnOQxiuGB%2BYW5rwJn2RgXMnm9mUIjLeyEvv5LTh0of6At6Kq80xEDNeGYz%2FPO73ttnMYnFrqnK%2B32rzQuaLswdot4BJWHmwQbrYMBPsWLmzPolZY7Njk8kOzojcsJ1TAi5CXLhKGPI1EhX3t34xs9CYei1Q4cpU%2BXffPvOJvRpOZAaT6xIXw3wvz1CDlI9hD6YJY0f5rfY8dUFyOUy5ogP9e2GauhcGHZ9csd0QMEFp5j7z%2Bvkwo4nQyQY6pgFLQNdWVgUd8tycTB%2FwiCMU0fdRAEw10tLwzM%2BX2WWjZ0iitFVMl3Bg9DvxnJjah22d0cWchsv9iQCu3b1oe8PZRqc%2FjTg%2FlcBzLpvJqR05RBDE%2BVv0DK734xzkF8Gg0IJepnuBLgfjuoR6Tt8GcEXwKY027eIjoYCQ8viediIkNGL3NsohXsil7tJesn%2Fy4gKhrXSKQ7dMxaJnENvw6B%2Bp2bevvJVX&X-Amz-Signature=6d5209d1c002e2cb6951721777866ba4e39189b81b876d5ab0ff2fdf7fd11932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUG4GBTC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNXItDZp%2BFgXh6fbwmiPz%2BarpzGUG%2B7HRc1MTBKSnIAiBbJtfTrvpXK2hpMgqE0wVWzYZBCUslcMlnnyvK9FyBxyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2Bf4qd%2F9Nx8f2KB4eKtwDZJuehicW6Jsrcy9Wlb7O3Xh7uDvt2zRbwDRtZz7NwFWAjxMGIXkbT545o4yS6cdF1MCDOpG0yPqx3iLlVtVndjtILUEow%2F1nxgr4NfPEnX2j1E2wkNXaUg8oqIOYTxZYAWjs3q2MijKh5NXTdoBHMmulenupDUE5wDhFfLpc5%2FV8ewkU9LMR5IJu9nEMeLf%2FcFBXSlzsJq0X0hzldQx3L43BSJuUp%2B4bu16hY5DXu%2FFUlwsureu%2FYh5IiSWaKwo%2FcSPbSYDj3H0Io%2BiiOyZmWLODU7uPwvINnaBvDQ6muFrAny3nJXwNZZG3%2B8sDFJuZM2LG1i1UejJdigHj4vGfkXcIIGCWicg41ABijSOVuKSCY2T7g5v2EoQSN9wG3z78rrkMeoifDDnOQxiuGB%2BYW5rwJn2RgXMnm9mUIjLeyEvv5LTh0of6At6Kq80xEDNeGYz%2FPO73ttnMYnFrqnK%2B32rzQuaLswdot4BJWHmwQbrYMBPsWLmzPolZY7Njk8kOzojcsJ1TAi5CXLhKGPI1EhX3t34xs9CYei1Q4cpU%2BXffPvOJvRpOZAaT6xIXw3wvz1CDlI9hD6YJY0f5rfY8dUFyOUy5ogP9e2GauhcGHZ9csd0QMEFp5j7z%2Bvkwo4nQyQY6pgFLQNdWVgUd8tycTB%2FwiCMU0fdRAEw10tLwzM%2BX2WWjZ0iitFVMl3Bg9DvxnJjah22d0cWchsv9iQCu3b1oe8PZRqc%2FjTg%2FlcBzLpvJqR05RBDE%2BVv0DK734xzkF8Gg0IJepnuBLgfjuoR6Tt8GcEXwKY027eIjoYCQ8viediIkNGL3NsohXsil7tJesn%2Fy4gKhrXSKQ7dMxaJnENvw6B%2Bp2bevvJVX&X-Amz-Signature=63909f5710d04bd46213bd75c9c665f96578b75a8b8bd4c30a947fdb6c60a5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

