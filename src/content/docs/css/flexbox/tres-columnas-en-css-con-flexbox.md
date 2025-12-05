---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOA6W77J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLE3kPt5ezbfmT2l66ZpFO7kRDArfMp6jC3Ac6MfNMAAiA3i2gawrSmx0weLUNGWh6xwMP9aJfWtdx7hwg7sqGBESr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMIHPdImSGdkRdBEN8KtwDO4hcU8PibJmvVQvPUQc3GRqPFxVTfge9qmedLlPoC83KBs96CIKdxSvNR%2BQC3v%2BaGmdO0Yf%2FWM8t0nb42VRmRam02Mn%2FuQ8SI39V5pe0mx74bixDJv6m5mgGaF%2FwMXSREBO1AXjj37LhHqEP%2BMt%2BthY%2BLMsa1OEwF7FwgFxj9yF9rK3R5myeUfxvbCwzKwqDH7e87T8Dv6oXpqLdtAANKEoP63YZzFuBromcC5LcEacVL281gkWgwB%2BrbYbwmmGiXQxi4INEGy4%2BP5XQ2TSO0gPfcLvOfMi5NsWi9Lvnvyzd6R0pQw2%2FsTf3n9NnUKn9NTK1KimvVSr74M9Mbpr8Rb4tjrPIxG%2FollxJ2L4MVPNox5LcgSeD4of2BxLPkHw73ApEltofKd8eRmfyam3FPz9YU%2BswSpHE9E5tCaU3C6FenzU2UML%2BeuZKcrmpyS7C72OmcQVFz%2BkiVtjis0u6XDeT2ITWLJaoepPXAspe5Qw22WS8arupUuYZDe7bVsGOvJ9qvFf0%2FMloLzNMlvuK4ooCXSzjr5rEdNdy5U9jtNh8uacRMtqJDy6scziWLEbUo68UrpdAvKSMwsdqVfpgodVcRBJtAYvLQ3%2Bmc%2BUkANPdeYEPw75%2FzwhL4RwwlMbNyQY6pgFcnMuErm7zLlKNhaSCS8zUsu3FEIGWHk7NqAuFGv2rkG1ohI4IL8fjzEpzccvPE2Q8SUnIF2v1sJGafkChM6S%2BBxlyuTLofEs3XRKqQsGQnQgZBd5mBwP38K3B7re78p2mV7luuukROHWGXkHRQ2lwdY6cuTcKalBE7lnz3SK%2Fa5PokTkMnQ1PMuXtrYAdyhn1e9D6z8gzw7X7r70LpzRA64SFT8IX&X-Amz-Signature=059228df78b5f6976d609af55f1df1a7697c3d46c08bb995fe6ce995df9ed502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOA6W77J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLE3kPt5ezbfmT2l66ZpFO7kRDArfMp6jC3Ac6MfNMAAiA3i2gawrSmx0weLUNGWh6xwMP9aJfWtdx7hwg7sqGBESr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMIHPdImSGdkRdBEN8KtwDO4hcU8PibJmvVQvPUQc3GRqPFxVTfge9qmedLlPoC83KBs96CIKdxSvNR%2BQC3v%2BaGmdO0Yf%2FWM8t0nb42VRmRam02Mn%2FuQ8SI39V5pe0mx74bixDJv6m5mgGaF%2FwMXSREBO1AXjj37LhHqEP%2BMt%2BthY%2BLMsa1OEwF7FwgFxj9yF9rK3R5myeUfxvbCwzKwqDH7e87T8Dv6oXpqLdtAANKEoP63YZzFuBromcC5LcEacVL281gkWgwB%2BrbYbwmmGiXQxi4INEGy4%2BP5XQ2TSO0gPfcLvOfMi5NsWi9Lvnvyzd6R0pQw2%2FsTf3n9NnUKn9NTK1KimvVSr74M9Mbpr8Rb4tjrPIxG%2FollxJ2L4MVPNox5LcgSeD4of2BxLPkHw73ApEltofKd8eRmfyam3FPz9YU%2BswSpHE9E5tCaU3C6FenzU2UML%2BeuZKcrmpyS7C72OmcQVFz%2BkiVtjis0u6XDeT2ITWLJaoepPXAspe5Qw22WS8arupUuYZDe7bVsGOvJ9qvFf0%2FMloLzNMlvuK4ooCXSzjr5rEdNdy5U9jtNh8uacRMtqJDy6scziWLEbUo68UrpdAvKSMwsdqVfpgodVcRBJtAYvLQ3%2Bmc%2BUkANPdeYEPw75%2FzwhL4RwwlMbNyQY6pgFcnMuErm7zLlKNhaSCS8zUsu3FEIGWHk7NqAuFGv2rkG1ohI4IL8fjzEpzccvPE2Q8SUnIF2v1sJGafkChM6S%2BBxlyuTLofEs3XRKqQsGQnQgZBd5mBwP38K3B7re78p2mV7luuukROHWGXkHRQ2lwdY6cuTcKalBE7lnz3SK%2Fa5PokTkMnQ1PMuXtrYAdyhn1e9D6z8gzw7X7r70LpzRA64SFT8IX&X-Amz-Signature=f4d82311278de6caea82618948cfa59b97a0746c67cf502f28d697c52cea61af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

