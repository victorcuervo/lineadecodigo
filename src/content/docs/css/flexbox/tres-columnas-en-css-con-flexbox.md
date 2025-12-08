---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECQAX3V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F%2BZnHkoBS1fURhlAmlNBlIXCkvv%2B0Kzn3N%2FQBmMNsmAiEAsUNw%2BC01CabPddbqDLHEXldP3v2RrhNwsWhOjDv7rvkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX%2BJgTF2SFSEPJCSircAzCayU3uOhjrXe7WR85218gtzPukvoqQ%2F3IytwWBNCAbaJJV57Tj1z4pDPdtL7up9ZboyrqiBSxxgz8KwhgmWKijZQ4nSueFLrjRkgBFAJkibhNG%2B9sgG%2FswYqy1NSikGpp30qjxy%2FMkhfcO0SQ7rx%2B5CAE6zxlFo%2FNrs8OEk4KBej8GjpnMcinP6zdzyp%2BNFLfa9JO%2BfHQLTwtVI9%2Fx3yrzJjOww%2BQrBY4PffDZPhdYe%2F95DUaAEXZcd6%2BZAfXKW7uXfQ6mqXc%2BptjP4H1HkvRuuwjCKgEQaoaH7EWFss6MEUz0HnRgdgYg2EWk2F339X8LpjBQgMSwLOVX5jn%2Fj5JUJhUaAwbFqNO9nsvra0wubtKtFxaz2ss9ycaKuNCapmH7tHaX%2F8PcNV7AfbD8MCUxw8hUAeS76C4JrWFz2YiADa9xZSw6O78vbG%2B9lrFkZcAQ0zZkktYDeOmqhMsLzwskHby%2FlU8mUtpPEpJ7GNWKQ73DYnF2%2B3PvLxlyLSdG7CMlgh3cUikZu2NZlg%2FOT9lUmviVMRRkAqSahmIx1xhsRd37JDQCryWEeJ4OWSIndrhq%2FKCVaWtJ4xIG3hvVVqUaatlZ31FLnUJ8hVfj3hEkeK8643A3%2FaxGb0MJMJPu2ckGOqUB9UktCPKbSIfIQx2HzX%2FMmsgSE1VYDSnra%2FkLfy5cknGbwf8B2thfiwZPw9bJAYlFGo%2FHtIZP4s%2B5JKvCi0uBDM99uSK4Gz23swQ3SyeBvlfSybaXsMiZQrjWKBZnnufhaoWZYCq0YoHmPHbRHBsDdA4s%2BPt7yZ%2BXW5dsBVjwFjIFs6rkG0I5LVhfLx5u5xfzsa23H5EqN1Qgz%2FVYz5okOYfxkNPw&X-Amz-Signature=56f57ee1f309d06d2578a79c25f95fe82aab7b19c10f41cf460ab800749edd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECQAX3V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F%2BZnHkoBS1fURhlAmlNBlIXCkvv%2B0Kzn3N%2FQBmMNsmAiEAsUNw%2BC01CabPddbqDLHEXldP3v2RrhNwsWhOjDv7rvkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX%2BJgTF2SFSEPJCSircAzCayU3uOhjrXe7WR85218gtzPukvoqQ%2F3IytwWBNCAbaJJV57Tj1z4pDPdtL7up9ZboyrqiBSxxgz8KwhgmWKijZQ4nSueFLrjRkgBFAJkibhNG%2B9sgG%2FswYqy1NSikGpp30qjxy%2FMkhfcO0SQ7rx%2B5CAE6zxlFo%2FNrs8OEk4KBej8GjpnMcinP6zdzyp%2BNFLfa9JO%2BfHQLTwtVI9%2Fx3yrzJjOww%2BQrBY4PffDZPhdYe%2F95DUaAEXZcd6%2BZAfXKW7uXfQ6mqXc%2BptjP4H1HkvRuuwjCKgEQaoaH7EWFss6MEUz0HnRgdgYg2EWk2F339X8LpjBQgMSwLOVX5jn%2Fj5JUJhUaAwbFqNO9nsvra0wubtKtFxaz2ss9ycaKuNCapmH7tHaX%2F8PcNV7AfbD8MCUxw8hUAeS76C4JrWFz2YiADa9xZSw6O78vbG%2B9lrFkZcAQ0zZkktYDeOmqhMsLzwskHby%2FlU8mUtpPEpJ7GNWKQ73DYnF2%2B3PvLxlyLSdG7CMlgh3cUikZu2NZlg%2FOT9lUmviVMRRkAqSahmIx1xhsRd37JDQCryWEeJ4OWSIndrhq%2FKCVaWtJ4xIG3hvVVqUaatlZ31FLnUJ8hVfj3hEkeK8643A3%2FaxGb0MJMJPu2ckGOqUB9UktCPKbSIfIQx2HzX%2FMmsgSE1VYDSnra%2FkLfy5cknGbwf8B2thfiwZPw9bJAYlFGo%2FHtIZP4s%2B5JKvCi0uBDM99uSK4Gz23swQ3SyeBvlfSybaXsMiZQrjWKBZnnufhaoWZYCq0YoHmPHbRHBsDdA4s%2BPt7yZ%2BXW5dsBVjwFjIFs6rkG0I5LVhfLx5u5xfzsa23H5EqN1Qgz%2FVYz5okOYfxkNPw&X-Amz-Signature=658a95655c3c83787d6a34c15a9293e8b6bc77c51f5eb8edeb039a2d8478eab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

