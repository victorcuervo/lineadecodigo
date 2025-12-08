---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7552X5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVr42DH%2Fni8b3CvYqB%2BSo6nYxZBGoE%2Br3gOYob8MzxAIhAOSXhQ2a5Tj3xW8xvE3h9s2E%2B%2F1kMcMTqvmeQ%2FH8Et4xKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDmwRFWWWala%2BykAYq3AO9sERutivKTTe8vuLi3qak%2BbVQIFU0woE8JyvVgajm4inJjiBzX3946XVBSqDhM4qyfzNo9dYme7iJMcUanqRfxcE%2B2pZhF%2BswJbCKSr90E92o6Gu1h4QJdtvOvmE%2FPeOtKXgbol7Oc8CjMSqxwNOSXVSyImxgV32q7QN7VzCnEX8CfZFkf8ozVbXazigtXIb3ePY0BR8xqY7cyrsjQF2dDNKFHwOq%2FiEb5Dev%2FT4YF8KRFvLTWYc6lENqG1FIIP6U8CPwv5%2BMZi1bpWgDsl2QIO8uQtkl3n17jzxD5qO%2B96DzT%2FWyl0lXgxxcxuHBduSQ%2BRVMA6gJZ3vRPw4rqHmdSsiyJCoEMDkfCpnFpaVUZudjZx7Qw8QxEB8vwdSWKDg%2Fn9dID%2BNCzUpZzxlGA06HVXFzYyfxjFMTuvHuC%2B6KTu%2B9K2dccCWyJXvCyXPCm4YeIAEcKQ1RjX6WLDbBCXHpr1kH9wlr3UkFIla50JJaPhMXs48O1im8QNFNpi%2FuHUomQ6NXOINd%2FbiOGViMGqEhnrhXgs%2Fd8%2BVNqohKQR0rMIZqKNzeHTtol2M8Gu87zpP79e0AugoU%2FOv5g7A8IN5BpIErVvqhiaCuiywHqkTj54J%2B7r%2FiWZPxyrYmaDDt7dnJBjqkAVrcYS8v9mX8FtrF5BuD2fstI4NH%2BmChTha4HZI1ICfQ5iGvlZs6ahG4LEuMD991tH%2FRQjrAdUsdJAmNbGY%2FHQkUb9rm5vfQtZce%2BieSgiFl10F2SZv5vpjRQ3hPEuYNJJCKET%2FzdpPx6L%2F%2BV6ZzD3MhUbRdXziz%2FEb1V1%2BtuE6Nb88TqioHb4gUMDqR0N8RWDzYYIbvwjGSV%2Bly8HAHbpwmVzwy&X-Amz-Signature=c5a7ffc5296f074c92d623779e5378e8f34bd983f1a404c0136bb099fc24e70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7552X5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVr42DH%2Fni8b3CvYqB%2BSo6nYxZBGoE%2Br3gOYob8MzxAIhAOSXhQ2a5Tj3xW8xvE3h9s2E%2B%2F1kMcMTqvmeQ%2FH8Et4xKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDmwRFWWWala%2BykAYq3AO9sERutivKTTe8vuLi3qak%2BbVQIFU0woE8JyvVgajm4inJjiBzX3946XVBSqDhM4qyfzNo9dYme7iJMcUanqRfxcE%2B2pZhF%2BswJbCKSr90E92o6Gu1h4QJdtvOvmE%2FPeOtKXgbol7Oc8CjMSqxwNOSXVSyImxgV32q7QN7VzCnEX8CfZFkf8ozVbXazigtXIb3ePY0BR8xqY7cyrsjQF2dDNKFHwOq%2FiEb5Dev%2FT4YF8KRFvLTWYc6lENqG1FIIP6U8CPwv5%2BMZi1bpWgDsl2QIO8uQtkl3n17jzxD5qO%2B96DzT%2FWyl0lXgxxcxuHBduSQ%2BRVMA6gJZ3vRPw4rqHmdSsiyJCoEMDkfCpnFpaVUZudjZx7Qw8QxEB8vwdSWKDg%2Fn9dID%2BNCzUpZzxlGA06HVXFzYyfxjFMTuvHuC%2B6KTu%2B9K2dccCWyJXvCyXPCm4YeIAEcKQ1RjX6WLDbBCXHpr1kH9wlr3UkFIla50JJaPhMXs48O1im8QNFNpi%2FuHUomQ6NXOINd%2FbiOGViMGqEhnrhXgs%2Fd8%2BVNqohKQR0rMIZqKNzeHTtol2M8Gu87zpP79e0AugoU%2FOv5g7A8IN5BpIErVvqhiaCuiywHqkTj54J%2B7r%2FiWZPxyrYmaDDt7dnJBjqkAVrcYS8v9mX8FtrF5BuD2fstI4NH%2BmChTha4HZI1ICfQ5iGvlZs6ahG4LEuMD991tH%2FRQjrAdUsdJAmNbGY%2FHQkUb9rm5vfQtZce%2BieSgiFl10F2SZv5vpjRQ3hPEuYNJJCKET%2FzdpPx6L%2F%2BV6ZzD3MhUbRdXziz%2FEb1V1%2BtuE6Nb88TqioHb4gUMDqR0N8RWDzYYIbvwjGSV%2Bly8HAHbpwmVzwy&X-Amz-Signature=25c98ceefeb0f78a8d467797c8bcce90b877a5dcf2e1a50a9ca969a269082d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

