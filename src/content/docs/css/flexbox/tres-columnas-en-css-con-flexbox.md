---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3I4KB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6i%2FVHZehxomWEEMT4bjkhXdpDcFqfkyT9MFEzMkYnKAIhAPMRjFkJsUrxE1B6Yvpd4oqiKlYEo%2FIJAwDpRWl9CGYhKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX4L38zILJpjG513Uq3AOGyqAMd9cxMqfaXMwUO42ILY5eMs3Hoffh6bOqaP3w%2Fb3zZjOzlNb1h%2Fs6NpjCINF8%2FnPrxyk5D3lbjnVjnxVSbkicfk%2BeDfMZoOMz3cQWpAkzdblGDJeImEXPp61Y4ovzvKlTZBC9nivzAb%2BvmfXb4kunOMpqqs%2BK%2FLtiqQYAONqXVLnvg%2BwP53AQhxTJYryONZr6%2BxwALpmswVlVJ4nO0FU0tl%2FUCfiL32cIOqpVBmxE%2Bdhib6oXbKAGABwmrQ%2Bo%2B%2FEj5YiRWMtuD6UyGTfIKiiQMoI%2FsSt3sOmigRqo5oN6mqiK4mof6LpqTTlPCcZxZFDlxF4umE8CdX%2F8fTJ3M4WtMtJGTKOt5ERTa%2BoIaN5yeR%2BVwwbYqYnpHugYZzIIwSozebkCmKp9iDFYbj3MMjMUK%2F1zmT%2BQWmbygt%2Bz5td46tOX%2BzfS0rRSVybCGxQoT2NrTWpVc60EvW2K8NiCTbD%2Bj6dKzz%2FACcbwmjyYYx3InrO2%2BHpNurTFkepzI3eBztvfm9yOl9gXOVNCIo0QXtnS0j%2B5ic2XWszW6S4fCJGofdYLs77qGL%2FzXi1ZBGrtd%2BA8O5kBE%2BPOIkQvmxhaSS1mCLfWh8577v7oXx1Ol02P0821AQfnfthjTjDGgN3JBjqkAdaJwZZPmCrdZwRX1wL7Yob9OW%2BEJVKrd31TKObJtq%2BoP4ZBgnhyGTgP%2Bw52bJgimRfgi5sRisziKPuVlnVAwSoyB%2F1O58FHLC6IWqJJWdoW%2FaWGqaVmr20n3tgdUrFTDZWbW6clH6nMBIXu50fOn%2FgBbA0x3gJ7MK%2BO5%2BARP1noLWUKbUhVvA9HUlus2tVpp6H6ii2dydVtwPWGjhaGTL5iM9ky&X-Amz-Signature=db3dd1988987015aa7691d3849ad5be8623af06694eda8e63103b37582cab351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3I4KB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6i%2FVHZehxomWEEMT4bjkhXdpDcFqfkyT9MFEzMkYnKAIhAPMRjFkJsUrxE1B6Yvpd4oqiKlYEo%2FIJAwDpRWl9CGYhKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX4L38zILJpjG513Uq3AOGyqAMd9cxMqfaXMwUO42ILY5eMs3Hoffh6bOqaP3w%2Fb3zZjOzlNb1h%2Fs6NpjCINF8%2FnPrxyk5D3lbjnVjnxVSbkicfk%2BeDfMZoOMz3cQWpAkzdblGDJeImEXPp61Y4ovzvKlTZBC9nivzAb%2BvmfXb4kunOMpqqs%2BK%2FLtiqQYAONqXVLnvg%2BwP53AQhxTJYryONZr6%2BxwALpmswVlVJ4nO0FU0tl%2FUCfiL32cIOqpVBmxE%2Bdhib6oXbKAGABwmrQ%2Bo%2B%2FEj5YiRWMtuD6UyGTfIKiiQMoI%2FsSt3sOmigRqo5oN6mqiK4mof6LpqTTlPCcZxZFDlxF4umE8CdX%2F8fTJ3M4WtMtJGTKOt5ERTa%2BoIaN5yeR%2BVwwbYqYnpHugYZzIIwSozebkCmKp9iDFYbj3MMjMUK%2F1zmT%2BQWmbygt%2Bz5td46tOX%2BzfS0rRSVybCGxQoT2NrTWpVc60EvW2K8NiCTbD%2Bj6dKzz%2FACcbwmjyYYx3InrO2%2BHpNurTFkepzI3eBztvfm9yOl9gXOVNCIo0QXtnS0j%2B5ic2XWszW6S4fCJGofdYLs77qGL%2FzXi1ZBGrtd%2BA8O5kBE%2BPOIkQvmxhaSS1mCLfWh8577v7oXx1Ol02P0821AQfnfthjTjDGgN3JBjqkAdaJwZZPmCrdZwRX1wL7Yob9OW%2BEJVKrd31TKObJtq%2BoP4ZBgnhyGTgP%2Bw52bJgimRfgi5sRisziKPuVlnVAwSoyB%2F1O58FHLC6IWqJJWdoW%2FaWGqaVmr20n3tgdUrFTDZWbW6clH6nMBIXu50fOn%2FgBbA0x3gJ7MK%2BO5%2BARP1noLWUKbUhVvA9HUlus2tVpp6H6ii2dydVtwPWGjhaGTL5iM9ky&X-Amz-Signature=7253677ed224e76d6abbc00a8988f273929ddb357c8951309192d65b7a98e56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

