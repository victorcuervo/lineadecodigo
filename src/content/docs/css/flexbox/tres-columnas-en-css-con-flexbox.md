---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOECMBBD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI%2FK%2Bmnj7bHosbpGCRti%2BEOvL1GXnl6WDWslOJ6lX0XAiBRoMtssnxJEv5z3OvCz8ZDqn60rYIAgyhW%2FNYNQ6p34SqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcP%2B6oPy%2BeusBMeUdKtwDwkMjQJJ%2B7DHro%2FCvWNtv6r738pzW%2FYS5YOb%2F75JY5W3sNjXLVreqIzgvFhhcLOdY6CoOLZnzZ4L5lFWT1xx2jW3xmLLsEqJxaqYj51hilnb1x%2Fh3eAsi5Fu9yBJRa3vKmYZETK2CBSdajxnDq2yf4Q3lFh4vruQg2rovgGxCNZvmDKfjXEM3ePa0zAyl9%2BquYzU0RUC5o7h7nO5IGSNudtEXWl%2FWUzhI4EY9CRdHn5YA2ANHcOeXFIcDtUtX9XsQGtJ39pZCTtG%2FGk7Uxve6MvNQ1qSoWgkT%2FW7ORg1kC4NOQB8A44DwF%2BrlN%2B35Br07h2uXW1HdoXylADRsHFDT89j4uKmc0zngE6Wku7ffxggZnnK7F9E0hL4RddbhUrtW2XrFtHzFaETBk%2FqXJ6A8VAkJTATjHrTSpvwpJfXSzsjX8pml1ure0sC8n%2B25AMPn4sy39Cr9cieOBQQTiuYxm%2FSfm8QvALV10SjAgDEPn1UBBZ%2FCYPAw7L0SDht%2BSTWeZHmzr6r7OcEXFZAujuE%2BF2JnIaOYEhOhvPi6XzPSIu2c1XzvyZQFQ9N9o8Yw%2BkGs3xAMPMFvOraGYbWENm7aReuHl5iUjZ5xirBQRpRzb0n8KiMNfZH4wpX9DU8wmsLbyQY6pgGgiigurk6cAHL9WiqdqqJV4N3lZ5Cc9GV1oXw%2FxEOOLAjglUrUsg8%2FtnhADJl3KTp%2BHu4MYWuscwapJuF9r1VhGFHTs%2BOI0WH3qCLXmKevkQozwZcK8iEAtpXeNL2%2Fp41UL7mQpGZf3GgnRN8GFJR2nN7l%2Bb3uhThZVrzB0ClDkaKsc2yqARO%2FQcNfJfY124Ttw2SchnLPW1rZ2y6hgPWTXp13jQC4&X-Amz-Signature=23c2f94376413e959ab15f18686c4ec2037ad581aca9de4064926f941d5ad9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOECMBBD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI%2FK%2Bmnj7bHosbpGCRti%2BEOvL1GXnl6WDWslOJ6lX0XAiBRoMtssnxJEv5z3OvCz8ZDqn60rYIAgyhW%2FNYNQ6p34SqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcP%2B6oPy%2BeusBMeUdKtwDwkMjQJJ%2B7DHro%2FCvWNtv6r738pzW%2FYS5YOb%2F75JY5W3sNjXLVreqIzgvFhhcLOdY6CoOLZnzZ4L5lFWT1xx2jW3xmLLsEqJxaqYj51hilnb1x%2Fh3eAsi5Fu9yBJRa3vKmYZETK2CBSdajxnDq2yf4Q3lFh4vruQg2rovgGxCNZvmDKfjXEM3ePa0zAyl9%2BquYzU0RUC5o7h7nO5IGSNudtEXWl%2FWUzhI4EY9CRdHn5YA2ANHcOeXFIcDtUtX9XsQGtJ39pZCTtG%2FGk7Uxve6MvNQ1qSoWgkT%2FW7ORg1kC4NOQB8A44DwF%2BrlN%2B35Br07h2uXW1HdoXylADRsHFDT89j4uKmc0zngE6Wku7ffxggZnnK7F9E0hL4RddbhUrtW2XrFtHzFaETBk%2FqXJ6A8VAkJTATjHrTSpvwpJfXSzsjX8pml1ure0sC8n%2B25AMPn4sy39Cr9cieOBQQTiuYxm%2FSfm8QvALV10SjAgDEPn1UBBZ%2FCYPAw7L0SDht%2BSTWeZHmzr6r7OcEXFZAujuE%2BF2JnIaOYEhOhvPi6XzPSIu2c1XzvyZQFQ9N9o8Yw%2BkGs3xAMPMFvOraGYbWENm7aReuHl5iUjZ5xirBQRpRzb0n8KiMNfZH4wpX9DU8wmsLbyQY6pgGgiigurk6cAHL9WiqdqqJV4N3lZ5Cc9GV1oXw%2FxEOOLAjglUrUsg8%2FtnhADJl3KTp%2BHu4MYWuscwapJuF9r1VhGFHTs%2BOI0WH3qCLXmKevkQozwZcK8iEAtpXeNL2%2Fp41UL7mQpGZf3GgnRN8GFJR2nN7l%2Bb3uhThZVrzB0ClDkaKsc2yqARO%2FQcNfJfY124Ttw2SchnLPW1rZ2y6hgPWTXp13jQC4&X-Amz-Signature=c3c625811b0d680d58702a08378728e5396cdf041f70de7d05afaf73227e3595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

