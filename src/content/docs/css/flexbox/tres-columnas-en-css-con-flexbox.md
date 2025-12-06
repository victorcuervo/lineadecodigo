---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW73P4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcr7wiq1EGNuYRkqgPbxFBOs3NvMRVh7BNb4Q7sbhpZwIga%2BHoBvSOEiME41LbGi2lnFHO83Bnp1H5GNQTk%2BjEEdUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCy5Nleu26iFQvHEKSrcA%2FvNsqLlMeU7kX3xKchMRuZZk3ELlowdR8eOgaEmZm9uEJypDxZHEFtSASDbe1ZVw3riPgd5JloduHFt3V4aW0%2BtKFDqdTUXSYTNHd1gPePfCxvnaz2tHWjchNsZGdH%2Fs8AAryNSBf5mNhh1%2BrgD1%2B1XmdHlB9aLax1fCehkOPoiZJtL43vw9CLPcm3bv4t2zg4SdHnubxmCknm%2F63dFVmxbWAW6HWNS3Vo0c9HRckWJx4%2Frn9WLXnpzrI%2B6z9I7jo58W0WEa%2BdzcXcgQ7fDSDxnO9n0vp8Wh%2Fs%2Bb4glXSevu1K8FfnVpeVNRSsG6WhW0cMCLGffkzAlVuJSpXZOBZBeo0TWm0OWXvQL6SGYYtRZx9xphyoTF%2Fwzbue05DfHwjHnCVkWRwrIJ0uihRV6f3aYNyzt5YQDUfXaDR8v6YZaTAUHic0VD3Z0O8SpphbPfkbc3aLbc0F2Qs43L5AzXkFYjQotKQ3H5F1Pdp01oi6jwCyy9mvMVZPYzd7afDh%2B6QwrjPL3vBZw2CoRb2kYoKo2N6iwWcdDaVB598u62fHkRtpZJN2e1KPW8Y8dDdPDrDxdXYLkcKlhuYaOKFdfjHfY2mBVY89pCkcZWypplyD6k%2BJtGa%2F1HF3Ae%2FtyMOa8z8kGOqUB36Byz%2FTEgn0xMpBr15KBsL3Mzr71Bi7qRFrpI9bBxsxQwL7WGZs%2BpIYHNYC74Q41jWNsrWo6LP1t5jbHRMJNKoyzdX8VAvg%2BgJ7fSirrxdHvyXJz%2BksoIN%2B3ZGBg6JYsaoI1k3e7UpecsETWOGYbXLwCHsINwMpYSUQUbw2ASTvfRJCnkjbZfL%2FWaXCh%2FEDF1JNMcZx9fZDUCYlcJBX8%2BnRCE2sk&X-Amz-Signature=c627b1fe6a242de0cbbf699ba6dc31940816c1579d7a3f899c50f58acff39cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW73P4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcr7wiq1EGNuYRkqgPbxFBOs3NvMRVh7BNb4Q7sbhpZwIga%2BHoBvSOEiME41LbGi2lnFHO83Bnp1H5GNQTk%2BjEEdUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCy5Nleu26iFQvHEKSrcA%2FvNsqLlMeU7kX3xKchMRuZZk3ELlowdR8eOgaEmZm9uEJypDxZHEFtSASDbe1ZVw3riPgd5JloduHFt3V4aW0%2BtKFDqdTUXSYTNHd1gPePfCxvnaz2tHWjchNsZGdH%2Fs8AAryNSBf5mNhh1%2BrgD1%2B1XmdHlB9aLax1fCehkOPoiZJtL43vw9CLPcm3bv4t2zg4SdHnubxmCknm%2F63dFVmxbWAW6HWNS3Vo0c9HRckWJx4%2Frn9WLXnpzrI%2B6z9I7jo58W0WEa%2BdzcXcgQ7fDSDxnO9n0vp8Wh%2Fs%2Bb4glXSevu1K8FfnVpeVNRSsG6WhW0cMCLGffkzAlVuJSpXZOBZBeo0TWm0OWXvQL6SGYYtRZx9xphyoTF%2Fwzbue05DfHwjHnCVkWRwrIJ0uihRV6f3aYNyzt5YQDUfXaDR8v6YZaTAUHic0VD3Z0O8SpphbPfkbc3aLbc0F2Qs43L5AzXkFYjQotKQ3H5F1Pdp01oi6jwCyy9mvMVZPYzd7afDh%2B6QwrjPL3vBZw2CoRb2kYoKo2N6iwWcdDaVB598u62fHkRtpZJN2e1KPW8Y8dDdPDrDxdXYLkcKlhuYaOKFdfjHfY2mBVY89pCkcZWypplyD6k%2BJtGa%2F1HF3Ae%2FtyMOa8z8kGOqUB36Byz%2FTEgn0xMpBr15KBsL3Mzr71Bi7qRFrpI9bBxsxQwL7WGZs%2BpIYHNYC74Q41jWNsrWo6LP1t5jbHRMJNKoyzdX8VAvg%2BgJ7fSirrxdHvyXJz%2BksoIN%2B3ZGBg6JYsaoI1k3e7UpecsETWOGYbXLwCHsINwMpYSUQUbw2ASTvfRJCnkjbZfL%2FWaXCh%2FEDF1JNMcZx9fZDUCYlcJBX8%2BnRCE2sk&X-Amz-Signature=d9fb4e702f8dc29e15125b8688710f4884ab18a4e98910471814c009d35d187e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

