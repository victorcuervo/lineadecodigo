---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3V3H6RO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTKYtAyZnjmTWb6ULgz6c2FTCZ6S35hzqZpu8ssUQZKAiEApJQiDdozrSG%2F8jOmDIa6OduY9e7Uz7wc5SdevSjUWFoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkOFWOQ9mIAiNt8CircA7ry%2BzTiTbfFNZTAIWd5hh2Jb%2BPGCYbHgW96A5qdBuP3t4B4I9uhQACrPgvZe3DZOAvNd5OyH8VyaHKx3VA70thUegKmnsHHjTnOauyOOKSeYosC6uqry9x0fsmzBwjoUG4EyaJaNuc%2FFNBAvxcw7VvlgdiErGbFEN52T%2FdwE7NKt868tBTUIWT1V8DuT3pDr2SD2VpJs4UFEA2V39H4owUMhB4zFWh9RQ1vHFv6a%2BofkZBMmUnhzIg6%2FwEwHhc%2FCQpkxMvzcM7prMcQerqhT7fRRRxVivLH1K%2FwDHo1eiaKpnk6Hgth7ZBkrsglLRoo0sZXKDpLDesrBSeS3bXw%2Bpw0grY4EEyWd92owP99pmr8QrPPS8DgH1bwTDGohJeaFD0gM%2B3XoPoCXmOesFIoOWACsI3y3JtDq5Js2GxfugTx7iXU%2FXQwUb9PniFmewej3ktuYY2KIpOoHhQEnsfX%2Fj3JbzUoRBEp6%2B%2BUTFt1Mbee4U8g9FC9NSXPGKVMSrTakQXnYVhmE0rtglDi6ZqrK0vHIwqTnsV9X7EBzd8a6Z1AsW2FIgVnZ4n9Y88lkaoQTew5mzfBYn8FASYYBrSMvV4xYvlwSutCkMN9wqrm9djN3eNekZ%2BiQ1P29e6uMPzt2ckGOqUByIwYsB4ji6QX%2Fa3fzJeQLqfioAPPY3muKhbFaIga4LtybVP%2B8e40Ba8M0hwPwojQeYbuG4MfSkD%2B6loFj8GOmEpiEWNjOKbuc%2FX%2Fu5woXvEGSIuLN0zhy%2FToLH%2FS6xuZJ9Bosf%2BlVTgTD6vHtYLTlXIKY16fY4BTe%2FxZ362%2Ft%2BUiCXyeOMMjUJrmfsVpjkx9IhpNp5%2F1A1yB7kSJxgkE37pUXItB&X-Amz-Signature=9463187cf6e19aa40f3b019e2196c66d19e09b03dd6e1fbcfe46a8ec0fc8893f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3V3H6RO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTKYtAyZnjmTWb6ULgz6c2FTCZ6S35hzqZpu8ssUQZKAiEApJQiDdozrSG%2F8jOmDIa6OduY9e7Uz7wc5SdevSjUWFoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkOFWOQ9mIAiNt8CircA7ry%2BzTiTbfFNZTAIWd5hh2Jb%2BPGCYbHgW96A5qdBuP3t4B4I9uhQACrPgvZe3DZOAvNd5OyH8VyaHKx3VA70thUegKmnsHHjTnOauyOOKSeYosC6uqry9x0fsmzBwjoUG4EyaJaNuc%2FFNBAvxcw7VvlgdiErGbFEN52T%2FdwE7NKt868tBTUIWT1V8DuT3pDr2SD2VpJs4UFEA2V39H4owUMhB4zFWh9RQ1vHFv6a%2BofkZBMmUnhzIg6%2FwEwHhc%2FCQpkxMvzcM7prMcQerqhT7fRRRxVivLH1K%2FwDHo1eiaKpnk6Hgth7ZBkrsglLRoo0sZXKDpLDesrBSeS3bXw%2Bpw0grY4EEyWd92owP99pmr8QrPPS8DgH1bwTDGohJeaFD0gM%2B3XoPoCXmOesFIoOWACsI3y3JtDq5Js2GxfugTx7iXU%2FXQwUb9PniFmewej3ktuYY2KIpOoHhQEnsfX%2Fj3JbzUoRBEp6%2B%2BUTFt1Mbee4U8g9FC9NSXPGKVMSrTakQXnYVhmE0rtglDi6ZqrK0vHIwqTnsV9X7EBzd8a6Z1AsW2FIgVnZ4n9Y88lkaoQTew5mzfBYn8FASYYBrSMvV4xYvlwSutCkMN9wqrm9djN3eNekZ%2BiQ1P29e6uMPzt2ckGOqUByIwYsB4ji6QX%2Fa3fzJeQLqfioAPPY3muKhbFaIga4LtybVP%2B8e40Ba8M0hwPwojQeYbuG4MfSkD%2B6loFj8GOmEpiEWNjOKbuc%2FX%2Fu5woXvEGSIuLN0zhy%2FToLH%2FS6xuZJ9Bosf%2BlVTgTD6vHtYLTlXIKY16fY4BTe%2FxZ362%2Ft%2BUiCXyeOMMjUJrmfsVpjkx9IhpNp5%2F1A1yB7kSJxgkE37pUXItB&X-Amz-Signature=d60ee0205ed9c33893013883d19ce6167e90c9fc4a6520dfc50a6e2ed8ad4551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

