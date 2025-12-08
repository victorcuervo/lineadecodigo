---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WULDWLU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FyZGojLkO%2Br6Bb9Cs1zbnjjofFDCS4N1Wz%2FamiKsMwAIhAN9bNspTj9csqPp8%2BpbqvOIsrDAWwlzZ2E%2Fl8HQ1KA0AKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxcp9QBgDrEHy81IJwq3AN7u2h6OJ3LKsgz38a%2FyD3DShO5o2KDBnci1zPpPmAvKg6CyOw3QGTAXzNQFD%2BdHoyWYUlv9yk2laf2e%2BT3uPBKHi3cc8kWFfi89s8E2XaZRhp9JQw9FJQz9A26AtKgWfe1dJB%2BeUV%2BKIDcLk4M5FhWKoNFKyAz%2FTA1E78vjI4aRadSA6Ip%2BIpnY6%2F0GNwC5FCHAF6VLGdeTnKmXzVCrScqPkrjwBgZSlFH3WQGiUEnRg%2FGkKVkDaoTE%2BknCAb75Nz6Sltj8tnHjfOfkXYYa%2FJVk62wi5MAU5KzbAHnthK3HmBgU%2FzKfrYirOVTeY1huiUZZGA5Mh66eX5FPRK7uz6pCNNaIPneaZljDielkANP%2FURyR1FeIxXtFItIYW7zzfLtzdvDArS4xrlXCtAPibtQE4uWbUrXHF8LfFLmmf4nOjCR9MbuSIo1bu%2FcNk0RNPmFNSQRWRDlYX%2F5rqF0VviJdtdhBZc%2BFjuQyGWju6COAGg17IGRfDx9ne%2BL0FxG%2BRUYpehT5zmCHTmRr0zfV7shFNn1xnAS2dWbFoTXIDxDYSieyTSMzwJ%2BIcQzQEaB2emP6F0dlEt%2BlnBW9G3gZXBzVM%2BCqvFG%2FeTNRR%2FPS6YYMSDANFu%2FqQGkWUtRPjC2s9zJBjqkAcpsdkLwnSXu7MSWxOiJCQARAmzj4NA5fsx2wwa%2BbILEU7nvOs05qR4ZgBMnTUtdNnPKhQhl4JA53uvd8nU3IkQVcfGF9XipxSKhYAhOClUyWP7HVeo8%2BXqf4BkZ84y1axvrQuJzpT88BDiEjZP8gmLbIvr2J9NIiqePYbf62f2vc38ugMVw2AkaNLkt4FTfBWmxucR%2FfrMXIBCrGJAsaoyJlxGx&X-Amz-Signature=92bd687d4c6b7476bc66f5769dd31f9347d6a56e555186507f3f5f7d2bcabb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WULDWLU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FyZGojLkO%2Br6Bb9Cs1zbnjjofFDCS4N1Wz%2FamiKsMwAIhAN9bNspTj9csqPp8%2BpbqvOIsrDAWwlzZ2E%2Fl8HQ1KA0AKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxcp9QBgDrEHy81IJwq3AN7u2h6OJ3LKsgz38a%2FyD3DShO5o2KDBnci1zPpPmAvKg6CyOw3QGTAXzNQFD%2BdHoyWYUlv9yk2laf2e%2BT3uPBKHi3cc8kWFfi89s8E2XaZRhp9JQw9FJQz9A26AtKgWfe1dJB%2BeUV%2BKIDcLk4M5FhWKoNFKyAz%2FTA1E78vjI4aRadSA6Ip%2BIpnY6%2F0GNwC5FCHAF6VLGdeTnKmXzVCrScqPkrjwBgZSlFH3WQGiUEnRg%2FGkKVkDaoTE%2BknCAb75Nz6Sltj8tnHjfOfkXYYa%2FJVk62wi5MAU5KzbAHnthK3HmBgU%2FzKfrYirOVTeY1huiUZZGA5Mh66eX5FPRK7uz6pCNNaIPneaZljDielkANP%2FURyR1FeIxXtFItIYW7zzfLtzdvDArS4xrlXCtAPibtQE4uWbUrXHF8LfFLmmf4nOjCR9MbuSIo1bu%2FcNk0RNPmFNSQRWRDlYX%2F5rqF0VviJdtdhBZc%2BFjuQyGWju6COAGg17IGRfDx9ne%2BL0FxG%2BRUYpehT5zmCHTmRr0zfV7shFNn1xnAS2dWbFoTXIDxDYSieyTSMzwJ%2BIcQzQEaB2emP6F0dlEt%2BlnBW9G3gZXBzVM%2BCqvFG%2FeTNRR%2FPS6YYMSDANFu%2FqQGkWUtRPjC2s9zJBjqkAcpsdkLwnSXu7MSWxOiJCQARAmzj4NA5fsx2wwa%2BbILEU7nvOs05qR4ZgBMnTUtdNnPKhQhl4JA53uvd8nU3IkQVcfGF9XipxSKhYAhOClUyWP7HVeo8%2BXqf4BkZ84y1axvrQuJzpT88BDiEjZP8gmLbIvr2J9NIiqePYbf62f2vc38ugMVw2AkaNLkt4FTfBWmxucR%2FfrMXIBCrGJAsaoyJlxGx&X-Amz-Signature=cbaf8bacf3046c298a5af90f0eab0a2ec662d3da4596002fcb0596d619192b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

