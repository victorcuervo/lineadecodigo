---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLSSLOU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvdGCW83f4aSmgPB7GjaeTd3m%2BixRPDDEYkF3POpKIwIhANW%2B5KiASzCklZJxGeJoc%2BRTu3hBIWHCuFA0725d6AYnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw24i75hCRWY8D2KEIq3AMtMu%2FR%2FQrSaKkY1GqzO64IoE7YxNyck5l%2BW9bVGc9ZAIHGjj8Z%2FRo52QPGrrfymdtJlNBMljbVPm9kTWrvxbmGCYkyzwcqfn16c1XgjIyRT9NyZrD28LZIvYH%2FsC3pIoBrPEDxYNuZ0HHu0hv8GWYiZQyq4JJOBT6OaufkmaNrZ3FHL%2Fb%2BFzzDhFNpadcy4vRpUNHh%2FRL9RMbp280X8HrQxSQ97b%2FE9icB5SENwdBeQsWZYU6tc2ldzGiIQk5Abd7u9kiIetxYT0KD1Zae7tRzgWb0QfGEx8FFrMlwChTM7GwIRPrbvwoeEg3F6gHcGeCVAYRT23pdagxPFdWBjZw3h3ZHjs5o1Zo4SeA0lhILMJCpsSoQ4KMGvC6XcOPK2GUIG9%2Fnt4yGfPomL%2BR4nZ%2Fz5Vkr1M5CBLm5dOxYHQRjmxFf0bqhaebLlf1KjY1Gz4bfwh52SHx0ujeVjW6cJH7oq%2FxKCmCh9wWCtJHJzo8prjfiv8AnxuH1KxmYLlwTyISklfEEShcxw4g3c4wlpar%2FzbQ%2FdKrX0l9CjEAZPZLrdS6BlaiBaHnL0GSv4FA52QKc0bd5kaY0zxRB%2FI8K%2BrmSUDZHiu2RvV9QWaIhag0wm7QTReUp13RUWMnSJDCZ9NrJBjqkAUDWgEwfkFEMlXAbufRSagGemidFgkZeygjLgHnYmAVyqwcJtwRjQeir5%2BrwE2psC%2FXgqBg9lkO27xn9a8p0vSHZh2cb0vDPfF0O1Rf2lQ2LdBxe6E4LScRK3HTUU8PzuidOxnZfMPrQX5kIxmVRC5jb%2Fdb%2BXNjlw86%2FFmBL4poFbmGsefcPQDcUMLyTWoewQSJTsv301LWYq3MiXxfudNceh95o&X-Amz-Signature=988d480fa570432b304e5b8c1d086df186f1e8a5f69a18626a166d03af7a6aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLSSLOU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvdGCW83f4aSmgPB7GjaeTd3m%2BixRPDDEYkF3POpKIwIhANW%2B5KiASzCklZJxGeJoc%2BRTu3hBIWHCuFA0725d6AYnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw24i75hCRWY8D2KEIq3AMtMu%2FR%2FQrSaKkY1GqzO64IoE7YxNyck5l%2BW9bVGc9ZAIHGjj8Z%2FRo52QPGrrfymdtJlNBMljbVPm9kTWrvxbmGCYkyzwcqfn16c1XgjIyRT9NyZrD28LZIvYH%2FsC3pIoBrPEDxYNuZ0HHu0hv8GWYiZQyq4JJOBT6OaufkmaNrZ3FHL%2Fb%2BFzzDhFNpadcy4vRpUNHh%2FRL9RMbp280X8HrQxSQ97b%2FE9icB5SENwdBeQsWZYU6tc2ldzGiIQk5Abd7u9kiIetxYT0KD1Zae7tRzgWb0QfGEx8FFrMlwChTM7GwIRPrbvwoeEg3F6gHcGeCVAYRT23pdagxPFdWBjZw3h3ZHjs5o1Zo4SeA0lhILMJCpsSoQ4KMGvC6XcOPK2GUIG9%2Fnt4yGfPomL%2BR4nZ%2Fz5Vkr1M5CBLm5dOxYHQRjmxFf0bqhaebLlf1KjY1Gz4bfwh52SHx0ujeVjW6cJH7oq%2FxKCmCh9wWCtJHJzo8prjfiv8AnxuH1KxmYLlwTyISklfEEShcxw4g3c4wlpar%2FzbQ%2FdKrX0l9CjEAZPZLrdS6BlaiBaHnL0GSv4FA52QKc0bd5kaY0zxRB%2FI8K%2BrmSUDZHiu2RvV9QWaIhag0wm7QTReUp13RUWMnSJDCZ9NrJBjqkAUDWgEwfkFEMlXAbufRSagGemidFgkZeygjLgHnYmAVyqwcJtwRjQeir5%2BrwE2psC%2FXgqBg9lkO27xn9a8p0vSHZh2cb0vDPfF0O1Rf2lQ2LdBxe6E4LScRK3HTUU8PzuidOxnZfMPrQX5kIxmVRC5jb%2Fdb%2BXNjlw86%2FFmBL4poFbmGsefcPQDcUMLyTWoewQSJTsv301LWYq3MiXxfudNceh95o&X-Amz-Signature=ee0c6d07afacf49923c12c19ccf49dc7b3f0480b371a8b0ecfac5c39d1610620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

