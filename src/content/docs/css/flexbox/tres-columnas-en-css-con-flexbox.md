---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUFRJ7S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgqFBqOiPzByExMPPgSJsBXNkvHcuX8MbDs9QlkKLYBAIhANytD%2BgcprpzDvsPA1WhPYrtznDvVJkDGc4U%2B1aw6MoDKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBQrbDG21HFAlK3DUq3AMt2hQp6EwNg%2BT4PNArEvlDWgpjRmJ%2FeTkr5MMjBV5E30G5WtQR2nm7dZEvV9m6N2kh280O2XQtjlJMZEoVLn3ZvG8nEtJ5PjEgNDaqHR6WXAkf7h%2FKfkB60jQZJATnmCN%2F88TuCU1okTnUIzZcIrfEw2G4WYZvXKjzDVcdR9aABqI1%2B4V5v5AFwUofhnhEGEVivkaLPMtwbaxNu5%2FomUboX9oZc2hGwqFs4nq3tpic5pr3uvXAV6lzIlIzDTP%2BG9SEYGPIkNjcyMQDbyi4WAWHjOcO7%2Fb1kUaFbS3hiPhknP5%2Fy05mb8yVCi6uvaHt92%2BKAS2b5M%2BjFeDks%2BEDBaCU9hqz%2BJzRb0cptn3qBjCYmgradHb8B0SnkVdRcPPOkjSmu1%2F3721G1Z%2F3VMev1In%2FgAq0GjEKrUGZWXiumJjL%2BKm4ZcsbYSvUDNPCsVfQhrFbTI0mg59QgoFdgf5Xt3sxSDAyyM95iRrmtXbyAwVRJ%2FHs8objlHh4dYvn7jSQ%2BnL0usWr7fWwK49WLgZvALr881u%2By3tRtiADcIWBm7QIDYbXtIJiGMFOyJWEgE0opDL5ewoNLfHJsa2QO2afnd1EyJU1QkZfIvUISqQb7uXykn%2B%2BteNQzG%2BkSPTkDzDAx9fJBjqkAb1kW2YNxsxJD6y4yiW4vLznX1%2B%2FS8ridRan459%2Bes%2F0Uv%2Fy%2Fx1DCajeFX6anulD%2FCGWOkKydiYXz7pLLBkMjFjhOE69IP9z%2FT1KL8duruH8FJKGdJWRNx1cDz1agHCzXQrXXo8rdj5xpEOmZjx031Vr9wXR%2F0wnYCmnTnsKDO9GJo6AxO3ZBIrf8SoNIKYkqHjdCCRK970CFO9IUhgctm5p3pKA&X-Amz-Signature=4f23f9b56fe317ad1d24d9f126675688d38e986e9e5a0731f1ca6fac9b7bf284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUFRJ7S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgqFBqOiPzByExMPPgSJsBXNkvHcuX8MbDs9QlkKLYBAIhANytD%2BgcprpzDvsPA1WhPYrtznDvVJkDGc4U%2B1aw6MoDKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBQrbDG21HFAlK3DUq3AMt2hQp6EwNg%2BT4PNArEvlDWgpjRmJ%2FeTkr5MMjBV5E30G5WtQR2nm7dZEvV9m6N2kh280O2XQtjlJMZEoVLn3ZvG8nEtJ5PjEgNDaqHR6WXAkf7h%2FKfkB60jQZJATnmCN%2F88TuCU1okTnUIzZcIrfEw2G4WYZvXKjzDVcdR9aABqI1%2B4V5v5AFwUofhnhEGEVivkaLPMtwbaxNu5%2FomUboX9oZc2hGwqFs4nq3tpic5pr3uvXAV6lzIlIzDTP%2BG9SEYGPIkNjcyMQDbyi4WAWHjOcO7%2Fb1kUaFbS3hiPhknP5%2Fy05mb8yVCi6uvaHt92%2BKAS2b5M%2BjFeDks%2BEDBaCU9hqz%2BJzRb0cptn3qBjCYmgradHb8B0SnkVdRcPPOkjSmu1%2F3721G1Z%2F3VMev1In%2FgAq0GjEKrUGZWXiumJjL%2BKm4ZcsbYSvUDNPCsVfQhrFbTI0mg59QgoFdgf5Xt3sxSDAyyM95iRrmtXbyAwVRJ%2FHs8objlHh4dYvn7jSQ%2BnL0usWr7fWwK49WLgZvALr881u%2By3tRtiADcIWBm7QIDYbXtIJiGMFOyJWEgE0opDL5ewoNLfHJsa2QO2afnd1EyJU1QkZfIvUISqQb7uXykn%2B%2BteNQzG%2BkSPTkDzDAx9fJBjqkAb1kW2YNxsxJD6y4yiW4vLznX1%2B%2FS8ridRan459%2Bes%2F0Uv%2Fy%2Fx1DCajeFX6anulD%2FCGWOkKydiYXz7pLLBkMjFjhOE69IP9z%2FT1KL8duruH8FJKGdJWRNx1cDz1agHCzXQrXXo8rdj5xpEOmZjx031Vr9wXR%2F0wnYCmnTnsKDO9GJo6AxO3ZBIrf8SoNIKYkqHjdCCRK970CFO9IUhgctm5p3pKA&X-Amz-Signature=b9add55e24610470c2041876a0f6878fc467c7827f455b353bc15de398ef6714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

